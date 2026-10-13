import { useEffect, useRef } from "react";
import { Link } from "react-router";
import cases from "../data/exam-cases.json";
import rougeHero from "../assets/images/rouge-again/prototype-hero.svg";
import rougeIdentity from "../assets/images/rouge-again/brandidentitet.svg";
import rougeBuyer from "../assets/images/rouge-again/koeberflow.svg";
import rougeSeller from "../assets/images/rouge-again/saelgerflow.svg";
import rougeProfile from "../assets/images/rouge-again/profil-og-qr.svg";
import mellemrumHero from "../assets/images/mellemrum/applikation-hero.svg";
import database from "../assets/images/mellemrum/databaserelationer.svg";
import registration from "../assets/images/mellemrum/tilmeldingsflow.svg";
import states from "../assets/images/mellemrum/ui-states.svg";

const assets = {
  "rouge-again": { hero: rougeHero, identity: rougeIdentity, buyer: rougeBuyer, seller: rougeSeller, profile: rougeProfile },
  mellemrum: { hero: mellemrumHero, database, registration, states },
};
const captions = {
  hero: "Overblik over prototypen", identity: "Farver, typografi og subbrandets identitet", buyer: "Køberflow · Fra produkt til ordrebekræftelse", seller: "Sælgerflow · Fra oprettelse til publicering", profile: "Profil, produktoversigt og QR-koncept", database: "Relationer mellem venues, events og registrations", registration: "Tilmeldingsflow og håndtering af tilmeldinger", states: "Loading-, error-, empty- og success-states",
};

function CaseImage({ src, caption, eager = false }) {
  return <figure className="exam-case-image"><img src={src} alt={`Billedplads: ${caption}`} loading={eager ? "eager" : "lazy"} /><figcaption>{caption}</figcaption></figure>;
}

export function CaseLinks({ slug }) {
  return <div className="exam-case-links">{slug === "mellemrum"
    ? <><a href="https://benjaminknudsen.github.io/mellemrum-react-optimering-3sem/" target="_blank" rel="noreferrer">Åbn applikationen ↗</a><span>GitHub-dokumentation · Link kommer</span></>
    : <><a href="https://www.figma.com/proto/6wIJgOodnidPuSPEFE3685/Case-3---La-rouge?node-id=30-13&viewport=306%2C419%2C0.12&t=pLazm3g2GcF8ivXP-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=30%3A13&page-id=30%3A2" target="_blank" rel="noreferrer">Prøv Figma-prototypen ↗</a><a href="https://www.figma.com/design/6wIJgOodnidPuSPEFE3685/Case-3---La-rouge?node-id=1-2&t=oXi1NcXoJlNGX6Un-1" target="_blank" rel="noreferrer">Se branddeck ↗</a></>}
  </div>;
}

export default function ExamCasePage({ slug }) {
  const content = cases[slug];
  const images = assets[slug];
  const pageRef = useRef(null);
  useEffect(() => {
    const page = pageRef.current;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return undefined;
    const elements = page.querySelectorAll("[data-case-reveal]");
    page.classList.add("exam-reveal-ready");
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
    }), { threshold: .08 });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [slug]);

  return <article className={`exam-case exam-case--${slug}`} ref={pageRef}>
    <header className="exam-case-hero exam-case-shell">
      <Link className="back-link" to="/projects">← Alle projekter</Link>
      <div className="exam-case-hero-copy"><p className="exam-case-badge">{content.badge}</p><h1>{content.title}<span>{content.subtitle}</span></h1><p className="exam-case-intro">{content.intro}</p><CaseLinks slug={slug} /></div>
      <CaseImage src={images.hero} caption={slug === "mellemrum" ? "Den optimerede React-applikation" : captions.hero} eager />
    </header>
    <div className="exam-case-shell">
      {content.sections.map((section, index) => <section className={`exam-case-section${index >= content.sections.length - 2 ? " exam-case-conclusion" : ""}`} key={section.title} data-case-reveal>
        <header className="exam-case-heading"><span>{String(index + 1).padStart(2, "0")}</span><h2>{section.title}</h2></header>
        <div className="exam-case-copy">{section.paragraphs.map((text) => <p key={text}>{text}</p>)}</div>
        {section.image && <CaseImage src={images[section.image]} caption={captions[section.image]} />}
        {section.images && <div className="exam-case-image-pair">{section.images.map((key) => <CaseImage key={key} src={images[key]} caption={captions[key]} />)}</div>}
      </section>)}
      <div className="exam-case-end"><CaseLinks slug={slug} /><Link className="back-link" to="/projects">← Tilbage til projekter</Link></div>
    </div>
  </article>;
}
