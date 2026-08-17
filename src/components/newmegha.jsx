import MeghaAircraftContent from "./MeghaAircraftContent";
import SourceCodeProRegular from "../assets/fonts/SourceCodePro-Regular.otf";
import plusJakartaSans from "../assets/fonts/PlusJakartaSans[wght].ttf";
import interFont from "../assets/fonts/Inter.ttf";
import yapariRegular from "../assets/fonts/YapariTrial-Regular.ttf";
import yapariBold from "../assets/fonts/YapariTrial-Bold.ttf";
import strikerImage from "../assets/STRIKER_without_bg 2 2.png";
import rakhaImage from "../assets/RAKHA 1X.png";
import talosImage from "../assets/TALOS 1X.png";
import ravenImage from "../assets/RAVENA 001.png";
import aresImage from "../assets/ARES X 001.png";
import dasisImage from "../assets/Dasis001.png";

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
  "Built as a Collaborative Combat Aircraft, it flies alongside crewed fighters and other unmanned systems. Taking the forward position and extending the reach of the force behind it, it also operates alone. It runs at high subsonic speed today, with the roadmap targeting Mach 1, which is what lets it hold air-to-air engagements against hostile aircraft and drones, and press air-to-surface missions past 1000 km.",
];

const capabilityTags = [
  "ISR",
  "Strike",
  "Air to Air",
  "Super Sonic",
  "Swarm",
];

const xStrikerFooterParagraphs = [
  "There is no pilot and no operator on the sticks. ARC OS flies the aircraft and HYENA runs the mission — takeoff, transit, search, engagement, return. It navigates visually off terrain and structures, so it keeps flying and keeps fighting when GPS is denied and the datalink is cut. Through ARC OS, one operator commands a formation of them: they split the airspace, share what they see, and fight as one team on one screen.",
  "Weapons release stays under human authority. The aircraft flies, finds, and tracks. A human commands the engagement.",
];

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
        value: "60-70 km/h",
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
  "One way Strike",
  "Disaster Response",
  "Swarm",
];

const rakhaMissionNote = (
  <>
    <strong>RAKHA 1X</strong> is not only a military aircraft. In disaster
    response it maps flood extent, locates survivors, and tracks wildfires
    launched from the roadside, minutes after arriving, when minutes are all
    that matter
  </>
);

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
        value: "60-70 km/h",
      },
    ],
  },
  {
    kind: "single",
    label: "Payload",
    value: "EO/IR | 8x Gimble | HYENA AI units | Custom Head",
  },
  {
    kind: "single",
    label: "Weight (Dual Batteries)",
    value: "55 lbs (25 kg)",
  },
];

const talosDescriptionParagraphs = [
  "TALOS 1X VTOL is the long-endurance eye in the sky built to stay up and stay out. It is a tiltrotor: it lifts off vertically from a field, a rooftop, or a hilltop, tilts its rotors forward, and flies on the wing with fixed-wing efficiency. No runway, no launcher, no recovery net. It is purpose-designed for ship-deck operations a confined vertical footprint means it launches and recovers from a patrol boat in conditions where fixed-wing UAVs cannot operate at all. Six hours aloft and 180 to 500 km of reach under HYENA autonomy, far past the 50 km radio horizon, over open water, where there are no landmarks and GPS is easily denied, HYENA holds the flight path on visual and inertial reference alone.",
];

const talosCapabilityTags = [
  "ISR",
  "Maritime Patrol",
  "Border Patrol",
  "Search & Rescue",
  "Swarm",
];

const talosMissionNote =
  "For border and maritime patrol it runs autonomously on schedule set the route once and it flies recurring long-range patrols along a coastline or exclusion zone, sortie after sortie, reporting straight into ARC OS. For search and rescue it sweeps in hours what would take ground teams days, finds people lost at sea or in the mountains, and stays overhead until help arrives";

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
        value: "170-250 km/h",
      },
    ],
  },
  {
    kind: "single",
    label: "Payload",
    value: "EO/IR HYENA AI units / Custom Head",
  },
  {
    kind: "single",
    label: "Weight (Dual Batteries)",
    value: "1.7-2 kg",
  },
];

const ravenDescriptionParagraphs = [
  "RAVEN 001 is deliberately short-legged, and that is the point. It is not a deep-strike aircraft it belongs to the people on the ground. The whole system fits in one backpack and weighs under two kilograms. One soldier carries it, one soldier hand-launches it, and it is airborne in under five minutes. Nothing to set up, nothing to leave behind. It loiters for two hours at 500 to 1,000 m quiet, small, hard to see feeding live imagery back to the team that owns it. The 15 km link is short on purpose: it keeps the aircraft organic to the unit on the ground rather than borrowed from a higher headquarters. RAVEN is built for the sharp end surgical strike teams, ambush groups, reconnaissance patrols. Their own eyes, their own timing, no request chain.",
];

const ravenCapabilityTags = [
  "Loitering Striker",
  "Close ISR",
  "Small-Unit Support",
  "One-way striker",
  "Swarm",
];

const ravenMissionNote =
  "HYENA keeps it flying and on task in jammed airspace, navigating visually when GPS is denied. Every engagement stays under human command: the operator identifies, decides, and authorizes. The aircraft executes.";

const aresSpecs = [
  {
    kind: "single",
    label: "Class",
    value: "MEGHA",
    megha: true,
  },
  {
    kind: "single",
    label: "Endurance",
    value: "15 min",
  },
  {
    kind: "single",
    label: "Range",
    value: "Autonomous · point defence",
  },
  {
    kind: "single",
    label: "Payload",
    value: "25 lbs (11 kg)",
  },
  {
    kind: "single",
    label: "Weight (Dual Batteries)",
    value: "55 lbs (25 kg)",
  },
];

const aresDescriptionParagraphs = [
  "FENRIR 002 is an interceptor. It has one job bringing down hostile drones and it is built for nothing else. It sits in its case, ready, at the position it defends: a forward base, a radar site, a command post, a convoy halt. No crew standing by. When the SENTINEL radar mesh detects a hostile UAV and ARC OS confirms the track, FENRIR launches within seconds climbing before an operator could have reacted. From that moment it flies itself. HYENA runs the intercept end to end: it takes the track from the network, closes at 250-300 km/h to a ceiling of 500 m, acquires the target with its own onboard vision, and runs it down. No operator on the sticks, no GPS dependency, no radio link that can be cut.",
];

const aresCapabilityTags = [
  "Counter-UAS",
  "Air Defence",
  "Base Protection",
];

const aresMissionNote =
  "FENRIR exists because of economics. Attacks come from cheap drones launched in numbers, and answering a thousand-dollar threat with a million-dollar missile is a losing exchange no country can sustain. FENRIR is the cheap answer to the cheap threat and it is man-portable, so the protection moves with the force. A drone problem gets a drone answer, in seconds.";

