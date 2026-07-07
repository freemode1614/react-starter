import { Link } from "react-router";
import { Welcome } from "../welcome/welcome";
import type { Route } from "./+types/_index";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "React Router v8 + fs-routes SPA" },
    {
      name: "description",
      content: "Testing React Router v8 with fs-routes in SPA mode",
    },
  ];
}

const testRoutes = [
  // Basic routes
  { path: "/", label: "Home (index)", group: "Basic" },
  { path: "/about", label: "About", group: "Basic" },
  // Dynamic routes
  { path: "/users/alice", label: "User Profile ($param)", group: "Dynamic" },
  { path: "/blog", label: "Blog (index)", group: "Dynamic" },
  {
    path: "/blog/getting-started",
    label: "Blog Post ($slug)",
    group: "Dynamic",
  },
  // Nested layout routes
  {
    path: "/dashboard",
    label: "Dashboard (layout + children)",
    group: "Nested",
  },
  {
    path: "/dashboard/settings",
    label: "Dashboard / Settings",
    group: "Nested",
  },
  {
    path: "/settings/profile",
    label: "Settings / Profile (layout)",
    group: "Nested",
  },
  {
    path: "/settings/preferences",
    label: "Settings / Preferences",
    group: "Nested",
  },
  // Pathless layout
  {
    path: "/admin",
    label: "Admin (pathless layout)",
    group: "Pathless",
  },
  // Optional routes
  {
    path: "/products",
    label: "Products (with optional $category)",
    group: "Optional",
  },
  {
    path: "/products/electronics",
    label: "Products / electronics (optional param)",
    group: "Optional",
  },
  {
    path: "/optional-demo",
    label: "Optional Route Demo ((name).tsx)",
    group: "Optional",
  },
  // Other
  { path: "/docs", label: "Documentation", group: "Other" },
  // Splat & escaped
  { path: "/files", label: "Files (splat/catch-all $.tsx)", group: "Splat" },
  {
    path: "/files/src/components/app.tsx",
    label: "Files / src/components/app.tsx (deep splat)",
    group: "Splat",
  },
  {
    path: "/api-v2",
    label: "API v2 (escaped [name].tsx)",
    group: "Escaped",
  },
  // Combined
  {
    path: "/special",
    label: "Special (optional+escape ([name]).tsx)",
    group: "Combined",
  },
];

export default function Home() {
  const groups = Object.entries(
    testRoutes.reduce<Record<string, typeof testRoutes>>((acc, route) => {
      const group = route.group || "Other";
      acc[group] ??= [];
      acc[group].push(route);
      return acc;
    }, {}),
  );

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <header className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            React Router v8 + fs-routes SPA
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            File-based routing in SPA mode — click any route below to navigate.
          </p>
        </header>

        {groups.map(([groupName, routes]) => (
          <section key={groupName} className="mb-8">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-3">
              {groupName}
            </h2>
            <nav className="space-y-2">
              {routes.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  className="block p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <span className="font-mono text-sm text-blue-600 dark:text-blue-400">
                    {path}
                  </span>
                  <span className="block text-gray-700 dark:text-gray-300 mt-1">
                    {label}
                  </span>
                </Link>
              ))}
            </nav>
          </section>
        ))}

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            Original Welcome Page
          </h2>
          <Welcome />
        </div>
      </div>
    </main>
  );
}
