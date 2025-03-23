
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
    default: 'bg-white/70 border-white/80',
    primary: 'bg-emerald-50/80 border-emerald-100/90',
    secondary: 'bg-vitanium-50/80 border-vitanium-100/90',
    tertiary: 'bg-amber-50/80 border-amber-100/90',
    quaternary: 'bg-coral-50/80 border-coral-100/90',
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
        'backdrop-blur-md rounded-xl border shadow-lg p-6',
        colorClasses[color],
        className
      )}
      initial="hidden"
      animate="visible"
      whileHover={hoverEffect ? "hover" : undefined}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
