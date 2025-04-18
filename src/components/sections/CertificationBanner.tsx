
import React from 'react';
import FloatingCertificationLogo from '@/components/ui/FloatingCertificationLogo';

const CertificationBanner = () => {
  return (
    <section className="py-16 bg-neutral-50 border-y border-neutral-100">
      <div className="container-wide">
        <div className="flex flex-wrap justify-center items-center gap-12 mb-6">
          <div className="text-2xl font-semibold text-neutral-700">Certified By:</div>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-12">
          <FloatingCertificationLogo 
            src="/lovable-uploads/gmp.png" 
            alt="GMP Certification" 
            delay={0.2}
            size="lg"
          />
          <FloatingCertificationLogo 
            src="/lovable-uploads/b7e9e76c-af31-4725-a211-4ec5d4ed72ff.png" 
            alt="ISO 9001:2015 Certification" 
            delay={0.4}
            size="lg"
          />
          <FloatingCertificationLogo 
            src="/lovable-uploads/2a854855-bbe3-4120-b6e7-becc25616bb0.png" 
            alt="FSSAI Certification" 
            delay={0.8}
            size="lg"
          />
          <FloatingCertificationLogo 
            src="/lovable-uploads/fssc_22000-logo.png" 
            alt="FSSC 22000 Certification" 
            delay={0.6}
            size="lg"
          />
          <FloatingCertificationLogo 
            src="/lovable-uploads/iso-22000-2018-.png" 
            alt="ISO 22000:2018 Certification" 
            delay={1.0}
            size="lg"
          />
        </div>
      </div>
    </section>
  );
};

export default CertificationBanner;
