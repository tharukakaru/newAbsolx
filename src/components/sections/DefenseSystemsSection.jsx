import { useRef } from "react";
import useTextShuffle from "../../Utils/useTextShuffle";

export default function DefenseSystemsSection() {
  const defenseRef = useRef(null);

  useTextShuffle(defenseRef, {
    viewportOnly: true,
    animateOnLoad: false,
    triggerPoint: 0.3,
  });

  return (
    <section className="relative z-[65] bg-black py-[100px] md:py-[150px]">
      <div className="relative w-full max-w-6xl mx-auto px-4 md:px-8">
        {/* Top glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse,rgba(199,214,90,0.1),transparent_70%)] blur-3xl pointer-events-none" />

        {/* Aircraft/Defense Systems Image Container */}
        <div className="mb-[80px]">
          <div className="relative w-full h-[300px] md:h-[500px] bg-gradient-to-b from-red-900/20 to-transparent rounded-lg border border-red-500/30 flex items-center justify-center overflow-hidden">
            {/* Placeholder for aircraft/defense systems image */}
            <div className="flex items-center justify-center w-full h-full">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 400'%3E%3Crect fill='%234d1a1a' width='600' height='400'/%3E%3Cg opacity='0.6'%3E%3Cpath d='M 300 80 L 420 180 L 280 280 L 180 180 Z' fill='none' stroke='%23dc2626' stroke-width='2'/%3E%3Ccircle cx='300' cy='180' r='60' fill='none' stroke='%23dc2626' stroke-width='1' opacity='0.5'/%3E%3Cline x1='250' y1='180' x2='350' y2='180' stroke='%23dc2626' stroke-width='1' opacity='0.3'/%3E%3C/g%3E%3Ctext x='300' y='350' text-anchor='middle' fill='%23fca5a5' font-size='20' font-family='Arial'%3EINTELLIGENT DEFENSE SYSTEMS%3C/text%3E%3C/svg%3E"
                alt="Defense Systems"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Title */}
        <h2
          ref={defenseRef}
          data-initial="04050604081920"
          data-target="INTELLIGENT DEFENSE"
          className="
            text-center text-[clamp(48px,5vw,80px)] font-bold font-identifer-mono
            tracking-[0.12em] text-white mb-4
            transition-all duration-300
            uppercase
          "
          style={{
            background: "linear-gradient(135deg, #fca5a5 0%, #dc2626 50%, #fca5a5 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          INTELLIGENT DEFENSE
        </h2>

        <p className="text-center text-gray-400 text-sm md:text-base tracking-[0.08em] uppercase mb-[60px]">
          Systems & Advanced Protection
        </p>

        {/* Defense Systems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              system: "HADAR L2",
              type: "Radar & Detection",
              capabilities: ["360° Coverage", "6km Range", "Real-time Tracking"],
            },
            {
              system: "AEGIS",
              type: "Weapons Platform",
              capabilities: ["Multi-target", "Precision Guidance", "EW Defense"],
            },
            {
              system: "SENTINEL AI",
              type: "Threat Analysis",
              capabilities: ["Pattern Recognition", "Predictive", "Autonomous Response"],
            },
            {
              system: "FORTRESS",
              type: "Cyber Defense",
              capabilities: ["Network Protection", "Intrusion Prevention", "Data Security"],
            },
            {
              system: "PHANTOM",
              type: "Stealth Systems",
              capabilities: ["Signal Masking", "Evasion AI", "Signature Reduction"],
            },
            {
              system: "NEXUS",
              type: "Command Center",
              capabilities: ["Unified Control", "Real-time Analytics", "Decision Support"],
            },
          ].map((system, idx) => (
            <div
              key={idx}
              className="
                p-6 rounded-lg border border-red-500/30
                bg-gradient-to-br from-red-950/30 to-red-950/10
                hover:border-red-500/60 hover:bg-red-950/40
                transition-all duration-300 group
              "
            >
              <h3 className="text-red-400 font-bold text-lg mb-1 tracking-[0.1em] uppercase">
                {system.system}
              </h3>
              <p className="text-gray-400 text-xs mb-4 uppercase tracking-wider">
                {system.type}
              </p>
              <ul className="space-y-2">
                {system.capabilities.map((cap, i) => (
                  <li key={i} className="text-gray-300 text-sm flex items-center gap-2">
                    <span className="w-1 h-1 bg-red-400 rounded-full" />
                    {cap}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Key Stats */}
        <div className="mt-[80px] grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: "RESPONSE TIME", value: "< 2.3 ms" },
            { label: "ACCURACY RATE", value: "99.94%" },
            { label: "THREAT COVERAGE", value: "360°" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="p-6 border border-red-500/20 rounded-lg bg-black text-center"
            >
              <div className="text-xs text-red-400 mb-2 tracking-[0.12em] uppercase">
                {stat.label}
              </div>
              <div className="text-3xl md:text-4xl font-bold text-red-300">
                {stat.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
