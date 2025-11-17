## Interactive CV (VS Code-inspired) — Next.js App

An interactive, VS Code–inspired CV/portfolio built with the Next.js. The interface mimics a code editor, focuses on usability, responsiveness, and a familiar developer aesthetic while keeping the stack simple and production-ready.

### Features

- **VS Code-like UI**: Explorer, tabs, window controls (close, minimize, full screen), and keyboard-focus friendly interactions
- **Responsive layout**: Mobile-friendly with a slide-in menu and accessible focus states
- **Fast by default**: Next.js 15, React 19, TypeScript
- **Utility-first styling**: Tailwind CSS
- **Iconography**: Codicons, Heroicons, and Lucide icons

### Tech Stack

- **Framework**: Next.js ^15.x (App Router)
- **UI**: React ^19.x, TypeScript, Tailwind CSS ^3.x
- **Icons**: `@vscode/codicons`, `@heroicons/react`, `lucide-react`

### Run the Project

Prerequisites: Node.js 18+

```bash
npm install
npm run dev
# build & run production
npm run build
npm start
# lint
npm run lint
```

Visit `http://localhost:3000`. The root route redirects to `about`.

### Usage

- **Navigation**: Use the Explorer sidebar or tab bar to switch between `about`, `experience`, `projects`, and `contact`.
- **Mobile menu**: On small screens, open/close the sidebar via the top bar menu button.
- **Window controls**: Use close/minimize/full screen controls in the top bar (full screen uses the browser Fullscreen API).

### Deployment

This app is optimized for deployment on Vercel.

1. Push to a Git repository
2. Import the repo in Vercel
3. Use the default Next.js build settings

Resources: [Next.js docs](https://nextjs.org/docs) • [Vercel](https://vercel.com)

### Acknowledgements

Inspired by the idea of presenting a résumé in an unconventional UI. Thanks to the terminal-style approach showcased in [resume-terminal](https://github.com/antoine1003/resume-terminal?tab=readme-ov-file) for inspiration.
Built on `create-next-app`. UI inspired by Visual Studio Code. Uses `@vscode/codicons`, `@heroicons/react`, and `lucide-react`.
