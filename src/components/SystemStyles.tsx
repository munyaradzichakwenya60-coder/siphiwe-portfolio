

export const SystemStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');

    :root {
      --color-canvas: #FAFAFA;
      --color-structural: #FFF5F6;
      --color-accent: #D44161;
      --color-charcoal: #111111;
      --color-muted: #666666;
      --font-serif: 'Cormorant Garamond', serif;
      --font-sans: 'Plus Jakarta Sans', sans-serif;
      --ease-premium: cubic-bezier(0.16, 1, 0.3, 1);
      --duration-premium: 500ms;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      background-color: var(--color-canvas);
      color: var(--color-charcoal);
      font-family: var(--font-sans);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      overflow-x: hidden;
    }

    html {
      scroll-behavior: smooth;
    }

    .font-serif-heading {
      font-family: var(--font-serif);
      font-weight: 400;
      letter-spacing: -0.02em;
    }

    .interactive-element {
      transition: all var(--duration-premium) var(--ease-premium);
    }

    /* WCAG AA Custom Keyboard Focus States */
    *:focus-visible {
      outline: 2px solid var(--color-accent);
      outline-offset: 4px;
    }

    /* Pulse animation for global availability badge */
    @keyframes pulseGlow {
      0% { box-shadow: 0 0 0 0 rgba(212, 65, 97, 0.4); }
      70% { box-shadow: 0 0 0 10px rgba(212, 65, 97, 0); }
      100% { box-shadow: 0 0 0 0 rgba(212, 65, 97, 0); }
    }

    .animate-pulse-glow {
      animation: pulseGlow 2.5s infinite var(--ease-premium);
    }
      
    /* Smooth reveal transitions */
    .fade-up-enter {
      opacity: 0;
      transform: translateY(30px);
      animation: fadeUpAnim 1s var(--ease-premium) forwards;
    }

    @keyframes fadeUpAnim {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* Elite Bento Box Hover Effects */
    .bento-card {
      transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.6s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.4s ease;
    }
    .bento-card:hover {
      transform: translateY(-4px) scale(1.01);
      box-shadow: 0 30px 60px rgba(212, 65, 97, 0.08);
      border-color: rgba(212, 65, 97, 0.3);
    }
    
    /* Magnetic Button Illusion */
    .btn-magnetic {
      transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.4s ease;
    }
    .btn-magnetic:hover {
      transform: translateY(-2px) scale(1.02);
      box-shadow: 0 15px 30px rgba(212, 65, 97, 0.25);
    }
  `}</style>
);
