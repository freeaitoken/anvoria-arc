import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";

interface CityDot {
  position: [number, number, number];
  city: string;
  country: string;
  status: "active" | "growing" | "planned";
}

const cities: CityDot[] = [
  { position: [1.8, 1.1, 1.3], city: "Mumbai", country: "India", status: "active" },
  { position: [1.7, 0.8, 1.5], city: "Bangalore", country: "India", status: "active" },
  { position: [1.9, 0.5, 1.2], city: "Chennai", country: "India", status: "growing" },
  { position: [1.5, 1.3, 1.7], city: "Delhi", country: "India", status: "active" },
  { position: [-1.2, 0.4, 1.9], city: "Cairo", country: "Egypt", status: "growing" },
  { position: [-0.4, 1.2, 1.95], city: "Lagos", country: "Nigeria", status: "planned" },
  { position: [-0.8, -0.8, 1.85], city: "Nairobi", country: "Kenya", status: "growing" },
  { position: [1.2, -1.1, 1.6], city: "Jakarta", country: "Indonesia", status: "active" },
  { position: [0.6, 1.7, 1.5], city: "Dhaka", country: "Bangladesh", status: "growing" },
  { position: [-1.8, 0.2, 1.4], city: "São Paulo", country: "Brazil", status: "planned" },
];

function Earth() {
  const ref = useRef<THREE.Mesh>(null);
  const dotsRef = useRef<THREE.Points>(null);

  // Build sphere points for ocean texture effect
  const positions = (() => {
    const arr: number[] = [];
    for (let i = 0; i < 400; i++) {
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = Math.random() * Math.PI * 2;
      const r = 2.02;
      arr.push(
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.sin(phi) * Math.sin(theta),
        r * Math.cos(phi)
      );
    }
    return new Float32Array(arr);
  })();

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.06;
    if (dotsRef.current) dotsRef.current.rotation.y = state.clock.elapsedTime * 0.06;
  });

  return (
    <group>
      {/* Earth wireframe */}
      <mesh ref={ref}>
        <sphereGeometry args={[2, 64, 64]} />
        <meshBasicMaterial color="#0A3E87" wireframe transparent opacity={0.25} />
      </mesh>
      {/* Inner solid */}
      <mesh>
        <sphereGeometry args={[1.95, 64, 64]} />
        <meshBasicMaterial color="#071F4E" />
      </mesh>
      {/* Ocean dots */}
      <points ref={dotsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.025}
          color="#08A6B6"
          transparent
          opacity={0.5}
          sizeAttenuation
          depthWrite={false}
        />
      </points>
    </group>
  );
}

function CityMarker({ data }: { data: CityDot }) {
  const [hovered, setHovered] = useState(false);
  const dotRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!dotRef.current) return;
    const t = state.clock.elapsedTime;
    if (ringRef.current) {
      const scale = 1 + Math.sin(t * 2) * 0.3;
      ringRef.current.scale.set(scale, scale, scale);
      const mat = ringRef.current.material as THREE.MeshBasicMaterial;
      mat.opacity = 0.5 - (scale - 1) * 2;
    }
  });

  const color = data.status === "active" ? "#34D2C0" : data.status === "growing" ? "#08A6B6" : "#0A3E87";

  return (
    <group position={data.position}>
      <mesh
        ref={dotRef}
        onPointerOver={(e) => { e.stopPropagation(); setHovered(true); document.body.style.cursor = "pointer"; }}
        onPointerOut={() => { setHovered(false); document.body.style.cursor = "auto"; }}
      >
        <sphereGeometry args={[0.04, 12, 12]} />
        <meshBasicMaterial color={color} />
      </mesh>
      <mesh ref={ringRef}>
        <ringGeometry args={[0.06, 0.08, 24]} />
        <meshBasicMaterial color={color} transparent opacity={0.5} side={THREE.DoubleSide} />
      </mesh>
      {hovered && (
        <Html
          position={[0, 0.2, 0]}
          center
          style={{ pointerEvents: "none", userSelect: "none" }}
        >
          <div className="bg-midnight/90 backdrop-blur-md border border-mint/30 rounded-lg px-3 py-2 whitespace-nowrap">
            <div className="font-heading text-xs font-medium text-soft-white">{data.city}</div>
            <div className="font-num text-[9px] tracking-[0.15em] uppercase text-mint/70 mt-0.5">
              {data.country} · {data.status}
            </div>
          </div>
        </Html>
      )}
    </group>
  );
}

function ConnectionPaths({ citiesRef }: { citiesRef: React.RefObject<THREE.Group | null> }) {
  const groupRef = useRef<THREE.Group>(null);
  const paths = [
    [0, 3],
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
    [0, 7],
  ];

  useFrame((state) => {
    if (groupRef.current && citiesRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.06;
    }
  });

  return (
    <group ref={groupRef}>
      {paths.map(([a, b], i) => {
        const start = new THREE.Vector3(...cities[a].position);
        const end = new THREE.Vector3(...cities[b].position);
        const mid = start.clone().add(end).multiplyScalar(0.5);
        mid.multiplyScalar(1.25);
        const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
        const points = curve.getPoints(40);
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        return (
          <line key={i}>
            <primitive object={geometry} attach="geometry" />
            <lineBasicMaterial color="#34D2C0" transparent opacity={0.25} />
          </line>
        );
      })}
    </group>
  );
}

export default function GlobalImpactScene() {
  const citiesGroupRef = useRef<THREE.Group>(null!);

  return (
    <div className="absolute inset-0">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[8, 5, 5]} intensity={0.6} color="#34D2C0" />
        <pointLight position={[-5, -3, 3]} intensity={0.4} color="#08A6B6" />
        <Earth />
        <group ref={citiesGroupRef}>
          {cities.map((c, i) => (
            <CityMarker key={i} data={c} />
          ))}
          <ConnectionPaths citiesRef={citiesGroupRef} />
        </group>
      </Canvas>
    </div>
  );
}