module.exports = {
  content: ['./index.html', './js/**/*.js'],
  theme: {
    extend: {
      colors: {
        powder: { light: '#FCF9F9', base: '#F4EAE8', dark: '#E0CACA' },
        charcoal: { 500: '#5C5C5C', 800: '#333333', 900: '#1A1A1A' }
      },
      fontFamily: {
        display: ['Raleway', 'sans-serif'],
        body: ['Montserrat', 'sans-serif']
      }
    }
  }
};
