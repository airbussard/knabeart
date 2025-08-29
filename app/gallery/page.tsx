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
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-light mb-4">Galerie</h1>
          <p className="text-xl text-gray-600">Entdecken Sie meine Kunstwerke</p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayArtworks.map((artwork) => (
              <div key={artwork.id} className="group">
                <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <Image
                    src={artwork.image_path}
                    alt={artwork.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="text-lg font-semibold">{artwork.name}</h3>
                      <p className="text-sm opacity-90">
                        {typeTranslations[artwork.type as ArtworkType]} • {artwork.width} x {artwork.height} cm
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4">
                  <h3 className="text-lg font-light">{artwork.name}</h3>
                  <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                    {artwork.description}
                  </p>
                  <div className="flex justify-between items-center mt-3">
                    <span className="text-lg font-light">
                      €{artwork.price.toLocaleString('de-DE')}*
                    </span>
                    <button className="text-sm border border-gray-900 px-4 py-1 rounded hover:bg-gray-900 hover:text-white transition-colors">
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Hinweis Kleinunternehmerregelung */}
          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500">
              * Gemäß § 19 UStG wird keine Umsatzsteuer berechnet.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}