
import React from 'react';
import StatCard from '@/components/ui/StatCard';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import MoleculeModel from '@/components/3d/MoleculeModel';
import FloatingPills from '@/components/3d/FloatingPills';
import ProductShowcase from '@/components/3d/ProductShowcase';

const KeyStatsSection = () => {
  return (
    <section className="py-20 bg-white relative">
      <div className="container-wide">
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
          />
          <StatCard 
            number="114,736"
            label="Tonnes of food fortified"
            delay={200}
          />
          <StatCard 
            number="10"
            label="Tonnes daily production capacity"
            delay={300}
          />
          <StatCard 
            number="2015"
            label="Year established"
            delay={400}
          />
        </div>
        
        {/* All 3D visualizations in a row */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Molecule Model */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-neutral-100 h-80">
            <h3 className="text-lg font-semibold text-center mb-4 text-vitanium-600">Molecule Model</h3>
            <ScrollReveal animation="fade-in">
              <MoleculeModel className="h-64" autoRotate={true} />
            </ScrollReveal>
          </div>
          
          {/* Floating Pills */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-neutral-100 h-80">
            <h3 className="text-lg font-semibold text-center mb-4 text-vitanium-600">Fortification Elements</h3>
            <ScrollReveal animation="fade-in">
              <div className="h-64 relative">
                <FloatingPills className="h-full" />
              </div>
            </ScrollReveal>
          </div>
          
          {/* Product Showcase */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-neutral-100 h-80">
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
