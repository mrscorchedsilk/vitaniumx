
import React from 'react';
import { Award, Shield } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import CertificationCard from '@/components/ui/CertificationCard';

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
          <CertificationCard
            name="GMP"
            description="Good Manufacturing Practices certification, ensuring consistent quality in production."
            icon={<Award className="h-6 w-6" />}
            delay={100}
            imageSrc="/lovable-uploads/31315a0c-68fe-442c-9d74-dd8c22a5c0d3.png"
          />
          <CertificationCard
            name="ISO 9001:2015"
            description="International standard for quality management systems."
            icon={<Shield className="h-6 w-6" />}
            delay={200}
            imageSrc="/lovable-uploads/b7e9e76c-af31-4725-a211-4ec5d4ed72ff.png"
          />
          <CertificationCard
            name="FSSC 22000"
            description="Food Safety System Certification, demonstrating robust food safety management."
            icon={<Shield className="h-6 w-6" />}
            delay={300}
            imageSrc="/lovable-uploads/e4aab3cf-b528-4ac6-bf8d-039af06a24e9.png"
          />
          <CertificationCard
            name="FSSAI"
            description="Food Safety and Standards Authority of India certification for food safety compliance."
            icon={<Shield className="h-6 w-6" />}
            delay={400}
            imageSrc="/lovable-uploads/2a854855-bbe3-4120-b6e7-becc25616bb0.png"
          />
          <CertificationCard
            name="ISO 22000:2018"
            description="International standard for food safety management systems."
            icon={<Shield className="h-6 w-6" />}
            delay={500}
            imageSrc="/lovable-uploads/d808de9e-13d6-4730-a723-30fc5e1e036e.png"
          />
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
