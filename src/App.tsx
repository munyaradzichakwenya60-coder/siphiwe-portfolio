import { useState, useCallback } from 'react';
import {
  SystemStyles,
  ImmersionLoader,
  GlobalHeader,
  EditorialHero,
  ProductCaseStudies,
  MommaMickysDeepDive,
  DesignPhilosophy,
  CareerTimeline,
  TechnicalSkillsIndex,
  TestimonialSlider,
  ContactAndFooter
} from './components';

export default function App() {
  const [phase, setPhase] = useState('immersion');

  const handleTransition = useCallback(() => {
    setPhase('discovery');
    // Ensure scroll position is reset seamlessly when discovery layout mounts
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div className="min-h-screen bg-[var(--color-canvas)] font-sans relative selection:bg-[var(--color-accent)] selection:text-white">
      <SystemStyles />
      
      {phase === 'immersion' ? (
        <ImmersionLoader onComplete={handleTransition} />
      ) : (
        <div className="opacity-0 fade-up-enter" style={{ animationDelay: '100ms' }}>
          <GlobalHeader />
          <main>
            <EditorialHero />
            <ProductCaseStudies />
            <MommaMickysDeepDive />
            <DesignPhilosophy />
            <CareerTimeline />
            <TechnicalSkillsIndex />
            <TestimonialSlider />
            <ContactAndFooter />
          </main>
        </div>
      )}
    </div>
  );
}
