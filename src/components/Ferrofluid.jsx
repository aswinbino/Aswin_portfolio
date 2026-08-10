import { useEffect, useRef } from "react";

const VERT_SRC = `
attribute vec2 a_position;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`;

const FRAG_SRC = `
precision highp float;

uniform vec2  u_resolution;
uniform float u_time;
uniform vec2  u_mouse;
uniform bool  u_mouseInteraction;
uniform float u_mouseStrength;
uniform float u_mouseRadius;

uniform vec3  u_color0;
uniform vec3  u_color1;
uniform vec3  u_color2;

uniform float u_speed;
uniform float u_scale;
uniform float u_turbulence;
uniform float u_fluidity;
uniform float u_rimWidth;
uniform float u_sharpness;
uniform float u_shimmer;
uniform float u_glow;
uniform float u_opacity;
uniform vec2  u_flowDir;

vec3 mod289v3(vec3 x) { return x - floor(x * (1.0/289.0)) * 289.0; }
vec4 mod289v4(vec4 x) { return x - floor(x * (1.0/289.0)) * 289.0; }
vec4 permute(vec4 x) { return mod289v4(((x*34.0)+1.0)*x); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

float snoise(vec3 v) {
  const vec2 C = vec2(1.0/6.0, 1.0/3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
  vec3 i  = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);
  vec3 g  = step(x0.yzx, x0.xyz);
  vec3 l  = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;
  i = mod289v3(i);
  vec4 p = permute(permute(permute(
    i.z + vec4(0.0, i1.z, i2.z, 1.0))
    + i.y + vec4(0.0, i1.y, i2.y, 1.0))
    + i.x + vec4(0.0, i1.x, i2.x, 1.0));
  float n_ = 0.142857142857;
  vec3 ns = n_ * D.wyz - D.xzx;
  vec4 j  = p - 49.0 * floor(p * ns.z * ns.z);
  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);
  vec4 x  = x_ * ns.x + ns.yyyy;
  vec4 y  = y_ * ns.x + ns.yyyy;
  vec4 h  = 1.0 - abs(x) - abs(y);
  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);
  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));
  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
  p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m * m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
}

float fbm(vec3 p, int oct) {
  float v = 0.0;
  float a = 0.5;
  for (int i = 0; i < 8; i++) {
    if (i >= oct) break;
    v += a * snoise(p);
    p  = p * 2.0 + vec3(5.2, 1.3, 2.8);
    a *= 0.5;
  }
  return v;
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution;
  float aspect = u_resolution.x / u_resolution.y;
  vec2 st = uv;
  st.x *= aspect;

  float t = u_time * u_speed;
  vec2 flow = u_flowDir * t * 0.15;
  vec3 p = vec3((st + flow) * u_scale, t * 0.12);

  if (u_mouseInteraction) {
    vec2 m = u_mouse;
    m.x *= aspect;
    float dist = length(st - m);
    float influence = smoothstep(u_mouseRadius, 0.0, dist) * u_mouseStrength;
    p.xy += normalize(st - m + 0.0001) * influence * -0.12;
  }

  float warpAmt = u_turbulence * 0.35;
  vec3 warpP = p + vec3(fbm(p, 4)) * warpAmt;

  int octaves = 4;
  if (u_fluidity < 0.3) octaves = 2;
  else if (u_fluidity < 0.6) octaves = 4;
  else octaves = 7;

  float field = fbm(warpP, octaves);
  field = field * 0.5 + 0.5;

  float rim = abs(field - 0.5) * 2.0;
  rim = pow(rim, u_sharpness);
  float mask = smoothstep(0.5, 0.5 - u_rimWidth * 0.5, rim);

  float shimmer = snoise(vec3(st * 6.0 * u_scale, t * 1.8)) * 0.5 + 0.5;
  shimmer = pow(shimmer, 3.0) * u_shimmer;

  float t1 = smoothstep(0.0, 0.5, field);
  float t2 = smoothstep(0.5, 1.0, field);
  vec3 col = mix(u_color0, u_color1, t1);
  col = mix(col, u_color2, t2);

  col = mix(col, vec3(1.0), shimmer * mask * 0.35);

  float glowField = smoothstep(0.0, 0.55, field) * smoothstep(1.0, 0.45, field);
  vec3 glowColor = mix(u_color0, u_color2, field);
  col += glowColor * glowField * u_glow * 0.15 * (1.0 - mask);

  float alpha = mask * u_opacity + glowField * u_glow * 0.06 * u_opacity;
  alpha = clamp(alpha, 0.0, 1.0);

  gl_FragColor = vec4(col * alpha, alpha);
}
`;

function hexToRgb(hex) {
  const h = hex.replace("#", "");
  const r = parseInt(h.substring(0, 2), 16) / 255;
  const g = parseInt(h.substring(2, 4), 16) / 255;
  const b = parseInt(h.substring(4, 6), 16) / 255;
  return [r, g, b];
}

