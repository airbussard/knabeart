import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-light mb-4">Über mich</h1>
          <p className="text-xl text-gray-600">Meine künstlerische Reise</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="relative h-[600px] rounded-lg overflow-hidden shadow-xl mb-8">
                <Image
                  src="/WhatsApp Image 2025-08-29 at 15.41.00.jpeg"
                  alt="Michaela Knabe"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-light mb-4">Mein Weg zur Kunst</h2>
                <p className="text-gray-700 leading-relaxed">
                  Die Kunst begleitet mich seit meiner Kindheit. Was als spielerisches 
                  Experimentieren mit Farben begann, entwickelte sich über die Jahre zu 
                  einer tiefen Leidenschaft und schließlich zu meiner Berufung.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-light mb-4">Inspiration & Technik</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Meine Inspirationsquellen sind vielfältig: Die subtilen Farbverläufe eines 
                  Sonnenuntergangs, die raue Textur alter Mauern, die Dynamik menschlicher 
                  Bewegungen - all das fließt in meine Arbeiten ein.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Ich arbeite bevorzugt mit Ölfarben und Acryl, wobei ich beide Techniken 
                  oft in einem Werk kombiniere. Die Langsamkeit des Öls erlaubt mir meditative 
                  Momente, während Acryl spontane, expressive Gesten ermöglicht.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-light mb-4">Philosophie</h2>
                <p className="text-gray-700 leading-relaxed">
                  Für mich ist Kunst mehr als nur Dekoration - sie ist ein Dialog zwischen 
                  Künstler und Betrachter. Jedes meiner Werke ist eine Einladung, innezuhalten, 
                  zu reflektieren und eigene Emotionen und Erinnerungen zu entdecken.
                </p>
              </div>
            </div>
          </div>

          {/* Zusätzliche Informationen */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-light mb-3">Ausbildung</h3>
              <p className="text-gray-600">
                Studium der Bildenden Künste<br />
                Diverse Meisterkurse und Workshops
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-light mb-3">Techniken</h3>
              <p className="text-gray-600">
                Ölmalerei<br />
                Acrylmalerei<br />
                Mischtechniken
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-light mb-3">Ausstellungen</h3>
              <p className="text-gray-600">
                Regelmäßige Einzel- und<br />
                Gruppenausstellungen
              </p>
            </div>
          </div>

          {/* Atelier Bilder */}
          <div className="mt-16">
            <h2 className="text-3xl font-light text-center mb-8">Einblicke ins Atelier</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/WhatsApp Image 2025-08-29 at 15.43.37.jpeg"
                  alt="Atelier 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/WhatsApp Image 2025-08-29 at 15.48.20.jpeg"
                  alt="Atelier 2"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/WhatsApp Image 2025-08-29 at 15.37.42.jpeg"
                  alt="Atelier 3"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}