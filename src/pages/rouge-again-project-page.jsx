import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import cases from "../data/exam-cases.json";
import { CaseLinks } from "../components/exam-case-page";

import mainLogo from "../assets/images/main-logo.svg";
import brandPalette from "../assets/images/colorpalettry.svg";
import monogram from "../assets/images/monogram-logo.svg";
import fontSample from "../assets/images/fontcg.svg";
import mock1 from "../assets/images/mock-up1.png";
import mock2 from "../assets/images/mock-up2.png";
import mock3 from "../assets/images/mock-up3.png";
import mock4 from "../assets/images/mock-up4.png";
import mock5 from "../assets/images/mock-up5.png";
import landing from "../assets/images/homepage-landing.png";
import menu from "../assets/images/burgermenu.png";
import about from "../assets/images/pop-up-to-learn-about-rouge-again.png";
import profile from "../assets/images/my-profile-for-sale-items.png";
import buyer1 from "../assets/images/buyer-flow1-product-detail-site.png";
import buyer2 from "../assets/images/buyer-flow2-cart.png";
import buyer3 from "../assets/images/buyer-flow3-checkout.png";
import buyer4 from "../assets/images/buyer-flow4-payment.png";
import buyer5 from "../assets/images/buyer-flow5-orderconfirmation.png";
import seller1 from "../assets/images/sales-flow1-what-style.png";
import seller2 from "../assets/images/sales-flow2-choose-style.png";
import seller3 from "../assets/images/sales-flow3-condition.png";
import seller4 from "../assets/images/sales-flow4-your-offer.png";
import seller5 from "../assets/images/sales-flow5-succes-state.png";
import seller6 from "../assets/images/sales-flow6-your-qr-code.png";

import model1 from "../assets/images/modelpicture1.webp";
import model2 from "../assets/images/modelpicture2.webp";
import model3 from "../assets/images/modelpicture3.webp";
import model4 from "../assets/images/modelpicture4.webp";

const images = import.meta.glob("../assets/images/rouge-again/*.svg", { eager: true, query: "?url", import: "default" });
const actualImages = {
  farvepalette: brandPalette, logo: mainLogo, "prototype-hero": mock3, "ui-landingpage": landing,
  moodboard: mock4, billedstil: mock2, logovarianter: monogram, brandanvendelse: mock5,
  brandidentitet: mainLogo, typografi: fontSample,
  "ui-produktkort": about, "ui-navigation": menu,
  "koeber-produktdetaljer": buyer1, "koeber-kurv": buyer2, "koeber-checkout": buyer3,
  "koeber-betaling": buyer4, "koeber-ordrebekraeftelse": buyer5,
  "saelger-start": seller1, "saelger-produktinformation": seller2, "saelger-pris-og-stand": seller3,
  "saelger-preview": seller4, "saelger-publicering": seller5, "saelger-qr": seller6,
  "profil-og-qr": profile, resultat: mock1,
};
const content = cases["rouge-again"];
const sections = content.sections;
const buyerScreens = [
  ["koeber-produktdetaljer", "Produktdetaljer"], ["koeber-kurv", "Kurv"], ["koeber-checkout", "Checkout · Levering"], ["koeber-betaling", "Betaling"], ["koeber-ordrebekraeftelse", "Ordrebekræftelse"],
];
const sellerScreens = [
  ["saelger-start", "Find en tidligere købt style"], ["saelger-produktinformation", "Vælg style"], ["saelger-pris-og-stand", "Beskriv standen"], ["saelger-preview", "Gavekorttilbud"], ["saelger-publicering", "Tilbud accepteret"], ["saelger-qr", "QR-kode til indlevering"],
];
function Image({ name, caption, className = "", eager = false }) {
  const src = actualImages[name] || images[`../assets/images/rouge-again/${name}.svg`];
  const mobile = name.startsWith("koeber-") || name.startsWith("saelger-") || ["ui-landingpage", "ui-produktkort", "ui-navigation", "profil-og-qr"].includes(name);
  const hover = Boolean(actualImages[name]) && !["logo", "brandidentitet", "logovarianter", "typografi", "farvepalette"].includes(name);
  return <figure data-rouge-reveal={!eager ? "" : undefined} className={`rouge-image ${actualImages[name] ? "rouge-image-real" : ""} ${mobile ? "rouge-image-phone" : ""} ${hover ? "rouge-image-hover" : ""} ${className}`}><div className="rouge-image-visual"><img src={src} alt={actualImages[name] ? caption : `Billedplads til ${caption}`} loading={eager ? "eager" : "lazy"} /></div><figcaption>{caption}</figcaption></figure>;
}
function FlowCarousel({ screens, label }) {
  const [active, setActive] = useState(0);
  const total = screens.length;
  return <div className="rouge-seller-carousel" role="region" aria-roledescription="karrousel" aria-label={label}>
    <div className="rouge-seller-stage">
      {screens.map(([name, caption], index) => {
        const position = (index - active + total) % total;
        const visible = position >= 0 && position <= 3;
        return <button key={name} type="button" className={`rouge-seller-slide${position === 0 ? " is-active" : ""}`}
          style={{ "--slide-position": position, "--slide-distance": Math.abs(position), "--slide-space": position >= 0 ? position * .93 - .07 * position * position : position, zIndex: total - Math.abs(position) }}
          onClick={() => setActive(index)} aria-label={`Vis skærm ${index + 1}: ${caption}`}
          aria-current={position === 0 ? "true" : undefined} aria-hidden={!visible} tabIndex={visible ? 0 : -1}>
          <img src={actualImages[name]} alt={caption} loading="lazy" />
        </button>;
      })}
    </div>
    <span className="rouge-seller-counter" aria-live="polite" aria-atomic="true" aria-label={`Skærm ${active + 1} af ${total}`}>{active + 1}/{total}</span>
  </div>;
}
function BrandReference({ src, alt, className = "", eager = false }) {
  return <figure data-rouge-reveal={!eager ? "" : undefined} className={`rouge-reference ${className}`}>
    <img src={src} alt={alt} loading={eager ? "eager" : "lazy"} width="1024" height="1280" />
  </figure>;
}
function Copy({ paragraphs }) { return <div className="rouge-copy">{paragraphs.map((text) => <p key={text}>{text}</p>)}</div>; }
function Heading({ label, children }) { return <header className="rouge-heading"><span className="rouge-label">{label}</span><h2>{children}</h2></header>; }

