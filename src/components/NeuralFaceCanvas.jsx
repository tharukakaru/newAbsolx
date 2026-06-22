import { useEffect, useRef } from "react";
import faceSource from "../assets/face-source.png";

const GLYPHS = {
  binary: "0101010101.:|01".split(""),
  ascii: "@%#*+=-:. abcd#W$".split(""),
  dots: ".:.".split(""),
};

const DEFAULTS = {
  speed: 1,
  density: "high",
  glyphSet: "binary",
  color: "#FFFFFF",
  neural: true,
  glow: true,
  field: true,
  fontScale: 0.85,
  contrast: 1,
  intro: true,
};

const GRID = { low: [96, 60], medium: [128, 80], high: [196, 122] };
const PERIOD = 14;
const CROP = { x: 0, y: 96, w: 736, h: 736 };
const ALNUM = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("");
const PHRASES = [
  { text: "ARC OS", n: 4, a: 0.98, key: true },
  { text: "Multiple domains supported", n: 4, a: 0.85 },
  { text: "Modular and extensible", n: 4, a: 0.85 },
  { text: "AI-based trainable behaviors", n: 4, a: 0.85 },
  { text: "Resilient autonomy for complex missions", n: 4, a: 0.85 },
  { text: "edge autonomy", n: 4, a: 0.92 },
  { text: "agentic warfare", n: 4, a: 0.92 },
];

