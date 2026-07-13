"use client";

const PATH_1_D =
  "M-140 382C-122 377 -101 374 -79.2008 370.518C-56.7435 366.255 -35.6572 367.317 -13.0986 359.175C34.7614 341.902 85.5207 330.973 133.973 314.956C210.788 289.565 294.796 277.255 376.629 267.981C430.726 261.85 486.404 259.496 542.126 260.701C590.735 261.752 635.305 249.258 682.901 246.346C784.707 240.117 876.493 197.056 977.445 186.501C1054.22 178.474 1128.85 162.885 1203.99 148.619C1228.15 144.032 1254.07 150.371 1279.07 147.641C1302.03 145.135 1323.81 136.734 1346.36 132.453C1385.37 125.046 1422.29 100.836 1462.89 100.672C1494.99 100.542 1525.11 87.6501 1556.29 81.7304C1610.3 71.4774 1662.76 56.0843 1716.87 45.8121C1754.98 38.5761 1791.53 29.2537 1828.62 19.4647C1844.16 15.3636 1857.96 8.16104 1873.83 5.1463C1916 2.2 1967 1.7 2080 0.8";

const PATH_2_D =
  "M-140 366C-120 360 -100 355 -80 352C-48 345 -18 342 11.8599 341.551C34.4933 338.102 53.2336 327.424 77.882 329.626C130.176 334.297 181.973 328.398 234.186 330.968C316.96 335.042 399.822 316.792 479.192 295.026C531.661 280.638 583.702 260.017 634.018 234.152C677.912 211.589 724.83 210.664 769.763 194.36C865.873 159.484 971.087 183.033 1068.56 154.88C1142.69 133.47 1218.61 124.091 1294.34 112.55C1318.69 108.839 1339.23 88.3208 1363.43 81.5173C1385.65 75.2714 1409.71 78.1915 1432.44 74.7282C1471.75 68.7364 1517.5 88.3234 1554.67 71.0119C1584.06 57.3221 1617.98 63.2266 1649.4 58.4376C1703.83 50.143 1759.4 50.0617 1813.93 41.7516C1852.34 35.8977 1890.36 33.7817 1929.1 32.1211C1945.33 31.4253 1961.51 36.0354 1977.51 33.5965C1994.6 31 2014.5 31.4 2080 28.8";

const LINE_1_DURATION = "3.9s";
const LINE_2_DURATION = "3.9s";

export const HOME_LINE_YELLOW_STYLE = {
  arcYellow: "#FBFD00",
  arcYellowRgb: "251, 253, 0",
  peakYellow: "#feff00",
  peakYellowRgb: "254, 255, 0",
  sparkYellow: "#fff000",
  sparkYellowRgb: "255, 240, 0",
  sparkPeak: "#fff900",
  sparkPeakRgb: "255, 249, 0",
  sparkCore: "#ffff66",
  darkEdge: "#0b0b0b",
  oliveEdge: "#6f6a00",
  glowBlurSoft: 1.2,
  glowBlurWide: 3.2,
  lineShadowBlur: 4,
  lineShadowOpacity: 0.3,
};

function LineSpark({ pathId, duration, begin = "0s" }) {
  return (
    <g className="mix-blend-screen">
      <ellipse
        rx="38"
        ry="0.78"
        fill="url(#spark-grad)"
        filter="url(#spark-glow)"
        opacity="0"
      >
        <animateMotion
          dur={duration}
          begin={begin}
          repeatCount="indefinite"
          rotate="auto"
          calcMode="linear"
          keyPoints="0;1"
          keyTimes="0;1"
        >
          <mpath href={`#${pathId}`} />
        </animateMotion>

        <animate
          attributeName="opacity"
          values="0;0.55;0.9;0.55;0"
          keyTimes="0;0.14;0.5;0.86;1"
          dur={duration}
          begin={begin}
          repeatCount="indefinite"
        />
      </ellipse>

      <ellipse
        rx="14"
        ry="0.42"
        fill={HOME_LINE_YELLOW_STYLE.sparkCore}
        filter="url(#spark-glow)"
        opacity="0"
      >
        <animateMotion
          dur={duration}
          begin={begin}
          repeatCount="indefinite"
          rotate="auto"
          calcMode="linear"
          keyPoints="0;1"
          keyTimes="0;1"
        >
          <mpath href={`#${pathId}`} />
        </animateMotion>

        <animate
          attributeName="opacity"
          values="0;0.72;1;0.72;0"
          keyTimes="0;0.14;0.5;0.86;1"
          dur={duration}
          begin={begin}
          repeatCount="indefinite"
        />
      </ellipse>
    </g>
  );
}

