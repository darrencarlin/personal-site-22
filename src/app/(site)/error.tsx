"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="flex flex-col items-center justify-center w-screen h-[calc(100vh-112px)] gap-4">
      <h2 className="text-2xl font-semibold">Something went wrong</h2>
      <button
        type="button"
        onClick={reset}
        className="px-4 py-2 text-sm rounded-md bg-neutral-800 hover:bg-neutral-700 transition-colors"
      >
        Try again
      </button>
    </section>
  );
}
