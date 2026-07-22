// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/Portfolio/' : '/',
  server: {
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    minify: true
  }
}));



/*
Project Structure:

/src
  /components
    - Background.jsx (3D animated background with Three.js)
    - Navbar.jsx
    - Hero.jsx (Bio section)
    - About.jsx
    - Experience.jsx
    - Projects.jsx
    - Skills.jsx
    - Contact.jsx
    - Footer.jsx
  /layouts
    - MainLayout.jsx
  /assets
    - profile.jpg (your profile image)
  - App.jsx (main component)
  - main.jsx (entry point)
  - index.css (global styles including Tailwind)

/public
  - favicon.ico
  - robots.txt

- package.json
- vite.config.js
- tailwind.config.js
- postcss.config.js
- index.html

Installation commands:
```
npm create vite@latest aruneswari-portfolio -- --template react
cd aruneswari-portfolio
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install three @react-three/fiber @react-three/drei
npm install react-router-dom
npm install framer-motion
npm install lucide-react
npm run dev
```
*/