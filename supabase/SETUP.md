# Supabase Setup-Anleitung

## 1. Datenbank einrichten

### Option A: Bereinigtes Script (empfohlen)
Verwende `schema-update.sql` - dieses Script kann mehrfach ausgeführt werden ohne Fehler:

1. Gehe zu deinem Supabase Dashboard
2. Navigiere zu "SQL Editor"
3. Kopiere den kompletten Inhalt von `schema-update.sql`
4. Füge ihn in den SQL Editor ein
5. Klicke auf "Run"

### Option B: Vollständiges Schema
Falls du eine frische Datenbank hast, kannst du `schema.sql` verwenden.

## 2. Admin-Benutzer erstellen

### Schritt 1: Benutzer anlegen
1. Gehe zu "Authentication" → "Users" in deinem Supabase Dashboard
2. Klicke auf "Invite user"
3. Gib die E-Mail-Adresse ein (z.B. michaela@knabeart.de)
4. Der Benutzer erhält eine E-Mail mit einem Link zum Setzen des Passworts

### Schritt 2: Passwort setzen (Alternative)
Falls die E-Mail nicht ankommt, kannst du das Passwort manuell setzen:
1. Klicke auf "Add user" → "Create new user"
2. Gib E-Mail und Passwort ein
3. Aktiviere "Auto Confirm User"

## 3. Umgebungsvariablen prüfen

Stelle sicher, dass folgende Variablen in Caprover gesetzt sind:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

## 4. Login testen

1. Öffne https://knabeart.de/login
2. Melde dich mit den erstellten Zugangsdaten an
3. Du solltest zum Admin-Dashboard weitergeleitet werden

## 5. Erste Kunstwerke anlegen

Im Admin-Dashboard kannst du:
- Neue Kunstwerke anlegen
- Bestehende bearbeiten
- Details wie Preis, Größe, Technik angeben

## Troubleshooting

### "Invalid login credentials"
- Prüfe, ob der Benutzer in Supabase existiert
- Stelle sicher, dass der Benutzer bestätigt ist (confirmed)

### "Tabelle existiert bereits"
- Verwende `schema-update.sql` statt `schema.sql`

### Keine Berechtigung zum Anlegen von Kunstwerken
- Prüfe, ob du angemeldet bist
- Stelle sicher, dass die RLS-Policies korrekt gesetzt sind

## Nächste Schritte

Nach dem erfolgreichen Setup kannst du:
1. Kunstwerke im Admin-Bereich anlegen
2. Diese werden automatisch in der Galerie angezeigt
3. Besucher können die Kunstwerke durchstöbern

Für erweiterte Funktionen (Bildupload, Kontaktformular) siehe die entsprechenden Dokumentationen.