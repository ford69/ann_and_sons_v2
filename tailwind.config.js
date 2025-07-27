/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          black: '#000',
          white: '#fff',
          gray: '#6b7280',
        },
        black: '#000',
        white: '#fff',
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
        // Custom gradients
        darkgradient: 'linear-gradient(135deg, #232526 0%, #414345 100%)',
        lightgradient: 'linear-gradient(135deg, #e0e0e0 0%, #ffffff 100%)',
      },
    },
  },
  plugins: [],
};
