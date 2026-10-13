# Velorah — Student Learning Platform (Frontend)

A modular React + TypeScript + Vite frontend for the Velorah capstone. It contains a cinematic marketing site and a separate student learning application. This release is frontend-only and uses demo data.

## Requirements
- Node.js 20.19+ or 22.12+
- npm

## Run locally
```bash
npm install
npm run dev
```
Open the local URL printed by Vite (normally `http://localhost:5173`).

## Production build check
```bash
npm run typecheck
npm run build
npm run preview
```

## Background video
The landing page uses `/velorah-background.mp4` when that file exists in `public/`. Copy your downloaded video into `public/` and name it `velorah-background.mp4`. If the file is absent, the page falls back to the current hosted MP4 URL. For a published site, use media you have permission to host.

## Routes
- `/` — Home
- `/about` — About Velorah
- `/contact` — Contact page (frontend demo; no email is sent yet)
- `/learn/dashboard` — Student dashboard
- `/learn/dsa` — DSA roadmap
- `/learn/language` — Python or Java selection
- `/learn/lessons` — Lesson list and lesson viewer
- `/learn/assessments` — Sample diagnostic assessment
- `/learn/tutor` — AI tutor interface placeholder
- `/learn/notes` — Notes interface (browser local storage)
- `/learn/revision` — Personalized revision interface placeholder
- `/learn/profile` — Learner intelligence overview placeholder

## Architecture
- `src/pages/` — Marketing pages
- `src/components/layout/` — Marketing and student app shells
- `src/features/` — Domain-specific student feature modules
- `src/routes/` — Route definitions
- `src/services/` — API client boundary for future backend integration
- `src/types/` — Shared types
- `src/hooks/` and `src/utils/` — Reusable frontend logic

## Frontend-only limitations
Authentication, real AI/LLM responses, server persistence, adaptive recommendations, and email delivery are not connected. All sample course and assessment data is demonstration content. Notes persist in the current browser only.
