"use client";

import { useRef, useEffect } from "react";
import {
  Clock,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
  SRGBColorSpace,
  MathUtils,
  Vector2,
  Vector3,
  MeshPhysicalMaterial,
  ShaderChunk,
  Color,
  Object3D,
  InstancedMesh,
  PMREMGenerator,
  SphereGeometry,
  AmbientLight,
  PointLight,
  ACESFilmicToneMapping,
  Raycaster,
  Plane,
} from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";

/* ─── Pointer interaction state ─────────────────────────────────────────────── */
const pointerMap = new Map<Element, PointerHandler>();
const pointerPos = new Vector2();
let listenersAttached = false;

interface PointerHandler {
  position: Vector2;
  nPosition: Vector2;
  hover: boolean;
  touching: boolean;
  onEnter: () => void;
  onMove: (h: PointerHandler) => void;
  onClick: (h: PointerHandler) => void;
  onLeave: () => void;
  dispose?: () => void;
}

function registerPointer(domElement: HTMLCanvasElement, handler: PointerHandler) {
  if (!pointerMap.has(domElement)) {
    pointerMap.set(domElement, handler);
    if (!listenersAttached) {
      document.body.addEventListener("pointermove", onPointerMove);
      document.body.addEventListener("pointerleave", onPointerLeave);
      document.body.addEventListener("click", onClick);
      document.body.addEventListener("touchstart", onTouchStart, { passive: false });
      document.body.addEventListener("touchmove", onTouchMove, { passive: false });
      document.body.addEventListener("touchend", onTouchEnd);
      document.body.addEventListener("touchcancel", onTouchEnd);
      listenersAttached = true;
    }
  }
  handler.dispose = () => {
    pointerMap.delete(domElement);
    if (pointerMap.size === 0) {
      document.body.removeEventListener("pointermove", onPointerMove);
      document.body.removeEventListener("pointerleave", onPointerLeave);
      document.body.removeEventListener("click", onClick);
      document.body.removeEventListener("touchstart", onTouchStart);
      document.body.removeEventListener("touchmove", onTouchMove);
      document.body.removeEventListener("touchend", onTouchEnd);
      document.body.removeEventListener("touchcancel", onTouchEnd);
      listenersAttached = false;
    }
  };
  return handler;
}

function isInRect(rect: DOMRect) {
  const { x, y } = pointerPos;
  const { left, top, width, height } = rect;
  return x >= left && x <= left + width && y >= top && y <= top + height;
}

function updateHandlerPos(h: PointerHandler, rect: DOMRect) {
  h.position.x = pointerPos.x - rect.left;
  h.position.y = pointerPos.y - rect.top;
  h.nPosition.x = (h.position.x / rect.width) * 2 - 1;
  h.nPosition.y = (-h.position.y / rect.height) * 2 + 1;
}

function processInteraction() {
  for (const [elem, h] of pointerMap) {
    const rect = elem.getBoundingClientRect();
    if (isInRect(rect)) {
      updateHandlerPos(h, rect);
      if (!h.hover) {
        h.hover = true;
        h.onEnter();
      }
      h.onMove(h);
    } else if (h.hover && !h.touching) {
      h.hover = false;
      h.onLeave();
    }
  }
}

function onPointerMove(e: PointerEvent) {
  pointerPos.x = e.clientX;
  pointerPos.y = e.clientY;
  processInteraction();
}

function onClick(e: MouseEvent) {
  pointerPos.x = e.clientX;
  pointerPos.y = e.clientY;
  for (const [elem, h] of pointerMap) {
    const rect = elem.getBoundingClientRect();
    updateHandlerPos(h, rect);
    if (isInRect(rect)) h.onClick(h);
  }
}

function onPointerLeave() {
  for (const h of pointerMap.values()) {
    if (h.hover) {
      h.hover = false;
      h.onLeave();
    }
  }
}

function onTouchStart(e: TouchEvent) {
  if (e.touches.length > 0) {
    e.preventDefault();
    pointerPos.x = e.touches[0].clientX;
    pointerPos.y = e.touches[0].clientY;
    for (const [elem, h] of pointerMap) {
      const rect = elem.getBoundingClientRect();
      if (isInRect(rect)) {
        h.touching = true;
        updateHandlerPos(h, rect);
        if (!h.hover) {
          h.hover = true;
          h.onEnter();
        }
        h.onMove(h);
      }
    }
  }
}

