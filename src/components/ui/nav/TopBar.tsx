
import React from 'react';
import { Phone, Mail } from 'lucide-react';

const TopBar: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-emerald-900 to-vitanium-800 text-white py-3 relative overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-10"></div>
      <div className="container-wide flex justify-center items-center space-x-10">
        <a href="tel:+919429694121" className="flex items-center text-sm hover:text-emerald-300 transition-colors">
          <Phone className="h-4 w-4 mr-2" />
          +91 9429694121
        </a>
        <a href="mailto:hello@vitaniumx.com" className="flex items-center text-sm hover:text-emerald-300 transition-colors">
          <Mail className="h-4 w-4 mr-2" />
          hello@vitaniumx.com
        </a>
      </div>
    </div>
  );
};

export default TopBar;
