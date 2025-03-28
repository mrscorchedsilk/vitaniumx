import React from 'react';
import { Link } from 'react-router-dom';
import { Fish, ArrowRight, CheckCircle } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Button } from '@/components/ui/button';

const AnimalNutritionPremix = () => {
  return (
    <div className="pt-20 pb-20">
      <div className="container-wide">
        <SectionHeading
          title="Animal Nutrition Premixes"
          description="Specialized micronutrient premixes for livestock, poultry, and aquaculture to enhance animal health and productivity."
        />
        
        {/* Hero Image */}
        <div className="mt-10 relative rounded-xl overflow-hidden">
          <img 
            src="/lovable-uploads/animal-nutrition-hero.webp" 
            alt="Animal Nutrition Premixes" 
            className="w-full aspect-[21/9] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
            <div className="text-white p-8 md:p-12 max-w-2xl">
              <Fish className="w-16 h-16 text-vitanium-400 mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Optimal Animal Health</h2>
              <p className="text-lg text-white/80">
                Our animal nutrition premixes are formulated to enhance the health and productivity of livestock, poultry, and aquaculture species through optimal micronutrient supplementation.
              </p>
            </div>
          </div>
        </div>
        
        {/* Overview */}
        <div className="mt-16 max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="text-lg text-neutral-700 mb-6">
              Our animal nutrition premixes are specifically designed to meet the unique nutritional requirements of different species and life stages. These premixes support optimal growth, reproductive performance, and immune function in livestock, poultry, and aquaculture.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-lg text-neutral-700">
              At VitaniumX, we collaborate with animal nutritionists and feed manufacturers to develop premixes that deliver the right balance of vitamins, trace minerals, and functional ingredients for optimal animal health and productivity.
            </p>
          </ScrollReveal>
        </div>
        
        {/* Product Details */}
        <div className="mt-16">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-neutral-800 mb-12">Our Animal Nutrition Premix Products</h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ScrollReveal delay={100}>
              <div className="bg-white rounded-xl shadow-subtle border border-neutral-100 overflow-hidden hover:shadow-md transition-all duration-300 shadow-[0_10px_25px_-5px_rgba(14,165,233,0.3)] hover:shadow-[0_15px_35px_-5px_rgba(14,165,233,0.5)]">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src="/lovable-uploads/cattle-feed-premix.jpg" 
                    alt="Cattle Feed Premixes" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4">Cattle Feed Premixes</h3>
                  <p className="text-neutral-600 mb-6">
                    Our cattle premixes are formulated for dairy and beef cattle, supporting milk production, growth, and reproductive performance.
                  </p>
                  
                  <h4 className="font-semibold text-lg mb-3">Key Features:</h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Rumen-protected formulations</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Optimal trace mineral bioavailability</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Support for lactation and growth</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <div className="bg-white rounded-xl shadow-subtle border border-neutral-100 overflow-hidden hover:shadow-md transition-all duration-300 shadow-[0_10px_25px_-5px_rgba(16,185,129,0.3)] hover:shadow-[0_15px_35px_-5px_rgba(16,185,129,0.5)]">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src="/lovable-uploads/poultry-feed-premix.jpg" 
                    alt="Poultry Feed Premixes" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4">Poultry Feed Premixes</h3>
                  <p className="text-neutral-600 mb-6">
                    Our poultry premixes are designed for broilers, layers, and breeders, supporting growth, egg production, and hatchability.
                  </p>
                  
                  <h4 className="font-semibold text-lg mb-3">Key Features:</h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Heat-stable formulations</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Support for skeletal integrity</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Egg quality enhancement</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={300}>
              <div className="bg-white rounded-xl shadow-subtle border border-neutral-100 overflow-hidden hover:shadow-md transition-all duration-300 shadow-[0_10px_25px_-5px_rgba(245,158,11,0.3)] hover:shadow-[0_15px_35px_-5px_rgba(245,158,11,0.5)]">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src="/lovable-uploads/swine-feed-premix.jpeg" 
                    alt="Swine Feed Premixes" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4">Swine Feed Premixes</h3>
                  <p className="text-neutral-600 mb-6">
                    Our swine premixes are formulated for different growth stages, supporting optimal growth, reproductive performance, and piglet viability.
                  </p>
                  
                  <h4 className="font-semibold text-lg mb-3">Key Features:</h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Phase-specific formulations</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Support for sow lactation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Enhanced piglet immunity</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={400}>
              <div className="bg-white rounded-xl shadow-subtle border border-neutral-100 overflow-hidden hover:shadow-md transition-all duration-300 shadow-[0_10px_25px_-5px_rgba(139,92,246,0.3)] hover:shadow-[0_15px_35px_-5px_rgba(139,92,246,0.5)]">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src="/lovable-uploads/fish-feed-premix.jpg" 
                    alt="Aquaculture Feed Premixes" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4">Aquaculture Feed Premixes</h3>
                  <p className="text-neutral-600 mb-6">
                    Our aquaculture premixes are designed for various fish and shrimp species, supporting growth, immune function, and coloration.
                  </p>
                  
                  <h4 className="font-semibold text-lg mb-3">Key Features:</h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Water-stable formulations</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Species-specific nutrient profiles</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Pigmentation enhancement</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
        
        {/* Research & Development */}
        <div className="mt-20">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-neutral-800 mb-8">Research & Development</h2>
          </ScrollReveal>
          
          <div className="bg-white p-8 rounded-xl shadow-subtle border border-neutral-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ScrollReveal delay={100}>
                <div>
                  <h3 className="text-xl font-bold mb-4">Trial Programs</h3>
                  <p className="text-neutral-600">
                    We conduct field trials and feeding studies to validate the performance of our premixes in various production environments.
                  </p>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={200}>
                <div>
                  <h3 className="text-xl font-bold mb-4">Innovation Focus</h3>
                  <p className="text-neutral-600">
                    Our R&D team continuously explores new ingredients and technologies to enhance the efficacy of our animal nutrition premixes.
                  </p>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={300}>
                <div>
                  <h3 className="text-xl font-bold mb-4">Collaborative Research</h3>
                  <p className="text-neutral-600">
                    We partner with universities and research institutions to advance understanding of micronutrient requirements in animal nutrition.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
        
        {/* Success Story */}
        <div className="mt-20">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-neutral-800 mb-8">Success Story</h2>
          </ScrollReveal>
          
          <div className="bg-white p-8 rounded-xl shadow-subtle border border-neutral-100 shadow-[0_10px_25px_-5px_rgba(14,165,233,0.2)] hover:shadow-[0_15px_35px_-5px_rgba(14,165,233,0.3)] transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              <div className="col-span-1 lg:col-span-2">
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src="/lovable-uploads/animal-nutrition-success-story.webp" 
                    alt="Healthy bowl with chickpeas, cucumber and carrots" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="col-span-1 lg:col-span-3">
                <h3 className="text-2xl font-bold mb-4">Leading Dairy Cooperative in Gujarat</h3>
                <p className="text-neutral-600 mb-6">
                  A major dairy cooperative in Gujarat approached VitaniumX to develop a specialized mineral mixture to address reproductive issues and suboptimal milk production in their member farmers' herds.
                </p>
                
                <h4 className="font-semibold text-lg mb-3">Our Solution:</h4>
                <p className="text-neutral-600 mb-6">
                  We conducted a comprehensive nutritional assessment and developed a customized mineral mixture with optimized levels of trace minerals (including organic forms of zinc, copper, and selenium) and fat-soluble vitamins. The formulation was designed to be easily mixed with existing feed and to address the specific deficiencies identified.
                </p>
                
                <h4 className="font-semibold text-lg mb-3">Results:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">12% increase in milk yield across participating farms</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">15% improvement in reproductive parameters</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Significant reduction in metabolic disorders</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">ROI of 3:1 for participating farmers</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="mt-16">
          <div className="bg-navy-900 text-white py-12 px-8 rounded-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <ScrollReveal>
                <div>
                  <h2 className="text-2xl font-bold mb-4">Optimize Your Animal Nutrition Program</h2>
                  <p className="text-neutral-300 mb-6">
                    Contact our team to discuss how our animal nutrition premixes can help you improve animal health, productivity, and profitability.
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
                  <h3 className="text-xl font-semibold mb-4">Performance Benefits</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-400 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-neutral-300">Improved growth rates and feed conversion</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-400 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-neutral-300">Enhanced reproductive performance</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-400 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-neutral-300">Stronger immune function</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-400 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-neutral-300">Better product quality (meat, milk, eggs)</span>
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
