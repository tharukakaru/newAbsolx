import { useRef } from "react";
import useTextShuffle from "../../Utils/useTextShuffle";

export default function AutonomySection() {
  const autonomyRef = useRef(null);

  useTextShuffle(autonomyRef, {
    viewportOnly: true,
    animateOnLoad: false,
    triggerPoint: 0.3,
  });

  return (
    <section className="relative z-[55] mt-0 min-h-[26vh] pt-[4vh] pb-[1vh] bg-black">
      <div className="relative z-[70] pointer-events-none flex justify-center">
        <div className="relative isolate z-[60] pointer-events-none" aria-label="Autonomy">
          <style>{`
            .autonomy-title {
              width: min(85vw, 900px);
              font-family: "Yapari Trial Regular", "Yapari Trial", "Azonix", sans-serif;
              font-size: clamp(19px, 3.1vw, 33px);
              font-weight: 600;
              line-height: 0.95;
              letter-spacing: 0.09em;
              text-transform: uppercase;
              text-align: center;
              margin: 0 auto;
              color: rgba(255, 255, 255, 0.9);
            }

            .autonomy-token {
              display: inline-block;
              transform-origin: center;
              transition:
                font-size 180ms ease,
                letter-spacing 180ms ease;
            }

            .autonomy-token.is-number-mode {
              font-size: 0.46em;
              letter-spacing: 0.04em;
            }

            .autonomy-divider {
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
              .autonomy-title {
                width: 90vw;
                font-size: clamp(13px, 4.1vw, 22px);
                letter-spacing: 0.045em;
              }

              .autonomy-divider {
                width: 84%;
                margin-top: 18px;
              }
            }
          `}</style>

          <div className="autonomy-title">
            <span
              ref={autonomyRef}
              data-initial="01020141211812090701"
              data-target="AUTONOMY"
              className="autonomy-token"
            >
              AUTONOMY
            </span>
          </div>

          <div className="autonomy-divider" aria-hidden="true" />
        </div>
      </div>

      {/* Fade to black at bottom */}
      <div className="absolute inset-x-0 bottom-0 h-[9vh] z-[30] pointer-events-none bg-gradient-to-t from-black via-black/90 to-transparent" />
    </section>
  );
}
