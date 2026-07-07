import { Link } from "react-router";

export default function EscapedRoute() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Escaped Route
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-2">
          This file is named{" "}
          <code className="bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded text-sm">
            [api-v2].tsx
          </code>
          .
        </p>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          The square brackets escape reserved characters — this route is
          accessible at{" "}
          <code className="bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded text-sm">
            /api-v2
          </code>{" "}
          (the brackets are stripped from the URL).
        </p>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Useful when you need a URL segment that contains characters like{" "}
          <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">$</code>,{" "}
          <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">(</code>,{" "}
          <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">)</code>,
          or{" "}
          <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">.</code>{" "}
          that would otherwise be interpreted as routing syntax.
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
