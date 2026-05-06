import Link from "next/link";
import Image from "next/image";
import { CartIcon } from "./CartIcon";

const NAV = [
  { label: "Home", href: "/" },
  { label: "Prodotti", href: "/prodotti" },
  { label: "Assistenza", href: "https://lorenzmarine.com/assistenza-clienti/", external: true },
  { label: "Dealers", href: "https://lorenzmarine.com/dealers/", external: true },
  { label: "Contatti", href: "/contatti" },
];

export function Header() {
  return (
    <>
      <div
        className="text-white text-[12px] py-[10px] px-4 text-center tracking-wide font-medium"
        style={{ background: "#9e1414" }}
      >
        Via Maestri del lavoro, 8 — Varazze (SV) · Lun-Ven 9:00 — 17:00
      </div>

      <header className="bg-white border-b border-gray-100 sticky top-0 z-30">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8 h-[100px] flex items-center justify-between">
          <Link href="/" aria-label="Lorenz Marine" className="flex items-center">
            <Image
              src="https://lorenzmarine.com/wp-content/uploads/2018/08/Logo_LORENZMARINE-03.png"
              alt="Lorenz Marine"
              width={435}
              height={81}
              priority
              className="w-[220px] h-auto lg:w-[260px]"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-7 text-[13px] font-semibold uppercase tracking-wider text-[#212121]">
            {NAV.map((n) =>
              n.external ? (
                <a
                  key={n.label}
                  href={n.href}
                  target="_blank"
                  rel="noopener"
                  className="hover:text-brand-red transition"
                >
                  {n.label}
                </a>
              ) : (
                <Link key={n.label} href={n.href} className="hover:text-brand-red transition">
                  {n.label}
                </Link>
              )
            )}
            <CartIcon />
          </nav>

          <div className="lg:hidden flex items-center gap-3">
            <CartIcon />
            <Link
              href="/prodotti"
              className="text-[12px] font-bold uppercase tracking-wider text-brand-red border-2 border-brand-red rounded-full px-4 py-2"
            >
              Menu
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
