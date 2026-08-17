import { useRef } from "react";
import useTextShuffle from "../../Utils/useTextShuffle";

export default function OperationalAppsSection() {
  const operationalRef = useRef(null);
  const applicationsRef = useRef(null);

  useTextShuffle(operationalRef, {
    viewportOnly: true,
    animateOnLoad: false,
    triggerPoint: 0.3,
  });

  useTextShuffle(applicationsRef, {
    viewportOnly: true,
    animateOnLoad: false,
    triggerPoint: 0.3,
  });

  return (
    <section className="relative z-[60] bg-black py-[100px] md:py-[150px]">
      <div className="relative w-full max-w-6xl mx-auto px-4 md:px-8">
        {/* Top glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse,rgba(34,197,94,0.1),transparent_70%)] blur-3xl pointer-events-none" />

        {/* Title */}
        <div className="text-center mb-[80px]">
          <div className="flex items-center justify-center gap-2 mb-4">
            <h2
              ref={operationalRef}
              data-initial="1512091801090111"
              data-target="OPERATIONAL"
              className="
                text-[clamp(36px,4vw,64px)] font-bold font-identifer-mono
                tracking-[0.12em] text-white
                transition-all duration-300
                uppercase
              "
              style={{
                background: "linear-gradient(135deg, #86efac 0%, #22c55e 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              OPERATIONAL
            </h2>
            <h2
              ref={applicationsRef}
              data-initial="01070116012309301918"
              data-target="APPLICATIONS"
              className="
                text-[clamp(36px,4vw,64px)] font-bold font-identifer-mono
                tracking-[0.12em] text-white
                transition-all duration-300
                uppercase
              "
              style={{
                background: "linear-gradient(135deg, #fbbf24 0%, #f97316 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              APPLICATIONS
            </h2>
          </div>
          <p className="text-gray-400 text-sm md:text-base tracking-[0.08em] uppercase">
            Multi-Domain Deployment & Integration
          </p>
        </div>

        {/* Applications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-[80px]">
          {[
            {
              title: "Aerial Reconnaissance",
              icon: "🛸",
              color: "from-blue-500/30 to-cyan-500/30",
              borderColor: "border-blue-500/30",
              textColor: "text-blue-400",
            },
            {
              title: "Search & Rescue",
              icon: "🚁",
              color: "from-emerald-500/30 to-green-500/30",
              borderColor: "border-green-500/30",
              textColor: "text-green-400",
            },
            {
              title: "Border Security",
              icon: "🛡️",
              color: "from-orange-500/30 to-red-500/30",
              borderColor: "border-red-500/30",
              textColor: "text-orange-400",
            },
            {
              title: "Disaster Response",
              icon: "⚠️",
              color: "from-yellow-500/30 to-orange-500/30",
              borderColor: "border-yellow-500/30",
              textColor: "text-yellow-400",
            },
          ].map((app, idx) => (
            <div
              key={idx}
              className={`
                p-6 rounded-lg border ${app.borderColor}
                bg-gradient-to-br ${app.color}
                hover:border-current hover:shadow-lg transition-all duration-300
                group cursor-pointer
              `}
            >
              <div className="text-4xl mb-3">{app.icon}</div>
              <h3 className={`${app.textColor} font-bold mb-3 tracking-[0.08em] uppercase text-sm`}>
                {app.title}
              </h3>
              <div className="h-0.5 w-0 bg-current group-hover:w-full transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* Integration Ecosystem */}
        <div className="p-8 border border-gray-700/50 rounded-lg bg-gray-950/50 mb-[80px]">
          <h3 className="text-green-400 font-bold mb-8 text-lg tracking-[0.1em] uppercase">
            Integration Ecosystem
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              "SATELLITE",
              "GROUND CONTROL",
              "COMMAND CENTER",
              "PREDICTION ENGINE",
              "DATA ANALYTICS",
              "MOBILE INTERFACE",
            ].map((module, idx) => (
              <div
                key={idx}
                className="
                  p-4 border border-green-500/30 rounded bg-green-950/20
                  hover:bg-green-950/40 transition-colors duration-300
                  text-center
                "
              >
                <div className="text-xs text-green-400 font-bold tracking-wider uppercase">
                  {module}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { metric: "DEPLOYMENT RANGE", value: "500+ km" },
            { metric: "OPERATIONAL TIME", value: "12-24 hrs" },
            { metric: "DATA PROCESSING", value: "8.6 Gbps" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="p-6 border border-green-500/30 rounded-lg bg-black text-center group hover:border-green-400/60 transition-colors"
            >
              <div className="text-xs text-green-500 mb-3 tracking-[0.12em] uppercase">
                {stat.metric}
              </div>
              <div className="text-3xl font-bold text-green-400 group-hover:text-green-300 transition-colors">
                {stat.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
