

export const ProductCaseStudies = () => {
  const projects = [
    {
      title: "Aura FinTech — Global Wealth Management",
      role: "Lead Product Designer",
      metrics: ["+45% User Retention", "120k Active Daily Users", "NPS Score 74"],
      description: "Restructured complex multi-step asset data streams into a single-pane intuitive interface through rigorous user mapping, wireframing, and interactive data visualization. Built for enterprise scale.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
      aspect: "aspect-[16/10]"
    },
    {
      title: "Pulse Mobility — Responsive Booking Funnel",
      role: "Senior UX Designer",
      metrics: ["-32% Checkout Friction", "1.4M Annual Rides", "AA Accessibility Rated"],
      description: "Created an atomic component-driven design system built for hyper-speed touch targets, dynamic checkout pathways, and universal screen-reader accessibility. Optimized for native and web parity.",
      image: "https://images.unsplash.com/photo-1616423640778-28d1b53229bd?auto=format&fit=crop&q=80&w=1200",
      aspect: "aspect-[4/3]"
    },
    {
      title: "Nexus Figma System — Enterprise Design Tokens",
      role: "Figma System Architect",
      metrics: ["+60% Team Efficiency", "300+ Components", "50k Daily Uses"],
      description: "Built a comprehensive Figma design system with auto-generated tokens, interactive prototypes, and nested component variants that allowed the product team to ship features 3x faster.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1200",
      aspect: "aspect-[16/10]"
    },
    {
      title: "Bloom & Vine — Digital Marketing Campaign",
      role: "Creative Marketing Director",
      metrics: ["+120% Social Reach", "4.2M Impressions", "+85% Conversion"],
      description: "Developed and executed a 360° digital marketing strategy including paid ads, influencer collaborations, and organic content that transformed the brand from local to national presence.",
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=1200",
      aspect: "aspect-[4/3]"
    },
    {
      title: "Zenith UI Kit — Premium Figma Resource",
      role: "Figma Kit Creator",
      metrics: ["15k+ Downloads", "4.9⭐ Rating", "Revenue $120k"],
      description: "Designed and launched a premium Figma UI kit with dark/light mode, 1000+ components, and comprehensive documentation that became a top-seller on Creative Market.",
      image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=1200",
      aspect: "aspect-[16/10]"
    },
    {
      title: "Aurora Collective — Brand & Digital Launch",
      role: "Digital Marketing Strategist",
      metrics: ["Launch Day 500k+ Views", "Sold Out in 48hrs", "PR in 10+ Publications"],
      description: "Led the full digital launch for a luxury lifestyle brand, including website build, social strategy, email campaigns, and PR outreach that resulted in immediate sell-out.",
      image: "https://images.unsplash.com/photo-1493612210356-57d76011f497?auto=format&fit=crop&q=80&w=1200",
      aspect: "aspect-[4/3]"
    }
  ];

  return (
    <section id="portfolio" className="w-full bg-[var(--color-structural)] py-24 md:py-32 px-6 lg:px-12 border-t border-[var(--color-accent)]/5">
      <div className="max-w-[1440px] mx-auto">
        <span className="block text-xs font-bold tracking-[0.25em] text-[var(--color-accent)] uppercase mb-4">
          Digital Product Architecture
        </span>
        <h2 className="font-serif-heading text-4xl md:text-5xl text-[var(--color-charcoal)] mb-16 max-w-2xl">
          Designing for retention, scale, and seamless human interaction.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">
          {projects.map((project, idx) => (
            <div key={idx} className={`bento-card bg-[var(--color-canvas)] rounded-2xl overflow-hidden border border-[#111111]/10 ${idx % 2 === 1 ? 'md:mt-24' : ''}`}>
              <div className={`w-full ${project.aspect} bg-[#111111]/5 overflow-hidden relative group`}>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                  {project.metrics.map((metric, i) => (
                    <span key={i} className="bg-white/90 backdrop-blur text-[var(--color-charcoal)] text-[0.65rem] font-bold tracking-[0.1em] uppercase px-3 py-1.5 rounded-full shadow-sm">
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-8 lg:p-10">
                <span className="block text-xs font-bold tracking-[0.2em] text-[var(--color-accent)] uppercase mb-3">
                  {project.role}
                </span>
                <h3 className="font-serif-heading text-2xl md:text-3xl text-[var(--color-charcoal)] mb-4">
                  {project.title}
                </h3>
                <p className="text-[0.95rem] text-[var(--color-muted)] leading-relaxed mb-8">
                  {project.description}
                </p>
                <button className="btn-magnetic bg-transparent text-[var(--color-charcoal)] border-b-2 border-[var(--color-accent)] pb-1 text-xs font-bold tracking-[0.15em] uppercase hover:text-[var(--color-accent)] transition-colors">
                  Read Case Study
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
