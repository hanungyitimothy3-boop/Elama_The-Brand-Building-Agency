import brand1 from "@/assets/portfolio/brand-1.jpg";
import brand2 from "@/assets/portfolio/brand-2.jpg";
import brand3 from "@/assets/portfolio/brand-3.jpg";
import social1 from "@/assets/portfolio/social-1.jpg";
import social2 from "@/assets/portfolio/social-2.jpg";
import social3 from "@/assets/portfolio/social-3.jpg";
import packaging1 from "@/assets/portfolio/packaging-1.jpg";
import packaging2 from "@/assets/portfolio/packaging-2.jpg";
import packaging3 from "@/assets/portfolio/packaging-3.jpg";
import event1 from "@/assets/portfolio/event-1.jpg";
import event2 from "@/assets/portfolio/event-2.jpg";
import event3 from "@/assets/portfolio/event-3.jpg";
import print1 from "@/assets/portfolio/print-1.jpg";
import print2 from "@/assets/portfolio/print-2.jpg";
import print3 from "@/assets/portfolio/print-3.jpg";
import document1 from "@/assets/portfolio/document-1.jpg";
import document2 from "@/assets/portfolio/document-2.jpg";
import document3 from "@/assets/portfolio/document-3.jpg";

const categories = [
  {
    title: "Brand Identity",
    subtitle: "Visual Systems & Logo Design",
    images: [brand1, brand2, brand3],
  },
  {
    title: "Social Media Design",
    subtitle: "Content Strategy & Feed Design",
    images: [social1, social2, social3],
  },
  {
    title: "Product Packaging",
    subtitle: "Product Line & Packaging",
    images: [packaging1, packaging2, packaging3],
  },
  {
    title: "Event Branding",
    subtitle: "Immersive Event Identities",
    images: [event1, event2, event3],
  },
  {
    title: "Print Design",
    subtitle: "Collateral & Stationery",
    images: [print1, print2, print3],
  },
  {
    title: "Document Design",
    subtitle: "PDFs, Books, Brochures & Magazines",
    images: [document1, document2, document3],
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-widest uppercase mb-3 font-medium">Selected Work</p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold">Our Portfolio</h2>
        </div>

        <div className="space-y-16">
          {categories.map((cat) => (
            <div key={cat.title}>
              <div className="mb-6 flex items-end justify-between flex-wrap gap-2">
                <div>
                  <h3 className="text-2xl md:text-3xl font-heading font-semibold">{cat.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{cat.subtitle}</p>
                </div>
                <div className="h-px flex-1 ml-6 bg-border/50 hidden sm:block" />
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {cat.images.map((src, idx) => (
                  <div
                    key={idx}
                    className="group relative rounded-2xl overflow-hidden cursor-pointer"
                  >
                    <img
                      src={src}
                      alt={`${cat.title} ${idx + 1}`}
                      loading="lazy"
                      width={1024}
                      height={1024}
                      className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                      <h4 className="font-heading font-semibold text-lg">{cat.title}</h4>
                      <p className="text-muted-foreground text-sm">{cat.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
