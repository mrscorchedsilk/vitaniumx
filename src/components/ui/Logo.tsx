
import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Droplet } from 'lucide-react';

const Logo = ({ className }: { className?: string }) => {
  return (
    <motion.div 
      className={`flex items-center ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mr-2 flex items-center justify-center relative">
        <motion.div
          animate={{ 
            rotate: [0, 10, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        >
          <Leaf className="h-7 w-7 text-emerald-500 absolute transform rotate-45" />
        </motion.div>
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        >
          <Droplet className="h-7 w-7 text-vitanium-500" />
        </motion.div>
      </div>
      <div className="flex flex-col">
        <motion.span 
          className="text-emerald-600 font-bold text-xl tracking-tight"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          Vita<span className="text-vitanium-500">nium</span><span className="text-sky-500 font-extrabold">X</span>
        </motion.span>
        <span className="text-vitanium-600 font-bold text-xs tracking-widest uppercase -mt-1">
          Nutrition
        </span>
      </div>
    </motion.div>
  );
};

export default Logo;
