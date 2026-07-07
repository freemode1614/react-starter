export default function AdminDashboard() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Admin Overview
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border">
          <h3 className="text-lg font-semibold mb-2">Users</h3>
          <p className="text-3xl font-bold text-blue-600">1,234</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border">
          <h3 className="text-lg font-semibold mb-2">Posts</h3>
          <p className="text-3xl font-bold text-green-600">567</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border">
          <h3 className="text-lg font-semibold mb-2">Views</h3>
          <p className="text-3xl font-bold text-purple-600">89K</p>
        </div>
      </div>
    </div>
  );
}
