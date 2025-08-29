import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-50 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Kontakt
            </h3>
            <p className="text-gray-600 text-sm">
              Michaela Knabe<br />
              Künstlerin<br />
              <Link href="/contact" className="hover:text-gray-900 underline">
                Kontaktformular
              </Link>
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-gray-900 text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-600 hover:text-gray-900 text-sm">
                  Galerie
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-gray-900 text-sm">
                  Über mich
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-gray-900 text-sm">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Rechtliches
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/impressum" className="text-gray-600 hover:text-gray-900 text-sm">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="text-gray-600 hover:text-gray-900 text-sm">
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Michaela Knabe. Alle Rechte vorbehalten.
          </p>
          <p className="text-center text-gray-500 text-xs mt-2">
            Gemäß § 19 UStG wird keine Umsatzsteuer berechnet.
          </p>
        </div>
      </div>
    </footer>
  )
}