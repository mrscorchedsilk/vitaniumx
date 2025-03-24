
import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, Sphere, useTexture } from '@react-three/drei';
import { Suspense } from 'react';
import { Group, MathUtils } from 'three';

// Simple fallback
const FloatingPillsFallback = () => (
  <div className="bg-vitanium-50/50 rounded-full w-full h-full flex items-center justify-center">
    <div className="w-3/4 h-3/4 animate-pulse rounded-full bg-gradient-to-br from-vitanium-100/50 to-vitanium-200/50" />
  </div>
);

// A single pill/capsule
const Pill = ({ position, rotation, color, length = 1 }: { 
  position: [number, number, number], 
  rotation: [number, number, number], 
  color: string,
  length?: number 
}) => {
  const pillRef = useRef<Group>(null);
  
  useFrame((state) => {
    if (!pillRef.current) return;
    // Gentle floating movement
    pillRef.current.position.y += Math.sin(state.clock.getElapsedTime() * 0.5 + position[0]) * 0.002;
  });
  
  return (
    <group ref={pillRef} position={position} rotation={rotation}>
      {/* Capsule body - using a cylinder and two spheres */}
      <mesh>
        <cylinderGeometry args={[0.2, 0.2, length, 16]} />
        <meshPhysicalMaterial 
          color={color} 
          roughness={0.2} 
          clearcoat={0.8} 
          clearcoatRoughness={0.2} 
          metalness={0.1} 
        />
      </mesh>
      
      {/* Capsule ends */}
      <mesh position={[0, length/2, 0]}>
        <sphereGeometry args={[0.2, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshPhysicalMaterial 
          color={color} 
          roughness={0.2} 
          clearcoat={0.8} 
          clearcoatRoughness={0.2} 
          metalness={0.1} 
        />
      </mesh>
      
      <mesh position={[0, -length/2, 0]} rotation={[Math.PI, 0, 0]}>
        <sphereGeometry args={[0.2, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshPhysicalMaterial 
          color={color} 
          roughness={0.2} 
          clearcoat={0.8} 
          clearcoatRoughness={0.2} 
          metalness={0.1}  
        />
      </mesh>
    </group>
  );
};

// The group of floating pills
const PillsGroup = () => {
  const groupRef = useRef<Group>(null);
  
  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = MathUtils.lerp(
      groupRef.current.rotation.y,
      state.mouse.x * Math.PI * 0.1,
      0.05
    );
    groupRef.current.rotation.x = MathUtils.lerp(
      groupRef.current.rotation.x,
      state.mouse.y * Math.PI * 0.05,
      0.05
    );
  });
  
  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
        <Pill position={[1, 0, 0]} rotation={[0, 0, Math.PI / 2]} color="#22c55e" length={1.2} />
      </Float>
      
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.7}>
        <Pill position={[-1.5, 0.5, 0.5]} rotation={[Math.PI / 6, 0, Math.PI / 3]} color="#3b82f6" length={1} />
      </Float>
      
      <Float speed={2.5} rotationIntensity={0.4} floatIntensity={0.6}>
        <Pill position={[0.5, -1, -0.5]} rotation={[Math.PI / 4, Math.PI / 6, 0]} color="#f97316" length={0.8} />
      </Float>
      
      <Float speed={1.8} rotationIntensity={0.35} floatIntensity={0.8}>
        <Pill position={[0, 1.2, 0.8]} rotation={[Math.PI / 5, Math.PI / 4, Math.PI / 3]} color="#a855f7" length={0.9} />
      </Float>
      
      <Float speed={2.2} rotationIntensity={0.25} floatIntensity={0.4}>
        <Pill position={[-0.8, -0.8, 0.2]} rotation={[0, Math.PI / 3, Math.PI / 4]} color="#ec4899" length={1.1} />
      </Float>
    </group>
  );
};

interface FloatingPillsProps {
  className?: string;
  interactive?: boolean;
}

const FloatingPills = ({ className = "", interactive = true }: FloatingPillsProps) => {
  const [isClient, setIsClient] = useState(false);

  // Only render canvas on client side
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  if (!isClient) {
    return <FloatingPillsFallback />;
  }
  
  return (
    <div className={`relative w-full h-full ${className}`}>
      <Canvas camera={{ position: [0, 0, 7], fov: 50 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
          <PillsGroup />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default FloatingPills;
