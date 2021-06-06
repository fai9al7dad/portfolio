module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        dark:{
          'darkBlue': '#243249'
        },
        light:{
          'lightBG':'#F7F8FA',
          'primary':'#444858',
          'secondary':'#97A6BC'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
