
import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '@/components/ui/ScrollReveal';
import NutrientParticles from '@/components/3d/NutrientParticles';

const CtaSection = () => {
  return (
    <section className="py-20 pb-10 bg-navy-900 text-white relative overflow-hidden">
      {/* Add subtle particle background */}
      <div className="absolute inset-0 opacity-40">
        <NutrientParticles density="high" color="multi" />
      </div>
      
      <div className="container-wide relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="heading-lg mb-6">Ready to Transform Your Products?</h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-xl text-neutral-300 mb-8">
              Partner with VitaniumX for high-quality micronutrient premixes that enhance your products and support public health.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link to="/get-quote" className="btn-primary bg-vitanium-500 hover:bg-vitanium-600">
                  Get a Quote
                  </Link>
                  <Link to="/contact" className="btn-secondary bg-transparent text-white border-white hover:bg-white/10">
                  Contact Our Team
                  </Link>
                </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
