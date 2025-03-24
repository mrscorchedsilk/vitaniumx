
import React from 'react';
import { cn } from '@/lib/utils';
import ScrollReveal from './ScrollReveal';

interface StatCardProps {
  number: string;
  label: string;
  className?: string;
  delay?: number;
  glowColor?: 'blue' | 'green' | 'amber' | 'red' | 'purple' | 'pink';
}

const StatCard: React.FC<StatCardProps> = ({ 
  number, 
  label, 
  className,
  delay = 0,
  glowColor = 'blue'
}) => {
  // Map of glow colors
  const glowColors = {
    blue: 'shadow-[0_10px_25px_-5px_rgba(92,138,238,0.25)] hover:shadow-[0_15px_35px_-5px_rgba(92,138,238,0.4)]',
    green: 'shadow-[0_10px_25px_-5px_rgba(34,197,94,0.25)] hover:shadow-[0_15px_35px_-5px_rgba(34,197,94,0.4)]',
    amber: 'shadow-[0_10px_25px_-5px_rgba(245,158,11,0.25)] hover:shadow-[0_15px_35px_-5px_rgba(245,158,11,0.4)]',
    red: 'shadow-[0_10px_25px_-5px_rgba(239,68,68,0.25)] hover:shadow-[0_15px_35px_-5px_rgba(239,68,68,0.4)]',
    purple: 'shadow-[0_10px_25px_-5px_rgba(139,92,246,0.25)] hover:shadow-[0_15px_35px_-5px_rgba(139,92,246,0.4)]',
    pink: 'shadow-[0_10px_25px_-5px_rgba(236,72,153,0.25)] hover:shadow-[0_15px_35px_-5px_rgba(236,72,153,0.4)]'
  };

  // Text accent colors to match glow
  const textColors = {
    blue: 'text-vitanium-600',
    green: 'text-emerald-600',
    amber: 'text-amber-600',
    red: 'text-red-600',
    purple: 'text-purple-600',
    pink: 'text-pink-600'
  };

  return (
    <ScrollReveal 
      className={cn(
        'text-center p-6 rounded-lg backdrop-blur-sm border border-white/20 transition-all duration-300',
        glowColors[glowColor],
        className
      )}
      delay={delay}
    >
      <div className={cn("text-4xl font-bold mb-2", textColors[glowColor])}>{number}</div>
      <div className="text-neutral-600">{label}</div>
    </ScrollReveal>
  );
};

export default StatCard;
