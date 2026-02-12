import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO, TechFlow",
    text: "Elämä completely transformed our brand. The identity they created perfectly captures our vision and resonates with our audience. Truly world-class work.",
  },
  {
    name: "Marcus Williams",
    role: "Founder, NovaBrew",
    text: "The packaging design exceeded all expectations. Our products now stand out on every shelf. Sales increased 40% after the rebrand.",
  },
  {
    name: "Aisha Patel",
    role: "CMO, Lumina App",
    text: "Their social media design transformed our online presence. Consistent, beautiful, and on-brand content that our community loves.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-widest uppercase mb-3 font-medium">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold">What Clients Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="glass rounded-2xl p-8">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">"{t.text}"</p>
              <div>
                <p className="font-heading font-semibold text-sm">{t.name}</p>
                <p className="text-muted-foreground text-xs">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
