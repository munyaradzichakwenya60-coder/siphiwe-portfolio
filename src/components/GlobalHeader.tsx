

export const GlobalHeader = () => {
  const scrollTarget = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-[100] w-full bg-[var(--color-canvas)]/80 backdrop-blur-xl border-b border-[var(--color-accent)]/10 px-6 py-4 md:px-12 transition-all duration-300">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        {/* Monogram Identity */}
        <div className="flex items-center gap-4 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <span className="font-serif-heading text-3xl font-medium text-[var(--color-accent)]">SM</span>
          <div className="w-[1px] h-5 bg-[#111111]/15"></div>
          <span className="text-xs font-bold tracking-[0.15em] uppercase text-[var(--color-charcoal)] hidden sm:block">
            Siphiwe Mudiwa
          </span>
        </div>

        {/* Primary Desktop Nav */}
        <nav role="navigation" aria-label="Primary" className="hidden lg:block">
          <ul className="flex list-none gap-8">
            {['hero', 'portfolio', 'bakery', 'timeline', 'skills'].map((id) => (
              <li key={id}>
                <button
                  onClick={() => scrollTarget(id)}
                  className="interactive-element bg-transparent border-none text-[0.7rem] font-bold tracking-[0.15em] uppercase text-[var(--color-charcoal)] hover:text-[var(--color-accent)] cursor-pointer py-2"
                >
                  {id === 'hero' ? 'Overview' : id === 'bakery' ? 'E-Commerce' : id}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Primary CTA */}
        <button
          onClick={() => scrollTarget('contact')}
          className="btn-magnetic bg-[var(--color-accent)] text-white border-none rounded-full px-6 py-3 text-[0.7rem] font-bold tracking-[0.1em] uppercase cursor-pointer focus-visible:ring-4 focus-visible:ring-[var(--color-accent)]/30 focus:outline-none"
        >
          Hire Me
        </button>
      </div>
    </header>
  );
};
