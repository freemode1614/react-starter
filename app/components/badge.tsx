/** Small rounded chip for statuses / counts / tags. */
export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full bg-gray-100 dark:bg-gray-800 px-3 py-1 text-xs text-gray-700 dark:text-gray-300">
      {children}
    </span>
  );
}
