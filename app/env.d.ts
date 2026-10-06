/// <reference types="vite/client" />

/**
 * Client-visible environment variables use the `APP_` prefix (configured via
 * `envOptions.envPrefix` in vite.config.ts) and are exposed through
 * `import.meta.env`. See `.env.example` for the current set.
 */
interface ImportMetaEnv {
  /** Base URL of the Petstore API used by the generated client (app/api/petstore.ts) */
  readonly APP_PETSTORE_BASE_URL?: string;
  /** Hosted OpenAPI spec URL used by apiCodeGenPlugin (vite.config.ts) */
  readonly APP_PETSTORE_SPEC_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
