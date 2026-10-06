/** Inline loading indicator (spinner + optional label). */
export function Spinner({ label = "Loading…" }: { label?: string }) {
  return (
    <span
      role="status"
      className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400"
    >
      <span
        aria-hidden="true"
        className="h-4 w-4 animate-spin rounded-full border-2 border-gray-300 dark:border-gray-600 border-t-blue-600"
      />
      {label}
    </span>
  );
}
