/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    // https://uicolors.app/edit?sv1=primary:50-effafc/100-d6f0f7/200-b1dff0/300-7bc7e5/400-2f9bc8/500-238ab7/600-206f9a/700-205b7e/800-224c68/900-214058;error:50-fff2ed/100-ffe1d4/200-ffbfa8/300-ff9271/400-ff4b26/500-fe3011/600-ef1607/700-c60a08/800-9d0f13/900-7e1013;success:50-f4fee7/100-e5fccb/200-cdf89e/300-abf165/400-8be536/500-60b515/600-51a20e/700-3e7b10/800-346113/900-2e5215;gray:50-f5f6f6/100-e5e7e8/200-ced2d3/300-abb2b5/400-767f84/500-666f74/600-575d63/700-4b4f53/800-424648/900-3a3d3f
    extend: {
      colors: {
        'light-blue': {
          50: '#f2f9fd',
          100: '#e4f1fa',
          200: '#c4e4f3',
          300: '#90cde9',
          400: '#49afd9',
          500: '#2f9bc8',
          600: '#1f7daa',
          700: '#1b6489',
          800: '#1a5472',
          900: '#1b475f',
        },
        'light-green': {
          50: '#f4fee7',
          100: '#e5fccb',
          200: '#cdf89e',
          300: '#abf165',
          400: '#8be536',
          500: '#60b515',
          600: '#51a20e',
          700: '#3e7b10',
          800: '#346113',
          900: '#2e5215',
        },
        'light-red': {
          50: '#fff3f0',
          100: '#ffe3dd',
          200: '#ffccc1',
          300: '#ffa795',
          400: '#ff7559',
          500: '#ff4b26',
          600: '#fc3006',
          700: '#e62700',
          800: '#af2205',
          900: '#90220c',
        },
      },
    },
  },
  plugins: [],
}
