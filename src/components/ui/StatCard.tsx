
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
        'text-center p-6 rounded-lg bg-white shadow-subtle',
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
