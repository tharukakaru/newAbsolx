import readmoreFooterIMG from "../../assets/readmoreFooterIMG.png";
import signalLines from "../../assets/readMore/signal lines.svg";

export default function ReadMoreAtmosphere() {
  return (
    <>
      <style>{`
        .readmore-unified-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          overflow: hidden;
          background: #06070a;
        }

        .readmore-unified-bg__signal {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
          min-width: 1400px;
          max-width: 2000px;
          height: 900px;
          opacity: 0.6;
          display: flex;
          justify-content: center;
        }

        .readmore-unified-bg__signal img {
          width: 100%;
          object-fit: contain;
          object-position: top;
        }

        .readmore-unified-bg__footer {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: min(120vw, 1100px);
          overflow: hidden;
        }

        .readmore-unified-bg__glow {
          position: absolute;
          pointer-events: none;
        }

        .readmore-unified-bg__glow--gold {
          left: max(-12vw, -180px);
          bottom: clamp(-160px, -14vw, -60px);
          width: clamp(520px, 62vw, 960px);
          height: clamp(680px, 90vw, 1500px);
          background: radial-gradient(
            ellipse 72% 68% at 38% 84%,
            rgba(243, 208, 93, 0.98) 0%,
            rgba(243, 208, 93, 0.72) 22%,
            rgba(243, 208, 93, 0.38) 42%,
            rgba(243, 208, 93, 0.12) 58%,
            transparent 74%
          );
        }

        .readmore-unified-bg__glow--blue {
          right: max(-12vw, -180px);
          bottom: clamp(-160px, -14vw, -60px);
          width: clamp(520px, 62vw, 960px);
          height: clamp(680px, 90vw, 1500px);
          background: radial-gradient(
            ellipse 72% 68% at 62% 84%,
            rgba(93, 110, 243, 0.98) 0%,
            rgba(93, 110, 243, 0.74) 22%,
            rgba(93, 110, 243, 0.4) 42%,
            rgba(93, 110, 243, 0.14) 58%,
            transparent 74%
          );
        }

        .readmore-unified-bg__figure {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          width: min(92vw, 980px);
          height: min(130vw, 1180px);
          margin-inline: auto;
          mix-blend-mode: screen;
          -webkit-mix-blend-mode: screen;
        }

        .readmore-unified-bg__figure img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: bottom center;
        }
      `}</style>

      <div className="readmore-unified-bg" aria-hidden="true">
        <div className="readmore-unified-bg__signal">
          <img src={signalLines} alt="" />
        </div>

        <div className="readmore-unified-bg__footer">
          <div className="readmore-unified-bg__glow readmore-unified-bg__glow--gold" />
          <div className="readmore-unified-bg__glow readmore-unified-bg__glow--blue" />
          <div className="readmore-unified-bg__figure mix-blend-screen">
            <img src={readmoreFooterIMG} alt="" loading="lazy" />
          </div>
        </div>
      </div>
    </>
  );
}
