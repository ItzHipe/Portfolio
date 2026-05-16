/**
 * JavaScript design tokens — mirror of CSS variables for programmatic use.
 * Extend the visual system in one place; keep in sync with src/styles/tokens.css
 */

export const colors = {
  void: { dark: '#050505', light: '#f8fafc' },
  elevated: { dark: '#0f0f0f', light: '#ffffff' },
  surface: { dark: '#121212', light: '#f1f5f9' },
  primary: '#B63E96',
  accent: '#58E6D9',
  teal: '#14b8a6',
  cyan: '#22d3ee',
  purple: '#a855f7',
  violet: '#8b5cf6',
}

export const spacing = {
  section: {
    y: { DEFAULT: '4rem', md: '6rem', lg: '7rem' },
    x: { DEFAULT: '1rem', sm: '1.5rem', lg: '2rem' },
  },
  container: '72rem',
}

export const typography = {
  fontFamily: {
    sans: 'var(--font-sans)',
    display: 'var(--font-display)',
    mono: 'var(--font-mono)',
  },
  scale: ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl'],
}

export const motion = {
  easeOutExpo: 'cubic-bezier(0.16, 1, 0.3, 1)',
  duration: { fast: 150, base: 300, slow: 500 },
}

export const breakpoints = {
  xs: 475,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
  '3xl': 1600,
}

/** Utility class names — use in docs or dynamic class composition */
export const utilities = {
  container: 'section-container',
  section: 'section-padding',
  glassCard: 'glass-card',
  neonBorder: 'neon-border',
  gradientText: 'gradient-text',
  heroGlow: 'hero-glow',
  gridBg: 'animated-grid-background',
  btn: {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    ghost: 'btn-ghost',
    outline: 'btn-outline',
  },
}
