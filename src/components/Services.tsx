import { Palette, Share2, Package } from "lucide-react";
import { useEffect, useRef } from "react";

const services = [
  {
    icon: Palette,
    title: "Brand Identity",
    description: "Complete visual identity systems—logos, typography, color palettes—that define who you are and resonate with your audience.",
  },
  {
    icon: Share2,
    title: "Social Media Design",
    description: "Scroll-stopping content and cohesive feed aesthetics that grow engagement and build community around your brand.",
  },
  {
    icon: Package,
    title: "Product Packaging",
    description: "Shelf-ready packaging design that communicates quality, drives purchase decisions, and elevates your product experience.",
  },
];

const Services = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("fade-in-up");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    const cards = ref.current?.querySelectorAll(".service-card");
    cards?.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="section-padding">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-widest uppercase mb-3 font-medium">What We Do</p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold">Our Services</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`service-card opacity-0 fade-in-up-delay-${i + 1} group glass rounded-2xl p-8 md:p-10 transition-all duration-500 hover:glow-accent cursor-default`}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <s.icon size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
