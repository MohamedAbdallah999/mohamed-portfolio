# Mohamed Abdallah Mohamed Portfolio

Professional 3D animated portfolio website for Mohamed Abdallah Mohamed, built with React, Vite, TypeScript, custom responsive CSS, Framer Motion, Three.js, React Three Fiber, and Lucide icons.

## Features

- Full-screen animated 3D hero section with software engineering visual elements.
- First-person, recruiter-friendly sections for About, Education, Experience, Projects, Skills, Certificates, Documents, GitHub, and Contact.
- Project descriptions reconciled against the supplied CV and the implementation found across all accessible GitHub repositories.
- Direct repository links only where a matching codebase was verified; CV-only projects remain visible without misleading links.
- Personal photo, CV, cover letter, certificate PDF, and all certificate images integrated from the uploaded files.
- Working download buttons for the CV, cover letter, full certificates PDF, and certificate images.
- Interactive certificates gallery with modal preview.
- Responsive design for desktop, tablet, and mobile.
- SEO metadata and Open Graph tags in `index.html`.
- Front-end contact form that opens the visitor's email client with the completed message using `mailto`.

## Project Structure

```text
public/
  assets/
    Me.jpeg
  certificates/
    certificate image files
  documents/
    Mohamed_Abdallah_CV.pdf
    Mohamed_Abdallah_Cover_Letter.docx
    Mohamed_234552.pdf
src/
  data/
    portfolio.ts
  App.tsx
  main.tsx
  styles.css
```

## Install

```bash
npm install
```

## Run Locally

```bash
npm run dev
```

Open the local URL shown in the terminal, usually:

```text
http://127.0.0.1:5173/
```

## Build

```bash
npm run build
```

The production output will be generated in `dist/`.

## Preview Production Build

```bash
npm run preview
```

## Deployment

This is a static Vite website. It can be deployed to Vercel, Netlify, GitHub Pages, Cloudflare Pages, or any static hosting service.

Recommended build settings:

- Build command: `npm run build`
- Output directory: `dist`
- Node version: 20 or newer

## Notes

- The GitHub section uses static, evidence-based cards and the public GitHub profile link, so no GitHub API token is required at runtime.
- The contact form is front-end only and opens the visitor's email client addressed to `mohamed1392003@gmail.com` with the submitted name, email, and message included.
- If an image or document is replaced later, keep the same file name or update the matching path in `src/data/portfolio.ts`.
