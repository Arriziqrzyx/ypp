/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          red: '#E62727',
        },
        off: {
          white: '#F3F2EC',
        },
        light: {
          gray: '#DCDCDC',
        },
        industrial: {
          blue: '#1E93AB',
        },
        dark: {
          bg: '#111111',
        }
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      spacing: {
        'cinematic': '8rem',
        'cinematic-mobile': '4rem',
      }
    },
  },
  plugins: [],
}
