import { Link, Outlet } from "react-router";

export default function DashboardLayout() {
  return (
    <div className="min-h-screen">
      <nav className="border-b p-4 flex gap-4 items-center">
        <Link to="/" className="text-gray-500 hover:text-gray-700 mr-4">
          ← Home
        </Link>
        <Link to="/dashboard" className="text-blue-600 hover:underline">
          Overview
        </Link>
        <Link
          to="/dashboard/settings"
          className="text-blue-600 hover:underline"
        >
          Settings
        </Link>
      </nav>
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
}
