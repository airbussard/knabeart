export interface Artwork {
  id: string
  name: string
  description: string
  type: 'oil' | 'acrylic' | 'watercolor' | 'mixed' | 'drawing' | 'other'
  framed: boolean
  width: number
  height: number
  depth?: number
  price: number
  image_path: string
  created_at: string
  updated_at: string
}

export interface Inquiry {
  id: string
  artwork_id?: string
  name: string
  email: string
  message: string
  created_at: string
}