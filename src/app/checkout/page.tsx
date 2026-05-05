"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart";
import { Header } from "@/components/Header";
import { useEffect, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { createOrderAction } from "./actions";

export default function CheckoutPage() {
  const { items, totalPrice, clear } = useCart();
  const [mounted, setMounted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const [sameShipping, setSameShipping] = useState(true);
  const router = useRouter();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <main className="min-h-screen bg-white">
        <Header />
      </main>
    );
  }

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-white">
        <Header />
        <div className="text-center py-20">
          <p className="text-gray-500 mb-6">Carrello vuoto.</p>
          <Link href="/prodotti" className="text-blue-600 hover:underline">
            Vai ai prodotti
          </Link>
        </div>
      </main>
    );
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    const fd = new FormData(e.currentTarget);

    const billing = {
      first_name: String(fd.get("first_name")),
      last_name: String(fd.get("last_name")),
      email: String(fd.get("email")),
      phone: String(fd.get("phone")),
      address_1: String(fd.get("address_1")),
      city: String(fd.get("city")),
      postcode: String(fd.get("postcode")),
      country: String(fd.get("country")),
    };

    const shipping = sameShipping
      ? billing
      : {
          first_name: String(fd.get("ship_first_name")),
          last_name: String(fd.get("ship_last_name")),
          address_1: String(fd.get("ship_address_1")),
          city: String(fd.get("ship_city")),
          postcode: String(fd.get("ship_postcode")),
          country: String(fd.get("ship_country")),
        };

    startTransition(async () => {
      const result = await createOrderAction({
        items: items.map((i) => ({ productId: i.productId, quantity: i.quantity })),
        billing,
        shipping,
        note: String(fd.get("note") || ""),
      });

      if (result.ok) {
        clear();
        // Redirect a pagina pagamento WooCommerce
        window.location.href = result.paymentUrl;
      } else {
        setError(result.error);
      }
    });
  };

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <div className="max-w-5xl mx-auto px-6 py-10">
        <Link href="/carrello" className="text-sm text-gray-500 hover:text-gray-900 mb-6 inline-block">
          ← Torna al carrello
        </Link>
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="font-bold text-lg text-gray-900 mb-4">Dati di fatturazione</h2>
              <div className="grid grid-cols-2 gap-3">
                <Input name="first_name" label="Nome" required />
                <Input name="last_name" label="Cognome" required />
                <Input name="email" label="Email" type="email" required />
                <Input name="phone" label="Telefono" required />
                <Input name="address_1" label="Indirizzo" required full />
                <Input name="city" label="Città" required />
                <Input name="postcode" label="CAP" required />
                <Select name="country" label="Paese" required defaultValue="IT" full>
                  <option value="IT">Italia</option>
                  <option value="FR">Francia</option>
                  <option value="DE">Germania</option>
                  <option value="ES">Spagna</option>
                  <option value="CH">Svizzera</option>
                </Select>
              </div>
            </section>

            <section>
              <label className="flex items-center gap-2 mb-4">
                <input
                  type="checkbox"
                  checked={sameShipping}
                  onChange={(e) => setSameShipping(e.target.checked)}
                  className="rounded"
                />
                <span className="text-sm font-medium text-gray-700">
                  Spedire allo stesso indirizzo di fatturazione
                </span>
              </label>

              {!sameShipping && (
                <div className="grid grid-cols-2 gap-3">
                  <Input name="ship_first_name" label="Nome" required />
                  <Input name="ship_last_name" label="Cognome" required />
                  <Input name="ship_address_1" label="Indirizzo" required full />
                  <Input name="ship_city" label="Città" required />
                  <Input name="ship_postcode" label="CAP" required />
                  <Select name="ship_country" label="Paese" required defaultValue="IT" full>
                    <option value="IT">Italia</option>
                    <option value="FR">Francia</option>
                    <option value="DE">Germania</option>
                    <option value="ES">Spagna</option>
                    <option value="CH">Svizzera</option>
                  </Select>
                </div>
              )}
            </section>

            <section>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Note ordine (opzionale)
              </label>
              <textarea
                name="note"
                rows={3}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-gray-900"
              />
            </section>
          </div>

          <aside className="border border-gray-200 rounded-lg p-6 h-fit sticky top-24">
            <h2 className="font-bold text-lg text-gray-900 mb-4">Il tuo ordine</h2>
            <div className="space-y-3 mb-4 pb-4 border-b border-gray-200">
              {items.map((item) => (
                <div key={item.productId} className="flex justify-between text-sm">
                  <span className="text-gray-700 line-clamp-1">
                    {item.name} <span className="text-gray-400">×{item.quantity}</span>
                  </span>
                  <span className="font-semibold ml-2 shrink-0">
                    €{(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex justify-between font-bold text-gray-900 text-lg mb-6">
              <span>Totale</span>
              <span>€{totalPrice().toFixed(2)}</span>
            </div>
            <p className="text-xs text-gray-500 mb-4">
              Verrai reindirizzato alla pagina di pagamento sicura per completare l&apos;ordine.
            </p>
            <button
              type="submit"
              disabled={isPending}
              className="w-full bg-gray-900 text-white font-semibold py-3 rounded hover:bg-gray-700 transition disabled:opacity-50"
            >
              {isPending ? "Creazione ordine..." : "Conferma e paga"}
            </button>
            {error && (
              <p className="mt-3 text-sm text-red-600 bg-red-50 p-3 rounded">{error}</p>
            )}
          </aside>
        </form>
      </div>
    </main>
  );
}

function Input({
  name,
  label,
  type = "text",
  required,
  full,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  full?: boolean;
}) {
  return (
    <div className={full ? "col-span-2" : ""}>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-gray-900"
      />
    </div>
  );
}

function Select({
  name,
  label,
  required,
  full,
  defaultValue,
  children,
}: {
  name: string;
  label: string;
  required?: boolean;
  full?: boolean;
  defaultValue?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={full ? "col-span-2" : ""}>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <select
        name={name}
        required={required}
        defaultValue={defaultValue}
        className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-gray-900 bg-white"
      >
        {children}
      </select>
    </div>
  );
}
