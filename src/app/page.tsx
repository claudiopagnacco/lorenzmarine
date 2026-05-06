import Link from "next/link";
import Image from "next/image";
import { wc } from "@/lib/woocommerce";
import { Header } from "@/components/Header";

const SECTORS = [
  { title: "Pesca Professionale", img: "https://lorenzmarine.com/wp-content/uploads/2025/08/2.png", desc: "Affidabilità, resistenza e supporto continuo per i professionisti della pesca." },
  { title: "Pesca Sportiva e Diporto", img: "https://lorenzmarine.com/wp-content/uploads/2025/08/4.png", desc: "Sistemi elettronici pensati per la nautica da diporto e la pesca sportiva." },
  { title: "Workboat", img: "https://lorenzmarine.com/wp-content/uploads/2025/08/5.png", desc: "Dispositivi robusti e intuitivi per chi lavora in mare." },
  { title: "Cantieri Nautici", img: "https://lorenzmarine.com/wp-content/uploads/2025/08/120.png", desc: "Integrazioni complete per ogni tipo di imbarcazione." },
];

const FEATURES = [
  { title: "Esperienza Pluriennale", desc: "Oltre 50 anni nel settore" },
  { title: "Assistenza Dedicata", desc: "Supporto tecnico qualificato" },
  { title: "Qualità Certificata", desc: "Made in Italy" },
  { title: "Innovazione Continua", desc: "Tecnologia all'avanguardia" },
];

