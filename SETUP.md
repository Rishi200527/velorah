# Velorah setup

1. Unzip the project.
2. Open the `velorah-release` folder in VS Code.
3. Open Terminal → New Terminal.
4. Run `npm install` and wait for it to finish.
5. Run `npm run dev`.
6. Open the localhost URL shown in Terminal.

## Add your background video
Copy the downloaded MP4 to `public/velorah-background.mp4`. The homepage first tries this local file and falls back to the current hosted source if the local file is missing. Keep the video licensed/authorized for your use.

## Build for production
Run `npm run typecheck` and `npm run build`. The generated production files go into `dist/`.

This is a frontend-only implementation. Backend services, real AI responses, accounts, and server-side persistence are not connected yet.
