
import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';

interface ProductCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  className?: string;
  delay?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  icon,
  link,
  className,
  delay = 0,
}) => {
  return (
    <ScrollReveal
      className={cn(
        'group p-6 bg-white rounded-lg shadow-subtle border border-neutral-100 transition-all duration-300 hover:shadow-elevated hover:border-vitanium-200',
        className
      )}
      delay={delay}
    >
      <div className="w-12 h-12 flex items-center justify-center bg-vitanium-50 text-vitanium-600 rounded-full mb-4 transition-all group-hover:bg-vitanium-100">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-neutral-600 mb-4">{description}</p>
      <Link to={link} className="inline-flex items-center text-vitanium-600 font-medium group-hover:text-vitanium-700">
        Learn more
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </ScrollReveal>
  );
};

export default ProductCard;
