import { useRef } from "react";
import useTextShuffle from "../../Utils/useTextShuffle";

export default function CoreAISection() {
  const absolRef = useRef(null);
  const coreRef = useRef(null);

  useTextShuffle(absolRef, {
    viewportOnly: true,
    animateOnLoad: false,
    triggerPoint: 0.3,
  });

  useTextShuffle(coreRef, {
    viewportOnly: true,
    animateOnLoad: false,
    triggerPoint: 0.3,
  });

  return (
    <section className="relative z-[50] bg-black py-[120px] md:py-[180px]">
      <div className="relative w-full max-w-6xl mx-auto px-4 md:px-8">
        {/* Background glow - gradient from purple to blue */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse,rgba(139,92,246,0.15),transparent_70%)] blur-3xl" />
        </div>

        {/* Main Content */}
        <div className="relative z-10 text-center">
          {/* Planet/Globe visualization placeholder */}
          <div className="mb-[80px] flex justify-center">
            <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
              {/* Outer ring effect */}
              <div className="absolute inset-0 rounded-full border border-purple-500/30" />
              <div className="absolute inset-2 rounded-full border border-purple-500/20" />

              {/* Globe placeholder */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-900/40 to-blue-900/40 flex items-center justify-center overflow-hidden">
                {/* Globe image placeholder */}
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='95' fill='%23220e38' stroke='%238b5cf6' stroke-width='1' opacity='0.5'/%3E%3Cg opacity='0.3'%3E%3Ccircle cx='100' cy='100' r='70' fill='none' stroke='%236d28d9' stroke-width='0.5'/%3E%3Ccircle cx='100' cy='100' r='50' fill='none' stroke='%238b5cf6' stroke-width='0.5'/%3E%3Cpath d='M 100 20 Q 150 100 100 180 Q 50 100 100 20' fill='%238b5cf6' opacity='0.2'/%3E%3C/g%3E%3Ctext x='100' y='100' text-anchor='middle' dy='0.3em' fill='%23a78bfa' font-size='16' font-family='Arial'%3ECORE AI%3C/text%3E%3C/svg%3E"
                  alt="Core AI Globe"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Orbital rings */}
              <div className="absolute inset-0 rounded-full border-2 border-purple-500/10 animate-spin" style={{ animationDuration: "20s" }} />
              <div className="absolute inset-4 rounded-full border border-purple-500/5 animate-spin" style={{ animationDuration: "-30s" }} />
            </div>
          </div>

          {/* Titles */}
          <div className="mb-8">
            <h2 className="flex items-center justify-center gap-3 mb-4">
              <span
                ref={absolRef}
                data-initial="48290"
                data-target="ABSOL"
                className="
                  text-[clamp(44px,5vw,72px)] font-bold font-identifer-mono
                  tracking-[0.12em] transition-all duration-300
                  uppercase
                "
                style={{
                  background: "linear-gradient(135deg, #c7d65a 0%, #86efac 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                ABSOL
              </span>
              <span className="text-white font-identifer-mono tracking-[0.12em] text-[clamp(44px,5vw,72px)]">×</span>
              <span
                ref={coreRef}
                data-initial="030512050118"
                data-target="CORE AI"
                className="
                  text-[clamp(44px,5vw,72px)] font-bold font-identifer-mono
                  tracking-[0.12em] transition-all duration-300
                  uppercase
                "
                style={{
                  background: "linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                CORE AI
              </span>
            </h2>
            <p className="text-gray-400 text-sm md:text-base tracking-[0.08em] uppercase mt-4">
              Revolutionary AI Integration Platform
            </p>
          </div>

          {/* Description */}
          <p className="max-w-3xl mx-auto text-gray-300 text-base md:text-lg leading-relaxed mb-[80px]">
            The fusion of ABSOL's autonomous capabilities with advanced AI decision-making creates an unprecedented system for adaptive learning, real-time threat assessment, and autonomous operations across global networks.
          </p>

          {/* AI Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-[80px]">
            {[
              {
                title: "Predictive Analytics",
                description: "AI-powered forecasting with 94.7% accuracy",
                icon: "📊",
              },
              {
                title: "Autonomous Learning",
                description: "Self-improving algorithms and neural networks",
                icon: "🧠",
              },
              {
                title: "Real-time Processing",
                description: "Sub-millisecond decision latency",
                icon: "⚡",
              },
              {
                title: "Distributed Intelligence",
                description: "Multi-node cognitive architecture",
                icon: "🕸️",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="
                  p-6 rounded-lg border border-purple-500/30
                  bg-gradient-to-br from-purple-950/30 to-purple-950/10
                  hover:border-purple-400/60 hover:bg-purple-950/40
                  transition-all duration-300 group
                "
              >
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="text-purple-300 font-bold mb-2 text-lg">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Technical Specs */}
          <div className="p-8 border border-purple-500/30 rounded-lg bg-gradient-to-br from-purple-950/20 to-purple-950/10">
            <h3 className="text-purple-300 font-bold mb-6 text-lg tracking-[0.1em] uppercase">
              Technical Specifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: "Processing Cores", value: "512K" },
                { label: "Memory Bandwidth", value: "18.2 TB/s" },
                { label: "Neural Parameters", value: "2.7T" },
                { label: "Decision Latency", value: "< 0.3ms" },
              ].map((spec, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-xs text-purple-400 mb-2 tracking-[0.1em] uppercase">
                    {spec.label}
                  </div>
                  <div className="text-2xl font-bold text-purple-300">
                    {spec.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-[80px]">
            <p className="text-gray-400 text-sm mb-6 tracking-[0.08em] uppercase">
              Ready to experience the future?
            </p>
            <button className="
              px-8 py-3 rounded-full
              bg-gradient-to-r from-purple-600 to-purple-800
              text-white font-bold tracking-[0.1em] uppercase text-sm
              border border-purple-400/50
              hover:border-purple-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]
              transition-all duration-300
            ">
              Explore Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
