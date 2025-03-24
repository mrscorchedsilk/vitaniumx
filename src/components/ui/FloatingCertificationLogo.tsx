
import React from 'react';
import AnimatedElement from './AnimatedElement';

interface FloatingCertificationLogoProps {
  src: string;
  alt: string;
  className?: string;
  delay?: number;
  size?: 'sm' | 'md' | 'lg';
}

const FloatingCertificationLogo: React.FC<FloatingCertificationLogoProps> = ({
  src,
  alt,
  className = '',
  delay = 0,
  size = 'md'
}) => {
  const sizeClasses = {
    sm: 'h-12 w-12',
    md: 'h-16 w-16',
    lg: 'h-20 w-20'
  };

  return (
    <AnimatedElement 
      animation="float" 
      delay={delay} 
      className={`rounded-full flex items-center justify-center ${className}`}
      viewportOnce={false}
    >
      <img 
        src={src} 
        alt={alt} 
        className={`${sizeClasses[size]} object-contain`}
      />
    </AnimatedElement>
  );
};

export default FloatingCertificationLogo;
