import SentinelAircraftContent from "./SentinelAircraftContent";
import MeghaAppBar from "./MeghaAppBar";
import ResearchAtmosphere from "./research-page/ResearchAtmosphere";
import Footer from "./Footer";
import SourceCodeProRegular from "../assets/fonts/SourceCodePro-Regular.otf";
import plusJakartaSans from "../assets/fonts/PlusJakartaSans[wght].ttf";
import interFont from "../assets/fonts/Inter.ttf";
import yapariRegular from "../assets/fonts/YapariTrial-Regular.ttf";
import yapariBold from "../assets/fonts/YapariTrial-Bold.ttf";
import node01Image from "../assets/NODE01.png";
import fenrir002Image from "../assets/fenrir002.png";

const node01Specs = [
  { kind: "single", label: "Class", value: "SENTINEL", brand: true },
  { kind: "single", label: "Endurance", value: "Persistent · mesh node" },
  {
    kind: "split",
    cells: [
      { label: "Sensors", value: "EO-IR · 4-lens head" },
      { label: "Deploy", value: "Tripod · rapid set" },
    ],
  },
  { kind: "single", label: "Role", value: "Edge-AI surveillance" },
  { kind: "single", label: "Link", value: "ARC OS fused picture" },
];

const node01Description = [
  "NODE 01 is the SENTINEL sensing node — a tripod-mounted EO-IR unit that watches the local airspace and feeds tracks into the mesh.",
  "Four lenses on a gimballed head, edge AI at the node, and a footprint small enough to stand up where the threat is — not where the radar tower already is.",
];

const node01Tags = ["Sensing", "EO-IR", "Edge-AI", "Mesh", "C-UAS"];

const fenrirSpecs = [
  { kind: "single", label: "Class", value: "SENTINEL", brand: true },
  { kind: "single", label: "Endurance", value: "15 min" },
  { kind: "single", label: "Range", value: "Autonomous · point defence" },
  { kind: "single", label: "Payload", value: "25 lbs (11 kg)" },
  {
    kind: "single",
    label: "Weight (incl. Batteries)",
    value: "55 lbs (25 kg)",
  },
];

const fenrirDescription = [
  "FENRIR 002 is an interceptor. It has one job bringing down hostile drones and it is built for nothing else. It sits in its case, ready, at the position it defends: a forward base, a radar site, a command post, a convoy halt. No crew standing by. When the SENTINEL radar mesh detects a hostile UAV and ARC OS confirms the track, FENRIR launches within seconds climbing before an operator could have reacted.",
];

const fenrirTags = ["Counter UAS", "Air Defence", "Base Protection"];

const fenrirFooter = [
  "FENRIR exists because of economics. Attacks come from cheap drones launched in numbers, and answering a thousand-dollar threat with a million-dollar missile is a losing exchange no country can sustain. FENRIR is the cheap answer to the cheap threat and it is man-portable, so the protection moves with the force.",
  "A drone problem gets a drone answer, in seconds.",
];

const sentinelItems = [
  {
    id: "node-01",
    titleId: "node-01-title",
    name: "NODE 01",
    image: node01Image,
    imageAlt: "NODE 01 SENTINEL EO-IR surveillance node",
    specs: node01Specs,
    tags: node01Tags,
    descriptionParagraphs: node01Description,
    descriptionLabel: "NODE 01 description",
    footerParagraphs: [
      "Detect first at the edge. Push only what matters into the fused air picture — then cue the interceptor under human command.",
    ],
    footerLabel: "NODE 01 mission note",
    imageClassName: "x-striker-aircraft-stage__image--sentinel-unit",
    stageClassName: "x-striker-aircraft-stage--sentinel-unit",
  },
  {
    id: "fenrir-002",
    titleId: "fenrir-002-title",
    name: "FENRIR 002",
    image: fenrir002Image,
    imageAlt: "FENRIR 002 counter-UAS interceptor",
    specs: fenrirSpecs,
    tags: fenrirTags,
    descriptionParagraphs: fenrirDescription,
    descriptionLabel: "FENRIR 002 interceptor description",
    footerParagraphs: fenrirFooter,
    footerLabel: "FENRIR 002 mission note",
    imageClassName: "x-striker-aircraft-stage__image--sentinel-unit",
    stageClassName: "x-striker-aircraft-stage--sentinel-unit",
  },
];

