
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';
import NavLinks, { NavItem } from './NavLinks';
import QuoteButton from './QuoteButton';

type MobileMenuProps = {
  isOpen: boolean;
  navItems: NavItem[];
  onClose: () => void;
};

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, navItems, onClose }) => {
  return (
    <div
      className={cn(
        "fixed inset-0 z-50 transition-opacity duration-300",
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}
    >
      {/* Frosted glass background */}
      <div className="absolute inset-0 backdrop-blur-xl bg-white/70"></div>
      
      {/* Menu content */}
      <div className="relative w-full h-full pt-28 pb-6 px-6 overflow-y-auto">
        <button 
          onClick={onClose}
          className="absolute top-20 left-6 p-2 rounded-full bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
          aria-label="Back"
        >
          <ArrowLeft className="h-6 w-6" />
        </button>
        
        <NavLinks items={navItems} mobile onClick={onClose} />
        <QuoteButton mobile onClick={onClose} />
      </div>
    </div>
  );
};

export default MobileMenu;