export default function RougeAgainProjectPage() {
  const pageRef = useRef(null);
  useEffect(() => {
    const page = pageRef.current;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return undefined;
    const elements = page.querySelectorAll("[data-rouge-reveal]");
    const directions = ["from-left", "from-right", "from-bottom"];
    elements.forEach((element, index) => element.classList.add(directions[index % directions.length]));
    page.classList.add("rouge-reveal-ready");
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
    }), { rootMargin: "0px 0px -8%", threshold: .06 });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return <article className="rouge-case" ref={pageRef}>
    <header className="rouge-hero rouge-shell">
      <Link className="rouge-back" to="/projects">← Alle projekter</Link>
      <div className="rouge-hero-grid">
        <div className="rouge-hero-copy">
          <div className="rouge-hero-signature"><span>Re-commerce · Branding</span></div>
          <h1 className="rouge-editorial-title">Secondhand styles<br /><em>med nyt liv</em></h1>
          <p className="rouge-intro">{content.intro}</p>
          <CaseLinks slug="rouge-again" />
        </div>
        <div className="rouge-hero-collage rouge-hero-fashion">
          <BrandReference src={model4} alt="La Rouge-model i sort bluse og grå bukser foran varm stenarkitektur" className="rouge-reference-hero" eager />
          <img className="rouge-hero-overlay-logo" src={mainLogo} alt="Rouge Again by La Rouge" />
        </div>
      </div>
    </header>

    <section className="rouge-section rouge-shell rouge-challenge" data-rouge-reveal>
      <Heading label="Projekt og udfordring">En ny identitet.<br />Med rødder i La Rouge.</Heading>
      <h3>Hvordan kan vi udvikle et re-commerce-koncept til La Rouge med en ny brandidentitet og en brugervenlig digital oplevelse for både købere og sælgere?</h3>
      <Copy paragraphs={sections[0].paragraphs} />
    </section>

    <section className="rouge-wash"><div className="rouge-section rouge-shell">
      <div className="rouge-split rouge-concept-intro" data-rouge-reveal><Heading label="Undersøgelse og koncept">Et secondhand-univers til La Rouge</Heading><Copy paragraphs={sections[1].paragraphs} /></div>

    </div></section>

    <section className="rouge-section rouge-shell">
      <div className="rouge-split" data-rouge-reveal><Heading label="Visuel identitet">Design med<br />sammenhæng.</Heading><Copy paragraphs={sections[2].paragraphs.slice(0, 2)} /></div>
      <div className="rouge-system-grid"><Image name="brandidentitet" caption="Primært logo" /><Image name="logovarianter" caption="RA-monogram" /><Image name="farvepalette" caption="Officiel palette · Offwhite, beige, brun, mørkebrun og sort" /><Image name="typografi" caption="Typografi" /></div>
    </section>

    <section className="rouge-wash rouge-brand-universe"><div className="rouge-section rouge-shell">
      <Heading label="Brandunivers">Identiteten i brug.</Heading>
      <Copy paragraphs={[content.brandIntro]} />
      <div className="rouge-brand-grid rouge-brand-with-references rouge-mockup-gallery">
        <BrandReference src={model1} alt="La Rouge-model i mørk denimkjole ved en metroindgang i Paris" className="rouge-reference-paris" />
        <BrandReference src={model3} alt="La Rouge-model i en lys stribet style blandt klitgræs" className="rouge-reference-dunes" />
        <Image name="moodboard" caption="Editorial mockup · Brandets billedstil" className="rouge-brand-mood" />
        <Image name="billedstil" caption="Kampagnemockup · Busreklame" className="rouge-brand-photo" />
        <Image name="resultat" caption="App-mockup · Brand og mobiloplevelse" className="rouge-brand-graphic" />
        <Image name="brandanvendelse" caption="Brandmockup · Plakat og monogram i byrummet" className="rouge-brand-use" />
        <BrandReference src={model2} alt="La Rouge-model i lyseblå kjole med baguetter i et bymiljø" className="rouge-reference-city" />
      </div>
    </div></section>

    <section className="rouge-digital rouge-ui-showcase"><div className="rouge-section rouge-shell">
      <div className="rouge-split" data-rouge-reveal><Heading label="Fra brand til UI">Fra brandidentitet<br />til digital oplevelse.</Heading><Copy paragraphs={[sections[2].paragraphs[2]]} /></div>
      <div className="rouge-ui-grid">
        {[
          ["ui-landingpage", "Produktoversigt", "Filtre, produktbilleder og priser samlet i ét overblik."],
          ["ui-produktkort", "Pop-up til nye brugere", "Introducerer secondhand-konceptet og muligheden for køb og salg."],
          ["ui-navigation", "Burgermenu", "Samler navigationen og giver en tydelig indgang til salg."],
          ["profil-og-qr", "Min profil", "Viser styles til salg, solgte produkter og favoritter."],
        ].map(([name, title, description], index) => <figure className="rouge-ui-screen" key={name} data-rouge-reveal>
          <img className="rouge-ui-screen-backdrop" src={[model2, mock4, mock5, model1][index]} alt="" aria-hidden="true" loading="lazy" />
          <span className="rouge-ui-display-number" aria-hidden="true">{["DISCOVER", "WELCOME", "NAVIGATE", "PROFILE"][index]}</span>
          <div className="rouge-ui-phone"><div className="rouge-ui-phone-frame" style={{ "--screen-ratio": [780 / 1800, 780 / 1504, 780 / 1688, 780 / 1688][index] }}><img src={actualImages[name]} alt={title} loading="lazy" /></div></div>
          <figcaption><span className="rouge-ui-caption-title">{title}</span><span className="rouge-ui-caption-description">{description}</span></figcaption>
        </figure>)}
      </div>
    </div></section>

    <section className="rouge-buyer-section"><div className="rouge-section rouge-shell">
      <div className="rouge-split rouge-buyer-intro" data-rouge-reveal><Heading label="Køberflow">Fra fund<br />til køb.</Heading><Copy paragraphs={[sections[3].paragraphs[0]]} /></div>
      <FlowCarousel screens={buyerScreens} label="Køberflowets fem skærme" />
    </div></section>

    <section className="rouge-wash rouge-seller-section"><div className="rouge-section rouge-shell">
      <div className="rouge-split" data-rouge-reveal><Heading label="Sælgerflow">Giv din style<br />et nyt liv.</Heading><Copy paragraphs={[sections[3].paragraphs[1]]} /></div>
      <FlowCarousel screens={sellerScreens} label="Sælgerflowets seks skærme" />
    </div></section>

    <section className="rouge-finale"><div className="rouge-section rouge-shell">
      <Heading label="Resultat og perspektiv">En identitet, der lever<br />videre i oplevelsen.</Heading>
      <div className="rouge-conclusions">
        {[sections[4], sections[5], sections[6]].map((section) => <section key={section.title} data-rouge-reveal><h3>{section.title}</h3><Copy paragraphs={section.paragraphs} /></section>)}
      </div>
      <CaseLinks slug="rouge-again" /><Link className="rouge-back" to="/projects">← Tilbage til projekter</Link>
    </div></section>
  </article>;
}
