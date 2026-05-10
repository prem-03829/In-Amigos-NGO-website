/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2ecc71',
          dark: '#27ae60',
        },
        secondary: '#3498db',
        dark: '#1a1a1a',
        text: {
          DEFAULT: '#4a4a4a',
          light: '#7a7a7a',
        },
        'bg-light': '#f9fafb',
      },
      borderRadius: {
        'xl': '12px',
      },
      boxShadow: {
        'sm': '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
        'md': '0 10px 20px -3px rgba(0, 0, 0, 0.08)',
        'lg': '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      maxWidth: {
        'container': '1100px',
      },
      transitionProperty: {
        'all': 'all',
      },
      transitionTimingFunction: {
        'standard': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
