
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import PricingSection from '@/components/PricingSection';

const Index = () => {
  return (
    <Layout>
      <div className="animate-fade-in">
        <HeroSection />
        <FeaturesSection />
        <PricingSection />
      </div>
    </Layout>
  );
};

export default Index;
