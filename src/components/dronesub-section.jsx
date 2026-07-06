import React from "react";
import SourceCodeProRegular from "../assets/fonts/SourceCodePro-Regular.otf";
import angleJet from "../assets/angle 6.png";
import angleMeghaX0 from "../assets/angle 2 2.png";
import angleRaven from "../assets/angle 2 3.png";
import angleEvtol from "../assets/sadadadad 1.png";
import angleFenrir from "../assets/Angle view 9.png";
import operationalTerrain from "../assets/09f8626770d522bace35bbcf8ca7d0ff4eb5528d.png";
import plusJakartaSans from "../assets/fonts/PlusJakartaSans[wght].ttf";

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
    <>
      <section
        id="megha-uas"
        className="drone-sub-root relative isolate w-full overflow-hidden bg-black text-white"
      >
        <style>{`
        @font-face {
          font-family: "Source Code Pro";
          src: url(${SourceCodeProRegular}) format("opentype");
          font-weight: 400;
          font-style: normal;
          font-display: swap;
        }

        @font-face {
          font-family: "Plus Jakarta Sans";
          src: url(${plusJakartaSans}) format("truetype");
          font-weight: 100 900;
          font-style: normal;
          font-display: swap;
        }

        .drone-sub-root {
          --olive-panel: #2e2811;
          --drone-sub-header-height: clamp(230px, 19.8vw, 380px);
          --drone-sub-catalog-height: clamp(1060px, 116vh, 1260px);
          z-index: 2;
          min-height: calc(var(--drone-sub-header-height) + var(--drone-sub-catalog-height));
          overflow: visible;
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
          background: linear-gradient(
            180deg,
            rgba(0,0,0,0.1) 0%,
            rgba(0,0,0,0.28) 58%,
            rgba(0,0,0,0.72) 86%,
            #000 100%
          );
          pointer-events: none;
        }

        .drone-sub-stage {
          position: relative;
          z-index: 10;
          width: min(100%, 1800px);
          min-height: inherit;
          margin: 0 auto;
        }

        .drone-sub-header {
          position: absolute;
          inset: 0 0 auto;
          z-index: 30;
          height: var(--drone-sub-header-height);
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: clamp(34px, 2.9vw, 56px);
          text-align: center;
          text-transform: uppercase;
        }

        .drone-sub-header::before {
          content: "";
          position: absolute;
          top: 0;
          left: 50%;
          width: 1px;
          height: clamp(18px, 1.25vw, 24px);
          background: rgba(255,255,255,0.72);
          transform: translateX(-50%);
        }

        .drone-sub-title {
          margin: 0;
          color: #fff;
          font-family: "Yapari Trial", "Azonix", sans-serif;
          font-size: clamp(72px, 8.55vw, 164px);
          font-style: normal;
          font-weight: 700;
          line-height: 0.9;
          letter-spacing: 5px;
          white-space: nowrap;
        }

        .drone-sub-title-accent {
          color: #f4ed15;
        }

        .drone-sub-intro {
          width: min(679px, calc(100% - 40px));
          min-height: 20px;
          margin: clamp(22px, 1.45vw, 28px) 0 0;
          color: #fff;
          font-family: "Source Code Pro", ui-monospace, monospace;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          text-align: center;
          text-transform: uppercase;
        }

        .drone-sub-catalog {
          position: absolute;
          inset: var(--drone-sub-header-height) 0 auto;
          height: var(--drone-sub-catalog-height);
        }

        .drone-sub-rule {
          position: absolute;
          left: 49.35%;
          width: 1px;
          background:
            linear-gradient(180deg, transparent, rgba(255,255,255,0.62) 12%, rgba(255,255,255,0.44) 88%, transparent),
            linear-gradient(180deg, transparent 0%, rgba(255,255,210,0.08) 18%, rgba(255,255,180,0.24) 38%, rgba(255,255,255,0.9) 50%, rgba(255,255,150,0.24) 62%, rgba(255,255,120,0.08) 82%, transparent 100%);
          background-repeat: no-repeat;
          background-size: 100% 100%, 100% 48%;
          background-position: 0 0, 0 -54%;
          filter: drop-shadow(0 0 4px rgba(255,255,160,0.18));
          will-change: background-position;
          animation: droneSubLineRunY 4s linear infinite;
          z-index: 16;
        }

        .drone-sub-rule-1 { top: 19.2%; height: 7.3%; }
        .drone-sub-rule-2 { top: 33.5%; height: 9.5%; animation-delay: 0.38s; }
        .drone-sub-rule-3 { top: 52%; height: 10%; animation-delay: 0.76s; }
        .drone-sub-rule-4 { top: 72%; height: 11%; animation-delay: 1.14s; }

        @keyframes droneSubLineRunY {
          0% {
            background-position: 0 0, 0 -54%;
          }
          100% {
            background-position: 0 0, 0 154%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .drone-sub-rule {
            animation: none;
          }
        }

        .drone-sub-feature {
          position: absolute;
          left: 2.2%;
          top: 0.3%;
          z-index: 20;
          width: min(33vw, 535px);
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
          top: 13.8%;
          width: min(38vw, 680px);
        }

        .drone-sub-x0-copy {
          left: 54.1%;
          top: 34%;
          width: min(22vw, 336px);
        }

        .drone-sub-evtol-image {
          left: 0.5%;
          top: 47%;
          width: min(42vw, 730px);
        }

        .drone-sub-evtol-copy {
          left: 33.6%;
          top: 59%;
          width: min(27vw, 430px);
        }

        .drone-sub-raven-image {
          right: -0.8%;
          top: 68%;
          width: min(34vw, 600px);
        }

        .drone-sub-raven-copy {
          left: 52.4%;
          top: 73%;
          width: min(29vw, 460px);
        }

        .drone-sub-fenrir-image {
          left: 8%;
          top: 86%;
          width: min(25vw, 400px);
        }

        .drone-sub-fenrir-copy {
          left: 30.3%;
          top: 91%;
          width: min(32vw, 520px);
        }

        .drone-sub-fenrir-copy h3 {
          font-size: clamp(20px, 1.75vw, 34px);
        }

        .drone-ops-root {
          position: relative;
          z-index: 1;
          isolation: isolate;
          width: 100%;
          height: clamp(780px, 57.8vw, 1110px);
          overflow: hidden;
          background: #000;
          color: #fff;
          font-family: "Yapari Trial Regular", "Yapari Trial", "Azonix", sans-serif;
        }

        .drone-ops-terrain {
          position: absolute;
          inset: 0;
          z-index: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: 50% 50%;
          opacity: 0.34;
          mix-blend-mode: screen;
          pointer-events: none;
          user-select: none;
        }

        .drone-ops-root::after {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 1;
          background:
            linear-gradient(180deg, #000 0%, rgba(0,0,0,0.06) 25%, rgba(0,0,0,0.16) 100%),
            radial-gradient(circle at 50% 42%, rgba(255,255,255,0.025), transparent 46%);
          pointer-events: none;
        }

        .drone-ops-stage {
          position: relative;
          z-index: 2;
          width: min(100%, 1920px);
          height: 100%;
          margin: 0 auto;
        }

        .drone-ops-title {
          position: absolute;
          top: 14%;
          left: 50%;
          display: flex;
          align-items: center;
          gap: clamp(16px, 1.25vw, 24px);
          margin: 0;
          transform: translateX(-50%);
          color: #fff;
          font-family: "Yapari Trial Regular", "Yapari Trial", sans-serif;
          font-size: clamp(40px, 3.333vw, 64px);
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          letter-spacing: 2px;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .drone-ops-title-box {
          position: relative;
          display: inline-flex;
          align-items: center;
          min-height: 1.18em;
          padding: 0.05em 0.25em 0.02em;
          border: 1px solid rgba(255,255,255,0.86);
          background: rgba(255,255,255,0.055);
        }

        .drone-ops-title-box::before,
        .drone-ops-title-box::after {
          content: "";
          position: absolute;
          width: 14px;
          height: 14px;
          pointer-events: none;
        }

        .drone-ops-title-box::before {
          left: -3px;
          top: -3px;
          border-left: 2px solid #fff;
          border-top: 2px solid #fff;
        }

        .drone-ops-title-box::after {
          right: -3px;
          bottom: -3px;
          border-right: 2px solid #fff;
          border-bottom: 2px solid #fff;
        }

        .drone-ops-yellow {
          color: #e3e41b;
        }

        .drone-ops-grid {
          position: absolute;
          left: 50%;
          top: 33%;
          width: min(calc(100% - 120px), 1731px);
          height: min(64%, 708px);
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          grid-template-rows: repeat(2, minmax(0, 1fr));
          transform: translateX(-50%);
        }

        .drone-ops-grid::before,
        .drone-ops-grid::after {
          content: "";
          position: absolute;
          top: 7%;
          bottom: 0;
          width: 1px;
          background: linear-gradient(180deg, rgba(255,255,255,0.78), rgba(255,255,255,0.42));
        }

        .drone-ops-grid::before {
          left: 33.333%;
        }

        .drone-ops-grid::after {
          left: 66.666%;
        }

        .drone-ops-card {
          position: relative;
          min-width: 0;
          display: flex;
          width: 100%;
          height: 100%;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          padding: 42px clamp(12px, 1.5vw, 28px) 10px;
          text-align: center;
        }

        .drone-ops-card:nth-child(-n+3)::after {
          content: "";
          position: absolute;
          left: 7%;
          right: 7%;
          bottom: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.5) 12%, rgba(255,255,255,0.5) 88%, transparent);
        }

        .drone-ops-index {
          position: absolute;
          top: 3px;
          left: 4%;
          font-family: "Source Code Pro", ui-monospace, monospace;
          font-size: clamp(9px, 0.67vw, 13px);
          font-weight: 400;
          letter-spacing: 0.02em;
        }

        .drone-ops-card h3 {
          margin: 0;
          color: #fff;
          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: clamp(18px, 1.667vw, 32px);
          font-style: normal;
          font-weight: 600;
          line-height: 32px;
          letter-spacing: 0;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .drone-ops-card:nth-child(2) h3 {
          position: relative;
          padding: 0.34em 0.72em 0.26em;
          border: 1px solid rgba(255,255,255,0.78);
          background: rgba(255,255,255,0.045);
        }

        @media (max-width: 1100px) {
          .drone-sub-root {
            --drone-sub-catalog-height: clamp(980px, 125vh, 1280px);
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
          }

          .drone-sub-header {
            position: relative;
            inset: auto;
            height: auto;
            padding: 44px 18px 58px;
          }

          .drone-sub-header::before {
            height: 18px;
          }

          .drone-sub-title {
            font-size: clamp(42px, 12.2vw, 78px);
            line-height: 0.94;
            letter-spacing: clamp(1px, 0.7vw, 3px);
          }

          .drone-sub-intro {
            width: min(560px, 100%);
            margin-top: 20px;
            font-size: clamp(9px, 2.55vw, 13px);
            line-height: 1.45;
          }

          .drone-sub-catalog {
            position: relative;
            inset: auto;
            height: auto;
            padding: 0 22px 80px;
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

          .drone-ops-root {
            height: auto;
            min-height: 1160px;
          }

          .drone-ops-terrain {
            object-position: 50% 50%;
          }

          .drone-ops-stage {
            min-height: 1160px;
            padding: 92px 22px 78px;
          }

          .drone-ops-title {
            position: relative;
            top: auto;
            left: auto;
            flex-direction: column;
            gap: 14px;
            width: 100%;
            transform: none;
            font-size: clamp(35px, 9.6vw, 64px);
            line-height: 0.96;
            text-align: center;
            white-space: normal;
          }

          .drone-ops-grid {
            position: relative;
            left: auto;
            top: auto;
            width: min(100%, 620px);
            height: auto;
            margin: 92px auto 0;
            grid-template-columns: 1fr;
            grid-template-rows: none;
            transform: none;
          }

          .drone-ops-grid::before,
          .drone-ops-grid::after {
            display: none;
          }

          .drone-ops-card {
            width: 100%;
            height: auto;
            min-height: 132px;
            padding: 38px 14px 22px;
          }

          .drone-ops-card::after,
          .drone-ops-card:nth-child(-n+3)::after {
            content: "";
            position: absolute;
            left: 8%;
            right: 8%;
            bottom: 0;
            height: 1px;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.5) 14%, rgba(255,255,255,0.5) 86%, transparent);
          }

          .drone-ops-index {
            left: 8%;
          }

          .drone-ops-card h3 {
            font-size: clamp(18px, 5vw, 28px);
            line-height: 1.1;
            white-space: normal;
          }
        }
      `}</style>

      <div className="drone-sub-bg" aria-hidden="true" />

      <div className="drone-sub-stage">
        <header className="drone-sub-header">
          <h2 className="drone-sub-title">
            ME<span className="drone-sub-title-accent">G</span>HA UAS
          </h2>
          <p className="drone-sub-intro">
            A 3D-printed intelligent UAV. Stealth design, long endurance, rapid deployment.
            Welcome to agentic warfare
          </p>
        </header>

        <div className="drone-sub-catalog">
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
      </div>
      </section>

      <section className="drone-ops-root" aria-labelledby="drone-ops-heading">
        <img
          className="drone-ops-terrain"
          src={operationalTerrain}
          alt=""
          aria-hidden="true"
        />

        <div className="drone-ops-stage">
          <h2 id="drone-ops-heading" className="drone-ops-title">
            <span className="drone-ops-title-box">
              Operati<span className="drone-ops-yellow">o</span>nal
            </span>
            <span>Applications</span>
          </h2>

          <div className="drone-ops-grid">
            <article className="drone-ops-card">
              <span className="drone-ops-index">01</span>
              <h3>
                Area <span className="drone-ops-yellow">Reconnaissance</span>
              </h3>
            </article>

            <article className="drone-ops-card">
              <span className="drone-ops-index">02</span>
              <h3>
                Search &amp; <span className="drone-ops-yellow">Rescue</span>
              </h3>
            </article>

            <article className="drone-ops-card">
              <span className="drone-ops-index">03</span>
              <h3>
                <span className="drone-ops-yellow">Border</span> Security &amp; Patrol
              </h3>
            </article>

            <article className="drone-ops-card">
              <span className="drone-ops-index">04</span>
              <h3>
                <span className="drone-ops-yellow">Counter</span>-UAS &amp; Protection
              </h3>
            </article>

            <article className="drone-ops-card">
              <span className="drone-ops-index">05</span>
              <h3>
                Precision <span className="drone-ops-yellow">Strike</span> / Loitering
                <br />
                Munition
              </h3>
            </article>

            <article className="drone-ops-card">
              <span className="drone-ops-index">06</span>
              <h3>
                Maritime <span className="drone-ops-yellow">ISR</span>
              </h3>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