export default function Sentinel() {
  return (
    <div
      className="sentinel-tab relative isolate flex min-h-screen flex-col overflow-x-hidden bg-black text-white"
      aria-labelledby="sentinel-title"
    >
      <ResearchAtmosphere />
      <div className="sentinel-tab__bottom-glow" aria-hidden="true" />

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

        .sentinel-tab,
        .sentinel-tab * {
          box-sizing: border-box;
        }

        .sentinel-tab {
          --x-striker-content-inset: clamp(0.75rem, 1.5vw, 1.5rem);
          --x-striker-desc-line-height: clamp(28rem, 42vh, 36rem);
          --research-footer-border-offset: clamp(112px, calc(6.5vw + 96px), 188px);
          --sentinel-ellipse-left-yellow-y: calc(
            100% - var(--research-footer-border-offset) - 90px
          );
        }

        .sentinel-tab__bottom-glow {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          overflow: hidden;
          background: radial-gradient(
            ellipse 1473px 1273px at -680px var(--sentinel-ellipse-left-yellow-y),
            #f3d05d 0%,
            #f3d05d 38%,
            transparent 72%
          );
          filter: blur(80px);
        }

        .sentinel-tab .megha-canvas__container {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          width: min(100%, 90rem);
          min-height: auto;
          margin-inline: auto;
          padding-inline: clamp(1.5rem, 3vw, 2.75rem);
        }

        .sentinel-tab .sentinel-title {
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

        .sentinel-tab .sentinel-title__t {
          color: #e3e41b;
        }

        .sentinel-tab .sentinel-frame__meta {
          position: absolute;
          z-index: 2;
          margin: 0;
          font-family: "Source Code Pro", "SourceCodePro", ui-monospace, monospace;
          font-size: clamp(0.5625rem, 0.7vw, 0.75rem);
          font-weight: 400;
          line-height: 1.45;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.92);
          pointer-events: none;
        }

        .sentinel-tab .sentinel-frame__meta--tl {
          top: clamp(0.75rem, 1.4vw, 1.25rem);
          left: clamp(0.75rem, 1.4vw, 1.25rem);
          text-align: left;
        }

        .sentinel-tab .sentinel-frame__meta--tr {
          top: clamp(0.75rem, 1.4vw, 1.25rem);
          right: clamp(0.75rem, 1.4vw, 1.25rem);
          text-align: right;
        }

        .sentinel-tab .sentinel-frame__corner {
          position: absolute;
          z-index: 2;
          width: clamp(0.85rem, 1.2vw, 1.15rem);
          height: clamp(0.85rem, 1.2vw, 1.15rem);
          border-color: #e3e41b;
          border-style: solid;
          pointer-events: none;
        }

        .sentinel-tab .sentinel-frame__corner--bl {
          left: clamp(0.35rem, 0.7vw, 0.55rem);
          bottom: clamp(0.35rem, 0.7vw, 0.55rem);
          border-width: 0 0 0.0625rem 0.0625rem;
        }

        .sentinel-tab .sentinel-frame__corner--br {
          right: clamp(0.35rem, 0.7vw, 0.55rem);
          bottom: clamp(0.35rem, 0.7vw, 0.55rem);
          border-width: 0 0.0625rem 0.0625rem 0;
        }

        .sentinel-tab .megha-canvas__rail {
          position: relative;
          --megha-rail-margin-width: clamp(2.75rem, 5vw, 4.5rem);
          padding-inline-start: var(--x-striker-content-inset);
          padding-block-end: clamp(3rem, 6vh, 5rem);
        }

        .sentinel-tab .megha-canvas__rail-copy-group {
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

        .sentinel-tab .megha-canvas__rail-copy {
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

        .sentinel-tab .megha-canvas__rail-copy:first-child {
          transform: rotate(180deg) translateY(clamp(32rem, 60vh, 56rem));
        }

        .sentinel-tab .megha-canvas__rail::before {
          content: "";
          position: absolute;
          inset-block: 0;
          inset-inline-start: 0;
          width: 0.0625rem;
          background: rgba(255, 255, 255, 0.55);
          pointer-events: none;
        }

        .sentinel-tab .megha-uav-list {
          list-style: none;
          margin: 0;
          padding: 0;
          width: 100%;
        }

        .sentinel-tab .megha-uav-list__item {
          width: 100%;
        }

        .sentinel-tab .megha-uav-list__item + .megha-uav-list__item {
          margin-block-start: clamp(3rem, 8vh, 6rem);
        }

        .sentinel-tab .megha-aircraft-section {
          display: flex;
          flex-direction: column;
          gap: clamp(2.5rem, 5vh, 4rem);
          width: 100%;
        }

        .sentinel-tab .x-striker-section__rail {
          position: relative;
          flex: 0 0 auto;
          display: flex;
          flex-direction: column;
          min-width: 0;
          padding-block-end: 0;
          padding-block-start: clamp(0.35rem, 1vh, 0.75rem);
        }

        .sentinel-tab .x-striker-section__content {
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

        .sentinel-tab .megha-aircraft-content {
          --x-striker-desc-line-height: clamp(28rem, 42vh, 36rem);
          --megha-aircraft-desc-line-height: var(--x-striker-desc-line-height);
        }

        .sentinel-tab .x-striker-profile {
          min-width: 0;
          padding-inline-end: clamp(1rem, 2vw, 2rem);
        }

        .sentinel-tab .x-striker-aircraft-stage {
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

        .sentinel-tab .x-striker-aircraft-stage__name,
        .sentinel-tab .x-striker-aircraft-stage__year {
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

        .sentinel-tab .x-striker-aircraft-stage__name {
          grid-column: 1;
          display: flex;
          align-items: center;
          justify-self: end;
          gap: clamp(0.35rem, 0.7vw, 0.6rem);
          margin-inline-end: -0.5rem;
        }

        .sentinel-tab .x-striker-aircraft-stage__name::before {
          content: "";
          flex: 0 0 auto;
          width: calc(80px + var(--x-striker-content-inset));
          height: 0.0625rem;
          margin-inline-start: calc(0rem - var(--x-striker-content-inset));
          background: rgba(255, 255, 255, 0.75);
          pointer-events: none;
        }

        .sentinel-tab .x-striker-aircraft-stage__year {
          grid-column: 3;
          justify-self: start;
          margin-inline-start: calc(-0.5rem - 270px);
        }

        .sentinel-tab .x-striker-aircraft-stage__figure {
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

        .sentinel-tab .x-striker-aircraft-stage__image {
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

        .sentinel-tab .x-striker-aircraft-stage__image--sentinel-unit {
          width: clamp(14rem, 22vw, 22rem);
          max-height: clamp(16rem, 28vw, 26rem);
          margin: 0;
          transform: none;
        }

        .sentinel-tab .x-striker-aircraft-stage--sentinel-unit {
          grid-template-columns: minmax(0, 1fr);
          grid-template-rows: auto auto;
          align-items: stretch;
        }

        .sentinel-tab .x-striker-aircraft-stage--sentinel-unit .x-striker-aircraft-stage__name {
          grid-column: 1;
          grid-row: 1;
          justify-self: start;
          margin-inline-end: 0;
        }

        .sentinel-tab .x-striker-aircraft-stage--sentinel-unit .x-striker-aircraft-stage__figure {
          grid-column: 1;
          grid-row: 2;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          margin-block-start: clamp(2.5rem, 5vh, 4rem);
          margin-block-end: clamp(1.5rem, 3vh, 2.5rem);
        }

        .sentinel-tab .x-striker-aircraft-stage__type {
          margin-inline-start: clamp(0.25rem, 0.45vw, 0.45rem);
          font-size: 0.42em;
          font-weight: 700;
          line-height: 1;
          letter-spacing: 0.04em;
          align-self: center;
        }

        .sentinel-tab .x-striker-specs {
          max-width: clamp(22rem, 36vw, 34rem);
          margin: 0;
        }

        .sentinel-tab .x-striker-specs__row:first-child {
          padding-block-start: 0;
        }

        .sentinel-tab .x-striker-specs__row {
          padding-block:
            0.98rem
            clamp(0.2rem, 0.4vh, 0.3rem);
          border-block-end: 0.0625rem solid rgba(255, 255, 255, 0.72);
        }

        .sentinel-tab .x-striker-specs__row:last-child {
          border-block-end: 0;
          padding-block-end: 0;
        }

        .sentinel-tab .x-striker-specs__row--split {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: clamp(1.25rem, 3vw, 2.5rem);
        }

        .sentinel-tab .x-striker-specs__label {
          margin: 0 0 0.2rem;
          font-family: "Inter", sans-serif;
          font-size: clamp(0.625rem, 0.72vw, 0.8125rem);
          font-weight: 700;
          line-height: 1.15;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          color: #ffffff;
        }

        .sentinel-tab .x-striker-specs__value {
          margin: 0;
          font-family: "Inter", sans-serif;
          font-size: clamp(1rem, 1.15vw, 1.25rem);
          font-weight: 400;
          line-height: 1.25;
          color: #ffffff;
        }

        .sentinel-tab .x-striker-specs__value--megha {
          display: block;
          font-family: "Yapari Trial", sans-serif;
          font-size: clamp(1.35rem, 1.85vw, 1.55rem);
          font-weight: 400;
          line-height: 1;
          letter-spacing: clamp(0.28rem, 0.7vw, 0.5rem);
          text-transform: uppercase;
          color: #ffffff;
        }

        .sentinel-tab .megha-aircraft-content__tags {
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

        .sentinel-tab .megha-aircraft-content__tags::-webkit-scrollbar {
          display: none;
        }

        .sentinel-tab .megha-aircraft-content__tags-tag {
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

        .sentinel-tab .x-striker-specs,
        .sentinel-tab .megha-aircraft-content__tags {
          margin-inline-start: clamp(4rem, 8vw, 8rem);
        }

        .sentinel-tab .x-striker-desc {
          position: relative;
          align-self: start;
          min-width: 0;
          margin-block-start: calc(
            var(--aircraft-label-bottom) + clamp(2.5rem, 4vh, 3.5rem)
          );
          margin-inline-start: calc(clamp(-4.5rem, -5.5vw, -2rem) + 45px);
          padding-inline-start: clamp(1rem, 2vw, 1.5rem);
        }

        .sentinel-tab .megha-aircraft-content__desc-line {
          position: absolute;
          inset-block-start: 0;
          inset-inline-start: 0;
          width: 0.0625rem;
          height: var(--megha-aircraft-desc-line-height, var(--x-striker-desc-line-height));
          background: rgba(255, 255, 255, 0.75);
          pointer-events: none;
        }

        .sentinel-tab .x-striker-desc__connector {
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

        .sentinel-tab .x-striker-desc__copy {
          max-width: 31rem;
          margin: 0;
          font-family: "Inter", sans-serif;
          font-size: clamp(1rem, 1.2vw, 1.25rem);
          font-weight: 400;
          line-height: 1.35;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.96);
        }

        .sentinel-tab .x-striker-desc__copy + .x-striker-desc__copy {
          margin-block-start: clamp(0.75rem, 1.4vh, 1.125rem);
        }

        .sentinel-tab .megha-aircraft-content__footer {
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

        .sentinel-tab .megha-aircraft-content__footer-inner {
          width: 100%;
        }

        .sentinel-tab .megha-aircraft-content__footer-copy {
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

        .sentinel-tab .megha-aircraft-content__footer-copy + .megha-aircraft-content__footer-copy {
          margin-block-start: clamp(0.3rem, 0.7vh, 0.55rem);
        }

        .sentinel-tab .sr-only {
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

        @media (max-width: 64rem) and (min-width: 48rem) {
          .sentinel-tab .x-striker-section__content {
            grid-template-columns: minmax(0, 1.2fr) minmax(19rem, 0.8fr);
          }

          .sentinel-tab .x-striker-aircraft-stage {
            grid-template-columns:
              auto
              minmax(12rem, 1.6fr)
              auto;
          }

          .sentinel-tab .x-striker-desc {
            margin-inline-start: calc(clamp(1rem, 2vw, 2rem) + 45px);
          }

          .sentinel-tab .x-striker-specs {
            max-width: 100%;
          }
        }

        @media (max-width: 47.999rem) {
          .sentinel-tab .sentinel-title {
            font-size: clamp(2.5rem, 12vw, 4.25rem);
            letter-spacing: clamp(8px, 2.8vw, 20px);
          }

          .sentinel-tab .megha-canvas__rail-copy-group {
            display: none;
          }

          .sentinel-tab .x-striker-section__content {
            grid-template-columns: 1fr;
            row-gap: clamp(3.5rem, 8vw, 4.5rem);
          }

          .sentinel-tab .x-striker-profile {
            padding-inline-end: 0;
          }

          .sentinel-tab .x-striker-aircraft-stage {
            grid-template-columns: 1fr auto;
            grid-template-rows: auto auto;
            row-gap: clamp(1.5rem, 5vh, 2.5rem);
          }

          .sentinel-tab .x-striker-aircraft-stage__name,
          .sentinel-tab .x-striker-aircraft-stage__year {
            grid-row: 1;
            padding-block-start: 0;
          }

          .sentinel-tab .x-striker-aircraft-stage__name {
            grid-column: 1;
            justify-self: start;
          }

          .sentinel-tab .x-striker-aircraft-stage__name::before {
            width: var(--x-striker-content-inset);
          }

          .sentinel-tab .x-striker-aircraft-stage__year {
            grid-column: 2;
            justify-self: end;
            margin-inline-start: 0;
          }

          .sentinel-tab .x-striker-aircraft-stage__figure {
            grid-column: 1 / -1;
            grid-row: 2;
          }

          .sentinel-tab .x-striker-aircraft-stage__image {
            width: clamp(20rem, 95vw, 34rem);
            max-height: clamp(22rem, 58vh, 36rem);
            margin: 0;
            padding: 0;
            transform: none;
          }

          .sentinel-tab .x-striker-aircraft-stage__image--sentinel-unit {
            width: clamp(11rem, 42vw, 16rem);
            max-height: clamp(12rem, 48vw, 18rem);
          }

          .sentinel-tab .x-striker-aircraft-stage--sentinel-unit .x-striker-aircraft-stage__figure {
            margin-block-start: clamp(2rem, 5vh, 3rem);
            margin-block-end: clamp(1rem, 2.5vh, 1.5rem);
          }

          .sentinel-tab .x-striker-specs {
            max-width: 100%;
            margin-inline-start: 0;
          }

          .sentinel-tab .x-striker-desc {
            margin-block-start: clamp(2.5rem, 5vh, 3.5rem);
            margin-inline-start: 45px;
            padding-inline-start: 0;
            padding-block-start: clamp(1.25rem, 4vw, 1.75rem);
            border-block-start: 0.0625rem solid rgba(255, 255, 255, 0.4);
          }

          .sentinel-tab .megha-aircraft-content__desc-line,
          .sentinel-tab .x-striker-desc__connector {
            display: none;
          }

          .sentinel-tab .megha-aircraft-content__tags {
            margin-inline-start: 0;
            max-width: none;
            width: max-content;
            flex-wrap: nowrap;
            overflow-x: auto;
          }

          .sentinel-tab .megha-aircraft-content__footer-copy {
            width: auto;
            max-width: 100%;
            margin-inline-start: var(--megha-aircraft-content-inset);
            font-size: calc(clamp(0.74rem, 2.8vw, 0.9rem) + 2px);
            line-height: 1.25;
          }
        }

        @media (max-width: 30rem) {
          .sentinel-tab .x-striker-specs__row--split {
            grid-template-columns: 1fr;
          }

          .sentinel-tab .sentinel-frame__meta {
            font-size: 0.5rem;
          }
        }
      `}</style>

      <div className="relative z-10 flex flex-col">
        <div className="megha-canvas__container">
        <MeghaAppBar
          titleId="sentinel-title"
          titleClassName="sentinel-title"
          ariaLabel="SENTINEL"
          title={
            <>
              SEN<span className="sentinel-title__t">T</span>INEL
            </>
          }
          tagline="C-UAS / BORDER SECURITY & PATROL"
          frameClassName="megha-hero__frame--top"
          frameChildren={
            <>
              <p className="sentinel-frame__meta sentinel-frame__meta--tl">
                SNTRY-M // EO-IR NODE
                <br />
                EDGE-AI SURVEILLANCE
              </p>
              <p className="sentinel-frame__meta sentinel-frame__meta--tr">
                GRID 48R-GQ-TR52
                <br />
                2026-07-17 // 06:45Z
              </p>

              <span
                className="sentinel-frame__corner sentinel-frame__corner--bl"
                aria-hidden="true"
              />
              <span
                className="sentinel-frame__corner sentinel-frame__corner--br"
                aria-hidden="true"
              />
            </>
          }
        />

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
            {sentinelItems.map((item) => (
              <li
                key={item.id}
                className="megha-uav-list__item"
                aria-labelledby={item.titleId}
              >
                <div className="x-striker-section__rail">
                  <SentinelAircraftContent
                    titleId={item.titleId}
                    name={item.name}
                    typeLabel={item.typeLabel}
                    year={item.year}
                    image={item.image}
                    imageAlt={item.imageAlt}
                    specs={item.specs}
                    tags={item.tags}
                    descriptionParagraphs={item.descriptionParagraphs}
                    descriptionLabel={item.descriptionLabel}
                    footerParagraphs={item.footerParagraphs}
                    footerLabel={item.footerLabel}
                    specsClassName={item.specsClassName}
                    imageClassName={item.imageClassName}
                    stageClassName={item.stageClassName}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
        </div>

        <Footer showReadmeBridge={false} variant="research" />
      </div>
    </div>
  );
}
