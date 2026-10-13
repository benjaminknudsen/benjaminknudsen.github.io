import { useEffect, useRef } from "react";
import { Link } from "react-router";
import cases from "../data/exam-cases.json";
import { CaseLinks } from "../components/exam-case-page";

import mainLogo from "../assets/images/main-logo.svg";
import brandPalette from "../assets/images/colorpalet.png";
import monogram from "../assets/images/monogram-logo.svg";
import fontSample from "../assets/images/font-cormorant-garamond.svg";
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
  const hover = Boolean(actualImages[name]) && !["logo", "brandidentitet", "logovarianter", "typografi"].includes(name);
  return <figure data-rouge-reveal={!eager ? "" : undefined} className={`rouge-image ${actualImages[name] ? "rouge-image-real" : ""} ${mobile ? "rouge-image-phone" : ""} ${hover ? "rouge-image-hover" : ""} ${className}`}><div className="rouge-image-visual"><img src={src} alt={actualImages[name] ? caption : `Billedplads til ${caption}`} loading={eager ? "eager" : "lazy"} /></div><figcaption>{caption}</figcaption></figure>;
}
function BrandReference({ src, alt, className = "", eager = false }) {
  return <figure className={`rouge-reference ${className}`}>
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
          <div className="rouge-hero-signature"><span>Re-commerce · Brand Experience</span></div>
          <h1 className="rouge-editorial-title">Et nyt univers<br /><span>for pre-loved</span><br /><em>fashion.</em></h1>
          <p className="rouge-intro">{content.intro}</p>
          <CaseLinks slug="rouge-again" />
        </div>
        <div className="rouge-hero-collage rouge-hero-fashion">
          <BrandReference src={model4} alt="La Rouge-model i sort bluse og grå bukser foran varm stenarkitektur" className="rouge-reference-hero" eager />
        </div>
      </div>
    </header>

    <section className="rouge-section rouge-shell rouge-challenge" data-rouge-reveal>
      <Heading label="01 · Projekt og udfordring">Et nyt univers.<br />Den samme identitet.</Heading>
      <h3>Hvordan kan La Rouge udvide sit brand med et re-commerce-univers, der viderefører den eksisterende identitet og samtidig tilbyder en intuitiv købs- og salgsoplevelse?</h3>
      <Copy paragraphs={sections[0].paragraphs} />
    </section>

    <section className="rouge-wash"><div className="rouge-section rouge-shell">
      <div className="rouge-split" data-rouge-reveal><Heading label="02 · Undersøgelse og koncept">Secondhand med<br />et tydeligt tilhørsforhold.</Heading><Copy paragraphs={sections[1].paragraphs} /></div>
      <div className="rouge-brand-grid rouge-brand-with-references">
        <BrandReference src={model1} alt="La Rouge-model i mørk denimkjole ved en metroindgang i Paris" className="rouge-reference-paris" />
        <BrandReference src={model3} alt="La Rouge-model i en lys stribet style blandt klitgræs" className="rouge-reference-dunes" />
        <Image name="moodboard" caption="Editorial mockup · Brandets billedstil" className="rouge-brand-mood" />
        <Image name="billedstil" caption="Kampagnemockup · Busreklame" className="rouge-brand-photo" />
        <Image name="resultat" caption="App-mockup · Brand og mobiloplevelse" className="rouge-brand-graphic" />
        <Image name="brandanvendelse" caption="Brandmockup · Plakat og monogram i byrummet" className="rouge-brand-use" />
      </div>
    </div></section>

    <section className="rouge-section rouge-shell">
      <div className="rouge-split" data-rouge-reveal><Heading label="03 · Visuel identitet">Design med<br />sammenhæng.</Heading><Copy paragraphs={sections[2].paragraphs.slice(0, 2)} /></div>
      <div className="rouge-system-grid"><Image name="brandidentitet" caption="Primært logo · Rouge Again by La Rouge" /><Image name="logovarianter" caption="RA-monogram" /><Image name="farvepalette" caption="Officiel palette · Offwhite, beige, brun, mørkebrun og sort" /><Image name="typografi" caption="Typografi · Cormorant Garamond" /></div>
    </section>

    <section className="rouge-digital"><div className="rouge-section rouge-shell">
      <div className="rouge-split" data-rouge-reveal><Heading label="04 · Fra brand til UI">Fra brandidentitet<br />til digital oplevelse.</Heading><Copy paragraphs={[sections[2].paragraphs[2]]} /></div>
      <div className="rouge-ui-grid rouge-ui-with-reference"><BrandReference src={model2} alt="La Rouge-model i lyseblå kjole med baguetter i et bymiljø" className="rouge-reference-digital" /><Image name="ui-landingpage" caption="Secondhand · Produktoversigt" /><Image name="ui-produktkort" caption="Introduktion til konceptet · Om Rouge Again" /><Image name="ui-navigation" caption="Navigation og CTA'er" /></div>
    </div></section>

    <section className="rouge-section rouge-shell">
      <div className="rouge-split" data-rouge-reveal><Heading label="05 · Køberflow">Fra fund<br />til favorit.</Heading><Copy paragraphs={[sections[3].paragraphs[0]]} /></div>
      <div className="rouge-buyer-grid">{buyerScreens.map(([name, caption]) => <Image key={name} name={name} caption={caption} />)}</div>
    </section>

    <section className="rouge-wash"><div className="rouge-section rouge-shell">
      <div className="rouge-split" data-rouge-reveal><Heading label="06 · Sælgerflow">Giv din style<br />et nyt kapitel.</Heading><Copy paragraphs={[sections[3].paragraphs[1]]} /></div>
      <div className="rouge-seller-grid">{sellerScreens.map(([name, caption]) => <Image key={name} name={name} caption={caption} />)}</div>
    </div></section>

    <section className="rouge-section rouge-shell rouge-decisions" data-rouge-reveal>
      <div><Heading label="07 · UX/UI-designbeslutninger">To brugerrejser.<br />Ét samlet univers.</Heading><Copy paragraphs={[sections[3].paragraphs[2]]} /></div>
      <Image name="profil-og-qr" caption="Min profil · Styles til salg" />
    </section>

    <section className="rouge-finale"><div className="rouge-section rouge-shell">
      <Heading label="08 · Resultat og perspektiv">En identitet, der lever<br />videre i oplevelsen.</Heading>
      <div className="rouge-conclusions">
        {[sections[4], sections[5], sections[6]].map((section) => <section key={section.title} data-rouge-reveal><h3>{section.title}</h3><Copy paragraphs={section.paragraphs} /></section>)}
      </div>
      <CaseLinks slug="rouge-again" /><Link className="rouge-back" to="/projects">← Tilbage til projekter</Link>
    </div></section>
  </article>;
}
