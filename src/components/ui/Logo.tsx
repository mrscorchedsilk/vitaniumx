
import React from 'react';

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <span className="text-black font-bold text-xl">Vitanium</span>
      <span className="text-[#33C3F0] font-bold text-xl">X</span>
    </div>
  );
};

export default Logo;
