
import React from 'react';
import { Wheat, HeartPulse, FlaskConical, Building } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import ProductCard from '@/components/ui/ProductCard';
import { Link } from 'react-router-dom';

const SolutionsSection = () => {
  return (
    <section className="py-20 bg-white relative">
      <div className="container-wide">
        <SectionHeading
          subtitle="Our Solutions"
          title="Comprehensive Fortification Solutions"
          description="We offer a wide range of micronutrient premixes designed for various applications across the food industry."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          <ProductCard
            title="Micronutrient Premix"
            description="Premixes for staple foods, FMCG products, and animal nutrition to address micronutrient deficiencies."
            icon={<Wheat className="h-6 w-6" />}
            link="/solutions/micronutrient-premix"
            delay={100}
          />
          <ProductCard
            title="Therapeutic Nutrition"
            description="Specialized, nutrient-dense formulations for addressing acute malnutrition in vulnerable populations."
            icon={<HeartPulse className="h-6 w-6" />}
            link="/solutions/therapeutic-nutrition"
            delay={200}
          />
          <ProductCard
            title="Customized Formulations"
            description="Tailored blends designed to meet specific nutritional requirements and applications."
            icon={<FlaskConical className="h-6 w-6" />}
            link="/solutions/custom"
            delay={300}
          />
          <ProductCard
            title="Government Program Solutions"
            description="Specialized nutritional products for government food security and welfare initiatives."
            icon={<Building className="h-6 w-6" />}
            link="/solutions/government-programs"
            delay={400}
          />
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/solutions/micronutrient-premix" className="btn-primary bg-vitanium-500 hover:bg-vitanium-600">
            Explore Our Solutions
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
