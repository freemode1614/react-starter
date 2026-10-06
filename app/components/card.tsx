type CardTone = "default" | "danger";

type CardProps = {
  /** Optional heading rendered at the top of the card */
  title?: React.ReactNode;
  tone?: CardTone;
  className?: string;
  children: React.ReactNode;
};

export function Card({
  title,
  tone = "default",
  className,
  children,
}: CardProps) {
  const tones: Record<CardTone, string> = {
    default: "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900",
    danger: "border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950",
  };
  return (
    <div className={`rounded-lg border p-4 ${tones[tone]} ${className ?? ""}`}>
      {title && (
        <h3
          className={`font-semibold mb-2 ${
            tone === "danger"
              ? "text-red-700 dark:text-red-300"
              : "text-gray-900 dark:text-white"
          }`}
        >
          {title}
        </h3>
      )}
      {children}
    </div>
  );
}
