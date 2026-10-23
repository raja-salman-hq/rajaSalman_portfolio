# Raja Salman — Static Portfolio

Premium multi-page portfolio built with plain HTML, CSS, and JavaScript. No React, Next.js, or external UI framework is required.

## Pages

- `index.html` — home and interactive canvas hero
- `about.html` — skills, experience, education, and certificates
- `projects.html` — filterable project archive
- `contact.html` — contact channels and Google Apps Script form

## Run locally

Install Node.js, then run `npm install` and `npm run dev`. Vite serves the site at `http://localhost:3000`.

## Update content

- Update projects, skills, certificates, and contact details in `src/js/main.js`.
- Place project and certificate images in `public/assets/`.
- Set your Apps Script URL in the `GOOGLE_SCRIPT_URL` constant at the top of `src/js/main.js`.

## Contact form

Use `public/apps-script/Code.gs` in a Google Sheet Apps Script project, deploy it as a Web App, then paste the `/exec` URL into `src/js/main.js`. The contact form opens the visitor's email app until that URL is configured.

## Deploy

Run `npm run build` and deploy the generated `dist/` folder to Vercel, Netlify, or GitHub Pages.