export default async function Home() {
  const [products, categories] = await Promise.all([
    wc.getProducts({ per_page: "8" }).catch(() => []),
    wc.getCategories().catch(() => []),
  ]);

  return (
    <main className="min-h-screen bg-white text-gray-800">
      <Header />

      {/* Hero MAGNUM */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-brand-red font-display text-sm mb-4 tracking-widest">MAGNUM PRO HD</p>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Pratico ed economico.
              <br />
              <span className="text-gray-300 font-normal text-2xl lg:text-3xl">
                Dati pesca sempre al sicuro nel Cloud.
              </span>
            </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-md">
              Aggiornamenti facili e veloci, controllo totale dei tuoi dati ovunque tu sia.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/prodotti?categoria=ecoscandagli-fishfinder"
                className="bg-brand-red hover:bg-brand-red-dark text-white font-semibold px-6 py-3 rounded transition"
              >
                Scopri Magnum
              </Link>
              <Link
                href="/prodotti"
                className="border border-white/30 hover:border-white text-white font-semibold px-6 py-3 rounded transition"
              >
                Acquista ora
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] lg:aspect-square">
            <Image
              src="https://lorenzmarine.com/wp-content/uploads/2025/08/lorenz-marine-risorse2-19.png"
              alt="Magnum Pro HD"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* Hero ATOM */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] lg:aspect-square order-2 lg:order-1">
            <Image
              src="https://lorenzmarine.com/wp-content/uploads/2025/08/lorenz-marine-risorse2-23.png"
              alt="Atom Series"
              fill
              className="object-contain"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-brand-blue font-display text-sm mb-4 tracking-widest">ATOM SERIES</p>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              Semplice ed affidabile.
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-md">
              Chartplotter con GPS integrato e connettività Wi-Fi. Il modello Plus include la funzionalità ecoscandaglio.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/prodotti?categoria=gps-cartografici"
                className="bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold px-6 py-3 rounded transition"
              >
                Scopri i modelli ATOM
              </Link>
              <Link
                href="/prodotti"
                className="border-2 border-gray-900 hover:bg-gray-900 hover:text-white text-gray-900 font-semibold px-6 py-3 rounded transition"
              >
                Acquista ora
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Popular products */}
      <section className="bg-brand-gray-light py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-red font-display text-sm mb-3 tracking-widest">CATALOGO</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">I prodotti più popolari</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dal 1974, Lorenz Marine sviluppa strumentazioni elettroniche all&apos;avanguardia per la pesca professionale e il diporto.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {products.slice(0, 8).map((p) => (
              <Link
                key={p.id}
                href={`/prodotti/${p.id}`}
                className="group bg-white border border-gray-200 hover:border-brand-red transition overflow-hidden"
              >
                {p.images[0] && (
                  <div className="relative aspect-square bg-white">
                    <Image
                      src={p.images[0].src}
                      alt={p.images[0].alt || p.name}
                      fill
                      className="object-contain p-4 group-hover:scale-105 transition-transform"
                    />
                  </div>
                )}
                <div className="p-4 border-t border-gray-100">
                  <h3 className="font-semibold text-gray-900 text-sm line-clamp-2 group-hover:text-brand-red transition">
                    {p.name}
                  </h3>
                  {p.price ? (
                    <p className="mt-2 font-bold text-gray-900">€{p.price}</p>
                  ) : (
                    <p className="mt-2 text-xs text-gray-500">Prezzo su richiesta</p>
                  )}
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/prodotti"
              className="inline-block bg-brand-red hover:bg-brand-red-dark text-white font-semibold uppercase tracking-wide px-8 py-3 rounded transition"
            >
              Scopri tutti i prodotti
            </Link>
          </div>
        </div>
      </section>

      {/* RADAR + Q SERIES split */}
      <section className="grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-gray-900 text-white p-12 lg:p-16 flex flex-col justify-center min-h-[400px]">
          <p className="text-brand-red font-display text-sm mb-3 tracking-widest">RADAR</p>
          <h3 className="text-3xl lg:text-4xl font-bold mb-4">Affidabile e professionale.</h3>
          <p className="text-gray-400 mb-6 max-w-md">
            Lorenz Marine seleziona solo componenti di qualità, collaborando con i migliori produttori internazionali.
          </p>
          <div>
            <Link
              href="/prodotti?categoria=radar"
              className="inline-block bg-brand-red hover:bg-brand-red-dark text-white font-semibold px-6 py-3 rounded transition"
            >
              Scopri Radar
            </Link>
          </div>
        </div>
        <div className="bg-gradient-to-br from-brand-blue to-brand-blue-dark text-white p-12 lg:p-16 flex flex-col justify-center min-h-[400px]">
          <p className="text-white/70 font-display text-sm mb-3 tracking-widest">Q SERIES</p>
          <h3 className="text-3xl lg:text-4xl font-bold mb-4">Un solo schermo, infinite possibilità.</h3>
          <p className="text-white/80 mb-6 max-w-md">
            Performance fluide, dati immediati, visibilità perfetta in ogni condizione.
          </p>
          <div>
            <Link
              href="/prodotti?categoria=monitor-nautici"
              className="inline-block bg-white text-brand-blue-dark hover:bg-gray-100 font-semibold px-6 py-3 rounded transition"
            >
              Scopri serie Q
            </Link>
          </div>
        </div>
      </section>

      {/* I Settori */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-red font-display text-sm mb-3 tracking-widest">I SETTORI</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Gli ambiti in cui lavoriamo</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SECTORS.map((s) => (
              <div key={s.title} className="bg-brand-gray-light hover:shadow-lg transition group overflow-hidden">
                <div className="relative aspect-[4/3] bg-white">
                  <Image src={s.img} alt={s.title} fill className="object-contain p-6 group-hover:scale-105 transition-transform" />
                </div>
                <div className="p-6 border-t border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-2 uppercase text-sm tracking-wide">{s.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perché affidarti a Lorenz */}
      <section className="bg-gray-900 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-red font-display text-sm mb-3 tracking-widest">MADE IN ITALY</p>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Perché affidarti a Lorenz</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Tecnologia, esperienza e innovazione per la tua sicurezza in mare.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((f) => (
              <div key={f.title} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-brand-red/20 border-2 border-brand-red flex items-center justify-center">
                  <span className="text-brand-red text-2xl font-bold">✓</span>
                </div>
                <h3 className="font-bold text-sm uppercase tracking-wide mb-2">{f.title}</h3>
                <p className="text-xs text-gray-400">{f.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contatti"
              className="inline-block bg-brand-red hover:bg-brand-red-dark text-white font-semibold uppercase tracking-wide px-8 py-3 rounded transition"
            >
              Contattaci
            </Link>
          </div>
        </div>
      </section>

      {/* Categories quick nav */}
      {categories.length > 0 && (
        <section className="py-12 bg-brand-gray-light border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Naviga per categoria</h3>
            <div className="flex flex-wrap gap-2">
              {categories.filter(c => c.count > 0).map((cat) => (
                <Link
                  key={cat.id}
                  href={`/prodotti?categoria=${cat.slug}`}
                  className="px-4 py-2 bg-white border border-gray-200 rounded text-sm text-gray-700 hover:border-brand-red hover:text-brand-red transition"
                >
                  {cat.name} <span className="text-gray-400">({cat.count})</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-2 lg:col-span-1">
            <Image
              src="https://lorenzmarine.com/wp-content/uploads/2018/08/Logo_LORENZMARINE-03.png"
              alt="Lorenz Marine"
              width={150}
              height={40}
              className="h-10 w-auto brightness-0 invert mb-4"
            />
            <p className="text-sm text-gray-400 leading-relaxed">
              Dal 1974, strumentazioni elettroniche per la pesca professionale e il diporto.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4">Menu</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-white transition">Home</Link></li>
              <li><Link href="/prodotti" className="hover:text-white transition">Prodotti</Link></li>
              <li><Link href="/contatti" className="hover:text-white transition">Contatti</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4">Link Utili</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="https://lorenzmarine.com/refund_returns/" target="_blank" rel="noopener" className="hover:text-white transition">Termini e condizioni</a></li>
              <li><a href="https://lorenzmarine.com/privacy-policy/" target="_blank" rel="noopener" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="https://lorenzmarine.com/manuali/" target="_blank" rel="noopener" className="hover:text-white transition">Manuali</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4">Dove siamo</h4>
            <p className="text-sm text-gray-400 leading-relaxed">
              Via Maestri del lavoro, 8<br />
              17019 Varazze (SV)<br />
              Italia
            </p>
            <p className="text-sm text-gray-400 mt-3">
              <a href="mailto:info@lorenzmarine.com" className="hover:text-white transition">info@lorenzmarine.com</a>
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 px-4 lg:px-8 py-4 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Lorenz Marine S.r.l. — Tutti i diritti riservati
        </div>
      </footer>
    </main>
  );
}
