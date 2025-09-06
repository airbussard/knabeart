# Kunstwebsite für Michaela Knabe

## 🎨 Projektübersicht

**Domain:** knabeart.de  
**GitHub:** https://github.com/airbussard/knabeart.git  
**Deployment:** Caprover (Docker-basiert)  
**Tech-Stack:** Next.js 15, TypeScript, Tailwind CSS, Supabase  

Die Website ist eine moderne, responsive Kunstwebsite für die Künstlerin Michaela Knabe mit integriertem Admin-Bereich zur Verwaltung der Kunstwerke.

## ✅ Implementierte Features

### Frontend (Öffentlich)
- **Homepage** - Vorstellung der Künstlerin mit ausgewählten Werken
- **Galerie** - Dynamische Anzeige aller Kunstwerke aus der Datenbank
- **Über mich** - Ausführliche Künstlerbiografie mit Atelierbildern
- **Impressum & Datenschutz** - Vollständige rechtliche Seiten
- **Responsive Design** - Mobile-first Ansatz, optimiert für alle Geräte
- **Typografie** - Verbesserte Lesbarkeit mit Kontrasten zwischen Vor-/Nachname

### Backend (Admin-Bereich)
- **Authentifizierung** - Supabase Auth mit E-Mail/Passwort
- **Admin-Dashboard** - Übersicht aller Kunstwerke unter `/admin`
- **CRUD-Operationen** - Kunstwerke anlegen, bearbeiten, löschen
- **Login-Seite** - Geschützter Bereich unter `/login`

### Kunstwerk-Attribute
- Name und Beschreibung
- Typ (Ölgemälde, Acrylgemälde, Aquarell, Mischtechnik, Zeichnung, Sonstiges)
- Gerahmt/Ungerahmt Status
- Maße (Breite x Höhe x Tiefe in cm)
- Preis (mit Kleinunternehmerregelung gem. § 19 UStG)
- Bild-URL (temporär, Bildupload folgt)
- Verkauft/Verfügbar Status
- Featured-Markierung

## 🚀 Deployment & Konfiguration

### Umgebungsvariablen (in Caprover)
```
NEXT_PUBLIC_SUPABASE_URL=<deine-supabase-url>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<dein-anon-key>
SUPABASE_SERVICE_ROLE_KEY=<dein-service-role-key>
```

### Port-Konfiguration
- **Aktuell:** Port 80 (für Caprover)
- **Lokal:** Port 3000 (npm run dev)
- Docker Container läuft auf 0.0.0.0:80

### Docker-Optimierungen
- Multi-Stage Build (3 Stages: deps, builder, runner)
- Standalone Next.js Output (~150MB statt ~400MB)
- Non-root User für Sicherheit
- Umfassende .dockerignore Datei

## 💾 Supabase Datenbank

### Setup-Anleitung
1. SQL-Schema ausführen: `supabase/schema-update.sql`
2. Admin-Benutzer in Supabase Authentication anlegen
3. Storage Bucket "artworks" wird automatisch erstellt

### Tabellen
- **artworks** - Kunstwerke mit allen Attributen
- **contact_requests** - Kontaktanfragen (vorbereitet)

### RLS (Row Level Security)
- Öffentliche Leserechte für Kunstwerke
- Nur authentifizierte Nutzer können Kunstwerke verwalten
- Kontaktanfragen können von allen erstellt werden

## 🔧 Bekannte Probleme & Lösungen

### Problem: "No space left on device" beim Deployment
**Lösung:** Server-Cleanup durchführen
```bash
docker system prune -a -f
docker builder prune -a -f
docker volume prune -f
```

### Problem: Build-Fehler wegen fehlender Umgebungsvariablen
**Lösung:** Lazy-Loading des Supabase Clients implementiert, Placeholder-Werte im Dockerfile

### Problem: NGINX 502 Error
**Lösung:** Port von 3000 auf 80 geändert, Binding auf 0.0.0.0

## 📋 Noch ausstehende Features

1. **Bildupload-Funktionalität**
   - Integration mit Supabase Storage
   - Drag & Drop Interface
   - Bildoptimierung

2. **Kontaktformular**
   - reCAPTCHA Integration
   - E-Mail-Validierung
   - Spam-Schutz

3. **E-Mail-Service**
   - Resend oder Supabase Edge Functions
   - Kontaktanfragen-Benachrichtigungen
   - Anfrage-Bestätigungen

4. **Kunstwerk-Anfrage-System**
   - "Anfragen" Button bei jedem Kunstwerk
   - Vorausgefülltes Kontaktformular
   - Anfrage-Tracking im Admin-Bereich

5. **Mehrsprachigkeit (DE/EN)**
   - Sprachumschalter in Navigation
   - next-intl Integration
   - Übersetzungen für alle Seiten

## 🛠 Entwicklung

### Lokale Entwicklung
```bash
npm install
npm run dev
# Öffne http://localhost:3000
```

### Build testen
```bash
npm run build
npm start
```

### Deployment
```bash
git add .
git commit -m "Beschreibung"
git push
# Caprover deployed automatisch
```

## 📁 Projektstruktur

```
/app
  /admin          - Admin-Dashboard
    /artworks
      /new        - Neues Kunstwerk anlegen
      /[id]/edit  - Kunstwerk bearbeiten
  /gallery        - Öffentliche Galerie
  /about          - Über mich Seite
  /contact        - Kontaktseite (in Arbeit)
  /login          - Admin-Login
  /impressum      - Impressum
  /datenschutz    - Datenschutzerklärung

/components
  Navigation.tsx  - Responsive Navigation mit Hamburger-Menü
  Footer.tsx      - Footer mit Links und Rechtlichem

/lib/supabase
  server.ts       - Server-seitiger Supabase Client
  client.ts       - Browser Supabase Client
  middleware.ts   - Auth Middleware

/public
  artwork1-7.jpeg - Temporäre Kunstwerk-Bilder

/supabase
  schema.sql      - Initiales Datenbank-Schema
  schema-update.sql - Bereinigtes Update-Schema
  SETUP.md        - Detaillierte Setup-Anleitung
```

## 🎨 Design-Prinzipien

- **Clean & Modern** - Minimalistisches Design mit Fokus auf die Kunst
- **Hell & Freundlich** - Weiße Hintergründe, sanfte Grautöne
- **Mobile-First** - Optimiert für Smartphones, skaliert zu Desktop
- **Typografie** - Klare Hierarchie, gute Lesbarkeit
- **Performance** - Optimierte Bilder, lazy loading, schnelle Ladezeiten

## 📝 Wichtige Hinweise

- **Immer auf Deutsch** kommunizieren (Mehrsprachigkeit folgt)
- **Nach jeder Änderung** committen und pushen
- **Kleinunternehmerregelung** bei Preisen ausweisen
- **Bilder** aktuell aus /public, später aus Supabase Storage
- **Admin-Zugang** muss in Supabase erstellt werden

## 🚨 Server-Wartung

Bei Speicherplatz-Problemen das Cleanup-Script verwenden:
```bash
bash scripts/docker-cleanup.sh
```

Oder manuell auf dem Server:
```bash
docker system prune -a -f
df -h  # Speicherplatz prüfen
```

---

**Letzte Aktualisierung:** 30. August 2025  
**Version:** 0.1.1  
**Status:** In aktiver Entwicklung