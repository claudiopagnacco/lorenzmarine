import Link from "next/link";
import Image from "next/image";
import { CartIcon } from "./CartIcon";

const LINK_PINK = "#cc3366";

export function Header() {
  return (
    <>
      {/* Topbar with address */}
      <div
        className="text-white text-[12px] py-[10px] px-4 text-center tracking-wide font-medium"
        style={{ background: "#9e1414" }}
      >
        Via Maestri del lavoro, 8 , Varazze (SV)
      </div>

      <header className="bg-white sticky top-0 z-30 border-b border-gray-100">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-10 py-4 lg:py-5 flex items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" aria-label="Lorenz Marine" className="flex items-center shrink-0">
            <Image
              src="https://lorenzmarine.com/wp-content/uploads/2018/08/Logo_LORENZMARINE-03.png"
              alt="Lorenz Marine"
              width={435}
              height={81}
              priority
              className="w-[220px] h-auto lg:w-[260px]"
            />
          </Link>

          {/* Desktop nav: 2-row grid + Cerca pill */}
          <div className="hidden lg:flex items-center gap-10">
            <nav
              className="grid grid-cols-2 gap-x-12 gap-y-2 text-[16px]"
              style={{ color: LINK_PINK, fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              <Link href="/" className="hover:opacity-80 transition" style={{ color: LINK_PINK }}>
                Home
              </Link>
              <Link href="/prodotti" className="hover:opacity-80 transition" style={{ color: LINK_PINK }}>
                Prodotti
              </Link>
              <a
                href="https://lorenzmarine.com/assistenza-clienti/"
                target="_blank"
                rel="noopener"
                className="hover:opacity-80 transition"
                style={{ color: LINK_PINK }}
              >
                Assistenza
              </a>
              <Link href="/contatti" className="hover:opacity-80 transition" style={{ color: LINK_PINK }}>
                Contatti
              </Link>
            </nav>

            <a
              href="https://lorenzmarine.com/rivenditori-vicino-a-te/"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center text-white text-[17px] font-semibold rounded-full px-6 py-3 transition hover:opacity-90"
              style={{ background: "#a61d1d" }}
            >
              Cerca un rivenditore
            </a>

            <CartIcon />
          </div>

          {/* Mobile */}
          <div className="lg:hidden flex items-center gap-3">
            <CartIcon />
            <Link
              href="/prodotti"
              className="text-[12px] font-bold uppercase tracking-wider text-white rounded-full px-4 py-2"
              style={{ background: "#a61d1d" }}
            >
              Menu
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
