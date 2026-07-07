import React, { useRef } from "react";
import yapariBold from "../assets/fonts/YapariTrial-Bold.ttf";
import yapariRegular from "../assets/fonts/YapariTrial-Regular.ttf";
import archivoRegular from "../assets/fonts/archivo.regular.ttf";
import plusJakartaSans from "../assets/fonts/PlusJakartaSans[wght].ttf";
import uavBlueprintVideo from "../assets/uav-blueprint-2k.mp4";
import shahedDroneImage from "../assets/US-Shahed-136-drone 1.webp";
import launchDroneImage from "../assets/8611730 1 (1).webp";
import abstractShapeRender from "../assets/Abstract Shape Render 1 (1).png";
import rightShapeRender from "../assets/Image (1).png";
import AnimatedLine from "../Utils/AnimatedLine";
import useTextShuffle from "../Utils/useTextShuffle";
import ResearchPage2 from "./ResearchPage2";

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

export default function ResearchPage() {
  const meghaTitleRef = useRef(null);
  const uasTitleRef = useRef(null);

  useTextShuffle(meghaTitleRef, {
    animateOnLoad: false,
    viewportOnly: true,
    triggerSelector: ".research-copy",
    triggerPoint: 0,
  });
  useTextShuffle(uasTitleRef, {
    animateOnLoad: false,
    viewportOnly: true,
    triggerSelector: ".research-copy",
    triggerPoint: 0,
  });

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
          display: flex;
          flex-wrap: nowrap;
          align-items: baseline;
          gap: clamp(18px, 3vw, 58px);
          font-family: "Research Yapari", "Yapari Trial", "Azonix", sans-serif;
          font-size: clamp(58px, 8.3vw, 146px);
          line-height: 0.76;
          letter-spacing: 0.105em;
          word-spacing: 0.12em;
        }

        .research-title-word {
          position: relative;
          display: inline-flex;
          align-items: baseline;
          white-space: nowrap;
        }

        .research-title-shuffle {
          display: inline-block;
          min-width: max-content;
          text-align: center;
          white-space: nowrap;
        }

        .research-title-shuffle::before {
          content: attr(data-target);
          display: block;
          height: 0;
          overflow: hidden;
          visibility: hidden;
        }

        .research-title-shuffle .ltr {
          display: inline-block;
        }

        .research-title-shuffle.is-number-mode {
          font-family: "Azonix", sans-serif;
          font-size: 0.32em;
          font-weight: 400;
          line-height: 1;
          letter-spacing: 0.015em;
        }

        .research-title-shuffle--megha.is-number-mode {
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.42) 0%,
            rgba(255, 255, 255, 0.68) 24.04%,
            #fff 50.48%
          );
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          -webkit-text-fill-color: transparent;
        }

        .research-title-shuffle--uas.is-number-mode {
          background: linear-gradient(
            90deg,
            #858900 0%,
            #b7c400 14.42%,
            #eaff00 27.88%,
            #fff 100%
          );
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          -webkit-text-fill-color: transparent;
        }

        .research-title-megha::before {
          content: "";
          position: absolute;
          left: -0.16em;
          top: 50%;
          width: 1.46em;
          height: 0.96em;
          z-index: -1;
          border-radius: 999px;
          background: radial-gradient(closest-side, rgba(0,0,0,0.52), rgba(0,0,0,0.24) 50%, rgba(0,0,0,0) 78%);
          filter: blur(8px);
          transform: translateY(-50%);
          pointer-events: none;
        }

        .research-title-m {
          position: relative;
          display: inline-block;
          background:
            radial-gradient(ellipse at 0% 54%, rgba(0,0,0,0.48), rgba(0,0,0,0.28) 36%, rgba(0,0,0,0) 70%),
            linear-gradient(90deg, #161616 0%, #242424 34%, #4A4A4A 70%, #858585 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 0 7px rgba(0, 0, 0, 0.42));
        }

        .research-title-g {
          color: #E3E41B;
          text-shadow:
            0 0 14px rgba(227, 228, 27, 0.24),
            0 9px 22px rgba(0, 0, 0, 0.36);
        }

        .research-title-megha
          .research-title-shuffle:not(.is-number-mode)
          .ltr:nth-child(1) {
          background:
            radial-gradient(ellipse at 0% 54%, rgba(0,0,0,0.48), rgba(0,0,0,0.28) 36%, rgba(0,0,0,0) 70%),
            linear-gradient(90deg, #161616 0%, #242424 34%, #4A4A4A 70%, #858585 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 0 7px rgba(0, 0, 0, 0.42));
        }

        .research-title-megha
          .research-title-shuffle:not(.is-number-mode)
          .ltr:nth-child(3) {
          color: #E3E41B;
          text-shadow:
            0 0 14px rgba(227, 228, 27, 0.24),
            0 9px 22px rgba(0, 0, 0, 0.36);
          -webkit-text-fill-color: currentColor;
        }

        .research-copy {
          margin-left: clamp(14px, 1.4vw, 22px);
          max-width: 1100px;
          font-family: "Research Plus Jakarta", "Plus Jakarta Sans", Arial, sans-serif;
          font-size: clamp(12px, 1vw, 18px);
          line-height: 1.46;
          font-weight: 400;
          letter-spacing: 0.18em;
          text-transform: capitalize;
          color: rgba(255,255,255,0.86);
          text-wrap: normal;
        }

        .research-copy-line {
          display: block;
          white-space: nowrap;
        }

        .research-copy-highlight {
          color: #E3E41B;
          font-weight: 800;
          letter-spacing: 0.17em;
        }

        .research-copy-strong {
          color: #FFFFFF;
          font-weight: 800;
          letter-spacing: 0.14em;
        }

        @media (max-width: 767px) {
          .research-title {
            flex-wrap: wrap;
            gap: 12px;
            font-size: clamp(42px, 16vw, 76px);
            letter-spacing: 0.08em;
          }

          .research-title-megha::before {
            left: -0.14em;
            width: 1.55em;
            filter: blur(10px);
          }

          .research-copy {
            margin-left: 0;
            font-size: clamp(14px, 4.2vw, 18px);
            line-height: 1.45;
            letter-spacing: 0.12em;
          }

          .research-copy-line {
            white-space: normal;
          }

          .research-copy-highlight {
            letter-spacing: 0.1em;
          }

          .research-copy-strong {
            letter-spacing: 0.1em;
          }
        }

        .research-signal-line {
          position: relative;
          display: block;
          overflow: visible;
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

        .research-signal-line::before {
          content: "";
          position: absolute;
          left: 0;
          top: -16px;
          width: 1px;
          height: 5200px;
          background: linear-gradient(
            180deg,
            rgba(255,255,255,0.62),
            rgba(255,255,255,0.76) 6%,
            rgba(255,255,255,0.52) 58%,
            rgba(255,255,255,0.24) 100%
          );
          box-shadow: 0 0 8px rgba(255,255,255,0.22);
          pointer-events: none;
        }

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
          right: clamp(-500px, -24vw, -235px);
          top: clamp(292px, 33vw, 515px);
          width: clamp(570px, 49.4vw, 947px);
          height: clamp(1080px, 94vw, 1803px);
          object-fit: contain;
          object-position: center top;
          opacity: 0.92;
          filter: saturate(1.08) contrast(1.06) brightness(0.96);
          pointer-events: none;
          z-index: 4;
        }

        .research-autonomy-label {
          position: absolute;
          right: clamp(-10px, 0.2vw, 6px);
          top: clamp(122px, 12vw, 220px);
          z-index: 6;
          writing-mode: vertical-rl;
          text-orientation: mixed;
          white-space: nowrap;
          color: #FFF;
          font-family: "Research Yapari Regular", "Yapari Trial", "Azonix", sans-serif;
          font-size: clamp(38px, 4.25vw, 78px);
          font-style: normal;
          font-weight: 400;
          line-height: 1;
          letter-spacing: 0.045em;
          text-transform: uppercase;
          opacity: 0.43;
          pointer-events: none;
          user-select: none;
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
          isolation: isolate;
        }

        .research-followup-section::before {
          content: "";
          position: absolute;
          left: -16%;
          right: -16%;
          top: 16%;
          height: 68%;
          z-index: 0;
          background:
            radial-gradient(ellipse at 4% 34%, rgba(243, 208, 93, 0.36), rgba(243, 208, 93, 0.12) 26%, rgba(243, 208, 93, 0) 58%),
            radial-gradient(ellipse at 96% 48%, rgba(93, 110, 243, 0.38), rgba(93, 110, 243, 0.14) 28%, rgba(93, 110, 243, 0) 60%),
            linear-gradient(106deg, rgba(243, 208, 93, 0.08), rgba(2, 4, 9, 0) 48%, rgba(93, 110, 243, 0.1));
          filter: blur(18px);
          opacity: 0.7;
          -webkit-mask-image: linear-gradient(180deg, transparent 0%, #000 18%, #000 76%, transparent 100%);
          mask-image: linear-gradient(180deg, transparent 0%, #000 18%, #000 76%, transparent 100%);
          pointer-events: none;
        }

        .research-followup-section::after {
          content: none;
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
          left: -8%;
          right: -8%;
          top: 62%;
          height: 34%;
          z-index: 0;
          background:
            radial-gradient(ellipse at 6% 82%, rgba(243, 208, 93, 0.34), rgba(243, 208, 93, 0.1) 30%, rgba(243, 208, 93, 0) 64%),
            radial-gradient(ellipse at 92% 78%, rgba(93, 110, 243, 0.36), rgba(93, 110, 243, 0.1) 32%, rgba(93, 110, 243, 0) 66%),
            linear-gradient(105deg, rgba(243, 208, 93, 0.12) 0%, rgba(6, 7, 12, 0) 50%, rgba(93, 110, 243, 0.14) 100%);
          filter: blur(30px);
          opacity: 0.52;
          -webkit-mask-image: linear-gradient(180deg, transparent 0%, #000 26%, #000 72%, transparent 100%);
          mask-image: linear-gradient(180deg, transparent 0%, #000 26%, #000 72%, transparent 100%);
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
            radial-gradient(circle at 18% 58%, rgba(243, 208, 93, 0.16), rgba(243, 208, 93, 0) 45%),
            radial-gradient(circle at 88% 30%, rgba(93, 110, 243, 0.16), rgba(93, 110, 243, 0) 42%);
          filter: blur(28px);
          opacity: 0.76;
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
            right: clamp(-270px, -56vw, -138px);
            top: clamp(304px, 70vw, 470px);
            width: clamp(480px, 98vw, 650px);
            height: clamp(900px, 178vw, 1180px);
          }

          .research-autonomy-label {
            right: clamp(-10px, 0.2vw, 4px);
            top: clamp(128px, 34vw, 220px);
            font-size: clamp(30px, 8.5vw, 50px);
            opacity: 0.3;
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
          min-width: 600px;
          border-collapse: collapse;
        }

        .cost-table-head {
          background: transparent;
          border-bottom: 1px solid rgba(255,255,255,0.58);
        }

        .cost-th {
          padding: 0 18px 14px;
          font-family: "Research Plus Jakarta", "Plus Jakarta Sans", Arial, sans-serif;
          font-size: clamp(12px, 0.95vw, 16px);
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
          padding: 10px 18px;
          font-family: "Research Plus Jakarta", "Plus Jakarta Sans", Arial, sans-serif;
          font-size: clamp(12px, 0.88vw, 15px);
          line-height: 1.35;
          color: rgba(255,255,255,0.72);
          vertical-align: top;
        }

        .cost-td + .cost-td {
          border-left: 1px solid rgba(255,255,255,0.28);
        }

        .cost-td-system { width: 33%; }
        .cost-td-cost   { width: 20%; font-weight: 500; white-space: nowrap; text-align: center; }
        .cost-td-meaning{ width: 47%; }

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

        @media (max-width: 639px) {
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

      `}</style>

      <section className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1500px] flex-col px-7 pt-44 pb-16 sm:px-14 sm:pt-48 lg:px-24 lg:pt-52">
        <div className="research-network-lines" aria-hidden="true">
          <AnimatedLine />
        </div>

        <div className="relative z-10 max-w-[1180px]">
          <h1 className="research-title uppercase text-white">
            <span className="research-title-word research-title-megha">
              <span
                ref={meghaTitleRef}
                className="research-title-shuffle research-title-shuffle--megha"
                data-initial="1305070801"
                data-target="MEGHA"
              >
                <span className="research-title-m">M</span>E
                <span className="research-title-g">G</span>HA
              </span>
            </span>
            <span className="research-title-word">
              <span
                ref={uasTitleRef}
                className="research-title-shuffle research-title-shuffle--uas"
                data-initial="2119"
                data-target="UAS"
              >
                UAS
              </span>
            </span>
          </h1>

          <p className="research-copy mt-12">
            <span className="research-copy-line">
              A New Class Of{" "}
              <span className="research-copy-highlight">
                Low-Cost, 3D-Printed, Edge-Autonomous
              </span>{" "}
              Aerial Systems Built
            </span>
            <span className="research-copy-line">
              To Win The Wars Of Mass — Commanded In Their Thousands By A Single
              Operator
            </span>
            <span className="research-copy-line">
              Through <span className="research-copy-strong">ARC OS</span>, And
              Built To Keep Human Warfighters Out Of The Kill Zone.
            </span>
          </p>

          <div
            aria-hidden="true"
            className="research-signal-line mt-2 h-px w-full max-w-[1100px]"
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
          <div className="research-autonomy-label" aria-hidden="true">
            AUTONOMY
          </div>
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

      <ResearchPage2 />

    </main>
  );
}
