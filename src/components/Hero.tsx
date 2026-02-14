import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

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

      <div ref={ref} className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full glass text-xs text-muted-foreground tracking-widest uppercase">
          Brand Building Agency
        </div>

        <h1 className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-bold leading-[0.95] tracking-tight mb-8">
          Building Brands with 
          <br />
          <span className="gradient-text">Timeless market relevance.</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed">
          Elämä crafts premium brand identities, social media presence, and product packaging for startups and visionary founders.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="group px-8 py-4 rounded-xl bg-primary text-primary-foreground font-medium text-base flex items-center gap-2 transition-all duration-300 hover:gap-3 animate-pulse-glow"
          >
            Start Your Project
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#portfolio"
            className="px-8 py-4 rounded-xl glass text-foreground font-medium text-base transition-all duration-300 hover:bg-card/80"
          >
            View Our Work
          </a>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  );
};

export default Hero;
