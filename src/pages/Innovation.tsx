
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Beaker, 
  FlaskConical, 
  TestTube, 
  Microscope, 
  Lightbulb, 
  Users, 
  BarChart, 
  FileText 
} from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';

const Innovation = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="container-wide">
        <SectionHeading
          subtitle="Innovation Lab"
          title="Pioneering Nutritional Solutions"
          description="Our dedicated R&D team continuously explores new technologies and formulations to enhance the efficacy and stability of our micronutrient premixes."
        />
        
        {/* Overview Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="text-lg text-neutral-700 mb-6">
              Innovation is a core value at VitaniumX. Our research and development efforts focus on creating cutting-edge formulations that address evolving nutritional needs and challenges in food fortification.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-lg text-neutral-700">
              From developing stable, bioavailable nutrient compositions to creating custom solutions for specific applications, our innovation lab is constantly working to push the boundaries of what's possible in micronutrient fortification.
            </p>
          </ScrollReveal>
        </div>
        
        {/* Research Focus Areas */}
        <div className="mt-20">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-neutral-800 mb-10 text-center">Research Focus Areas</h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollReveal delay={100}>
              <div className="bg-white p-8 rounded-lg shadow-subtle border border-neutral-100 h-full">
                <FlaskConical className="h-10 w-10 text-vitanium-600 mb-6" />
                <h3 className="text-xl font-semibold mb-4">Bioavailability Enhancement</h3>
                <p className="text-neutral-600">
                  Developing technologies to improve the absorption and utilization of micronutrients in the human body, ensuring maximum nutritional impact.
                </p>
                <div className="mt-6 text-sm text-vitanium-600 font-medium">
                  Key research: Encapsulation techniques, particle size optimization, nutrient interactions
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <div className="bg-white p-8 rounded-lg shadow-subtle border border-neutral-100 h-full">
                <TestTube className="h-10 w-10 text-vitanium-600 mb-6" />
                <h3 className="text-xl font-semibold mb-4">Stability Improvement</h3>
                <p className="text-neutral-600">
                  Creating formulations that maintain nutrient potency throughout processing, storage, and cooking to ensure effective fortification.
                </p>
                <div className="mt-6 text-sm text-vitanium-600 font-medium">
                  Key research: Heat-stable compounds, oxidation prevention, moisture resistance
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={300}>
              <div className="bg-white p-8 rounded-lg shadow-subtle border border-neutral-100 h-full">
                <Microscope className="h-10 w-10 text-vitanium-600 mb-6" />
                <h3 className="text-xl font-semibold mb-4">Sensory Neutrality</h3>
                <p className="text-neutral-600">
                  Ensuring that our premixes do not affect the taste, color, or texture of fortified foods, maintaining consumer acceptance.
                </p>
                <div className="mt-6 text-sm text-vitanium-600 font-medium">
                  Key research: Flavor masking, color stabilization, texture preservation
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={400}>
              <div className="bg-white p-8 rounded-lg shadow-subtle border border-neutral-100 h-full">
                <Beaker className="h-10 w-10 text-vitanium-600 mb-6" />
                <h3 className="text-xl font-semibold mb-4">Novel Nutrient Delivery</h3>
                <p className="text-neutral-600">
                  Exploring innovative technologies for incorporating micronutrients into various food matrices for targeted fortification.
                </p>
                <div className="mt-6 text-sm text-vitanium-600 font-medium">
                  Key research: Microencapsulation, nanotechnology, controlled release
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={500}>
              <div className="bg-white p-8 rounded-lg shadow-subtle border border-neutral-100 h-full">
                <BarChart className="h-10 w-10 text-vitanium-600 mb-6" />
                <h3 className="text-xl font-semibold mb-4">Efficacy Studies</h3>
                <p className="text-neutral-600">
                  Conducting research to validate the nutritional impact of our fortification solutions in real-world conditions.
                </p>
                <div className="mt-6 text-sm text-vitanium-600 font-medium">
                  Key research: Biomarker assessment, fortification retention studies, intervention trials
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={600}>
              <div className="bg-white p-8 rounded-lg shadow-subtle border border-neutral-100 h-full">
                <Lightbulb className="h-10 w-10 text-vitanium-600 mb-6" />
                <h3 className="text-xl font-semibold mb-4">Sustainable Formulations</h3>
                <p className="text-neutral-600">
                  Developing environmentally responsible approaches to micronutrient fortification, aligned with global sustainability goals.
                </p>
                <div className="mt-6 text-sm text-vitanium-600 font-medium">
                  Key research: Resource efficiency, eco-friendly ingredients, reduced environmental impact
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
        
        {/* Innovation Process */}
        <div className="mt-24">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-neutral-800 mb-10 text-center">Our Innovation Process</h2>
          </ScrollReveal>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ScrollReveal delay={100}>
                <div className="bg-white p-8 rounded-lg shadow-subtle border border-neutral-100 h-full">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 rounded-full bg-vitanium-600 flex items-center justify-center text-white font-bold mr-4">
                      1
                    </div>
                    <h3 className="text-xl font-semibold">Needs Assessment</h3>
                  </div>
                  <p className="text-neutral-600">
                    We identify nutritional gaps, food processing challenges, or specific client requirements that need innovative solutions.
                  </p>
                  <div className="mt-6 flex items-center">
                    <FileText className="h-5 w-5 text-vitanium-600 mr-2" />
                    <span className="text-sm text-neutral-600">Market analysis and nutritional surveys</span>
                  </div>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={200}>
                <div className="bg-white p-8 rounded-lg shadow-subtle border border-neutral-100 h-full">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 rounded-full bg-vitanium-600 flex items-center justify-center text-white font-bold mr-4">
                      2
                    </div>
                    <h3 className="text-xl font-semibold">Concept Development</h3>
                  </div>
                  <p className="text-neutral-600">
                    Our R&D team brainstorms potential approaches, leveraging scientific knowledge and industry experience to create initial concepts.
                  </p>
                  <div className="mt-6 flex items-center">
                    <Lightbulb className="h-5 w-5 text-vitanium-600 mr-2" />
                    <span className="text-sm text-neutral-600">Scientific literature review and team ideation</span>
                  </div>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={300}>
                <div className="bg-white p-8 rounded-lg shadow-subtle border border-neutral-100 h-full">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 rounded-full bg-vitanium-600 flex items-center justify-center text-white font-bold mr-4">
                      3
                    </div>
                    <h3 className="text-xl font-semibold">Laboratory Testing</h3>
                  </div>
                  <p className="text-neutral-600">
                    Promising concepts are tested in our laboratory using bench-scale experiments to validate the technical feasibility.
                  </p>
                  <div className="mt-6 flex items-center">
                    <TestTube className="h-5 w-5 text-vitanium-600 mr-2" />
                    <span className="text-sm text-neutral-600">Formulation trials and analytical testing</span>
                  </div>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={400}>
                <div className="bg-white p-8 rounded-lg shadow-subtle border border-neutral-100 h-full">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 rounded-full bg-vitanium-600 flex items-center justify-center text-white font-bold mr-4">
                      4
                    </div>
                    <h3 className="text-xl font-semibold">Prototype Development</h3>
                  </div>
                  <p className="text-neutral-600">
                    Successful concepts are refined into prototypes that undergo more comprehensive testing for stability, efficacy, and sensory impact.
                  </p>
                  <div className="mt-6 flex items-center">
                    <FlaskConical className="h-5 w-5 text-vitanium-600 mr-2" />
                    <span className="text-sm text-neutral-600">Stability testing and sensory evaluation</span>
                  </div>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={500}>
                <div className="bg-white p-8 rounded-lg shadow-subtle border border-neutral-100 h-full">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 rounded-full bg-vitanium-600 flex items-center justify-center text-white font-bold mr-4">
                      5
                    </div>
                    <h3 className="text-xl font-semibold">Pilot Production</h3>
                  </div>
                  <p className="text-neutral-600">
                    Promising prototypes are scaled up to pilot production to address manufacturing challenges and optimize processes.
                  </p>
                  <div className="mt-6 flex items-center">
                    <BarChart className="h-5 w-5 text-vitanium-600 mr-2" />
                    <span className="text-sm text-neutral-600">Process optimization and cost analysis</span>
                  </div>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={600}>
                <div className="bg-white p-8 rounded-lg shadow-subtle border border-neutral-100 h-full">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 rounded-full bg-vitanium-600 flex items-center justify-center text-white font-bold mr-4">
                      6
                    </div>
                    <h3 className="text-xl font-semibold">Commercialization</h3>
                  </div>
                  <p className="text-neutral-600">
                    Successfully validated innovations are integrated into our product portfolio with comprehensive quality controls and documentation.
                  </p>
                  <div className="mt-6 flex items-center">
                    <Users className="h-5 w-5 text-vitanium-600 mr-2" />
                    <span className="text-sm text-neutral-600">Market launch and customer implementation support</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
        
        {/* Collaborative Research */}
        <div className="mt-24">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-neutral-800 mb-10 text-center">Collaborative Research</h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal delay={100}>
              <div className="bg-white p-8 rounded-xl shadow-subtle border border-neutral-100">
                <h3 className="text-xl font-bold text-vitanium-600 mb-6">Research Partnerships</h3>
                <p className="text-neutral-700 mb-6">
                  We collaborate with academic institutions, research organizations, and industry partners to advance the science of micronutrient fortification and address complex nutritional challenges.
                </p>
                <p className="text-neutral-700">
                  These partnerships enable us to leverage multidisciplinary expertise and resources, accelerating innovation and ensuring our solutions are grounded in solid scientific evidence.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <div className="space-y-6">
                <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-100">
                  <h4 className="font-semibold text-lg mb-3">Food Technology Centers</h4>
                  <p className="text-neutral-600">
                    Partnerships with food technology institutes to explore advanced processing methods and fortification techniques.
                  </p>
                </div>
                
                <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-100">
                  <h4 className="font-semibold text-lg mb-3">Nutrition Research Institutes</h4>
                  <p className="text-neutral-600">
                    Collaboration with nutrition experts to validate the health impact of our fortification solutions.
                  </p>
                </div>
                
                <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-100">
                  <h4 className="font-semibold text-lg mb-3">Government Research Programs</h4>
                  <p className="text-neutral-600">
                    Working with government initiatives to address specific nutritional challenges through targeted fortification approaches.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="mt-24">
          <div className="bg-navy-900 text-white py-12 px-8 rounded-xl">
            <div className="max-w-3xl mx-auto text-center">
              <ScrollReveal>
                <h2 className="text-2xl font-bold mb-6">Partner with Our Innovation Team</h2>
              </ScrollReveal>
              
              <ScrollReveal delay={100}>
                <p className="text-lg text-neutral-300 mb-8">
                  Do you have a specific fortification challenge? Our innovation team can work with you to develop custom solutions that meet your unique requirements.
                </p>
              </ScrollReveal>
              
              <ScrollReveal delay={200}>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link to="/get-quote" className="btn-primary bg-vitanium-500 hover:bg-vitanium-600">
                    Discuss Your Project
                  </Link>
                  <Link to="/contact" className="btn-secondary bg-transparent text-white border-white hover:bg-white/10">
                    Contact R&D Team
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Innovation;
