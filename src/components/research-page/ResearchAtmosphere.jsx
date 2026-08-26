import researchFooterBG from "../../assets/researchFooterBG.png";
import kevinfroseResearchFooter from "../../assets/kevinfroseResearchFooter.png";

export default function ResearchAtmosphere() {
  return (
    <>
      <style>{`
        .research-unified-bg {
          --research-ellipse-top: clamp(7.5rem, 14vw, 11rem);
          --research-ellipse-right-y: calc(
            var(--research-ellipse-top) + 450px + 450px + 340px + 636.5px
          );
          --research-ellipse-left-y: calc(var(--research-ellipse-right-y) + 636.5px);
          --research-ellipse-bottom-blue-y: calc(100% + 420px);
          --research-ellipse-right-yellow-y: calc(
            100% - var(--research-footer-border-offset) - 90px
          );
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          overflow: hidden;
          background: #000;
        }

        .research-unified-bg::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          background:
            radial-gradient(
              ellipse 570px 900px at -140px calc(var(--research-ellipse-top) + 450px),
              rgba(77, 121, 234, 0.45) 0%,
              rgba(77, 121, 234, 0.45) 35%,
              transparent 72%
            ),
            radial-gradient(
              ellipse 570px 900px at calc(100% + 140px) calc(var(--research-ellipse-top) + 450px),
              rgba(77, 121, 234, 0.45) 0%,
              rgba(77, 121, 234, 0.45) 35%,
              transparent 72%
            );
          filter: blur(90px);
        }

        .research-unified-bg::after {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          background:
            radial-gradient(
              ellipse 1473px 1273px at calc(100% + 680px) var(--research-ellipse-right-y),
              #5d6ef3 0%,
              #5d6ef3 38%,
              transparent 72%
            ),
            radial-gradient(
              ellipse 1473px 1273px at -680px var(--research-ellipse-left-y),
              #f3d05d 0%,
              #f3d05d 38%,
              transparent 72%
            ),
            radial-gradient(
              ellipse 1473px 1273px at calc(100% + 680px) var(--research-ellipse-right-yellow-y),
              #f3d05d 0%,
              #f3d05d 38%,
              transparent 72%
            ),
            radial-gradient(
              ellipse 1473px 1273px at 50% var(--research-ellipse-bottom-blue-y),
              #5d6ef3 0%,
              #5d6ef3 38%,
              transparent 72%
            );
          filter: blur(80px);
        }

        .research-unified-bg__footer {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1;
          height: min(120vw, 1100px);
          overflow: hidden;
        }

        .research-unified-bg__footer-gradient {
          position: absolute;
          inset: 0;
          z-index: 2;
          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 0.1) 24%,
            rgba(3, 4, 10, 0.22) 48%,
            rgba(8, 14, 42, 0.28) 100%
          );
        }

        .research-unified-bg__wireframe {
          position: absolute;
          left: 50%;
          bottom: 0;
          z-index: 3;
          width: min(100%, 1920px);
          height: min(58vw, 560px);
          transform: translateX(-50%);
        }

        .research-unified-bg__wireframe img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center bottom;
        }

        .research-unified-bg__figure {
          position: absolute;
          right: max(-2vw, -24px);
          bottom: 0;
          z-index: 4;
          width: min(44vw, 640px);
          height: min(72vw, 820px);
        }

        .research-unified-bg__figure img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: right bottom;
        }

        @media (max-width: 640px) {
          .research-unified-bg {
            --research-ellipse-bottom-blue-y: calc(100% + 320px);
          }

          .research-unified-bg__wireframe {
            height: min(68vw, 320px);
          }

          .research-unified-bg__figure {
            width: min(56vw, 360px);
            height: min(88vw, 480px);
            opacity: 0.92;
          }
        }
      `}</style>

      <div className="research-unified-bg" aria-hidden="true">
        <div className="research-unified-bg__footer">
          <div className="research-unified-bg__footer-gradient" />
          <div className="research-unified-bg__wireframe">
            <img src={researchFooterBG} alt="" loading="lazy" />
          </div>
          <div className="research-unified-bg__figure">
            <img src={kevinfroseResearchFooter} alt="" loading="lazy" />
          </div>
        </div>
      </div>
    </>
  );
}
