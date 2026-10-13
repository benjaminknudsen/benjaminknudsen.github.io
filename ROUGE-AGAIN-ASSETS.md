# Eksportliste til Rouge Again-redesignet

Mappe: `src/assets/images/rouge-again/`.

Alle billeder er stadig tydeligt markerede billedpladser. Der er ingen dokumenterede Rouge Again-brandassets i den eksisterende mappe. Den varme palette fra den tidligere caseside er derfor bevaret som foreløbig; afstem den og serif-typografien med det originale brandmateriale.

Erstat følgende filer med dine faktiske Figma-eksporter. Filnavnene er dem, komponenten allerede bruger. SVG er direkte understøttet; ved PNG/WebP skal glob-mønstret og opslaget i `src/pages/rouge-again-project-page.jsx` tilpasses filendelsen.

| Fil | Skal vise | Placering |
| --- | --- | --- |
| `logo.svg` | Det faktiske Rouge Again-logo på transparent eller passende brandbaggrund | Heroens venstre side |
| `prototype-hero.svg` | Brandcollage eller stort mockup af den samlede Figma-prototype | Heroens store højre billede; også eksisterende projektkort |
| `ui-landingpage.svg` | Rouge Again-landingpage | Mindre billede foran heroens hovedbillede |
| `moodboard.svg` | Projektets moodboard med stemning, materialer og visuelle referencer | Brandcollagens store venstre felt |
| `billedstil.svg` | Faktisk fashion-/produktfotografi fra brandmaterialet | Brandcollagens øverste højre felt |
| `logovarianter.svg` | Primært, sekundært og monokromt logo, hvis de findes | Brandcollagens højre felt |
| `grafiske-elementer.svg` | Projektets grafiske former, detaljer eller mønstre | Brandcollagens nederste venstre felt |
| `brandanvendelse.svg` | Identiteten på eksempelvis tags, emballage eller kampagnemateriale, som faktisk er lavet | Brandcollagens brede nederste felt |
| `brandidentitet.svg` | Logoopbygning eller logoets brug i subbrandet | Selvstændig designsystem-præsentation |
| `farvepalette.svg` | Originale brandfarver med faktiske farvekoder | Designsystmets midterste felt |
| `typografi.svg` | Faktiske skrifttyper og hierarki | Designsystmets højre felt |
| `ui-produktkort.svg` | Figma-eksempel på produktkort, pris og visuelt hierarki | Fra brand til digital oplevelse |
| `ui-navigation.svg` | Navigation samt de vigtigste CTA'er for køb og salg | Fra brand til digital oplevelse |
| `koeber-produktoversigt.svg` | Produktoversigten i køberflowet | Køberflow, skærm 1 |
| `koeber-produktdetaljer.svg` | Produktdetaljer | Køberflow, skærm 2 |
| `koeber-kurv.svg` | Kurven | Køberflow, skærm 3 |
| `koeber-checkout.svg` | Checkout | Køberflow, skærm 4 |
| `koeber-ordrebekraeftelse.svg` | Ordrebekræftelse | Køberflow, skærm 5 |
| `saelger-start.svg` | Indgangen til salg | Sælgerflow, skærm 1 |
| `saelger-upload.svg` | Upload af produkt/billeder | Sælgerflow, skærm 2 |
| `saelger-produktinformation.svg` | Indtastning af produktinformation | Sælgerflow, skærm 3 |
| `saelger-pris-og-stand.svg` | Pris og stand | Sælgerflow, skærm 4 |
| `saelger-preview.svg` | Preview før publicering | Sælgerflow, skærm 5 |
| `saelger-publicering.svg` | Publicering eller dens bekræftelse | Sælgerflow, skærm 6 |
| `profil-og-qr.svg` | Profil, brugerens produkter og det dokumenterede QR-koncept | UX/UI-designbeslutninger |

Der bruges ikke samme placeholder flere gange på casesiden. De tidligere samlede `koeberflow.svg` og `saelgerflow.svg` bruges ikke i det nye redesign og kan beholdes som reserve.

## Oplysninger, der fortsat mangler

- Figma-prototype-URL og dokumentationslink. Den eksisterende fælles `CaseLinks` viser afventende labels indtil da.
- Din individuelle arbejdsfordeling og konkrete læring. Der er ikke tilskrevet dig udokumenterede individuelle leverancer.
- Faktiske researchfund, brandfarver, skrifttyper og QR-funktionens rolle.
- Skærmene for især pris/stand og publicering skal stemme med prototypen. Billedpladser er ikke dokumentation for implementerede features.

## Verifikation

Redesignet er inspireret af Blunts fortællestruktur, ikke dets palette: split-hero, identitetscollage, selvstændigt designsystem, store UI-grids og markant afslutning.

Brødtekst: **4.306 anslag inklusive mellemrum**. Optalt både i datakilden og i den renderede sides brødtekst. Hvert fagligt afsnit vises én gang. Overskrifter, billedtekster, navigation, labels og linktekster er udeladt.

Build og rendering er kontrolleret. Fuld visuel browserkontrol er ikke udført. Blunt, Vuuh og Mellemrum er ikke redesignet.
