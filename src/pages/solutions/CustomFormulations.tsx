
import React from 'react';
import { Link } from 'react-router-dom';
import { FlaskConical, ArrowRight, CheckCircle, Settings, Users, ClipboardCheck } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import FoodImageGallery from '@/components/ui/FoodImageGallery';

const CustomFormulations = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="container-wide">
        <SectionHeading
          subtitle="Solutions & Products"
          title="Customized Formulations"
          description="Tailor-made micronutrient premixes designed to meet your specific requirements and applications."
        />
        
        {/* Hero Image */}
        <div className="mt-10 relative rounded-xl overflow-hidden">
          <img 
            src="/lovable-uploads/10da3b95-043b-4c40-a27d-55b29dfd59e0.png" 
            alt="Food scientist examining nutrient formulations in a laboratory" 
            className="w-full aspect-[21/9] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
            <div className="text-white p-8 md:p-12 max-w-2xl">
              <FlaskConical className="w-16 h-16 text-vitanium-400 mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Precise Nutrition Solutions</h2>
              <p className="text-lg text-white/80">
                Scientifically designed formulations customized for your specific products and target markets.
              </p>
            </div>
          </div>
        </div>
        
        {/* Overview */}
        <div className="mt-16 max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="text-lg text-neutral-700 mb-6">
              At VitaniumX, we understand that every food product, target population, and market has unique nutritional requirements. Our custom formulation service allows you to create precisely tailored micronutrient premixes that address specific nutritional goals while ensuring compatibility with your product matrix.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-lg text-neutral-700">
              Whether you're developing a new fortified product, reformulating an existing one, or implementing a targeted nutrition program, our team of food scientists and nutritionists will work closely with you to develop optimal solutions that meet your technical, regulatory, and commercial objectives.
            </p>
          </ScrollReveal>
        </div>
        
        {/* Food Image Gallery */}
        <div className="mt-16">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-neutral-800 mb-8">Our Custom Solutions</h2>
          </ScrollReveal>
          
          <FoodImageGallery 
            images={[
              {
                src: "/lovable-uploads/d0098acb-8109-49f0-813d-3cb10b8a9f7b.png",
                alt: "Manufacturing process with nutrient premix production line"
              },
              {
                src: "/lovable-uploads/4fa0c9a4-c990-4524-9ce1-c0bc24be38b6.png",
                alt: "Dairy products fortified with customized nutrients"
              },
              {
                src: "/lovable-uploads/69a2d987-2c3a-41b1-909d-4e2c5cb19d6f.png",
                alt: "Food safety testing and nutrient analysis in laboratory"
              },
              {
                src: "/lovable-uploads/6023eb0a-5382-4ccd-81a1-ceda74c22753.png",
                alt: "Maternal nutrition with fresh fruit blend"
              },
              {
                src: "/lovable-uploads/b6defa9a-7ef3-4a67-b3ee-6f818c1ddc85.png",
                alt: "Child nutrition with creative healthy eating"
              },
              {
                src: "/lovable-uploads/efa88797-b242-4857-8154-49dcab3871c2.png",
                alt: "Micronutrient powder production on conveyor"
              }
            ]}
            columns={3}
            className="mb-12"
          />
        </div>
        
        {/* Our Process */}
        <div className="mt-20">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-neutral-800 mb-12">Our Custom Formulation Process</h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal delay={100}>
              <div className="bg-white p-6 rounded-lg shadow-subtle border border-neutral-100 h-full shadow-[0_10px_25px_-5px_rgba(14,165,233,0.3)] hover:shadow-[0_15px_35px_-5px_rgba(14,165,233,0.5)] transition-all duration-300">
                <div className="mb-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-vitanium-100 text-vitanium-600 font-bold text-xl">
                    1
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4">Needs Assessment</h3>
                <p className="text-neutral-600 mb-6">
                  We begin by understanding your specific requirements, including:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Target nutrient profile and levels</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Food matrix characteristics</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Processing conditions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Shelf-life requirements</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Regulatory considerations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Budget parameters</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <div className="bg-white p-6 rounded-lg shadow-subtle border border-neutral-100 h-full shadow-[0_10px_25px_-5px_rgba(16,185,129,0.3)] hover:shadow-[0_15px_35px_-5px_rgba(16,185,129,0.5)] transition-all duration-300">
                <div className="mb-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-vitanium-100 text-vitanium-600 font-bold text-xl">
                    2
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4">Formulation Development</h3>
                <p className="text-neutral-600 mb-6">
                  Our scientific team creates custom formulations based on your specific requirements:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Selection of appropriate nutrient forms</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Optimization for stability and bioavailability</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Compatibility testing with food matrix</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Sensory evaluation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Accelerated shelf-life testing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Prototyping and iteration</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={300}>
              <div className="bg-white p-6 rounded-lg shadow-subtle border border-neutral-100 h-full shadow-[0_10px_25px_-5px_rgba(245,158,11,0.3)] hover:shadow-[0_15px_35px_-5px_rgba(245,158,11,0.5)] transition-all duration-300">
                <div className="mb-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-vitanium-100 text-vitanium-600 font-bold text-xl">
                    3
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4">Production & Implementation</h3>
                <p className="text-neutral-600 mb-6">
                  Once the formulation is finalized, we move to production and support implementation:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Scale-up to commercial production</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Quality control and assurance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Documentation and regulatory support</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Technical implementation guidance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Ongoing monitoring and optimization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Supply chain management</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
        
        {/* Custom Solutions */}
        <div className="mt-20">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-neutral-800 mb-12">Customization Options</h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <ScrollReveal delay={100}>
              <div className="bg-white p-6 rounded-lg shadow-subtle border border-neutral-100 h-full shadow-[0_10px_25px_-5px_rgba(139,92,246,0.3)] hover:shadow-[0_15px_35px_-5px_rgba(139,92,246,0.5)] transition-all duration-300">
                <div className="mb-6">
                  <Settings className="h-12 w-12 text-vitanium-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Nutrient Composition</h3>
                <p className="text-neutral-600 mb-6">
                  Customize the specific nutrients and their levels based on your target population needs or product positioning.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Specific vitamin and mineral combinations</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Tailored nutrient levels</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Specialized bioactive compounds</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <div className="bg-white p-6 rounded-lg shadow-subtle border border-neutral-100 h-full shadow-[0_10px_25px_-5px_rgba(236,72,153,0.3)] hover:shadow-[0_15px_35px_-5px_rgba(236,72,153,0.5)] transition-all duration-300">
                <div className="mb-6">
                  <Users className="h-12 w-12 text-vitanium-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Target Population</h3>
                <p className="text-neutral-600 mb-6">
                  Premixes designed to address the specific nutritional needs of different demographic groups.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Infants and young children</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Pregnant and lactating women</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Adolescents</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Older adults</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Special physiological conditions</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={300}>
              <div className="bg-white p-6 rounded-lg shadow-subtle border border-neutral-100 h-full shadow-[0_10px_25px_-5px_rgba(250,82,82,0.3)] hover:shadow-[0_15px_35px_-5px_rgba(250,82,82,0.5)] transition-all duration-300">
                <div className="mb-6">
                  <ClipboardCheck className="h-12 w-12 text-vitanium-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Technical Specifications</h3>
                <p className="text-neutral-600 mb-6">
                  Customization based on technical requirements and processing considerations.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Heat stability for baking applications</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Water solubility for beverage applications</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Encapsulation for improved stability</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Particle size and flow characteristics</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Sensory neutrality</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
        
        {/* Case Studies */}
        <div className="mt-20">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-neutral-800 mb-8">Custom Formulation Success Stories</h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal delay={100}>
              <div className="bg-white p-6 rounded-lg shadow-subtle border border-neutral-100 h-full shadow-[0_10px_25px_-5px_rgba(34,197,94,0.3)] hover:shadow-[0_15px_35px_-5px_rgba(34,197,94,0.5)] transition-all duration-300">
                <div className="mb-4 rounded-lg overflow-hidden">
                  <img 
                    src="/lovable-uploads/6aa39373-a88a-49b3-98ea-0dc7006f1609.png" 
                    alt="Quality control testing in food manufacturing facility" 
                    className="w-full aspect-video object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4">Maternal Nutrition Program</h3>
                <p className="text-neutral-600 mb-6">
                  Developed a specialized micronutrient premix for a state government program targeting pregnant women in rural areas. The formulation included iron, folate, calcium, zinc, vitamins A, D, and B-complex in forms optimized for bioavailability and acceptability.
                </p>
                <div className="bg-neutral-50 p-4 rounded-md">
                  <h4 className="font-semibold mb-2">Results:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">20% reduction in anemia prevalence among participants</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">15% improvement in birth weight outcomes</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">High compliance rate due to acceptable sensory properties</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <div className="bg-white p-6 rounded-lg shadow-subtle border border-neutral-100 h-full shadow-[0_10px_25px_-5px_rgba(168,85,247,0.3)] hover:shadow-[0_15px_35px_-5px_rgba(168,85,247,0.5)] transition-all duration-300">
                <div className="mb-4 rounded-lg overflow-hidden">
                  <img 
                    src="/lovable-uploads/671c36e8-6268-44ca-b9e1-1793ee35ba8e.png" 
                    alt="Industrial food production line with premix packaging" 
                    className="w-full aspect-video object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4">Fortified Dairy Product</h3>
                <p className="text-neutral-600 mb-6">
                  Created a custom micronutrient blend for a major dairy company launching a fortified yogurt product targeted at children. The formulation required stability during fermentation, minimal impact on flavor, and compliance with regulatory requirements for nutrition claims.
                </p>
                <div className="bg-neutral-50 p-4 rounded-md">
                  <h4 className="font-semibold mb-2">Results:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Successful product launch with "Source of 11 Vitamins & Minerals" claim</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">No detectable impact on product flavor or texture</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">25% sales premium compared to non-fortified variant</span>
                    </li>
                  </ul>
                </div>
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
                  <h2 className="text-2xl font-bold mb-4">Ready to Develop Your Custom Formulation?</h2>
                  <p className="text-neutral-300 mb-6">
                    Our team of experts is ready to work with you to create a tailored micronutrient premix that meets your specific requirements and objectives.
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
                  <h3 className="text-xl font-semibold mb-4">Our Custom Formulation Service Includes:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-400 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-neutral-300">Initial consultation and needs assessment</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-400 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-neutral-300">Formulation development and prototyping</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-400 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-neutral-300">Stability and compatibility testing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-400 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-neutral-300">Regulatory compliance support</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-400 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-neutral-300">Scale-up to commercial production</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-400 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-neutral-300">Ongoing technical support</span>
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

export default CustomFormulations;
