// tailwind.config.js
module.exports = {
  mode: 'jit', // Just-In-Time mode for faster build times in development
  purge: [
    './src/**/*.{js,jsx,ts,tsx}', // Purge unused styles in production
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {}, // Extend Tailwind's default theme
  },
  variants: {
    extend: {}, // Extend or configure Tailwind's default variants
  },
  plugins: [],
};
