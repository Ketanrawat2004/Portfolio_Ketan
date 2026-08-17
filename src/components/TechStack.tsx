import * as THREE from "three";
import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { EffectComposer, N8AO } from "@react-three/postprocessing";
import {
  BallCollider,
  Physics,
  RigidBody,
  CylinderCollider,
  RapierRigidBody,
} from "@react-three/rapier";

function createTechTexture(
  name: string,
  symbol: string,
  bgColor: string,
  textColor: string,
  accentColor: string
): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext("2d")!;

  // Background
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, 512, 512);

  // Outer decorative accent ring
  ctx.beginPath();
  ctx.arc(256, 256, 222, 0, Math.PI * 2);
  ctx.strokeStyle = accentColor;
  ctx.lineWidth = 16;
  ctx.stroke();

  // Subtle radial gradient depth
  const grad = ctx.createRadialGradient(256, 256, 50, 256, 256, 225);
  grad.addColorStop(0, "rgba(255, 255, 255, 0.2)");
  grad.addColorStop(1, "rgba(0, 0, 0, 0.5)");
  ctx.fillStyle = grad;
  ctx.fill();

  // Symbol / Icon
  ctx.font = "bold 115px -apple-system, BlinkMacSystemFont, 'Geist', 'Segoe UI', Roboto, sans-serif";
  ctx.fillStyle = accentColor;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(symbol, 256, 205);

  // Label text
  ctx.font = "bold 48px -apple-system, BlinkMacSystemFont, 'Geist', 'Segoe UI', Roboto, sans-serif";
  ctx.fillStyle = textColor;
  ctx.textAlign = "center";
  ctx.fillText(name, 256, 335);

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

const techDefinitions = [
  { name: "Python", symbol: "Py", bgColor: "#0f172a", textColor: "#f8fafc", accentColor: "#38bdf8" },
  { name: "FastAPI", symbol: "⚡", bgColor: "#022c22", textColor: "#f8fafc", accentColor: "#10b981" },
  { name: "React 18", symbol: "⚛", bgColor: "#082f49", textColor: "#f8fafc", accentColor: "#38bdf8" },
  { name: "TypeScript", symbol: "TS", bgColor: "#172554", textColor: "#f8fafc", accentColor: "#60a5fa" },
  { name: "JavaScript", symbol: "JS", bgColor: "#422006", textColor: "#f8fafc", accentColor: "#facc15" },
  { name: "Node.js", symbol: "Node", bgColor: "#052e16", textColor: "#f8fafc", accentColor: "#4ade80" },
  { name: "Express", symbol: "ex", bgColor: "#18181b", textColor: "#f8fafc", accentColor: "#e4e4e7" },
  { name: "MongoDB", symbol: "Mongo", bgColor: "#064e3b", textColor: "#f8fafc", accentColor: "#34d399" },
  { name: "PostgreSQL", symbol: "SQL", bgColor: "#1e1b4b", textColor: "#f8fafc", accentColor: "#818cf8" },
  { name: "Redis", symbol: "⚡", bgColor: "#450a0a", textColor: "#f8fafc", accentColor: "#f87171" },
  { name: "Kafka", symbol: "Kafka", bgColor: "#18181b", textColor: "#f8fafc", accentColor: "#f1f5f9" },
  { name: "Docker", symbol: "🐳", bgColor: "#082f49", textColor: "#f8fafc", accentColor: "#38bdf8" },
  { name: "Supabase", symbol: "⚡", bgColor: "#064e3b", textColor: "#f8fafc", accentColor: "#34d399" },
  { name: "Tailwind", symbol: "CSS", bgColor: "#0f172a", textColor: "#f8fafc", accentColor: "#38bdf8" },
  { name: "Linux", symbol: "🐧", bgColor: "#1c1917", textColor: "#f8fafc", accentColor: "#fbbf24" },
  { name: "Git", symbol: "Git", bgColor: "#431407", textColor: "#f8fafc", accentColor: "#fb923c" },
  { name: "Razorpay", symbol: "₹", bgColor: "#1e1b4b", textColor: "#f8fafc", accentColor: "#818cf8" },
  { name: "AWS", symbol: "AWS", bgColor: "#292524", textColor: "#f8fafc", accentColor: "#f59e0b" },
];

const textureLoader = new THREE.TextureLoader();
const imageUrls = [
  "/images/react2.webp",
  "/images/typescript.webp",
  "/images/javascript.webp",
  "/images/node2.webp",
  "/images/express.webp",
  "/images/mongo.webp",
];
const fileTextures = imageUrls.map((url) => textureLoader.load(url));

const sphereGeometry = new THREE.SphereGeometry(1, 28, 28);

const spheres = [...Array(36)].map(() => ({
  scale: [0.75, 1, 0.85, 1.1, 0.95][Math.floor(Math.random() * 5)],
}));

