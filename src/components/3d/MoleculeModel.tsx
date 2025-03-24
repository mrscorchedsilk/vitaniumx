
import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment, Float, Bounds, OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import { Group } from 'three';

// Simple fallback component
const MoleculeFallback = () => (
  <div className="bg-vitanium-50 rounded-full w-full h-full flex items-center justify-center">
    <div className="w-3/4 h-3/4 animate-pulse rounded-full bg-gradient-to-br from-vitanium-100 to-vitanium-200" />
  </div>
);

const AtomSphere = ({ position, color, size = 1 }: { position: [number, number, number], color: string, size?: number }) => {
  return (
    <mesh position={position}>
      <sphereGeometry args={[size, 16, 16]} />
      <meshStandardMaterial color={color} roughness={0.3} metalness={0.2} />
    </mesh>
  );
};

const Bond = ({ start, end, color = "#ffffff" }: { start: [number, number, number], end: [number, number, number], color?: string }) => {
  // Calculate midpoint and direction
  const midX = (start[0] + end[0]) / 2;
  const midY = (start[1] + end[1]) / 2;
  const midZ = (start[2] + end[2]) / 2;
  
  // Calculate length and rotation
  const length = Math.sqrt(
    Math.pow(end[0] - start[0], 2) + 
    Math.pow(end[1] - start[1], 2) + 
    Math.pow(end[2] - start[2], 2)
  );
  
  // Calculate direction vector
  const dirVec = [end[0] - start[0], end[1] - start[1], end[2] - start[2]];
  
  // Create quaternion for rotation
  const xAxis = [1, 0, 0];
  
  return (
    <mesh position={[midX, midY, midZ]}>
      <cylinderGeometry args={[0.1, 0.1, length, 8]} />
      <meshStandardMaterial color={color} roughness={0.5} />
    </mesh>
  );
};

const VitaminMolecule = () => {
  const ref = useRef<Group>(null);
  
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y += 0.005;
    ref.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.1;
  });
  
  return (
    <group ref={ref}>
      {/* Central structure */}
      <AtomSphere position={[0, 0, 0]} color="#ff4d88" size={0.8} />
      
      {/* Surrounding atoms */}
      <AtomSphere position={[2, 0, 0]} color="#22c55e" size={0.6} />
      <AtomSphere position={[-2, 0, 0]} color="#22c55e" size={0.6} />
      <AtomSphere position={[0, 2, 0]} color="#3b82f6" size={0.6} />
      <AtomSphere position={[0, -2, 0]} color="#3b82f6" size={0.6} />
      <AtomSphere position={[0, 0, 2]} color="#f59e0b" size={0.6} />
      <AtomSphere position={[0, 0, -2]} color="#f59e0b" size={0.6} />
      
      {/* Bonds */}
      <Bond start={[0, 0, 0]} end={[2, 0, 0]} color="#a3e635" />
      <Bond start={[0, 0, 0]} end={[-2, 0, 0]} color="#a3e635" />
      <Bond start={[0, 0, 0]} end={[0, 2, 0]} color="#93c5fd" />
      <Bond start={[0, 0, 0]} end={[0, -2, 0]} color="#93c5fd" />
      <Bond start={[0, 0, 0]} end={[0, 0, 2]} color="#fdba74" />
      <Bond start={[0, 0, 0]} end={[0, 0, -2]} color="#fdba74" />
      
      {/* Additional atoms and bonds to make it more complex */}
      <AtomSphere position={[1.5, 1.5, 0]} color="#a855f7" size={0.5} />
      <Bond start={[0, 0, 0]} end={[1.5, 1.5, 0]} color="#e9d5ff" />
      
      <AtomSphere position={[-1.5, -1.5, 0]} color="#a855f7" size={0.5} />
      <Bond start={[0, 0, 0]} end={[-1.5, -1.5, 0]} color="#e9d5ff" />
    </group>
  );
};

interface MoleculeModelProps {
  className?: string;
  autoRotate?: boolean;
  enableZoom?: boolean;
  scale?: number;
}

const MoleculeModel = ({ 
  className = "",
  autoRotate = true,
  enableZoom = false,
  scale = 1
}: MoleculeModelProps) => {
  const [isClient, setIsClient] = useState(false);

  // Only render canvas on client side
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  if (!isClient) {
    return <MoleculeFallback />;
  }
  
  return (
    <div className={`relative w-full h-full ${className}`}>
      <Canvas camera={{ position: [0, 0, 9], fov: 50 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ffffff" />
          <Bounds fit clip observe margin={1.2}>
            <Float
              speed={2} 
              rotationIntensity={0.5} 
              floatIntensity={autoRotate ? 1 : 0}
            >
              <VitaminMolecule />
            </Float>
          </Bounds>
          <Environment preset="city" />
          {enableZoom && <OrbitControls enablePan={false} enableZoom={true} />}
        </Suspense>
      </Canvas>
    </div>
  );
};

export default MoleculeModel;
