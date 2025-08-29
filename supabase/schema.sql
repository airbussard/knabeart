-- Erstelle Enum für Kunstwerk-Typen
CREATE TYPE artwork_type AS ENUM ('oil', 'acrylic', 'watercolor', 'mixed', 'drawing', 'other');

-- Tabelle für Kunstwerke
CREATE TABLE artworks (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    description TEXT,
    type artwork_type NOT NULL DEFAULT 'other',
    framed BOOLEAN DEFAULT false,
    width DECIMAL(10, 2) NOT NULL,
    height DECIMAL(10, 2) NOT NULL,
    depth DECIMAL(10, 2),
    price DECIMAL(10, 2) NOT NULL,
    image_path VARCHAR(500) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabelle für Anfragen
CREATE TABLE inquiries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    artwork_id UUID REFERENCES artworks(id) ON DELETE SET NULL,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Update Trigger für updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_artworks_updated_at BEFORE UPDATE
    ON artworks FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Row Level Security
ALTER TABLE artworks ENABLE ROW LEVEL SECURITY;
ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

-- Policies für öffentlichen Lesezugriff auf Kunstwerke
CREATE POLICY "Kunstwerke sind öffentlich sichtbar" ON artworks
    FOR SELECT USING (true);

-- Policies für Anfragen (nur erstellen erlaubt)
CREATE POLICY "Jeder kann Anfragen erstellen" ON inquiries
    FOR INSERT WITH CHECK (true);