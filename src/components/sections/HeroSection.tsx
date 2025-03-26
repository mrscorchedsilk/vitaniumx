import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import OrganicShape from '../ui/OrganicShape';
import { FloatingSphere } from '../layout/Layout';
import FloatingCertificationLogo from '@/components/ui/FloatingCertificationLogo';

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
    <div className="relative overflow-hidden bg-gradient-to-br from-white via-emerald-50/30 to-vitanium-50/30 pt-16 md:pt-7 pb-20">
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
        
        {/* Additional floating spheres specifically for the hero section
        <FloatingSphere size={100} color="#10B981" left="2%" top="25%" delay={0.3} blur="2px" />
        <FloatingSphere size={70} color="#0EA5E9" left="12%" top="60%" delay={0.7} />
        <FloatingSphere size={120} color="#F59E0B" left="85%" top="10%" delay={1.1} blur="3px" />
        <FloatingSphere size={50} color="#FA5252" left="80%" top="50%" delay={0.5} />
        <FloatingSphere size={65} color="#8B5CF6" left="45%" top="75%" delay={1.5} />
        <FloatingSphere size={40} color="#EC4899" left="65%" top="25%" delay={0.9} />
        <FloatingSphere size={85} color="#0891B2" left="30%" top="15%" delay={1.3} blur="2px" /> */}
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
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
              <Link 
              to={primaryCta.href}
              className="btn-primary bg-vitanium-500 hover:bg-vitanium-600 focus:outline-none focus:ring-0"
              >
              {primaryCta.text}
              <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              
              {secondaryCta && (
              <Link 
                to={secondaryCta.href}
                className="btn-secondary border-vitanium-200 text-vitanium-700 hover:bg-vitanium-50 focus:outline-none focus:ring-0"
              >
                {secondaryCta.text}
              </Link>
              )}
            </div>
            
              {/* Certification Logos Section */}
              <motion.div 
                className="mt-6 pt-6 border-t border-neutral-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <div className="flex items-center gap-4 justify-center lg:justify-start">
                <span className="text-lg font-semibold text-neutral-700">Certified By:</span>
                <FloatingCertificationLogo 
                  src="/lovable-uploads/31315a0c-68fe-442c-9d74-dd8c22a5c0d3.png" 
                  alt="GMP Certification" 
                  delay={0.2}
                  size="md"
                />
                <FloatingCertificationLogo 
                  src="/lovable-uploads/b7e9e76c-af31-4725-a211-4ec5d4ed72ff.png" 
                  alt="ISO 9001:2015 Certification" 
                  delay={0.4}
                  size="md"
                />
                <FloatingCertificationLogo 
                  src="/lovable-uploads/2a854855-bbe3-4120-b6e7-becc25616bb0.png" 
                  alt="FSSAI Certification" 
                  delay={0.6}
                  size="md"
                />
                <FloatingCertificationLogo 
                  src="/lovable-uploads/e4aab3cf-b528-4ac6-bf8d-039af06a24e9.png" 
                  alt="FSSC 22000 Certification" 
                  delay={0.8}
                  size="md"
                />
                <FloatingCertificationLogo 
                  src="/lovable-uploads/d808de9e-13d6-4730-a723-30fc5e1e036e.png" 
                  alt="ISO 22000:2018 Certification" 
                  delay={1.0}
                  size="md"
                />
                </div>
              </motion.div>
            </motion.div>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative bg-white/70 backdrop-blur-md p-2 rounded-2xl shadow-2xl overflow-hidden">
              <img 
                src={imageSrc} 
                alt="Nutritious food" 
                className="w-full h-auto rounded-xl" 
              />
              
              <div className="absolute inset-0 border-8 border-white/40 rounded-2xl pointer-events-none" />
            </div>
            
            {/* Floating accents */}
            <motion.div
              className="absolute -top-6 -right-6 w-24 h-24 bg-vitanium-100/80 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg"
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
              className="absolute -bottom-4 -left-4 w-20 h-20 bg-emerald-100/80 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg"
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
