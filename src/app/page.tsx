import Link from "next/link";
import Image from "next/image";
import { wc } from "@/lib/woocommerce";

export default async function Home() {
  const [products, categories] = await Promise.all([
    wc.getProducts({ per_page: "6", featured: "true" }).catch(() => wc.getProducts({ per_page: "6" })),
    wc.getCategories(),
  ]);

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <div className="font-bold text-xl tracking-tight text-gray-900">LORENZ MARINE</div>
        <nav className="flex gap-6 text-sm text-gray-600">
          <Link href="/prodotti" className="hover:text-gray-900">Prodotti</Link>
          <Link href="/contatti" className="hover:text-gray-900">Contatti</Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="bg-gray-900 text-white px-6 py-20 text-center">
        <p className="text-sm uppercase tracking-widest text-gray-400 mb-3">Dal 1974</p>
        <h1 className="text-4xl font-bold mb-4">Strumentazione Elettronica Navale</h1>
        <p className="text-gray-400 max-w-xl mx-auto mb-8">
          Chartplotter, ecoscandagli, radar e accessori per la pesca professionale e il diporto.
        </p>
        <Link
          href="/prodotti"
          className="inline-block bg-white text-gray-900 font-semibold px-8 py-3 rounded hover:bg-gray-100 transition"
        >
          Scopri i prodotti
        </Link>
      </section>

      {/* Categories */}
      {categories.length > 0 && (
        <section className="px-6 py-12 max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Categorie</h2>
          <div className="flex flex-wrap gap-3">
            {categories.filter(c => c.count > 0).map((cat) => (
              <Link
                key={cat.id}
                href={`/prodotti?categoria=${cat.slug}`}
                className="px-4 py-2 border border-gray-200 rounded-full text-sm text-gray-700 hover:border-gray-900 hover:text-gray-900 transition"
              >
                {cat.name} ({cat.count})
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Products */}
      <section className="px-6 py-8 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Prodotti in evidenza</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition line-clamp-2">{p.name}</h3>
                {p.price && (
                  <p className="mt-1 text-lg font-bold text-gray-900">€{p.price}</p>
                )}
                {!p.price && (
                  <p className="mt-1 text-sm text-gray-500">Prezzo su richiesta</p>
                )}
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/prodotti"
            className="inline-block border border-gray-900 text-gray-900 font-semibold px-8 py-3 rounded hover:bg-gray-900 hover:text-white transition"
          >
            Tutti i prodotti
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 px-6 py-8 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Lorenz Marine S.r.l. — Via Maestri del lavoro, 8 — Varazze (SV)</p>
      </footer>
    </main>
  );
}
