
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  Beaker, 
  FlaskConical, 
  Award, 
  Shield, 
  TestTube, 
  MoveRight, 
  Wheat, 
  Droplet, 
  Milk, 
  Pill, 
  HeartPulse 
} from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';
import StatCard from '@/components/ui/StatCard';
import CertificationCard from '@/components/ui/CertificationCard';
import ProductCard from '@/components/ui/ProductCard';

const Index = () => {
  return (
    <div className="pt-0">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-r from-vitanium-50 to-navy-50">
        <div className="container-wide relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:pr-8">
              <ScrollReveal>
                <span className="inline-block text-sm font-semibold uppercase tracking-wider text-vitanium-600 mb-4">
                  Progressive Processors Private Limited
                </span>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h1 className="heading-xl mb-6 text-balance">
                  Precision Fortification for a Healthier World
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="text-xl text-neutral-700 mb-8 max-w-2xl text-balance">
                  At VitaniumX, we're at the forefront of micronutrient premix manufacturing, dedicated to combating hidden hunger and enhancing nutrition across India and beyond.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <div className="flex flex-wrap gap-4">
                  <Link to="/get-quote" className="btn-primary">
                    Get a Quote
                  </Link>
                  <Link to="/expertise" className="btn-secondary">
                    Explore Our Expertise
                  </Link>
                </div>
              </ScrollReveal>
            </div>
            <div className="relative">
              <ScrollReveal animation="scale-in">
                <div className="bg-white p-8 rounded-xl shadow-elevated border border-neutral-100 text-center">
                  <div className="text-3xl font-bold text-vitanium-600 mb-4">Combating Hidden Hunger</div>
                  <p className="text-neutral-600 mb-6">Our micronutrient premixes have reached millions through government partnerships and food fortification initiatives.</p>
                  <div className="bg-neutral-50 p-4 rounded-lg inline-block">
                    <div className="font-semibold text-navy-800">GMP Certified</div>
                    <div className="text-sm text-neutral-600">ISO 9001:2015 | FSSC 22000</div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Banner */}
      <section className="py-8 bg-neutral-50 border-y border-neutral-100">
        <div className="container-wide">
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
            <div className="text-lg font-semibold text-neutral-700">Certified By:</div>
            <ScrollReveal delay={100}>
              <div className="flex items-center justify-center h-20 px-6">
                <div className="text-center">
                  <div className="font-bold text-navy-800 text-lg">GMP</div>
                  <div className="text-xs text-neutral-600">Good Manufacturing Practices</div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="flex items-center justify-center h-20 px-6">
                <div className="text-center">
                  <div className="font-bold text-navy-800 text-lg">ISO 9001:2015</div>
                  <div className="text-xs text-neutral-600">Quality Management System</div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div className="flex items-center justify-center h-20 px-6">
                <div className="text-center">
                  <div className="font-bold text-navy-800 text-lg">FSSC 22000</div>
                  <div className="text-xs text-neutral-600">Food Safety System</div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={400}>
              <div className="flex items-center justify-center h-20 px-6">
                <div className="text-center">
                  <div className="font-bold text-navy-800 text-lg">FSSAI</div>
                  <div className="text-xs text-neutral-600">Food Safety Authority of India</div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={500}>
              <div className="flex items-center justify-center h-20 px-6">
                <div className="text-center">
                  <div className="font-bold text-navy-800 text-lg">ISO 22000:2018</div>
                  <div className="text-xs text-neutral-600">Food Safety Management</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Key Stats Section */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <SectionHeading
            subtitle="Our Impact"
            title="Nourishing Millions Across India"
            description="Since our founding in 2015, we've consistently delivered high-quality micronutrient premixes, making a significant impact on public health."
          />
          
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard 
              number="573M+"
              label="Fortified meals delivered"
              delay={100}
            />
            <StatCard 
              number="114,736"
              label="Tonnes of food fortified"
              delay={200}
            />
            <StatCard 
              number="10"
              label="Tonnes daily production capacity"
              delay={300}
            />
            <StatCard 
              number="2015"
              label="Year established"
              delay={400}
            />
          </div>
        </div>
      </section>

      {/* Quality Assurance Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <ScrollReveal animation="slide-in-right">
                <div className="bg-white p-8 rounded-xl shadow-elevated border border-neutral-100">
                  <div className="flex justify-center mb-6">
                    <TestTube className="h-16 w-16 text-vitanium-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-4">State-of-the-Art Laboratory</h3>
                  <p className="text-neutral-600 text-center">
                    Our advanced testing equipment includes HPLC, ICP-OES, AAS, and more for comprehensive analysis.
                  </p>
                </div>
              </ScrollReveal>
            </div>
            <div>
              <ScrollReveal>
                <span className="inline-block text-sm font-semibold uppercase tracking-wider text-vitanium-600 mb-4">
                  Quality Assurance
                </span>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h2 className="heading-lg mb-6">
                  The Science Behind Our Premixes
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="text-lg text-neutral-700 mb-6">
                  Our state-of-the-art laboratory ensures every batch of micronutrient premix meets the highest standards of quality and efficacy. We utilize advanced technology for precision analysis.
                </p>
              </ScrollReveal>
              <div className="mt-8 space-y-4">
                <ScrollReveal delay={300}>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-vitanium-600 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Advanced Testing Equipment</h3>
                      <p className="text-neutral-600">HPLC, ICP-OES, AAS, and more for comprehensive analysis.</p>
                    </div>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={400}>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-vitanium-600 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Stringent Quality Control</h3>
                      <p className="text-neutral-600">Rigorous testing at every stage of production.</p>
                    </div>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={500}>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-vitanium-600 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Global Standards</h3>
                      <p className="text-neutral-600">Compliance with international food safety regulations.</p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
              <ScrollReveal delay={600}>
                <div className="mt-10">
                  <Link to="/quality" className="btn-primary">
                    Learn More About Our Quality
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solutions Section */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <SectionHeading
            subtitle="Our Solutions"
            title="Comprehensive Fortification Solutions"
            description="We offer a wide range of micronutrient premixes designed for various applications across the food industry."
          />
          
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
          
          <div className="mt-12 text-center">
            <Link to="/solutions" className="btn-outline">
              View All Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* Certification Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container-wide">
          <SectionHeading
            subtitle="Our Certifications"
            title="Industry-Leading Quality Standards"
            description="Our commitment to quality is backed by multiple certifications, ensuring our products meet the highest standards of safety and efficacy."
          />
          
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CertificationCard
              name="GMP"
              description="Good Manufacturing Practices certification, ensuring consistent quality in production."
              icon={<Award className="h-6 w-6" />}
              delay={100}
            />
            <CertificationCard
              name="ISO 9001:2015"
              description="International standard for quality management systems."
              icon={<Shield className="h-6 w-6" />}
              delay={200}
            />
            <CertificationCard
              name="FSSC 22000"
              description="Food Safety System Certification, demonstrating robust food safety management."
              icon={<Shield className="h-6 w-6" />}
              delay={300}
            />
            <CertificationCard
              name="FSSAI"
              description="Food Safety and Standards Authority of India certification for food safety compliance."
              icon={<Shield className="h-6 w-6" />}
              delay={400}
            />
            <CertificationCard
              name="ISO 22000:2018"
              description="International standard for food safety management systems."
              icon={<Shield className="h-6 w-6" />}
              delay={500}
            />
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <ScrollReveal>
                <span className="inline-block text-sm font-semibold uppercase tracking-wider text-vitanium-600 mb-4">
                  Innovation Lab
                </span>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h2 className="heading-lg mb-6">
                  Research & Development Excellence
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="text-lg text-neutral-700 mb-6">
                  Our dedicated R&D team continually explores new formulations, technologies, and methods to enhance the efficacy and stability of our micronutrient premixes.
                </p>
              </ScrollReveal>
              <div className="mt-8 space-y-4">
                <ScrollReveal delay={300}>
                  <div className="flex items-start">
                    <Beaker className="h-6 w-6 text-vitanium-600 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Advanced Formulations</h3>
                      <p className="text-neutral-600">Developing stable, bioavailable nutrient compositions.</p>
                    </div>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={400}>
                  <div className="flex items-start">
                    <TestTube className="h-6 w-6 text-vitanium-600 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Custom Solutions</h3>
                      <p className="text-neutral-600">Creating tailored premixes for specific applications and populations.</p>
                    </div>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={500}>
                  <div className="flex items-start">
                    <FlaskConical className="h-6 w-6 text-vitanium-600 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Continuous Improvement</h3>
                      <p className="text-neutral-600">Ongoing research to enhance efficacy and production methods.</p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
              <ScrollReveal delay={600}>
                <div className="mt-10">
                  <Link to="/innovation" className="btn-primary">
                    Explore Our Innovation Lab
                  </Link>
                </div>
              </ScrollReveal>
            </div>
            <div className="order-1 lg:order-2">
              <ScrollReveal animation="slide-in-right">
                <div className="bg-white p-8 rounded-xl shadow-elevated border border-neutral-100">
                  <div className="flex justify-center mb-6">
                    <Beaker className="h-16 w-16 text-vitanium-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-4">Cutting-Edge Research</h3>
                  <p className="text-neutral-600 text-center">
                    Our innovation lab is equipped with the latest technology to develop and test new fortification solutions.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="heading-lg mb-6">Ready to Transform Your Products?</h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-xl text-neutral-300 mb-8">
                Partner with VitaniumX for high-quality micronutrient premixes that enhance your products and support public health.
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
      </section>

      {/* Client Carousel (Simplified) */}
      <section className="py-12 bg-neutral-50">
        <div className="container-wide">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-semibold text-neutral-800">Trusted Partners</h3>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
            <div className="h-16 px-6 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
              <div className="text-lg font-bold text-neutral-700">Government of India</div>
            </div>
            <div className="h-16 px-6 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
              <div className="text-lg font-bold text-neutral-700">ICDS</div>
            </div>
            <div className="h-16 px-6 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
              <div className="text-lg font-bold text-neutral-700">Uttar Pradesh Govt.</div>
            </div>
            <div className="h-16 px-6 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
              <div className="text-lg font-bold text-neutral-700">Madhya Pradesh Govt.</div>
            </div>
            <div className="h-16 px-6 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
              <div className="text-lg font-bold text-neutral-700">PDS</div>
            </div>
            <div className="h-16 px-6 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
              <div className="text-lg font-bold text-neutral-700">MDM</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
