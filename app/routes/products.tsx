import { Outlet } from "react-router";

export default function ProductsLayout() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Products
        </h1>
        <Outlet />
      </div>
    </div>
  );
}
