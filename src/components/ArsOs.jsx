import AnimatedLine from "../Utils/AnimatedLine";
import plusJakartaSans from "../assets/fonts/PlusJakartaSans[wght].ttf";
import handsImage from "../assets/yertg 2.png";
import swarmFigure from "../assets/gfjhjhjhjlhugh 1.png";

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

export default function ArsOs() {
  return (
    <>
    <section className="ars-os-hero" aria-label="ARC OS">
      <style>{`
        .ars-os-hero {
          position: relative;
          width: 100%;
          height: clamp(315px, 28vw, 520px);
          min-height: 315px;
          overflow: hidden;
          background: #000;
          isolation: isolate;
        }

        .ars-os-lines {
          position: absolute;
          left: 50%;
          top: clamp(-92px, -5vw, -52px);
          z-index: 50;
          width: min(2300px, 166vw);
          pointer-events: none;
          opacity: 0.95;
          transform: translateX(-50%);
          mix-blend-mode: screen;
        }

        .ars-os-lines > div {
          position: relative !important;
          left: 0 !important;
          top: 0 !important;
          width: 100% !important;
          translate: 0 0 !important;
          rotate: none !important;
          transform: rotate(-0.5deg) scaleY(0.56) !important;
          transform-origin: center !important;
        }

        .ars-os-lines svg {
          width: 100%;
          height: auto;
        }

        .ars-os-lines path[id="path1"] {
          stroke-width: 1.55;
          stroke-opacity: 0.9;
        }

        .ars-os-lines path[id="path2"] {
          stroke-width: 1.65;
          stroke-opacity: 1;
        }

        .ars-os-title {
          position: absolute;
          left: 39.5%;
          bottom: clamp(-10px, -0.9vh, -2px);
          z-index: 20;
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

        @media (max-width: 760px) {
          .ars-os-hero {
            height: clamp(280px, 60vw, 400px);
            min-height: 280px;
          }

          .ars-os-title {
            bottom: clamp(28px, 6.8vh, 50px);
            left: 50%;
            gap: clamp(16px, 4.6vw, 36px);
            font-size: clamp(42px, 14vw, 82px);
            line-height: 0.88;
            letter-spacing: 2px;
          }

          .ars-os-lines {
            top: clamp(-100px, -24vw, -72px);
            width: 250vw;
            opacity: 0.88;
          }
        }

        @media (min-width: 1400px) {
          .ars-os-lines {
            top: -28px;
          }
        }
      `}</style>

      <div className="ars-os-lines" aria-hidden="true">
        <AnimatedLine />
      </div>

      <h1 className="ars-os-title">
        <span className="ars-os-arc">ARC</span>
        <span className="ars-os-os">
          <span className="ars-os-o">O</span>
          <span className="ars-os-s">S</span>
        </span>
      </h1>
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
          background: #000;
          overflow: hidden;
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
          display: block;
          width: min(1726px, 100%);
          margin: 0 auto;
          aspect-ratio: 57 / 32;
          object-fit: cover;
          mix-blend-mode: screen;
          user-select: none;
          pointer-events: none;
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

        /* White vertical guide line down the left edge. */
        .ars-os-vline {
          position: absolute;
          left: clamp(22px, 4vw, 70px);
          top: clamp(8px, 1.6vw, 24px);
          bottom: 0;
          width: 1px;
          z-index: 4;
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.55) 7%,
            rgba(255, 255, 255, 0.55) 84%,
            rgba(255, 255, 255, 0) 100%
          );
        }

        @media (max-width: 760px) {
          .ars-os-intro-img {
            width: 140%;
            margin-left: -20%;
          }

          .ars-os-intro-copy {
            top: 22px;
            left: 30px;
            right: 18px;
            font-size: clamp(13px, 3.6vw, 18px);
            line-height: 1.2;
          }

          .ars-os-hl {
            font-size: clamp(14px, 4vw, 20px);
          }

          .ars-os-vline {
            left: 14px;
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

      <p className="ars-os-intro-copy">
        The{" "}
        <span className="ars-os-hl">
          Autonomous Command &amp; Control battle management System
        </span>{" "}
        &mdash; a full-autonomy, agentic platform that turns sensors into
        decisions at machine speed, while humans hold command. Three subsystems.
        Three domains. One intelligence core.
      </p>
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

        .hyena-vline {
          position: absolute;
          left: clamp(22px, 4.1vw, 70px);
          top: 0;
          bottom: 0;
          width: 1px;
          z-index: 2;
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.5) 5%,
            rgba(255, 255, 255, 0.5) 93%,
            rgba(255, 255, 255, 0) 100%
          );
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
          .hyena-grid {
            grid-template-columns: repeat(2, 1fr);
            max-width: calc(100% - clamp(44px, 6.1vw, 78px));
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
            margin-left: clamp(30px, 8vw, 56px);
            margin-right: clamp(22px, 7vw, 44px);
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
          position: relative;
          width: 100%;
          /* Warm olive (#5e5124) ambient on the left, navy (#252c63) glow
             down the right side — matching the reference. */
          background:
            radial-gradient(46% 70% at 0% 30%, rgba(94, 81, 36, 0.34), rgba(0, 0, 0, 0) 60%),
            radial-gradient(62% 96% at 100% 52%, rgba(37, 44, 99, 0.92), rgba(37, 44, 99, 0.34) 40%, rgba(0, 0, 0, 0) 80%),
            #000;
          overflow: hidden;
          isolation: isolate;
          padding: clamp(26px, 3.4vw, 64px) 0 clamp(48px, 6vw, 110px);
          font-family: "Plus Jakarta Sans", Arial, sans-serif;
        }

        /* White vertical guide line on the left, running the full height. */
        .sentinel-vline {
          position: absolute;
          left: clamp(22px, 4.1vw, 70px);
          top: 0;
          bottom: 0;
          width: 1px;
          z-index: 2;
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.5) 3%,
            rgba(255, 255, 255, 0.5) 97%,
            rgba(255, 255, 255, 0) 100%
          );
        }

        .sentinel-first-label {
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

        .sentinel-inner {
          position: relative;
          z-index: 3;
          margin-left: clamp(48px, 7.1vw, 150px);
          margin-right: clamp(34px, 5vw, 96px);
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

        /* Targeting reticle in the lower-right: yellow dashed crosshair
           framed by four white square brackets. */
        .sentinel-reticle {
          position: absolute;
          right: clamp(20px, 4vw, 80px);
          bottom: clamp(22px, 3.4vw, 64px);
          width: clamp(52px, 6vw, 104px);
          height: clamp(52px, 6vw, 104px);
          z-index: 3;
          opacity: 0.92;
          pointer-events: none;
        }

        .sentinel-reticle svg {
          display: block;
          width: 100%;
          height: 100%;
        }

        @media (max-width: 760px) {
          .sentinel-head {
            flex-wrap: wrap;
            white-space: normal;
            gap: clamp(8px, 2vw, 16px);
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
      </div>

      <span className="sentinel-reticle" aria-hidden="true">
        <svg viewBox="0 0 200 200" fill="none">
          {/* Yellow dashed crosshair arms */}
          <g
            stroke="#f4ed15"
            strokeWidth="2.4"
            strokeDasharray="7 6"
            strokeLinecap="butt"
          >
            <line x1="100" y1="8" x2="100" y2="84" />
            <line x1="100" y1="116" x2="100" y2="192" />
            <line x1="8" y1="100" x2="84" y2="100" />
            <line x1="116" y1="100" x2="192" y2="100" />
          </g>

          {/* Solid yellow centre plus */}
          <g stroke="#f4ed15" strokeWidth="3" strokeLinecap="square">
            <line x1="100" y1="91" x2="100" y2="109" />
            <line x1="91" y1="100" x2="109" y2="100" />
          </g>

          {/* Four white square brackets framing the centre */}
          <g
            stroke="#ffffff"
            strokeWidth="3.2"
            strokeLinecap="butt"
            strokeLinejoin="miter"
          >
            <path d="M60 50 H46 V82 H60" />
            <path d="M140 50 H154 V82 H140" />
            <path d="M60 150 H46 V118 H60" />
            <path d="M140 150 H154 V118 H140" />
          </g>
        </svg>
      </span>
    </section>
    </>
  );
}
