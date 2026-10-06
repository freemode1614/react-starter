import { Link } from "react-router";

export default function ProductsIndex() {
  const categories = ["electronics", "clothing", "books"];
  return (
    <div>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        Browse by category or view all products.
      </p>
      <ul className="space-y-2">
        {categories.map((cat) => (
          <li key={cat}>
            <Link
              to={`/products/${cat}`}
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
