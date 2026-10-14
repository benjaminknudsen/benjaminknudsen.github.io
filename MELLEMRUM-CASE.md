# Mellemrum: teknisk eksamenscase

Rute: `/projects/mellemrum`.

Ny selvstændig komponent: `src/pages/mellemrum-project-page.jsx`.
Isolerede styles: `src/pages/mellemrum-project-page.module.css`.
Den eksisterende projektroute peger nu på den nye komponent. De seks projektkort og de andre cases er bevaret.

## Tilføj faktiske screenshots

Mappe: `src/assets/images/mellemrum/`.

- `app-overview.webp`: den publicerede apps eventoversigt. Vis søgning, relevante eventkort og navigation.
- `registration-flow.webp`: faktisk tilmeldingsformular og/eller administration med opdatering, sletning og sortering. Brug fiktive testdata.
- `error-recovery.webp`: faktisk fejlfeedback med mulighed for at prøve igen; gerne sammen med loading/empty/success i en læsbar eksport.

Filerne indlæses automatisk ved næste build. Indtil de er tilføjet, vises tydelige screenshot-pladsholdere. De tidligere SVG-billedpladser bruges ikke som dokumentation. Der er ikke opfundet screenshots.

Audit: Tilføj `public/docs/mellemrum-audit.pdf`. Ved næste build bliver den afventende label automatisk til et link. Auditfilen bør vise testopsætning, gentagne Lighthouse Mobile-kørsler og de oplyste resultater.

## Kilder og faglig kontrol

Live demo og repository er linket. Repositoryets README dokumenterer blandt andet relationerne mellem venues, events og registrations samt Supabase REST API. Lighthouse-tallene bygger på oplysningerne i brugerens opgave; en lokal auditfil mangler endnu.

Der anvendes ingen live-status, falske FIXED-badges eller påstande om brugerdata. Performance-sektionen skelner mellem Lighthouse-tests og brugerdata. Den tekniske stil med PROJECT / 01 er præsentation, ikke overvågning.

## Verifikation

Build passerer. Rendering af projektroute og projektoversigt er kontrolleret; oversigten har seks kort. CSS er isoleret, så Vuuh og Rouge Again ikke påvirkes. Ingen nye dependencies. Fuld visuel browserkontrol er ikke udført.

Al casespecifik synlig tekst: **2668 anslag inklusive mellemrum**. Inklusive overskrifter, labels, tags, knaptekster, tal, filnavne og pladsholdertekster; eksklusive fælles navigation/footer, attributter og tekst inde i billeder. Optællingen er lavet med script i den renderede casekomponent.
