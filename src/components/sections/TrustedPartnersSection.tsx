import React from 'react';
import PartnersCarousel from '@/components/ui/PartnersCarousel';
import SectionHeading from '@/components/ui/SectionHeading';
import { motion } from 'framer-motion';

const TrustedPartnersSection = () => {
  const partnerLogos = [
    {
      src: "/lovable-uploads/85356290-fc2e-4cb7-9c40-3ade3071c5dd.png",
      alt: "M.P. AGRO",
    },
    {
      src: "/lovable-uploads/b0b63c5c-00a5-4bba-a608-966326136286.png",
      alt: "SHREE LALJI ENERGY FOODS PVT LTD",
    },
    {
      src: "/lovable-uploads/7554c3c6-5fda-4d7b-b2e3-6d81aa139bb0.png",
      alt: "SURUCHI FOODS",
    },
    {
      src: "/lovable-uploads/07bc8ea7-fa53-405e-986f-b2e132be1607.png",
      alt: "Chandigarh Sweets",
    },
    {
      src: "/lovable-uploads/937ec7e8-d3c0-403b-a98f-e18640b03f56.png",
      alt: "Devesh Foods",
    },
    {
      src: "/lovable-uploads/1cb06548-367b-451e-b18e-0fb4cf05f88b.png",
      alt: "interlink FOODS",
    },
    {
      src: "/lovable-uploads/46be1a0a-6a86-4c7b-8cb6-70c71d5e2db4.png",
      alt: "Continental Milkose",
    },
    {
      src: "/lovable-uploads/f9d01b47-18b0-4126-b7ca-3e5bdf763620.png",
      alt: "RAUSHEENA GROUP",
    },
    {
      src: "/lovable-uploads/735b2b7f-face-4ea8-87c0-1d1db3287a2d.png",
      alt: "SPR FOODS",
    },
    {
      src: "/lovable-uploads/haryana_gov_logo.png",
      alt: "Government of Haryana",
    }
  ];

  return (
    <section className="py-1 pb-16 relative overflow-hidden">
      {/* Semi-transparent background */}
      <div className="absolute inset-0 bg-gradient-to-br from-vitanium-50/30 via-emerald-50/30 to-vitanium-50/30 backdrop-blur-sm z-0"></div>
      
      {/* Optional decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10 z-0">
        <div className="absolute -right-32 -bottom-32 w-96 h-96 rounded-full bg-vitanium-300/30"></div>
        <div className="absolute -left-24 -top-24 w-80 h-80 rounded-full bg-amber-200/30"></div>
      </div>
      
      <div className="container-wide relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading 
            title="Trusted Partners" 
            description="We're proud to collaborate with leading organizations across the food industry to enhance nutrition worldwide."
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="px-4"
        >
          <PartnersCarousel logos={partnerLogos} />
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedPartnersSection;
