import { createServerSupabaseClient } from '@/lib/supabase/server';
import Image from 'next/image';

export default async function GalleryPage() {
  const supabase = await createServerSupabaseClient();
  
  const { data: artworks } = await supabase
    .from('artworks')
    .select('*')
    .order('created_at', { ascending: false });

  // Temporäre Kunstwerke für die Demonstration (bis Werke in der DB sind)
  const tempArtworks = [
    {
      id: '1',
      name: 'Morgenröte',
      description: 'Ein impressionistisches Werk, das den Beginn eines neuen Tages einfängt.',
      type: 'oil' as const,
      framed: true,
      width: 60,
      height: 80,
      price: 1200,
      image_path: '/artwork1.jpeg'
    },
    {
      id: '2',
      name: 'Abstrakte Emotion',
      description: 'Kraftvolle Farbkompositionen, die Gefühle in ihrer reinsten Form darstellen.',
      type: 'acrylic' as const,
      framed: false,
      width: 100,
      height: 70,
      price: 1500,
      image_path: '/artwork2.jpeg'
    },
    {
      id: '3',
      name: 'Naturgeflüster',
      description: 'Die sanfte Kommunikation zwischen Mensch und Natur.',
      type: 'mixed' as const,
      framed: true,
      width: 50,
      height: 50,
      price: 800,
      image_path: '/artwork3.jpeg'
    },
    {
      id: '4',
      name: 'Urbane Melodie',
      description: 'Das pulsierende Leben der Stadt in Farbe und Form.',
      type: 'acrylic' as const,
      framed: true,
      width: 80,
      height: 60,
      price: 1100,
      image_path: '/artwork4.jpeg'
    },
    {
      id: '5',
      name: 'Stille Kontemplation',
      description: 'Ein Moment der Ruhe in einer hektischen Welt.',
      type: 'oil' as const,
      framed: false,
      width: 70,
      height: 90,
      price: 1400,
      image_path: '/artwork5.jpeg'
    },
    {
      id: '6',
      name: 'Farbsymphonie',
      description: 'Eine harmonische Komposition aus Farben und Texturen.',
      type: 'mixed' as const,
      framed: true,
      width: 90,
      height: 90,
      price: 1600,
      image_path: '/artwork6.jpeg'
    },
  ];

  const displayArtworks = artworks && artworks.length > 0 ? artworks : tempArtworks;

  type ArtworkType = 'oil' | 'acrylic' | 'watercolor' | 'mixed' | 'drawing' | 'other';

  const typeTranslations = {
    oil: 'Ölgemälde',
    acrylic: 'Acrylgemälde',
    watercolor: 'Aquarell',
    mixed: 'Mischtechnik',
    drawing: 'Zeichnung',
    other: 'Sonstiges'
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Mobile optimiert */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light mb-3 sm:mb-4">Galerie</h1>
          <p className="text-lg sm:text-xl text-gray-600">Entdecken Sie meine Kunstwerke</p>
        </div>
      </section>

      {/* Gallery Grid - Fully Responsive */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Mobile: 1 Spalte, Tablet: 2 Spalten, Desktop: 3 Spalten */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {displayArtworks.map((artwork) => (
              <div key={artwork.id} className="group">
                {/* Bild-Container mit aspect ratio */}
                <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  <Image
                    src={artwork.image_path}
                    alt={artwork.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Overlay mit Infos - nur auf Hover desktop, immer sichtbar mobile */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="text-base sm:text-lg font-semibold">{artwork.name}</h3>
                      <p className="text-xs sm:text-sm opacity-90">
                        {typeTranslations[artwork.type as ArtworkType]} • {artwork.width} x {artwork.height} cm
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Info-Bereich unter dem Bild */}
                <div className="mt-3 sm:mt-4">
                  <h3 className="text-base sm:text-lg font-light">{artwork.name}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm mt-1 line-clamp-2">
                    {artwork.description}
                  </p>
                  {/* Preis und Button - Mobile optimiert */}
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-3 gap-2 sm:gap-0">
                    <span className="text-base sm:text-lg font-light">
                      €{artwork.price.toLocaleString('de-DE')}*
                    </span>
                    <button className="w-full sm:w-auto text-xs sm:text-sm border border-gray-900 px-4 py-2 rounded hover:bg-gray-900 hover:text-white transition-colors touch-manipulation min-h-[40px] flex items-center justify-center">
                      Details ansehen
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Hinweis Kleinunternehmerregelung - Mobile optimiert */}
          <div className="mt-8 sm:mt-12 text-center">
            <p className="text-xs sm:text-sm text-gray-500 px-4 sm:px-0">
              * Gemäß § 19 UStG wird keine Umsatzsteuer berechnet.
            </p>
          </div>

          {/* Keine Kunstwerke Hinweis (falls leer) */}
          {displayArtworks.length === 0 && (
            <div className="text-center py-12 sm:py-20">
              <p className="text-gray-500 text-sm sm:text-base">
                Zurzeit sind keine Kunstwerke verfügbar. Bitte schauen Sie später wieder vorbei.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}