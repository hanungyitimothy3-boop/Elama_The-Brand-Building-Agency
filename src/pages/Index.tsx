import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import BrandPositioning from "@/components/BrandPositioning";
import MockupCarousel from "@/components/MockupCarousel";
import About from "@/components/About";
import VisionMission from "@/components/VisionMission";
import CoreValues from "@/components/CoreValues";
import Founder from "@/components/Founder";
import Metrics from "@/components/Metrics";
import BrandReinforcement from "@/components/BrandReinforcement";
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
      <Founder />
      <Metrics />
      <BrandReinforcement />
      <CTASection />
    </Layout>
  );
};

export default Index;
