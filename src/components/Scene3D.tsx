import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { FloatingShape } from "./FloatingShape";

export const Scene3D = () => {
  return (
    <div className="absolute inset-0 -z-10 opacity-60">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#06b6d4" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#a855f7" />
        
        <FloatingShape position={[-2, 0, 0]} color="#06b6d4" shape="torus" />
        <FloatingShape position={[2, 1, -1]} color="#a855f7" shape="sphere" />
        <FloatingShape position={[0, -1, 1]} color="#ec4899" shape="box" />
        
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
};
