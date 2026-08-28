import React from "react";
import SourceCodeProRegular from "../assets/fonts/SourceCodePro-Regular.otf";
import plusJakartaSans from "../assets/fonts/PlusJakartaSans[wght].ttf";
import YupariFont from "../assets/fonts/YapariTrial-Regular.ttf";
import YupariBoldFont from "../assets/fonts/YapariTrial-Bold.ttf";

// Import assets
import jetXray from "../assets/drones/Screenshot 2026-07-18 170559 2.png"; 
import flyingWingXray from "../assets/drones/27649cf75f64c46f63b85657fa56bb47 2.png"; 
import droneXrayLeft from "../assets/drones/MEGHA X0_flight 1 2.png"; 
import topDownPlane from "../assets/drones/ChatGPT Image Jul 2, 2026, 04_46_14 AM 3.png"; 
import sensorTurret from "../assets/drones/asdsada 1.png"; 
import radarTripod from "../assets/drones/Gemini_Generated_Image_ghrd4sghrd4sghrd 1 1.png"; 
import smallUavBox from "../assets/drones/Screenshot 2026-07-18 170559 3.png"; 
import operationalTerrain from "../assets/09f8626770d522bace35bbcf8ca7d0ff4eb5528d.webp";

export default function DefenseSystemsSection() {
  return (
    <>
      <section
        id="intelligent-defense-systems"
        className="defense-root relative isolate w-full overflow-hidden bg-black text-white"
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

          @font-face {
            font-family: "Yupari";
            src: url(${YupariFont}) format("truetype");
            font-weight: 400 900;
            font-style: normal;
            font-display: swap;
          }

          @font-face {
            font-family: "Yupari-Bold";
            src: url(${YupariBoldFont}) format("truetype");
            font-weight: 700 900;
            font-style: normal;
            font-display: swap;
          }

          .defense-root {
            z-index: 2;
            min-height: 1250px;
            overflow: hidden;
            font-family: "Source Code Pro", ui-monospace, monospace;
            background-color: #000;
          }

          .defense-bg {
            position: absolute;
            inset: 0;
            z-index: 0;
            background: 
              radial-gradient(circle at 15% 50%, rgba(20, 40, 95, 0.55) 0%, transparent 55%),
              radial-gradient(circle at 85% 45%, rgba(70, 55, 15, 0.35) 0%, transparent 50%),
              #000000;
            pointer-events: none;
          }

          .defense-stage {
            position: relative;
            z-index: 10;
            width: min(100%, 1440px);
            margin: 0 auto;
            padding: 40px 20px;
          }

          /* Fixed Tagline with explicit white/yellow text targeting */
          .defense-tagline {
            position: relative;
            z-index: 50;
            text-align: center;
            font-family: "Yupari", sans-serif;
            font-size: clamp(12px, 1.2vw, 16px);
            font-weight: 700;
            letter-spacing: 0.35em;
            margin-bottom: 12px;
            text-transform: uppercase;
            pointer-events: none;
          }

          .tagline-white {
            color: #ffffff !important;
            opacity: 1 !important;
          }

          .tagline-yellow {
            color: #e2f415 !important;
            opacity: 1 !important;
          }

          .defense-title-wrap {
            position: relative;
            z-index: 30;
            text-align: center;
            text-transform: uppercase;
            margin-bottom: 10px;
            pointer-events: none;
          }

          .defense-title-primary {
            font-family: "Yupari", sans-serif;
            font-size: clamp(24px, 3.2vw, 48px);
            font-weight: 300;
            letter-spacing: 0.38em;
            color: #ffffff;
            line-height: 1;
            margin: 0;
          }

          .defense-title-main {
            font-family: "Yupari-Bold", "Yupari", sans-serif;
            font-size: clamp(48px, 7vw, 100px);
            font-weight: 900;
            letter-spacing: 0.12em;
            color: #ffffff;
            line-height: 0.92;
            margin: 4px 0 0;
          }

          .defense-title-accent {
            color: #e2f415;
          }

          .defense-title-sub {
            font-family: "Yupari", sans-serif;
            font-size: clamp(14px, 2vw, 30px);
            font-weight: 400;
            letter-spacing: 0.55em;
            color: #ffffff;
            margin-top: 6px;
          }

          /* Canvas Layout & Image Blending */
          .defense-canvas {
            position: relative;
            width: 100%;
            height: 1150px;
            margin-top: -30px;
          }

          .transparent-asset {
            position: absolute;
            mix-blend-mode: screen;
            filter: contrast(115%) brightness(110%);
            pointer-events: none;
            user-select: none;
          }

          .transparent-asset img {
            width: 100%;
            height: auto;
            object-fit: contain;
            display: block;
          }

          /* 1. Primary Central Jet Fighter */
          .defense-center-jet {
            top: -18%;
            left: 51%;
            transform: translateX(-50%);
            width: clamp(770px, 312vw, 1150px);
            z-index: 15;
          }

          /* 2. Top-Left Small UAV */
          .defense-top-left-uav {
            top: 6%;
            left: 10%;
            width: clamp(230px, 115vw, 320px);
            z-index: 12;
          }

          /* 3. Middle-Left Recon Drone */
          .defense-left-drone {
            top: 36%;
            left: -5%;
            width: clamp(460px, 230vw, 640px);
            z-index: 11;
          }

          /* 4. Bottom-Left Optical Sensor Turret */
          .defense-turret {
            bottom: -5%;
            left: 7%;
            width: clamp(205px, 89vw, 285px);
            z-index: 13;
          }

          /* 5. Bottom-Center Flying Wing Stealth Drone */
          .defense-flying-wing {
            bottom: 0%;
            left: 52%;
            transform: translateX(-50%);
            width: clamp(340px, 154vw, 480px);
            z-index: 12;
          }

          /* 6. Right Side Top-Down Fighter Jet */
          .defense-right-plane {
            top: 48%;
            right: -5%;
            width: clamp(270px, 74vw, 410px);
            z-index: 11;
          }

          /* 7. Bottom-Right Radar Station Dish */
          .defense-radar {
            bottom: -3%;
            right: 21%;
            width: clamp(110px, 12vw, 180px);
            z-index: 13;
          }

          /* Operational Applications Section */
          .drone-ops-root {
            position: relative;
            z-index: 1;
            width: 100%;
            min-height: 750px;
            background: #000;
            color: #fff;
            font-family: "Plus Jakarta Sans", sans-serif;
          }

          .drone-ops-terrain {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            opacity: 0.22;
            mix-blend-mode: screen;
            pointer-events: none;
          }

          .drone-ops-stage {
            position: relative;
            z-index: 2;
            width: min(100%, 1440px);
            margin: 0 auto;
            padding: 60px 20px 80px;
          }

          .drone-ops-title {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 16px;
            font-size: clamp(26px, 3vw, 48px);
            font-weight: 600;
            text-transform: uppercase;
            text-align: center;
          }

          .drone-ops-title-box {
            position: relative;
            padding: 4px 16px;
            border: 1px solid rgba(255, 255, 255, 0.8);
            background: rgba(255, 255, 255, 0.05);
          }

          .drone-ops-yellow {
            color: #e2f415;
          }

          .drone-ops-grid {
            margin-top: 50px;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 40px 20px;
          }

          .drone-ops-card {
            position: relative;
            padding: 24px 16px;
            text-align: center;
            border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          }

          .drone-ops-index {
            position: absolute;
            top: 0;
            left: 10px;
            font-family: "Source Code Pro", monospace;
            font-size: 12px;
            color: rgba(255, 255, 255, 0.6);
          }

          .drone-ops-card h3 {
            font-size: clamp(15px, 1.3vw, 20px);
            font-weight: 600;
            text-transform: uppercase;
            margin: 0;
          }

          @media (max-width: 768px) {
            .drone-ops-grid {
              grid-template-columns: 1fr;
            }

            .defense-canvas {
              height: 700px;
            }
          }
        `}</style>

        <div className="defense-bg" aria-hidden="true" />

        <div className="defense-stage">
          <div className="defense-tagline">
            <span className="tagline-white">HANGAR </span>
            <span className="tagline-yellow">1</span>
            <span className="tagline-white">8</span>
          </div>

          <header className="defense-title-wrap">
            <h1 className="defense-title-primary">
              <span className="defense-title-accent">INTELL</span>IGENT
            </h1>
            <h2 className="defense-title-main">
              DEF<span className="defense-title-accent">E</span>NSE
            </h2>
            <div className="defense-title-sub">
              SYS<span className="defense-title-accent">TEMS</span>
            </div>
          </header>

          <div className="defense-canvas">
            {/* 1. Large Central Jet Fighter */}
            <div className="defense-center-jet transparent-asset">
              <img src={jetXray} alt="Central Jet Fighter X-Ray" />
            </div>

            {/* 2. Top-Left Small UAV */}
            <div className="defense-top-left-uav transparent-asset">
              <img src={smallUavBox} alt="Tactical UAV" />
            </div>

            {/* 3. Middle-Left Recon Drone */}
            <div className="defense-left-drone transparent-asset">
              <img src={droneXrayLeft} alt="Recon Drone" />
            </div>

            {/* 4. Bottom-Left Optical Sensor Turret */}
            <div className="defense-turret transparent-asset">
              <img src={sensorTurret} alt="Optical Sensor Turret" />
            </div>

            {/* 5. Bottom-Center Flying Wing Stealth Drone */}
            <div className="defense-flying-wing transparent-asset">
              <img src={flyingWingXray} alt="Flying Wing Stealth Drone" />
            </div>

            {/* 6. Right Side Top-Down Fighter */}
            <div className="defense-right-plane transparent-asset">
              <img src={topDownPlane} alt="Top-Down Fighter Plane" />
            </div>

            {/* 7. Bottom-Right Radar Station */}
            <div className="defense-radar transparent-asset">
              <img src={radarTripod} alt="Radar System" />
            </div>
          </div>
        </div>
      </section>

      {/* Operational Applications Section */}
      <section className="drone-ops-root">
        <img
          className="drone-ops-terrain"
          src={operationalTerrain}
          alt=""
          aria-hidden="true"
        />

        <div className="drone-ops-stage">
          <h2 className="drone-ops-title">
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