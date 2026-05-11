import Link from "next/link";
import Image from "next/image";

export function SiteFooter() {
  return (
    <footer>
      {/* Top strip — UE digitalizzazione */}
      <div
        className="text-white text-center text-[12px] lg:text-[13px] leading-[1.5] px-4 py-[18px]"
        style={{ background: "#a61d1d" }}
      >
        Intervento di digitalizzazione aziendale: progetto cofinanziato da UE | PR FESR LIGURIA 2021/2027 | Obiettivo di Policy 1.2 Azione 1.2.3 Supporto allo sviluppo di progetti di digitalizzazione nelle micro, piccole e medie imprese | CUP di progetto G54E24001230005
      </div>

      {/* Middle strip — bandierine UE */}
      <div className="bg-white py-4 flex items-center justify-center px-4">
        <Image
          src="https://lorenzmarine.com/wp-content/uploads/2024/10/Screenshot-2024-10-16-alle-14.53.27-e1729083311836-1536x253-1-1024x169.png"
          alt="Loghi UE / Liguria / FESR / Italia"
          width={1024}
          height={169}
          className="w-full max-w-[800px] h-auto object-contain"
        />
      </div>

      {/* Body */}
      <div className="bg-white text-[#333] border-t border-gray-100">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-10 py-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Logo + address + social */}
          <div className="lg:col-span-3">
            <Image
              src="https://lorenzmarine.com/wp-content/uploads/2018/08/Logo_LORENZMARINE-03.png"
              alt="Lorenz Marine"
              width={220}
              height={42}
              className="h-10 w-auto mb-5"
            />
            <p className="text-[14px] mb-1">Via Maestri del lavoro, 8 ,</p>
            <p className="text-[14px] mb-1">Varazze (SV), Italy</p>
            <p className="text-[14px] text-gray-500 mb-5">Lun-Ven 9:00 - 17:00</p>
            <div className="flex gap-3 text-[#a61d1d]">
              <a
                href="https://www.facebook.com/lorenzmarine"
                target="_blank"
                rel="noopener"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full border border-[#a61d1d] flex items-center justify-center hover:bg-[#a61d1d] hover:text-white transition"
              >
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M13.5 21v-8h2.7l.4-3.2h-3.1V7.7c0-.9.3-1.5 1.6-1.5h1.7V3.3c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H7.4V13h2.7v8h3.4z"/></svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener"
                aria-label="Twitter"
                className="w-9 h-9 rounded-full border border-[#a61d1d] flex items-center justify-center hover:bg-[#a61d1d] hover:text-white transition"
              >
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>

          {/* Benvenuti */}
          <div className="lg:col-span-3">
            <h2 className="font-orbitron text-[15px] uppercase tracking-wider mb-3" style={{ color: "#a61d1d" }}>
              Benvenuti in Lorenz Marine®!
            </h2>
            <p className="text-[13px] leading-[1.6] text-[#444]">
              Dal 1975, siamo il punto di riferimento per l&apos;attrezzatura nautica professionale e di alta qualità. Offriamo una gamma completa di prodotti innovativi per supportare i diportisti e i professionisti del mare.
            </p>
          </div>

          {/* Menu rapido */}
          <div className="lg:col-span-2">
            <h2 className="font-orbitron text-[15px] uppercase tracking-wider mb-3" style={{ color: "#a61d1d" }}>
              Menu rapido
            </h2>
            <ul className="space-y-2 text-[13px] text-[#444]">
              <li><Link href="/" className="hover:text-[#a61d1d] transition">Home</Link></li>
              <li><a href="https://lorenzmarine.com/about-us/" target="_blank" rel="noopener" className="hover:text-[#a61d1d] transition">About</a></li>
              <li><Link href="/prodotti" className="hover:text-[#a61d1d] transition">Prodotti</Link></li>
              <li><a href="https://lorenzmarine.com/lavora-con-noi/" target="_blank" rel="noopener" className="hover:text-[#a61d1d] transition">Lavora con noi</a></li>
              <li><a href="https://lorenzmarine.com/dealers/" target="_blank" rel="noopener" className="hover:text-[#a61d1d] transition">Dealers</a></li>
              <li><a href="https://lorenzmarine.com/download/" target="_blank" rel="noopener" className="hover:text-[#a61d1d] transition">Downloads</a></li>
              <li><Link href="/contatti" className="hover:text-[#a61d1d] transition">Contatti</Link></li>
            </ul>
          </div>

          {/* Link Utili */}
          <div className="lg:col-span-2">
            <h2 className="font-orbitron text-[15px] uppercase tracking-wider mb-3" style={{ color: "#a61d1d" }}>
              Link Utili
            </h2>
            <ul className="space-y-2 text-[13px] text-[#444]">
              <li><a href="https://lorenzmarine.com/refund_returns/" target="_blank" rel="noopener" className="hover:text-[#a61d1d] transition">Termini e condizioni</a></li>
              <li><a href="https://lorenzmarine.com/news/" target="_blank" rel="noopener" className="hover:text-[#a61d1d] transition">News da Lorenz</a></li>
              <li><a href="https://lorenzmarine.com/aggiornamenti-software/" target="_blank" rel="noopener" className="hover:text-[#a61d1d] transition">Aggiornamenti software</a></li>
              <li><a href="https://lorenzmarine.com/manuali/" target="_blank" rel="noopener" className="hover:text-[#a61d1d] transition">Manuali dei prodotti</a></li>
            </ul>
          </div>

          {/* Contatti via mail */}
          <div className="lg:col-span-2">
            <h2 className="font-orbitron text-[15px] uppercase tracking-wider mb-3" style={{ color: "#a61d1d" }}>
              Contattaci via mail
            </h2>
            <p className="text-[13px] text-[#444] mb-2">Scrivi qui</p>
            <a
              href="mailto:info@lorenzmarine.com"
              className="text-[13px] font-semibold text-[#a61d1d] hover:underline"
            >
              info@lorenzmarine.com
            </a>
            <p className="text-[13px] text-[#444] mt-3 mb-1">oppure chiama</p>
            <a href="tel:+390191234567" className="text-[13px] font-semibold text-[#a61d1d] hover:underline">
              Contattaci
            </a>
          </div>
        </div>

        {/* Mappa Dove siamo */}
        <div className="border-t border-gray-100 max-w-[1280px] mx-auto px-4 lg:px-10 pb-12">
          <h2 className="font-orbitron text-[15px] uppercase tracking-wider mb-4 mt-10" style={{ color: "#a61d1d" }}>
            Dove siamo
          </h2>
          <div className="w-full aspect-[16/5] overflow-hidden rounded">
            <iframe
              title="Mappa sede Lorenz Marine"
              src="https://maps.google.com/maps?q=Via%20maestri%20del%20lavoro%208%2C%20Varazze&t=m&z=10&output=embed&iwloc=near"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      {/* Bottom strip — Rag. sociale */}
      <div
        className="text-white text-center text-[12px] leading-[1.6] px-4 py-[14px]"
        style={{ background: "#54595f" }}
      >
        Rag. sociale FASER SRL | VIA MAESTRI DEL LAVORO 8 – 17019 – VARAZZE (SV) | P.IVA 01252330095 |{" "}
        <a
          href="https://lorenzmarine.com/privacy-policy/"
          target="_blank"
          rel="noopener"
          className="underline hover:text-white/80"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
}
