
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface OrganicShapeProps {
  color?: 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'accent';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center';
  className?: string;
  delay?: number;
  opacity?: number;
  blur?: boolean;
}

const OrganicShape: React.FC<OrganicShapeProps> = ({
  color = 'primary',
  size = 'md',
  position = 'top-right',
  className,
  delay = 0,
  opacity = 0.2,
  blur = true,
}) => {
  const colorMap = {
    primary: 'bg-emerald-500',
    secondary: 'bg-vitanium-500',
    tertiary: 'bg-amber-400',
    quaternary: 'bg-coral-400',
    accent: 'bg-sky-400',
  };

  const sizeMap = {
    sm: 'w-24 h-24',
    md: 'w-40 h-40',
    lg: 'w-60 h-60',
    xl: 'w-96 h-96',
  };

  const positionMap = {
    'top-left': '-top-10 -left-10',
    'top-right': '-top-10 -right-10',
    'bottom-left': '-bottom-10 -left-10',
    'bottom-right': '-bottom-10 -right-10',
    'center': 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
  };

  const variants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: opacity,
      transition: { 
        duration: 1.5, 
        delay: delay,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      className={cn(
        "absolute rounded-[40%_60%_70%_30%/40%_50%_60%_50%] z-0",
        colorMap[color],
        sizeMap[size],
        positionMap[position],
        blur ? 'blur-3xl' : '',
        className
      )}
      variants={variants}
      initial="initial"
      animate="animate"
      style={{ filter: blur ? 'blur(60px)' : 'none' }}
    />
  );
};

export default OrganicShape;
