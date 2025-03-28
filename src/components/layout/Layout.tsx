
import React, { useRef, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Toaster } from 'sonner';
import OrganicShape from '../ui/OrganicShape';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

// Floating Sphere component - available globally
export const FloatingSphere = ({ 
  size, 
  color, 
  left, 
  top, 
  delay,
  opacity = 1,
  blur = "1px"
}: { 
  size: number; 
  color: string; 
  left: string; 
  top: string; 
  delay: number;
  opacity?: number;
  blur?: string;
}) => {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        left,
        top,
        background: `radial-gradient(circle at 30% 30%, ${color}, transparent)`,
        boxShadow: `0 0 ${size/4}px ${size/10}px ${color}33`,
        opacity,
        filter: `blur(${blur})`,
      }}
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: [opacity * 0.4, opacity, opacity * 0.6],
        y: [0, -30, 0],
        scale: [1, 1.05, 1],
        rotate: [0, 180, 360]
      }}
      transition={{
        duration: 8 + Math.random() * 5,
        ease: "easeInOut",
        delay,
        repeat: Infinity,
      }}
    />
  );
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  
  // Scroll to top when location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="flex min-h-screen flex-col bg-background overflow-hidden">
      {/* Decorative organic shapes in the background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <OrganicShape color="primary" size="lg" position="top-right" opacity={0.06} delay={0.3} />
        <OrganicShape color="secondary" size="xl" position="bottom-left" opacity={0.06} delay={0.5} />
        <OrganicShape color="tertiary" size="md" position="top-left" opacity={0.04} delay={0.7} />
        <OrganicShape color="quaternary" size="sm" position="bottom-right" opacity={0.05} delay={0.9} />
        
        {/* 3D floating spheres - these are still present globally, but with reduced opacity */}
        <FloatingSphere size={60} color="#10B981" left="5%" top="20%" delay={0} opacity={0.5} />
        <FloatingSphere size={45} color="#0EA5E9" left="15%" top="70%" delay={1.5} opacity={0.5} />
        <FloatingSphere size={80} color="#F59E0B" left="80%" top="15%" delay={2.2} opacity={0.5} />
        <FloatingSphere size={30} color="#FA5252" left="75%" top="60%" delay={0.8} opacity={0.5} />
        <FloatingSphere size={40} color="#8B5CF6" left="40%" top="85%" delay={1.2} opacity={0.5} />
        <FloatingSphere size={25} color="#EC4899" left="60%" top="30%" delay={2} opacity={0.5} />
      </div>
      
      <Navbar />
      <main className="flex-grow relative overflow-hidden pt-[110px]">{children}</main>
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
};

export default Layout;
