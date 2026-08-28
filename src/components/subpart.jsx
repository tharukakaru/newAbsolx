import React from "react";

export default function Subpart() {
  return (
    <section className="footer-readme-bridge relative z-10 overflow-visible">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700&display=swap');

        @font-face {
          font-family: "Azonix";
          src: url("../assets/fonts/Azonix.otf") format("opentype");
          font-weight: normal;
          font-style: normal;
        }

        .footer-readme-bridge {
          --readme-left: #594c22;
          --readme-right: #2d3474;
          min-height: clamp(540px, 58vw, 820px);
          padding: 68px 24px 0;
          background: transparent;
        }

        .footer-readme-panel {
          position: relative;
          z-index: 4;
          width: min(84vw, 1060px);
          height: clamp(230px, 28vw, 380px);
          margin: 0 auto;
          border: 1px solid rgba(147, 149, 19, 0.76);
          border-radius: clamp(42px, 6vw, 86px);
          background:
            linear-gradient(90deg, rgba(89, 76, 34, 0.52) 0%, rgba(8, 8, 13, 0.6) 48%, rgba(45, 52, 116, 0.56) 100%),
            radial-gradient(ellipse at 18% 72%, rgba(89, 76, 34, 0.34), rgba(89, 76, 34, 0) 54%),
            radial-gradient(ellipse at 88% 74%, rgba(45, 52, 116, 0.3), rgba(45, 52, 116, 0) 58%);
          box-shadow:
            inset 0 0 36px rgba(0, 0, 0, 0.46),
            0 0 30px rgba(44, 52, 117, 0.16);
          backdrop-filter: blur(5px);
        }

        .footer-readme-actions {
          position: relative;
          z-index: 16;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin-top: 36px;
          /* Scale the entire group smoothly while preserving precise internal styling */
          transform: scale(1.25);
          transform-origin: center center;
        }

        .footer-readme-button {
          position: relative;
          display: inline-flex;
          min-width: 135px;
          height: 24px;
          align-items: center;
          justify-content: center;
          padding: 0 14px;
          border: 1px solid rgba(255, 255, 255, 0.35);
          background: rgba(35, 43, 68, 0.45);
          color: rgba(255, 255, 255, 0.92);
          font-family: "Orbitron", "Azonix", sans-serif;
          font-weight: 300;
          font-size: 12px;
          line-height: 0.5;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          text-decoration: none;
          backdrop-filter: blur(8px);
          transition: all 180ms ease;
        }

        .footer-readme-button:hover,
        .footer-readme-button:focus-visible {
          border-color: rgba(255, 255, 255, 0.85);
          color: #fff;
          box-shadow: 0 0 14px rgba(170, 184, 255, 0.25);
          outline: none;
        }

        /* Offset Corner Brackets */
        .footer-readme-button-corner {
          position: absolute;
          width: 4px;
          height: 4px;
          pointer-events: none;
        }

        .footer-readme-button-corner-1 {
          left: -3px;
          top: -3px;
          border-left: 1px solid #ffffff;
          border-top: 1px solid #ffffff;
        }

        .footer-readme-button-corner-2 {
          right: -3px;
          top: -3px;
          border-right: 1px solid #ffffff;
          border-top: 1px solid #ffffff;
        }

        .footer-readme-button-corner-3 {
          left: -3px;
          bottom: -3px;
          border-left: 1px solid #ffffff;
          border-bottom: 1px solid #ffffff;
        }

        .footer-readme-button-corner-4 {
          right: -3px;
          bottom: -3px;
          border-right: 1px solid #ffffff;
          border-bottom: 1px solid #ffffff;
        }

        .footer-readme-arrows {
          display: inline-flex;
          align-items: center;
          color: rgba(255, 255, 255, 0.92);
          font-family: system-ui, -apple-system, sans-serif;
          font-weight: 300;
          font-size: 26px;
          line-height: 1;
          letter-spacing: -0.18em;
          transform: translateY(-1px);
        }
      `}</style>

      <div className="footer-readme-panel" aria-hidden="true" />

      <div className="footer-readme-actions">
        <a className="footer-readme-button" href="#">
          <span className="footer-readme-button-corner footer-readme-button-corner-1" />
          <span className="footer-readme-button-corner footer-readme-button-corner-2" />
          <span className="footer-readme-button-corner footer-readme-button-corner-3" />
          <span className="footer-readme-button-corner footer-readme-button-corner-4" />
          READ MORE
        </a>
        <span className="footer-readme-arrows" aria-hidden="true">
          &gt;&gt;
        </span>
      </div>
    </section>
  );
}
