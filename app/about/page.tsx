import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Mobile optimiert */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light mb-3 sm:mb-4 text-gray-900">Über mich</h1>
          <p className="text-lg sm:text-xl text-gray-700">Meine künstlerische Reise</p>
        </div>
      </section>

      {/* Content - Mobile First Design */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Mobile: Bild oben, Text unten | Desktop: Nebeneinander */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Bild - Mobile zuerst für visuelle Wirkung */}
            <div className="order-1">
              <div className="relative h-[350px] sm:h-[450px] md:h-[600px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/artwork5.jpeg"
                  alt="Michaela Knabe"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
            
            {/* Text Content - Responsive Schriftgrößen */}
            <div className="order-2 space-y-4 sm:space-y-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-light mb-3 sm:mb-4">Mein Weg zur Kunst</h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Die Kunst begleitet mich seit meiner Kindheit. Was als spielerisches 
                  Experimentieren mit Farben begann, entwickelte sich über die Jahre zu 
                  einer tiefen Leidenschaft und schließlich zu meiner Berufung.
                </p>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-light mb-3 sm:mb-4">Inspiration & Technik</h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">
                  Meine Inspirationsquellen sind vielfältig: Die subtilen Farbverläufe eines 
                  Sonnenuntergangs, die raue Textur alter Mauern, die Dynamik menschlicher 
                  Bewegungen - all das fließt in meine Arbeiten ein.
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Ich arbeite bevorzugt mit Ölfarben und Acryl, wobei ich beide Techniken 
                  oft in einem Werk kombiniere. Die Langsamkeit des Öls erlaubt mir meditative 
                  Momente, während Acryl spontane, expressive Gesten ermöglicht.
                </p>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-light mb-3 sm:mb-4">Philosophie</h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Für mich ist Kunst mehr als nur Dekoration - sie ist ein Dialog zwischen 
                  Künstler und Betrachter. Jedes meiner Werke ist eine Einladung, innezuhalten, 
                  zu reflektieren und eigene Emotionen und Erinnerungen zu entdecken.
                </p>
              </div>
            </div>
          </div>

          {/* Zusätzliche Informationen - Responsive Grid */}
          <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center px-4 sm:px-0">
              <h3 className="text-lg sm:text-xl font-light mb-2 sm:mb-3">Ausbildung</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Studium der Bildenden Künste<br />
                Diverse Meisterkurse und Workshops
              </p>
            </div>
            <div className="text-center px-4 sm:px-0">
              <h3 className="text-lg sm:text-xl font-light mb-2 sm:mb-3">Techniken</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Ölmalerei<br />
                Acrylmalerei<br />
                Mischtechniken
              </p>
            </div>
            <div className="text-center px-4 sm:px-0">
              <h3 className="text-lg sm:text-xl font-light mb-2 sm:mb-3">Ausstellungen</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Regelmäßige Einzel- und<br />
                Gruppenausstellungen
              </p>
            </div>
          </div>

          {/* Atelier Bilder - Responsive Grid */}
          <div className="mt-12 sm:mt-16">
            <h2 className="text-2xl sm:text-3xl font-light text-center mb-6 sm:mb-8">Einblicke ins Atelier</h2>
            {/* Mobile: 1 Spalte, Tablet: 2 Spalten, Desktop: 3 Spalten */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              <div className="relative h-[250px] sm:h-[280px] md:h-[300px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/artwork6.jpeg"
                  alt="Atelier 1"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                />
              </div>
              <div className="relative h-[250px] sm:h-[280px] md:h-[300px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/artwork7.jpeg"
                  alt="Atelier 2"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                />
              </div>
              <div className="relative h-[250px] sm:h-[280px] md:h-[300px] rounded-lg overflow-hidden shadow-lg sm:col-span-2 md:col-span-1">
                <Image
                  src="/artwork4.jpeg"
                  alt="Atelier 3"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}