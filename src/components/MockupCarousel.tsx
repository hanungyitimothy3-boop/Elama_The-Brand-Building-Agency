import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import mockupLaptop from "@/assets/mockup-laptop.jpg";
import mockupPhone from "@/assets/mockup-phone.jpg";
import mockupPackaging from "@/assets/mockup-packaging.jpg";

const slides = [
  { image: mockupLaptop, label: "Website & Brand" },
  { image: mockupPhone, label: "Mobile Experience" },
  { image: mockupPackaging, label: "Product Packaging" },
  { image: mockupPackaging, label: "Product Packaging" },
  { image: mockupPackaging, label: "Product Packaging" },
  { image: mockupPackaging, label: "Product Packaging" },
  { image: mockupPackaging, label: "Product Packaging" },
];

const MockupCarousel = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 4500);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="section-padding overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-widest uppercase mb-3 font-medium">Showcase</p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold">Mockups</h2>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {slides.map((s) => (
                <div key={s.label} className="w-full flex-shrink-0 px-4">
                  <div className="glass rounded-2xl p-4 md:p-8">
                    <img
                      src={s.image}
                      alt={s.label}
                      loading="lazy"
                      className="w-full max-h-[500px] object-contain mx-auto"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-card/80 transition-colors"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current ? "w-8 bg-primary" : "w-4 bg-muted"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-card/80 transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          <p className="text-center text-muted-foreground text-sm mt-4">{slides[current].label}</p>
        </div>
      </div>
    </section>
  );
};

export default MockupCarousel;
