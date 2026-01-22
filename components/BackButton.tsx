"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.back()}
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-black/90 px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-black"
      aria-label="Go back"
    >
      <span aria-hidden="true">←</span>
      Back
    </button>
  );
}
