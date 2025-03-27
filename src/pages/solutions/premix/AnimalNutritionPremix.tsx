
import React from 'react';
import { Link } from 'react-router-dom';
import { Fish, ArrowRight, CheckCircle } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Button } from '@/components/ui/button';
import FoodImageGallery from '@/components/ui/FoodImageGallery';

const AnimalNutritionPremix = () => {
  // Sample gallery images for animal nutrition applications
  const galleryImages = [
    {
      src: "/lovable-uploads/5d1395f9-6745-44ee-a3ab-e906f439b4ab.png",
      alt: "Livestock Feed Supplements"
    },
    {
      src: "/lovable-uploads/5642c1e5-ab13-474e-8553-562dd7c66826.png",
      alt: "Poultry Feed Applications"
    },
    {
      src: "/lovable-uploads/df1ac649-a94b-4bb9-9366-b01aee375315.png",
      alt: "Aquaculture Feed Solutions"
    },
    {
      src: "/lovable-uploads/2ca41337-27d1-496a-8cf1-0ea6d1624fed.png",
      alt: "Dairy Cattle Nutrition"
    },
    {
      src: "/lovable-uploads/bbc3411a-bd12-4d4b-95b4-dab5e7bbd107.png",
      alt: "Pet Food Fortification"
    },
    {
      src: "/lovable-uploads/5517b71c-7e96-473a-8a84-f75a01cccc1f.png",
      alt: "Specialized Swine Nutrition"
    }
  ];

  return (
    <div className="pt-20 pb-20">
      <div className="container-wide">
        <SectionHeading
          title="Animal Nutrition Premixes"
          description="Specialized micronutrient formulations for optimizing livestock health, productivity, and the nutritional value of animal-derived foods."
        />
        
        {/* Hero Image */}
        <div className="mt-10 relative rounded-xl overflow-hidden">
          <img 
            src="/lovable-uploads/5517b71c-7e96-473a-8a84-f75a01cccc1f.png" 
            alt="Animal Nutrition Premixes" 
            className="w-full aspect-[21/9] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
            <div className="text-white p-8 md:p-12 max-w-2xl">
              <Fish className="w-16 h-16 text-vitanium-400 mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Optimizing Animal Health</h2>
              <p className="text-lg text-white/80">
                Our animal nutrition premixes enhance feed efficiency, support immune function, and improve both animal welfare and productivity.
              </p>
            </div>
          </div>
        </div>
        
        {/* Overview */}
        <div className="mt-16 max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="text-lg text-neutral-700 mb-6">
              VitaniumX's animal nutrition premixes are scientifically formulated to meet the specific physiological needs of different species and production systems. From poultry and livestock to aquaculture and companion animals, our premixes support optimal growth, reproduction, and health outcomes.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-lg text-neutral-700">
              Our formulations integrate essential vitamins, trace minerals, amino acids, and functional ingredients in precise ratios, delivered in forms that maximize bioavailability and stability in various feed processing systems.
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
            <h2 className="text-3xl font-bold text-neutral-800 mb-12">Animal Nutrition Premix Products</h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal delay={100}>
              <div className="bg-white rounded-xl shadow-subtle border border-neutral-100 overflow-hidden p-6 hover:shadow-md transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4">Poultry Premixes</h3>
                <p className="text-neutral-600 mb-6">
                  Specialized formulations for broilers, layers, and breeders supporting optimal growth, egg production, and skeletal development.
                </p>
                
                <h4 className="font-semibold text-lg mb-3">Key Features:</h4>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Enhanced eggshell quality and egg production</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Immunity support for reduced mortality</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Formulations for antibiotic-free production</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <div className="bg-white rounded-xl shadow-subtle border border-neutral-100 overflow-hidden p-6 hover:shadow-md transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4">Ruminant Premixes</h3>
                <p className="text-neutral-600 mb-6">
                  Specialized formulations for dairy and beef cattle, supporting milk production, reproductive efficiency, and growth performance.
                </p>
                
                <h4 className="font-semibold text-lg mb-3">Key Features:</h4>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Rumen-protected nutrient forms</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Transition cow health support</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Enhanced feed efficiency and nutrient utilization</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={300}>
              <div className="bg-white rounded-xl shadow-subtle border border-neutral-100 overflow-hidden p-6 hover:shadow-md transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4">Aquaculture Premixes</h3>
                <p className="text-neutral-600 mb-6">
                  Specialized formulations for various fish and shrimp species, supporting growth, immune function, and feed conversion.
                </p>
                
                <h4 className="font-semibold text-lg mb-3">Key Features:</h4>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Water-stable nutrient delivery</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Species-specific formulations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Support for sustainable aquaculture</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={400}>
              <div className="bg-white rounded-xl shadow-subtle border border-neutral-100 overflow-hidden p-6 hover:shadow-md transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4">Companion Animal Premixes</h3>
                <p className="text-neutral-600 mb-6">
                  Specialized formulations for pet food manufacturers, supporting long-term health, coat quality, and activity levels.
                </p>
                
                <h4 className="font-semibold text-lg mb-3">Key Features:</h4>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Life-stage specific nutrition</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Functional ingredients for joint and cognitive health</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Premium formulations for super-premium brands</span>
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
                  <h2 className="text-2xl font-bold mb-4">Optimize Your Feed Formulations</h2>
                  <p className="text-neutral-300 mb-6">
                    Contact our team to discuss how our animal nutrition premixes can help you improve animal productivity, health outcomes, and the nutritional quality of animal-derived foods.
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
                  <h3 className="text-xl font-semibold mb-4">Technical Support Services</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-400 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-neutral-300">Feed formulation consulting</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-400 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-neutral-300">Feed mill processing optimization</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-400 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-neutral-300">Quality control program development</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-400 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-neutral-300">On-farm trials and performance verification</span>
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

export default AnimalNutritionPremix;
