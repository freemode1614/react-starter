import { Link } from "react-router";
import type { Route } from "./+types/(optional-demo)";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "Optional Route Demo" },
    { name: "description", content: "Demonstrates optional route segments" },
  ];
}

export default function OptionalDemo() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Optional Route Segment
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          This file is named{" "}
          <code className="bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded text-sm">
            (optional-demo).tsx
          </code>
          .
        </p>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          The parentheses make this segment optional — it's accessible at both{" "}
          <code className="bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded text-sm">
            /
          </code>{" "}
          (as a child of root) and{" "}
          <code className="bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded text-sm">
            /optional-demo
          </code>
          .
        </p>
        <div className="space-y-2">
          <Link
            to="/optional-demo"
            className="block text-blue-600 dark:text-blue-400 hover:underline"
          >
            Visit /optional-demo →
          </Link>
          <Link
            to="/"
            className="block text-gray-500 hover:text-gray-700 dark:text-gray-400"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
