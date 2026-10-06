import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";

type PageProps = {
  /** Main heading for the page */
  title?: React.ReactNode;
  /** Intro paragraph rendered under the heading */
  description?: React.ReactNode;
  /** Optional "← Back to …" footer link */
  backTo?: { to: string; label: string };
  children: React.ReactNode;
};

/**
 * Top-level page shell: full-height background, centered container, optional
 * heading + description, and a back link in the footer.
 *
 * Layout routes that only wrap children (no title of their own) can still use
 * this as a plain shell: `<Page><Outlet /></Page>`.
 */
export function Page({ title, description, backTo, children }: PageProps) {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        {title && (
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {title}
          </h1>
        )}
        {description && (
          <p className="text-gray-600 dark:text-gray-400 mb-8">{description}</p>
        )}
        {children}
        {backTo && (
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link
              to={backTo.to}
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              {backTo.label}
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
