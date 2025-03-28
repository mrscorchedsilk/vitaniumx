
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  delay?: number;
  color?: 'default' | 'primary' | 'secondary' | 'tertiary' | 'quaternary';
  glowIntensity?: 'light' | 'medium' | 'strong';
}

const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className,
  hoverEffect = true,
  delay = 0,
  color = 'default',
  glowIntensity = 'medium'
}) => {
  const colorClasses = {
    default: 'bg-white/60 border-white/30',
    primary: 'bg-emerald-50/70 border-emerald-100/50',
    secondary: 'bg-vitanium-50/70 border-vitanium-100/50',
    tertiary: 'bg-amber-50/70 border-amber-100/50',
    quaternary: 'bg-coral-50/70 border-coral-100/50',
  };

  const glowIntensities = {
    light: {
      default: 'shadow-[0_5px_15px_-5px_rgba(14,165,233,0.15)]',
      hover: 'hover:shadow-[0_10px_25px_-5px_rgba(14,165,233,0.25)]',
    },
    medium: {
      default: 'shadow-[0_10px_25px_-5px_rgba(14,165,233,0.25)]',
      hover: 'hover:shadow-[0_15px_35px_-5px_rgba(14,165,233,0.4)]',
    },
    strong: {
      default: 'shadow-[0_15px_35px_-5px_rgba(14,165,233,0.35)]',
      hover: 'hover:shadow-[0_20px_45px_-5px_rgba(14,165,233,0.5)]',
    },
  };

  const shadowColors = {
    default: {
      light: 'shadow-[0_5px_15px_-5px_rgba(14,165,233,0.15)]',
      medium: 'shadow-[0_10px_25px_-5px_rgba(14,165,233,0.25)]',
      strong: 'shadow-[0_15px_35px_-5px_rgba(14,165,233,0.35)]',
    },
    primary: {
      light: 'shadow-[0_5px_15px_-5px_rgba(16,185,129,0.15)]',
      medium: 'shadow-[0_10px_25px_-5px_rgba(16,185,129,0.25)]',
      strong: 'shadow-[0_15px_35px_-5px_rgba(16,185,129,0.35)]',
    },
    secondary: {
      light: 'shadow-[0_5px_15px_-5px_rgba(14,165,233,0.15)]',
      medium: 'shadow-[0_10px_25px_-5px_rgba(14,165,233,0.25)]',
      strong: 'shadow-[0_15px_35px_-5px_rgba(14,165,233,0.35)]',
    },
    tertiary: {
      light: 'shadow-[0_5px_15px_-5px_rgba(245,158,11,0.15)]',
      medium: 'shadow-[0_10px_25px_-5px_rgba(245,158,11,0.25)]',
      strong: 'shadow-[0_15px_35px_-5px_rgba(245,158,11,0.35)]',
    },
    quaternary: {
      light: 'shadow-[0_5px_15px_-5px_rgba(250,82,82,0.15)]',
      medium: 'shadow-[0_10px_25px_-5px_rgba(250,82,82,0.25)]',
      strong: 'shadow-[0_15px_35px_-5px_rgba(250,82,82,0.35)]',
    },
  };

  const hoverShadows = {
    default: {
      light: 'hover:shadow-[0_10px_25px_-5px_rgba(14,165,233,0.25)]',
      medium: 'hover:shadow-[0_15px_35px_-5px_rgba(14,165,233,0.4)]',
      strong: 'hover:shadow-[0_20px_45px_-5px_rgba(14,165,233,0.5)]',
    },
    primary: {
      light: 'hover:shadow-[0_10px_25px_-5px_rgba(16,185,129,0.25)]',
      medium: 'hover:shadow-[0_15px_35px_-5px_rgba(16,185,129,0.4)]',
      strong: 'hover:shadow-[0_20px_45px_-5px_rgba(16,185,129,0.5)]',
    },
    secondary: {
      light: 'hover:shadow-[0_10px_25px_-5px_rgba(14,165,233,0.25)]',
      medium: 'hover:shadow-[0_15px_35px_-5px_rgba(14,165,233,0.4)]',
      strong: 'hover:shadow-[0_20px_45px_-5px_rgba(14,165,233,0.5)]',
    },
    tertiary: {
      light: 'hover:shadow-[0_10px_25px_-5px_rgba(245,158,11,0.25)]',
      medium: 'hover:shadow-[0_15px_35px_-5px_rgba(245,158,11,0.4)]',
      strong: 'hover:shadow-[0_20px_45px_-5px_rgba(245,158,11,0.5)]',
    },
    quaternary: {
      light: 'hover:shadow-[0_10px_25px_-5px_rgba(250,82,82,0.25)]',
      medium: 'hover:shadow-[0_15px_35px_-5px_rgba(250,82,82,0.4)]',
      strong: 'hover:shadow-[0_20px_45px_-5px_rgba(250,82,82,0.5)]',
    },
  };

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut",
        delay: delay
      }
    },
    hover: {
      y: -5,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div
      className={cn(
        'backdrop-blur-md rounded-2xl border p-6 transition-shadow duration-300',
        colorClasses[color],
        shadowColors[color][glowIntensity],
        hoverEffect && hoverShadows[color][glowIntensity],
        className
      )}
      initial="hidden"
      animate="visible"
      whileHover={hoverEffect ? "hover" : undefined}
      variants={variants}
      style={{
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
    >
      <div className="relative z-10">{children}</div>
      
      {/* Glass highlight effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl pointer-events-none" />
    </motion.div>
  );
};

export default GlassCard;
