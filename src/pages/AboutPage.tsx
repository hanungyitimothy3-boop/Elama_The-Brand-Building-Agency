import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import About from "@/components/About";
import VisionMission from "@/components/VisionMission";
import CoreValues from "@/components/CoreValues";
import Testimonials from "@/components/Testimonials";
import Metrics from "@/components/Metrics";
import CTASection from "@/components/CTASection";

const AboutPage = () => {
  return (
    <Layout>
      <PageHeader
        eyebrow="About Elämä"
        title="Built with"
        highlight="real intention."
      />
      <About />
      <VisionMission />
      <CoreValues />
      <Metrics />
      <Testimonials />
      <CTASection />
    </Layout>
  );
};

export default AboutPage;
