import { useEffect, useRef, useState } from "react";
import { HOME_LINE_YELLOW_STYLE } from "../Utils/AnimatedLine";
import arcSystemsVideo from "../assets/ARC OS Three Core Systems 16x9 (1).mp4";

const connectedCopyLines = [
  "ARC OS ensures sovereign forces win at the edge, in fast-moving and",
  "contested environments where decisions must be made in seconds.",
  "We build agentic AI systems that connect sensors, autonomy, and",
  "command into a single decision loop—delivering faster, smarter, and",
  "more resilient operations when every second counts.",
  "See first. Decide first. Act first.",
];

const products = [
  {
    id: "hyena",
    title: "HYENA",
    body: "Agentic Autonomous Pilot of ARC OS",
    highlightIndex: 2,
    arrowTone: "left",
  },
  {
    id: "sentinel",
    title: "SENTINEL",
    body: "Integrated Air Surveillance & Counter-UAS Layer",
    highlightIndex: 3,
    arrowTone: "center",
  },
  {
    id: "arc-c2",
    title: "ARC C2",
    body: "Command & Control (C2) is an AI-powered battle management",
    highlightIndex: 1,
    arrowTone: "right",
  },
];

/* x=186.7 / 560 / 933.3 are the three column centres of the products grid
   (viewBox width 1120 / 6 * 1, 3, 5) — the svg is stretched to exactly the
   grid's width (preserveAspectRatio="none") so these stay under the titles.
   The small offsets (-15 / +31) follow the per-title transform nudges. */
const arrowGeometry = {
  left: {
    desktopPath: "M172 8 L172 138 Q172 158 192 158 L540 158 Q560 158 560 178 L560 294",
    mobilePath: "M560 8 L560 294",
    startX: 172,
    startY: 8,
    endX: 560,
  },
  center: {
    desktopPath: "M560 8 L560 294",
    mobilePath: "M560 8 L560 294",
    startX: 560,
    startY: 8,
    endX: 560,
  },
  right: {
    desktopPath: "M964 8 L964 138 Q964 158 944 158 L580 158 Q560 158 560 178 L560 294",
    mobilePath: "M560 8 L560 294",
    startX: 964,
    startY: 8,
    endX: 560,
  },
};

const ARC_ROUTE_BEGIN = "0.08s";
const ARC_ROUTE_TRAVEL_DURATION = "2.65s";

/* One-shot command signal: a glowing head + short trail travels the route
   once (~2.4s), locks into the panel, then the whole route fades out. */
