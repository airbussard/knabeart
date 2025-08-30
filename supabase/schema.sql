-- Erstelle Tabelle für Kunstwerke
CREATE TABLE IF NOT EXISTS artworks (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  type VARCHAR(50) NOT NULL CHECK (type IN ('oil', 'acrylic', 'watercolor', 'mixed', 'drawing', 'other')),
  framed BOOLEAN DEFAULT false,
  width INTEGER NOT NULL,
  height INTEGER NOT NULL,
  depth INTEGER,
  price DECIMAL(10, 2) NOT NULL,
  image_path TEXT,
  image_url TEXT,
  sold BOOLEAN DEFAULT false,
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Erstelle Tabelle für Kontaktanfragen
CREATE TABLE IF NOT EXISTS contact_requests (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  subject VARCHAR(255),
  message TEXT NOT NULL,
  artwork_id UUID REFERENCES artworks(id) ON DELETE SET NULL,
  status VARCHAR(50) DEFAULT 'new' CHECK (status IN ('new', 'read', 'answered', 'archived')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Erstelle Storage Bucket für Kunstwerk-Bilder
INSERT INTO storage.buckets (id, name, public)
VALUES ('artworks', 'artworks', true)
ON CONFLICT (id) DO NOTHING;

-- RLS (Row Level Security) Policies
ALTER TABLE artworks ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_requests ENABLE ROW LEVEL SECURITY;

-- Öffentliche Leserechte für Kunstwerke
CREATE POLICY "Kunstwerke sind öffentlich lesbar" ON artworks
  FOR SELECT USING (true);

-- Nur authentifizierte Nutzer können Kunstwerke bearbeiten
CREATE POLICY "Nur authentifizierte Nutzer können Kunstwerke erstellen" ON artworks
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Nur authentifizierte Nutzer können Kunstwerke aktualisieren" ON artworks
  FOR UPDATE USING (auth.role() = 'authenticated');

CREATE POLICY "Nur authentifizierte Nutzer können Kunstwerke löschen" ON artworks
  FOR DELETE USING (auth.role() = 'authenticated');

-- Kontaktanfragen können von allen erstellt werden
CREATE POLICY "Jeder kann Kontaktanfragen erstellen" ON contact_requests
  FOR INSERT WITH CHECK (true);

-- Nur authentifizierte Nutzer können Kontaktanfragen lesen
CREATE POLICY "Nur authentifizierte Nutzer können Kontaktanfragen lesen" ON contact_requests
  FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Nur authentifizierte Nutzer können Kontaktanfragen aktualisieren" ON contact_requests
  FOR UPDATE USING (auth.role() = 'authenticated');

-- Trigger für updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = TIMEZONE('utc', NOW());
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_artworks_updated_at BEFORE UPDATE ON artworks
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Storage Policies für Kunstwerk-Bilder
CREATE POLICY "Jeder kann Kunstwerk-Bilder ansehen" ON storage.objects
  FOR SELECT USING (bucket_id = 'artworks');

CREATE POLICY "Authentifizierte Nutzer können Bilder hochladen" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'artworks' AND auth.role() = 'authenticated');

CREATE POLICY "Authentifizierte Nutzer können Bilder aktualisieren" ON storage.objects
  FOR UPDATE USING (bucket_id = 'artworks' AND auth.role() = 'authenticated');

CREATE POLICY "Authentifizierte Nutzer können Bilder löschen" ON storage.objects
  FOR DELETE USING (bucket_id = 'artworks' AND auth.role() = 'authenticated');