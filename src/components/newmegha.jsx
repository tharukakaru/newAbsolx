import plusJakartaSans from "../assets/fonts/PlusJakartaSans[wght].ttf";
import interFont from "../assets/fonts/Inter.ttf";
import yapariRegular from "../assets/fonts/YapariTrial-Regular.ttf";
import strikerImage from "../assets/STRIKER_without_bg 2 2.png";
import hangarTitle from "../assets/hangar18.png";

const aircraftSpecs = [
  { kind: "single", label: "Class", value: "MEGHA", megha: true },
  { kind: "single", label: "Endurance", value: "80 min (cruise)" },
  {
    kind: "split",
    cells: [
      { label: "Range", value: "15.5 miles (25 km)" },
      { label: "C-Speed", value: "500–1000 km/h" },
    ],
  },
  { kind: "single", label: "Payload", value: "25 lbs (11 kg)" },
  { kind: "single", label: "Weight (Dual Batteries)", value: "55 lbs (25 kg)" },
];

const descriptionParagraphs = [
  "X-Striker is a jet-powered, fully autonomous combat aircraft developed under ABSOL-X program Hangar 18. It is not a scout with a weapon bolted on. It is a fighter, and it flies itself.",
  "Built as a collaborative combat aircraft, it flies alongside crewed fighters and other unmanned systems, taking the forward position and extending the reach of the force behind it. It also operates alone.",
  "It runs at high subsonic speed today, with the roadmap targeting Mach 1, which is what lets it hold air-to-air engagements against hostile aircraft and drones, and press air-to-surface missions past 1000 km.",
];

const capabilityTags = ["ISR", "Strike", "Air to Air", "SUPER SONIC", "Swarm"];

