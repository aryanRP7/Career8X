# Career8X

Personal career dashboard — track applications, jobs, contacts, resources & notes.

**Live site:** https://aryanRP7.github.io/Career8X

---

## 🚀 Deploying to GitHub Pages

### First-time setup
1. Push this project to your `main` branch on GitHub
2. Go to **Settings → Pages** → set Source to **GitHub Actions**
3. That's it — GitHub Actions auto-builds and deploys on every push to `main`

### Updating your data (safe — won't touch localStorage state)
Edit any file inside `src/data/`:
- `appliedJobsData.js` — jobs you've applied to
- `savedForLaterData.js` — jobs to apply later
- `jobsData.js` — Jobs Board listings
- `consultancyData.js` — consultancy contacts
- `notesData.js` — resources & study notes
- `myData.js` — My Space links, notes, files
- `personalNote.js` — motivational quote on hover
- Update `LAST_UPDATED` in `App.jsx` after each deploy

### Adding resume PDFs
Drop PDF files into `public/myfiles/resumes/` and reference them:
```js
// in appliedJobsData.js or savedForLaterData.js
resumeFile: "resume_company_2026.pdf"
```

### ⚠️ Important: user state is in localStorage
- Stars, bookmarks, applied toggles (from Jobs Board) are saved in the browser's localStorage
- **Redeploying does NOT clear this data** — users keep their state
- Only bump `STORAGE_VERSION` in `App.jsx` if you intentionally want to reset everything

---

## 🛠 Local development

```bash
npm install
npm start
```
