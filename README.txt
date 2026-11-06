

LANGUAGES (EN, DE, IT, CZ)
--------------------------
All texts live in lang/en.json, lang/de.json, lang/it.json and lang/cz.json (same keys in every file;
a missing key falls back to English). Edit the JSON files to change any wording - app.js has no visible texts left.

Choosing the language
  - By URL:  index.html?lang=de   (also en, it, cz; "cs" works too). Deep links keep working:
             index.html?lang=it#details
  - By the EN/DE/IT/CZ button in the top right corner of every screen (it updates the URL and is remembered).
  - Without ?lang= the app uses the remembered choice, then the browser language, then English.

Notes
  - The JSON files are loaded with fetch(), so the prototype must be served over http(s) (GitHub Pages is fine).
    Opening index.html by double-click (file://) will not load the texts; use "python3 -m http.server" locally.
  - "voice.lang" in each file is the speech language (en-US, de-DE, it-IT, cs-CZ) for the voice assistant.
    The "voice.re.*" entries are '|' separated word lists used to understand spoken/typed answers - extend them freely.
  - Texts with {name} placeholders must keep the placeholder in every language.
  - Names, addresses and the sample person data (Jan Dvořák, services, ...) are demo data and are not translated.
  - The internal #index overview page stays English.
