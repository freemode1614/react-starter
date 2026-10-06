import { Outlet } from "react-router";
import { Page } from "../components/page";

// Layout for /products/* — note the parent renders its own <h1>; children
// (products._index.tsx, products.($category).tsx) render inside <Outlet />.
export default function ProductsLayout() {
  return (
    <Page title="Products" backTo={{ to: "/", label: "Back to Home" }}>
      <Outlet />
    </Page>
  );
}
