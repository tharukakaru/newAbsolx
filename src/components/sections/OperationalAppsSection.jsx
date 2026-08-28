import { useEffect, useRef } from "react";
import * as THREE from "three";

const APPLICATIONS_DATA = [
  { num: "01", text: "AREA ", highlight: "RECONNAISSANCE" },
  { num: "02", text: "SEARCH & ", highlight: "RESCUE" },
  { num: "03", highlight: "BORDER ", textAfter: "SECURITY & PATROL" },
  { num: "04", highlight: "COUNTER", textAfter: "–UAS & PROTECTION" },
  {
    num: "05",
    text: "PRECISION ",
    highlight: "STRIKE",
    textAfter: " / LOITERING\nMUNITION",
  },
  { num: "06", text: "MARITIME ", highlight: "ISR" },
  {
    num: "07",
    highlight: "COUNTER",
    textAfter: "–UAS & FORCE\nPROTECTION",
  },
];

export default function OperationalAppsSection({ className = "" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let disposed = false;
    let animationFrame = 0;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(0, 3.5, 10);
    camera.lookAt(0, 0, 0);

    // Wireframe Terrain Background
    const planeGeo = new THREE.PlaneGeometry(20, 12, 80, 50);
    planeGeo.rotateX(-Math.PI / 2.2);

    const pos = planeGeo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const z = pos.getZ(i);
      const elev = Math.sin(x * 0.4) * Math.cos(z * 0.4) * 1.5 + Math.sin(x * 0.8) * 0.5;
      pos.setY(i, elev - 1.2);
    }
    planeGeo.computeVertexNormals();

    const wireframeGeo = new THREE.WireframeGeometry(planeGeo);
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x27272a,
      transparent: true,
      opacity: 0.7,
    });
    const terrain = new THREE.LineSegments(wireframeGeo, lineMat);
    scene.add(terrain);

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const width = Math.max(2, Math.round(rect.width));
      const height = Math.max(2, Math.round(rect.height));
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    resize();

    const animate = () => {
      if (disposed) return;
      animationFrame = window.requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      disposed = true;
      window.cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      planeGeo.dispose();
      wireframeGeo.dispose();
      lineMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <section className={`relative w-full bg-black text-white font-mono overflow-hidden ${className}`}>
      {/* 3D Wireframe Terrain Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block z-0 opacity-70 pointer-events-none"
      />

      {/* Grid Content */}
      <div className="relative z-10 max-w-6xl mx-auto py-16 px-4 flex flex-col items-center">
        
        {/* Title Header with Corner Reticle Brackets */}
        <div className="relative px-8 py-3 mb-16 text-center">
          <span className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-zinc-400" />
          <span className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-zinc-400" />

          <h2 className="text-2xl md:text-4xl font-bold tracking-[0.25em] uppercase font-sans">
            OPERATI<span className="text-yellow-400">O</span>NAL{" "}
            <span className="font-light tracking-[0.2em] text-zinc-100">APPLICATIONS</span>
          </h2>
        </div>

        {/* Crosshair Tactical Grid */}
        <div className="w-full border-t border-zinc-800">
          {/* Row 1 (01 - 03) */}
          <div className="grid grid-cols-1 md:grid-cols-3 border-b border-zinc-800">
            {APPLICATIONS_DATA.slice(0, 3).map((item) => (
              <GridCell key={item.num} item={item} />
            ))}
          </div>

          {/* Row 2 (04 - 06) */}
          <div className="grid grid-cols-1 md:grid-cols-3 border-b border-zinc-800">
            {APPLICATIONS_DATA.slice(3, 6).map((item) => (
              <GridCell key={item.num} item={item} />
            ))}
          </div>

          {/* Row 3 (07 Centered) */}
          <div className="flex justify-center border-b border-zinc-800">
            <div className="w-full md:w-1/3">
              <GridCell item={APPLICATIONS_DATA[6]} isLast />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

function GridCell({ item, isLast = false }) {
  return (
    <div
      className={`relative p-8 flex flex-col items-center text-center min-h-[140px] justify-center ${
        !isLast ? "md:border-r border-zinc-800 last:border-r-0" : ""
      }`}
    >
      <span className="text-xs text-zinc-500 font-semibold mb-3 tracking-widest uppercase">
        {item.num}
      </span>
      <p className="text-sm md:text-base font-bold tracking-widest leading-snug whitespace-pre-line text-zinc-100">
        {item.text}
        {item.highlight && (
          <span className="text-yellow-400">{item.highlight}</span>
        )}
        {item.textAfter}
      </p>
    </div>
  );
}