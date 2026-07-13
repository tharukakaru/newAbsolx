import { useRef } from "react";
import AnimatedLine from "../Utils/AnimatedLine";
import useTextShuffle from "../Utils/useTextShuffle";
import plusJakartaSans from "../assets/fonts/PlusJakartaSans[wght].ttf";
import handsImage from "../assets/yertg 2.png";
import swarmFigure from "../assets/gfjhjhjhjlhugh 1.webp";
import fenrirCounterUasVideo from "../assets/Fenrir 002 Counter-UAS 16x9 (1).mp4";
import terrainMesh from "../assets/09f8626770d522bace35bbcf8ca7d0ff4eb5528d.webp";
import terrainDots from "../assets/2072e0a6f65bd90c64aec41f97bcfecf866d0c47.gif";

const hyenaCards = [
  {
    code: "P-01",
    cat: "COST",
    title: (
      <>
        <span className="hy-y">TARGET</span> LOCK
      </>
    ),
    body: "Vision detection and tracking with re-identification — holds a target through occlusion and manoeuvre..",
  },
  {
    code: "P-02",
    cat: "PRECISION",
    title: (
      <>
        GPS-<span className="hy-y">DENIED</span> NAVIGATION
      </>
    ),
    body: "Visual-inertial odometry and landmark matching keep the platform navigating when GNSS is jammed..",
  },
  {
    code: "P-03",
    cat: "HUMAN ERROR",
    title: (
      <>
        <span className="hy-y">SWARM</span> TEAMING
      </>
    ),
    body: "Multi-agent formation flight, distributed ISR coverage, and consensus-based task allocation across the clan.",
  },
  {
    code: "P-04",
    cat: "CIVILIAN SAFETY",
    title: (
      <>
        <span className="hy-y">ACOUSTIC</span> TARGET
      </>
    ),
    body: "360° acoustic cueing fused with vision into one track — the clan does not go blind when one sense drops.",
  },
  {
    code: "P-05",
    cat: "SPEED",
    title: (
      <>
        <span className="hy-y">SAFETY</span> ENVELOPE
      </>
    ),
    body: "Hard bounds and failsafe-to-safe behaviour that no autonomous decision can override.",
  },
  {
    code: "P-06",
    cat: "SUPPLY",
    title: (
      <>
        <span className="hy-y">CHAT</span> WITH MEGHA
      </>
    ),
    body: "Natural-language command and reporting — the clan accepts intent and reports back in plain language.",
  },
];

const sentinelTiers = [
  {
    code: "TIER 01",
    cat: "SENSING",
    title: "LOW-COST NODE NETWORK",
    body: "A mesh of affordable radar nodes (SDR / FMCW / AI sensing) deployable in quantity, complemented by RF, EO/IR and acoustic — resilient where legacy radar is too costly against mass drones.",
  },
  {
    code: "TIER 02",
    cat: "FUSION",
    title: "ONE TRUSTWORTHY PICTURE",
    body: "Many nodes become one air picture: each track carries classification, threat score, and confidence — drone-vs-clutter sorted automatically, surviving the loss of any node.",
  },
  {
    code: "TIER 03",
    cat: "INTERCEPTOR",
    title: "ANTI-UAV, UNDER COMMAND",
    body: "360° acoustic cueing fused with vision into one track — the clan does not go blind when one sense drops.",
  },
];

const c2Steps = [
  {
    num: "1",
    title: "SENSE",
    body: "Ingest every sensor across domains and external feeds",
  },
  {
    num: "2",
    title: "MAKE SENSE",
    body: "Fuse detections into one picture; classify; surface what matters.",
  },
  {
    num: "3",
    title: "DECIDE",
    body: "AI generates options; the operator selects and authorises.",
  },
  {
    num: "4",
    title: "ACT",
    body: "Task the assets; execute the authorised plan; re-plan.",
  },
  {
    num: "5",
    title: "ASSESS",
    body: "Confirm outcome, update the picture, log for review",
  },
];

const c2Capabilities = [
  {
    num: "1",
    title: "COMMON OPERATING PICTURE",
    body: "A mesh of affordable radar One fused entity/track picture from every sensor across every domain — the single source of truth..",
  },
  {
    num: "2",
    title: "OPEN INTEGRATION",
    body: '"Any sensor, best effector" — schema-driven onboarding brings new devices into the picture without bespoke work.',
  },
  {
    num: "3",
    title: "MESH & EDGE",
    body: "Distributed, resilient C2 that keeps deciding when links are denied — assets retain autonomy if the core is lost.",
  },
  {
    num: "4",
    title: "LEVELS OF AUTONOMY",
    body: "A mesh of affordable radar In-the-loop, on-the-loop, or supervised — selectable per action class, always bounded and overridable.",
  },
];

