import { StrictMode, startTransition } from "react";
import { hydrateRoot } from "react-dom/client";
import { HydratedRouter } from "react-router/dom";

// Surface unexpected runtime errors (outside React's error boundaries) to the
// console — replace with your monitoring service (Sentry, Datadog, ...) here.
window.addEventListener("error", (event) => {
  console.error("[uncaught error]", event.error ?? event.message);
});
window.addEventListener("unhandledrejection", (event) => {
  console.error("[unhandled rejection]", event.reason);
});

startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <HydratedRouter />
    </StrictMode>,
  );
});