export default function AnimatedLine() {
  return (
    <div
      className="
        relative pointer-events-none
        z-30
        left-1/2 -translate-x-1/2
        [--hero-line-scale:0.74]
        sm:[--hero-line-scale:0.78]
        md:[--hero-line-scale:0.82]
        lg:[--hero-line-scale:0.86]
        xl:[--hero-line-scale:0.9]
        2xl:[--hero-line-scale:0.92]

        top-0
        sm:top-2
        md:top-4
        lg:top-6
        xl:top-8

        translate-y-[15px]
        sm:translate-y-5
        md:translate-y-[25px]
        lg:translate-y-[76px]
        xl:translate-y-[30px]

        -rotate-[0.5deg]
        scale-[var(--hero-line-scale)]
        origin-center
      "
      style={{ width: "calc(100vw / var(--hero-line-scale))" }}
    >
      <svg
        viewBox="-80 -20 2110 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible w-full h-auto"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <filter id="line1-shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow
              dx="0"
              dy="2"
              stdDeviation={HOME_LINE_YELLOW_STYLE.lineShadowBlur}
              floodColor="#000000"
              floodOpacity={HOME_LINE_YELLOW_STYLE.lineShadowOpacity}
            />
          </filter>

          <linearGradient id="line1-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={HOME_LINE_YELLOW_STYLE.darkEdge} stopOpacity="0.45" />
            <stop offset="12%" stopColor={HOME_LINE_YELLOW_STYLE.oliveEdge} stopOpacity="0.8" />
            <stop offset="50%" stopColor={HOME_LINE_YELLOW_STYLE.peakYellow} stopOpacity="1" />
            <stop offset="88%" stopColor={HOME_LINE_YELLOW_STYLE.oliveEdge} stopOpacity="0.8" />
            <stop offset="100%" stopColor={HOME_LINE_YELLOW_STYLE.darkEdge} stopOpacity="0.45" />
          </linearGradient>

          <linearGradient id="spark-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={HOME_LINE_YELLOW_STYLE.sparkYellow} stopOpacity="0" />
            <stop offset="35%" stopColor={HOME_LINE_YELLOW_STYLE.sparkYellow} stopOpacity="0.45" />
            <stop offset="50%" stopColor={HOME_LINE_YELLOW_STYLE.sparkPeak} stopOpacity="1" />
            <stop offset="65%" stopColor={HOME_LINE_YELLOW_STYLE.sparkYellow} stopOpacity="0.45" />
            <stop offset="100%" stopColor={HOME_LINE_YELLOW_STYLE.sparkYellow} stopOpacity="0" />
          </linearGradient>

          <linearGradient
            id="line-edge-mask-gradient"
            gradientUnits="userSpaceOnUse"
            x1="-80"
            y1="0"
            x2="2030"
            y2="0"
          >
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="3%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="96.5%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>

          <mask
            id="line-soft-edges"
            maskUnits="userSpaceOnUse"
            x="-120"
            y="-80"
            width="2200"
            height="560"
          >
            <rect
              x="-120"
              y="-80"
              width="2200"
              height="560"
              fill="url(#line-edge-mask-gradient)"
            />
          </mask>

          <filter id="spark-glow" x="-200%" y="-200%" width="500%" height="500%">
            <feGaussianBlur stdDeviation={HOME_LINE_YELLOW_STYLE.glowBlurSoft} result="blur1" />
            <feGaussianBlur stdDeviation={HOME_LINE_YELLOW_STYLE.glowBlurWide} result="blur2" />
            <feMerge>
              <feMergeNode in="blur2" />
              <feMergeNode in="blur1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g mask="url(#line-soft-edges)">
          <path
            id="path1"
            d={PATH_1_D}
            stroke="url(#line1-gradient)"
            strokeWidth="1.65"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            filter="url(#line1-shadow)"
          />

          <path
            id="path2"
            d={PATH_2_D}
            stroke={HOME_LINE_YELLOW_STYLE.arcYellow}
            strokeWidth="1.25"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />

          <LineSpark pathId="path1" duration={LINE_1_DURATION} />
          <LineSpark pathId="path2" duration={LINE_2_DURATION} />
        </g>
      </svg>
    </div>
  );
}
