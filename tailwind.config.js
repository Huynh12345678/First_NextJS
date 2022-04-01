module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header': "url('/bg.jpg')",
        'grid': "url('/favicon.ico')"
      },
      colors: {
        primary: "#1A1A1A",
        nav: "#202224",
        link: "#248FFF",
        "link-hover": "#085ED7",
        chapter: "rgb(17 46 64)",
        root: '#2D2D2E',
        main: 'rgb(239 68 68)',
        'main-hover': 'rgba(239,68,68,0.4)'
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '90%': '90%',
        '16': '4rem',
      },
      backgroundPosition: {
        'sm': '50% 70%',
        'lg': '50% 120%'
      }
    }
  },
  plugins: []
};
