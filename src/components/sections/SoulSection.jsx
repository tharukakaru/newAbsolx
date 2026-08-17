import { useRef } from "react";
import useTextShuffle from "../../Utils/useTextShuffle";

export default function SoulSection() {
  const soulRef = useRef(null);
  const subtitleRef = useRef(null);

  useTextShuffle(soulRef, {
    viewportOnly: true,
    triggerSelector: ".soul-section",
    animateOnLoad: false,
    triggerPoint: 0.3,
  });

  useTextShuffle(subtitleRef, {
    viewportOnly: true,
    triggerSelector: ".soul-section",
    animateOnLoad: false,
    triggerPoint: 0.3,
  });

  return (
    <section className="soul-section relative w-full bg-black z-[60] py-[80px] md:py-[120px]">
      <div className="relative h-auto">
        {/* Spacecraft Image Container - Placeholder */}
        <div className="relative w-full max-w-6xl mx-auto px-4 md:px-8">
          {/* Top glow effect */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse,rgba(77,121,234,0.15),transparent_70%)] blur-3xl pointer-events-none" />

          {/* Spacecraft image placeholder */}
          <div className="relative z-10 w-full h-[300px] md:h-[500px] bg-gradient-to-b from-blue-900/30 to-transparent rounded-lg border border-blue-500/20 flex items-center justify-center overflow-hidden">
            {/* Placeholder for spacecraft image - replace with actual image */}
            <div className="flex flex-col items-center justify-center w-full h-full text-center">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23001a4d' width='400' height='300'/%3E%3Ccircle cx='200' cy='150' r='80' fill='none' stroke='%234d7cea' stroke-width='2' opacity='0.5'/%3E%3Cpath d='M 200 70 L 280 150 L 200 230 L 120 150 Z' fill='%234d7cea' opacity='0.3'/%3E%3Ctext x='200' y='150' text-anchor='middle' dy='0.3em' fill='%238ab4f8' font-size='18' font-family='Arial'%3ESOUL SPACECRAFT%3C/text%3E%3C/svg%3E"
                alt="SOUL Spacecraft"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Glitch effect overlay */}
            <div className="absolute inset-0 opacity-0 hover:opacity-10 transition-opacity duration-300 bg-[linear-gradient(90deg,transparent,rgba(77,121,234,0.1),transparent)]" />
          </div>

          {/* Soul Title and Subtitle */}
          <div className="relative mt-[60px] text-center">
            {/* Main Title */}
            <h2
              ref={soulRef}
              data-initial="19151212"
              data-target="SOUL"
              className="
                text-[clamp(48px,6vw,96px)] font-bold font-yapari-regular
                tracking-[0.15em] text-white mb-4
                transition-all duration-300
              "
              style={{
                background: "linear-gradient(135deg, #fff 0%, #c7d65a 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              SOUL
            </h2>

            {/* Subtitle */}
            <p
              ref={subtitleRef}
              data-initial="190412091225201309181512152"
              data-target="STABLE OMNI UNIVERSAL LEARNER"
              className="
                text-[clamp(10px,0.8vw,14px)] font-azonix
                tracking-[0.1em] text-gray-400 uppercase
              "
            >
              STABLE OMNI | UNIVERSAL LEARNER
            </p>

            {/* Description */}
            <p className="mt-6 text-sm md:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Advanced adaptive platform delivering personalized learning experiences through cutting-edge AI and neuroscience-inspired architecture.
            </p>
          </div>

          {/* Specs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-[60px]">
            {[
              {
                label: "PROCESSING POWER",
                value: "9.2 PETAFLOPS",
              },
              {
                label: "ADAPTABILITY",
                value: "99.7%",
              },
              {
                label: "LEARNING EFFICIENCY",
                value: "8.4x FASTER",
              },
            ].map((spec, idx) => (
              <div
                key={idx}
                className="p-4 border border-blue-500/30 rounded-lg bg-blue-950/10 hover:bg-blue-950/20 transition-colors duration-300"
              >
                <div className="text-xs tracking-[0.1em] text-gray-500 uppercase mb-2">
                  {spec.label}
                </div>
                <div className="text-[clamp(18px,2vw,28px)] font-bold text-[#c7d65a]">
                  {spec.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
