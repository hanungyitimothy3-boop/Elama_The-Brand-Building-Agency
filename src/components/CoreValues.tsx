import { Award, Clock, Heart, Shield, Sparkles, Lightbulb } from "lucide-react";

const values = [
  { icon: Award, label: "Excellence", desc: "In every project we deliver." },
  { icon: Clock, label: "Timely Delivery", desc: "Respecting your timeline, always." },
  { icon: Heart, label: "Customer Satisfaction", desc: "Your success is our standard." },
  { icon: Shield, label: "Integrity", desc: "Honest work, transparent process." },
  { icon: Sparkles, label: "Creativity", desc: "Fresh thinking, bold execution." },
  { icon: Lightbulb, label: "Originality", desc: "Never templated, always intentional." },
];

const CoreValues = () => {
  return (
    <section className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-widest uppercase mb-3 font-medium">Core Values</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold">What we stand on</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {values.map((v) => (
            <div key={v.label} className="glass rounded-2xl p-6 md:p-8 transition-all duration-300 hover:glow-accent-sm">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <v.icon size={18} className="text-primary" />
              </div>
              <h3 className="text-lg font-heading font-semibold mb-1.5">{v.label}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
