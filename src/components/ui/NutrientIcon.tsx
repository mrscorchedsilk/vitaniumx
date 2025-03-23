
import React from 'react';
import { cn } from '@/lib/utils';
import { Droplet, Grape, Leaf, FlaskConical, Apple, Carrot, Wheat, AlarmClock } from 'lucide-react';
import AnimatedElement from './AnimatedElement';

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
    sm: 'w-10 h-10',
    md: 'w-16 h-16',
    lg: 'w-24 h-24',
  };

  const colorClasses = {
    primary: 'bg-emerald-50 text-emerald-600 border-emerald-200',
    secondary: 'bg-vitanium-50 text-vitanium-600 border-vitanium-200',
    tertiary: 'bg-amber-50 text-amber-600 border-amber-200',
    quaternary: 'bg-coral-50 text-coral-600 border-coral-200',
  };

  const iconMap: Record<IconType, React.ReactNode> = {
    'vitamin-a': <Carrot className="w-1/2 h-1/2" />,
    'vitamin-b': <Apple className="w-1/2 h-1/2" />,
    'vitamin-c': <Grape className="w-1/2 h-1/2" />,
    'vitamin-d': <AlarmClock className="w-1/2 h-1/2" />,
    'iron': <FlaskConical className="w-1/2 h-1/2" />,
    'zinc': <Leaf className="w-1/2 h-1/2" />,
    'iodine': <Droplet className="w-1/2 h-1/2" />,
    'calcium': <Wheat className="w-1/2 h-1/2" />,
    'folic-acid': <Leaf className="w-1/2 h-1/2" />,
    'protein': <Wheat className="w-1/2 h-1/2" />,
  };

  const displayLabel = label || type.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');

  const iconElement = (
    <div className={cn(
      'rounded-full flex items-center justify-center border',
      sizeClasses[size],
      colorClasses[color],
      className
    )}>
      {iconMap[type]}
    </div>
  );

  return (
    <div className="flex flex-col items-center">
      {animated ? (
        <AnimatedElement animation="pulse">
          {iconElement}
        </AnimatedElement>
      ) : (
        iconElement
      )}
      
      {showLabel && (
        <span className={cn(
          'mt-2 font-medium text-center',
          {
            'text-xs': size === 'sm',
            'text-sm': size === 'md',
            'text-base': size === 'lg',
          }
        )}>
          {displayLabel}
        </span>
      )}
    </div>
  );
};

export default NutrientIcon;
