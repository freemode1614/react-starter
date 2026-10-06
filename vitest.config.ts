import { defineConfig } from "vitest/config";

/**
 * Standalone Vitest config — intentionally does NOT load vite.config.ts:
 * the react-router plugin runs typegen and the apicodegen plugin hits the
 * network, neither of which unit tests need.
 */
export default defineConfig({
  test: {
    environment: "jsdom",
    setupFiles: ["./app/tests/setup.ts"],
    include: ["app/tests/**/*.test.{ts,tsx}"],
  },
});
