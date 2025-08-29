import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-50 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        {/* Mobile: 1 Spalte, Tablet/Desktop: 3 Spalten */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-6">
          {/* Kontakt Section */}
          <div className="text-center sm:text-left">
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-3 sm:mb-4">
              Kontakt
            </h3>
            <p className="text-gray-600 text-sm">
              Michaela Knabe<br />
              Künstlerin<br />
              <Link href="/contact" className="hover:text-gray-900 underline underline-offset-2 transition-colors">
                Kontaktformular
              </Link>
            </p>
          </div>

          {/* Navigation Section - Hidden on smallest mobile */}
          <div className="text-center sm:text-left">
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-3 sm:mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  Galerie
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  Über mich
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Rechtliches Section */}
          <div className="text-center sm:text-left sm:col-span-2 md:col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-3 sm:mb-4">
              Rechtliches
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/impressum" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-xs sm:text-sm">
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