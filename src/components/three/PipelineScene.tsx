import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function PipeNetwork() {
  const groupRef = useRef<THREE.Group>(null);

  const pipes = useMemo(() => {
    const lines: { points: THREE.Vector3[]; speed: number; color: string }[] = [];
    // Create multiple pipe-like curves
    for (let i = 0; i < 8; i++) {
      const startY = (i / 8 - 0.5) * 6;
      const points: THREE.Vector3[] = [];
      let x = -6;
      let y = startY;
      let z = -2 + Math.sin(i) * 0.5;
      points.push(new THREE.Vector3(x, y, z));
      while (x < 6) {
        x += 0.5 + Math.random() * 0.8;
        y += (Math.random() - 0.5) * 0.6;
        z += (Math.random() - 0.5) * 0.3;
        points.push(new THREE.Vector3(x, y, z));
      }
      lines.push({
        points,
        speed: 0.5 + Math.random() * 0.5,
        color: i % 2 === 0 ? "#08A6B6" : "#34D2C0",
      });
    }
    return lines;
  }, []);

  const geometries = useMemo(() => {
    return pipes.map((pipe) => {
      const curve = new THREE.CatmullRomCurve3(pipe.points, false, "catmullrom", 0.5);
      return new THREE.TubeGeometry(curve, 64, 0.015, 8, false);
    });
  }, [pipes]);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;
    groupRef.current.rotation.z = Math.sin(t * 0.1) * 0.05;
  });

  return (
    <group ref={groupRef}>
      {pipes.map((pipe, i) => (
        <mesh key={i} geometry={geometries[i]}>
          <meshBasicMaterial color={pipe.color} transparent opacity={0.5} />
        </mesh>
      ))}
      {/* Junction nodes */}
      {pipes.flatMap((pipe, i) =>
        pipe.points.filter((_, idx) => idx % 4 === 0).map((p, j) => (
          <mesh key={`${i}-${j}`} position={[p.x, p.y, p.z]}>
            <sphereGeometry args={[0.04, 12, 12]} />
            <meshBasicMaterial color={pipe.color} transparent opacity={0.7} />
          </mesh>
        ))
      )}
    </group>
  );
}

function FlowParticles() {
  const ref = useRef<THREE.Points>(null);
  const count = 200;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 6;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 2 - 2;
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    const posAttr = ref.current.geometry.attributes.position as THREE.BufferAttribute;
    const arr = posAttr.array as Float32Array;
    for (let i = 0; i < arr.length; i += 3) {
      arr[i] += 0.02;
      if (arr[i] > 6) arr[i] = -6;
      arr[i + 1] += Math.sin(t + arr[i]) * 0.003;
    }
    posAttr.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#34D2C0"
        transparent
        opacity={0.8}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function PipelineScene() {
  return (
    <div className="absolute inset-0">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={0.5} color="#34D2C0" />
        <PipeNetwork />
        <FlowParticles />
      </Canvas>
    </div>
  );
}