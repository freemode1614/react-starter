import { Link } from "react-router";

export default function OptionalEscape() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Optional + Escape Combined
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-2">
          This file is named{" "}
          <code className="bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded text-sm">
            ([special]).tsx
          </code>
          .
        </p>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          The parentheses make it optional, and the square brackets escape the
          reserved word "special" — so the URL is{" "}
          <code className="bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded text-sm">
            /special
          </code>{" "}
          or just omitted from the parent path.
        </p>
        <Link
          to="/"
          className="text-gray-500 hover:text-gray-700 dark:text-gray-400"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
