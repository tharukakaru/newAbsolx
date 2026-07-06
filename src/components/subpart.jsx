import React from "react";

export default function Subpart() {
  return (
    <section className="footer-readme-bridge relative z-10 overflow-visible">
      <style>{`
        .footer-readme-bridge {
          --readme-left: #594c22;
          --readme-right: #2d3474;
          min-height: clamp(540px, 58vw, 820px);
          padding: 68px 24px 0;
          background: transparent;
        }

        .footer-readme-bridge::before {
          display: none;
        }

        .footer-readme-bridge::after {
          display: none;
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
          margin-top: 30px;
        }

        .footer-readme-button {
          position: relative;
          display: inline-flex;
          min-width: 136px;
          height: 22px;
          align-items: center;
          justify-content: center;
          padding: 0 12px;
          border: 1px solid rgba(255,255,255,0.68);
          background: rgba(8, 9, 16, 0.24);
          color: rgba(255,255,255,0.88);
          font-family: "Elios", "SourceCodePro", monospace;
          font-size: 9px;
          line-height: 1;
          letter-spacing: 0;
          text-transform: uppercase;
          text-decoration: none;
          backdrop-filter: blur(8px);
          transition: border-color 180ms ease, color 180ms ease, box-shadow 180ms ease;
        }

        .footer-readme-button:hover,
        .footer-readme-button:focus-visible {
          border-color: rgba(255,255,255,0.92);
          color: #fff;
          box-shadow: 0 0 18px rgba(170, 184, 255, 0.18);
          outline: none;
        }

        .footer-readme-button-corner {
          position: absolute;
          width: 8px;
          height: 8px;
          pointer-events: none;
        }

        .footer-readme-button-corner-1 {
          left: -3px;
          top: -3px;
          border-left: 1px solid rgba(255,255,255,0.9);
          border-top: 1px solid rgba(255,255,255,0.9);
        }

        .footer-readme-button-corner-2 {
          right: -3px;
          top: -3px;
          border-right: 1px solid rgba(255,255,255,0.9);
          border-top: 1px solid rgba(255,255,255,0.9);
        }

        .footer-readme-button-corner-3 {
          left: -3px;
          bottom: -3px;
          border-left: 1px solid rgba(255,255,255,0.9);
          border-bottom: 1px solid rgba(255,255,255,0.9);
        }

        .footer-readme-button-corner-4 {
          right: -3px;
          bottom: -3px;
          border-right: 1px solid rgba(255,255,255,0.9);
          border-bottom: 1px solid rgba(255,255,255,0.9);
        }

        .footer-readme-arrows {
          color: rgba(255,255,255,0.9);
          font-family: "SourceCodePro", monospace;
          font-size: 24px;
          line-height: 1;
          letter-spacing: 0;
          transform: translateY(-1px);
        }

        @media (max-width: 900px) {
          .footer-readme-bridge {
            min-height: 520px;
            padding-top: 32px;
          }

          .footer-readme-panel {
            width: min(84vw, 680px);
            height: clamp(230px, 48.8vw, 310px);
            border-radius: clamp(38px, 8.5vw, 60px);
          }

          .footer-readme-actions {
            margin-top: 30px;
          }

        }

        @media (max-width: 560px) {
          .footer-readme-bridge {
            min-height: 500px;
            padding: 30px 16px 0;
          }

          .footer-readme-panel {
            width: 84vw;
            height: clamp(200px, 48.8vw, 274px);
            border-radius: clamp(34px, 8.5vw, 48px);
          }

          .footer-readme-actions {
            margin-top: 28px;
            gap: 12px;
          }

          .footer-readme-button {
            min-width: 112px;
            height: 20px;
            font-size: 8px;
          }

          .footer-readme-arrows {
            font-size: 20px;
          }

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
