"use client";

import React, { useRef } from "react";
import useTextShuffle from "../../Utils/useTextShuffle";

export default function SubTitle() {
  const agenticRef = useRef(null);
  const warfareRef = useRef(null);

  useTextShuffle(agenticRef, {
    viewportOnly: true,
    triggerSelector: ".hero-agentic-subtitle",
    animateOnLoad: false,
    triggerPoint: 0.08,
  });
  useTextShuffle(warfareRef, {
    viewportOnly: true,
    triggerSelector: ".hero-agentic-subtitle",
    animateOnLoad: false,
    triggerPoint: 0.08,
  });

  return (
    <div
      className="
        relative z-20
        mt-2 sm:mt-3 md:mt-6
        text-center
        px-4
        mx-auto
      "
    >
      <style>{`
        .hero-agentic-subtitle {
          display: inline-flex;
          align-items: baseline;
          gap: 8px;
        }

        .hero-agentic-token {
          display: inline-block;
          transition:
            font-size 180ms ease,
            letter-spacing 180ms ease;
        }

        .hero-agentic-token.is-number-mode {
          font-size: 0.5em;
          letter-spacing: 3px;
        }
      `}</style>

      <p
        className="hero-agentic-subtitle"
        style={{
          color: "#FFF",
          fontFamily: '"Yapari Trial Regular"',
          fontSize: "14px",
          fontStyle: "normal",
          fontWeight: 700,
          lineHeight: "normal",
          letterSpacing: "8px",
          textTransform: "uppercase",
        }}
      >
        <span
          ref={agenticRef}
          data-initial="01070514200903"
          data-target="AGENTIC"
          className="hero-agentic-token"
        >
          AGENTIC
        </span>
        <span
          ref={warfareRef}
          data-initial="230118061805"
          data-target="WARFARE"
          className="hero-agentic-token"
        >
          WARFARE
        </span>
      </p>
    </div>
  );
}
