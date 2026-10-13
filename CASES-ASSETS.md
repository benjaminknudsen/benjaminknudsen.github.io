# Materiale til de nye eksamenscases

Alle nedenstående SVG-filer er tydeligt markerede billedpladser, ikke screenshots eller dokumentation. Erstat dem med egne eksportfiler med samme navne. Ved PNG/WebP-eksport skal filendelsen i imports i `src/components/exam-case-page.jsx` ændres; projektkortenes hero-imports ligger i `src/data/projects.js`.

## Rouge Again

Mappe: `src/assets/images/rouge-again/`

| Filnavn | Eksport fra Figma |
| --- | --- |
| `prototype-hero.svg` | Landingpage eller et samlet overblik over prototypen. Bruges også på projektkortet. |
| `brandidentitet.svg` | Dokumenteret farvepalette, skrifttyper og Rouge Again/La Rouge-identitet. |
| `koeberflow.svg` | Produktoversigt, produktdetaljer, kurv, checkout og ordrebekræftelse samlet i en læsbar eksport. |
| `saelgerflow.svg` | Oprettelse, produktinformation, pris, preview og publicering. |
| `profil-og-qr.svg` | Profil, brugerens produkter og den relevante QR-kodefunktion. |

Tilføj URL til Figma-prototypen og relevant projektdokumentation i `CaseLinks` i den fælles casekomponent. Indtil da vises afventende labels frem for falske links.

Den brune palette (#684b39, #eee5db) og Georgia til overskrifter er foreløbige valg ud fra designbriefet. Ingen eksisterende assets kunne entydigt henføres til Rouge Again. Afstem palette, typografi og designbegrundelser med originalmaterialet.

Gennemgå også:

- Den individuelle rollefordeling, især refleksionen, som foreløbig undgår at tilskrive bestemte opgaver til dig.
- Konkrete researchmetoder, målgruppeindsigter og konkurrentfund. Teksten beskriver positioneringsovervejelser, ikke dokumenterede undersøgelser.
- Om begrundelserne for navn, visuelt hierarki og preview stemmer med arbejdet.
- QR-funktionens faktiske anvendelse.
- Leverancerne og eventuelle tests. Der påstås ingen gennemførte brugertests, handler, konverteringsmålinger eller målbar miljøeffekt.

## Mellemrum

Mappe: `src/assets/images/mellemrum/`

| Filnavn | Materiale fra applikationen/projektet |
| --- | --- |
| `applikation-hero.svg` | Screenshot af den publicerede applikations centrale visning. Bruges også på projektkortet. |
| `databaserelationer.svg` | Faktisk Supabase-diagram med venues, events og registrations. |
| `tilmeldingsflow.svg` | Screenshots af aktivitet, tilmelding og håndtering af tilmeldinger. |
| `ui-states.svg` | Dokumenterede loading-, error-, empty- og success-states. |

Live-linket er indsat. Tilføj det faktiske GitHub-/dokumentationslink i `CaseLinks`; repository-adressen er ikke gættet ud fra deployment-URL'en.

Det grønne/offwhite tema er foreløbigt. Ingen lokale assets kunne entydigt knyttes til Mellemrum, og live-siden kunne ikke læses via webværktøjet. Afstem farver og screenshots med applikationen.

Gennemgå prioriteringernes begrundelser og refleksionen. Teksten bygger på de arbejdsområder, du oplyste, men konkrete databasefelter, fejlscenarier, kodeændringer og målinger kræver original dokumentation. Der påstås ingen målt hastighedsforbedring eller brugertest.

## Tekstbudget og kontrol

Kør `python3 scripts/count-exam-copy.py` for at tælle brødtekst inklusive mellemrum. Scriptet tæller introduktioner og sektionsafsnit; overskrifter, badges, navigation, links, billedtekster og tekst inde i billeder udelades. Vuuh tælles efter samme metode som den tidligere audit.

Ved implementeringen:

- Vuuh: 4.200 anslag.
- Rouge Again: 4.306 anslag.
- Mellemrum: 3.187 anslag.
- I alt: 11.693 anslag. Buffer: 307 anslag.

Vuuhs indhold og design er ikke ændret af denne udvidelse.

Forsiden viser Lynk, Blunt, Rouge Again og Vuuh i den rækkefølge. Projektoversigten viser seks unikke projekter, også Lumina og Mellemrum. De to nye cases bruger den eksisterende dynamiske projektroute.

Build og rendering af forsiden, projektoversigten og alle seks projektsider er kontrolleret. GitHub Pages-workflowet bevarer den eksisterende `404.html`-fallback. Der er ikke foretaget deployment eller fuld visuel browserkontrol.
