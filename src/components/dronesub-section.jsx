import React from "react";
import SourceCodeProRegular from "../assets/fonts/SourceCodePro-Regular.otf";
import angleJet from "../assets/angle 6.png";
import angleMeghaX0 from "../assets/angle 2 2.png";
import angleRaven from "../assets/angle 2 3.png";
import angleEvtol from "../assets/sadadadad 1.png";
import angleFenrir from "../assets/Angle view 9.png";

const MEGHA_X_COPY =
  "ARC OS autonomy core, a combat-proven AI pilot. This software enables the drone to execute complex air-to-air and air-to-surface missions completely independently of GPS and communications, making it highly resilient in heavily jammed electronic warfare environments. While it operates with machine-speed decision-making, it features an open architecture built for human-commanded swarms where a single operator can oversee a team of multiple MEGHA X's.";

const PRODUCTS = [
  {
    id: "x0",
    title: "MEGHA X0",
    image: angleMeghaX0,
    imageClass: "drone-sub-x0-image",
    textClass: "drone-sub-x0-copy",
    lines: [
      "Communication range - Up to 45 km",
      "Flight duration - Up to 3,5 hrs",
      "Max. flight altitude - 7000 m",
      "Cruise speed - 60 km/h",
      "Max. flight speed - 120 km/h",
      "Take-off weight - 5,5 kg",
      "The system fits into two backpacks",
      "Hand launch and automatic belly landing",
      "Man-portable autonomous reconnaissance / surveillance / ONE-WAY STRIKER",
    ],
  },
  {
    id: "evtol",
    title: "MEGHA 1X eVTOL",
    image: angleEvtol,
    imageClass: "drone-sub-evtol-image",
    textClass: "drone-sub-evtol-copy",
    lines: [
      "Operational range - Up to 180-500 km",
      "Flight duration - Up to 4-6 hrs",
      "Max. flight altitude - 7000 ft",
      "Cruise speed - 60 km/h",
      "Max. flight speed - 120 km/h",
      "Take-off weight - 10 kg",
      "The system fits into two backpacks",
      "VTOL launch and automatic VTOL landing",
      "Autonomous reconnaissance / surveillance",
    ],
  },
  {
    id: "raven",
    title: "RAVEN 001",
    subtitle: "MAN-portable loitering munitions",
    image: angleRaven,
    imageClass: "drone-sub-raven-image",
    textClass: "drone-sub-raven-copy",
    lines: [
      "Communication range - Up to 15 km",
      "Flight duration - Up to 2 hrs",
      "Max. flight altitude - 500-1000 m",
      "Cruise speed - 90 km/h",
      "Max. flight speed - 160 km/h",
      "Take-off weight - 1.7 kg",
      "The system fits into ONE backpacks",
      "Hand launch and automatic belly landing",
      "Man-portable autonomous reconnaissance / surveillance / ONE-WAY STRIKER",
    ],
  },
  {
    id: "fenrir",
    title: "MEGHA FENRIR 002",
    subtitle: "THE INTERCEPTOR",
    image: angleFenrir,
    imageClass: "drone-sub-fenrir-image",
    textClass: "drone-sub-fenrir-copy",
    lines: [
      "MAN-portable",
      "Communication range - AUTONOMY",
      "Flight duration - Up to 15 min",
      "Max. flight altitude - 500 m",
      "Max. flight speed - 250-300 km/h",
      "Specifically designed to detect, track, and neutralize hostile drones mid-air",
    ],
  },
];

const sourceCodePro = {
  fontFamily:
    "'Source Code Pro', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
};

