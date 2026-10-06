import type { Route } from "./+types/boom";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "Error Boundary Demo" },
    {
      name: "description",
      content: "A route that always throws to demo the root ErrorBoundary",
    },
  ];
}

/**
 * This route deliberately throws on every render. It is the demo page for the
 * root `ErrorBoundary` (app/root.tsx): the router catches the thrown error and
 * renders the boundary *inside* the root Layout, so the document shell
 * (title, styles, scripts) is preserved.
 *
 * Never use throwing as control flow in real code — this page exists so you
 * can see how runtime errors surface in this starter.
 */
export default function Boom() {
  throw new Error(
    "Boom! This route always throws so you can see the root ErrorBoundary in action.",
  );
}
