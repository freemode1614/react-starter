import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  /** Accessible label rendered above the input */
  label?: string;
  /** Helper text rendered under the input */
  hint?: string;
};

export function Input({ label, hint, id, className, ...props }: InputProps) {
  const inputId =
    id ??
    (label ? `input-${label.toLowerCase().replace(/\s+/g, "-")}` : undefined);
  return (
    <div className="space-y-1">
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={`w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className ?? ""}`}
        {...props}
      />
      {hint && (
        <p className="text-xs text-gray-500 dark:text-gray-400">{hint}</p>
      )}
    </div>
  );
}
