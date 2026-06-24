import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function OceanParticles() {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const count = 1200;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 8 + Math.random() * 14;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = (Math.random() - 0.5) * 8;
      arr[i * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta);
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    const posAttr = ref.current.geometry.attributes.position as THREE.BufferAttribute;
    const arr = posAttr.array as Float32Array;
    for (let i = 0; i < arr.length; i += 3) {
      arr[i + 1] += Math.sin(t + arr[i]) * 0.002;
    }
    posAttr.needsUpdate = true;
    ref.current.rotation.y = t * 0.02;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        color="#34D2C0"
        transparent
        opacity={0.7}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function EarthWireframe() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.05;
  });

  return (
    <group position={[0, -1, -6]}>
      <mesh ref={ref}>
        <sphereGeometry args={[3.2, 48, 48]} />
        <meshBasicMaterial
          color="#08A6B6"
          wireframe
          transparent
          opacity={0.12}
        />
      </mesh>
      {/* Atmosphere ring */}
      <mesh>
        <sphereGeometry args={[3.4, 48, 48]} />
        <meshBasicMaterial
          color="#34D2C0"
          wireframe
          transparent
          opacity={0.04}
        />
      </mesh>
    </group>
  );
}

function WaveLines() {
  const ref = useRef<THREE.Group>(null);
  const lines = useMemo(() => {
    return Array.from({ length: 5 }, (_, i) => ({
      y: -3 + i * 0.3,
      speed: 0.3 + i * 0.05,
      amp: 0.15 + i * 0.04,
    }));
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.children.forEach((line, i) => {
      const mesh = line as THREE.Mesh;
      const positions = mesh.geometry.attributes.position as THREE.BufferAttribute;
      const arr = positions.array as Float32Array;
      const t = state.clock.elapsedTime * lines[i].speed;
      for (let j = 0; j < arr.length; j += 3) {
        const x = arr[j];
        arr[j + 1] = Math.sin(x * 0.4 + t) * lines[i].amp + lines[i].y;
      }
      positions.needsUpdate = true;
    });
  });

  return (
    <group ref={ref} position={[0, 0, -2]}>
      {lines.map((_, i) => {
        const points = [];
        for (let x = -12; x <= 12; x += 0.3) {
          points.push(x, 0, -i * 0.4);
        }
        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute("position", new THREE.Float32BufferAttribute(points, 3));
        return (
          <mesh key={i} geometry={geometry}>
            <lineBasicMaterial color="#08A6B6" transparent opacity={0.25 - i * 0.04} />
          </mesh>
        );
      })}
    </group>
  );
}

function FloatingDots() {
  const group = useRef<THREE.Group>(null);
  const dots = useMemo(() => {
    return Array.from({ length: 18 }, () => ({
      x: (Math.random() - 0.5) * 16,
      y: (Math.random() - 0.5) * 8,
      z: (Math.random() - 0.5) * 6 - 2,
      speed: 0.1 + Math.random() * 0.3,
    }));
  }, []);

  useFrame((state) => {
    if (!group.current) return;
    group.current.children.forEach((dot, i) => {
      const d = dot as THREE.Mesh;
      const t = state.clock.elapsedTime;
      d.position.y = dots[i].y + Math.sin(t * dots[i].speed + i) * 0.4;
    });
  });

  return (
    <group ref={group}>
      {dots.map((d, i) => (
        <mesh key={i} position={[d.x, d.y, d.z]}>
          <sphereGeometry args={[0.025, 8, 8]} />
          <meshBasicMaterial color="#34D2C0" transparent opacity={0.8} />
        </mesh>
      ))}
    </group>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <color attach="background" args={["#071F4E"]} />
        <fog attach="fog" args={["#071F4E", 8, 24]} />
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={0.5} color="#34D2C0" />
        <OceanParticles />
        <EarthWireframe />
        <WaveLines />
        <FloatingDots />
      </Canvas>
    </div>
  );
}