export default function ArsOs() {
  const arcTitleRef = useRef(null);
  const oTitleRef = useRef(null);
  const sTitleRef = useRef(null);

  useTextShuffle(arcTitleRef);
  useTextShuffle(oTitleRef);
  useTextShuffle(sTitleRef);

  return (
    <>
    <section className="ars-os-hero" aria-label="ARC OS">
      <style>{`
        .ars-os-hero {
          --ars-os-hero-scale: 1;
          position: relative;
          z-index: 5;
          width: 100%;
          height: clamp(340px, 31vw, 560px);
          min-height: 340px;
          overflow: hidden;
          background: transparent;
          isolation: isolate;
        }

        /* Soft #0d1427 navy atmosphere on both edges — depth, not glow.
           z-index 0 keeps it under the yellow line (1) and title (3). */
        .ars-os-hero::before,
        .ars-os-hero::after {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          width: clamp(260px, 34vw, 720px);
          z-index: 0;
          pointer-events: none;
        }

        .ars-os-hero::before {
          left: 0;
          background: radial-gradient(
            90% 70% at 0% 58%,
            rgba(13, 20, 39, 0.72) 0%,
            rgba(13, 20, 39, 0.34) 42%,
            rgba(13, 20, 39, 0.12) 68%,
            rgba(13, 20, 39, 0) 88%
          );
        }

        .ars-os-hero::after {
          right: 0;
          background: radial-gradient(
            90% 70% at 100% 58%,
            rgba(13, 20, 39, 0.72) 0%,
            rgba(13, 20, 39, 0.34) 42%,
            rgba(13, 20, 39, 0.12) 68%,
            rgba(13, 20, 39, 0) 88%
          );
        }

        .ars-os-hero-inner {
          position: absolute;
          inset: 0;
          z-index: 1;
          transform-origin: top center;
        }

        /* Home page line untouched — natural slope already matches h3 (right
           end high, left end low). No rotation: rotating steepened the drop
           and pushed the low-left branch below the hero's overflow: hidden
           edge, which is what "hid" the lower line. Position only: right end
           lands near the top-right corner just under the navbar, left end
           enters at the letters' level behind the title. */
        .ars-os-lines {
          position: absolute;
          left: 0;
          right: 0;
          width: auto;
          top: clamp(-42px, -3vw, -18px);
          z-index: 1;
          pointer-events: none;
        }

        .ars-os-title {
          position: absolute;
          left: 53%;
          bottom: clamp(8px, 1.2vh, 18px);
          z-index: 3;
          margin: 0;
          display: flex;
          align-items: baseline;
          justify-content: center;
          gap: clamp(24px, 5.6vw, 84px);
          transform: translateX(-50%);
          font-family: "Yapari Trial", "Yapari Trial Regular", "Azonix", sans-serif;
          font-size: clamp(50px, 10.45vw, 146px);
          font-style: normal;
          font-weight: 700;
          line-height: 0.86;
          letter-spacing: clamp(1px, 0.32vw, 4px);
          text-transform: uppercase;
          white-space: nowrap;
          overflow: visible;
        }

        .ars-os-arc {
          background-image:
            radial-gradient(130% 155% at 5% 92%, rgba(0, 0, 0, 0.08) 0 13%, rgba(0, 0, 0, 0.02) 33%, rgba(0, 0, 0, 0) 60%),
            linear-gradient(104deg, #6b6b6b 0%, #808080 25%, #a9a9a9 48%, #d8d8d8 72%, #ffffff 93%);
          background-blend-mode: multiply, normal;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
          -webkit-text-stroke: 0.4px rgba(255, 255, 255, 0.06);
          filter: drop-shadow(0 0 1px rgba(255, 255, 255, 0.1));
        }

        .ars-os-shuffle {
          display: inline-block;
          min-width: max-content;
          text-align: center;
          white-space: nowrap;
        }

        .ars-os-shuffle::before {
          content: attr(data-target);
          display: block;
          height: 0;
          overflow: hidden;
          visibility: hidden;
        }

        .ars-os-shuffle .ltr {
          display: inline-block;
        }

        .ars-os-shuffle.is-number-mode .ltr {
          font-size: 0.5em;
          letter-spacing: 0.02em;
        }

        .ars-os-o {
          color: #f4ed15;
          text-shadow: 0 0 18px rgba(244, 237, 21, 0.12);
        }

        .ars-os-s {
          color: #ffffff;
        }

        .ars-os-os {
          display: inline-flex;
          align-items: baseline;
          line-height: inherit;
        }

        @media (min-width: 1024px) {
          .ars-os-hero {
            --ars-os-hero-scale: 0.72;
            height: clamp(250px, 30vw, 410px);
            min-height: 250px;
          }

          .ars-os-hero-inner {
            inset: auto;
            top: 0;
            left: 50%;
            width: calc(100% / var(--ars-os-hero-scale));
            height: calc(100% / var(--ars-os-hero-scale));
            transform: translateX(-50%) scale(var(--ars-os-hero-scale));
          }

          .ars-os-title {
            left: 40.5%;
            bottom: clamp(80px, 5.0vh, 95px);
            gap: clamp(42px, 8.6vw, 112px);
            font-size: clamp(85px, 17.9vw, 198px);
            letter-spacing: clamp(1.5px, 0.48vw, 4.8px);
          }

          .ars-os-lines {
            width: 100%;
            left: 0;
            /* Inner space is 1/0.72 scale — band top tracks the hero so the
               right end stays just under the navbar at every width. */
            top: clamp(-82px, calc(-10px - 2.6vw), -26px);
          }

          .ars-os-lines > div {
            --hero-line-scale: 0.9;
            top: 20px !important;
            width: calc(100vw / var(--ars-os-hero-scale) / var(--hero-line-scale)) !important;
            translate: -50% 18px !important;
          }
        }

        @media (min-width: 1536px) {
          .ars-os-lines > div {
            --hero-line-scale: 0.92;
          }
        }

        @media (max-width: 760px) {
          .ars-os-hero {
            height: clamp(245px, 58vw, 360px);
            min-height: 245px;
          }

          .ars-os-title {
            bottom: clamp(24px, 6vh, 42px);
            left: 50%;
            max-width: calc(100vw - 24px);
            gap: clamp(12px, 4vw, 30px);
            font-size: clamp(39px, 13.4vw, 76px);
            line-height: 0.88;
            letter-spacing: clamp(0.8px, 0.45vw, 2px);
          }

          .ars-os-lines {
            top: clamp(8px, 5vw, 28px);
          }
        }

        @media (max-width: 420px) {
          .ars-os-title {
            gap: clamp(8px, 2.5vw, 12px);
            font-size: clamp(34px, 10.7vw, 45px);
          }
        }

      `}</style>

      <div className="ars-os-hero-inner">
        <div className="ars-os-lines" aria-hidden="true">
          <AnimatedLine />
        </div>

        <h1 className="ars-os-title">
          <span
            ref={arcTitleRef}
            className="ars-os-arc ars-os-shuffle"
            data-initial="011803"
            data-target="ARC"
          >
            ARC
          </span>
          <span className="ars-os-os">
            <span
              ref={oTitleRef}
              className="ars-os-o ars-os-shuffle"
              data-initial="15"
              data-target="O"
            >
              O
            </span>
            <span
              ref={sTitleRef}
              className="ars-os-s ars-os-shuffle"
              data-initial="19"
              data-target="S"
            >
              S
            </span>
          </span>
        </h1>
      </div>
    </section>

    <section className="ars-os-intro" aria-label="ARC OS overview">
      <style>{`
        @font-face {
          font-family: "Plus Jakarta Sans";
          src: url(${plusJakartaSans}) format("truetype");
          font-weight: 200 800;
          font-style: normal;
          font-display: swap;
        }

        .ars-os-intro {
          position: relative;
          width: 100%;
          margin-top: clamp(-18px, -2vw, -6px);
          z-index: 1;
          background: #000;
          overflow: visible;
          isolation: isolate;
        }

        /* Subtle dark-navy (#0c1426) edge tint on the left and right sides —
           a quiet ambient, not a bright glow. */
        .ars-os-intro::before,
        .ars-os-intro::after {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          width: clamp(200px, 30vw, 620px);
          z-index: 2;
          pointer-events: none;
          mix-blend-mode: screen;
        }

        .ars-os-intro::before {
          left: 0;
          background: radial-gradient(
            90% 64% at 0% 56%,
            rgba(12, 20, 38, 0.62) 0%,
            rgba(12, 20, 38, 0.3) 44%,
            rgba(12, 20, 38, 0.12) 70%,
            rgba(12, 20, 38, 0) 88%
          );
        }

        .ars-os-intro::after {
          right: 0;
          background: radial-gradient(
            90% 64% at 100% 56%,
            rgba(12, 20, 38, 0.62) 0%,
            rgba(12, 20, 38, 0.3) 44%,
            rgba(12, 20, 38, 0.12) 70%,
            rgba(12, 20, 38, 0) 88%
          );
        }

        /* Robotic hands — screen blend drops the black background out
           seamlessly against the section's black. */
        .ars-os-intro-img {
          position: relative;
          z-index: 0;
          display: block;
          width: min(1726px, 100%);
          margin: clamp(-132px, -20vw, -92px) auto 0;
          aspect-ratio: 57 / 32;
          object-fit: cover;
          object-position: center top;
          mix-blend-mode: screen;
          user-select: none;
          pointer-events: none;
          /* Fade the lower edge so the image's own dark tone doesn't print
             a hard rectangle seam against the HYENA section below. */
          -webkit-mask-image: linear-gradient(180deg, transparent 0%, #000 10%, #000 84%, transparent 100%);
          mask-image: linear-gradient(180deg, transparent 0%, #000 10%, #000 84%, transparent 100%);
        }

        /* Description copy overlaid on the upper-left area. */
        .ars-os-intro-copy {
          position: absolute;
          top: clamp(26px, 4.4vw, 86px);
          left: clamp(46px, 9vw, 168px);
          right: clamp(24px, 6vw, 120px);
          z-index: 3;
          max-width: min(1536px, 82%);
          margin: 0;
          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-weight: 300;
          font-size: clamp(15px, 1.66vw, 32px);
          line-height: 1.16;
          color: #ffffff;
          text-shadow: 0 2px 14px rgba(0, 0, 0, 0.55);
        }

        .ars-os-hl {
          color: #e3e41b;
          font-weight: 600;
          font-size: clamp(17px, 1.87vw, 36px);
          line-height: 1.16;
        }

        /* White vertical guide line down the left edge. Starts here and must
           continue seamlessly into the sections below — no fade at the bottom. */
        .ars-os-vline {
          position: absolute;
          left: clamp(22px, 4.1vw, 70px);
          top: clamp(140px, 12vw, 260px);
          bottom: 0;
          width: 1px;
          z-index: 1;
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.55) 7%,
            rgba(255, 255, 255, 0.5) 100%
          );
        }

        @media (max-width: 760px) {
          .ars-os-intro {
            min-height: clamp(430px, 112vw, 560px);
            padding: clamp(22px, 6vw, 34px) 0 clamp(190px, 52vw, 280px);
          }

          .ars-os-intro::before {
            width: 100%;
            background: linear-gradient(
              90deg,
              rgba(0, 0, 0, 0.98) 0%,
              rgba(0, 0, 0, 0.92) 54%,
              rgba(0, 0, 0, 0.62) 76%,
              rgba(0, 0, 0, 0) 100%
            );
          }

          .ars-os-intro::after {
            width: 62%;
            opacity: 0.7;
          }

          .ars-os-intro-img {
            position: absolute;
            left: 50%;
            bottom: 0;
            width: min(760px, 138vw);
            max-width: none;
            margin: 0;
            transform: translateX(-50%);
            object-fit: contain;
            object-position: center bottom;
            opacity: 0.82;
            -webkit-mask-image: linear-gradient(180deg, transparent 0%, #000 12%, #000 76%, transparent 100%);
            mask-image: linear-gradient(180deg, transparent 0%, #000 12%, #000 76%, transparent 100%);
          }

          .ars-os-intro-copy {
            position: relative;
            top: auto;
            left: auto;
            right: auto;
            width: min(38ch, calc(100% - clamp(70px, 20vw, 98px)));
            max-width: none;
            margin: 0 clamp(16px, 5vw, 28px) 0 clamp(42px, 11vw, 58px);
            font-size: clamp(13.5px, 3.85vw, 18px);
            line-height: 1.18;
            text-shadow:
              0 2px 16px rgba(0, 0, 0, 0.96),
              0 0 30px rgba(0, 0, 0, 0.9);
          }

          .ars-os-hl {
            font-size: clamp(14px, 4.15vw, 19px);
            line-height: 1.14;
          }

          .ars-os-vline {
            left: clamp(24px, 7vw, 34px);
            top: clamp(8px, 1.6vw, 24px);
          }
        }

        @media (max-width: 420px) {
          .ars-os-intro-copy {
            width: min(31ch, calc(100% - 92px));
            font-size: clamp(13px, 3.65vw, 15.5px);
            margin-left: clamp(42px, 12vw, 50px);
            margin-right: 14px;
          }

          .ars-os-hl {
            font-size: clamp(13.5px, 3.85vw, 16.5px);
          }
        }
      `}</style>

      <span className="ars-os-vline" aria-hidden="true" />

      <img
        className="ars-os-intro-img"
        src={handsImage}
        alt=""
        aria-hidden="true"
      />

      
    </section>

    <section id="hyena" className="hyena" aria-label="HYENA — Subsystem 01">
      <style>{`
        .hyena {
          position: relative;
          width: 100%;
          /* Ambient edge tints to match the reference: warm olive (#51451f)
             at the lower-left near the dial, and a broad navy (#252c62) glow
             down the right side that brightens toward the edge. */
          background:
            radial-gradient(42% 48% at 4% 92%, rgba(81, 69, 31, 0.32), rgba(0, 0, 0, 0) 62%),
            radial-gradient(62% 88% at 100% 54%, rgba(37, 44, 98, 0.9), rgba(37, 44, 98, 0.32) 40%, rgba(0, 0, 0, 0) 78%),
            #000;
          overflow: hidden;
          isolation: isolate;
          padding: clamp(20px, 2.4vw, 42px) 0 clamp(38px, 5.2vw, 96px);
          font-family: "Plus Jakarta Sans", Arial, sans-serif;
        }

        /* Continuation of the page-long guide line — solid so it joins the
           intro above and SENTINEL below without a visible break. */
        .hyena-vline {
          position: absolute;
          left: clamp(22px, 4.1vw, 70px);
          top: 0;
          bottom: 0;
          width: 1px;
          z-index: 2;
          background: rgba(255, 255, 255, 0.5);
        }

        .hyena-inner {
          position: relative;
          z-index: 3;
          max-width: min(1180px, 82vw);
          margin-left: clamp(48px, 7.1vw, 150px);
          margin-right: clamp(44px, 6vw, 120px);
        }

        .hyena-head {
          display: flex;
          align-items: center;
          gap: clamp(8px, 1vw, 15px);
          white-space: nowrap;
        }

        .hyena-rule {
          flex: 0 0 auto;
          width: clamp(92px, 13.2vw, 128px);
          height: 1px;
          margin-left: clamp(-24px, -3vw, -10px);
          margin-top: 0.02em;
          background: linear-gradient(90deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.55));
        }

        .hyena-title {
          margin: 0;
          font-family: "Yapari Trial Regular", "Yapari Trial", "Azonix", sans-serif;
          font-size: clamp(38px, 5.4vw, 82px);
          font-weight: 400;
          line-height: 1;
          letter-spacing: clamp(2px, 0.42vw, 6px);
          color: #ffffff;
          text-transform: uppercase;
        }

        .hy-e {
          color: #e3e41b;
        }

        .hyena-meta {
          margin-top: 0.22em;
          margin-bottom: 0;
          font-family: "Fira Code", "SourceCodePro", ui-monospace, monospace;
          font-size: clamp(6px, 0.66vw, 10px);
          font-weight: 400;
          letter-spacing: 0.08em;
          color: rgba(255, 255, 255, 0.55);
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .hyena-meta-sub {
          color: #5b8fd6;
        }

        .hyena-desc {
          max-width: min(980px, 92%);
          margin: clamp(24px, 2.8vw, 42px) 0 clamp(58px, 7vw, 96px);
          font-weight: 300;
          font-size: clamp(14px, 1.32vw, 22px);
          line-height: 1.05;
          color: rgba(255, 255, 255, 0.92);
        }

        .hyena-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          margin-left: clamp(44px, 6.1vw, 78px);
          max-width: min(980px, calc(100% - clamp(104px, 16vw, 180px)));
          background: transparent;
        }

        .hyena-card {
          background: #000;
          min-height: clamp(166px, 18.2vw, 290px);
          padding: clamp(10px, 1.25vw, 22px) clamp(13px, 1.6vw, 30px) clamp(14px, 1.7vw, 32px);
          border-right: 1px solid rgba(255, 255, 255, 0.22);
        }

        .hyena-card:nth-child(3n) {
          border-right: 0;
        }

        .hyena-card:nth-child(-n + 3) {
          border-bottom: 1px solid rgba(255, 255, 255, 0.26);
        }

        .hyena-card-label {
          font-family: "Fira Code", "SourceCodePro", ui-monospace, monospace;
          font-size: clamp(8px, 0.82vw, 13px);
          font-weight: 300;
          line-height: 1.6;
          letter-spacing: 0.04em;
          margin-bottom: clamp(16px, 2vw, 32px);
        }

        .hyena-card-code {
          color: #ffffff;
        }

        .hyena-card-cat {
          color: rgba(255, 255, 255, 0.5);
        }

        .hyena-card-title {
          margin: 0 0 clamp(12px, 1.45vw, 22px);
          font-size: clamp(14px, 1.36vw, 24px);
          font-weight: 600;
          line-height: 1.04;
          letter-spacing: 0.2px;
          text-transform: uppercase;
          color: #ffffff;
        }

        .hy-y {
          color: #e3e41b;
        }

        .hyena-card-body {
          margin: 0;
          max-width: 24ch;
          font-weight: 300;
          font-size: clamp(13px, 1.08vw, 18px);
          line-height: 1.02;
          color: rgba(255, 255, 255, 0.82);
        }

        .hyena-edge-label {
          position: absolute;
          right: clamp(30px, 4.6vw, 78px);
          top: 50%;
          z-index: 2;
          transform: translateY(-50%) rotate(180deg);
          writing-mode: vertical-rl;
          font-weight: 600;
          font-size: clamp(22px, 3.1vw, 52px);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(178, 185, 222, 0.72);
          pointer-events: none;
          white-space: nowrap;
        }

        .hyena-first-label {
          position: absolute;
          left: clamp(2px, 0.55vw, 14px);
          bottom: clamp(18px, 4vw, 92px);
          z-index: 2;
          transform: rotate(180deg);
          writing-mode: vertical-rl;
          font-weight: 400;
          font-size: clamp(10px, 0.95vw, 16px);
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.4);
          pointer-events: none;
        }

        /* Drone-swarm / radar graphic below the cards. */
        .hyena-figure {
          position: relative;
          z-index: 1;
          width: min(1347px, 92%);
          margin: clamp(18px, 2.6vw, 56px) auto 0;
          aspect-ratio: 25 / 24;
          background: url(${swarmFigure}) 50% 50% / cover no-repeat;
          pointer-events: none;
        }

        @media (max-width: 760px) {
          .hyena {
            padding-top: clamp(22px, 6vw, 36px);
          }

          .hyena-inner {
            max-width: none;
            margin-left: clamp(44px, 11vw, 64px);
            margin-right: clamp(18px, 5vw, 34px);
          }

          .hyena-head {
            gap: clamp(8px, 2.5vw, 14px);
          }

          .hyena-rule {
            width: clamp(58px, 18vw, 92px);
            margin-left: 0;
          }

          .hyena-desc {
            max-width: 100%;
            margin-bottom: clamp(34px, 9vw, 58px);
            line-height: 1.18;
          }

          .hyena-grid {
            grid-template-columns: repeat(2, 1fr);
            margin-left: 0;
            max-width: 100%;
          }

          .hyena-card:nth-child(3n) {
            border-right: 1px solid rgba(255, 255, 255, 0.22);
          }

          .hyena-card:nth-child(2n) {
            border-right: 0;
          }

          .hyena-card:nth-child(-n + 4) {
            border-bottom: 1px solid rgba(255, 255, 255, 0.26);
          }

          .hyena-card:nth-child(n + 5) {
            border-bottom: 0;
          }
        }

        @media (max-width: 560px) {
          .hyena-inner {
            margin-left: clamp(42px, 12vw, 58px);
            margin-right: clamp(16px, 5vw, 28px);
          }

          .hyena-title {
            font-size: clamp(34px, 12vw, 48px);
            letter-spacing: clamp(1px, 0.9vw, 3px);
          }

          .hyena-rule {
            width: clamp(42px, 15vw, 66px);
          }

          .hyena-grid {
            grid-template-columns: 1fr;
            margin-left: 0;
            max-width: 100%;
          }

          .hyena-card,
          .hyena-card:nth-child(2n),
          .hyena-card:nth-child(3n) {
            border-right: 0;
          }

          .hyena-card {
            border-bottom: 1px solid rgba(255, 255, 255, 0.26);
          }

          .hyena-card:last-child {
            border-bottom: 0;
          }

          .hyena-meta,
          .hyena-edge-label {
            display: none;
          }

          .hyena-vline {
            left: clamp(24px, 7vw, 34px);
          }
        }

        @media (max-width: 420px) {
          .hyena-head {
            gap: clamp(7px, 2vw, 10px);
          }

          .hyena-title {
            font-size: clamp(31px, 10.5vw, 42px);
            letter-spacing: clamp(0.5px, 0.55vw, 2px);
          }

          .hyena-rule {
            width: clamp(28px, 11vw, 48px);
          }
        }
      `}</style>

      <span className="hyena-vline" aria-hidden="true" />
      <span className="hyena-edge-label" aria-hidden="true">TEAMING AT THE EDGE</span>
      <span className="hyena-first-label" aria-hidden="true">SEE FIRST. DECIDE FIRST. ACT FIRST.</span>

      <div className="hyena-inner">
        <div className="hyena-head">
          <span className="hyena-rule" aria-hidden="true" />
          <h2 className="hyena-title">
            HY<span className="hy-e">E</span>NA
          </h2>
          <span className="hyena-meta">
            <span className="hyena-meta-sub">SUBSYSTEM 01</span> &nbsp;•&nbsp;
            AGENTIC AUTONOMOUS PILOT — FLIES AND FIGHTS &nbsp;•&nbsp; UAV | UGV |
            USV
          </span>
        </div>

        <p className="hyena-desc">
          Edge autonomy that flies and fights the mission, takeoff to landing,
          onboard — even when the datalink is jammed. HYENA sits above the
          flight controller and turns mission intent into a single, safe command
          stream. Named for the pack hunter: a clan of platforms that sense
          together, decide together, and hold a lock with persistence.
        </p>

        <div className="hyena-grid">
          {hyenaCards.map((card) => (
            <article className="hyena-card" key={card.code}>
              <div className="hyena-card-label">
                <span className="hyena-card-code">{card.code}</span>
                <span className="hyena-card-cat"> / {card.cat}</span>
              </div>
              <h3 className="hyena-card-title">{card.title}</h3>
              <p className="hyena-card-body">{card.body}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="hyena-figure" aria-hidden="true" />
    </section>

    <section id="sentinel" className="sentinel" aria-label="SENTINEL — Subsystem 02">
      <style>{`
        .sentinel {
          --sentinel-left-gutter: clamp(48px, 7.1vw, 150px);
          --sentinel-right-gutter: clamp(34px, 5vw, 96px);
          position: relative;
          width: 100%;
          /* Navy (#22285a) wash on the left, falling back to black on the
             right so the video reads like the reference frame. */
          background:
            radial-gradient(62% 96% at 0% 52%, rgba(34, 40, 90, 0.92), rgba(34, 40, 90, 0.34) 40%, rgba(0, 0, 0, 0) 80%),
            radial-gradient(48% 44% at 0% 100%, rgba(34, 40, 90, 0.72), rgba(34, 40, 90, 0.22) 42%, rgba(0, 0, 0, 0) 76%),
            #000;
          overflow: hidden;
          isolation: isolate;
          padding: clamp(26px, 3.4vw, 64px) 0 clamp(48px, 6vw, 110px);
          font-family: "Plus Jakarta Sans", Arial, sans-serif;
        }

        /* White vertical guide line on the left — solid so the page-long
           line runs unbroken from HYENA above into ARC C2 below. */
        .sentinel-vline {
          position: absolute;
          left: clamp(22px, 4.1vw, 70px);
          top: 0;
          bottom: 0;
          width: 1px;
          z-index: 6;
          background: rgba(255, 255, 255, 0.5);
        }

        .sentinel-first-label {
          position: absolute;
          left: clamp(2px, 0.55vw, 14px);
          bottom: clamp(18px, 4vw, 92px);
          z-index: 6;
          transform: rotate(180deg);
          writing-mode: vertical-rl;
          font-weight: 400;
          font-size: clamp(10px, 0.95vw, 16px);
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.4);
          pointer-events: none;
        }

        .sentinel-inner {
          position: relative;
          z-index: 3;
          margin-left: var(--sentinel-left-gutter);
          margin-right: var(--sentinel-right-gutter);
        }

        .sentinel-head {
          display: flex;
          align-items: baseline;
          gap: clamp(12px, 1.6vw, 26px);
          white-space: nowrap;
        }

        .sentinel-rule {
          flex: 0 0 auto;
          align-self: center;
          width: clamp(40px, 9vw, 150px);
          height: 1px;
          margin-left: clamp(-26px, -3vw, -10px);
          background: linear-gradient(90deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.6));
        }

        .sentinel-word {
          margin: 0;
          font-family: "Yapari Trial Regular", "Yapari Trial", "Azonix", sans-serif;
          font-size: clamp(40px, 7.4vw, 96px);
          font-weight: 400;
          line-height: 1;
          letter-spacing: clamp(2px, 0.5vw, 8px);
          color: #ffffff;
          text-transform: uppercase;
        }

        .sentinel-t {
          color: #e3e41b;
        }

        .sentinel-sub {
          flex: 0 1 auto;
          align-self: flex-end;
          margin-bottom: clamp(4px, 0.7vw, 12px);
          font-family: "SourceCodePro", "Source Code Pro", ui-monospace, monospace;
          font-size: clamp(9px, 0.95vw, 15px);
          font-weight: 400;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.78);
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .sentinel-sub-id {
          color: #0a7cff;
        }

        .sentinel-desc {
          max-width: min(1060px, 96%);
          margin: clamp(22px, 2.8vw, 44px) 0 clamp(40px, 5.4vw, 86px);
          font-weight: 300;
          font-size: clamp(15px, 1.46vw, 26px);
          line-height: 1.24;
          color: rgba(255, 255, 255, 0.92);
        }

        .sentinel-chain {
          color: #e3e41b;
          font-weight: 600;
        }

        .sentinel-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          column-gap: 0;
        }

        .sentinel-card {
          padding: clamp(8px, 1vw, 18px) clamp(16px, 1.9vw, 36px) clamp(10px, 1.4vw, 26px) 0;
          border-right: 1px solid rgba(255, 255, 255, 0.22);
        }

        .sentinel-card:not(:first-child) {
          padding-left: clamp(16px, 1.9vw, 36px);
        }

        .sentinel-card:last-child {
          border-right: 0;
        }

        .sentinel-card-label {
          margin-bottom: clamp(16px, 2.2vw, 36px);
          font-family: "SourceCodePro", "Source Code Pro", ui-monospace, monospace;
          font-size: clamp(11px, 1.05vw, 18px);
          font-weight: 400;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: #0a7cff;
        }

        .sentinel-card-title {
          margin: 0 0 clamp(14px, 1.7vw, 28px);
          font-size: clamp(19px, 2vw, 32px);
          font-weight: 600;
          line-height: 1.04;
          text-transform: uppercase;
          color: #e3e41b;
        }

        .sentinel-card-body {
          margin: 0;
          font-weight: 300;
          font-size: clamp(14px, 1.24vw, 21px);
          line-height: 1.16;
          color: #ffffff;
        }

        /* Large human-authority statement below the tiers. */
        .sentinel-statement {
          margin-top: clamp(46px, 7vw, 132px);
          max-width: min(1655px, 100%);
        }

        .sentinel-statement-text {
          margin: 0;
          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-weight: 400;
          font-size: clamp(26px, 4.05vw, 58px);
          line-height: 1.1;
          letter-spacing: clamp(2px, 0.32vw, 4.64px);
          color: #ffffff;
        }

        .sentinel-statement-hl {
          color: #e3e41b;
        }

        .sentinel-escalation {
          margin-top: clamp(20px, 2.8vw, 48px);
          font-family: "SourceCodePro", "Source Code Pro", ui-monospace, monospace;
          font-size: clamp(11px, 1.05vw, 18px);
          font-weight: 400;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: #ffffff;
        }

        /* Lower scene: sentry on the left (in flow), drone + target-lock
           annotation positioned against it on the right. */
        .sentinel-scene {
          position: relative;
          margin: clamp(18px, 2.2vw, 42px) calc(var(--sentinel-right-gutter) * -1) 0 calc(var(--sentinel-left-gutter) * -1);
          width: calc(100% + var(--sentinel-left-gutter) + var(--sentinel-right-gutter));
          height: clamp(560px, 50vw, 900px);
          max-height: calc(100svh - clamp(72px, 7vw, 128px));
          overflow: hidden;
          isolation: isolate;
          background: #000;
        }

        /* Sentry-radar line-art anchored to the lower-left, just inside the
           white guide line. Portrait 25/34, white background dropped via
           screen blend against the black section. */
        .sentinel-sentry {
          display: block;
          width: min(636px, 46vw);
          max-width: 636px;
          aspect-ratio: 25 / 34;
          height: auto;
          margin: clamp(40px, 6vw, 110px) 0 0;
          object-fit: contain;
          mix-blend-mode: screen;
          user-select: none;
          pointer-events: none;
        }

        /* FENRIR drone line-art on the right. The Group PNG is already the
           final composite at its attack angle, so no extra rotation. */
        .sentinel-drone {
          position: absolute;
          top: clamp(10px, 4vw, 80px);
          right: clamp(0px, 2vw, 50px);
          width: min(560px, 56vw);
          height: auto;
          object-fit: contain;
          mix-blend-mode: screen;
          user-select: none;
          pointer-events: none;
          z-index: 2;
        }

        /* TARGET LOCK readout, dropped below the drone on a thin leader line. */
        .sentinel-target {
          position: absolute;
          top: clamp(300px, 38vw, 520px);
          right: clamp(60px, 9vw, 200px);
          z-index: 3;
          font-family: "SourceCodePro", "Source Code Pro", ui-monospace, monospace;
          pointer-events: none;
        }

        .sentinel-target::before {
          content: "";
          position: absolute;
          left: 0;
          top: clamp(-96px, -11vw, -54px);
          width: 1px;
          height: clamp(54px, 11vw, 96px);
          background: rgba(255, 255, 255, 0.5);
        }

        .sentinel-target-lock {
          font-size: clamp(8px, 0.82vw, 13px);
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #ff5a3c;
        }

        .sentinel-target-meta {
          margin-top: 4px;
          font-size: clamp(7px, 0.72vw, 11px);
          font-weight: 400;
          line-height: 1.55;
          color: rgba(255, 255, 255, 0.82);
        }

        /* "SENTRY C— RADAR / NODE 01 UAS" callout in the gap between the
           sentry and the drone, with a leader line on each side. */
        .sentinel-radar-callout {
          position: absolute;
          top: clamp(110px, 22vw, 320px);
          left: clamp(150px, 26vw, 470px);
          right: clamp(120px, 20vw, 420px);
          z-index: 3;
          display: flex;
          flex-direction: column;
          align-items: stretch;
          text-align: center;
          font-family: "Yapari Trial", "Yapari Trial Regular", "Azonix", sans-serif;
          font-weight: 400;
          letter-spacing: 1.6px;
          text-transform: uppercase;
          white-space: nowrap;
          pointer-events: none;
        }

        .sentinel-radar-rule {
          width: clamp(170px, 21vw, 320px);
          height: 1px;
          margin: clamp(3px, 0.5vw, 8px) auto;
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.12),
            rgba(255, 255, 255, 0.55) 40%,
            rgba(255, 255, 255, 0.55) 60%,
            rgba(255, 255, 255, 0.12)
          );
        }

        .sentinel-radar-l1,
        .sentinel-radar-l2 {
          display: block;
          color: #ffffff;
          font-size: clamp(13px, 1.05vw, 20px);
          font-weight: 400;
        }

        .sentinel-radar-l1 {
          line-height: 100.05%;
        }

        .sentinel-radar-l2 {
          line-height: 150%;
        }

        .sentinel-radar-y {
          color: #e3e41b;
        }

        /* Targeting reticle in the lower-right: yellow dashed crosshair
           framed by four white square brackets. */
        .sentinel-reticle {
          position: absolute;
          right: clamp(0px, 1.5vw, 36px);
          top: clamp(-44px, -2.4vw, -4px);
          width: clamp(52px, 6vw, 104px);
          height: clamp(52px, 6vw, 104px);
          z-index: 4;
          opacity: 0.92;
          pointer-events: none;
        }

        .sentinel-reticle svg {
          display: block;
          width: 100%;
          height: 100%;
        }

        .sentinel-video {
          position: absolute;
          inset: 0;
          z-index: 1;
          display: block;
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: 30% center;
          opacity: 1;
          filter: none;
          pointer-events: none;
          user-select: none;
        }

        /* Navy (#22285a) wash layered ON TOP of the video from the left edge,
           screen-blended so it glows over the black frame instead of fogging
           the footage — matches the reference (dp1) composition. */
        .sentinel-scene::after {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 2;
          pointer-events: none;
          mix-blend-mode: screen;
          background:
            radial-gradient(70% 110% at 0% 62%, rgba(34, 40, 90, 0.95), rgba(34, 40, 90, 0.38) 44%, rgba(0, 0, 0, 0) 78%),
            radial-gradient(42% 54% at 0% 100%, rgba(34, 40, 90, 0.85), rgba(34, 40, 90, 0.28) 46%, rgba(0, 0, 0, 0) 74%);
        }

        @media (max-width: 760px) {
          .sentinel-inner {
            --sentinel-left-gutter: clamp(44px, 11vw, 64px);
            --sentinel-right-gutter: clamp(18px, 5vw, 34px);
          }

          .sentinel-head {
            flex-wrap: wrap;
            white-space: normal;
            gap: clamp(8px, 2vw, 16px);
          }

          .sentinel-rule {
            width: clamp(42px, 16vw, 84px);
            margin-left: 0;
          }

          .sentinel-sub {
            flex-basis: 100%;
            align-self: flex-start;
            margin-bottom: 0;
            white-space: normal;
          }

          .sentinel-grid {
            grid-template-columns: 1fr;
          }

          .sentinel-card,
          .sentinel-card:not(:first-child) {
            padding: clamp(14px, 4vw, 22px) 0;
            border-right: 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          }

          .sentinel-card:last-child {
            border-bottom: 0;
          }

          .sentinel-first-label {
            display: none;
          }

          .sentinel-scene {
            height: clamp(420px, 82vw, 620px);
            max-height: none;
          }

          .sentinel-sentry {
            width: min(58vw, 360px);
            margin-top: clamp(36px, 10vw, 64px);
          }

          .sentinel-drone {
            top: clamp(66px, 20vw, 130px);
            right: -3vw;
            width: min(50vw, 340px);
          }

          .sentinel-radar-callout {
            top: clamp(112px, 34vw, 210px);
            left: 38%;
            right: 18%;
            letter-spacing: 0.6px;
          }

          .sentinel-radar-l1,
          .sentinel-radar-l2 {
            font-size: clamp(7px, 2vw, 10px);
          }

          .sentinel-target {
            top: clamp(250px, 70vw, 420px);
            right: clamp(3px, 1vw, 8px);
            width: clamp(96px, 28vw, 126px);
          }

          .sentinel-target::before {
            top: clamp(-74px, -14vw, -46px);
            height: clamp(46px, 14vw, 74px);
          }
        }

        @media (max-width: 560px) {
          .sentinel-inner {
            --sentinel-left-gutter: clamp(42px, 12vw, 58px);
            --sentinel-right-gutter: clamp(16px, 5vw, 28px);
          }

          .sentinel-rule {
            width: 28px;
            margin-left: 0;
          }

          .sentinel-word {
            font-size: clamp(31px, 11vw, 46px);
            letter-spacing: 1px;
          }

          .sentinel-statement-text {
            overflow-wrap: anywhere;
          }

          .sentinel-target {
            right: 0;
          }

          .sentinel-target-meta {
            overflow-wrap: anywhere;
          }

          .sentinel-vline {
            left: clamp(24px, 7vw, 34px);
          }
        }
      `}</style>

      <span className="sentinel-vline" aria-hidden="true" />
      <span className="sentinel-first-label" aria-hidden="true">
        SEE FIRST. DECIDE FIRST. ACT FIRST.
      </span>

      <div className="sentinel-inner">
        <div className="sentinel-head">
          <span className="sentinel-rule" aria-hidden="true" />
          <h2 className="sentinel-word">
            SEN<span className="sentinel-t">T</span>INEL
          </h2>
          <span className="sentinel-sub">
            <span className="sentinel-sub-id">SUBSYSTEM 02</span> &nbsp;·&nbsp;
            SENSE FIRST, INTERCEPT UNDER COMMAND
          </span>
        </div>

        <p className="sentinel-desc">
          A distributed, sensor-node-based air-surveillance and counter-UAS
          layer: many low-cost radar nodes feeding one fused air picture, and an
          anti-UAV interceptor cued to neutralise threats only under human
          authorisation. Instead of one exquisite, expensive radar, SENTINEL
          deploys an affordable mesh of nodes that survives the loss of any
          single one — running the universal kill chain:{" "}
          <span className="sentinel-chain">
            detect → track → identify → decide → defeat → assess.
          </span>
        </p>

        <div className="sentinel-grid">
          {sentinelTiers.map((tier) => (
            <article className="sentinel-card" key={tier.code}>
              <div className="sentinel-card-label">
                {tier.code} · {tier.cat}
              </div>
              <h3 className="sentinel-card-title">{tier.title}</h3>
              <p className="sentinel-card-body">{tier.body}</p>
            </article>
          ))}
        </div>

        <div className="sentinel-statement">
          <p className="sentinel-statement-text">
            Lower, reversible responses are always offered before kinetic ones —
            and{" "}
            <span className="sentinel-statement-hl">
              no engagement occurs from an automatic decision alone.
            </span>
          </p>
          <div className="sentinel-escalation">
            // Escalation of force · monitor → warn → deter → intercept
          </div>
        </div>

        <div className="sentinel-scene">
          <video
            className="sentinel-video"
            src={fenrirCounterUasVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>

    <section id="arc-c2" className="c2" aria-label="ARC C2 — Subsystem 03">
      <style>{`
        @font-face {
          font-family: "Ysabeau";
          src: local("Ysabeau"), local("Ysabeau SC");
          font-weight: 400;
          font-style: normal;
          font-display: swap;
        }

        .c2 {
          position: relative;
          width: 100%;
          /* Navy ambient: a glow at the top-right and a broad wash sweeping
             up from the lower-left, on black. */
          background:
            radial-gradient(48% 52% at 86% 99%, rgba(43, 37, 16, 0.98), rgba(43, 37, 16, 0.42) 46%, rgba(43, 37, 16, 0) 76%),
            radial-gradient(50% 60% at 100% 0%, rgba(37, 44, 99, 0.9), rgba(37, 44, 99, 0.28) 42%, rgba(0, 0, 0, 0) 76%),
            radial-gradient(60% 70% at 8% 100%, rgba(33, 40, 92, 0.62), rgba(0, 0, 0, 0) 70%),
            #000;
          overflow: hidden;
          isolation: isolate;
          padding: clamp(26px, 3.4vw, 64px) 0 0;
          font-family: "Plus Jakarta Sans", Arial, sans-serif;
        }

        .c2-vline {
          position: absolute;
          left: clamp(22px, 4.1vw, 70px);
          top: 0;
          bottom: 0;
          width: 1px;
          z-index: 2;
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.5) 0%,
            rgba(255, 255, 255, 0.5) 94%,
            rgba(255, 255, 255, 0) 100%
          );
        }

        .ars-os-vline,
        .hyena-vline,
        .sentinel-vline,
        .c2-vline {
          background:
            linear-gradient(
              180deg,
              rgba(255, 255, 255, 0.58) 0%,
              rgba(255, 255, 255, 0.52) 54%,
              rgba(255, 255, 255, 0.46) 100%
            ),
            linear-gradient(
              180deg,
              transparent 0%,
              rgba(255, 255, 210, 0.08) 16%,
              rgba(255, 255, 180, 0.26) 36%,
              rgba(255, 255, 255, 0.92) 50%,
              rgba(255, 255, 150, 0.26) 64%,
              rgba(255, 255, 120, 0.08) 84%,
              transparent 100%
            );
          background-repeat: no-repeat;
          background-size: 100% 100%, 100% 44%;
          background-position: 0 0, 0 -52%;
          filter: drop-shadow(0 0 4px rgba(255, 255, 160, 0.18));
          will-change: background-position;
          animation: arsOsGuideRunY 4s linear infinite;
        }

        @keyframes arsOsGuideRunY {
          0% {
            background-position: 0 0, 0 -52%;
          }

          100% {
            background-position: 0 0, 0 152%;
          }
        }

        .c2-inner {
          position: relative;
          z-index: 3;
          margin-left: clamp(48px, 7.1vw, 150px);
          margin-right: clamp(34px, 5vw, 96px);
        }

        .c2-head {
          display: flex;
          align-items: baseline;
          gap: clamp(12px, 1.8vw, 30px);
          white-space: nowrap;
        }

        .c2-rule {
          flex: 0 0 auto;
          align-self: center;
          width: clamp(40px, 9vw, 150px);
          height: 1px;
          margin-left: clamp(-26px, -3vw, -10px);
          background: linear-gradient(90deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.6));
        }

        .c2-title {
          margin: 0;
          display: inline-flex;
          align-items: baseline;
          font-family: "Yapari Trial Regular", "Yapari Trial", "Azonix", sans-serif;
          font-size: clamp(44px, 6.6vw, 90px);
          font-weight: 400;
          line-height: normal;
          letter-spacing: clamp(3px, 0.52vw, 7.2px);
          color: #ffffff;
          text-transform: uppercase;
        }

        .c2-title-c {
          color: #eaff00;
        }

        .c2-title-sub {
          font-family: "Ysabeau", "Plus Jakarta Sans", serif;
          font-size: 0.56em;
          line-height: 1;
          align-self: flex-end;
          transform: translateY(0.08em);
          margin-left: 0.04em;
        }

        .c2-sub {
          flex: 0 1 auto;
          align-self: flex-end;
          margin-bottom: clamp(6px, 1vw, 16px);
          font-family: "Source Code Pro", "SourceCodePro", ui-monospace, monospace;
          font-size: clamp(11px, 1.15vw, 18px);
          font-weight: 400;
          line-height: normal;
          text-transform: uppercase;
          color: #ffffff;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .c2-sub-id {
          color: #0a7cff;
        }

        .c2-desc {
          max-width: min(1456px, 96%);
          margin: clamp(20px, 2.6vw, 40px) 0 clamp(34px, 4.6vw, 78px);
          font-weight: 300;
          font-size: clamp(15px, 1.46vw, 26px);
          line-height: 1.24;
          color: rgba(255, 255, 255, 0.92);
        }

        .c2-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          column-gap: 0;
          max-width: min(1456px, 100%);
        }

        .c2-step {
          position: relative;
          display: flex;
          flex-direction: column;
          min-height: clamp(220px, 24vw, 354px);
          padding-right: clamp(14px, 1.7vw, 32px);
        }

        .c2-step:not(:first-child) {
          padding-left: clamp(14px, 1.7vw, 32px);
        }

        /* Short vertical divider beside the title + body, not full height.
           Anchored to a fixed top + fixed height so every column's divider is
           identical, regardless of body length. */
        .c2-step:not(:last-child)::after {
          content: "";
          position: absolute;
          right: 0;
          top: clamp(56px, 7vw, 104px);
          width: 1px;
          height: clamp(104px, 12vw, 168px);
          background: rgba(255, 255, 255, 0.28);
        }

        .c2-step:last-child {
          padding-right: 0;
        }

        .c2-step-num {
          margin-top: clamp(10px, 2vw, 32px);
          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: clamp(15px, 1.35vw, 24px);
          font-weight: 600;
          line-height: 1;
          color: #e3e41b;
        }

        .c2-step-title {
          margin-top: clamp(40px, 5vw, 80px);
          margin-bottom: clamp(10px, 1.2vw, 20px);
          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: clamp(20px, 2.1vw, 32px);
          font-weight: 600;
          line-height: 1;
          text-transform: uppercase;
          color: #e3e41b;
        }

        .c2-step-body {
          margin: 0;
          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: clamp(15px, 1.55vw, 24px);
          font-weight: 300;
          line-height: 1.33;
          color: #ffffff;
        }

        /* Open-ended HUD guides rather than borders around four boxes. */
        .c2-cards {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          position: relative;
          margin: clamp(40px, 5.5vw, 96px) 0 0;
          margin-left: clamp(20px, 6vw, 120px);
        }

        .c2-card {
          position: relative;
          padding: clamp(22px, 2.8vw, 50px) clamp(20px, 2.4vw, 46px);
        }

        .c2-card:nth-child(odd) {
          padding-left: 0;
          border-right: 0;
          background:
            linear-gradient(
              180deg,
              rgba(255, 255, 255, 0.46) 0%,
              rgba(255, 255, 255, 0.36) 74%,
              rgba(255, 255, 255, 0.2) 100%
            ),
            linear-gradient(
              180deg,
              transparent 0%,
              rgba(255, 255, 210, 0.08) 16%,
              rgba(255, 255, 180, 0.26) 36%,
              rgba(255, 255, 255, 0.94) 50%,
              rgba(255, 255, 150, 0.26) 64%,
              rgba(255, 255, 120, 0.08) 84%,
              transparent 100%
            );
          background-repeat: no-repeat;
          background-size: 1px 100%, 1px 48%;
          background-position: 100% 0, 100% -54%;
          filter: drop-shadow(0 0 4px rgba(255, 255, 180, 0.14));
          will-change: background-position;
          animation: arsOsCardRailRunY 4s linear infinite;
        }

        .c2-card:nth-child(-n + 2) {
          border-bottom: 0;
        }

        /* Extend the row divider back to the section's outer guide. */
        .c2-card:nth-child(-n + 2)::after {
          content: "";
          position: absolute;
          right: 0;
          bottom: -1px;
          left: 0;
          height: 1px;
          background:
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.08) 0%,
              rgba(255, 255, 255, 0.52) 20%,
              rgba(255, 255, 255, 0.66) 78%,
              rgba(255, 255, 255, 0.42) 100%
            ),
            linear-gradient(
              90deg,
              transparent 0%,
              rgba(255, 255, 210, 0.08) 16%,
              rgba(255, 255, 180, 0.28) 36%,
              rgba(255, 255, 255, 0.96) 50%,
              rgba(255, 255, 150, 0.28) 64%,
              rgba(255, 255, 120, 0.08) 84%,
              transparent 100%
            );
          background-repeat: no-repeat;
          background-size: 100% 100%, 38% 100%;
          background-position: 0 0, -42% 0;
          filter: drop-shadow(0 0 4px rgba(255, 255, 180, 0.18));
          will-change: background-position;
          animation: arsOsGuideRunX 3.8s linear infinite;
          pointer-events: none;
        }

        .c2-card:first-child::after {
          left: calc(
            clamp(22px, 4.1vw, 70px) -
            clamp(48px, 7.1vw, 150px) -
            clamp(20px, 6vw, 120px)
          );
        }

        /* Lower-left rail: no matching bottom/right edge, so no box. */
        .c2-card:nth-child(3)::before {
          content: "";
          position: absolute;
          left: clamp(-48px, -2.3vw, -24px);
          top: 0;
          bottom: clamp(-360px, -27vw, -170px);
          width: 1px;
          background:
            linear-gradient(
              180deg,
              rgba(255, 255, 255, 0.46) 0%,
              rgba(255, 255, 255, 0.34) 72%,
              rgba(255, 255, 255, 0) 100%
            ),
            linear-gradient(
              180deg,
              transparent 0%,
              rgba(255, 255, 210, 0.08) 16%,
              rgba(255, 255, 180, 0.26) 36%,
              rgba(255, 255, 255, 0.94) 50%,
              rgba(255, 255, 150, 0.26) 64%,
              rgba(255, 255, 120, 0.08) 84%,
              transparent 100%
            );
          background-repeat: no-repeat;
          background-size: 100% 100%, 100% 48%;
          background-position: 0 0, 0 -54%;
          filter: drop-shadow(0 0 4px rgba(255, 255, 180, 0.14));
          will-change: background-position;
          animation: arsOsGuideRunY 4s linear infinite;
          pointer-events: none;
        }

        .c2-card-num {
          font-family: "Google Sans Code", "Source Code Pro", "SourceCodePro", ui-monospace, monospace;
          font-size: clamp(17px, 1.55vw, 26px);
          font-weight: 600;
          line-height: 1.23;
          text-transform: uppercase;
          color: #0a7cff;
        }

        .c2-card-title {
          margin: clamp(14px, 1.9vw, 30px) 0 clamp(12px, 1.4vw, 22px);
          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: clamp(19px, 2.05vw, 32px);
          font-weight: 600;
          line-height: 1.04;
          text-transform: uppercase;
          color: #e3e41b;
        }

        .c2-card-body {
          margin: 0;
          max-width: 34ch;
          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: clamp(15px, 1.5vw, 23px);
          font-weight: 300;
          line-height: 1.3;
          color: #ffffff;
        }

        /* Full-bleed wireframe terrain at the foot of the section, with the
           animated dot cluster and a connector line dropping from the cards. */
        .c2-terrain {
          position: relative;
          z-index: 1;
          width: 100%;
          margin-top: clamp(-20px, -2vw, 12px);
          aspect-ratio: 365 / 158;
          background-image:
            url(${terrainDots}),
            url(${terrainMesh});
          background-position:
            calc(54% + clamp(14px, 1.25vw, 26px)) 48%,
            50% 100%;
          background-repeat: no-repeat;
          background-size:
            clamp(220px, 30vw, 420px) auto,
            cover;
          background-blend-mode: screen;
          mix-blend-mode: screen;
          pointer-events: none;
          /* Fully dissolve the image before the section edge. Keeping even a
             little opacity at 100% exposes the rectangular image boundary. */
          -webkit-mask-image: linear-gradient(180deg, #000 48%, rgba(0, 0, 0, 0.68) 64%, rgba(0, 0, 0, 0.2) 76%, transparent 90%);
          mask-image: linear-gradient(180deg, #000 48%, rgba(0, 0, 0, 0.68) 64%, rgba(0, 0, 0, 0.2) 76%, transparent 90%);
        }

        .c2-terrain-line {
          position: absolute;
          left: 54%;
          top: clamp(-220px, -21vw, -90px);
          bottom: 66%;
          width: 1px;
          z-index: 2;
          background:
            linear-gradient(
              180deg,
              rgba(255, 255, 255, 0) 0%,
              rgba(255, 255, 255, 0.46) 24%,
              rgba(255, 255, 255, 0.72) 100%
            ),
            linear-gradient(
              180deg,
              transparent 0%,
              rgba(255, 255, 210, 0.08) 16%,
              rgba(255, 255, 180, 0.26) 36%,
              rgba(255, 255, 255, 0.94) 50%,
              rgba(255, 255, 150, 0.26) 64%,
              rgba(255, 255, 120, 0.08) 84%,
              transparent 100%
            );
          background-repeat: no-repeat;
          background-size: 100% 100%, 100% 48%;
          background-position: 0 0, 0 -54%;
          filter: drop-shadow(0 0 4px rgba(255, 255, 180, 0.16));
          will-change: background-position;
          animation: arsOsGuideRunY 4s linear infinite;
        }

        .hyena-rule,
        .sentinel-rule,
        .c2-rule {
          background:
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.08) 0%,
              rgba(255, 255, 255, 0.58) 28%,
              rgba(255, 255, 255, 0.68) 72%,
              rgba(255, 255, 255, 0.08) 100%
            ),
            linear-gradient(
              90deg,
              transparent 0%,
              rgba(255, 255, 210, 0.08) 16%,
              rgba(255, 255, 180, 0.28) 36%,
              rgba(255, 255, 255, 0.96) 50%,
              rgba(255, 255, 150, 0.28) 64%,
              rgba(255, 255, 120, 0.08) 84%,
              transparent 100%
            );
          background-repeat: no-repeat;
          background-size: 100% 100%, 42% 100%;
          background-position: 0 0, -44% 0;
          filter: drop-shadow(0 0 4px rgba(255, 255, 180, 0.18));
          will-change: background-position;
          animation: arsOsGuideRunX 3.8s linear infinite;
        }

        @keyframes arsOsGuideRunX {
          0% {
            background-position: 0 0, -44% 0;
          }

          100% {
            background-position: 0 0, 144% 0;
          }
        }

        @keyframes arsOsCardRailRunY {
          0% {
            background-position: 100% 0, 100% -54%;
          }

          100% {
            background-position: 100% 0, 100% 154%;
          }
        }

        @media (max-width: 900px) {
          .c2-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            row-gap: clamp(20px, 4vw, 40px);
          }

          .c2-step {
            min-height: auto;
          }

          .c2-step:nth-child(2n) {
            padding-right: 0;
          }

          .c2-step:nth-child(2n)::after {
            display: none;
          }

          .c2-step-title {
            margin-top: clamp(16px, 4vw, 28px);
          }
        }

        @media (max-width: 760px) {
          .c2-inner {
            margin-left: clamp(44px, 11vw, 64px);
            margin-right: clamp(18px, 5vw, 34px);
          }

          .c2-head {
            flex-wrap: wrap;
            white-space: normal;
            gap: clamp(8px, 2.4vw, 16px);
          }

          .c2-rule {
            width: clamp(38px, 15vw, 76px);
            margin-left: 0;
          }

          .c2-sub {
            flex-basis: 100%;
            align-self: flex-start;
            margin-bottom: 0;
            white-space: normal;
          }

          .c2-cards {
            grid-template-columns: 1fr;
            margin-left: 0;
          }

          .c2-card,
          .c2-card:nth-child(odd) {
            padding: clamp(20px, 5vw, 30px) 0;
            border-right: 0;
          }

          .c2-card:first-child::after,
          .c2-card:nth-child(3)::before {
            display: none;
          }

          .c2-card:not(:last-child) {
            border-bottom: 1px solid rgba(255, 255, 255, 0.18);
          }

          .c2-card:last-child {
            border-bottom: 0;
          }
        }

        @media (max-width: 520px) {
          .c2-inner {
            margin-left: clamp(42px, 12vw, 58px);
            margin-right: clamp(16px, 5vw, 28px);
          }

          .c2-grid {
            grid-template-columns: 1fr;
          }

          .c2-step,
          .c2-step:nth-child(2n) {
            padding-left: 0;
            padding-right: 0;
          }

          .c2-step::after {
            display: none;
          }

          .c2-vline {
            left: clamp(24px, 7vw, 34px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .ars-os-vline,
          .hyena-vline,
          .sentinel-vline,
          .c2-vline,
          .hyena-rule,
          .sentinel-rule,
          .c2-rule,
          .c2-card:nth-child(odd),
          .c2-card:first-child::after,
          .c2-card:nth-child(3)::before,
          .c2-terrain-line {
            animation: none;
          }
        }
      `}</style>

      <span className="c2-vline" aria-hidden="true" />

      <div className="c2-inner">
        <div className="c2-head">
          <span className="c2-rule" aria-hidden="true" />
          <h2 className="c2-title">
            ARC&nbsp;<span className="c2-title-c">C</span>
            <span className="c2-title-sub">2</span>
          </h2>
          <span className="c2-sub">
            <span className="c2-sub-id">SUBSYSTEM 03</span> &nbsp;·&nbsp;
            BATTLE MANAGEMENT &amp; C2 — THE HUMAN ↔ AI BRIDGE
          </span>
        </div>

        <p className="c2-desc">
          The AI-powered C2 that integrates both subsystems and thousands of
          sensors and effectors into one operating picture and one chain of
          command — and the bridge between human command and the ARC OS
          intelligence. It runs the decision cycle continuously and at scale.
        </p>

        <div className="c2-grid">
          {c2Steps.map((step) => (
            <div className="c2-step" key={step.num}>
              <div className="c2-step-num">{step.num}</div>
              <div className="c2-step-title">{step.title}</div>
              <p className="c2-step-body">{step.body}</p>
            </div>
          ))}
        </div>

        <div className="c2-cards">
          {c2Capabilities.map((card) => (
            <div className="c2-card" key={card.num}>
              <div className="c2-card-num">{card.num}</div>
              <div className="c2-card-title">{card.title}</div>
              <p className="c2-card-body">{card.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="c2-terrain" aria-hidden="true">
        <span className="c2-terrain-line" />
      </div>
    </section>
    </>
  );
}
