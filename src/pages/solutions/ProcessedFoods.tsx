
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Droplet, 
  ArrowRight, 
  CheckCircle, 
  CakeSlice, 
  Cookie, 
  Coffee,
  GlassWater
} from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';

const ProcessedFoods = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="container-wide">
        <SectionHeading
          subtitle="Solutions & Products"
          title="Processed Food Solutions"
          description="Custom micronutrient premixes for bakery, confectionery, beverages, and more."
        />
        
        {/* Hero Image */}
        <div className="mt-10 relative rounded-xl overflow-hidden">
          <div className="aspect-[21/9] bg-neutral-200 flex justify-center items-center">
            <div className="text-center p-6">
              <Droplet className="w-16 h-16 mx-auto text-vitanium-600 mb-4" />
              <p className="text-neutral-500">
                Image placeholder: Various processed food products being fortified
              </p>
            </div>
          </div>
        </div>
        
        {/* Overview */}
        <div className="mt-16 max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="text-lg text-neutral-700 mb-6">
              VitaniumX offers specialized fortification solutions for processed foods, enabling manufacturers to enhance the nutritional value of their products while maintaining taste, texture, and appearance. Our custom premixes are designed to address specific nutritional needs while considering the unique characteristics of each food matrix.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-lg text-neutral-700">
              Whether you're looking to fortify baked goods, dairy products, beverages, or confectionery items, our team can develop premixes that ensure optimal nutrient stability, bioavailability, and sensory properties throughout the product's shelf life.
            </p>
          </ScrollReveal>
        </div>
        
        {/* Product Categories */}
        <div className="mt-16">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-neutral-800 mb-12">Processed Food Fortification Solutions</h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Bakery Products */}
            <ScrollReveal delay={100}>
              <div className="bg-white p-6 rounded-lg shadow-subtle border border-neutral-100 h-full">
                <div className="mb-6">
                  <CakeSlice className="h-12 w-12 text-vitanium-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Bakery Products</h3>
                <p className="text-neutral-600 mb-6">
                  Enhance the nutritional profile of breads, biscuits, cookies, and other baked goods with our specialized premixes. Our formulations are designed to withstand baking temperatures while ensuring optimal nutrient retention.
                </p>
                
                <h4 className="font-semibold mb-3">Key Nutrients:</h4>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Iron</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">B-Vitamins (B1, B2, B3, B6, B9, B12)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Zinc</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Calcium</span>
                  </li>
                </ul>
                
                <div className="mt-auto">
                  <Link to="/get-quote" className="inline-flex items-center text-vitanium-600 font-medium hover:text-vitanium-700">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
            
            {/* Confectionery */}
            <ScrollReveal delay={200}>
              <div className="bg-white p-6 rounded-lg shadow-subtle border border-neutral-100 h-full">
                <div className="mb-6">
                  <Cookie className="h-12 w-12 text-vitanium-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Confectionery</h3>
                <p className="text-neutral-600 mb-6">
                  Add nutritional value to candies, chocolates, and other confectionery items with our specialized vitamin and mineral premixes. Our formulations are designed to blend seamlessly without affecting taste or appearance.
                </p>
                
                <h4 className="font-semibold mb-3">Key Nutrients:</h4>
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
                    <span className="text-neutral-600">Vitamin E</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">B-Vitamins</span>
                  </li>
                </ul>
                
                <div className="mt-auto">
                  <Link to="/get-quote" className="inline-flex items-center text-vitanium-600 font-medium hover:text-vitanium-700">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
            
            {/* Beverages */}
            <ScrollReveal delay={300}>
              <div className="bg-white p-6 rounded-lg shadow-subtle border border-neutral-100 h-full">
                <div className="mb-6">
                  <GlassWater className="h-12 w-12 text-vitanium-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Beverages</h3>
                <p className="text-neutral-600 mb-6">
                  Fortify juices, dairy drinks, plant-based beverages, and other liquid products with our specialized water-soluble premixes. Our formulations ensure proper dispersion and stability in liquid environments.
                </p>
                
                <h4 className="font-semibold mb-3">Key Nutrients:</h4>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Vitamin C</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">B-Vitamins</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Calcium</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Iron</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Zinc</span>
                  </li>
                </ul>
                
                <div className="mt-auto">
                  <Link to="/get-quote" className="inline-flex items-center text-vitanium-600 font-medium hover:text-vitanium-700">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
            
            {/* Breakfast Cereals */}
            <ScrollReveal delay={400}>
              <div className="bg-white p-6 rounded-lg shadow-subtle border border-neutral-100 h-full">
                <div className="mb-6">
                  <Coffee className="h-12 w-12 text-vitanium-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Breakfast Cereals</h3>
                <p className="text-neutral-600 mb-6">
                  Enhance the nutritional value of breakfast cereals, granolas, and cereal bars with our specialized premixes. Our formulations are designed to adhere to cereal products during processing and maintain stability during storage.
                </p>
                
                <h4 className="font-semibold mb-3">Key Nutrients:</h4>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Iron</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Zinc</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">B-Vitamins</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Vitamin D</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Calcium</span>
                  </li>
                </ul>
                
                <div className="mt-auto">
                  <Link to="/get-quote" className="inline-flex items-center text-vitanium-600 font-medium hover:text-vitanium-700">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
        
        {/* Features & Benefits */}
        <div className="mt-20">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-neutral-800 mb-12">Features & Benefits</h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollReveal delay={100}>
              <div className="bg-white p-6 rounded-lg shadow-subtle border border-neutral-100">
                <h3 className="text-xl font-semibold mb-4">Custom Formulations</h3>
                <p className="text-neutral-600">
                  Tailored micronutrient premixes designed specifically for your product, taking into account processing conditions, interactions with other ingredients, and target consumer groups.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <div className="bg-white p-6 rounded-lg shadow-subtle border border-neutral-100">
                <h3 className="text-xl font-semibold mb-4">Sensory Compatibility</h3>
                <p className="text-neutral-600">
                  Careful selection of nutrient forms and encapsulation technologies to minimize impact on taste, color, and texture of the final product.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={300}>
              <div className="bg-white p-6 rounded-lg shadow-subtle border border-neutral-100">
                <h3 className="text-xl font-semibold mb-4">Enhanced Stability</h3>
                <p className="text-neutral-600">
                  Specialized formulations that ensure nutrient stability during processing, storage, and throughout the product's shelf life.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={400}>
              <div className="bg-white p-6 rounded-lg shadow-subtle border border-neutral-100">
                <h3 className="text-xl font-semibold mb-4">Regulatory Compliance</h3>
                <p className="text-neutral-600">
                  Premixes designed to meet FSSAI regulations and international standards, with appropriate documentation for product claims and labeling.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={500}>
              <div className="bg-white p-6 rounded-lg shadow-subtle border border-neutral-100">
                <h3 className="text-xl font-semibold mb-4">Technical Support</h3>
                <p className="text-neutral-600">
                  Comprehensive technical assistance, including formulation guidance, process integration advice, and troubleshooting support.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={600}>
              <div className="bg-white p-6 rounded-lg shadow-subtle border border-neutral-100">
                <h3 className="text-xl font-semibold mb-4">Marketing Support</h3>
                <p className="text-neutral-600">
                  Assistance with developing science-based claims, nutritional information, and consumer education materials for fortified products.
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
          
          <div className="bg-white p-8 rounded-xl shadow-subtle border border-neutral-100">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              <div className="col-span-1 lg:col-span-2">
                <div className="aspect-square bg-neutral-200 rounded-lg flex justify-center items-center">
                  <div className="text-center p-6">
                    <CakeSlice className="w-12 h-12 mx-auto text-vitanium-600 mb-2" />
                    <p className="text-neutral-500">Image placeholder: Fortified biscuit product</p>
                  </div>
                </div>
              </div>
              
              <div className="col-span-1 lg:col-span-3">
                <h3 className="text-2xl font-bold mb-4">Leading Biscuit Manufacturer</h3>
                <p className="text-neutral-600 mb-6">
                  A leading biscuit manufacturer approached VitaniumX to develop a fortified biscuit targeted at children aged 4-12 years. The client wanted to address common micronutrient deficiencies while maintaining the product's taste, texture, and shelf life.
                </p>
                
                <h4 className="font-semibold text-lg mb-3">Our Solution:</h4>
                <p className="text-neutral-600 mb-6">
                  We developed a custom micronutrient premix containing iron, zinc, and essential B-vitamins that could withstand the baking process and remain stable throughout the product's 9-month shelf life. We used encapsulated nutrients to prevent unwanted interactions and maintain sensory properties.
                </p>
                
                <h4 className="font-semibold text-lg mb-3">Results:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Successfully launched a fortified biscuit line with no impact on taste or appearance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Product approved by FSSAI for fortification claims</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">15% sales increase compared to non-fortified variant</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="mt-16">
          <div className="bg-navy-900 text-white py-12 px-8 rounded-xl text-center">
            <ScrollReveal>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Fortify Your Food Products?</h2>
              <p className="text-neutral-300 mb-8 max-w-2xl mx-auto">
                Our team can help you develop customized fortification solutions that enhance your products' nutritional value while maintaining their sensory properties and stability.
              </p>
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

export default ProcessedFoods;
