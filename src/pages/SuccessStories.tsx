
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  TrendingUp, 
  Award, 
  Shield, 
  HeartPulse, 
  ChevronRight 
} from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';

const SuccessStories = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="container-wide">
        <SectionHeading
          subtitle="Success Stories"
          title="Making a Difference"
          description="Discover how our micronutrient premixes are helping organizations combat malnutrition and improve public health."
        />
        
        {/* Overview Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="text-lg text-neutral-700 mb-6">
              At VitaniumX, we take pride in the positive impact our products have on communities across India and beyond. Our success stories showcase how our partnerships with government programs, food manufacturers, and other organizations are helping to address micronutrient deficiencies and improve public health.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-lg text-neutral-700">
              From large-scale government initiatives to innovative product developments with food manufacturers, our success stories highlight the real-world applications and benefits of our micronutrient premixes.
            </p>
          </ScrollReveal>
        </div>
        
        {/* Featured Success Story */}
        <div className="mt-20">
          <ScrollReveal>
            <div className="bg-white p-8 rounded-xl shadow-elevated border border-neutral-100">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-2/3">
                  <span className="inline-block text-sm font-semibold uppercase tracking-wider text-vitanium-600 mb-4">
                    Featured Success Story
                  </span>
                  <h2 className="text-2xl font-bold text-neutral-800 mb-6">
                    Addressing Anemia in Uttar Pradesh: The FRK Premix Initiative
                  </h2>
                  <p className="text-neutral-700 mb-6">
                    In partnership with the Uttar Pradesh government, VitaniumX supplied Fortified Rice Kernels (FRK) premixes to address iron deficiency anemia, which affects a significant portion of the state's population, particularly women and children.
                  </p>
                  <p className="text-neutral-700 mb-6">
                    The program integrated our fortified rice kernels into the Public Distribution System (PDS), ensuring that fortified rice reached millions of households. Our specialized premix was formulated to provide optimal bioavailability of iron while maintaining the taste and appearance of traditional rice.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                    <div className="bg-neutral-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-vitanium-600">2.8M+</div>
                      <div className="text-neutral-600">Households reached</div>
                    </div>
                    <div className="bg-neutral-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-vitanium-600">14,000+</div>
                      <div className="text-neutral-600">Tonnes of fortified rice distributed</div>
                    </div>
                    <div className="bg-neutral-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-vitanium-600">18%</div>
                      <div className="text-neutral-600">Estimated reduction in anemia prevalence</div>
                    </div>
                    <div className="bg-neutral-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-vitanium-600">95%</div>
                      <div className="text-neutral-600">Consumer acceptance rate</div>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/3">
                  <div className="bg-navy-50 p-6 rounded-lg h-full">
                    <h3 className="text-xl font-semibold mb-4">Project Highlights</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <TrendingUp className="h-5 w-5 text-vitanium-600 mr-3 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-neutral-700">Significant impact on health indicators in targeted districts</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Shield className="h-5 w-5 text-vitanium-600 mr-3 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-neutral-700">Formulated to withstand local cooking methods without nutrient loss</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Users className="h-5 w-5 text-vitanium-600 mr-3 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-neutral-700">Seamless integration with existing distribution channels</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Award className="h-5 w-5 text-vitanium-600 mr-3 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-neutral-700">Recognized as a model program for other states</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-8">
                      <Link to="/contact" className="text-vitanium-600 font-medium flex items-center hover:text-vitanium-700 transition-colors">
                        <span>Request full case study</span>
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
        
        {/* Success Stories Grid */}
        <div className="mt-20">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-neutral-800 mb-10 text-center">More Success Stories</h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollReveal delay={100}>
              <div className="bg-white p-6 rounded-lg shadow-subtle border border-neutral-100 h-full">
                <div className="flex items-center mb-6">
                  <HeartPulse className="h-10 w-10 text-vitanium-600 mr-4" />
                  <h3 className="text-xl font-semibold">Madhya Pradesh ICDS Program</h3>
                </div>
                <p className="text-neutral-600 mb-6">
                  Partnered with the Madhya Pradesh government to supply Dalia and Panjiri premixes for the Integrated Child Development Services (ICDS) program, targeting pregnant women, lactating mothers, and children.
                </p>
                <div className="flex justify-between items-center mt-6">
                  <div className="text-sm text-neutral-500">
                    <span className="font-semibold">Impact:</span> 1.2M+ beneficiaries
                  </div>
                  <Link to="/contact" className="text-vitanium-600 flex items-center hover:text-vitanium-700 transition-colors">
                    <span>Details</span>
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <div className="bg-white p-6 rounded-lg shadow-subtle border border-neutral-100 h-full">
                <div className="flex items-center mb-6">
                  <Award className="h-10 w-10 text-vitanium-600 mr-4" />
                  <h3 className="text-xl font-semibold">School Feeding Program</h3>
                </div>
                <p className="text-neutral-600 mb-6">
                  Supplied micronutrient premixes for the Mid-Day Meal (MDM) program, ensuring that school children receive essential vitamins and minerals as part of their daily meals.
                </p>
                <div className="flex justify-between items-center mt-6">
                  <div className="text-sm text-neutral-500">
                    <span className="font-semibold">Impact:</span> 380,000+ students
                  </div>
                  <Link to="/contact" className="text-vitanium-600 flex items-center hover:text-vitanium-700 transition-colors">
                    <span>Details</span>
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={300}>
              <div className="bg-white p-6 rounded-lg shadow-subtle border border-neutral-100 h-full">
                <div className="flex items-center mb-6">
                  <Shield className="h-10 w-10 text-vitanium-600 mr-4" />
                  <h3 className="text-xl font-semibold">Dairy Fortification Project</h3>
                </div>
                <p className="text-neutral-600 mb-6">
                  Collaborated with a leading dairy cooperative to fortify milk with Vitamins A and D, reaching millions of consumers across multiple states with nutrient-enriched dairy products.
                </p>
                <div className="flex justify-between items-center mt-6">
                  <div className="text-sm text-neutral-500">
                    <span className="font-semibold">Impact:</span> 4.5M+ consumers daily
                  </div>
                  <Link to="/contact" className="text-vitanium-600 flex items-center hover:text-vitanium-700 transition-colors">
                    <span>Details</span>
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={400}>
              <div className="bg-white p-6 rounded-lg shadow-subtle border border-neutral-100 h-full">
                <div className="flex items-center mb-6">
                  <TrendingUp className="h-10 w-10 text-vitanium-600 mr-4" />
                  <h3 className="text-xl font-semibold">FMCG Collaboration</h3>
                </div>
                <p className="text-neutral-600 mb-6">
                  Developed custom premixes for a leading FMCG company's range of fortified breakfast cereals and biscuits, enhancing their nutritional profile while maintaining taste and texture.
                </p>
                <div className="flex justify-between items-center mt-6">
                  <div className="text-sm text-neutral-500">
                    <span className="font-semibold">Impact:</span> 7 product lines enhanced
                  </div>
                  <Link to="/contact" className="text-vitanium-600 flex items-center hover:text-vitanium-700 transition-colors">
                    <span>Details</span>
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={500}>
              <div className="bg-white p-6 rounded-lg shadow-subtle border border-neutral-100 h-full">
                <div className="flex items-center mb-6">
                  <Users className="h-10 w-10 text-vitanium-600 mr-4" />
                  <h3 className="text-xl font-semibold">Anemia Reduction Initiative</h3>
                </div>
                <p className="text-neutral-600 mb-6">
                  Partnered with a state health department to implement a targeted iron fortification program for adolescent girls, addressing prevalent iron deficiency anemia.
                </p>
                <div className="flex justify-between items-center mt-6">
                  <div className="text-sm text-neutral-500">
                    <span className="font-semibold">Impact:</span> 22% reduction in anemia cases
                  </div>
                  <Link to="/contact" className="text-vitanium-600 flex items-center hover:text-vitanium-700 transition-colors">
                    <span>Details</span>
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={600}>
              <div className="bg-white p-6 rounded-lg shadow-subtle border border-neutral-100 h-full">
                <div className="flex items-center mb-6">
                  <HeartPulse className="h-10 w-10 text-vitanium-600 mr-4" />
                  <h3 className="text-xl font-semibold">Therapeutic Food Program</h3>
                </div>
                <p className="text-neutral-600 mb-6">
                  Developed specialized nutrient-dense formulations for a non-profit organization's program addressing acute malnutrition in vulnerable children.
                </p>
                <div className="flex justify-between items-center mt-6">
                  <div className="text-sm text-neutral-500">
                    <span className="font-semibold">Impact:</span> 18,500+ children treated
                  </div>
                  <Link to="/contact" className="text-vitanium-600 flex items-center hover:text-vitanium-700 transition-colors">
                    <span>Details</span>
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
        
        {/* Testimonials Section */}
        <div className="mt-24">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-neutral-800 mb-10 text-center">Client Testimonials</h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal delay={100}>
              <div className="bg-white p-8 rounded-lg shadow-subtle border border-neutral-100">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-navy-100 flex items-center justify-center text-navy-600 font-bold text-xl">
                    UP
                  </div>
                </div>
                <blockquote className="text-neutral-700 mb-6 text-center italic">
                  "VitaniumX's FRK premix has been instrumental in our efforts to address iron deficiency anemia in Uttar Pradesh. Their technical support and consistent quality have helped us implement a successful fortification program."
                </blockquote>
                <div className="text-center">
                  <div className="font-semibold text-neutral-800">Dr. Rajesh Kumar</div>
                  <div className="text-sm text-neutral-500">Nutrition Program Director, Uttar Pradesh Government</div>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <div className="bg-white p-8 rounded-lg shadow-subtle border border-neutral-100">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-vitanium-100 flex items-center justify-center text-vitanium-600 font-bold text-xl">
                    IC
                  </div>
                </div>
                <blockquote className="text-neutral-700 mb-6 text-center italic">
                  "Working with VitaniumX on our ICDS program has significantly improved the nutritional quality of the food we provide to mothers and children. Their team's expertise in formulation and commitment to quality have made them a valuable partner."
                </blockquote>
                <div className="text-center">
                  <div className="font-semibold text-neutral-800">Smt. Anita Sharma</div>
                  <div className="text-sm text-neutral-500">ICDS Program Officer, Madhya Pradesh</div>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={300}>
              <div className="bg-white p-8 rounded-lg shadow-subtle border border-neutral-100">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 font-bold text-xl">
                    FP
                  </div>
                </div>
                <blockquote className="text-neutral-700 mb-6 text-center italic">
                  "As a food manufacturer, finding a reliable supplier of high-quality micronutrient premixes is crucial. VitaniumX has consistently delivered premixes that integrate seamlessly into our products without affecting taste or texture."
                </blockquote>
                <div className="text-center">
                  <div className="font-semibold text-neutral-800">Vikram Mehta</div>
                  <div className="text-sm text-neutral-500">Product Development Manager, Leading Food Company</div>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={400}>
              <div className="bg-white p-8 rounded-lg shadow-subtle border border-neutral-100">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-navy-100 flex items-center justify-center text-navy-600 font-bold text-xl">
                    NG
                  </div>
                </div>
                <blockquote className="text-neutral-700 mb-6 text-center italic">
                  "VitaniumX's specialized formulations for our therapeutic feeding program have played a critical role in our mission to address malnutrition. Their commitment to quality and public health aligns perfectly with our goals."
                </blockquote>
                <div className="text-center">
                  <div className="font-semibold text-neutral-800">Dr. Priya Desai</div>
                  <div className="text-sm text-neutral-500">Nutrition Program Lead, International NGO</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="mt-24">
          <div className="bg-vitanium-50 p-8 rounded-xl border border-vitanium-100">
            <div className="max-w-3xl mx-auto text-center">
              <ScrollReveal>
                <h2 className="text-2xl font-bold text-neutral-800 mb-6">Ready to Create Your Success Story?</h2>
              </ScrollReveal>
              
              <ScrollReveal delay={100}>
                <p className="text-lg text-neutral-700 mb-8">
                  Join the growing list of organizations achieving significant nutritional impact with VitaniumX's micronutrient premixes. Contact us to discuss how we can support your fortification goals.
                </p>
              </ScrollReveal>
              
              <ScrollReveal delay={200}>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link to="/get-quote" className="btn-primary">
                    Get a Quote
                  </Link>
                  <Link to="/contact" className="btn-secondary">
                    Contact Our Team
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

export default SuccessStories;
