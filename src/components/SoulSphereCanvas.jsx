import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const F3 = 1 / 3;
const G3 = 1 / 6;
const GRAD_3 = [
  [1, 1, 0],
  [-1, 1, 0],
  [1, -1, 0],
  [-1, -1, 0],
  [1, 0, 1],
  [-1, 0, 1],
  [1, 0, -1],
  [-1, 0, -1],
  [0, 1, 1],
  [0, -1, 1],
  [0, 1, -1],
  [0, -1, -1],
];

const BIG_WORDS = [
  "AGENTIC WARFARE",
  "MULTIPLE DOMAINS SUPPORTED",
  "MODULAR AND EXTENSIBLE",
  "AI-BASED TRAINABLE BEHAVIORS",
  "RESILIENT AUTONOMY FOR COMPLEX MISSIONS",
  "NEURAL LATTICE",
  "SOUL OF THE MACHINE",
  "SWARM AUTONOMY",
  "LATENT SPACE",
];

const SMALL_WORDS = [
  "AI",
  "AGI",
  "SOUL",
  "ENTROPY",
  "TOKENS",
  "P=NP?",
  "E=MC2",
  "WARFARE",
  "SIGNAL",
  "ORBIT",
  "INFERENCE",
  "POLICY",
  "QUBIT",
  "PHOTON",
  "NEBULA",
  "PULSAR",
];

const SCRAMBLE = "01<>#$%&ΔΣπλ/";

