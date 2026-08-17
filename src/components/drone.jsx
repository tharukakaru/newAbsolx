import React, { useEffect, useRef } from "react";
import SourceCodeProRegular from "../assets/fonts/SourceCodePro-Regular.otf";
import DroneAssembly from "../assets/vipoer assmbly 2.webp";
import TacticalTerrain from "../assets/gfjhjhjhjlhugh 1.webp";

const cornerMarks = (
  <>
    <span className="drone-hud-corner drone-hud-corner--tl" aria-hidden="true" />
    <span className="drone-hud-corner drone-hud-corner--tr" aria-hidden="true" />
    <span className="drone-hud-corner drone-hud-corner--bl" aria-hidden="true" />
    <span className="drone-hud-corner drone-hud-corner--br" aria-hidden="true" />
  </>
);

export default function Drone() {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    const panel = document.querySelector(".arc-os-panel");

    if (!root || !panel) return undefined;

    const syncPanelOutline = () => {
      const rootRect = root.getBoundingClientRect();
      const panelRect = panel.getBoundingClientRect();

      root.style.setProperty("--drone-panel-outline-left", `${panelRect.left - rootRect.left}px`);
      root.style.setProperty("--drone-panel-outline-top", `${panelRect.top - rootRect.top}px`);
      root.style.setProperty("--drone-panel-outline-width", `${panelRect.width}px`);
      root.style.setProperty("--drone-panel-outline-height", `${panelRect.height}px`);
      root.style.setProperty("--drone-panel-outline-opacity", "1");
    };

    const resizeObserver = new ResizeObserver(syncPanelOutline);
    const animationFrame = window.requestAnimationFrame(syncPanelOutline);

    resizeObserver.observe(panel);
    resizeObserver.observe(root);
    window.addEventListener("resize", syncPanelOutline);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      window.removeEventListener("resize", syncPanelOutline);
    };
  }, []);

  return (
    <section
      ref={rootRef}
      id="agentic-autonomy"
      className="drone-root relative isolate w-full overflow-hidden bg-black text-white"
      aria-label="Simplified development for AI-enabled autonomy"
    >
      <style>{`
        @font-face {
          font-family: "Source Code Pro";
          src: url(${SourceCodeProRegular}) format("opentype");
          font-weight: 400;
          font-style: normal;
          font-display: swap;
        }

        .drone-root {
          --drone-yellow: #e5e51b;
          --drone-stage-height: clamp(650px, 62.5vw, 920px);
          --drone-transition: clamp(72px, 7vw, 120px);
          --drone-blue-overlap: clamp(240px, 30vw, 380px);
          min-height: var(--drone-stage-height);
          overflow: visible;
          background: transparent;
          font-family: "Source Code Pro", ui-monospace, SFMono-Regular, Menlo, monospace;
        }

        .drone-root::before,
        .drone-root::after {
          content: "";
          position: absolute;
          z-index: 0;
          left: 0;
          right: 0;
          height: var(--drone-transition);
          pointer-events: none;
        }

        /* ARC → autonomy: the higher-z autonomy wrapper now enters as a fade,
           instead of cutting the ARC panel off with its rectangular edge. */
        .drone-root::before {
          top: calc(var(--drone-blue-overlap) * -1);
          height: var(--drone-blue-overlap);
          background:
            radial-gradient(
              100% 140% at -3% 105%,
              rgba(62, 74, 163, 0.88) 0%,
              rgba(62, 74, 163, 0.68) 30%,
              rgba(62, 74, 163, 0.38) 50%,
              rgba(62, 74, 163, 0.16) 70%,
              transparent 86%
            ),
            linear-gradient(180deg, transparent 0%, rgba(2, 2, 4, 0.4) 64%, #020204 100%);
          -webkit-mask-image: linear-gradient(
            180deg,
            transparent 0%,
            rgba(0, 0, 0, 0.2) 28%,
            rgba(0, 0, 0, 0.68) 62%,
            #000 100%
          );
          mask-image: linear-gradient(
            180deg,
            transparent 0%,
            rgba(0, 0, 0, 0.2) 28%,
            rgba(0, 0, 0, 0.68) 62%,
            #000 100%
          );
        }

        /* Autonomy → MEGHA: extend a black-to-transparent veil over the next
           section so both backgrounds cross-fade across the DOM boundary. */
        .drone-root::after {
          bottom: calc(var(--drone-transition) * -1);
          background: linear-gradient(180deg, #020204 0%, rgba(2,2,4,0.66) 44%, transparent 100%);
        }

        .drone-stage {
          position: relative;
          z-index: 1;
          width: min(100%, 1780px);
          height: var(--drone-stage-height);
          margin: 0 auto;
          overflow: hidden;
          isolation: isolate;
          background: #020204;
        }

        .drone-terrain {
          position: absolute;
          z-index: 1;
          left: -8%;
          top: -4%;
          width: 104%;
          height: 108%;
          object-fit: cover;
          object-position: 48% 100%;
          opacity: 0.83;
          pointer-events: none;
          user-select: none;
          transform: scale(1.4);
          transform-origin: 50% 100%;
        }

        .drone-ambient {
          position: absolute;
          inset: 0;
          z-index: 2;
          pointer-events: none;
          background:
            linear-gradient(
              180deg,
              #000 0%,
              rgba(0, 0, 0, 0.88) 7%,
              rgba(0, 0, 0, 0.38) 18%,
              transparent 28%,
              transparent 68%,
              rgba(0, 0, 0, 0.96) 100%
            ),
            radial-gradient(35% 44% at 96% 81%, rgba(116, 104, 22, 0.18), transparent 68%);
        }

        /* Layered ARC blue field. Two offset lobes give the wash an organic
           edge: it opens beneath the command view, reaches inward through
           the upper-middle, then folds back toward the lower-left terrain. */
        .drone-ambient::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            radial-gradient(
              100% 52% at -3% 4%,
              rgba(62, 74, 163, 0.88) 0%,
              rgba(62, 74, 163, 0.68) 30%,
              rgba(62, 74, 163, 0.38) 50%,
              rgba(62, 74, 163, 0.16) 70%,
              transparent 86%
            ),
            radial-gradient(
              70% 104% at -7% 76%,
              rgba(62, 74, 163, 0.66) 0%,
              rgba(62, 74, 163, 0.46) 38%,
              rgba(40, 49, 119, 0.2) 64%,
              transparent 84%
            );
          -webkit-mask-image: linear-gradient(
            180deg,
            #000 0%,
            #000 76%,
            rgba(0, 0, 0, 0.72) 91%,
            transparent 100%
          );
          mask-image: linear-gradient(
            180deg,
            #000 0%,
            #000 76%,
            rgba(0, 0, 0, 0.72) 91%,
            transparent 100%
          );
        }

        .drone-command-view {
          display: none;
          position: absolute;
          z-index: 8;
          left: 4.4%;
          top: 12.3%;
          width: 84.5%;
          height: 35.2%;
          overflow: hidden;
          border: 1px solid rgba(226, 229, 25, 0.82);
          border-radius: clamp(46px, 6vw, 108px);
          background: #030407;
          box-shadow:
            inset 0 0 0 1px rgba(255, 255, 255, 0.025),
            0 12px 50px rgba(0, 0, 0, 0.46);
        }

        .drone-command-view img {
          position: absolute;
          inset: -8%;
          width: 116%;
          height: 116%;
          object-fit: cover;
          object-position: 46% 46%;
          opacity: 0.48;
          filter: blur(5px) brightness(0.72);
          transform: scale(1.02);
        }

        .drone-command-view::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 2;
          background:
            radial-gradient(62% 90% at 8% 100%, rgba(62, 74, 163, 0.62), rgba(36, 44, 105, 0.24) 48%, transparent 76%),
            linear-gradient(180deg, rgba(0, 0, 0, 0.42), rgba(0, 0, 0, 0.06) 54%, rgba(0, 0, 0, 0.24));
          pointer-events: none;
        }

        .drone-command-view::after {
          content: "";
          position: absolute;
          z-index: 3;
          left: -20%;
          right: -20%;
          top: -30%;
          height: 16%;
          background: rgba(255, 255, 255, 0.09);
          filter: blur(12px);
          animation: droneScan 5.8s linear infinite;
          pointer-events: none;
        }

        @keyframes droneScan {
          from { transform: translateY(0); }
          to { transform: translateY(690%); }
        }

        .drone-command-meta {
          position: absolute;
          z-index: 12;
          left: 50%;
          top: 3.7%;
          margin: 0;
          width: 76%;
          color: rgba(255, 255, 255, 0.78);
          font-size: clamp(9px, 1.25vw, 16px);
          line-height: 1.15;
          letter-spacing: 0.055em;
          text-align: center;
          text-transform: uppercase;
          white-space: nowrap;
          transform: translateX(-50%);
        }

        .drone-command-meta span {
          color: var(--drone-yellow);
        }

        .drone-read-more {
          position: absolute;
          z-index: 15;
          left: 54%;
          top: 11.5%;
          display: inline-flex;
          align-items: center;
          gap: clamp(12px, 1.4vw, 24px);
          padding: 0;
          border: 0;
          color: rgba(255, 255, 255, 0.92);
          background: transparent;
          transform: translateX(-50%);
          font: inherit;
          cursor: pointer;
        }

        .drone-read-more__label,
        .drone-intel-label {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255, 255, 255, 0.66);
          background: rgba(4, 6, 12, 0.34);
          text-transform: uppercase;
        }

        .drone-read-more__label {
          min-width: clamp(112px, 11.5vw, 190px);
          height: clamp(24px, 2.1vw, 34px);
          padding: 0 clamp(13px, 1.2vw, 22px);
          font-family: "Yapari Trial Regular", "Yapari Trial", "Azonix", sans-serif;
          font-size: clamp(8px, 0.83vw, 14px);
          letter-spacing: 0.09em;
        }

        .drone-read-more__chevrons {
          font-family: Arial, sans-serif;
          font-size: clamp(15px, 1.35vw, 24px);
          letter-spacing: -0.22em;
          transition: transform 180ms ease;
        }

        .drone-read-more:hover .drone-read-more__chevrons,
        .drone-read-more:focus-visible .drone-read-more__chevrons {
          transform: translateX(5px);
        }

        .drone-read-more:focus-visible {
          outline: 1px solid var(--drone-yellow);
          outline-offset: 8px;
        }

        .drone-hud-corner {
          position: absolute;
          width: 8px;
          height: 8px;
          border-color: rgba(255, 255, 255, 0.9);
          pointer-events: none;
        }

        .drone-hud-corner--tl {
          left: -3px;
          top: -3px;
          border-left: 1px solid;
          border-top: 1px solid;
        }

        .drone-hud-corner--tr {
          right: -3px;
          top: -3px;
          border-right: 1px solid;
          border-top: 1px solid;
        }

        .drone-hud-corner--bl {
          left: -3px;
          bottom: -3px;
          border-left: 1px solid;
          border-bottom: 1px solid;
        }

        .drone-hud-corner--br {
          right: -3px;
          bottom: -3px;
          border-right: 1px solid;
          border-bottom: 1px solid;
        }

        .drone-guide {
          position: absolute;
          z-index: 9;
          left: 50%;
          top: 50%;
          bottom: 0;
          width: 1px;
          height: auto;
          background:
            linear-gradient(
              180deg,
              rgba(255,255,255,0.68) 0%,
              rgba(255,255,255,0.58) 48%,
              rgba(255,255,255,0.46) 100%
            ),
            linear-gradient(180deg, transparent 0%, rgba(255,255,210,0.08) 18%, rgba(255,255,180,0.24) 38%, rgba(255,255,255,0.9) 50%, rgba(255,255,150,0.24) 62%, rgba(255,255,120,0.08) 82%, transparent 100%);
          background-repeat: no-repeat;
          background-size: 100% 100%, 100% 48%;
          background-position: 0 0, 0 -54%;
          filter: drop-shadow(0 0 4px rgba(255,255,160,0.18));
          will-change: background-position;
          animation: droneGuideRunY 4s linear infinite;
        }

        @keyframes droneGuideRunY {
          0% {
            background-position: 0 0, 0 -54%;
          }
          100% {
            background-position: 0 0, 0 154%;
          }
        }

        .drone-guide::before,
        .drone-guide::after {
          content: "";
          position: absolute;
          left: -3px;
          width: 7px;
          height: 1px;
          background: rgba(255, 255, 255, 0.72);
        }

        .drone-guide::before { top: 27%; }
        .drone-guide::after { top: 52%; }

        .drone-intel-label {
          position: absolute;
          z-index: 14;
          left: 50%;
          top: 45.5%;
          width: clamp(180px, 19vw, 300px);
          height: clamp(18px, 1.8vw, 30px);
          padding: 0 10px;
          color: rgba(255, 255, 255, 0.66);
          font-size: clamp(4.8px, 0.45vw, 8px);
          letter-spacing: 0.035em;
          white-space: nowrap;
          transform: translateX(-50%);
        }

        .drone-assembly {
          position: absolute;
          z-index: 11;
          left: 86%;
          top: 68%;
          width: clamp(620px, 66vw, 1080px);
          height: auto;
          opacity: 0.74;
          mix-blend-mode: screen;
          transform: translate(-50%, -50%);
          pointer-events: none;
          user-select: none;
        }

        .drone-copy {
          position: absolute;
          z-index: 16;
          left: 7.5%;
          bottom: 14.5%;
          margin: 0;
          font-family: "Yapari Trial Regular", "Yapari Trial", "Azonix", sans-serif;
          font-size: clamp(19px, 1.8vw, 30px);
          font-weight: 400;
          line-height: 0.88;
          letter-spacing: 0.035em;
          text-transform: uppercase;
          text-shadow: 0 2px 12px rgba(0, 0, 0, 0.82);
        }

        .drone-copy span {
          display: block;
        }

        .drone-edge-label {
          display: none;
          position: absolute;
          z-index: 12;
          top: clamp(-169px, -14vw, -145px);
          right: clamp(18px, 3.4vw, 42px);
          transform: translateY(-50%) rotate(180deg);
          writing-mode: vertical-rl;
          color: rgba(255, 255, 255, 0.4);
          font-family: "Yapari Trial Regular", "Yapari Trial", "Azonix", sans-serif;
          font-size: clamp(22px, 3.15vw, 38px);
          font-weight: 400;
          line-height: 1;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          white-space: nowrap;
          pointer-events: none;
        }

        .drone-panel-outline {
          position: absolute;
          z-index: 13;
          left: var(--drone-panel-outline-left, 0px);
          top: var(--drone-panel-outline-top, 0px);
          width: var(--drone-panel-outline-width, 0px);
          height: var(--drone-panel-outline-height, 0px);
          box-sizing: border-box;
          border: 1px solid rgba(251, 253, 0, 0.86);
          border-radius: clamp(10px, 1vw, 14px);
          opacity: var(--drone-panel-outline-opacity, 0);
          box-shadow: 0 0 0 1px rgba(251, 253, 0, 0.06);
          pointer-events: none;
        }

        @media (min-width: 761px) {
          .drone-edge-label {
            display: block;
          }
        }

        @media (max-width: 1100px) {
          .drone-root {
            --drone-stage-height: clamp(560px, 72vw, 760px);
          }

          .drone-terrain {
            left: -10%;
            top: -3%;
            width: 118%;
            height: 108%;
            object-position: 54% 60%;
            transform: scale(1.12);
          }

          .drone-command-meta {
            top: 7%;
            width: min(680px, 78vw);
            font-size: clamp(6.5px, 0.95vw, 10px);
            line-height: 1.2;
            white-space: normal;
          }

          .drone-read-more {
            left: 50%;
            top: 15%;
          }

          .drone-guide {
            top: 34%;
            height: 45%;
            bottom: auto;
          }

          .drone-intel-label {
            top: 43.5%;
            width: clamp(150px, 28vw, 240px);
            font-size: clamp(3.8px, 0.58vw, 6px);
          }

          .drone-assembly {
            left: 73%;
            top: 71%;
            width: clamp(460px, 70vw, 760px);
          }

          .drone-copy {
            left: clamp(28px, 6vw, 72px);
            bottom: 16%;
            max-width: min(430px, 58vw);
            font-size: clamp(16px, 2.25vw, 24px);
          }

        }

        @media (max-width: 760px) {
          .drone-root {
            --drone-stage-height: clamp(620px, 126.5vw, 790px);
            --drone-blue-overlap: clamp(190px, 30vw, 240px);
          }

          .drone-stage {
            max-width: 760px;
          }

          .drone-terrain {
            left: -4%;
            top: -3.5%;
            width: 104%;
            height: 104.5%;
            object-position: 48% 50%;
            transform: none;
          }

          .drone-command-view {
            display: block;
            left: 4.3%;
            top: 12.4%;
            width: 81.4%;
            height: 35%;
            border-radius: clamp(38px, 9.4vw, 68px);
          }

          .drone-command-meta {
            left: 12%;
            top: 53.35%;
            width: auto;
            max-width: 72%;
            font-size: clamp(4.8px, 1.12vw, 7.5px);
            text-align: left;
            transform: none;
          }

          .drone-read-more {
            left: 50%;
            top: 57.4%;
          }

          .drone-read-more__label {
            min-width: clamp(82px, 18vw, 126px);
            height: clamp(17px, 3.2vw, 25px);
            padding: 0 10px;
            font-size: clamp(6px, 1.45vw, 9px);
          }

          .drone-read-more__chevrons {
            font-size: clamp(12px, 3vw, 18px);
          }

          .drone-guide {
            left: 48.8%;
            top: 67.4%;
            bottom: auto;
            height: 25%;
          }

          .drone-intel-label {
            left: 39%;
            top: 72.8%;
            width: clamp(112px, 25vw, 162px);
            height: clamp(14px, 2.8vw, 20px);
            font-size: clamp(3.8px, 0.72vw, 5.2px);
            transform: none;
          }

          .drone-assembly {
            left: 72%;
            top: 93%;
            width: clamp(420px, 86vw, 650px);
          }

          .drone-copy {
            left: 6.3%;
            bottom: 8%;
            font-size: clamp(11px, 2.7vw, 18px);
            line-height: 0.9;
          }

        }

        @media (max-width: 420px) {
          .drone-command-meta {
            font-size: 4.3px;
          }

          .drone-intel-label {
            left: 38.5%;
            font-size: 3.3px;
          }

          .drone-assembly {
            left: 73%;
            width: 86vw;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .drone-command-view::after {
            animation: none;
          }

          .drone-guide {
            animation: none;
          }

          .drone-read-more__chevrons {
            transition: none;
          }
        }
      `}</style>

      <span className="drone-panel-outline" aria-hidden="true" />
      <span className="drone-edge-label" aria-hidden="true">TEAMING AT THE EDGE</span>

      <div className="drone-stage">
        <img className="drone-terrain" src={TacticalTerrain} alt="" aria-hidden="true" />
        <div className="drone-ambient" aria-hidden="true" />

        <div className="drone-command-view" aria-hidden="true">
          <img src={TacticalTerrain} alt="" />
        </div>

        <p className="drone-command-meta">
          Command &amp; control (C2) is an AI-powered battle management &amp; command
          control platform <span>—</span>
        </p>

        <button
          className="drone-read-more"
          type="button"
          aria-label="Read more about the autonomy platform"
          onClick={() => {
            window.history.pushState({}, "", "/readmore");
            window.dispatchEvent(new PopStateEvent("popstate"));
          }}
        >
          <span className="drone-read-more__label">
            {cornerMarks}
            Read more
          </span>
          <span className="drone-read-more__chevrons" aria-hidden="true">&gt;&gt;</span>
        </button>

        <span className="drone-guide" aria-hidden="true" />

        <div className="drone-intel-label">
          {cornerMarks}
          Agentic solutions for defense and intelligence
        </div>

        <img className="drone-assembly" src={DroneAssembly} alt="" aria-hidden="true" />

        <h2 className="drone-copy">
          <span>Simplified development</span>
          <span>for AI-enabled</span>
          <span>autonomy</span>
        </h2>
      </div>
    </section>
  );
}
