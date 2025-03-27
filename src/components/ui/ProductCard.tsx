
import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';
import { Card, CardContent, CardHeader } from './card';

interface ProductCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  className?: string;
  delay?: number;
  image?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  icon,
  link,
  className,
  delay = 0,
  image,
}) => {
  return (
    <ScrollReveal
      className={cn(
        'group rounded-lg border border-neutral-100 transition-all duration-300',
        'shadow-[0_10px_25px_-5px_rgba(16,185,129,0.2)] hover:shadow-[0_15px_35px_-5px_rgba(16,185,129,0.35)]',
        'hover:border-vitanium-200 overflow-hidden',
        className
      )}
      delay={delay}
    >
      {image && (
        <div className="w-full h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}
      
      <div className="p-6 bg-white/90 backdrop-blur-sm">
        <div className="w-12 h-12 flex items-center justify-center bg-vitanium-50 text-vitanium-600 rounded-full mb-4 transition-all group-hover:bg-vitanium-100">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-neutral-600 mb-4">{description}</p>
        <Link to={link} className="inline-flex items-center text-vitanium-600 font-medium group-hover:text-vitanium-700">
          Learn more
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </ScrollReveal>
  );
};

export default ProductCard;
