

export const TechnicalSkillsIndex = () => {
  return (
    <section id="skills" className="w-full bg-[var(--color-structural)] py-24 md:py-32 px-6 lg:px-12 border-t border-[var(--color-accent)]/5">
      <div className="max-w-[1440px] mx-auto">
        <span className="block text-xs font-bold tracking-[0.25em] text-[var(--color-accent)] uppercase mb-4">
          Specialist Index
        </span>
        <h2 className="font-serif-heading text-4xl md:text-5xl text-[var(--color-charcoal)] mb-16 max-w-2xl">
          A multi-disciplinary toolkit built for enterprise scale and luxury aesthetics.
        </h2>

        {/* Elite Asymmetrical Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 lg:gap-8 auto-rows-[minmax(250px,auto)]">
          
          {/* Bento Item 1: Large Feature (Product Design) */}
          <div className="bento-card md:col-span-2 bg-[var(--color-canvas)] border border-[var(--color-accent)]/15 rounded-2xl p-8 lg:p-12 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-accent)]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 group-hover:bg-[var(--color-accent)]/10 transition-colors duration-700" />
            <h3 className="font-serif-heading text-3xl text-[var(--color-charcoal)] mb-6 relative z-10">
              Product Design & UX Logic
            </h3>
            <p className="text-[0.95rem] text-[var(--color-muted)] leading-relaxed max-w-md mb-8 relative z-10">
              I map complex user psychologies into frictionless digital pathways. From enterprise wireframing to universal accessibility compliance.
            </p>
            <div className="flex flex-wrap gap-2 relative z-10">
              {["Wireframing", "WCAG AA", "Friction Diagnostics", "Atomic Systems", "Prototyping"].map((tag, i) => (
                <span key={i} className="text-xs bg-[#111111]/5 border border-[#111111]/10 px-3 py-1.5 rounded-full text-[var(--color-charcoal)] font-semibold">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Bento Item 2: Vertical (Frontend Engineering) */}
          <div className="bento-card md:row-span-2 bg-[#111111] border border-[#111111] rounded-2xl p-8 lg:p-12 flex flex-col justify-between group">
            <div>
              <span className="text-[var(--color-accent)] text-4xl mb-6 block font-serif-heading italic">{"< />"}</span>
              <h3 className="font-serif-heading text-3xl text-white mb-4">
                Creative<br />Frontend
              </h3>
              <p className="text-[0.9rem] text-[#FAFAFA]/70 leading-relaxed mb-8">
                Bridging the gap between static Figma files and living code. I speak the language of engineering pods perfectly.
              </p>
            </div>
            <ul className="flex flex-col gap-4 list-none text-white/90 text-sm font-medium">
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full"></span> React / Next.js Frameworks</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full"></span> Tailwind CSS Engine</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full"></span> WebGL & Canvas 3D</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full"></span> Spring Physics Animation</li>
            </ul>
          </div>

          {/* Bento Item 3: Square (Creative Direction) */}
          <div className="bento-card bg-[var(--color-canvas)] border border-[var(--color-accent)]/15 rounded-2xl p-8 lg:p-10 flex flex-col justify-center">
            <h3 className="font-serif-heading text-2xl text-[var(--color-charcoal)] mb-4">
              Creative Direction
            </h3>
            <p className="text-[0.9rem] text-[var(--color-muted)] leading-relaxed mb-6">
              Translating digital brand equity into tactile physical experiences, luxury packaging, and print architecture.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Art Direction", "Print Production", "Typography", "Styling"].map((tag, i) => (
                <span key={i} className="text-xs text-[var(--color-accent)] bg-[var(--color-accent)]/5 px-2.5 py-1 rounded border border-[var(--color-accent)]/20 font-bold uppercase tracking-wider">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Bento Item 4: Data Metric Feature */}
          <div className="bento-card bg-[var(--color-accent)] rounded-2xl p-8 lg:p-10 flex flex-col justify-center text-white relative overflow-hidden group">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:250%_250%,100%_100%] bg-no-repeat transition-all duration-1000 ease-out -translate-x-full group-hover:translate-x-full" />
            <span className="block text-5xl font-serif-heading font-medium mb-2 relative z-10">Data-Driven</span>
            <span className="text-[0.8rem] font-bold uppercase tracking-[0.15em] text-white/80 relative z-10">Design Decisions Only</span>
          </div>

        </div>
      </div>
    </section>
  );
};
