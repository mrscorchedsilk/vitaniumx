
import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, Text, OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import { Group, MathUtils } from 'three';
import { useIsMobile } from '@/hooks/use-mobile';

// Simple fallback component for non-WebGL environments or loading state
const VitaminSpheresFallback = () => (
  <div className="bg-white/30 backdrop-blur-sm rounded-lg w-full h-full flex items-center justify-center">
    <div className="text-center">
      <div className="text-vitanium-600 font-medium mb-2">Vitamin Visualization</div>
      <div className="w-16 h-16 mx-auto animate-pulse rounded-full bg-gradient-to-br from-vitanium-100/50 to-vitanium-200/50" />
    </div>
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
  
  // For auto-rotation when not being controlled interactively
  useFrame((state) => {
    if (!sphereRef.current) return;
    // Gentle movement
    sphereRef.current.position.y += Math.sin(state.clock.getElapsedTime() * 0.5) * 0.002;
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
  interactive?: boolean;
}

const FloatingVitaminSpheres = ({ 
  className = "", 
  height = 400,
  interactive = true
}: FloatingVitaminSpheresProps) => {
  const [isClient, setIsClient] = useState(false);
  const [webGLSupported, setWebGLSupported] = useState(true);
  const isMobile = useIsMobile();

  // Check WebGL support on client side
  useEffect(() => {
    setIsClient(true);
    
    // Enhanced WebGL detection
    const checkWebGLSupport = () => {
      try {
        const canvas = document.createElement('canvas');
        // Try for WebGL2 first, then fall back
        let gl = canvas.getContext('webgl2');
        
        if (!gl) {
          gl = canvas.getContext('webgl') || 
               canvas.getContext('experimental-webgl') as WebGLRenderingContext;
        }
        
        if (!gl) {
          console.warn('WebGL not supported, using fallback');
          return false;
        }
        
        // Additional capability checks
        if (!gl.getShaderPrecisionFormat) {
          console.warn('WebGL precision format not available');
          return false;
        }
        
        const highpFloat = gl.getShaderPrecisionFormat(
          gl.FRAGMENT_SHADER, 
          gl.HIGH_FLOAT
        );
        
        if (!highpFloat || highpFloat.precision === 0) {
          console.warn('WebGL high precision not supported');
          return false;
        }
        
        return true;
      } catch (e) {
        console.error('WebGL detection error:', e);
        return false;
      }
    };
    
    setWebGLSupported(checkWebGLSupport());
  }, []);
  
  if (!isClient || !webGLSupported) {
    return <VitaminSpheresFallback />;
  }
  
  return (
    <div 
      className={`relative w-full rounded-xl overflow-hidden ${className}`}
      style={{ height }}
    >
      {/* Added visible elements as fallback background */}
      <div className="absolute inset-0 bg-gradient-to-r from-vitanium-50 to-emerald-50 z-0"></div>
      
      {/* Touch instruction overlay for mobile */}
      {isMobile && interactive && (
        <div className="absolute top-2 left-0 right-0 z-20 text-center text-xs text-white bg-black/30 backdrop-blur-sm py-1 mx-auto w-40 rounded-full">
          Touch to rotate
        </div>
      )}
      
      <ErrorBoundary fallback={<VitaminSpheresFallback />}>
        <Canvas 
          className="z-10"
          camera={{ position: [0, 0, 6], fov: 50 }}
          dpr={[1, 2]} // Limit device pixel ratio for performance
          gl={{
            powerPreference: "high-performance",
            antialias: false, // Disable for performance
            depth: true,
            stencil: false,
            alpha: true
          }}
          onError={(e) => {
            console.error('Canvas error:', e);
            return true; // Prevent error propagation
          }}
          // Allow touch events to be captured
          onCreated={({ gl }) => {
            if (gl.domElement) {
              gl.domElement.style.touchAction = 'none';
            }
          }}
        >
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <VitaminSpheresGroup />
            <Environment preset="city" />
            {interactive && (
              <OrbitControls 
                enablePan={false}
                enableZoom={false}
                rotateSpeed={0.8}
                dampingFactor={0.1}
                enableDamping
              />
            )}
          </Suspense>
        </Canvas>
      </ErrorBoundary>
    </div>
  );
};

// Simple ErrorBoundary component to catch and handle WebGL errors
class ErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode; fallback: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error("WebGL Rendering Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

export default FloatingVitaminSpheres;