function ActiveArrow({ product }) {
  const geometry = arrowGeometry[product.arrowTone];
  const routeId = `arc-command-route-${product.id}`;
  const desktopPathId = `${routeId}-desktop`;
  const mobilePathId = `${routeId}-mobile`;
  const homeLineGradientId = `${routeId}-home-line`;
  const homeSparkGradientId = `${routeId}-home-spark`;
  const homeGlowFilterId = `${routeId}-home-glow`;
  const commandGlowFilterId = `${routeId}-command-glow`;

  return (
    <svg
      className={`arc-os-active-arrow arc-os-active-arrow--${product.id}`}
      viewBox="0 0 1120 294"
      preserveAspectRatio="none"
      aria-hidden="true"
      key={product.id}
    >
      <defs>
        <path id={desktopPathId} d={geometry.desktopPath} />
        <path id={mobilePathId} d={geometry.mobilePath} />

        <linearGradient id={homeLineGradientId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={HOME_LINE_YELLOW_STYLE.darkEdge} stopOpacity="0.45" />
          <stop offset="12%" stopColor={HOME_LINE_YELLOW_STYLE.oliveEdge} stopOpacity="0.8" />
          <stop offset="50%" stopColor={HOME_LINE_YELLOW_STYLE.peakYellow} stopOpacity="1" />
          <stop offset="88%" stopColor={HOME_LINE_YELLOW_STYLE.oliveEdge} stopOpacity="0.8" />
          <stop offset="100%" stopColor={HOME_LINE_YELLOW_STYLE.darkEdge} stopOpacity="0.45" />
        </linearGradient>

        <linearGradient id={homeSparkGradientId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={HOME_LINE_YELLOW_STYLE.sparkYellow} stopOpacity="0" />
          <stop offset="35%" stopColor={HOME_LINE_YELLOW_STYLE.sparkYellow} stopOpacity="0.45" />
          <stop offset="50%" stopColor={HOME_LINE_YELLOW_STYLE.sparkPeak} stopOpacity="1" />
          <stop offset="65%" stopColor={HOME_LINE_YELLOW_STYLE.sparkYellow} stopOpacity="0.45" />
          <stop offset="100%" stopColor={HOME_LINE_YELLOW_STYLE.sparkYellow} stopOpacity="0" />
        </linearGradient>

        <filter id={homeGlowFilterId} x="-200%" y="-200%" width="500%" height="500%">
          <feGaussianBlur stdDeviation={HOME_LINE_YELLOW_STYLE.glowBlurSoft} result="blur1" />
          <feGaussianBlur stdDeviation={HOME_LINE_YELLOW_STYLE.glowBlurWide} result="blur2" />
          <feMerge>
            <feMergeNode in="blur2" />
            <feMergeNode in="blur1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id={commandGlowFilterId} x="-120%" y="-120%" width="340%" height="340%">
          <feGaussianBlur stdDeviation="1.8" result="whiteBlur" />
          <feMerge>
            <feMergeNode in="whiteBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path
        className="arc-os-active-arrow-path arc-os-home-energy arc-os-arrow-desktop"
        d={geometry.desktopPath}
        fill="none"
        filter={`url(#${homeGlowFilterId})`}
        stroke={`url(#${homeLineGradientId})`}
        pathLength="1"
      />
      <path
        className="arc-os-active-arrow-path arc-os-command-trail arc-os-arrow-desktop"
        d={geometry.desktopPath}
        fill="none"
        filter={`url(#${commandGlowFilterId})`}
        pathLength="1"
      />
      <path
        className="arc-os-active-arrow-path arc-os-home-spark arc-os-arrow-desktop"
        d={geometry.desktopPath}
        fill="none"
        filter={`url(#${homeGlowFilterId})`}
        stroke={`url(#${homeSparkGradientId})`}
        pathLength="1"
      />
      <path
        className="arc-os-active-arrow-path arc-os-home-energy arc-os-arrow-mobile"
        d={geometry.mobilePath}
        fill="none"
        filter={`url(#${homeGlowFilterId})`}
        stroke={`url(#${homeLineGradientId})`}
        pathLength="1"
      />
      <path
        className="arc-os-active-arrow-path arc-os-command-trail arc-os-arrow-mobile"
        d={geometry.mobilePath}
        fill="none"
        filter={`url(#${commandGlowFilterId})`}
        pathLength="1"
      />
      <path
        className="arc-os-active-arrow-path arc-os-home-spark arc-os-arrow-mobile"
        d={geometry.mobilePath}
        fill="none"
        filter={`url(#${homeGlowFilterId})`}
        stroke={`url(#${homeSparkGradientId})`}
        pathLength="1"
      />
      <circle className="arc-os-arrow-origin arc-os-arrow-desktop" cx={geometry.startX} cy={geometry.startY} r="3.4" />
      <circle className="arc-os-arrow-origin arc-os-arrow-mobile" cx="560" cy="8" r="3.4" />
      <circle className="arc-os-arrival-node arc-os-arrow-desktop" cx={geometry.endX} cy="294" r="4.2" />
      <circle className="arc-os-arrival-node arc-os-arrow-mobile" cx="560" cy="294" r="4.2" />
      <g className="arc-os-signal-head arc-os-arrow-desktop" filter={`url(#${homeGlowFilterId})`}>
        <path className="arc-os-signal-head-tail" d="M-28 0 L-5 0" stroke={`url(#${homeSparkGradientId})`} />
        <path className="arc-os-signal-head-glow" d="M10 0 L-8 -7 L-4 0 L-8 7 Z" />
        <path className="arc-os-signal-head-core" d="M8 0 L-7 -6 L-3 0 L-7 6 Z" />
        <animateMotion begin={ARC_ROUTE_BEGIN} dur={ARC_ROUTE_TRAVEL_DURATION} repeatCount="1" fill="freeze" rotate="auto">
          <mpath href={`#${desktopPathId}`} />
        </animateMotion>
      </g>
      <g className="arc-os-signal-head arc-os-arrow-mobile" filter={`url(#${homeGlowFilterId})`}>
        <path className="arc-os-signal-head-tail" d="M-28 0 L-5 0" stroke={`url(#${homeSparkGradientId})`} />
        <path className="arc-os-signal-head-glow" d="M10 0 L-8 -7 L-4 0 L-8 7 Z" />
        <path className="arc-os-signal-head-core" d="M8 0 L-7 -6 L-3 0 L-7 6 Z" />
        <animateMotion begin={ARC_ROUTE_BEGIN} dur={ARC_ROUTE_TRAVEL_DURATION} repeatCount="1" fill="freeze" rotate="auto">
          <mpath href={`#${mobilePathId}`} />
        </animateMotion>
      </g>
    </svg>
  );
}

function ProductTitle({ product }) {
  if (product.title === "ARC C2") {
    return (
      <>
        {"ARC".split("").map((letter, index) => (
          <span
            className={
              index === product.highlightIndex
                ? "arc-os-title-letter arc-os-title-letter-hot"
                : "arc-os-title-letter"
            }
            key={`${product.id}-${letter}-${index}`}
          >
            {letter}
          </span>
        ))}
        <span className="arc-os-product-c2">C2</span>
      </>
    );
  }

  return product.title.split("").map((letter, index) => (
    <span
      className={
        index === product.highlightIndex
          ? "arc-os-title-letter arc-os-title-letter-hot"
          : "arc-os-title-letter"
      }
      key={`${product.id}-${letter}-${index}`}
    >
      {letter}
    </span>
  ));
}

export default function Arc() {
  const sectionRef = useRef(null);
  const [activeProductId, setActiveProductId] = useState(null);

  const activeProduct = products.find((product) => product.id === activeProductId);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting && entry.intersectionRatio >= 0.12;
        if (!visible) {
          setActiveProductId(null);
        }
      },
      { threshold: [0, 0.12] },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const handlePointerEnter = (productId) => {
    setActiveProductId(productId);
  };

  const handlePointerMove = (event) => {
    const target = event.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 8;

    target.style.setProperty("--arc-target-x", `${x.toFixed(2)}px`);
    target.style.setProperty("--arc-target-y", `${y.toFixed(2)}px`);
  };

  const handlePointerLeave = (event) => {
    event.currentTarget.style.removeProperty("--arc-target-x");
    event.currentTarget.style.removeProperty("--arc-target-y");
    setActiveProductId(null);
  };

  // Tap fallback for touch screens, where pointerenter never fires.
  const handleProductClick = (productId) => {
    setActiveProductId(productId);
  };

  return (
    <section ref={sectionRef} className="arc-os-section relative isolate overflow-hidden bg-black text-white">
      <style>{`
        .arc-os-section {
          --arc-yellow: ${HOME_LINE_YELLOW_STYLE.arcYellow};
          --arc-yellow-rgb: ${HOME_LINE_YELLOW_STYLE.arcYellowRgb};
          --arc-peak-yellow-rgb: ${HOME_LINE_YELLOW_STYLE.peakYellowRgb};
          --arc-spark-yellow-rgb: ${HOME_LINE_YELLOW_STYLE.sparkYellowRgb};
          --arc-spark-peak-rgb: ${HOME_LINE_YELLOW_STYLE.sparkPeakRgb};
          --arc-line: rgba(255, 255, 255, 0.72);
          --arc-muted: rgba(255, 255, 255, 0.72);
          --arc-faint: rgba(255, 255, 255, 0.42);
          --arc-line-left: 11.1%;
          --arc-line-right: 12.2%;
          --arc-line-center-gap: 26px;
          --arc-products-top: 364px;
          --arc-panel-top: 626px;
          --arc-war-top: 118px;
          --arc-copy-top: 114px;
          --arc-copy-right: 55px;
          --arc-copy-width: 280px;
          --arc-upper-spine-top: 137px;
          --arc-upper-spine-end: 317px;
          padding: 74px 0 110px;
        }

        .arc-os-shell {
          position: relative;
          width: min(1160px, calc(100% - 48px));
          margin: 0 auto;
          min-height: 1080px;
        }

        .arc-os-lockup {
          position: relative;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          gap: 90px;
          padding-top: 4px;
        }

        .arc-os-logo {
          display: flex;
          align-items: flex-start;
          gap: 90px;
          font-family: "Yapari Trial", "Yapari Trial Regular", "Azonix", sans-serif;
          font-size: 184px;
          font-weight: 700;
          line-height: 0.68;
          letter-spacing: 0;
          text-transform: uppercase;
          white-space: nowrap;
          transform: translate(7px, -12px);
        }

        .arc-os-tagline {
          position: absolute;
          top: -68px;
          left: 50%;
          transform: translateX(-50%);
          font-family: "SourceCodePro", "Source Code Pro", ui-monospace, monospace;
          font-size: 24px;
          font-weight: 400;
          letter-spacing: 0.02em;
          line-height: 1;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .arc-os-top-guide {
          position: absolute;
          top: -74px;
          right: 12.7%;
          z-index: 2;
          width: 1px;
          height: 33px;
          background: rgba(255, 255, 255, 0.58);
        }

        .arc-os-logo-part {
          position: relative;
          display: inline-block;
        }

        .arc-os-logo-o {
          color: var(--arc-yellow);
        }

        .arc-os-war {
          position: absolute;
          left: 48.55%;
          top: var(--arc-war-top);
          transform: translateX(-50%);
          font-family: "SourceCodePro", "Source Code Pro", ui-monospace, monospace;
          font-size: 15px;
          font-weight: 400;
          line-height: 1;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .arc-os-ca {
          position: absolute;
          left: -38px;
          top: calc(100% + 20px);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          width: 142px;
          height: 32px;
          padding: 0 12px;
          border: 1px solid rgba(255, 255, 255, 0.94);
          background: #202020;
          box-shadow:
            inset 0 0 14px rgba(255, 255, 255, 0.025),
            0 0 7px rgba(255, 255, 255, 0.06);
          box-sizing: border-box;
          color: #fff;
          white-space: nowrap;
        }

        .arc-os-ca::before {
          content: "";
          position: absolute;
          inset: -4px;
          background:
            linear-gradient(#fff, #fff) left top / 10px 3px no-repeat,
            linear-gradient(#fff, #fff) left top / 3px 10px no-repeat,
            linear-gradient(#fff, #fff) right top / 10px 3px no-repeat,
            linear-gradient(#fff, #fff) right top / 3px 10px no-repeat,
            linear-gradient(#fff, #fff) left bottom / 10px 3px no-repeat,
            linear-gradient(#fff, #fff) left bottom / 3px 10px no-repeat,
            linear-gradient(#fff, #fff) right bottom / 10px 3px no-repeat,
            linear-gradient(#fff, #fff) right bottom / 3px 10px no-repeat;
          pointer-events: none;
        }

        .arc-os-ca-code {
          font-family: "Helvetica Now Display", "Helvetica", Arial, sans-serif;
          font-size: 9px;
          font-weight: 400;
          line-height: 1;
          letter-spacing: 0;
          text-transform: uppercase;
        }

        .arc-os-ca-c2 {
          font-family: "Yapari Trial", "Yapari Trial Regular", "Azonix", sans-serif;
          font-size: 20px;
          font-weight: 700;
          line-height: 1;
          letter-spacing: 0;
          text-transform: uppercase;
        }

        .arc-os-copy {
          position: absolute;
          right: var(--arc-copy-right);
          top: var(--arc-copy-top);
          width: var(--arc-copy-width);
          margin: 0;
          font-family: "Helvetica Now Display", "Helvetica", Arial, sans-serif;
          font-size: 6.4px;
          font-weight: 400;
          line-height: 1.08;
          letter-spacing: 0;
          text-align: right;
          text-transform: uppercase;
          color: var(--arc-faint);
        }

        .arc-os-copy-line {
          display: block;
          white-space: nowrap;
        }

        .arc-os-divider-top {
          position: absolute;
          left: var(--arc-line-left);
          right: var(--arc-line-right);
          top: 234px;
          height: 1px;
          background:
            linear-gradient(90deg, transparent, var(--arc-line) 9%, var(--arc-line) 91%, transparent),
            linear-gradient(90deg, transparent 0%, rgba(255, 255, 210, 0.08) 18%, rgba(255, 255, 180, 0.26) 38%, rgba(255, 255, 255, 0.88) 50%, rgba(255, 255, 150, 0.26) 62%, rgba(255, 255, 120, 0.08) 82%, transparent 100%);
          background-repeat: no-repeat;
          background-size: 100% 100%, 34% 100%;
          background-position: 0 0, -38% 0;
          filter: drop-shadow(0 0 4px rgba(255, 255, 160, 0.16));
          will-change: background-position;
          animation: arcLineRunX 4.15s linear infinite;
        }

        .arc-os-divider-top::before,
        .arc-os-divider-top::after {
          content: "";
          position: absolute;
          top: 0;
          width: 1px;
          height: 100px;
          background: linear-gradient(180deg, var(--arc-line), rgba(255, 255, 255, 0.18));
        }

        .arc-os-divider-top::before {
          left: 0;
        }

        .arc-os-divider-top::after {
          right: 0;
        }

        .arc-os-spine {
          position: absolute;
          left: 48.55%;
          top: var(--arc-upper-spine-top);
          width: 1px;
          height: calc(var(--arc-upper-spine-end) - var(--arc-upper-spine-top));
          background:
            linear-gradient(180deg, var(--arc-line), rgba(255, 255, 255, 0.18)),
            linear-gradient(180deg, transparent 0%, rgba(255, 255, 210, 0.08) 18%, rgba(255, 255, 180, 0.24) 38%, rgba(255, 255, 255, 0.86) 50%, rgba(255, 255, 150, 0.24) 62%, rgba(255, 255, 120, 0.08) 82%, transparent 100%);
          background-repeat: no-repeat;
          background-size: 100% 100%, 100% 48%;
          background-position: 0 0, 0 -54%;
          filter: drop-shadow(0 0 4px rgba(255, 255, 160, 0.18));
          will-change: background-position;
          transform: translateX(-50%);
          animation: arcLineRunY 3.85s linear infinite;
        }

        .arc-os-products {
          position: absolute;
          left: 50%;
          top: var(--arc-products-top);
          display: grid;
          width: min(1240px, 100vw);
          grid-template-columns: repeat(3, minmax(0, 1fr));
          transform: translateX(-50%);
        }

        .arc-os-product {
          --arc-target-x: 0px;
          --arc-target-y: 0px;
          position: relative;
          min-height: 168px;
          text-align: center;
        }

        .arc-os-product-trigger {
          position: relative;
          z-index: 2;
          display: block;
          width: 100%;
          appearance: none;
          border: 0;
          background: transparent;
          color: inherit;
          cursor: pointer;
          padding: 0 8px 14px;
          text-align: center;
        }

        .arc-os-product-trigger:focus-visible {
          outline: 1px solid rgba(var(--arc-yellow-rgb), 0.88);
          outline-offset: 10px;
        }

        .arc-os-product-lock {
          position: relative;
          display: inline-block;
          isolation: isolate;
        }

        .arc-os-target-frame {
          position: absolute;
          z-index: -1;
          inset: -13px -24px -11px;
          border: 1px solid rgba(255, 255, 255, 0.48);
          background: linear-gradient(
            90deg,
            rgba(10, 12, 19, 0.48),
            rgba(29, 34, 53, 0.3)
          );
          box-shadow:
            inset 0 0 24px rgba(255, 255, 255, 0.035),
            0 0 18px rgba(255, 255, 255, 0.035);
          opacity: 0;
          transform: translate3d(var(--arc-target-x), var(--arc-target-y), 0) scale(0.9);
          transition:
            opacity 0.22s ease,
            transform 0.32s cubic-bezier(0.2, 0.85, 0.2, 1),
            border-color 0.22s ease;
          pointer-events: none;
        }

        .arc-os-target-corner {
          position: absolute;
          width: 12px;
          height: 12px;
          border-color: rgba(255, 255, 255, 0.96);
          border-style: solid;
          pointer-events: none;
        }

        .arc-os-target-corner--tl {
          top: -2px;
          left: -2px;
          border-width: 2px 0 0 2px;
        }

        .arc-os-target-corner--tr {
          top: -2px;
          right: -2px;
          border-width: 2px 2px 0 0;
        }

        .arc-os-target-corner--bl {
          bottom: -2px;
          left: -2px;
          border-width: 0 0 2px 2px;
        }

        .arc-os-target-corner--br {
          right: -2px;
          bottom: -2px;
          border-width: 0 2px 2px 0;
        }

        .arc-os-product:hover .arc-os-target-frame,
        .arc-os-product:focus-within .arc-os-target-frame {
          opacity: 1;
          border-color: rgba(255, 255, 255, 0.72);
          transform: translate3d(var(--arc-target-x), var(--arc-target-y), 0) scale(1);
        }

        .arc-os-product-title {
          margin: 0;
          font-family: "Yapari Trial Regular", "Azonix", sans-serif;
          font-size: 52px;
          font-weight: 400;
          line-height: 0.82;
          letter-spacing: 4px;
          text-transform: uppercase;
          white-space: nowrap;
          transition:
            color 0.25s ease,
            filter 0.25s ease,
            transform 0.25s ease;
        }

        .arc-os-product:first-child .arc-os-product-lock {
          transform: translateX(-17px);
        }

        .arc-os-product:nth-child(2) .arc-os-product-lock {
          font-size: 46px;
          transform: translateX(-11px);
        }

        .arc-os-product:nth-child(2) .arc-os-product-title {
          font-size: inherit;
        }

        .arc-os-product:nth-child(3) .arc-os-product-lock {
          font-size: 49px;
          transform: translateX(35px);
        }

        .arc-os-product:nth-child(3) .arc-os-product-title {
          font-size: inherit;
        }

        .arc-os-title-letter {
          display: inline-block;
          transform-origin: 50% 56%;
          transition:
            color 0.25s ease,
            filter 0.25s ease,
            transform 0.25s ease;
        }

        .arc-os-title-letter-hot {
          color: var(--arc-yellow);
          text-shadow: none;
        }

        .arc-os-product.is-active .arc-os-product-title {
          filter: none;
          transform: translateY(-2px) scale(1.02);
        }

        .arc-os-product.is-active .arc-os-title-letter-hot {
          animation: arcTitlePop 0.48s cubic-bezier(0.18, 1.18, 0.24, 1) both;
          filter: none;
        }

        .arc-os-product.is-active .arc-os-product-body {
          color: rgba(255, 255, 255, 0.92);
        }

        @keyframes arcTitlePop {
          0% {
            transform: translateY(9px) scale(0.78);
          }
          58% {
            transform: translateY(-6px) scale(1.2);
          }
          100% {
            transform: translateY(0) scale(1);
          }
        }

        .arc-os-product-c2 {
          display: inline-block;
          margin-left: 10px;
          font-size: 0.68em;
          vertical-align: 0.08em;
        }

        .arc-os-product-body {
          width: min(420px, 96%);
          margin: 8px auto 0;
          font-family: "Helvetica Now Display", "Helvetica", Arial, sans-serif;
          font-size: 16px;
          font-weight: 400;
          line-height: 1.28;
          letter-spacing: 0;
          color: var(--arc-muted);
        }

        .arc-os-product:first-child .arc-os-product-body {
          transform: translateX(-27px);
        }

        .arc-os-product:nth-child(2) .arc-os-product-body {
          transform: translate(-12px, 5px);
        }

        .arc-os-product:nth-child(3) .arc-os-product-body {
          font-size: 13px;
          transform: translateY(5px);
        }

        @keyframes arcLineRunX {
          0% {
            background-position: 0 0, -38% 0;
          }
          100% {
            background-position: 0 0, 138% 0;
          }
        }

        @keyframes arcLineRunY {
          0% {
            background-position: 0 0, 0 -54%;
          }
          100% {
            background-position: 0 0, 0 154%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .arc-os-divider-top,
          .arc-os-spine {
            animation: none;
          }
        }

        .arc-os-active-arrow {
          position: absolute;
          z-index: 4;
          left: 50%;
          top: var(--arc-products-top);
          --arc-route-duration: 2.65s;
          --arc-route-delay: 0.08s;
          /* Must track .arc-os-products width exactly — the svg is stretched
             (preserveAspectRatio: none) so path x coords hit the column centres. */
          width: min(1240px, 100vw);
          height: calc(var(--arc-panel-top) - var(--arc-products-top));
          pointer-events: none;
          overflow: visible;
          opacity: 0;
          transform: translateX(-50%) translateY(-12px);
          animation:
            arcTraceWrap 0.22s ease-out forwards,
            arcTraceFade 0.58s ease-in 3s forwards;
          will-change: opacity, transform;
        }

        /* Dash maths: with pathLength=1 and dasharray "trail 1", animating
           dashoffset from +trail to (trail - 1) makes the dash's LEADING edge
           track the animateMotion head exactly (head position = t), with the
           trail extending behind it — one segment, no wrap-around. */
        .arc-os-active-arrow-path {
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-dasharray: var(--arc-route-trail, 0.15) 1;
          stroke-dashoffset: var(--arc-route-trail, 0.15);
          opacity: 0;
          vector-effect: non-scaling-stroke;
          animation: arcRouteEnergy var(--arc-route-duration) linear var(--arc-route-delay) both;
        }

        .arc-os-command-trail {
          --arc-route-trail: 0.145;
          stroke: rgba(255, 255, 255, 0.92);
          stroke-width: 1.45;
          filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.72));
        }

        .arc-os-home-energy {
          --arc-route-trail: 0.18;
          stroke-width: 4.2;
          mix-blend-mode: screen;
          animation-name: arcRouteHomeEnergy;
        }

        .arc-os-home-spark {
          --arc-route-trail: 0.105;
          stroke-width: 1.18;
          mix-blend-mode: screen;
          animation-name: arcRouteHomeSpark;
        }

        @keyframes arcRouteEnergy {
          0% {
            opacity: 0;
            stroke-dashoffset: 0.145;
          }
          5% {
            opacity: 0.82;
          }
          88% {
            opacity: 0.9;
          }
          100% {
            opacity: 0.85;
            stroke-dashoffset: -0.855;
          }
        }

        @keyframes arcRouteHomeEnergy {
          0% {
            opacity: 0;
            stroke-dashoffset: 0.18;
          }
          6% {
            opacity: 0.42;
          }
          46% {
            opacity: 0.68;
          }
          100% {
            opacity: 0.5;
            stroke-dashoffset: -0.82;
          }
        }

        @keyframes arcRouteHomeSpark {
          0% {
            opacity: 0;
            stroke-dashoffset: 0.105;
          }
          8% {
            opacity: 0.72;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0.8;
            stroke-dashoffset: -0.895;
          }
        }

        .arc-os-arrow-origin {
          fill: rgba(255, 255, 255, 0.92);
          transform-box: fill-box;
          transform-origin: center;
          filter:
            drop-shadow(0 0 10px rgba(255, 255, 255, 0.82));
          opacity: 0;
          animation:
            arcOriginPop 0.22s ease-out 0.02s forwards,
            arcOriginFade 0.34s ease-in 0.56s forwards;
        }

        .arc-os-arrival-node {
          fill: ${HOME_LINE_YELLOW_STYLE.sparkCore};
          transform-box: fill-box;
          transform-origin: center;
          opacity: 0;
          filter:
            drop-shadow(0 0 8px rgba(var(--arc-spark-peak-rgb), 0.92))
            drop-shadow(0 0 18px rgba(var(--arc-yellow-rgb), 0.34));
          animation: arcArrivalLock 0.62s ease-out 2.7s forwards;
        }

        .arc-os-signal-head {
          opacity: 0;
          transform-box: fill-box;
          transform-origin: center;
          animation:
            arcSparkAppear 0.16s ease-out 0.08s forwards,
            arcSignalFade 0.46s ease-in 2.74s forwards;
        }

        .arc-os-signal-head-glow {
          fill: ${HOME_LINE_YELLOW_STYLE.sparkCore};
          opacity: 0.48;
          filter:
            drop-shadow(0 0 7px rgba(var(--arc-spark-peak-rgb), 0.98))
            drop-shadow(0 0 15px rgba(var(--arc-yellow-rgb), 0.34));
        }

        .arc-os-signal-head-core {
          fill: rgba(255, 255, 255, 0.98);
          filter:
            drop-shadow(0 0 7px rgba(255, 255, 255, 0.96))
            drop-shadow(0 0 12px rgba(var(--arc-yellow-rgb), 0.22));
        }

        .arc-os-signal-head-tail {
          fill: none;
          stroke-width: 1.65;
          stroke-linecap: round;
          filter:
            drop-shadow(0 0 5px rgba(var(--arc-spark-peak-rgb), 0.92))
            drop-shadow(0 0 10px rgba(var(--arc-yellow-rgb), 0.28));
          animation:
            arcSignalTailBreath 0.86s ease-in-out 0.18s infinite;
        }

        .arc-os-arrow-mobile {
          display: none;
        }

        @keyframes arcTraceWrap {
          0% {
            opacity: 0;
            transform: translateX(-50%) translateY(-12px);
          }
          100% {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }

        @keyframes arcTraceFade {
          to {
            opacity: 0;
          }
        }

        @keyframes arcArrivalLock {
          0% {
            opacity: 0;
            transform: scale(0.34);
          }
          34% {
            opacity: 1;
            transform: scale(1.78);
          }
          58% {
            opacity: 0.82;
            transform: scale(1.08);
          }
          100% {
            opacity: 0;
            transform: scale(2.28);
          }
        }

        @keyframes arcOriginPop {
          0% {
            opacity: 0;
            transform: scale(0.6);
          }
          100% {
            opacity: 0.9;
            transform: scale(1);
          }
        }

        @keyframes arcOriginFade {
          to {
            opacity: 0;
            transform: scale(1.5);
          }
        }

        @keyframes arcSparkAppear {
          to {
            opacity: 1;
          }
        }

        @keyframes arcSignalFade {
          to {
            opacity: 0;
          }
        }

        @keyframes arcSignalTailBreath {
          0%,
          100% {
            opacity: 0.58;
            stroke-width: 1.65;
          }
          50% {
            opacity: 1;
            stroke-width: 2.35;
          }
        }

        .arc-os-panel {
          /* Edit these three values to place the right-side vertical label. */
          --arc-panel-edge-label-right: clamp(-56px, -3.4vw, -46px);
          --arc-panel-edge-label-top: 70%;
          --arc-panel-edge-label-size: clamp(22px, 3.15vw, 38px);
          --arc-panel-radius: clamp(10px, 1vw, 14px);
          position: absolute;
          left: 50%;
          top: var(--arc-panel-top);
          width: min(1000px, 88%);
          aspect-ratio: 16 / 9;
          transform: translateX(-50%);
          border: 1px solid rgba(var(--arc-yellow-rgb), 0.86);
          border-radius: var(--arc-panel-radius);
          background:
            radial-gradient(circle at 11% 100%, rgba(82, 99, 225, 0.58) 0%, rgba(36, 47, 127, 0.36) 28%, rgba(0, 0, 0, 0) 54%),
            linear-gradient(180deg, rgba(4, 5, 12, 0.2), rgba(0, 0, 0, 0.82));
          box-shadow:
            inset 0 0 44px rgba(0, 0, 0, 0.72),
            0 0 0 1px rgba(var(--arc-yellow-rgb), 0.08);
          overflow: visible;
          isolation: isolate;
          transition:
            border-color 0.35s ease,
            box-shadow 0.35s ease;
        }

        .arc-os-panel-edge-label {
          position: absolute;
          z-index: 7;
          right: var(--arc-panel-edge-label-right);
          top: var(--arc-panel-edge-label-top);
          transform: translateY(-50%) rotate(180deg);
          writing-mode: vertical-rl;
          font-family: "Yapari Trial Regular", "Yapari Trial", "Azonix", sans-serif;
          font-size: var(--arc-panel-edge-label-size);
          font-weight: 400;
          line-height: 1;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.46);
          white-space: nowrap;
          pointer-events: none;
        }

        /* On larger screens the rail intentionally crosses the ARC -> Drone
           boundary. Drone owns that copy so the next stacking context cannot
           clip it; the panel copy remains the compact-screen version. */
        @media (min-width: 761px) {
          .arc-os-panel-edge-label {
            display: none;
          }
        }

        .arc-os-panel::before,
        .arc-os-panel::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          pointer-events: none;
        }

        .arc-os-panel::before {
          z-index: 1;
          background:
            linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
            linear-gradient(180deg, rgba(255, 255, 255, 0.07) 1px, transparent 1px);
          background-size: 78px 78px;
          mask-image: radial-gradient(circle at 50% 46%, rgba(0, 0, 0, 0.74), transparent 74%);
          opacity: 0.16;
        }

        .arc-os-panel::after {
          z-index: 4;
          background:
            linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.18) 58%, rgba(0, 0, 0, 0.82) 100%),
            radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.16), transparent 44%);
        }

        .arc-os-panel.is-active {
          border-color: rgba(var(--arc-yellow-rgb), 0.94);
          box-shadow:
            inset 0 0 54px rgba(0, 0, 0, 0.84),
            0 0 42px rgba(var(--arc-yellow-rgb), 0.16),
            0 0 0 1px rgba(var(--arc-yellow-rgb), 0.14);
          animation: arcPanelBorderLock 1.08s ease-out 2.62s both;
        }

        .arc-os-panel-target {
          position: absolute;
          z-index: 6;
          left: 50%;
          top: 50%;
          width: min(270px, 54%);
          aspect-ratio: 1;
          border: 1px solid rgba(255, 255, 255, 0.24);
          border-radius: 999px;
          pointer-events: none;
          opacity: 0;
          transform: translate(-50%, -50%) scale(0.22);
          box-shadow:
            0 0 24px rgba(255, 255, 255, 0.18),
            inset 0 0 34px rgba(var(--arc-yellow-rgb), 0.08);
          animation: arcPanelTargetPop 0.86s cubic-bezier(0.12, 1.12, 0.24, 1) 2.7s forwards;
        }

        .arc-os-panel-target::before,
        .arc-os-panel-target::after {
          content: "";
          position: absolute;
          inset: 50% auto auto 50%;
          background: rgba(255, 255, 255, 0.38);
          transform: translate(-50%, -50%);
        }

        .arc-os-panel-target::before {
          width: 112%;
          height: 1px;
        }

        .arc-os-panel-target::after {
          width: 1px;
          height: 112%;
        }

        .arc-os-panel-video {
          position: absolute;
          z-index: 2;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: calc(var(--arc-panel-radius) - 1px);
          opacity: 1;
          filter: saturate(0.96) contrast(1.06) brightness(0.82);
          box-shadow:
            0 -18px 34px rgba(255, 255, 255, 0.1),
            0 24px 48px rgba(0, 0, 0, 0.42);
          pointer-events: none;
        }

        .arc-os-panel-scan {
          position: absolute;
          z-index: 3;
          left: 28px;
          right: 28px;
          top: 34px;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(var(--arc-spark-yellow-rgb), 0.45),
            rgba(var(--arc-spark-peak-rgb), 1),
            rgba(var(--arc-spark-yellow-rgb), 0.45),
            transparent
          );
          opacity: 0;
          box-shadow:
            0 0 8px rgba(var(--arc-spark-peak-rgb), 0.94),
            0 0 22px rgba(var(--arc-yellow-rgb), 0.22);
          animation: arcPanelScan 1.14s ease-out 2.76s forwards;
        }

        .arc-os-panel-burst {
          position: absolute;
          z-index: 5;
          inset: 24px;
          border-radius: 72px;
          pointer-events: none;
          opacity: 0;
          background:
            linear-gradient(110deg, transparent 0%, rgba(var(--arc-spark-peak-rgb), 0.72) 48%, transparent 62%),
            radial-gradient(circle at 50% 48%, rgba(var(--arc-yellow-rgb), 0.18), transparent 58%);
          mix-blend-mode: screen;
          transform: translateX(-48%) skewX(-12deg);
          animation: arcPanelBurst 0.78s cubic-bezier(0.16, 1, 0.3, 1) 2.8s forwards;
        }

        .arc-os-panel-caption {
          position: absolute;
          z-index: 5;
          left: 50%;
          bottom: 18px;
          width: min(820px, calc(100% - 72px));
          transform: translateX(-50%);
          font-family: "SourceCodePro", "Source Code Pro", ui-monospace, monospace;
          font-size: 12px;
          line-height: 1.2;
          letter-spacing: 0.02em;
          text-align: center;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.72);
          opacity: 0;
          animation: arcPanelTextPop 0.34s ease-out 3.26s forwards;
        }

        @keyframes arcPanelImagePop {
          0% {
            opacity: 0;
            clip-path: inset(0 48% 94% 48% round 88px);
            filter: saturate(0.72) contrast(1.22) brightness(0.54);
            transform: translateY(-34px) scale(0.7);
          }
          16% {
            opacity: 1;
            clip-path: inset(0 34% 78% 34% round 82px);
            filter: saturate(1.06) contrast(1.18) brightness(1.12);
            transform: translateY(-30px) scale(0.9);
          }
          42% {
            opacity: 1;
            clip-path: inset(0 12% 18% 12% round 78px);
            filter: saturate(1.18) contrast(1.2) brightness(1.18);
            transform: translateY(-28px) scale(1.105);
          }
          66% {
            opacity: 1;
            clip-path: inset(0 0 0 0 round 78px);
            filter: saturate(1.08) contrast(1.16) brightness(1.04);
            transform: translateY(-20px) scale(1.065);
          }
          84% {
            opacity: 1;
            clip-path: inset(0 0 0 0 round 78px);
            filter: saturate(0.98) contrast(1.11) brightness(0.9);
            transform: translateY(-12px) scale(1.012);
          }
          100% {
            opacity: 1;
            clip-path: inset(0 0 0 0 round 78px);
            filter: saturate(0.96) contrast(1.08) brightness(0.86);
            transform: translateY(-28px) scale(1.045);
          }
        }

        @keyframes arcPanelImageSettle {
          0%,
          100% {
            transform: translateY(-28px) scale(1.045);
          }
          50% {
            transform: translateY(-32px) scale(1.052);
          }
        }

        @keyframes arcPanelTargetPop {
          0% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.18) rotate(-18deg);
          }
          34% {
            opacity: 0.86;
            transform: translate(-50%, -50%) scale(1.12) rotate(0deg);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(1.52) rotate(8deg);
          }
        }

        @keyframes arcPanelBurst {
          0% {
            opacity: 0;
            transform: translateX(-46%) skewX(-12deg);
          }
          20%,
          54% {
            opacity: 0.72;
          }
          100% {
            opacity: 0;
            transform: translateX(46%) skewX(-12deg);
          }
        }

        @keyframes arcPanelScan {
          0% {
            opacity: 0;
            transform: translateY(0);
          }
          18%,
          66% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateY(316px);
          }
        }

        @keyframes arcPanelTextPop {
          to {
            opacity: 1;
          }
        }

        @keyframes arcPanelBorderLock {
          0%,
          100% {
            border-color: rgba(var(--arc-yellow-rgb), 0.94);
            box-shadow:
              inset 0 0 54px rgba(0, 0, 0, 0.84),
              0 0 42px rgba(var(--arc-yellow-rgb), 0.16),
              0 0 0 1px rgba(var(--arc-yellow-rgb), 0.14);
          }
          36% {
            border-color: rgba(var(--arc-peak-yellow-rgb), 0.98);
            box-shadow:
              inset 0 0 58px rgba(0, 0, 0, 0.84),
              0 0 10px rgba(var(--arc-spark-peak-rgb), 0.32),
              0 0 34px rgba(var(--arc-spark-yellow-rgb), 0.24),
              0 0 58px rgba(var(--arc-yellow-rgb), 0.3),
              0 0 0 1px rgba(var(--arc-peak-yellow-rgb), 0.28);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .arc-os-product.is-active .arc-os-title-letter-hot,
          .arc-os-target-frame,
          .arc-os-active-arrow,
          .arc-os-active-arrow-path,
          .arc-os-signal-head,
          .arc-os-signal-head-tail,
          .arc-os-arrow-origin,
          .arc-os-arrival-node,
          .arc-os-panel.is-active,
          .arc-os-panel-video,
          .arc-os-panel-scan,
          .arc-os-panel-burst,
          .arc-os-panel-target,
          .arc-os-panel-caption {
            animation: none;
          }

          .arc-os-active-arrow,
          .arc-os-signal-head,
          .arc-os-arrow-origin,
          .arc-os-arrival-node,
          .arc-os-panel-video,
          .arc-os-panel-caption {
            opacity: 1;
          }

          .arc-os-panel-video {
            clip-path: inset(0 0 0 0 round 72px);
            filter: saturate(0.96) contrast(1.08) brightness(0.86);
            transform: none;
          }

          .arc-os-active-arrow-path {
            opacity: 1;
            stroke-dashoffset: 0;
            stroke-dasharray: 1 0;
          }

        }

        @media (min-width: 1440px) {
          .arc-os-shell {
            width: min(1320px, calc(100% - 72px));
          }

          .arc-os-logo {
            gap: 84px;
            font-size: 188px;
          }

          .arc-os-copy {
            right: 206px;
            top: 124px;
            width: 470px;
            font-size: 6.7px;
          }

          .arc-os-products {
            width: min(1260px, 100%);
          }

          .arc-os-active-arrow {
            width: min(1260px, 100%);
          }

          .arc-os-product-title {
            font-size: 58px;
          }
        }

        @media (max-width: 1024px) {
          .arc-os-section {
            padding-top: 58px;
            padding-bottom: 75px;
          }

          .arc-os-shell {
            min-height: 980px;
          }

          .arc-os-section {
            --arc-line-center-gap: 22px;
            --arc-products-top: 298px;
            --arc-panel-top: 572px;
            --arc-war-top: 136px;
            --arc-copy-top: 130px;
            --arc-copy-right: 14px;
            --arc-copy-width: clamp(230px, calc(51vw - 100px), 324px);
            --arc-upper-spine-top: 154px;
            --arc-upper-spine-end: 268px;
          }

          .arc-os-lockup,
          .arc-os-logo {
            gap: 42px;
          }

          .arc-os-logo {
            font-size: 118px;
          }

          .arc-os-tagline {
            top: -48px;
            font-size: 12px;
          }

          .arc-os-top-guide {
            top: -58px;
          }

          .arc-os-war {
            font-size: 20px;
          }

          .arc-os-ca {
            left: -28px;
            top: calc(100% + 22px);
          }

          .arc-os-copy {
            font-size: 6px;
          }

          .arc-os-divider-top {
            top: 196px;
          }

          .arc-os-products {
            top: var(--arc-products-top);
          }

          .arc-os-product-title {
            font-size: clamp(26px, 3.72vw, 38px);
          }

          .arc-os-product:first-child .arc-os-product-lock {
            transform: translateX(-1.2vw);
          }

          .arc-os-product:nth-child(2) .arc-os-product-lock {
            font-size: clamp(23px, 3.32vw, 34px);
            transform: translateX(-0.8vw);
          }

          .arc-os-product:nth-child(3) .arc-os-product-lock {
            font-size: clamp(24px, 3.52vw, 36px);
            transform: translateX(2.4vw);
          }

          .arc-os-product:first-child .arc-os-product-body {
            transform: translateX(-1.9vw);
          }

          .arc-os-product:nth-child(2) .arc-os-product-body {
            transform: translate(-0.85vw, 5px);
          }

          .arc-os-product-body {
            font-size: 14px;
          }

          .arc-os-panel {
            top: var(--arc-panel-top);
          }

          .arc-os-panel-burst {
            border-radius: var(--arc-panel-radius);
          }
        }

        @media (max-width: 760px) {
          .arc-os-section {
            --arc-line-left: 7%;
            --arc-line-right: 7%;
            --arc-line-center-gap: 18px;
            --arc-war-top: 92px;
            --arc-copy-top: 132px;
            --arc-copy-right: auto;
            --arc-copy-width: min(360px, 88vw);
            --arc-upper-spine-top: 115px;
            --arc-upper-spine-end: 356px;
            padding: 46px 0 86px;
          }

          .arc-os-shell {
            width: min(100% - 28px, 620px);
            min-height: 1250px;
          }

          .arc-os-lockup,
          .arc-os-logo {
            gap: 22px;
          }

          .arc-os-logo {
            font-size: clamp(58px, 15.5vw, 84px);
            transform: none;
          }

          .arc-os-tagline {
            top: -34px;
            max-width: 88vw;
            overflow: hidden;
            font-size: 9px;
            text-overflow: ellipsis;
          }

          .arc-os-top-guide {
            display: none;
          }

          .arc-os-war {
            font-size: clamp(10px, 2.8vw, 13px);
          }

          .arc-os-ca {
            display: none;
          }

          .arc-os-copy {
            left: 50%;
            right: auto;
            width: min(440px, 84vw);
            transform: translateX(-50%);
            text-align: center;
            font-size: clamp(7px, 1.9vw, 8.5px);
            line-height: 1.24;
          }

          .arc-os-copy-line {
            white-space: normal;
          }

          .arc-os-divider-top {
            left: 7%;
            right: 7%;
            top: 292px;
          }

          .arc-os-spine {
            opacity: 0.72;
          }

          .arc-os-products {
            z-index: 3;
            top: 366px;
            grid-template-columns: 1fr;
            row-gap: 52px;
          }

          .arc-os-product {
            min-height: 142px;
          }

          .arc-os-product:first-child .arc-os-product-lock,
          .arc-os-product:nth-child(2) .arc-os-product-lock,
          .arc-os-product:nth-child(3) .arc-os-product-lock,
          .arc-os-product:first-child .arc-os-product-body,
          .arc-os-product:nth-child(2) .arc-os-product-body,
          .arc-os-product:nth-child(3) .arc-os-product-body {
            transform: none;
          }

          .arc-os-product-title {
            font-size: clamp(36px, 11.2vw, 52px);
            letter-spacing: clamp(2px, 1vw, 4px);
          }

          .arc-os-product:nth-child(2) .arc-os-product-title,
          .arc-os-product:nth-child(3) .arc-os-product-title {
            font-size: clamp(34px, 10.8vw, 50px);
          }

          .arc-os-product-body {
            width: min(380px, 86vw);
            margin-top: 12px;
            font-size: clamp(13px, 3.55vw, 16px);
            line-height: 1.25;
          }

          .arc-os-product:nth-child(3) .arc-os-product-body {
            font-size: clamp(13px, 3.55vw, 16px);
          }

          .arc-os-active-arrow {
            left: 50%;
            z-index: 1;
            width: min(500px, 92%);
            min-height: 0;
            opacity: 0.72;
          }

          .arc-os-arrow-desktop {
            display: none;
          }

          .arc-os-arrow-mobile {
            display: inline;
          }

          .arc-os-active-arrow--hyena {
            top: 414px;
            height: 518px;
          }

          .arc-os-active-arrow--sentinel {
            top: 608px;
            height: 320px;
          }

          .arc-os-active-arrow--arc-c2 {
            top: 794px;
            height: 136px;
          }

          .arc-os-panel {
            --arc-panel-edge-label-right: clamp(-30px, -6.6vw, -22px);
            --arc-panel-edge-label-size: clamp(10px, 3.1vw, 15px);
            z-index: 2;
            top: 930px;
            width: min(500px, 92%);
          }

          .arc-os-panel-edge-label {
            letter-spacing: 0.1em;
          }

          .arc-os-panel-video {
            inset: 0;
            width: 100%;
            height: 100%;
          }

          .arc-os-panel-burst {
            inset: 12px;
            border-radius: var(--arc-panel-radius);
          }

          .arc-os-panel-caption {
            bottom: 14px;
            width: calc(100% - 46px);
            font-size: 10px;
          }
        }

        @media (max-width: 420px) {
          .arc-os-shell {
            min-height: 1240px;
          }

          .arc-os-logo {
            gap: 14px;
            font-size: 52px;
          }

          .arc-os-war {
            top: 72px;
            font-size: 10px;
          }

          .arc-os-copy {
            top: 112px;
            width: min(330px, 86vw);
            font-size: 6.8px;
          }

          .arc-os-divider-top {
            top: 270px;
          }

          .arc-os-spine {
            top: 94px;
            height: 224px;
          }

          .arc-os-products {
            top: 338px;
            row-gap: 46px;
          }

          .arc-os-product-title {
            font-size: clamp(30px, 9.6vw, 36px);
          }

          .arc-os-product:nth-child(2) .arc-os-product-title,
          .arc-os-product:nth-child(3) .arc-os-product-title {
            font-size: clamp(29px, 9.2vw, 34px);
          }

          .arc-os-product-body {
            font-size: 13px;
          }

          .arc-os-active-arrow {
            width: min(420px, 92%);
          }

          .arc-os-active-arrow--hyena {
            top: 384px;
            height: 516px;
          }

          .arc-os-active-arrow--sentinel {
            top: 562px;
            height: 334px;
          }

          .arc-os-active-arrow--arc-c2 {
            top: 732px;
            height: 164px;
          }

          .arc-os-panel {
            --arc-panel-edge-label-right: -22px;
            --arc-panel-edge-label-size: 9px;
            top: 896px;
          }

          .arc-os-panel-video {
            inset: 0;
            width: 100%;
            height: 100%;
          }

          .arc-os-panel-burst {
            inset: 10px;
            border-radius: var(--arc-panel-radius);
          }

          .arc-os-panel-caption {
            bottom: 12px;
            width: calc(100% - 34px);
            font-size: 8.5px;
          }
        }
      `}</style>

      <div className="arc-os-shell">
        <span className="arc-os-top-guide" aria-hidden="true" />
        <div className="arc-os-lockup" aria-label="ARC OS">
          <div className="arc-os-logo">
            <span className="arc-os-logo-part">
              ARC
              <span className="arc-os-ca" aria-hidden="true">
                <span className="arc-os-ca-code">&lt;CA1-AAA3&gt;</span>
                <span className="arc-os-ca-c2">C2</span>
              </span>
            </span>
            <span className="arc-os-logo-part">
              <span className="arc-os-logo-o">O</span>S
            </span>
          </div>
          <span className="arc-os-war">Agentic Warfare</span>
        </div>
        <p className="arc-os-copy">
          {connectedCopyLines.map((line) => (
            <span className="arc-os-copy-line" key={line}>
              {line}
            </span>
          ))}
        </p>
        <div className="arc-os-divider-top" aria-hidden="true" />
        <div className="arc-os-spine" aria-hidden="true" />

        <div className="arc-os-products">
          {products.map((product) => (
            <article
              className={`arc-os-product ${activeProductId === product.id ? "is-active" : ""}`}
              key={product.id}
              onPointerEnter={() => handlePointerEnter(product.id)}
              onPointerLeave={handlePointerLeave}
              onPointerMove={handlePointerMove}
            >
              <button
                aria-pressed={activeProductId === product.id}
                className="arc-os-product-trigger"
                onBlur={handlePointerLeave}
                onClick={() => handleProductClick(product.id)}
                onFocus={() => handlePointerEnter(product.id)}
                type="button"
              >
                <div className="arc-os-product-lock">
                  <span className="arc-os-target-frame" aria-hidden="true">
                    <span className="arc-os-target-corner arc-os-target-corner--tl" />
                    <span className="arc-os-target-corner arc-os-target-corner--tr" />
                    <span className="arc-os-target-corner arc-os-target-corner--bl" />
                    <span className="arc-os-target-corner arc-os-target-corner--br" />
                  </span>
                  <h2 className="arc-os-product-title">
                    <ProductTitle product={product} />
                  </h2>
                </div>
                <p className="arc-os-product-body">{product.body}</p>
              </button>
            </article>
          ))}
        </div>

        {activeProduct ? <ActiveArrow product={activeProduct} /> : null}

        <div className={`arc-os-panel ${activeProduct ? "is-active" : ""}`} aria-live="polite">
          <span className="arc-os-panel-edge-label" aria-hidden="true">TEAMING AT THE EDGE</span>
          <video
            aria-label="ARC OS three core systems"
            autoPlay
            className="arc-os-panel-video"
            disablePictureInPicture
            loop
            muted
            playsInline
            preload="auto"
            src={arcSystemsVideo}
          />
          {activeProduct ? (
            <>
              <span className="arc-os-panel-target" aria-hidden="true" />
              <span className="arc-os-panel-scan" aria-hidden="true" />
              <span className="arc-os-panel-burst" aria-hidden="true" />
              <p className="arc-os-panel-caption" key={`${activeProduct.id}-caption`}>
                {activeProduct.body}
              </p>
            </>
          ) : null}
        </div>
      </div>
    </section>
  );
}