function createSeededRandom(initialSeed) {
  let seed = initialSeed >>> 0;

  return () => {
    seed += 0x6d2b79f5;
    let value = seed;
    value = Math.imul(value ^ (value >>> 15), value | 1);
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

function createNoise3D(random) {
  const p = new Uint8Array(256);
  const perm = new Uint8Array(512);
  const permMod12 = new Uint8Array(512);

  for (let index = 0; index < 256; index += 1) p[index] = index;
  for (let index = 255; index > 0; index -= 1) {
    const swapIndex = Math.floor(random() * (index + 1));
    [p[index], p[swapIndex]] = [p[swapIndex], p[index]];
  }
  for (let index = 0; index < 512; index += 1) {
    perm[index] = p[index & 255];
    permMod12[index] = perm[index] % 12;
  }

  const dot = (gradient, x, y, z) =>
    gradient[0] * x + gradient[1] * y + gradient[2] * z;

  return (xin, yin, zin) => {
    const skew = (xin + yin + zin) * F3;
    const i = Math.floor(xin + skew);
    const j = Math.floor(yin + skew);
    const k = Math.floor(zin + skew);
    const unskew = (i + j + k) * G3;
    const x0 = xin - (i - unskew);
    const y0 = yin - (j - unskew);
    const z0 = zin - (k - unskew);

    let i1;
    let j1;
    let k1;
    let i2;
    let j2;
    let k2;

    if (x0 >= y0) {
      if (y0 >= z0) {
        [i1, j1, k1, i2, j2, k2] = [1, 0, 0, 1, 1, 0];
      } else if (x0 >= z0) {
        [i1, j1, k1, i2, j2, k2] = [1, 0, 0, 1, 0, 1];
      } else {
        [i1, j1, k1, i2, j2, k2] = [0, 0, 1, 1, 0, 1];
      }
    } else if (y0 < z0) {
      [i1, j1, k1, i2, j2, k2] = [0, 0, 1, 0, 1, 1];
    } else if (x0 < z0) {
      [i1, j1, k1, i2, j2, k2] = [0, 1, 0, 0, 1, 1];
    } else {
      [i1, j1, k1, i2, j2, k2] = [0, 1, 0, 1, 1, 0];
    }

    const x1 = x0 - i1 + G3;
    const y1 = y0 - j1 + G3;
    const z1 = z0 - k1 + G3;
    const x2 = x0 - i2 + 2 * G3;
    const y2 = y0 - j2 + 2 * G3;
    const z2 = z0 - k2 + 2 * G3;
    const x3 = x0 - 1 + 3 * G3;
    const y3 = y0 - 1 + 3 * G3;
    const z3 = z0 - 1 + 3 * G3;
    const ii = i & 255;
    const jj = j & 255;
    const kk = k & 255;

    const contribution = (x, y, z, gradientIndex) => {
      let falloff = 0.6 - x * x - y * y - z * z;
      if (falloff < 0) return 0;
      falloff *= falloff;
      return falloff * falloff * dot(GRAD_3[gradientIndex], x, y, z);
    };

    const n0 = contribution(
      x0,
      y0,
      z0,
      permMod12[ii + perm[jj + perm[kk]]],
    );
    const n1 = contribution(
      x1,
      y1,
      z1,
      permMod12[ii + i1 + perm[jj + j1 + perm[kk + k1]]],
    );
    const n2 = contribution(
      x2,
      y2,
      z2,
      permMod12[ii + i2 + perm[jj + j2 + perm[kk + k2]]],
    );
    const n3 = contribution(
      x3,
      y3,
      z3,
      permMod12[ii + 1 + perm[jj + 1 + perm[kk + 1]]],
    );

    return 32 * (n0 + n1 + n2 + n3);
  };
}

function randomDirection(random) {
  const theta = random() * Math.PI * 2;
  const phi = Math.acos(2 * random() - 1);

  return new THREE.Vector3(
    Math.sin(phi) * Math.cos(theta),
    Math.sin(phi) * Math.sin(theta),
    Math.cos(phi),
  );
}

function createDotTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 32;
  canvas.height = 32;
  const context = canvas.getContext("2d");
  const gradient = context.createRadialGradient(16, 16, 0, 16, 16, 16);
  gradient.addColorStop(0, "rgba(255,255,255,1)");
  gradient.addColorStop(0.4, "rgba(255,255,255,0.62)");
  gradient.addColorStop(1, "rgba(255,255,255,0)");
  context.fillStyle = gradient;
  context.fillRect(0, 0, 32, 32);

  return new THREE.CanvasTexture(canvas);
}

function createLabel(maxCharacters, worldHeight) {
  const canvas = document.createElement("canvas");
  canvas.width = Math.ceil(maxCharacters * 20.5) + 18;
  canvas.height = 52;
  const context = canvas.getContext("2d");
  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.LinearFilter;
  texture.colorSpace = THREE.SRGBColorSpace;

  const material = new THREE.SpriteMaterial({
    map: texture,
    transparent: true,
    depthTest: true,
    depthWrite: false,
    toneMapped: false,
  });
  const sprite = new THREE.Sprite(material);
  sprite.scale.set(worldHeight * (canvas.width / canvas.height), worldHeight, 1);

  const draw = (text, color = "#e8ecf4") => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.font = '500 32px "Source Code Pro", "Cascadia Code", Consolas, monospace';
    context.textBaseline = "middle";
    context.fillStyle = color;
    context.fillText(text.toUpperCase(), 8, canvas.height / 2);
    texture.needsUpdate = true;
  };

  return { sprite, draw };
}

