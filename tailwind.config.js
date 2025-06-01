// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#0a192f',  // Dark navy background
          light: '#112240',  // Lighter navy
        },
        secondary: {
          teal: '#64ffda',  // Teal accent
          slate: '#8892b0',  // Slate text
          light: '#ccd6f6',  // Light slate for headings
        },
        purple: {
          500: '#32d17a',  // Replaced with green
          600: '#2bb76c',  // Replaced with darker green
          700: '#259d5d',  // Replaced with even darker green
          800: '#1f834e',  // Replaced with very dark green
          900: '#196c40',  // Replaced with deepest green
        },
        green: {
          500: '#32d17a',
          600: '#2bb76c',
          700: '#259d5d',
          800: '#1f834e',
          900: '#196c40',
        }
      },
      fontFamily: {
        sans: ['JetBrains Mono', 'monospace'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}