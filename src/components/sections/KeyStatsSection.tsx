
import React from 'react';
import StatCard from '@/components/ui/StatCard';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import MoleculeModel from '@/components/3d/MoleculeModel';
import FloatingPills from '@/components/3d/FloatingPills';
import ProductShowcase from '@/components/3d/ProductShowcase';
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
        
        {/* Ashoka Chakra */}
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 md:w-64 md:h-64 opacity-10"
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
            <circle cx="500" cy="500" r="475" fill="none" stroke="#0D6EFD" strokeWidth="25" />
            <circle cx="500" cy="500" r="175" fill="none" stroke="#0D6EFD" strokeWidth="25" />
            {/* 24 spokes of the wheel */}
            {Array.from({ length: 24 }).map((_, index) => {
              const angle = (index * 15 * Math.PI) / 180;
              const x1 = 500 + 175 * Math.cos(angle);
              const y1 = 500 + 175 * Math.sin(angle);
              const x2 = 500 + 475 * Math.cos(angle);
              const y2 = 500 + 475 * Math.sin(angle);
              return (
                <line 
                  key={index} 
                  x1={x1} 
                  y1={y1} 
                  x2={x2} 
                  y2={y2} 
                  stroke="#0D6EFD" 
                  strokeWidth="25" 
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
        
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard 
            number="573M+"
            label="Fortified meals delivered"
            delay={100}
            glowColor="amber" 
            className="bg-amber-50/80 backdrop-blur-md"
          />
          <StatCard 
            number="114,736"
            label="Tonnes of food fortified"
            delay={200}
            glowColor="green"
            className="bg-emerald-50/80 backdrop-blur-md"
          />
          <StatCard 
            number="10"
            label="Tonnes daily production capacity"
            delay={300}
            glowColor="blue"
            className="bg-blue-50/80 backdrop-blur-md"
          />
          <StatCard 
            number="2015"
            label="Year established"
            delay={400}
            glowColor="purple"
            className="bg-purple-50/80 backdrop-blur-md"
          />
        </div>
        
        {/* All 3D visualizations in a row */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Molecule Model */}
          <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-md border border-white/40 h-80 hover:shadow-lg transition-all duration-300">
            <h3 className="text-lg font-semibold text-center mb-4 text-vitanium-600">Molecule Model</h3>
            <ScrollReveal animation="fade-in">
              <MoleculeModel className="h-64" autoRotate={true} />
            </ScrollReveal>
          </div>
          
          {/* Floating Pills */}
          <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-md border border-white/40 h-80 hover:shadow-lg transition-all duration-300">
            <h3 className="text-lg font-semibold text-center mb-4 text-vitanium-600">Fortification Elements</h3>
            <ScrollReveal animation="fade-in">
              <div className="h-64 relative">
                <FloatingPills className="h-full" />
              </div>
            </ScrollReveal>
          </div>
          
          {/* Product Showcase */}
          <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-md border border-white/40 h-80 hover:shadow-lg transition-all duration-300">
            <h3 className="text-lg font-semibold text-center mb-4 text-vitanium-600">Product Gallery</h3>
            <ScrollReveal animation="fade-in">
              <ProductShowcase className="h-64" />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyStatsSection;
