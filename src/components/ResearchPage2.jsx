import React from "react";
import glassFragmentsImage from "../assets/jeannotmagcd_96363_small_fragments_of_shattered_glass_floatin_34d0418d-4457-49b6-8ddb-52a988f9ec66_2 1.webp";
import printerBlueprint from "../assets/3d-printer-blueprints_204926-846 2 [Vectorized].png";
import cncIllustration from "../assets/cnc-milling-illustration_204926-3376 2.png";
import plusJakartaSans from "../assets/fonts/PlusJakartaSans[wght].ttf";

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

const swarmOldWay = [
  "Dies the moment the link is jammed",
  "Lost when GPS is denied",
  "Decisions delayed by network latency",
  "Constant transmissions reveal position",
  "Crew exposed to recover lost links",
];

const swarmMeghaWay = [
  "Promotes AI to operator; keeps fighting",
  "Navigates by computer vision and motion",
  "Decisions made onboard in milliseconds",
  "Stays entirely silent and undetectable",
  "No human ever sent into the fire",
];

const airframeFeatures = [
  {
    cat: "Stealth",
    lead: "Low",
    rest: "Signature",
    body: "Composite shells reduce visual and radar signature while keeping launch setup minimal.",
  },
  {
    cat: "Speed",
    lead: "Rapid",
    rest: "Deployment",
    body: "Printed parts and modular fixtures let teams pack, repair, and relaunch without factory tooling.",
  },
  {
    cat: "Strength",
    lead: "Reinforced",
    rest: "Composite",
    body: "Carbon-fibre reinforced thermoplastics protect high-load joints without making the airframe heavy.",
  },
  {
    cat: "Iterate",
    lead: "Hours,",
    rest: "Not Years",
    body: "CAD changes become printable field updates, so upgrades arrive in hours instead of factory cycles.",
  },
];

