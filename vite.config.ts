import { apiCodeGenPlugin } from "@moccona/apicodegen/vite";
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  // APP_-prefixed variables from .env / the process environment
  // (see .env.example). The same variables are exposed to the client
  // bundle below via `envOptions.envPrefix`.
  const env = loadEnv(mode, process.cwd(), "APP_");

  // Generates app/api/petstore.ts from the hosted OpenAPI spec on every
  // dev/build start. The generated file is committed, so if codegen fails
  // (e.g. no network), Vite logs a warning and continues with the existing
  // file. Point `spec`/`baseURL` at your own API to use this workflow.
  const petstoreApi = {
    name: "petstore",
    spec:
      env.APP_PETSTORE_SPEC_URL ??
      "https://petstore.swagger.io/v2/swagger.json",
    output: "app/api/petstore.ts",
    adaptor: "fetch" as const,
    baseURL: env.APP_PETSTORE_BASE_URL ?? "https://petstore.swagger.io/v2",
    // `pnpm typecheck` already covers the generated file.
    typeCheck: false,
  };

  return {
    plugins: [tailwindcss(), apiCodeGenPlugin([petstoreApi]), reactRouter()],
    resolve: {
      tsconfigPaths: true,
    },
    // Expose APP_-prefixed variables to the client bundle as
    // import.meta.env.APP_* (typed in app/env.d.ts).
    envOptions: {
      envPrefix: "APP_",
    },
  };
});
