import Link from "next/link";
import Image from "next/image";
import { wc } from "@/lib/woocommerce";

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ categoria?: string }>;
}) {
  const { categoria } = await searchParams;

  const [products, categories] = await Promise.all([
    wc.getProducts({ per_page: "50", ...(categoria ? { category: categoria } : {}) }),
    wc.getCategories(),
  ]);

  const activeCategory = categories.find((c) => c.slug === categoria);

  return (
    <main className="min-h-screen bg-white">
      <header className="border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl tracking-tight text-gray-900">LORENZ MARINE</Link>
        <nav className="flex gap-6 text-sm text-gray-600">
          <Link href="/prodotti" className="hover:text-gray-900 font-semibold text-gray-900">Prodotti</Link>
          <Link href="/contatti" className="hover:text-gray-900">Contatti</Link>
        </nav>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex gap-8">
          {/* Sidebar categories */}
          <aside className="w-48 shrink-0 hidden md:block">
            <h2 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide">Categorie</h2>
            <ul className="space-y-1">
              <li>
                <Link
                  href="/prodotti"
                  className={`text-sm block py-1 ${!categoria ? "font-semibold text-gray-900" : "text-gray-600 hover:text-gray-900"}`}
                >
                  Tutti ({categories.reduce((a, c) => a + c.count, 0)})
                </Link>
              </li>
              {categories.filter(c => c.count > 0).map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/prodotti?categoria=${cat.slug}`}
                    className={`text-sm block py-1 ${categoria === cat.slug ? "font-semibold text-gray-900" : "text-gray-600 hover:text-gray-900"}`}
                  >
                    {cat.name} ({cat.count})
                  </Link>
                </li>
              ))}
            </ul>
          </aside>

          {/* Products grid */}
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">
              {activeCategory ? activeCategory.name : "Tutti i prodotti"}
              <span className="ml-2 text-base font-normal text-gray-500">({products.length})</span>
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {products.map((p) => (
                <Link key={p.id} href={`/prodotti/${p.id}`} className="group border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition">
                  {p.images[0] && (
                    <div className="relative aspect-square bg-gray-50">
                      <Image
                        src={p.images[0].src}
                        alt={p.images[0].alt || p.name}
                        fill
                        className="object-contain p-4"
                      />
                    </div>
                  )}
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition text-sm line-clamp-2">{p.name}</h3>
                    {p.price ? (
                      <p className="mt-1 font-bold text-gray-900">€{p.price}</p>
                    ) : (
                      <p className="mt-1 text-sm text-gray-500">Prezzo su richiesta</p>
                    )}
                  </div>
                </Link>
              ))}
            </div>

            {products.length === 0 && (
              <p className="text-gray-500 text-center py-20">Nessun prodotto trovato.</p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
