
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import OrganicShape from '../ui/OrganicShape';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  primaryCta: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  imageSrc: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  imageSrc
}) => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-white via-emerald-50/30 to-vitanium-50/30 pt-16 md:pt-20 pb-24">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <OrganicShape 
          color="primary" 
          size="lg" 
          position="bottom-left" 
          opacity={0.07} 
          className="-left-32 -bottom-32" 
        />
        <OrganicShape 
          color="secondary" 
          size="xl" 
          position="top-right" 
          opacity={0.07} 
          className="-right-40 -top-40" 
        />
      </div>
      
      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6 items-center">
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-vitanium-600 font-semibold tracking-wider text-sm uppercase mb-4">
              {subtitle}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 mb-6 leading-tight">
              {title}
            </h1>
            <p className="text-lg text-navy-700/80 mb-8 max-w-xl mx-auto lg:mx-0">
              {description}
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link 
                to={primaryCta.href}
                className="btn-primary bg-gradient-to-r from-vitanium-500 to-emerald-500 text-white shadow-lg shadow-vitanium-500/25 hover:shadow-vitanium-500/40"
              >
                {primaryCta.text}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              
              {secondaryCta && (
                <Link 
                  to={secondaryCta.href}
                  className="btn-secondary border-vitanium-200 text-vitanium-700 hover:bg-vitanium-50"
                >
                  {secondaryCta.text}
                </Link>
              )}
            </div>
          </motion.div>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative bg-white p-2 rounded-2xl shadow-2xl overflow-hidden">
              <img 
                src={imageSrc} 
                alt="Nutritious food" 
                className="w-full h-auto rounded-xl" 
              />
              
              <div className="absolute inset-0 border-8 border-white/40 rounded-2xl pointer-events-none" />
            </div>
            
            {/* Floating accents */}
            <motion.div
              className="absolute -top-6 -right-6 w-24 h-24 bg-vitanium-100 rounded-full flex items-center justify-center shadow-lg"
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, 0] 
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <span className="text-vitanium-700 font-bold text-sm">
                Natural<br />Ingredients
              </span>
            </motion.div>
            
            <motion.div
              className="absolute -bottom-4 -left-4 w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center shadow-lg"
              animate={{ 
                y: [0, 10, 0],
                rotate: [0, -5, 0] 
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <span className="text-emerald-700 font-bold text-xs text-center">
                100%<br />Organic
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
