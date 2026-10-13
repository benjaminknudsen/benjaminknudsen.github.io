# Faktiske billeder på Rouge Again-casesiden

Alle 23 nye assets er gennemgået visuelt. Brødteksten, farvetemaet, skrifttyperne og sektionsrækkefølgen er bevaret.

| Område | Filer og indhold |
| --- | --- |
| Hero | `main-logo.svg`: Rouge Again by La Rouge-logo. `mock-up3.png`: laptop med brandets digitale univers. `homepage-landing.png`: produktoversigt med filtre; filen er trods navnet ikke en introduktions-landingpage. |
| Brandkoncept/collage | `mock-up4.png`: editorial magasinmockup. `mock-up2.png`: buskampagne. `monogram-logo.svg`: RA-monogram. `mock-up5.png`: plakat og monogram ved busstoppested. |
| Visuel identitet | `main-logo.svg`: primært logo genvises som en del af designsystemet; den gentagelse har en anden funktion end heroen. `font-cormorant-garamond.svg`: projektets serif-navn i original udformning; selve sidens fonte er ikke ændret. |
| Fra brand til digital oplevelse | `pop-up-to-learn-about-rouge-again.png`: introduktion til konceptet. `burgermenu.png`: navigation og indgang til salg. |
| Køberflow | `buyer-flow1-product-detail-site.png` → `buyer-flow2-cart.png` → `buyer-flow3-checkout.png` → `buyer-flow4-payment.png` → `buyer-flow5-orderconfirmation.png`: produktdetaljer, kurv, levering, betaling, ordrebekræftelse. Produktoversigten er allerede vist i heroen og gentages ikke. |
| Sælgerflow | `sales-flow1-what-style.png` → `sales-flow2-choose-style.png` → `sales-flow3-condition.png` → `sales-flow4-your-offer.png` → `sales-flow5-succes-state.png` → `sales-flow6-your-qr-code.png`: find tidligere køb, vælg style, stand, gavekorttilbud, accept, QR-kode. |
| UX/UI-designbeslutninger | `my-profile-for-sale-items.png`: profilens oversigt over styles til salg. |
| Resultat | `mock-up1.png`: samlet app-mockup med monogram, mobiloplevelse og produktoversigt. |

Der er ikke fravalgt nogen af de nye assets. Alle har en selvstændig funktion. Ud over primærlogoet gentages ingen af de nye billeder på selve casesiden. Tidligere placeholders, som nu er erstattet, er bevaret på disken.

## Det mangler stadig

- Faktisk moodboard/inspirationsmateriale. Der vises en tydelig billedplads i brandcollagen, ikke et opdigtet moodboard. Eksportér til `src/assets/images/rouge-again/grafiske-elementer.svg`, eller tilpas opslaget til det korrekte filnavn/format.
- Den originale farvepalette med dokumenterede farvekoder. Billedpladsen er `src/assets/images/rouge-again/farvepalette.svg`.
- Hvis upload, frit indtastet produktinformation, preview og publicering faktisk indgår i en anden del af prototypen, mangler screenshots af disse skærme. Det uploadede sælgerflow viser i stedet tidligere køb, stand, et gavekorttilbud og indlevering via QR-kode.
- Links til prototype og dokumentation mangler fortsat.

## Faglig uoverensstemmelse

Brødteksten beskriver upload/oprettelse, pris, preview og publicering. De faktiske sælgerskærme viser et andet flow. Teksten er ikke ændret, som ønsket. Den bør afstemmes med prototypen før eksamen. Billedteksterne følger de faktiske skærme.

Mobilskærme og mockups vises med deres originale proportioner. Hero-logoets tidligere beskæring er fjernet. Store mockups er placeret i collagens større områder; mobilskærme er fordelt i de eksisterende flowgrids.

Build og billedimports er kontrolleret. Brødteksten er fortsat 4.306 anslag inklusive mellemrum. Der er ikke gennemført fuld visuel browserkontrol.
