import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        void:   '#111110',
        paper:  '#f5f0e8',
        cream:  '#ede8dd',
        signal: '#c8ff00',
        smoke:  '#7a7870',
        ash:    '#38382f',
        dim:    '#1e1e18',
        ghost:  '#525248',
      },
      fontFamily: {
        sans: ['Bricolage Grotesque', 'Arial Black', 'sans-serif'],
        mono: ['DM Mono', 'Courier New', 'monospace'],
        serif: ['Instrument Serif', 'Georgia', 'serif'],
      },
      fontSize: {
        'display-2xl': ['clamp(3rem, 8vw, 7rem)', { lineHeight: '0.9', letterSpacing: '-0.04em' }],
        'display-xl': ['clamp(2.5rem, 6vw, 5.5rem)', { lineHeight: '0.92', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(2rem, 4vw, 4rem)', { lineHeight: '0.94', letterSpacing: '-0.025em' }],
        'display-md': ['clamp(1.5rem, 3vw, 2.75rem)', { lineHeight: '1', letterSpacing: '-0.02em' }],
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
        'pulse-signal': 'pulseSignal 2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulseSignal: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(0.95)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
