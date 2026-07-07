import { Link } from "react-router";

export default function Docs() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Documentation
        </h1>
        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Getting Started
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Learn the basics of file system routing in React Router v8.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Route Conventions
            </h2>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
              <li>
                <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">
                  _index.tsx
                </code>{" "}
                — Index route (maps to{" "}
                <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">
                  /
                </code>
                )
              </li>
              <li>
                <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">
                  blog.$slug.tsx
                </code>{" "}
                — Dynamic params (maps to{" "}
                <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">
                  /blog/:slug
                </code>
                )
              </li>
              <li>
                <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">
                  settings.tsx + settings.profile.tsx
                </code>{" "}
                — Nested routes
              </li>
              <li>
                <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">
                  admin._pathless.tsx
                </code>{" "}
                — Pathless layout
              </li>
              <li>
                <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">
                  (optional).tsx
                </code>{" "}
                — Optional segment
              </li>
            </ul>
          </section>
        </div>
        <Link
          to="/"
          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 mt-8 inline-block"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
