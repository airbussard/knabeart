# Supabase Datenbank-Setup

## Einrichtung der Datenbank

1. Melde dich in deinem Supabase-Dashboard an
2. Gehe zu "SQL Editor"
3. Kopiere den Inhalt von `schema.sql`
4. Führe das SQL-Skript aus

## Admin-Benutzer erstellen

Um den Admin-Bereich nutzen zu können, muss ein Benutzer angelegt werden:

1. Gehe zu "Authentication" → "Users"
2. Klicke auf "Invite user"
3. Gib die E-Mail-Adresse der Künstlerin ein
4. Der Benutzer erhält eine E-Mail mit einem Link zum Setzen des Passworts

## Umgebungsvariablen

Folgende Umgebungsvariablen müssen in Caprover gesetzt werden:
- `NEXT_PUBLIC_SUPABASE_URL`: Die URL deiner Supabase-Instanz
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Der öffentliche Anon-Key
- `SUPABASE_SERVICE_ROLE_KEY`: Der Service-Role-Key (nur für Server-Operationen)

## Tabellen-Struktur

### artworks
- Speichert alle Kunstwerke mit Details wie Name, Beschreibung, Typ, Größe, Preis
- Unterstützt verschiedene Kunsttypen (Öl, Acryl, Aquarell, etc.)
- Felder für Verkaufsstatus und Featured-Markierung

### contact_requests
- Speichert Kontaktanfragen von Besuchern
- Kann mit einem spezifischen Kunstwerk verknüpft werden
- Status-Tracking (neu, gelesen, beantwortet, archiviert)