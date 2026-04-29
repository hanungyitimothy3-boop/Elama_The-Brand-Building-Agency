interface PageHeaderProps {
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: string;
}

const PageHeader = ({ eyebrow, title, highlight, description }: PageHeaderProps) => {
  return (
    <section className="relative overflow-hidden px-6 md:px-12 lg:px-20 pt-16 pb-12 md:pt-24 md:pb-16">
      <div className="absolute top-0 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute bottom-0 -right-32 w-80 h-80 rounded-full bg-primary/10 blur-[100px]" />
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <p className="text-primary text-sm tracking-widest uppercase mb-4 font-medium">{eyebrow}</p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.05] tracking-tight mb-6">
          {title}
          {highlight && (
            <>
              {" "}
              <span className="gradient-text">{highlight}</span>
            </>
          )}
        </h1>
        {description && (
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">{description}</p>
        )}
      </div>
    </section>
  );
};

export default PageHeader;
