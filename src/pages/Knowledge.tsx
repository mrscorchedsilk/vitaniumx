
import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';

const Knowledge = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="container-wide">
        <SectionHeading
          subtitle="Knowledge Hub"
          title="Insights & Resources"
          description="Stay informed with the latest research, trends, and insights in food fortification and nutrition science."
        />
        
        <div className="mt-16 max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="text-lg text-neutral-700 mb-6">
              Our Knowledge Hub is designed to be a valuable resource for industry professionals, researchers, and anyone interested in food fortification and nutrition. Here, you'll find informative articles, white papers, and tools to help you stay updated on the latest developments in our field.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-lg text-neutral-700">
              From nutrition science and industry insights to regulatory updates and technological innovations, our Knowledge Hub covers a wide range of topics relevant to our work and the broader field of nutrition and food fortification.
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

export default Knowledge;
