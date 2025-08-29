# Michaela Knabe - Kunstwebsite

Eine moderne Kunstwebsite für die Künstlerin Michaela Knabe, entwickelt mit Next.js und Supabase.

## Features

- 🎨 Galerie mit Kunstwerken aus der Datenbank
- 👤 Künstlervorstellung und About-Seite
- 📧 Kontaktformular mit Spam-Schutz
- 🔐 Admin-Bereich zum Verwalten der Kunstwerke
- 🌐 Mehrsprachigkeit (DE/EN) - in Entwicklung
- 📱 Vollständig responsive

## Tech Stack

- **Frontend:** Next.js 14, TypeScript, Tailwind CSS
- **Backend:** Supabase (PostgreSQL)
- **Deployment:** Caprover
- **Bildverwaltung:** Lokale Speicherung auf Server

## Installation

### Voraussetzungen

- Node.js 20+
- npm oder yarn
- Supabase Account

### Lokale Entwicklung

1. Repository klonen:
```bash
git clone https://github.com/airbussard/knabeart.git
cd knabeart
```

2. Dependencies installieren:
```bash
npm install
```

3. Umgebungsvariablen einrichten:
Erstelle eine `.env.local` Datei:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

4. Datenbank einrichten:
Führe das SQL-Script in `supabase/schema.sql` in deinem Supabase Dashboard aus.

5. Entwicklungsserver starten:
```bash
npm run dev
```

Die App läuft dann unter [http://localhost:3000](http://localhost:3000)

## Deployment mit Caprover

### Vorbereitung

1. Caprover App erstellen
2. Umgebungsvariablen in Caprover setzen:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`

### Deployment

Das Projekt ist bereits mit Dockerfile und captain-definition für Caprover konfiguriert.

1. Caprover CLI installieren:
```bash
npm install -g caprover
```

2. Mit Caprover verbinden:
```bash
caprover login
```

3. Deploy:
```bash
caprover deploy
```

## Projektstruktur

```
├── app/                # Next.js App Router Seiten
├── components/         # React Komponenten
├── lib/               # Utility Funktionen und Configs
├── public/            # Statische Assets und Bilder
├── types/             # TypeScript Type Definitionen
├── supabase/          # Datenbank Schema
└── Dockerfile         # Docker Config für Caprover
```

## Sicherheit

**Wichtig:** Niemals API Keys oder Secrets im Code committen! Alle sensiblen Daten sollten als Umgebungsvariablen gespeichert werden.

## Lizenz

Alle Rechte vorbehalten. © 2025 Michaela Knabe