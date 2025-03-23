
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

  // Array of different shadow colors for variety
  const shadowColors = [
    'shadow-[0_10px_25px_-5px_rgba(14,165,233,0.3)]', // Blue
    'shadow-[0_10px_25px_-5px_rgba(16,185,129,0.3)]', // Green
    'shadow-[0_10px_25px_-5px_rgba(245,158,11,0.3)]', // Amber
    'shadow-[0_10px_25px_-5px_rgba(250,82,82,0.3)]',  // Red
    'shadow-[0_10px_25px_-5px_rgba(139,92,246,0.3)]', // Purple
    'shadow-[0_10px_25px_-5px_rgba(236,72,153,0.3)]', // Pink
    'shadow-[0_10px_25px_-5px_rgba(34,197,94,0.3)]',  // Emerald
    'shadow-[0_10px_25px_-5px_rgba(168,85,247,0.3)]'  // Violet
  ];

  // Matching hover shadow colors
  const hoverShadows = [
    'hover:shadow-[0_15px_35px_-5px_rgba(14,165,233,0.5)]', // Blue
    'hover:shadow-[0_15px_35px_-5px_rgba(16,185,129,0.5)]', // Green
    'hover:shadow-[0_15px_35px_-5px_rgba(245,158,11,0.5)]', // Amber
    'hover:shadow-[0_15px_35px_-5px_rgba(250,82,82,0.5)]',  // Red
    'hover:shadow-[0_15px_35px_-5px_rgba(139,92,246,0.5)]', // Purple
    'hover:shadow-[0_15px_35px_-5px_rgba(236,72,153,0.5)]', // Pink
    'hover:shadow-[0_15px_35px_-5px_rgba(34,197,94,0.5)]',  // Emerald
    'hover:shadow-[0_15px_35px_-5px_rgba(168,85,247,0.5)]'  // Violet
  ];

  return (
    <motion.div 
      className={cn(`grid ${columnClasses[columns]} gap-4 md:gap-6`, className)}
      variants={container}
      initial="hidden"
      animate="show"
    >
      {images.map((image, index) => {
        // Get shadow color based on index (cycling through the array)
        const shadowIndex = index % shadowColors.length;
        const shadowColor = shadowColors[shadowIndex];
        const hoverShadow = hoverShadows[shadowIndex];
        
        return (
          <motion.div 
            key={index}
            className={cn(
              "relative overflow-hidden rounded-xl bg-white border border-white/40 transition-all duration-300",
              shadowColor,
              hoverShadow
            )}
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <span className="text-white font-medium text-sm">{image.alt}</span>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default FoodImageGallery;
