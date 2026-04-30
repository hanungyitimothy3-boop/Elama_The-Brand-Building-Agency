import founderImage from "@/assets/founder.jpg";

const Founder = () => {
  return (
    <section className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
          <div className="relative order-1">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={founderImage}
                alt="Timothy Hanungyi, Founder of Elämä"
                width={1024}
                height={1024}
                loading="lazy"
                className="w-full h-auto object-cover aspect-[4/5]"
              />
            </div>
          </div>

          <div className="order-2">
            <p className="text-primary text-sm tracking-widest uppercase mb-4 font-medium">Founder</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-8 leading-tight">
              Timothy Hanungyi
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Elämä is led by <span className="text-foreground">Timothy Hanungyi</span>, a visual
                communication and brand strategist focused on building intentional, high-impact brand
                identities for modern businesses.
              </p>
              <p>
                His work is driven by a simple principle:{" "}
                <span className="text-foreground">clarity creates value</span>. Every brand he works
                with is approached from a strategic perspective—ensuring design is not just visual,
                but functional in positioning, perception, and market relevance.
              </p>
              <p>
                Through Elämä, he helps founders and businesses translate ideas into structured brand
                systems that communicate clearly and stand out in competitive markets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
