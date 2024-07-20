/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        secondary: '#458241',
        black: '#000000',
      },
      fontFamily: {
        ithin: ['Inter-Thin', 'sans-serif'],
        iextralight: ['Inter-ExtraLight', 'sans-serif'],
        ilight: ['Inter-Light', 'sans-serif'],
        iregular: ['Inter-Regular', 'sans-serif'],
        imedium: ['Inter-Regular', 'sans-serif'],
        isemibold: ['Inter-SemiBold', 'sans-serif'],
        ibold: ['Inter-Bold', 'sans-serif'],
        iextraBold: ['Inter-ExtraBold', 'sans-serif'],
        iblack: ['Inter-Black', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
