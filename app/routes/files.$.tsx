import { Link, useParams } from "react-router";

export default function FilesCatchAll() {
  const { "*": path } = useParams();
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Files — Splat Route
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-2">
          This file is named{" "}
          <code className="bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded text-sm">
            files.$.tsx
          </code>
          .
        </p>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          The{" "}
          <code className="bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded text-sm">
            $
          </code>{" "}
          at the end catches everything after{" "}
          <code className="bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded text-sm">
            /files/
          </code>
          .
        </p>
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mb-6">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
            Matched splat path:
          </p>
          <code className="text-green-600 dark:text-green-400 font-mono">
            {path || "(none — visited /files directly)"}
          </code>
        </div>
        <div className="space-y-2 mb-6">
          <Link
            to="/files/src/components/app.tsx"
            className="block text-blue-600 dark:text-blue-400 hover:underline"
          >
            /files/src/components/app.tsx →
          </Link>
          <Link
            to="/files/docs/guide.md"
            className="block text-blue-600 dark:text-blue-400 hover:underline"
          >
            /files/docs/guide.md →
          </Link>
        </div>
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
