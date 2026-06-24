import { useRef, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";

interface NodeData {
  label: string;
  sublabel: string;
  position: [number, number, number];
  color: string;
  isCenter?: boolean;
}

const nodes: NodeData[] = [
  { label: "Government", sublabel: "Tenders & Policy", position: [0, 2.6, 0], color: "#34D2C0" },
  { label: "Envoria Arc", sublabel: "International Oversight", position: [0, 0, 0], color: "#08A6B6", isCenter: true },
  { label: "Local Partners", sublabel: "Field Execution", position: [-2.3, -1.3, 0], color: "#34D2C0" },
  { label: "Communities", sublabel: "Long-term Impact", position: [2.3, -1.3, 0], color: "#34D2C0" },
];

function NodeMesh({ node, hovered, setHovered }: { node: NodeData; hovered: boolean; setHovered: (v: boolean) => void }) {
  const ref = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current || !ringRef.current) return;
    const t = state.clock.elapsedTime;
    const baseScale = node.isCenter ? 1 : 0.65;
    const targetScale = hovered ? baseScale * 1.3 : baseScale;
    ref.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    ringRef.current.rotation.z = t * 0.15;
    ringRef.current.rotation.x = Math.PI / 2;
  });

  return (
    <group position={node.position}>
      <mesh
        ref={ref}
        onPointerOver={(e) => { e.stopPropagation(); setHovered(true); document.body.style.cursor = "pointer"; }}
        onPointerOut={() => { setHovered(false); document.body.style.cursor = "auto"; }}
      >
        <sphereGeometry args={[node.isCenter ? 0.45 : 0.35, 32, 32]} />
        <meshStandardMaterial
          color={node.color}
          emissive={node.color}
          emissiveIntensity={hovered ? 1.2 : 0.4}
          roughness={0.3}
        />
      </mesh>
      {/* Outer ring */}
      <mesh ref={ringRef}>
        <torusGeometry args={[node.isCenter ? 0.7 : 0.55, 0.008, 16, 64]} />
        <meshBasicMaterial color={node.color} transparent opacity={hovered ? 0.8 : 0.3} />
      </mesh>
      {/* Label */}
      <Html
        position={[0, node.isCenter ? -0.9 : -0.7, 0]}
        center
        style={{ pointerEvents: "none", userSelect: "none" }}
        distanceFactor={8}
      >
        <div className={`text-center transition-all duration-300 ${hovered ? "opacity-100" : "opacity-80"}`}>
          <div className={`font-heading font-medium tracking-tight whitespace-nowrap ${node.isCenter ? "text-soft-white text-base" : "text-soft-white/90 text-xs"}`}>
            {node.label}
          </div>
          <div className="font-num text-[9px] tracking-[0.15em] uppercase text-mint/70 mt-1 whitespace-nowrap">
            {node.sublabel}
          </div>
        </div>
      </Html>
    </group>
  );
}

function Connection({ from, to, active }: { from: [number, number, number]; to: [number, number, number]; active: boolean }) {
  const flowRef = useRef<THREE.Mesh>(null);

  const geometry = useMemo(() => {
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(...from),
      new THREE.Vector3((from[0] + to[0]) / 2, (from[1] + to[1]) / 2 + 0.3, 0.5),
      new THREE.Vector3(...to),
    ]);
    return new THREE.BufferGeometry().setFromPoints(curve.getPoints(50));
  }, [from, to]);

  useFrame((state) => {
    if (!flowRef.current) return;
    const t = (state.clock.elapsedTime * 0.3) % 1;
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(...from),
      new THREE.Vector3((from[0] + to[0]) / 2, (from[1] + to[1]) / 2 + 0.3, 0.5),
      new THREE.Vector3(...to),
    ]);
    const point = curve.getPoint(t);
    flowRef.current.position.copy(point);
  });

  return (
    <group>
      <line>
        <primitive object={geometry} attach="geometry" />
        <lineBasicMaterial color={active ? "#34D2C0" : "#0A3E87"} transparent opacity={active ? 0.8 : 0.5} />
      </line>
      {/* Flowing dot */}
      <mesh ref={flowRef}>
        <sphereGeometry args={[0.05, 12, 12]} />
        <meshBasicMaterial color="#34D2C0" transparent opacity={active ? 1 : 0.3} />
      </mesh>
    </group>
  );
}

export default function OperatingModelScene() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const center = nodes[1];
  const connections = [
    { from: nodes[0].position, to: center.position, active: hoveredIndex === 0 || hoveredIndex === 1 },
    { from: nodes[2].position, to: center.position, active: hoveredIndex === 2 || hoveredIndex === 1 },
    { from: nodes[3].position, to: center.position, active: hoveredIndex === 3 || hoveredIndex === 1 },
    { from: nodes[0].position, to: nodes[2].position, active: false },
    { from: nodes[0].position, to: nodes[3].position, active: false },
    { from: nodes[2].position, to: nodes[3].position, active: false },
  ];

  return (
    <div className="absolute inset-0">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} intensity={0.6} color="#34D2C0" />
        <pointLight position={[-5, -3, 3]} intensity={0.3} color="#08A6B6" />
        {connections.map((c, i) => (
          <Connection key={i} from={c.from as any} to={c.to as any} active={c.active} />
        ))}
        {nodes.map((node, i) => (
          <NodeMesh key={i} node={node} hovered={hoveredIndex === i} setHovered={(v) => setHoveredIndex(v ? i : null)} />
        ))}
      </Canvas>
    </div>
  );
}