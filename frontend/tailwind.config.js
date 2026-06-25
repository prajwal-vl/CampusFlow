/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dynamic white for light mode inversion
        white: 'rgb(var(--color-white-rgb) / <alpha-value>)',
        // Core Zinc Palette (lighter shades dynamic for inversion)
        zinc: {
          50: 'rgb(var(--color-zinc-50) / <alpha-value>)',
          100: 'rgb(var(--color-zinc-100) / <alpha-value>)',
          200: 'rgb(var(--color-zinc-200) / <alpha-value>)',
          300: 'rgb(var(--color-zinc-300) / <alpha-value>)',
          400: 'rgb(var(--color-zinc-400) / <alpha-value>)',
          500: 'rgb(var(--color-zinc-500) / <alpha-value>)',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
          950: '#09090b',
        },
        // Accent Colors (Emerald/Teal)
        emerald: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981', // Primary Accent
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
          950: '#022c22',
        },
        teal: {
          400: '#2dd4bf',
          500: '#14b8a6',
        }
      },
      backgroundImage: {
        'gradient-emerald-teal': 'linear-gradient(135deg, #10b981, #14b8a6)',
        'gradient-dark-glass': 'linear-gradient(180deg, rgba(24,24,27,0.4) 0%, rgba(9,9,11,0.8) 100%)',
        'radial-emerald': 'radial-gradient(circle at top right, rgba(16,185,129,0.15) 0%, transparent 40%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out',
        'slide-up': 'slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-in-left': 'slideInLeft 0.4s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: { from: { opacity: 0 }, to: { opacity: 1 } },
        slideUp: { from: { opacity: 0, transform: 'translateY(16px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
        slideInLeft: { from: { opacity: 0, transform: 'translateX(-16px)' }, to: { opacity: 1, transform: 'translateX(0)' } },
        scaleIn: { from: { opacity: 0, transform: 'scale(0.97)' }, to: { opacity: 1, transform: 'scale(1)' } },
      },
      boxShadow: {
        'glass': '0 4px 30px rgba(0, 0, 0, 0.5)',
        'glass-hover': '0 8px 40px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255,255,255,0.1)',
        'glow-emerald': '0 0 20px rgba(16, 185, 129, 0.2)',
        'glow-emerald-strong': '0 0 30px rgba(16, 185, 129, 0.4)',
      },
      backdropBlur: {
        xs: '2px',
        xl: '24px',
        '2xl': '40px',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      }
    }
  },
  plugins: [],
}
