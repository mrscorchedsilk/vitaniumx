
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  CheckCircle, 
  FileCheck, 
  FileSearch, 
  FlaskConical, 
  Microscope, 
  Award
} from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import AnimatedElement from '@/components/ui/AnimatedElement';
import FloatingCertificationLogo from '@/components/ui/FloatingCertificationLogo';

const Quality = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="container-wide">
        <SectionHeading
          subtitle="Quality Assurance"
          title="Commitment to Excellence"
          description="Our advanced quality control systems ensure that every batch of our micronutrient premixes meets the highest standards of purity, potency, and safety."
        />
        
        {/* Overview Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="text-lg text-neutral-700 mb-6">
              Quality is at the heart of everything we do at VitaniumX. Our state-of-the-art laboratory is equipped with advanced testing equipment such as HPLC, ICP-OES, AAS, and more, enabling us to conduct comprehensive analyses of our products.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-lg text-neutral-700">
              Our quality assurance process encompasses stringent raw material selection, rigorous batch testing, and comprehensive documentation. We adhere to FSSAI regulations and international standards, and regularly conduct internal and external audits to ensure compliance.
            </p>
          </ScrollReveal>
        </div>
        
        {/* Certifications Grid */}
        <div className="mt-20">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-neutral-800 mb-10 text-center">Our Certifications</h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollReveal delay={100}>
              <div className="bg-white p-6 rounded-lg shadow-subtle border border-neutral-100 h-full">
                <div className="flex flex-col items-center mb-6">
                  <div className="mb-4 h-24 w-24 flex items-center justify-center">
                    <AnimatedElement animation="float" delay={0.2}>
                      <img src="/lovable-uploads/31315a0c-68fe-442c-9d74-dd8c22a5c0d3.png" alt="GMP" className="max-h-full max-w-full" />
                    </AnimatedElement>
                  </div>
                  <h3 className="text-xl font-semibold">GMP</h3>
                </div>
                <p className="text-neutral-600 mb-4">
                  Good Manufacturing Practices certification ensures that our products are consistently produced according to quality standards.
                </p>
                <div className="text-sm text-neutral-500">
                  Key aspects: Production process controls, facility maintenance, personnel training
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <div className="bg-white p-6 rounded-lg shadow-subtle border border-neutral-100 h-full">
                <div className="flex flex-col items-center mb-6">
                  <div className="mb-4 h-24 w-24 flex items-center justify-center">
                    <AnimatedElement animation="float" delay={0.4}>
                      <img src="/lovable-uploads/b7e9e76c-af31-4725-a211-4ec5d4ed72ff.png" alt="ISO 9001:2015" className="max-h-full max-w-full" />
                    </AnimatedElement>
                  </div>
                  <h3 className="text-xl font-semibold">ISO 9001:2015</h3>
                </div>
                <p className="text-neutral-600 mb-4">
                  International standard for quality management systems, demonstrating our commitment to consistently meeting customer requirements.
                </p>
                <div className="text-sm text-neutral-500">
                  Key aspects: Customer focus, process approach, continuous improvement
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={300}>
              <div className="bg-white p-6 rounded-lg shadow-subtle border border-neutral-100 h-full">
                <div className="flex flex-col items-center mb-6">
                  <div className="mb-4 h-24 w-24 flex items-center justify-center">
                    <AnimatedElement animation="float" delay={0.6}>
                      <img src="/lovable-uploads/e4aab3cf-b528-4ac6-bf8d-039af06a24e9.png" alt="FSSC 22000" className="max-h-full max-w-full" />
                    </AnimatedElement>
                  </div>
                  <h3 className="text-xl font-semibold">FSSC 22000</h3>
                </div>
                <p className="text-neutral-600 mb-4">
                  Food Safety System Certification provides a framework for effectively managing food safety responsibilities.
                </p>
                <div className="text-sm text-neutral-500">
                  Key aspects: HACCP principles, food defense, allergen management
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={400}>
              <div className="bg-white p-6 rounded-lg shadow-subtle border border-neutral-100 h-full">
                <div className="flex flex-col items-center mb-6">
                  <div className="mb-4 h-24 w-24 flex items-center justify-center">
                    <AnimatedElement animation="float" delay={0.8}>
                      <img src="/lovable-uploads/2a854855-bbe3-4120-b6e7-becc25616bb0.png" alt="FSSAI" className="max-h-full max-w-full" />
                    </AnimatedElement>
                  </div>
                  <h3 className="text-xl font-semibold">FSSAI</h3>
                </div>
                <p className="text-neutral-600 mb-4">
                  Food Safety and Standards Authority of India certification ensures compliance with Indian food safety regulations.
                </p>
                <div className="text-sm text-neutral-500">
                  Key aspects: Compliance with Indian standards, licensing, regulatory requirements
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={500}>
              <div className="bg-white p-6 rounded-lg shadow-subtle border border-neutral-100 h-full">
                <div className="flex flex-col items-center mb-6">
                  <div className="mb-4 h-24 w-24 flex items-center justify-center">
                    <AnimatedElement animation="float" delay={1.0}>
                      <img src="/lovable-uploads/d808de9e-13d6-4730-a723-30fc5e1e036e.png" alt="ISO 22000:2018" className="max-h-full max-w-full" />
                    </AnimatedElement>
                  </div>
                  <h3 className="text-xl font-semibold">ISO 22000:2018</h3>
                </div>
                <p className="text-neutral-600 mb-4">
                  International standard for food safety management systems, ensuring the safety of the global food supply chain.
                </p>
                <div className="text-sm text-neutral-500">
                  Key aspects: Interactive communication, system management, prerequisite programs
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
        
        {/* Laboratory & Testing Section */}
        <div className="mt-24">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-neutral-800 mb-10 text-center">Laboratory & Testing Capabilities</h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal delay={100}>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Microscope className="h-8 w-8 text-vitanium-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Advanced Analytical Equipment</h3>
                    <p className="text-neutral-600">
                      Our laboratory is equipped with state-of-the-art equipment including HPLC (High-Performance Liquid Chromatography), ICP-OES (Inductively Coupled Plasma Optical Emission Spectrometry), AAS (Atomic Absorption Spectrometer), Moisture Analyzer, Particle Size Analyzer, pH & Density Meters, and Stability Chambers.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FlaskConical className="h-8 w-8 text-vitanium-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Comprehensive Testing Protocols</h3>
                    <p className="text-neutral-600">
                      We conduct a wide range of tests to ensure the quality, safety, and efficacy of our products, including vitamin assays, mineral content analysis, microbiological testing, stability studies, and more.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FileSearch className="h-8 w-8 text-vitanium-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Raw Material Analysis</h3>
                    <p className="text-neutral-600">
                      Every batch of raw materials undergoes stringent testing to verify purity, potency, and compliance with specifications before being approved for production.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200} animation="scale-in">
              <div className="bg-white p-8 rounded-xl shadow-elevated border border-neutral-100">
                <h3 className="text-xl font-bold text-vitanium-600 mb-6 text-center">Testing Parameters</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-neutral-50 p-4 rounded-lg">
                    <div className="font-semibold mb-2">Vitamin Analysis</div>
                    <ul className="text-sm text-neutral-600 space-y-1">
                      <li>Vitamin A</li>
                      <li>Vitamin D</li>
                      <li>B-vitamins</li>
                      <li>Vitamin E</li>
                      <li>Vitamin K</li>
                    </ul>
                  </div>
                  
                  <div className="bg-neutral-50 p-4 rounded-lg">
                    <div className="font-semibold mb-2">Mineral Analysis</div>
                    <ul className="text-sm text-neutral-600 space-y-1">
                      <li>Iron</li>
                      <li>Zinc</li>
                      <li>Calcium</li>
                      <li>Iodine</li>
                      <li>Other trace minerals</li>
                    </ul>
                  </div>
                  
                  <div className="bg-neutral-50 p-4 rounded-lg">
                    <div className="font-semibold mb-2">Physical Parameters</div>
                    <ul className="text-sm text-neutral-600 space-y-1">
                      <li>Particle size</li>
                      <li>Moisture content</li>
                      <li>Solubility</li>
                      <li>Stability</li>
                      <li>Homogeneity</li>
                    </ul>
                  </div>
                  
                  <div className="bg-neutral-50 p-4 rounded-lg">
                    <div className="font-semibold mb-2">Microbial Testing</div>
                    <ul className="text-sm text-neutral-600 space-y-1">
                      <li>Total plate count</li>
                      <li>Yeast and mold</li>
                      <li>E. coli</li>
                      <li>Salmonella</li>
                      <li>Staphylococcus aureus</li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
        
        {/* Quality Control Process */}
        <div className="mt-24">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-neutral-800 mb-10 text-center">Our Quality Control Process</h2>
          </ScrollReveal>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-vitanium-100"></div>
              
              <ScrollReveal delay={100}>
                <div className="relative mb-12">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-vitanium-600 flex items-center justify-center text-white text-xl font-bold mr-6 z-10">
                      1
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-subtle border border-neutral-100 flex-1">
                      <h3 className="text-xl font-semibold mb-3">Raw Material Sourcing & Inspection</h3>
                      <p className="text-neutral-600">
                        We source raw materials only from approved suppliers who meet our stringent quality requirements. Each incoming batch undergoes thorough inspection and testing before acceptance.
                      </p>
                      <div className="mt-4 flex items-center">
                        <CheckCircle className="h-5 w-5 text-vitanium-600 mr-2" />
                        <span className="text-sm text-neutral-500">Identity and purity verification</span>
                      </div>
                      <div className="mt-2 flex items-center">
                        <CheckCircle className="h-5 w-5 text-vitanium-600 mr-2" />
                        <span className="text-sm text-neutral-500">Potency and concentration testing</span>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={200}>
                <div className="relative mb-12">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-vitanium-600 flex items-center justify-center text-white text-xl font-bold mr-6 z-10">
                      2
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-subtle border border-neutral-100 flex-1">
                      <h3 className="text-xl font-semibold mb-3">Production Process Controls</h3>
                      <p className="text-neutral-600">
                        Our manufacturing facilities operate under strict GMP conditions with comprehensive standard operating procedures. In-process checks at critical control points ensure consistent quality throughout production.
                      </p>
                      <div className="mt-4 flex items-center">
                        <CheckCircle className="h-5 w-5 text-vitanium-600 mr-2" />
                        <span className="text-sm text-neutral-500">HACCP principles implementation</span>
                      </div>
                      <div className="mt-2 flex items-center">
                        <CheckCircle className="h-5 w-5 text-vitanium-600 mr-2" />
                        <span className="text-sm text-neutral-500">Environmental monitoring</span>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={300}>
                <div className="relative mb-12">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-vitanium-600 flex items-center justify-center text-white text-xl font-bold mr-6 z-10">
                      3
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-subtle border border-neutral-100 flex-1">
                      <h3 className="text-xl font-semibold mb-3">Finished Product Testing</h3>
                      <p className="text-neutral-600">
                        Every batch of finished product undergoes comprehensive testing to verify micronutrient content, physical properties, microbial safety, and stability before release.
                      </p>
                      <div className="mt-4 flex items-center">
                        <CheckCircle className="h-5 w-5 text-vitanium-600 mr-2" />
                        <span className="text-sm text-neutral-500">Analysis of all declared nutrients</span>
                      </div>
                      <div className="mt-2 flex items-center">
                        <CheckCircle className="h-5 w-5 text-vitanium-600 mr-2" />
                        <span className="text-sm text-neutral-500">Compliance with specifications</span>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={400}>
                <div className="relative">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-vitanium-600 flex items-center justify-center text-white text-xl font-bold mr-6 z-10">
                      4
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-subtle border border-neutral-100 flex-1">
                      <h3 className="text-xl font-semibold mb-3">Documentation & Traceability</h3>
                      <p className="text-neutral-600">
                        Comprehensive documentation accompanies each batch, including Certificates of Analysis, production records, and test results. Our traceability system allows for complete tracking from raw material to finished product.
                      </p>
                      <div className="mt-4 flex items-center">
                        <CheckCircle className="h-5 w-5 text-vitanium-600 mr-2" />
                        <span className="text-sm text-neutral-500">Batch numbering system</span>
                      </div>
                      <div className="mt-2 flex items-center">
                        <CheckCircle className="h-5 w-5 text-vitanium-600 mr-2" />
                        <span className="text-sm text-neutral-500">Digital record management</span>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="mt-24">
          <div className="bg-vitanium-50 p-8 rounded-xl border border-vitanium-100">
            <div className="max-w-3xl mx-auto text-center">
              <ScrollReveal>
                <h2 className="text-2xl font-bold text-neutral-800 mb-6">Experience the VitaniumX Quality Difference</h2>
              </ScrollReveal>
              
              <ScrollReveal delay={100}>
                <p className="text-lg text-neutral-700 mb-8">
                  Our commitment to quality is reflected in every aspect of our operations, from raw material sourcing to final product delivery. Contact us to learn more about our quality assurance processes or to request product specifications.
                </p>
              </ScrollReveal>
              
              <ScrollReveal delay={200}>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link to="/get-quote" className="btn-primary">
                    Get a Quote
                  </Link>
                  <Link to="/contact" className="btn-secondary">
                    Request Specifications
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

export default Quality;
