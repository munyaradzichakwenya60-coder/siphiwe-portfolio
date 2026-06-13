

export const MommaMickysDeepDive = () => {
  return (
    <section id="bakery" className="w-full bg-[var(--color-canvas)] py-24 md:py-32 px-6 lg:px-12">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="block text-xs font-bold tracking-[0.25em] text-[var(--color-accent)] uppercase mb-4">
            End-to-End Product Ownership
          </span>
          <h2 className="font-serif-heading text-4xl md:text-5xl text-[var(--color-charcoal)] mb-6">
            Momma Micky's Cakes & Desserts
          </h2>
          <p className="text-lg text-[var(--color-muted)] leading-relaxed">
            I don't just design interfaces; I build businesses. Momma Micky's is my living laboratory for conversion optimization, premium branding, and frictionless e-commerce architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Subsection A: Branding & Packaging */}
          <div className="flex flex-col-reverse lg:flex-col gap-8">
            <div className="bento-card bg-[var(--color-structural)] border border-[var(--color-accent)]/15 rounded-2xl p-8 lg:p-12 h-full flex flex-col justify-center">
              <h3 className="font-serif-heading text-3xl text-[var(--color-charcoal)] mb-4">
                Brand Identity & Premium Packaging
              </h3>
              <p className="text-[0.95rem] text-[var(--color-muted)] leading-relaxed mb-6">
                Built a highly scalable brand system that translates seamlessly from digital favicons and high-contrast online ordering interfaces down to physical hot-foil stamped luxury cardboard packaging boxes. Every tactile touchpoint is designed to evoke exclusivity.
              </p>
            </div>
            <div className="w-full aspect-square md:aspect-[16/9] lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-[var(--color-accent)]/10">
              <img 
                src="https://images.unsplash.com/photo-1557308536-ee471ef2c390?auto=format&fit=crop&q=80&w=1200" 
                alt="Luxury packaging textures" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Subsection B: UX Conversion */}
          <div className="flex flex-col gap-8">
            <div className="w-full aspect-square md:aspect-[16/9] lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-[var(--color-accent)]/10 relative group">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" 
                alt="Web analytics dashboard" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 to-transparent flex items-end p-8">
                <div className="flex gap-4">
                  <div className="bg-[var(--color-accent)] text-white px-4 py-2 rounded text-sm font-bold shadow-lg">
                    +62% Checkout Completion
                  </div>
                  <div className="bg-white text-[var(--color-charcoal)] px-4 py-2 rounded text-sm font-bold shadow-lg">
                    3.2x Average Order Value
                  </div>
                </div>
              </div>
            </div>
            <div className="bento-card bg-[var(--color-structural)] border border-[var(--color-accent)]/15 rounded-2xl p-8 lg:p-12 h-full flex flex-col justify-center">
              <h3 className="font-serif-heading text-3xl text-[var(--color-charcoal)] mb-4">
                Conversion UX Optimization
              </h3>
              <p className="text-[0.95rem] text-[var(--color-muted)] leading-relaxed mb-6">
                Engineered a complete re-architecture of the bespoke wedding cake booking funnel. Replaced a high-friction email request process with an interactive, step-by-step digital configurator. The result? Drastically reduced administrative overhead and explosive revenue growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
