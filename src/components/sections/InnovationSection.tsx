
import React from 'react';
import { Beaker, TestTube, FlaskConical } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import FloatingVitaminSpheres from '@/components/3d/FloatingVitaminSpheres';

interface InnovationSectionProps {
  webGLSupported?: boolean;
}

const InnovationSection = ({ webGLSupported = true }: InnovationSectionProps) => {
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
              {webGLSupported ? (
                <div className="rounded-xl overflow-hidden bg-gradient-to-r from-neutral-50 to-vitanium-50 p-4 shadow-subtle border border-neutral-100">
                  <FloatingVitaminSpheres height={400} interactive={true} />
                </div>
              ) : (
                <div className="rounded-xl overflow-hidden bg-gradient-to-r from-neutral-50 to-vitanium-50 p-4 shadow-subtle border border-neutral-100">
                  <div className="flex items-center justify-center h-80">
                    <div className="text-center p-6">
                      <div className="flex justify-center">
                        <FlaskConical className="h-16 w-16 text-vitanium-600 mb-4" />
                      </div>
                      <h3 className="text-lg font-medium text-vitanium-700">Innovation in Nutrition</h3>
                      <p className="mt-2 text-neutral-600">Exploring new approaches to micronutrient delivery and stability.</p>
                    </div>
                  </div>
                </div>
              )}
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationSection;
