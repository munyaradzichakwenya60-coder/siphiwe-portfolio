

export const DesignPhilosophy = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery & User Empathy",
      desc: "Before I open Figma, I open the data. I validate hypotheses via analytics, field testing, and direct user interviews to ensure we are solving the right problems."
    },
    {
      number: "02",
      title: "Systemized Architecture",
      desc: "I build robust, reusable atomic tokens and comprehensive component libraries. This guarantees brand alignment across ecosystems and speeds up engineering velocity."
    },
    {
      number: "03",
      title: "Business Realization",
      desc: "Beautiful UI is useless if it doesn't convert. I treat every user interaction as a strategic conversion point to scale revenue and drive critical business metrics."
    }
  ];

  return (
    <section className="w-full bg-[#111111] py-24 md:py-32 px-6 lg:px-12 text-white">
      <div className="max-w-[1440px] mx-auto">
        <div className="mb-16 md:mb-24">
          <span className="block text-xs font-bold tracking-[0.25em] text-[var(--color-accent)] uppercase mb-4">
            My Framework
          </span>
          <h2 className="font-serif-heading text-4xl md:text-5xl mb-6 max-w-2xl">
            How I turn complexity into elegant clarity.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="border-t border-white/20 pt-8 bento-card hover:border-[var(--color-accent)] transition-colors">
              <span className="text-[var(--color-accent)] font-serif-heading text-4xl block mb-6">{step.number}</span>
              <h3 className="text-xl font-bold mb-4 font-sans tracking-tight">{step.title}</h3>
              <p className="text-white/70 text-[0.95rem] leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
