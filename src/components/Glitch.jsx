import { useEffect, useRef } from "react";
import handImage from "../assets/hand_1.png";
import SoulGrid from "./SoulGrid";

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

function SoulSparkHudOverlay() {
  const topLineLeftInset = "clamp(52px, 14vw, 260px)";
  const topLineRightInset = "clamp(58px, 11vw, 290px)";
  const topLineY = "clamp(10px, 3.2vh, 38px)";

  const leftVX = "calc(var(--img-x, 0px) + (var(--img-w, 0px) * 0.15))";
  const leftVTop = "calc(var(--img-y, 0px) + (var(--img-h, 0px) * 0.3))";
  const leftVH = "calc(var(--img-h, 0px) * 0.3)";

  const rightVX = "calc(var(--img-x, 0px) + (var(--img-w, 0px) * 0.77))";
  const rightVTop = "calc(var(--img-y, 0px) + (var(--img-h, 0px) * 0.33))";
  const rightVH = "calc(var(--img-h, 0px) * 0.2)";

  return (
    <div className="absolute inset-0 z-20 pointer-events-none">
      <style>{`
        @keyframes runX {
          0% { transform: translateX(-100%); opacity: 0; }
          10%, 90% { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }

        @keyframes runY {
          0% { transform: translateY(-100%); opacity: 0; }
          10%, 90% { opacity: 1; }
          100% { transform: translateY(100%); opacity: 0; }
        }

        .hud-line {
          position: absolute;
          pointer-events: none;
          --speed: 2s;
          --edge: clamp(40px, 6vw, 120px);
          overflow: hidden;
          opacity: calc(var(--img-ready, 0) * 0.92);
        }

        .hud-line.h {
          height: 1px;
          -webkit-mask-image: linear-gradient(90deg, transparent 0, #000 var(--edge), #000 calc(100% - var(--edge)), transparent 100%);
          mask-image: linear-gradient(90deg, transparent 0, #000 var(--edge), #000 calc(100% - var(--edge)), transparent 100%);
        }

        .hud-line.v {
          width: 1px;
          -webkit-mask-image: linear-gradient(0deg, transparent 0, #000 var(--edge), #000 calc(100% - var(--edge)), transparent 100%);
          mask-image: linear-gradient(0deg, transparent 0, #000 var(--edge), #000 calc(100% - var(--edge)), transparent 100%);
        }

        .hud-line .base,
        .hud-line .current {
          position: absolute;
          inset: 0;
        }

        .hud-line .base {
          background: rgba(255, 255, 255, 0.62);
        }

        .hud-line .current {
          opacity: 0;
          will-change: transform;
        }

        .hud-line.h .current {
          animation: runX var(--speed) linear infinite;
        }

        .hud-line.v .current {
          animation: runY var(--speed) linear infinite;
        }

        .hud-line.h .current::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.32) 32%, #fff 50%, rgba(255,255,255,0.32) 68%, transparent 100%);
        }

        .hud-line.v .current::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(0deg, transparent 0%, rgba(255,255,255,0.32) 24%, #fff 50%, rgba(255,255,255,0.32) 76%, transparent 100%);
        }

        .hud-line .current.c2 {
          animation-delay: calc(var(--speed) * 0.55);
          animation-duration: calc(var(--speed) * 1.12);
        }
      `}</style>

      <div className="hud-line h" style={{ top: topLineY, left: topLineLeftInset, right: topLineRightInset }}>
        <div className="base" />
        <div className="current c1" />
      </div>

      <div className="hud-line v" style={{ left: leftVX, top: leftVTop, height: leftVH }}>
        <div className="base" />
        <div className="current c1" />
        <div className="current c2" />
      </div>

      <div className="hud-line v" style={{ left: rightVX, top: rightVTop, height: rightVH }}>
        <div className="base" />
        <div className="current c1" />
        <div className="current c2" />
      </div>
    </div>
  );
}

export default function ImageGlitch() {
  const canvasRef = useRef(null);
  const sceneRef = useRef(null);
  const imageRef = useRef(null);
  const processedRef = useRef(null);
  const animationRef = useRef(null);
  const lastRectRef = useRef({ x: -1, y: -1, w: -1, h: -1 });

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
          --glitch-left-x: 0.105;
          --glitch-left-y: 0.18;
          --glitch-left-w: 0.34;
          --glitch-right-x: 0.72;
          --glitch-right-y: 0.53;
          --glitch-right-w: 0.22;
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

      <SoulSparkHudOverlay />
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

      <div
        className="absolute z-30"
        style={{
          left: "calc(var(--img-x, 0px) + var(--img-w, 0px) * 0.28)",
          width: "calc(var(--img-w, 0px) * 0.82)",
          top: "calc(var(--img-y, 0px) + var(--img-h, 0px) * 0.64)",
          opacity: "var(--img-ready, 0)",
        }}
      >
        <h1
          className="font-yapari font-bold text-white uppercase"
          style={{
            fontSize: "calc(var(--img-w, 0px) * 0.10)",
            letterSpacing: "calc(var(--img-w, 0px) * 0.01)",
            lineHeight: 0.9,
            margin: 0,
            textAlign: "left",
            whiteSpace: "nowrap",
          }}
        >
          <span>S</span>
          <span style={{ position: "relative", display: "inline-block" }}>
            <span style={{ color: "#E3E41B" }}>O</span>
            <span>U</span>
            <span
              className="font-code"
              style={{
                position: "absolute",
                top: "100%",
                left: "50%",
                transform: "translateX(-50%)",
                marginTop: "clamp(2px, calc(var(--img-w, 0px) * 0.004), 8px)",
                fontSize: "clamp(10px, calc(var(--img-w, 0px) * 0.022), 24px)",
                fontWeight: 400,
                letterSpacing: "0.04em",
                lineHeight: 1,
                textTransform: "none",
                color: "#FFFFFF",
                whiteSpace: "nowrap",
              }}
            >
              AGENTIC WARFARE
            </span>
          </span>
          <span>L</span>
        </h1>
      </div>
    </div>
  );
}
