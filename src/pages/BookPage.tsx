import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import Contact from "@/components/Contact";

const BookPage = () => {
  return (
    <Layout>
      <PageHeader
        eyebrow="Book a Session"
        title="Let's start"
        highlight="something timeless."
        description="Tell us about your brand, your goals, and where you want to go. We'll get back to you within 24 hours."
      />
      <Contact />
    </Layout>
  );
};

export default BookPage;
