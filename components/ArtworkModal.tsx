'use client'

import Image from 'next/image';
import { X } from 'lucide-react';
import { Artwork } from '@/types/database';

interface ArtworkModalProps {
  artwork: Artwork;
  isOpen: boolean;
  onClose: () => void;
}

export default function ArtworkModal({ artwork, isOpen, onClose }: ArtworkModalProps) {
  if (!isOpen) return null;

  const typeTranslations = {
    oil: 'Ölgemälde',
    acrylic: 'Acrylgemälde',
    watercolor: 'Aquarell',
    mixed: 'Mischtechnik',
    drawing: 'Zeichnung',
    other: 'Sonstiges'
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75">
      <div className="relative bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="grid md:grid-cols-2 gap-6 p-6">
          <div className="relative aspect-square rounded-lg overflow-hidden">
            <Image
              src={artwork.image_path}
              alt={artwork.name}
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-4">
            <div>
              <h2 className="text-2xl font-light mb-2">{artwork.name}</h2>
              <p className="text-gray-600">{artwork.description}</p>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Technik:</span>
                <span>{typeTranslations[artwork.type]}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Maße:</span>
                <span>{artwork.width} x {artwork.height} {artwork.depth ? `x ${artwork.depth}` : ''} cm</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Rahmung:</span>
                <span>{artwork.framed ? 'Gerahmt' : 'Ungerahmt'}</span>
              </div>
              <div className="flex justify-between text-lg font-semibold">
                <span>Preis:</span>
                <span>€{artwork.price.toLocaleString('de-DE')}*</span>
              </div>
            </div>

            <div className="pt-4 border-t">
              <button className="w-full bg-gray-900 text-white py-3 rounded hover:bg-gray-800 transition-colors">
                Anfrage senden
              </button>
              <p className="text-xs text-gray-500 mt-2 text-center">
                * Gemäß § 19 UStG wird keine Umsatzsteuer berechnet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}