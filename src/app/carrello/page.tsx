"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/lib/cart";
import { Header } from "@/components/Header";
import { useEffect, useState } from "react";

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice } = useCart();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <main className="min-h-screen bg-white">
        <Header />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <div className="max-w-5xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Carrello</h1>

        {items.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 mb-6">Il tuo carrello è vuoto.</p>
            <Link
              href="/prodotti"
              className="inline-block bg-gray-900 text-white font-semibold px-6 py-3 rounded hover:bg-gray-700 transition"
            >
              Vai al catalogo
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <div key={item.productId} className="flex gap-4 border border-gray-200 rounded-lg p-4">
                  <div className="relative w-24 h-24 bg-gray-50 rounded shrink-0">
                    {item.image && (
                      <Image src={item.image} alt={item.name} fill className="object-contain p-2" />
                    )}
                  </div>
                  <div className="flex-1">
                    <Link
                      href={`/prodotti/${item.productId}`}
                      className="font-semibold text-gray-900 hover:text-blue-600 line-clamp-2"
                    >
                      {item.name}
                    </Link>
                    <p className="text-gray-600 mt-1">€{item.price.toFixed(2)}</p>
                    <div className="flex items-center gap-2 mt-3">
                      <button
                        onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                        className="w-8 h-8 border border-gray-300 rounded hover:border-gray-900"
                      >−</button>
                      <span className="w-10 text-center font-semibold">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                        className="w-8 h-8 border border-gray-300 rounded hover:border-gray-900"
                      >+</button>
                      <button
                        onClick={() => removeItem(item.productId)}
                        className="ml-4 text-sm text-red-600 hover:underline"
                      >
                        Rimuovi
                      </button>
                    </div>
                  </div>
                  <p className="font-bold text-gray-900 self-start">
                    €{(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>

            <aside className="border border-gray-200 rounded-lg p-6 h-fit sticky top-24">
              <h2 className="font-bold text-lg text-gray-900 mb-4">Riepilogo</h2>
              <div className="space-y-2 text-sm text-gray-600 mb-4 pb-4 border-b border-gray-200">
                <div className="flex justify-between">
                  <span>Subtotale</span>
                  <span>€{totalPrice().toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Spedizione</span>
                  <span className="text-gray-400">Calcolata al checkout</span>
                </div>
              </div>
              <div className="flex justify-between font-bold text-gray-900 text-lg mb-6">
                <span>Totale</span>
                <span>€{totalPrice().toFixed(2)}</span>
              </div>
              <Link
                href="/checkout"
                className="block w-full text-center bg-gray-900 text-white font-semibold py-3 rounded hover:bg-gray-700 transition"
              >
                Procedi al checkout
              </Link>
            </aside>
          </div>
        )}
      </div>
    </main>
  );
}
