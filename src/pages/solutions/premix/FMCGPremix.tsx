
import React from 'react';
import { Link } from 'react-router-dom';
import { FlaskConical, ArrowRight, CheckCircle } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Button } from '@/components/ui/button';
import FoodImageGallery from '@/components/ui/FoodImageGallery';

const FMCGPremix = () => {
  // Sample gallery images for FMCG products
  const galleryImages = [
    {
      src: "/lovable-uploads/a6e4f46c-1bc5-4185-a0ee-4e19acea274d.png",
      alt: "Fortified Breakfast Cereal"
    },
    {
      src: "/lovable-uploads/aaf178d4-a6a4-4b55-80ec-0c7059537d4e.png",
      alt: "Fortified Snack Products"
    },
    {
      src: "/lovable-uploads/73949e72-29c8-4be2-8a66-fb45bba5fd39.png",
      alt: "Nutritional Beverage Powder"
    },
    {
      src: "/lovable-uploads/4fa0c9a4-c990-4524-9ce1-c0bc24be38b6.png",
      alt: "Fortified Baked Goods"
    },
    {
      src: "/lovable-uploads/1cb06548-367b-451e-b18e-0fb4cf05f88b.png",
      alt: "Enriched Dairy Products"
    },
    {
      src: "/lovable-uploads/5c7accf9-77ec-4d24-8c6c-ec4d7d12cdcf.png",
      alt: "Functional Beverage Applications"
    }
  ];

  return (
    <div className="pt-20 pb-20">
      <div className="container-wide">
        <SectionHeading
          title="FMCG Premixes"
          description="Specialized micronutrient premixes for consumer packaged goods, enhancing nutritional profiles while maintaining product integrity."
        />
        
        {/* Hero Image */}
        <div className="mt-10 relative rounded-xl overflow-hidden">
          <img 
            src="/lovable-uploads/6204902b-53ac-4075-9923-76e67c548ea0.png" 
            alt="FMCG Premixes" 
            className="w-full aspect-[21/9] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
            <div className="text-white p-8 md:p-12 max-w-2xl">
              <FlaskConical className="w-16 h-16 text-vitanium-400 mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Enhanced Consumer Products</h2>
              <p className="text-lg text-white/80">
                Our FMCG premixes are specially formulated for consumer packaged goods, providing both nutritional benefits and product differentiation for food manufacturers.
              </p>
            </div>
          </div>
        </div>
        
        {/* Overview */}
        <div className="mt-16 max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="text-lg text-neutral-700 mb-6">
              Our FMCG premixes are specially designed for manufacturers of branded consumer products who want to enhance the nutritional profile of their offerings. These premixes are formulated to maintain product taste, appearance, and shelf life while delivering meaningful nutritional benefits.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-lg text-neutral-700">
              At VitaniumX, we work closely with R&D teams to develop premixes that align with brand positioning and consumer preferences. Our formulations can support various claims, from basic vitamin and mineral fortification to targeted functional benefits.
            </p>
          </ScrollReveal>
        </div>
        
        {/* Image Gallery */}
        <div className="mt-16">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-neutral-800 mb-8">Applications Gallery</h2>
          </ScrollReveal>
          <ScrollReveal>
            <FoodImageGallery 
              images={galleryImages}
              columns={3}
              hoverEffect="both"
              imageHeight="square"
              captionStyle="hover"
              className="mb-12"
            />
          </ScrollReveal>
        </div>
        
        {/* Product Details */}
        <div className="mt-10">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-neutral-800 mb-12">FMCG Premix Products</h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal delay={100}>
              <div className="bg-white rounded-xl shadow-subtle border border-neutral-100 overflow-hidden p-6 hover:shadow-md transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4">Bakery Product Premixes</h3>
                <p className="text-neutral-600 mb-6">
                  Our bakery premixes are designed for breads, biscuits, and other baked goods, ensuring stability during baking and long shelf life.
                </p>
                
                <h4 className="font-semibold text-lg mb-3">Key Features:</h4>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Heat-stable formulations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">No impact on rising or texture</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Customizable nutrient profiles</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <div className="bg-white rounded-xl shadow-subtle border border-neutral-100 overflow-hidden p-6 hover:shadow-md transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4">Breakfast Cereal Premixes</h3>
                <p className="text-neutral-600 mb-6">
                  Our breakfast cereal premixes provide comprehensive nutrient fortification for flaked, extruded, or granola-type cereals.
                </p>
                
                <h4 className="font-semibold text-lg mb-3">Key Features:</h4>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Uniform distribution in product matrix</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Stability in milk and other liquid media</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Formulations for various age groups</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={300}>
              <div className="bg-white rounded-xl shadow-subtle border border-neutral-100 overflow-hidden p-6 hover:shadow-md transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4">Beverage Fortification Premixes</h3>
                <p className="text-neutral-600 mb-6">
                  Our beverage premixes are designed for clear and cloudy drinks, ensuring solubility and stability in various pH environments.
                </p>
                
                <h4 className="font-semibold text-lg mb-3">Key Features:</h4>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Enhanced solubility formulations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Stability in various pH conditions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Neutral flavor profiles</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={400}>
              <div className="bg-white rounded-xl shadow-subtle border border-neutral-100 overflow-hidden p-6 hover:shadow-md transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4">Snack Food Premixes</h3>
                <p className="text-neutral-600 mb-6">
                  Our snack food premixes are designed for extruded snacks, chips, and other savory products, providing stability in high-fat environments.
                </p>
                
                <h4 className="font-semibold text-lg mb-3">Key Features:</h4>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Oxidative stability in high-fat matrices</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Heat-resistant during processing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-vitanium-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-600">Compatible with various seasoning systems</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
        
        {/* Marketing Support */}
        <div className="mt-20">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-neutral-800 mb-8">Marketing Support</h2>
          </ScrollReveal>
          
          <div className="bg-white p-8 rounded-xl shadow-subtle border border-neutral-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ScrollReveal delay={100}>
                <div>
                  <h3 className="text-xl font-bold mb-4">Claims Support</h3>
                  <p className="text-neutral-600">
                    We provide scientific documentation and regulatory guidance to support nutrition and health claims for your fortified products.
                  </p>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={200}>
                <div>
                  <h3 className="text-xl font-bold mb-4">Consumer Insights</h3>
                  <p className="text-neutral-600">
                    Access our research on consumer attitudes and preferences toward fortified products to inform your product positioning.
                  </p>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={300}>
                <div>
                  <h3 className="text-xl font-bold mb-4">Nutrition Communication</h3>
                  <p className="text-neutral-600">
                    We offer guidance on effectively communicating nutritional benefits to consumers in a compliant and impactful way.
                  </p>
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
                  <h2 className="text-2xl font-bold mb-4">Enhance Your Product Portfolio</h2>
                  <p className="text-neutral-300 mb-6">
                    Contact our team to discuss how our FMCG premixes can help you develop innovative, nutritionally enhanced products that stand out in the market.
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
                  <h3 className="text-xl font-semibold mb-4">Competitive Advantages</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-400 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-neutral-300">Product differentiation through enhanced nutrition</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-400 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-neutral-300">Clean label options available</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-400 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-neutral-300">Formulations tailored to your specific product</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-vitanium-400 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-neutral-300">Regulatory compliance across markets</span>
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

export default FMCGPremix;
