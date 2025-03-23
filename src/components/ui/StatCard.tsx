
import React from 'react';
import { cn } from '@/lib/utils';
import ScrollReveal from './ScrollReveal';

interface StatCardProps {
  number: string;
  label: string;
  className?: string;
  delay?: number;
}

const StatCard: React.FC<StatCardProps> = ({ 
  number, 
  label, 
  className,
  delay = 0 
}) => {
  return (
    <ScrollReveal 
      className={cn(
        'text-center p-6 rounded-lg bg-white shadow-lg border border-white/20 transition-shadow duration-300',
        'shadow-[0_10px_25px_-5px_rgba(92,138,238,0.25)] hover:shadow-[0_15px_35px_-5px_rgba(92,138,238,0.35)]',
        className
      )}
      delay={delay}
    >
      <div className="text-4xl font-bold text-vitanium-600 mb-2">{number}</div>
      <div className="text-neutral-600">{label}</div>
    </ScrollReveal>
  );
};

export default StatCard;
