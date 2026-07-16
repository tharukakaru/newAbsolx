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
  {
    kind: "single",
    label: "Weight (Dual Batteries)",
    value: "55 lbs (25 kg)",
  },
];

const descriptionParagraphs = [
  "X-Striker is a jet-powered, fully autonomous combat aircraft developed under ABSOL-X program Hangar 18. It is not a scout with a weapon bolted on. It is a fighter, and it flies itself.",
  "Built as a Collaborative Combat Aircraft, it flies alongside crewed fighters and other unmanned systems taking the forward position and extending the reach of the force behind it. It also operates alone. It runs at high subsonic speed today, with the roadmap targeting Mach 1, which is what lets it hold air-to-air engagements against hostile aircraft and drones, and press air-to-surface missions past 1000 km.",
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

        .x-striker-section,
        .x-striker-section * {
          box-sizing: border-box;
        }

        .x-striker-section {
          --x-striker-content-inset: clamp(0.75rem, 1.5vw, 1.5rem);
          --x-striker-desc-line-height: clamp(19rem, 65vh, 40rem);
          width: 100%;
          min-height: max(64rem, 100svh);
          overflow-x: hidden;
          color: #ffffff;
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
              #080c17 0%,
              #04060a 42%,
              #04060a 58%,
              #0a1120 100%
            );
        }

        .x-striker-section__container {
          display: flex;
          flex-direction: column;
          width: min(100%, 90rem);
          min-height: inherit;
          margin-inline: auto;
          padding-inline: clamp(1.5rem, 3vw, 2.75rem);
        }

        .x-striker-section__header {
          display: flex;
          flex: 0 0 auto;
          align-items: center;
          justify-content: center;
          width: 100%;
          min-height: clamp(11.5rem, 17vw, 15.625rem);
          padding-block-start: clamp(2rem, 3.5vw, 3.125rem);
          padding-block-end: clamp(0.75rem, 1.25vw, 1rem);
          padding-inline: clamp(1.25rem, 4vw, 4rem);
        }

        .megha-uas-title {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          column-gap: clamp(1rem, 2.5vw, 2.5rem);
          margin: 0;
          padding-inline-start: clamp(0.55rem, 1.8vw, 1.625rem);
          font-family: "Yapari Trial", sans-serif;
          font-size: clamp(3.25rem, 5.85vw, 5.25rem);
          font-style: normal;
          font-weight: 400;
          line-height: 1;
          letter-spacing: clamp(0.55rem, 1.8vw, 1.625rem);
          text-align: center;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .megha-uas-title__word {
          display: inline-flex;
          align-items: center;
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
          background-image: linear-gradient(90deg, #dadd00 0%, #f0f214 100%);
        }

        .megha-uas-title__rest {
          background-image: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.98) 0%,
            rgba(255, 255, 255, 0.9) 100%
          );
        }

        .x-striker-section__content {
          position: relative;
          display: grid;
          flex: 1 1 auto;
          grid-template-columns: minmax(0, 1.35fr) minmax(23rem, 0.85fr);
          min-width: 0;
          padding-inline-start: var(--x-striker-content-inset);
          padding-block-end: clamp(2rem, 4vh, 3.5rem);
          border-inline-start: 0.0625rem solid rgba(255, 255, 255, 0.55);
          border-block-end: 0.0625rem solid rgba(255, 255, 255, 0.55);
        }

        .x-striker-profile {
          min-width: 0;
          padding-inline-end: clamp(1rem, 2vw, 2rem);
        }

        .x-striker-profile__hangar-title {
          display: block;
          width: clamp(9.5rem, 14vw, 13.5rem);
          height: auto;
          margin: 0 0 clamp(3.5rem, 6vh, 6rem);
          margin-inline-start: calc(0rem - var(--x-striker-content-inset));
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
          grid-row: 1;
          margin: 0;
          padding-block-start: clamp(4.5rem, 9vh, 7rem);
          font-family: "Inter", sans-serif;
          font-size: clamp(1.45rem, 2vw, 2.625rem);
          font-style: normal;
          font-weight: 700;
          line-height: 1;
          white-space: nowrap;
          color: #ffffff;
        }

        .x-striker-aircraft-stage__name {
          grid-column: 1;
          display: flex;
          align-items: center;
          justify-self: stretch;
          gap: clamp(0.35rem, 0.7vw, 0.6rem);
        }

        .x-striker-aircraft-stage__name::before {
          content: "";
          flex: 1 1 auto;
          height: 0.0625rem;
          margin-inline-start: calc(0rem - var(--x-striker-content-inset));
          background: rgba(255, 255, 255, 0.75);
          pointer-events: none;
        }

        .x-striker-aircraft-stage__year {
          grid-column: 3;
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
          width: min(100%, clamp(15rem, 24vw, 24rem));
          max-height: clamp(22rem, 44vh, 34rem);
          height: auto;
          margin-inline: auto;
          object-fit: contain;
          user-select: none;
          filter: drop-shadow(0 0.6rem 1.2rem rgba(0, 0, 0, 0.55));
        }

        .x-striker-specs {
          max-width: clamp(24rem, 40vw, 38.5rem);
          margin: clamp(2rem, 4.5vh, 3.5rem) 0 0;
        }

        .x-striker-specs__row {
          padding-block:
            clamp(0.5rem, 1vh, 0.75rem)
            clamp(0.55rem, 1.1vh, 0.85rem);
          border-block-end: 0.0625rem solid rgba(255, 255, 255, 0.72);
        }

        .x-striker-specs__row:last-child {
          border-block-end: 0;
        }

        .x-striker-specs__row--split {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: clamp(1rem, 2.5vw, 3rem);
        }

        .x-striker-specs__label {
          margin: 0 0 0.3rem;
          font-family: "Inter", sans-serif;
          font-size: clamp(0.65rem, 0.75vw, 1.125rem);
          font-weight: 700;
          line-height: 1.2;
          text-transform: uppercase;
          color: #ffffff;
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
          font-family: "Yapari Trial", sans-serif;
          font-size: clamp(1.15rem, 1.6vw, 1.625rem);
          font-weight: 400;
          line-height: 1;
          letter-spacing: clamp(0.25rem, 0.65vw, 0.56875rem);
          text-transform: uppercase;
        }

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

        .x-striker-desc {
          position: relative;
          align-self: start;
          min-width: 0;
          margin-block-start: clamp(2.75rem, 6vh, 4rem);
          margin-inline-start: clamp(2rem, 4vw, 4.5rem);
          padding-inline-start: clamp(1rem, 2vw, 1.5rem);
        }

        .x-striker-desc::before {
          content: "";
          position: absolute;
          inset-block-start: 0;
          inset-inline-start: 0;
          width: 0.0625rem;
          height: var(--x-striker-desc-line-height);
          background: rgba(255, 255, 255, 0.75);
        }

        .x-striker-desc__connector {
          position: absolute;
          inset-inline-start: auto;
          inset-inline-end: 100%;
          inset-block-start: 0;
          width: clamp(2rem, 2.8vw, 3rem);
          height: 0.0625rem;
          background: rgba(255, 255, 255, 0.75);
          transform: rotate(40deg);
          transform-origin: right center;
          pointer-events: none;
        }

        .x-striker-desc__copy {
          max-width: 31rem;
          margin: 0;
          font-family: "Inter", sans-serif;
          font-size: clamp(0.78rem, 0.9vw, 1rem);
          font-weight: 400;
          line-height: 1.15;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.96);
        }

        .x-striker-desc__copy + .x-striker-desc__copy {
          margin-block-start: clamp(0.25rem, 0.6vh, 0.4rem);
        }

        @media (max-width: 64rem) and (min-width: 48rem) {
          .x-striker-section__content {
            grid-template-columns: minmax(0, 1.2fr) minmax(19rem, 0.8fr);
          }

          .x-striker-aircraft-stage {
            grid-template-columns:
              minmax(5rem, 1fr)
              minmax(12rem, 1.6fr)
              minmax(4.5rem, 1fr);
          }

          .x-striker-desc {
            margin-block-start: clamp(2.5rem, 5vh, 3.5rem);
            margin-inline-start: clamp(1rem, 2vw, 2rem);
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

          .x-striker-section__content {
            grid-template-columns: 1fr;
            row-gap: clamp(2rem, 6vw, 3rem);
          }

          .x-striker-profile {
            padding-inline-end: 0;
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

          .x-striker-specs {
            max-width: 100%;
          }

          .x-striker-desc {
            margin: 0;
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

          .x-striker-specs__row--split {
            grid-template-columns: 1fr;
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
            <img
              className="x-striker-profile__hangar-title"
              src={hangarTitle}
              alt="Hangar 18"
              draggable="false"
            />

            <div className="x-striker-aircraft-stage">
              <h2 className="x-striker-aircraft-stage__name">
                <span>X-Striker</span>
              </h2>
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
                ),
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

          <aside className="x-striker-desc" aria-label="X-Striker description">
            <span className="x-striker-desc__connector" aria-hidden="true" />

            {descriptionParagraphs.map((paragraph) => (
              <p className="x-striker-desc__copy" key={paragraph}>
                {paragraph}
              </p>
            ))}
          </aside>
        </div>
      </div>
    </section>
  );
}
