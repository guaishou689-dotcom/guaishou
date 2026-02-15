import React from 'react';

const GlobalStyles: React.FC = () => (
  <style>{`
    :root {
      /* Palette mapping for CSS variables usage if needed */
      --bg-paper: #FDFDFB;
      --text-ink: #1F2623;
      --text-sub: #85918B;
      --color-accent: #2F4F3E;
      --color-gold: #C5A668;
      --line-light: #EAECEB;
    }

    body {
      background-color: var(--bg-paper);
      color: var(--text-ink);
      font-family: 'Noto Serif SC', serif;
      overflow-x: hidden;
      margin: 0;
    }

    /* Custom Scrollbar */
    ::-webkit-scrollbar { width: 3px; }
    ::-webkit-scrollbar-track { background: var(--bg-paper); }
    ::-webkit-scrollbar-thumb { background: var(--color-accent); }

    /* Paper Texture Effect */
    .paper-texture {
      position: fixed;
      inset: 0;
      pointer-events: none;
      z-index: 999;
      opacity: 0.3;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.5'/%3E%3C/svg%3E");
      mix-blend-mode: multiply;
    }

    /* Vertical Text Utility */
    .vertical-text {
      writing-mode: vertical-rl;
      text-orientation: upright;
      letter-spacing: 0.3em;
      line-height: 2;
    }
    
    /* Highlight Utility */
    .highlight {
      font-weight: 600;
      color: var(--color-accent);
      border-bottom: 1px solid rgba(47, 79, 62, 0.2);
      padding-bottom: 1px;
    }
    
    /* Custom utility for writing-mode support in some browsers if vertical-rl isn't enough */
    .writing-vertical {
      writing-mode: vertical-rl;
      text-orientation: upright;
    }
  `}</style>
);

export default GlobalStyles;