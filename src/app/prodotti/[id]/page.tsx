import Link from "next/link";
import Image from "next/image";
import { wc } from "@/lib/woocommerce";
import { sanitize } from "@/lib/sanitize";
import { notFound } from "next/navigation";

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = await wc.getProduct(Number(id)).catch(() => null);

  if (!product) notFound();

  const shortDesc = product.short_description ? sanitize(product.short_description) : "";
  const fullDesc = product.description ? sanitize(product.description) : "";

  return (
    <main className="min-h-screen bg-white">
      <header className="border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl tracking-tight text-gray-900">LORENZ MARINE</Link>
        <nav className="flex gap-6 text-sm text-gray-600">
          <Link href="/prodotti" className="hover:text-gray-900">Prodotti</Link>
          <Link href="/contatti" className="hover:text-gray-900">Contatti</Link>
        </nav>
      </header>

      <div className="max-w-5xl mx-auto px-6 py-10">
        <Link href="/prodotti" className="text-sm text-gray-500 hover:text-gray-900 mb-6 inline-block">← Torna ai prodotti</Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Image */}
          <div className="relative aspect-square bg-gray-50 rounded-lg overflow-hidden border border-gray-100">
            {product.images[0] ? (
              <Image
                src={product.images[0].src}
                alt={product.images[0].alt || product.name}
                fill
                className="object-contain p-8"
                priority
              />
            ) : (
              <div className="flex items-center justify-center h-full text-gray-300 text-6xl">📷</div>
            )}
          </div>

          {/* Info */}
          <div>
            <div className="flex flex-wrap gap-2 mb-3">
              {product.categories.map((c) => (
                <Link
                  key={c.id}
                  href={`/prodotti?categoria=${c.slug}`}
                  className="text-xs uppercase tracking-wide text-blue-600 hover:underline"
                >
                  {c.name}
                </Link>
              ))}
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>

            {product.price ? (
              <div className="mb-6">
                {product.sale_price && product.regular_price !== product.sale_price ? (
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-bold text-gray-900">€{product.sale_price}</span>
                    <span className="text-lg text-gray-400 line-through">€{product.regular_price}</span>
                  </div>
                ) : (
                  <span className="text-3xl font-bold text-gray-900">€{product.price}</span>
                )}
              </div>
            ) : (
              <p className="text-gray-500 mb-6">Prezzo su richiesta</p>
            )}

            {shortDesc && (
              <div
                className="text-gray-600 text-sm leading-relaxed mb-6 prose prose-sm max-w-none"
                dangerouslySetInnerHTML={{ __html: shortDesc }}
              />
            )}

            {product.purchasable && product.price ? (
              <button className="w-full bg-gray-900 text-white font-semibold py-4 rounded hover:bg-gray-700 transition">
                Aggiungi al carrello
              </button>
            ) : (
              <a
                href={`mailto:info@lorenzmarine.com?subject=Richiesta%20info%20${encodeURIComponent(product.name)}`}
                className="block w-full text-center border-2 border-gray-900 text-gray-900 font-semibold py-4 rounded hover:bg-gray-900 hover:text-white transition"
              >
                Richiedi informazioni
              </a>
            )}

            <a
              href={product.permalink}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center text-sm text-gray-400 hover:text-gray-600 mt-3"
            >
              Vedi sul sito originale →
            </a>
          </div>
        </div>

        {/* Full description */}
        {fullDesc && (
          <div className="mt-12 border-t border-gray-200 pt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Descrizione</h2>
            <div
              className="prose prose-sm max-w-none text-gray-600"
              dangerouslySetInnerHTML={{ __html: fullDesc }}
            />
          </div>
        )}
      </div>
    </main>
  );
}
