"use client";

import { useTransition } from "react";
import { deleteProduct } from "@/app/admin/products/actions";

type DeleteButtonProps = {
  id: string;
};

export default function DeleteButton({
  id,
}: DeleteButtonProps) {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      onClick={() => {
        const confirmed = window.confirm(
          "Delete this product?"
        );

        if (!confirmed) return;

        startTransition(async () => {
          await deleteProduct(id);
        });
      }}
      disabled={isPending}
      className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-500 disabled:opacity-50"
    >
      {isPending ? "Deleting..." : "Delete"}
    </button>
  );
}