type SphereProps = {
  vec?: THREE.Vector3;
  scale: number;
  r?: typeof THREE.MathUtils.randFloatSpread;
  material: THREE.MeshPhysicalMaterial;
  isActive: boolean;
};

function SphereGeo({
  vec = new THREE.Vector3(),
  scale,
  r = THREE.MathUtils.randFloatSpread,
  material,
  isActive,
}: SphereProps) {
  const api = useRef<RapierRigidBody | null>(null);

  useFrame((_state, delta) => {
    if (!isActive) return;
    delta = Math.min(0.1, delta);
    const impulse = vec
      .copy(api.current!.translation())
      .normalize()
      .multiply(
        new THREE.Vector3(
          -50 * delta * scale,
          -150 * delta * scale,
          -50 * delta * scale
        )
      );

    api.current?.applyImpulse(impulse, true);
  });

  return (
    <RigidBody
      linearDamping={0.75}
      angularDamping={0.15}
      friction={0.2}
      position={[r(20), r(20) - 25, r(20) - 10]}
      ref={api}
      colliders={false}
    >
      <BallCollider args={[scale]} />
      <CylinderCollider
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, 0, 1.2 * scale]}
        args={[0.15 * scale, 0.275 * scale]}
      />
      <mesh
        castShadow
        receiveShadow
        scale={scale}
        geometry={sphereGeometry}
        material={material}
        rotation={[0.3, 1, 1]}
      />
    </RigidBody>
  );
}

type PointerProps = {
  vec?: THREE.Vector3;
  isActive: boolean;
};

function Pointer({ vec = new THREE.Vector3(), isActive }: PointerProps) {
  const ref = useRef<RapierRigidBody>(null);

  useFrame(({ pointer, viewport }) => {
    if (!isActive) return;
    const targetVec = vec.lerp(
      new THREE.Vector3(
        (pointer.x * viewport.width) / 2,
        (pointer.y * viewport.height) / 2,
        0
      ),
      0.2
    );
    ref.current?.setNextKinematicTranslation(targetVec);
  });

  return (
    <RigidBody
      position={[100, 100, 100]}
      type="kinematicPosition"
      colliders={false}
      ref={ref}
    >
      <BallCollider args={[2]} />
    </RigidBody>
  );
}

const TechStack = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const threshold = document
        .getElementById("work")!
        .getBoundingClientRect().top;
      setIsActive(scrollY > threshold);
    };
    document.querySelectorAll(".header a").forEach((elem) => {
      const element = elem as HTMLAnchorElement;
      element.addEventListener("click", () => {
        const interval = setInterval(() => {
          handleScroll();
        }, 10);
        setTimeout(() => {
          clearInterval(interval);
        }, 1000);
      });
    });
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const materials = useMemo(() => {
    const dynamicTextures = techDefinitions.map((t) =>
      createTechTexture(t.name, t.symbol, t.bgColor, t.textColor, t.accentColor)
    );
    const allTextures = [...fileTextures, ...dynamicTextures];
    return allTextures.map(
      (texture) =>
        new THREE.MeshPhysicalMaterial({
          map: texture,
          emissive: "#ffffff",
          emissiveMap: texture,
          emissiveIntensity: 0.35,
          metalness: 0.45,
          roughness: 0.8,
          clearcoat: 0.15,
        })
    );
  }, []);

  return (
    <div className="techstack">
      <h2> My Techstack</h2>

      <Canvas
        dpr={[1, 1.5]}
        shadows={false}
        gl={{ alpha: true, stencil: false, depth: false, antialias: false, powerPreference: "high-performance" }}
        camera={{ position: [0, 0, 20], fov: 32.5, near: 1, far: 100 }}
        onCreated={(state) => (state.gl.toneMappingExposure = 1.5)}
        className="tech-canvas"
      >
        <ambientLight intensity={1} />
        <spotLight
          position={[20, 20, 25]}
          penumbra={1}
          angle={0.2}
          color="white"
          castShadow
          shadow-mapSize={[512, 512]}
        />
        <directionalLight position={[0, 5, -4]} intensity={2} />
        <Physics gravity={[0, 0, 0]}>
          <Pointer isActive={isActive} />
          {spheres.map((props, i) => (
            <SphereGeo
              key={i}
              {...props}
              material={materials[Math.floor(Math.random() * materials.length)]}
              isActive={isActive}
            />
          ))}
        </Physics>
        <Environment
          files="/models/char_enviorment.hdr"
          environmentIntensity={0.5}
          environmentRotation={[0, 4, 2]}
        />
        <EffectComposer enableNormalPass={false}>
          <N8AO color="#0f002c" aoRadius={2} intensity={1.15} />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

export default TechStack;
