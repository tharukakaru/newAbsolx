import NeuralFaceCanvas from "./NeuralFaceCanvas";

const ARC_DESCRIPTION =
  "ABSOLX ARC OS is a sovereign, AI-driven defense ecosystem engineered by Sri Lankan hands—the roaring lions building national power from the ground up. Designed for Asian operational environments, ARC OS delivers 99.99% decision-making accuracy, commanding dominance from sky to sea to mud through UAVs, UGVs, USVs, electronic warfare, and joint-force Command & Control. This is not just software—it is a unified ecosystem of AI models, computer vision, predictive intelligence, weather-aware analytics, hardened hardware, robotics, and autonomous systems. Built entirely in-house, our vision to 2030 is clear: a self-reliant, battle-ready defense industry transforming national security data into decisive first-action advantage.";

export default function SoulGrid() {
  const sectionLeft =
    "calc(var(--img-x, 0px) + (var(--img-w, 0px) * var(--soul-face-left, 0.555)))";
  const sectionTop =
    "calc(var(--img-y, 0px) + (var(--img-h, 0px) * var(--soul-face-top, 0.92)))";
  const verticalTitleTop =
    "calc(var(--img-y, 0px) + (var(--img-h, 0px) * var(--soul-face-top, 0.92)) + (var(--soul-face-height) * 0.5))";

  return (
    <div className="absolute inset-0 pointer-events-none z-10 soul-face-root">
      <style>{`
        .soul-face-root {
          --soul-face-left: 0.555;
          --soul-face-top: 0.845;
          --soul-face-width: clamp(580px, calc(var(--img-w, 0px) * 1.06), 1320px);
          --soul-copy-reserve: clamp(200px, calc(var(--img-h, 0px) * 0.24), 280px);
          --soul-face-height: clamp(
            460px,
            calc(var(--img-h, 0px) * 0.98 + var(--soul-copy-reserve)),
            calc(980px + var(--soul-copy-reserve))
          );
          --soul-copy-top: 89%;
          --soul-copy-left: 43%;
          --soul-copy-width: min(78vw, calc(var(--img-w, 0px) * 1.05), 1180px);
          --soul-right-spine-right: clamp(112px, 17.4%, 208px);
          --soul-top-line-width: clamp(116px, calc(var(--soul-face-width) * 0.17), 206px);
          --soul-top-line-top: 8.4%;
          --soul-defense-offset: clamp(88px, calc(var(--img-w, 0px) * 0.108), 168px);
        }

        .soul-face-section {
          position: absolute;
          opacity: var(--img-ready, 0);
          width: var(--soul-face-width);
          height: var(--soul-face-height);
          overflow: visible;
          transform: translateX(-50%);
        }

        .soul-face-glow {
          position: absolute;
          top: -10%;
          right: clamp(-260px, -16vw, -92px);
          width: 64%;
          height: 116%;
          background:
            radial-gradient(ellipse at 100% 50%,
              rgba(75, 96, 230, 0.78) 0%,
              rgba(37, 51, 142, 0.52) 34%,
              rgba(12, 17, 54, 0.28) 54%,
              rgba(0, 0, 0, 0) 76%);
          filter: blur(44px);
          border-radius: 999px;
        }

        .soul-face-canvas {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: var(--soul-copy-reserve);
          filter: drop-shadow(0 20px 42px rgba(80, 96, 180, 0.18));
          will-change: transform;
        }

        .soul-agentic-title-rail {
          position: absolute;
          left: clamp(26px, 2.4vw, 48px);
          z-index: 8;
          width: 0;
          height: 0;
          color: #5a5a5a;
          pointer-events: none;
        }

        .soul-agentic-title {
          position: absolute;
          top: 0;
          left: 0;
          display: block;
          white-space: nowrap;
          transform: translate(-50%, -50%) rotate(-90deg);
          transform-origin: center;
          color: #5a5a5a;
          text-align: center;
          font-family: "Yapari Trial", sans-serif;
          font-size: clamp(
            21px,
            min(calc(var(--img-w, 0px) * 0.030), 4vh),
            46px
          );
          font-style: normal;
          font-weight: 700;
          line-height: normal;
          letter-spacing: clamp(
            2px,
            min(calc(var(--img-w, 0px) * 0.004), 0.5vh),
            6px
          );
          text-transform: uppercase;
        }

        .soul-title-cluster {
          position: absolute;
          top: clamp(-20px, 2.5%, 22px);
          right: clamp(40px, 10.5%, 138px);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding-top: var(--soul-defense-offset);
          color: #fff;
        }

        .soul-defense-badge {
          position: relative;
          z-index: 7;
          align-self: flex-end;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: clamp(190px, calc(var(--img-w, 0px) * 0.178), 300px);
          height: clamp(40px, calc(var(--img-w, 0px) * 0.033), 56px);
          margin-top: clamp(26px, calc(var(--img-h, 0px) * 0.04), 48px);
          padding: 0 clamp(16px, 1.65vw, 30px);
          border: 1px solid rgba(255, 255, 255, 0.72);
          background: rgba(35, 41, 74, 0.78);
          box-shadow: inset 0 0 24px rgba(255, 255, 255, 0.08);
          font-family: "Yapari Trial", "Yapari Trial Regular", "Azonix", sans-serif;
          font-size: clamp(16px, calc(var(--img-w, 0px) * 0.018), 29px);
          font-weight: 700;
          letter-spacing: 0.05em;
          line-height: 1;
          text-transform: uppercase;
          isolation: isolate;
        }

        .soul-defense-label {
          position: relative;
          z-index: 2;
          font-weight: 700;
        }

        .soul-right-spine {
          position: absolute;
          top: -8%;
          right: var(--soul-right-spine-right);
          z-index: 6;
          width: 1px;
          height: 89%;
          overflow: hidden;
          background: transparent;
          -webkit-mask-image: linear-gradient(180deg, transparent 0, #000 8%, #000 92%, transparent 100%);
          mask-image: linear-gradient(180deg, transparent 0, #000 8%, #000 92%, transparent 100%);
        }

        .soul-right-spine .base {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.84) 0%,
            rgba(255, 255, 255, 0.76) 70%,
            rgba(255, 255, 255, 0.24) 94%,
            rgba(255, 255, 255, 0) 100%
          );
        }

        .soul-top-hline {
          position: absolute;
          top: var(--soul-top-line-top);
          right: var(--soul-right-spine-right);
          z-index: 6;
          width: var(--soul-top-line-width);
          height: 1px;
          overflow: hidden;
          background: transparent;
          -webkit-mask-image: linear-gradient(90deg, transparent 0, #000 12%, #000 100%);
          mask-image: linear-gradient(90deg, transparent 0, #000 12%, #000 100%);
        }

        .soul-top-hline .base {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.54) 12%,
            rgba(255, 255, 255, 0.74) 100%
          );
        }

        .soul-line-current {
          position: absolute;
          inset: 0;
          opacity: 0;
          will-change: transform;
        }

        .soul-top-hline .soul-line-current {
          animation: soulLineRunX 2.4s linear infinite;
        }

        .soul-right-spine .soul-line-current {
          animation: soulLineRunY 2.8s linear infinite;
        }

        .soul-line-current::before {
          content: "";
          position: absolute;
          inset: 0;
        }

        .soul-top-hline .soul-line-current::before {
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 210, 0.2) 30%,
            rgba(255, 255, 255, 0.96) 50%,
            rgba(255, 255, 120, 0.34) 70%,
            transparent 100%
          );
          filter: drop-shadow(0 0 7px rgba(255, 255, 130, 0.9));
        }

        .soul-right-spine .soul-line-current::before {
          background: linear-gradient(
            180deg,
            transparent 0%,
            rgba(255, 255, 210, 0.2) 28%,
            rgba(255, 255, 255, 0.96) 50%,
            rgba(255, 255, 120, 0.34) 72%,
            transparent 100%
          );
          filter: drop-shadow(0 0 7px rgba(255, 255, 130, 0.85));
        }

        .soul-line-current.c2 {
          animation-delay: 0.72s;
          animation-duration: 3.15s;
        }

        @keyframes soulLineRunX {
          0% {
            transform: translateX(-108%);
            opacity: 0;
          }
          14%, 86% {
            opacity: 1;
          }
          100% {
            transform: translateX(108%);
            opacity: 0;
          }
        }

        @keyframes soulLineRunY {
          0% {
            transform: translateY(-108%);
            opacity: 0;
          }
          14%, 86% {
            opacity: 1;
          }
          100% {
            transform: translateY(108%);
            opacity: 0;
          }
        }

        .soul-defense-badge::before,
        .soul-defense-badge::after,
        .soul-defense-badge .corner-a,
        .soul-defense-badge .corner-b {
          content: "";
          position: absolute;
          width: 14px;
          height: 14px;
          pointer-events: none;
        }

        .soul-defense-badge::before {
          left: -2px;
          top: -2px;
          border-left: 2px solid rgba(255, 255, 255, 0.95);
          border-top: 2px solid rgba(255, 255, 255, 0.95);
        }

        .soul-defense-badge::after {
          right: -2px;
          top: -2px;
          border-right: 2px solid rgba(255, 255, 255, 0.95);
          border-top: 2px solid rgba(255, 255, 255, 0.95);
        }

        .soul-defense-badge .corner-a {
          left: -2px;
          bottom: -2px;
          border-left: 2px solid rgba(255, 255, 255, 0.95);
          border-bottom: 2px solid rgba(255, 255, 255, 0.95);
        }

        .soul-defense-badge .corner-b {
          right: -2px;
          bottom: -2px;
          border-right: 2px solid rgba(255, 255, 255, 0.95);
          border-bottom: 2px solid rgba(255, 255, 255, 0.95);
        }

        .soul-face-copy {
          position: absolute;
          top: var(--soul-copy-top);
          left: var(--soul-copy-left);
          z-index: 5;
          width: var(--soul-copy-width);
          transform: translateX(-50%);
          max-width: calc(100vw - 64px);
          padding-top: clamp(20px, calc(var(--img-h, 0px) * 0.035), 48px);
          padding-inline: clamp(20px, 3.5vw, 56px);
          text-align: center;
          color: rgba(255, 255, 255, 0.86);
        }

        .soul-face-description {
          margin: 0;
          font-family: "Helvetica Now Display", "Helvetica", sans-serif;
          font-size: clamp(10px, calc(var(--img-w, 0px) * 0.0088), 16px);
          font-weight: 300;
          line-height: 1.44;
          letter-spacing: 0.11em;
          color: rgba(255, 255, 255, 0.58);
          text-transform: uppercase;
        }

        .soul-face-description strong {
          display: inline-block;
          font-weight: 700;
          font-size: clamp(16px, calc(var(--img-w, 0px) * 0.016), 28px);
          letter-spacing: 0.12em;
          color: #fff;
          margin-right: 0.18em;
        }

        @keyframes soulFaceFloat {
          0%, 100% {
            transform: translate(-50%, -50%) translateY(0);
          }
          50% {
            transform: translate(-50%, -50%) translateY(-10px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .soul-face-canvas {
            animation: none;
          }

          .soul-line-current {
            animation: none;
          }
        }

        @media (max-width: 768px) {
          .soul-face-root {
            --soul-face-top: 0.92;
            --soul-face-left: 0.54;
            --soul-face-width: calc(var(--img-w, 0px) * 1.08);
            --soul-copy-reserve: clamp(160px, calc(var(--img-h, 0px) * 0.2), 220px);
            --soul-face-height: clamp(
              400px,
              calc(var(--img-h, 0px) * 0.98 + var(--soul-copy-reserve)),
              calc(780px + var(--soul-copy-reserve))
            );
            --soul-copy-left: 46%;
            --soul-copy-width: min(82vw, calc(var(--img-w, 0px) * 0.88));
            --soul-copy-top: 90%;
            --soul-right-spine-right: clamp(54px, 14.5%, 98px);
            --soul-top-line-width: clamp(76px, calc(var(--soul-face-width) * 0.15), 128px);
            --soul-top-line-top: 8.8%;
            --soul-defense-offset: clamp(72px, calc(var(--img-w, 0px) * 0.0886), 104px);
          }

          .soul-title-cluster {
            right: clamp(22px, 8%, 54px);
          }

          .soul-defense-badge {
            min-width: clamp(148px, calc(var(--img-w, 0px) * 0.17), 166px);
            height: clamp(38px, calc(var(--img-w, 0px) * 0.032), 46px);
            font-size: clamp(14px, calc(var(--img-w, 0px) * 0.016), 17px);
            font-weight: 700;
          }

          .soul-right-spine {
            top: -8%;
            height: 88%;
          }

          .soul-face-description {
            font-size: clamp(8px, calc(var(--img-w, 0px) * 0.0096), 11px);
            font-weight: 300;
            line-height: 1.38;
            letter-spacing: 0.08em;
            color: rgba(255, 255, 255, 0.58);
          }

          .soul-face-description strong {
            font-size: clamp(11px, calc(var(--img-w, 0px) * 0.013), 18px);
          }
        }

        @media (max-width: 480px) {
          .soul-face-root {
            --soul-face-top: 0.98;
            --soul-face-left: 0.535;
            --soul-face-width: calc(var(--img-w, 0px) * 1.12);
            --soul-copy-reserve: clamp(160px, calc(var(--img-h, 0px) * 0.2), 220px);
            --soul-face-height: clamp(
              360px,
              calc(var(--img-h, 0px) * 0.97 + var(--soul-copy-reserve)),
              calc(630px + var(--soul-copy-reserve))
            );
            --soul-copy-left: 50%;
            --soul-copy-width: 88vw;
            --soul-copy-top: 91%;
            --soul-right-spine-right: 12%;
            --soul-top-line-width: 68px;
            --soul-top-line-top: 9.2%;
            --soul-defense-offset: clamp(64px, calc(var(--img-w, 0px) * 0.1148), 88px);
          }

          .soul-title-cluster {
            top: clamp(-14px, 2%, 8px);
            right: clamp(12px, 5%, 24px);
          }

          .soul-agentic-title-rail {
            left: 16px;
          }

          .soul-agentic-title {
            font-size: clamp(16px, min(5.2vw, 3.8vh), 23px);
            letter-spacing: clamp(1.5px, min(0.9vw, 0.45vh), 3px);
          }

          .soul-defense-badge {
            min-width: clamp(126px, 31vw, 130px);
            height: 36px;
            margin-top: 22px;
            font-size: clamp(12px, 2.9vw, 14px);
            font-weight: 700;
          }

          .soul-right-spine {
            opacity: 0.72;
            top: -7%;
            height: 84%;
          }

          .soul-face-description {
            font-size: clamp(6.4px, 1.85vw, 8px);
            font-weight: 300;
            line-height: 1.36;
            letter-spacing: 0.065em;
            color: rgba(255, 255, 255, 0.58);
          }

          .soul-face-description strong {
            font-size: clamp(9px, 2.2vw, 13px);
          }
        }
      `}</style>

      <div
        className="soul-agentic-title-rail"
        style={{ top: verticalTitleTop }}
      >
        <span className="soul-agentic-title">Agentic Warfare</span>
      </div>

      <div
        className="soul-face-section"
        style={{
          left: sectionLeft,
          top: sectionTop,
        }}
      >
        <div className="soul-face-glow" />
        <div className="soul-right-spine" aria-hidden="true">
          <div className="base" />
          <div className="soul-line-current c1" />
          <div className="soul-line-current c2" />
        </div>
        <div className="soul-top-hline" aria-hidden="true">
          <div className="base" />
          <div className="soul-line-current c1" />
          <div className="soul-line-current c2" />
        </div>
        <div className="soul-title-cluster">
          <div className="soul-defense-badge">
            <span className="corner-a" />
            <span className="corner-b" />
            <span className="soul-defense-label">Defense</span>
          </div>
        </div>
        <NeuralFaceCanvas className="soul-face-canvas" />
        <div className="soul-face-copy">
          <p className="soul-face-description">
            <strong>ABSOLX ARC OS</strong>
            {ARC_DESCRIPTION.replace("ABSOLX ARC OS", "")}
          </p>
        </div>
      </div>
    </div>
  );
}
