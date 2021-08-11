module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
      'hero-pattern': "url('./img/hero_pattern.jpg')",
      'travel_bg': "url('./img/travel.jpg')"
      
     }),
      textColor: {
        'blue': '#bcd8ff',
        'blue2': '#020f1b',
        'gray': '#b1c4cf',
        'purple': '#282846',
        'pink': '#BF1363',
        'secondary': '#ffed4a',
        'danger': '#e3342f'
      },
      backgroundColor: theme => ({
       ...theme('colors'),
       'pink': '#FF3D68',
       'green': '#5a6559',
       'teal': '#b1cccb',
       'blue': '#020f1b',
       'secondary': '#ffed4a',
       'danger': '#e3342f',
      }),
      backgroundOpacity: {
       '10': '0.10',
       '20': '0.2',
       '50': '0.5',
       '95': '0.95',
      },
      
      fontFamily: {
        'robo': ['RobotoMono']
      },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
}
