/** @type {import('tailwindcss').Config} */
export default {  // Use export default
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      // redefinindo o md para 830px
      'md': '830px',

      // manter os outros padrões, se quiser
      'sm': '640px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      backgroundImage: {
        'primary-gradient': 'linear-gradient(90deg, #002F52 35%, #326589)',
      },
       fontFamily: {
        sora: ['Sora', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
        merriweather: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
}