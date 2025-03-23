
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Wheat, 
  Droplet, 
  HeartPulse, 
  Milk, 
  FlaskConical, 
  Pill,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import ProductCard from '@/components/ui/ProductCard';
import FoodImageGallery from '@/components/ui/FoodImageGallery';

// Food image gallery data
const foodImages = [
  {
    src: "/lovable-uploads/aaf178d4-a6a4-4b55-80ec-0c7059537d4e.png",
    alt: "Nutritious fresh vegetables, legumes and grains in wooden bowls"
  },
  {
    src: "/lovable-uploads/d8fdbed4-1f7c-4aa0-80ba-79f6252a8dc3.png",
    alt: "Healthy bowl with chickpeas, cucumber and carrots"
  },
  {
    src: "/lovable-uploads/e718b2ed-1282-49a3-a55f-4d222f3281f6.png",
    alt: "Balanced Buddha bowl with protein and various vegetables"
  },
  {
    src: "/lovable-uploads/c3139f1c-6d1a-4dbc-bcff-98d59759fd73.png",
    alt: "Fresh green salad in bowl with heart-shaped elements"
  },
  {
    src: "/lovable-uploads/38125dfc-481a-4b2a-a4b5-615898b4a565.png",
    alt: "Protein-rich salad with chicken, eggs and vegetables"
  },
  {
    src: "/lovable-uploads/4ff432ca-6a3e-42db-9af5-0bd15ac1edd7.png",
    alt: "Nutritious bowl with grilled chicken, eggs and vegetables"
  }
];

