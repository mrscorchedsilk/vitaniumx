
import React from 'react';
import { motion } from 'framer-motion';

const Logo = ({ className }: { className?: string }) => {
  return (
    <motion.div 
      className={`flex flex-col items-start ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center">
        <motion.div
          className="font-bold text-2xl tracking-wide"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <span className="text-black">VITANIUM</span>
          <span className="text-sky-500 font-extrabold">X</span>
        </motion.div>
      </div>
      <span className="text-vitanium-600 text-xs tracking-widest uppercase -mt-1">
        A Company of Progressive <span className="text-sky-400">Processors</span>
      </span>
    </motion.div>
  );
};

export default Logo;
