# Tinh Phan — Resume website

A one-page resume built with Next.js (App Router) and TypeScript. It is fully static, works on phones, and switches to dark colours when the visitor's device is in dark mode.

## Edit the content

All text lives in `data/resume.ts`: name, contact details, skills, jobs, education and achievements. Change it there and the page updates. The photo is `public/photo.jpg`; replace it with any square image of the same name.

## Run it locally

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy to Vercel

1. Push this folder to a GitHub, GitLab or Bitbucket repository.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Keep the detected defaults (framework: Next.js) and click **Deploy**.

Or run `npx vercel` in this folder.

## Project layout

```
app/layout.tsx         page metadata, font, global styles
app/page.tsx           the resume page
app/globals.css        all styling (colours are CSS variables at the top)
components/            icons, section titles, copy-email button
data/resume.ts         resume content
public/                photo and favicon
```

The font is Nunito Sans, bundled through `@fontsource-variable/nunito-sans`, so the site makes no requests to Google Fonts. Icons are from Font Awesome Free (CC BY 4.0) and Lucide (ISC), inlined in `components/icon-data.ts`.
