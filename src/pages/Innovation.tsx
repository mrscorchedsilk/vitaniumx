
import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';

const Innovation = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="container-wide">
        <SectionHeading
          subtitle="Innovation Lab"
          title="Pioneering Nutritional Solutions"
          description="Our dedicated R&D team continuously explores new technologies and formulations to enhance the efficacy and stability of our micronutrient premixes."
        />
        
        <div className="mt-16 max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="text-lg text-neutral-700 mb-6">
              Innovation is a core value at VitaniumX. Our research and development efforts focus on creating cutting-edge formulations that address evolving nutritional needs and challenges in food fortification.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-lg text-neutral-700">
              From developing stable, bioavailable nutrient compositions to creating custom solutions for specific applications, our innovation lab is constantly working to push the boundaries of what's possible in micronutrient fortification.
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

export default Innovation;
