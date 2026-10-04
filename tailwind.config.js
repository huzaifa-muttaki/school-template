/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#081221',
        navy: {
          950: '#081221',
          900: '#0C1A2E',
          800: '#12233D',
          700: '#1B3150',
          600: '#2A4468',
        },
        ivory: {
          DEFAULT: '#F7F3EC',
          50: '#FBF9F5',
          100: '#F7F3EC',
          200: '#EFE9DE',
          300: '#E6DED0',
        },
        stone: {
          300: '#D6CEC0',
          400: '#B9B0A1',
          500: '#8E8678',
          600: '#6B6458',
        },
        gold: {
          300: '#DCC69C',
          400: '#C9AC74',
          DEFAULT: '#B8955A',
          600: '#9C7A42',
          700: '#7D6033',
        },
        charcoal: '#22252A',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      fontSize: {
        'display-2xl': ['clamp(3.4rem, 9.6vw, 9.5rem)', { lineHeight: '0.9', letterSpacing: '-0.025em' }],
        'display-xl': ['clamp(2.9rem, 7.5vw, 7rem)', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2.4rem, 5.4vw, 5rem)', { lineHeight: '1', letterSpacing: '-0.018em' }],
        'display-md': ['clamp(2rem, 3.8vw, 3.5rem)', { lineHeight: '1.06', letterSpacing: '-0.012em' }],
        'display-sm': ['clamp(1.6rem, 2.6vw, 2.25rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        eyebrow: ['0.6875rem', { lineHeight: '1', letterSpacing: '0.28em' }],
      },
      maxWidth: {
        site: '1440px',
      },
      transitionTimingFunction: {
        lux: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
