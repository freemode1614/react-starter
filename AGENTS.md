# AGENTS.md — React Router v8 + fs-routes SPA

## Project Structure

```
app/
├── root.tsx              # Root layout (wraps all routes)
├── app.css               # Global styles (Tailwind)
├── routes.ts             # Route config (flatRoutes)
├── routes/               # All route files
│   ├── _index.tsx
│   ├── about.tsx
│   ├── dashboard.tsx          # Layout for /dashboard/*
│   ├── dashboard._index.tsx   # Index of /dashboard
│   ├── dashboard.settings.tsx # /dashboard/settings
│   ├── blog.tsx               # Layout for /blog/*
│   ├── blog.$slug.tsx         # /blog/:slug
│   └── ...
└── welcome/              # Shared component (not routes)
```

## Route File Naming Conventions

All route files live in `app/routes/`. Use `flatRoutes` conventions:

### 1. Static Route

```
File: about.tsx          →  URL: /about
```

### 2. Index Route (`_index`)

```
File: _index.tsx              →  URL: /
File: dashboard._index.tsx    →  URL: /dashboard (index child)
```

Use `_index` to mark the default child of a parent route. Without it, visiting the parent URL shows nothing (empty `<Outlet />`).

### 3. Dynamic Parameter (`$param`)

```
File: blog.$slug.tsx    →  URL: /blog/:slug
File: users.$id.tsx     →  URL: /users/:id
```

The `$` prefix captures the URL segment as a param. Access via `useParams()`.

### 4. Splat / Catch-All (`$`)

```
File: files.$.tsx       →  URL: /files/* (matches any depth)
```

A lone `$` at the end catches everything after the path. Access via `useParams()["*"]`.

### 5. Nested Routes (`.` separator)

```
File: dashboard.tsx             →  Layout for /dashboard/*
File: dashboard.settings.tsx    →  /dashboard/settings
```

The parent file (before `.`) acts as a layout with `<Outlet />`. Children render inside it.

### 6. Pathless Layout (`_` prefix, not `_index`)

```
File: admin._pathless.tsx       →  Layout wrapper, no URL segment
File: admin._pathless._index.tsx →  /admin (index of pathless)
```

Starts with `_` but is NOT `_index`. Creates a layout wrapper without adding a URL segment.

### 7. Optional Segment (`()`)

```
File: products.(category).tsx   →  /products OR /products/:category
File: (optional-demo).tsx       →  /optional-demo
```

Parentheses make the segment optional. When omitted, the route still matches the parent path.

### 8. Escaped Segment (`[]`)

```
File: [api-v2].tsx              →  URL: /api-v2
File: ([special]).tsx           →  URL: /special (optional + escaped)
```

Square brackets escape reserved characters (`$`, `(`, `)`, `.`). The brackets are stripped from the URL.

### 9. Folder-Based Routes (Single File Only)

```
Folder: folder/
  └── index.tsx          →  /folder (single route, no children)
```

Folders can hold a **single** route file (`index.tsx` or `route.tsx`). They do **NOT** support nested children inside the folder. If you need child routes, use flat files instead:

```
app/routes/
├── folder.tsx           →  Layout for /folder/*
└── folder.detail.tsx    →  /folder/detail
```

**Never mix** a flat file with a folder of the same name — it causes a route ID collision.

## Rules

1. **Every route must export a default component.** No exceptions.
2. **Use `<Link>` for navigation**, never `<a href>`. `<Link>` does client-side routing without page reload.
3. **Parent routes with children must render `<Outlet />`.** Without it, child routes have nowhere to render.
4. **Index routes need `_index` suffix.** `dashboard.index.tsx` maps to `/dashboard/index`, NOT `/dashboard`. Use `dashboard._index.tsx` for `/dashboard`.
5. **No `<a>` tags with `href` starting with `/`.** Use `<Link to="/...">` instead.
6. **Type imports use `./+types/<filename>`.** Example: `import type { Route } from "./+types/about"`.
7. **Folder and flat file cannot coexist for the same name.** Either use `folder/route.tsx` OR `folder.tsx`, not both.

## Creating a New Route

1. Create the file in `app/routes/` following the naming convention above.
2. Export a default React component.
3. Import `type { Route }` from `./+types/<filename>` for type safety.
4. Add the route to the homepage (`_index.tsx`) navigation for easy testing.
5. Run `pnpm check` to lint/format.
6. Run `pnpm build` to verify it compiles.
7. Run `pnpm dev` and visit the route to verify it renders.

## SPA Mode Notes

- `ssr: false` in `react-router.config.ts` — all rendering is client-side.
- The build generates `build/client/` — deploy this directory as static files.
- The initial HTML is a minimal shell; content appears after JS hydrates.
- Configure your static host to fallback all routes to `index.html` (SPA routing).

## Commands

| Command | Purpose |
|---------|---------|
| `pnpm dev` | Start dev server (http://localhost:5173) |
| `pnpm build` | Production build → `build/client/` |
| `pnpm start` | Preview production build (http://localhost:3000) |
| `pnpm check` | Biome lint + format (auto-fix) |
| `pnpm lint` | Biome lint only |
| `pnpm format` | Biome format only |
| `pnpm typecheck` | TypeScript type checking |
