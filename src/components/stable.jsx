"use client";

import React, { useRef } from "react";
import useTextShuffle from "../Utils/useTextShuffle";

export default function Title({ className = "" }) {
  const whereRef = useRef(null);
  const imaginationRef = useRef(null);
  const knowsRef = useRef(null);
  const noRef = useRef(null);
  const boundsRef = useRef(null);

  useTextShuffle(whereRef, {
    viewportOnly: true,
    animateOnLoad: false,
    triggerPoint: 0.3,
  });
  useTextShuffle(imaginationRef, {
    viewportOnly: true,
    animateOnLoad: false,
    triggerPoint: 0.3,
  });
  useTextShuffle(knowsRef, {
    viewportOnly: true,
    animateOnLoad: false,
    triggerPoint: 0.3,
  });
  useTextShuffle(noRef, {
    viewportOnly: true,
    animateOnLoad: false,
    triggerPoint: 0.3,
  });
  useTextShuffle(boundsRef, {
    viewportOnly: true,
    animateOnLoad: false,
    triggerPoint: 0.3,
  });

  return (
    <div
      className={`stable-lockup relative isolate z-[60] pointer-events-none ${className}`}
      aria-label="Where imagination knows no bounds"
    >
      <style>{`
        .stable-lockup {
          width: min(92vw, 980px);
          font-family: "Yapari Trial Regular", "Yapari Trial", "Azonix", sans-serif;
          font-size: clamp(18px, 3.45vw, 36px);
          font-weight: 600;
          line-height: 0.92;
          letter-spacing: 0.075em;
          text-transform: uppercase;
        }

        .stable-row {
          display: flex;
          align-items: baseline;
          white-space: nowrap;
        }

        .stable-row-top {
          justify-content: flex-start;
          gap: clamp(10px, 1.8vw, 22px);
        }

        .stable-row-bottom {
          justify-content: flex-end;
          gap: clamp(18px, 3.7vw, 42px);
          margin-top: clamp(14px, 1.7vw, 20px);
        }

        .stable-token {
          display: inline-block;
          transform-origin: left center;
          transition:
            font-size 180ms ease,
            letter-spacing 180ms ease;
        }

        .stable-token.is-number-mode {
          font-size: 0.46em;
          letter-spacing: 0.04em;
        }

        .stable-where {
          background: linear-gradient(90deg, #343943 0%, #777b86 100%);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          -webkit-text-fill-color: transparent;
        }

        .stable-imagination {
          color: rgba(255, 255, 255, 0.96);
        }

        .stable-knows {
          color: #858900;
          -webkit-text-fill-color: currentColor;
        }

        .stable-no,
        .stable-bounds {
          color: rgba(255, 255, 255, 0.9);
        }

        .stable-bounds-group {
          display: inline-flex;
          align-items: baseline;
          gap: 0.34em;
        }

        .stable-divider {
          width: 82%;
          height: 1px;
          margin: clamp(24px, 2.8vw, 30px) auto 0;
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.18) 0%,
            rgba(255, 255, 255, 0.52) 12%,
            rgba(255, 255, 255, 0.52) 88%,
            rgba(255, 255, 255, 0.18) 100%
          );
        }

        @media (max-width: 560px) {
          .stable-lockup {
            width: 90vw;
            font-size: clamp(13px, 4.1vw, 22px);
            letter-spacing: 0.045em;
          }

          .stable-row-top {
            gap: 7px;
          }

          .stable-row-bottom {
            gap: 12px;
            margin-top: 12px;
          }

          .stable-divider {
            width: 84%;
            margin-top: 18px;
          }
        }
      `}</style>

      <div className="stable-row stable-row-top">
        <span
          ref={whereRef}
          data-initial="2308051805"
          data-target="WHERE"
          className="stable-token stable-where"
        >
          WHERE
        </span>
        <span
          ref={imaginationRef}
          data-initial="091301070914012009150114"
          data-target="IMAGINATION"
          className="stable-token stable-imagination"
        >
          IMAGINATION
        </span>
      </div>

      <div className="stable-row stable-row-bottom">
        <span
          ref={knowsRef}
          data-initial="1114152319"
          data-target="KNOWS"
          className="stable-token stable-knows"
        >
          KNOWS
        </span>
        <span className="stable-bounds-group">
          <span
            ref={noRef}
            data-initial="1415"
            data-target="NO"
            className="stable-token stable-no"
          >
            NO
          </span>
          <span
            ref={boundsRef}
            data-initial="021521140419"
            data-target="BOUNDS"
            className="stable-token stable-bounds"
          >
            BOUNDS
          </span>
          <span aria-hidden="true">.</span>
        </span>
      </div>

      <div className="stable-divider" aria-hidden="true" />
    </div>
  );
}
