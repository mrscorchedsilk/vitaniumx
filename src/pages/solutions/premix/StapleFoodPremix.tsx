
import React from 'react';
import { Link } from 'react-router-dom';
import { Wheat, ArrowRight, CheckCircle } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Button } from '@/components/ui/button';
import FoodImageGallery from '@/components/ui/FoodImageGallery';

const StapleFoodPremix = () => {
  // Sample gallery images for staple food products
  const galleryImages = [
    {
      src: "/lovable-uploads/154cc4d2-fd89-483f-8eb7-21939f1f9c8c.png",
      alt: "Fortified Rice"
    },
    {
      src: "/lovable-uploads/5382abee-9878-4565-8122-b86d9255baf0.png",
      alt: "Fortified Wheat Flour"
    },
    {
      src: "/lovable-uploads/59b4fed9-ae2f-4d7d-9b79-9a3f7ccebcc1.png",
      alt: "Fortified Salt"
    },
    {
      src: "/lovable-uploads/6e61901d-0db2-418b-b827-60107d7b2a44.png",
      alt: "Fortified Edible Oil"
    },
    {
      src: "/lovable-uploads/2d24b59b-1dc0-4c14-9736-2efaa2ea875e.png",
      alt: "Fortified Corn Flour"
    },
    {
      src: "/lovable-uploads/671c36e8-6268-44ca-b9e1-1793ee35ba8e.png",
      alt: "Fortified Legumes"
    }
  ];

  return (
    <div className="pt-20 pb-20">
      <div className="container-wide">
        <SectionHeading
          title="Staple Food Premixes"
          description="Comprehensive micronutrient solutions for fortifying staple foods to address population-wide nutritional deficiencies."
        />
        
        {/* Hero Image */}
        <div className="mt-10 relative rounded-xl overflow-hidden">
          <img 
            src="/lovable-uploads/10da3b95-043b-4c40-a27d-55b29dfd59e0.png" 
            alt="Staple Food Premixes" 
            className="w-full aspect-[21/9] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
            <div className="text-white p-8 md:p-12 max-w-2xl">
              <Wheat className="w-16 h-16 text-vitanium-400 mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Fortifying the Foundation</h2>
              <p className="text-lg text-white/80">
                Our staple food premixes are designed to address micronutrient deficiencies at a population level through fortification of everyday foods.
              </p>
            </div>
          </div>
        </div>
        
        {/* Overview */}
        <div className="mt-16 max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="text-lg text-neutral-700 mb-6">
              VitaniumX's staple food premixes are specifically formulated for large-scale fortification programs targeting commonly consumed foods like rice, wheat flour, maize, salt, and cooking oil. These premixes help governments and food processors address widespread nutritional deficiencies efficiently and cost-effectively.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-lg text-neutral-700">
              Our staple food premixes are designed for easy integration into existing food processing systems, ensuring minimal disruption to production while maximizing nutritional impact across entire populations.
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
            <h2 className="text-3xl font-bold text-neutral-800 mb-12">Staple Food Premix Products</h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal delay={100}>
              <div className="bg-white rounded-xl shadow-subtle border border-neutral-100 overflow-hidden p-6 hover:shadow-md transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4">Cereal Grain Premixes</h3>
                <p className="text-neutral-600 mb-6">
                  Our premixes for rice, wheat flour, and maize flour contain essential vitamins and minerals tailored to regional nutritional needs.
                </p>
                
                <h4 className="font-semibold text-lg mb-3">Key Features:</h4>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Heat stable during cooking processes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Minimal impact on taste and appearance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Customizable to local deficiency profiles</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <div className="bg-white rounded-xl shadow-subtle border border-neutral-100 overflow-hidden p-6 hover:shadow-md transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4">Condiment Premixes</h3>
                <p className="text-neutral-600 mb-6">
                  Our premixes for salt, bouillon, and soy sauce provide efficient delivery of iodine, iron, and other micronutrients.
                </p>
                
                <h4 className="font-semibold text-lg mb-3">Key Features:</h4>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Optimized for uniform distribution</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Enhanced stability in challenging environments</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Compatible with existing production processes</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={300}>
              <div className="bg-white rounded-xl shadow-subtle border border-neutral-100 overflow-hidden p-6 hover:shadow-md transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4">Cooking Oil Premixes</h3>
                <p className="text-neutral-600 mb-6">
                  Our oil-soluble vitamin premixes for vegetable oils deliver vitamins A, D, and E efficiently through a common dietary vehicle.
                </p>
                
                <h4 className="font-semibold text-lg mb-3">Key Features:</h4>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Protected against oxidation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Stable during cooking processes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Easy to integrate into refining processes</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={400}>
              <div className="bg-white rounded-xl shadow-subtle border border-neutral-100 overflow-hidden p-6 hover:shadow-md transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4">Legume and Pulse Premixes</h3>
                <p className="text-neutral-600 mb-6">
                  Our premixes for legumes and pulses complement the naturally high protein content with essential micronutrients.
                </p>
                
                <h4 className="font-semibold text-lg mb-3">Key Features:</h4>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Compatible with dried and processed legumes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Designed for long shelf life</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Supports traditional food consumption patterns</span>
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
                  <h2 className="text-2xl font-bold mb-4">Partner with Us for Population Impact</h2>
                  <p className="text-neutral-300 mb-6">
                    Contact our team to discuss how our staple food premixes can help you implement effective food fortification programs that improve nutritional outcomes at scale.
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
                  <h3 className="text-xl font-semibold mb-4">Program Support Services</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-400 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-neutral-300">Technical support for fortification equipment</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-400 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-neutral-300">Training for quality assurance personnel</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-400 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-neutral-300">Regulatory compliance guidance</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-400 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-neutral-300">Monitoring and evaluation frameworks</span>
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

export default StapleFoodPremix;
