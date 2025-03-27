
import React from 'react';
import StatCard from '@/components/ui/StatCard';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { motion } from 'framer-motion';

const KeyStatsSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Indian Flag Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Saffron (top) */}
        <div className="absolute top-0 w-full h-1/3 bg-gradient-to-b from-amber-100 to-amber-50 opacity-30"></div>
        
        {/* White (middle) */}
        <div className="absolute top-1/3 w-full h-1/3 bg-neutral-50 opacity-30"></div>
        
        {/* Green (bottom) */}
        <div className="absolute top-2/3 w-full h-1/3 bg-gradient-to-t from-emerald-100 to-emerald-50 opacity-30"></div>
        
        {/* Ashoka Chakra - Fixed center positioning */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center w-full h-full opacity-10"
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" className="w-80 h-80">
            <circle cx="250" cy="250" r="200" fill="none" stroke="#0D6EFD" strokeWidth="15" />
            <circle cx="250" cy="250" r="75" fill="none" stroke="#0D6EFD" strokeWidth="15" />
            {/* 24 spokes of the wheel */}
            {Array.from({ length: 24 }).map((_, index) => {
              const angle = (index * 15 * Math.PI) / 180;
              const x1 = 250 + 75 * Math.cos(angle);
              const y1 = 250 + 75 * Math.sin(angle);
              const x2 = 250 + 200 * Math.cos(angle);
              const y2 = 250 + 200 * Math.sin(angle);
              return (
                <line 
                  key={index} 
                  x1={x1} 
                  y1={y1} 
                  x2={x2} 
                  y2={y2} 
                  stroke="#0D6EFD" 
                  strokeWidth="15" 
                />
              );
            })}
          </svg>
        </motion.div>
      </div>

      <div className="container-wide relative z-10">
        <SectionHeading
          subtitle="Our Impact"
          title="Nourishing Millions Across India"
          description="Since our founding in 2015, we've consistently delivered high-quality micronutrient premixes, making a significant impact on public health."
        />
        
        {/* First row with a single highlighted stat with counting animation */}
        <div className="mt-14 mb-6">
          <StatCard 
            number="573000000"
            label="Fortified meals delivered"
            delay={100}
            glowColor="amber" 
            className="bg-amber-50/80 backdrop-blur-md max-w-xl mx-auto"
            animationDuration={2500}
          />
        </div>

        {/* Second row with remaining stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:max-w-3xl mx-auto">
          <StatCard 
            number="10"
            label="Daily production capacity (Tonnes)"
            delay={300}
            glowColor="blue"
            className="bg-blue-50/80 backdrop-blur-md"
            animationDuration={1500}
          />
          <StatCard 
            number="2015"
            label="Year established"
            delay={400}
            glowColor="green"
            className="bg-emerald-50/80 backdrop-blur-md"
            animationDuration={1500}
            noFormat={true} // Add this prop to prevent comma formatting
          />
        </div>
        
        {/* All 3D visualizations in a row */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Molecule Model */}
          {/* <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-md border border-white/40 h-80 hover:shadow-lg transition-all duration-300">
            <h3 className="text-lg font-semibold text-center mb-4 text-vitanium-600">Molecule Model</h3>
            <ScrollReveal animation="fade-in">
              <MoleculeModel className="h-64" autoRotate={true} />
            </ScrollReveal>
          </div> */}
          
          {/* Floating Pills */}
          {/* <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-md border border-white/40 h-80 hover:shadow-lg transition-all duration-300">
            <h3 className="text-lg font-semibold text-center mb-4 text-vitanium-600">Fortification Elements</h3>
            <ScrollReveal animation="fade-in">
              <div className="h-64 relative">
                <FloatingPills className="h-full" />
              </div>
            </ScrollReveal>
          </div> */}
          
          {/* Product Showcase */}
          {/* <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-md border border-white/40 h-80 hover:shadow-lg transition-all duration-300">
            <h3 className="text-lg font-semibold text-center mb-4 text-vitanium-600">Product Gallery</h3>
            <ScrollReveal animation="fade-in">
              <ProductShowcase className="h-64" />
            </ScrollReveal>
          </div> */}
        </div>
        
      </div>
    </section>
  );
};

export default KeyStatsSection;
