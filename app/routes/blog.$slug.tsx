import { Link, useParams } from "react-router";
import type { Route } from "./+types/blog.$slug";

export function meta({ params }: Route.MetaArgs) {
  const title = params.slug
    ?.replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
  return [{ title: `Blog: ${title}` }];
}

const postContent: Record<string, string> = {
  "getting-started":
    "React Router v8 introduces a unified routing API that works across frameworks. With fs-routes, you can define routes by file naming conventions...",
  "fs-routes-deep-dive":
    "The flatRoutes function supports _index for index routes, $param for dynamic params, _pathless for layout routes, and (optional) for optional segments...",
  "spa-mode-guide":
    "Setting ssr: false in react-router.config.ts enables SPA mode. The build outputs only static files that can be deployed to any hosting provider...",
};

export default function BlogPost() {
  const { slug } = useParams();
  const content = slug ? postContent[slug] : null;

  if (!content) {
    return (
      <div className="text-center py-16">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Post not found</h1>
        <Link to="/blog" className="text-blue-600 hover:underline">
          ← Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <article>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
        {slug?.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
      </h1>
      <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
        {content}
      </p>
      <Link
        to="/blog"
        className="text-gray-500 hover:text-gray-700 dark:text-gray-400"
      >
        ← Back to Blog
      </Link>
    </article>
  );
}