export default function SoulSphereCanvas({ className = "" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const random = createSeededRandom(0x50a1c0de);
    const noise3D = createNoise3D(random);
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let reduceMotion = motionQuery.matches;
    let dragging = false;
    let disposed = false;
    let animationFrame = 0;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
      premultipliedAlpha: true,
    });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(0, 0, 11.8);

    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;
    controls.dampingFactor = 0.055;
    controls.enablePan = false;
    controls.enableZoom = false;
    controls.rotateSpeed = 0.52;
    controls.autoRotate = !reduceMotion;
    controls.autoRotateSpeed = 0.38;

    const handleControlStart = () => {
      dragging = true;
      controls.autoRotate = false;
      canvas.classList.add("is-dragging");
    };
    const handleControlEnd = () => {
      dragging = false;
      controls.autoRotate = !reduceMotion;
      canvas.classList.remove("is-dragging");
    };
    controls.addEventListener("start", handleControlStart);
    controls.addEventListener("end", handleControlEnd);

    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    const coreRadius = 2.5;
    const coreSphere = new THREE.Mesh(
      new THREE.SphereGeometry(coreRadius - 0.025, 48, 48),
      new THREE.MeshBasicMaterial({ color: 0x010109 }),
    );
    mainGroup.add(coreSphere);

    const numberOfPaths = 560;
    const segmentsPerPath = 88;
    const pathStep = 0.048;
    const noiseScale = 0.75;
    const verticesPerPath = (segmentsPerPath - 1) * 2;
    const linePositions = new Float32Array(
      numberOfPaths * verticesPerPath * 3,
    );
    const lineColors = new Float32Array(numberOfPaths * verticesPerPath * 3);
    const seeds = [];
    const workingPosition = new THREE.Vector3();
    const workingNormal = new THREE.Vector3();
    const workingDirection = new THREE.Vector3();

    const tangentAt = (position, time, output) => {
      output.set(
        noise3D(
          position.x * noiseScale + time,
          position.y * noiseScale,
          position.z * noiseScale,
        ),
        noise3D(
          position.x * noiseScale + 100,
          position.y * noiseScale + 100 + time,
          position.z * noiseScale + 100,
        ),
        noise3D(
          position.x * noiseScale + 200,
          position.y * noiseScale + 200,
          position.z * noiseScale + 200 + time,
        ),
      );
      workingNormal.copy(position).normalize();
      output.addScaledVector(workingNormal, -output.dot(workingNormal));

      if (output.lengthSq() < 0.000001) {
        output.crossVectors(workingNormal, new THREE.Vector3(0, 1, 0));
      }

      return output.normalize();
    };

    const integratePath = (pathIndex, time) => {
      const base = pathIndex * verticesPerPath * 3;
      workingPosition.copy(seeds[pathIndex]);
      let previousX = workingPosition.x;
      let previousY = workingPosition.y;
      let previousZ = workingPosition.z;

      for (let segment = 0; segment < segmentsPerPath - 1; segment += 1) {
        tangentAt(workingPosition, time, workingDirection);
        workingPosition.addScaledVector(workingDirection, pathStep);
        workingPosition.normalize().multiplyScalar(coreRadius);

        const offset = base + segment * 6;
        linePositions[offset] = previousX;
        linePositions[offset + 1] = previousY;
        linePositions[offset + 2] = previousZ;
        linePositions[offset + 3] = workingPosition.x;
        linePositions[offset + 4] = workingPosition.y;
        linePositions[offset + 5] = workingPosition.z;
        previousX = workingPosition.x;
        previousY = workingPosition.y;
        previousZ = workingPosition.z;
      }
    };

    const palette = [
      [0.1, 0.12, 0.24],
      [0.08, 0.09, 0.18],
      [0.16, 0.18, 0.34],
      [0.3, 0.79, 0.94],
      [0.26, 0.38, 0.93],
      [0.97, 0.63, 0.45],
      [1, 1, 1],
    ];
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));

    for (let index = 0; index < numberOfPaths; index += 1) {
      const y = 1 - (index / (numberOfPaths - 1)) * 2;
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = goldenAngle * index;
      seeds.push(
        new THREE.Vector3(
          Math.cos(theta) * radiusAtY,
          y,
          Math.sin(theta) * radiusAtY,
        ).multiplyScalar(coreRadius),
      );
      integratePath(index, 0);

      const chance = random();
      let color;
      let brightness;
      if (chance < 0.72) {
        color = palette[Math.floor(random() * 3)];
        brightness = 0.55 + random() * 0.45;
      } else if (chance < 0.88) {
        color = palette[3 + Math.floor(random() * 2)];
        brightness = 0.5 + random() * 0.35;
      } else {
        color = palette[5 + Math.floor(random() * 2)];
        brightness = 0.4 + random() * 0.3;
      }

      const base = index * verticesPerPath * 3;
      for (let vertex = 0; vertex < verticesPerPath; vertex += 1) {
        const distanceFromCenter = Math.abs((vertex / verticesPerPath) * 2 - 1);
        const fade = brightness * (1 - distanceFromCenter ** 2 * 0.7);
        lineColors[base + vertex * 3] = color[0] * fade;
        lineColors[base + vertex * 3 + 1] = color[1] * fade;
        lineColors[base + vertex * 3 + 2] = color[2] * fade;
      }
    }

    const lineGeometry = new THREE.BufferGeometry();
    const linePositionAttribute = new THREE.BufferAttribute(linePositions, 3);
    linePositionAttribute.setUsage(THREE.DynamicDrawUsage);
    lineGeometry.setAttribute("position", linePositionAttribute);
    lineGeometry.setAttribute("color", new THREE.BufferAttribute(lineColors, 3));
    const sphereLines = new THREE.LineSegments(
      lineGeometry,
      new THREE.LineBasicMaterial({
        vertexColors: true,
        blending: THREE.AdditiveBlending,
        transparent: true,
        depthWrite: false,
      }),
    );
    sphereLines.frustumCulled = false;
    mainGroup.add(sphereLines);

    const numberOfComets = 170;
    const tailLength = 7;
    const cometPositions = new Float32Array(numberOfComets * tailLength * 3);
    const cometColors = new Float32Array(numberOfComets * tailLength * 3);
    const cometPalette = [palette[3], palette[4], palette[5], palette[6]];
    const comets = [];

    for (let index = 0; index < numberOfComets; index += 1) {
      const color = cometPalette[Math.floor(random() * cometPalette.length)];
      comets.push({
        path: Math.floor(random() * numberOfPaths),
        progress: random(),
        speed: 0.008 + random() * 0.02,
      });

      for (let tailIndex = 0; tailIndex < tailLength; tailIndex += 1) {
        const fade = (1 - tailIndex / tailLength) ** 2;
        const offset = (index * tailLength + tailIndex) * 3;
        cometColors[offset] = color[0] * fade;
        cometColors[offset + 1] = color[1] * fade;
        cometColors[offset + 2] = color[2] * fade;
      }
    }

    const samplePath = (pathIndex, progress, output) => {
      const segmentCount = segmentsPerPath - 1;
      const progressOnPath = Math.min(0.9999, Math.max(0, progress)) * segmentCount;
      const segment = Math.floor(progressOnPath);
      const blend = progressOnPath - segment;
      const offset = (pathIndex * verticesPerPath + segment * 2) * 3;
      output.set(
        linePositions[offset] +
          (linePositions[offset + 3] - linePositions[offset]) * blend,
        linePositions[offset + 1] +
          (linePositions[offset + 4] - linePositions[offset + 1]) * blend,
        linePositions[offset + 2] +
          (linePositions[offset + 5] - linePositions[offset + 2]) * blend,
      );
    };

    const cometGeometry = new THREE.BufferGeometry();
    const cometPositionAttribute = new THREE.BufferAttribute(cometPositions, 3);
    cometPositionAttribute.setUsage(THREE.DynamicDrawUsage);
    cometGeometry.setAttribute("position", cometPositionAttribute);
    cometGeometry.setAttribute("color", new THREE.BufferAttribute(cometColors, 3));
    const cometTexture = createDotTexture();
    const cometPoints = new THREE.Points(
      cometGeometry,
      new THREE.PointsMaterial({
        size: 0.065,
        map: cometTexture,
        vertexColors: true,
        blending: THREE.AdditiveBlending,
        transparent: true,
        depthWrite: false,
        sizeAttenuation: true,
      }),
    );
    cometPoints.frustumCulled = false;
    mainGroup.add(cometPoints);

    const networkGroup = new THREE.Group();
    mainGroup.add(networkGroup);
    const pulsingNodes = [];
    const nodeColors = [
      0xff2bd6, 0xffee00, 0x00e5ff, 0x00ff88, 0xffb36b, 0xffffff,
    ];
    const networkRayPoints = [];
    const cyclers = [];

    const addCycler = (draw, pool, holdMinimum, holdMaximum) => {
      cyclers.push({
        draw,
        pool,
        index: Math.floor(random() * pool.length),
        phase: "hold",
        remaining: holdMinimum + random() * (holdMaximum - holdMinimum),
        holdMinimum,
        holdMaximum,
        decodeTime: 0,
        frame: 0,
      });
    };

    for (let index = 0; index < 48; index += 1) {
      const direction = randomDirection(random);
      const start = direction.clone().multiplyScalar(coreRadius - 0.1);
      const extension = 1.1 + random() ** 2 * 0.58;
      const end = direction.clone().multiplyScalar(coreRadius * extension);
      networkRayPoints.push(start, end);

      const node = new THREE.Mesh(
        new THREE.SphereGeometry(0.016 + random() * 0.016, 8, 8),
        new THREE.MeshBasicMaterial({
          color: nodeColors[Math.floor(random() * nodeColors.length)],
          transparent: true,
        }),
      );
      node.position.copy(end);
      networkGroup.add(node);
      pulsingNodes.push({
        mesh: node,
        phase: random() * Math.PI * 2,
        speed: 0.5 + random() * 0.8,
      });

      if (index % 4 === 0) {
        const label = createLabel(12, 0.09);
        label.sprite.position.copy(
          direction.clone().multiplyScalar(coreRadius * extension + 0.08),
        );
        label.sprite.center.set(0, 0.5);
        label.sprite.material.opacity = 0.85;
        networkGroup.add(label.sprite);
        label.draw(SMALL_WORDS[Math.floor(random() * SMALL_WORDS.length)]);
        addCycler(label.draw, SMALL_WORDS, 2, 6);
      }
    }

    networkGroup.add(
      new THREE.LineSegments(
        new THREE.BufferGeometry().setFromPoints(networkRayPoints),
        new THREE.LineBasicMaterial({
          color: 0x657099,
          transparent: true,
          opacity: 0.38,
        }),
      ),
    );

    const featureDirections = [
      new THREE.Vector3(0.9, 0.35, 0.2),
      new THREE.Vector3(-0.85, 0.45, -0.25),
      new THREE.Vector3(0.75, -0.55, 0.35),
      new THREE.Vector3(-0.7, -0.5, 0.5),
      new THREE.Vector3(0.1, 0.95, -0.3),
    ];
    const featureRayPoints = [];

    featureDirections.forEach((rawDirection, index) => {
      const direction = rawDirection.normalize();
      const start = direction.clone().multiplyScalar(coreRadius - 0.1);
      const end = direction.clone().multiplyScalar(coreRadius * 1.45);
      featureRayPoints.push(start, end);

      const pin = new THREE.Mesh(
        new THREE.SphereGeometry(0.024, 8, 8),
        new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true }),
      );
      pin.position.copy(end);
      networkGroup.add(pin);
      pulsingNodes.push({ mesh: pin, phase: index, speed: 0.7 });

      const label = createLabel(42, 0.115);
      label.sprite.position.copy(
        direction.clone().multiplyScalar(coreRadius * 1.45 + 0.1),
      );
      label.sprite.center.set(0, 0.5);
      label.sprite.material.opacity = 0.96;
      networkGroup.add(label.sprite);
      label.draw(BIG_WORDS[index]);
      addCycler(label.draw, BIG_WORDS, 4, 9);
    });

    networkGroup.add(
      new THREE.LineSegments(
        new THREE.BufferGeometry().setFromPoints(featureRayPoints),
        new THREE.LineBasicMaterial({
          color: 0x9aa9c9,
          transparent: true,
          opacity: 0.48,
        }),
      ),
    );

    const soulDirection = new THREE.Vector3(-0.15, 0.75, 0.65).normalize();
    const soulEnd = soulDirection.clone().multiplyScalar(coreRadius * 1.58);
    networkGroup.add(
      new THREE.Line(
        new THREE.BufferGeometry().setFromPoints([
          soulDirection.clone().multiplyScalar(coreRadius - 0.1),
          soulEnd,
        ]),
        new THREE.LineBasicMaterial({
          color: 0xb8c9e8,
          transparent: true,
          opacity: 0.56,
        }),
      ),
    );

    const soulPin = new THREE.Mesh(
      new THREE.SphereGeometry(0.028, 10, 10),
      new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true }),
    );
    soulPin.position.copy(soulEnd);
    networkGroup.add(soulPin);
    pulsingNodes.push({ mesh: soulPin, phase: 0, speed: 0.8 });

    const soulLabel = createLabel(34, 0.14);
    soulLabel.sprite.position.copy(
      soulDirection.clone().multiplyScalar(coreRadius * 1.58 + 0.11),
    );
    soulLabel.sprite.center.set(0, 0.5);
    networkGroup.add(soulLabel.sprite);
    const soulPool = [
      "01001 SOUL 10110",
      "STABLE OMNI UNIVERSAL LEARNER",
      "SOUL // AGENTIC",
      "1101 SOUL 0010",
    ];
    soulLabel.draw(soulPool[0]);
    addCycler(soulLabel.draw, soulPool, 3, 7);

    const binarySprites = [];
    for (let index = 0; index < 10; index += 1) {
      const woven = index % 3 === 0;
      let text = "";
      const length = 12 + Math.floor(random() * 8);
      for (let digit = 0; digit < length; digit += 1) {
        text += random() > 0.5 ? "1" : "0";
      }
      if (woven) {
        const position = 2 + Math.floor(random() * Math.max(1, length - 6));
        text = `${text.slice(0, position)} SOUL ${text.slice(position + 4)}`;
      }

      const label = createLabel(text.length, woven ? 0.09 : 0.075);
      label.draw(text, woven ? "#b9c6dd" : "#39415c");
      label.sprite.position.copy(
        randomDirection(random).multiplyScalar(
          coreRadius * (1.12 + random() * 0.5),
        ),
      );
      label.sprite.material.opacity = woven ? 0.6 : 0.35;
      networkGroup.add(label.sprite);
      binarySprites.push({
        sprite: label.sprite,
        phase: random() * Math.PI * 2,
        speed: 0.3 + random() * 0.7,
        opacity: label.sprite.material.opacity,
      });
    }

    const updateCyclers = (delta) => {
      cyclers.forEach((cycler) => {
        cycler.remaining -= delta;
        if (cycler.phase === "hold") {
          if (cycler.remaining <= 0) {
            cycler.phase = "decode";
            cycler.decodeTime = 0;
            cycler.index =
              (cycler.index + 1 + Math.floor(random() * 3)) % cycler.pool.length;
          }
          return;
        }

        cycler.decodeTime += delta;
        cycler.frame += 1;
        if (cycler.frame % 3 === 0) {
          const word = cycler.pool[cycler.index];
          const progress = Math.min(1, cycler.decodeTime / 1.4);
          const resolved = Math.floor(word.length * progress);
          let output = word.slice(0, resolved);
          for (let index = resolved; index < word.length; index += 1) {
            output +=
              word[index] === " "
                ? " "
                : SCRAMBLE[Math.floor(random() * SCRAMBLE.length)];
          }
          cycler.draw(output);
        }

        if (cycler.decodeTime >= 1.4) {
          cycler.draw(cycler.pool[cycler.index]);
          cycler.phase = "hold";
          cycler.remaining =
            cycler.holdMinimum +
            random() * (cycler.holdMaximum - cycler.holdMinimum);
        }
      });
    };

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

    const handleMotionChange = (event) => {
      reduceMotion = event.matches;
      controls.autoRotate = !reduceMotion && !dragging;
    };
    motionQuery.addEventListener?.("change", handleMotionChange);

    const clock = new THREE.Clock();
    const samplePosition = new THREE.Vector3();
    let elapsed = 0;
    let morphCursor = 0;
    const pathsPerFrame = 5;

    const animate = () => {
      if (disposed) return;
      animationFrame = window.requestAnimationFrame(animate);
      const delta = Math.min(clock.getDelta(), 0.05);
      elapsed += delta;

      if (!reduceMotion) {
        mainGroup.rotation.x += 0.006 * delta;
        mainGroup.rotation.z += 0.01 * delta;

        const fieldTime = elapsed * 0.09;
        const startPath = morphCursor;
        for (let offset = 0; offset < pathsPerFrame; offset += 1) {
          integratePath((startPath + offset) % numberOfPaths, fieldTime);
        }
        linePositionAttribute.clearUpdateRanges();
        if (startPath + pathsPerFrame <= numberOfPaths) {
          linePositionAttribute.addUpdateRange(
            startPath * verticesPerPath * 3,
            pathsPerFrame * verticesPerPath * 3,
          );
        } else {
          linePositionAttribute.addUpdateRange(0, linePositions.length);
        }
        linePositionAttribute.needsUpdate = true;
        morphCursor = (morphCursor + pathsPerFrame) % numberOfPaths;

        comets.forEach((comet, cometIndex) => {
          comet.progress += comet.speed * delta;
          if (comet.progress >= 1) {
            comet.progress = 0;
            comet.path = Math.floor(random() * numberOfPaths);
          }

          for (let tailIndex = 0; tailIndex < tailLength; tailIndex += 1) {
            const progress = comet.progress - tailIndex * 0.007;
            const positionOffset =
              (cometIndex * tailLength + tailIndex) * 3;
            if (progress < 0) {
              cometPositions[positionOffset] = 0;
              cometPositions[positionOffset + 1] = 0;
              cometPositions[positionOffset + 2] = 0;
              continue;
            }

            samplePath(comet.path, progress, samplePosition);
            cometPositions[positionOffset] = samplePosition.x;
            cometPositions[positionOffset + 1] = samplePosition.y;
            cometPositions[positionOffset + 2] = samplePosition.z;
          }
        });
        cometPositionAttribute.needsUpdate = true;
        updateCyclers(delta);
      }

      pulsingNodes.forEach((node) => {
        const scale = 1 + 0.14 * Math.sin(elapsed * node.speed * 2 + node.phase);
        node.mesh.scale.setScalar(scale);
        node.mesh.material.opacity =
          0.72 + 0.28 * Math.sin(elapsed * node.speed * 2 + node.phase);
      });
      binarySprites.forEach((entry) => {
        entry.sprite.material.opacity =
          entry.opacity *
          (0.62 + 0.38 * Math.sin(elapsed * entry.speed * 2 + entry.phase));
      });

      controls.autoRotate = !reduceMotion && !dragging;
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      disposed = true;
      window.cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      motionQuery.removeEventListener?.("change", handleMotionChange);
      controls.removeEventListener("start", handleControlStart);
      controls.removeEventListener("end", handleControlEnd);
      controls.dispose();

      const disposedMaterials = new Set();
      const disposedTextures = new Set();
      scene.traverse((object) => {
        object.geometry?.dispose();
        const materials = Array.isArray(object.material)
          ? object.material
          : [object.material];
        materials.forEach((material) => {
          if (!material || disposedMaterials.has(material)) return;
          if (material.map && !disposedTextures.has(material.map)) {
            disposedTextures.add(material.map);
            material.map.dispose();
          }
          disposedMaterials.add(material);
          material.dispose();
        });
      });
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`block h-full w-full ${className}`}
      role="img"
      aria-label="Interactive SOUL neural sphere. Drag with the mouse to rotate."
    />
  );
}
