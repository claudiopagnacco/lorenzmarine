import Link from "next/link";
import { CartIcon } from "./CartIcon";

export function Header() {
  return (
    <header className="border-b border-gray-200 px-6 py-4 flex items-center justify-between sticky top-0 bg-white z-10">
      <Link href="/" className="font-bold text-xl tracking-tight text-gray-900">
        LORENZ MARINE
      </Link>
      <nav className="flex items-center gap-6 text-sm text-gray-600">
        <Link href="/prodotti" className="hover:text-gray-900">Prodotti</Link>
        <Link href="/contatti" className="hover:text-gray-900">Contatti</Link>
        <CartIcon />
      </nav>
    </header>
  );
}
