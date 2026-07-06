import { useEffect } from "react";

export default function useTextShuffle(ref, options) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const loadTimer = 50;
    const textTimer = 28;
    const numberTimer = 65;
    const loadChangeCap = 36;
    const textChangeCap = 14;
    const numberChangeCap = 32;
    let intervalId = null;
    let settleTimeoutId = null;
    let initialFrameId = null;
    let currentMode = null;
    let lastScrollY = window.scrollY;

    const randomDigit = () => Math.floor(Math.random() * 10);
    const selectIndex = max => Math.floor(Math.random() * max);

    const setupSpans = (mode, changeCap) => {
      const numbers = el.dataset.initial || "";
      const text = el.dataset.target || "";

      el.classList.toggle("is-number-mode", mode === "numbers");

      const targetString = mode === "text" ? text : numbers;
      const initialString = mode === "text" ? numbers : text;

      el.innerHTML = "";

      for (let i = 0; i < targetString.length; i++) {
        const targetChar = targetString[i];
        const initialChar = initialString[i] ?? randomDigit().toString();

        const span = document.createElement("span");
        span.classList.add("ltr");

        if (targetChar !== " ") {
          span.classList.add("nbr");
          span.dataset.change = Math.round(Math.random() * changeCap).toString();
          span.dataset.target = targetChar;
          span.dataset.number = "0";
          span.textContent = /\d/.test(initialChar)
            ? initialChar
            : randomDigit().toString();
        } else {
          span.textContent = " ";
        }

        el.appendChild(span);
      }
    };

    const tick = () => {
      const activeSpans = Array.from(el.querySelectorAll(".nbr"));
      if (!activeSpans.length) {
        clearInterval(intervalId);
        intervalId = null;
        return;
      }

      activeSpans.forEach((span) => {
        const currentNumber = parseInt(span.dataset.number || "0", 10) + 1;
        span.dataset.number = currentNumber.toString();
        const threshold = parseInt(span.dataset.change || "0", 10);

        if (currentNumber > threshold) {
          span.textContent = span.dataset.target || "";
          span.classList.remove("nbr");
        }
      });

      const remaining = Array.from(el.querySelectorAll(".nbr"));
      if (!remaining.length) {
        clearInterval(intervalId);
        intervalId = null;
        return;
      }

      const selected = remaining[selectIndex(remaining.length)];
      selected.textContent = randomDigit();
    };

    const startShuffle = (mode, speed, changeCap) => {
      if (mode === currentMode) return;

      if (intervalId) clearInterval(intervalId);
      if (settleTimeoutId) clearTimeout(settleTimeoutId);

      currentMode = mode;
      setupSpans(mode, changeCap);
      intervalId = setInterval(() => tick(speed), speed);
      settleTimeoutId = setTimeout(() => {
        el.querySelectorAll(".nbr").forEach((span) => {
          span.textContent = span.dataset.target || "";
          span.classList.remove("nbr");
        });

        if (intervalId) {
          clearInterval(intervalId);
          intervalId = null;
        }

        settleTimeoutId = null;
      }, speed * (changeCap + 2));
    };

    const getViewportScrollMode = () => {
      const triggerElement =
        (options?.triggerSelector &&
          el.closest(options.triggerSelector)) ||
        el.closest(".stable-lockup") ||
        el;
      const rect = triggerElement.getBoundingClientRect();
      const triggerLine =
        window.innerHeight * (options?.triggerPoint ?? 0.55);

      return rect.top <= triggerLine ? "numbers" : "text";
    };

    // Run the reveal on load unless this element should wait for its scroll trigger.
    if (options?.animateOnLoad === false) {
      currentMode = "text";
      el.classList.remove("is-number-mode");
      const targetText = el.dataset.target || "";

      if (el.textContent !== targetText) {
        el.textContent = targetText;
      }

      if (options?.viewportOnly) {
        initialFrameId = requestAnimationFrame(() => {
          if (getViewportScrollMode() === "numbers") {
            startShuffle("numbers", numberTimer, numberChangeCap);
          }
        });
      }
    } else {
      startShuffle("text", loadTimer, loadChangeCap);
    }

    // scroll listener
    const onWheel = (e) => {
      if (options?.viewportOnly) return;

      if (e.deltaY < 0) startShuffle("text", textTimer, textChangeCap);
      else if (e.deltaY > 0) {
        startShuffle("numbers", numberTimer, numberChangeCap);
      }
    };

    const onScroll = () => {
      const nextScrollY = window.scrollY;
      const delta = nextScrollY - lastScrollY;

      if (Math.abs(delta) > 1) {
        if (options?.viewportOnly) {
          const mode = getViewportScrollMode();

          if (mode === "numbers") {
            startShuffle("numbers", numberTimer, numberChangeCap);
          } else {
            startShuffle("text", textTimer, textChangeCap);
          }
        } else if (delta > 0) {
          startShuffle("numbers", numberTimer, numberChangeCap);
        } else {
          startShuffle("text", textTimer, textChangeCap);
        }

        lastScrollY = nextScrollY;
      }
    };

    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("scroll", onScroll);
      if (intervalId) clearInterval(intervalId);
      if (settleTimeoutId) clearTimeout(settleTimeoutId);
      if (initialFrameId) cancelAnimationFrame(initialFrameId);
    };
  }, [
    ref,
    options?.viewportOnly,
    options?.triggerSelector,
    options?.triggerPoint,
    options?.animateOnLoad,
  ]);
}
