"use client";

import { useTransition } from "react";

export function RemoveButton({ action }: { action: () => Promise<void> }) {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      type="button"
      onClick={() => startTransition(action)}
      className="py-2 px-4 bg-gray-100 border border-gray-400 rounded-sm text-base cursor-pointer"
    >
      {isPending ? "Removing..." : "Remove"}
    </button>
  );
}
