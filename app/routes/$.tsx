import { Home } from "lucide-react";
import { Link } from "react-router";
import { buttonClasses } from "../components/button";
import type { Route } from "./+types/$";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "404 — Page Not Found" },
    { name: "robots", content: "noindex" },
  ];
}

// Catch-all route (maps to `*`) — rendered when no route matches the URL.
// In SSR/prerender mode you'd also add:
//   export function loader() {
//     return data({}, 404);
//   }
// so crawlers receive a real 404 status.
export default function NotFound() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
      <div className="text-center px-4">
        <p className="text-7xl font-bold text-gray-200 dark:text-gray-700 mb-4">
          404
        </p>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Page not found
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          The page you are looking for does not exist.
        </p>
        <Link to="/" className={buttonClasses("primary")}>
          <Home className="h-4 w-4" aria-hidden="true" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
