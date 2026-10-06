import type { ButtonHTMLAttributes } from "react";

export type ButtonVariant = "primary" | "secondary" | "ghost";

/**
 * Class builder so `<Link>` (and other elements) can share the button
 * styling: `<Link to="/" className={buttonClasses("primary")}>`.
 */
export function buttonClasses(variant: ButtonVariant = "primary") {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50";
  const variants: Record<ButtonVariant, string> = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary:
      "border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800",
    ghost: "text-blue-600 dark:text-blue-400 hover:underline",
  };
  return `${base} ${variants[variant]}`;
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

export function Button({
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={
        className
          ? `${buttonClasses(variant)} ${className}`
          : buttonClasses(variant)
      }
      {...props}
    />
  );
}
