# Khushi Singh — Portfolio Website

A responsive personal portfolio built with React + Vite. It includes About, Projects, Certifications, Internship, Skills, and Contact sections.

## 1. Install the tools
- Install Node.js (LTS): https://nodejs.org/
- Install Visual Studio Code: https://code.visualstudio.com/

## 2. Open this project in VS Code
1. Extract `khushi-portfolio.zip`.
2. In VS Code, select **File → Open Folder** and open the `khushi-portfolio` folder.
3. Open **Terminal → New Terminal**.

## 3. Run the website locally
Run these commands in the VS Code terminal:

```bash
npm install
npm run dev
```

Vite will print a local URL, usually `http://localhost:5173`. Ctrl+click it to open the website.

To test a production build:

```bash
npm run build
npm run preview
```

## 4. Personalise your portfolio
Most of the content is kept in **`src/data.js`**:
- Update project titles, summaries, technologies, and links.
- Add your real certification names and certificate links.
- Add internship applications, training, or experience only when accurate.
- Replace the placeholder LinkedIn, GitHub, and email details with your actual links.

### Add your photo
1. Put a portrait photo in `public/` and name it `profile.jpg`.
2. The About section already uses `/profile.jpg`.
3. If you use a different filename, update `photo` in `src/data.js`.

### Add your resume
Place your resume PDF at `public/resume.pdf`. The hero button links to that file. If you have not added it yet, the button will not have a real file to open.

## 5. Folder structure

```text
khushi-portfolio/
├── public/
│   ├── profile.jpg          # Add your own portrait here
│   └── resume.pdf           # Add your resume here
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── SectionHeading.jsx
│   │   ├── ProjectCard.jsx
│   │   └── Footer.jsx
│   ├── data.js              # Edit your portfolio content here
│   ├── App.jsx              # Page sections and layout
│   ├── main.jsx             # React entry point
│   └── styles.css            # All styling and responsive design
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Before publishing
- Replace every placeholder in `src/data.js`.
- Add your photo and resume.
- Test every social/contact link.
- Do not publish private phone numbers or personal information you do not want public.

## Deployment
You can deploy this Vite project using Vercel, Netlify, or GitHub Pages. For Vercel/Netlify, import the GitHub repository and use `npm run build` as the build command and `dist` as the output directory.