function smoothstep(a, b, x) {
  const t = Math.max(0, Math.min(1, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
}

function hash(n) {
  n = (n ^ 61) ^ (n >>> 16);
  n += n << 3;
  n ^= n >>> 4;
  n = Math.imul(n, 0x27d4eb2d);
  n ^= n >>> 15;
  return (n >>> 0) / 4294967296;
}

function hexToRgb(hex) {
  const match = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex || "#fff");
  return match
    ? [parseInt(match[1], 16), parseInt(match[2], 16), parseInt(match[3], 16)]
    : [255, 255, 255];
}

function fadeAt(nx, ny) {
  const side = smoothstep(0.0, 0.16, nx) * smoothstep(1.0, 0.84, nx);
  const top = smoothstep(0.0, 0.12, ny);
  const bottom = smoothstep(1.0, 0.74, ny);
  return side * top * bottom;
}

function createEngine(canvas, options = {}) {
  const ctx = canvas.getContext("2d", { alpha: true });
  const opts = { ...DEFAULTS, ...options };
  const img = new Image();

  let imgReady = false;
  let disposed = false;
  let rafId = 0;
  let cols = 0;
  let rows = 0;
  let cellW = 0;
  let cellH = 0;
  let viewW = 0;
  let viewH = 0;
  let side = 0;
  let originX = 0;
  let originY = 0;
  let lum = null;
  let raw = null;
  let thr = null;
  let phA = null;
  let phB = null;
  let gseed = null;
  let covBuf = null;
  let nodes = [];
  let edges = [];
  let labels = [];
  let start = performance.now();

  img.onload = () => {
    imgReady = true;
    rebuild();
  };
  img.src = faceSource;

  function resize() {
    const rect = canvas.getBoundingClientRect();
    viewW = Math.max(2, rect.width || 720);
    viewH = Math.max(2, rect.height || 720);
    side = Math.min(viewW, viewH);
    originX = (viewW - side) / 2;
    originY = (viewH - side) / 2;

    const dpr = Math.min(3, window.devicePixelRatio || 1);
    canvas.width = Math.round(viewW * dpr);
    canvas.height = Math.round(viewH * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    cellW = side / cols;
    cellH = side / rows;
  }

  function rebuild() {
    if (!imgReady) return;
    [cols, rows] = GRID[opts.density] || GRID.medium;
    resize();

    const off = document.createElement("canvas");
    off.width = cols;
    off.height = rows;
    const offCtx = off.getContext("2d", { willReadFrequently: true });
    offCtx.imageSmoothingEnabled = true;
    offCtx.drawImage(img, CROP.x, CROP.y, CROP.w, CROP.h, 0, 0, cols, rows);
    const data = offCtx.getImageData(0, 0, cols, rows).data;

    const n = cols * rows;
    raw = new Float32Array(n);
    lum = new Float32Array(n);
    thr = new Float32Array(n);
    phA = new Float32Array(n);
    phB = new Float32Array(n);
    gseed = new Uint16Array(n);

    const cx = cols / 2;
    const cy = rows * 0.46;
    const maxR = Math.hypot(cx, cy);

    for (let i = 0; i < n; i++) {
      const r = data[i * 4];
      const g = data[i * 4 + 1];
      const b = data[i * 4 + 2];
      const l = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
      const col = i % cols;
      const row = (i / cols) | 0;
      const rad = Math.hypot(col - cx, row - cy) / maxR;

      raw[i] = l;
      thr[i] = Math.min(1, 0.3 * rad + 0.34 * (1 - l) + 0.4 * Math.random());
      phA[i] = Math.random() * Math.PI * 2;
      phB[i] = Math.random() * Math.PI * 2;
      gseed[i] = (Math.random() * 65535) | 0;
    }

    applyContrast();
    buildNodes();
  }

  function applyContrast() {
    const k = opts.contrast;
    for (let i = 0; i < raw.length; i++) {
      let v = smoothstep(0.08, 0.74, raw[i]);
      v = Math.pow(v, 1 / (1.45 + 0.5 * k));
      lum[i] = v;
    }
  }

  function buildNodes() {
    const candidates = [];
    for (let i = 0; i < lum.length; i++) {
      if (lum[i] > 0.5) candidates.push(i);
    }

    const minDist = Math.max(cols, rows) * 0.05;
    const picked = [];

    for (let s = 0; s < candidates.length && picked.length < 100; s++) {
      const i = candidates[(Math.random() * candidates.length) | 0];
      const col = i % cols;
      const row = (i / cols) | 0;
      const nx = col / (cols - 1);
      const ny = row / (rows - 1);

      if (ny > 0.7 || ny < 0.1 || nx < 0.14 || nx > 0.86) continue;

      let ok = true;
      for (const point of picked) {
        if (Math.hypot(point.col - col, point.row - row) < minDist) {
          ok = false;
          break;
        }
      }

      if (ok) picked.push({ col, row, i, ph: Math.random() });
    }

    nodes = picked;
    edges = [];

    for (let a = 0; a < nodes.length; a++) {
      const dists = [];
      for (let b = 0; b < nodes.length; b++) {
        if (a !== b) {
          dists.push([Math.hypot(nodes[a].col - nodes[b].col, nodes[a].row - nodes[b].row), b]);
        }
      }
      dists.sort((x, y) => x[0] - y[0]);
      for (let k = 0; k < Math.min(3, dists.length); k++) {
        const b = dists[k][1];
        if (a < b) edges.push({ a, b, ph: Math.random() });
      }
    }

    buildLabels();
  }

  function buildLabels() {
    labels = [];
    const targets = [];
    PHRASES.forEach((phrase) => {
      for (let k = 0; k < phrase.n; k++) targets.push(phrase);
    });

    for (let i = targets.length - 1; i > 0; i--) {
      const j = (Math.random() * (i + 1)) | 0;
      [targets[i], targets[j]] = [targets[j], targets[i]];
    }

    const onFace = (col, row, len) => {
      let hit = 0;
      let total = 0;
      for (let k = 0; k < len; k++) {
        const c = col + k;
        if (c < 0 || c >= cols) continue;
        total++;
        if (lum[row * cols + c] > 0.16) hit++;
      }
      return total ? hit / total : 0;
    };

    for (const phrase of targets) {
      let placed = false;
      for (let tryN = 0; tryN < 160 && !placed; tryN++) {
        const len = phrase.text.length;
        const col = 3 + ((Math.random() * (cols - len - 6)) | 0);
        const row = 4 + ((Math.random() * (rows - 8)) | 0);
        const ny = row / (rows - 1);
        if (col < 1 || col + len > cols - 1 || ny > 0.82 || ny < 0.08) continue;
        if (onFace(col, row, len) < 0.62) continue;

        let clash = false;
        for (const label of labels) {
          const overlaps =
            Math.abs(label.row - row) < 2 &&
            col < label.col + label.text.length + 2 &&
            label.col < col + len + 2;
          if (overlaps) {
            clash = true;
            break;
          }
        }
        if (clash) continue;

        labels.push({
          text: phrase.text,
          col,
          row,
          base: phrase.a,
          key: Boolean(phrase.key),
          ph: Math.random(),
          win: 0.3 + Math.random() * 0.45,
        });
        placed = true;
      }
    }
  }

  function draw(p, form) {
    const tau = Math.PI * 2;
    const [cr, cg, cb] = hexToRgb(opts.color);
    const rgb = `${cr},${cg},${cb}`;
    const set = GLYPHS[opts.glyphSet] || GLYPHS.binary;
    const glyphCount = set.length;

    ctx.clearRect(0, 0, viewW, viewH);
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = `${(cellH * 1.24 * opts.fontScale).toFixed(1)}px SourceCodePro, monospace`;

    const n = cols * rows;
    if (!covBuf || covBuf.length !== n) covBuf = new Float32Array(n);
    covBuf.fill(1);

    if (form > 0.5) {
      for (const label of labels) {
        const cyc = (p + label.ph) % 1;
        const vis = smoothstep(0, 0.14, cyc) * smoothstep(label.win, label.win - 0.14, cyc);
        if (vis < 0.05) continue;

        for (let ci = -1; ci <= label.text.length; ci++) {
          const c = label.col + ci;
          if (c < 0 || c >= cols) continue;

          for (let dr = -1; dr <= 1; dr++) {
            const r = label.row + dr;
            if (r < 0 || r >= rows) continue;
            const clear = dr === 0 ? 1 - vis : 1 - 0.5 * vis;
            const idx = r * cols + c;
            if (clear < covBuf[idx]) covBuf[idx] = clear;
          }
        }
      }
    }

    for (let i = 0; i < lum.length; i++) {
      let alpha = lum[i];
      const col = i % cols;
      const row = (i / cols) | 0;
      const nx = col / (cols - 1);
      const ny = row / (rows - 1);
      const edgeFade = fadeAt(nx, ny);
      if (edgeFade < 0.01) continue;

      const assemble = smoothstep(thr[i] - 0.12, thr[i] + 0.12, form);

      if (alpha < 0.05) {
        if (!opts.field) continue;
        const twinkle = Math.sin(tau * (4 * p) + phA[i] * 3.1);
        if (twinkle < 0.86) continue;
        alpha = 0.05 + (0.045 * (twinkle - 0.86)) / 0.14;
      }

      const mouthBoost =
        1 +
        0.5 *
          smoothstep(0, 0.5, 1 - Math.abs(ny - 0.74) / 0.07) *
          smoothstep(0, 0.5, 1 - Math.abs(nx - 0.5) / 0.22);

      alpha *= assemble * edgeFade * mouthBoost * covBuf[i];
      if (alpha < 0.012) continue;

      alpha *=
        (0.88 + 0.12 * Math.sin(tau * 3 * p + phA[i])) *
        (0.9 + 0.1 * Math.sin(tau * 8 * p + phB[i]));

      if (lum[i] > 0.82) alpha = Math.min(1, alpha * 1.35);

      let glyphIndex = (gseed[i] + ((p * 6 + phB[i] * 6) | 0)) % glyphCount;
      if (glyphIndex < 0) glyphIndex += glyphCount;

      const x = originX + col * cellW + cellW / 2;
      const y = originY + row * cellH + cellH / 2;
      ctx.fillStyle = `rgba(${rgb},${Math.min(1, alpha).toFixed(3)})`;
      ctx.fillText(set[glyphIndex], x, y);
    }

    if (form > 0.5) drawLabels(p, tau, rgb);
    if (opts.neural && form > 0.5 && nodes.length) drawNetwork(p, tau, rgb);

    if (opts.glow) {
      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      ctx.globalAlpha = 0.48;
      ctx.filter = "blur(3px)";
      ctx.drawImage(canvas, 0, 0, viewW, viewH);
      ctx.restore();
      ctx.filter = "none";
    }
  }

  function drawLabels(p, tau, rgb) {
    ctx.save();
    ctx.font = `${(cellH * 1.52 * opts.fontScale).toFixed(1)}px SourceCodePro, monospace`;

    for (const label of labels) {
      const cyc = (p + label.ph) % 1;
      const vis = smoothstep(0, 0.12, cyc) * smoothstep(label.win, label.win - 0.12, cyc);
      if (vis < 0.02) continue;

      const progress = cyc / label.win;
      const flicker = 0.95 + 0.05 * Math.sin(tau * 5 * p + label.ph * 9);
      ctx.shadowColor = `rgba(${rgb},${(0.9 * vis).toFixed(3)})`;
      ctx.shadowBlur = Math.max(2, cellW * (label.key ? 1.9 : 1.5));

      for (let ci = 0; ci < label.text.length; ci++) {
        const ch = label.text[ci];
        if (ch === " ") continue;

        const col = label.col + ci;
        const row = label.row;
        const nx = col / (cols - 1);
        const ny = row / (rows - 1);
        const edgeFade = fadeAt(nx, ny);
        if (edgeFade < 0.02) continue;

        const seed = (label.col * 131 + label.row * 977 + ci * 31) | 0;
        const resolved = progress > 0.04 + hash(seed) * 0.16;
        const tick = (p * 12 + seed) | 0;
        let drawCh = ch;

        if (!resolved) {
          drawCh = ALNUM[(Math.abs(seed) + ((p * 24) | 0)) % ALNUM.length];
        } else if (hash(seed ^ tick) < 0.025) {
          drawCh = ALNUM[(Math.abs(seed * 7) + tick) % ALNUM.length];
        }

        const x = originX + col * cellW + cellW / 2;
        const y = originY + row * cellH + cellH / 2;
        ctx.fillStyle = `rgba(${rgb},${Math.min(1, vis * edgeFade * flicker).toFixed(3)})`;
        ctx.fillText(drawCh, x, y);
      }
    }

    ctx.restore();
  }

  function drawNetwork(p, tau, rgb) {
    const netAlpha = 1;
    ctx.lineWidth = Math.max(0.6, cellW * 0.14);

    for (const edge of edges) {
      const a = nodes[edge.a];
      const b = nodes[edge.b];
      const ax = originX + a.col * cellW + cellW / 2;
      const ay = originY + a.row * cellH + cellH / 2;
      const bx = originX + b.col * cellW + cellW / 2;
      const by = originY + b.row * cellH + cellH / 2;
      const pulse = 0.5 + 0.5 * Math.sin(tau * (2 * p) + edge.ph * tau);

      ctx.strokeStyle = `rgba(${rgb},${((0.07 + 0.18 * pulse) * netAlpha).toFixed(3)})`;
      ctx.beginPath();
      ctx.moveTo(ax, ay);
      ctx.lineTo(bx, by);
      ctx.stroke();

      const travel = (p + edge.ph) % 1;
      const px = ax + (bx - ax) * travel;
      const py = ay + (by - ay) * travel;
      ctx.fillStyle = `rgba(${rgb},${(0.45 * pulse * netAlpha).toFixed(3)})`;
      ctx.beginPath();
      ctx.arc(px, py, Math.max(0.8, cellW * 0.38), 0, tau);
      ctx.fill();
    }

    for (const node of nodes) {
      const x = originX + node.col * cellW + cellW / 2;
      const y = originY + node.row * cellH + cellH / 2;
      const twinkle = 0.4 + 0.6 * Math.abs(Math.sin(tau * (3 * p) + node.ph * tau));
      ctx.fillStyle = `rgba(${rgb},${(0.5 * twinkle * netAlpha).toFixed(3)})`;
      ctx.beginPath();
      ctx.arc(x, y, Math.max(0.9, cellW * 0.5), 0, tau);
      ctx.fill();
    }
  }

  function tick(now) {
    if (!imgReady || !lum || disposed) return;

    const t = ((now - start) / 1000) * opts.speed;
    const formTime = 2.4;
    const form = !opts.intro || t >= formTime ? 1 : smoothstep(0, formTime, t);
    const phase = (t / PERIOD) % 1;
    draw(phase, form);
  }

  function loop(now) {
    tick(now);
    if (!disposed) rafId = requestAnimationFrame(loop);
  }

  const resizeObserver = new ResizeObserver(() => {
    if (!imgReady) return;
    resize();
    tick(performance.now());
  });

  resizeObserver.observe(canvas);
  rafId = requestAnimationFrame(loop);

  return {
    destroy() {
      disposed = true;
      cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
    },
    restartLoop() {
      start = performance.now();
    },
  };
}

export default function NeuralFaceCanvas({ className = "", options }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return undefined;

    const engine = createEngine(canvasRef.current, options);
    return () => engine.destroy();
  }, [options]);

  return (
    <canvas
      ref={canvasRef}
      className={`block h-full w-full ${className}`}
      aria-hidden="true"
    />
  );
}
