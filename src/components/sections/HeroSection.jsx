import { useRef } from "react";
import useTextShuffle from "../../Utils/useTextShuffle";
import BlackHoleCanvas from "../BlackholeCanvas";
import AnimatedLine from "../../Utils/AnimatedLine";

export default function HeroSection() {
  const absolRef = useRef(null);
  const xRef = useRef(null);
  const agenticRef = useRef(null);
  const warfareRef = useRef(null);

  useTextShuffle(absolRef);
  useTextShuffle(xRef);
  
  useTextShuffle(agenticRef, {
    viewportOnly: true,
    triggerSelector: ".hero-subtitle",
    animateOnLoad: false,
    triggerPoint: 0.08,
  });
  
  useTextShuffle(warfareRef, {
    viewportOnly: true,
    triggerSelector: ".hero-subtitle",
    animateOnLoad: false,
    triggerPoint: 0.08,
  });

  return (
    <section className="relative z-0 min-h-[100dvh] bg-black overflow-hidden">
      {/* Background glow layers */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Left side glow */}
        <div
          className="
            absolute rounded-full
            bg-[radial-gradient(circle,rgba(77,121,234,0.28),transparent_46%)]
            blur-[120px]
            top-[60%] left-0 -translate-x-1/2 -translate-y-1/2
            w-[900px] h-[1900px]
          "
        ></div>

        {/* Right side glow */}
        <div
          className="
            absolute rounded-full
            bg-[radial-gradient(circle,rgba(77,121,234,0.28),transparent_46%)]
            blur-[120px]
            top-[60%] right-0 translate-x-1/2 -translate-y-1/2
            w-[900px] h-[1900px]
          "
        ></div>
      </div>

      {/* Animated top line */}
      <div className="absolute inset-x-0 top-[3vh] z-50">
        <AnimatedLine />
      </div>

      {/* Title and Subtitle */}
      <div className="absolute inset-x-0 top-[38vh] z-40 flex flex-col items-center translate-x-[0.3vw]">
        {/* ABSOL X Title */}
        <div className="relative z-20 flex items-center justify-center mt-0 px-4">
          <div className="flex items-center gap-[clamp(14px,2vw,34px)] ml-[clamp(0px,0.25vw,4px)]">
            <h1
              ref={absolRef}
              data-initial="48290"
              data-target="ABSOL"
              className="
                relative inline-block isolate z-0
                absolx-gradient font-yapari-regular tracking-[0.2em]
                whitespace-nowrap leading-none 
                text-[clamp(44px,5.8vw,84px)]

                before:content-['']
                before:absolute
                before:top-1/2
                before:-translate-y-1/2
                before:rounded-full
                before:pointer-events-none
                before:z-[-1]
                before:bg-[radial-gradient(closest-side,rgba(0,0,0,0.72),rgba(0,0,0,0)_64%)]
                before:left-[-0.18em]
                before:w-[1.35em]
                before:h-[1.08em]
                before:blur-[8px]

                sm:before:left-[-0.22em]
                sm:before:w-[1.52em]
                sm:before:h-[1.18em]
                sm:before:blur-[9px]

                md:before:left-[-0.26em]
                md:before:w-[1.72em]
                md:before:h-[1.28em]
                md:before:blur-[10px]

                lg:before:left-[-0.32em]
                lg:before:w-[1.92em]
                lg:before:h-[1.38em]
                lg:before:blur-[11px]

                xl:before:left-[-0.36em]
                xl:before:w-[2.04em]
                xl:before:h-[1.46em]
                xl:before:blur-[12px]
              "
            />
            <h1
              ref={xRef}
              data-initial="7"
              data-target="X"
              className="
                text-white font-yapari-regular tracking-[0.12em]
                whitespace-nowrap leading-none
                text-[clamp(44px,5.8vw,84px)]
              "
            />
          </div>
        </div>

        {/* Subtitle: AGENTIC WARFARE */}
        <div className="relative z-20 -mt-2 sm:-mt-1 md:mt-0 text-center px-4 mx-auto">
          <style>{`
            .hero-subtitle {
              display: inline-flex;
              align-items: baseline;
              gap: 8px;
            }

            .hero-subtitle-token {
              display: inline-block;
              transition:
                font-size 180ms ease,
                letter-spacing 180ms ease;
            }

            .hero-subtitle-token.is-number-mode {
              font-size: 0.5em;
              letter-spacing: 3px;
            }
          `}</style>

          <p
            className="hero-subtitle"
            style={{
              color: "#FFF",
              fontFamily: '"Yapari Trial Regular"',
              fontSize: "clamp(5.5px, 0.5vw, 7.5px)",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "normal",
              letterSpacing: "clamp(2.4px, 0.34vw, 4.4px)",
              textTransform: "uppercase",
            }}
          >
            <span
              ref={agenticRef}
              data-initial="01070514200903"
              data-target="AGENTIC"
              className="hero-subtitle-token"
            >
              AGENTIC
            </span>
            <span
              ref={warfareRef}
              data-initial="230118061805"
              data-target="WARFARE"
              className="hero-subtitle-token"
            >
              WARFARE
            </span>
          </p>
        </div>
      </div>

      {/* Black Hole Canvas */}
      <BlackHoleCanvas />

      {/* Fade to black at bottom */}
      <div className="absolute inset-x-0 bottom-0 h-[9vh] z-[30] pointer-events-none bg-gradient-to-t from-black via-black/90 to-transparent" />
    </section>
  );
}
