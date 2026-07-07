export default function PreferencesSettings() {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
        Preferences
      </h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-gray-700 dark:text-gray-300">Dark Mode</span>
          <button
            type="button"
            role="switch"
            aria-checked="false"
            className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 dark:bg-gray-700"
          >
            <span className="translate-x-1 inline-block h-4 w-4 transform rounded-full bg-white" />
          </button>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-700 dark:text-gray-300">
            Notifications
          </span>
          <button
            type="button"
            role="switch"
            aria-checked="true"
            className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600"
          >
            <span className="translate-x-6 inline-block h-4 w-4 transform rounded-full bg-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
