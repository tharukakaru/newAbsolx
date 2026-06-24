import { useEffect, useRef, useState } from "react";
import arcImage from "../assets/arc.jpg";
import hyenaImage from "../assets/Heyna.jpg";
import sentinelImage from "../assets/sentinel.jpg";

const connectedCopy =
  "Connected Warfare ensures U.S. and allied forces win at the edge, in fast-moving and contested environments where decisions must be made in seconds. We build AI-driven systems that connect sensors, shooters, and decision-makers for faster, smarter, and more resilient operations when every second counts.";

const products = [
  {
    id: "hyena",
    title: "HYENA",
    body: "Agentic Autonomous Pilot of ARC OS",
    image: hyenaImage,
    imageAlt: "HYENA autonomous pilot visual",
    highlightIndex: 2,
    arrowTone: "left",
  },
  {
    id: "sentinel",
    title: "SENTINEL",
    body: "Integrated Air Surveillance & Counter-UAS Layer",
    image: sentinelImage,
    imageAlt: "SENTINEL air surveillance visual",
    highlightIndex: 3,
    arrowTone: "center",
  },
  {
    id: "arc-c2",
    title: "ARC C2",
    body: "Command & Control (C2) is an AI-powered battle management",
    image: arcImage,
    imageAlt: "ARC C2 command and control visual",
    highlightIndex: 1,
    arrowTone: "right",
  },
];

const arrowGeometry = {
  left: {
    desktopPath: "M187 8 L187 138 Q187 158 207 158 L540 158 Q560 158 560 178 L560 294",
    mobilePath: "M560 8 L560 294",
    startX: 187,
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
    desktopPath: "M933 8 L933 138 Q933 158 913 158 L580 158 Q560 158 560 178 L560 294",
    mobilePath: "M560 8 L560 294",
    startX: 933,
    startY: 8,
    endX: 560,
  },
};

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

function ActiveArrow({ product }) {
  const geometry = arrowGeometry[product.arrowTone];
  const glowFilterId = `arc-arrow-glow-${product.id}`;

  return (
    <svg
      className={`arc-os-active-arrow arc-os-active-arrow--${product.id}`}
      viewBox="0 0 1120 294"
      aria-hidden="true"
      key={product.id}
    >
      <defs>
        <filter id={glowFilterId} x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="2.8" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path
        className="arc-os-wire-bg arc-os-arrow-desktop"
        d={geometry.desktopPath}
        fill="none"
      />
      <path
        className="arc-os-wire-bg arc-os-arrow-mobile"
        d={geometry.mobilePath}
        fill="none"
      />
      <path
        className="arc-os-active-arrow-path arc-os-trace-glow arc-os-arrow-desktop"
        d={geometry.desktopPath}
        fill="none"
        filter={`url(#${glowFilterId})`}
        pathLength="1"
      />
      <path
        className="arc-os-active-arrow-path arc-os-trace-core arc-os-arrow-desktop"
        d={geometry.desktopPath}
        fill="none"
        pathLength="1"
      />
      <path
        className="arc-os-active-arrow-path arc-os-trace-glow arc-os-arrow-mobile"
        d={geometry.mobilePath}
        fill="none"
        filter={`url(#${glowFilterId})`}
        pathLength="1"
      />
      <path
        className="arc-os-active-arrow-path arc-os-trace-core arc-os-arrow-mobile"
        d={geometry.mobilePath}
        fill="none"
        pathLength="1"
      />
      <circle className="arc-os-arrow-origin arc-os-arrow-desktop" cx={geometry.startX} cy={geometry.startY} r="3.4" />
      <circle className="arc-os-arrow-origin arc-os-arrow-mobile" cx="560" cy="8" r="3.4" />
      <circle className="arc-os-arrival-node arc-os-arrow-desktop" cx={geometry.endX} cy="294" r="4.2" />
      <circle className="arc-os-arrival-node arc-os-arrow-mobile" cx="560" cy="294" r="4.2" />
      <g className="arc-os-signal-head arc-os-arrow-desktop" filter={`url(#${glowFilterId})`}>
        <path className="arc-os-signal-head-tail" d="M-18 0 L-5 0" />
        <path className="arc-os-signal-head-core" d="M8 0 L-7 -6 L-3 0 L-7 6 Z" />
        <animateMotion begin="0.08s" dur="3.8s" repeatCount="indefinite" path={geometry.desktopPath} rotate="auto" />
      </g>
      <g className="arc-os-signal-head arc-os-arrow-mobile" filter={`url(#${glowFilterId})`}>
        <path className="arc-os-signal-head-tail" d="M-18 0 L-5 0" />
        <path className="arc-os-signal-head-core" d="M8 0 L-7 -6 L-3 0 L-7 6 Z" />
        <animateMotion begin="0.08s" dur="3.8s" repeatCount="indefinite" path={geometry.mobilePath} rotate="auto" />
      </g>
    </svg>
  );
}

