"use client";

import { useEffect, useRef, useState } from "react";

const LOOP_SECONDS = 18.0;

const VERTEX_SHADER = `#version 300 es
const vec2 P[3] = vec2[3](vec2(-1.,-1.), vec2(3.,-1.), vec2(-1.,3.));
out vec2 vUV;
void main(){
  vec2 p = P[gl_VertexID];
  vUV = p * 0.5 + 0.5;
  gl_Position = vec4(p, 0., 1.);
}`;

const SCENE_SHADER = `#version 300 es
precision highp float;
out vec4 O;
in vec2 vUV;
uniform vec2 uRes;
uniform float uPhase;

#define PI 3.14159265358979
const float R_IN = 2.6;
const float R_OUT = 13.0;

float hash21(vec2 p){
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float vnoise(vec2 p, float per){
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = hash21(vec2(mod(i.x, per), i.y));
  float b = hash21(vec2(mod(i.x + 1.0, per), i.y));
  float c = hash21(vec2(mod(i.x, per), i.y + 1.0));
  float d = hash21(vec2(mod(i.x + 1.0, per), i.y + 1.0));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

float fbmp(vec2 p, float per){
  float s = 0.0, a = 0.55;
  for(int i = 0; i < 4; i++){
    s += a * vnoise(p, per);
    p = vec2(p.x * 2.0, p.y * 2.0 + 13.71);
    per *= 2.0;
    a *= 0.5;
  }
  return s;
}

vec3 diskShade(vec3 pos, vec3 vdir, out float alpha){
  float r = length(pos.xz);
  float aIn = smoothstep(R_IN * 0.96, R_IN + 0.55, r);
  float aOut = 1.0 - smoothstep(R_OUT - 4.5, R_OUT, r);
  alpha = aIn * aOut;
  if(alpha <= 0.001){ return vec3(0.0); }

  float ang = atan(pos.z, pos.x);
  float u = ang / (2.0 * PI) + 0.5;
  float lr = log(r);
  float P0 = 28.0;

  float n1 = fbmp(vec2((u + uPhase) * P0, lr * 14.0), P0);
  float n2 = fbmp(vec2((u + uPhase * 3.0) * P0 + 7.31, lr * 14.0 + 3.17), P0);
  float k = smoothstep(9.0, R_IN, r);
  float n = mix(n1, n2, k);
  float streak = pow(clamp(n * 1.35, 0.0, 1.0), 3.0);

  float n3 = fbmp(vec2((u + uPhase * 2.0) * P0 * 2.0 + 3.7, lr * 44.0), P0 * 2.0);
  streak = streak * 0.62 + 0.85 * pow(n3, 5.0);

  float emis = pow(R_IN / r, 1.9);
  vec3 tg = normalize(vec3(-pos.z, 0.0, pos.x));
  float beta = 0.50 * sqrt(R_IN / max(r, R_IN));
  float dop = pow(max(0.0, 1.0 + 0.65 * beta * dot(tg, -vdir)), 3.0);

  float cw = smoothstep(13.0, 6.5, r);
  vec3 warm = vec3(0.95, 0.55, 0.25);
  vec3 cold = vec3(0.50, 0.78, 1.75);
  vec3 col = mix(warm, cold, cw);

  float b = emis * (0.18 + 2.2 * streak) * dop;
  col = col * b * 4.2 + vec3(0.78, 0.90, 1.40) * pow(emis, 3.0) * 0.55 * dop;
  return col * alpha;
}

vec3 stars(vec3 d){
  vec2 sp = vec2(atan(d.z, d.x) * 2.5, d.y * 4.2);
  vec2 g = sp * 52.0;
  vec2 cell = floor(g);
  vec2 fc = fract(g) - 0.5;
  float h = hash21(cell);
  if(h < 0.994) return vec3(0.0);
  vec2 off = (vec2(hash21(cell + 1.3), hash21(cell + 2.7)) - 0.5) * 0.6;
  float ds = length(fc - off);
  float s = exp(-ds * ds * 160.0) * (0.25 + 0.75 * hash21(cell + 5.1));
  return vec3(0.78, 0.85, 1.0) * s * 0.9;
}

vec3 render(vec3 ro, vec3 rd){
  vec3 p = ro;
  vec3 v = rd;
  vec3 c3 = cross(p, v);
  float h2 = dot(c3, c3);

  vec3 col = vec3(0.0);
  float trans = 1.0;
  float minr = 1e9;
  bool captured = false;
  bool escaped = false;

  for(int i = 0; i < 190; i++){
    float r = length(p);
    minr = min(minr, r);
    if(r < 1.0){ captured = true; break; }
    if(r > 30.0 && dot(p, v) > 0.0){ escaped = true; break; }

    float dt = clamp(0.09 * (r - 0.9), 0.02, 0.40);
    vec3 pp = p;
    p += v * dt;
    v += -1.5 * h2 * p / pow(dot(p, p), 2.5) * dt;

    float rr = length(p);
    float haze = exp(-abs(p.y) * 2.6) * exp(-max(rr - 1.2, 0.0) * 0.85)
      * smoothstep(1.4, 2.8, rr);
    col += trans * vec3(0.34, 0.55, 1.10) * haze * dt * 0.055;

    if(pp.y * p.y < 0.0){
      float f = pp.y / (pp.y - p.y);
      vec3 hp = mix(pp, p, f);
      float hr = length(hp.xz);
      if(hr > R_IN * 0.9 && hr < R_OUT){
        float al;
        vec3 dc = diskShade(hp, normalize(v), al);
        col += trans * dc;
        trans *= (1.0 - 0.88 * al);
      }
    }
  }

  float ring1 = exp(-pow((minr - 1.52) * 3.6, 2.0));
  float ring2 = exp(-pow((minr - 1.46) * 10.0, 2.0));
  col += vec3(0.70, 0.84, 1.30) * ring1 * 0.15 * (0.35 + 0.65 * trans);
  col += vec3(0.92, 0.97, 1.30) * ring2 * 1.10 * (0.35 + 0.65 * trans);

  if(!captured && (escaped || minr > 6.0)){
    col += trans * stars(normalize(v));
  }
  return col;
}

void main(){
  float uvScale = min(uRes.x, uRes.y);
  vec2 uv = (gl_FragCoord.xy - 0.5 * uRes) / uvScale * 2.0;
  uv.y -= 0.02;

  float ph = uPhase * 2.0 * PI;
  vec3 ro = vec3(0.02 * sin(ph), 1.22 + 0.05 * sin(ph), 15.4);
  vec3 ta = vec3(0.0, 0.0, 0.0);
  vec3 fw = normalize(ta - ro);
  vec3 ri = normalize(cross(fw, vec3(0.0, 1.0, 0.0)));
  vec3 up = cross(ri, fw);
  vec3 rd = normalize(fw + 0.58 * (uv.x * ri + uv.y * up));

  vec3 col = render(ro, rd);
  O = vec4(col, 1.0);
}`;

