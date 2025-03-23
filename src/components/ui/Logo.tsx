
import React from 'react';
import { Leaf, Droplet } from 'lucide-react';

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="mr-2 flex items-center justify-center relative">
        <Leaf className="h-6 w-6 text-emerald-500 absolute transform rotate-45" />
        <Droplet className="h-6 w-6 text-vitanium-500 animate-pulse" />
      </div>
      <div className="flex flex-col">
        <span className="text-emerald-700 font-bold text-xl tracking-tight">Vita<span className="text-vitanium-500">nium</span></span>
        <span className="text-vitanium-600 font-bold text-xs tracking-widest uppercase -mt-1">Nutrition</span>
      </div>
    </div>
  );
};

export default Logo;
