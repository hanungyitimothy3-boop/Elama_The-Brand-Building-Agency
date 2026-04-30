import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import About from "@/components/About";
import VisionMission from "@/components/VisionMission";
import CoreValues from "@/components/CoreValues";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";

const AboutPage = () => {
  return (
    <Layout>
      <PageHeader
        eyebrow="About Elämä"
        title="A studio for brands with"
        highlight="real intention."
        description="A community of marketers and strategists helping brands find their voice and earn meaningful visibility."
      />
      <About />
      <VisionMission />
      <CoreValues />
      <Testimonials />
      <CTASection />
    </Layout>
  );
};

export default AboutPage;
