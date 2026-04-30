import { Eye, Target } from "lucide-react";

const VisionMission = () => {
  return (
    <section className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-widest uppercase mb-3 font-medium">Vision & Mission</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold">What drives us</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass rounded-2xl p-8 md:p-10">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <Eye size={22} className="text-primary" />
            </div>
            <h3 className="text-2xl font-heading font-semibold mb-5">Our Vision</h3>
            <ul className="space-y-3 text-muted-foreground leading-relaxed">
              <li className="flex gap-3"><span className="text-primary mt-2 w-1 h-1 rounded-full bg-primary shrink-0" />Build brands with timeless market relevance, regardless of industry.</li>
              <li className="flex gap-3"><span className="text-primary mt-2 w-1 h-1 rounded-full bg-primary shrink-0" />Create brands that don't just exist in the market, but live in the hearts of their audience.</li>
            </ul>
          </div>

          <div className="glass rounded-2xl p-8 md:p-10">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <Target size={22} className="text-primary" />
            </div>
            <h3 className="text-2xl font-heading font-semibold mb-5">Our Mission</h3>
            <ul className="space-y-3 text-muted-foreground leading-relaxed">
              <li className="flex gap-3"><span className="text-primary mt-2 w-1 h-1 rounded-full bg-primary shrink-0" />Help brands effectively reach and connect with their target audience.</li>
              <li className="flex gap-3"><span className="text-primary mt-2 w-1 h-1 rounded-full bg-primary shrink-0" />Communicate brand vision with clarity and precision.</li>
              <li className="flex gap-3"><span className="text-primary mt-2 w-1 h-1 rounded-full bg-primary shrink-0" />Provide strategic marketing insight and consultancy that drives growth.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
