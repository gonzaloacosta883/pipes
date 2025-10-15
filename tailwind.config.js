const { default: themes } = require('daisyui/theme/object');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {cyberpunk},
  },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    themes: ['dracula', 'cyberpunk']
  }
}

