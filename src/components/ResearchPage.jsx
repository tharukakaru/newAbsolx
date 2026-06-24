import React from "react";
import yapariBold from "../assets/fonts/YapariTrial-Bold.ttf";
import yapariRegular from "../assets/fonts/YapariTrial-Regular.ttf";
import archivoRegular from "../assets/fonts/archivo.regular.ttf";
import plusJakartaSans from "../assets/fonts/PlusJakartaSans[wght].ttf";
import uavBlueprintVideo from "../assets/uav-blueprint-4k-alpha.mp4";
import shahedDroneImage from "../assets/US-Shahed-136-drone 1.png";
import launchDroneImage from "../assets/8611730 1 (1).png";
import abstractShapeRender from "../assets/Abstract Shape Render 1 (1).png";
import rightShapeRender from "../assets/Image (1).png";
import glassFragmentsImage from "../assets/jeannotmagcd_96363_small_fragments_of_shattered_glass_floatin_34d0418d-4457-49b6-8ddb-52a988f9ec66_2 1.png";
import AnimatedLine from "../Utils/AnimatedLine";

const problemCards = [
  {
    id: "P-01",
    category: "Cost",
    title: "The Cost of War Has Collapsed",
    body: (
      <>
        A $20,000 drone now forces defenders to fire $3&ndash;4 million
        interceptor missiles. MEGHA flips the arithmetic &mdash; built for
        thousands of dollars, expendable by design, it imposes financial ruin on
        the adversary's magazine, not on ours.
      </>
    ),
  },
  {
    id: "P-02",
    category: "Precision",
    title: "Precise Strike, Not Blunt Force",
    body: (
      <>
        Onboard computer vision identifies and locks the exact target. MEGHA
        strikes with surgical precision in the terminal phase &mdash; reducing
        collateral damage and protecting civilian populations near the
        engagement.
      </>
    ),
  },
  {
    id: "P-03",
    category: "Human Error",
    title: "Removing Human Error",
    body: (
      <>
        Fatigue, stress, and split-second misjudgement cost lives. Edge-level AI
        executes the commander's intent with consistent, repeatable accuracy
        &mdash; fixing the human errors that turn missions into tragedies.
      </>
    ),
  },
  {
    id: "P-04",
    category: "Civilian Safety",
    title: "Lower Damage to Civilians",
    body: (
      <>
        Precision targeting and abort-aware autonomy keep destruction confined
        to the legitimate target. Less indiscriminate fire means fewer civilian
        casualties in contested, populated theatres.
      </>
    ),
  },
  {
    id: "P-05",
    category: "Speed",
    title: (
      <>
        Act Fast &mdash; See First, Strike First
      </>
    ),
    body: (
      <>
        Decisions are made onboard in milliseconds, not delayed by network
        latency to a distant operator. MEGHA sees the battlefield first and acts
        decisively before the enemy can react.
      </>
    ),
  },
  {
    id: "P-06",
    category: "Supply",
    title: "Rapid Manufacturing",
    body: (
      <>
        Distributed 3D-print farms output thousands of units. Engineers tweak a
        CAD file and field a hardware upgrade to the frontline in hours, not
        years. You scale by adding printers, not factories
      </>
    ),
  },
];

const costTableRows = [
  {
    system: "Attack drone (Shahed-class)",
    cost: "$20K – $50K",
    meaning: "The cheap, expendable asset — designed to be lost",
    highlight: false,
  },
  {
    system: "MEGHA UAVs",
    cost: "$10K – $50K",
    meaning: "Cheap to lose, fast to build, autonomous — built to be on the winning side of the math",
    highlight: true,
  },
  {
    system: "Patriot PAC-3 interceptor",
    cost: "≈ $4,000,000",
    meaning: "~200× the cost of the threat it stops",
    highlight: false,
  },
  {
    system: "THAAD interceptor",
    cost: "$12M – $15M",
    meaning: "~300–700× the cost of the threat",
    highlight: false,
  },
  {
    system: "Fighter jet + AA missile",
    cost: "$20M + $400K",
    meaning: "A million-dollar engagement against a $20K target",
    highlight: false,
  },
];

const costStats = [
  { value: "$20K", label: "Cost to attack" },
  { value: "200×", label: "Defender cost ratio" },
  { value: "7M–10M", label: "Ukraine drone output, 2026 est" },
  { value: "$0", label: "Human casualties per loss" },
];

const isrCapabilities = [
  {
    id: "01",
    title: "Man-Portable Launch",
    body: "Hand-launched in seconds. No runway, no launch rig, no exposed ground crew.",
  },
  {
    id: "02",
    title: "Persistent Loiter",
    body: "Long endurance holds watch over an area for hours, feeding a continuous live picture.",
  },
  {
    id: "03",
    title: "Day & Night ISR",
    body: "Electro-optical and thermal sensors see through smoke and darkness — surveillance never stops.",
  },
  {
    id: "04",
    title: "Real-Time AI Detection",
    body: "Onboard AI detects, classifies and tracks targets the instant they appear — not minutes later.",
  },
  {
    id: "05",
    title: "Silent & GPS-Denied",
    body: "Navigates by vision when GPS is jammed, and observes without transmitting its position.",
  },
  {
    id: "06",
    title: "Feeds the Swarm",
    body: "Streams geo-tagged intelligence into ARC OS, cueing the wider MEGHA force onto confirmed targets.",
  },
];

