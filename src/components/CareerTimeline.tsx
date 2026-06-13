

export const CareerTimeline = () => {
  const roles = [
    {
      year: "2024 — Present",
      title: "Principal Product Designer & Founder",
      company: "Momma Micky's Cakes & Desserts",
      details: "Automated bespoke booking funnel logic, optimizing quarterly direct-to-consumer pipelines. Scaled end-to-end brand ecosystem."
    },
    {
      year: "2022 — 2024",
      title: "Senior Brand & UI Architect",
      company: "Nexus Digital Agency",
      details: "Led cross-functional design pods engineering enterprise software products and atomic design languages for global enterprise accounts."
    },
    {
      year: "2019 — 2022",
      title: "Interaction Designer",
      company: "Prism Product House",
      details: "Executed heavy core user research labs, engineered complex screen wireframes, and managed complete UI layout component systems."
    }
  ];

  return (
    <section id="timeline" className="w-full bg-[var(--color-canvas)] py-24 md:py-32 px-6 lg:px-12 border-t border-[var(--color-accent)]/10">
      <div className="max-w-[1000px] mx-auto">
        <span className="block text-xs font-bold tracking-[0.25em] text-[var(--color-accent)] uppercase mb-4 text-center md:text-left">
          Professional Trajectory
        </span>
        <h2 className="font-serif-heading text-4xl md:text-5xl text-[var(--color-charcoal)] mb-16 text-center md:text-left">
          A track record of shipping impact.
        </h2>

        <div className="relative border-l border-[var(--color-accent)]/20 ml-4 md:ml-6 space-y-16">
          {roles.map((role, idx) => (
            <div key={idx} className="relative pl-10 md:pl-16 bento-card p-4 rounded-xl -ml-4 hover:bg-[var(--color-structural)] transition-colors">
              {/* Timeline Dot */}
              <div className="absolute w-4 h-4 bg-[var(--color-canvas)] border-2 border-[var(--color-accent)] rounded-full -left-[8px] md:-left-[8px] top-6 shadow-[0_0_0_4px_rgba(212,65,97,0.1)]"></div>
              
              <span className="text-xs font-bold tracking-[0.2em] text-[var(--color-muted)] uppercase block mb-2">
                {role.year}
              </span>
              <h3 className="font-serif-heading text-2xl text-[var(--color-charcoal)] mb-1">
                {role.title}
              </h3>
              <span className="text-sm font-semibold text-[var(--color-accent)] block mb-4">
                {role.company}
              </span>
              <p className="text-[0.95rem] text-[var(--color-muted)] leading-relaxed max-w-2xl">
                {role.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
