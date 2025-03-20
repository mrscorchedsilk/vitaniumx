
import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';

const Solutions = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="container-wide">
        <SectionHeading
          subtitle="Solutions & Products"
          title="Comprehensive Fortification Solutions"
          description="We offer a wide range of micronutrient premixes designed for various applications across the food industry."
        />
        
        <div className="mt-16 max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="text-lg text-neutral-700 mb-6">
              VitaniumX specializes in creating high-quality micronutrient premixes for staple foods, processed foods, therapeutic applications, and more. Our solutions are designed to enhance the nutritional value of various food products while maintaining their taste, texture, and shelf life.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-lg text-neutral-700">
              Each of our premixes is formulated with precision, using the finest ingredients and advanced manufacturing processes to ensure optimal bioavailability and stability. We work closely with our clients to develop customized solutions that meet their specific requirements and adhere to regulatory standards.
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

export default Solutions;
