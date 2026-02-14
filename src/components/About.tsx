const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-primary text-sm tracking-widest uppercase mb-3 font-medium">About Us</p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Helping Brands<br />
              <span className="gradient-text">Attract the right Audience</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Elämä is a premium brand building agency focused on creating memorable identities for startups, founders, and innovative businesses. We combine strategic thinking with world-class design to build brands that stand out.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our approach is minimal, intentional, and always forward-thinking. Every pixel, every color, every word — designed with purpose.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { number: "50+", label: "Brands Built" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "3+", label: "Years Experience" },
              { number: "12", label: "Team Members" },
            ].map((stat) => (
              <div key={stat.label} className="glass rounded-2xl p-6 text-center">
                <p className="text-3xl md:text-4xl font-heading font-bold gradient-text mb-1">{stat.number}</p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
