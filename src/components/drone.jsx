
import React from "react";
import SourceCodeProRegular from "../assets/fonts/SourceCodePro-Regular.otf";

import DroneAssembly from "../assets/vipoer assmbly 2.png";

const sourceCodePro = {
  fontFamily:
    "'Source Code Pro', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
};

export default function Drone() {
  return (
    <section className="relative isolate z-50 w-full bg-black text-white drone-root">
      <style>{`
        @font-face {
          font-family: "Source Code Pro";
          src: url(${SourceCodeProRegular}) format("opentype");
          font-weight: 400;
          font-style: normal;
          font-display: swap;
        }

        .drone-root {
          --drone-section-h: clamp(820px, 98vh, 1020px);
          --drone-shift: 0px;
          --drone-bg-left: 87%;
          --drone-bg-top: 50%;
          --drone-bg-width: clamp(720px, 56vw, 1120px);
          --drone-line-left: 49.5%;
          --drone-line-top: 27%;
          --drone-line-height: 45%;
          --drone-copy-left: clamp(185px, 15.5vw, 360px);
          --drone-copy-top: 62%;
          --drone-copy-width: min(48vw, 860px);
          --drone-copy-size: clamp(20px, 1.55vw, 34px);
          --drone-label-width: clamp(230px, 19vw, 360px);
          --drone-label-left: calc(var(--drone-line-left) - var(--drone-label-width));
          --drone-label-top: 43%;
          --drone-domain-top: 79%;
          --drone-domain-size: clamp(42px, 5vw, 96px);
          --drone-caption-top: 92%;
          --drone-read-top: 17%;
          --drone-read-left: 42%;
          --drone-read-size: clamp(12px, 1.05vw, 18px);
        }

        .drone-domain-title {
          font-family: "Yapari Trial", "Azonix", sans-serif;
          font-weight: 700;
          letter-spacing: 0.045em;
        }

        .drone-copy-title {
          font-family: "Yapari Trial Regular", "Yapari Trial", "Azonix", sans-serif;
          font-weight: 400;
          letter-spacing: 0.055em;
        }

        .drone-copy-title {
          font-size: var(--drone-copy-size);
          line-height: 0.92;
        }

        .drone-copy-title > div {
          display: block;
          width: max-content;
          max-width: none;
          white-space: nowrap;
        }

        .drone-domain-title {
          font-size: var(--drone-domain-size);
          line-height: 0.9;
          letter-spacing: 0.055em;
          white-space: nowrap;
        }

        .drone-hud-label {
          position: absolute;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: var(--drone-label-width);
          height: 30px;
          border: 1px solid rgba(255, 255, 255, 0.55);
          padding: 0 12px;
          font-size: 7px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.72);
          background: rgba(8, 10, 18, 0.26);
          --drone-corner-color: rgba(255, 255, 255, 0.78);
        }

        .drone-read-more {
          position: absolute;
          left: var(--drone-read-left);
          top: var(--drone-read-top);
          z-index: 42;
          display: inline-flex;
          align-items: center;
          gap: clamp(12px, 1.4vw, 22px);
          font-family: "Yapari Trial Regular", "Yapari Trial", "Azonix", sans-serif;
          font-size: var(--drone-read-size);
          font-weight: 400;
          letter-spacing: 0.08em;
          line-height: 1;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.9);
          transform: translateX(-50%);
        }

        .drone-read-more-label {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: clamp(126px, 10.8vw, 182px);
          height: clamp(25px, 2vw, 34px);
          padding: 0 clamp(14px, 1.2vw, 22px);
          border: 1px solid rgba(255, 255, 255, 0.78);
          background: rgba(7, 9, 18, 0.2);
          --drone-corner-color: rgba(255, 255, 255, 0.92);
        }

        .drone-box-corner {
          position: absolute;
          width: 10px;
          height: 10px;
          pointer-events: none;
          border-color: var(--drone-corner-color);
        }

        .drone-box-corner-tl {
          left: -3px;
          top: -3px;
          border-left: 2px solid rgba(255, 255, 255, 0.9);
          border-top: 2px solid rgba(255, 255, 255, 0.9);
          border-color: var(--drone-corner-color);
        }

        .drone-box-corner-tr {
          right: -3px;
          top: -3px;
          border-right: 2px solid rgba(255, 255, 255, 0.9);
          border-top: 2px solid rgba(255, 255, 255, 0.9);
          border-color: var(--drone-corner-color);
        }

        .drone-box-corner-bl {
          left: -3px;
          bottom: -3px;
          border-left: 2px solid rgba(255, 255, 255, 0.9);
          border-bottom: 2px solid rgba(255, 255, 255, 0.9);
          border-color: var(--drone-corner-color);
        }

        .drone-box-corner-br {
          right: -3px;
          bottom: -3px;
          border-right: 2px solid rgba(255, 255, 255, 0.9);
          border-bottom: 2px solid rgba(255, 255, 255, 0.9);
          border-color: var(--drone-corner-color);
        }

        .drone-read-more-chevrons {
          font-size: 1.55em;
          line-height: 0.72;
          letter-spacing: -0.18em;
          color: #fff;
        }

        .drone-hud-label .drone-box-corner {
          width: 9px;
          height: 9px;
        }

        .drone-hud-label-text {
          position: relative;
          z-index: 1;
        }

        .drone-center-line {
          background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.42), rgba(255, 255, 255, 0.28)),
            linear-gradient(180deg, transparent 0%, rgba(255, 255, 210, 0.08) 18%, rgba(255, 255, 180, 0.24) 38%, rgba(255, 255, 255, 0.9) 50%, rgba(255, 255, 150, 0.24) 62%, rgba(255, 255, 120, 0.08) 82%, transparent 100%);
          background-repeat: no-repeat;
          background-size: 100% 100%, 100% 48%;
          background-position: 0 0, 0 -54%;
          filter: drop-shadow(0 0 4px rgba(255, 255, 160, 0.18));
          will-change: background-position;
          animation: droneLineRunY 4s linear infinite;
        }

        @keyframes droneLineRunY {
          0% {
            background-position: 0 0, 0 -54%;
          }
          100% {
            background-position: 0 0, 0 154%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .drone-center-line {
            animation: none;
          }
        }

        @media (max-width: 1024px) {
          .drone-root {
            --drone-section-h: clamp(790px, 96vh, 940px);
            --drone-shift: 0px;
            --drone-bg-left: 86%;
            --drone-bg-top: 50%;
            --drone-bg-width: clamp(560px, 62vw, 880px);
            --drone-copy-left: 14vw;
            --drone-copy-top: 62%;
            --drone-copy-width: min(52vw, 620px);
            --drone-copy-size: clamp(17px, 2.35vw, 25px);
            --drone-label-top: 43%;
            --drone-domain-size: clamp(36px, 5.6vw, 70px);
            --drone-read-top: 16%;
          }
        }

        @media (max-width: 768px) {
          .drone-root {
            --drone-section-h: clamp(780px, 98vh, 940px);
            --drone-shift: 0px;
            --drone-bg-left: 84%;
            --drone-bg-top: 50%;
            --drone-bg-width: clamp(430px, 80vw, 620px);
            --drone-line-left: 50%;
            --drone-line-top: 30%;
            --drone-line-height: 38%;
            --drone-copy-left: 11vw;
            --drone-copy-top: 61%;
            --drone-copy-width: min(86vw, 440px);
            --drone-copy-size: clamp(14px, 2.95vw, 20px);
            --drone-label-width: min(44vw, 260px);
            --drone-label-top: 46%;
            --drone-domain-top: 80%;
            --drone-domain-size: clamp(28px, 7vw, 52px);
            --drone-caption-top: 91%;
            --drone-read-left: 46%;
            --drone-read-top: 15%;
          }

          .drone-domain-title {
            letter-spacing: 0.035em;
          }
        }

        @media (max-width: 480px) {
          .drone-root {
            --drone-section-h: 740px;
            --drone-shift: 0px;
            --drone-bg-left: 83%;
            --drone-bg-top: 50%;
            --drone-bg-width: clamp(340px, 94vw, 470px);
            --drone-line-left: 50%;
            --drone-line-top: 31%;
            --drone-line-height: 30%;
            --drone-copy-left: 11vw;
            --drone-copy-top: 60%;
            --drone-copy-width: 90vw;
            --drone-copy-size: clamp(12px, 3.75vw, 17px);
            --drone-label-width: min(58vw, 220px);
            --drone-label-left: 5vw;
            --drone-label-top: 48%;
            --drone-domain-top: 80%;
            --drone-domain-size: clamp(22px, 7.4vw, 36px);
            --drone-caption-top: 91%;
            --drone-read-left: 50%;
            --drone-read-top: 12%;
          }

          .drone-hud-label {
            height: 28px;
            font-size: 5.5px;
          }
        }
      `}</style>

      <div className="relative overflow-hidden" style={{ height: "var(--drone-section-h)" }}>
        <div className="relative h-full overflow-hidden z-0">
          {/* ✅ Move everything down together */}
          <div
            className="absolute inset-0 z-0"
            style={{ transform: "translateY(var(--drone-shift))" }}
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 z-0"
              style={{
                background:
                  "radial-gradient(circle at 13% 68%, rgba(82, 99, 225, 0.56) 0%, rgba(31, 43, 118, 0.36) 24%, rgba(0, 0, 0, 0) 54%), radial-gradient(circle at 92% 90%, rgba(168, 154, 50, 0.14) 0%, rgba(0,0,0,0) 32%)",
              }}
            />

            {/* MAIN UAV ASSEMBLY */}
            <img
              src={DroneAssembly}
              alt=""
              aria-hidden="true"
              className="
                absolute
                -translate-x-1/2 -translate-y-1/2
                object-contain
                z-0
                pointer-events-none select-none
              "
              style={{
                left: "var(--drone-bg-left)",
                top: "var(--drone-bg-top)",
                width: "var(--drone-bg-width)",
                height: "auto",
                opacity: 0.78,
              }}
            />

            <div className="absolute inset-0 bg-black/5 z-10" />

            <div className="drone-read-more" aria-label="Read more">
              <span className="drone-read-more-label">
                <span className="drone-box-corner drone-box-corner-tl" aria-hidden="true" />
                <span className="drone-box-corner drone-box-corner-tr" aria-hidden="true" />
                <span className="drone-box-corner drone-box-corner-bl" aria-hidden="true" />
                <span className="drone-box-corner drone-box-corner-br" aria-hidden="true" />
                READ MORE
              </span>
              <span className="drone-read-more-chevrons" aria-hidden="true">
                &gt;&gt;
              </span>
            </div>

            <div
              aria-hidden="true"
              className="absolute z-30 w-px drone-center-line"
              style={{
                left: "var(--drone-line-left)",
                top: "var(--drone-line-top)",
                height: "var(--drone-line-height)",
              }}
            />

            <div
              className="drone-copy-title absolute z-40 uppercase text-white"
              style={{
                left: "var(--drone-copy-left)",
                top: "var(--drone-copy-top)",
                width: "var(--drone-copy-width)",
              }}
            >
              <div>Simplified&nbsp;Development</div>
              <div>For AI-enabled</div>
              <div>Autonomy</div>
            </div>

            <div
              className="drone-hud-label z-40"
              style={{
                ...sourceCodePro,
                left: "var(--drone-label-left)",
                top: "var(--drone-label-top)",
              }}
            >
              <span className="drone-box-corner drone-box-corner-tl" aria-hidden="true" />
              <span className="drone-box-corner drone-box-corner-tr" aria-hidden="true" />
              <span className="drone-box-corner drone-box-corner-bl" aria-hidden="true" />
              <span className="drone-box-corner drone-box-corner-br" aria-hidden="true" />
              <span className="drone-hud-label-text">
                Agentic solutions for defense and intelligence
              </span>
            </div>

            <div
              className="absolute left-1/2 z-40 w-full -translate-x-1/2 px-5 text-center"
              style={{ top: "var(--drone-domain-top)" }}
            >
              <h2 className="drone-domain-title uppercase text-white">
                Multi D<span style={{ color: "#E3E41B" }}>o</span>main UAS
              </h2>
            </div>

            <p
              className="absolute left-1/2 z-40 max-w-[620px] -translate-x-1/2 px-6 text-center uppercase text-white/78"
              style={{
                ...sourceCodePro,
                top: "var(--drone-caption-top)",
                fontSize: "clamp(7px, 0.55vw, 10px)",
                lineHeight: 1.2,
                letterSpacing: "0.08em",
              }}
            >
              A 3D-printed intelligent UAV. Stealth design, long endurance, rapid
              deployment. Welcome to agentic warfare
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
