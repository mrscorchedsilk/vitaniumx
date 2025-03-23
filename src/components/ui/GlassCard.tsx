
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  delay?: number;
  color?: 'default' | 'primary' | 'secondary' | 'tertiary' | 'quaternary';
}

const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className,
  hoverEffect = true,
  delay = 0,
  color = 'default'
}) => {
  const colorClasses = {
    default: 'bg-white/60 border-white/30',
    primary: 'bg-emerald-50/70 border-emerald-100/50',
    secondary: 'bg-vitanium-50/70 border-vitanium-100/50',
    tertiary: 'bg-amber-50/70 border-amber-100/50',
    quaternary: 'bg-coral-50/70 border-coral-100/50',
  };

  const shadowColors = {
    default: 'shadow-[0_10px_30px_-5px_rgba(14,165,233,0.3)]',
    primary: 'shadow-[0_10px_30px_-5px_rgba(16,185,129,0.3)]',
    secondary: 'shadow-[0_10px_30px_-5px_rgba(14,165,233,0.3)]',
    tertiary: 'shadow-[0_10px_30px_-5px_rgba(245,158,11,0.3)]',
    quaternary: 'shadow-[0_10px_30px_-5px_rgba(250,82,82,0.3)]',
  };

  const hoverShadows = {
    default: 'hover:shadow-[0_15px_40px_-5px_rgba(14,165,233,0.4)]',
    primary: 'hover:shadow-[0_15px_40px_-5px_rgba(16,185,129,0.4)]',
    secondary: 'hover:shadow-[0_15px_40px_-5px_rgba(14,165,233,0.4)]',
    tertiary: 'hover:shadow-[0_15px_40px_-5px_rgba(245,158,11,0.4)]',
    quaternary: 'hover:shadow-[0_15px_40px_-5px_rgba(250,82,82,0.4)]',
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
        'backdrop-blur-md rounded-2xl border shadow-lg p-6 transition-shadow duration-300',
        colorClasses[color],
        shadowColors[color],
        hoverEffect && hoverShadows[color],
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
