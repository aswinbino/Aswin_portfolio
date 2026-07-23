/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'rgb(var(--background) / <alpha-value>)',
        foreground: 'rgb(var(--foreground) / <alpha-value>)',
        primary: 'rgb(var(--primary) / <alpha-value>)',
        secondary: 'rgb(var(--secondary) / <alpha-value>)',
        accent: 'rgb(var(--accent) / <alpha-value>)',
        muted: {
          DEFAULT: 'rgb(var(--muted) / <alpha-value>)',
          foreground: 'rgb(var(--muted-foreground) / <alpha-value>)',
        },
        border: 'rgb(var(--border) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        serif: ['Playfair Display', 'serif'],
      },
      keyframes: {
        scrollSkills: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        iconFloat: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        spotlight: {
          '0%': { opacity: '0', transform: 'translate(-72%, -62%) scale(0.5)' },
          '100%': { opacity: '1', transform: 'translate(-50%, -40%) scale(1)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        drawPath: {
          '0%': { strokeDashoffset: '1', opacity: '0' },
          '30%': { opacity: '1' },
          '70%': { opacity: '1' },
          '100%': { strokeDashoffset: '0', opacity: '1' },
        }
      },
      animation: {
        scrollSkills: 'scrollSkills 20s linear infinite',
        iconFloat: 'iconFloat 3s ease-in-out infinite',
        spotlight: 'spotlight 2s ease-out forwards',
        fadeIn: 'fadeIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        drawPath: 'drawPath 2.5s cubic-bezier(0.4, 0, 0.2, 1) forwards',
      }
    },
  },
  plugins: [],
}
