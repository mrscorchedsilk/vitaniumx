
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  delay?: number;
  once?: boolean;
  animation?: 'fade-in' | 'fade-in-up' | 'slide-in-right' | 'scale-in';
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className,
  threshold = 0.1,
  delay = 0,
  once = true,
  animation = 'fade-in-up',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, once]);

  const animationClass = {
    'fade-in': 'animate-fade-in',
    'fade-in-up': 'animate-fade-in-up',
    'slide-in-right': 'animate-slide-in-right',
    'scale-in': 'animate-scale-in',
  }[animation];

  return (
    <div
      ref={ref}
      className={cn(
        className,
        isVisible
          ? animationClass
          : 'opacity-0',
        delay > 0 && `duration-500 delay-[${delay}ms]`
      )}
      style={{ 
        animationDelay: delay > 0 ? `${delay}ms` : '',
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
