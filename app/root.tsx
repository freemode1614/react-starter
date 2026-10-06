import {
  isRouteErrorResponse,
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import type { Route } from "./+types/root";
import { ThemeToggle } from "./components/theme-toggle";
import "./app.css";

// Runs before paint so the correct theme class is set without a flash
// (prefers-color-scheme as default, localStorage override wins).
const themeScript = `(function(){try{var t=localStorage.getItem("theme");var d=t?t==="dark":matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.classList.toggle("dark",d);}catch(e){}})();`;

// Default document title for the initial HTML shell (before any route's
// meta() runs). Child routes override it with their own `title`.
export function meta(_: Route.MetaArgs) {
  return [
    { title: "React fs-routes SPA" },
    {
      name: "description",
      content: "React Router v8 + fs-routes SPA template",
    },
  ];
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* biome-ignore lint/security/noDangerouslySetInnerHtml: static constant, not user-controlled — required for a pre-paint inline script */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <>
      <Outlet />
      <ThemeToggle />
    </>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="flex min-h-screen items-center justify-center p-4">
      <div className="mx-auto w-full max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">{message}</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">{details}</p>
        {stack && (
          <pre className="w-full p-4 mb-6 overflow-x-auto rounded-lg bg-gray-100 dark:bg-gray-800">
            <code>{stack}</code>
          </pre>
        )}
        <Link
          to="/"
          className="font-medium text-blue-600 hover:underline dark:text-blue-400"
        >
          ← Back to home
        </Link>
      </div>
      <ThemeToggle />
    </main>
  );
}
