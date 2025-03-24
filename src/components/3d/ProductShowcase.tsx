
import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, useTexture, Plane, Text } from '@react-three/drei';
import { Suspense } from 'react';
import { Group, MathUtils, DoubleSide } from 'three';

// Simple fallback
const ProductShowcaseFallback = () => (
  <div className="bg-white/30 backdrop-blur-sm rounded-lg w-full h-full flex items-center justify-center">
    <div className="w-3/4 h-3/4 animate-pulse rounded-lg bg-gradient-to-br from-vitanium-100/30 to-vitanium-200/30" />
  </div>
);

const FortifiedProduct = ({ 
  position, 
  rotation = [0, 0, 0], 
  productName, 
  color,
  showLabel = true
}: { 
  position: [number, number, number], 
  rotation?: [number, number, number],
  productName: string,
  color: string,
  showLabel?: boolean
}) => {
  const productRef = useRef<Group>(null);
  
  useFrame((state) => {
    if (!productRef.current) return;
    // Gentle floating movement
    productRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.05;
  });
  
  return (
    <group ref={productRef} position={position} rotation={rotation}>
      {/* Product shape - using simple geometries to represent products */}
      <mesh>
        <boxGeometry args={[1, 0.5, 0.2]} />
        <meshPhysicalMaterial 
          color={color} 
          roughness={0.1} 
          metalness={0} 
          transmission={0.6}
          thickness={0.5}
        />
      </mesh>
      
      {/* Nutrition particles around the product */}
      {[...Array(6)].map((_, i) => (
        <mesh 
          key={i} 
          position={[
            Math.sin(Math.PI * 2 * i / 6) * 0.8,
            Math.cos(Math.PI * 2 * i / 6) * 0.8,
            0.1
          ]}
        >
          <sphereGeometry args={[0.1, 8, 8]} />
          <meshStandardMaterial 
            color="#ffffff" 
            emissive={color} 
            emissiveIntensity={0.5} 
          />
        </mesh>
      ))}
      
      {/* Product label */}
      {showLabel && (
        <Text
          position={[0, -0.5, 0.2]}
          fontSize={0.15}
          color="#333333"
          anchorX="center"
          anchorY="middle"
        >
          {productName}
        </Text>
      )}
    </group>
  );
};

const ProductsGroup = () => {
  const groupRef = useRef<Group>(null);
  
  useFrame((state) => {
    if (!groupRef.current) return;
    // Make the group respond to mouse position
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
      <Float speed={2} rotationIntensity={0.1} floatIntensity={0.4}>
        <FortifiedProduct 
          position={[0, 0, 0]} 
          productName="Wheat Flour" 
          color="#f5deb3" 
        />
      </Float>
      
      <Float speed={1.7} rotationIntensity={0.2} floatIntensity={0.3}>
        <FortifiedProduct 
          position={[-1.5, 0.8, 0.2]} 
          productName="Rice" 
          color="#f8f8ff"
          rotation={[0, Math.PI / 6, 0]} 
        />
      </Float>
      
      <Float speed={2.2} rotationIntensity={0.15} floatIntensity={0.5}>
        <FortifiedProduct 
          position={[1.5, 0.5, -0.3]} 
          productName="Edible Oil" 
          color="#ffff99"
          rotation={[0, -Math.PI / 8, 0]} 
        />
      </Float>
      
      <Float speed={1.9} rotationIntensity={0.25} floatIntensity={0.35}>
        <FortifiedProduct 
          position={[0.7, -1, 0.1]} 
          productName="Salt" 
          color="#ffffff"
          rotation={[Math.PI / 12, Math.PI / 10, 0]} 
        />
      </Float>
      
      <Float speed={2.1} rotationIntensity={0.18} floatIntensity={0.45}>
        <FortifiedProduct 
          position={[-1, -0.6, -0.1]} 
          productName="Milk" 
          color="#fffff0"
          rotation={[0, -Math.PI / 12, Math.PI / 20]} 
        />
      </Float>
    </group>
  );
};

interface ProductShowcaseProps {
  className?: string;
}

const ProductShowcase = ({ className = "" }: ProductShowcaseProps) => {
  const [isClient, setIsClient] = useState(false);

  // Only render canvas on client side
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  if (!isClient) {
    return <ProductShowcaseFallback />;
  }
  
  return (
    <div className={`relative w-full h-full ${className}`}>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <spotLight position={[-5, 5, 5]} angle={0.15} penumbra={1} intensity={0.8} castShadow />
          <ProductsGroup />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ProductShowcase;
