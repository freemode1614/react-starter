import { Link } from "react-router";
import type { Route } from "./+types/about";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "About" },
    { name: "description", content: "About this project" },
  ];
}

export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4">About</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          This is a test route for React Router v8 + fs-routes SPA mode.
        </p>
        <Link to="/" className="text-blue-600 hover:underline">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
