'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createBrowserSupabaseClient } from '@/lib/supabase/client'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

type ArtworkType = 'oil' | 'acrylic' | 'watercolor' | 'mixed' | 'drawing' | 'other'

export default function NewArtworkPage() {
  const router = useRouter()
  const supabase = createBrowserSupabaseClient()
  
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    type: 'oil' as ArtworkType,
    framed: false,
    width: '',
    height: '',
    depth: '',
    price: '',
    image_path: ''
  })
  
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const { error } = await supabase
        .from('artworks')
        .insert([{
          ...formData,
          width: parseInt(formData.width),
          height: parseInt(formData.height),
          depth: formData.depth ? parseInt(formData.depth) : null,
          price: parseFloat(formData.price)
        }])

      if (error) throw error

      router.push('/admin')
      router.refresh()
    } catch (err) {
      setError('Fehler beim Speichern des Kunstwerks')
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow rounded-lg">
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-light">Neues Kunstwerk anlegen</h1>
              <Link
                href="/admin"
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
              >
                <ArrowLeft className="w-4 h-4" />
                Zurück
              </Link>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name des Kunstwerks *
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Beschreibung
              </label>
              <textarea
                id="description"
                rows={4}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="type" className="block text-sm font-medium text-gray-700">
                Technik *
              </label>
              <select
                id="type"
                required
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value as ArtworkType })}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
              >
                <option value="oil">Ölgemälde</option>
                <option value="acrylic">Acrylgemälde</option>
                <option value="watercolor">Aquarell</option>
                <option value="mixed">Mischtechnik</option>
                <option value="drawing">Zeichnung</option>
                <option value="other">Sonstiges</option>
              </select>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="framed"
                checked={formData.framed}
                onChange={(e) => setFormData({ ...formData, framed: e.target.checked })}
                className="h-4 w-4 text-gray-600 focus:ring-gray-500 border-gray-300 rounded"
              />
              <label htmlFor="framed" className="ml-2 block text-sm text-gray-900">
                Gerahmt
              </label>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <label htmlFor="width" className="block text-sm font-medium text-gray-700">
                  Breite (cm) *
                </label>
                <input
                  type="number"
                  id="width"
                  required
                  value={formData.width}
                  onChange={(e) => setFormData({ ...formData, width: e.target.value })}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="height" className="block text-sm font-medium text-gray-700">
                  Höhe (cm) *
                </label>
                <input
                  type="number"
                  id="height"
                  required
                  value={formData.height}
                  onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="depth" className="block text-sm font-medium text-gray-700">
                  Tiefe (cm)
                </label>
                <input
                  type="number"
                  id="depth"
                  value={formData.depth}
                  onChange={(e) => setFormData({ ...formData, depth: e.target.value })}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                Preis (€) *
              </label>
              <input
                type="number"
                id="price"
                required
                step="0.01"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
              />
              <p className="mt-1 text-sm text-gray-500">
                Gemäß § 19 UStG wird keine Umsatzsteuer berechnet
              </p>
            </div>

            <div>
              <label htmlFor="image_path" className="block text-sm font-medium text-gray-700">
                Bild-URL (temporär)
              </label>
              <input
                type="text"
                id="image_path"
                value={formData.image_path}
                onChange={(e) => setFormData({ ...formData, image_path: e.target.value })}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                placeholder="/artwork1.jpeg"
              />
              <p className="mt-1 text-sm text-gray-500">
                Bildupload-Funktion folgt in Kürze
              </p>
            </div>

            {error && (
              <div className="rounded-md bg-red-50 p-4">
                <p className="text-sm text-red-800">{error}</p>
              </div>
            )}

            <div className="flex justify-end gap-3">
              <Link
                href="/admin"
                className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Abbrechen
              </Link>
              <button
                type="submit"
                disabled={loading}
                className="px-4 py-2 bg-gray-900 text-white rounded-md text-sm font-medium hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Speichern...' : 'Speichern'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}