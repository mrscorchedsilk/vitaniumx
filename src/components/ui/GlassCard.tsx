
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
    default: 'bg-white/60 border-white/30 shadow-white/5',
    primary: 'bg-emerald-50/70 border-emerald-100/50 shadow-emerald-500/10',
    secondary: 'bg-vitanium-50/70 border-vitanium-100/50 shadow-vitanium-500/10',
    tertiary: 'bg-amber-50/70 border-amber-100/50 shadow-amber-500/10',
    quaternary: 'bg-coral-50/70 border-coral-100/50 shadow-coral-500/10',
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
      boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div
      className={cn(
        'backdrop-blur-md rounded-2xl border shadow-lg p-6',
        colorClasses[color],
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
