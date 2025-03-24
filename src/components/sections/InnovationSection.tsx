
import React from 'react';
import { Beaker, TestTube, FlaskConical } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const InnovationSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <ScrollReveal>
              <span className="inline-block text-sm font-semibold uppercase tracking-wider text-vitanium-600 mb-4">
                Innovation Lab
              </span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="heading-lg mb-6">
                Research & Development Excellence
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-lg text-neutral-700 mb-6">
                Our dedicated R&D team continually explores new formulations, technologies, and methods to enhance the efficacy and stability of our micronutrient premixes.
              </p>
            </ScrollReveal>
            <div className="mt-8 space-y-4">
              <ScrollReveal delay={300}>
                <div className="flex items-start">
                  <Beaker className="h-6 w-6 text-vitanium-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Advanced Formulations</h3>
                    <p className="text-neutral-600">Developing stable, bioavailable nutrient compositions.</p>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={400}>
                <div className="flex items-start">
                  <TestTube className="h-6 w-6 text-vitanium-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Custom Solutions</h3>
                    <p className="text-neutral-600">Creating tailored premixes for specific applications and populations.</p>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={500}>
                <div className="flex items-start">
                  <FlaskConical className="h-6 w-6 text-vitanium-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Continuous Improvement</h3>
                    <p className="text-neutral-600">Ongoing research to enhance efficacy and production methods.</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={600}>
              <div className="mt-10">
                <Button asChild>
                  <Link to="/innovation">
                    Explore Our Innovation Lab
                  </Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
          <div className="order-1 lg:order-2">
            <ScrollReveal animation="slide-in-right">
              <div className="bg-white p-8 rounded-xl shadow-elevated border border-neutral-100 h-80 flex items-center justify-center">
                <FlaskConical className="h-24 w-24 text-vitanium-600" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationSection;
