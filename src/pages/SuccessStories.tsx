
import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';

const SuccessStories = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="container-wide">
        <SectionHeading
          subtitle="Success Stories"
          title="Making a Difference"
          description="Discover how our micronutrient premixes are helping organizations combat malnutrition and improve public health."
        />
        
        <div className="mt-16 max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="text-lg text-neutral-700 mb-6">
              At VitaniumX, we take pride in the positive impact our products have on communities across India and beyond. Our success stories showcase how our partnerships with government programs, food manufacturers, and other organizations are helping to address micronutrient deficiencies and improve public health.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-lg text-neutral-700">
              From large-scale government initiatives to innovative product developments with food manufacturers, our success stories highlight the real-world applications and benefits of our micronutrient premixes.
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

export default SuccessStories;
