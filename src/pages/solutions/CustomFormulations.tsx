
import React from 'react';
import { Link } from 'react-router-dom';
import { FlaskConical, ArrowRight, CheckCircle, Settings, Users, ClipboardCheck } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';

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
          <div className="aspect-[21/9] bg-neutral-200 flex justify-center items-center">
            <div className="text-center p-6">
              <FlaskConical className="w-16 h-16 mx-auto text-vitanium-600 mb-4" />
              <p className="text-neutral-500">
                Image placeholder: Laboratory technicians working on custom formulations
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
        
        {/* Our Process */}
        <div className="mt-20">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-neutral-800 mb-12">Our Custom Formulation Process</h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal delay={100}>
              <div className="bg-white p-6 rounded-lg shadow-subtle border border-neutral-100 h-full">
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
              <div className="bg-white p-6 rounded-lg shadow-subtle border border-neutral-100 h-full">
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
              <div className="bg-white p-6 rounded-lg shadow-subtle border border-neutral-100 h-full">
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
              <div className="bg-white p-6 rounded-lg shadow-subtle border border-neutral-100 h-full">
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
              <div className="bg-white p-6 rounded-lg shadow-subtle border border-neutral-100 h-full">
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
              <div className="bg-white p-6 rounded-lg shadow-subtle border border-neutral-100 h-full">
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
              <div className="bg-white p-6 rounded-lg shadow-subtle border border-neutral-100 h-full">
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
              <div className="bg-white p-6 rounded-lg shadow-subtle border border-neutral-100 h-full">
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