const dasisSpecs = [
  {
    kind: "header",
    value: "MEGHA",
    megha: true,
  },
  { kind: "spacer" },
  { kind: "spacer" },
  {
    kind: "single",
    value: "Autonomous · point defence",
    valueOnly: true,
  },
  {
    kind: "single",
    value: "25 lbs (11 kg)",
    valueOnly: true,
  },
  {
    kind: "single",
    label: "Weight (Dual Batteries)",
    value: "55 lbs (25 kg)",
  },
];

const dasisDescriptionParagraphs = [
  "FENRIR 002 is an interceptor. It has one job bringing down hostile drones and it is built for nothing else. It sits in its case, ready, at the position it defends: a forward base, a radar site, a command post, a convoy halt. No crew standing by. When the SENTINEL radar mesh detects a hostile UAV and ARC OS confirms the track, FENRIR launches within seconds climbing before an operator could have reacted.",
  "From that moment it flies itself. HYENA runs the intercept end to end: it takes the track from the network, closes at 250–300 km/h to a ceiling of 500 m, acquires the target with its own onboard vision, and runs it down. No operator on the sticks, no GPS dependency, no radio link that can be cut.",
];

const dasisCapabilityTags = ["Air Defence", "Base Protection"];

const dasisFooterParagraphs = [
  "FENRIR exists because of economics. Attacks come from cheap drones launched in numbers, and answering a thousand-dollar threat with a million-dollar missile is a losing exchange no country can sustain. FENRIR is the cheap answer to the cheap threat and it is man-portable, so the protection moves with the force.",
  "A drone problem gets a drone answer, in seconds.",
];

const meghaUavs = [
  {
    id: "x-striker",
    titleId: "x-striker-title",
    name: "X-Striker",
    year: "2028",
    image: strikerImage,
    imageAlt: "X-Striker autonomous aircraft",
    specs: aircraftSpecs,
    tags: capabilityTags,
    descriptionParagraphs,
    descriptionLabel: "X-Striker description",
    footerParagraphs: xStrikerFooterParagraphs,
    footerLabel: "X-Striker autonomous operations",
  },
  {
    id: "rakha",
    titleId: "rakha-title",
    name: "RAKHA 1X",
    image: rakhaImage,
    imageAlt: "RAKHA 1X autonomous aircraft",
    specs: rakhaSpecs,
    tags: rakhaCapabilityTags,
    descriptionParagraphs: rakhaDescriptionParagraphs,
    descriptionLabel: "RAKHA 1X description",
    footerParagraphs: [rakhaMissionNote],
    footerLabel: "RAKHA 1X mission note",
  },
  {
    id: "talos",
    titleId: "talos-title",
    name: "TALOS 1X",
    typeLabel: "VTOL",
    image: talosImage,
    imageAlt: "TALOS 1X VTOL tiltrotor surveillance aircraft",
    specs: talosSpecs,
    tags: talosCapabilityTags,
    descriptionParagraphs: talosDescriptionParagraphs,
    descriptionLabel: "TALOS 1X VTOL description",
    footerParagraphs: [talosMissionNote],
    footerLabel: "TALOS 1X VTOL mission note",
  },
  {
    id: "raven",
    titleId: "raven-title",
    name: "RAVEN 002",
    image: ravenImage,
    imageAlt: "RAVEN 002 small-unit autonomous aircraft",
    specs: ravenSpecs,
    tags: ravenCapabilityTags,
    descriptionParagraphs: ravenDescriptionParagraphs,
    descriptionLabel: "RAVEN 002 description",
    footerParagraphs: [ravenMissionNote],
    footerLabel: "RAVEN 002 mission note",
  },
  {
    id: "ares",
    titleId: "ares-title",
    name: "ARES X 003",
    image: aresImage,
    imageAlt: "ARES X 003 autonomous counter-UAS interceptor",
    specs: aresSpecs,
    tags: aresCapabilityTags,
    descriptionParagraphs: aresDescriptionParagraphs,
    descriptionLabel: "ARES X 003 description",
    footerParagraphs: [aresMissionNote],
    footerLabel: "ARES X 003 mission note",
  },
  {
    id: "dasis",
    titleId: "dasis-title",
    name: "DASIS 001",
    image: dasisImage,
    imageAlt: "DASIS 001 autonomous point defence interceptor",
    specs: dasisSpecs,
    tags: dasisCapabilityTags,
    descriptionParagraphs: dasisDescriptionParagraphs,
    descriptionLabel: "DASIS 001 description",
    footerParagraphs: dasisFooterParagraphs,
    footerLabel: "DASIS 001 mission note",
    specsClassName: "x-striker-specs--dasis",
    imageClassName: "x-striker-aircraft-stage__image--dasis",
    stageClassName: "x-striker-aircraft-stage--dasis",
  },
];

