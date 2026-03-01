# Alex Orri Ingvarsson — Portfolio

Personal portfolio site built with a dark terminal-inspired aesthetic.

## Tech Stack

- **React 19** + **TypeScript**
- **Vite** — build tool & dev server
- **TailwindCSS 3** — utility-first styling
- **Framer Motion** — animations with `prefers-reduced-motion` support
- **React Router DOM** — client-side routing
- **Zustand** — theme state (dark/light with localStorage)
- **react-helmet-async** — per-page SEO meta tags
- **gray-matter** + **ReactMarkdown** — blog pipeline from Markdown files

## Local Development

```bash
npm install --legacy-peer-deps
npm run dev          # http://localhost:5173
npm run build        # TypeScript check + production build
npm run preview      # Preview production build locally
npm run lint         # ESLint
npm run format       # Prettier
```

> `--legacy-peer-deps` is required because `react-helmet-async` declares a peer dependency on React 16/17/18 but works fine with React 19.

## Docker

```bash
docker compose up --build   # http://localhost:3000
```

The Docker setup uses a multi-stage build (Node 20 + nginx Alpine) with SPA fallback routing, gzip compression, and security headers.

## Adding Blog Posts

1. Create a Markdown file in `src/data/blog/` (e.g. `my-post.md`) with YAML frontmatter:

   ```markdown
   ---
   title: "My Post Title"
   date: "2026-01-15"
   excerpt: "A short description."
   tags: ["tag1", "tag2"]
   readingTime: "5 min read"
   ---

   Post content here...
   ```

2. Register it in `src/data/blog/index.ts` — import the raw file and add it to the `blogPosts` array and `rawPosts` map.

3. The post will appear on the homepage blog grid and at `/blog/my-post`.

## License

MIT
