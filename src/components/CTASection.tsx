import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
}

const CTASection = ({
  title = "Ready to build a brand that lasts?",
  description = "Let's create something timeless together. Book a session and tell us about your vision.",
  buttonText = "Book A Session Today",
}: CTASectionProps) => {
  return (
    <section className="section-padding">
      <div className="max-w-5xl mx-auto">
        <div className="glass rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 -left-32 w-80 h-80 rounded-full bg-primary/10 blur-[100px]" />
          <div className="absolute bottom-0 -right-32 w-80 h-80 rounded-full bg-primary/10 blur-[100px]" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">{title}</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">{description}</p>
            <Link
              to="/book"
              className="inline-flex group px-8 py-4 rounded-xl bg-primary text-primary-foreground font-medium text-base items-center gap-2 transition-all duration-300 hover:gap-3 animate-pulse-glow"
            >
              {buttonText}
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
