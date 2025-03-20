import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Award, Users, TrendingUp, Globe, HeartPulse, FlaskConical } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';

const OurExpertise = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="container-wide">
        <SectionHeading
          subtitle="Our Expertise"
          title="Fortifying Foods, Enriching Lives"
          description="VitaniumX specializes in micronutrient premixes and fortification solutions to combat hidden hunger and improve public health."
        />
        
        {/* Overview Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="text-lg text-neutral-700 mb-6">
              We are a leading manufacturer of micronutrient premixes for food fortification, dedicated to addressing malnutrition and hidden hunger through innovative, science-backed solutions. Our state-of-the-art production facilities and expert team ensure the highest quality products that meet both local and international standards.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-lg text-neutral-700">
              With a deep understanding of nutritional science and food technology, we provide custom fortification solutions for various food matrices while maintaining quality, stability, and bioavailability. Our commitment to excellence has made us a trusted partner for governments, NGOs, and food manufacturers across multiple countries.
            </p>
          </ScrollReveal>
        </div>
        
        {/* Stats Section */}
        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ScrollReveal delay={100}>
              <div className="bg-white p-6 rounded-lg shadow-subtle border border-neutral-100 text-center">
                <div className="text-4xl font-bold text-vitanium-600 mb-2">10+</div>
                <div className="text-neutral-600">Years of Experience</div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="bg-white p-6 rounded-lg shadow-subtle border border-neutral-100 text-center">
                <div className="text-4xl font-bold text-vitanium-600 mb-2">20+</div>
                <div className="text-neutral-600">Global Markets Served</div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div className="bg-white p-6 rounded-lg shadow-subtle border border-neutral-100 text-center">
                <div className="text-4xl font-bold text-vitanium-600 mb-2">50M+</div>
                <div className="text-neutral-600">Lives Impacted</div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={400}>
              <div className="bg-white p-6 rounded-lg shadow-subtle border border-neutral-100 text-center">
                <div className="text-4xl font-bold text-vitanium-600 mb-2">100+</div>
                <div className="text-neutral-600">Formulations Developed</div>
              </div>
            </ScrollReveal>
          </div>
        </div>
        
        {/* Core Capabilities */}
        <div className="mt-20">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-center mb-12">Core Capabilities</h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollReveal delay={100}>
              <div className="bg-white p-6 rounded-lg shadow-subtle border border-neutral-100 h-full">
                <Award className="h-10 w-10 text-vitanium-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Quality Assurance</h3>
                <p className="text-neutral-600">
                  Rigorous quality control processes and adherence to international standards ensure the highest quality micronutrient premixes.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <div className="bg-white p-6 rounded-lg shadow-subtle border border-neutral-100 h-full">
                <Users className="h-10 w-10 text-vitanium-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Expert Team</h3>
                <p className="text-neutral-600">
                  Our team of food scientists, nutritionists, and technical experts brings decades of combined experience to every project.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={300}>
              <div className="bg-white p-6 rounded-lg shadow-subtle border border-neutral-100 h-full">
                <TrendingUp className="h-10 w-10 text-vitanium-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Research & Development</h3>
                <p className="text-neutral-600">
                  Continuous innovation and research to develop new, more effective fortification solutions for various food matrices.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={400}>
              <div className="bg-white p-6 rounded-lg shadow-subtle border border-neutral-100 h-full">
                <Globe className="h-10 w-10 text-vitanium-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Global Compliance</h3>
                <p className="text-neutral-600">
                  Products compliant with international standards including FSSAI, WHO, FDA, and Codex Alimentarius guidelines.
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
                <h3 className="text-xl font-semibold mb-3">Public Health Impact</h3>
                <p className="text-neutral-600">
                  Committed to improving public health through effective fortification strategies that address micronutrient deficiencies.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
        
        {/* Certificates */}
        <div className="mt-20">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-center mb-12">Our Certifications</h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal delay={100}>
              <div className="bg-white p-6 rounded-lg shadow-subtle border border-neutral-100">
                <div className="text-vitanium-600 font-bold text-xl mb-4">ISO 22000:2018</div>
                <div className="mb-4 text-neutral-700">Food Safety Management System</div>
                <div className="flex items-center text-neutral-600">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  <span>Certified</span>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <div className="bg-white p-6 rounded-lg shadow-subtle border border-neutral-100">
                <div className="text-vitanium-600 font-bold text-xl mb-4">FSSAI</div>
                <div className="mb-4 text-neutral-700">Food Safety and Standards Authority of India</div>
                <div className="flex items-center text-neutral-600">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  <span>Approved</span>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={300}>
              <div className="bg-white p-6 rounded-lg shadow-subtle border border-neutral-100">
                <div className="text-vitanium-600 font-bold text-xl mb-4">HACCP</div>
                <div className="mb-4 text-neutral-700">Hazard Analysis Critical Control Point</div>
                <div className="flex items-center text-neutral-600">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  <span>Certified</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="mt-20">
          <div className="bg-navy-900 text-white py-12 px-8 rounded-xl text-center">
            <ScrollReveal>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Partner with Us?</h2>
              <p className="text-neutral-300 mb-8 max-w-2xl mx-auto">
                Discover how VitaniumX can help you develop effective fortification solutions to enhance the nutritional value of your products.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="btn-primary bg-vitanium-500 hover:bg-vitanium-600">
                  Contact Our Team
                </Link>
                <Link to="/get-quote" className="btn-secondary bg-transparent text-white border-white hover:bg-white/10">
                  Get a Quote
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
