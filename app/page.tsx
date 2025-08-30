import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const featuredArtworks = [
    { 
      src: "/artwork1.jpeg", 
      alt: "Kunstwerk 1",
      title: "Abstrakte Komposition"
    },
    { 
      src: "/artwork2.jpeg", 
      alt: "Kunstwerk 2",
      title: "Farbspiel"
    },
    { 
      src: "/artwork3.jpeg", 
      alt: "Kunstwerk 3",
      title: "Naturimpression"
    },
  ];

  return (
    <div>
      {/* Hero Section - Optimiert für alle Bildschirmgrößen */}
      <section className="relative min-h-[60vh] sm:min-h-[65vh] md:h-[70vh] flex items-center justify-center bg-gradient-to-b from-gray-50 to-white py-12 sm:py-16 md:py-0">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 sm:mb-6 tracking-wide text-gray-900">
            <span className="font-light">Michaela</span>{' '}
            <span className="font-normal">Knabe</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 font-light mb-4 sm:mb-6 md:mb-8">
            Künstlerin
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0">
            Willkommen in meiner Welt der Kunst. Ich erschaffe emotionale Landschaften 
            in Öl und Acryl, die die Schönheit des Moments einfangen.
          </p>
          <Link 
            href="/gallery" 
            className="inline-block bg-gray-900 text-white px-6 sm:px-8 py-3 sm:py-3 text-sm sm:text-base rounded hover:bg-gray-800 transition-colors touch-manipulation min-h-[44px] flex items-center justify-center"
          >
            Zur Galerie
          </Link>
        </div>
      </section>

      {/* Über die Künstlerin - Mobile First Approach */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Text-Bereich - Mobile oben */}
            <div className="order-2 md:order-1">
              <h2 className="text-2xl sm:text-3xl font-light mb-4 sm:mb-6">Über mich</h2>
              <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4 leading-relaxed">
                Meine künstlerische Reise begann mit der Faszination für Farben und Formen. 
                Jedes meiner Werke erzählt eine Geschichte - von stillen Momenten der Kontemplation 
                bis zu explosiven Ausbrüchen der Kreativität.
              </p>
              <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4 leading-relaxed">
                In meinen Arbeiten verschmelzen traditionelle Techniken mit modernen Ausdrucksformen. 
                Ich arbeite hauptsächlich mit Ölfarben und Acryl, experimentiere aber auch gerne mit 
                Mischtechniken, um neue Texturen und Dimensionen zu schaffen.
              </p>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Die Natur, menschliche Emotionen und die Poesie des Alltäglichen sind meine 
                wichtigsten Inspirationsquellen. Jedes Bild ist eine Einladung, innezuhalten 
                und die Welt mit anderen Augen zu sehen.
              </p>
            </div>
            {/* Bild - Mobile oben für bessere visuelle Hierarchie */}
            <div className="order-1 md:order-2 relative h-[300px] sm:h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/artwork4.jpeg"
                alt="Michaela Knabe bei der Arbeit"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ausgewählte Werke - Responsive Grid */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-light text-center mb-8 sm:mb-12">Ausgewählte Werke</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredArtworks.map((artwork, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative aspect-[3/4] sm:aspect-square lg:aspect-[3/4] rounded-lg overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src={artwork.src}
                    alt={artwork.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
                </div>
                <h3 className="mt-3 sm:mt-4 text-base sm:text-lg font-light text-center">{artwork.title}</h3>
              </div>
            ))}
          </div>
          <div className="text-center mt-8 sm:mt-12">
            <Link 
              href="/gallery" 
              className="inline-block border border-gray-900 text-gray-900 px-6 sm:px-8 py-3 text-sm sm:text-base rounded hover:bg-gray-900 hover:text-white transition-colors touch-manipulation min-h-[44px] flex items-center justify-center"
            >
              Alle Werke ansehen
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section - Mobile optimiert */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-light mb-4 sm:mb-6">Interessiert an meiner Kunst?</h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-6 sm:mb-8 px-2 sm:px-0">
            Kontaktieren Sie mich für Anfragen zu Kunstwerken oder Auftragsarbeiten.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-gray-900 text-white px-6 sm:px-8 py-3 text-sm sm:text-base rounded hover:bg-gray-800 transition-colors touch-manipulation min-h-[44px] flex items-center justify-center"
          >
            Kontakt aufnehmen
          </Link>
        </div>
      </section>
    </div>
  );
}