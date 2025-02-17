// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme': {
          100: '#00a67e',
          200: '#009571',
          300: '#008565',
          400: '#007458',
          500: '#00644c',
          600: '#00533f',
        }
      }
    },
  },
  plugins: [],
}