export default function Arc() {
  const sectionRef = useRef(null);
  const [activeProductId, setActiveProductId] = useState(null);
  const [pinnedProductId, setPinnedProductId] = useState(null);

  const activeProduct = products.find((product) => product.id === activeProductId);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || entry.intersectionRatio < 0.12) {
          setActiveProductId(null);
          setPinnedProductId(null);
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

  const handlePointerLeave = () => {
    return undefined;
  };

  const handleProductClick = (productId) => {
    setPinnedProductId(productId);
    setActiveProductId(productId);
  };

  return (
    <section ref={sectionRef} className="arc-os-section relative isolate overflow-hidden bg-black text-white">
      <style>{`
        .arc-os-section {
          --arc-yellow: #F4ED15;
          --arc-line: rgba(255, 255, 255, 0.72);
          --arc-muted: rgba(255, 255, 255, 0.72);
          --arc-faint: rgba(255, 255, 255, 0.42);
          --arc-line-left: 11.5%;
          --arc-line-right: 15.2%;
          --arc-line-center-gap: 26px;
          --arc-products-top: 332px;
          --arc-product-line-top: 158px;
          --arc-lower-spine-top: 112px;
          --arc-panel-top: 626px;
          --arc-war-top: 166px;
          --arc-copy-top: 158px;
          --arc-copy-right: 42px;
          --arc-copy-width: 430px;
          --arc-upper-spine-top: 186px;
          --arc-upper-spine-end: 300px;
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
          gap: 62px;
          padding-top: 4px;
        }

        .arc-os-logo {
          display: flex;
          align-items: flex-start;
          gap: 62px;
          font-family: "Yapari Trial", "Yapari Trial Regular", "Azonix", sans-serif;
          font-size: 164px;
          font-weight: 700;
          line-height: 0.68;
          letter-spacing: 0;
          text-transform: uppercase;
          white-space: nowrap;
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
          left: 50%;
          top: var(--arc-war-top);
          transform: translateX(-50%);
          font-family: "SourceCodePro", "Source Code Pro", ui-monospace, monospace;
          font-size: 16px;
          font-weight: 400;
          line-height: 1;
          letter-spacing: 0;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .arc-os-ca {
          position: absolute;
          left: -52px;
          top: calc(100% + 26px);
          display: flex;
          align-items: center;
          gap: 9px;
          color: #fff;
          white-space: nowrap;
        }

        .arc-os-ca-code {
          font-family: "Helvetica Now Display", "Helvetica", Arial, sans-serif;
          font-size: 8px;
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
          font-family: "Helvetica Now Display", "Helvetica", Arial, sans-serif;
          font-size: 6.4px;
          font-weight: 400;
          line-height: 1.08;
          letter-spacing: 0;
          text-align: right;
          text-transform: uppercase;
          color: var(--arc-faint);
        }

        .arc-os-divider-top {
          position: absolute;
          left: var(--arc-line-left);
          right: var(--arc-line-right);
          top: 230px;
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

        .arc-os-spine {
          position: absolute;
          left: 50%;
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
          width: min(1120px, 100%);
          grid-template-columns: repeat(3, minmax(0, 1fr));
          transform: translateX(-50%);
        }

        .arc-os-products::before,
        .arc-os-products::after {
          content: "";
          position: absolute;
          top: var(--arc-product-line-top);
          height: 1px;
          background:
            linear-gradient(90deg, transparent, var(--arc-line) 10%, var(--arc-line) 90%, transparent),
            linear-gradient(90deg, transparent 0%, rgba(255, 255, 210, 0.08) 18%, rgba(255, 255, 180, 0.26) 38%, rgba(255, 255, 255, 0.88) 50%, rgba(255, 255, 150, 0.26) 62%, rgba(255, 255, 120, 0.08) 82%, transparent 100%);
          background-repeat: no-repeat;
          background-size: 100% 100%, 34% 100%;
          background-position: 0 0, -38% 0;
          filter: drop-shadow(0 0 4px rgba(255, 255, 160, 0.16));
          will-change: background-position;
          animation: arcLineRunX 3.9s linear infinite;
        }

        .arc-os-products::before {
          left: var(--arc-line-left);
          right: calc(50% + var(--arc-line-center-gap));
        }

        .arc-os-products::after {
          left: calc(50% + var(--arc-line-center-gap));
          right: var(--arc-line-right);
        }

        .arc-os-product {
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
          outline: 1px solid rgba(244, 237, 21, 0.88);
          outline-offset: 10px;
        }

        .arc-os-product-title {
          margin: 0;
          font-family: "Yapari Trial", "Yapari Trial Regular", "Azonix", sans-serif;
          font-size: 52px;
          font-weight: 700;
          line-height: 0.82;
          letter-spacing: 0;
          text-transform: uppercase;
          white-space: nowrap;
          transition:
            color 0.25s ease,
            filter 0.25s ease,
            transform 0.25s ease;
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
          text-shadow:
            0 0 8px rgba(244, 237, 21, 0.45),
            0 0 22px rgba(244, 237, 21, 0.18);
        }

        .arc-os-product.is-active .arc-os-product-title {
          filter: drop-shadow(0 0 16px rgba(255, 255, 255, 0.28));
          transform: translateY(-4px) scale(1.055);
        }

        .arc-os-product.is-active .arc-os-title-letter-hot {
          animation: arcTitlePop 0.48s cubic-bezier(0.18, 1.18, 0.24, 1) both;
          filter: drop-shadow(0 0 14px rgba(244, 237, 21, 0.56));
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
          width: min(270px, 86%);
          margin: 18px auto 0;
          font-family: "Helvetica Now Display", "Helvetica", Arial, sans-serif;
          font-size: 16px;
          font-weight: 400;
          line-height: 1.28;
          letter-spacing: 0;
          color: var(--arc-muted);
        }

        .arc-os-product-rule {
          position: absolute;
          bottom: 0;
          display: none;
          height: 1px;
          background:
            linear-gradient(90deg, transparent, var(--arc-line) 10%, var(--arc-line) 90%, transparent),
            linear-gradient(90deg, transparent 0%, rgba(255, 255, 210, 0.08) 18%, rgba(255, 255, 180, 0.26) 38%, rgba(255, 255, 255, 0.88) 50%, rgba(255, 255, 150, 0.26) 62%, rgba(255, 255, 120, 0.08) 82%, transparent 100%);
          background-repeat: no-repeat;
          background-size: 100% 100%, 34% 100%;
          background-position: 0 0, -38% 0;
          filter: drop-shadow(0 0 4px rgba(255, 255, 160, 0.16));
          will-change: background-position;
          animation: arcLineRunX 3.9s linear infinite;
        }

        .arc-os-product:first-child .arc-os-product-rule {
          left: 18%;
          right: 4%;
        }

        .arc-os-product:nth-child(3) .arc-os-product-rule {
          left: 4%;
          right: 18%;
        }

        .arc-os-product:nth-child(2)::after {
          content: "";
          position: absolute;
          left: 50%;
          top: var(--arc-lower-spine-top);
          width: 1px;
          height: calc(var(--arc-panel-top) - var(--arc-products-top) - var(--arc-lower-spine-top));
          background:
            linear-gradient(180deg, var(--arc-line), rgba(255, 255, 255, 0.2)),
            linear-gradient(180deg, transparent 0%, rgba(255, 255, 210, 0.08) 18%, rgba(255, 255, 180, 0.24) 38%, rgba(255, 255, 255, 0.86) 50%, rgba(255, 255, 150, 0.24) 62%, rgba(255, 255, 120, 0.08) 82%, transparent 100%);
          background-repeat: no-repeat;
          background-size: 100% 100%, 100% 48%;
          background-position: 0 0, 0 -54%;
          filter: drop-shadow(0 0 4px rgba(255, 255, 160, 0.18));
          will-change: background-position;
          transform: translateX(-50%);
          animation: arcLineRunY 4s linear infinite;
        }

        .arc-os-products::after,
        .arc-os-product-rule {
          animation-delay: 0.42s;
        }

        .arc-os-product:nth-child(2)::after {
          animation-delay: 0.18s;
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
          .arc-os-spine,
          .arc-os-products::before,
          .arc-os-products::after,
          .arc-os-product-rule,
          .arc-os-product:nth-child(2)::after {
            animation: none;
          }
        }

        .arc-os-active-arrow {
          position: absolute;
          z-index: 4;
          left: 50%;
          top: var(--arc-products-top);
          width: min(1120px, 100%);
          height: calc(var(--arc-panel-top) - var(--arc-products-top));
          min-height: 294px;
          pointer-events: none;
          overflow: visible;
          opacity: 0;
          transform: translateX(-50%) translateY(-12px);
          animation: arcTraceWrap 0.45s ease-out forwards;
          will-change: opacity, transform;
        }

        .arc-os-active-arrow-path {
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .arc-os-trace-core {
          stroke: rgba(255, 255, 255, 0.96);
          stroke-width: 1.6;
          stroke-dasharray: 0.08 0.92;
          stroke-dashoffset: 0;
          animation: arcTraceCurrent 3.8s linear 0.08s infinite;
        }

        .arc-os-trace-glow {
          stroke: rgba(255, 255, 255, 0.14);
          stroke-width: 4;
          stroke-dasharray: 0.11 0.89;
          stroke-dashoffset: 0;
          opacity: 0.48;
          animation: arcTraceCurrent 3.8s linear 0.08s infinite;
        }

        .arc-os-arrow-origin {
          fill: rgba(255, 255, 255, 0.92);
          transform-box: fill-box;
          transform-origin: center;
          filter:
            drop-shadow(0 0 10px rgba(255, 255, 255, 0.82));
          opacity: 0;
          animation: arcOriginPop 0.28s ease-out 0.02s forwards;
        }

        .arc-os-arrival-node {
          fill: rgba(255, 255, 255, 0.98);
          transform-box: fill-box;
          transform-origin: center;
          opacity: 0;
          filter:
            drop-shadow(0 0 8px rgba(255, 255, 255, 0.82));
          animation: arcArrivalLock 0.52s ease-out 1.86s forwards;
        }

        .arc-os-signal-head {
          opacity: 0;
          transform-box: fill-box;
          transform-origin: center;
          animation: arcSparkAppear 0.18s ease-out 0.08s forwards;
        }

        .arc-os-signal-head-core {
          fill: rgba(255, 255, 255, 0.98);
          filter:
            drop-shadow(0 0 8px rgba(255, 255, 255, 0.96));
        }

        .arc-os-signal-head-tail {
          fill: none;
          stroke: rgba(255, 255, 255, 0.72);
          stroke-width: 2;
          stroke-linecap: round;
          filter:
            drop-shadow(0 0 6px rgba(255, 255, 255, 0.74));
          animation:
            arcSignalTailBreath 0.92s ease-in-out 0.18s infinite;
        }

        .arc-os-arrow-mobile {
          display: none;
        }

        .arc-os-wire-bg {
          stroke: rgba(255, 255, 255, 0.1);
          stroke-width: 1.5;
          stroke-linecap: round;
          stroke-linejoin: round;
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

        @keyframes arcTraceCurrent {
          0% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: -1;
          }
        }

        @keyframes arcArrivalLock {
          0% {
            opacity: 0;
            transform: scale(0.34);
          }
          48% {
            opacity: 1;
            transform: scale(1.6);
          }
          100% {
            opacity: 0.9;
            transform: scale(1);
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

        @keyframes arcSparkAppear {
          to {
            opacity: 1;
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
          position: absolute;
          left: 50%;
          top: var(--arc-panel-top);
          width: min(1000px, 88%);
          height: 432px;
          transform: translateX(-50%);
          border: 1px solid rgba(244, 237, 21, 0.86);
          border-radius: 92px;
          background:
            radial-gradient(circle at 11% 100%, rgba(82, 99, 225, 0.58) 0%, rgba(36, 47, 127, 0.36) 28%, rgba(0, 0, 0, 0) 54%),
            linear-gradient(180deg, rgba(4, 5, 12, 0.2), rgba(0, 0, 0, 0.82));
          box-shadow:
            inset 0 0 44px rgba(0, 0, 0, 0.72),
            0 0 0 1px rgba(244, 237, 21, 0.08);
          overflow: visible;
          isolation: isolate;
          transition:
            border-color 0.35s ease,
            box-shadow 0.35s ease;
        }

        .arc-os-panel::before,
        .arc-os-panel::after {
          content: "";
          position: absolute;
          inset: 0;
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
          border-color: rgba(244, 237, 21, 0.94);
          box-shadow:
            inset 0 0 54px rgba(0, 0, 0, 0.84),
            0 0 42px rgba(244, 237, 21, 0.16),
            0 0 0 1px rgba(244, 237, 21, 0.14);
          animation: arcPanelBorderLock 0.95s ease-out 1.86s both;
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
            inset 0 0 34px rgba(244, 237, 21, 0.08);
          animation: arcPanelTargetPop 0.86s cubic-bezier(0.12, 1.12, 0.24, 1) 1.86s forwards;
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

        .arc-os-panel-image {
          position: absolute;
          z-index: 2;
          inset: 10px 18px 22px;
          width: calc(100% - 36px);
          height: calc(100% - 32px);
          object-fit: cover;
          border-radius: 78px;
          opacity: 0;
          clip-path: inset(0 46% 92% 46% round 88px);
          filter: saturate(0.82) contrast(1.16) brightness(0.72);
          transform: translateY(-28px) scale(0.72);
          transform-origin: 50% 8%;
          box-shadow:
            0 -18px 34px rgba(255, 255, 255, 0.1),
            0 24px 48px rgba(0, 0, 0, 0.42);
          animation:
            arcPanelImagePop 1.12s cubic-bezier(0.12, 1.16, 0.24, 1) 1.92s forwards,
            arcPanelImageSettle 4.4s ease-in-out 3.04s infinite;
          will-change: opacity, transform, filter, clip-path;
        }

        .arc-os-panel-scan {
          position: absolute;
          z-index: 3;
          left: 28px;
          right: 28px;
          top: 34px;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.94), transparent);
          opacity: 0;
          box-shadow: 0 0 18px rgba(255, 255, 255, 0.62);
          animation: arcPanelScan 1.14s ease-out 1.88s forwards;
        }

        .arc-os-panel-burst {
          position: absolute;
          z-index: 5;
          inset: 24px;
          border-radius: 72px;
          pointer-events: none;
          opacity: 0;
          background:
            linear-gradient(110deg, transparent 0%, rgba(255, 255, 255, 0.72) 48%, transparent 62%),
            radial-gradient(circle at 50% 48%, rgba(244, 237, 21, 0.18), transparent 58%);
          mix-blend-mode: screen;
          transform: translateX(-48%) skewX(-12deg);
          animation: arcPanelBurst 0.78s cubic-bezier(0.16, 1, 0.3, 1) 2.02s forwards;
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
          animation: arcPanelTextPop 0.34s ease-out 2.48s forwards;
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
            border-color: rgba(244, 237, 21, 0.94);
            box-shadow:
              inset 0 0 54px rgba(0, 0, 0, 0.84),
              0 0 42px rgba(244, 237, 21, 0.16),
              0 0 0 1px rgba(244, 237, 21, 0.14);
          }
          36% {
            border-color: rgba(255, 255, 255, 0.96);
            box-shadow:
              inset 0 0 58px rgba(0, 0, 0, 0.84),
              0 0 18px rgba(255, 255, 255, 0.22),
              0 0 58px rgba(244, 237, 21, 0.3),
              0 0 0 1px rgba(255, 255, 255, 0.34);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .arc-os-product.is-active .arc-os-title-letter-hot,
          .arc-os-active-arrow,
          .arc-os-active-arrow-path,
          .arc-os-signal-head,
          .arc-os-signal-head-tail,
          .arc-os-arrow-origin,
          .arc-os-arrival-node,
          .arc-os-panel.is-active,
          .arc-os-panel-image,
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
          .arc-os-panel-image,
          .arc-os-panel-caption {
            opacity: 1;
          }

          .arc-os-panel-image {
            clip-path: inset(0 0 0 0 round 72px);
            filter: saturate(0.96) contrast(1.08) brightness(0.86);
            transform: none;
          }

          .arc-os-active-arrow-path {
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
            right: 56px;
            top: 168px;
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
          }

          .arc-os-shell {
            min-height: 980px;
          }

          .arc-os-section {
            --arc-line-center-gap: 22px;
            --arc-products-top: 298px;
            --arc-product-line-top: 146px;
            --arc-lower-spine-top: 102px;
            --arc-panel-top: 572px;
            --arc-war-top: 136px;
            --arc-copy-top: 130px;
            --arc-copy-right: 14px;
            --arc-copy-width: 324px;
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

          .arc-os-war {
            font-size: 14px;
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
            font-size: 38px;
          }

          .arc-os-product-body {
            font-size: 14px;
          }

          .arc-os-active-arrow {
            width: min(860px, 88%);
            min-height: 158px;
          }

          .arc-os-panel {
            top: var(--arc-panel-top);
            height: 378px;
            border-radius: 74px;
          }

          .arc-os-panel-image {
            border-radius: 58px;
          }

          .arc-os-panel-burst {
            border-radius: 58px;
          }
        }

        @media (max-width: 760px) {
          .arc-os-section {
            --arc-line-left: 7%;
            --arc-line-right: 7%;
            --arc-line-center-gap: 18px;
            --arc-war-top: 92px;
            --arc-copy-top: 116px;
            --arc-copy-right: auto;
            --arc-copy-width: min(360px, 88vw);
            --arc-upper-spine-top: 115px;
            --arc-upper-spine-end: 323px;
            padding: 42px 0 76px;
          }

          .arc-os-shell {
            width: min(100% - 28px, 620px);
            min-height: 1000px;
          }

          .arc-os-lockup,
          .arc-os-logo {
            gap: 22px;
          }

          .arc-os-logo {
            font-size: 72px;
          }

          .arc-os-war {
            font-size: 11px;
          }

          .arc-os-ca {
            display: none;
          }

          .arc-os-copy {
            left: 50%;
            right: auto;
            transform: translateX(-50%);
            text-align: center;
            font-size: 7px;
            line-height: 1.18;
          }

          .arc-os-divider-top {
            left: 7%;
            right: 7%;
            top: 242px;
          }

          .arc-os-spine {
            opacity: 0.72;
          }

          .arc-os-products {
            top: 310px;
            grid-template-columns: 1fr;
            row-gap: 38px;
          }

          .arc-os-products::before,
          .arc-os-products::after {
            display: none;
          }

          .arc-os-product {
            min-height: 122px;
          }

          .arc-os-product-title {
            font-size: 42px;
          }

          .arc-os-product-body {
            margin-top: 14px;
            font-size: 14px;
          }

          .arc-os-active-arrow {
            left: 50%;
            width: min(500px, 92%);
            min-height: 0;
          }

          .arc-os-arrow-desktop {
            display: none;
          }

          .arc-os-arrow-mobile {
            display: inline;
          }

          .arc-os-active-arrow--hyena {
            top: 318px;
            height: 420px;
          }

          .arc-os-active-arrow--sentinel {
            top: 472px;
            height: 260px;
          }

          .arc-os-active-arrow--arc-c2 {
            top: 626px;
            height: 102px;
          }

          .arc-os-product:first-child .arc-os-product-rule,
          .arc-os-product:nth-child(3) .arc-os-product-rule,
          .arc-os-product-rule {
            display: block;
            left: 15%;
            right: 15%;
          }

          .arc-os-product:nth-child(2)::after {
            display: none;
          }

          .arc-os-panel {
            top: 724px;
            width: min(500px, 92%);
            height: 300px;
            border-radius: 58px;
          }

          .arc-os-panel-image {
            inset: 16px;
            width: calc(100% - 32px);
            height: calc(100% - 32px);
            border-radius: 44px;
          }

          .arc-os-panel-burst {
            inset: 16px;
            border-radius: 44px;
          }

          .arc-os-panel-caption {
            bottom: 14px;
            width: calc(100% - 46px);
            font-size: 10px;
          }
        }

        @media (max-width: 420px) {
          .arc-os-shell {
            min-height: 936px;
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
            top: 98px;
            font-size: 6px;
          }

          .arc-os-divider-top {
            top: 218px;
          }

          .arc-os-spine {
            top: 94px;
            height: 186px;
          }

          .arc-os-products {
            top: 280px;
            row-gap: 34px;
          }

          .arc-os-product-title {
            font-size: 34px;
          }

          .arc-os-product-body {
            font-size: 13px;
          }

          .arc-os-active-arrow {
            width: min(420px, 92%);
          }

          .arc-os-active-arrow--hyena {
            top: 288px;
            height: 405px;
          }

          .arc-os-active-arrow--sentinel {
            top: 430px;
            height: 258px;
          }

          .arc-os-active-arrow--arc-c2 {
            top: 574px;
            height: 110px;
          }

          .arc-os-panel {
            top: 680px;
            height: 270px;
            border-radius: 42px;
          }

          .arc-os-panel-image {
            inset: 12px;
            width: calc(100% - 24px);
            height: calc(100% - 24px);
            border-radius: 32px;
          }

          .arc-os-panel-burst {
            inset: 12px;
            border-radius: 32px;
          }

          .arc-os-panel-caption {
            bottom: 12px;
            width: calc(100% - 34px);
            font-size: 8.5px;
          }
        }
      `}</style>

      <div className="arc-os-shell">
        <div className="arc-os-lockup" aria-label="ARC OS">
          <div className="arc-os-logo">
            <span className="arc-os-logo-part">
              ARC
              <span className="arc-os-ca" aria-hidden="true">
                <span className="arc-os-ca-code">&lt;CA1 -AAA3&gt;</span>
                <span className="arc-os-ca-c2">C2</span>
              </span>
            </span>
            <span className="arc-os-logo-part">
              <span className="arc-os-logo-o">O</span>S
            </span>
          </div>
          <span className="arc-os-war">Agentic Warfare</span>
        </div>
        <p className="arc-os-copy">{connectedCopy}</p>
        <div className="arc-os-divider-top" aria-hidden="true" />
        <div className="arc-os-spine" aria-hidden="true" />

        <div className="arc-os-products">
          {products.map((product) => (
            <article
              className={`arc-os-product ${activeProductId === product.id ? "is-active" : ""}`}
              key={product.id}
              onPointerEnter={() => handlePointerEnter(product.id)}
              onPointerLeave={handlePointerLeave}
            >
              <button
                aria-pressed={pinnedProductId === product.id}
                className="arc-os-product-trigger"
                onBlur={handlePointerLeave}
                onClick={() => handleProductClick(product.id)}
                onFocus={() => handlePointerEnter(product.id)}
                type="button"
              >
                <h2 className="arc-os-product-title">
                  <ProductTitle product={product} />
                </h2>
                <p className="arc-os-product-body">{product.body}</p>
              </button>
              <div className="arc-os-product-rule" aria-hidden="true" />
            </article>
          ))}
        </div>

        {activeProduct ? <ActiveArrow product={activeProduct} /> : null}

        <div className={`arc-os-panel ${activeProduct ? "is-active" : ""}`} aria-live="polite">
          {activeProduct ? (
            <>
              <span className="arc-os-panel-target" aria-hidden="true" />
              <img
                className="arc-os-panel-image"
                key={activeProduct.id}
                src={activeProduct.image}
                alt={activeProduct.imageAlt}
              />
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
