import Link from "next/link";
import Image from "next/image";
import { Star, PhoneCall, CheckCircle2, ChevronsUp } from "lucide-react";
import { wc } from "@/lib/woocommerce";
import { Header } from "@/components/Header";
import { Reveal } from "@/components/Reveal";
import { ParallaxX } from "@/components/ParallaxX";
import { SiteFooter } from "@/components/SiteFooter";

const HERO_SLIDES = [
  "https://lorenzmarine.com/wp-content/uploads/2025/08/atom9-lorenz-marine.png",
  "https://lorenzmarine.com/wp-content/uploads/2025/08/lorenz-atom-12-plus.png",
];

const SECTORS = [
  {
    title: "PESCA PROFESSIONALE",
    img: "https://lorenzmarine.com/wp-content/uploads/2025/07/pesca-professionale-lorenz-marine-1024x768.jpg",
    desc: "Affidabilità, resistenza e supporto continuo: Lorenz Marine è la scelta dei professionisti della pesca in tutta Europa.",
  },
  {
    title: "Pesca sportiva e diporto",
    img: "https://lorenzmarine.com/wp-content/uploads/2025/07/lorenz-marine-pesca-diporto-sportiva-attivita-768x1024.jpg",
    desc: "Lorenz Marine progetta sistemi elettronici pensati per la nautica da diporto e la pesca sportiva.",
  },
  {
    title: "Workboat",
    img: "https://lorenzmarine.com/wp-content/uploads/2025/08/130.jpg",
    desc: "Dispositivi robusti, intuitivi e progettati per chi lavora ogni giorno in mare.",
  },
  {
    title: "Cantieri nautici",
    img: "https://lorenzmarine.com/wp-content/uploads/2025/08/102-1024x1024.png",
    desc: "Integrazioni complete e su misura per ogni tipo di imbarcazione.",
  },
];

const FEATURES = [
  { Icon: Star, title: "Esperienza pluriennale" },
  { Icon: PhoneCall, title: "Assistenza Dedicata" },
  { Icon: CheckCircle2, title: "Qualità certificata" },
  { Icon: ChevronsUp, title: "Innovazione continua" },
];

