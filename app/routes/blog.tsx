import { Outlet } from "react-router";
import { Page } from "../components/page";
import type { Route } from "./+types/blog";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "Blog" },
    { name: "description", content: "Blog index page" },
  ];
}

// Layout for /blog/* — renders <Outlet /> so child routes
// (blog._index.tsx, blog.$slug.tsx) can render inside it.
export default function BlogLayout() {
  return (
    <Page>
      <Outlet />
    </Page>
  );
}
