import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import MockupCarousel from "@/components/MockupCarousel";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <Portfolio />
      <MockupCarousel />
      <About />
      <Testimonials />
      <CTASection />
    </Layout>
  );
};

export default Index;
