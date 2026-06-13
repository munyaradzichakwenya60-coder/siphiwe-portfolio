import { useState } from 'react';

export const ContactAndFooter = () => {
  const [formData, setFormData] = useState({ name: '', email: '', scope: 'product-design', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="w-full bg-[var(--color-canvas)] pt-24 md:pt-32 pb-12 px-6 lg:px-12">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24 mb-32 items-start">
          <div>
            <span className="block text-xs font-bold tracking-[0.25em] text-[var(--color-accent)] uppercase mb-4">
              Let's Talk
            </span>
            <h2 className="font-serif-heading text-4xl md:text-5xl text-[var(--color-charcoal)] mb-8">
              Got a project in mind?
            </h2>
            <p className="text-lg text-[var(--color-muted)] leading-relaxed mb-12 max-w-md">
              Whether you need to overhaul an enterprise app, build a new design system, or just want to talk about cake, I'd love to hear from you. Fill out the form and I'll be in touch.
            </p>
            
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-3 bg-[var(--color-structural)] border border-[var(--color-accent)]/20 rounded-full px-6 py-3 animate-pulse-glow">
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-accent)]" />
              <span className="text-[0.65rem] font-bold tracking-[0.15em] uppercase text-[var(--color-accent)]">
                Available for Global Contracts
              </span>
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="bg-[var(--color-structural)] border border-[var(--color-accent)] rounded-2xl p-12 text-center fade-up-enter">
                <h3 className="font-serif-heading text-3xl text-[var(--color-accent)] mb-4">Thanks for reaching out!</h3>
                <p className="text-base text-[var(--color-charcoal)] leading-relaxed max-w-md mx-auto">
                  I've received your message. I'm currently reviewing my inbox and will get back to you with some thoughts within the next 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-[var(--color-structural)] border border-[var(--color-accent)]/10 rounded-2xl p-8 lg:p-12 shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <label className="block text-[0.7rem] font-bold tracking-[0.15em] uppercase mb-3 text-[var(--color-charcoal)]">Your Name *</label>
                    <input 
                      required type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full p-4 border border-[#111111]/10 bg-[var(--color-canvas)] text-sm rounded focus:border-[var(--color-accent)] outline-none interactive-element" 
                    />
                  </div>
                  <div>
                    <label className="block text-[0.7rem] font-bold tracking-[0.15em] uppercase mb-3 text-[var(--color-charcoal)]">Email Address *</label>
                    <input 
                      required type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full p-4 border border-[#111111]/10 bg-[var(--color-canvas)] text-sm rounded focus:border-[var(--color-accent)] outline-none interactive-element" 
                    />
                  </div>
                </div>

                <div className="mb-8">
                  <label className="block text-[0.7rem] font-bold tracking-[0.15em] uppercase mb-3 text-[var(--color-charcoal)]">How can I help?</label>
                  <select 
                    value={formData.scope} onChange={(e) => setFormData({...formData, scope: e.target.value})}
                    className="w-full p-4 border border-[#111111]/10 bg-[var(--color-canvas)] text-sm rounded focus:border-[var(--color-accent)] outline-none interactive-element"
                  >
                    <option value="product-design">Digital Product Design & UX</option>
                    <option value="branding">Brand Identity & Design Systems</option>
                    <option value="pastry">Pastry & Culinary Partnerships</option>
                  </select>
                </div>

                <div className="mb-10">
                  <label className="block text-[0.7rem] font-bold tracking-[0.15em] uppercase mb-3 text-[var(--color-charcoal)]">Tell me about your vision *</label>
                  <textarea 
                    required rows={4} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full p-4 border border-[#111111]/10 bg-[var(--color-canvas)] text-sm rounded focus:border-[var(--color-accent)] outline-none resize-y interactive-element"
                  />
                </div>

                <button type="submit" className="w-full bg-[var(--color-charcoal)] text-white py-5 rounded text-xs font-bold tracking-[0.15em] uppercase hover:bg-[var(--color-accent)] interactive-element">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Global Footer Sub-Block */}
        <footer className="border-t border-[#111111]/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="text-xs text-[var(--color-muted)] font-medium">
            © {new Date().getFullYear()} Siphiwe Mudiwa. Architectural integrity protected.
          </span>
          <div className="flex gap-8">
            {['LinkedIn', 'GitHub', 'Dribbble', 'Instagram'].map((network) => (
              <a 
                key={network} href={`#${network.toLowerCase()}`}
                className="text-[0.7rem] font-bold tracking-[0.1em] uppercase text-[var(--color-charcoal)] hover:text-[var(--color-accent)] interactive-element"
              >
                {network}
              </a>
            ))}
          </div>
        </footer>
      </div>
    </section>
  );
};
