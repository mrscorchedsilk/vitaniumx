
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface FoodImageGalleryProps {
  images: Array<{
    src: string;
    alt: string;
  }>;
  className?: string;
  columns?: 1 | 2 | 3 | 4;
}

const FoodImageGallery: React.FC<FoodImageGalleryProps> = ({ 
  images, 
  className,
  columns = 3
}) => {
  const columnClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.div 
      className={cn(`grid ${columnClasses[columns]} gap-4 md:gap-6`, className)}
      variants={container}
      initial="hidden"
      animate="show"
    >
      {images.map((image, index) => (
        <motion.div 
          key={index}
          className="relative overflow-hidden rounded-xl shadow-lg bg-white"
          variants={item}
          whileHover={{ 
            scale: 1.03, 
            transition: { duration: 0.3 } 
          }}
        >
          <div className="aspect-square overflow-hidden">
            <img 
              src={image.src} 
              alt={image.alt} 
              className="object-cover w-full h-full transition-transform duration-500 hover:scale-110" 
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <span className="text-white font-medium text-sm">{image.alt}</span>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default FoodImageGallery;
