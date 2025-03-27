
import React from 'react';
import { Link } from 'react-router-dom';
import { Building, ArrowRight, CheckCircle, Landmark, Globe, Scale } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import StatCard from '@/components/ui/StatCard';
import { Button } from '@/components/ui/button';

const GovernmentPrograms = () => {
  return (
    <div className="pt-20 pb-20">
      <div className="container-wide">
        <SectionHeading
          title="Government Program Solutions"
          description="Specialized nutrition solutions designed for government-run food security and nutrition programs at national and regional levels."
        />
        
        {/* Hero Image */}
        <div className="mt-10 relative rounded-xl overflow-hidden">
          <img 
            src="/lovable-uploads/government-program-solutions-hero.jpg" 
            alt="Government Nutrition Program" 
            className="w-full aspect-[21/9] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
            <div className="text-white p-8 md:p-12 max-w-2xl">
              <Building className="w-16 h-16 text-vitanium-400 mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Public Nutrition Solutions</h2>
              <p className="text-lg text-white/80">
                Supporting government initiatives to combat malnutrition through specialized formulations, technical support, and implementation expertise.
              </p>
            </div>
          </div>
        </div>
        
        {/* Overview */}
        <div className="mt-16 max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="text-lg text-neutral-700 mb-6">
              Government nutrition programs play a crucial role in addressing food security and malnutrition at scale. VitaniumX collaborates with government agencies to develop tailored nutritional solutions for various public distribution programs, welfare schemes, and institutional feeding initiatives.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-lg text-neutral-700">
              Our government program solutions are designed with considerations for scale, cost-effectiveness, cultural appropriateness, and nutritional adequacy. We provide end-to-end support, from formulation development to implementation guidance and program monitoring, ensuring successful execution of large-scale nutrition interventions.
            </p>
          </ScrollReveal>
        </div>
        
        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard 
            number="15+"
            label="Government partnerships"
            glowColor="blue"
          />
          <StatCard 
            number="50M+"
            label="Program beneficiaries"
            glowColor="green"
            delay={100}
          />
          <StatCard 
            number="20+"
            label="Custom formulations"
            glowColor="amber"
            delay={200}
          />
          <StatCard 
            number="25%"
            label="Average deficiency reduction"
            glowColor="purple"
            delay={300}
          />
        </div>
        
        {/* Product Details */}
        <div className="mt-16">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-neutral-800 mb-12">Our Government Program Solutions</h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* FRK Premix */}
            <ScrollReveal delay={100}>
              <div className="bg-white rounded-xl shadow-subtle border border-neutral-100 overflow-hidden shadow-[0_10px_25px_-5px_rgba(14,165,233,0.3)] hover:shadow-[0_15px_35px_-5px_rgba(14,165,233,0.5)] transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src="/lovable-uploads/FRK-premix.jpg" 
                    alt="FRK Premix" 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4">Fortified Rice Kernel (FRK) Premix</h3>
                  <p className="text-neutral-600 mb-6">
                    Our FRK premix solutions are designed specifically for government rice fortification programs. These premixes are used to produce fortified rice kernels that are then blended with regular rice for distribution through public channels.
                  </p>
                  
                  <h4 className="font-semibold text-lg mb-3">Key Features:</h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Multiple micronutrient formulations</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Rice-like appearance and texture</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Stability through washing and cooking</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Customizable to regional requirements</span>
                    </li>
                  </ul>
                  
                  <h4 className="font-semibold text-lg mb-3">Applications:</h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Public Distribution System (PDS)</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Mid-Day Meal schemes</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Integrated Child Development Services</span>
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
            
            {/* Panjiri Premix */}
            <ScrollReveal delay={200}>
              <div className="bg-white rounded-xl shadow-subtle border border-neutral-100 overflow-hidden shadow-[0_10px_25px_-5px_rgba(16,185,129,0.3)] hover:shadow-[0_15px_35px_-5px_rgba(16,185,129,0.5)] transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src="/lovable-uploads/panjiri-premix.webp" 
                    alt="Panjiri Premix" 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4">Panjiri Premix</h3>
                  <p className="text-neutral-600 mb-6">
                    Our Panjiri premix is a micronutrient blend specifically designed for traditional Indian supplementary food distributed through maternal and child welfare programs. The formulation is culturally acceptable while delivering essential nutrition.
                  </p>
                  
                  <h4 className="font-semibold text-lg mb-3">Key Features:</h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Balanced macro and micronutrients</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Culturally accepted flavor profile</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Good keeping quality in varied conditions</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Ready-to-eat formulation</span>
                    </li>
                  </ul>
                  
                  <h4 className="font-semibold text-lg mb-3">Target Beneficiaries:</h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Pregnant and lactating women</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Children 6-36 months</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Adolescent girls</span>
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
            {/* Sweet & Namkeen Dalia */}
            <ScrollReveal delay={300}>
              <div className="bg-white rounded-xl shadow-subtle border border-neutral-100 overflow-hidden shadow-[0_10px_25px_-5px_rgba(245,158,11,0.3)] hover:shadow-[0_15px_35px_-5px_rgba(245,158,11,0.5)] transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src="/lovable-uploads/dalia-premix.jpg" 
                    alt="Dalia Products" 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4">Sweet & Namkeen Dalia</h3>
                  <p className="text-neutral-600 mb-6">
                    Our fortified Dalia (broken wheat) products come in both sweet and savory (namkeen) variants, designed for government feeding programs. These products provide essential nutrients in a familiar and easily prepared format.
                  </p>
                  
                  <h4 className="font-semibold text-lg mb-3">Key Features:</h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">High protein content</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Comprehensive micronutrient fortification</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Multiple flavor options</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Simple preparation requirements</span>
                    </li>
                  </ul>
                  
                  <h4 className="font-semibold text-lg mb-3">Applications:</h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">School feeding programs</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Community nutrition centers</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Institutional feeding</span>
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
            
            {/* Custom Government Formulations */}
            <ScrollReveal delay={400}>
              <div className="bg-white rounded-xl shadow-subtle border border-neutral-100 overflow-hidden shadow-[0_10px_25px_-5px_rgba(139,92,246,0.3)] hover:shadow-[0_15px_35px_-5px_rgba(139,92,246,0.5)] transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src="/lovable-uploads/custom-gov-formulation.jpeg" 
                    alt="Custom Government Formulations" 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4">Custom Government Formulations</h3>
                  <p className="text-neutral-600 mb-6">
                    We develop tailored nutritional formulations to meet specific government program requirements, regional preferences, and nutritional objectives. Our team works closely with government agencies to create solutions that address local challenges.
                  </p>
                  
                  <h4 className="font-semibold text-lg mb-3">Development Process:</h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Needs assessment and gap analysis</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Formulation development with local ingredients</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Stability and acceptability testing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Scale-up and implementation support</span>
                    </li>
                  </ul>
                  
                  <h4 className="font-semibold text-lg mb-3">Customization Options:</h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Nutrient composition and levels</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Product format and preparation method</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Packaging and shelf-life requirements</span>
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
                      src="/lovable-uploads/gov-rice-fortification-prog.jpg" 
                      alt="Rice Fortification Program" 
                      className="w-full aspect-video object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-4">State-Wide Rice Fortification Program</h3>
                  <p className="text-neutral-600 mb-6">
                    Partnered with a state government to implement rice fortification across its public distribution system. Developed FRK premix formulation specific to local nutritional deficiencies and provided technical support for implementation.
                  </p>
                  <div className="flex items-center space-x-4 mt-auto">
                    <div className="font-semibold">Impact:</div>
                    <div className="text-vitanium-600">12M+ beneficiaries reached</div>
                  </div>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={200}>
                <div className="flex flex-col h-full">
                  <div className="mb-4 rounded-lg overflow-hidden">
                    <img 
                      src="/lovable-uploads/gov-mid-day-meal-prog.jpg" 
                      alt="School Nutrition Program" 
                      className="w-full aspect-video object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Mid-Day Meal Enhancement Initiative</h3>
                  <p className="text-neutral-600 mb-6">
                    Collaborated with education department to develop micronutrient premixes for enhancing the nutritional value of school meals. Created both centralized and decentralized fortification options to accommodate different kitchen setups.
                  </p>
                  <div className="flex items-center space-x-4 mt-auto">
                    <div className="font-semibold">Impact:</div>
                    <div className="text-vitanium-600">30% improvement in nutritional adequacy</div>
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
                  <h2 className="text-2xl font-bold mb-4">Partner With Us for Government Nutrition Programs</h2>
                  <p className="text-neutral-300 mb-6">
                    Our team has extensive experience working with government agencies at national, state, and local levels to design and implement effective nutrition interventions.
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
                  <h3 className="text-xl font-semibold mb-4">Our Government Program Services Include:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-400 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-neutral-300">Nutritional need assessment and program design</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-400 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-neutral-300">Custom formulation development</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-400 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-neutral-300">Quality control systems and training</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-400 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-neutral-300">Monitoring and evaluation support</span>
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

export default GovernmentPrograms;
