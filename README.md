# React Router v8 + fs-routes SPA

A minimal, production-ready **SPA** template built with [React Router v8](https://reactrouter.com/) using
**file-based routing** (`@react-router/fs-routes`) and **SPA mode** (`ssr: false`).

> 📖 Route naming conventions (`_index`, `$param`, `()`, `[]`, splat `…`) are documented in [AGENTS.md](./AGENTS.md).

## Features

- 🧭 File-based routing via `@react-router/fs-routes` (flat routes, no `routes.js` bookkeeping)
- ⚡️ SPA mode — pure static output, deploy `build/client/` to any static host
- ⚡️ Hot Module Replacement (HMR) in development
- 📦 Per-route code splitting (each route is its own chunk)
- 🔒 TypeScript with fully typed routes (`./+types/<file>`, `useMatches`, typed `to`/`Link`)
- 🎨 Tailwind CSS v4 with class-based **dark mode** (pre-paint theme script + toggle button)
- 🧩 Shared component layer (`app/components/`: Page, Button, Card, Badge, Input, Spinner, ThemeToggle)
- 🖼️ [lucide-react](https://lucide.dev/) icons
- 🛡️ Error handling: root `ErrorBoundary` (demo: `/boom`) + catch-all 404 page (`$.tsx`)
- 📦 Self-hosted Inter font (no runtime network dependency)
- 🔌 API client codegen: OpenAPI spec → typed fetch client via `@moccona/apicodegen`
- 🧪 Testing: Vitest + React Testing Library (+ `react-router`'s `createRoutesStub`)
- 🐳 Docker + nginx image with SPA fallback, gzip, and correct cache headers

## Requirements

- Node.js >= 20
- pnpm (version is pinned via the `packageManager` field; Corepack works out of the box)

## Getting Started

```bash
pnpm install
pnpm dev
```

Your application will be available at `http://localhost:5173`.

## Scripts

| Command               | Purpose                                             |
| --------------------- | --------------------------------------------------- |
| `pnpm dev`            | Start dev server with HMR (http://localhost:5173)   |
| `pnpm build`          | Production build → `build/client/` (static files)   |
| `pnpm start`          | Preview the production build (http://localhost:3000)|
| `pnpm typecheck`      | Generate route types + TypeScript check             |
| `pnpm check`          | Biome lint + format (auto-fix)                      |
| `pnpm check:ci`       | Biome in CI mode (fails on issues, no auto-fix)     |
| `pnpm test`           | Run tests once (Vitest + React Testing Library)     |
| `pnpm test:watch`     | Run tests in watch mode                             |
| `pnpm api:gen`        | Regenerate `app/api/petstore.ts` via the apicodegen CLI |

## Environment Variables

`.env` files are loaded from the project root. This project uses the **`APP_`**
prefix instead of Vite's default `VITE_` (set via `envOptions.envPrefix` in
`vite.config.ts`), so only `APP_*` variables are exposed to the client bundle:

```bash
# .env.example → copy to .env and adjust
APP_PETSTORE_BASE_URL=https://petstore.swagger.io/v2
APP_PETSTORE_SPEC_URL=https://petstore.swagger.io/v2/swagger.json
```

- Access them with `import.meta.env.APP_PETSTORE_BASE_URL` — the `ImportMetaEnv`
  interface in `app/env.d.ts` provides types and autocomplete.
- `vite.config.ts` reads the same variables with `loadEnv(mode, process.cwd(), "APP_")`
  so the apicodegen plugin can be configured from the environment too. If you
  change `APP_PETSTORE_*`, restart `pnpm dev` (or run `pnpm api:gen`) to
  regenerate the client against the new spec/base URL.

## Project Structure

```
.
├── .env.example          # APP_-prefixed env vars (copy to .env)
├── vitest.config.ts      # Standalone test config (no app plugins)
└── app/
    ├── root.tsx              # Root layout + root ErrorBoundary + pre-paint theme script
    ├── entry.client.tsx      # Client bootstrap (hydration, global error hooks)
    ├── env.d.ts              # ImportMetaEnv typing for APP_* variables
    ├── app.css               # Global styles (Tailwind v4, class-based dark mode)
    ├── routes.ts             # Route config — flatRoutes()
    ├── routes/               # All route files (see AGENTS.md for conventions)
    │   ├── _index.tsx
    │   ├── about.tsx
    │   ├── $.tsx             # Catch-all / 404 (maps to `*`)
    │   ├── boom.tsx          # Always throws — demos the root ErrorBoundary
    │   ├── api-demo.tsx      # /api-demo — consumes the generated API client
    │   ├── blog.tsx          # Layout for /blog/*
    │   ├── blog._index.tsx   # /blog
    │   ├── blog.$slug.tsx    # /blog/:slug
    │   ├── dashboard.tsx     # Layout for /dashboard/*
    │   ├── docs.tsx          # /docs — starter guide
    │   └── …
    ├── components/         # Shared UI: Page, Button, Card, Badge, Input, Spinner, ThemeToggle
    ├── api/
    │   └── petstore.ts     # GENERATED from the OpenAPI spec — do not hand-edit
    ├── tests/              # Vitest + RTL tests (never put tests in app/routes/)
    └── welcome/            # Welcome screen (not routes)
```

## API Client Codegen

The starter ships [@moccona/apicodegen](https://github.com/freemode1614/api-codegen),
which generates a **typed fetch client** from an OpenAPI spec. The sample config
points at the public [Swagger Petstore](https://petstore.swagger.io/) and is
consumed by the `/api-demo` route (live data, loading and error states).

### How it works

1. `vite.config.ts` registers `apiCodeGenPlugin` with a hosted spec URL and an
   output file.
2. On every `pnpm dev` / `pnpm build` start, the plugin fetches the spec and
   (re)writes `app/api/petstore.ts`.
3. Routes import the generated functions — typed params and responses, no fetch
   boilerplate.

To point it at your own API, edit the `petstoreApi` entry in `vite.config.ts`:

```ts
apiCodeGenPlugin([
  {
    name: "my-api",
    spec: "https://api.example.com/openapi.json", // any hosted OpenAPI spec
    output: "app/api/my-api.ts",
    adaptor: "fetch", // or "axios"
    baseURL: "https://api.example.com",
    typeCheck: false, // `pnpm typecheck` already covers generated files
  },
])
```

Or regenerate via the CLI without starting Vite:

```bash
pnpm api:gen
# equivalent to:
npx apicodegen https://api.example.com/openapi.json \
  -o app/api/my-api.ts -a fetch -b https://api.example.com
```

### Caveats (v0.1.1)

- **Specs must be hosted** (http/https URLs). Despite the docs saying “file path
  or URL”, the CLI and Vite plugin cannot read local spec files in v0.1.1.
- Codegen runs on every Vite start (dev and build, client and SSR environments)
  and needs network access. If it fails, Vite logs the error and continues with
  the committed `app/api/petstore.ts`, so offline builds still work.
- `app/api/petstore.ts` is **committed** — regenerate instead of hand-editing.
  The sample output is already Biome-formatted; after regenerating against a
  different spec, run `pnpm check`.
- Generated POST/PUT calls currently omit the `Content-Type: application/json`
  header and multipart uploads are serialized with `JSON.stringify` — work
  around both in your own code until fixed upstream.

## Testing

Tests live in `app/tests/` and run with [Vitest](https://vitest.dev/) +
[React Testing Library](https://testing-library.com/docs/react-testing-library/intro/):

```bash
pnpm test          # run once
pnpm test:watch    # watch mode
```

- `vitest.config.ts` is a **standalone** config (jsdom environment). It deliberately
  does not load `vite.config.ts`, so the React Router plugin (typegen) and the
  apicodegen plugin (network) don't run during tests.
- Route components are tested with `createRoutesStub` from `react-router`
  (see `app/tests/about.test.tsx`). The root `ErrorBoundary` is unit-tested by
  stubbing a route that throws (`app/tests/error-boundary.test.tsx`).
- The generated API client is tested with a mocked `fetch`
  (`app/tests/petstore.test.ts`).
- **Never put `*.test.tsx` files in `app/routes/`** — fs-routes would register
  them as routes.

## Building for Production

```bash
pnpm build
```

The build outputs **static files only** in `build/client/` (SPA mode — there is no
server bundle to deploy). Deploy that directory to any static host, and configure
a fallback so unknown paths serve `index.html` (client-side routing).

## Deployment

### Docker

The included `Dockerfile` builds the client bundle and serves it with nginx
(SPA fallback + gzip + cache headers already configured, see `nginx.conf`):

```bash
docker build -t my-app .

# Run the container (nginx listens on port 80)
docker run -p 3000:80 my-app
```

Works on any container platform: AWS ECS, Google Cloud Run, Azure Container Apps,
DigitalOcean App Platform, Fly.io, Railway, …

### Static hosting (DIY)

Upload `build/client/` to your static host and configure an SPA fallback
(all non-file requests → `index.html`):

- **Netlify**: `public/_redirects` with `/* /index.html 200`
- **Vercel**: `rewrites` in `vercel.json`
- **nginx**: `try_files $uri $uri/ /index.html;` (see `nginx.conf`)
- **Cloudflare Pages / S3+CloudFront**: default-root / error-document = `index.html`

## Notes

- **Error handling**: every route render error is caught by the `ErrorBoundary`
  export in `app/root.tsx` (it renders inside the root layout, so the document
  shell and styles stay intact). Visit `/boom` to see it; unknown URLs render
  the catch-all 404 page (`app/routes/$.tsx`).
- **Theming**: dark mode uses a class strategy (`.dark` on `<html>`). A pre-paint
  inline script in `root.tsx` reads `localStorage.theme` (falling back to the
  system preference) before first paint to avoid a flash; the top-right toggle
  persists the choice.
- `ssr: false` in `react-router.config.ts` enables SPA mode. The initial HTML is a
  minimal shell; content appears once the client bundle executes.
- `@react-router/node` and `isbot` are required by the dev toolchain (it still
  produces a server bundle for the dev server) even though only `build/client/`
  is deployed.

---

Built with ❤️ using React Router.
