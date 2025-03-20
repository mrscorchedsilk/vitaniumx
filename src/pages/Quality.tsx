
import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';

const Quality = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="container-wide">
        <SectionHeading
          subtitle="Quality Assurance"
          title="Commitment to Excellence"
          description="Our advanced quality control systems ensure that every batch of our micronutrient premixes meets the highest standards of purity, potency, and safety."
        />
        
        <div className="mt-16 max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="text-lg text-neutral-700 mb-6">
              Quality is at the heart of everything we do at VitaniumX. Our state-of-the-art laboratory is equipped with advanced testing equipment such as HPLC, ICP-OES, AAS, and more, enabling us to conduct comprehensive analyses of our products.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-lg text-neutral-700">
              Our quality assurance process encompasses stringent raw material selection, rigorous batch testing, and comprehensive documentation. We adhere to FSSAI regulations and international standards, and regularly conduct internal and external audits to ensure compliance.
            </p>
          </ScrollReveal>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-neutral-500">Full page content coming soon...</p>
        </div>
      </div>
    </div>
  );
};

export default Quality;
