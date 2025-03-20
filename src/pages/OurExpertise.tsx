
import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';

const OurExpertise = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="container-wide">
        <SectionHeading
          subtitle="Our Expertise"
          title="Leading Innovation in Micronutrient Fortification"
          description="Established in 2015, VitaniumX has grown to become a trusted leader in the development and manufacturing of high-quality micronutrient premixes."
        />
        
        <div className="mt-16 max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="text-lg text-neutral-700 mb-6">
              At VitaniumX, we combine scientific expertise with advanced technology to develop premium micronutrient premixes that effectively address hidden hunger and malnutrition. Our dedicated team of nutritionists and food scientists work tirelessly to create customized solutions that meet the specific needs of our clients and the communities they serve.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-lg text-neutral-700">
              With over 573 million fortified meals delivered between 2020 and 2024, our impact on public health is substantial and growing. We continue to expand our capabilities and refine our formulations to stay at the forefront of nutritional science and food fortification technology.
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

export default OurExpertise;