function onTouchMove(e: TouchEvent) {
  if (e.touches.length > 0) {
    e.preventDefault();
    pointerPos.x = e.touches[0].clientX;
    pointerPos.y = e.touches[0].clientY;
    for (const [elem, h] of pointerMap) {
      const rect = elem.getBoundingClientRect();
      updateHandlerPos(h, rect);
      if (isInRect(rect)) {
        if (!h.hover) {
          h.hover = true;
          h.touching = true;
          h.onEnter();
        }
        h.onMove(h);
      } else if (h.hover && h.touching) {
        h.onMove(h);
      }
    }
  }
}

function onTouchEnd() {
  for (const h of pointerMap.values()) {
    if (h.touching) {
      h.touching = false;
      if (h.hover) {
        h.hover = false;
        h.onLeave();
      }
    }
  }
}

/* ─── Physics ───────────────────────────────────────────────────────────────── */
const _I = new Vector3();
const _B = new Vector3();
const _O = new Vector3();
const _N = new Vector3();
const _D = new Vector3();
const _j = new Vector3();
const _H = new Vector3();
const _T = new Vector3();

interface PhysicsConfig {
  count: number;
  minSize: number;
  maxSize: number;
  size0: number;
  gravity: number;
  friction: number;
  wallBounce: number;
  maxVelocity: number;
  maxX: number;
  maxY: number;
  maxZ: number;
  controlSphere0: boolean;
}

class Physics {
  config: PhysicsConfig;
  positionData: Float32Array;
  velocityData: Float32Array;
  sizeData: Float32Array;
  center: Vector3;

  constructor(config: PhysicsConfig) {
    this.config = config;
    this.positionData = new Float32Array(3 * config.count).fill(0);
    this.velocityData = new Float32Array(3 * config.count).fill(0);
    this.sizeData = new Float32Array(config.count).fill(1);
    this.center = new Vector3();
    this.init();
    this.setSizes();
  }

  init() {
    const { config: c, positionData: p } = this;
    this.center.toArray(p, 0);
    for (let i = 1; i < c.count; i++) {
      const b = 3 * i;
      p[b] = MathUtils.randFloatSpread(2 * c.maxX);
      p[b + 1] = MathUtils.randFloatSpread(2 * c.maxY);
      p[b + 2] = MathUtils.randFloatSpread(2 * c.maxZ);
    }
  }

  setSizes() {
    const { config: c, sizeData: s } = this;
    s[0] = c.size0;
    for (let i = 1; i < c.count; i++) {
      s[i] = MathUtils.randFloat(c.minSize, c.maxSize);
    }
  }

  update(e: { delta: number }) {
    const { config: c, center, positionData: p, sizeData: s, velocityData: v } = this;
    let start = 0;

    if (c.controlSphere0) {
      start = 1;
      _I.fromArray(p, 0).lerp(center, 0.1).toArray(p, 0);
      new Vector3().toArray(v, 0);
    }

    for (let i = start; i < c.count; i++) {
      const b = 3 * i;
      _I.fromArray(p, b);
      _B.fromArray(v, b);
      _B.y -= e.delta * c.gravity * s[i];
      _B.multiplyScalar(c.friction).clampLength(0, c.maxVelocity);
      _I.add(_B);
      _I.toArray(p, b);
      _B.toArray(v, b);
    }

    for (let i = start; i < c.count; i++) {
      const b = 3 * i;
      _I.fromArray(p, b);
      _B.fromArray(v, b);
      const ri = s[i];

      for (let j = i + 1; j < c.count; j++) {
        const ob = 3 * j;
        _O.fromArray(p, ob);
        _N.fromArray(v, ob);
        const rj = s[j];
        _D.copy(_O).sub(_I);
        const dist = _D.length();
        const sum = ri + rj;
        if (dist < sum) {
          const over = sum - dist;
          _j.copy(_D).normalize().multiplyScalar(0.5 * over);
          _H.copy(_j).multiplyScalar(Math.max(_B.length(), 1));
          _T.copy(_j).multiplyScalar(Math.max(_N.length(), 1));
          _I.sub(_j);
          _B.sub(_H);
          _I.toArray(p, b);
          _B.toArray(v, b);
          _O.add(_j);
          _N.add(_T);
          _O.toArray(p, ob);
          _N.toArray(v, ob);
        }
      }

      if (c.controlSphere0) {
        _D.copy(center).sub(_I);
        const dist = _D.length();
        const sum0 = ri + s[0];
        if (dist < sum0) {
          const diff = sum0 - dist;
          _j.copy(_D.normalize()).multiplyScalar(diff);
          _H.copy(_j).multiplyScalar(Math.max(_B.length(), 2));
          _I.sub(_j);
          _B.sub(_H);
        }
      }

      if (Math.abs(_I.x) + ri > c.maxX) {
        _I.x = Math.sign(_I.x) * (c.maxX - ri);
        _B.x = -_B.x * c.wallBounce;
      }
      if (c.gravity === 0) {
        if (Math.abs(_I.y) + ri > c.maxY) {
          _I.y = Math.sign(_I.y) * (c.maxY - ri);
          _B.y = -_B.y * c.wallBounce;
        }
      } else if (_I.y - ri < -c.maxY) {
        _I.y = -c.maxY + ri;
        _B.y = -_B.y * c.wallBounce;
      }
      const maxBz = Math.max(c.maxZ, c.maxSize);
      if (Math.abs(_I.z) + ri > maxBz) {
        _I.z = Math.sign(_I.z) * (maxBz - ri);
        _B.z = -_B.z * c.wallBounce;
      }

      _I.toArray(p, b);
      _B.toArray(v, b);
    }
  }
}

