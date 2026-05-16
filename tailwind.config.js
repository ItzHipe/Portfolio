/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}',
    './src/styles/**/*.css',
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
      },
      screens: {
        '2xl': '1280px',
      },
    },
    extend: {
      colors: {
        void: 'rgb(var(--color-void) / <alpha-value>)',
        elevated: 'rgb(var(--color-elevated) / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        foreground: 'rgb(var(--color-foreground) / <alpha-value>)',
        muted: 'rgb(var(--color-muted) / <alpha-value>)',
        subtle: 'rgb(var(--color-subtle) / <alpha-value>)',
        border: {
          DEFAULT: 'rgb(var(--color-border) / <alpha-value>)',
          glow: 'rgb(var(--color-border-glow) / <alpha-value>)',
        },
        /* Legacy + semantic aliases */
        dark: 'rgb(var(--color-surface) / <alpha-value>)',
        light: 'rgb(var(--color-foreground) / <alpha-value>)',
        primary: {
          DEFAULT: 'rgb(var(--color-primary) / <alpha-value>)',
          light: 'rgb(var(--color-primary-light) / <alpha-value>)',
        },
        accent: {
          DEFAULT: 'rgb(var(--color-accent) / <alpha-value>)',
          teal: 'rgb(var(--color-teal) / <alpha-value>)',
          cyan: 'rgb(var(--color-cyan) / <alpha-value>)',
          purple: 'rgb(var(--color-purple) / <alpha-value>)',
          violet: 'rgb(var(--color-violet) / <alpha-value>)',
        },
        glow: {
          teal: 'rgb(var(--glow-teal) / <alpha-value>)',
          purple: 'rgb(var(--glow-purple) / <alpha-value>)',
          violet: 'rgb(var(--glow-violet) / <alpha-value>)',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'display-xl': ['3.75rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-lg': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['2.25rem', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'display-sm': ['1.5rem', { lineHeight: '1.25', letterSpacing: '-0.01em' }],
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        30: '7.5rem',
      },
      maxWidth: {
        container: '72rem',
        prose: '65ch',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      backgroundImage: {
        'gradient-brand':
          'linear-gradient(135deg, rgb(var(--color-primary)) 0%, rgb(var(--color-accent)) 50%, rgb(var(--color-cyan)) 100%)',
        'gradient-brand-soft':
          'linear-gradient(135deg, rgb(var(--color-primary) / 0.15) 0%, rgb(var(--color-accent) / 0.15) 100%)',
        'gradient-mesh':
          'radial-gradient(at 40% 20%, rgb(var(--color-purple) / 0.25) 0px, transparent 50%), radial-gradient(at 80% 0%, rgb(var(--color-cyan) / 0.2) 0px, transparent 50%), radial-gradient(at 0% 50%, rgb(var(--color-primary) / 0.15) 0px, transparent 50%)',
        'gradient-hero':
          'radial-gradient(ellipse 80% 50% at 50% -20%, rgb(var(--glow-teal) / 0.25), transparent)',
        'grid-cyber':
          'linear-gradient(rgb(var(--color-border) / 0.04) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--color-border) / 0.04) 1px, transparent 1px)',
        circularLight:
          'repeating-radial-gradient(rgba(0,0,0,0.35) 2px, rgb(248 250 252) 5px, rgb(248 250 252) 100px)',
        circularDark:
          'repeating-radial-gradient(rgba(255,255,255,0.06) 2px, rgb(5 5 5) 8px, rgb(5 5 5) 100px)',
      },
      backgroundSize: {
        grid: '48px 48px',
      },
      boxShadow: {
        glass: '0 8px 32px rgba(0, 0, 0, 0.35)',
        'glass-sm': '0 4px 16px rgba(0, 0, 0, 0.2)',
        glow: '0 0 24px rgb(var(--glow-teal) / 0.35), 0 0 48px rgb(var(--glow-purple) / 0.15)',
        'glow-sm': '0 0 16px rgb(var(--glow-teal) / 0.25)',
        'glow-lg': '0 0 40px rgb(var(--glow-purple) / 0.25), 0 0 80px rgb(var(--glow-teal) / 0.12)',
        'glow-violet': '0 0 32px rgb(var(--glow-violet) / 0.4)',
        neon: '0 0 5px rgb(var(--glow-teal) / 0.5), 0 0 20px rgb(var(--glow-teal) / 0.3), inset 0 0 12px rgb(var(--glow-teal) / 0.05)',
        'neon-purple':
          '0 0 5px rgb(var(--glow-purple) / 0.5), 0 0 24px rgb(var(--glow-purple) / 0.25)',
      },
      transitionTimingFunction: {
        'out-expo': 'var(--ease-out-expo)',
      },
      transitionDuration: {
        fast: 'var(--duration-fast)',
        base: 'var(--duration-base)',
        slow: 'var(--duration-slow)',
      },
      animation: {
        'fade-in': 'fadeIn var(--duration-slow) var(--ease-out-expo) forwards',
        'fade-in-fast': 'fadeIn var(--duration-base) var(--ease-out-expo) forwards',
        'slide-up': 'slideUp var(--duration-slow) var(--ease-out-expo) forwards',
        'slide-up-sm': 'slideUp 0.4s var(--ease-out-expo) forwards',
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'glow-pulse-slow': 'glowPulse 5s ease-in-out infinite',
        'spin-slow': 'spin 24s linear infinite',
        'grid-shift': 'gridShift 20s linear infinite',
        shimmer: 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        glowPulse: {
          '0%, 100%': {
            opacity: '0.6',
            filter: 'drop-shadow(0 0 12px rgb(var(--glow-teal) / 0.35))',
          },
          '50%': {
            opacity: '1',
            filter: 'drop-shadow(0 0 24px rgb(var(--glow-teal) / 0.55))',
          },
        },
        gridShift: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '48px 48px' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      /* Optional max-width breakpoints (tutorial-compatible) */
      screens: {
        xs: '475px',
        '3xl': '1600px',
        'max-2xl': { max: '1535px' },
        'max-xl': { max: '1279px' },
        'max-lg': { max: '1023px' },
        'max-md': { max: '767px' },
        'max-sm': { max: '639px' },
        'max-xs': { max: '479px' },
      },
    },
  },
  plugins: [],
}
