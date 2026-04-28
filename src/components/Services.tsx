import { useEffect, useRef } from "react";
import { services } from "@/lib/services";

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

  const handleSelect = (title: string) => {
    const contact = document.getElementById("contact");
    contact?.scrollIntoView({ behavior: "smooth" });
    // Defer so the section is mounted/visible, then set the select value
    setTimeout(() => {
      const select = document.querySelector<HTMLSelectElement>(
        '#contact select[name="service"]'
      );
      if (select) {
        select.value = title;
        select.dispatchEvent(new Event("change", { bubbles: true }));
        select.focus({ preventScroll: true });
      }
    }, 500);
  };

  return (
    <section id="services" className="section-padding">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-widest uppercase mb-3 font-medium">What We Do</p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold">Our Services</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <button
              key={s.title}
              type="button"
              onClick={() => handleSelect(s.title)}
              aria-label={`Select ${s.title} and go to contact form`}
              className={`service-card opacity-0 fade-in-up-delay-${(i % 4) + 1} group glass rounded-2xl p-8 md:p-10 transition-all duration-500 hover:glow-accent text-left focus:outline-none focus:ring-1 focus:ring-primary`}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <s.icon size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{s.description}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
