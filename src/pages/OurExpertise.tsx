
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Award, Users, TrendingUp, Globe, HeartPulse } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';

const OurExpertise = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="container-wide">
        <SectionHeading
          subtitle="Our Expertise"
          title="Leading Innovation in Micronutrient Fortification"
          description="Established in 2015, VitaniumX has grown to become a trusted leader in the development and manufacturing of high-quality micronutrient premixes."
        />
        
        {/* Overview Section */}
        <div className="mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <ScrollReveal>
                <h2 className="text-2xl font-bold text-neutral-800 mb-6">Who We Are</h2>
                <p className="text-lg text-neutral-700 mb-6">
                  At VitaniumX, we combine scientific expertise with advanced technology to develop premium micronutrient premixes that effectively address hidden hunger and malnutrition. Our dedicated team of nutritionists and food scientists work tirelessly to create customized solutions that meet the specific needs of our clients and the communities they serve.
                </p>
                <p className="text-lg text-neutral-700 mb-6">
                  With over 573 million fortified meals delivered between 2020 and 2024, our impact on public health is substantial and growing. We continue to expand our capabilities and refine our formulations to stay at the forefront of nutritional science and food fortification technology.
                </p>
              </ScrollReveal>
            </div>
            <div>
              <ScrollReveal animation="scale-in" delay={100}>
                <div className="bg-white p-8 rounded-xl shadow-subtle border border-neutral-100">
                  <h3 className="text-xl font-bold text-vitanium-600 mb-6">Our Mission</h3>
                  <p className="text-neutral-700 mb-6">
                    "To combat hidden hunger and malnutrition by delivering scientifically crafted, high-quality micronutrient premixes tailored to fortify staple foods, ensuring optimal nutrition for communities worldwide."
                  </p>
                  <h3 className="text-xl font-bold text-vitanium-600 mb-6">Our Vision</h3>
                  <p className="text-neutral-700">
                    "To lead the global fight against micronutrient deficiencies by becoming the most trusted partner in food fortification, fostering a healthier, more nourished world where every individual has access to essential nutrients for a thriving life."
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
        
        {/* Why Choose Us Section */}
        <div className="mt-20">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-neutral-800 mb-6 text-center">Why Choose VitaniumX</h2>
          </ScrollReveal>
          
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollReveal delay={100}>
              <div className="bg-white p-6 rounded-lg shadow-subtle border border-neutral-100 h-full">
                <Award className="h-10 w-10 text-vitanium-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Quality Certifications</h3>
                <p className="text-neutral-600">
                  Multiple certifications including GMP, ISO 9001:2015, FSSC 22000, FSSAI, and ISO 22000:2018, ensuring the highest standards of production and safety.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <div className="bg-white p-6 rounded-lg shadow-subtle border border-neutral-100 h-full">
                <Users className="h-10 w-10 text-vitanium-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Expert Team</h3>
                <p className="text-neutral-600">
                  Our team includes qualified nutritionists, food scientists, and quality control specialists with extensive experience in micronutrient fortification.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={300}>
              <div className="bg-white p-6 rounded-lg shadow-subtle border border-neutral-100 h-full">
                <TrendingUp className="h-10 w-10 text-vitanium-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Proven Impact</h3>
                <p className="text-neutral-600">
                  With over 573 million fortified meals delivered and 114,736 tonnes of food fortified, our solutions have made a significant impact on public health.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={400}>
              <div className="bg-white p-6 rounded-lg shadow-subtle border border-neutral-100 h-full">
                <Globe className="h-10 w-10 text-vitanium-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Government Partnerships</h3>
                <p className="text-neutral-600">
                  Successful collaborations with state governments and programs like ICDS, PDS, and MDM to address malnutrition at a national scale.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={500}>
              <div className="bg-white p-6 rounded-lg shadow-subtle border border-neutral-100 h-full">
                <FlaskConical className="h-10 w-10 text-vitanium-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Custom Formulations</h3>
                <p className="text-neutral-600">
                  Tailored micronutrient premixes designed to meet specific nutritional requirements, product applications, and regional standards.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={600}>
              <div className="bg-white p-6 rounded-lg shadow-subtle border border-neutral-100 h-full">
                <HeartPulse className="h-10 w-10 text-vitanium-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Health Impact Focus</h3>
                <p className="text-neutral-600">
                  Dedicated to combating micronutrient deficiencies and improving public health through effective fortification strategies.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
        
        {/* Key Members Section */}
        <div className="mt-20">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-neutral-800 mb-10 text-center">Our Team</h2>
          </ScrollReveal>
          
          <div className="max-w-3xl mx-auto">
            <ScrollReveal delay={100}>
              <div className="bg-white p-8 rounded-xl shadow-subtle border border-neutral-100 mb-8">
                <h3 className="text-xl font-bold text-vitanium-600 mb-2">Ruby Thakur</h3>
                <p className="text-neutral-500 mb-4">In-House Nutritionist</p>
                <div className="text-neutral-700 mb-6">
                  <p className="mb-2"><strong>Qualifications:</strong> MSc Dietetics & Food Service Management</p>
                  <p className="mb-2"><strong>Experience:</strong> 12+ years</p>
                  <p><strong>Role:</strong> Client nutrition counseling, custom formulation recommendations, pricing and bulk discount structuring, complaint handling, disease management</p>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <div className="bg-white p-8 rounded-xl shadow-subtle border border-neutral-100 mb-8">
                <h3 className="text-xl font-bold text-vitanium-600 mb-2">Management Team</h3>
                <p className="text-neutral-500 mb-4">Leadership & Production</p>
                <div className="text-neutral-700">
                  <p className="mb-2">Our management team brings decades of combined experience in food technology, manufacturing, and quality assurance.</p>
                  <p>The team includes IT Engineers, Sales Coordinators, and Formulation & Production experts who ensure that all operations run smoothly and products meet the highest standards.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
        
        {/* Impact & Reach Section */}
        <div className="mt-20">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-neutral-800 mb-6 text-center">Our Impact</h2>
          </ScrollReveal>
          
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollReveal delay={100}>
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-vitanium-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">573+ Million Fortified Meals</h3>
                    <p className="text-neutral-600">Delivered between 2020 and 2024, reaching vulnerable populations across India.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-vitanium-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">114,736 Tonnes of Food Fortified</h3>
                    <p className="text-neutral-600">Making a significant contribution to reducing micronutrient deficiencies.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-vitanium-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Government Program Partnerships</h3>
                    <p className="text-neutral-600">Working with ICDS, PDS, MDM, and state governments to reach those most in need.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-vitanium-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Target Beneficiaries</h3>
                    <p className="text-neutral-600">Infants, children, pregnant and lactating women, and adolescent girls across multiple states.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200} animation="scale-in">
              <div className="bg-vitanium-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold text-vitanium-600 mb-6 text-center">Target Beneficiary Groups</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-subtle">
                    <h4 className="font-semibold mb-2">Infants & Children (6 months - 3 years)</h4>
                    <p className="text-sm text-neutral-600">Sweet Dalia, Namkeen Dalia, Panjiri, FRK Premix</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-subtle">
                    <h4 className="font-semibold mb-2">Children (3-6 years)</h4>
                    <p className="text-sm text-neutral-600">Fortified meals through school feeding programs</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-subtle">
                    <h4 className="font-semibold mb-2">Pregnant Women</h4>
                    <p className="text-sm text-neutral-600">Meetha Dalia, Namkeen Dalia, FRK Premix</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-subtle">
                    <h4 className="font-semibold mb-2">Lactating Mothers</h4>
                    <p className="text-sm text-neutral-600">Sweet Dalia, Namkeen Dalia, FRK Premix</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-subtle">
                    <h4 className="font-semibold mb-2">Adolescent Girls</h4>
                    <p className="text-sm text-neutral-600">Meetha Dalia, Namkeen Dalia, FRK Premix</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="mt-20">
          <div className="bg-navy-900 text-white py-12 px-8 rounded-xl text-center">
            <ScrollReveal>
              <h2 className="text-2xl font-bold mb-6">Ready to Partner with VitaniumX?</h2>
            </ScrollReveal>
            
            <ScrollReveal delay={100}>
              <p className="text-lg text-neutral-300 mb-8 max-w-2xl mx-auto">
                Join us in our mission to combat hidden hunger and malnutrition through high-quality micronutrient premixes.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
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

export default OurExpertise;
