
import React from 'react';
import { Link } from 'react-router-dom';
import { Pill, ArrowRight, CheckCircle, ShoppingBag, BarChart } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import FoodImageGallery from '@/components/ui/FoodImageGallery';

const FmcgFortification = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="container-wide">
        <SectionHeading
          subtitle="Solutions & Products"
          title="FMCG Fortification"
          description="Specialized fortification solutions for Fast-Moving Consumer Goods to enhance nutritional value and market differentiation."
        />
        
        {/* Hero Image */}
        <div className="mt-10 relative rounded-xl overflow-hidden">
          <img 
            src="/images/food/fmcg-products.jpg" 
            alt="Various FMCG products on retail shelves" 
            className="w-full aspect-[21/9] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
            <div className="text-white p-8 md:p-12 max-w-2xl">
              <Pill className="w-16 h-16 text-vitanium-400 mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Enhanced Consumer Products</h2>
              <p className="text-lg text-white/80">
                Differentiate your products with strategic micronutrient fortification while maintaining taste and quality.
              </p>
            </div>
          </div>
        </div>
        
        {/* Overview */}
        <div className="mt-16 max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="text-lg text-neutral-700 mb-6">
              VitaniumX provides specialized fortification solutions for a wide range of Fast-Moving Consumer Goods (FMCG), helping manufacturers enhance the nutritional profile of their products while maintaining quality, taste, and consumer appeal. Our solutions are designed to create value-added products that stand out in competitive retail environments.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-lg text-neutral-700">
              Whether you're looking to fortify breads, biscuits, breakfast cereals, noodles, or beverages, we have the expertise to develop customized premixes that integrate seamlessly with your production processes and meet both regulatory requirements and consumer expectations.
            </p>
          </ScrollReveal>
        </div>
        
        {/* Food Image Gallery */}
        <div className="mt-16">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-neutral-800 mb-8">Our FMCG Solutions</h2>
          </ScrollReveal>
          
          <FoodImageGallery 
            images={[
              {
                src: "/images/food/fortified-bread.jpg",
                alt: "Fortified Bakery Products"
              },
              {
                src: "/images/food/breakfast-cereal.jpg",
                alt: "Fortified Breakfast Cereals"
              },
              {
                src: "/images/food/fortified-beverage.jpg",
                alt: "Fortified Beverages"
              },
              {
                src: "/images/food/fortified-cookies.jpg",
                alt: "Fortified Biscuits & Cookies"
              },
              {
                src: "/images/food/fortified-noodles.jpg",
                alt: "Fortified Noodles & Pasta"
              },
              {
                src: "/images/food/fortified-snacks.jpg",
                alt: "Fortified Snack Foods"
              }
            ]}
            columns={3}
            className="mb-12"
          />
        </div>
        
        {/* Product Categories */}
        <div className="mt-16">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-neutral-800 mb-12">FMCG Fortification Solutions</h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8">
            {/* Bakery Products */}
            <ScrollReveal delay={100}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                <div className="md:col-span-1 rounded-lg aspect-square overflow-hidden shadow-[0_10px_25px_-5px_rgba(14,165,233,0.3)]">
                  <img 
                    src="/images/food/fortified-bread.jpg" 
                    alt="Bakery Products" 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-xl font-bold mb-3">Bakery Products</h3>
                  <p className="text-neutral-600 mb-4">
                    Fortification solutions for breads, buns, cakes, and other baked goods, designed to withstand baking temperatures while maintaining nutrient bioavailability.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Iron, folic acid, and B-vitamins</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Heat-stable vitamin formulations</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Mineral fortification options</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>
            
            {/* Biscuits & Cookies */}
            <ScrollReveal delay={200}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                <div className="md:col-span-1 rounded-lg aspect-square overflow-hidden shadow-[0_10px_25px_-5px_rgba(16,185,129,0.3)]">
                  <img 
                    src="/images/food/fortified-cookies.jpg" 
                    alt="Biscuits & Cookies" 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-xl font-bold mb-3">Biscuits & Cookies</h3>
                  <p className="text-neutral-600 mb-4">
                    Micronutrient premixes for biscuits and cookies, offering multiple fortification levels to target different consumer segments from children to adults.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Multiple vitamin & mineral combinations</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">No impact on taste or texture</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Child-specific formulations available</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>
            
            {/* Breakfast Cereals */}
            <ScrollReveal delay={300}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                <div className="md:col-span-1 rounded-lg aspect-square overflow-hidden shadow-[0_10px_25px_-5px_rgba(245,158,11,0.3)]">
                  <img 
                    src="/images/food/breakfast-cereal.jpg" 
                    alt="Breakfast Cereals" 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-xl font-bold mb-3">Breakfast Cereals</h3>
                  <p className="text-neutral-600 mb-4">
                    Comprehensive fortification solutions for breakfast cereals, muesli, granola, and cereal bars to enhance their nutritional value and market positioning.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Comprehensive vitamin & mineral blends</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Process-stable formulations</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Support for nutritional claims</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>
            
            {/* Beverages */}
            <ScrollReveal delay={400}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                <div className="md:col-span-1 rounded-lg aspect-square overflow-hidden shadow-[0_10px_25px_-5px_rgba(139,92,246,0.3)]">
                  <img 
                    src="/images/food/fortified-beverage.jpg" 
                    alt="Beverages" 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-xl font-bold mb-3">Beverages</h3>
                  <p className="text-neutral-600 mb-4">
                    Water-soluble premixes for fruit juices, dairy drinks, and other beverages, formulated for optimal stability, solubility, and sensory neutrality.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Highly soluble micronutrient forms</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">pH-stable vitamin formulations</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Color and flavor-neutral options</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>
            
            {/* Noodles & Pasta */}
            <ScrollReveal delay={500}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                <div className="md:col-span-1 rounded-lg aspect-square overflow-hidden shadow-[0_10px_25px_-5px_rgba(236,72,153,0.3)]">
                  <img 
                    src="/images/food/fortified-noodles.jpg" 
                    alt="Noodles & Pasta" 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-xl font-bold mb-3">Noodles & Pasta</h3>
                  <p className="text-neutral-600 mb-4">
                    Fortification solutions for instant noodles, pasta, and other wheat-based products, designed to withstand manufacturing processes and cooking.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Iron, B-vitamins, and other micronutrients</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Heat and moisture-stable formulations</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Masking technologies for mineral fortification</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>
            
            {/* Snack Foods */}
            <ScrollReveal delay={600}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                <div className="md:col-span-1 rounded-lg aspect-square overflow-hidden shadow-[0_10px_25px_-5px_rgba(34,197,94,0.3)]">
                  <img 
                    src="/images/food/fortified-snacks.jpg" 
                    alt="Snack Foods" 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-xl font-bold mb-3">Snack Foods</h3>
                  <p className="text-neutral-600 mb-4">
                    Fortification solutions for extruded snacks, chips, and other packaged snack foods to create nutritionally enhanced options in this high-consumption category.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Custom micronutrient blends</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">High-temperature process compatible</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Long shelf-life stability</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
        
        {/* Business Benefits */}
        <div className="mt-20">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-neutral-800 mb-12">Business Benefits of FMCG Fortification</h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollReveal delay={100}>
              <div className="bg-white p-6 rounded-lg shadow-subtle border border-neutral-100 h-full shadow-[0_10px_25px_-5px_rgba(14,165,233,0.3)] hover:shadow-[0_15px_35px_-5px_rgba(14,165,233,0.5)] transition-all duration-300">
                <BarChart className="h-12 w-12 text-vitanium-600 mb-6" />
                <h3 className="text-xl font-semibold mb-4">Market Differentiation</h3>
                <p className="text-neutral-600">
                  Stand out in competitive retail environments by offering products with enhanced nutritional value, creating a unique selling proposition and brand differentiation.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <div className="bg-white p-6 rounded-lg shadow-subtle border border-neutral-100 h-full shadow-[0_10px_25px_-5px_rgba(16,185,129,0.3)] hover:shadow-[0_15px_35px_-5px_rgba(16,185,129,0.5)] transition-all duration-300">
                <BarChart className="h-12 w-12 text-vitanium-600 mb-6" />
                <h3 className="text-xl font-semibold mb-4">Premium Positioning</h3>
                <p className="text-neutral-600">
                  Fortified products can command premium pricing, improving profit margins while delivering genuine added value to consumers through enhanced nutrition.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={300}>
              <div className="bg-white p-6 rounded-lg shadow-subtle border border-neutral-100 h-full shadow-[0_10px_25px_-5px_rgba(245,158,11,0.3)] hover:shadow-[0_15px_35px_-5px_rgba(245,158,11,0.5)] transition-all duration-300">
                <BarChart className="h-12 w-12 text-vitanium-600 mb-6" />
                <h3 className="text-xl font-semibold mb-4">Consumer Appeal</h3>
                <p className="text-neutral-600">
                  Respond to growing consumer demand for healthier food options without compromising on taste, convenience, or affordability, attracting health-conscious shoppers.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={400}>
              <div className="bg-white p-6 rounded-lg shadow-subtle border border-neutral-100 h-full shadow-[0_10px_25px_-5px_rgba(139,92,246,0.3)] hover:shadow-[0_15px_35px_-5px_rgba(139,92,246,0.5)] transition-all duration-300">
                <BarChart className="h-12 w-12 text-vitanium-600 mb-6" />
                <h3 className="text-xl font-semibold mb-4">Marketing Claims</h3>
                <p className="text-neutral-600">
                  Enable specific nutritional claims on packaging and marketing materials, such as "High in Iron" or "Source of 8 Vitamins," enhancing product appeal and visibility.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={500}>
              <div className="bg-white p-6 rounded-lg shadow-subtle border border-neutral-100 h-full shadow-[0_10px_25px_-5px_rgba(236,72,153,0.3)] hover:shadow-[0_15px_35px_-5px_rgba(236,72,153,0.5)] transition-all duration-300">
                <BarChart className="h-12 w-12 text-vitanium-600 mb-6" />
                <h3 className="text-xl font-semibold mb-4">Corporate Responsibility</h3>
                <p className="text-neutral-600">
                  Demonstrate commitment to public health and nutrition, enhancing corporate image and contributing to addressing micronutrient deficiencies in the population.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={600}>
              <div className="bg-white p-6 rounded-lg shadow-subtle border border-neutral-100 h-full shadow-[0_10px_25px_-5px_rgba(250,82,82,0.3)] hover:shadow-[0_15px_35px_-5px_rgba(250,82,82,0.5)] transition-all duration-300">
                <BarChart className="h-12 w-12 text-vitanium-600 mb-6" />
                <h3 className="text-xl font-semibold mb-4">Regulatory Compliance</h3>
                <p className="text-neutral-600">
                  Stay ahead of evolving regulatory requirements for food fortification, with our solutions designed to meet both current and anticipated standards.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
        
        {/* Case Study */}
        <div className="mt-20">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-neutral-800 mb-8">Success Story</h2>
          </ScrollReveal>
          
          <div className="bg-white p-8 rounded-xl shadow-subtle border border-neutral-100 shadow-[0_10px_25px_-5px_rgba(168,85,247,0.3)] hover:shadow-[0_15px_35px_-5px_rgba(168,85,247,0.5)] transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              <div className="col-span-1 lg:col-span-2">
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img 
                    src="/images/food/fortified-biscuits.jpg" 
                    alt="Fortified biscuit retail packaging" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="col-span-1 lg:col-span-3">
                <h3 className="text-2xl font-bold mb-4">National Biscuit Brand Fortification</h3>
                <p className="text-neutral-600 mb-6">
                  A leading national biscuit manufacturer sought to launch a new range of products positioned as nutritious snacks for children. They needed a fortification solution that would deliver meaningful nutrition while maintaining the product's taste, texture, and shelf life.
                </p>
                
                <h4 className="font-semibold text-lg mb-3">Our Solution:</h4>
                <p className="text-neutral-600 mb-6">
                  We developed a custom micronutrient premix containing 9 essential vitamins and minerals specifically targeting children's nutritional needs. The formulation used encapsulated nutrients to prevent unwanted interactions and mask mineral tastes, while ensuring stability throughout the baking process and 9-month shelf life.
                </p>
                
                <h4 className="font-semibold text-lg mb-3">Results:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Successful launch with "Rich in 9 Essential Nutrients" claim</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">20% price premium compared to regular product line</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Captured 15% market share in the children's biscuit segment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Extended to three additional product variants due to success</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Our Approach */}
        <div className="mt-20">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-neutral-800 mb-8">Our Approach to FMCG Fortification</h2>
          </ScrollReveal>
          
          <div className="bg-white p-8 rounded-xl shadow-subtle border border-neutral-100 shadow-[0_10px_25px_-5px_rgba(34,197,94,0.3)] hover:shadow-[0_15px_35px_-5px_rgba(34,197,94,0.5)] transition-all duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ScrollReveal delay={100}>
                <div>
                  <h3 className="text-xl font-bold mb-4">Comprehensive Support</h3>
                  <p className="text-neutral-600 mb-6">
                    We provide end-to-end support for FMCG manufacturers, from concept development to commercial implementation:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Initial consultation to understand product objectives</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Formulation development and prototype testing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Stability and sensory evaluation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Process integration support</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Regulatory compliance and labeling guidance</span>
                    </li>
                  </ul>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={200}>
                <div>
                  <h3 className="text-xl font-bold mb-4">Marketing Support</h3>
                  <p className="text-neutral-600 mb-6">
                    We help you maximize the marketing value of fortification with:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Scientific substantiation for marketing claims</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Nutrient content and health benefit information</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Consumer education materials and content</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Shelf-edge and POS communication strategies</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">Nutritional comparisons with competing products</span>
                    </li>
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="mt-16">
          <div className="bg-navy-900 text-white py-12 px-8 rounded-xl text-center">
            <ScrollReveal>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Enhance Your FMCG Products?</h2>
              <p className="text-neutral-300 max-w-3xl mx-auto mb-8">
                Contact our team to discuss how our fortification solutions can help differentiate your products and deliver added value to your consumers.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/get-quote" className="btn-primary bg-vitanium-500 hover:bg-vitanium-600">
                  Request a Consultation
                </Link>
                <Link to="/contact" className="btn-secondary bg-transparent text-white border-white hover:bg-white/10">
                  Learn More
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FmcgFortification;
