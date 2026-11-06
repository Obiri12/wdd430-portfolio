import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-900 text-white py-5 shadow-md">
      <nav className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">

        <Link href="/" className="text-2xl font-bold tracking-wide">
          Obiri Bempa Asiedu
        </Link>

        <ul className="flex items-center gap-8 text-base font-medium">
          <li>
            <Link href="/" className="hover:text-blue-300 transition-colors">
              Home
            </Link>
          </li>

          <li>
            <Link href="/about" className="hover:text-blue-300 transition-colors">
              About
            </Link>
          </li>
        </ul>

      </nav>
    </header>
  );
}