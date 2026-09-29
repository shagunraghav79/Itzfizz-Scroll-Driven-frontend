# Itzfizz Scroll-Driven Hero

> Production-quality, high-performance scroll-driven web experience engineered for the **Itzfizz Web Development Internship Assignment**.

[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-3.15-0AE448?logo=greensock&logoColor=white)](https://greensock.com/gsap/)

---

## 📌 Project Overview

This project is an original, production-grade creative agency frontend created for the **Itzfizz Web Development Internship Assignment**. Inspired by the physics and scroll choreography of the reference animation ([paraschaturvedi.github.io/car-scroll-animation](https://paraschaturvedi.github.io/car-scroll-animation)), it re-imagines the concept into a sleek, agency-grade digital experience for Itzfizz.

The application features:
- A full-screen pinned hero section that stays locked while the user scrubs through a multi-phase timeline.
- A high-tech aerodynamic cyber speedcraft / hyper-device central visual that rotates in 3D space, translates, scales, and emits dynamic glowing plasma energy trails in direct response to scroll speed and position.
- Staggered initial page load choreography for the `"W E L C O M E   I T Z F I Z Z"` headline and design statistics.
- Progressive disclosure of telemetry diagnostics and seamless scroll transition into a modern `"WE BUILD DIGITAL EXPERIENCES"` capabilities suite.

---

## ✨ Features

- **Scroll-Driven Hero Animation**: Powered by GSAP ScrollTrigger with smooth scrub interpolation (`scrub: 1.1`), pinning the hero viewport while dynamically translating, scaling, and 3D-tilting the central visual.
- **GSAP ScrollTrigger Integration**: Proper React integration using `@gsap/react`'s `useGSAP` hook for scoped DOM selectors, lifecycle management, and automatic garbage collection on unmount.
- **Initial Load Choreography**: Subtly staggered entrance timeline where each letter of `"W E L C O M E   I T Z F I Z Z"` reveals with physics easing, followed by sequentially timed design metric cards (0.2s, 0.4s, 0.6s, 0.8s).
- **Responsive Architecture**: Pixel-perfect typography and fluid layouts across 1920px, 1440px, 1024px, 768px, 480px, 390px, and 375px viewports with zero horizontal overflow.
- **Adaptive Mobile Navigation**: Translucent floating navigation bar that darkens and blurs on scroll, featuring an animated mobile drawer menu and keyboard accessibility (`Escape` key listener, focus traps).
- **Modern UI & Aesthetic Polish**: Tailored dark theme (`#050505`), glassmorphic panels, ambient radial spotlights, high-tech telemetry HUDs, and subtle hover micro-interactions.
- **Performance Optimized**: 100% transform and opacity animations to avoid repaints/reflows; lightweight vector assets; zero heavy 3D engine bundles; sub-second production builds.
- **Accessibility & Reduced Motion**: Automatically honors `prefers-reduced-motion` media queries by disabling complex transforms and rendering states statically.

---

## 🛠️ Tech Stack

- **React.js 19**: Modern component architecture with reactive state and hooks.
- **Vite 8**: Ultra-fast module bundler with Hot Module Replacement (HMR).
- **Tailwind CSS v4**: Utility-first styling with custom design tokens and `@tailwindcss/vite`.
- **GSAP 3.15 & GSAP ScrollTrigger**: Industry-standard high-performance animation engine with smooth scrubbing and pinning.
- **@gsap/react**: Official GSAP hook integration for React component lifecycles.
- **Lucide React**: Clean, lightweight iconography.
- **HTML5 & CSS3**: Semantic document structure and custom glassmorphism / perspective styling.
- **JavaScript (ES Modules)**: Native browser ES module execution.

---

## 🚀 Run Locally

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v18.0.0 or later) and `npm` installed.

### 1. Clone the repository
```bash
git clone [Add repository URL]
cd frontend-assignment
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start development server
```bash
npm run dev
```

Visit `http://localhost:5173` in your browser.

---

## 📦 Build for Production

To create an optimized production build:
```bash
npm run build
```

To locally preview the production build:
```bash
npm run preview
```

---

## 🌐 Deployment to GitHub Pages

You can deploy this project to GitHub Pages in a few simple steps:

1. In `vite.config.js`, set the `base` path to match your repository name:
   ```javascript
   export default defineConfig({
     base: '/<repository-name>/',
     plugins: [react(), tailwindcss()],
   });
   ```

2. Install the `gh-pages` package:
   ```bash
   npm install -D gh-pages
   ```

3. Add deploy scripts to your `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

4. Run the deploy command:
   ```bash
   npm run deploy
   ```

5. In your GitHub repository settings, go to **Settings** > **Pages** and ensure the source branch is set to `gh-pages` (or use the automated GitHub Actions workflow for static Vite sites).

---

## 🔗 Project Links

- **Live Demo**: `[Add deployed URL]`
- **GitHub Repository**: `[Add repository URL]`

---

## 📄 License & Attribution

Designed and developed for the **Itzfizz Web Development Internship Assignment**. All statistics and metrics presented within the interface are simulated design prototype data.

&copy; 2026 Itzfizz. All rights reserved.
