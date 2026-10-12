# Bharath G P — Portfolio

A premium, dark-mode portfolio built with **React + Vite + Tailwind CSS + Framer Motion**.

---

## 🚀 Quick Start (Local)

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev

# 3. Open http://localhost:3000
```

## 📦 Production Build

```bash
npm run build
npm run preview    # preview the build locally
```

---

## 🌐 Deploy to Vercel (Recommended)

### Option A — Vercel CLI
```bash
npm install -g vercel
vercel login
vercel          # follow prompts (Framework: Vite, Output: dist)
vercel --prod   # promote to production
```

### Option B — GitHub + Vercel Dashboard
1. Push this repo to GitHub
2. Go to https://vercel.com → **New Project** → Import your repo
3. Framework: **Vite** | Build: `npm run build` | Output: `dist`
4. Click **Deploy** — done!

---

## 📁 Project Structure

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/           # images, resume PDF
│   ├── components/       # Navbar, Footer, LoadingScreen, BackToTop, SectionHeader
│   ├── sections/         # Hero, About, Skills, Projects, Education, Achievements, Contact
│   ├── hooks/            # useScrollReveal, useActiveSection
│   ├── data/             # portfolioData.js — all content lives here
│   ├── utils/            # animations.js — Framer Motion variants
│   ├── styles/           # globals.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── vercel.json
```

---

## 🎨 Customization

All content is centralized in **`src/data/portfolioData.js`** — update your name, projects, skills, links etc. there.

To update colors/theme → `tailwind.config.js` → `theme.extend.colors`.

---

## 📄 Resume PDF

Place your resume as `public/resume.pdf` so the download button and mailto links work.

---

## 🛠 Tech Stack

- **React 18** + **Vite 5**
- **Tailwind CSS 3** — utility-first styling
- **Framer Motion 11** — scroll animations, page transitions
- **React Type Animation** — typing effect in Hero
- **React Intersection Observer** — scroll reveal triggers
- **React Icons** — icon library
