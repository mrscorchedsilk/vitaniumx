
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
    }
  ];

  return (
    <section className="py-12 bg-neutral-50">
      <div className="container-wide">
        <motion.div 
          className="text-center mb-10"
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
          className="py-8" // Added more padding for better visual spacing
        >
          <PartnersCarousel logos={partnerLogos} className="py-4" />
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedPartnersSection;
