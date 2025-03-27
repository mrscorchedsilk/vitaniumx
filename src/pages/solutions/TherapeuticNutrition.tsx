
import React from 'react';
import { Link } from 'react-router-dom';
import { HeartPulse, ArrowRight, CheckCircle, Baby, Users, Shield } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import StatCard from '@/components/ui/StatCard';
import { Button } from '@/components/ui/button';

const TherapeuticNutrition = () => {
  return (
    <div className="pt-20 pb-20">
      <div className="container-wide">
        <SectionHeading
          title="Therapeutic Nutrition"
          description="Specialized nutrition solutions designed to address and treat acute and chronic malnutrition in vulnerable populations."
        />
        
        {/* Hero Image */}
        <div className="mt-10 relative rounded-xl overflow-hidden">
          <img 
            src="/lovable-uploads/therapeutic-nutrition-hero.jpg" 
            alt="Therapeutic Nutrition Products" 
            className="w-full aspect-[21/9] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
            <div className="text-white p-8 md:p-12 max-w-2xl">
              <HeartPulse className="w-16 h-16 text-vitanium-400 mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Life-Saving Nutrition Solutions</h2>
              <p className="text-lg text-white/80">
                Our therapeutic nutrition products help treat malnutrition and save lives in emergency and development contexts worldwide.
              </p>
            </div>
          </div>
        </div>
        
        {/* Overview */}
        <div className="mt-16 max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="text-lg text-neutral-700 mb-6">
              Therapeutic nutrition products are specially formulated to provide high-density nutrition for individuals suffering from or at risk of malnutrition. These products are designed to rapidly restore nutritional status and support recovery in emergency situations, humanitarian crises, and chronic malnutrition scenarios.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-lg text-neutral-700">
              VitaniumX develops and manufactures a range of therapeutic nutrition products that meet international quality and safety standards, including Ready-to-Use Therapeutic Foods (RUTF) and Ready-to-Use Supplementary Foods (RUSF). Our products are used by major humanitarian organizations, governments, and NGOs around the world to combat malnutrition.
            </p>
          </ScrollReveal>
        </div>
        
        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard 
            number="500+"
            label="Calories per serving"
            glowColor="blue"
          />
          <StatCard 
            number="15+"
            label="Essential micronutrients"
            glowColor="green"
            delay={100}
          />
          <StatCard 
            number="90%"
            label="Recovery rate in severe cases"
            glowColor="amber"
            delay={200}
          />
          <StatCard 
            number="10M+"
            label="Children treated annually"
            glowColor="purple"
            delay={300}
          />
        </div>
        
        {/* Product Details */}
        <div className="mt-16">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-neutral-800 mb-12">Our Therapeutic Nutrition Solutions</h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* RUTF */}
            <ScrollReveal delay={100}>
              <div className="bg-white rounded-xl shadow-subtle border border-neutral-100 overflow-hidden shadow-[0_10px_25px_-5px_rgba(14,165,233,0.3)] hover:shadow-[0_15px_35px_-5px_rgba(14,165,233,0.5)] transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src="/lovable-uploads/therapeutic-RUTF-paste.jpg" 
                    alt="Ready-to-Use Therapeutic Food" 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4">Ready-to-Use Therapeutic Food (RUTF)</h3>
                  <p className="text-neutral-600 mb-6">
                    RUTF is a energy-dense, micronutrient-enriched paste used to treat severe acute malnutrition (SAM) in children. Our RUTF products are formulated according to UN specifications and have a proven track record in treating malnutrition.
                  </p>
                  
                  <h4 className="font-semibold text-lg mb-3">Key Features:</h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">500+ kcal per 100g</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">10-12% high-quality protein</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Essential fatty acids</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Comprehensive micronutrient profile</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Ready to eat - no preparation required</span>
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
                      <span className="text-neutral-600">Humanitarian emergency response</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Community-based management of acute malnutrition</span>
                    </li>
                  </ul>
                  
                  <div className="mt-6">
                    <Button asChild>
                      <Link to="/get-quote">
                        Request Information
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            
            {/* RUSF */}
            <ScrollReveal delay={200}>
              <div className="bg-white rounded-xl shadow-subtle border border-neutral-100 overflow-hidden shadow-[0_10px_25px_-5px_rgba(16,185,129,0.3)] hover:shadow-[0_15px_35px_-5px_rgba(16,185,129,0.5)] transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src="/lovable-uploads/therapeutic-RUSF-milk.jpeg" 
                    alt="Ready-to-Use Supplementary Food" 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4">Ready-to-Use Supplementary Food (RUSF)</h3>
                  <p className="text-neutral-600 mb-6">
                    RUSF is designed to treat moderate acute malnutrition (MAM) and prevent severe acute malnutrition. Our RUSF products provide supplementary nutrition to vulnerable individuals while allowing them to continue consuming their regular diet.
                  </p>
                  
                  <h4 className="font-semibold text-lg mb-3">Key Features:</h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">250-300 kcal per serving</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Balanced protein content</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Customized micronutrient profile</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Long shelf life without refrigeration</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Available in various formats (paste, biscuits)</span>
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
                      <span className="text-neutral-600">Prevention of acute malnutrition</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Supplementary feeding programs</span>
                    </li>
                  </ul>
                  
                  <div className="mt-6">
                    <Button asChild>
                      <Link to="/get-quote">
                        Request Information
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            {/* Specialized Therapeutic Formulations */}
            <ScrollReveal delay={300}>
              <div className="bg-white rounded-xl shadow-subtle border border-neutral-100 overflow-hidden shadow-[0_10px_25px_-5px_rgba(245,158,11,0.3)] hover:shadow-[0_15px_35px_-5px_rgba(245,158,11,0.5)] transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src="/lovable-uploads/therapeutic-specialized-nutrition.webp" 
                    alt="Specialized Therapeutic Products" 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4">Specialized Therapeutic Formulations</h3>
                  <p className="text-neutral-600 mb-6">
                    Our specialized therapeutic formulations target specific nutritional needs for various vulnerable groups, including pregnant and lactating women, older adults, and individuals with specific health conditions.
                  </p>
                  
                  <h4 className="font-semibold text-lg mb-3">Target Groups:</h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Pregnant and lactating women</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Infants and young children</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">People living with chronic diseases</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Older adults</span>
                    </li>
                  </ul>
                  
                  <h4 className="font-semibold text-lg mb-3">Key Benefits:</h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Targeted nutrient profiles for specific needs</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Formulated for improved absorption</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Improved palatability for better compliance</span>
                    </li>
                  </ul>
                  
                  <div className="mt-6">
                    <Button asChild>
                      <Link to="/get-quote">
                        Request Information
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            
            {/* Emergency Response Nutrition */}
            <ScrollReveal delay={400}>
              <div className="bg-white rounded-xl shadow-subtle border border-neutral-100 overflow-hidden shadow-[0_10px_25px_-5px_rgba(139,92,246,0.3)] hover:shadow-[0_15px_35px_-5px_rgba(139,92,246,0.5)] transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src="/lovable-uploads/therapeutic-emergency-nutrition.jpg" 
                    alt="Emergency Response Nutrition" 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4">Emergency Response Nutrition</h3>
                  <p className="text-neutral-600 mb-6">
                    Our emergency response nutrition solutions are designed for rapid deployment in humanitarian crises, natural disasters, and conflict situations where immediate nutritional intervention is required.
                  </p>
                  
                  <h4 className="font-semibold text-lg mb-3">Key Features:</h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Ready-to-deploy packaging</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Extended shelf life</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Minimal preparation requirements</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Culturally adaptable formulations</span>
                    </li>
                  </ul>
                  
                  <h4 className="font-semibold text-lg mb-3">Applications:</h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Natural disaster response</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Refugee and IDP camp nutrition</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Conflict zone intervention</span>
                    </li>
                  </ul>
                  
                  <div className="mt-6">
                    <Button asChild>
                      <Link to="/get-quote">
                        Request Information
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Implementation Success Stories */}
        <div className="mt-20">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-neutral-800 mb-8">Implementation Success Stories</h2>
          </ScrollReveal>
          
          <div className="bg-white p-8 rounded-xl shadow-subtle border border-neutral-100 shadow-[0_10px_25px_-5px_rgba(236,72,153,0.3)] hover:shadow-[0_15px_35px_-5px_rgba(236,72,153,0.5)] transition-all duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ScrollReveal delay={100}>
                <div className="flex flex-col h-full">
                  <div className="mb-4 rounded-lg overflow-hidden">
                    <img 
                      src="/lovable-uploads/therapeutic-east-africa-drought.jpeg" 
                      alt="RUTF Program Success" 
                      className="w-full aspect-video object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-4">East Africa Drought Response</h3>
                  <p className="text-neutral-600 mb-6">
                    Partnered with a major international NGO to provide RUTF for treatment of severe acute malnutrition in children under 5 during a severe drought in East Africa. Our rapid production and deployment capabilities enabled timely intervention in affected areas.
                  </p>
                  <div className="flex items-center space-x-4 mt-auto">
                    <div className="font-semibold">Impact:</div>
                    <div className="text-vitanium-600">250,000+ children treated</div>
                  </div>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={200}>
                <div className="flex flex-col h-full">
                  <div className="mb-4 rounded-lg overflow-hidden">
                    <img 
                      src="/lovable-uploads/therapeutic-maternal-nutrition-initiative.jpg" 
                      alt="Maternal Nutrition Program" 
                      className="w-full aspect-video object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Maternal Nutrition Initiative</h3>
                  <p className="text-neutral-600 mb-6">
                    Developed a specialized supplementary food for pregnant and lactating women in regions with high maternal anemia and malnutrition rates. The program involved both nutrition intervention and education components.
                  </p>
                  <div className="flex items-center space-x-4 mt-auto">
                    <div className="font-semibold">Impact:</div>
                    <div className="text-vitanium-600">35% reduction in low birth weight</div>
                  </div>
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
                  <h2 className="text-2xl font-bold mb-4">Partner With Us for Therapeutic Nutrition Solutions</h2>
                  <p className="text-neutral-300 mb-6">
                    Whether you're an NGO, government agency, or healthcare provider, our team can work with you to develop and implement effective therapeutic nutrition interventions.
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
                  <h3 className="text-xl font-semibold mb-4">Why Choose Our Therapeutic Nutrition Products?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-400 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-neutral-300">Compliant with WHO and UNICEF specifications</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-400 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-neutral-300">Proven efficacy in field conditions</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-400 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-neutral-300">Rigorous quality and safety standards</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-400 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-neutral-300">Scalable production capacity for emergencies</span>
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

export default TherapeuticNutrition;
