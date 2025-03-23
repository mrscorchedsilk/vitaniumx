
import React from 'react';
import { Link } from 'react-router-dom';
import { Milk, ArrowRight, CheckCircle, Beef, Fish, Bird } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import FoodImageGallery from '@/components/ui/FoodImageGallery';

// Food images for the page
const foodImages = [
  {
    src: "/lovable-uploads/38125dfc-481a-4b2a-a4b5-615898b4a565.png",
    alt: "Protein-rich food with eggs and vegetables"
  },
  {
    src: "/lovable-uploads/4ff432ca-6a3e-42db-9af5-0bd15ac1edd7.png",
    alt: "Balanced meal with protein and nutrient-rich vegetables"
  },
  {
    src: "/lovable-uploads/882e56f0-4f4f-4e3a-a1ec-02b8733d1d3f.png",
    alt: "Fresh nutrient-rich salad bowl with diverse ingredients"
  }
];

const AnimalNutrition = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="container-wide">
        <SectionHeading
          subtitle="Solutions & Products"
          title="Animal Nutrition"
          description="Premium vitamin and mineral premixes for livestock, poultry, and aquaculture to optimize animal health and productivity."
        />
        
        {/* Hero Image */}
        <div className="mt-10 relative rounded-xl overflow-hidden shadow-[0_15px_35px_-10px_rgba(16,185,129,0.3)]">
          <img 
            src="/lovable-uploads/aaf178d4-a6a4-4b55-80ec-0c7059537d4e.png"
            alt="Nutritious fresh vegetables, legumes and grains in wooden bowls"
            className="w-full object-cover h-[400px]"
          />
        </div>
        
        {/* Overview */}
        <div className="mt-16 max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="text-lg text-neutral-700 mb-6">
              VitaniumX offers specialized vitamin and mineral premixes for animal nutrition, designed to enhance animal health, productivity, and overall performance. Our animal nutrition solutions are formulated with high-quality ingredients to ensure optimal bioavailability and efficacy.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-lg text-neutral-700">
              With a focus on scientific research and innovation, our premixes are developed to address the specific nutritional requirements of different animal species and production stages. We work closely with livestock producers, feed manufacturers, and animal nutritionists to provide customized solutions that deliver measurable results.
            </p>
          </ScrollReveal>
        </div>
        
        {/* Food Image Gallery */}
        <div className="mt-16">
          <ScrollReveal>
            <h2 className="text-2xl font-bold text-neutral-800 mb-8">High-Quality Nutrient Sources</h2>
            <FoodImageGallery 
              images={foodImages} 
              columns={3}
              className="mt-6"
            />
          </ScrollReveal>
        </div>
        
        {/* Product Categories */}
        <div className="mt-16">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-neutral-800 mb-12">Animal Nutrition Solutions</h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Cattle & Dairy */}
            <ScrollReveal delay={100}>
              <div className="bg-white p-6 rounded-lg shadow-subtle border border-neutral-100 h-full shadow-[0_10px_25px_-5px_rgba(236,72,153,0.2)] hover:shadow-[0_15px_35px_-5px_rgba(236,72,153,0.3)] transition-all duration-300">
                <div className="mb-6">
                  <Beef className="h-12 w-12 text-vitanium-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Cattle & Dairy Premixes</h3>
                <p className="text-neutral-600 mb-6">
                  Specialized vitamin and mineral premixes formulated to optimize milk production, reproductive performance, and overall health in dairy cattle. Our premixes also support growth and development in beef cattle.
                </p>
                
                <h4 className="font-semibold mb-3">Key Benefits:</h4>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Enhanced milk production and quality</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Improved reproductive performance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Better rumen function and nutrient utilization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Strengthened immune system</span>
                  </li>
                </ul>
                
                <div className="mt-auto">
                  <Link to="/get-quote" className="inline-flex items-center text-vitanium-600 font-medium hover:text-vitanium-700">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
            
            {/* Poultry */}
            <ScrollReveal delay={200}>
              <div className="bg-white p-6 rounded-lg shadow-subtle border border-neutral-100 h-full shadow-[0_10px_25px_-5px_rgba(14,165,233,0.2)] hover:shadow-[0_15px_35px_-5px_rgba(14,165,233,0.3)] transition-all duration-300">
                <div className="mb-6">
                  <Bird className="h-12 w-12 text-vitanium-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Poultry Premixes</h3>
                <p className="text-neutral-600 mb-6">
                  Comprehensive vitamin and mineral formulations designed to optimize growth, egg production, and meat quality in broilers, layers, and breeders. Our premixes support optimal performance throughout the production cycle.
                </p>
                
                <h4 className="font-semibold mb-3">Key Benefits:</h4>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Improved feed conversion efficiency</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Enhanced egg production and quality</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Better skeletal development</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Reduced mortality and improved livability</span>
                  </li>
                </ul>
                
                <div className="mt-auto">
                  <Link to="/get-quote" className="inline-flex items-center text-vitanium-600 font-medium hover:text-vitanium-700">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
            
            {/* Aquaculture */}
            <ScrollReveal delay={300}>
              <div className="bg-white p-6 rounded-lg shadow-subtle border border-neutral-100 h-full shadow-[0_10px_25px_-5px_rgba(16,185,129,0.2)] hover:shadow-[0_15px_35px_-5px_rgba(16,185,129,0.3)] transition-all duration-300">
                <div className="mb-6">
                  <Fish className="h-12 w-12 text-vitanium-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Aquaculture Premixes</h3>
                <p className="text-neutral-600 mb-6">
                  Specialized micronutrient formulations for various fish and shrimp species, designed to support growth, health, and stress resistance in aquatic environments. Our premixes ensure optimal development throughout all life stages.
                </p>
                
                <h4 className="font-semibold mb-3">Key Benefits:</h4>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Enhanced growth rate and feed efficiency</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Improved disease resistance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Better survival rates</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Optimized coloration and quality</span>
                  </li>
                </ul>
                
                <div className="mt-auto">
                  <Link to="/get-quote" className="inline-flex items-center text-vitanium-600 font-medium hover:text-vitanium-700">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
        
        {/* Features & Benefits */}
        <div className="mt-20">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-neutral-800 mb-12">Key Features of Our Animal Nutrition Solutions</h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollReveal delay={100}>
              <div className="bg-white p-6 rounded-lg shadow-subtle border border-neutral-100 shadow-[0_10px_25px_-5px_rgba(236,72,153,0.2)] hover:shadow-[0_15px_35px_-5px_rgba(236,72,153,0.3)] transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4">Customized Formulations</h3>
                <p className="text-neutral-600">
                  Tailored premixes designed to meet the specific nutritional requirements of different species, production stages, and farming systems. We consider factors such as genetics, environment, and production goals.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <div className="bg-white p-6 rounded-lg shadow-subtle border border-neutral-100 shadow-[0_10px_25px_-5px_rgba(14,165,233,0.2)] hover:shadow-[0_15px_35px_-5px_rgba(14,165,233,0.3)] transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4">Research-Backed Solutions</h3>
                <p className="text-neutral-600">
                  Formulations developed based on the latest scientific research and nutritional data, ensuring optimal performance and return on investment for producers.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={300}>
              <div className="bg-white p-6 rounded-lg shadow-subtle border border-neutral-100 shadow-[0_10px_25px_-5px_rgba(16,185,129,0.2)] hover:shadow-[0_15px_35px_-5px_rgba(16,185,129,0.3)] transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4">Quality Ingredients</h3>
                <p className="text-neutral-600">
                  Only high-quality, bioavailable forms of vitamins and minerals are used in our premixes, ensuring maximum absorption and utilization by the animal.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={400}>
              <div className="bg-white p-6 rounded-lg shadow-subtle border border-neutral-100 shadow-[0_10px_25px_-5px_rgba(245,158,11,0.2)] hover:shadow-[0_15px_35px_-5px_rgba(245,158,11,0.3)] transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4">Technical Support</h3>
                <p className="text-neutral-600">
                  Comprehensive technical assistance from our team of animal nutritionists and veterinary experts to help you optimize your feeding program and troubleshoot any issues.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={500}>
              <div className="bg-white p-6 rounded-lg shadow-subtle border border-neutral-100 shadow-[0_10px_25px_-5px_rgba(139,92,246,0.2)] hover:shadow-[0_15px_35px_-5px_rgba(139,92,246,0.3)] transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4">Quality Control</h3>
                <p className="text-neutral-600">
                  Rigorous quality control processes ensure consistent product quality and nutrient levels in every batch, giving you confidence in the performance of our premixes.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={600}>
              <div className="bg-white p-6 rounded-lg shadow-subtle border border-neutral-100 shadow-[0_10px_25px_-5px_rgba(239,68,68,0.2)] hover:shadow-[0_15px_35px_-5px_rgba(239,68,68,0.3)] transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4">Regulatory Compliance</h3>
                <p className="text-neutral-600">
                  All our premixes are formulated to comply with relevant regulatory requirements and industry standards, ensuring safety and efficacy.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
        
        {/* Case Study */}
        <div className="mt-20">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-neutral-800 mb-8">Success Story</h2>
          </ScrollReveal>
          
          <div className="bg-white p-8 rounded-xl shadow-subtle border border-neutral-100 shadow-[0_10px_25px_-5px_rgba(14,165,233,0.2)] hover:shadow-[0_15px_35px_-5px_rgba(14,165,233,0.3)] transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              <div className="col-span-1 lg:col-span-2">
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src="/lovable-uploads/d8fdbed4-1f7c-4aa0-80ba-79f6252a8dc3.png" 
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
          <div className="bg-navy-900 text-white py-12 px-8 rounded-xl text-center">
            <ScrollReveal>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Optimize Your Animal Nutrition Program</h2>
              <p className="text-neutral-300 mb-8 max-w-2xl mx-auto">
                Our team of experts can help you develop customized vitamin and mineral premixes that enhance animal health, productivity, and your bottom line.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/get-quote" className="btn-primary bg-vitanium-500 hover:bg-vitanium-600">
                  Get a Quote
                </Link>
                <Link to="/contact" className="btn-secondary bg-transparent text-white border-white hover:bg-white/10">
                  Contact Our Team
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimalNutrition;
