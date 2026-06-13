import { useState } from 'react';

export const TestimonialSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonials = [
    {
      quote: "Siphiwe possesses a rare technical depth. She builds design systems with clean data logic that engineering groups can deploy without structural friction.",
      author: "Lead Technical PM",
      entity: "Aura FinTech Enterprise"
    },
    {
      quote: "The bespoke digital checkout framework she crafted for our corporate events eliminated ordering admin completely. Impeccable execution.",
      author: "Director of Operations",
      entity: "Luxury Bakery Corporate Client"
    }
  ];

  return (
    <section className="w-full bg-[var(--color-structural)] py-24 md:py-32 px-6 lg:px-12 border-t border-[var(--color-accent)]/5 overflow-hidden">
      <div className="max-w-[1000px] mx-auto text-center">
        <span className="block text-xs font-bold tracking-[0.25em] text-[var(--color-accent)] uppercase mb-4">
          Social Proof & Validation
        </span>
        <div className="relative min-h-[300px] md:min-h-[220px] flex items-center justify-center mb-12">
          {testimonials.map((test, idx) => (
            <div 
              key={idx} 
              className={`absolute top-0 left-0 w-full flex flex-col items-center justify-center pt-8 ${activeIndex === idx ? 'opacity-100 translate-x-0 pointer-events-auto' : 'opacity-0 translate-x-12 pointer-events-none'}`}
              style={{ transition: 'all 700ms var(--ease-premium)' }}
            >
              <p className="font-serif-heading text-2xl md:text-4xl leading-tight text-[var(--color-charcoal)] mb-8 max-w-4xl italic">
                "{test.quote}"
              </p>
              <span className="block text-sm font-bold text-[var(--color-charcoal)] uppercase tracking-widest mb-1">
                {test.author}
              </span>
              <span className="block text-xs text-[var(--color-accent)] uppercase tracking-[0.2em]">
                {test.entity}
              </span>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-4">
          {testimonials.map((_, idx) => (
            <button 
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`w-12 h-1.5 rounded-full interactive-element ${activeIndex === idx ? 'bg-[var(--color-accent)]' : 'bg-[#111111]/10 hover:bg-[var(--color-accent)]/50'}`}
              aria-label={`View testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
