import React from 'react';
import { Link } from 'react-router-dom';
import { Wheat, ArrowRight, CheckCircle, BarChart3, Tablet, Utensils } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import FoodImageGallery from '@/components/ui/FoodImageGallery';
import StatCard from '@/components/ui/StatCard';
import { Button } from '@/components/ui/button';

const StapleFood = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="container-wide">
        <SectionHeading
          subtitle="Solutions & Products"
          title="Staple Food Fortification"
          description="High-quality micronutrient premixes for fortifying staple foods to address widespread nutritional deficiencies."
        />
        
        {/* Hero Image */}
        <div className="mt-10 relative rounded-xl overflow-hidden">
          <img 
            src="/lovable-uploads/8dcfc58b-98fa-43b2-812e-97e7507e2ac4.png" 
            alt="Wheat Field" 
            className="w-full aspect-[21/9] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
            <div className="text-white p-8 md:p-12 max-w-2xl">
              <Wheat className="w-16 h-16 text-vitanium-400 mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Enhancing Staple Foods</h2>
              <p className="text-lg text-white/80">
                Our fortification solutions add essential micronutrients to everyday foods, improving public health and combating malnutrition.
              </p>
            </div>
          </div>
        </div>
        
        {/* Overview */}
        <div className="mt-16 max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="text-lg text-neutral-700 mb-6">
              Staple food fortification is a crucial strategy for addressing micronutrient deficiencies at a population level. By adding essential vitamins and minerals to widely consumed staple foods like rice, wheat flour, maize flour, and edible oils, VitaniumX helps improve public health in a cost-effective and sustainable way.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-lg text-neutral-700">
              Our staple food fortification solutions are designed to meet both national and international standards, ensuring optimal bioavailability while maintaining the sensory properties of the food. We work closely with government programs, NGOs, and food manufacturers to implement effective fortification strategies tailored to specific regional needs.
            </p>
          </ScrollReveal>
        </div>
        
        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard 
            number="2.5B+"
            label="People reached through fortification"
            glowColor="blue"
          />
          <StatCard 
            number="40+"
            label="Countries with fortification programs"
            glowColor="green"
            delay={100}
          />
          <StatCard 
            number="30%"
            label="Reduction in micronutrient deficiencies"
            glowColor="amber"
            delay={200}
          />
          <StatCard 
            number="9:1"
            label="Benefit-to-cost ratio of fortification"
            glowColor="purple"
            delay={300}
          />
        </div>
        
        {/* Food Image Gallery */}
        <div className="mt-16">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-neutral-800 mb-8">Our Staple Food Solutions</h2>
          </ScrollReveal>
          
          <FoodImageGallery 
            images={[
              {
                src: "/lovable-uploads/a6e4f46c-1bc5-4185-a0ee-4e19acea274d.png",
                alt: "White Rice"
              },
              {
                src: "/lovable-uploads/2d24b59b-1dc0-4c14-9736-2efaa2ea875e.png",
                alt: "Rice Sack with Wooden Scoop"
              },
              {
                src: "/lovable-uploads/60a0493f-f80d-4e07-8105-ddc44b525875.png",
                alt: "Premium Edible Oils"
              },
              {
                src: "/lovable-uploads/a2700011-5dc2-4329-9c4f-3acbc46caa75.png",
                alt: "Oil Manufacturing Line"
              },
              {
                src: "/lovable-uploads/6a8ba746-47c7-4954-a5d0-a19272eb55bd.png",
                alt: "Iodized Salt Crystals"
              },
              {
                src: "/lovable-uploads/c0a32cb5-dcb2-48e8-b9dd-954bab2fbeec.png",
                alt: "Wheat Flour and Wheat Stalks"
              }
            ]}
            columns={3}
            className="mb-12"
          />
        </div>
        
        {/* Product Details */}
        <div className="mt-16">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-neutral-800 mb-12">Our Staple Food Fortification Solutions</h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Wheat Flour Fortification */}
            <ScrollReveal delay={100}>
              <div className="bg-white rounded-xl shadow-subtle border border-neutral-100 overflow-hidden shadow-[0_10px_25px_-5px_rgba(14,165,233,0.3)] hover:shadow-[0_15px_35px_-5px_rgba(14,165,233,0.5)] transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src="/lovable-uploads/dc73f31d-4223-4d13-a641-5089713fd5d0.png" 
                    alt="Flour Fortification Premixes" 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4">Wheat Flour Fortification</h3>
                  <p className="text-neutral-600 mb-6">
                    Our wheat flour premixes are designed to address common micronutrient deficiencies by incorporating essential vitamins and minerals. These premixes are easy to integrate into existing flour milling processes and ensure even distribution of nutrients throughout the flour.
                  </p>
                  
                  <h4 className="font-semibold text-lg mb-3">Key Components:</h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Iron (Ferrous Fumarate / NaFeEDTA)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Folic Acid</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Vitamin B12</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Zinc</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Vitamin A (optional)</span>
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
                      <span className="text-neutral-600">Commercial flour mills</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Humanitarian food assistance</span>
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
            
            {/* Rice Fortification */}
            <ScrollReveal delay={200}>
              <div className="bg-white rounded-xl shadow-subtle border border-neutral-100 overflow-hidden shadow-[0_10px_25px_-5px_rgba(16,185,129,0.3)] hover:shadow-[0_15px_35px_-5px_rgba(16,185,129,0.5)] transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src="/lovable-uploads/6204902b-53ac-4075-9923-76e67c548ea0.png" 
                    alt="Rice in hands over rice field" 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4">Rice Fortification</h3>
                  <p className="text-neutral-600 mb-6">
                    Our Fortified Rice Kernels (FRK) and premixes are formulated to blend seamlessly with regular rice, providing essential micronutrients without affecting taste, appearance, or cooking quality. We offer multiple fortification technologies to suit different production scenarios.
                  </p>
                  
                  <h4 className="font-semibold text-lg mb-3">Key Components:</h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Iron (Ferric Pyrophosphate / NaFeEDTA)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Folic Acid</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Vitamin B12</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Vitamin A</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Zinc</span>
                    </li>
                  </ul>
                  
                  <h4 className="font-semibold text-lg mb-3">Technology Options:</h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Hot extrusion</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Warm extrusion</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Coating technology</span>
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
            {/* Edible Oil Fortification */}
            <ScrollReveal delay={300}>
              <div className="bg-white rounded-xl shadow-subtle border border-neutral-100 overflow-hidden shadow-[0_10px_25px_-5px_rgba(245,158,11,0.3)] hover:shadow-[0_15px_35px_-5px_rgba(245,158,11,0.5)] transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src="/lovable-uploads/74a3d0a0-22d5-4ba7-a2f9-bf495d9de3a0.png" 
                    alt="Oil Fortification Premixes" 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4">Edible Oil Fortification</h3>
                  <p className="text-neutral-600 mb-6">
                    Our oil-soluble vitamin premixes are specifically designed for fortifying various edible oils, including palm oil, soybean oil, sunflower oil, and more. These premixes ensure stability and even distribution of nutrients throughout the oil.
                  </p>
                  
                  <h4 className="font-semibold text-lg mb-3">Key Components:</h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Vitamin A (Retinyl Palmitate)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Vitamin D (Cholecalciferol)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Vitamin E (optional)</span>
                    </li>
                  </ul>
                  
                  <h4 className="font-semibold text-lg mb-3">Features:</h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Enhanced stability to heat and light</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">No impact on sensory properties</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Easy integration into oil processing</span>
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
            
            {/* Milk Fortification */}
            <ScrollReveal delay={400}>
              <div className="bg-white rounded-xl shadow-subtle border border-neutral-100 overflow-hidden shadow-[0_10px_25px_-5px_rgba(139,92,246,0.3)] hover:shadow-[0_15px_35px_-5px_rgba(139,92,246,0.5)] transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src="/lovable-uploads/059e844d-fe4e-47f4-b1a3-104c6a541f6d.png" 
                    alt="Fresh Dairy Products" 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4">Milk Fortification</h3>
                  <p className="text-neutral-600 mb-6">
                    Our milk fortification solutions are designed to enhance the nutritional value of liquid milk and milk products. These premixes are formulated to ensure stability during pasteurization, homogenization, and storage.
                  </p>
                  
                  <h4 className="font-semibold text-lg mb-3">Key Components:</h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Vitamin A</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Vitamin D</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Calcium (optional)</span>
                    </li>
                  </ul>
                  
                  <h4 className="font-semibold text-lg mb-3">Applications:</h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Liquid milk</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Milk powders</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Yogurt and other dairy products</span>
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

        {/* Success Stories */}
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
                      src="/lovable-uploads/2025292d-9888-4583-8efc-9e5ec53fbca5.png" 
                      alt="Fresh Milk in Containers" 
                      className="w-full aspect-video object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Uttar Pradesh Rice Fortification Program</h3>
                  <p className="text-neutral-600 mb-6">
                    Partnered with the Uttar Pradesh government to implement rice fortification across public distribution systems, reaching over 15 million beneficiaries with fortified rice containing iron, folic acid, and vitamin B12.
                  </p>
                  <div className="flex items-center space-x-4 mt-auto">
                    <div className="font-semibold">Impact:</div>
                    <div className="text-vitanium-600">15M+ beneficiaries</div>
                  </div>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={200}>
                <div className="flex flex-col h-full">
                  <div className="mb-4 rounded-lg overflow-hidden">
                    <img 
                      src="/lovable-uploads/23ee7423-4dc4-4911-9637-b46de5bd277a.png" 
                      alt="Edible Oil Bottles" 
                      className="w-full aspect-video object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-4">National Edible Oil Fortification Initiative</h3>
                  <p className="text-neutral-600 mb-6">
                    Collaborated with major oil manufacturers to implement vitamin A and D fortification in edible oils, contributing to a national initiative aimed at addressing vitamin deficiencies.
                  </p>
                  <div className="flex items-center space-x-4 mt-auto">
                    <div className="font-semibold">Impact:</div>
                    <div className="text-vitanium-600">30M+ households reached</div>
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
                  <h2 className="text-2xl font-bold mb-4">Need a Custom Staple Food Fortification Solution?</h2>
                  <p className="text-neutral-300 mb-6">
                    Our team can develop tailored premixes to meet your specific requirements, whether you're a government program, food manufacturer, or NGO.
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
                  <h3 className="text-xl font-semibold mb-4">Why Choose Our Staple Food Fortification Solutions?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-400 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-neutral-300">Compliant with FSSAI and international standards</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-400 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-neutral-300">Optimal bioavailability and stability</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-400 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-neutral-300">No impact on taste, color, or cooking properties</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-400 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-neutral-300">Technical support and quality assurance</span>
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

export default StapleFood;
