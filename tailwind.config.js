module.exports = {
  experimental: {
    darkModeVariant: true
  },
  dark: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        darkModeMainColor: '#333333',
        darkModeSecColor: '#292929',
        lightModeMainColor: '#EBF6FA',
        lightModeSecColor: '#ADC1FF'
      },
      textColor: {
        darkModeTextColor: '#D1D5DB',
        darkModeTitleColor: '#FFFFFF',
        darkModeTitle2Color: '#b4b4b4',
        lightModeTextColor: '#333333',
        lightModeTitleColor: '#292929',
        lightModeTitle2Color: '#141414'
      }
    },
  },
  plugins: [],
}
