import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

interface FloatingShapeProps {
  position: [number, number, number];
  color: string;
  shape?: "box" | "sphere" | "torus";
}

export const FloatingShape = ({ position, color, shape = "box" }: FloatingShapeProps) => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.3;
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.4;
    meshRef.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime() * 0.5) * 0.3;
  });

  return (
    <mesh ref={meshRef} position={position}>
      {shape === "sphere" && <sphereGeometry args={[0.5, 32, 32]} />}
      {shape === "box" && <boxGeometry args={[0.8, 0.8, 0.8]} />}
      {shape === "torus" && <torusGeometry args={[0.5, 0.2, 16, 100]} />}
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.5}
        metalness={0.8}
        roughness={0.2}
      />
    </mesh>
  );
};
