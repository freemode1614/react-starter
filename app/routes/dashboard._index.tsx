import { Link } from "react-router";
import { Card } from "../components/card";

export default function DashboardIndex() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">Dashboard</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Welcome to the dashboard — a nested route with its own layout.
      </p>
      <Card title="Nested routing">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          This page is <code className="text-xs">dashboard._index.tsx</code>,
          rendered inside the layout from{" "}
          <code className="text-xs">dashboard.tsx</code>. Navigate to{" "}
          <Link
            to="/dashboard/settings"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            /dashboard/settings
          </Link>{" "}
          to see a nested child route.
        </p>
      </Card>
    </div>
  );
}
