const metrics = [
  { value: "50+", label: "Brands Built" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "120+", label: "Projects Completed" },
  { value: "15+", label: "Industries Served" },
];

const Metrics = () => {
  return (
    <section className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-primary text-sm tracking-widest uppercase mb-3 font-medium">By the Numbers</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold">Trusted by founders, proven by results</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="glass rounded-2xl p-6 md:p-8 text-center transition-all duration-300 hover:glow-accent-sm"
            >
              <p className="text-4xl md:text-5xl font-heading font-bold gradient-text mb-2">{m.value}</p>
              <p className="text-muted-foreground text-xs md:text-sm tracking-wide uppercase">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;
