
import React from 'react';
import { Wheat, Droplet, HeartPulse, Milk, FlaskConical, Pill } from 'lucide-react';
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
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
          <Link to="/solutions" className="btn-primary bg-vitanium-500 hover:bg-vitanium-600">
            View All Solutions
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
