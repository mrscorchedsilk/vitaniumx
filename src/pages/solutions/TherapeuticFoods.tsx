
import React from 'react';
import { Link } from 'react-router-dom';
import { HeartPulse, ArrowRight, CheckCircle, Baby, Users, Plus } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import FoodImageGallery from '@/components/ui/FoodImageGallery';

const TherapeuticFoods = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="container-wide">
        <SectionHeading
          subtitle="Solutions & Products"
          title="Therapeutic Foods"
          description="Specialized, nutrient-dense formulations for addressing acute malnutrition and specific dietary needs."
        />
        
        {/* Hero Image */}
        <div className="mt-10 relative rounded-xl overflow-hidden">
          <img 
            src="/images/food/therapeutic-food.jpg" 
            alt="Therapeutic food products" 
            className="w-full aspect-[21/9] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
            <div className="text-white p-8 md:p-12 max-w-2xl">
              <HeartPulse className="w-16 h-16 text-vitanium-400 mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Nutrition That Heals</h2>
              <p className="text-lg text-white/80">
                Our therapeutic food solutions combat malnutrition and support recovery with specialized nutrient formulations.
              </p>
            </div>
          </div>
        </div>
        
        {/* Overview */}
        <div className="mt-16 max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="text-lg text-neutral-700 mb-6">
              VitaniumX develops specialized therapeutic food formulations designed to address specific nutritional deficiencies and malnutrition conditions. Our products are particularly focused on treating and preventing severe acute malnutrition (SAM) and moderate acute malnutrition (MAM) in vulnerable populations, especially children under five years of age.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-lg text-neutral-700">
              Our therapeutic food solutions are developed in accordance with international guidelines and standards, including those set by the World Health Organization (WHO) and UNICEF. They are formulated to be energy-dense, nutrient-rich, and designed for optimal absorption and utilization by the body.
            </p>
          </ScrollReveal>
        </div>
        
        {/* Food Image Gallery */}
        <div className="mt-16">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-neutral-800 mb-8">Our Therapeutic Solutions</h2>
          </ScrollReveal>
          
          <FoodImageGallery 
            images={[
              {
                src: "/images/food/therapeutic-paste.jpg",
                alt: "Ready-to-Use Therapeutic Food"
              },
              {
                src: "/images/food/supplementary-food.jpg",
                alt: "Ready-to-Use Supplementary Food"
              },
              {
                src: "/images/food/f75-f100.jpg",
                alt: "Therapeutic Milk F75/F100"
              },
              {
                src: "/images/food/maternal-nutrition.jpg",
                alt: "Maternal Nutrition Supplements"
              },
              {
                src: "/images/food/pediatric-nutrition.jpg",
                alt: "Pediatric Nutrition Supplements"
              },
              {
                src: "/images/food/clinical-nutrition.jpg",
                alt: "Clinical Nutrition Products"
              }
            ]}
            columns={3}
            className="mb-12"
          />
        </div>
        
        {/* Product Categories */}
        <div className="mt-16">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-neutral-800 mb-12">Therapeutic Food Solutions</h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* RUTF */}
            <ScrollReveal delay={100}>
              <div className="bg-white rounded-xl shadow-subtle border border-neutral-100 overflow-hidden shadow-[0_10px_25px_-5px_rgba(139,92,246,0.3)] hover:shadow-[0_15px_35px_-5px_rgba(139,92,246,0.5)] transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src="/images/food/therapeutic-paste.jpg" 
                    alt="RUTF sachets and packaging" 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4">Ready-to-Use Therapeutic Food (RUTF)</h3>
                  <p className="text-neutral-600 mb-6">
                    Our RUTF formulations are energy-dense, micronutrient-enriched pastes designed for the treatment of severe acute malnutrition (SAM) in children. These products do not require water for preparation, making them safe to use in areas with limited access to clean water.
                  </p>
                  
                  <h4 className="font-semibold text-lg mb-3">Key Features:</h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">High energy density (520-550 kcal/100g)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Balanced protein content (10-12% of total energy)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Essential fatty acids and micronutrients</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Long shelf life (24 months) without refrigeration</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Ready to eat without preparation</span>
                    </li>
                  </ul>
                  
                  <h4 className="font-semibold text-lg mb-3">Applications:</h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Treatment of severe acute malnutrition</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Outpatient therapeutic programs</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Emergency feeding programs</span>
                    </li>
                  </ul>
                  
                  <div className="mt-6">
                    <Link to="/get-quote" className="btn-primary">
                      Request Information
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            
            {/* RUSF */}
            <ScrollReveal delay={200}>
              <div className="bg-white rounded-xl shadow-subtle border border-neutral-100 overflow-hidden shadow-[0_10px_25px_-5px_rgba(236,72,153,0.3)] hover:shadow-[0_15px_35px_-5px_rgba(236,72,153,0.5)] transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src="/images/food/supplementary-food.jpg" 
                    alt="RUSF products and application" 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4">Ready-to-Use Supplementary Food (RUSF)</h3>
                  <p className="text-neutral-600 mb-6">
                    Our RUSF formulations are designed for the treatment of moderate acute malnutrition (MAM) and for preventing malnutrition in at-risk populations. These products provide additional nutrients to complement the regular diet and support catch-up growth and development.
                  </p>
                  
                  <h4 className="font-semibold text-lg mb-3">Key Features:</h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Moderate energy density (450-500 kcal/100g)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Protein content optimized for recovery (12-15% of total energy)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Comprehensive micronutrient profile</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Multiple format options (paste, biscuit, or powder)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">12-18 month shelf life</span>
                    </li>
                  </ul>
                  
                  <h4 className="font-semibold text-lg mb-3">Applications:</h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Treatment of moderate acute malnutrition</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Prevention of malnutrition in vulnerable groups</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Supplementary feeding programs</span>
                    </li>
                  </ul>
                  
                  <div className="mt-6">
                    <Link to="/get-quote" className="btn-primary">
                      Request Information
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
          
          <div className="mt-12">
            <ScrollReveal delay={300}>
              <div className="bg-white rounded-xl shadow-subtle border border-neutral-100 overflow-hidden shadow-[0_10px_25px_-5px_rgba(14,165,233,0.3)] hover:shadow-[0_15px_35px_-5px_rgba(14,165,233,0.5)] transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src="/images/food/clinical-nutrition.jpg" 
                    alt="Specialized nutritional supplements" 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4">Specialized Nutritional Supplements</h3>
                  <p className="text-neutral-600 mb-6">
                    In addition to our RUTF and RUSF products, we develop specialized nutritional supplements to address specific deficiencies or support nutritional needs during different life stages or health conditions.
                  </p>
                  
                  <h4 className="font-semibold text-lg mb-3">Our Offerings Include:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-neutral-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">Maternal Nutrition Supplements</h5>
                      <p className="text-neutral-600 text-sm">
                        Formulated to meet the increased nutritional needs during pregnancy and lactation, including iron, folate, calcium, and other essential micronutrients.
                      </p>
                    </div>
                    
                    <div className="bg-neutral-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">Pediatric Nutrition Supplements</h5>
                      <p className="text-neutral-600 text-sm">
                        Designed to support growth and development in children, particularly during critical periods of rapid growth or recovery from illness.
                      </p>
                    </div>
                    
                    <div className="bg-neutral-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">Geriatric Nutrition Supplements</h5>
                      <p className="text-neutral-600 text-sm">
                        Formulated to address the nutritional needs of older adults, supporting muscle maintenance, bone health, and overall vitality.
                      </p>
                    </div>
                    
                    <div className="bg-neutral-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">Condition-Specific Supplements</h5>
                      <p className="text-neutral-600 text-sm">
                        Specialized formulations for individuals with specific health conditions requiring targeted nutritional support.
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <Link to="/get-quote" className="btn-primary">
                      Request Information
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
        
        {/* Program Implementation */}
        <div className="mt-20">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-neutral-800 mb-12">Program Implementation Support</h2>
          </ScrollReveal>
          
          <div className="bg-white p-8 rounded-xl shadow-subtle border border-neutral-100 shadow-[0_10px_25px_-5px_rgba(16,185,129,0.3)] hover:shadow-[0_15px_35px_-5px_rgba(16,185,129,0.5)] transition-all duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ScrollReveal delay={100}>
                <div>
                  <h3 className="text-xl font-bold mb-4">Technical Assistance</h3>
                  <p className="text-neutral-600 mb-6">
                    We provide comprehensive technical support to organizations implementing therapeutic feeding programs, including:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Product selection guidance based on target population and program goals</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Storage and distribution recommendations</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Usage protocols and dosage guidelines</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Monitoring and evaluation support</span>
                    </li>
                  </ul>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={200}>
                <div>
                  <h3 className="text-xl font-bold mb-4">Custom Program Development</h3>
                  <p className="text-neutral-600 mb-6">
                    We work closely with governments, NGOs, and international agencies to develop customized nutritional intervention programs, including:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Needs assessment and situation analysis</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Product formulation tailored to specific nutritional gaps</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Implementation strategy development</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Training for healthcare workers and program staff</span>
                    </li>
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
        
        {/* Case Study */}
        <div className="mt-20">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-neutral-800 mb-8">Success Story</h2>
          </ScrollReveal>
          
          <div className="bg-white p-8 rounded-xl shadow-subtle border border-neutral-100 shadow-[0_10px_25px_-5px_rgba(250,82,82,0.3)] hover:shadow-[0_15px_35px_-5px_rgba(250,82,82,0.5)] transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              <div className="col-span-1 lg:col-span-2">
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img 
                    src="/images/food/nutrition-program.jpg" 
                    alt="Children receiving therapeutic foods" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="col-span-1 lg:col-span-3">
                <h3 className="text-2xl font-bold mb-4">Rural Nutrition Program in Madhya Pradesh</h3>
                <p className="text-neutral-600 mb-6">
                  VitaniumX partnered with a state government and an international NGO to implement a comprehensive nutrition program in rural districts of Madhya Pradesh, targeting children under 5 years with moderate acute malnutrition.
                </p>
                
                <h4 className="font-semibold text-lg mb-3">Our Solution:</h4>
                <p className="text-neutral-600 mb-6">
                  We developed a locally produced RUSF formulation using regionally available ingredients like chickpea, peanut, milk powder, and a custom micronutrient premix. The product was designed to align with local taste preferences while meeting international nutritional standards.
                </p>
                
                <h4 className="font-semibold text-lg mb-3">Results:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Over 25,000 children treated for moderate acute malnutrition</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">85% recovery rate within 12 weeks of intervention</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Program expanded to five additional districts based on success</span>
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
                  <h2 className="text-2xl font-bold mb-4">Partner with Us for Nutritional Impact</h2>
                  <p className="text-neutral-300 mb-6">
                    Whether you're a government agency, NGO, or healthcare organization, we can help you develop effective therapeutic food solutions to address malnutrition in your target populations.
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
                  <h3 className="text-xl font-semibold mb-4">Why Choose Our Therapeutic Food Solutions?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-400 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-neutral-300">Products designed according to international nutritional guidelines</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-400 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-neutral-300">Formulations adaptable to local contexts and preferences</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-400 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-neutral-300">Comprehensive implementation support beyond product supply</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-400 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-neutral-300">Proven efficacy through multiple successful interventions</span>
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

export default TherapeuticFoods;
