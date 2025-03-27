import React from 'react';
import { Link } from 'react-router-dom';
import { Wheat, ArrowRight, CheckCircle, BarChart3, Tablet, Droplet } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import StatCard from '@/components/ui/StatCard';
import { Button } from '@/components/ui/button';

const MicronutrientPremix = () => {
  return (
    <div className="pt-20 pb-20">
      <div className="container-wide">
        <SectionHeading
          title="Micronutrient Premix"
          description="High-quality micronutrient premixes for fortifying staple foods to address widespread nutritional deficiencies."
        />
        
        {/* Hero Image */}
        <div className="mt-10 relative rounded-xl overflow-hidden">
          <img 
            src="/lovable-uploads/8dcfc58b-98fa-43b2-812e-97e7507e2ac4.png" 
            alt="Micronutrient Premix" 
            className="w-full aspect-[21/9] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
            <div className="text-white p-8 md:p-12 max-w-2xl">
              <Wheat className="w-16 h-16 text-vitanium-400 mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Food Fortification</h2>
              <p className="text-lg text-white/80">
                Our micronutrient premixes add essential vitamins and minerals to foods, improving public health and combating malnutrition.
              </p>
            </div>
          </div>
        </div>
        
        {/* Overview */}
        <div className="mt-16 max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="text-lg text-neutral-700 mb-6">
              Micronutrient premixes are carefully formulated blends of vitamins and minerals designed to fortify food products and address nutritional deficiencies. Our premixes are developed with strict quality control and optimized for stability, bioavailability, and compatibility with various food matrices.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-lg text-neutral-700">
              At VitaniumX, we produce a wide range of micronutrient premixes tailored for different applications across the food industry, from staple food fortification to specialized nutritional products. Our formulations meet both national and international standards, ensuring optimal nutritional impact.
            </p>
          </ScrollReveal>
        </div>
        
        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard 
            number="20+"
            label="Essential vitamins and minerals"
            glowColor="blue"
          />
          <StatCard 
            number="100+"
            label="Premix formulations available"
            glowColor="green"
            delay={100}
          />
          <StatCard 
            number="40+"
            label="Countries with our premixes"
            glowColor="amber"
            delay={200}
          />
          <StatCard 
            number="100M+"
            label="People reached annually"
            glowColor="purple"
            delay={300}
          />
        </div>
        
        {/* Product Details */}
        <div className="mt-16">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-neutral-800 mb-12">Our Micronutrient Premix Categories</h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Staple Food Premixes */}
            <ScrollReveal delay={100}>
              <div className="bg-white rounded-xl shadow-subtle border border-neutral-100 overflow-hidden shadow-[0_10px_25px_-5px_rgba(14,165,233,0.3)] hover:shadow-[0_15px_35px_-5px_rgba(14,165,233,0.5)] transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src="/lovable-uploads/dc73f31d-4223-4d13-a641-5089713fd5d0.png" 
                    alt="Staple Food Premixes" 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4">Staple Food Premixes</h3>
                  <p className="text-neutral-600 mb-6">
                    Our staple food premixes are designed for large-scale food fortification programs, targeting widely consumed foods like wheat flour, rice, edible oil, and milk.
                  </p>
                  
                  <h4 className="font-semibold text-lg mb-3">Key Products:</h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Wheat Flour Premix (Iron, Folic Acid, B12)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Rice Premix (Multiple micronutrients)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Edible Oil Premix (Vitamins A & D)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Milk Premix (Vitamins A & D)</span>
                    </li>
                  </ul>
                  
                  <h4 className="font-semibold text-lg mb-3">Applications:</h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">National fortification programs</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Commercial food processors</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Public distribution systems</span>
                    </li>
                  </ul>
                  
                  <div className="mt-6">
                    <Button asChild>
                      <Link to="/solutions/premix/staple-food">
                        Request Information
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            
            {/* FMCG Premixes */}
            <ScrollReveal delay={200}>
              <div className="bg-white rounded-xl shadow-subtle border border-neutral-100 overflow-hidden shadow-[0_10px_25px_-5px_rgba(16,185,129,0.3)] hover:shadow-[0_15px_35px_-5px_rgba(16,185,129,0.5)] transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src="/lovable-uploads/6204902b-53ac-4075-9923-76e67c548ea0.png" 
                    alt="FMCG Food Products" 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4">FMCG Premixes</h3>
                  <p className="text-neutral-600 mb-6">
                    Our FMCG premixes are specially formulated for consumer packaged goods, providing both nutritional benefits and product differentiation for food manufacturers.
                  </p>
                  
                  <h4 className="font-semibold text-lg mb-3">Key Products:</h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Bakery Product Premixes</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Breakfast Cereal Premixes</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Beverage Fortification Premixes</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Snack Food Premixes</span>
                    </li>
                  </ul>
                  
                  <h4 className="font-semibold text-lg mb-3">Benefits:</h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Enhanced nutritional profile</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Product differentiation</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Clean label formulations available</span>
                    </li>
                  </ul>
                  
                  <div className="mt-6">
                    <Button asChild>
                      <Link to="/solutions/premix/fmcg">
                        Request Information
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            {/* Animal Nutrition Premixes */}
            <ScrollReveal delay={300}>
              <div className="bg-white rounded-xl shadow-subtle border border-neutral-100 overflow-hidden shadow-[0_10px_25px_-5px_rgba(245,158,11,0.3)] hover:shadow-[0_15px_35px_-5px_rgba(245,158,11,0.5)] transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src="/lovable-uploads/74a3d0a0-22d5-4ba7-a2f9-bf495d9de3a0.png" 
                    alt="Animal Feed Premixes" 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4">Animal Nutrition Premixes</h3>
                  <p className="text-neutral-600 mb-6">
                    Our animal nutrition premixes are formulated to enhance the health and productivity of livestock, poultry, and aquaculture species through optimal micronutrient supplementation.
                  </p>
                  
                  <h4 className="font-semibold text-lg mb-3">Key Products:</h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Cattle Feed Premixes</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Poultry Feed Premixes</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Fish Feed Premixes</span>
                    </li>
                  </ul>
                  
                  <h4 className="font-semibold text-lg mb-3">Benefits:</h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Improved growth rates</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Enhanced reproductive performance</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Better immune function</span>
                    </li>
                  </ul>
                  
                  <div className="mt-6">
                    <Button asChild>
                      <Link to="/solutions/premix/animal-nutrition">
                        Request Information
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            
            {/* Pharmaceutical Grade Premixes */}
            <ScrollReveal delay={400}>
              <div className="bg-white rounded-xl shadow-subtle border border-neutral-100 overflow-hidden shadow-[0_10px_25px_-5px_rgba(139,92,246,0.3)] hover:shadow-[0_15px_35px_-5px_rgba(139,92,246,0.5)] transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src="/lovable-uploads/059e844d-fe4e-47f4-b1a3-104c6a541f6d.png" 
                    alt="Pharmaceutical Grade Products" 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4">Pharmaceutical Grade Premixes</h3>
                  <p className="text-neutral-600 mb-6">
                    Our pharmaceutical grade premixes meet the highest standards of purity and quality for use in medical foods, dietary supplements, and clinical nutrition products.
                  </p>
                  
                  <h4 className="font-semibold text-lg mb-3">Key Features:</h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Highest purity standards</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Enhanced bioavailability</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Rigorous quality testing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Full traceability</span>
                    </li>
                  </ul>
                  
                  <h4 className="font-semibold text-lg mb-3">Applications:</h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Medical foods</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Clinical nutrition products</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Dietary supplements</span>
                    </li>
                  </ul>
                  
                  <div className="mt-6">
                    <Button asChild>
                      <Link to="/solutions/premix/pharmaceutical-grade">
                        Request Information
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Success Stories */}
        <div className="mt-20">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-neutral-800 mb-8">Success Stories</h2>
          </ScrollReveal>
          
          <div className="bg-white p-8 rounded-xl shadow-subtle border border-neutral-100 shadow-[0_10px_25px_-5px_rgba(236,72,153,0.3)] hover:shadow-[0_15px_35px_-5px_rgba(236,72,153,0.5)] transition-all duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ScrollReveal delay={100}>
                <div className="flex flex-col h-full">
                  <div className="mb-4 rounded-lg overflow-hidden">
                    <img 
                      src="/lovable-uploads/2025292d-9888-4583-8efc-9e5ec53fbca5.png" 
                      alt="National Program Success" 
                      className="w-full aspect-video object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-4">National Wheat Flour Fortification</h3>
                  <p className="text-neutral-600 mb-6">
                    Partnered with the national government to implement a nationwide wheat flour fortification program, providing premixes enriched with iron, folic acid, and vitamin B12 to address widespread nutritional deficiencies.
                  </p>
                  <div className="flex items-center space-x-4 mt-auto">
                    <div className="font-semibold">Impact:</div>
                    <div className="text-vitanium-600">35M+ beneficiaries</div>
                  </div>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={200}>
                <div className="flex flex-col h-full">
                  <div className="mb-4 rounded-lg overflow-hidden">
                    <img 
                      src="/lovable-uploads/60a0493f-f80d-4e07-8105-ddc44b525875.png" 
                      alt="FMCG Product Success" 
                      className="w-full aspect-video object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Fortified Cereal Innovation</h3>
                  <p className="text-neutral-600 mb-6">
                    Developed a customized micronutrient premix for a leading cereal manufacturer, enabling them to launch a new fortified breakfast product with enhanced nutritional profile appealing to health-conscious consumers.
                  </p>
                  <div className="flex items-center space-x-4 mt-auto">
                    <div className="font-semibold">Impact:</div>
                    <div className="text-vitanium-600">25% market share growth</div>
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
                  <h2 className="text-2xl font-bold mb-4">Need a Custom Micronutrient Premix Solution?</h2>
                  <p className="text-neutral-300 mb-6">
                    Our team can develop tailored premixes to meet your specific requirements, whether you're a government program, food manufacturer, or nutritional product developer.
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
                  <h3 className="text-xl font-semibold mb-4">Why Choose Our Micronutrient Premixes?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-400 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-neutral-300">Compliant with international standards</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-400 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-neutral-300">Optimized for stability and bioavailability</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-400 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-neutral-300">Rigorous quality control procedures</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-400 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-neutral-300">Technical support and implementation guidance</span>
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

export default MicronutrientPremix;
