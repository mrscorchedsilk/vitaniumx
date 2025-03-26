
import React, { useRef, useState, useEffect, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, useTexture, Environment } from '@react-three/drei';
import { Suspense } from 'react';
import { Group, Object3D, MathUtils, BufferGeometry, BufferAttribute, Color } from 'three';
import { useIsMobile } from '@/hooks/use-mobile';

// Simple fallback component that doesn't use WebGL
const ParticlesFallback = () => (
  <div className="bg-transparent w-full h-full" />
);

// Helper functions moved outside component for better memory usage
const randomPosition = (scale = 10) => [
  (Math.random() - 0.5) * scale,
  (Math.random() - 0.5) * scale,
  (Math.random() - 0.5) * scale
];

// Color palettes
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

const blueColors = [
  '#0ea5e9', // Sky blue
  '#2563eb', // Blue
  '#3b82f6', // Blue 500
  '#1d4ed8', // Blue 700
  '#60a5fa', // Blue 400
  '#93c5fd', // Blue 300
  '#38bdf8', // Sky 400
  '#0284c7', // Sky 600
  '#0369a1', // Sky 700
  '#7dd3fc'  // Sky 300
];

const greenColors = [
  '#22c55e', // Green 500
  '#16a34a', // Green 600
  '#15803d', // Green 700
  '#4ade80', // Green 400
  '#86efac', // Green 300
  '#10b981', // Emerald 500
  '#059669', // Emerald 600
  '#047857', // Emerald 700
  '#34d399', // Emerald 400
  '#6ee7b7'  // Emerald 300
];

type ColorType = 'multi' | 'blue' | 'green';

const getColorPalette = (color: ColorType) => {
  switch (color) {
    case 'blue': return blueColors;
    case 'green': return greenColors;
    default: return nutrientColors;
  }
};

