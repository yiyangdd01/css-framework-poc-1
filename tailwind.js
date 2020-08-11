const plugin = require('tailwindcss/plugin')
module.exports = {
  purge: [],
  theme: {
    extend: {
      width: {
        '320px': '320px',
      },
      height: {
        '120px': '120px'
      },
    },
  },
  variants: {},
  plugins: [plugin(function({ addUtilities, addComponents, e, prefix, config }) {
    // Add your custom styles here
    console.log(addUtilities, addComponents, e, prefix, config, 111)
  }),],
}