/* ─── Ball material (subsurface scattering) ─────────────────────────────────── */
class BallMaterial extends MeshPhysicalMaterial {
  declare uniforms: Record<string, { value: number }>;

  constructor(params: ConstructorParameters<typeof MeshPhysicalMaterial>[0]) {
    super(params);
    (this as unknown as { defines: Record<string, string> }).defines = (this as unknown as { defines: Record<string, string> }).defines ?? {};
    (this as unknown as { defines: Record<string, string> }).defines["USE_UV"] = "";
    this.uniforms = {
      thicknessDistortion: { value: 0.1 },
      thicknessAmbient: { value: 0 },
      thicknessAttenuation: { value: 0.1 },
      thicknessPower: { value: 2 },
      thicknessScale: { value: 10 },
    };

    this.onBeforeCompile = (shader) => {
      Object.assign(shader.uniforms, this.uniforms);
      shader.fragmentShader =
        `uniform float thicknessPower; uniform float thicknessScale; uniform float thicknessDistortion; uniform float thicknessAmbient; uniform float thicknessAttenuation; ` +
        shader.fragmentShader;
      shader.fragmentShader = shader.fragmentShader.replace(
        "void main() {",
        `void RE_Direct_Scattering(const in IncidentLight directLight, const in vec2 uv, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, inout ReflectedLight reflectedLight) {
          vec3 scatteringHalf = normalize(directLight.direction + (geometryNormal * thicknessDistortion));
          float scatteringDot = pow(clamp(dot(geometryViewDir, -scatteringHalf), 0.0, 1.0), thicknessPower) * thicknessScale;
          #ifdef USE_COLOR
            vec3 scatteringIllu = (scatteringDot + thicknessAmbient) * vColor;
          #else
            vec3 scatteringIllu = (scatteringDot + thicknessAmbient) * diffuse;
          #endif
          reflectedLight.directDiffuse += scatteringIllu * thicknessAttenuation * directLight.color;
        }
        void main() {`
      );
      const replaced = ShaderChunk.lights_fragment_begin.replaceAll(
        "RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );",
        `RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
        RE_Direct_Scattering(directLight, vUv, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, reflectedLight);`
      );
      shader.fragmentShader = shader.fragmentShader.replace("#include <lights_fragment_begin>", replaced);
    };
  }
}

/* ─── Default config ────────────────────────────────────────────────────────── */
const DEFAULT_CONFIG = {
  count: 200,
  colors: [0x9b8bc6, 0x3b82f6, 0xffffff] as number[],
  ambientColor: 0xffffff,
  ambientIntensity: 1,
  lightIntensity: 200,
  materialParams: {
    metalness: 0.5,
    roughness: 0.5,
    clearcoat: 1,
    clearcoatRoughness: 0.15,
  },
  minSize: 0.5,
  maxSize: 1,
  size0: 1,
  gravity: 0.5,
  friction: 0.9975,
  wallBounce: 0.95,
  maxVelocity: 0.15,
  maxX: 5,
  maxY: 5,
  maxZ: 2,
  controlSphere0: false,
  followCursor: true,
};

