import { useRef } from "react";
import useTextShuffle from "../../Utils/useTextShuffle";

export default function ArcOSSection() {
  const arcOsRef = useRef(null);

  useTextShuffle(arcOsRef, {
    viewportOnly: true,
    animateOnLoad: false,
    triggerPoint: 0.3,
  });

  return (
    <section className="relative z-[70] bg-black py-[100px] md:py-[150px]">
      <div className="relative w-full max-w-6xl mx-auto px-4 md:px-8">
        {/* Top glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse,rgba(199,214,90,0.1),transparent_70%)] blur-3xl pointer-events-none" />

        {/* Main Title */}
        <div className="text-center mb-[80px]">
          <h2
            ref={arcOsRef}
            data-initial="0118030319"
            data-target="ARC OS"
            className="
              text-[clamp(64px,7vw,120px)] font-bold font-identifer-mono
              tracking-[0.15em] text-white mb-4
              transition-all duration-300
              uppercase
            "
            style={{
              background: "linear-gradient(135deg, #fff 0%, #c7d65a 50%, #fff 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            ARC OS
          </h2>
          <p className="text-gray-400 text-sm md:text-base tracking-[0.08em] uppercase">
            Autonomous Reasoning & Control Operating System
          </p>
        </div>

        {/* Systems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "HYENA",
              description: "High-Efficiency Neural Architecture",
              icon: "⚡",
              accent: "from-cyan-500/30 to-blue-500/30",
            },
            {
              name: "SENTINEL",
              description: "Security & Threat Detection",
              icon: "🛡️",
              accent: "from-green-500/30 to-emerald-500/30",
            },
            {
              name: "ARC O2",
              description: "Omniscient Operating Core",
              icon: "🎯",
              accent: "from-yellow-500/30 to-orange-500/30",
            },
          ].map((system, idx) => (
            <div
              key={idx}
              className={`
                p-6 rounded-lg border border-[#c7d65a]/30
                bg-gradient-to-br ${system.accent}
                hover:border-[#c7d65a]/60 transition-all duration-300
                group cursor-pointer
              `}
            >
              <div className="text-3xl mb-3">{system.icon}</div>
              <h3 className="text-[#c7d65a] font-bold text-lg mb-2 tracking-[0.1em] uppercase">
                {system.name}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {system.description}
              </p>
              <div className="mt-4 h-1 w-0 bg-gradient-to-r from-[#c7d65a] to-transparent group-hover:w-full transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* Feature List */}
        <div className="mt-[80px] p-8 border border-gray-700/50 rounded-lg bg-gray-950/50">
          <h3 className="text-[#c7d65a] font-bold mb-6 text-lg tracking-[0.1em] uppercase">
            Core Capabilities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Real-time Decision Making",
              "Adaptive Intelligence",
              "Threat Assessment",
              "Autonomous Navigation",
              "Predictive Analytics",
              "Distributed Computing",
            ].map((capability, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#c7d65a]" />
                <span className="text-gray-300 text-sm">{capability}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