const BRIGHT_SHADER = `#version 300 es
precision highp float;
out vec4 O;
in vec2 vUV;
uniform sampler2D uTex;
void main(){
  vec3 c = texture(uTex, vUV).rgb;
  float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
  float w = smoothstep(0.60, 1.20, l);
  O = vec4(c * w, 1.0);
}`;

const BLUR_SHADER = `#version 300 es
precision highp float;
out vec4 O;
in vec2 vUV;
uniform sampler2D uTex;
uniform vec2 uDir;
void main(){
  float k[5] = float[5](0.227027, 0.194594, 0.121621, 0.054054, 0.016216);
  vec3 c = texture(uTex, vUV).rgb * k[0];
  for(int i = 1; i < 5; i++){
    vec2 o = uDir * float(i) * 1.6;
    c += texture(uTex, vUV + o).rgb * k[i];
    c += texture(uTex, vUV - o).rgb * k[i];
  }
  O = vec4(c, 1.0);
}`;

const COMPOSITE_SHADER = `#version 300 es
precision highp float;
out vec4 O;
in vec2 vUV;
uniform sampler2D uScene;
uniform sampler2D uBloom;
uniform float uTime;

float hash21(vec2 p){
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

vec3 aces(vec3 x){
  return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0);
}

void main(){
  vec3 c = texture(uScene, vUV).rgb;
  c += texture(uBloom, vUV).rgb * 1.0;
  c *= vec3(0.90, 1.00, 1.22);

  vec2 q = vUV * 2.0 - 1.0;
  q.y *= 0.85;
  c *= 1.0 - 0.34 * dot(q, q);

  c = aces(c * 1.05);
  c = pow(c, vec3(1.0 / 2.2));

  float g = hash21(gl_FragCoord.xy + fract(uTime) * vec2(231.7, 147.3)) - 0.5;
  c += g * 0.018;

  O = vec4(c, 1.0);
}`;

function compileShader(gl, type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    const info = gl.getShaderInfoLog(shader) || "Unknown shader error";
    gl.deleteShader(shader);
    throw new Error(info);
  }

  return shader;
}

