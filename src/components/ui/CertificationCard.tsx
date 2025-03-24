
import React from 'react';
import { Shield } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface CertificationCardProps {
  name: string;
  description: string;
  icon?: React.ReactNode;
  delay?: number;
  imageSrc?: string;
}

const CertificationCard: React.FC<CertificationCardProps> = ({
  name,
  description,
  icon = <Shield />,
  delay = 0,
  imageSrc
}) => {
  return (
    <ScrollReveal delay={delay}>
      <div className="bg-white p-6 rounded-lg shadow-subtle border border-neutral-100 h-full hover:shadow-md transition-shadow duration-300">
        <div className="flex flex-col items-center">
          {imageSrc ? (
            <div className="mb-4 h-20 w-20 flex items-center justify-center">
              <img src={imageSrc} alt={name} className="max-h-full max-w-full object-contain" />
            </div>
          ) : (
            <div className="mb-4 h-12 w-12 rounded-full bg-vitanium-100 text-vitanium-600 flex items-center justify-center">
              {icon}
            </div>
          )}
          <h3 className="text-xl font-semibold mb-2 text-center">{name}</h3>
          <p className="text-neutral-600 text-center">{description}</p>
        </div>
      </div>
    </ScrollReveal>
  );
};

export default CertificationCard;