const Solutions = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="container-wide">
        <SectionHeading
          subtitle="Solutions & Products"
          title="Comprehensive Fortification Solutions"
          description="We offer a wide range of micronutrient premixes designed for various applications across the food industry."
        />
        
        {/* Food Images Gallery */}
        <div className="mt-12">
          <ScrollReveal>
            <FoodImageGallery 
              images={foodImages} 
              columns={3}
              className="mt-6"
            />
          </ScrollReveal>
        </div>
        
        {/* Overview Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="text-lg text-neutral-700 mb-6">
              VitaniumX specializes in creating high-quality micronutrient premixes for staple foods, processed foods, therapeutic applications, and more. Our solutions are designed to enhance the nutritional value of various food products while maintaining their taste, texture, and shelf life.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-lg text-neutral-700">
              Each of our premixes is formulated with precision, using the finest ingredients and advanced manufacturing processes to ensure optimal bioavailability and stability. We work closely with our clients to develop customized solutions that meet their specific requirements and adhere to regulatory standards.
            </p>
          </ScrollReveal>
        </div>
        
        {/* Solutions Cards */}
        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProductCard
              title="Staple Food Fortification"
              description="Premixes for rice, wheat flour, milk, and oil fortification to address micronutrient deficiencies."
              icon={<Wheat className="h-6 w-6" />}
              link="/solutions/staple-food"
              delay={100}
            />
            <ProductCard
              title="Processed Food Solutions"
              description="Custom premixes for bakery, confectionery, dairy, beverages, and snacks."
              icon={<Droplet className="h-6 w-6" />}
              link="/solutions/processed-foods"
              delay={200}
            />
            <ProductCard
              title="Therapeutic Foods"
              description="Specialized, nutrient-dense formulations for addressing acute malnutrition."
              icon={<HeartPulse className="h-6 w-6" />}
              link="/solutions/therapeutic"
              delay={300}
            />
            <ProductCard
              title="Animal Nutrition"
              description="Vitamin and mineral premixes for livestock, poultry, and aquaculture."
              icon={<Milk className="h-6 w-6" />}
              link="/solutions/animal-nutrition"
              delay={400}
            />
            <ProductCard
              title="Customized Formulations"
              description="Tailored blends designed to meet specific nutritional requirements and applications."
              icon={<FlaskConical className="h-6 w-6" />}
              link="/solutions/custom"
              delay={500}
            />
            <ProductCard
              title="FMCG Fortification"
              description="Fortification solutions for breads, biscuits, breakfast cereals, fruit juices, and more."
              icon={<Pill className="h-6 w-6" />}
              link="/solutions/fmcg"
              delay={600}
            />
          </div>
        </div>
        
        {/* Staple Food Fortification */}
        <div className="mt-24">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-neutral-800 mb-8">Staple Food Fortification</h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal delay={100}>
              <div className="bg-white p-8 rounded-xl shadow-subtle border border-neutral-100 shadow-[0_10px_25px_-5px_rgba(16,185,129,0.2)] hover:shadow-[0_15px_35px_-5px_rgba(16,185,129,0.3)] transition-all duration-300">
                <div className="flex justify-center mb-6">
                  <Wheat className="h-16 w-16 text-vitanium-600" />
                </div>
                <p className="text-neutral-700 mb-6">
                  Staple food fortification is a proven, cost-effective strategy to combat micronutrient deficiencies at a population level. VitaniumX provides high-quality premixes for fortifying essential staple foods consumed by large segments of the population.
                </p>
                <p className="text-neutral-700">
                  Our solutions adhere to FSSAI regulations and international standards, ensuring the consistent delivery of essential micronutrients in a bioavailable form.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-subtle border border-neutral-100 shadow-[0_10px_25px_-5px_rgba(14,165,233,0.2)] hover:shadow-[0_15px_35px_-5px_rgba(14,165,233,0.3)] transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-4">Wheat Flour Fortification</h3>
                  <p className="text-neutral-600 mb-4">
                    Our wheat flour premixes incorporate Iron, Folic Acid, Vitamin B12, and other micronutrients to address common deficiencies.
                  </p>
                  <div className="flex items-center text-vitanium-600 font-medium">
                    <span>Learn more</span>
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-subtle border border-neutral-100 shadow-[0_10px_25px_-5px_rgba(245,158,11,0.2)] hover:shadow-[0_15px_35px_-5px_rgba(245,158,11,0.3)] transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-4">Rice Fortification</h3>
                  <p className="text-neutral-600 mb-4">
                    Fortified Rice Kernels (FRK) and premixes with Iron (Ferric Pyrophosphate / NaFeEDTA), Folic Acid, Vitamin B12 via dusting, coating, or hot/warm extrusion.
                  </p>
                  <div className="flex items-center text-vitanium-600 font-medium">
                    <span>Learn more</span>
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-subtle border border-neutral-100 shadow-[0_10px_25px_-5px_rgba(239,68,68,0.2)] hover:shadow-[0_15px_35px_-5px_rgba(239,68,68,0.3)] transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-4">Milk Fortification</h3>
                  <p className="text-neutral-600 mb-4">
                    Premixes containing Vitamins A and D for milk fortification, enhancing the nutritional value of this essential food.
                  </p>
                  <div className="flex items-center text-vitanium-600 font-medium">
                    <span>Learn more</span>
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-subtle border border-neutral-100 shadow-[0_10px_25px_-5px_rgba(139,92,246,0.2)] hover:shadow-[0_15px_35px_-5px_rgba(139,92,246,0.3)] transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-4">Edible Oil Fortification</h3>
                  <p className="text-neutral-600 mb-4">
                    Vitamins A and D premixes designed specifically for incorporation into edible oils, ensuring stability and bioavailability.
                  </p>
                  <div className="flex items-center text-vitanium-600 font-medium">
                    <span>Learn more</span>
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
        
        {/* Government Program Products */}
        <div className="mt-24">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-neutral-800 mb-8">Government Program Solutions</h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal delay={100}>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-subtle border border-neutral-100 shadow-[0_10px_25px_-5px_rgba(236,72,153,0.2)] hover:shadow-[0_15px_35px_-5px_rgba(236,72,153,0.3)] transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-4">FRK Premix</h3>
                  <p className="text-neutral-600 mb-4">
                    Fortified Rice Kernels premixes used in multiple state programs to address iron and folic acid deficiencies among vulnerable populations.
                  </p>
                  <div className="mt-4 flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mr-2 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-neutral-600">
                      Beneficiaries: Infants, children, pregnant women, lactating women, adolescent girls
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-subtle border border-neutral-100 shadow-[0_10px_25px_-5px_rgba(14,165,233,0.2)] hover:shadow-[0_15px_35px_-5px_rgba(14,165,233,0.3)] transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-4">Sweet Dalia & Namkeen Dalia</h3>
                  <p className="text-neutral-600 mb-4">
                    Nutrient-rich dalia formulations for various government programs, with Sweet (Meetha) and Savory (Namkeen) variants.
                  </p>
                  <div className="mt-4 flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mr-2 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-neutral-600">
                      Beneficiaries: Infants, lactating women, pregnant women, adolescent girls
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-subtle border border-neutral-100 shadow-[0_10px_25px_-5px_rgba(16,185,129,0.2)] hover:shadow-[0_15px_35px_-5px_rgba(16,185,129,0.3)] transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-4">Panjiri Premix</h3>
                  <p className="text-neutral-600 mb-4">
                    High-calorie, nutrient-dense formulation primarily for infants and young children, distributed through various state programs.
                  </p>
                  <div className="mt-4 flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mr-2 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-neutral-600">
                      Beneficiaries: Infants and children (primarily 1-3 years)
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-subtle border border-neutral-100 shadow-[0_10px_25px_-5px_rgba(245,158,11,0.2)] hover:shadow-[0_15px_35px_-5px_rgba(245,158,11,0.3)] transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-4">Custom Government Formulations</h3>
                  <p className="text-neutral-600 mb-4">
                    We work closely with state governments and ICDS to develop customized recipes that address the nutritional needs of different beneficiary groups.
                  </p>
                  <div className="mt-4 flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mr-2 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-neutral-600">
                      Partnerships with Uttar Pradesh, Madhya Pradesh, and other state governments
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
        
        {/* Last Image */}
        <div className="mt-24">
          <ScrollReveal>
            <div className="rounded-xl overflow-hidden shadow-[0_15px_35px_-10px_rgba(16,185,129,0.3)]">
              <img 
                src="/lovable-uploads/882e56f0-4f4f-4e3a-a1ec-02b8733d1d3f.png" 
                alt="Fresh salad with vegetables in a white bowl" 
                className="w-full object-cover h-[400px]"
              />
            </div>
          </ScrollReveal>
        </div>
        
        {/* CTA Section */}
        <div className="mt-24">
          <div className="bg-navy-900 text-white py-12 px-8 rounded-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <ScrollReveal>
                <div>
                  <h2 className="text-2xl font-bold mb-4">Need a Custom Solution?</h2>
                  <p className="text-neutral-300 mb-6">
                    Our team can develop tailored formulations to meet your specific requirements, whether you're a food manufacturer, government program, or institutional buyer.
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
                  <h3 className="text-xl font-semibold mb-4">Our Customization Process</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-vitanium-600 flex items-center justify-center text-white font-bold mr-4">
                        1
                      </div>
                      <p className="text-neutral-300">Consultation with our nutrition experts to understand your needs</p>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-vitanium-600 flex items-center justify-center text-white font-bold mr-4">
                        2
                      </div>
                      <p className="text-neutral-300">Development of custom formulation prototypes</p>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-vitanium-600 flex items-center justify-center text-white font-bold mr-4">
                        3
                      </div>
                      <p className="text-neutral-300">Testing and refinement to ensure stability and efficacy</p>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-vitanium-600 flex items-center justify-center text-white font-bold mr-4">
                        4
                      </div>
                      <p className="text-neutral-300">Scale-up production with stringent quality control</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