export default function ResearchPage2() {
  return (
    <>
      <style>{`
        @font-face {
          font-family: "Plus Jakarta Sans";
          src: url(${plusJakartaSans}) format("truetype");
          font-weight: 200 800;
          font-style: normal;
          font-display: swap;
        }

        /* ── // 04 — Capabilities & ISR ───────────────────────── */

        .isr-section {
          --isr-line-x: 28px;
          --isr-content-shift: 26px;
          position: relative;
          z-index: 1;
          overflow: hidden;
          isolation: isolate;
        }

        /* The vertical rail is now ONE continuous element owned by the page
           (the hero divider's ::before spine) — per-section lines removed so
           the rail never doubles or restarts at section boundaries. */
        .isr-section::before {
          content: none;
        }

        .capabilities-section {
          background: transparent;
        }

        .isr-glass {
          position: absolute;
          top: -4%;
          right: -3%;
          height: 112%;
          width: clamp(420px, 58vw, 920px);
          object-fit: cover;
          object-position: right center;
          opacity: 0.66;
          mix-blend-mode: screen;
          pointer-events: none;
          user-select: none;
          z-index: 1;
          filter: contrast(1.04) brightness(0.9);
          -webkit-mask-image:
            linear-gradient(90deg, transparent 0%, #000 28%, #000 88%, transparent 100%),
            linear-gradient(180deg, transparent 0%, #000 12%, #000 92%, transparent 100%);
          mask-image:
            linear-gradient(90deg, transparent 0%, #000 28%, #000 88%, transparent 100%),
            linear-gradient(180deg, transparent 0%, #000 12%, #000 92%, transparent 100%);
        }

        /* Side lighting now comes from the shared atmosphere stages — all
           old section-sized glow rectangles are disabled to kill the seams. */
        .isr-bg-glow,
        .swm-bg-glow,
        .afr-bg-glow {
          display: none;
        }

        .isr-inner {
          position: relative;
          z-index: 3;
          padding-left: var(--isr-content-shift);
        }

        .isr-kicker {
          margin-top: 0;
          font-family: "Research Plus Jakarta", "Plus Jakarta Sans", Arial, sans-serif;
          font-size: clamp(11px, 0.78vw, 13px);
          font-weight: 400;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.72);
        }

        .isr-title {
          margin-top: 16px;
          max-width: 1040px;
          font-family: "Research Yapari", "Yapari Trial", "Azonix", sans-serif;
          font-size: clamp(26px, 3.28vw, 54px);
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
          margin-top: 18px;
          max-width: 620px;
          font-family: "Research Plus Jakarta", "Plus Jakarta Sans", Arial, sans-serif;
          font-size: clamp(11px, 0.82vw, 14px);
          line-height: 1.6;
          font-weight: 400;
          color: rgba(255,255,255,0.74);
        }

        .isr-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr);
          gap: 14px;
          margin-top: 36px;
          max-width: 1040px;
          font-family: "Research Plus Jakarta", "Plus Jakarta Sans", Arial, sans-serif;
        }

        .isr-card {
          position: relative;
          padding: 18px 18px 20px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.1);
          background:
            linear-gradient(150deg, rgba(255,255,255,0.035), rgba(255,255,255,0.01)),
            rgba(5, 7, 12, 0.34);
          backdrop-filter: blur(3px);
          transition: border-color 0.25s ease, transform 0.25s ease;
        }

        .isr-card:hover {
          border-color: rgba(227, 228, 27, 0.5);
          transform: translateY(-3px);
        }

        .isr-card-head {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .isr-card-num {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex: 0 0 auto;
          width: 34px;
          height: 31px;
          border: 1px solid rgba(255,255,255,0.86);
          border-radius: 10px;
          background: rgba(217,217,217,0);
          box-shadow:
            inset 0 0 0 1px rgba(0,0,0,0.28),
            0 0 12px rgba(227, 228, 27, 0.06);
          font-family: "Research Plus Jakarta", "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 12px;
          font-weight: 700;
          line-height: 1;
          letter-spacing: 0;
          color: #E3E41B;
        }

        .isr-card-title {
          margin: 0;
          color: #FFF;
          font-family: "Plus Jakarta Sans", "Research Plus Jakarta", Arial, sans-serif;
          font-size: clamp(18px, 5.2vw, 24px);
          font-style: normal;
          font-weight: 700;
          line-height: 1.02;
          letter-spacing: 0;
          text-transform: uppercase;
        }

        .isr-card-body {
          margin-top: 14px;
          font-family: "Research Plus Jakarta", "Plus Jakarta Sans", Arial, sans-serif;
          font-size: clamp(13px, 3.5vw, 16px);
          line-height: 1.35;
          font-weight: 300;
          color: rgba(255,255,255,0.7);
        }

        .isr-tagline {
          margin: 48px 0 0;
          font-family: "Research Yapari Regular", "Yapari Trial", "Azonix", sans-serif;
          font-size: clamp(20px, 2.45vw, 42px);
          line-height: 1;
          font-weight: 400;
          letter-spacing: 0;
          text-transform: uppercase;
          color: #FFFFFF;
        }

        .isr-tagline .y {
          color: #E3E41B;
        }

        .isr-outro {
          margin-top: 18px;
          max-width: 820px;
          font-family: "Research Plus Jakarta", "Plus Jakarta Sans", Arial, sans-serif;
          font-size: clamp(11px, 0.82vw, 14px);
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
          .isr-section {
            --isr-line-x: clamp(4.5rem, 5.96vw, 6.4375rem);
            --isr-content-shift: clamp(44px, 4.2vw, 64px);
          }

          .isr-kicker {
            position: relative;
          }

          .isr-kicker::before {
            content: "";
            position: absolute;
            left: calc(-1 * var(--isr-content-shift));
            top: 0.62em;
            width: clamp(13px, 1.1vw, 22px);
            height: 1px;
            background: rgba(255, 255, 255, 0.72);
            pointer-events: none;
          }

          .capabilities-section {
            min-height: 597px;
            padding-left: clamp(4.5rem, 5.96vw, 6.4375rem) !important;
            padding-right: clamp(24px, 3vw, 44px) !important;
          }

          .isr-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            column-gap: 0;
            row-gap: 0;
            position: relative;
            width: calc(100% - clamp(56px, 6vw, 86px));
            max-width: 1160px;
            margin-top: 28px;
            margin-left: clamp(22px, 2.6vw, 40px);
            margin-right: 0;
            padding: 24px 24px 26px;
            border: 1px solid rgba(255,255,255,0.66);
            border-radius: 24px;
            background: rgba(5, 7, 12, 0.24);
            backdrop-filter: blur(2px);
            overflow: hidden;
          }

          .isr-grid::before {
            content: "";
            position: absolute;
            left: 9%;
            right: 9%;
            top: 50%;
            height: 1px;
            background: rgba(255,255,255,0.58);
            pointer-events: none;
          }

          .isr-card {
            min-height: 118px;
            padding: 0 16px 20px;
            border: 0;
            border-radius: 0;
            background: transparent;
            backdrop-filter: none;
          }

          .isr-card:nth-child(n+4) {
            padding-top: 26px;
            padding-bottom: 0;
          }

          .isr-card:hover {
            transform: none;
            border-color: transparent;
          }

          .isr-card-head {
            gap: 12px;
            min-height: 36px;
          }

          .isr-card-num {
            width: 38px;
            height: 36px;
            border-radius: 11px;
            font-size: 14px;
          }

          .isr-card-title {
            color: #FFF;
            font-family: "Plus Jakarta Sans", "Research Plus Jakarta", Arial, sans-serif;
            font-size: clamp(20px, 1.52vw, 25px);
            font-style: normal;
            font-weight: 700;
            line-height: 1.05;
            text-transform: uppercase;
          }

          .isr-card-body {
            margin: 14px 0 0 50px;
            max-width: 300px;
            font-size: clamp(12px, 0.86vw, 14px);
            line-height: 1.35;
          }

          .isr-tagline {
            max-width: 1220px;
            margin-top: 58px;
            text-align: center;
          }

          .isr-outro {
            max-width: 980px;
            margin-left: auto;
            margin-right: auto;
            text-align: center;
          }
        }

        @media (min-width: 768px) and (max-width: 1023px) {
          .capabilities-section {
            padding-left: clamp(58px, 8vw, 84px) !important;
          }
        }

        @media (max-width: 767px) {
          .capabilities-section {
            padding-left: 28px !important;
            padding-right: 28px !important;
          }

          .isr-card-title {
            font-size: clamp(18px, 5.8vw, 24px);
            line-height: 1;
          }
        }

        /* ── // 05 — The Airframe ──────────────────────────────── */

        .afr-section {
          --afr-navy: #242b5f;
          --afr-black: #000000;
          --afr-lime: #E3E41B;
          background: transparent;
        }

        .afr-section::after {
          content: none;
        }

        .afr-bg-glow {
          position: absolute;
          inset: 20% 42% -10% -8%;
          z-index: 0;
          pointer-events: none;
          background:
            radial-gradient(ellipse at 20% 64%, rgba(36, 43, 95, 0.92), rgba(36, 43, 95, 0.42) 30%, rgba(0, 0, 0, 0) 70%),
            linear-gradient(100deg, rgba(36, 43, 95, 0.42), rgba(0, 0, 0, 0) 64%);
          filter: blur(20px);
          opacity: 0.9;
          -webkit-mask-image: linear-gradient(180deg, transparent 0%, #000 16%, #000 80%, transparent 100%);
          mask-image: linear-gradient(180deg, transparent 0%, #000 16%, #000 80%, transparent 100%);
        }

        .isr-intro strong {
          font-weight: 700;
          color: #E3E41B;
        }

        .afr-intro {
          max-width: 980px;
        }

        .afr-grid {
          margin-top: 34px;
          max-width: 1040px;
          display: grid;
          grid-template-columns: minmax(0, 1fr);
          border: 1px solid rgba(255,255,255,0.13);
          border-radius: 8px;
          overflow: hidden;
          background:
            linear-gradient(90deg, rgba(36, 43, 95, 0.24), rgba(255,255,255,0.012) 42%, rgba(0, 0, 0, 0.32)),
            rgba(0, 0, 0, 0.54);
          backdrop-filter: blur(4px);
        }

        .afr-cell {
          padding: 18px 18px 20px;
          border-top: 1px solid rgba(255,255,255,0.12);
        }

        .afr-cell:first-child {
          border-top: 0;
        }

        .afr-cat {
          font-family: "Research Plus Jakarta", "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.5);
        }

        .afr-title {
          margin-top: 14px;
          font-family: "Research Plus Jakarta", "Plus Jakarta Sans", Arial, sans-serif;
          font-size: clamp(12px, 0.92vw, 15px);
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: 0.01em;
          text-transform: uppercase;
          color: #FFFFFF;
        }

        .afr-title .y {
          color: var(--afr-lime);
        }

        .afr-body {
          margin-top: 10px;
          font-family: "Research Plus Jakarta", "Plus Jakarta Sans", Arial, sans-serif;
          font-size: clamp(10px, 0.72vw, 12px);
          line-height: 1.5;
          font-weight: 400;
          color: rgba(255,255,255,0.6);
        }

        .afr-machines {
          position: relative;
          z-index: 2;
          margin: clamp(14px, 2.2vw, 28px) 0 0;
          width: 100%;
          padding: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          max-width: 1040px;
          overflow: visible;
          isolation: isolate;
        }

        .afr-machines::after {
          content: none;
        }

        .afr-machine {
          position: relative;
          z-index: 1;
          display: block;
          height: auto;
          object-fit: contain;
          opacity: 0.94;
          mix-blend-mode: screen;
          filter:
            grayscale(1)
            brightness(1.12)
            contrast(1.08)
            drop-shadow(0 18px 40px rgba(0, 0, 0, 0.58));
        }

        .afr-printer {
          width: min(78%, 300px);
          filter:
            grayscale(1)
            brightness(1.14)
            contrast(1.08)
            drop-shadow(0 18px 40px rgba(0, 0, 0, 0.58))
            drop-shadow(0 0 12px rgba(255, 255, 255, 0.08));
        }

        .afr-cnc {
          width: min(92%, 360px);
          filter:
            grayscale(1)
            brightness(1.1)
            contrast(1.08)
            drop-shadow(0 18px 40px rgba(0, 0, 0, 0.58));
        }

        @media (min-width: 800px) {
          .afr-grid {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }

          .afr-cell {
            border-top: 0;
            border-left: 1px solid rgba(255,255,255,0.12);
          }

          .afr-cell:first-child {
            border-left: 0;
          }

          .afr-machines {
            display: block;
            height: clamp(350px, 31vw, 500px);
            margin-top: clamp(0px, 1vw, 12px);
          }

          .afr-printer {
            position: absolute;
            right: clamp(0px, 2.8vw, 44px);
            top: clamp(-34px, -1.8vw, -14px);
            width: clamp(250px, 28vw, 430px);
          }

          .afr-cnc {
            position: absolute;
            left: clamp(44px, 8vw, 120px);
            top: clamp(-42px, -2.2vw, -18px);
            width: clamp(300px, 37vw, 540px);
          }
        }

        /* ── // 04 — Networked Swarm Autonomy ──────────────────── */

        .swm-section {
          padding-bottom: clamp(34px, 4vw, 64px) !important;
          background: transparent;
        }

        .swm-bg-glow::before,
        .swm-bg-glow::after {
          content: none;
        }

        .swm-intro {
          max-width: 880px;
        }

        .swm-intro strong {
          font-weight: 700;
          color: #FFFFFF;
        }

        .swm-intro .swm-arc-os-o {
          color: #E3E41B;
          font-family: "Yapari Trial", "Research Yapari", "Azonix", sans-serif;
          font-style: normal;
          font-weight: 700;
        }

        .swm-box {
          position: relative;
          margin-top: clamp(28px, 3vw, 44px);
          max-width: 1040px;
          padding: clamp(26px, 3vw, 44px) clamp(24px, 3vw, 48px) clamp(28px, 3vw, 44px);
          border-radius: clamp(18px, 1.8vw, 28px);
          border: 1px solid rgba(255,255,255,0.12);
          background:
            linear-gradient(150deg, rgba(255,255,255,0.045), rgba(255,255,255,0.008) 46%, rgba(0,0,0,0.2)),
            rgba(4, 6, 11, 0.62);
          backdrop-filter: blur(4px);
        }

        .swm-box-tagline {
          margin: 0;
          max-width: 920px;
          font-family: "Research Yapari", "Yapari Trial", "Azonix", sans-serif;
          font-size: clamp(20px, 2.5vw, 40px);
          line-height: 1.04;
          font-weight: 700;
          letter-spacing: 0;
          text-transform: uppercase;
          color: #FFFFFF;
        }

        .swm-box-tagline .y {
          color: #E3E41B;
        }

        .swm-box-body {
          margin: clamp(18px, 2vw, 26px) 0 0;
          max-width: 920px;
          font-family: "Research Plus Jakarta", "Plus Jakarta Sans", Arial, sans-serif;
          font-size: clamp(11px, 0.82vw, 14px);
          line-height: 1.6;
          font-weight: 400;
          color: rgba(255,255,255,0.74);
        }

        .swm-box-body strong {
          font-weight: 700;
          color: #E3E41B;
        }

        .swm-compare {
          display: grid;
          grid-template-columns: minmax(0, 1fr);
          gap: clamp(28px, 4vw, 0px);
          margin-top: clamp(40px, 5vw, 72px);
          max-width: 1040px;
        }

        .swm-col {
          position: relative;
          padding: 0 clamp(0px, 2.4vw, 38px);
        }

        .swm-col:first-child {
          padding-left: 0;
        }

        .swm-col-head {
          margin: 0;
          font-family: "Research Plus Jakarta", "Plus Jakarta Sans", Arial, sans-serif;
          font-size: clamp(10px, 0.74vw, 12px);
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.62);
        }

        .swm-col--megha .swm-col-head {
          color: #E3E41B;
        }

        .swm-col-rule {
          margin-top: 12px;
          height: 1px;
          width: clamp(120px, 16vw, 220px);
          background: linear-gradient(90deg, rgba(255,255,255,0.36), rgba(255,255,255,0));
        }

        .swm-col--megha .swm-col-rule {
          background: linear-gradient(90deg, rgba(227, 228, 27, 0.6), rgba(227, 228, 27, 0));
        }

        .swm-list {
          margin: clamp(20px, 2.4vw, 32px) 0 0;
          padding: 0;
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: clamp(14px, 1.6vw, 22px);
        }

        .swm-list li {
          position: relative;
          padding-left: 22px;
          font-family: "Research Plus Jakarta", "Plus Jakarta Sans", Arial, sans-serif;
          font-size: clamp(13px, 1.02vw, 17px);
          line-height: 1.3;
          font-weight: 400;
          color: rgba(255,255,255,0.86);
        }

        .swm-list li::before {
          content: "";
          position: absolute;
          left: 2px;
          top: 0.5em;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: rgba(255,255,255,0.55);
        }

        .swm-col--megha .swm-list li::before {
          background: #E3E41B;
        }

        .swm-future {
          margin: clamp(64px, 7vw, 110px) auto 0;
          display: flex;
          width: min(100%, 1622px);
          min-height: clamp(112px, 7.4vw, 151px);
          flex-direction: column;
          justify-content: center;
          max-width: 1622px;
          font-family: "Plus Jakarta Sans", "Research Plus Jakarta", Arial, sans-serif;
          font-size: clamp(44px, 4.68vw, 96px);
          line-height: 0.98;
          font-weight: 300;
          letter-spacing: 0;
          text-align: center;
          color: #FFFFFF;
        }

        .swm-future .y {
          color: #E3E41B;
          font-family: "Plus Jakarta Sans", "Research Plus Jakarta", Arial, sans-serif;
          font-size: inherit;
          font-weight: 600;
          line-height: inherit;
        }

        .swm-future-line {
          display: block;
          white-space: nowrap;
        }

        .swm-future-rule {
          display: block;
          position: relative;
          z-index: 4;
          width: clamp(300px, 31vw, 620px);
          height: 1px;
          margin-top: -2px;
          margin-left: calc(-1 * var(--isr-content-shift));
          background:
            linear-gradient(90deg, rgba(255,255,255,0.58), rgba(255,255,255,0.34) 58%, rgba(255,255,255,0)),
            linear-gradient(
              90deg,
              transparent 0%,
              rgba(255,255,210,0.08) 16%,
              rgba(255,255,180,0.38) 34%,
              rgba(255,255,255,1) 50%,
              rgba(255,255,180,0.38) 66%,
              rgba(255,255,210,0.08) 84%,
              transparent 100%
            );
          background-repeat: no-repeat;
          background-size: 100% 100%, 44% 100%;
          background-position: 0 0, -48% 0;
          box-shadow: 0 0 4px rgba(255,255,255,0.16);
          will-change: background-position;
          animation: swmFutureRuleRunX 7.2s linear infinite;
        }

        @keyframes swmFutureRuleRunX {
          0% {
            background-position: 0 0, -48% 0;
          }

          92% {
            background-position: 0 0, 148% 0;
          }

          100% {
            background-position: 0 0, 148% 0;
          }
        }

        .swm-closing {
          display: flex;
          width: min(100%, 1510px);
          min-height: clamp(210px, 20vw, 354px);
          flex-direction: column;
          justify-content: center;
          margin: clamp(14px, 1.4vw, 24px) auto 0;
          font-family: "Plus Jakarta Sans", "Research Plus Jakarta", Arial, sans-serif;
          font-size: clamp(14px, 1.18vw, 20px);
          line-height: 1.08;
          font-weight: 300;
          color: #FFFFFF;
          text-align: center;
        }

        .swm-closing strong {
          font-weight: 700;
          color: #E3E41B;
          font-size: clamp(15px, 1.32vw, 22px);
          line-height: 1;
        }

        .swm-closing-line {
          display: block;
        }

        .swm-closing-line + .swm-closing-line {
          margin-top: clamp(16px, 1.8vw, 26px);
        }

        .swm-hashtag {
          margin: clamp(40px, 5vw, 80px) 0 0;
          text-align: center;
          font-family: "Research Plus Jakarta", "Plus Jakarta Sans", Arial, sans-serif;
          font-size: clamp(11px, 0.9vw, 15px);
          font-weight: 400;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.42);
        }

        @media (min-width: 800px) {
          .swm-compare {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 0;
          }

          .swm-col--megha {
            border-left: 1px solid rgba(255,255,255,0.16);
          }
        }

        @media (max-width: 767px) {
          .swm-future {
            font-size: clamp(32px, 10vw, 46px);
            line-height: 1;
          }

          .swm-future-line {
            white-space: normal;
          }

          .swm-future-rule {
            width: clamp(180px, 62vw, 320px);
          }
        }
      `}</style>

      <div className="atmosphere-stage mobility-stage">
        <div className="atmosphere-stage__lighting" aria-hidden="true">
          <span className="megha-light-blob mobility-gold" />
          <span className="megha-light-blob mobility-blue" />
        </div>

      <section
        id="capabilities-isr"
        className="isr-section capabilities-section relative z-10 mx-auto w-full max-w-[1500px] px-7 pt-20 pb-32 sm:px-14 sm:pt-24 lg:px-[clamp(4.5rem,5.96vw,6.4375rem)]"
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
            <br />
            <span className="isr-accent">Intelligent</span>, Persistent
            <br />
            Eyes on the Battlefield
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
                <div className="isr-card-head">
                  <span className="isr-card-num">{cap.id}</span>
                  <h3 className="isr-card-title">{cap.title}</h3>
                </div>
                <p className="isr-card-body">{cap.body}</p>
              </article>
            ))}
          </div>

          <p className="isr-tagline">
            <span className="y">See</span> first.{" "}
            <span className="y">Decide</span> first.{" "}
            <span className="y">Act</span> first.
          </p>

          <p className="isr-outro">
            An ISR patrol that detects the threat before the enemy is aware of
            you is worth more than any weapon fired blind — turning raw
            airspace into{" "}
            <strong>persistent, AI-enhanced awareness</strong> while soldiers
            stay out of the kill zone.
          </p>
        </div>
      </section>

      <section
        id="the-airframe"
        className="isr-section afr-section relative z-10 mx-auto w-full max-w-[1500px] px-7 pt-20 pb-32 sm:px-14 sm:pt-24 lg:px-[clamp(4.5rem,5.96vw,6.4375rem)]"
      >
        <div className="afr-bg-glow" aria-hidden="true" />

        <div className="isr-inner">
          <p className="isr-kicker">// 05 — The Airframe</p>

          <h2 className="isr-title">
            <span className="isr-accent">Stealth</span> Through Advanced
            Composites &amp; Rapid{" "}
            <span className="isr-accent">3D-Printed</span> Deployment
          </h2>

          <p className="isr-intro afr-intro">
            MEGHA airframes are built from{" "}
            <strong>
              advanced engineering-grade thermoplastics, carbon fibre and
              reinforced composites
            </strong>
            , manufactured through additive 3D printing. This is not a cost
            compromise — it is a tactical advantage. Composite structures
            reduce radar signature, keep the airframe light for extended
            endurance, and remain rugged enough for sustained frontline
            conditions. The result is a man-portable system that is hard to
            detect, cheap to field, and fast to replace.
          </p>

          <div className="afr-grid">
            {airframeFeatures.map((feature) => (
              <div className="afr-cell" key={feature.cat}>
                <p className="afr-cat">{feature.cat}</p>
                <h3 className="afr-title">
                  <span className="y">{feature.lead}</span> {feature.rest}
                </h3>
                <p className="afr-body">{feature.body}</p>
              </div>
            ))}
          </div>

          <div className="afr-machines">
            <img
              className="afr-machine afr-cnc"
              src={cncIllustration}
              alt="CNC milling machine blueprint illustration"
              draggable="false"
            />
            <img
              className="afr-machine afr-printer"
              src={printerBlueprint}
              alt="3D-printer blueprint — MEGHA airframes are additively manufactured"
              draggable="false"
            />
          </div>
        </div>
      </section>

      </div>

      <div className="atmosphere-stage network-stage">
        <div className="atmosphere-stage__lighting" aria-hidden="true">
          <span className="megha-light-blob network-blue" />
          <span className="megha-stage-bottom-fade" />
        </div>

      <section
        id="swarm-autonomy"
        className="isr-section swm-section relative z-10 mx-auto w-full max-w-[1500px] px-7 pt-20 pb-32 sm:px-14 sm:pt-24 lg:px-[clamp(4.5rem,5.96vw,6.4375rem)]"
      >
        <div className="swm-bg-glow" aria-hidden="true" />

        <div className="isr-inner">
          <p className="isr-kicker">// 04 — Capabilities &amp; ISR</p>

          <h2 className="isr-title">
            Networked <span className="isr-accent">Swarm Autonomy</span>,
            Resilient to Electronic Warfare
          </h2>

          <p className="isr-intro swm-intro">
            A single MEGHA is powerful. The real weapon is the swarm.{" "}
            <strong>
              Through ARC <span className="swm-arc-os-o">O</span>S — ABSOL X's
            </strong>{" "}
            agentic
            command-and-control platform — one commander dictates the strategic
            intent, the "what" and the "why," while thousands of distributed
            MEGHA agents intelligently determine the "how." And on every modern
            battlefield the radio link is the first thing the enemy attacks.
            MEGHA bypasses Electronic Warfare entirely: the moment the link is
            severed, the onboard AI promotes itself to operator and executes the
            commander's intent independently.
          </p>

          <div className="swm-box">
            <h3 className="swm-box-tagline">
              <span className="y">One</span> commander.{" "}
              <span className="y">One</span> hand. Thousands of intelligent UAVs
              acting as a single coordinated swarm.
            </h3>

            <p className="swm-box-body">
              If localized jamming degrades part of the swarm, the surviving
              MEGHA assets automatically re-route their mesh communications,
              redistribute tactical roles, and continue the mission. The swarm{" "}
              <strong>degrades gracefully rather than collapsing</strong> — each
              AI agent acting as a localized battlefield commander.
            </p>
          </div>

          <div className="swm-compare">
            <div className="swm-col swm-col--old">
              <p className="swm-col-head">
                // Old Way — Dependent on a Distant Brain
              </p>
              <div className="swm-col-rule" />
              <ul className="swm-list">
                {swarmOldWay.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="swm-col swm-col--megha">
              <p className="swm-col-head">// MEGHA — Edge-Autonomous Agent</p>
              <div className="swm-col-rule" />
              <ul className="swm-list">
                {swarmMeghaWay.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <p className="swm-future">
            <span className="swm-future-line">
              The <span className="y">Future</span> of Power Belongs to
            </span>
            <span className="swm-future-line">
              Cheap, Numerous, <span className="y">Intelligent</span> Mass
            </span>
          </p>
          <span className="swm-future-rule" aria-hidden="true" />

          <p className="swm-closing">
            <span className="swm-closing-line">
              MEGHA is cheap enough to lose, numerous enough to saturate,
              precise enough to spare civilians, and driven by agentic AI that
              bypasses Electronic Warfare by replacing the human operator at
              the edge. It solves the cost problem, the precision problem, the
              human-error problem, the speed problem, the manufacturing
              problem, and the survivability problem — all at once.
            </span>
            <span className="swm-closing-line">
              That is why we need MEGHA. Not as one more drone, but as a
              sovereign capability:{" "}
              <strong>
                3D-printed, edge-intelligent, swarm-commanded aerial mass
              </strong>{" "}
              that keeps our people out of the kill zone while striking with
              decisive force. This is attritable autonomy — and it is the new
              era of warfare.
            </span>
          </p>
        </div>
      </section>

      </div>
    </>
  );
}
