
import React from 'react';
import { Link } from 'react-router-dom';
import { Tablet, ArrowRight, CheckCircle } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Button } from '@/components/ui/button';

const PharmaceuticalGradePremix = () => {
  return (
    <div className="pt-20 pb-20">
      <div className="container-wide">
        <SectionHeading
          title="Pharmaceutical Grade Premixes"
          description="High-purity micronutrient premixes for medical foods, dietary supplements, and clinical nutrition applications."
        />
        
        {/* Hero Image */}
        <div className="mt-10 relative rounded-xl overflow-hidden">
          <img 
            src="/lovable-uploads/059e844d-fe4e-47f4-b1a3-104c6a541f6d.png" 
            alt="Pharmaceutical Grade Premixes" 
            className="w-full aspect-[21/9] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
            <div className="text-white p-8 md:p-12 max-w-2xl">
              <Tablet className="w-16 h-16 text-vitanium-400 mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Clinical-Grade Nutrition</h2>
              <p className="text-lg text-white/80">
                Our pharmaceutical grade premixes meet the highest standards of purity and quality for use in medical foods, dietary supplements, and clinical nutrition products.
              </p>
            </div>
          </div>
        </div>
        
        {/* Overview */}
        <div className="mt-16 max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="text-lg text-neutral-700 mb-6">
              Our pharmaceutical grade premixes are manufactured under stringent quality control conditions to meet the highest standards required for clinical nutrition applications. These premixes offer enhanced purity, bioavailability, and consistency for products that demand superior quality.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-lg text-neutral-700">
              At VitaniumX, we understand the critical nature of nutritional interventions in clinical settings. Our pharmaceutical grade premixes are developed with a focus on safety, efficacy, and compliance with pharmacopeial standards.
            </p>
          </ScrollReveal>
        </div>
        
        {/* Product Details */}
        <div className="mt-16">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-neutral-800 mb-12">Pharmaceutical Grade Premix Applications</h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal delay={100}>
              <div className="bg-white rounded-xl shadow-subtle border border-neutral-100 overflow-hidden p-6 hover:shadow-md transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4">Medical Food Premixes</h3>
                <p className="text-neutral-600 mb-6">
                  Our medical food premixes are designed for products formulated to address specific nutritional requirements associated with various disease states.
                </p>
                
                <h4 className="font-semibold text-lg mb-3">Key Features:</h4>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Disease-specific formulations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Enhanced bioavailability forms</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Stability in various delivery systems</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <div className="bg-white rounded-xl shadow-subtle border border-neutral-100 overflow-hidden p-6 hover:shadow-md transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4">Enteral Nutrition Premixes</h3>
                <p className="text-neutral-600 mb-6">
                  Our enteral nutrition premixes are formulated for tube feeding formulas, providing complete and balanced nutrition for patients unable to consume food orally.
                </p>
                
                <h4 className="font-semibold text-lg mb-3">Key Features:</h4>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Complete micronutrient profiles</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Solubility in liquid formulations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Specialized formulations for various conditions</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={300}>
              <div className="bg-white rounded-xl shadow-subtle border border-neutral-100 overflow-hidden p-6 hover:shadow-md transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4">Dietary Supplement Premixes</h3>
                <p className="text-neutral-600 mb-6">
                  Our dietary supplement premixes are designed for high-quality vitamin and mineral supplements, offering superior purity and potency.
                </p>
                
                <h4 className="font-semibold text-lg mb-3">Key Features:</h4>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Highest purity ingredients</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Targeted formulations for specific health benefits</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Extended stability profiles</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={400}>
              <div className="bg-white rounded-xl shadow-subtle border border-neutral-100 overflow-hidden p-6 hover:shadow-md transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4">Parenteral Nutrition Premixes</h3>
                <p className="text-neutral-600 mb-6">
                  Our parenteral nutrition premixes are designed for intravenous nutrition, meeting the highest standards of sterility and compatibility with IV solutions.
                </p>
                
                <h4 className="font-semibold text-lg mb-3">Key Features:</h4>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Sterile manufacturing conditions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Compatibility with IV solutions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Balanced trace element formulations</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
        
        {/* Quality Assurance */}
        <div className="mt-20">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-neutral-800 mb-8">Quality Assurance</h2>
          </ScrollReveal>
          
          <div className="bg-white p-8 rounded-xl shadow-subtle border border-neutral-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ScrollReveal delay={100}>
                <div>
                  <h3 className="text-xl font-bold mb-4">GMP Compliance</h3>
                  <p className="text-neutral-600">
                    Our pharmaceutical grade premixes are manufactured in facilities that comply with Good Manufacturing Practices (GMP) for pharmaceuticals.
                  </p>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={200}>
                <div>
                  <h3 className="text-xl font-bold mb-4">Analytical Testing</h3>
                  <p className="text-neutral-600">
                    We employ advanced analytical methods for comprehensive testing of our pharmaceutical grade premixes, ensuring potency and purity.
                  </p>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={300}>
                <div>
                  <h3 className="text-xl font-bold mb-4">Documentation</h3>
                  <p className="text-neutral-600">
                    We provide comprehensive documentation for our pharmaceutical grade premixes, including certificates of analysis and stability data.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="mt-16">
          <div className="bg-navy-900 text-white py-12 px-8 rounded-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <ScrollReveal>
                <div>
                  <h2 className="text-2xl font-bold mb-4">Explore Our Pharmaceutical Grade Solutions</h2>
                  <p className="text-neutral-300 mb-6">
                    Contact our team to discuss how our pharmaceutical grade premixes can meet the stringent requirements of your clinical nutrition or dietary supplement applications.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link to="/get-quote" className="btn-primary bg-vitanium-500 hover:bg-vitanium-600">
                      Get a Quote
                    </Link>
                    <Link to="/contact" className="btn-secondary bg-transparent text-white border-white hover:bg-white/10">
                      Contact Our Team
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={100}>
                <div className="bg-navy-800 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Our Commitments</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-400 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-neutral-300">Highest quality raw materials</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-400 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-neutral-300">Stringent quality control procedures</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-400 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-neutral-300">Full traceability from raw material to finished product</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-400 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-neutral-300">Regulatory and technical support</span>
                    </li>
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PharmaceuticalGradePremix;
