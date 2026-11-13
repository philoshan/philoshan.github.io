import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-4 dark:bg-slate-950">
      <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">404</p>
      <h1 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-slate-50">Page not found</h1>
      <Link href="/ko" className="mt-6 text-sm font-medium text-indigo-600 underline-offset-4 hover:underline dark:text-indigo-400">
        Go home (KO)
      </Link>
    </div>
  );
}
