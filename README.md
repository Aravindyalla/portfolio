# Aravind Naidu Yalla — AI Software Engineer Portfolio

A modern, responsive, high-performance personal portfolio website built with **Astro**, **TypeScript**, and **Vanilla CSS**. Features a dark AI/technology aesthetic tailored for Generative AI, LLMs, RAG, and Python AI engineering roles, along with an interactive **AI Portfolio Agent ("Aravind AI")** and a **reliable Contact Section & Form**.

---

## 🚀 Key Features

- **Framework**: [Astro](https://astro.build/) (Static Site Generation / SSG with Vercel Serverless Endpoints)
- **AI Portfolio Assistant ("Aravind AI")**:
  - Floating bottom-right widget with interactive chat modal.
  - Answers questions regarding experience, skills, projects (Enterprise RAG, VFX Tracking, AI Music Studio), education (KIET / JNTUK), and contact info.
  - **Zero Hallucination Guarantee**: Strict anti-hallucination guardrails; never invents salaries, previous employers, cloud certs, or unlisted tech.
  - Clearly distinguishes production experience from technologies "Currently Learning / Exploring" (Agentic AI, LangChain, LangGraph, Tool Calling).
  - **Secure Architecture**: Serverless `/api/chat` endpoint keeps LLM API keys on the server side (never exposed in client code or bundle).
  - **100% Uptime Fallback**: If no AI API key is configured or the app is run statically, the built-in authoritative knowledge base engine handles queries seamlessly.
  - Direct 1-click action buttons: Download Resume (`/resume.pdf`), LinkedIn, GitHub, Email.
- **Reliable Connect Me / Send Email**:
  - Direct action buttons: Email Me (`mailto:aravindyallao@gmail.com?subject=Portfolio%20Contact%20-%20Aravind%20Naidu%20Yalla`), LinkedIn, GitHub, Phone / Call (`+91 7729804283`).
  - Interactive Contact Form with Name, Email, Subject, Message, and Send Message button.
  - Loading spinner, form validation, disabled submit state during transmission.
  - Clear user feedback banners:
    - Success: *"Thanks for reaching out! Your message has been sent successfully."*
    - Error: *"Something went wrong while sending your message. Please try again or contact me directly by email."* (with prefilled mailto launcher).
  - Secure `/api/contact` serverless endpoint supporting Resend, Web3Forms, or Formspree via environment variables without exposing credentials client-side.
- **Design & Layout**:
  - Fully responsive across mobile, tablet, and desktop.
  - Dark AI aesthetic, custom ambient glows, interactive neural canvas, glassmorphic cards.
  - Clean typography without personal photos/avatars as requested.
- **SEO & Performance**: Dynamic Canonical URLs, Open Graph, Twitter Cards, Sitemap, dynamic `robots.txt`, and Schema.org JSON-LD.

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

Configure optional server-side keys:

```env
# Canonical domain for SEO and metadata
SITE_URL=https://aravindnaidu.dev

# (Optional) AI Assistant LLM Provider
OPENAI_API_KEY=your_openai_api_key_here
# or GROQ_API_KEY=your_groq_api_key_here

# (Optional) Contact Form Email Delivery
RESEND_API_KEY=your_resend_api_key_here
CONTACT_EMAIL=aravindyallao@gmail.com
# or WEB3FORMS_ACCESS_KEY=your_web3forms_access_key_here
```

> **Note:** If no AI key or email service key is provided, the website runs gracefully with built-in authoritative fallback matching and 1-click mailto fallback!

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

The portfolio is architected for zero-config deployment to Vercel:
- **Static Assets**: Astro compiles the site into `dist/`.
- **Serverless API Endpoints**: Files in `/api` (`api/chat.ts` and `api/contact.ts`) deploy automatically as Vercel Serverless Functions.

### Option 1: Vercel CLI

```bash
npx vercel
```

### Option 2: GitHub Integration

1. Push this repository to GitHub:
   ```bash
   git add .
   git commit -m "Update portfolio with reliable contact form and Aravind AI assistant"
   git push origin main
   ```
2. Import the repository in the [Vercel Dashboard](https://vercel.com/new).
3. Under **Environment Variables**, add:
   - `SITE_URL`: `https://your-domain.vercel.app`
   - `OPENAI_API_KEY`: *(optional for live LLM inference)*
   - `RESEND_API_KEY`: *(optional for server-side email dispatch)*
4. Click **Deploy**.

---

## 👤 Authoritative Profile Details

- **Name**: Aravind Naidu Yalla
- **Role**: AI Software Engineer / AI Developer
- **Company**: People Media Factory
- **Location**: Hyderabad, India
- **Experience**: 1 Year Professional Experience (including Internship)
  - Full-Time: May 2026 – Present
  - Internship: October 2025 – April 2026
- **Education**: B.Tech in Computer Science (Data Science), Kakinada Institute of Engineering and Technology (affiliated with JNTUK), Dec 2021 – Apr 2025, CGPA 7.5 / 10
- **Email**: aravindyallao@gmail.com
- **Phone**: +91 7729804283
- **LinkedIn**: https://www.linkedin.com/in/aravind-naidu-yalla-b50953288
- **GitHub**: https://github.com/Aravindyalla
- **Resume**: `/resume.pdf`
