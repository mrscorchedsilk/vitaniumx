
import React from 'react';
import { Link } from 'react-router-dom';
import { PlusCircle, ArrowRight, CheckCircle } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Button } from '@/components/ui/button';
import FoodImageGallery from '@/components/ui/FoodImageGallery';

const PharmaceuticalGradePremix = () => {
  // Sample gallery images for pharmaceutical grade applications
  const galleryImages = [
    {
      src: "/lovable-uploads/43d2713f-400d-4115-8098-ee2b38224065.png",
      alt: "Pharmaceutical Grade Raw Materials"
    },
    {
      src: "/lovable-uploads/dc73f31d-4223-4d13-a641-5089713fd5d0.png",
      alt: "Multivitamin Tablet Production"
    },
    {
      src: "/lovable-uploads/c3139f1c-6d1a-4dbc-bcff-98d59759fd73.png",
      alt: "Specialized Medical Nutrition"
    },
    {
      src: "/lovable-uploads/8d759c8c-d287-4991-9717-a30ccaf79af0.png",
      alt: "Infant Formula Applications"
    },
    {
      src: "/lovable-uploads/0a0f90ca-61ce-4de1-9cbe-0f33664555f9.png",
      alt: "Clean Room Manufacturing"
    },
    {
      src: "/lovable-uploads/cb84f353-f35c-4368-aeb6-69773b4f27a3.png",
      alt: "Quality Control Testing"
    }
  ];

  return (
    <div className="pt-20 pb-20">
      <div className="container-wide">
        <SectionHeading
          title="Pharmaceutical Grade Premixes"
          description="Ultra-pure micronutrient formulations meeting the highest regulatory standards for pharmaceutical and medical nutrition applications."
        />
        
        {/* Hero Image */}
        <div className="mt-10 relative rounded-xl overflow-hidden">
          <img 
            src="/lovable-uploads/b1791aa1-89e1-4da5-bb51-8e8e82c03554.png" 
            alt="Pharmaceutical Grade Premixes" 
            className="w-full aspect-[21/9] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
            <div className="text-white p-8 md:p-12 max-w-2xl">
              <PlusCircle className="w-16 h-16 text-vitanium-400 mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Medical-Grade Nutrition</h2>
              <p className="text-lg text-white/80">
                Our pharmaceutical grade premixes meet the highest purity and quality standards for medical applications and sensitive populations.
              </p>
            </div>
          </div>
        </div>
        
        {/* Overview */}
        <div className="mt-16 max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="text-lg text-neutral-700 mb-6">
              VitaniumX's pharmaceutical grade premixes are manufactured in GMP-certified clean room facilities, using the highest purity raw materials and comprehensive quality assurance protocols. These premixes are designed for applications where absolute reliability, consistency, and safety are paramount.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-lg text-neutral-700">
              Our pharmaceutical grade formulations undergo extensive testing for potency, uniformity, stability, and contaminants, ensuring they meet or exceed the requirements of global pharmacopoeias and regulatory authorities.
            </p>
          </ScrollReveal>
        </div>
        
        {/* Image Gallery */}
        <div className="mt-16">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-neutral-800 mb-8">Applications Gallery</h2>
          </ScrollReveal>
          <ScrollReveal>
            <FoodImageGallery 
              images={galleryImages}
              columns={3}
              hoverEffect="both"
              imageHeight="square"
              captionStyle="hover"
              className="mb-12"
            />
          </ScrollReveal>
        </div>
        
        {/* Product Details */}
        <div className="mt-10">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-neutral-800 mb-12">Pharmaceutical Grade Premix Products</h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal delay={100}>
              <div className="bg-white rounded-xl shadow-subtle border border-neutral-100 overflow-hidden p-6 hover:shadow-md transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4">Dietary Supplement Premixes</h3>
                <p className="text-neutral-600 mb-6">
                  Complete nutrient formulations for tablets, capsules, and powders, meeting pharmaceutical manufacturing requirements.
                </p>
                
                <h4 className="font-semibold text-lg mb-3">Key Features:</h4>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Meets USP, EP, and JP standards</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Free from common allergens</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Superior flowability and compressibility</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <div className="bg-white rounded-xl shadow-subtle border border-neutral-100 overflow-hidden p-6 hover:shadow-md transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4">Infant Formula Premixes</h3>
                <p className="text-neutral-600 mb-6">
                  Ultra-pure nutrient blends meeting the strict requirements for infant and follow-on formulas.
                </p>
                
                <h4 className="font-semibold text-lg mb-3">Key Features:</h4>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Compliant with Codex Alimentarius standards</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Extensively tested for contaminants</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Precise nutrient ratios for infant development</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={300}>
              <div className="bg-white rounded-xl shadow-subtle border border-neutral-100 overflow-hidden p-6 hover:shadow-md transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4">Clinical Nutrition Premixes</h3>
                <p className="text-neutral-600 mb-6">
                  Specialized formulations for enteral and parenteral nutrition products used in clinical settings.
                </p>
                
                <h4 className="font-semibold text-lg mb-3">Key Features:</h4>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Highest purity trace elements and vitamins</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Complete documentation and traceability</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Stability in liquid medical nutrition</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={400}>
              <div className="bg-white rounded-xl shadow-subtle border border-neutral-100 overflow-hidden p-6 hover:shadow-md transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4">Medical Food Premixes</h3>
                <p className="text-neutral-600 mb-6">
                  Specialized nutrient blends for products formulated for specific medical conditions and dietary management.
                </p>
                
                <h4 className="font-semibold text-lg mb-3">Key Features:</h4>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Condition-specific formulations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Rigorous stability testing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Full regulatory documentation support</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="mt-16">
          <div className="bg-navy-900 text-white py-12 px-8 rounded-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <ScrollReveal>
                <div>
                  <h2 className="text-2xl font-bold mb-4">Partner for Excellence</h2>
                  <p className="text-neutral-300 mb-6">
                    Contact our team to discuss how our pharmaceutical grade premixes can help you develop high-quality medical nutrition and pharmaceutical products.
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
                  <h3 className="text-xl font-semibold mb-4">Quality Assurance</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-400 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-neutral-300">Clean room manufacturing environment</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-400 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-neutral-300">Certificate of Analysis for every batch</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-400 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-neutral-300">Stability data and complete documentation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-400 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-neutral-300">Regulatory support for global markets</span>
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