const FLOW_DIRS = {
  up:    [0,  1],
  down:  [0, -1],
  left:  [-1, 0],
  right: [ 1, 0],
  none:  [0,  0],
};

export default function Ferrofluid({
  colors           = ["#38bdf8", "#a855f7", "#f43f5e"],
  speed            = 0.5,
  scale            = 1,
  turbulence       = 1,
  fluidity         = 0.1,
  rimWidth         = 0.2,
  sharpness        = 3,
  shimmer          = 1,
  glow             = 2,
  flowDirection    = "down",
  opacity          = 1,
  mouseInteraction = true,
  mouseStrength    = 1,
  mouseRadius      = 0.3,
  style            = {},
  className        = "",
}) {
  const canvasRef  = useRef(null);
  const rafRef     = useRef(null);
  const mouseRef   = useRef([0.5, 0.5]);
  const startRef   = useRef(null);
  const propsRef   = useRef({});
  propsRef.current = {
    colors, speed, scale, turbulence, fluidity, rimWidth,
    sharpness, shimmer, glow, flowDirection, opacity,
    mouseInteraction, mouseStrength, mouseRadius,
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl", { alpha: true, premultipliedAlpha: false });
    if (!gl) { console.warn("WebGL not supported"); return; }

    function compileShader(type, src) {
      const s = gl.createShader(type);
      gl.shaderSource(s, src);
      gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
        console.error("Shader error:", gl.getShaderInfoLog(s));
        gl.deleteShader(s);
        return null;
      }
      return s;
    }

    const vert = compileShader(gl.VERTEX_SHADER, VERT_SRC);
    const frag = compileShader(gl.FRAGMENT_SHADER, FRAG_SRC);
    if (!vert || !frag) return;

    const prog = gl.createProgram();
    gl.attachShader(prog, vert);
    gl.attachShader(prog, frag);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      console.error("Link error:", gl.getProgramInfoLog(prog));
      return;
    }

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);
    const posLoc = gl.getAttribLocation(prog, "a_position");
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    const uni = {};
    [
      "u_resolution","u_time","u_mouse","u_mouseInteraction","u_mouseStrength","u_mouseRadius",
      "u_color0","u_color1","u_color2",
      "u_speed","u_scale","u_turbulence","u_fluidity","u_rimWidth","u_sharpness",
      "u_shimmer","u_glow","u_opacity","u_flowDir",
    ].forEach(name => { uni[name] = gl.getUniformLocation(prog, name); });

    gl.enable(gl.BLEND);
    gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA);

    function resize() {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      gl.viewport(0, 0, canvas.width, canvas.height);
    }
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    function onMouseMove(e) {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = [
        (e.clientX - rect.left) / rect.width,
        1.0 - (e.clientY - rect.top) / rect.height,
      ];
    }
    canvas.addEventListener("mousemove", onMouseMove);

    function render(ts) {
      if (!startRef.current) startRef.current = ts;
      const elapsed = (ts - startRef.current) / 1000;
      const p = propsRef.current;

      gl.useProgram(prog);
      gl.uniform2f(uni.u_resolution, canvas.width, canvas.height);
      gl.uniform1f(uni.u_time, elapsed);
      gl.uniform2fv(uni.u_mouse, mouseRef.current);
      gl.uniform1i(uni.u_mouseInteraction, p.mouseInteraction ? 1 : 0);
      gl.uniform1f(uni.u_mouseStrength, p.mouseStrength);
      gl.uniform1f(uni.u_mouseRadius, p.mouseRadius);
      gl.uniform1f(uni.u_speed, p.speed);
      gl.uniform1f(uni.u_scale, p.scale);
      gl.uniform1f(uni.u_turbulence, p.turbulence);
      gl.uniform1f(uni.u_fluidity, p.fluidity);
      gl.uniform1f(uni.u_rimWidth, p.rimWidth);
      gl.uniform1f(uni.u_sharpness, p.sharpness);
      gl.uniform1f(uni.u_shimmer, p.shimmer);
      gl.uniform1f(uni.u_glow, p.glow);
      gl.uniform1f(uni.u_opacity, p.opacity);

      const cols = p.colors || ["#38bdf8","#a855f7","#f43f5e"];
      gl.uniform3fv(uni.u_color0, hexToRgb(cols[0] || "#38bdf8"));
      gl.uniform3fv(uni.u_color1, hexToRgb(cols[1] || "#a855f7"));
      gl.uniform3fv(uni.u_color2, hexToRgb(cols[2] || "#f43f5e"));

      const fd = FLOW_DIRS[p.flowDirection] || FLOW_DIRS.down;
      gl.uniform2fv(uni.u_flowDir, fd);

      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

      rafRef.current = requestAnimationFrame(render);
    }
    rafRef.current = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(rafRef.current);
      canvas.removeEventListener("mousemove", onMouseMove);
      ro.disconnect();
      gl.deleteProgram(prog);
      gl.deleteBuffer(buf);
      gl.deleteShader(vert);
      gl.deleteShader(frag);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ display: "block", width: "100%", height: "100%", ...style }}
    />
  );
}
