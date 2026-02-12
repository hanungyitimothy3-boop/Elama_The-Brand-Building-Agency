import portfolioBrand from "@/assets/portfolio-brand.jpg";
import portfolioSocial from "@/assets/portfolio-social.jpg";
import portfolioPackaging from "@/assets/portfolio-packaging.jpg";

const projects = [
  { image: portfolioBrand, title: "Brand Identity", subtitle: "Visual Systems & Logo Design" },
  { image: portfolioSocial, title: "Social Media", subtitle: "Content Strategy & Design" },
  { image: portfolioPackaging, title: "Packaging Design", subtitle: "Product Line & Packaging" },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-widest uppercase mb-3 font-medium">Selected Work</p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold">Our Portfolio</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
            >
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <h3 className="font-heading font-semibold text-lg">{p.title}</h3>
                <p className="text-muted-foreground text-sm">{p.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
