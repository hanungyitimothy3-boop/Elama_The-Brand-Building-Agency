import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (el) el.classList.add("fade-in-up");
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-primary/15 blur-[100px] animate-float" style={{ animationDelay: "3s" }} />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full glass text-xs text-muted-foreground tracking-widest uppercase">
          An Expert Branding Agency
        </div>

        <h3 className="text-4xl sm:text-6xl md:text-7xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-8 font-sans">
          Building Brands with
          <br />
          <span className="gradient-text font-sans block text-3xl sm:text-5xl md:text-6xl lg:text-7xl mt-2">
            Timeless market relevance.
          </span>
        </h3>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed">
          At Elämä, design isn’t just about visuals—it’s about communication. Every brand identity, logo, or social media piece we create is built to express your vision clearly and effectively.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/book"
            className="group px-5 py-3 rounded-md bg-foreground text-background font-medium text-sm flex items-center gap-2 transition-opacity duration-200 hover:opacity-90"
          >
            Start Your Project
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            to="/portfolio"
            className="px-5 py-3 rounded-md border border-border text-foreground font-medium text-sm transition-colors duration-200 hover:bg-card"
          >
            View Our Work
          </Link>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  );
};

export default Hero;
