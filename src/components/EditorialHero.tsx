

export const EditorialHero = () => {
  return (
    <section id="hero" className="w-full px-6 py-24 md:py-32 lg:px-12 max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center fade-up-enter">
        {/* Left Column: Typographic Narrative */}
        <div className="flex flex-col items-start">
          <h1 className="font-serif-heading text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.1] text-[var(--color-charcoal)] mb-8">
            Designing digital products.<br />
            <span className="text-[var(--color-accent)] italic">Crafting human experiences.</span>
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-[var(--color-muted)] max-w-xl mb-12">
            Hi, I'm Siphiwe. I believe the best design feels effortless—whether that's a frictionless enterprise software dashboard or a perfectly balanced artisan cake. I bridge the gap between complex technical requirements and genuine human emotion to build products people actually love using.
          </p>
          <div className="flex flex-wrap gap-4 w-full sm:w-auto">
            <button
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-magnetic bg-[var(--color-accent)] text-white px-8 py-4 text-xs font-bold tracking-[0.15em] uppercase rounded w-full sm:w-auto text-center"
            >
              View My Work
            </button>
            <button
              onClick={() => document.getElementById('bakery')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-magnetic bg-transparent text-[var(--color-charcoal)] border border-[#111111]/20 px-8 py-4 text-xs font-bold tracking-[0.15em] uppercase rounded hover:border-[var(--color-charcoal)] hover:bg-[#111111]/5 w-full sm:w-auto text-center"
            >
              The Bakery Case Study
            </button>
          </div>
        </div>

        {/* Right Column: Premium Framed Media */}
        <div className="relative w-full flex justify-center lg:justify-end mt-12 lg:mt-0">
          <div className="w-full max-w-[500px] aspect-[4/5] bg-[var(--color-structural)] rounded-2xl border border-[var(--color-accent)]/10 p-4 lg:p-6 shadow-[0_30px_60px_rgba(17,17,17,0.05)] relative group overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&q=80&w=1000" 
              alt="High-end sculptural luxury cake design" 
              className="w-full h-full object-cover rounded-xl transition-transform duration-[1.5s] ease-out group-hover:scale-105"
            />
            {/* Absolute positioning badge overlay */}
            <div className="absolute bottom-10 left-10 bg-white/90 backdrop-blur px-5 py-3 rounded border border-[var(--color-accent)]/10 shadow-lg interactive-element group-hover:-translate-y-2">
              <span className="block text-[0.65rem] font-bold tracking-[0.2em] uppercase text-[var(--color-accent)] mb-1">Passion Meets Precision</span>
              <span className="block text-sm font-serif-heading text-[var(--color-charcoal)] font-semibold">Momma Micky's Founder</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
