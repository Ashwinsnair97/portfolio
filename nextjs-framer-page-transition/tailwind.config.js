/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}', 
  ],
  theme: {
    extend: {
      // backgroundColor: {"#0000A0"},
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        '10xl': '29vw',
        'about': '4.5vw',
      },
      height: {
        'half': '50vh',
        'double': '200vh',
        'threequarter': '75vh',
        'img': '500vh',
        'imgdiv': '200vh'
      },
      borderRadius: {
        '10xl': '10vh'
      },
      margin: {
        'full': '100vh'
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        // 'cursive': ['Playwrite IT Moderna', 'cursive'],
        // 'itim': ["Itim", 'cursive'],
        // 'tenor': ["Tenor Sans", 'sans-serif'],
        'exo': ["Exo", 'sans-serif'],
        'play': ["Playfair Display", 'serif']
      },
    },
  },
  plugins: [],
}

