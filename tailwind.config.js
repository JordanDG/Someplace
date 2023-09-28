/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00ACED',
      },
      keyframes: {
        FadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        SlideIn: {
          '0%': { opacity: '0', transform: 'translateY(-50px)' },
          '100%': { opacity: '1', transform: 'translateY(0px)' },
        }
      },
      animation: {
        FadeIn: 'FadeIn 1s forwards',
        SlideIn: 'SlideIn 1s forwards',
      }
    },
  },
  plugins: [],
}
