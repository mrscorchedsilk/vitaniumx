
import React from 'react';
import { cn } from '@/lib/utils';
import { Droplet, Grape, Leaf, FlaskConical, Apple, Carrot, Wheat, AlarmClock, Salad, Egg } from 'lucide-react';
import { motion } from 'framer-motion';

type IconType = 'vitamin-a' | 'vitamin-b' | 'vitamin-c' | 'vitamin-d' | 'iron' | 'zinc' | 'iodine' | 'calcium' | 'folic-acid' | 'protein';

interface NutrientIconProps {
  type: IconType;
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'tertiary' | 'quaternary';
  label?: string;
  showLabel?: boolean;
  className?: string;
  animated?: boolean;
}

const NutrientIcon: React.FC<NutrientIconProps> = ({
  type,
  size = 'md',
  color = 'primary',
  label,
  showLabel = true,
  className = '',
  animated = true,
}) => {
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-20 h-20',
    lg: 'w-28 h-28',
  };

  const iconSizes = {
    sm: 'w-5 h-5',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  const colorClasses = {
    primary: 'bg-gradient-to-br from-emerald-50 to-emerald-100 text-emerald-600 border-emerald-200 shadow-emerald-100',
    secondary: 'bg-gradient-to-br from-vitanium-50 to-vitanium-100 text-vitanium-600 border-vitanium-200 shadow-vitanium-100',
    tertiary: 'bg-gradient-to-br from-amber-50 to-amber-100 text-amber-600 border-amber-200 shadow-amber-100',
    quaternary: 'bg-gradient-to-br from-coral-50 to-coral-100 text-coral-600 border-coral-200 shadow-coral-100',
  };

  const iconMap: Record<IconType, React.ReactNode> = {
    'vitamin-a': <Carrot className={iconSizes[size]} />,
    'vitamin-b': <Apple className={iconSizes[size]} />,
    'vitamin-c': <Grape className={iconSizes[size]} />,
    'vitamin-d': <AlarmClock className={iconSizes[size]} />,
    'iron': <FlaskConical className={iconSizes[size]} />,
    'zinc': <Leaf className={iconSizes[size]} />,
    'iodine': <Droplet className={iconSizes[size]} />,
    'calcium': <Wheat className={iconSizes[size]} />,
    'folic-acid': <Salad className={iconSizes[size]} />,
    'protein': <Egg className={iconSizes[size]} />,
  };

  const displayLabel = label || type.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');

  const iconAnimation = {
    hover: {
      scale: 1.05,
      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
      transition: { type: 'spring', stiffness: 400, damping: 10 }
    }
  };

  const iconElement = (
    <motion.div 
      className={cn(
        'rounded-full flex items-center justify-center border backdrop-blur-sm shadow-lg',
        sizeClasses[size],
        colorClasses[color],
        className
      )}
      whileHover="hover"
      variants={iconAnimation}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {iconMap[type]}
    </motion.div>
  );

  const pulseAnimation = {
    initial: { scale: 0.95, opacity: 0.7 },
    animate: { 
      scale: [0.95, 1.05, 0.95],
      opacity: [0.7, 1, 0.7],
      transition: { 
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="flex flex-col items-center">
      {animated ? (
        <motion.div
          variants={pulseAnimation}
          initial="initial"
          animate="animate"
        >
          {iconElement}
        </motion.div>
      ) : (
        iconElement
      )}
      
      {showLabel && (
        <motion.span 
          className={cn(
            'mt-3 font-medium text-center',
            {
              'text-xs': size === 'sm',
              'text-sm': size === 'md',
              'text-base': size === 'lg',
            }
          )}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {displayLabel}
        </motion.span>
      )}
    </div>
  );
};

export default NutrientIcon;
