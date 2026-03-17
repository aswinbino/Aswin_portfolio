/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scrollSkills: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        iconFloat: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        bgShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        floatText: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        noise: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-5%, -5%)' },
          '20%': { transform: 'translate(-10%, 5%)' },
          '30%': { transform: 'translate(5%, -10%)' },
          '40%': { transform: 'translate(-5%, 15%)' },
          '50%': { transform: 'translate(-10%, 5%)' },
          '60%': { transform: 'translate(15%, 0)' },
          '70%': { transform: 'translate(0, 15%)' },
          '80%': { transform: 'translate(3%, 35%)' },
          '90%': { transform: 'translate(-10%, 10%)' }
        }
      },
      animation: {
        scrollSkills: 'scrollSkills 20s linear infinite',
        iconFloat: 'iconFloat 3s ease-in-out infinite',
        bgShift: 'bgShift 15s ease infinite',
        floatText: 'floatText 6s ease-in-out infinite',
        noise: 'noise 0.2s infinite',
      }
    },
  },
  plugins: [],
}