/* ─── Three.js app loop ─────────────────────────────────────────────────────── */
interface ThreeAppOptions {
  canvas: HTMLCanvasElement;
  size?: "parent" | { width: number; height: number };
  id?: string;
  rendererOptions?: Partial<{ antialias: boolean; alpha: boolean }>;
}

type ThreeAppSize = {
  width: number;
  height: number;
  wWidth: number;
  wHeight: number;
  ratio: number;
  pixelRatio: number;
};

type ThreeAppTimeState = { elapsed: number; delta: number };

class ThreeApp {
  canvas: HTMLCanvasElement;
  camera: PerspectiveCamera;
  scene: Scene;
  renderer: WebGLRenderer;
  size: ThreeAppSize = {
    width: 0,
    height: 0,
    wWidth: 0,
    wHeight: 0,
    ratio: 0,
    pixelRatio: 0,
  };
  cameraFov: number;
  cameraMaxAspect?: number;
  private resizeObs: ResizeObserver | null = null;
  private intObs: IntersectionObserver | null = null;
  private rafId: number = 0;
  private running = false;
  private visible = false;
  private resizeTimeout: ReturnType<typeof setTimeout> | null = null;
  private clock = new Clock();
  private timeState: ThreeAppTimeState = { elapsed: 0, delta: 0 };
  onBeforeRender: (t: ThreeAppTimeState) => void = () => {};
  onAfterRender: (t: ThreeAppTimeState) => void = () => {};
  onAfterResize: (size: ThreeAppSize) => void = () => {};

  constructor(options: ThreeAppOptions) {
    const { canvas } = options;
    this.canvas = canvas;
    this.canvas.style.display = "block";

    this.camera = new PerspectiveCamera(45, 1, 0.1, 100);
    this.cameraFov = this.camera.fov;

    this.scene = new Scene();

    this.renderer = new WebGLRenderer({
      canvas,
      powerPreference: "high-performance",
      antialias: true,
      alpha: true,
      ...options.rendererOptions,
    });
    this.renderer.outputColorSpace = SRGBColorSpace;

    this.resize();
    this.setupObservers();
  }

  private setupObservers() {
    const parent = this.canvas.parentElement;
    if (parent) {
      this.resizeObs = new ResizeObserver(() => {
        if (this.resizeTimeout) clearTimeout(this.resizeTimeout);
        this.resizeTimeout = setTimeout(() => this.resize(), 100);
      });
      this.resizeObs.observe(parent);
    }
    this.intObs = new IntersectionObserver(([e]) => {
      this.visible = e?.isIntersecting ?? false;
      if (this.visible) this.start();
      else this.stop();
    }, { threshold: 0 });
    this.intObs.observe(this.canvas);
  }

