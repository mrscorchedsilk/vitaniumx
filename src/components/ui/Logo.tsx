
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Logo = ({ className }: { className?: string }) => {
  return (
    <motion.div 
      className={`flex flex-col items-start ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Link to="/" className="inline-block">
        <motion.img
          src="/lovable-uploads/bbc3411a-bd12-4d4b-95b4-dab5e7bbd107.png"
          alt="VITANIUMX Logo"
          className="h-10 md:h-12 w-auto"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        />
      </Link>
    </motion.div>
  );
};

export default Logo;
