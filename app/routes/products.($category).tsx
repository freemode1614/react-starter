import { Link, useParams } from "react-router";
import type { Route } from "./+types/products.($category)";

export function meta({ params }: Route.MetaArgs) {
  return [
    { title: params.category ? `Products: ${params.category}` : "Products" },
  ];
}

export default function ProductsCategory() {
  const { category } = useParams();
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        Category: {category || "All Products"}
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        {category
          ? `Showing products in "${category}" category.`
          : "Showing all products. Click a category above to filter."}
      </p>
      <Link
        to="/products"
        className="text-gray-500 hover:text-gray-700 dark:text-gray-400"
      >
        ← Back to Products
      </Link>
    </div>
  );
}
