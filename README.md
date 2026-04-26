# RustDesk Server List

A minimal single-page application built with React + Vite to display a list of self-hosted RustDesk relay servers. Handy when you and your friends run multiple servers across different locations and need a central place to check IPs and keys.

## Why?

When you have 4–5 self-hosted RustDesk servers spread across different machines and networks — some turned on, some off depending on need — it gets annoying to remember which server is where and what its public key is. This page solves that by putting everything in one place.

## Tech Stack

- **React** — UI
- **Vite** — Build tooling & dev server
- **Static deployment** — No backend needed; deploy to GitHub Pages, Vercel, Netlify, or anywhere that serves static files

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm or yarn

### Setup

```bash
# Clone the repo
git clone https://github.com/<your-username>/rustdesk-server-list.git
cd rustdesk-server-list

# Install dependencies
npm install

# Start dev server
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder — deploy it wherever you like.

## Configuration

Server details are defined in a config file (e.g. `src/servers.json`). Example:

```json
[
  {
    "name": "Server Alpha",
    "location": "Bangalore, IN",
    "ip": "203.0.113.10",
    "port": 21117,
    "key": "your-public-key-here",
    "status": "active"
  },
  {
    "name": "Server Beta",
    "location": "Frankfurt, DE",
    "ip": "198.51.100.20",
    "port": 21117,
    "key": "another-public-key-here",
    "status": "inactive"
  }
]
```

To update the server list, edit this file and redeploy.

## Deployment

Since this is a fully static site, you can deploy it with any of these:

- **GitHub Pages** — push to `gh-pages` branch or use GitHub Actions
- **Vercel / Netlify** — connect the repo and it auto-deploys on push
- **Any static host** — just upload the `dist/` folder

## License

MIT