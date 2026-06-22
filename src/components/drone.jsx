
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
          --drone-section-h: clamp(760px, 92vh, 960px);
          --drone-shift: 0px;
          --drone-bg-left: 72%;
          --drone-bg-top: 56%;
          --drone-bg-width: clamp(620px, 58vw, 1120px);
          --drone-line-left: 49.5%;
          --drone-line-top: 31%;
          --drone-line-height: 36%;
          --drone-copy-left: clamp(24px, 5vw, 112px);
          --drone-copy-top: 42%;
          --drone-copy-width: clamp(310px, 34vw, 570px);
          --drone-copy-size: clamp(26px, 2.55vw, 52px);
          --drone-label-left: var(--drone-copy-left);
          --drone-label-top: 70%;
          --drone-domain-top: 80%;
          --drone-domain-size: clamp(42px, 5vw, 96px);
          --drone-caption-top: 90%;
          --drone-command-top: 22px;
          --drone-command-size: clamp(11px, 1vw, 17px);
        }

        .drone-copy-title,
        .drone-domain-title {
          font-family: "Yapari Trial", "Azonix", sans-serif;
          font-weight: 700;
          letter-spacing: 0.045em;
        }

        .drone-copy-title {
          font-size: var(--drone-copy-size);
          line-height: 0.92;
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
          min-width: clamp(190px, 18vw, 280px);
          height: 30px;
          border: 1px solid rgba(255, 255, 255, 0.55);
          padding: 0 12px;
          font-size: 7px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.72);
          background: rgba(8, 10, 18, 0.26);
        }

        .drone-hud-label::before,
        .drone-hud-label::after {
          content: "";
          position: absolute;
          width: 9px;
          height: 9px;
          pointer-events: none;
        }

        .drone-hud-label::before {
          left: -2px;
          bottom: -2px;
          border-left: 2px solid rgba(255, 255, 255, 0.78);
          border-bottom: 2px solid rgba(255, 255, 255, 0.78);
        }

        .drone-hud-label::after {
          right: -2px;
          top: -2px;
          border-right: 2px solid rgba(255, 255, 255, 0.78);
          border-top: 2px solid rgba(255, 255, 255, 0.78);
        }

        @media (max-width: 1024px) {
          .drone-root {
            --drone-section-h: clamp(720px, 90vh, 900px);
            --drone-shift: 0px;
            --drone-bg-left: 74%;
            --drone-bg-top: 56%;
            --drone-bg-width: clamp(520px, 62vw, 840px);
            --drone-copy-left: 4vw;
            --drone-copy-top: 43%;
            --drone-copy-width: clamp(280px, 38vw, 430px);
            --drone-copy-size: clamp(22px, 3vw, 38px);
            --drone-label-top: 70%;
            --drone-domain-size: clamp(36px, 5.6vw, 70px);
            --drone-command-top: 18px;
          }
        }

        @media (max-width: 768px) {
          .drone-root {
            --drone-section-h: clamp(760px, 96vh, 920px);
            --drone-shift: 0px;
            --drone-bg-left: 66%;
            --drone-bg-top: 55%;
            --drone-bg-width: clamp(460px, 88vw, 680px);
            --drone-line-left: 50%;
            --drone-line-top: 34%;
            --drone-line-height: 30%;
            --drone-copy-left: 5vw;
            --drone-copy-top: 35%;
            --drone-copy-width: min(52vw, 360px);
            --drone-copy-size: clamp(20px, 4.5vw, 34px);
            --drone-label-top: 66%;
            --drone-domain-top: 79%;
            --drone-domain-size: clamp(28px, 7vw, 52px);
            --drone-caption-top: 88%;
            --drone-command-top: 16px;
          }

          .drone-domain-title {
            letter-spacing: 0.035em;
          }
        }

        @media (max-width: 480px) {
          .drone-root {
            --drone-section-h: 700px;
            --drone-shift: 0px;
            --drone-bg-left: 64%;
            --drone-bg-top: 53%;
            --drone-bg-width: clamp(390px, 112vw, 520px);
            --drone-line-left: 50%;
            --drone-line-top: 37%;
            --drone-line-height: 24%;
            --drone-copy-left: 5vw;
            --drone-copy-top: 34%;
            --drone-copy-width: 58vw;
            --drone-copy-size: clamp(18px, 5.4vw, 26px);
            --drone-label-top: 64%;
            --drone-domain-top: 78%;
            --drone-domain-size: clamp(22px, 7.4vw, 36px);
            --drone-caption-top: 87%;
            --drone-command-top: 14px;
          }

          .drone-hud-label {
            min-width: 165px;
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

            <div
              aria-hidden="true"
              className="absolute z-30 w-px bg-white/40"
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
              <div>Simplified Development</div>
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
              Agentic solutions for defense and intelligence
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

            {/* TOP TEXT */}
            <div
              className="absolute left-1/2 z-50 w-full -translate-x-1/2 px-6"
              style={{ ...sourceCodePro, top: "var(--drone-command-top)" }}
            >
              <div className="mx-auto" style={{ maxWidth: "min(1224px, 92vw)" }}>
                <p
                  className="text-center uppercase font-normal leading-[1.15] whitespace-normal sm:whitespace-nowrap"
                  style={{ fontSize: "var(--drone-command-size)" }}
                >
                  Command &amp; Control (C2) is an AI-powered battle management &amp;
                  command control platform
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
