import React from "react";
import footerSoldier from "../assets/kevinfrose_3D_RENDER_ULTRA_HD_8K._unreal_engine_shadows_chromat_324cf786-b6cf-4c23-86ee-03b4fc43e4ad 1.png";

export default function Subpart() {
  return (
    <section className="footer-readme-bridge relative z-10 overflow-visible">
      <style>{`
        .footer-readme-bridge {
          --readme-left: #473d1c;
          --readme-right: #2c3475;
          min-height: clamp(540px, 58vw, 820px);
          padding: 68px 24px 0;
          background:
            radial-gradient(ellipse at 16% 62%, rgba(71, 61, 28, 0.9) 0%, rgba(71, 61, 28, 0.42) 26%, rgba(71, 61, 28, 0) 58%),
            radial-gradient(ellipse at 82% 66%, rgba(44, 52, 117, 0.95) 0%, rgba(44, 52, 117, 0.52) 36%, rgba(44, 52, 117, 0) 66%),
            linear-gradient(180deg, #000 0%, #030306 16%, #08080d 52%, #171c43 100%);
        }

        .footer-readme-bridge::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(90deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.18) 38%, rgba(0,0,0,0.08) 64%, rgba(0,0,0,0.18) 100%),
            radial-gradient(ellipse at center, rgba(0,0,0,0) 34%, rgba(0,0,0,0.72) 100%);
          pointer-events: none;
        }

        .footer-readme-bridge::after {
          content: "";
          position: absolute;
          inset: auto 0 0;
          height: 34%;
          background: linear-gradient(180deg, rgba(4,5,12,0), rgba(10,13,32,0.92));
          pointer-events: none;
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
            linear-gradient(90deg, rgba(71, 61, 28, 0.52) 0%, rgba(8, 8, 13, 0.6) 48%, rgba(44, 52, 117, 0.56) 100%),
            radial-gradient(ellipse at 18% 72%, rgba(112, 96, 34, 0.34), rgba(112, 96, 34, 0) 54%),
            radial-gradient(ellipse at 88% 74%, rgba(68, 82, 180, 0.24), rgba(68, 82, 180, 0) 58%);
          box-shadow:
            inset 0 0 36px rgba(0, 0, 0, 0.46),
            0 0 30px rgba(44, 52, 117, 0.16);
        }

        .footer-readme-actions {
          position: relative;
          z-index: 16;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin-top: 70px;
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

        .footer-readme-soldier {
          position: absolute;
          z-index: 12;
          right: clamp(-125px, -9vw, -72px);
          bottom: -535px;
          width: min(48vw, 560px);
          min-width: 420px;
          pointer-events: none;
          user-select: none;
          filter: drop-shadow(0 0 36px rgba(94, 125, 255, 0.18));
        }

        @media (max-width: 900px) {
          .footer-readme-bridge {
            min-height: 560px;
            padding-top: 48px;
          }

          .footer-readme-panel {
            width: min(86vw, 680px);
            height: 230px;
            border-radius: 46px;
          }

          .footer-readme-actions {
            margin-top: 48px;
          }

          .footer-readme-soldier {
            right: -120px;
            bottom: -420px;
            width: 430px;
            min-width: 0;
            opacity: 0.95;
          }
        }

        @media (max-width: 560px) {
          .footer-readme-bridge {
            min-height: 500px;
            padding: 38px 16px 0;
          }

          .footer-readme-panel {
            width: 88vw;
            height: 178px;
            border-radius: 34px;
          }

          .footer-readme-actions {
            margin-top: 40px;
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

          .footer-readme-soldier {
            right: -150px;
            bottom: -340px;
            width: 380px;
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

      <img
        src={footerSoldier}
        alt=""
        aria-hidden="true"
        className="footer-readme-soldier"
        loading="lazy"
      />
    </section>
  );
}
