import { Link } from "react-router";
import type { Route } from "./+types/blog._index";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "Blog" },
    { name: "description", content: "All blog posts" },
  ];
}

const posts = [
  { slug: "getting-started", title: "Getting Started with React Router v8" },
  { slug: "fs-routes-deep-dive", title: "Deep Dive into File System Routes" },
  { slug: "spa-mode-guide", title: "SPA Mode Complete Guide" },
];

export default function BlogIndex() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        Blog
      </h1>
      <ul className="space-y-3">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              to={`/blog/${post.slug}`}
              className="block rounded-lg border border-gray-200 dark:border-gray-700 p-4 text-lg text-gray-900 dark:text-white transition-colors hover:bg-gray-50 dark:hover:bg-gray-800"
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
  );
}