  resize() {
    const parent = this.canvas.parentElement;
    const w = parent?.offsetWidth ?? window.innerWidth;
    const h = parent?.offsetHeight ?? window.innerHeight;
    // #region agent log
    if (typeof fetch !== 'undefined') fetch('http://127.0.0.1:7602/ingest/39ee1650-fa20-4c38-ad63-9025a4005506',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'ce91c5'},body:JSON.stringify({sessionId:'ce91c5',location:'BallPit.tsx:resize',message:'BallPit resize',data:{parentOffsetW:parent?.offsetWidth,parentOffsetH:parent?.offsetHeight,w,h,visible:this.visible},hypothesisId:'H1 H3',timestamp:Date.now()})}).catch(()=>{});
    // #endregion
    this.size.width = w;
    this.size.height = h;
    this.size.ratio = w / h;
    this.camera.aspect = w / h;
    if (this.cameraMaxAspect && this.camera.aspect > this.cameraMaxAspect) {
      const t = Math.tan(MathUtils.degToRad(this.cameraFov / 2)) / (this.camera.aspect / this.cameraMaxAspect);
      this.camera.fov = 2 * MathUtils.radToDeg(Math.atan(t));
    } else {
      this.camera.fov = this.cameraFov;
    }
    this.camera.updateProjectionMatrix();
    const fovRad = (this.camera.fov * Math.PI) / 180;
    this.size.wHeight = 2 * Math.tan(fovRad / 2) * this.camera.position.length();
    this.size.wWidth = this.size.wHeight * this.camera.aspect;

    this.renderer.setSize(w, h);
    const pr = Math.min(window.devicePixelRatio, 2);
    this.renderer.setPixelRatio(pr);
    this.size.pixelRatio = pr;

    this.onAfterResize(this.size);
  }

  private start() {
    if (this.running) return;
    this.running = true;
    this.clock.start();
    const animate = () => {
      this.rafId = requestAnimationFrame(animate);
      this.timeState.delta = this.clock.getDelta();
      this.timeState.elapsed += this.timeState.delta;
      this.onBeforeRender(this.timeState);
      this.renderer.render(this.scene, this.camera);
      this.onAfterRender(this.timeState);
    };
    animate();
  }

  private stop() {
    if (this.running) {
      cancelAnimationFrame(this.rafId);
      this.running = false;
      this.clock.stop();
    }
  }

  dispose() {
    this.stop();
    this.resizeObs?.disconnect();
    this.intObs?.disconnect();
    if (this.resizeTimeout) clearTimeout(this.resizeTimeout);
    this.scene.clear();
    this.renderer.dispose();
  }
}

/* ─── Color gradient helper ─────────────────────────────────────────────────── */
function createColorGradient(hexColors: number[]) {
  const colors = hexColors.map((h) => new Color(h));
  return {
    getColorAt: (ratio: number, out = new Color()) => {
      const scaled = Math.max(0, Math.min(1, ratio)) * (hexColors.length - 1);
      const idx = Math.floor(scaled);
      const start = colors[idx];
      if (idx >= hexColors.length - 1) return start.clone();
      const alpha = scaled - idx;
      const end = colors[idx + 1];
      out.r = start.r + alpha * (end.r - start.r);
      out.g = start.g + alpha * (end.g - start.g);
      out.b = start.b + alpha * (end.b - start.b);
      return out;
    },
  };
}

/* ─── Instanced spheres ─────────────────────────────────────────────────────── */
const tempObject = new Object3D();

class SpheresMesh extends InstancedMesh {
  config: typeof DEFAULT_CONFIG & { colors: number[] };
  physics: Physics;
  ambientLight!: AmbientLight;
  light!: PointLight;

  constructor(renderer: WebGLRenderer, config: Partial<typeof DEFAULT_CONFIG> & { colors?: number[] }) {
    const cfg = { ...DEFAULT_CONFIG, ...config };
    const scene = new RoomEnvironment();
    const pmrem = new PMREMGenerator(renderer);
    const envMap = pmrem.fromScene(scene, 0.04).texture;
    pmrem.dispose();

    const geo = new SphereGeometry(1, 36, 36);
    const mat = new BallMaterial({
      envMap,
      ...cfg.materialParams,
    });
    (mat as unknown as { envMapRotation: { x: number } }).envMapRotation.x = -Math.PI / 2;

    super(geo, mat, cfg.count);
    this.config = cfg as typeof DEFAULT_CONFIG & { colors: number[] };
    this.physics = new Physics({
      count: cfg.count,
      minSize: cfg.minSize,
      maxSize: cfg.maxSize,
      size0: cfg.size0,
      gravity: cfg.gravity,
      friction: cfg.friction,
      wallBounce: cfg.wallBounce,
      maxVelocity: cfg.maxVelocity,
      maxX: cfg.maxX,
      maxY: cfg.maxY,
      maxZ: cfg.maxZ,
      controlSphere0: cfg.controlSphere0,
    });

    this.ambientLight = new AmbientLight(cfg.ambientColor, cfg.ambientIntensity);
    this.add(this.ambientLight);
    this.light = new PointLight(cfg.colors[0] ?? 0xffffff, cfg.lightIntensity);
    this.add(this.light);

    this.setColors(cfg.colors);
  }

  setColors(hexColors: number[]) {
    if (hexColors.length > 1) {
      const grad = createColorGradient(hexColors);
      const outColor = new Color();
      for (let i = 0; i < this.count; i++) {
        grad.getColorAt(i / this.count, outColor);
        this.setColorAt(i, outColor);
        if (i === 0) {
          this.light.color.copy(outColor);
        }
      }
      this.instanceColor!.needsUpdate = true;
    }
  }

