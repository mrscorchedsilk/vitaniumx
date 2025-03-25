
import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, Text } from '@react-three/drei';
import { Suspense } from 'react';
import { Group, MathUtils } from 'three';
import { useIsMobile } from '@/hooks/use-mobile';

// Simple fallback component for non-WebGL environments or loading state
const VitaminSpheresFallback = () => (
  <div className="bg-white/30 backdrop-blur-sm rounded-lg w-full h-full flex items-center justify-center">
    <div className="text-vitanium-600 font-medium">Loading 3D Visualization...</div>
    <div className="w-3/4 h-3/4 animate-pulse rounded-full bg-gradient-to-br from-vitanium-100/50 to-vitanium-200/50" />
  </div>
);

// Nutrient color mappings based on NutrientIcon colors
const nutrientColors = {
  'vitamin-a': '#22c55e', // Green
  'vitamin-b': '#3b82f6', // Blue
  'vitamin-c': '#f97316', // Orange
  'vitamin-d': '#f59e0b', // Amber
  'iron': '#06b6d4',      // Cyan
  'zinc': '#14b8a6',      // Teal
  'iodine': '#d946ef',    // Fuchsia
  'calcium': '#ec4899',   // Pink
  'folic-acid': '#a855f7', // Purple
  'protein': '#6366f1'    // Indigo
};

type NutrientType = keyof typeof nutrientColors;

// Individual Vitamin/Nutrient Sphere
const VitaminSphere = ({ 
  position, 
  nutrient, 
  scale = 1,
  showLabel = true
}: { 
  position: [number, number, number];
  nutrient: NutrientType;
  scale?: number;
  showLabel?: boolean;
}) => {
  const sphereRef = useRef<Group>(null);
  const color = nutrientColors[nutrient];
  
  // Format nutrient name for display
  const displayName = nutrient
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  useFrame((state) => {
    if (!sphereRef.current) return;
    // Gentle movement
    sphereRef.current.position.y += Math.sin(state.clock.getElapsedTime() * 0.5) * 0.002;
    // Gentle rotation
    sphereRef.current.rotation.y += 0.002;
  });
  
  return (
    <group ref={sphereRef} position={position}>
      {/* Sphere */}
      <mesh scale={scale}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshPhysicalMaterial 
          color={color}
          roughness={0.1}
          metalness={0.1}
          clearcoat={0.8}
          clearcoatRoughness={0.1}
          transmission={0.2}
          thickness={1}
          envMapIntensity={1}
        />
      </mesh>
      
      {/* Label */}
      {showLabel && (
        <Text
          position={[0, -0.8, 0]}
          fontSize={0.25}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.01}
          outlineColor="#000000"
        >
          {displayName}
        </Text>
      )}
      
      {/* Small particles around the sphere to represent molecules */}
      {[...Array(5)].map((_, i) => (
        <mesh 
          key={i} 
          position={[
            Math.sin(Math.PI * 2 * i / 5) * 0.8,
            Math.cos(Math.PI * 2 * i / 5) * 0.8,
            0
          ]}
          scale={0.1}
        >
          <sphereGeometry args={[0.5, 16, 16]} />
          <meshStandardMaterial 
            color="#ffffff"
            emissive={color}
            emissiveIntensity={0.5}
          />
        </mesh>
      ))}
    </group>
  );
};

// Group of Vitamin Spheres
const VitaminSpheresGroup = () => {
  const groupRef = useRef<Group>(null);
  const isMobile = useIsMobile();
  
  // Select fewer nutrients for mobile to improve performance
  const nutrients: NutrientType[] = isMobile
    ? ['vitamin-a', 'vitamin-c', 'iron', 'zinc', 'calcium']
    : ['vitamin-a', 'vitamin-b', 'vitamin-c', 'vitamin-d', 'iron', 'zinc', 'iodine', 'calcium', 'folic-acid', 'protein'];
  
  useFrame((state) => {
    if (!groupRef.current) return;
    // Make the group respond subtly to mouse movement
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
      {/* Place spheres in a circular pattern */}
      {nutrients.map((nutrient, i) => {
        const radius = 2;
        const angle = (i / nutrients.length) * Math.PI * 2;
        const x = Math.sin(angle) * radius;
        const y = (i % 2 === 0 ? 0.5 : -0.5) + Math.sin(i * 0.5) * 0.3;
        const z = Math.cos(angle) * radius;
        
        return (
          <Float
            key={nutrient}
            speed={1 + Math.random()}
            rotationIntensity={0.2 + Math.random() * 0.2}
            floatIntensity={0.3 + Math.random() * 0.3}
          >
            <VitaminSphere
              position={[x, y, z]}
              nutrient={nutrient}
              scale={0.7 + Math.random() * 0.3}
            />
          </Float>
        );
      })}
    </group>
  );
};

interface FloatingVitaminSpheresProps {
  className?: string;
  height?: number | string;
}

const FloatingVitaminSpheres = ({ 
  className = "", 
  height = 400 
}: FloatingVitaminSpheresProps) => {
  const [isClient, setIsClient] = useState(false);

  // Only render canvas on client side
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  if (!isClient) {
    return <VitaminSpheresFallback />;
  }
  
  return (
    <div 
      className={`relative w-full rounded-xl overflow-hidden ${className}`}
      style={{ height }}
    >
      {/* Added visible elements as fallback background */}
      <div className="absolute inset-0 bg-gradient-to-r from-vitanium-50 to-emerald-50 z-0"></div>
      
      <Canvas 
        className="z-10"
        camera={{ position: [0, 0, 6], fov: 50 }}
        dpr={[1, 2]} // Limit device pixel ratio for performance
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <VitaminSpheresGroup />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default FloatingVitaminSpheres;
