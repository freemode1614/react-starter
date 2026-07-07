import { Link, Outlet } from "react-router";

export default function SettingsLayout() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Settings
        </h1>
        <div className="flex gap-6">
          <nav className="w-48 space-y-2">
            <Link
              to="/settings/profile"
              className="block text-blue-600 dark:text-blue-400 hover:underline"
            >
              Profile
            </Link>
            <Link
              to="/settings/preferences"
              className="block text-blue-600 dark:text-blue-400 hover:underline"
            >
              Preferences
            </Link>
          </nav>
          <div className="flex-1">
            <Outlet />
          </div>
        </div>
        <Link
          to="/"
          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 mt-8 inline-block"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