export default function ResearchPage() {
  return (
    <main className="research-page relative min-h-screen overflow-hidden text-white">
      <style>{`
        @font-face {
          font-family: "Research Yapari";
          src: url(${yapariBold}) format("truetype");
          font-weight: 700;
          font-style: normal;
          font-display: swap;
        }

        @font-face {
          font-family: "Research Yapari Regular";
          src: url(${yapariRegular}) format("truetype");
          font-weight: 400;
          font-style: normal;
          font-display: swap;
        }

        @font-face {
          font-family: "Research Plus Jakarta";
          src: url(${plusJakartaSans}) format("truetype");
          font-weight: 200 800;
          font-style: normal;
          font-display: swap;
        }

        @font-face {
          font-family: "Archivo Condensed";
          src: url(${archivoRegular}) format("truetype");
          font-weight: 400;
          font-style: normal;
          font-display: swap;
        }

        .research-page {
          background:
            radial-gradient(ellipse at 0% 50%, rgba(9, 14, 28, 0.94) 0%, rgba(9, 14, 28, 0.44) 26%, rgba(9, 14, 28, 0) 56%),
            radial-gradient(ellipse at 100% 52%, rgba(9, 14, 28, 0.98) 0%, rgba(9, 14, 28, 0.5) 30%, rgba(9, 14, 28, 0) 60%),
            #020409;
        }

        .research-page::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(180deg, rgba(0,0,0,0.48) 0%, rgba(2,4,9,0) 32%, rgba(2,4,9,0.28) 100%),
            radial-gradient(ellipse at 50% 18%, rgba(255,255,255,0.05), rgba(255,255,255,0) 34%);
          pointer-events: none;
        }

        .research-network-lines {
          position: absolute;
          left: 50%;
          top: clamp(-184px, -8.2vw, -132px);
          z-index: 0;
          width: min(2400px, 162vw);
          opacity: 0.84;
          pointer-events: none;
          transform: translateX(-50%);
        }

        .research-network-lines > div {
          position: relative !important;
          left: 0 !important;
          top: 0 !important;
          width: 100% !important;
          translate: 0 0 !important;
          rotate: none !important;
          transform: rotate(-0.5deg) scaleY(0.58) !important;
          transform-origin: center !important;
        }

        .research-network-lines svg {
          width: 100%;
          height: auto;
        }

        .research-title {
          font-family: "Research Yapari", "Yapari Trial", "Azonix", sans-serif;
          font-size: clamp(46px, 5.8vw, 112px);
          line-height: 0.82;
          letter-spacing: 0;
        }

        .research-copy {
          font-family: "Archivo Condensed", "Arial Narrow", sans-serif;
          font-size: clamp(11px, 0.92vw, 17px);
          line-height: 1.18;
          letter-spacing: 0.24em;
        }

        .research-signal-line {
          position: relative;
          display: block;
          background:
            linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.18) 6%, rgba(255,255,255,0.38) 48%, rgba(255,255,255,0.18) 94%, transparent 100%),
            linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.02) 12%, rgba(255,255,255,0.52) 36%, rgba(255,255,255,1) 50%, rgba(255,255,255,0.52) 64%, rgba(255,255,255,0.02) 88%, transparent 100%);
          background-repeat: no-repeat;
          background-size: 100% 100%, 22% 100%;
          background-position: 0 0, -26% 0;
          box-shadow: 0 0 5px rgba(255,255,255,0.22);
          will-change: background-position;
          animation: researchSignalSweep 5s linear infinite;
        }

        .research-signal-line::before,
        .research-signal-line::after {
          content: none;
        }

        @keyframes researchSignalSweep {
          0%   { background-position: 0 0, -26% 0; }
          100% { background-position: 0 0, 126% 0; }
        }

        .research-panel-wrap {
          position: relative;
          isolation: isolate;
          z-index: 10;
        }

        .research-panel {
          position: relative;
          overflow: hidden;
          border: 0;
          border-radius: 0;
          background: transparent;
          box-shadow: none;
          backdrop-filter: none;
          -webkit-backdrop-filter: none;
        }

        .research-panel::before,
        .research-panel::after {
          content: none;
        }

        .research-kicker,
        .research-panel-body {
          font-family: "Archivo Condensed", "Arial Narrow", sans-serif;
          letter-spacing: 0.08em;
        }

        .research-panel-title,
        .research-problems-title {
          font-family: "Research Yapari", "Yapari Trial", "Azonix", sans-serif;
          letter-spacing: 0;
        }

        .research-panel-media {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
        }

        .research-video {
          position: absolute;
          left: 50%;
          top: 26%;
          width: 62%;
          height: 34%;
          object-fit: cover;
          object-position: center center;
          opacity: 0.85;
          filter: saturate(0.9) contrast(1.14) brightness(0.9);
          mix-blend-mode: screen;
          transform: translateX(-50%) scaleX(-1);
        }

        .research-deco-shape {
          position: absolute;
          display: block;
          max-width: none;
          object-fit: contain;
          user-select: none;
        }

        .research-left-shape {
          position: absolute;
          left: clamp(-104px, -6vw, -54px);
          top: clamp(88px, 8.4vw, 145px);
          width: clamp(220px, 23vw, 345px);
          opacity: 0.94;
          filter: brightness(1.08) contrast(1.04);
          pointer-events: none;
          z-index: 5;
        }

        .research-right-shape {
          position: absolute;
          right: clamp(-170px, -8.8vw, -88px);
          top: clamp(155px, 17vw, 265px);
          width: clamp(260px, 25vw, 405px);
          opacity: 0.96;
          filter: saturate(1.08) contrast(1.05) brightness(0.94);
          pointer-events: none;
          z-index: 5;
        }

        .research-problems-content {
          position: relative;
          margin-top: clamp(360px, 37vw, 520px);
        }

        .research-problems-eyebrow,
        .problem-label,
        .problem-title,
        .problem-body {
          font-family: "Research Plus Jakarta", "Plus Jakarta Sans", Arial, sans-serif;
          letter-spacing: 0;
        }

        .research-problems-eyebrow {
          font-size: 14px;
          line-height: 1.35;
          font-weight: 400;
          color: rgba(255,255,255,0.78);
        }

        .research-problems-heading {
          margin-top: 10px;
          max-width: 980px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(25px, 2.35vw, 38px);
          line-height: 1.16;
          font-weight: 700;
          letter-spacing: 0;
          text-transform: uppercase;
          text-wrap: balance;
        }

        .research-followup-section {
          position: relative;
        }

        .research-followup-section::before {
          content: "";
          position: absolute;
          left: -12%;
          top: 4%;
          width: min(34vw, 420px);
          height: min(56vw, 640px);
          background: radial-gradient(circle, rgba(186, 154, 47, 0.42), rgba(186, 154, 47, 0) 72%);
          filter: blur(42px);
          pointer-events: none;
        }

        .research-followup-section::after {
          content: "";
          position: absolute;
          right: -10%;
          top: 10%;
          width: min(28vw, 360px);
          height: min(44vw, 520px);
          background: radial-gradient(circle, rgba(72, 83, 192, 0.22), rgba(72, 83, 192, 0) 72%);
          filter: blur(30px);
          pointer-events: none;
        }

        .research-shahed-stage {
          position: relative;
          z-index: 1;
          margin: 26px auto 0;
          max-width: 680px;
        }

        .research-shahed-stage::before {
          content: none;
        }

        .research-shahed-card {
          position: relative;
          overflow: hidden;
          border-radius: 34px;
          background: transparent;
          box-shadow: 0 22px 44px rgba(0, 0, 0, 0.36);
        }

        .research-shahed-card::after {
          content: none;
        }

        .research-shahed-image {
          display: block;
          width: 100%;
          border-radius: inherit;
          aspect-ratio: 16 / 9;
          object-fit: cover;
          object-position: center;
        }

        .research-shahed-copy {
          margin: 12px auto 0;
          max-width: 980px;
          text-align: center;
          font-family: "Research Plus Jakarta", "Plus Jakarta Sans", Arial, sans-serif;
          font-size: clamp(10px, 0.82vw, 12px);
          line-height: 1.4;
          color: rgba(255,255,255,0.72);
        }

        .research-shahed-copy strong {
          display: block;
          margin-bottom: 6px;
          font-size: clamp(10px, 0.9vw, 12px);
          font-weight: 500;
          color: rgba(255,255,255,0.58);
        }

        .research-cost-panel {
          position: relative;
          z-index: 1;
          margin-top: 34px;
          min-height: clamp(420px, 42vw, 610px);
          overflow: visible;
          border: 0;
          border-radius: 0;
          background: transparent;
          box-shadow: none;
          backdrop-filter: none;
          isolation: isolate;
        }

        .research-cost-panel::before {
          content: "";
          position: absolute;
          left: -10%;
          right: -8%;
          top: 52%;
          height: 42%;
          z-index: 0;
          background:
            radial-gradient(circle at 8% 82%, rgba(243, 208, 93, 0.46), rgba(243, 208, 93, 0.18) 30%, rgba(243, 208, 93, 0) 62%),
            radial-gradient(circle at 88% 78%, rgba(93, 110, 243, 0.48), rgba(93, 110, 243, 0.18) 32%, rgba(93, 110, 243, 0) 64%),
            linear-gradient(105deg, rgba(243, 208, 93, 0.18) 0%, rgba(6, 7, 12, 0.02) 48%, rgba(93, 110, 243, 0.2) 100%);
          filter: blur(26px);
          opacity: 0.62;
          pointer-events: none;
        }

        .research-cost-panel::after {
          content: none;
        }

        .research-cost-inner {
          position: relative;
          z-index: 1;
          padding: 30px 24px 36px;
        }

        .research-cost-kicker {
          font-family: "Research Plus Jakarta", "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 14px;
          line-height: 1.35;
          font-weight: 400;
          text-transform: uppercase;
          color: rgba(255,255,255,0.78);
        }

        .research-cost-title {
          margin-top: 10px;
          max-width: 1180px;
          font-family: "Research Yapari", "Yapari Trial", "Azonix", sans-serif;
          font-size: clamp(28px, 3.8vw, 62px);
          line-height: 0.94;
          font-weight: 700;
          letter-spacing: 0;
          text-transform: uppercase;
          text-wrap: balance;
          color: #fff;
        }

        .research-launch-stage {
          position: relative;
          z-index: 1;
          margin: 56px auto 0;
          max-width: 760px;
        }

        .research-launch-stage::before {
          content: "";
          position: absolute;
          inset: -20%;
          background:
            radial-gradient(circle at 18% 58%, rgba(186, 154, 47, 0.28), rgba(186, 154, 47, 0) 45%),
            radial-gradient(circle at 90% 28%, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0) 36%);
          filter: blur(24px);
          pointer-events: none;
          z-index: -1;
        }

        .research-launch-card {
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.18);
          border-radius: 34px;
          background:
            linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.02)),
            rgba(10, 11, 13, 0.54);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.18),
            0 22px 54px rgba(0,0,0,0.34),
            0 0 42px rgba(186,154,47,0.1);
          backdrop-filter: blur(14px);
        }

        .research-launch-image {
          display: block;
          width: 100%;
          aspect-ratio: 16 / 10;
          object-fit: cover;
          object-position: center;
        }

        .problems-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr);
          margin-top: 54px;
          max-width: 1090px;
        }

        .problem-card {
          min-height: 188px;
          padding: 24px 0;
          border-top: 1px solid rgba(255,255,255,0.34);
        }

        .problem-card:first-child {
          border-top: 0;
          padding-top: 0;
        }

        .problem-label {
          margin-bottom: 13px;
          font-size: 11px;
          line-height: 1.3;
          font-weight: 500;
          text-transform: uppercase;
          color: rgba(255,255,255,0.74);
        }

        .problem-title {
          max-width: 290px;
          font-size: 20px;
          line-height: 0.98;
          font-weight: 700;
          color: #fff;
          text-wrap: balance;
        }

        .problem-body {
          margin-top: 22px;
          max-width: 294px;
          font-size: 13px;
          line-height: 1.42;
          font-weight: 400;
          color: rgba(255,255,255,0.74);
        }

        @media (min-width: 768px) {
          .research-problems-content {
            margin-top: clamp(380px, 36vw, 540px);
          }

          .problems-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .problem-card {
            padding: 28px 26px 30px 0;
          }

          .problem-card:nth-child(-n+2) {
            border-top: 0;
            padding-top: 0;
          }

          .problem-card:nth-child(even) {
            border-left: 1px solid rgba(255,255,255,0.38);
            padding-left: 28px;
          }

          .problem-card:first-child {
            padding-top: 0;
          }

          .research-cost-inner {
            padding: 34px 32px 42px;
          }
        }

        @media (min-width: 1024px) {
          .research-problems-content {
            margin-top: clamp(400px, 33vw, 540px);
          }

          .problems-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            margin-top: 70px;
            margin-left: 64px;
          }

          .problem-card {
            min-height: 210px;
            padding: 0 26px 34px 28px;
            border-top: 0;
            border-left: 1px solid rgba(255,255,255,0.38);
          }

          .problem-card:nth-child(3n+1) {
            border-left: 0;
            padding-left: 0;
          }

          .problem-card:nth-child(n+4) {
            border-top: 1px solid rgba(255,255,255,0.34);
            padding-top: 30px;
          }

          .problem-card:nth-child(even) {
            padding-left: 28px;
          }

          .research-shahed-stage {
            margin-top: 28px;
            max-width: 700px;
          }

          .research-cost-panel {
            margin-top: 40px;
            min-height: clamp(480px, 42vw, 660px);
          }

          .research-cost-inner {
            padding: 36px 34px 48px;
          }
        }

        @media (max-width: 767px) {
          .research-network-lines {
            top: clamp(-118px, -24vw, -76px);
            width: 250vw;
            opacity: 0.78;
          }

          .research-video {
            left: 50%;
            top: 26%;
            width: 88%;
            height: 30%;
            opacity: 0.75;
          }

          .research-left-shape {
            left: clamp(-82px, -20vw, -48px);
            top: clamp(95px, 24vw, 150px);
            width: clamp(185px, 50vw, 250px);
          }

          .research-right-shape {
            right: clamp(-145px, -34vw, -88px);
            top: clamp(230px, 70vw, 360px);
            width: clamp(220px, 62vw, 330px);
          }

          .research-shahed-stage {
            margin-top: 18px;
            max-width: 100%;
          }

          .research-shahed-card {
            border-radius: 28px;
          }

          .research-cost-panel {
            min-height: 440px;
          }

          .research-launch-stage {
            margin-top: 38px;
          }

          .research-launch-card {
            border-radius: 28px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .research-signal-line {
            animation: none;
            background-size: 100% 100%, 0;
          }
        }

        /* ── Cost argument expanded content ───────────────────── */

        .cost-body-text {
          font-family: "Research Plus Jakarta", "Plus Jakarta Sans", Arial, sans-serif;
          margin-top: 22px;
          max-width: 780px;
          font-size: clamp(13px, 0.9vw, 16px);
          line-height: 1.6;
          font-weight: 400;
          color: rgba(255,255,255,0.68);
        }

        .cost-table-wrap {
          margin: 46px auto 0;
          width: min(100%, 980px);
          overflow-x: auto;
          border: 0;
          border-radius: 0;
        }

        .cost-table {
          width: 100%;
          min-width: 680px;
          border-collapse: collapse;
        }

        .cost-table-head {
          background: transparent;
          border-bottom: 1px solid rgba(255,255,255,0.58);
        }

        .cost-th {
          padding: 0 24px 16px;
          font-family: "Research Plus Jakarta", "Plus Jakarta Sans", Arial, sans-serif;
          font-size: clamp(13px, 1vw, 18px);
          font-weight: 700;
          letter-spacing: 0;
          text-transform: uppercase;
          color: rgba(255,255,255,0.96);
          text-align: left;
          white-space: nowrap;
        }

        .cost-th + .cost-th {
          border-left: 1px solid rgba(255,255,255,0.28);
        }

        .cost-tr {
          border-bottom: 0;
          transition: background 0.2s;
        }

        .cost-tr:last-child {
          border-bottom: none;
        }

        .cost-tr-megha {
          background: transparent;
          border-left: 0;
        }

        .cost-td {
          padding: 11px 24px;
          font-family: "Research Plus Jakarta", "Plus Jakarta Sans", Arial, sans-serif;
          font-size: clamp(12px, 0.88vw, 15px);
          line-height: 1.35;
          color: rgba(255,255,255,0.72);
          vertical-align: top;
        }

        .cost-td + .cost-td {
          border-left: 1px solid rgba(255,255,255,0.28);
        }

        .cost-td-system { width: 34%; }
        .cost-td-cost   { width: 22%; font-weight: 500; white-space: nowrap; text-align: center; }
        .cost-td-meaning{ width: 46%; }

        .cost-tr-megha .cost-td-system  { color: #E3E41B; font-weight: 600; }
        .cost-tr-megha .cost-td-cost    { color: #E3E41B; }
        .cost-tr-megha .cost-td-meaning { color: #E3E41B; font-style: normal; }

        .cost-bottom-para {
          margin: 38px auto 0;
          max-width: 820px;
          font-family: "Research Plus Jakarta", "Plus Jakarta Sans", Arial, sans-serif;
          font-size: clamp(13px, 0.9vw, 16px);
          line-height: 1.6;
          color: rgba(255,255,255,0.64);
          text-align: center;
        }

        .cost-bottom-para strong {
          color: #fff;
          font-weight: 700;
        }

        .cost-stats-section {
          position: relative;
          margin: 42px auto 0;
          width: min(100%, 1120px);
          border-radius: 18px;
          overflow: hidden;
          background:
            radial-gradient(circle at 0% 100%, rgba(243, 208, 93, 0.48), rgba(243, 208, 93, 0.12) 36%, rgba(243, 208, 93, 0) 66%),
            radial-gradient(circle at 100% 92%, rgba(93, 110, 243, 0.54), rgba(93, 110, 243, 0.18) 38%, rgba(93, 110, 243, 0) 68%),
            linear-gradient(105deg, rgba(243, 208, 93, 0.24) 0%, rgba(8, 8, 14, 0.3) 46%, rgba(93, 110, 243, 0.28) 100%);
        }

        .cost-stats-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(0,0,0,0.04));
          pointer-events: none;
        }

        .cost-stats-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border: 1px solid rgba(255,255,255,0.48);
          border-radius: 18px;
          overflow: hidden;
        }

        .cost-stat-box {
          min-height: 104px;
          padding: 18px 20px 20px;
          border-right: 1px solid rgba(255,255,255,0.14);
        }

        .cost-stat-box:last-child {
          border-right: none;
        }

        .cost-stat-value {
          display: block;
          font-family: "Research Yapari", "Yapari Trial", "Azonix", sans-serif;
          font-size: clamp(24px, 2.35vw, 42px);
          font-weight: 700;
          line-height: 0.95;
          color: #fff;
          letter-spacing: 0;
          white-space: nowrap;
        }

        .cost-stat-box:nth-child(2) .cost-stat-value,
        .cost-stat-box:nth-child(4) .cost-stat-value {
          color: #E3E41B;
        }

        .cost-stat-label {
          display: block;
          margin-top: 12px;
          font-family: "Research Plus Jakarta", "Plus Jakarta Sans", Arial, sans-serif;
          font-size: clamp(10px, 0.72vw, 12px);
          line-height: 1.35;
          color: rgba(255,255,255,0.54);
        }

        @media (max-width: 767px) {
          .cost-stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .cost-stat-box {
            border-right: 1px solid rgba(255,255,255,0.14);
            border-bottom: 1px solid rgba(255,255,255,0.14);
          }

          .cost-stat-box:nth-child(even) {
            border-right: none;
          }

          .cost-stat-box:nth-last-child(-n+2) {
            border-bottom: none;
          }
        }

        /* ── // 04 — Capabilities & ISR ───────────────────────── */

        .isr-section {
          position: relative;
          z-index: 1;
          overflow: hidden;
        }

        .isr-glass {
          position: absolute;
          top: 0;
          right: 0;
          height: 100%;
          width: clamp(300px, 48vw, 820px);
          object-fit: cover;
          object-position: right center;
          opacity: 0.3;
          mix-blend-mode: screen;
          pointer-events: none;
          user-select: none;
          z-index: 0;
        }

        /* blue (#5D6EF3) + gold (#F3D05D) colour grade, layered OVER the glass so the
           texture reads tinted instead of washing the section out to grey */
        .isr-bg-glow {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          background:
            radial-gradient(circle at 4% 6%, rgba(93, 110, 243, 0.38), rgba(93, 110, 243, 0) 38%),
            radial-gradient(circle at 98% 16%, rgba(243, 208, 93, 0.20), rgba(243, 208, 93, 0) 36%),
            radial-gradient(circle at 2% 98%, rgba(243, 208, 93, 0.36), rgba(243, 208, 93, 0) 44%),
            radial-gradient(circle at 100% 94%, rgba(93, 110, 243, 0.40), rgba(93, 110, 243, 0) 46%),
            linear-gradient(118deg, rgba(243, 208, 93, 0.12) 0%, rgba(8, 8, 14, 0) 48%, rgba(93, 110, 243, 0.16) 100%);
        }

        .isr-inner {
          position: relative;
          z-index: 2;
        }

        .isr-kicker {
          margin-top: 0;
          font-family: "Research Plus Jakarta", "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 14px;
          font-weight: 400;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.72);
        }

        .isr-title {
          margin-top: 16px;
          max-width: 1180px;
          font-family: "Research Yapari", "Yapari Trial", "Azonix", sans-serif;
          font-size: clamp(30px, 4vw, 64px);
          line-height: 0.96;
          font-weight: 700;
          letter-spacing: 0;
          text-transform: uppercase;
          text-wrap: balance;
          color: #FFFFFF;
        }

        .isr-title .isr-accent {
          color: #E3E41B;
        }

        .isr-intro {
          margin-top: 24px;
          max-width: 760px;
          font-family: "Research Plus Jakarta", "Plus Jakarta Sans", Arial, sans-serif;
          font-size: clamp(13px, 0.95vw, 16px);
          line-height: 1.6;
          font-weight: 400;
          color: rgba(255,255,255,0.74);
        }

        .isr-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr);
          gap: 16px;
          margin-top: 44px;
          max-width: 1180px;
        }

        .isr-card {
          position: relative;
          padding: 22px 22px 24px;
          border-radius: 18px;
          border: 1px solid rgba(255,255,255,0.14);
          background:
            linear-gradient(150deg, rgba(255,255,255,0.05), rgba(255,255,255,0.012)),
            rgba(10, 12, 20, 0.42);
          backdrop-filter: blur(6px);
          transition: border-color 0.25s ease, transform 0.25s ease;
        }

        .isr-card:hover {
          border-color: rgba(227, 228, 27, 0.5);
          transform: translateY(-3px);
        }

        .isr-card-num {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 22px;
          border-radius: 6px;
          background: rgba(227, 228, 27, 0.16);
          font-family: "Research Plus Jakarta", "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.02em;
          color: #E3E41B;
        }

        .isr-card-title {
          margin-top: 16px;
          font-family: "Research Plus Jakarta", "Plus Jakarta Sans", Arial, sans-serif;
          font-size: clamp(16px, 1.25vw, 20px);
          line-height: 1.12;
          font-weight: 700;
          color: #FFFFFF;
        }

        .isr-card-body {
          margin-top: 12px;
          font-family: "Research Plus Jakarta", "Plus Jakarta Sans", Arial, sans-serif;
          font-size: clamp(12px, 0.9vw, 14px);
          line-height: 1.5;
          font-weight: 400;
          color: rgba(255,255,255,0.7);
        }

        .isr-tagline {
          margin: 60px 0 0;
          font-family: "Research Yapari", "Yapari Trial", "Azonix", sans-serif;
          font-size: clamp(24px, 3vw, 50px);
          line-height: 1;
          font-weight: 700;
          letter-spacing: 0;
          text-transform: uppercase;
          color: #E3E41B;
        }

        .isr-outro {
          margin-top: 22px;
          max-width: 900px;
          font-family: "Research Plus Jakarta", "Plus Jakarta Sans", Arial, sans-serif;
          font-size: clamp(13px, 0.95vw, 16px);
          line-height: 1.6;
          font-weight: 400;
          color: rgba(255,255,255,0.74);
        }

        .isr-outro strong {
          color: #FFFFFF;
          font-weight: 700;
        }

        @media (min-width: 700px) {
          .isr-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (min-width: 1024px) {
          .isr-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 18px;
          }
        }
      `}</style>

      <section className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1500px] flex-col px-7 pt-44 pb-16 sm:px-14 sm:pt-48 lg:px-24 lg:pt-52">
        <div className="research-network-lines" aria-hidden="true">
          <AnimatedLine />
        </div>

        <div className="relative z-10 max-w-[1180px]">
          <h1 className="research-title uppercase text-white">
            ME<span className="text-[#E3E41B]">G</span>HA UAS
          </h1>

          <p className="research-copy mt-6 max-w-[980px] uppercase text-white/78">
            A new class of{" "}
            <strong className="font-bold text-white">
              low-cost, 3D-printed, edge-autonomous
            </strong>{" "}
            aerial systems built to win the wars of mass - commanded in their
            thousands by a single operator through{" "}
            <strong className="font-bold text-white">ARC OS</strong>, and built
            to keep human warfighters out of the kill zone.
          </p>

          <div
            aria-hidden="true"
            className="research-signal-line mt-12 h-px w-full max-w-[1180px]"
          />
        </div>

        <div className="research-panel-wrap mt-14 w-full max-w-[1380px]">
          <div className="research-panel w-full">
            <div className="research-panel-media" aria-hidden="true">
              <video
                className="research-video"
                src={uavBlueprintVideo}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              />
            </div>

            <div className="relative z-10 p-7 sm:p-9 lg:p-11">
              <p className="research-kicker text-[15px] uppercase text-white/80 sm:text-[18px]">
                // 01 - THE QUESTION
              </p>

              <h2 className="research-panel-title mt-4 text-[clamp(30px,3.6vw,58px)] uppercase leading-[0.95] text-white">
                Why Do We Need MEGHA?
              </h2>

              <div className="research-panel-body mt-6 max-w-[1130px] space-y-5 text-[clamp(13px,0.95vw,17px)] leading-[1.12] text-white/82">
                <p>
                  For seventy years, air power meant a handful of extraordinarily
                  expensive aircraft flown by humans who had to be physically
                  present and exposed to danger. That model is breaking down in
                  front of the entire world. On every modern battlefield the
                  decisive weapon is no longer the most exquisite platform - it is
                  the{" "}
                  <strong className="font-bold text-white">
                    cheapest one, produced in the largest numbers, and
                    intelligent enough to fight when no human is steering it.
                  </strong>
                </p>

                <p>
                  MEGHA exists because the old way of war has become
                  unaffordable, slow, manned, and fragile. It answers a single
                  hard problem at the heart of the modern battlefield: how do you
                  deliver decisive force that is cheap to lose, fast to build,
                  precise enough to spare civilians, and able to keep fighting the
                  moment the enemy jams the radio link? Every design decision in
                  the MEGHA series traces back to solving a real battlefield
                  problem.
                </p>
              </div>

              <div
                id="problems-megha-solves"
                className="research-problems-content"
              >
                <p className="research-problems-eyebrow uppercase">
                  // 02 - Problems MEGHA Solves
                </p>

                <h2 className="research-problems-heading text-white">
                  Real Battlefield Problems, Engineered Solutions
                </h2>

                <div className="problems-grid">
                  {problemCards.map((problem) => (
                    <article className="problem-card" key={problem.id}>
                      <p className="problem-label">
                        {problem.id} / {problem.category}
                      </p>
                      <h3 className="problem-title">{problem.title}</h3>
                      <p className="problem-body">{problem.body}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <img
            className="research-deco-shape research-left-shape"
            src={abstractShapeRender}
            alt=""
            draggable="false"
          />
          <img
            className="research-deco-shape research-right-shape"
            src={rightShapeRender}
            alt=""
            draggable="false"
          />
        </div>
      </section>

      <section
        id="cost-argument-showcase"
        className="research-followup-section relative z-10 mx-auto w-full max-w-[1500px] px-7 pb-28 sm:px-14 lg:px-24"
      >
        <div className="research-shahed-stage">
          <div className="research-shahed-card">
            <img
              className="research-shahed-image"
              src={shahedDroneImage}
              alt="HESA Shahed 136 drone"
            />
          </div>

          <div className="research-shahed-copy">
            <strong>You said: shahid 136</strong>
            <p>
              The HESA Shahed 136 (also known as the Geran-2 in Russian
              service) is an Iranian-designed, one-way attack (OWA) kamikaze
              drone built to conduct long-range precision strikes. First
              introduced into active service around 2021, it has fundamentally
              shifted modern asymmetric warfare due to its incredibly low cost
              (ranging from $10,000 to $50,000 to manufacture locally) relative
              to its long operational range.
            </p>
          </div>
        </div>

        <div className="research-cost-panel">
          <div className="research-cost-inner">
            <p className="research-cost-kicker uppercase">
              // 03 — The Cost Argument
            </p>

            <h2 className="research-cost-title">
              You{" "}
              <span style={{ color: "#E3E41B" }}>Cannot Win</span>
              {" "}a War of Mass With a Strategy of Scarcity
            </h2>

            <p className="cost-body-text">
              The reason the old model collapses is arithmetic, not technology.
              The defender wins almost every individual engagement — and still
              loses the war of attrition, because each &ldquo;win&rdquo; costs
              hundreds of times more than it costs the attacker.
            </p>

            <div className="cost-table-wrap">
              <table className="cost-table">
                <thead className="cost-table-head">
                  <tr>
                    <th className="cost-th cost-td-system">System / Engagement</th>
                    <th className="cost-th cost-td-cost">Approx. Cost</th>
                    <th className="cost-th cost-td-meaning">What It Means</th>
                  </tr>
                </thead>
                <tbody>
                  {costTableRows.map((row) => (
                    <tr
                      key={row.system}
                      className={`cost-tr${row.highlight ? " cost-tr-megha" : ""}`}
                    >
                      <td className="cost-td cost-td-system">{row.system}</td>
                      <td className="cost-td cost-td-cost">{row.cost}</td>
                      <td className="cost-td cost-td-meaning">{row.meaning}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="cost-bottom-para">
              This is the equation MEGHA is engineered to win. Instead of
              spending millions to stop a cheap threat, MEGHA{" "}
              <strong>becomes the mass</strong> — fielding attritable,
              autonomous aircraft in numbers no exquisite platform can match,
              while keeping the human cost at zero.
            </p>

            <div className="cost-stats-section">
              <div className="cost-stats-overlay" aria-hidden="true" />
              <div className="cost-stats-grid">
                {costStats.map((stat) => (
                  <div key={stat.label} className="cost-stat-box">
                    <span className="cost-stat-value">{stat.value}</span>
                    <span className="cost-stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="research-launch-stage">
          <div className="research-launch-card">
            <img
              className="research-launch-image"
              src={launchDroneImage}
              alt="Drone launch demonstration"
            />
          </div>
        </div>
      </section>

      <section
        id="capabilities-isr"
        className="isr-section relative z-10 mx-auto w-full max-w-[1500px] px-7 pt-20 pb-32 sm:px-14 sm:pt-24 lg:px-24"
      >
        <div className="isr-bg-glow" aria-hidden="true" />
        <img
          className="isr-glass"
          src={glassFragmentsImage}
          alt=""
          draggable="false"
          aria-hidden="true"
        />

        <div className="isr-inner">
          <p className="isr-kicker">// 04 — Capabilities &amp; ISR</p>

          <h2 className="isr-title">
            Man-Portable, Edge-
            <span className="isr-accent">Intelligent</span>, Persistent Eyes
            on the Battlefield
          </h2>

          <p className="isr-intro">
            The MEGHA series includes dedicated ISR patrol drones — light,
            man-portable aircraft built to see everything, persistently,
            without putting a soldier in harm's way. Carried in a pack,
            launched by hand, and commanded by one operator.
          </p>

          <div className="isr-grid">
            {isrCapabilities.map((cap) => (
              <article className="isr-card" key={cap.id}>
                <span className="isr-card-num">{cap.id}</span>
                <h3 className="isr-card-title">{cap.title}</h3>
                <p className="isr-card-body">{cap.body}</p>
              </article>
            ))}
          </div>

          <p className="isr-tagline">See first. Decide first. Act first.</p>

          <p className="isr-outro">
            An ISR patrol that detects the threat before the enemy is aware of
            you is worth more than any weapon fired blind — turning raw
            airspace into{" "}
            <strong>persistent, AI-enhanced awareness</strong> while soldiers
            stay out of the kill zone.
          </p>
        </div>
      </section>

    </main>
  );
}
