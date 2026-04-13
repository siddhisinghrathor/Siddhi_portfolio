import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Sphere, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

const AnimatedObject = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  // Use a lower polygon count for better performance
  const geometryArgs = useMemo<[number, number, number]>(() => [1.5, 32, 32], []);

  useFrame((state) => {
    if (meshRef.current) {
      // Extremely slow, calm rotation (Stripe/Apple style)
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.05;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.08;
      
      // Subtle parallax effect based on mouse
      meshRef.current.position.x = THREE.MathUtils.lerp(
        meshRef.current.position.x,
        (state.mouse.x * 1) / 2,
        0.02
      );
      meshRef.current.position.y = THREE.MathUtils.lerp(
        meshRef.current.position.y,
        (state.mouse.y * 1) / 2,
        0.02
      );
    }
  });

  return (
    <Sphere ref={meshRef} args={geometryArgs} scale={1.1}>
      <MeshDistortMaterial
        color="#5B3EA8"
        attach="material"
        distort={0.25} // Reduced for a calmer blob
        speed={0.8} // Slower morphing
        roughness={0.4}
        metalness={0.6}
        clearcoat={0.5}
        clearcoatRoughness={0.2}
      />
    </Sphere>
  );
};

const Hero3D = () => {
  return (
    <div className="absolute inset-0 -z-10 w-full h-full opacity-60">
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.5]} // Limit device pixel ratio for performance
        gl={{ powerPreference: "high-performance", antialias: false, alpha: true }} // alpha: true is crucial here!
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={0.8} color="#FF7A00" />
        <directionalLight position={[-10, -10, -5]} intensity={0.8} color="#8B5CF6" />
        <AnimatedObject />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

export default Hero3D;