export default function NewMegha() {
  return (
    <section className="x-striker-section" aria-labelledby="x-striker-title">
      <style>{`
        @font-face {
          font-family: "Plus Jakarta Sans";
          src: url(${plusJakartaSans}) format("truetype");
          font-style: normal;
          font-weight: 200 800;
          font-display: swap;
        }

        @font-face {
          font-family: "Inter";
          src: url(${interFont}) format("truetype");
          font-style: normal;
          font-weight: 100 900;
          font-display: swap;
        }

        @font-face {
          font-family: "Yapari Trial";
          src: url(${yapariRegular}) format("truetype");
          font-style: normal;
          font-weight: 400;
          font-display: swap;
        }

        html {
          font-size: 100%;
        }

        .x-striker-section {
          width: 100%;
          min-height: 64rem;
          min-height: max(64rem, 100svh);
          overflow-x: hidden;
          color: #FFFFFF;
          background:
            radial-gradient(
              ellipse at left center,
              rgba(8, 12, 23, 0.95) 0%,
              rgba(8, 12, 23, 0.42) 30%,
              transparent 55%
            ),
            radial-gradient(
              ellipse at right center,
              rgba(10, 17, 32, 0.9) 0%,
              rgba(10, 17, 32, 0.38) 30%,
              transparent 55%
            ),
            linear-gradient(
              90deg,
              #080C17 0%,
              #04060A 42%,
              #04060A 58%,
              #0A1120 100%
            );
        }

        .x-striker-section__container {
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          width: min(100%, 90rem);
          min-height: inherit;
          margin-inline: auto;
          padding-inline: clamp(1.5rem, 3vw, 2.75rem);
        }

        .x-striker-section__header {
          box-sizing: border-box;
          display: flex;
          flex: 0 0 auto;
          align-items: center;
          justify-content: center;
          width: 100%;
          min-height: clamp(11.5rem, 17vw, 15.625rem);
          padding-inline: clamp(1.25rem, 4vw, 4rem);
          padding-block-start: clamp(2rem, 3.5vw, 3.125rem);
          padding-block-end: clamp(0.75rem, 1.25vw, 1rem);
        }

        .megha-uas-title {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          column-gap: clamp(1rem, 2.5vw, 2.5rem);
          margin: 0;
          padding-inline-start: clamp(0.55rem, 1.8vw, 1.625rem);
          font-family: "Yapari Trial", "Plus Jakarta Sans", sans-serif;
          font-size: clamp(3.25rem, 5.85vw, 5.25rem);
          font-style: normal;
          font-weight: 400;
          line-height: 1;
          letter-spacing: clamp(0.55rem, 1.8vw, 1.625rem);
          text-align: center;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .megha-uas-title__me,
        .megha-uas-title__g,
        .megha-uas-title__rest {
          color: transparent;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .megha-uas-title__me {
          background-image: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.28) 0%,
            rgba(255, 255, 255, 0.92) 100%
          );
        }

        .megha-uas-title__g {
          background-image: linear-gradient(90deg, #DADD00 0%, #F0F214 100%);
        }

        .megha-uas-title__word {
          display: inline-flex;
          align-items: center;
        }

        .megha-uas-title__rest {
          background-image: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.98) 0%,
            rgba(255, 255, 255, 0.9) 100%
          );
        }

        .x-striker-section__content {
          display: flex;
          flex: 1 1 auto;
          align-items: stretch;
          min-width: 0;
          min-height: 0;
        }

        .x-striker-profile {
          position: relative;
          width: min(58%, 52rem);
          min-width: 0;
          padding-block-end: clamp(2rem, 4vh, 3.5rem);
        }

        .x-striker-profile__rail {
          position: absolute;
          inset-block: clamp(0.5rem, 1vh, 1rem) 0;
          inset-inline-start: 0;
          width: 0.0625rem;
          background: rgba(255, 255, 255, 0.55);
          pointer-events: none;
        }

        .x-striker-profile__inner {
          min-width: 0;
          padding-inline-start: clamp(0.75rem, 1.5vw, 1.5rem);
        }

        .x-striker-profile__hangar-title {
          display: block;
          width: clamp(9.5rem, 14vw, 13.5rem);
          height: auto;
          margin: 0 0 clamp(3.5rem, 6vh, 6rem);
          object-fit: contain;
          object-position: left center;
          user-select: none;
        }

        .x-striker-aircraft-stage {
          display: grid;
          grid-template-columns:
            minmax(7rem, 1fr)
            minmax(15rem, 1.8fr)
            minmax(6rem, 1fr);
          align-items: start;
          width: 100%;
          min-width: 0;
        }

        .x-striker-aircraft-stage__name,
        .x-striker-aircraft-stage__year {
          margin: 0;
          padding-block-start: clamp(4.5rem, 9vh, 7rem);
          font-family: "Inter", sans-serif;
          font-size: clamp(1.45rem, 2vw, 2.625rem);
          font-style: normal;
          font-weight: 700;
          line-height: 1;
          white-space: nowrap;
          color: #FFFFFF;
          -webkit-text-stroke: 0.015625rem rgba(255, 255, 255, 0.9);
        }

        .x-striker-aircraft-stage__name {
          grid-column: 1;
          grid-row: 1;
          justify-self: center;
        }

        .x-striker-aircraft-stage__year {
          grid-column: 3;
          grid-row: 1;
          justify-self: center;
        }

        .x-striker-aircraft-stage__figure {
          grid-column: 2;
          grid-row: 1;
          width: 100%;
          min-width: 0;
          margin: 0;
        }

        .x-striker-aircraft-stage__image {
          display: block;
          width: min(100%, clamp(16rem, 27vw, 27rem));
          max-height: clamp(22rem, 44vh, 34rem);
          height: auto;
          margin-inline: auto;
          object-fit: contain;
          user-select: none;
          filter: drop-shadow(0 0.6rem 1.2rem rgba(0, 0, 0, 0.55));
        }

        /* ── Specification table ─────────────────────────────── */

        .x-striker-specs {
          margin: clamp(2rem, 4.5vh, 3.5rem) 0 0;
          max-width: clamp(24rem, 40vw, 38.5rem);
        }

        .x-striker-specs__row {
          padding-block: clamp(0.5rem, 1vh, 0.75rem) clamp(0.55rem, 1.1vh, 0.85rem);
          border-block-end: 0.0625rem solid rgba(255, 255, 255, 0.72);
        }

        .x-striker-specs__row:last-child {
          border-block-end: 0;
        }

        .x-striker-specs__row--split {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          gap: clamp(1rem, 2.5vw, 3rem);
        }

        .x-striker-specs__label {
          margin: 0 0 0.3rem;
          font-family: "Inter", sans-serif;
          font-size: clamp(0.65rem, 0.75vw, 1.125rem);
          font-weight: 700;
          line-height: 1.2;
          text-transform: uppercase;
          color: #FFFFFF;
        }

        .x-striker-specs__value {
          margin: 0;
          font-family: "Inter", sans-serif;
          font-size: clamp(0.85rem, 1vw, 1.15rem);
          font-weight: 400;
          line-height: 1.3;
          color: rgba(255, 255, 255, 0.95);
        }

        .x-striker-specs__value--megha {
          font-family: "Yapari Trial", "Plus Jakarta Sans", sans-serif;
          font-size: clamp(1.15rem, 1.6vw, 1.625rem);
          font-weight: 400;
          line-height: 1;
          letter-spacing: clamp(0.25rem, 0.65vw, 0.56875rem);
          text-transform: uppercase;
          color: #FFFFFF;
        }

        /* ── Capability tags ─────────────────────────────────── */

        .x-striker-tags {
          display: flex;
          flex-wrap: wrap;
          gap: clamp(0.5rem, 1vw, 1rem);
          margin: clamp(1.75rem, 4vh, 3rem) 0 0;
          padding: 0;
          list-style: none;
        }

        .x-striker-tags__tag {
          padding: 0.25rem 0.65rem;
          border: 0.0625rem solid rgba(255, 255, 255, 0.09);
          border-radius: 0.3rem;
          background: rgba(255, 255, 255, 0.025);
          font-family: "Inter", sans-serif;
          font-size: clamp(0.65rem, 0.8vw, 0.85rem);
          line-height: 1.4;
          color: rgba(255, 255, 255, 0.52);
        }

        /* ── Right description panel ─────────────────────────── */

        .x-striker-desc {
          position: relative;
          flex: 1 1 auto;
          align-self: flex-start;
          min-width: 0;
          margin-block-start: clamp(9rem, 19vh, 12.5rem);
          margin-inline-start: clamp(2rem, 4vw, 4.5rem);
          padding-inline-start: clamp(1.5rem, 2.4vw, 2.5rem);
        }

        .x-striker-desc::before {
          content: "";
          position: absolute;
          inset-block: 0 clamp(-1rem, -1.5vh, -0.5rem);
          inset-inline-start: 0;
          width: 0.0625rem;
          background: rgba(255, 255, 255, 0.75);
        }

        /* Angled connector leaving the divider's top diagonally up-right. */
        .x-striker-desc__connector {
          position: absolute;
          inset-inline-start: 0;
          inset-block-start: 0;
          width: clamp(2rem, 2.8vw, 3rem);
          height: 0.0625rem;
          background: rgba(255, 255, 255, 0.75);
          transform: rotate(-45deg);
          transform-origin: left center;
        }

        .x-striker-desc__copy {
          margin: 0;
          max-width: 31rem;
          font-family: "Inter", sans-serif;
          font-size: clamp(0.78rem, 0.9vw, 1rem);
          font-weight: 400;
          line-height: 1.15;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.96);
        }

        .x-striker-desc__copy + .x-striker-desc__copy {
          margin-block-start: clamp(0.6rem, 1.2vh, 1rem);
        }

        @media (max-width: 64rem) and (min-width: 48rem) {
          .x-striker-profile {
            width: min(60%, 43rem);
          }

          .x-striker-aircraft-stage {
            grid-template-columns:
              minmax(5rem, 1fr)
              minmax(12rem, 1.6fr)
              minmax(4.5rem, 1fr);
          }

          .x-striker-desc {
            margin-inline-start: clamp(1rem, 2vw, 2rem);
            margin-block-start: clamp(6rem, 14vh, 9rem);
          }

          .x-striker-specs {
            max-width: 100%;
          }
        }

        @media (max-width: 47.999rem) {
          .megha-uas-title {
            font-size: clamp(1.875rem, 9vw, 3.25rem);
            letter-spacing: clamp(0.2rem, 1.7vw, 0.8rem);
            column-gap: clamp(0.55rem, 2.5vw, 1.125rem);
            padding-inline-start: clamp(0.2rem, 1.7vw, 0.8rem);
          }

          .x-striker-profile {
            width: 100%;
          }

          .x-striker-profile__inner {
            padding-inline-start: clamp(0.75rem, 4vw, 1.25rem);
          }

          .x-striker-profile__hangar-title {
            margin-bottom: clamp(2.5rem, 7vh, 4rem);
          }

          .x-striker-aircraft-stage {
            grid-template-columns: 1fr auto;
            grid-template-rows: auto auto;
            row-gap: clamp(1.5rem, 5vh, 2.5rem);
          }

          .x-striker-aircraft-stage__name,
          .x-striker-aircraft-stage__year {
            grid-row: 1;
            padding-block-start: 0;
          }

          .x-striker-aircraft-stage__name {
            grid-column: 1;
            justify-self: start;
          }

          .x-striker-aircraft-stage__year {
            grid-column: 2;
            justify-self: end;
          }

          .x-striker-aircraft-stage__figure {
            grid-column: 1 / -1;
            grid-row: 2;
          }

          .x-striker-aircraft-stage__image {
            width: min(100%, clamp(15rem, 72vw, 22rem));
          }

          .x-striker-section__content {
            flex-direction: column;
          }

          .x-striker-specs {
            max-width: 100%;
          }

          .x-striker-desc {
            margin-block-start: clamp(1.5rem, 5vw, 2.5rem);
            margin-inline-start: 0;
            padding-inline-start: 0;
            padding-block-start: clamp(1.25rem, 4vw, 1.75rem);
            border-block-start: 0.0625rem solid rgba(255, 255, 255, 0.4);
          }

          .x-striker-desc::before,
          .x-striker-desc__connector {
            display: none;
          }
        }

        @media (max-width: 30rem) {
          .x-striker-section__header {
            padding-inline: clamp(0.75rem, 3vw, 1.25rem);
            padding-block-start: clamp(2.5rem, 12vw, 3rem);
            padding-block-end: 0;
          }

          .megha-uas-title {
            max-width: 100%;
            flex-wrap: wrap;
            row-gap: 0.35rem;
            white-space: normal;
          }
        }
      `}</style>

      <div className="x-striker-section__container">
        <header className="x-striker-section__header">
          <h1
            id="x-striker-title"
            className="megha-uas-title"
            aria-label="MEGHA UAS"
          >
            <span className="megha-uas-title__word">
              <span className="megha-uas-title__me">ME</span>
              <span className="megha-uas-title__g">G</span>
              <span className="megha-uas-title__rest">HA</span>
            </span>
            <span className="megha-uas-title__rest">UAS</span>
          </h1>
        </header>

        <div className="x-striker-section__content">
          <div className="x-striker-profile">
            <div className="x-striker-profile__rail" aria-hidden="true" />

            <div className="x-striker-profile__inner">
              <img
                className="x-striker-profile__hangar-title"
                src={hangarTitle}
                alt="Hangar 18"
                draggable="false"
              />

              <div className="x-striker-aircraft-stage">
                <h3 className="x-striker-aircraft-stage__name">X-Striker</h3>
                <span className="x-striker-aircraft-stage__year">2028</span>

                <figure className="x-striker-aircraft-stage__figure">
                  <img
                    className="x-striker-aircraft-stage__image"
                    src={strikerImage}
                    alt="X-Striker autonomous aircraft"
                    draggable="false"
                  />
                </figure>
              </div>

              <dl className="x-striker-specs">
                {aircraftSpecs.map((row) =>
                  row.kind === "split" ? (
                    <div
                      className="x-striker-specs__row x-striker-specs__row--split"
                      key={row.cells[0].label}
                    >
                      {row.cells.map((cell) => (
                        <div className="x-striker-specs__cell" key={cell.label}>
                          <dt className="x-striker-specs__label">{cell.label}</dt>
                          <dd className="x-striker-specs__value">{cell.value}</dd>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="x-striker-specs__row" key={row.label}>
                      <dt className="x-striker-specs__label">{row.label}</dt>
                      <dd
                        className={
                          row.megha
                            ? "x-striker-specs__value x-striker-specs__value--megha"
                            : "x-striker-specs__value"
                        }
                      >
                        {row.value}
                      </dd>
                    </div>
                  )
                )}
              </dl>

              <ul className="x-striker-tags">
                {capabilityTags.map((tag) => (
                  <li className="x-striker-tags__tag" key={tag}>
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="x-striker-desc">
            <span className="x-striker-desc__connector" aria-hidden="true" />
            {descriptionParagraphs.map((paragraph) => (
              <p className="x-striker-desc__copy" key={paragraph.slice(0, 24)}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
