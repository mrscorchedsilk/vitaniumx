
import React from 'react';
import { cn } from '@/lib/utils';
import ScrollReveal from './ScrollReveal';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  descriptionClassName?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  description,
  align = 'center',
  className,
  titleClassName,
  subtitleClassName,
  descriptionClassName,
}) => {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  return (
    <div className={cn('max-w-3xl', alignClasses[align], className)}>
      {subtitle && (
        <ScrollReveal delay={100}>
          <span
            className={cn(
              'inline-block text-sm font-semibold uppercase tracking-wider text-vitanium-600 mb-3',
              subtitleClassName
            )}
          >
            {subtitle}
          </span>
        </ScrollReveal>
      )}
      
      {title && (
        <ScrollReveal delay={200}>
          <h2
            className={cn(
              'heading-lg mb-4 text-neutral-900',
              titleClassName
            )}
          >
            {title}
          </h2>
        </ScrollReveal>
      )}
      
      {description && (
        <ScrollReveal delay={300}>
          <p
            className={cn(
              'text-lg text-neutral-600 text-balance',
              descriptionClassName
            )}
          >
            {description}
          </p>
        </ScrollReveal>
      )}
    </div>
  );
};

export default SectionHeading;
