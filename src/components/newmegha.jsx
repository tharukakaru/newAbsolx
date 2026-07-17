import plusJakartaSans from "../assets/fonts/PlusJakartaSans[wght].ttf";
import interFont from "../assets/fonts/Inter.ttf";
import yapariRegular from "../assets/fonts/YapariTrial-Regular.ttf";
import strikerImage from "../assets/STRIKER_without_bg 2 2.png";
import rakhaImage from "../assets/RAKHA 1X.png";
import talosImage from "../assets/TALOS 1X.png";
import ravenImage from "../assets/RAVENA 001.png";
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

const rakhaSpecs = [
  {
    kind: "single",
    label: "Class",
    value: "MEGHA",
    megha: true,
  },
  {
    kind: "single",
    label: "Endurance",
    value: "240 min (cruise)",
  },
  {
    kind: "split",
    cells: [
      {
        label: "Range",
        value: "27.9 miles (45 km)",
      },
      {
        label: "C-Speed",
        value: "60–70 km/h",
      },
    ],
  },
  {
    kind: "single",
    label: "Payload",
    value: "EO/IR",
  },
  {
    kind: "single",
    label: "Weight (With Batteries)",
    value: "8.8 lbs (4 kg)",
  },
];

const rakhaDescriptionParagraphs = [
  "The whole system fits into two backpacks. Two people carry it, assemble it, and hand-launch it in under ten minutes. No runway, no launcher, no ground crew. It lands on its belly, packs away, and goes again.",
  "In the air it holds station for three and a half hours at up to 2000 m — high enough to be neither seen nor heard while it watches, streaming live imagery straight into ARC OS. Radio control covers 50 km; under HYENA autonomy it operates out to 500 km and keeps flying with GPS fully jammed, navigating by camera and terrain reference alone.",
];

const rakhaCapabilityTags = [
  "ISR",
  "One-way Strike",
  "Disaster Response",
  "Swarm",
];

const rakhaMissionNote =
  "RAKHA 1X is not only a military aircraft. In disaster response it maps flood extent, locates survivors, and tracks wildfires — launched from the roadside, minutes after arriving, when minutes are all that matter.";

const talosSpecs = [
  {
    kind: "single",
    label: "Class",
    value: "MEGHA",
    megha: true,
  },
  {
    kind: "single",
    label: "Endurance",
    value: "4–6 hrs (cruise)",
  },
  {
    kind: "split",
    cells: [
      {
        label: "Range",
        value: "15.5 miles (25 km)",
      },
      {
        label: "C-Speed",
        value: "60–70 km/h",
      },
    ],
  },
  {
    kind: "single",
    label: "Payload",
    value: "EO/IR · 8× Gimbal · HYENA AI Units · Custom Head",
  },
  {
    kind: "single",
    label: "Weight (Dual Batteries)",
    value: "55 lbs (25 kg)",
  },
];

const talosDescriptionParagraphs = [
  "TALOS 1X VTOL is the long-endurance eye in the sky built to stay up and stay out.",
  "It is a tiltrotor: it lifts off vertically from a field, a rooftop, or a hilltop, tilts its rotors forward, and flies on the wing with fixed-wing efficiency. No runway, no launcher, no recovery net. It is purpose-designed for ship-deck operations — a confined vertical footprint means it launches and recovers from a patrol boat in conditions where fixed-wing UAVs cannot operate at all.",
  "Six hours aloft and 180 to 500 km of reach under HYENA autonomy, far past the 50 km radio horizon. Over open water, where there are no landmarks and GPS is easily denied, HYENA holds the flight path on visual and inertial reference alone.",
];

const talosCapabilityTags = [
  "ISR",
  "Maritime Patrol",
  "Border Patrol",
  "Search & Rescue",
  "Swarm",
];

const talosMissionNote =
  "For border and maritime patrol it runs autonomously on schedule — set the route once and it flies recurring long-range patrols along a coastline or exclusion zone, sortie after sortie, reporting straight into ARC OS. For search and rescue it sweeps in hours what would take ground teams days, finds people lost at sea or in the mountains, and stays overhead until help arrives.";

const ravenSpecs = [
  {
    kind: "single",
    label: "Class",
    value: "MEGHA",
    megha: true,
  },
  {
    kind: "single",
    label: "Endurance",
    value: "2 hrs (cruise)",
  },
  {
    kind: "split",
    cells: [
      {
        label: "Range",
        value: "15 km",
      },
      {
        label: "C-Speed",
        value: "170–250 km/h",
      },
    ],
  },
  {
    kind: "single",
    label: "Payload",
    value: "EO/IR · HYENA AI Units · Custom Head",
  },
  {
    kind: "single",
    label: "Weight (Dual Batteries)",
    value: "1.7–2 kg",
  },
];

const ravenDescriptionParagraphs = [
  "RAVEN 001 is deliberately short-legged, and that is the point. It is not a deep-strike aircraft; it belongs to the people on the ground.",
  "The whole system fits in one backpack and weighs under two kilograms. One soldier carries it, one soldier hand-launches it, and it is airborne in under five minutes. Nothing to set up, nothing to leave behind.",
  "It loiters for two hours at 500 to 1,000 m — quiet, small, hard to see — feeding live imagery back to the team that owns it. The 15 km link is short on purpose: it keeps the aircraft organic to the unit on the ground rather than borrowed from a higher headquarters. RAVEN is built for the sharp end — surgical strike teams, ambush groups, reconnaissance patrols. Their own eyes, their own timing, no request chain.",
];

const ravenCapabilityTags = [
  "Loitering Striker",
  "Close ISR",
  "Small-Unit Support",
  "One-way Striker",
  "Swarm",
];

const ravenMissionNote =
  "HYENA keeps it flying and on task in jammed airspace, navigating visually when GPS is denied. Every engagement stays under human command: the operator identifies, decides, and authorizes. The aircraft executes.";