export default function NewMegha() {
  return (
    <section className="megha-canvas" aria-labelledby="megha-title">
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

        @font-face {
          font-family: "Yapari Trial";
          src: url(${yapariBold}) format("truetype");
          font-style: normal;
          font-weight: 700;
          font-display: swap;
        }

        @font-face {
          font-family: "Source Code Pro";
          src: url(${SourceCodeProRegular}) format("opentype");
          font-style: normal;
          font-weight: 400;
          font-display: swap;
        }

        html {
          font-size: 100%;
        }

        .megha-canvas,
        .megha-canvas * {
          box-sizing: border-box;
        }

        .megha-canvas {
          --x-striker-content-inset: clamp(0.75rem, 1.5vw, 1.5rem);
          --x-striker-desc-line-height: clamp(28rem, 42vh, 36rem);
          --megha-ellipse-top: clamp(7.5rem, 14vw, 11rem);
          --megha-ellipse-right-y: calc(
            var(--megha-ellipse-top) + 450px + 450px + 340px + 636.5px
          );
          --megha-ellipse-left-y: calc(var(--megha-ellipse-right-y) + 636.5px);
          --megha-ellipse-left-blue-y: calc(
            var(--megha-ellipse-left-y) + 636.5px + 240px + 636.5px
          );
          --megha-ellipse-right-yellow-y: calc(
            var(--megha-ellipse-left-blue-y) + 636.5px
          );
          position: relative;
          isolation: isolate;
          width: 100%;
          min-height: auto;
          overflow-x: hidden;
          color: #ffffff;
          background: #000;
        }

        .megha-canvas::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          background:
            radial-gradient(
              ellipse 570px 900px at -140px calc(var(--megha-ellipse-top) + 450px),
              rgba(77, 121, 234, 0.45) 0%,
              rgba(77, 121, 234, 0.45) 35%,
              transparent 72%
            ),
            radial-gradient(
              ellipse 570px 900px at calc(100% + 140px) calc(var(--megha-ellipse-top) + 450px),
              rgba(77, 121, 234, 0.45) 0%,
              rgba(77, 121, 234, 0.45) 35%,
              transparent 72%
            );
          filter: blur(90px);
        }

        .megha-canvas::after {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          background:
            radial-gradient(
              ellipse 1473px 1273px at calc(100% + 680px) var(--megha-ellipse-right-y),
              #5d6ef3 0%,
              #5d6ef3 38%,
              transparent 72%
            ),
            radial-gradient(
              ellipse 1473px 1273px at -680px var(--megha-ellipse-left-y),
              #f3d05d 0%,
              #f3d05d 38%,
              transparent 72%
            ),
            radial-gradient(
              ellipse 1473px 1273px at -680px var(--megha-ellipse-left-blue-y),
              #5d6ef3 0%,
              #5d6ef3 38%,
              transparent 72%
            ),
            radial-gradient(
              ellipse 1473px 1273px at calc(100% + 680px) var(--megha-ellipse-right-yellow-y),
              #f3d05d 0%,
              #f3d05d 38%,
              transparent 72%
            );
          filter: blur(80px);
        }

        .megha-canvas__container {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          width: min(100%, 90rem);
          min-height: auto;
          margin-inline: auto;
          padding-inline: clamp(1.5rem, 3vw, 2.75rem);
        }

        .megha-canvas__header {
          display: flex;
          flex: 0 0 auto;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          padding-block-start: clamp(2rem, 3.5vw, 3.125rem);
          padding-block-end: clamp(1.25rem, 2.5vw, 2rem);
          padding-inline: clamp(1.25rem, 4vw, 4rem);
        }

        .megha-hero__tagline {
          width: min(48rem, calc(100% - 2rem));
          max-width: 100%;
          margin: clamp(1.1rem, 1.8vw, 1.75rem) auto 0;
          font-family: "Source Code Pro", "SourceCodePro", ui-monospace, monospace;
          font-size: clamp(0.9rem, 1.15vw, 1.25rem);
          font-style: normal;
          font-weight: 400;
          line-height: 1.45;
          letter-spacing: 0.02em;
          text-align: center;
          text-transform: uppercase;
          color: #ffffff;
        }

        .megha-hero__stage {
          position: relative;
          display: flex;
          align-items: stretch;
          justify-content: center;
          width: 100%;
          min-width: 0;
          margin-inline-end: calc(-1 * clamp(0.5rem, 1.5vw, 1.25rem));
          margin-block-end: clamp(2rem, 4vh, 3rem);
        }

        .megha-hero__hangar {
          position: absolute;
          right: 100%;
          left: auto;
          top: 50%;
          z-index: 2;
          display: block;
          width: max-content;
          margin: 0;
          margin-right: clamp(0.35rem, 0.85vw, 0.75rem);
          padding: 0;
          font-family: "Yapari Trial", sans-serif;
          font-size: clamp(1.35rem, 2vw, 2rem);
          font-style: normal;
          font-weight: 600;
          line-height: 1;
          letter-spacing: clamp(0.14rem, 0.45vw, 0.32rem);
          text-transform: uppercase;
          white-space: nowrap;
          writing-mode: vertical-rl;
          transform: translateY(-50%) rotate(180deg);
          color: #ffffff;
          pointer-events: none;
        }

        .megha-hero__hangar-num {
          color: #e3e41b;
        }

        .megha-hero__frame {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          flex: 1 1 auto;
          width: 100%;
          max-width: none;
          min-width: 0;
          min-height: clamp(36rem, 78vh, 58rem);
          margin-inline: auto;
          overflow: visible;
          border: 0.0625rem solid #e3e41b;
          background: transparent;
        }

        .megha-hero__viewport {
          flex: 1 1 auto;
          width: 100%;
          min-width: 0;
          min-height: inherit;
        }

        .megha-hero__caption {
          position: absolute;
          inset-inline: 0;
          inset-block-end: clamp(0.55rem, 1vh, 0.85rem);
          margin: 0;
          font-family: "Source Code Pro", "SourceCodePro", ui-monospace, monospace;
          font-size: clamp(0.5625rem, 0.65vw, 0.6875rem);
          font-style: normal;
          font-weight: 400;
          line-height: 1;
          letter-spacing: 0.08em;
          text-align: center;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.72);
          pointer-events: none;
        }

        .megha-canvas__rail {
          position: relative;
          --megha-rail-margin-width: clamp(2.75rem, 5vw, 4.5rem);
          padding-inline-start: var(--x-striker-content-inset);
        }

        .megha-canvas__rail-copy-group {
          position: absolute;
          inset-block: 0;
          inset-inline-start: calc(-1 * var(--megha-rail-margin-width));
          z-index: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: var(--megha-rail-margin-width);
          gap: clamp(24rem, 50vh, 40rem);
          pointer-events: none;
        }

        .megha-canvas__rail-copy {
          margin: 0;
          font-family: "Yapari Trial", sans-serif;
          font-size: clamp(1.1rem, 2vw, 1.65rem);
          font-style: normal;
          font-weight: 500;
          line-height: 0.889;
          white-space: nowrap;
          writing-mode: vertical-rl;
          transform: rotate(180deg);
          color: rgba(255, 255, 255, 0.37);
        }

        .megha-canvas__rail-copy:first-child {
          transform: rotate(180deg) translateY(clamp(32rem, 60vh, 56rem));
        }

        .megha-canvas__rail::before {
          content: "";
          position: absolute;
          inset-block: 0;
          inset-inline-start: 0;
          width: 0.0625rem;
          background: rgba(255, 255, 255, 0.55);
          pointer-events: none;
        }

        .megha-uav-list {
          list-style: none;
          margin: 0;
          padding: 0;
          width: 100%;
        }

        .megha-uav-list__item {
          width: 100%;
        }

        .megha-uav-list__item + .megha-uav-list__item {
          margin-block-start: clamp(3rem, 8vh, 6rem);
        }

        .megha-aircraft-section {
          display: flex;
          flex-direction: column;
          gap: clamp(2.5rem, 5vh, 4rem);
          width: 100%;
        }

        .megha-uas-title {
          display: block;
          margin: clamp(2.75rem, 5.5vw, 4.5rem) 0 0;
          font-family: "Yapari Trial", sans-serif;
          font-size: clamp(4rem, 8.5vw, 7.5rem);
          font-style: normal;
          font-weight: 400;
          line-height: 1;
          letter-spacing: 20px;
          text-align: center;
          text-transform: uppercase;
          white-space: nowrap;
          color: #ffffff;
        }

        .megha-uas-title__me {
          display: inline-block;
          background: linear-gradient(90deg, #2a2a2a 0%, #ffffff 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
        }

        .megha-uas-title__g {
          color: #e3e41b;
        }

        .x-striker-section__rail {
          position: relative;
          flex: 0 0 auto;
          display: flex;
          flex-direction: column;
          min-width: 0;
          padding-block-end: 0;
        }

        .x-striker-section__rail:not(:has(.x-striker-section__hangar-title)) {
          padding-block-start: clamp(0.35rem, 1vh, 0.75rem);
        }

        .x-striker-section__content {
          position: relative;
          display: grid;
          flex: 0 0 auto;
          grid-template-columns: minmax(0, 1.35fr) minmax(23rem, 0.85fr);
          column-gap: clamp(2rem, 4vw, 3.5rem);
          min-width: 0;
          padding-block-end: 0;
          --aircraft-label-top: calc(clamp(0.85rem, 1.8vh, 1.5rem) + 70px);
          --aircraft-label-bottom: calc(
            var(--aircraft-label-top) + clamp(1.45rem, 2vw, 2.625rem)
          );
        }

        .megha-aircraft-content {
          --x-striker-desc-line-height: clamp(28rem, 42vh, 36rem);
          --megha-aircraft-desc-line-height: var(--x-striker-desc-line-height);
        }

        .x-striker-profile {
          min-width: 0;
          padding-inline-end: clamp(1rem, 2vw, 2rem);
        }

        .x-striker-section__hangar-title {
          margin: clamp(0.15rem, 0.35vw, 0.35rem)
            calc(-1 * var(--x-striker-content-inset))
            100px;
          width: calc(100% + var(--x-striker-content-inset));
          font-family: "Yapari Trial", sans-serif;
          font-size: calc(clamp(1.65rem, 2.45vw, 2.25rem) + 2px);
          font-style: normal;
          font-weight: 600;
          line-height: 1;
          letter-spacing: clamp(0.18rem, 0.55vw, 0.42rem);
          text-align: center;
          text-transform: uppercase;
          color: #ffffff;
        }

        .x-striker-section__hangar-title__one {
          color: #e3e41b;
        }

        .x-striker-aircraft-stage {
          display: grid;
          grid-template-columns:
            auto
            minmax(15rem, 1.8fr)
            auto;
          column-gap: 0;
          row-gap: 0;
          align-items: start;
          width: 100%;
          min-width: 0;
        }

        .x-striker-aircraft-stage__name,
        .x-striker-aircraft-stage__year {
          grid-row: 1;
          align-self: start;
          margin: 0;
          padding-block-start: var(--aircraft-label-top);
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
          justify-self: end;
          gap: clamp(0.35rem, 0.7vw, 0.6rem);
          margin-inline-end: -0.5rem;
        }

        .x-striker-aircraft-stage__name::before {
          content: "";
          flex: 0 0 auto;
          width: calc(80px + var(--x-striker-content-inset));
          height: 0.0625rem;
          margin-inline-start: calc(0rem - var(--x-striker-content-inset));
          background: rgba(255, 255, 255, 0.75);
          pointer-events: none;
        }

        .x-striker-aircraft-stage__year {
          grid-column: 3;
          justify-self: start;
          margin-inline-start: calc(-0.5rem - 270px);
        }

        .x-striker-aircraft-stage__figure {
          grid-column: 2;
          grid-row: 1;
          width: 100%;
          min-width: 0;
          margin: 0;
          padding: 0;
          overflow: visible;
          justify-self: start;
          line-height: 0;
        }

        .x-striker-aircraft-stage__image {
          display: block;
          width: clamp(52rem, 62vw, 72rem);
          max-width: none;
          max-height: clamp(34rem, 68vh, 54rem);
          height: auto;
          margin: 0;
          padding: 0;
          object-fit: contain;
          transform: translateX(calc(clamp(-14rem, -16vw, -10rem) - 100px));
          user-select: none;
          filter: drop-shadow(0 0.6rem 1.2rem rgba(0, 0, 0, 0.55));
        }

        .x-striker-aircraft-stage__image--dasis {
          width: clamp(9rem, 11vw, 12.5rem);
          max-height: clamp(9rem, 11vw, 12.5rem);
          margin: 0;
          transform: none;
        }

        .x-striker-aircraft-stage--dasis {
          grid-template-columns: minmax(0, 1fr);
          grid-template-rows: auto auto;
          align-items: stretch;
        }

        .x-striker-aircraft-stage--dasis .x-striker-aircraft-stage__name {
          grid-column: 1;
          grid-row: 1;
          justify-self: start;
          margin-inline-end: 0;
        }

        .x-striker-aircraft-stage--dasis .x-striker-aircraft-stage__figure {
          grid-column: 1;
          grid-row: 2;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          margin-block-start: clamp(4.5rem, 9vh, 7rem);
          margin-block-end: clamp(1.5rem, 3vh, 2.5rem);
        }

        .x-striker-specs {
          max-width: clamp(22rem, 36vw, 34rem);
          margin: 0;
        }

        .x-striker-specs__row:first-child {
          padding-block-start: 0;
        }

        .x-striker-specs__row {
          padding-block:
            0.98rem
            clamp(0.2rem, 0.4vh, 0.3rem);
          border-block-end: 0.0625rem solid rgba(255, 255, 255, 0.72);
        }

        .x-striker-specs__row:last-child {
          border-block-end: 0;
          padding-block-end: 0;
        }

        .x-striker-specs__row--split {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: clamp(1.25rem, 3vw, 2.5rem);
        }

        .x-striker-specs__label {
          margin: 0 0 0.2rem;
          font-family: "Inter", sans-serif;
          font-size: clamp(0.625rem, 0.72vw, 0.8125rem);
          font-weight: 700;
          line-height: 1.15;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          color: #ffffff;
        }

        .x-striker-specs__value {
          margin: 0;
          font-family: "Inter", sans-serif;
          font-size: clamp(1rem, 1.15vw, 1.25rem);
          font-weight: 400;
          line-height: 1.25;
          color: #ffffff;
        }

        .x-striker-specs__value--megha {
          display: block;
          font-family: "Yapari Trial", sans-serif;
          font-size: clamp(1.35rem, 1.85vw, 1.55rem);
          font-weight: 400;
          line-height: 1;
          letter-spacing: clamp(0.28rem, 0.7vw, 0.5rem);
          text-transform: uppercase;
          color: #ffffff;
        }

        .x-striker-specs__megha-accent {
          color: #ffffff;
        }

        .x-striker-specs--dasis .x-striker-specs__row--header {
          padding-block:
            clamp(0.35rem, 0.6vh, 0.5rem)
            clamp(0.85rem, 1.2vh, 1rem);
        }

        .x-striker-specs--dasis .x-striker-specs__row--header .x-striker-specs__value--megha {
          font-size: clamp(1.35rem, 1.85vw, 1.55rem);
        }

        .x-striker-specs--dasis .x-striker-specs__row--spacer {
          min-height: clamp(2.25rem, 3.5vh, 3rem);
          padding-block: clamp(1.35rem, 2vh, 1.75rem);
        }

        .x-striker-specs--dasis .x-striker-specs__row--value-only .x-striker-specs__label {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }

        .x-striker-specs--dasis .x-striker-specs__row--value-only .x-striker-specs__value {
          font-size: clamp(1rem, 1.15vw, 1.25rem);
        }

        .x-striker-specs--dasis .x-striker-specs__row:last-child {
          border-block-end: 0.0625rem solid rgba(255, 255, 255, 0.72);
          padding-block-end: clamp(0.2rem, 0.4vh, 0.3rem);
        }

        .x-striker-aircraft-stage__type {
          margin-inline-start: clamp(0.25rem, 0.45vw, 0.45rem);
          font-size: 0.42em;
          font-weight: 700;
          line-height: 1;
          letter-spacing: 0.04em;
          align-self: center;
        }


        .megha-aircraft-content__tags {
          display: flex;
          flex-wrap: nowrap;
          align-items: center;
          flex-shrink: 0;
          width: max-content;
          max-width: none;
          gap: clamp(1.1rem, 2vw, 2rem);
          margin:
            clamp(2.25rem, 3.75vh, 3rem)
            0
            clamp(3.5rem, 9vh, 5.5rem);
          padding: 0;
          list-style: none;
          overflow-x: auto;
          scrollbar-width: none;
        }

        .megha-aircraft-content__tags::-webkit-scrollbar {
          display: none;
        }

        .megha-aircraft-content__tags-tag {
          display: inline-flex;
          align-items: center;
          justify-content: flex-start;
          flex: 0 0 auto;
          box-sizing: border-box;
          min-width: 7.25rem;
          width: auto;
          height: 1.875rem;
          padding: 0 0.65rem 0 0.5rem;
          border: 0.0625rem solid #232c36;
          border-radius: 0.5rem;
          background: rgba(14, 18, 22, 0.9);
          font-family: "Inter", sans-serif;
          font-size: clamp(0.95rem, 1.15vw, 1.25rem);
          font-weight: 400;
          line-height: 1;
          color: rgba(147, 161, 173, 0.95);
          white-space: nowrap;
          text-align: left;
        }
        
        .x-striker-specs,
        .megha-aircraft-content__tags {
          margin-inline-start: clamp(4rem, 8vw, 8rem);
        }

        .x-striker-desc {
          position: relative;
          align-self: start;
          min-width: 0;
          margin-block-start: calc(
            var(--aircraft-label-bottom) + clamp(2.5rem, 4vh, 3.5rem)
          );
          margin-inline-start: calc(clamp(-4.5rem, -5.5vw, -2rem) + 45px);
          padding-inline-start: clamp(1rem, 2vw, 1.5rem);
        }

        .megha-aircraft-content__desc-line {
          position: absolute;
          inset-block-start: 0;
          inset-inline-start: 0;
          width: 0.0625rem;
          height: var(--megha-aircraft-desc-line-height, var(--x-striker-desc-line-height));
          background: rgba(255, 255, 255, 0.75);
          pointer-events: none;
        }

        .x-striker-desc__connector {
          position: absolute;
          inset-inline-start: auto;
          inset-inline-end: 100%;
          inset-block-start: 0;
          width: calc(clamp(2rem, 2.8vw, 3rem) + 20px);
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
              auto
              minmax(12rem, 1.6fr)
              auto;
            column-gap: 0;
          }

          .x-striker-desc {
            margin-block-start: calc(
              var(--aircraft-label-bottom) + clamp(2.5rem, 4vh, 3.5rem)
            );
            margin-inline-start: calc(clamp(1rem, 2vw, 2rem) + 45px);
          }

          .x-striker-specs {
            max-width: 100%;
          }
        }

        @media (max-width: 47.999rem) {
          .megha-uas-title {
            font-size: clamp(2.5rem, 12vw, 4.25rem);
            letter-spacing: clamp(8px, 2.8vw, 20px);
          }

          .megha-canvas__rail-copy-group {
            display: none;
          }

          .megha-hero__stage {
            flex-direction: column;
            align-items: stretch;
            padding-inline: 0;
            margin-inline: 0;
            gap: clamp(0.5rem, 2vw, 0.85rem);
          }

          .megha-hero__hangar {
            position: absolute;
            right: auto;
            left: 0;
            top: auto;
            bottom: calc(100% + clamp(0.35rem, 1vw, 0.5rem));
            width: auto;
            margin: 0;
            writing-mode: horizontal-tb;
            transform: none;
            pointer-events: auto;
            font-size: clamp(1.1rem, 4.5vw, 1.45rem);
          }

          .megha-hero__frame {
            min-height: clamp(28rem, 68vh, 42rem);
            margin-inline: 0;
          }

          .megha-hero__tagline {
            width: min(100%, 36rem);
            font-size: clamp(0.8125rem, 3.2vw, 1.05rem);
            line-height: 1.5;
          }

          .x-striker-section__content {
            grid-template-columns: 1fr;
            row-gap: clamp(3.5rem, 8vw, 4.5rem);
          }

          .x-striker-profile {
            padding-inline-end: 0;
          }

          .x-striker-section__hangar-title {
            font-size: calc(clamp(1.35rem, 5.5vw, 1.85rem) + 2px);
            letter-spacing: clamp(0.12rem, 0.45vw, 0.28rem);
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

          .x-striker-aircraft-stage__name::before {
            width: var(--x-striker-content-inset);
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
            width: clamp(20rem, 95vw, 34rem);
            max-height: clamp(22rem, 58vh, 36rem);
            margin: 0;
            padding: 0;
            transform: none;
          }

          .x-striker-aircraft-stage__image--dasis {
            width: clamp(8rem, 28vw, 11rem);
            max-height: clamp(8rem, 28vw, 11rem);
          }

          .x-striker-aircraft-stage--dasis .x-striker-aircraft-stage__figure {
            margin-block-start: clamp(2.5rem, 6vh, 4rem);
            margin-block-end: clamp(1rem, 2.5vh, 1.5rem);
          }

          .x-striker-specs {
            max-width: 100%;
            margin-inline-start: 0;
          }

          .x-striker-desc {
            margin-block-start: clamp(2.5rem, 5vh, 3.5rem);
            margin-inline-start: 45px;
            padding-inline-start: 0;
            padding-block-start: clamp(1.25rem, 4vw, 1.75rem);
            border-block-start: 0.0625rem solid rgba(255, 255, 255, 0.4);
          }

          .megha-aircraft-content__desc-line,
          .x-striker-desc__connector {
            display: none;
          }

          .megha-aircraft-content__tags {
            margin-inline-start: 0;
            max-width: none;
            width: max-content;
            flex-wrap: nowrap;
            overflow-x: auto;
          }
        }

        @media (max-width: 30rem) {
          .megha-canvas__header {
            padding-inline: clamp(0.75rem, 3vw, 1.25rem);
            padding-block-start: clamp(2.5rem, 12vw, 3rem);
            padding-block-end: 0;
          }

          .x-striker-specs__row--split {
            grid-template-columns: 1fr;
          }
        }

        .megha-aircraft-content__footer,
        .megha-aircraft-content__footer * {
          box-sizing: border-box;
        }

        .megha-aircraft-content__footer {
          --megha-aircraft-content-inset: clamp(0.75rem, 1.5vw, 1.5rem);
          --megha-aircraft-footer-offset: clamp(1.5rem, 3vw, 3rem);
          width: 100%;
          margin-block-start: 0;
          padding-block:
            clamp(1.25rem, 2.5vh, 2rem)
            clamp(2rem, 4vh, 3rem);
          color: #ffffff;
          overflow-x: hidden;
        }

        .megha-aircraft-content__footer-inner {
          width: 100%;
        }

        .megha-aircraft-content__footer-copy {
          width: min(62vw, 64rem);
          max-width: 72rem;
          margin: 0;
          margin-inline-start: calc(
            var(--megha-aircraft-content-inset) + var(--megha-aircraft-footer-offset)
          );
          font-family: "Inter", sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: calc(clamp(0.78rem, 1vw, 1rem) + 2px);
          line-height: 1.2;
          letter-spacing: 0;
          text-align: left;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.96);
        }

        .megha-aircraft-content__footer-copy + .megha-aircraft-content__footer-copy {
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
          .megha-aircraft-content__footer {
            padding-inline: 0;
          }
        }

        @media (max-width: 48rem) {
          .megha-aircraft-content__footer {
            padding-block:
              clamp(0.75rem, 2vw, 1.25rem)
              clamp(2rem, 6vw, 2.75rem);
          }

          .megha-aircraft-content__footer-copy {
            width: auto;
            max-width: 100%;
            margin-inline-start: var(--megha-aircraft-content-inset);
            font-size: calc(clamp(0.74rem, 2.8vw, 0.9rem) + 2px);
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
          background: transparent;
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
          top: clamp(5rem, 12vh, 8rem);
          left: calc(0rem - clamp(1.5rem, 2.2vw, 2.2rem));
          z-index: 0;
          font-family: "Yapari Trial", sans-serif;
          font-size: clamp(0.875rem, 1.4vw, 1.25rem);
          font-style: normal;
          font-weight: 600;
          line-height: 0.889;
          text-transform: uppercase;
          white-space: nowrap;
          writing-mode: vertical-rl;
          transform: rotate(180deg);
          color: rgba(255, 255, 255, 0.37);
          pointer-events: none;
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
          width: min(72vw, 72rem);
          max-width: none;
          margin:
            clamp(2.5rem, 5vh, 4rem)
            0
            0
            clamp(1rem, 2vw, 2rem);
          font-family: "Inter", sans-serif;
          font-size: clamp(0.78rem, 1vw, 1rem);
          font-weight: 400;
          line-height: 1.2;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.92);
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
            width: auto;
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
          background: transparent;
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
          top: clamp(5rem, 12vh, 8rem);
          left: calc(0rem - clamp(1.5rem, 2.2vw, 2.2rem));
          z-index: 0;
          font-family: "Yapari Trial", sans-serif;
          font-size: clamp(0.875rem, 1.4vw, 1.25rem);
          font-style: normal;
          font-weight: 600;
          line-height: 0.889;
          text-transform: uppercase;
          white-space: nowrap;
          writing-mode: vertical-rl;
          transform: rotate(180deg);
          color: rgba(255, 255, 255, 0.37);
          pointer-events: none;
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
          width: min(72vw, 72rem);
          max-width: none;
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
            width: auto;
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
          background: transparent;
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
          width: min(72vw, 72rem);
          max-width: none;
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
            width: auto;
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

        .ares-section,
        .ares-section * {
          box-sizing: border-box;
        }

        .ares-section {
          --ares-content-inset: clamp(0.75rem, 1.5vw, 1.5rem);
          width: 100%;
          min-height: clamp(46rem, 88vh, 60rem);
          overflow: hidden;
          color: #ffffff;
          background: transparent;
        }

        .ares-section__container {
          position: relative;
          width: min(100%, 90rem);
          min-height: inherit;
          margin-inline: auto;
          padding-inline: clamp(1.5rem, 3vw, 2.75rem);
          padding-block:
            clamp(3.5rem, 7vh, 5rem)
            clamp(4rem, 8vh, 6rem);
        }

        .ares-section__container::before {
          content: "";
          position: absolute;
          inset-block: 0;
          left: clamp(1.5rem, 3vw, 2.75rem);
          width: 0.0625rem;
          background: rgba(255, 255, 255, 0.55);
          pointer-events: none;
        }

        .ares-section__content {
          position: relative;
          display: grid;
          grid-template-columns:
            minmax(0, 1.35fr)
            minmax(23rem, 0.85fr);
          min-width: 0;
          padding-inline-start: var(--ares-content-inset);
        }

        .ares-section__rail-copy {
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

        .ares-profile {
          min-width: 0;
          padding-inline-end: clamp(1rem, 2vw, 2rem);
        }

        .ares-aircraft-stage {
          display: grid;
          grid-template-columns:
            minmax(8rem, 1fr)
            minmax(18rem, 1.9fr)
            minmax(5rem, 0.75fr);
          align-items: start;
          width: 100%;
          min-width: 0;
        }

        .ares-aircraft-stage__name {
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

        .ares-aircraft-stage__name::before {
          content: "";
          flex: 1 1 auto;
          height: 0.0625rem;
          margin-inline-start: calc(0rem - var(--ares-content-inset));
          background: rgba(255, 255, 255, 0.75);
          pointer-events: none;
        }

        .ares-aircraft-stage__figure {
          grid-column: 1 / -1;
          grid-row: 1;
          width: 100%;
          min-width: 0;
          margin: 0;
          overflow: visible;
        }

        .ares-aircraft-stage__image {
          display: block;
          width: min(100%, clamp(14rem, 24vw, 22rem));
          max-height: clamp(24rem, 50vh, 34rem);
          height: auto;
          margin-inline: auto;
          object-fit: contain;
          user-select: none;
          filter: drop-shadow(0 0.6rem 1.2rem rgba(0, 0, 0, 0.55));
        }

        .ares-specs {
          max-width: clamp(24rem, 40vw, 38.5rem);
          margin:
            clamp(1.75rem, 4vh, 3rem)
            0
            0
            clamp(3rem, 5vw, 5rem);
        }

        .ares-specs__row {
          padding-block:
            clamp(0.5rem, 1vh, 0.75rem)
            clamp(0.55rem, 1.1vh, 0.85rem);
          border-block-end: 0.0625rem solid rgba(255, 255, 255, 0.72);
        }

        .ares-specs__row:last-child {
          border-block-end: 0;
        }

        .ares-specs__label {
          margin: 0 0 0.3rem;
          font-family: "Inter", sans-serif;
          font-size: clamp(0.65rem, 0.75vw, 1.125rem);
          font-weight: 700;
          line-height: 1.2;
          text-transform: uppercase;
          color: #ffffff;
        }

        .ares-specs__value {
          margin: 0;
          font-family: "Inter", sans-serif;
          font-size: clamp(0.85rem, 1vw, 1.15rem);
          font-weight: 400;
          line-height: 1.3;
          color: rgba(255, 255, 255, 0.95);
        }

        .ares-specs__value--megha {
          display: inline-flex;
          font-family: "Yapari Trial", sans-serif;
          font-size: clamp(1.15rem, 1.6vw, 1.625rem);
          font-weight: 400;
          line-height: 1;
          letter-spacing: clamp(0.25rem, 0.65vw, 0.56875rem);
          text-transform: uppercase;
          color: #ffffff;
        }

        .ares-specs__megha-accent {
          color: #e3e41b;
        }

        .ares-tags {
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

        .ares-tags__tag {
          padding: 0.25rem 0.65rem;
          border: 0.0625rem solid rgba(255, 255, 255, 0.09);
          border-radius: 0.3rem;
          background: rgba(255, 255, 255, 0.025);
          font-family: "Inter", sans-serif;
          font-size: clamp(0.65rem, 0.8vw, 0.85rem);
          line-height: 1.4;
          color: rgba(255, 255, 255, 0.52);
        }

        .ares-section__mission-note {
          width: min(72vw, 72rem);
          max-width: none;
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

        .ares-desc {
          position: relative;
          align-self: start;
          min-width: 0;
          margin-block-start: clamp(2.75rem, 6vh, 4rem);
          margin-inline-start: clamp(-5rem, -4vw, -2.5rem);
          padding-inline-start: clamp(1rem, 2vw, 1.5rem);
        }

        .ares-desc::before {
          content: "";
          position: absolute;
          inset-block-start: 0;
          inset-inline-start: 0;
          width: 0.0625rem;
          height: clamp(34rem, 78vh, 52rem);
          background: rgba(255, 255, 255, 0.75);
        }

        .ares-desc__connector {
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

        .ares-desc__copy {
          max-width: 31rem;
          margin: 0;
          font-family: "Inter", sans-serif;
          font-size: clamp(1rem, 1.2vw, 1.25rem);
          font-weight: 400;
          line-height: 1.35;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.96);
        }

        .ares-desc__copy + .ares-desc__copy {
          margin-block-start: clamp(0.75rem, 1.4vh, 1.125rem);
        }

        @media (max-width: 64rem) and (min-width: 48rem) {
          .ares-section__content {
            grid-template-columns: minmax(0, 1.2fr) minmax(19rem, 0.8fr);
          }

          .ares-aircraft-stage {
            grid-template-columns:
              minmax(5.5rem, 1fr)
              minmax(14rem, 1.7fr)
              minmax(4rem, 0.75fr);
          }

          .ares-aircraft-stage__image {
            width: min(100%, clamp(13rem, 22vw, 19rem));
          }

          .ares-desc {
            margin-block-start: clamp(2.5rem, 5vh, 3.5rem);
            margin-inline-start: clamp(1rem, 2vw, 2rem);
          }

          .ares-specs {
            max-width: 100%;
          }
        }

        @media (max-width: 47.999rem) {
          .ares-section {
            min-height: auto;
          }

          .ares-section__container {
            padding-block:
              clamp(2.5rem, 8vw, 3.5rem)
              clamp(3rem, 9vw, 4.5rem);
          }

          .ares-section__rail-copy {
            display: none;
          }

          .ares-section__content {
            grid-template-columns: 1fr;
            row-gap: clamp(2rem, 6vw, 3rem);
          }

          .ares-profile {
            padding-inline-end: 0;
          }

          .ares-aircraft-stage {
            grid-template-columns: 1fr;
            grid-template-rows: auto auto;
            row-gap: clamp(1.5rem, 5vh, 2.5rem);
          }

          .ares-aircraft-stage__name {
            grid-column: 1;
            grid-row: 1;
            justify-self: start;
            padding-block-start: 0;
          }

          .ares-aircraft-stage__figure {
            grid-column: 1;
            grid-row: 2;
          }

          .ares-aircraft-stage__image {
            width: min(100%, clamp(12rem, 62vw, 20rem));
          }

          .ares-specs,
          .ares-tags,
          .ares-section__mission-note {
            width: auto;
            margin-inline-start: 0;
            max-width: 100%;
          }

          .ares-desc {
            margin: 0;
            padding-inline-start: 0;
            padding-block-start: clamp(1.25rem, 4vw, 1.75rem);
            border-block-start: 0.0625rem solid rgba(255, 255, 255, 0.4);
          }

          .ares-desc::before,
          .ares-desc__connector {
            display: none;
          }
        }

        .megha-read-bridge,
        .megha-read-bridge * {
          box-sizing: border-box;
        }

        .megha-read-bridge {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          min-height: clamp(16rem, 34vh, 24rem);
          padding:
            clamp(3rem, 7vh, 5rem)
            clamp(1.5rem, 4vw, 4rem);
          overflow: hidden;
          color: #ffffff;
          background: transparent;
        }

        .megha-read-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: clamp(0.45rem, 0.85vw, 0.75rem);
          max-width: 100%;
          color: #ffffff;
          text-decoration: none;
          outline: none;
        }

        .megha-read-cta__frame {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: clamp(15.5rem, 25vw, 20.5rem);
          min-height: 1.85rem;
          padding: 0.22rem clamp(0.75rem, 1.4vw, 1.1rem);
          border: 0.0625rem solid rgba(255, 255, 255, 0.78);
          isolation: isolate;
          transition:
            border-color 180ms ease,
            background-color 180ms ease;
        }

        .megha-read-cta__frame::before {
          content: none;
        }

        .megha-read-cta__bottom-edge {
          display: block;
          position: absolute;
          inset-inline: -0.0625rem;
          inset-block-end: -0.0625rem;
          z-index: 10;
          height: 0.0625rem;
          background: rgba(255, 255, 255, 0.9);
          box-shadow: 0 0 0.0625rem rgba(255, 255, 255, 0.24);
          pointer-events: none;
          transform: translateZ(0);
        }

        .megha-read-cta__corner {
          position: absolute;
          z-index: 12;
          width: 0.85rem;
          height: 0.4rem;
          pointer-events: none;
          border-color: rgba(255, 255, 255, 0.94);
          border-style: solid;
          transition: border-color 180ms ease;
        }

        .megha-read-cta__corner--tl {
          inset-block-start: -0.125rem;
          inset-inline-start: -0.125rem;
          border-width: 0.125rem 0 0 0.125rem;
        }

        .megha-read-cta__corner--tr {
          inset-block-start: -0.125rem;
          inset-inline-end: -0.125rem;
          border-width: 0.125rem 0.125rem 0 0;
        }

        .megha-read-cta__corner--bl {
          inset-block-end: -0.125rem;
          inset-inline-start: -0.125rem;
          border-width: 0 0 0.125rem 0.125rem;
        }

        .megha-read-cta__corner--br {
          inset-block-end: -0.125rem;
          inset-inline-end: -0.125rem;
          border-width: 0 0.125rem 0.125rem 0;
        }

        .megha-read-cta__label {
          color: #ffffff;
          text-align: center;
          font-family: "Yapari Trial", sans-serif;
          font-size: clamp(0.82rem, 1vw, 1rem);
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          letter-spacing: clamp(0.12rem, 0.45vw, 0.18rem);
          text-transform: uppercase;
          white-space: nowrap;
        }

        .megha-read-cta__chevrons {
          display: inline-flex;
          align-items: center;
          gap: 0;
          font-family: "Inter", sans-serif;
          font-size: clamp(1.35rem, 1.75vw, 1.7rem);
          font-weight: 300;
          line-height: 1;
          letter-spacing: 0;
          color: rgba(255, 255, 255, 0.92);
          transition: transform 180ms ease;
        }

        .megha-read-cta:hover .megha-read-cta__frame,
        .megha-read-cta:focus-visible .megha-read-cta__frame {
          border-color: #ffffff;
          background: rgba(255, 255, 255, 0.035);
        }

        .megha-read-cta:hover .megha-read-cta__bottom-edge,
        .megha-read-cta:focus-visible .megha-read-cta__bottom-edge {
          background: #ffffff;
        }

        .megha-read-cta:hover .megha-read-cta__corner,
        .megha-read-cta:focus-visible .megha-read-cta__corner {
          border-color: #ffffff;
        }

        .megha-read-cta:hover .megha-read-cta__chevrons,
        .megha-read-cta:focus-visible .megha-read-cta__chevrons {
          transform: translateX(0.3rem);
        }

        .megha-read-cta:focus-visible {
          outline: 0.125rem solid rgba(255, 255, 255, 0.8);
          outline-offset: 0.4rem;
        }

        @media (max-width: 47.999rem) {
          .megha-read-bridge {
            min-height: clamp(22rem, 55vh, 30rem);
            padding-block-start: clamp(4rem, 16vw, 6rem);
          }

          .megha-read-cta {
            width: 100%;
            max-width: 22rem;
          }

          .megha-read-cta__frame {
            flex: 1 1 auto;
            min-width: 0;
            min-height: 2rem;
            padding-inline: clamp(0.6rem, 3vw, 1rem);
          }

          .megha-read-cta__label {
            font-size: clamp(0.75rem, 3.6vw, 1rem);
            letter-spacing: clamp(0.1rem, 0.55vw, 0.1625rem);
          }

          .megha-read-cta__chevrons {
            flex: 0 0 auto;
            font-size: clamp(1.45rem, 7vw, 1.8rem);
          }
        }
      `}</style>

      <div className="megha-canvas__container">
        <header className="megha-canvas__header">
          <h1
            id="megha-title"
            className="megha-uas-title"
            aria-label="MEGHA UAS"
          >
            <span className="megha-uas-title__me">ME</span>
            <span className="megha-uas-title__g">G</span>
            <span>HA UAS</span>
          </h1>
          <p className="megha-hero__tagline">
            A 3D-printed intelligent UAV. Stealth design, long
            <br />
            endurance, rapid deployment. Welcome to agentic warfare
          </p>
        </header>

        <div className="megha-hero__stage">
          <div className="megha-hero__frame">
            <p className="megha-hero__hangar" aria-label="Hangar 18">
              HANGAR <span className="megha-hero__hangar-num">1</span>8
            </p>
            <div className="megha-hero__viewport" aria-hidden="true" />
            <p className="megha-hero__caption">MEGHA - AD-08 - SIDE VIEW</p>
          </div>
        </div>

        <div className="megha-canvas__rail">
          <div className="megha-canvas__rail-copy-group" aria-hidden="true">
            <p className="megha-canvas__rail-copy">
              See first. Decide first. Act first.
            </p>
            <p className="megha-canvas__rail-copy">
              See first. Decide first. Act first.
            </p>
          </div>
          <ul className="megha-uav-list">
            {meghaUavs.map((uav) => (
              <li
                key={uav.id}
                className="megha-uav-list__item"
                aria-labelledby={uav.titleId}
              >
                <div className="x-striker-section__rail">
                  <MeghaAircraftContent
                    titleId={uav.titleId}
                    name={uav.name}
                    typeLabel={uav.typeLabel}
                    year={uav.year}
                    image={uav.image}
                    imageAlt={uav.imageAlt}
                    specs={uav.specs}
                    tags={uav.tags}
                    descriptionParagraphs={uav.descriptionParagraphs}
                    descriptionLabel={uav.descriptionLabel}
                    footerParagraphs={uav.footerParagraphs}
                    footerLabel={uav.footerLabel}
                    specsClassName={uav.specsClassName}
                    imageClassName={uav.imageClassName}
                    stageClassName={uav.stageClassName}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="megha-read-bridge" aria-label="Read why MEGHA is needed">
        <a className="megha-read-cta" href="/research">
          <span className="megha-read-cta__frame">
            <span className="megha-read-cta__label">WHY MEGHA NEED? READ</span>
            <span className="megha-read-cta__bottom-edge" aria-hidden="true" />
            <span className="megha-read-cta__corner megha-read-cta__corner--tl" aria-hidden="true" />
            <span className="megha-read-cta__corner megha-read-cta__corner--tr" aria-hidden="true" />
            <span className="megha-read-cta__corner megha-read-cta__corner--bl" aria-hidden="true" />
            <span className="megha-read-cta__corner megha-read-cta__corner--br" aria-hidden="true" />
          </span>
          <span className="megha-read-cta__chevrons" aria-hidden="true">
            <span>›</span>
            <span>›</span>
          </span>
        </a>
      </div>
    </section>
  );
}
