import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#EBF2FF',
          100: '#D1E4FF',
          200: '#A8CBFF',
          300: '#6FACFC',
          400: '#3D8EF8',
          500: '#1877F2',
          600: '#0E5FCC',
          700: '#0A4BAA',
          800: '#083989',
          900: '#05286A',
        },
        emerald: {
          400: '#34D399',
          500: '#10B981',
          600: '#059669',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        progressFill: {
          '0%': { width: '0%' },
          '100%': { width: 'var(--fill-width)' },
        },
      },
      animation: {
        shimmer: 'shimmer 2s linear infinite',
        fadeInUp: 'fadeInUp 0.5s ease-out forwards',
        progressFill: 'progressFill 1.2s ease-out forwards',
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgb(0 0 0 / 0.08), 0 1px 2px -1px rgb(0 0 0 / 0.04)',
        'card-hover': '0 4px 12px 0 rgb(0 0 0 / 0.1), 0 2px 6px -2px rgb(0 0 0 / 0.06)',
        'modal': '0 20px 60px -10px rgb(0 0 0 / 0.25)',
        'nav': '0 1px 0 0 rgb(0 0 0 / 0.08)',
      },
    },
  },
  plugins: [],
};

export default config;
