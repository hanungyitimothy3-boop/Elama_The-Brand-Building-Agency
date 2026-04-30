import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import BrandPositioning from "@/components/BrandPositioning";
import MockupCarousel from "@/components/MockupCarousel";
import About from "@/components/About";
import VisionMission from "@/components/VisionMission";
import CoreValues from "@/components/CoreValues";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <BrandPositioning />
      <MockupCarousel />
      <About />
      <VisionMission />
      <CoreValues />
      <CTASection />
    </Layout>
  );
};

export default Index;
