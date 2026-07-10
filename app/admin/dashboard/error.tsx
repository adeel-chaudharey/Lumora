"use client";

type ErrorProps = {
  error: Error;
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 text-white">
      <h1 className="text-3xl font-bold">Something went wrong.</h1>

      <p className="text-slate-400">{error.message}</p>

      <button
        onClick={reset}
        className="rounded-lg bg-emerald-500 px-4 py-2 text-black"
      >
        Try Again
      </button>
    </div>
  );
}