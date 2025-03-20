
import React from 'react';
import { cn } from '@/lib/utils';
import ScrollReveal from './ScrollReveal';

interface CertificationCardProps {
  name: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  delay?: number;
}

const CertificationCard: React.FC<CertificationCardProps> = ({
  name,
  description,
  icon,
  className,
  delay = 0,
}) => {
  return (
    <ScrollReveal 
      className={cn(
        'p-6 bg-white rounded-lg shadow-subtle border border-neutral-100 flex flex-col items-center text-center transition-all duration-300 hover:shadow-elevated hover:border-vitanium-200',
        className
      )}
      delay={delay}
    >
      <div className="w-16 h-16 flex items-center justify-center bg-vitanium-50 text-vitanium-600 rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-neutral-600">{description}</p>
    </ScrollReveal>
  );
};

export default CertificationCard;
