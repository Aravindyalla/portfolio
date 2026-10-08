# Aravind Naidu Yalla — AI Engineer Portfolio

A modern, responsive, high-performance personal portfolio website built with **Astro**, **TypeScript**, and **Vanilla CSS**. Designed with an AI/technology aesthetic tailored for Generative AI, LLM, RAG, and Python AI engineering roles.

---

## 🚀 Tech Stack & Features

- **Framework**: [Astro 5](https://astro.build/) (Static Site Generation / SSG)
- **Language**: TypeScript
- **Styling**: Scoped Modern CSS & Custom AI Design System (no heavy utility frameworks)
- **SEO & Socials**: Dynamic Canonical URLs, Open Graph, Twitter Cards, Sitemap, dynamic `robots.txt`, and Schema.org JSON-LD Structured Data
- **Deployment**: Zero-config deployment for **Vercel** (`vercel.json` included)
- **Visuals**: Modern dark palette, interactive neural canvas, glassmorphic card elements, and responsive layout (mobile, tablet, desktop)
- **Assets**: Professional downloadable resume (`/resume.pdf`), custom SVG favicon, and project architecture visuals

---

## 🛠️ Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Variables

Create a `.env` file in the project root:

```bash
cp .env.example .env
```

Set your production URL:

```env
SITE_URL=https://your-domain.vercel.app
```

> **Note:** If `SITE_URL` is omitted, it defaults gracefully to `https://aravindnaidu.dev`.

### 3. Development Server

Start the local dev server:

```bash
npm run dev
```

Visit [http://localhost:4321](http://localhost:4321) in your browser.

### 4. Build for Production

Compile static assets to the `dist/` directory:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## 🌐 Deploy to Vercel

### Option 1: Vercel CLI

```bash
npx vercel
```

### Option 2: GitHub Integration

1. Push this repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: AI Engineer Portfolio"
   git remote add origin https://github.com/Aravindyalla/portfolio.git
   git push -u origin main
   ```
2. Import the repository in the [Vercel Dashboard](https://vercel.com/new).
3. Under **Environment Variables**, add:
   - `SITE_URL`: `https://your-portfolio.vercel.app` (or your custom domain)
4. Click **Deploy**. Vercel will automatically detect Astro, run `npm run build`, and serve the static files from `dist`.

---

## 👤 Profile Information

- **Name**: Aravind Naidu Yalla
- **Role**: AI Engineer
- **Company**: People Media Factory
- **Location**: Hyderabad, India
- **Experience**: 1 Year Professional Experience (including Internship)
- **Focus**: Generative AI, Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), Qdrant Vector Databases, and FastAPI Backends
- **LinkedIn**: [aravind-naidu-yalla-b50953288](https://www.linkedin.com/in/aravind-naidu-yalla-b50953288)
- **GitHub**: [@Aravindyalla](https://github.com/Aravindyalla)
- **Email**: [aravindyall@gmail.com](mailto:aravindyall@gmail.com)
