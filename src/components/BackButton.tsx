"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/")}
      className="text-white cursor-pointer text-sm mb-6 inline-block"
    >
      ← Back to Home
    </button>
  );
}
