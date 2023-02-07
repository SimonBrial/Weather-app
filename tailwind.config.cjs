/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        BackgroundCards: '#1E213A',
        TemperatureButtonsDesabled: '#585676',
        TemperatureButtonsAvalible: '#E7E7EB',
        BtnSearch: '#6E707A',
        TemperatureFontcolorAvailable: '#110E3C',
        TemperatureFontcolorDesabled: '#E7E7EB',
        Temperature: '#A09FB1',
        ColorFont: '#E7E7EB',
        ColorInfoFonts: '#88869D'
      },
      textColor: {
        SearchButton: '#E7E7EB',
      },
      backgroundColor: {
        BackgroundPrincipal: '#100E1D',
        BackgroundSecondary: '#1E213A',
      }
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      '6xl': '3.5rem',
      '7xl': '3.9rem',
      '8xl': '4.5rem',
      '9xl': '5.2rem',
      'TempFont': '6rem',
    }
  },
  plugins: [],
}