function createProgram(gl, fragmentSource) {
  const program = gl.createProgram();
  const vertexShader = compileShader(gl, gl.VERTEX_SHADER, VERTEX_SHADER);
  const fragmentShader = compileShader(gl, gl.FRAGMENT_SHADER, fragmentSource);

  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);

  gl.deleteShader(vertexShader);
  gl.deleteShader(fragmentShader);

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    const info = gl.getProgramInfoLog(program) || "Unknown program link error";
    gl.deleteProgram(program);
    throw new Error(info);
  }

  return program;
}

function createTarget(gl, width, height, internalFormat, type) {
  const texture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, width, height, 0, gl.RGBA, type, null);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

  const framebuffer = gl.createFramebuffer();
  gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
  gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
  gl.bindFramebuffer(gl.FRAMEBUFFER, null);

  return { texture, framebuffer, width, height };
}

function destroyTarget(gl, target) {
  if (!target) return;
  gl.deleteTexture(target.texture);
  gl.deleteFramebuffer(target.framebuffer);
}

export default function BlackHoleCanvas() {
  const canvasRef = useRef(null);
  const [hasWebGl, setHasWebGl] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const gl = canvas.getContext("webgl2", {
      antialias: false,
      alpha: false,
      powerPreference: "high-performance",
      preserveDrawingBuffer: false,
    });

    if (!gl) {
      setHasWebGl(false);
      return undefined;
    }

    let disposed = false;
    let rafId = 0;
    let scale = 0.68;
    let frameAcc = 0;
    let frameN = 0;
    let lastT = performance.now();
    let scene = null;
    let bloomA = null;
    let bloomB = null;

    setHasWebGl(true);

    try {
      const hasFloat = Boolean(gl.getExtension("EXT_color_buffer_float"));
      const internalFormat = hasFloat ? gl.RGBA16F : gl.RGBA8;
      const textureType = hasFloat ? gl.HALF_FLOAT : gl.UNSIGNED_BYTE;

      const sceneProgram = createProgram(gl, SCENE_SHADER);
      const brightProgram = createProgram(gl, BRIGHT_SHADER);
      const blurProgram = createProgram(gl, BLUR_SHADER);
      const compositeProgram = createProgram(gl, COMPOSITE_SHADER);

      const uniforms = {
        sceneRes: gl.getUniformLocation(sceneProgram, "uRes"),
        scenePhase: gl.getUniformLocation(sceneProgram, "uPhase"),
        brightTex: gl.getUniformLocation(brightProgram, "uTex"),
        blurTex: gl.getUniformLocation(blurProgram, "uTex"),
        blurDir: gl.getUniformLocation(blurProgram, "uDir"),
        compScene: gl.getUniformLocation(compositeProgram, "uScene"),
        compBloom: gl.getUniformLocation(compositeProgram, "uBloom"),
        compTime: gl.getUniformLocation(compositeProgram, "uTime"),
      };

      const resize = () => {
        if (disposed) return;

        const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
        const canvasWidth = Math.max(2, Math.floor(canvas.clientWidth * dpr));
        const canvasHeight = Math.max(2, Math.floor(canvas.clientHeight * dpr));
        const sceneWidth = Math.max(2, Math.floor(canvasWidth * scale));
        const sceneHeight = Math.max(2, Math.floor(canvasHeight * scale));

        if (canvas.width === canvasWidth && canvas.height === canvasHeight && scene) return;

        canvas.width = canvasWidth;
        canvas.height = canvasHeight;

        destroyTarget(gl, scene);
        destroyTarget(gl, bloomA);
        destroyTarget(gl, bloomB);

        scene = createTarget(gl, sceneWidth, sceneHeight, internalFormat, textureType);
        bloomA = createTarget(
          gl,
          Math.max(2, sceneWidth >> 2),
          Math.max(2, sceneHeight >> 2),
          internalFormat,
          textureType
        );
        bloomB = createTarget(
          gl,
          Math.max(2, sceneWidth >> 2),
          Math.max(2, sceneHeight >> 2),
          internalFormat,
          textureType
        );
      };

      const draw = (now) => {
        if (disposed || !scene || !bloomA || !bloomB) return;

        const tSec = now / 1000;
        const phase = (tSec % LOOP_SECONDS) / LOOP_SECONDS;

        gl.bindFramebuffer(gl.FRAMEBUFFER, scene.framebuffer);
        gl.viewport(0, 0, scene.width, scene.height);
        gl.useProgram(sceneProgram);
        gl.uniform2f(uniforms.sceneRes, scene.width, scene.height);
        gl.uniform1f(uniforms.scenePhase, phase);
        gl.drawArrays(gl.TRIANGLES, 0, 3);

        gl.bindFramebuffer(gl.FRAMEBUFFER, bloomA.framebuffer);
        gl.viewport(0, 0, bloomA.width, bloomA.height);
        gl.useProgram(brightProgram);
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, scene.texture);
        gl.uniform1i(uniforms.brightTex, 0);
        gl.drawArrays(gl.TRIANGLES, 0, 3);

        gl.useProgram(blurProgram);
        gl.uniform1i(uniforms.blurTex, 0);

        for (let i = 0; i < 2; i++) {
          gl.bindFramebuffer(gl.FRAMEBUFFER, bloomB.framebuffer);
          gl.viewport(0, 0, bloomB.width, bloomB.height);
          gl.bindTexture(gl.TEXTURE_2D, bloomA.texture);
          gl.uniform2f(uniforms.blurDir, (1 + i * 1.5) / bloomA.width, 0);
          gl.drawArrays(gl.TRIANGLES, 0, 3);

          gl.bindFramebuffer(gl.FRAMEBUFFER, bloomA.framebuffer);
          gl.viewport(0, 0, bloomA.width, bloomA.height);
          gl.bindTexture(gl.TEXTURE_2D, bloomB.texture);
          gl.uniform2f(uniforms.blurDir, 0, (1 + i * 1.5) / bloomA.height);
          gl.drawArrays(gl.TRIANGLES, 0, 3);
        }

        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        gl.viewport(0, 0, canvas.width, canvas.height);
        gl.useProgram(compositeProgram);
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, scene.texture);
        gl.uniform1i(uniforms.compScene, 0);
        gl.activeTexture(gl.TEXTURE1);
        gl.bindTexture(gl.TEXTURE_2D, bloomA.texture);
        gl.uniform1i(uniforms.compBloom, 1);
        gl.uniform1f(uniforms.compTime, tSec % LOOP_SECONDS);
        gl.drawArrays(gl.TRIANGLES, 0, 3);

        const dt = now - lastT;
        lastT = now;
        if (dt > 0 && dt < 250) {
          frameAcc += dt;
          frameN++;
        }
        if (frameN >= 40) {
          const avg = frameAcc / frameN;
          frameAcc = 0;
          frameN = 0;
          if (avg > 20 && scale > 0.42) {
            scale = Math.max(0.42, scale - 0.08);
            resize();
          } else if (avg < 13 && scale < 0.76) {
            scale = Math.min(0.76, scale + 0.04);
            resize();
          }
        }

        rafId = requestAnimationFrame(draw);
      };

      resize();
      window.addEventListener("resize", resize);
      rafId = requestAnimationFrame(draw);

      return () => {
        disposed = true;
        window.removeEventListener("resize", resize);
        cancelAnimationFrame(rafId);
        destroyTarget(gl, scene);
        destroyTarget(gl, bloomA);
        destroyTarget(gl, bloomB);
        gl.deleteProgram(sceneProgram);
        gl.deleteProgram(brightProgram);
        gl.deleteProgram(blurProgram);
        gl.deleteProgram(compositeProgram);
      };
    } catch (error) {
      console.error("Black hole shader failed:", error);
      setHasWebGl(false);
      return undefined;
    }
  }, []);

  return (
    <div
      className="
        pointer-events-none
        absolute inset-x-0 bottom-[-8dvh]
        z-0
        h-[58dvh]
        min-h-[360px]
        w-full
        overflow-hidden
        bg-[#050914]
        max-sm:bottom-[-1dvh]
        max-sm:h-[36dvh]
        max-sm:min-h-[280px]
      "
      style={{
        WebkitTapHighlightColor: "transparent",
        background:
          "radial-gradient(ellipse at 50% 58%, rgba(24, 54, 110, 0.24), rgba(5, 9, 20, 0.92) 52%, #050914 100%)",
      }}
    >
      <canvas
        ref={canvasRef}
        className={`absolute inset-0 h-full w-full ${hasWebGl ? "block" : "hidden"}`}
        aria-hidden="true"
      />

      {!hasWebGl && (
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse at 50% 42%, rgba(112,166,255,0.42), rgba(22,46,98,0.18) 22%, rgba(5,9,20,0) 48%), radial-gradient(circle at 50% 42%, #000 0 9%, rgba(4,8,18,0.94) 12%, transparent 24%), #050914",
          }}
        />
      )}

      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#050914] via-[#050914]/55 to-transparent max-sm:h-24" />
    </div>
  );
}
