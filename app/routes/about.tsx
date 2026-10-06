import { Page } from "../components/page";
import type { Route } from "./+types/about";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "About" },
    { name: "description", content: "About this project" },
  ];
}

export default function About() {
  return (
    <Page
      title="About"
      description="A production-ready React SPA starter."
      backTo={{ to: "/", label: "Back to Home" }}
    >
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
        This starter ships the pieces a real project needs: file-based routing
        (React Router v8 + fs-routes), error handling, a typed API client
        generated from a hosted OpenAPI spec, dark mode, a shared component
        layer, environment configuration, testing, and deployment config (Docker
        + nginx + CI).
      </p>
    </Page>
  );
}
