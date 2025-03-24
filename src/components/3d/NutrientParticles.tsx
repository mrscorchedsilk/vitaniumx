
import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, Point, useTexture, Environment } from '@react-three/drei';
import { Suspense } from 'react';
import { Group, Object3D, MathUtils } from 'three';

// Simple fallback
const ParticlesFallback = () => (
  <div className="bg-transparent w-full h-full" />
);

// Random position generator within bounds
const randomPosition = (scale = 10) => [
  (Math.random() - 0.5) * scale,
  (Math.random() - 0.5) * scale,
  (Math.random() - 0.5) * scale
];

// Color palette for different nutrients
const nutrientColors = [
  '#22c55e', // Vitamin A (Green)
  '#3b82f6', // Vitamin B (Blue)
  '#f97316', // Vitamin C (Orange)
  '#f59e0b', // Vitamin D (Amber)
  '#a855f7', // Vitamin E (Purple)
  '#ec4899', // Calcium (Pink)
  '#06b6d4', // Iron (Cyan)
  '#14b8a6', // Zinc (Teal)
  '#6366f1', // Folate (Indigo)
  '#d946ef'  // Iodine (Fuchsia)
];

const ParticleField = ({ count = 100, size = 0.2 }) => {
  const pointsRef = useRef<any>();
  const [positions, setPositions] = useState<number[]>([]);
  const [colors, setColors] = useState<number[]>([]);
  
  useEffect(() => {
    // Generate random positions for particles
    const positions: number[] = [];
    const colors: number[] = [];
    
    for (let i = 0; i < count; i++) {
      const [x, y, z] = randomPosition();
      positions.push(x, y, z);
      
      // Select a random color from our nutrient palette
      const color = nutrientColors[Math.floor(Math.random() * nutrientColors.length)];
      // Convert hex to RGB
      const r = parseInt(color.slice(1, 3), 16) / 255;
      const g = parseInt(color.slice(3, 5), 16) / 255;
      const b = parseInt(color.slice(5, 7), 16) / 255;
      colors.push(r, g, b);
    }
    
    setPositions(positions);
    setColors(colors);
  }, [count]);
  
  useFrame((state) => {
    if (!pointsRef.current) return;
    
    pointsRef.current.rotation.x = MathUtils.lerp(
      pointsRef.current.rotation.x,
      state.mouse.y * 0.2,
      0.01
    );
    pointsRef.current.rotation.y = MathUtils.lerp(
      pointsRef.current.rotation.y,
      state.mouse.x * 0.2,
      0.01
    );
    
    // Slow rotation over time
    pointsRef.current.rotation.y += 0.001;
    
    // Update particle positions
    const positions = pointsRef.current.geometry.attributes.position.array;
    for (let i = 0; i < positions.length; i += 3) {
      const i3 = i / 3;
      // Add gentle wave motion
      positions[i + 1] += Math.sin(state.clock.elapsedTime * 0.5 + i3) * 0.003;
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });
  
  if (positions.length === 0) return null;
  
  return (
    <Points ref={pointsRef} limit={count}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={new Float32Array(positions)}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={new Float32Array(colors)}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={size}
        vertexColors
        transparent
        alphaTest={0.5}
        depthWrite={false}
      />
    </Points>
  );
};

interface NutrientParticlesProps {
  className?: string;
  density?: 'low' | 'medium' | 'high';
  interactive?: boolean;
  color?: 'multi' | 'blue' | 'green';
}

const NutrientParticles = ({ 
  className = "", 
  density = 'medium',
  interactive = true,
  color = 'multi'
}: NutrientParticlesProps) => {
  const [isClient, setIsClient] = useState(false);
  
  // Calculate particle count based on density
  const getParticleCount = () => {
    switch (density) {
      case 'low': return 50;
      case 'high': return 200;
      default: return 100;
    }
  };

  // Only render canvas on client side
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  if (!isClient) {
    return <ParticlesFallback />;
  }
  
  return (
    <div className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}>
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <ParticleField count={getParticleCount()} size={0.15} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default NutrientParticles;
