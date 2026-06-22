import NeuralFaceCanvas from "./NeuralFaceCanvas";

const ARC_DESCRIPTION =
  "ABSOLX ARC OS is a sovereign, AI-driven defense ecosystem engineered by Sri Lankan hands—the roaring lions building national power from the ground up. Designed for Asian operational environments, ARC OS delivers 99.99% decision-making accuracy, commanding dominance from sky to sea to mud through UAVs, UGVs, USVs, electronic warfare, and joint-force Command & Control. This is not just software—it is a unified ecosystem of AI models, computer vision, predictive intelligence, weather-aware analytics, hardened hardware, robotics, and autonomous systems. Built entirely in-house, our vision to 2030 is clear: a self-reliant, battle-ready defense industry transforming national security data into decisive first-action advantage.";

const TAGLINE = "Agentic solutions for defense and intelligence";

export default function SoulGrid() {
  const sectionLeft =
    "calc(var(--img-x, 0px) + (var(--img-w, 0px) * var(--soul-face-left, 0.555)))";
  const sectionTop =
    "calc(var(--img-y, 0px) + (var(--img-h, 0px) * var(--soul-face-top, 0.92)))";

  return (
    <div className="absolute inset-0 pointer-events-none z-10 soul-face-root">
      <style>{`
        .soul-face-root {
          --soul-face-left: 0.555;
          --soul-face-top: 0.92;
          --soul-face-width: clamp(600px, calc(var(--img-w, 0px) * 0.94), 1160px);
          --soul-face-height: clamp(460px, calc(var(--img-h, 0px) * 0.86), 860px);
          --soul-copy-top: 81%;
          --soul-copy-left: 43%;
          --soul-copy-width: min(86vw, calc(var(--img-w, 0px) * 1.2), 1380px);
          --soul-right-spine-right: clamp(112px, 17.4%, 208px);
          --soul-top-line-width: clamp(116px, calc(var(--soul-face-width) * 0.17), 206px);
          --soul-top-line-top: 8.4%;
        }

        .soul-face-section {
          position: absolute;
          opacity: var(--img-ready, 0);
          width: var(--soul-face-width);
          height: var(--soul-face-height);
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
          inset: 0;
          filter: drop-shadow(0 20px 42px rgba(80, 96, 180, 0.18));
          will-change: transform;
        }

        .soul-title-cluster {
          position: absolute;
          top: clamp(-28px, 1.5%, 16px);
          right: clamp(40px, 10.5%, 138px);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          color: #fff;
        }

        .soul-fight-text {
          position: relative;
          z-index: 5;
          font-family: "Yapari Trial", "Yapari Trial Regular", "Azonix", sans-serif;
          font-size: clamp(36px, calc(var(--img-w, 0px) * 0.047), 72px);
          font-weight: 700;
          line-height: 0.82;
          letter-spacing: 0.045em;
          text-transform: uppercase;
          text-shadow: 0 0 22px rgba(255, 255, 255, 0.16);
        }

        .soul-fight-text .unfair {
          display: block;
          margin-left: 1.16em;
        }

        .soul-defense-badge {
          position: relative;
          z-index: 7;
          align-self: flex-end;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: clamp(134px, calc(var(--img-w, 0px) * 0.128), 220px);
          height: clamp(28px, calc(var(--img-w, 0px) * 0.023), 40px);
          margin-top: clamp(14px, calc(var(--img-h, 0px) * 0.024), 30px);
          padding: 0 clamp(12px, 1.65vw, 22px);
          border: 1px solid rgba(255, 255, 255, 0.72);
          background: rgba(35, 41, 74, 0.78);
          box-shadow: inset 0 0 24px rgba(255, 255, 255, 0.08);
          font-family: "Yapari Trial Regular", "Yapari Trial", "Azonix", sans-serif;
          font-size: clamp(12px, calc(var(--img-w, 0px) * 0.0126), 21px);
          font-weight: 400;
          letter-spacing: 0.05em;
          line-height: 1;
          text-transform: uppercase;
          isolation: isolate;
        }

        .soul-defense-label {
          position: relative;
          z-index: 2;
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
          width: 10px;
          height: 10px;
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
          text-align: center;
          color: rgba(255, 255, 255, 0.86);
        }

        .soul-face-description {
          margin: 0;
          font-family: "Helvetica Now Display", "Helvetica", sans-serif;
          font-size: clamp(10px, calc(var(--img-w, 0px) * 0.0088), 16px);
          font-weight: 400;
          line-height: 1.22;
          letter-spacing: 0.055em;
          text-transform: uppercase;
        }

        .soul-face-description strong {
          font-weight: 700;
          color: #fff;
        }

        .soul-face-tagline {
          margin-top: clamp(34px, calc(var(--img-h, 0px) * 0.08), 82px);
          font-family: "Helvetica Now Display", "Helvetica", sans-serif;
          font-size: clamp(10px, calc(var(--img-w, 0px) * 0.0095), 15px);
          font-weight: 400;
          line-height: 1.15;
          letter-spacing: 0.08em;
          color: rgba(255, 255, 255, 0.72);
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
            --soul-face-top: 0.98;
            --soul-face-left: 0.54;
            --soul-face-width: calc(var(--img-w, 0px) * 0.98);
            --soul-face-height: clamp(430px, calc(var(--img-h, 0px) * 0.9), 680px);
            --soul-copy-left: 46%;
            --soul-copy-width: min(88vw, calc(var(--img-w, 0px) * 0.95));
            --soul-copy-top: 82%;
            --soul-right-spine-right: clamp(54px, 14.5%, 98px);
            --soul-top-line-width: clamp(76px, calc(var(--soul-face-width) * 0.15), 128px);
            --soul-top-line-top: 8.8%;
          }

          .soul-title-cluster {
            right: clamp(22px, 8%, 54px);
          }

          .soul-fight-text {
            font-size: clamp(28px, calc(var(--img-w, 0px) * 0.054), 46px);
          }

          .soul-defense-badge {
            min-width: clamp(112px, calc(var(--img-w, 0px) * 0.17), 166px);
            height: clamp(26px, calc(var(--img-w, 0px) * 0.032), 34px);
            font-size: clamp(10px, calc(var(--img-w, 0px) * 0.016), 15px);
          }

          .soul-right-spine {
            top: -8%;
            height: 88%;
          }

          .soul-face-description {
            font-size: clamp(8px, calc(var(--img-w, 0px) * 0.0096), 11px);
            letter-spacing: 0.035em;
          }
        }

        @media (max-width: 480px) {
          .soul-face-root {
            --soul-face-top: 1.04;
            --soul-face-left: 0.535;
            --soul-face-width: calc(var(--img-w, 0px) * 1.02);
            --soul-face-height: clamp(390px, calc(var(--img-h, 0px) * 0.95), 560px);
            --soul-copy-left: 50%;
            --soul-copy-width: 94vw;
            --soul-copy-top: 83%;
            --soul-right-spine-right: 12%;
            --soul-top-line-width: 68px;
            --soul-top-line-top: 9.2%;
          }

          .soul-title-cluster {
            top: clamp(-14px, 2%, 8px);
            right: clamp(12px, 5%, 24px);
          }

          .soul-fight-text {
            font-size: clamp(25px, calc(var(--img-w, 0px) * 0.07), 38px);
          }

          .soul-defense-badge {
            min-width: clamp(94px, 31vw, 130px);
            height: 24px;
            margin-top: 10px;
            font-size: clamp(9px, 2.9vw, 12px);
          }

          .soul-right-spine {
            opacity: 0.72;
            top: -7%;
            height: 84%;
          }

          .soul-face-description {
            font-size: clamp(6.4px, 1.85vw, 8px);
            line-height: 1.24;
            letter-spacing: 0.025em;
          }

          .soul-face-tagline {
            margin-top: 28px;
            font-size: clamp(8px, 2.5vw, 11px);
            letter-spacing: 0.055em;
          }
        }
      `}</style>

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
          <div className="soul-fight-text">
            <span>Fight</span>
            <span className="unfair">Unfair</span>
          </div>
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
          <div className="soul-face-tagline">{TAGLINE}</div>
        </div>
      </div>
    </div>
  );
}
