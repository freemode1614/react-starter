import { Link } from "react-router";
import type { Route } from "./+types/blog";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "Blog" },
    { name: "description", content: "Blog index page" },
  ];
}

const posts = [
  { slug: "getting-started", title: "Getting Started with React Router v8" },
  { slug: "fs-routes-deep-dive", title: "Deep Dive into File System Routes" },
  { slug: "spa-mode-guide", title: "SPA Mode Complete Guide" },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Blog
        </h1>
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                to={`/blog/${post.slug}`}
                className="text-blue-600 dark:text-blue-400 hover:underline text-lg"
              >
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
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
