
import React from 'react';
import { Award, Shield } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import FloatingCertificationLogo from '@/components/ui/FloatingCertificationLogo';

const CertificationsSection = () => {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="container-wide">
        <SectionHeading
          subtitle="Our Certifications"
          title="Industry-Leading Quality Standards"
          description="Our commitment to quality is backed by multiple certifications, ensuring our products meet the highest standards of safety and efficacy."
        />
        
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ScrollReveal delay={100}>
            <div className="bg-gradient-to-b from-white to-green-50 p-6 rounded-lg shadow-subtle border border-neutral-100 h-full hover:shadow-md transition-shadow duration-300">
              <div className="flex flex-col items-center mb-6">
                <div className="mb-4 h-24 w-24 flex items-center justify-center">
                  <FloatingCertificationLogo
                    src="/lovable-uploads/31315a0c-68fe-442c-9d74-dd8c22a5c0d3.png"
                    alt="GMP"
                    delay={0.2}
                    size="lg"
                  />
                </div>
                <h3 className="text-xl font-semibold">GMP</h3>
              </div>
              <p className="text-neutral-600 mb-4">
                Good Manufacturing Practices certification, ensuring consistent quality in production.
              </p>
              <div className="text-sm text-neutral-500">
                Key aspects: Production process controls, facility maintenance, personnel training
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <div className="bg-gradient-to-b from-white to-blue-50 p-6 rounded-lg shadow-subtle border border-neutral-100 h-full hover:shadow-md transition-shadow duration-300">
              <div className="flex flex-col items-center mb-6">
                <div className="mb-4 h-24 w-24 flex items-center justify-center">
                  <FloatingCertificationLogo
                    src="/lovable-uploads/b7e9e76c-af31-4725-a211-4ec5d4ed72ff.png"
                    alt="ISO 9001:2015"
                    delay={0.4}
                    size="lg"
                  />
                </div>
                <h3 className="text-xl font-semibold">ISO 9001:2015</h3>
              </div>
              <p className="text-neutral-600 mb-4">
                International standard for quality management systems, demonstrating our commitment to consistently meeting customer requirements.
              </p>
              <div className="text-sm text-neutral-500">
                Key aspects: Customer focus, process approach, continuous improvement
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={300}>
            <div className="bg-gradient-to-b from-white to-amber-50 p-6 rounded-lg shadow-subtle border border-neutral-100 h-full hover:shadow-md transition-shadow duration-300">
              <div className="flex flex-col items-center mb-6">
                <div className="mb-4 h-24 w-24 flex items-center justify-center">
                  <FloatingCertificationLogo
                    src="/lovable-uploads/e4aab3cf-b528-4ac6-bf8d-039af06a24e9.png"
                    alt="FSSC 22000"
                    delay={0.6}
                    size="lg"
                  />
                </div>
                <h3 className="text-xl font-semibold">FSSC 22000</h3>
              </div>
              <p className="text-neutral-600 mb-4">
                Food Safety System Certification provides a framework for effectively managing food safety responsibilities.
              </p>
              <div className="text-sm text-neutral-500">
                Key aspects: HACCP principles, food defense, allergen management
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={400}>
            <div className="bg-gradient-to-b from-white to-orange-50 p-6 rounded-lg shadow-subtle border border-neutral-100 h-full hover:shadow-md transition-shadow duration-300">
              <div className="flex flex-col items-center mb-6">
                <div className="mb-4 h-24 w-24 flex items-center justify-center">
                  <FloatingCertificationLogo
                    src="/lovable-uploads/2a854855-bbe3-4120-b6e7-becc25616bb0.png"
                    alt="FSSAI"
                    delay={0.8}
                    size="lg"
                  />
                </div>
                <h3 className="text-xl font-semibold">FSSAI</h3>
              </div>
              <p className="text-neutral-600 mb-4">
                Food Safety and Standards Authority of India certification ensures compliance with Indian food safety regulations.
              </p>
              <div className="text-sm text-neutral-500">
                Key aspects: Compliance with Indian standards, licensing, regulatory requirements
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={500}>
            <div className="bg-gradient-to-b from-white to-purple-50 p-6 rounded-lg shadow-subtle border border-neutral-100 h-full hover:shadow-md transition-shadow duration-300">
              <div className="flex flex-col items-center mb-6">
                <div className="mb-4 h-24 w-24 flex items-center justify-center">
                  <FloatingCertificationLogo
                    src="/lovable-uploads/d808de9e-13d6-4730-a723-30fc5e1e036e.png"
                    alt="ISO 22000:2018"
                    delay={1.0}
                    size="lg"
                  />
                </div>
                <h3 className="text-xl font-semibold">ISO 22000:2018</h3>
              </div>
              <p className="text-neutral-600 mb-4">
                International standard for food safety management systems, ensuring the safety of the global food supply chain.
              </p>
              <div className="text-sm text-neutral-500">
                Key aspects: Interactive communication, system management, prerequisite programs
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