export default async function Home() {
  const products = await wc.getProducts({ per_page: "8" }).catch(() => []);

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* 0. Hero background slideshow */}
      <section className="relative w-full overflow-hidden" style={{ height: "min(70vh, 648px)" }}>
        <div
          className="bg-slide"
          style={{ backgroundImage: `url(${HERO_SLIDES[0]})` }}
          aria-hidden
        />
        <div
          className="bg-slide bg-slide-2"
          style={{ backgroundImage: `url(${HERO_SLIDES[1]})` }}
          aria-hidden
        />
      </section>

      {/* 1. MAGNUM Pro HD */}
      <section className="px-4 lg:px-10 py-12 lg:py-16 overflow-hidden">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <Image
              src="https://lorenzmarine.com/wp-content/uploads/2025/08/image2-1-1.png"
              alt="MAGNUM Pro HD"
              width={381}
              height={52}
              className="w-[280px] lg:w-[360px] h-auto mb-6"
            />
            <p className="text-[18px] lg:text-[20px] text-[#2e2e2e] mb-8 max-w-md leading-relaxed">
              <span className="font-bold">Pratico e economico.</span>
              <br />
              Dati pesca sempre al sicuro nel Cloud e aggiornamenti facili e veloci.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/prodotti?categoria=ecoscandagli-fishfinder" className="btn-pill btn-pill-red">
                Scopri Magnum
              </Link>
              <Link href="/prodotti" className="btn-pill btn-pill-dark">
                Acquista ora
              </Link>
            </div>
          </div>
          <ParallaxX direction="right" className="order-1 lg:order-2 relative aspect-[4/3]">
            <Image
              src="https://lorenzmarine.com/wp-content/uploads/2025/08/18.png"
              alt="Magnum Pro HD"
              fill
              sizes="(min-width: 1024px) 600px, 100vw"
              className="object-contain"
              priority
            />
          </ParallaxX>
        </div>
      </section>

      {/* 2. ATOM Series */}
      <section className="px-4 lg:px-10 py-12 lg:py-16 overflow-hidden">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <ParallaxX direction="left" className="relative aspect-[4/3]">
            <Image
              src="https://lorenzmarine.com/wp-content/uploads/2025/08/lorenz-marine-risorse2-19.png"
              alt="Atom Series"
              fill
              sizes="(min-width: 1024px) 600px, 100vw"
              className="object-contain"
            />
          </ParallaxX>
          <div>
            <Image
              src="https://lorenzmarine.com/wp-content/uploads/2025/08/image5-e1754397815216.png"
              alt="ATOM"
              width={295}
              height={69}
              className="w-[220px] lg:w-[280px] h-auto mb-6"
            />
            <p className="text-[18px] lg:text-[20px] text-[#2e2e2e] mb-8 max-w-md leading-relaxed">
              <span className="font-bold">Semplice ed affidabile.</span>
              <br />
              Chartplotter con GPS integrato e connettività WIFI, il modello Plus dispone anche della funzionalità ecoscandaglio.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/prodotti?categoria=gps-cartografici" className="btn-pill btn-pill-red">
                Scopri i modelli ATOM
              </Link>
              <Link href="/prodotti" className="btn-pill btn-pill-dark">
                Acquista ora
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. I prodotti più popolari */}
      <Reveal as="section" variant="fade-in" className="px-4 lg:px-10 py-16 lg:py-20 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <h1 className="h-michroma-1 mb-4 text-center">I prodotti più popolari</h1>
          <h1 className="h-michroma-1 mb-12 text-center max-w-3xl mx-auto" style={{ fontSize: 18, lineHeight: "26px", textTransform: "none", fontWeight: 400, color: "#2e2e2e" }}>
            Dal 1974, Lorenz Marine sviluppa strumentazioni elettroniche all&apos;avanguardia per la pesca professionale e il diporto
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {products.slice(0, 5).map((p) => (
              <Link
                key={p.id}
                href={`/prodotti/${p.id}`}
                className="group bg-white border border-gray-100 hover:border-[#a61d1d] transition flex flex-col"
              >
                {p.images[0] && (
                  <div className="relative aspect-square bg-white">
                    <Image
                      src={p.images[0].src}
                      alt={p.images[0].alt || p.name}
                      fill
                      sizes="(min-width: 1024px) 240px, 50vw"
                      className="object-contain p-3 group-hover:scale-105 transition-transform"
                    />
                  </div>
                )}
                <div className="p-3 text-center border-t border-gray-100">
                  <h4 className="font-orbitron text-[14px] leading-tight text-[#181818] line-clamp-2">
                    {p.name}
                  </h4>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/prodotti" className="btn-pill btn-pill-red">
              Scopri tutti i prodotti
            </Link>
          </div>
        </div>
      </Reveal>

      {/* 4. RADAR */}
      <section className="px-4 lg:px-10 py-12 lg:py-16 overflow-hidden">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="h-michroma-1-red mb-4 uppercase">RADAR LORENZ MARINE</h1>
            <p className="text-[18px] lg:text-[20px] text-[#2e2e2e] mb-8 max-w-md leading-relaxed">
              <span className="font-bold">Affidabile e professionale.</span>
              <br />
              Lorenz Marine seleziona solo componenti di qualità, collaborando con i migliori produttori internazionali.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/prodotti?categoria=radar" className="btn-pill btn-pill-red">
                Scopri Radar
              </Link>
              <Link href="/prodotti" className="btn-pill btn-pill-dark">
                Acquista ora
              </Link>
            </div>
          </div>
          <ParallaxX direction="right" className="relative aspect-[4/3]">
            <Image
              src="https://lorenzmarine.com/wp-content/uploads/2025/10/lorenz-marine-risorse2-27.png"
              alt="Radar Lorenz Marine"
              fill
              sizes="(min-width: 1024px) 600px, 100vw"
              className="object-contain"
            />
          </ParallaxX>
        </div>
      </section>

      {/* 5. Q SERIES — transparent bg, matches original */}
      <section className="px-4 lg:px-10 py-12 lg:py-16 overflow-hidden">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <Image
              src="https://lorenzmarine.com/wp-content/uploads/2025/10/Qlogowhite.webp"
              alt="Q"
              width={140}
              height={140}
              className="mb-4 invert opacity-80"
            />
            <h1 className="h-michroma-1 mb-3 uppercase">Q SERIES</h1>
            <p className="text-[18px] lg:text-[20px] text-[#2e2e2e] mb-8 max-w-md leading-relaxed">
              <span className="font-bold">Un solo schermo, infinite possibilità.</span>
              <br />
              Performance fluide, dati immediati, visibilità perfetta in ogni condizione.
            </p>
            <div>
              <Link href="/prodotti?categoria=monitor-nautici" className="btn-pill btn-pill-red">
                Scopri serie Q
              </Link>
            </div>
          </div>
          <ParallaxX direction="left" className="order-1 lg:order-2 relative aspect-[4/3]">
            <Image
              src="https://lorenzmarine.com/wp-content/uploads/2025/11/lorenz-risorse-sito-3.png"
              alt="Q Series"
              fill
              sizes="(min-width: 1024px) 600px, 100vw"
              className="object-contain"
            />
          </ParallaxX>
        </div>
      </section>

      {/* 6. Trova un centro assistenza + Collabora con noi */}
      <section className="px-4 lg:px-10 py-12 lg:py-16">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            className="relative h-[420px] flex items-end p-8 text-white"
            style={{
              backgroundImage:
                "linear-gradient(to top, rgba(0,0,0,.7), rgba(0,0,0,.05) 60%), url('https://lorenzmarine.com/wp-content/uploads/2025/09/dealer-1024x683.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div>
              <h2 className="font-display text-[26px] lg:text-[31px] leading-tight mb-3">
                Trova un centro assistenza
              </h2>
              <p className="text-sm mb-5 max-w-sm leading-relaxed">
                Scopri i centri assistenza Lorenz più vicini a te.
              </p>
              <a
                href="https://lorenzmarine.com/rivenditori-vicino-a-te/"
                target="_blank"
                rel="noopener"
                className="btn-pill btn-pill-white"
              >
                Trova i rivenditori Lorenz
              </a>
            </div>
          </div>

          <div
            className="relative h-[420px] flex items-end p-8 text-white"
            style={{
              backgroundImage:
                "linear-gradient(to top, rgba(0,0,0,.7), rgba(0,0,0,.05) 60%), url('https://lorenzmarine.com/wp-content/uploads/2025/09/distributori-lorenz-1024x683.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div>
              <h2 className="font-display text-[26px] lg:text-[31px] leading-tight mb-3">
                Collabora con noi
              </h2>
              <p className="text-sm mb-5 max-w-sm leading-relaxed">
                Vuoi espandere la tua offerta di prodotti per la nautica?
              </p>
              <a
                href="https://lorenzmarine.com/dealers/"
                target="_blank"
                rel="noopener"
                className="btn-pill btn-pill-white"
              >
                Diventa Rivenditore o Distributore
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 7. I SETTORI */}
      <section className="px-4 lg:px-16 py-16 lg:py-20" style={{ background: "#f7f7f7" }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-10">
            <h1 className="h-michroma-1-red mb-2" style={{ fontSize: 22 }}>
              Gli ambiti in cui lavoriamo
            </h1>
            <h1 className="h-michroma-1">i settori</h1>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {SECTORS.map((s) => (
              <div
                key={s.title}
                className="relative h-[400px] flex items-end p-5 text-white overflow-hidden group"
                style={{
                  backgroundImage: `linear-gradient(to top, rgba(0,0,0,.85) 0%, rgba(0,0,0,.2) 60%, rgba(0,0,0,0) 100%), url('${s.img}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div>
                  <h3 className="h-michroma-3 mb-2" style={{ color: "#fff" }}>
                    {s.title}
                  </h3>
                  <p className="text-[13px] leading-snug opacity-90">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Puoi trovarci, sempre — antenna+MADE IN ITALY left, interactive map right */}
      <Reveal as="section" variant="fade-up" className="px-4 lg:px-10 py-16 lg:py-24 bg-white">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col items-center lg:items-start">
            <h3 className="h-michroma-3 mb-3 text-center lg:text-left">Puoi trovarci, sempre.</h3>
            <p className="text-[18px] lg:text-[22px] text-[#2e2e2e] leading-relaxed max-w-md mb-8 text-center lg:text-left">
              Affidati a Lorenz Marine: <span className="font-bold">tecnologia, esperienza e innovazione</span> per la tua sicurezza.
            </p>
            <div className="relative w-full aspect-square max-w-[420px]">
              <Image
                src="https://lorenzmarine.com/wp-content/uploads/2025/12/ANTENNA-LORENZ-SCONTORNO.png"
                alt="Antenna Lorenz"
                fill
                sizes="(min-width: 1024px) 420px, 80vw"
                className="object-contain"
              />
            </div>
            <h3 className="h-michroma-3 mt-2 text-[#a61d1d] text-center lg:text-left">MADE IN ITALY</h3>
          </div>
          <div className="w-full aspect-square lg:aspect-[4/5] overflow-hidden rounded">
            <iframe
              title="Mappa Lorenz Marine — Varazze"
              src="https://maps.google.com/maps?q=Via%20maestri%20del%20lavoro%208%2C%20Varazze&t=m&z=10&output=embed&iwloc=near"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </Reveal>

      {/* 9. Perchè affidarti a Lorenz — white circle icons with red lucide icons inside */}
      <section className="px-4 lg:px-10 py-16 lg:py-24" style={{ background: "#171717" }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-12">
            <h3 className="h-michroma-3 mb-4 text-white">Perchè affidarti a Lorenz</h3>
            <p className="text-[16px] lg:text-[18px] text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Affidati a Lorenz Marine: tecnologia, esperienza e innovazione per la tua sicurezza.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {FEATURES.map(({ Icon, title }) => (
              <div key={title} className="text-center flex flex-col items-center">
                <div
                  className="rounded-full flex items-center justify-center mb-5"
                  style={{ width: 85, height: 85, background: "#fff" }}
                >
                  <Icon size={45} strokeWidth={1.6} color="#a61d1d" />
                </div>
                <h4 className="font-orbitron text-[15px] tracking-wide text-white">
                  {title}
                </h4>
              </div>
            ))}
          </div>

          <div className="text-center flex flex-wrap gap-3 justify-center">
            <a
              href="https://lorenzmarine.com/about-us/"
              target="_blank"
              rel="noopener"
              className="btn-pill btn-pill-white"
            >
              Scopri chi siamo
            </a>
            <Link href="/contatti" className="btn-pill btn-pill-white">
              Contattaci
            </Link>
          </div>
        </div>
      </section>

      {/* 10. CTA finale shop */}
      <section className="px-4 lg:px-10 py-16 lg:py-20">
        <div className="max-w-[1280px] mx-auto text-center">
          <h3 className="h-michroma-3 mb-4">
            Dal 1974, Lorenz Marine sviluppa strumentazioni elettroniche all&apos;avanguardia per la pesca professionale e il diporto
          </h3>
          <h1 className="h-michroma-1 mb-8 max-w-3xl mx-auto" style={{ fontSize: 22, lineHeight: "30px" }}>
            Scopri la nostra gamma completa di prodotti e potenzia la tua esperienza in mare. Visita il nostro shop ora!
          </h1>
          <Link href="/prodotti" className="btn-pill btn-pill-red">
            Vai allo shop
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
