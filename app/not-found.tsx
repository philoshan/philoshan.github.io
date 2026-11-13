import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-screen max-w-xl flex-col justify-center px-6 text-neutral-600 dark:text-neutral-400">
      <p className="text-sm">404 — Page not found</p>
      <Link
        href="/ko"
        className="mt-4 text-sm text-neutral-900 underline decoration-neutral-300 underline-offset-4 dark:text-neutral-100 dark:decoration-neutral-600"
      >
        ← Home
      </Link>
    </div>
  );
}
