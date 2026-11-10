/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        medical: {
          blue: '#0284c7',
          'blue-dark': '#0369a1',
          'blue-deep': '#0c4a6e',
          teal: '#0d9488',
          'teal-dark': '#0f766e',
          'teal-light': '#14b8a6',
          green: '#16a34a',
          'green-dark': '#15803d',
          'green-light': '#22c55e',
          accent: '#2563eb',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        heading: ['Outfit', 'Montserrat', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'clinic': '0 10px 25px -5px rgba(2, 132, 199, 0.08), 0 8px 10px -6px rgba(2, 132, 199, 0.04)',
        'clinic-hover': '0 20px 30px -10px rgba(13, 148, 136, 0.15), 0 10px 15px -5px rgba(2, 132, 199, 0.08)',
        'card-glow': '0 0 20px -2px rgba(13, 148, 136, 0.2)',
      },
    },
  },
  plugins: [],
}