// Optimize particle geometry and rendering
const ParticleField = ({ 
  count = 100, 
  size = 0.2, 
  color = 'multi' as ColorType,
  animationSpeed = 1 
}) => {
  const pointsRef = useRef<any>();
  const isMobile = useIsMobile();
  
  // Use system preferences for reduced motion
  const prefersReducedMotion = 
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  const effectiveAnimationSpeed = prefersReducedMotion ? 0.2 : animationSpeed;
  
  // Create geometry once with useMemo - major performance improvement
  const [geometry, colors] = useMemo(() => {
    const adjustedCount = isMobile ? Math.floor(count * 0.5) : count;
    const positions = new Float32Array(adjustedCount * 3);
    const colorArray = new Float32Array(adjustedCount * 3);
    const colorPalette = getColorPalette(color);
    
    for (let i = 0; i < adjustedCount; i++) {
      const [x, y, z] = randomPosition();
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      
      const selectedColor = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      const r = parseInt(selectedColor.slice(1, 3), 16) / 255;
      const g = parseInt(selectedColor.slice(3, 5), 16) / 255;
      const b = parseInt(selectedColor.slice(5, 7), 16) / 255;
      colorArray[i * 3] = r;
      colorArray[i * 3 + 1] = g;
      colorArray[i * 3 + 2] = b;
    }
    
    return [positions, colorArray];
  }, [count, color, isMobile]);
  
  // Optimized animation frame
  useFrame((state) => {
    if (!pointsRef.current || prefersReducedMotion) return;
    
    // Optimize rotation math - less calculation per frame
    pointsRef.current.rotation.x = MathUtils.lerp(
      pointsRef.current.rotation.x,
      state.mouse.y * 0.2,
      0.01 * effectiveAnimationSpeed
    );
    pointsRef.current.rotation.y = MathUtils.lerp(
      pointsRef.current.rotation.y,
      state.mouse.x * 0.2,
      0.01 * effectiveAnimationSpeed
    );
    
    pointsRef.current.rotation.y += 0.001 * effectiveAnimationSpeed;
    
    // Limit animations if reduced motion is preferred
    if (!prefersReducedMotion) {
      const positions = pointsRef.current.geometry.attributes.position.array;
      // Use a more efficient loop with fewer calculations per iteration
      for (let i = 0; i < positions.length; i += 3) {
        const i3 = i / 3;
        positions[i + 1] += Math.sin(state.clock.elapsedTime * 0.5 + i3) * 0.003 * effectiveAnimationSpeed;
      }
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });
  
  // Return early if no geometry
  if (!geometry || geometry.length === 0) return null;
  
  return (
    <Points ref={pointsRef} limit={isMobile ? Math.floor(count * 0.5) : count}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={geometry.length / 3}
          array={geometry}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={size}
        vertexColors
        transparent
        alphaTest={0.5}
        depthWrite={false}
        sizeAttenuation={true}
      />
    </Points>
  );
};

interface NutrientParticlesProps {
  className?: string;
  density?: 'low' | 'medium' | 'high';
  interactive?: boolean;
  color?: ColorType;
  reducedMotion?: boolean;
}

const NutrientParticles = ({ 
  className = "", 
  density = 'medium',
  interactive = true,
  color = 'multi',
  reducedMotion = false
}: NutrientParticlesProps) => {
  const [isClient, setIsClient] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [webGLAvailable, setWebGLAvailable] = useState(true);
  const isMobile = useIsMobile();
  
  // Progressive loading - detect WebGL support
  useEffect(() => {
    setIsClient(true);
    
    // Check for WebGL support with more robust detection
    const detectWebGL = () => {
      try {
        const canvas = document.createElement('canvas');
        // Try to get WebGL 2 first, fall back to WebGL 1
        let gl = canvas.getContext('webgl2');
        
        if (!gl) {
          gl = canvas.getContext('webgl') || 
               canvas.getContext('experimental-webgl');
          
          // Fix TypeScript error by proper type assertion
          if (gl && !(gl instanceof WebGL2RenderingContext)) {
            gl = gl as WebGLRenderingContext;
          }
        }
        
        if (!gl) {
          console.warn('WebGL not supported, falling back to static display');
          return false;
        }
        
        // Additional checks for WebGL capabilities - if we have a context
        if (gl) {
          // Check for extensions in a type-safe way
          const extensionsNeeded = ['OES_texture_float', 'OES_standard_derivatives'];
          let supportLevel = 'full';
          
          for (const ext of extensionsNeeded) {
            if (!gl.getExtension(ext)) {
              supportLevel = 'partial';
              console.warn(`WebGL extension ${ext} not supported`);
            }
          }
          
          console.log(`WebGL support detected: ${supportLevel}`);
        }
        return true;
      } catch (e) {
        console.warn('Error during WebGL detection:', e);
        return false;
      }
    };
    
    setWebGLAvailable(detectWebGL());
    
    // Simulate progressive loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Optimized particle count based on device capability
  const getParticleCount = () => {
    const baseCounts = {
      low: 50,
      medium: 100,
      high: 200
    };
    
    // Return lower counts for mobile
    if (isMobile) {
      return Math.floor(baseCounts[density] * 0.5);
    }
    
    return baseCounts[density];
  };

  // Show loading state or fallback
  if (!isClient || isLoading) {
    return <ParticlesFallback />;
  }
  
  // Show fallback if WebGL is not available
  if (!webGLAvailable) {
    return <ParticlesFallback />;
  }
  
  const systemReducedMotion = typeof window !== 'undefined' && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  // Honor system and component reduced motion preferences
  if (reducedMotion || systemReducedMotion) {
    return <ParticlesFallback />;
  }
  
  // Speed based on device and preferences
  const getAnimationSpeed = () => {
    if (systemReducedMotion) return 0.2;
    if (isMobile) return 0.7;
    return 1;
  };
  
  return (
    <div className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}>
      <ErrorBoundary fallback={<ParticlesFallback />}>
        <Canvas 
          camera={{ position: [0, 0, 10], fov: 50 }}
          dpr={[1, 2]} // Limit device pixel ratio range for performance
          performance={{ min: 0.5 }} // Allow ThreeJS to reduce quality on low-end devices
          gl={{ 
            powerPreference: "high-performance",
            antialias: false, // Disable antialiasing for performance
            depth: false, // Disable depth testing for this simple scene
            stencil: false // Disable stencil buffer
          }}
          onError={(e) => {
            console.error('Canvas error:', e);
            // Return true to prevent the error from being propagated
            return true;
          }}
        >
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <ParticleField 
              count={getParticleCount()} 
              size={isMobile ? 0.12 : 0.15} 
              color={color}
              animationSpeed={getAnimationSpeed()}
            />
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

export default NutrientParticles;
