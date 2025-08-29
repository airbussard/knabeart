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
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-wide">
            Michaela Knabe
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-light mb-8">
            Künstlerin
          </p>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8 leading-relaxed">
            Willkommen in meiner Welt der Kunst. Ich erschaffe emotionale Landschaften 
            in Öl und Acryl, die die Schönheit des Moments einfangen.
          </p>
          <Link 
            href="/gallery" 
            className="inline-block bg-gray-900 text-white px-8 py-3 rounded hover:bg-gray-800 transition-colors"
          >
            Zur Galerie
          </Link>
        </div>
      </section>

      {/* Über die Künstlerin */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-light mb-6">Über mich</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Meine künstlerische Reise begann mit der Faszination für Farben und Formen. 
                Jedes meiner Werke erzählt eine Geschichte - von stillen Momenten der Kontemplation 
                bis zu explosiven Ausbrüchen der Kreativität.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                In meinen Arbeiten verschmelzen traditionelle Techniken mit modernen Ausdrucksformen. 
                Ich arbeite hauptsächlich mit Ölfarben und Acryl, experimentiere aber auch gerne mit 
                Mischtechniken, um neue Texturen und Dimensionen zu schaffen.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Die Natur, menschliche Emotionen und die Poesie des Alltäglichen sind meine 
                wichtigsten Inspirationsquellen. Jedes Bild ist eine Einladung, innezuhalten 
                und die Welt mit anderen Augen zu sehen.
              </p>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/artwork4.jpeg"
                alt="Michaela Knabe bei der Arbeit"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ausgewählte Werke */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-light text-center mb-12">Ausgewählte Werke</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredArtworks.map((artwork, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg transition-transform group-hover:scale-105">
                  <Image
                    src={artwork.src}
                    alt={artwork.alt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity" />
                </div>
                <h3 className="mt-4 text-lg font-light text-center">{artwork.title}</h3>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link 
              href="/gallery" 
              className="inline-block border border-gray-900 text-gray-900 px-8 py-3 rounded hover:bg-gray-900 hover:text-white transition-colors"
            >
              Alle Werke ansehen
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-light mb-6">Interessiert an meiner Kunst?</h2>
          <p className="text-lg text-gray-700 mb-8">
            Kontaktieren Sie mich für Anfragen zu Kunstwerken oder Auftragsarbeiten.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-gray-900 text-white px-8 py-3 rounded hover:bg-gray-800 transition-colors"
          >
            Kontakt aufnehmen
          </Link>
        </div>
      </section>
    </div>
  );
}