function ProductNode({ item }) {
  return (
    <article className={`drone-sub-node drone-sub-node-${item.id}`}>
      <img
        src={item.image}
        alt=""
        aria-hidden="true"
        className={`drone-sub-aircraft ${item.imageClass}`}
      />

      <div className={`drone-sub-copy ${item.textClass}`}>
        <h3>{item.title}</h3>
        {item.subtitle ? <p className="drone-sub-subtitle">{item.subtitle}</p> : null}
        <ul>
          {item.lines.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function DroneSubSection() {
  return (
    <section className="drone-sub-root relative isolate w-full overflow-hidden bg-black text-white">
      <style>{`
        @font-face {
          font-family: "Source Code Pro";
          src: url(${SourceCodeProRegular}) format("opentype");
          font-weight: 400;
          font-style: normal;
          font-display: swap;
        }

        .drone-sub-root {
          --olive-panel: #2e2811;
          min-height: clamp(1060px, 116vh, 1260px);
          font-family: "Source Code Pro", ui-monospace, monospace;
        }

        .drone-sub-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          background:
            linear-gradient(90deg, #000 0%, #000 43%, rgba(46,40,17,0.54) 57%, rgba(46,40,17,0.94) 100%),
            radial-gradient(circle at 87% 28%, rgba(112,100,41,0.34), rgba(46,40,17,0) 35%);
        }

        .drone-sub-bg::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0,0,0,0.1), rgba(0,0,0,0.28) 58%, rgba(0,0,0,0.5));
          pointer-events: none;
        }

        .drone-sub-stage {
          position: relative;
          z-index: 10;
          width: min(100%, 1800px);
          min-height: inherit;
          margin: 0 auto;
        }

        .drone-sub-rule {
          position: absolute;
          left: 49.35%;
          width: 1px;
          background: linear-gradient(180deg, transparent, rgba(255,255,255,0.62) 12%, rgba(255,255,255,0.44) 88%, transparent);
          z-index: 16;
        }

        .drone-sub-rule-1 { top: 19.2%; height: 7.3%; }
        .drone-sub-rule-2 { top: 33.5%; height: 9.5%; }
        .drone-sub-rule-3 { top: 52%; height: 10%; }
        .drone-sub-rule-4 { top: 72%; height: 11%; }

        .drone-sub-feature {
          position: absolute;
          left: 4.4%;
          top: 5.8%;
          z-index: 20;
          width: min(29vw, 440px);
        }

        .drone-sub-feature img {
          display: block;
          width: 100%;
          opacity: 0.96;
          filter: drop-shadow(0 0 24px rgba(255,255,255,0.08));
        }

        .drone-sub-badge {
          position: absolute;
          left: 31.8%;
          top: 8.2%;
          z-index: 28;
          display: inline-flex;
          align-items: center;
          color: rgba(255,255,255,0.94);
          font-family: "Yapari Trial", "Azonix", sans-serif;
          font-size: clamp(17px, 1.75vw, 31px);
          font-weight: 700;
          line-height: 1;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          white-space: nowrap;
          gap: clamp(6px, 0.45vw, 10px);
        }

        .drone-sub-badge-core {
          position: relative;
          display: inline-flex;
          align-items: center;
          height: clamp(28px, 2.55vw, 42px);
          padding: 0 clamp(10px, 1.1vw, 18px);
          border: 1px solid rgba(255,255,255,0.82);
          background: rgba(8, 9, 14, 0.42);
        }

        .drone-sub-badge-core::before,
        .drone-sub-badge-core::after {
          content: "";
          position: absolute;
          width: 11px;
          height: 11px;
        }

        .drone-sub-badge-core::before {
          left: -3px;
          bottom: -3px;
          border-left: 2px solid rgba(255,255,255,0.82);
          border-bottom: 2px solid rgba(255,255,255,0.82);
        }

        .drone-sub-badge-core::after {
          right: -3px;
          top: -3px;
          border-right: 2px solid rgba(255,255,255,0.82);
          border-top: 2px solid rgba(255,255,255,0.82);
        }

        .drone-sub-badge-text {
          display: inline-block;
        }

        .drone-sub-feature-copy {
          position: absolute;
          left: 32%;
          top: 12.6%;
          z-index: 24;
          width: min(26vw, 420px);
          color: rgba(255,255,255,0.82);
          text-transform: uppercase;
        }

        .drone-sub-feature-copy h3,
        .drone-sub-subtitle {
          margin: 0;
          color: rgba(255,255,255,0.9);
          font-size: clamp(8px, 0.67vw, 12px);
          font-weight: 700;
          line-height: 1.15;
          letter-spacing: 0.055em;
          text-transform: uppercase;
        }

        .drone-sub-feature-copy p {
          margin: 10px 0 0;
          font-size: clamp(6px, 0.46vw, 8.5px);
          line-height: 1.32;
          letter-spacing: 0.03em;
        }

        .drone-sub-node,
        .drone-sub-aircraft,
        .drone-sub-copy {
          position: absolute;
        }

        .drone-sub-node {
          inset: 0;
          z-index: 18;
          pointer-events: none;
        }

        .drone-sub-aircraft {
          z-index: 18;
          opacity: 0.82;
          mix-blend-mode: screen;
          filter: drop-shadow(0 0 18px rgba(255,255,255,0.08));
          pointer-events: none;
          user-select: none;
        }

        .drone-sub-copy {
          z-index: 24;
          color: rgba(255,255,255,0.82);
          text-transform: uppercase;
        }

        .drone-sub-copy h3 {
          margin: 0;
          font-family: "Yapari Trial", "Azonix", sans-serif;
          font-size: clamp(24px, 2vw, 39px);
          font-weight: 700;
          line-height: 0.9;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          white-space: nowrap;
          color: #fff;
        }

        .drone-sub-copy ul {
          margin: 12px 0 0;
          padding: 0;
          list-style: none;
          font-size: clamp(6.5px, 0.48vw, 9px);
          line-height: 1.38;
          letter-spacing: 0.015em;
        }

        .drone-sub-x0-image {
          right: -1.5%;
          top: 8.8%;
          width: min(32vw, 535px);
        }

        .drone-sub-x0-copy {
          left: 54.1%;
          top: 22.4%;
          width: min(22vw, 336px);
        }

        .drone-sub-evtol-image {
          left: 0.5%;
          top: 35%;
          width: min(42vw, 730px);
        }

        .drone-sub-evtol-copy {
          left: 33.6%;
          top: 45%;
          width: min(27vw, 430px);
        }

        .drone-sub-raven-image {
          right: -0.8%;
          top: 56.8%;
          width: min(34vw, 600px);
        }

        .drone-sub-raven-copy {
          left: 52.4%;
          top: 61%;
          width: min(29vw, 460px);
        }

        .drone-sub-fenrir-image {
          left: 8%;
          top: 75%;
          width: min(25vw, 400px);
        }

        .drone-sub-fenrir-copy {
          left: 30.3%;
          top: 83%;
          width: min(32vw, 520px);
        }

        .drone-sub-fenrir-copy h3 {
          font-size: clamp(20px, 1.75vw, 34px);
        }

        @media (max-width: 1100px) {
          .drone-sub-root {
            min-height: clamp(980px, 125vh, 1280px);
          }

          .drone-sub-feature-copy {
            width: 31vw;
          }

          .drone-sub-x0-copy,
          .drone-sub-raven-copy {
            left: 50.5%;
          }

          .drone-sub-evtol-copy {
            left: 32%;
          }
        }

        @media (max-width: 768px) {
          .drone-sub-root {
            min-height: auto;
          }

          .drone-sub-bg {
            background: linear-gradient(180deg, #000 0%, rgba(46,40,17,0.96) 45%, #2e2811 100%);
          }

          .drone-sub-stage {
            min-height: auto;
            padding: 52px 22px 80px;
          }

          .drone-sub-rule,
          .drone-sub-badge {
            display: none;
          }

          .drone-sub-feature,
          .drone-sub-feature-copy,
          .drone-sub-node,
          .drone-sub-aircraft,
          .drone-sub-copy {
            position: relative;
            inset: auto;
            left: auto;
            right: auto;
            top: auto;
            bottom: auto;
            width: 100%;
          }

          .drone-sub-feature {
            margin-bottom: 18px;
          }

          .drone-sub-feature img,
          .drone-sub-aircraft {
            width: min(92vw, 560px);
            margin: 0 auto;
            display: block;
          }

          .drone-sub-feature-copy,
          .drone-sub-copy {
            width: min(92vw, 460px);
            margin: 0 auto 54px;
          }

          .drone-sub-node {
            margin-bottom: 70px;
          }

          .drone-sub-copy h3 {
            font-size: clamp(24px, 8vw, 42px);
          }
        }
      `}</style>

      <div className="drone-sub-bg" aria-hidden="true" />

      <div className="drone-sub-stage">
        <span className="drone-sub-rule drone-sub-rule-1" aria-hidden="true" />
        <span className="drone-sub-rule drone-sub-rule-2" aria-hidden="true" />
        <span className="drone-sub-rule drone-sub-rule-3" aria-hidden="true" />
        <span className="drone-sub-rule drone-sub-rule-4" aria-hidden="true" />

        <div className="drone-sub-feature" aria-hidden="true">
          <img src={angleJet} alt="" />
        </div>

        <div className="drone-sub-badge" aria-hidden="true">
          <span className="drone-sub-badge-core">MEGHA X</span>
          <span className="drone-sub-badge-text">STRIKER</span>
        </div>

        <div className="drone-sub-feature-copy" style={sourceCodePro}>
          <h3>AI-PILOTED VTOL FIGHTER</h3>
          <p>{MEGHA_X_COPY}</p>
        </div>

        {PRODUCTS.map((item) => (
          <ProductNode key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
