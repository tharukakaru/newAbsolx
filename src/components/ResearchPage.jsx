import React, { useRef } from "react";
import yapariBold from "../assets/fonts/YapariTrial-Bold.ttf";
import yapariRegular from "../assets/fonts/YapariTrial-Regular.ttf";
import archivoRegular from "../assets/fonts/archivo.regular.ttf";
import plusJakartaSans from "../assets/fonts/PlusJakartaSans[wght].ttf";
import sourceCodeProLight from "../assets/fonts/SourceCodePro-Light.ttf";
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
    title: (
      <>
        The <span className="y">Cost</span> of War Has Collapsed
      </>
    ),
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
    title: (
      <>
        <span className="y">Precise</span> Strike, Not Blunt Force
      </>
    ),
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
    title: (
      <>
        Removing Human <span className="y">Error</span>
      </>
    ),
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
    title: (
      <>
        <span className="y">Lower</span> Damage to Civilians
      </>
    ),
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
        <span className="y">Act</span> Fast &mdash;{" "}
        <span className="y">See</span> First,{" "}
        <span className="y">Strike</span> First
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
    title: (
      <>
        <span className="y">Rapid</span> Manufacturing
      </>
    ),
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

        /* Monospace for the P-0x / CATEGORY metadata. The design asks for
           Fira Code; no Fira Code file ships with the project, so Source
           Code Pro Light is registered as the loaded fallback — the family
           chain tries Fira Code first if the system provides it. */
        @font-face {
          font-family: "Research Mono";
          src: url(${sourceCodeProLight}) format("truetype");
          font-weight: 300;
          font-style: normal;
          font-display: swap;
        }

        .research-page {
          background:
            radial-gradient(ellipse at 0% 50%, rgba(11, 18, 35, 0.94) 0%, rgba(11, 18, 35, 0.44) 26%, rgba(11, 18, 35, 0) 56%),
            radial-gradient(ellipse at 100% 52%, rgba(11, 18, 35, 0.98) 0%, rgba(11, 18, 35, 0.5) 30%, rgba(11, 18, 35, 0) 60%),
            #030510;
        }

        /* Hero-scoped atmosphere: soft deep-navy glow to the right, faint muted
           olive around the yellow-line zone. Sized in vh so it stays confined to
           the first viewport instead of stretching down the whole page. */
        .research-page::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            radial-gradient(ellipse 44% 46% at 82% 38%, rgba(32, 37, 83, 0.28), rgba(32, 37, 83, 0) 72%),
            radial-gradient(ellipse 54% 30% at 38% 12%, rgba(84, 72, 32, 0.12), rgba(46, 39, 17, 0) 68%),
            linear-gradient(180deg, rgba(0,0,0,0.48) 0%, rgba(2,4,9,0) 32%, rgba(2,4,9,0.28) 100%),
            radial-gradient(ellipse at 50% 18%, rgba(255,255,255,0.04), rgba(255,255,255,0) 34%);
          background-size: 100% 110vh, 100% 80vh, 100% 100%, 100% 100%;
          background-position: top center, top center, 0 0, 0 0;
          background-repeat: no-repeat;
          pointer-events: none;
        }

        .research-network-lines {
          position: absolute;
          left: 50%;
          top: clamp(-184px, -8.2vw, -132px);
          z-index: 0;
          width: min(2400px, 162vw);
          opacity: 0.72;
          filter: saturate(1.08) brightness(0.94);
          pointer-events: none;
          transform: translateX(-50%);
        }

        /* Page-scoped overrides of the shared AnimatedLine: slightly thinner
           than the homepage but with the yellow kept vivid. */
        .research-network-lines path#path1 {
          stroke-width: 1.35;
        }

        .research-network-lines path#path2 {
          stroke-width: 1.05;
          opacity: 0.92;
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

        .research-hero-section {
          overflow: visible;
          z-index: 80;
        }

        .research-title {
          display: flex;
          flex-wrap: nowrap;
          align-items: baseline;
          gap: clamp(16px, 2.6vw, 50px);
          padding-left: clamp(2px, 0.5vw, 10px);
          font-family: "Research Yapari";
          font-weight: 700;
          font-size: clamp(40px, 6.5vw, 108px);
          line-height: 0.76;
          letter-spacing: 0.105em;
          word-spacing: 0.12em;
          transform: translate(42px, -10px);
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
          font-family: "Research Yapari";
          font-size: 0.32em;
          font-weight: 700;
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
          left: -0.14em;
          top: 50%;
          width: 0.82em;
          height: 0.96em;
          z-index: -1;
          border-radius: 999px;
          background: radial-gradient(closest-side, rgba(0,0,0,0.52), rgba(0,0,0,0.24) 50%, rgba(0,0,0,0) 78%);
          filter: blur(8px);
          transform: translateY(-50%);
          pointer-events: none;
        }

        /* Force the non-accent title letters to clean pure white so the dark M
           gradient and yellow G glow don't bleed a tint onto E / HA. */
        .research-title-plain {
          color: #ffffff;
          -webkit-text-fill-color: #ffffff;
        }

        /* Subtle dark-metallic fade on the E only: roughly the first fifth of
           the glyph carries the shadow, the rest stays clearly white. */
        .research-title-e {
          color: transparent;
          background: linear-gradient(
            90deg,
            #3c3c3c 0%,
            #8f8f8f 16%,
            #f2f2f2 46%,
            #ffffff 100%
          );
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
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
            0 0 5px rgba(227, 228, 27, 0.08),
            0 6px 16px rgba(0, 0, 0, 0.30);
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
            0 0 5px rgba(227, 228, 27, 0.08),
            0 6px 16px rgba(0, 0, 0, 0.30);
          -webkit-text-fill-color: currentColor;
        }

        /* Figma source: 1522px track / 32px / ls 4px at 1728 frame width.
           1.85185vw reproduces 32px at 1728 and 26.67px at 1440; the max cap
           keeps the three fixed lines inside the 1500px page shell. */
        .research-copy {
          margin-left: clamp(20px, 2.6vw, 44px);
          max-width: 100%;
          font-family: "Research Plus Jakarta", "Plus Jakarta Sans", Arial, sans-serif;
          font-size: clamp(0.875rem, 1.5vw, 1.375rem);
          line-height: 1.32;
          font-weight: 400;
          letter-spacing: clamp(0.08rem, 0.19vw, 0.18rem);
          text-transform: none;
          color: #C9D1D3;
          text-wrap: normal;
        }

        .research-copy-line {
          display: block;
          white-space: nowrap;
        }

        .research-copy-highlight {
          color: #E3E41B;
          font-weight: 600;
        }

        .research-copy-strong {
          color: #FFFFFF;
          font-weight: 800;
        }

        /* Below ~1150px the fixed line breaks no longer fit the content track —
           let the paragraph wrap naturally instead of clipping. */
        @media (max-width: 1151px) {
          .research-copy-line {
            white-space: normal;
          }
        }

        @media (max-width: 767px) {
          .research-hero-section {
            padding-left: clamp(20px, 6vw, 28px) !important;
            padding-right: clamp(20px, 6vw, 28px) !important;
          }

          .research-hero-section > .relative,
          .research-panel-wrap,
          .research-panel,
          .research-panel > .relative {
            width: calc(100vw - clamp(40px, 12vw, 56px));
            max-width: calc(100vw - clamp(40px, 12vw, 56px));
            min-width: 0;
          }

          .research-panel,
          .research-panel > .relative {
            width: 100%;
            max-width: 100%;
          }

          .research-title {
            flex-wrap: wrap;
            width: 100%;
            max-width: 100%;
            min-width: 0;
            gap: clamp(6px, 2vw, 12px);
            padding-left: 0;
            font-size: clamp(31px, 10.5vw, 50px);
            line-height: 0.82;
            letter-spacing: 0.045em;
            word-spacing: 0;
          }

          .research-title-word,
          .research-title-shuffle {
            max-width: 100%;
          }

          .research-title-megha::before {
            left: -0.14em;
            width: 1.55em;
            filter: blur(10px);
          }

          .research-copy {
            margin-left: 0;
            max-width: 100%;
            font-size: clamp(13px, 3.6vw, 17px);
            line-height: 1.35;
            letter-spacing: 0.05em;
            overflow-wrap: anywhere;
          }

          .research-copy-line {
            white-space: normal;
          }

          .research-panel-title {
            font-size: clamp(26px, 7vw, 34px) !important;
            line-height: 0.96 !important;
          }

          .research-kicker,
          .research-panel-title,
          .research-panel-body {
            width: 100%;
            max-width: 100%;
            overflow-wrap: anywhere;
          }
        }

        .research-signal-line {
          position: relative;
          display: block;
          overflow: visible;
          z-index: 120;
          --research-line-height: clamp(4700px, 479vw, 8400px);
          --research-line-current: 560px;
          background:
            linear-gradient(90deg, rgba(201,209,211,0.55) 0%, rgba(201,209,211,0.26) 62%, rgba(201,209,211,0.08) 88%, transparent 100%),
            linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.02) 12%, rgba(255,255,255,0.16) 36%, rgba(255,255,255,0.32) 50%, rgba(255,255,255,0.16) 64%, rgba(255,255,255,0.02) 88%, transparent 100%);
          background-repeat: no-repeat;
          background-size: 100% 100%, 28% 100%;
          background-position: 0 0, -34% 0;
          box-shadow: none;
          will-change: background-position;
          animation: researchSignalSweep 6.8s linear infinite;
        }

        .research-signal-line::before {
          content: "";
          position: absolute;
          left: 0;
          top: -16px;
          z-index: 1;
          width: 1px;
          height: var(--research-line-height);
          background: linear-gradient(
            180deg,
            rgba(255,255,255,0.36),
            rgba(255,255,255,0.44) 6%,
            rgba(255,255,255,0.28) 58%,
            rgba(255,255,255,0.12) 100%
          );
          box-shadow: 0 0 6px rgba(255,255,255,0.12);
          pointer-events: none;
        }

        .research-signal-line::after {
          content: "";
          position: absolute;
          left: 0;
          top: -16px;
          z-index: 2;
          width: 1px;
          height: var(--research-line-current);
          background: linear-gradient(
            180deg,
            transparent 0%,
            rgba(255,255,210,0.08) 16%,
            rgba(255,255,180,0.36) 34%,
            rgba(255,255,255,1) 50%,
            rgba(255,255,150,0.36) 66%,
            rgba(255,255,120,0.08) 84%,
            transparent 100%
          );
          filter:
            drop-shadow(0 0 3px rgba(255,255,255,0.4))
            drop-shadow(0 0 8px rgba(255,255,180,0.16));
          pointer-events: none;
          will-change: transform;
          animation: researchSignalCurrentY 8.8s linear infinite;
        }

        @keyframes researchSignalSweep {
          0%   { background-position: 0 0, -34% 0; }
          92%  { background-position: 0 0, 134% 0; }
          100% { background-position: 0 0, 134% 0; }
        }

        @keyframes researchSignalCurrentY {
          0%   { transform: translateY(calc(var(--research-line-current) * -1)); }
          100% { transform: translateY(var(--research-line-height)); }
        }

        /* Thin cyan technical accent hugging the hero's right edge */
        .research-right-accent {
          position: absolute;
          top: clamp(90px, 12vh, 170px);
          right: 0;
          width: 1px;
          height: min(58vh, 620px);
          z-index: 40;
          background: linear-gradient(
            180deg,
            rgba(96, 206, 255, 0) 0%,
            rgba(96, 206, 255, 0.32) 26%,
            rgba(140, 222, 255, 0.5) 52%,
            rgba(96, 206, 255, 0.18) 78%,
            rgba(96, 206, 255, 0) 100%
          );
          box-shadow: 0 0 6px rgba(96, 206, 255, 0.14);
          pointer-events: none;
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

        /* UAV blueprint video: anchored directly above the problems block
           (bottom: 100% of .research-problems-content), so it always sits
           in the gap above the heading regardless of the panel's height.
           The MP4 encodes a black canvas — screen blending plus a soft
           radial edge mask removes the rectangle without adding any black
           backing layer. */
        .uav-blueprint-video-wrap {
          position: absolute;
          z-index: 1;
          left: 50%;
          bottom: calc(100% - 1.5rem);
          transform: translateX(-50%);

          width: clamp(38rem, 58vw, 59rem);
          aspect-ratio: 16 / 9;

          /* The site's own base colour sits beneath the video: the video's
             screen blend turns its encoded black canvas into exactly this
             colour, so the interior reads as page background, and the
             closest-side mask feathers every edge (not just the corners)
             into the real page behind. */
          background: #030510;
          border: 0;
          box-shadow: none;
          overflow: visible;
          pointer-events: none;

          -webkit-mask-image: radial-gradient(
            closest-side at 50% 50%,
            #000 48%,
            rgba(0, 0, 0, 0.75) 72%,
            transparent 98%
          );
          mask-image: radial-gradient(
            closest-side at 50% 50%,
            #000 48%,
            rgba(0, 0, 0, 0.75) 72%,
            transparent 98%
          );
        }

        .uav-blueprint-video {
          display: block;
          width: 100%;
          height: 100%;

          object-fit: contain;
          background: transparent;
          border: 0;
          box-shadow: none;

          filter: saturate(0.9) contrast(1.12);
          mix-blend-mode: screen;
          transform: scaleX(-1);
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
          left: clamp(-96px, -5.4vw, -48px);
          top: clamp(200px, 19vw, 330px);
          width: clamp(190px, 19.5vw, 292px);
          opacity: 0.94;
          filter: brightness(1.08) contrast(1.04);
          pointer-events: none;
          z-index: 2;
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
          right: clamp(2px, 0.8vw, 14px);
          top: clamp(320px, 32vw, 520px);
          z-index: 4;
          writing-mode: vertical-rl;
          text-orientation: mixed;
          white-space: nowrap;
          color: rgba(201, 209, 211, 0.48);
          font-family: "Research Yapari Regular", "Yapari Trial", "Azonix", sans-serif;
          font-size: clamp(36px, 3.6vw, 56px);
          font-style: normal;
          font-weight: 400;
          line-height: 1;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          pointer-events: none;
          user-select: none;
        }

        .research-problems-content {
          position: relative;
          margin-top: clamp(360px, 37vw, 520px);
        }

        .research-problems-eyebrow,
        .problem-title,
        .problem-body {
          font-family: "Research Plus Jakarta", "Plus Jakarta Sans", Arial, sans-serif;
          letter-spacing: 0;
        }

        .research-problems-eyebrow {
          position: relative;
          z-index: 5;
          margin-bottom: clamp(1rem, 1.4vw, 1.5rem);
          font-size: clamp(0.875rem, 1.15vw, 1.25rem);
          line-height: 1.2;
          font-weight: 300;
          color: rgba(255,255,255,0.82);
        }

        /* Exactly three controlled heading rows — no automatic wrapping.
           Weight 700 maps to the real YapariTrial-Bold file (no synthetic
           weight). At 1440px this resolves to ~53.3px / 3.33px tracking. */
        .research-problems-heading {
          position: relative;
          z-index: 5;
          margin: 0 0 clamp(1.75rem, 3vw, 3rem);
          font-family: "Research Yapari", "Yapari Trial", "Azonix", sans-serif;
          font-size: clamp(2.2rem, 3.7037vw, 4rem);
          line-height: 0.98;
          font-weight: 700;
          letter-spacing: clamp(0.08rem, 0.2315vw, 0.25rem);
          text-transform: uppercase;
          color: #fff;
        }

        .research-problems-heading .heading-line {
          display: block;
          white-space: nowrap;
        }

        .research-problems-heading .heading-accent,
        .research-problems-heading .y {
          color: #E3E41B;
        }

        .problems-grid {
          position: relative;
          z-index: 5;
        }

        /* ── Atmospheric colour-grading system ──────────────────
           Four controlled stages light the page (battle / mobility /
           network / footer). Each stage owns one shared lighting layer;
           content sections stay transparent so the falloff passes
           continuously across section boundaries. Every source is an
           enormous solid blurred blob whose unblurred centre sits
           outside the visible page — the muted look comes from blur,
           opacity and the near-black base, never from dark blended
           replacement colours. */
        :root {
          --megha-atmosphere-blur: clamp(10rem, 19.7vw, 28rem);
        }

        .research-story-stage {
          position: relative;
          isolation: isolate;
        }

        .research-story-stage::before,
        .research-story-stage::after {
          content: none;
        }

        .atmosphere-stage {
          position: relative;
          isolation: isolate;
          background: transparent;
        }

        .atmosphere-stage__lighting {
          position: absolute;
          inset: -12rem 0;
          z-index: 1;
          overflow: visible;
          pointer-events: none;
        }

        .megha-light-blob {
          position: absolute;
          display: block;

          width: clamp(48rem, 74vw, 80rem);
          height: clamp(52rem, 80vw, 86rem);

          border-radius: 2423px;
          filter: blur(var(--megha-atmosphere-blur));

          pointer-events: none;
          transform: translate3d(0, 0, 0);
          mix-blend-mode: normal;
        }

        /* Stage 1 — battlefield + scarcity + metrics (colo2).
           Blue peaks upper-right around the Real Battlefield graphic
           above this section — the lighting layer overflows upward and
           nothing between it and the page root clips it. Gold grows
           from the lower-left along the destroyed-aircraft → scarcity
           → metrics run. Centres are vertically far apart. */
        .battle-gold {
          left: -48%;
          top: 62%;

          background: #F3D05D;
          opacity: 0.58;

          transform:
            translateY(-50%)
            translate3d(0, 0, 0);
        }

        .battle-blue {
          right: -50%;
          top: 56%;

          background: #5D6EF3;
          opacity: 0.62;

          transform:
            translateY(-50%)
            translate3d(0, 0, 0);
        }

        /* Stage 2 — Man-Portable → SEE FIRST → Stealth (colo4).
           Continuation, lower opacity than Stage 1: gold tail on the
           left rising again near the Stealth heading, blue dominant on
           the right slightly higher (around SEE FIRST). */
        .mobility-gold {
          left: -54%;
          top: 55%;

          background: #F3D05D;
          opacity: 0.44;

          transform:
            translateY(-50%)
            translate3d(0, 0, 0);
        }

        .mobility-blue {
          right: -51%;
          top: 38%;

          background: #5D6EF3;
          opacity: 0.62;

          transform:
            translateY(-50%)
            translate3d(0, 0, 0);
        }

        /* Stage 3 — wireframes + Networked Swarm (colo5).
           One restrained blue from the left only; the right side of
           this region stays black and the CAD drawings stay white. */
        .network-blue {
          left: -57%;
          top: 32%;

          width: clamp(44rem, 68vw, 72rem);
          height: clamp(48rem, 72vw, 78rem);

          background: #5D6EF3;
          opacity: 0.36;

          transform:
            translateY(-50%)
            translate3d(0, 0, 0);
        }

        /* Ends the page in pure black so the boundary into the footer
           (whose top is also pure black) is invisible — kills the seam
           created by the page background's right-edge navy radial.
           Lives in the lighting layer: above the blobs and page bg,
           below all stage content. bottom:12rem = the stage's true
           bottom edge because the lighting layer bleeds -12rem. */
        .megha-stage-bottom-fade {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 12rem;
          height: 24rem;
          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0) 0%,
            rgba(1, 2, 6, 0.6) 55%,
            #000 100%
          );
          pointer-events: none;
        }

        @media (max-width: 64rem) {
          .megha-light-blob {
            width: clamp(38rem, 88vw, 54rem);
            height: clamp(42rem, 96vw, 60rem);
          }

          .battle-gold,
          .mobility-gold {
            left: -66%;
          }

          .battle-blue,
          .mobility-blue {
            right: -70%;
          }

          .network-blue {
            left: -74%;
          }
        }

        @media (max-width: 48rem) {
          .megha-light-blob {
            width: clamp(28rem, 140vw, 42rem);
            height: clamp(34rem, 160vw, 48rem);
          }

          .battle-gold,
          .mobility-gold {
            left: -95%;
          }

          .battle-blue,
          .mobility-blue {
            right: -98%;
          }

          .network-blue {
            left: -100%;
          }

          .battle-gold { opacity: 0.48; }
          .battle-blue { opacity: 0.52; }
          .mobility-gold { opacity: 0.36; }
          .mobility-blue { opacity: 0.48; }
          .network-blue { opacity: 0.30; }
        }

        .research-followup-section {
          position: relative;
        }

        .research-followup-section::before,
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
          max-width: 100%;
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

        /* Per-section colour blooms removed — lighting is owned solely by
           the shared .megha-light sources. */
        .research-cost-panel::before,
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

        /* Short technical ticks: 1px lines that leave the vertical rail and
           point at each section kicker. Desktop only — the rail geometry is
           only stable at the lg gutter. */
        @media (min-width: 1024px) {
          .research-problems-eyebrow,
          .research-cost-kicker {
            position: relative;
          }

          .research-problems-eyebrow::before,
          .research-cost-kicker::before {
            content: "";
            position: absolute;
            top: 0.62em;
            height: 1px;
            width: clamp(13px, 1.1vw, 22px);
            background: rgba(255, 255, 255, 0.72);
            pointer-events: none;
          }

          .research-problems-eyebrow::before {
            left: -24px;
          }

          .research-cost-kicker::before {
            left: -34px;
          }
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
          content: none;
        }

        .research-launch-card {
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.18);
          border-radius: 34px;
          background: rgba(10, 11, 13, 0.54);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.18),
            0 22px 54px rgba(0,0,0,0.34);
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
          min-width: 0;
          height: auto;
          padding: clamp(1.25rem, 2vw, 1.85rem) 0;
          border-top: 1px solid rgba(255,255,255,0.34);
        }

        .problem-card:first-child {
          border-top: 0;
          padding-top: 0;
        }

        .problem-label {
          margin-bottom: clamp(0.45rem, 0.8vw, 0.75rem);
          font-family: "Fira Code", "Research Mono", "Source Code Pro", Consolas, monospace;
          font-size: clamp(0.75rem, 1.157vw, 1.25rem);
          line-height: 1.6;
          font-weight: 300;
          text-transform: uppercase;
          color: rgba(255,255,255,0.78);
        }

        .problem-title {
          margin: clamp(0.45rem, 0.8vw, 0.75rem) 0 clamp(1rem, 1.5vw, 1.5rem);
          font-size: clamp(1.125rem, 1.852vw, 2rem);
          line-height: 1;
          font-weight: 600;
          color: #fff;
          text-wrap: balance;
        }

        .problem-title .y {
          color: #E3E41B;
        }

        .problem-body {
          margin: 0;
          font-size: clamp(0.875rem, 1.273vw, 1.375rem);
          line-height: 1.45;
          font-weight: 300;
          color: rgba(255,255,255,0.84);
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
            opacity: 0.62;
          }

          .research-panel-wrap {
            margin-top: clamp(34px, 10vw, 56px);
          }

          .research-panel > .relative {
            padding: clamp(22px, 5.6vw, 32px) clamp(18px, 5vw, 28px) !important;
          }

          .uav-blueprint-video-wrap {
            bottom: calc(100% - 0.25rem);
            width: min(640px, 140vw);
            opacity: 0.72;
          }

          .research-left-shape {
            left: clamp(-118px, -30vw, -72px);
            top: clamp(300px, 78vw, 430px);
            width: clamp(170px, 48vw, 230px);
            opacity: 0.32;
            z-index: 1;
          }

          .research-right-shape {
            right: clamp(-340px, -70vw, -170px);
            top: clamp(430px, 104vw, 620px);
            width: clamp(440px, 112vw, 650px);
            height: clamp(760px, 172vw, 1080px);
            opacity: 0.42;
            z-index: 1;
          }

          .research-autonomy-label {
            display: none;
          }

          .research-problems-content {
            margin-top: clamp(300px, 78vw, 430px);
            width: 100%;
            max-width: 100%;
          }

          .research-problems-eyebrow {
            font-size: clamp(12px, 3.4vw, 14px);
          }

          .research-problems-heading {
            width: 100%;
            max-width: 100%;
            font-size: clamp(23px, 6.3vw, 31px);
            line-height: 1.08;
            letter-spacing: 0.06em;
          }

          .research-problems-heading .heading-line {
            white-space: normal;
          }

          .problems-grid {
            width: 100%;
            max-width: 100%;
            margin-top: clamp(28px, 8vw, 44px);
          }

          .problem-card {
            min-height: auto;
            padding: clamp(22px, 6vw, 30px) 0;
          }

          .problem-title,
          .problem-body {
            width: 100%;
            max-width: 100%;
          }

          .problem-title {
            font-size: clamp(19px, 5.2vw, 23px);
            line-height: 1.05;
          }

          .problem-body {
            margin-top: clamp(16px, 4.5vw, 22px);
            font-size: clamp(12.5px, 3.65vw, 15px);
            line-height: 1.42;
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

        @media (max-width: 420px) {
          .research-title {
            font-size: clamp(24px, 8vw, 30px);
            letter-spacing: 0.025em;
          }

          .research-copy {
            font-size: clamp(12px, 3.4vw, 14px);
            letter-spacing: 0.035em;
          }

          .research-problems-content {
            margin-top: clamp(285px, 86vw, 380px);
          }

          .research-problems-heading {
            font-size: clamp(22px, 6.1vw, 26px);
          }

          .research-panel-title {
            font-size: clamp(24px, 6.7vw, 28px) !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .research-signal-line,
          .research-signal-line::before,
          .research-signal-line::after {
            animation: none;
          }

          .research-signal-line {
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
          color: #E3E41B;
          font-weight: 700;
        }

        /* Metrics card: nearly transparent neutral surface — the stage
           lighting shows around and slightly behind it, untinted. */
        .cost-stats-section {
          position: relative;
          z-index: 5;
          margin: 42px auto 0;
          width: min(100%, 1120px);
          border-radius: 18px;
          overflow: hidden;
          background: rgba(4, 6, 13, 0.06);
          backdrop-filter: none;
        }

        .cost-stats-overlay {
          display: none;
        }

        .cost-stats-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border: 1px solid rgba(255, 255, 255, 0.34);
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

      <div className="research-right-accent" aria-hidden="true" />

      <section className="research-hero-section relative z-10 mx-auto flex min-h-screen w-full max-w-[1500px] flex-col px-7 pt-36 pb-16 sm:px-14 sm:pt-40 lg:px-[clamp(4.5rem,5.96vw,6.4375rem)] lg:pt-44">
        <div className="research-network-lines" aria-hidden="true">
          <AnimatedLine />
        </div>

        <div className="relative z-10 w-full">
          <h1 className="research-title uppercase text-white">
            <span className="research-title-word research-title-megha">
              <span
                ref={meghaTitleRef}
                className="research-title-shuffle research-title-shuffle--megha"
                data-initial="1305070801"
                data-target="MEGHA"
              >
                <span className="research-title-m">M</span>
                <span className="research-title-plain research-title-e">E</span>
                <span className="research-title-g">G</span>
                <span className="research-title-plain">HA</span>
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

          <p className="research-copy mt-10">
            <span className="research-copy-line">
              A new class of{" "}
              <span className="research-copy-highlight">
                low-cost, 3D-printed, edge-autonomous
              </span>{" "}
              aerial systems built
            </span>
            <span className="research-copy-line">
              to win the wars of mass — commanded in their thousands by a single
              operator
            </span>
            <span className="research-copy-line">
              through <span className="research-copy-strong">ARC OS</span>, and
              built to keep human warfighters out of the kill zone.
            </span>
          </p>

          <div
            aria-hidden="true"
            className="research-signal-line mt-3 h-px w-full"
          />
        </div>

        <div className="research-panel-wrap mt-6 w-full max-w-[1380px]">
          <div className="research-panel w-full">
            <div className="relative z-10 px-4 pt-6 pb-7 sm:px-5 sm:pt-7 sm:pb-9 lg:px-6 lg:pt-7 lg:pb-11">
              <p className="research-kicker text-[clamp(12px,0.95vw,15px)] uppercase text-white/80">
                // 01 - THE QUESTION
              </p>

              <h2 className="research-panel-title mt-3 text-[clamp(26px,3.2vw,50px)] uppercase leading-[0.98] text-white">
                Why Do We Need{" "}
                <span className="whitespace-nowrap">
                  <span className="text-[#E3E41B]">MEGHA</span>?
                </span>
              </h2>

              <div className="research-panel-body mt-5 max-w-[900px] space-y-5 text-[clamp(12px,0.88vw,15px)] leading-[1.4] text-white/76">
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
                <div className="uav-blueprint-video-wrap" aria-hidden="true">
                  <video
                    className="uav-blueprint-video"
                    src={uavBlueprintVideo}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                  />
                </div>

                <p className="research-problems-eyebrow uppercase">
                  // 02 - Problems MEGHA Solves
                </p>

                <h2 className="research-problems-heading text-white">
                  <span className="heading-line">Real Battlefield</span>
                  <span className="heading-line">
                    Problems, <span className="heading-accent">Engineered</span>
                  </span>
                  <span className="heading-line">Solutions</span>
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

      <div className="research-story-stage">

      <section
        id="cost-argument-showcase"
        className="atmosphere-stage battle-stage research-followup-section relative z-10 mx-auto w-full max-w-[1500px] px-7 pb-28 sm:px-14 lg:px-[clamp(4.5rem,5.96vw,6.4375rem)]"
      >
        <div className="atmosphere-stage__lighting" aria-hidden="true">
          <span className="megha-light-blob battle-gold" />
          <span className="megha-light-blob battle-blue" />
        </div>

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

      </div>

    </main>
  );
}
