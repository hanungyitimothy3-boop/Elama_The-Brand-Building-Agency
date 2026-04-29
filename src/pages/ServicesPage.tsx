import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import Services from "@/components/Services";
import CTASection from "@/components/CTASection";

const ServicesPage = () => {
  return (
    <Layout>
      <PageHeader
        eyebrow="What We Do"
        title="Services built for"
        highlight="lasting brands."
        description="From identity to packaging, every service we offer is engineered to make your brand recognized, trusted, and remembered."
      />
      <Services />
      <CTASection
        title="Have a project in mind?"
        description="Tell us what you're building. We'll show you how design can move it forward."
      />
    </Layout>
  );
};

export default ServicesPage;
