import { useEffect, useRef } from "react";
import handImage from "../assets/yertg 1.webp";
import SoulGrid from "./SoulGrid";
import useTextShuffle from "../Utils/useTextShuffle";

function removeNearBlackPixels(imageData, threshold = 25) {
  const data = imageData.data;

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];

    if (r < threshold && g < threshold && b < threshold) {
      data[i + 3] = 0;
    }
  }

  return imageData;
}

export default function ImageGlitch() {
  const canvasRef = useRef(null);
  const sceneRef = useRef(null);
  const imageRef = useRef(null);
  const processedRef = useRef(null);
  const animationRef = useRef(null);
  const lastRectRef = useRef({ x: -1, y: -1, w: -1, h: -1 });
  const stableRef = useRef(null);
  const omniRef = useRef(null);
  const universalRef = useRef(null);
  const learnerRef = useRef(null);

  useTextShuffle(stableRef, {
    viewportOnly: true,
    triggerSelector: ".soul-lockup",
    animateOnLoad: false,
    triggerPoint: 0.3,
  });
  useTextShuffle(omniRef, {
    viewportOnly: true,
    triggerSelector: ".soul-lockup",
    animateOnLoad: false,
    triggerPoint: 0.3,
  });
  useTextShuffle(universalRef, {
    viewportOnly: true,
    triggerSelector: ".soul-lockup",
    animateOnLoad: false,
    triggerPoint: 0.3,
  });
  useTextShuffle(learnerRef, {
    viewportOnly: true,
    triggerSelector: ".soul-lockup",
    animateOnLoad: false,
    triggerPoint: 0.3,
  });

  const setImageVars = (x, y, w, h) => {
    const el = sceneRef.current;
    if (!el) return;

    const last = lastRectRef.current;
    const same =
      Math.abs(last.x - x) < 0.5 &&
      Math.abs(last.y - y) < 0.5 &&
      Math.abs(last.w - w) < 0.5 &&
      Math.abs(last.h - h) < 0.5;

    if (same) return;

    lastRectRef.current = { x, y, w, h };
    el.style.setProperty("--img-x", `${x}px`);
    el.style.setProperty("--img-y", `${y}px`);
    el.style.setProperty("--img-w", `${w}px`);
    el.style.setProperty("--img-h", `${h}px`);
    el.style.setProperty("--img-ready", "1");
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const ctx = canvas.getContext("2d");
    if (!ctx) return undefined;

    const img = new Image();
    img.src = handImage;

    const updateCanvasSize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = Math.floor(rect.width);
      canvas.height = Math.floor(rect.height);
    };

    const drawBaseImage = () => {
      const base = processedRef.current || imageRef.current;
      if (!base) return;

      const cw = canvas.width;
      const ch = canvas.height;
      const screenAspectRatio = cw / ch;
      const imageAspectRatio = base.width / base.height;

      let scale;
      if (screenAspectRatio > imageAspectRatio) {
        scale = cw / base.width;
      } else {
        scale = Math.min(cw / base.width, ch / base.height);
      }

      const w = base.width * scale;
      const h = base.height * scale;
      const x = (cw - w) / 2;
      const y = (ch - h) / 2;

      setImageVars(x, y, w, h);
      ctx.drawImage(base, x, y, w, h);
    };

    const drawScene = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawBaseImage();
    };

    const scheduleDraw = () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);

      animationRef.current = requestAnimationFrame(() => {
        animationRef.current = null;
        updateCanvasSize();
        drawScene();
      });
    };

    img.onload = () => {
      imageRef.current = img;

      const off = document.createElement("canvas");
      off.width = img.width;
      off.height = img.height;

      const offCtx = off.getContext("2d");
      offCtx.drawImage(img, 0, 0);

      const imageData = offCtx.getImageData(0, 0, off.width, off.height);
      offCtx.putImageData(removeNearBlackPixels(imageData, 25), 0, 0);
      processedRef.current = off;

      updateCanvasSize();
      drawScene();
    };

    window.addEventListener("resize", scheduleDraw, { passive: true });

    return () => {
      window.removeEventListener("resize", scheduleDraw);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  const leftTextX = "calc(var(--img-x, 0px) + (var(--img-w, 0px) * var(--glitch-left-x, 0.105)))";
  const leftTextY = "calc(var(--img-y, 0px) + (var(--img-h, 0px) * var(--glitch-left-y, 0.18)))";
  const leftTextW = "calc(var(--img-w, 0px) * var(--glitch-left-w, 0.34))";

  const rightTextX = "calc(var(--img-x, 0px) + (var(--img-w, 0px) * var(--glitch-right-x, 0.72)))";
  const rightTextY = "calc(var(--img-y, 0px) + (var(--img-h, 0px) * var(--glitch-right-y, 0.53)))";
  const rightTextW = "calc(var(--img-w, 0px) * var(--glitch-right-w, 0.22))";

  const titleFs = "calc(var(--glitch-text-scale, 1) * clamp(9px, calc(var(--img-w, 0px) * 0.0104), 12px))";
  const metaFs = "calc(var(--glitch-text-scale, 1) * clamp(8px, calc(var(--img-w, 0px) * 0.0085), 10px))";
  const blockGap = "calc(var(--glitch-text-scale, 1) * clamp(8px, calc(var(--img-w, 0px) * 0.010), 14px))";
  const metaGap = "calc(var(--glitch-text-scale, 1) * clamp(2px, calc(var(--img-w, 0px) * 0.004), 6px))";

  const titleStyle = {
    fontSize: titleFs,
    letterSpacing: "0.02em",
    lineHeight: "var(--glitch-text-line, 1.2)",
  };

  const metaStyle = {
    fontSize: metaFs,
    opacity: 0.75,
    marginTop: metaGap,
  };

  return (
    <div ref={sceneRef} className="w-full h-full relative bg-black flex items-center justify-center glitch-root">
      <style>{`
        .glitch-root {
          --glitch-text-scale: 1;
          --glitch-text-line: 1.2;
          --glitch-left-x: 0.065;
          --glitch-left-y: 0.34;
          --glitch-left-w: 0.34;
          --glitch-right-x: 0.8;
          --glitch-right-y: 0.5;
          --glitch-right-w: 0.22;
        }

        .glitch-text-connector {
          position: absolute;
          z-index: 24;
          width: 1px;
          overflow: hidden;
          opacity: calc(var(--img-ready, 0) * 0.82);
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.08) 0%,
            rgba(255, 255, 255, 0.76) 12%,
            rgba(255, 255, 255, 0.72) 86%,
            rgba(255, 255, 255, 0.06) 100%
          );
          pointer-events: none;
        }

        .glitch-text-connector::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            transparent 0%,
            rgba(255, 255, 255, 0.28) 30%,
            #ffffff 50%,
            rgba(227, 228, 27, 0.35) 70%,
            transparent 100%
          );
          transform: translateY(-110%);
          animation: glitchConnectorRun 2.8s linear infinite;
        }

        .glitch-text-connector-left {
          left: calc(var(--img-x, 0px) + var(--img-w, 0px) * 0.084);
          top: calc(var(--img-y, 0px) + var(--img-h, 0px) * 0.492);
          height: calc(var(--img-h, 0px) * 0.138);
        }

        .glitch-text-connector-right {
          left: calc(var(--img-x, 0px) + var(--img-w, 0px) * 0.848);
          top: calc(var(--img-y, 0px) + var(--img-h, 0px) * 0.337);
          height: calc(var(--img-h, 0px) * 0.143);
        }

        .glitch-text-connector-right::after {
          animation-delay: 0.72s;
        }

        .soul-lockup {
          position: absolute;
          z-index: 30;
          left: calc(var(--img-x, 0px) + var(--img-w, 0px) * 0.26);
          top: calc(var(--img-y, 0px) + var(--img-h, 0px) * 0.635);
          display: inline-flex;
          width: max-content;
          flex-direction: column;
          align-items: center;
          opacity: var(--img-ready, 0);
        }

        .soul-lockup-subtitle {
          display: flex;
          align-items: baseline;
          justify-content: center;
          gap: 0.72em;
          width: 100%;
          margin-top: clamp(6px, calc(var(--img-w, 0px) * 0.009), 16px);
          font-family: "Azonix", sans-serif;
          font-size: clamp(10px, calc(var(--img-w, 0px) * 0.0185), 32px);
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          letter-spacing: 0.13em;
          text-align: center;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .soul-subtitle-pair {
          display: inline-flex;
          align-items: baseline;
          gap: 0.34em;
        }

        .soul-shuffle-token {
          display: inline-block;
        }

        .soul-shuffle-token.is-number-mode {
          font-size: 0.32em;
          line-height: 1;
          letter-spacing: 0.015em;
        }

        .soul-stable-omni {
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.42) 0%,
            rgba(255, 255, 255, 0.68) 24.04%,
            #fff 50.48%
          );
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          -webkit-text-fill-color: transparent;
        }

        .soul-universal-learner {
          background: linear-gradient(
            90deg,
            #858900 0%,
            #b7c400 14.42%,
            #eaff00 27.88%,
            #fff 100%
          );
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          -webkit-text-fill-color: transparent;
        }

        @keyframes glitchConnectorRun {
          0% {
            transform: translateY(-110%);
            opacity: 0;
          }
          16%, 84% {
            opacity: 1;
          }
          100% {
            transform: translateY(110%);
            opacity: 0;
          }
        }

        @media (max-width: 1200px) {
          .glitch-root { --glitch-text-scale: 0.95; }
        }

        @media (max-width: 992px) {
          .glitch-root { --glitch-text-scale: 0.9; }
        }

        @media (max-width: 768px) {
          .glitch-root { --glitch-text-scale: 0.85; }
        }

        @media (max-width: 560px) {
          .glitch-root { --glitch-text-scale: 0.8; }
        }

        @media (max-width: 420px) {
          .glitch-root { --glitch-text-scale: 0.75; }
        }
      `}</style>

      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{
          filter: "contrast(1.1) brightness(1.05)",
          imageRendering: "crisp-edges",
          zIndex: 0,
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none opacity-20 z-10"
        style={{
          background:
            "repeating-linear-gradient(0deg, rgba(0,0,0,0.2), rgba(0,0,0,0.2) 1px, transparent 1px, transparent 3px)",
        }}
      />

      <span className="glitch-text-connector glitch-text-connector-left" aria-hidden="true" />
      <span className="glitch-text-connector glitch-text-connector-right" aria-hidden="true" />

      <SoulGrid />

      <div
        className="absolute z-30 text-white"
        style={{
          left: leftTextX,
          top: leftTextY,
          width: leftTextW,
          opacity: "var(--img-ready, 0)",
        }}
      >
        <div style={titleStyle}>IDENTIFYING SECOND SUBJECT</div>
        <div style={metaStyle}>Join at 14:24, 10/10/2025</div>

        <div style={{ ...titleStyle, marginTop: blockGap }}>Surveillance Analysis</div>
        <div style={metaStyle}>Join at 14:24, 10/10/2025</div>

        <div style={{ ...titleStyle, marginTop: blockGap }}>
          <span style={{ fontWeight: 700 }}>HAWKEYE -&gt;</span> Leash off. Gods-eye active. Good hunting.
        </div>
        <div style={metaStyle}>Join at 14:24, 10/10/2025</div>
      </div>

      <div
        className="absolute z-30 text-white"
        style={{
          left: rightTextX,
          top: rightTextY,
          width: rightTextW,
          opacity: "var(--img-ready, 0)",
        }}
      >
        <div style={titleStyle}>what is dark matter made of?</div>
        <div style={metaStyle}>Join at 14:24, 10/10/2025</div>

        <div style={{ ...titleStyle, marginTop: blockGap }}>What hides in the universe&apos;s shadows?</div>
        <div style={metaStyle}>Join at 14:24, 10/10/2025</div>

        <div style={{ ...titleStyle, marginTop: blockGap }}>Are we alone in eternity&apos;s expanse?</div>
        <div style={metaStyle}>Join at 14:24, 10/10/2025</div>
      </div>

      <div className="soul-lockup">
        <h1
          className="font-yapari font-bold text-white uppercase"
          style={{
            fontSize: "calc(var(--img-w, 0px) * 0.10)",
            letterSpacing: "calc(var(--img-w, 0px) * 0.01)",
            lineHeight: 0.9,
            margin: 0,
            textAlign: "center",
            whiteSpace: "nowrap",
          }}
        >
          <span>S</span>
          <span style={{ color: "#E3E41B" }}>O</span>
          <span>U</span>
          <span>L</span>
        </h1>
        <div className="soul-lockup-subtitle">
          <span className="soul-subtitle-pair soul-stable-omni">
            <span
              ref={stableRef}
              data-initial="19200102125"
              data-target="STABLE"
              className="soul-shuffle-token"
            >
              STABLE
            </span>
            <span
              ref={omniRef}
              data-initial="15131409"
              data-target="OMNI"
              className="soul-shuffle-token"
            >
              OMNI
            </span>
          </span>
          <span className="soul-subtitle-pair soul-universal-learner">
            <span
              ref={universalRef}
              data-initial="211409221518191012"
              data-target="UNIVERSAL"
              className="soul-shuffle-token"
            >
              UNIVERSAL
            </span>
            <span
              ref={learnerRef}
              data-initial="12050118140518"
              data-target="LEARNER"
              className="soul-shuffle-token"
            >
              LEARNER
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
