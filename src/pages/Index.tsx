
import React from 'react';
import NutrientParticles from '@/components/3d/NutrientParticles';
import HeroSection from '@/components/sections/HeroSection';
import CertificationBanner from '@/components/sections/CertificationBanner';
import KeyStatsSection from '@/components/sections/KeyStatsSection';
import QualityAssuranceSection from '@/components/sections/QualityAssuranceSection';
import SolutionsSection from '@/components/sections/SolutionsSection';
import CertificationsSection from '@/components/sections/CertificationsSection';
import InnovationSection from '@/components/sections/InnovationSection';
import CtaSection from '@/components/sections/CtaSection';
import TrustedPartnersSection from '@/components/sections/TrustedPartnersSection';

const Index = () => {
  return (
    <div className="pt-0">
      {/* NutrientParticles in background */}
      <NutrientParticles density="low" />

      {/* Hero Section */}
      <HeroSection
        title="Precision Fortification for a Healthier World"
        subtitle="Solution Tailored to Your Needs"
        description="At VitaniumX, we're at the forefront of micronutrient premix manufacturing, dedicated to combating hidden hunger and enhancing nutrition across India and beyond."
        primaryCta={{
          text: "Get a Quote",
          href: "/get-quote"
        }}
        secondaryCta={{
          text: "Explore Our Expertise",
          href: "/expertise"
        }}
        imageSrc="/lovable-uploads/56f3fb63-53ab-4683-97e9-0203881db931.png"
      />

      {/* Certification Banner
      <CertificationBanner /> */}

      {/* Client Carousel (Simplified) */}
      <TrustedPartnersSection />
      
      {/* Key Stats Section */}
      <KeyStatsSection />

      {/* Quality Assurance Section */}
      <QualityAssuranceSection />

      {/* Our Solutions Section */}
      <SolutionsSection />

      {/* Certification Section
      <CertificationsSection /> */}

      {/* Innovation Section */}
      <InnovationSection />

      {/* CTA Section
      <CtaSection /> */}


    </div>
  );
};

export default Index;
