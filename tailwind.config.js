/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            'timer-active-primary': '#3a86ff',
            'timer-active-secondary': '#96bdfd',
            'timer-inactive-primary': '#adb5bd',
            'timer-paused-primary': '#fcbf49',
            'timer-paused-secondary': '#ffda8f'
        }
    }
  },
  plugins: [],
}
