import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";

const AboutPage = () => {
  return (
    <Layout>
      <PageHeader
        eyebrow="About Elämä"
        title="A studio for brands with"
        highlight="real intention."
        description="We're a premium brand-building agency for founders who care how they're perceived—and who refuse to look like everyone else."
      />
      <About />
      <Testimonials />
      <CTASection />
    </Layout>
  );
};

export default AboutPage;
