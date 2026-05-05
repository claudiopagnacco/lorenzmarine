"use client";

import { useCart, type CartItem } from "@/lib/cart";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function AddToCartButton({ item }: { item: Omit<CartItem, "quantity"> }) {
  const addItem = useCart((s) => s.addItem);
  const [added, setAdded] = useState(false);
  const router = useRouter();

  const handleAdd = () => {
    addItem(item);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="flex gap-3">
      <button
        onClick={handleAdd}
        className="flex-1 bg-gray-900 text-white font-semibold py-4 rounded hover:bg-gray-700 transition disabled:opacity-50"
        disabled={added}
      >
        {added ? "✓ Aggiunto" : "Aggiungi al carrello"}
      </button>
      <button
        onClick={() => {
          addItem(item);
          router.push("/carrello");
        }}
        className="px-6 border-2 border-gray-900 text-gray-900 font-semibold rounded hover:bg-gray-900 hover:text-white transition"
      >
        Acquista
      </button>
    </div>
  );
}