  update(e: { delta: number }) {
    this.physics.update(e);
    for (let i = 0; i < this.count; i++) {
      tempObject.position.fromArray(this.physics.positionData, 3 * i);
      if (i === 0 && !this.config.followCursor) {
        tempObject.scale.setScalar(0);
      } else {
        tempObject.scale.setScalar(this.physics.sizeData[i]);
      }
      tempObject.updateMatrix();
      this.setMatrixAt(i, tempObject.matrix);
      if (i === 0) this.light.position.copy(tempObject.position);
    }
    this.instanceMatrix.needsUpdate = true;
  }
}

/* ─── createBallpit ─────────────────────────────────────────────────────────── */
function createBallpit(
  canvas: HTMLCanvasElement,
  config: Partial<typeof DEFAULT_CONFIG> & { colors?: number[] } = {}
) {
  const app = new ThreeApp({
    canvas,
    size: "parent",
    rendererOptions: { antialias: true, alpha: true },
  });

  app.renderer.setClearColor(0x000000, 0);
  app.renderer.toneMapping = ACESFilmicToneMapping;
  app.camera.position.set(0, 0, 20);
  app.camera.lookAt(0, 0, 0);
  app.cameraMaxAspect = 1.5;
  app.resize();

  let spheres: SpheresMesh;
  const raycaster = new Raycaster();
  const plane = new Plane(new Vector3(0, 0, 1), 0);
  const intersect = new Vector3();
  const paused = false;

  canvas.style.touchAction = "none";
  canvas.style.userSelect = "none";
  (canvas.style as unknown as Record<string, string>).webkitUserSelect = "none";

  function init() {
    if (spheres) {
      app.scene.remove(spheres);
    }
    spheres = new SpheresMesh(app.renderer, config);
    app.scene.add(spheres);
  }

  init();

  // #region agent log
  if (typeof fetch !== 'undefined') fetch('http://127.0.0.1:7602/ingest/39ee1650-fa20-4c38-ad63-9025a4005506',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'ce91c5'},body:JSON.stringify({sessionId:'ce91c5',location:'BallPit.tsx:createBallpit',message:'createBallpit initialized',data:{canvasW:canvas.width,canvasH:canvas.height,parentW:canvas.parentElement?.offsetWidth,parentH:canvas.parentElement?.offsetHeight},hypothesisId:'H1 H3 H5',timestamp:Date.now()})}).catch(()=>{});
  // #endregion

  const pointerHandler = registerPointer(canvas, {
    position: new Vector2(),
    nPosition: new Vector2(),
    hover: false,
    touching: false,
    onEnter: () => {},
    onMove: (h) => {
      raycaster.setFromCamera(h.nPosition, app.camera);
      app.camera.getWorldDirection(plane.normal);
      raycaster.ray.intersectPlane(plane, intersect);
      spheres.physics.center.copy(intersect);
      spheres.config.controlSphere0 = true;
    },
    onLeave: () => {
      spheres.config.controlSphere0 = false;
    },
    onClick: () => {},
  });

  app.onBeforeRender = (e) => {
    if (!paused) spheres.update(e);
  };

  app.onAfterResize = (size) => {
    spheres.physics.config.maxX = size.wWidth / 2;
    spheres.physics.config.maxY = size.wHeight / 2;
  };

  return {
    three: app,
    get spheres() {
      return spheres;
    },
    dispose: () => {
      pointerHandler.dispose?.();
      app.dispose();
    },
  };
}

/* ─── React component ───────────────────────────────────────────────────────── */
export default function BallPit({
  className = "",
  followCursor = true,
  colors = [0x9b8bc6, 0x3b82f6, 0xffffff],
  ...props
}: {
  className?: string;
  followCursor?: boolean;
  colors?: number[];
} & Partial<typeof DEFAULT_CONFIG>) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const instanceRef = useRef<ReturnType<typeof createBallpit> | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    instanceRef.current = createBallpit(canvas, {
      followCursor,
      colors,
      ...props,
    });

    return () => {
      instanceRef.current?.dispose();
      instanceRef.current = null;
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ display: "block", width: "100%", height: "100%", minHeight: 360 }}
      aria-hidden
    />
  );
}
