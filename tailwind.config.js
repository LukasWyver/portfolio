/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // sans: 'var(--font-roboto)',
        sans: 'var(--font-montserrat)',
      },

      colors: {
        background: '#11172B',
        backgroundLight: '#1B2138',
        primary: '#0EE7B7',
        secondary: '#7AC7E3',
        gradient: 'linear-gradient(225deg, #313860 0%, #11172B 100%);',
        text: '#848DA0',
        textHighlight: '#444B5B',
        textLight: '#C4C4C4',
        border: '#313958',
        inputBackground: '#1E253E',
        error: '#d45d5d',
      },
    },
  },
  plugins: [],
}