export default function NewMegha() {
  return (
    <>
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
          --x-striker-desc-line-height: clamp(32rem, 95vh, 70rem);
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
          overflow: visible;
        }

        .x-striker-aircraft-stage__image {
          display: block;
          width: clamp(46rem, 55vw, 65rem);
          max-width: none;
          max-height: clamp(30rem, 60vh, 48rem);
          height: auto;
          margin-inline: 0 auto;
          object-fit: contain;
          transform: translateX(clamp(-10rem, -11vw, -7rem));
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
        
        .x-striker-specs,
        .x-striker-tags {
        margin-inline-start: clamp(4rem, 8vw, 8rem);
        }

        .x-striker-desc {
          position: relative;
          align-self: start;
          min-width: 0;
          margin-block-start: clamp(7.75rem, 12vh, 11rem);
          margin-inline-start: clamp(-4.5rem, -5.5vw, -2rem);
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
          font-size: clamp(1rem, 1.2vw, 1.25rem);
          font-weight: 400;
          line-height: 1.35;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.96);
        }

        .x-striker-desc__copy + .x-striker-desc__copy {
          margin-block-start: clamp(0.75rem, 1.4vh, 1.125rem);
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
            width: clamp(18rem, 92vw, 31rem);
            margin-inline: auto;
            transform: none;
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

        .x-striker-autonomy,
        .x-striker-autonomy * {
          box-sizing: border-box;
        }

        .x-striker-autonomy {
          width: 100%;
          min-height: clamp(20rem, 41.21vh, 26.375rem);
          background:
            linear-gradient(
              180deg,
              rgba(0, 0, 1, 0) calc(100% - clamp(4rem, 10vh, 7rem)),
              #000001 100%
            ),
            linear-gradient(
              90deg,
              #080c17 0%,
              #04060a 42%,
              #04060a 58%,
              #0a1120 100%
            );
          color: #ffffff;
          overflow-x: hidden;
        }

        .x-striker-autonomy__rail {
          position: relative;
          width: min(100%, 90rem);
          min-height: inherit;
          margin-inline: auto;
        }

        .x-striker-autonomy__rail::before {
          content: "";
          position: absolute;
          inset-block: 0;
          left: clamp(1.5rem, 3vw, 2.75rem);
          width: 0.0625rem;
          background: rgba(255, 255, 255, 0.55);
          pointer-events: none;
        }

        .x-striker-autonomy__inner {
          width: min(100%, 85rem);
          margin-inline: auto;
          padding-inline: clamp(1.5rem, 4vw, 4rem);
          padding-block:
            clamp(2.75rem, 6vh, 4.5rem)
            clamp(3rem, 7vh, 5rem);
        }

        .x-striker-autonomy__copy {
          max-width: 85rem;
          margin: 0;
          font-family: "Inter", sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: clamp(0.78rem, 1.1vw, 1.05rem);
          line-height: 1.15;
          letter-spacing: 0;
          text-align: left;
          text-transform: uppercase;
          color: #ffffff;
        }

        .x-striker-autonomy__copy + .x-striker-autonomy__copy {
          margin-block-start: clamp(0.3rem, 0.7vh, 0.55rem);
        }

        .sr-only {
          position: absolute;
          width: 0.0625rem;
          height: 0.0625rem;
          padding: 0;
          margin: -0.0625rem;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }

        @media (max-width: 64rem) {
          .x-striker-autonomy__inner {
            padding-inline: clamp(1.25rem, 4vw, 2.5rem);
          }
        }

        @media (max-width: 48rem) {
          .x-striker-autonomy {
            min-height: auto;
          }

          .x-striker-autonomy__inner {
            padding-inline: clamp(1.25rem, 5vw, 2rem);
            padding-block: clamp(2.5rem, 8vw, 3.5rem);
          }

          .x-striker-autonomy__copy {
            font-size: clamp(0.74rem, 2.8vw, 0.9rem);
            line-height: 1.25;
          }
        }

        .rakha-section,
        .rakha-section * {
          box-sizing: border-box;
        }

        .rakha-section {
          --x-striker-content-inset: clamp(0.75rem, 1.5vw, 1.5rem);
          width: 100%;
          min-height: clamp(46rem, 86vh, 58rem);
          overflow: hidden;
          color: #ffffff;
          background:
            linear-gradient(
              180deg,
              #000001 0%,
              rgba(0, 0, 1, 0) clamp(4rem, 12vh, 8rem)
            ),
            radial-gradient(
              ellipse 30% 52% at 0% 100%,
              rgba(86, 73, 33, 0.92) 0%,
              rgba(86, 73, 33, 0.5) 38%,
              rgba(86, 73, 33, 0.18) 68%,
              transparent 100%
            ),
            radial-gradient(
              ellipse 30% 42% at 100% 55%,
              rgba(53, 63, 138, 0.95) 0%,
              rgba(53, 63, 138, 0.55) 36%,
              rgba(53, 63, 138, 0.2) 66%,
              transparent 100%
            ),
            #000001;
        }

        .rakha-section__container {
          position: relative;
          width: min(100%, 90rem);
          min-height: inherit;
          margin-inline: auto;
          padding-inline: clamp(1.5rem, 3vw, 2.75rem);
          padding-block:
            clamp(0.4rem, 0.5vh, 0.5rem)
            clamp(2.0rem, 5vh, 3rem);
        }

        .rakha-section__container::before {
          content: "";
          position: absolute;
          inset-block: 0;
          left: clamp(1.5rem, 3vw, 2.75rem);
          width: 0.0625rem;
          background: rgba(255, 255, 255, 0.55);
          pointer-events: none;
        }

        .rakha-section__content {
          position: relative;
          display: grid;
          grid-template-columns:
            minmax(0, 1.35fr)
            minmax(23rem, 0.85fr);
          min-width: 0;
          padding-inline-start: var(--x-striker-content-inset);
          
        }

        .rakha-section__rail-copy {
          position: absolute;
          left: -2.25rem;
          top: clamp(1rem, 3vh, 2rem);
          font-family: "Inter", sans-serif;
          font-size: clamp(0.7rem, 0.9vw, 0.9rem);
          font-weight: 600;
          line-height: 1;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          white-space: nowrap;
          writing-mode: vertical-rl;
          transform: rotate(180deg);
          color: rgba(255, 255, 255, 0.42);
        }

        .rakha-profile {
          min-width: 0;
          padding-inline-end: clamp(1rem, 2vw, 2rem);
          transform: translateY(-9rem);
        }

        .rakha-aircraft-stage {
          display: grid;
          grid-template-columns:
            minmax(7rem, 1fr)
            minmax(17rem, 1.8fr)
            minmax(5rem, 0.75fr);
          align-items: start;
          width: 100%;
          min-width: 0;
        }

        .rakha-aircraft-stage__name {
          grid-column: 1;
          grid-row: 1;
          display: flex;
          align-items: center;
          justify-self: stretch;
          gap: clamp(0.35rem, 0.7vw, 0.6rem);
          margin: 0;
          padding-block-start: clamp(3.5rem, 7vh, 5.5rem);
          font-family: "Inter", sans-serif;
          font-size: clamp(1.45rem, 2vw, 2.625rem);
          font-style: normal;
          font-weight: 800;
          line-height: 1;
          white-space: nowrap;
          color: #ffffff;
          transform: translateY(5rem);
        }

        .rakha-aircraft-stage__name::before {
          content: "";
          flex: 1 1 auto;
          height: 0.0625rem;
          margin-inline-start: calc(0rem - var(--x-striker-content-inset));
          background: rgba(255, 255, 255, 0.75);
          pointer-events: none;
        }

        .rakha-aircraft-stage__figure {
          grid-column: 2;
          grid-row: 1;
          width: 100%;
          min-width: 0;
          margin: 0;
        }

        .rakha-aircraft-stage__image {
          display: block;
          width: min(100%, clamp(17rem, 27vw, 27rem));
          max-height: clamp(18rem, 36vh, 25rem);
          height: auto;
          margin-inline: auto;
          object-fit: contain;
          user-select: none;
          filter: drop-shadow(0 0.6rem 1.2rem rgba(0, 0, 0, 0.55));
          width: clamp(58rem, 10vw, 61rem);
          max-width: none;
          max-height: none;
          transform: translate(-20rem, 9rem);
        }

        .rakha-specs {
          width: min(100%, clamp(22rem, 39vw, 36rem));
          margin-block-start: clamp(1.5rem, 3.5vh, 2.75rem);
          margin-inline-start: clamp(4rem, 8vw, 8rem);
        }

        .rakha-specs__row {
          padding-block:
            clamp(0.5rem, 1vh, 0.75rem)
            clamp(0.55rem, 1.1vh, 0.85rem);
          border-block-end: 0.0625rem solid rgba(255, 255, 255, 0.72);
        }

        .rakha-specs__row:last-child {
          border-block-end: 0;
        }

        .rakha-specs__row--split {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: clamp(1rem, 2.5vw, 3rem);
        }

        .rakha-specs__label {
          margin: 0 0 0.3rem;
          font-family: "Inter", sans-serif;
          font-size: clamp(0.65rem, 0.75vw, 1.125rem);
          font-weight: 700;
          line-height: 1.2;
          text-transform: uppercase;
          color: #ffffff;
        }

        .rakha-specs__value {
          margin: 0;
          font-family: "Inter", sans-serif;
          font-size: clamp(0.85rem, 1vw, 1.15rem);
          font-weight: 400;
          line-height: 1.3;
          color: rgba(255, 255, 255, 0.95);
        }

        .rakha-specs__value--megha {
          display: inline-flex;
          font-family: "Yapari Trial", sans-serif;
          font-size: clamp(1.15rem, 1.6vw, 1.625rem);
          font-weight: 400;
          line-height: 1;
          letter-spacing: clamp(0.25rem, 0.65vw, 0.56875rem);
          text-transform: uppercase;
          color: #ffffff;
        }

        .rakha-specs__megha-accent {
          color: #e3e41b;
        }

        .rakha-tags {
          display: flex;
          flex-wrap: wrap;
          gap: clamp(0.5rem, 1vw, 1rem);
          margin: clamp(1.75rem, 4vh, 3rem) 0 0;
          margin-inline-start: clamp(4rem, 8vw, 8rem);
          padding: 0;
          list-style: none;
        }

        .rakha-tags__tag {
          padding: 0.25rem 0.65rem;
          border: 0.0625rem solid rgba(255, 255, 255, 0.09);
          border-radius: 0.3rem;
          background: rgba(255, 255, 255, 0.025);
          font-family: "Inter", sans-serif;
          font-size: clamp(0.65rem, 0.8vw, 0.85rem);
          line-height: 1.4;
          color: rgba(255, 255, 255, 0.52);
        }

        .rakha-section__mission-note {
          max-width: clamp(28rem, 48vw, 44rem);
          margin:
            clamp(2.5rem, 5vh, 4rem)
            0
            0
            clamp(1rem, 2vw, 2rem);
          font-family: "Inter", sans-serif;
          font-size: clamp(0.72rem, 0.85vw, 0.9rem);
          font-weight: 400;
          line-height: 1.2;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.88);
        }

        .rakha-desc {
          position: relative;
          align-self: start;
          min-width: 0;
          margin-block-start: clamp(2.75rem, 6vh, 4rem);
          margin-inline-start: clamp(-5rem, -6vw, -3rem);
          padding-inline-start: clamp(1rem, 2vw, 1.5rem);
        }

        .rakha-desc::before {
          content: "";
          position: absolute;
          inset-block-start: 0;
          inset-inline-start: 0;
          width: 0.0625rem;
          height: clamp(34rem, 86vh, 58rem);
          background: rgba(255, 255, 255, 0.75);
        }

        .rakha-desc__connector {
          position: absolute;
          inset-inline-start: auto;
          inset-inline-end: 100%;
          inset-block-start: 0;
          width: clamp(2.75rem, 3.8vw, 4rem);
          height: 0.0625rem;
          background: rgba(255, 255, 255, 0.75);
          transform: rotate(40deg);
          transform-origin: right center;
          pointer-events: none;
        }

        .rakha-desc__copy {
          max-width: 31rem;
          margin: 0;
          font-family: "Inter", sans-serif;
          font-size: clamp(1rem, 1.2vw, 1.25rem);
          font-weight: 400;
          line-height: 1.35;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.96);
        }

        .rakha-desc__copy + .rakha-desc__copy {
          margin-block-start: clamp(0.75rem, 1.4vh, 1.125rem);
        }

        @media (max-width: 64rem) and (min-width: 48rem) {
          .rakha-section__content {
            grid-template-columns: minmax(0, 1.2fr) minmax(19rem, 0.8fr);
          }

          .rakha-aircraft-stage {
            grid-template-columns:
              minmax(5rem, 1fr)
              minmax(13rem, 1.6fr)
              minmax(4rem, 0.75fr);
          }

          .rakha-aircraft-stage__image {
            width: min(100%, clamp(14rem, 24vw, 22rem));
          }

          .rakha-desc {
            margin-block-start: clamp(2.5rem, 5vh, 3.5rem);
            margin-inline-start: clamp(1rem, 2vw, 2rem);
          }

          .rakha-specs {
            width: auto;
            max-width: 100%;
          }
        }

        @media (max-width: 47.999rem) {
          .rakha-section__rail-copy {
            display: none;
          }

          .rakha-section__content {
            grid-template-columns: 1fr;
            row-gap: clamp(2rem, 6vw, 3rem);
          }

          .rakha-profile {
            padding-inline-end: 0;
            transform: none;
          }

          .rakha-aircraft-stage {
            grid-template-columns: 1fr;
            grid-template-rows: auto auto;
            row-gap: clamp(1.5rem, 5vh, 2.5rem);
          }

          .rakha-aircraft-stage__name {
            grid-column: 1;
            grid-row: 1;
            justify-self: start;
            padding-block-start: 0;
            transform: none;
          }

          .rakha-aircraft-stage__figure {
            grid-column: 1;
            grid-row: 2;
          }

          .rakha-aircraft-stage__image {
            width: min(100%, clamp(15rem, 72vw, 22rem));
          }

          .rakha-specs {
            width: auto;
            max-width: 100%;
            margin-inline-start: 0;
          }

          .rakha-tags {
            margin-inline-start: 0;
          }

          .rakha-desc {
            margin: 0;
            padding-inline-start: 0;
            padding-block-start: clamp(1.25rem, 4vw, 1.75rem);
            border-block-start: 0.0625rem solid rgba(255, 255, 255, 0.4);
          }

          .rakha-desc::before,
          .rakha-desc__connector {
            display: none;
          }

          .rakha-section__mission-note {
            max-width: 100%;
            margin-inline-start: 0;
          }
        }

        @media (max-width: 30rem) {
          .rakha-specs__row--split {
            grid-template-columns: 1fr;
          }
        }

        .talos-section,
        .talos-section * {
          box-sizing: border-box;
        }

        .talos-section {
          --x-striker-content-inset: clamp(0.75rem, 1.5vw, 1.5rem);
          width: 100%;
          min-height: clamp(48rem, 92vh, 62rem);
          overflow: hidden;
          color: #ffffff;
          background:
            radial-gradient(
              ellipse 30% 52% at 0% 0%,
              rgba(86, 73, 33, 0.92) 0%,
              rgba(86, 73, 33, 0.5) 38%,
              rgba(86, 73, 33, 0.18) 68%,
              transparent 100%
            ),
            radial-gradient(
              ellipse 58% 34% at 0% 34%,
              rgba(82, 70, 32, 0.5) 0%,
              rgba(82, 70, 32, 0.26) 45%,
              rgba(82, 70, 32, 0.09) 75%,
              transparent 100%
            ),
            radial-gradient(
              ellipse 52% 40% at 0% 86%,
              rgba(52, 62, 136, 0.95) 0%,
              rgba(52, 62, 136, 0.62) 34%,
              rgba(52, 62, 136, 0.28) 62%,
              rgba(52, 62, 136, 0.09) 84%,
              transparent 100%
            ),
            radial-gradient(
              ellipse 68% 46% at 6% 100%,
              rgba(16, 18, 33, 0.85) 0%,
              rgba(16, 18, 33, 0.45) 48%,
              rgba(16, 18, 33, 0.16) 76%,
              transparent 100%
            ),
            linear-gradient(
              90deg,
              #020101 0%,
              #020101 57%,
              #000000 100%
            );
        }

        .talos-section__container {
          position: relative;
          width: min(100%, 90rem);
          min-height: inherit;
          margin-inline: auto;
          padding-inline: clamp(1.5rem, 3vw, 2.75rem);
          padding-block:
            clamp(3.5rem, 7vh, 5rem)
            clamp(4rem, 8vh, 6rem);
        }

        .talos-section__container::before {
          content: "";
          position: absolute;
          inset-block: 0;
          left: clamp(1.5rem, 3vw, 2.75rem);
          width: 0.0625rem;
          background: rgba(255, 255, 255, 0.55);
          pointer-events: none;
        }

        .talos-section__content {
          position: relative;
          display: grid;
          grid-template-columns:
            minmax(0, 1.35fr)
            minmax(23rem, 0.85fr);
          min-width: 0;
          padding-inline-start: var(--x-striker-content-inset);
        }

        .talos-section__rail-copy {
          position: absolute;
          left: -2.25rem;
          top: clamp(1rem, 3vh, 2rem);
          font-family: "Inter", sans-serif;
          font-size: clamp(0.7rem, 0.9vw, 0.9rem);
          font-weight: 600;
          line-height: 1;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          white-space: nowrap;
          writing-mode: vertical-rl;
          transform: rotate(180deg);
          color: rgba(255, 255, 255, 0.45);
        }

        .talos-profile {
          min-width: 0;
          padding-inline-end: clamp(1rem, 2vw, 2rem);
        }

        .talos-aircraft-stage {
          display: grid;
          grid-template-columns:
            minmax(8rem, 1fr)
            minmax(18rem, 1.9fr)
            minmax(5rem, 0.75fr);
          align-items: start;
          width: 100%;
          min-width: 0;
        }

        .talos-aircraft-stage__name {
          grid-column: 1;
          grid-row: 1;
          z-index: 1;
          display: flex;
          align-items: center;
          align-self: start;
          justify-self: stretch;
          gap: clamp(0.35rem, 0.7vw, 0.6rem);
          margin: 0;
          padding-block-start: clamp(1rem, 2.5vh, 2rem);
          font-family: "Inter", sans-serif;
          font-size: clamp(1.45rem, 2vw, 2.625rem);
          font-style: normal;
          font-weight: 700;
          line-height: 1;
          white-space: nowrap;
          color: #ffffff;
        }

        .talos-aircraft-stage__name::before {
          content: "";
          flex: 1 1 auto;
          height: 0.0625rem;
          margin-inline-start: calc(0rem - var(--x-striker-content-inset));
          background: rgba(255, 255, 255, 0.75);
          pointer-events: none;
        }

        .talos-aircraft-stage__type {
          margin-inline-start: clamp(0.25rem, 0.45vw, 0.45rem);
          font-size: 0.42em;
          font-weight: 700;
          line-height: 1;
          letter-spacing: 0.04em;
          align-self: center;
        }

        .talos-aircraft-stage__figure {
          grid-column: 1 / -1;
          grid-row: 1;
          width: 100%;
          min-width: 0;
          margin: 0;
          overflow: visible;
        }

        .talos-aircraft-stage__image {
          display: block;
          width: min(100%, clamp(24rem, 43vw, 40rem));
          max-height: clamp(20rem, 46vh, 32rem);
          height: auto;
          margin-inline: auto;
          object-fit: contain;
          user-select: none;
          filter: drop-shadow(0 0.6rem 1.2rem rgba(0, 0, 0, 0.55));
        }

        .talos-specs {
          max-width: clamp(24rem, 40vw, 38.5rem);
          margin:
            clamp(1.75rem, 4vh, 3rem)
            0
            0
            clamp(3rem, 5vw, 5rem);
        }

        .talos-specs__row {
          padding-block:
            clamp(0.5rem, 1vh, 0.75rem)
            clamp(0.55rem, 1.1vh, 0.85rem);
          border-block-end: 0.0625rem solid rgba(255, 255, 255, 0.72);
        }

        .talos-specs__row:last-child {
          border-block-end: 0;
        }

        .talos-specs__row--split {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: clamp(1rem, 2.5vw, 3rem);
        }

        .talos-specs__label {
          margin: 0 0 0.3rem;
          font-family: "Inter", sans-serif;
          font-size: clamp(0.65rem, 0.75vw, 1.125rem);
          font-weight: 700;
          line-height: 1.2;
          text-transform: uppercase;
          color: #ffffff;
        }

        .talos-specs__value {
          margin: 0;
          font-family: "Inter", sans-serif;
          font-size: clamp(0.85rem, 1vw, 1.15rem);
          font-weight: 400;
          line-height: 1.3;
          color: rgba(255, 255, 255, 0.95);
        }

        .talos-specs__value--megha {
          display: inline-flex;
          font-family: "Yapari Trial", sans-serif;
          font-size: clamp(1.15rem, 1.6vw, 1.625rem);
          font-weight: 400;
          line-height: 1;
          letter-spacing: clamp(0.25rem, 0.65vw, 0.56875rem);
          text-transform: uppercase;
          color: #ffffff;
        }

        .talos-specs__megha-accent {
          color: #e3e41b;
        }

        .talos-tags {
          display: flex;
          flex-wrap: wrap;
          gap: clamp(0.5rem, 1vw, 1rem);
          margin:
            clamp(1.75rem, 4vh, 3rem)
            0
            0
            clamp(0.75rem, 1.5vw, 1.5rem);
          padding: 0;
          list-style: none;
        }

        .talos-tags__tag {
          padding: 0.25rem 0.65rem;
          border: 0.0625rem solid rgba(255, 255, 255, 0.09);
          border-radius: 0.3rem;
          background: rgba(255, 255, 255, 0.025);
          font-family: "Inter", sans-serif;
          font-size: clamp(0.65rem, 0.8vw, 0.85rem);
          line-height: 1.4;
          color: rgba(255, 255, 255, 0.52);
        }

        .talos-section__mission-note {
          max-width: clamp(34rem, 55vw, 52rem);
          margin:
            clamp(4rem, 8vh, 6rem)
            0
            0
            clamp(0.75rem, 1.5vw, 1.5rem);
          font-family: "Inter", sans-serif;
          font-size: clamp(0.78rem, 1vw, 1rem);
          font-weight: 400;
          line-height: 1.2;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.92);
        }

        .talos-desc {
          position: relative;
          align-self: start;
          min-width: 0;
          margin-block-start: clamp(2.75rem, 6vh, 4rem);
          margin-inline-start: clamp(-8rem, -7vw, -4rem);
          padding-inline-start: clamp(1rem, 2vw, 1.5rem);
        }

        .talos-desc::before {
          content: "";
          position: absolute;
          inset-block-start: 0;
          inset-inline-start: 0;
          width: 0.0625rem;
          height: clamp(36rem, 84vh, 58rem);
          background: rgba(255, 255, 255, 0.75);
        }

        .talos-desc__connector {
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

        .talos-desc__copy {
          max-width: 31rem;
          margin: 0;
          font-family: "Inter", sans-serif;
          font-size: clamp(1rem, 1.2vw, 1.25rem);
          font-weight: 400;
          line-height: 1.35;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.96);
        }

        .talos-desc__copy + .talos-desc__copy {
          margin-block-start: clamp(0.75rem, 1.4vh, 1.125rem);
        }

        @media (max-width: 64rem) and (min-width: 48rem) {
          .talos-section__content {
            grid-template-columns: minmax(0, 1.2fr) minmax(19rem, 0.8fr);
          }

          .talos-aircraft-stage {
            grid-template-columns:
              minmax(5.5rem, 1fr)
              minmax(14rem, 1.7fr)
              minmax(4rem, 0.75fr);
          }

          .talos-aircraft-stage__image {
            width: min(100%, clamp(15rem, 26vw, 24rem));
          }

          .talos-desc {
            margin-block-start: clamp(2.5rem, 5vh, 3.5rem);
            margin-inline-start: clamp(1rem, 2vw, 2rem);
          }

          .talos-specs {
            max-width: 100%;
          }
        }

        @media (max-width: 47.999rem) {
          .talos-section__rail-copy {
            display: none;
          }

          .talos-section__content {
            grid-template-columns: 1fr;
            row-gap: clamp(2rem, 6vw, 3rem);
          }

          .talos-profile {
            padding-inline-end: 0;
          }

          .talos-aircraft-stage {
            grid-template-columns: 1fr;
            grid-template-rows: auto auto;
            row-gap: clamp(1.5rem, 5vh, 2.5rem);
          }

          .talos-aircraft-stage__name {
            grid-column: 1;
            grid-row: 1;
            justify-self: start;
            padding-block-start: 0;
          }

          .talos-aircraft-stage__figure {
            grid-column: 1;
            grid-row: 2;
          }

          .talos-aircraft-stage__image {
            width: min(100%, clamp(18rem, 88vw, 29rem));
          }

          .talos-specs,
          .talos-tags,
          .talos-section__mission-note {
            margin-inline-start: 0;
            max-width: 100%;
          }

          .talos-desc {
            margin: 0;
            padding-inline-start: 0;
            padding-block-start: clamp(1.25rem, 4vw, 1.75rem);
            border-block-start: 0.0625rem solid rgba(255, 255, 255, 0.4);
          }

          .talos-desc::before,
          .talos-desc__connector {
            display: none;
          }
        }

        @media (max-width: 30rem) {
          .talos-specs__row--split {
            grid-template-columns: 1fr;
          }
        }

        .raven-section,
        .raven-section * {
          box-sizing: border-box;
        }

        .raven-section {
          --raven-content-inset: clamp(0.75rem, 1.5vw, 1.5rem);
          width: 100%;
          min-height: clamp(46rem, 88vh, 60rem);
          overflow: hidden;
          color: #ffffff;
          background:
            radial-gradient(
              ellipse 42% 60% at 0% 0%,
              rgba(51, 66, 154, 0.95) 0%,
              rgba(51, 66, 154, 0.58) 34%,
              rgba(51, 66, 154, 0.2) 68%,
              transparent 100%
            ),
            radial-gradient(
              ellipse 46% 58% at 100% 100%,
              rgba(82, 69, 31, 0.78) 0%,
              rgba(82, 69, 31, 0.38) 42%,
              rgba(82, 69, 31, 0.12) 72%,
              transparent 100%
            ),
            linear-gradient(
              90deg,
              #050711 0%,
              #020204 48%,
              #020201 72%,
              #070601 100%
            );
        }

        .raven-section__container {
          position: relative;
          width: min(100%, 90rem);
          min-height: inherit;
          margin-inline: auto;
          padding-inline: clamp(1.5rem, 3vw, 2.75rem);
          padding-block:
            clamp(3.5rem, 7vh, 5rem)
            clamp(4rem, 8vh, 6rem);
        }

        .raven-section__container::before {
          content: "";
          position: absolute;
          inset-block: 0;
          left: clamp(1.5rem, 3vw, 2.75rem);
          width: 0.0625rem;
          background: rgba(255, 255, 255, 0.55);
          pointer-events: none;
        }

        .raven-section__content {
          position: relative;
          display: grid;
          grid-template-columns:
            minmax(0, 1.35fr)
            minmax(23rem, 0.85fr);
          min-width: 0;
          padding-inline-start: var(--raven-content-inset);
        }

        .raven-section__rail-copy {
          position: absolute;
          left: -2.25rem;
          top: clamp(1rem, 3vh, 2rem);
          font-family: "Inter", sans-serif;
          font-size: clamp(0.7rem, 0.9vw, 0.9rem);
          font-weight: 600;
          line-height: 1;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          white-space: nowrap;
          writing-mode: vertical-rl;
          transform: rotate(180deg);
          color: rgba(255, 255, 255, 0.45);
        }

        .raven-profile {
          min-width: 0;
          padding-inline-end: clamp(1rem, 2vw, 2rem);
        }

        .raven-aircraft-stage {
          display: grid;
          grid-template-columns:
            minmax(8rem, 1fr)
            minmax(18rem, 1.9fr)
            minmax(5rem, 0.75fr);
          align-items: start;
          width: 100%;
          min-width: 0;
        }

        .raven-aircraft-stage__name {
          grid-column: 1;
          grid-row: 1;
          z-index: 1;
          display: flex;
          align-items: center;
          align-self: start;
          justify-self: stretch;
          gap: clamp(0.35rem, 0.7vw, 0.6rem);
          margin: 0;
          padding-block-start: clamp(1rem, 2.5vh, 2rem);
          font-family: "Inter", sans-serif;
          font-size: clamp(1.45rem, 2vw, 2.625rem);
          font-style: normal;
          font-weight: 700;
          line-height: 1;
          white-space: nowrap;
          color: #ffffff;
        }

        .raven-aircraft-stage__name::before {
          content: "";
          flex: 1 1 auto;
          height: 0.0625rem;
          margin-inline-start: calc(0rem - var(--raven-content-inset));
          background: rgba(255, 255, 255, 0.75);
          pointer-events: none;
        }

        .raven-aircraft-stage__figure {
          grid-column: 1 / -1;
          grid-row: 1;
          width: 100%;
          min-width: 0;
          margin: 0;
          overflow: visible;
        }

        .raven-aircraft-stage__image {
          display: block;
          width: min(100%, clamp(26rem, 45vw, 42rem));
          max-height: clamp(20rem, 46vh, 32rem);
          height: auto;
          margin-inline: auto;
          object-fit: contain;
          user-select: none;
          filter: drop-shadow(0 0.6rem 1.2rem rgba(0, 0, 0, 0.55));
        }

        .raven-specs {
          max-width: clamp(24rem, 40vw, 38.5rem);
          margin:
            clamp(1.75rem, 4vh, 3rem)
            0
            0
            clamp(3rem, 5vw, 5rem);
        }

        .raven-specs__row {
          padding-block:
            clamp(0.5rem, 1vh, 0.75rem)
            clamp(0.55rem, 1.1vh, 0.85rem);
          border-block-end: 0.0625rem solid rgba(255, 255, 255, 0.72);
        }

        .raven-specs__row:last-child {
          border-block-end: 0;
        }

        .raven-specs__row--split {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: clamp(1rem, 2.5vw, 3rem);
        }

        .raven-specs__label {
          margin: 0 0 0.3rem;
          font-family: "Inter", sans-serif;
          font-size: clamp(0.65rem, 0.75vw, 1.125rem);
          font-weight: 700;
          line-height: 1.2;
          text-transform: uppercase;
          color: #ffffff;
        }

        .raven-specs__value {
          margin: 0;
          font-family: "Inter", sans-serif;
          font-size: clamp(0.85rem, 1vw, 1.15rem);
          font-weight: 400;
          line-height: 1.3;
          color: rgba(255, 255, 255, 0.95);
        }

        .raven-specs__value--megha {
          display: inline-flex;
          font-family: "Yapari Trial", sans-serif;
          font-size: clamp(1.15rem, 1.6vw, 1.625rem);
          font-weight: 400;
          line-height: 1;
          letter-spacing: clamp(0.25rem, 0.65vw, 0.56875rem);
          text-transform: uppercase;
          color: #ffffff;
        }

        .raven-specs__megha-accent {
          color: #e3e41b;
        }

        .raven-tags {
          display: flex;
          flex-wrap: wrap;
          gap: clamp(0.5rem, 1vw, 1rem);
          margin:
            clamp(1.75rem, 4vh, 3rem)
            0
            0
            clamp(0.75rem, 1.5vw, 1.5rem);
          padding: 0;
          list-style: none;
        }

        .raven-tags__tag {
          padding: 0.25rem 0.65rem;
          border: 0.0625rem solid rgba(255, 255, 255, 0.09);
          border-radius: 0.3rem;
          background: rgba(255, 255, 255, 0.025);
          font-family: "Inter", sans-serif;
          font-size: clamp(0.65rem, 0.8vw, 0.85rem);
          line-height: 1.4;
          color: rgba(255, 255, 255, 0.52);
        }

        .raven-section__mission-note {
          max-width: clamp(34rem, 55vw, 52rem);
          margin:
            clamp(4rem, 8vh, 6rem)
            0
            0
            clamp(0.75rem, 1.5vw, 1.5rem);
          font-family: "Inter", sans-serif;
          font-size: clamp(0.78rem, 1vw, 1rem);
          font-weight: 400;
          line-height: 1.2;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.92);
        }

        .raven-desc {
          position: relative;
          align-self: start;
          min-width: 0;
          margin-block-start: clamp(2.75rem, 6vh, 4rem);
          margin-inline-start: clamp(-5rem, -4vw, -2.5rem);
          padding-inline-start: clamp(1rem, 2vw, 1.5rem);
        }

        .raven-desc::before {
          content: "";
          position: absolute;
          inset-block-start: 0;
          inset-inline-start: 0;
          width: 0.0625rem;
          height: clamp(34rem, 78vh, 52rem);
          background: rgba(255, 255, 255, 0.75);
        }

        .raven-desc__connector {
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

        .raven-desc__copy {
          max-width: 31rem;
          margin: 0;
          font-family: "Inter", sans-serif;
          font-size: clamp(1rem, 1.2vw, 1.25rem);
          font-weight: 400;
          line-height: 1.35;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.96);
        }

        .raven-desc__copy + .raven-desc__copy {
          margin-block-start: clamp(0.75rem, 1.4vh, 1.125rem);
        }

        @media (max-width: 64rem) and (min-width: 48rem) {
          .raven-section__content {
            grid-template-columns: minmax(0, 1.2fr) minmax(19rem, 0.8fr);
          }

          .raven-aircraft-stage {
            grid-template-columns:
              minmax(5.5rem, 1fr)
              minmax(14rem, 1.7fr)
              minmax(4rem, 0.75fr);
          }

          .raven-aircraft-stage__image {
            width: min(100%, clamp(20rem, 36vw, 30rem));
          }

          .raven-desc {
            margin-block-start: clamp(2.5rem, 5vh, 3.5rem);
            margin-inline-start: clamp(1rem, 2vw, 2rem);
          }

          .raven-specs {
            max-width: 100%;
          }
        }

        @media (max-width: 47.999rem) {
          .raven-section {
            min-height: auto;
          }

          .raven-section__container {
            padding-block:
              clamp(2.5rem, 8vw, 3.5rem)
              clamp(3rem, 9vw, 4.5rem);
          }

          .raven-section__rail-copy {
            display: none;
          }

          .raven-section__content {
            grid-template-columns: 1fr;
            row-gap: clamp(2rem, 6vw, 3rem);
          }

          .raven-profile {
            padding-inline-end: 0;
          }

          .raven-aircraft-stage {
            grid-template-columns: 1fr;
            grid-template-rows: auto auto;
            row-gap: clamp(1.5rem, 5vh, 2.5rem);
          }

          .raven-aircraft-stage__name {
            grid-column: 1;
            grid-row: 1;
            justify-self: start;
            padding-block-start: 0;
          }

          .raven-aircraft-stage__figure {
            grid-column: 1;
            grid-row: 2;
          }

          .raven-aircraft-stage__image {
            width: min(100%, clamp(18rem, 90vw, 31rem));
          }

          .raven-specs,
          .raven-tags,
          .raven-section__mission-note {
            margin-inline-start: 0;
            max-width: 100%;
          }

          .raven-desc {
            margin: 0;
            padding-inline-start: 0;
            padding-block-start: clamp(1.25rem, 4vw, 1.75rem);
            border-block-start: 0.0625rem solid rgba(255, 255, 255, 0.4);
          }

          .raven-desc::before,
          .raven-desc__connector {
            display: none;
          }
        }

        @media (max-width: 30rem) {
          .raven-specs__row--split {
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

    <section
      className="x-striker-autonomy"
      aria-labelledby="x-striker-autonomy-title"
    >
      <div className="x-striker-autonomy__rail">
      <div className="x-striker-autonomy__inner">
        <h2 id="x-striker-autonomy-title" className="sr-only">
          X-Striker autonomous operations
        </h2>

        <p className="x-striker-autonomy__copy">
          There is no pilot and no operator on the sticks. ARC OS flies the
          aircraft and HYENA runs the mission — takeoff, transit, search,
          engagement, return. It navigates visually off terrain and structures,
          so it keeps flying and keeps fighting when GPS is denied and the
          datalink is cut. Through ARC OS, one operator commands a formation of
          them: they split the airspace, share what they see, and fight as one
          team on one screen.
        </p>

        <p className="x-striker-autonomy__copy">
          Weapons release stays under human authority. The aircraft flies,
          finds, and tracks. A human commands the engagement.
        </p>
      </div>
      </div>
    </section>

    <section className="rakha-section" aria-labelledby="rakha-title">
      <div className="rakha-section__container">
        <div className="rakha-section__content">
          <span className="rakha-section__rail-copy" aria-hidden="true">
            SEE FIRST. DECIDE FIRST. ACT FIRST.
          </span>

          <div className="rakha-profile">
            <div className="rakha-aircraft-stage">
              <h2 id="rakha-title" className="rakha-aircraft-stage__name">
                <span>RAKHA 1X</span>
              </h2>

              <figure className="rakha-aircraft-stage__figure">
                <img
                  className="rakha-aircraft-stage__image"
                  src={rakhaImage}
                  alt="RAKHA 1X autonomous aircraft"
                  draggable="false"
                />
              </figure>
            </div>

            <dl className="rakha-specs">
              {rakhaSpecs.map((row) =>
                row.kind === "split" ? (
                  <div
                    className="rakha-specs__row rakha-specs__row--split"
                    key={row.cells[0].label}
                  >
                    {row.cells.map((cell) => (
                      <div className="rakha-specs__cell" key={cell.label}>
                        <dt className="rakha-specs__label">{cell.label}</dt>
                        <dd className="rakha-specs__value">{cell.value}</dd>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="rakha-specs__row" key={row.label}>
                    <dt className="rakha-specs__label">{row.label}</dt>
                    {row.megha ? (
                      <dd className="rakha-specs__value rakha-specs__value--megha">
                        <span>ME</span>
                        <span className="rakha-specs__megha-accent">G</span>
                        <span>HA</span>
                      </dd>
                    ) : (
                      <dd className="rakha-specs__value">{row.value}</dd>
                    )}
                  </div>
                ),
              )}
            </dl>

            <ul className="rakha-tags">
              {rakhaCapabilityTags.map((tag) => (
                <li className="rakha-tags__tag" key={tag}>
                  {tag}
                </li>
              ))}
            </ul>

            <p className="rakha-section__mission-note">{rakhaMissionNote}</p>
          </div>

          <aside className="rakha-desc" aria-label="RAKHA 1X description">
            <span className="rakha-desc__connector" aria-hidden="true" />

            {rakhaDescriptionParagraphs.map((paragraph) => (
              <p className="rakha-desc__copy" key={paragraph}>
                {paragraph}
              </p>
            ))}
          </aside>
        </div>
      </div>
    </section>

    <section className="talos-section" aria-labelledby="talos-title">
      <div className="talos-section__container">
        <div className="talos-section__content">
          <span className="talos-section__rail-copy" aria-hidden="true">
            SEE FIRST. DECIDE FIRST. ACT FIRST.
          </span>

          <div className="talos-profile">
            <div className="talos-aircraft-stage">
              <h2 id="talos-title" className="talos-aircraft-stage__name">
                <span>TALOS 1X</span>
                <span className="talos-aircraft-stage__type">VTOL</span>
              </h2>

              <figure className="talos-aircraft-stage__figure">
                <img
                  className="talos-aircraft-stage__image"
                  src={talosImage}
                  alt="TALOS 1X VTOL tiltrotor surveillance aircraft"
                  draggable="false"
                />
              </figure>
            </div>

            <dl className="talos-specs">
              {talosSpecs.map((row) =>
                row.kind === "split" ? (
                  <div
                    className="talos-specs__row talos-specs__row--split"
                    key={row.cells[0].label}
                  >
                    {row.cells.map((cell) => (
                      <div className="talos-specs__cell" key={cell.label}>
                        <dt className="talos-specs__label">{cell.label}</dt>
                        <dd className="talos-specs__value">{cell.value}</dd>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="talos-specs__row" key={row.label}>
                    <dt className="talos-specs__label">{row.label}</dt>
                    {row.megha ? (
                      <dd className="talos-specs__value talos-specs__value--megha">
                        <span>ME</span>
                        <span className="talos-specs__megha-accent">G</span>
                        <span>HA</span>
                      </dd>
                    ) : (
                      <dd className="talos-specs__value">{row.value}</dd>
                    )}
                  </div>
                ),
              )}
            </dl>

            <ul className="talos-tags">
              {talosCapabilityTags.map((tag) => (
                <li className="talos-tags__tag" key={tag}>
                  {tag}
                </li>
              ))}
            </ul>

            <p className="talos-section__mission-note">{talosMissionNote}</p>
          </div>

          <aside className="talos-desc" aria-label="TALOS 1X VTOL description">
            <span className="talos-desc__connector" aria-hidden="true" />

            {talosDescriptionParagraphs.map((paragraph) => (
              <p className="talos-desc__copy" key={paragraph}>
                {paragraph}
              </p>
            ))}
          </aside>
        </div>
      </div>
    </section>

    <section className="raven-section" aria-labelledby="raven-title">
      <div className="raven-section__container">
        <div className="raven-section__content">
          <span className="raven-section__rail-copy" aria-hidden="true">
            SEE FIRST. DECIDE FIRST. ACT FIRST.
          </span>

          <div className="raven-profile">
            <div className="raven-aircraft-stage">
              <h2 id="raven-title" className="raven-aircraft-stage__name">
                <span>RAVEN 001</span>
              </h2>

              <figure className="raven-aircraft-stage__figure">
                <img
                  className="raven-aircraft-stage__image"
                  src={ravenImage}
                  alt="RAVEN 001 small-unit autonomous aircraft"
                  draggable="false"
                />
              </figure>
            </div>

            <dl className="raven-specs">
              {ravenSpecs.map((row) =>
                row.kind === "split" ? (
                  <div
                    className="raven-specs__row raven-specs__row--split"
                    key={row.cells[0].label}
                  >
                    {row.cells.map((cell) => (
                      <div className="raven-specs__cell" key={cell.label}>
                        <dt className="raven-specs__label">{cell.label}</dt>
                        <dd className="raven-specs__value">{cell.value}</dd>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="raven-specs__row" key={row.label}>
                    <dt className="raven-specs__label">{row.label}</dt>
                    {row.megha ? (
                      <dd className="raven-specs__value raven-specs__value--megha">
                        <span>ME</span>
                        <span className="raven-specs__megha-accent">G</span>
                        <span>HA</span>
                      </dd>
                    ) : (
                      <dd className="raven-specs__value">{row.value}</dd>
                    )}
                  </div>
                ),
              )}
            </dl>

            <ul className="raven-tags">
              {ravenCapabilityTags.map((tag) => (
                <li className="raven-tags__tag" key={tag}>
                  {tag}
                </li>
              ))}
            </ul>

            <p className="raven-section__mission-note">{ravenMissionNote}</p>
          </div>

          <aside className="raven-desc" aria-label="RAVEN 001 description">
            <span className="raven-desc__connector" aria-hidden="true" />

            {ravenDescriptionParagraphs.map((paragraph) => (
              <p className="raven-desc__copy" key={paragraph}>
                {paragraph}
              </p>
            ))}
          </aside>
        </div>
      </div>
    </section>
    </>
  );
}
