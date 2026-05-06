import Link from "next/link";
import Image from "next/image";
import { CartIcon } from "./CartIcon";

export function Header() {
  return (
    <>
      <div className="bg-black text-white text-xs py-2 px-4 text-center">
        <span className="opacity-80">Via Maestri del lavoro, 8 — Varazze (SV)</span>
      </div>

      <header className="border-b border-gray-200 px-4 lg:px-8 py-4 flex items-center justify-between sticky top-0 bg-white z-30 shadow-sm">
        <Link href="/" className="flex items-center" aria-label="Lorenz Marine">
          <Image
            src="https://lorenzmarine.com/wp-content/uploads/2018/08/Logo_LORENZMARINE-03.png"
            alt="Lorenz Marine"
            width={180}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold uppercase tracking-wide text-gray-700">
          <Link href="/" className="hover:text-brand-red transition">Home</Link>
          <Link href="/prodotti" className="hover:text-brand-red transition">Prodotti</Link>
          <Link href="/prodotti?categoria=accessori" className="hover:text-brand-red transition">Accessori</Link>
          <Link href="/contatti" className="hover:text-brand-red transition">Contatti</Link>
          <CartIcon />
        </nav>

        <div className="lg:hidden">
          <CartIcon />
        </div>
      </header>
    </>
  );
}
