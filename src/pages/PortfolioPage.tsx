import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import Portfolio from "@/components/Portfolio";
import MockupCarousel from "@/components/MockupCarousel";
import CTASection from "@/components/CTASection";

const PortfolioPage = () => {
  return (
    <Layout>
      <PageHeader
        eyebrow="Selected Work"
        title="Brands we've helped"
        highlight="bring to life."
        description="A look at the identities, campaigns, and products we've shaped for founders across industries."
      />
      <Portfolio />
      <MockupCarousel />
      <CTASection
        title="Want to be our next case study?"
        description="Let's talk about your brand and how we can shape it for the next chapter."
      />
    </Layout>
  );
};

export default PortfolioPage;
