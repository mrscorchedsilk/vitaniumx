
import React from 'react';
import AnimatedElement from './AnimatedElement';

interface FloatingCertificationLogoProps {
  src: string;
  alt: string;
  className?: string;
  delay?: number;
}

const FloatingCertificationLogo: React.FC<FloatingCertificationLogoProps> = ({
  src,
  alt,
  className = '',
  delay = 0
}) => {
  return (
    <AnimatedElement 
      animation="float" 
      delay={delay} 
      className={`bg-white rounded-full p-3 shadow-subtle flex items-center justify-center ${className}`}
      viewportOnce={false}
    >
      <img 
        src={src} 
        alt={alt} 
        className="h-16 w-16 object-contain"
      />
    </AnimatedElement>
  );
};

export default FloatingCertificationLogo;
