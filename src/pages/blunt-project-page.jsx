import { useEffect, useRef } from "react";
import { Link } from "react-router";
import alternatePosterImage from "../assets/images/andenfarvetemaposter.svg";
import bluntImage from "../assets/images/blunteksempel.svg";
import bluntDesignSystemImage from "../assets/images/designsystembluntjaja.svg";
import bluntMoodboardImage from "../assets/images/bluntmoodboardrigtig.svg";
import bluntTextScaleImage from "../assets/images/blunt-tekststorrelser.svg";
import bluntIphoneLandingImage from "../assets/images/bluntiphonelanding.svg";
import busStopPrimaryImage from "../assets/images/busstoppestedmockup.svg";
import busStopImage from "../assets/images/busstoppestedmockup2.svg";
import deliveryMockupImage from "../assets/images/deliverymockup.svg";
import findYourFitImage from "../assets/images/findyourfitlanding.svg";
import iphoneMockupImage from "../assets/images/iphoneappmockup.svg";
import cartImage from "../assets/images/kurv.svg";
import landingPageImage from "../assets/images/landingpage.svg";
import popupImage from "../assets/images/popup.svg";
import productDetailImage from "../assets/images/productdetailside.svg";
import productPageImage from "../assets/images/productside.svg";
import productPage2Image from "../assets/images/productside2.svg";
import socialImage from "../assets/images/some1.svg";
import socialImage2 from "../assets/images/some2.svg";
import socialImage3 from "../assets/images/some3.svg";
import socialImage4 from "../assets/images/some4.svg";
import streetCampaignImage from "../assets/images/streetreklame.svg";
import streetCampaign2Image from "../assets/images/streetreklame2.svg";

const facts = [
  ["Type", "Eksamensprojekt"],
  ["Målgruppe", "15–25 år"],
  ["Fokus", "Customer experience"],
  ["Rolle", "UX/UI og branding"],
  ["Værktøjer", "React og Figma"],
];

const designParts = [
  ["Designsystem", bluntDesignSystemImage],
  ["Tekststørrelser", bluntTextScaleImage],
];

const productViews = [
  [landingPageImage, "Blunt-webshoppens landingpage"],
  [productPage2Image, "Alternativ produktside i Blunt"],
  [cartImage, "Indkøbskurv i Blunt"],
  [productDetailImage, "Produktdetaljer i Blunt-webshoppen"],
  [popupImage, "Popup i Blunt-webshoppen"],
  [productPageImage, "Produktside i Blunt"],
  [findYourFitImage, "Find your fit-sektion i Blunt"],
  [bluntIphoneLandingImage, "Blunt-webshoppen på mobil"],
];

function BluntImage({ src = bluntImage, className = "", alt = "Blunt streetwear-webshop" }) {
  return (
    <figure className={`blunt-image ${className}`}>
      <img src={src} alt={alt} />
    </figure>
  );
}

function BluntProjectPage() {
  const caseRef = useRef(null);

  useEffect(() => {
    const caseStudy = caseRef.current;
    if (!caseStudy) return undefined;

    const elements = caseStudy.querySelectorAll(".blunt-reveal");
    const directions = ["from-left", "from-right", "from-bottom"];
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    elements.forEach((element, index) => {
      element.classList.add(directions[index % directions.length]);
    });
    caseStudy.classList.add("scroll-reveal-ready");

    if (reducedMotion) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -10%", threshold: 0.08 });

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <article className="lynk-case blunt-case" ref={caseRef}>
      <header className="lynk-hero lynk-container blunt-hero">
        <div className="lynk-hero-copy">
          <Link className="lynk-back" to="/projects">← Alle projekter</Link>
          <p className="lynk-label">Customer experience / Webshop</p>
          <h1>Blunt</h1>
          <p className="lynk-intro">En streetwear-webshop udviklet med fokus på brandidentitet, købsoplevelse og et direkte visuelt udtryk.</p>
          <p className="blunt-meta">UX/UI · Branding</p>
        </div>
        <BluntImage src={streetCampaignImage} className="lynk-hero-image blunt-hero-image" alt="Blunt streetreklame" />
        <dl className="lynk-facts">
          {facts.map(([term, description]) => (
            <div key={term}><dt>{term}</dt><dd>{description}</dd></div>
          ))}
        </dl>
      </header>

      <section className="lynk-section lynk-container blunt-introduction">
        <div className="blunt-reveal">
          <p className="lynk-kicker">Kort om projektet</p>
          <h2>Streetwear med attitude.</h2>
        </div>
        <p className="blunt-reveal">Blunt er et webshopprojekt skabt til en ung, visuelt bevidst målgruppe. Projektet kombinerer en markant streetwear-identitet med en enkel købsoplevelse, hvor produkterne står tydeligt frem. Udtrykket skulle føles direkte, nutidigt og selvsikkert – uden at gå på kompromis med navigation og overblik.</p>
      </section>

      <section className="lynk-section lynk-container blunt-brand">
        <header className="blunt-section-heading blunt-reveal">
          <p className="lynk-kicker">Brandidentitet</p>
          <h2>Et brand med attitude.</h2>
        </header>
        <div className="blunt-brand-grid">
          <BluntImage src={bluntImage} className="blunt-brand-main blunt-reveal" alt="Blunt brandeksempel" />
          <BluntImage src={streetCampaign2Image} className="blunt-brand-logo blunt-reveal" alt="Blunt streetreklame" />
          <BluntImage src={alternatePosterImage} className="blunt-brand-type blunt-reveal" alt="Blunt-poster i alternativt farvetema" />
          <BluntImage src={busStopPrimaryImage} className="blunt-brand-board blunt-reveal" alt="Blunt-reklame ved et busstoppested" />
        </div>
        <div className="blunt-brand-applications">
          <BluntImage src={iphoneMockupImage} className="blunt-reveal" alt="Blunt vist i et iPhone-mockup" />
          <BluntImage src={busStopImage} className="blunt-reveal" alt="Blunt-reklame ved et busstoppested" />
          <BluntImage src={deliveryMockupImage} className="blunt-reveal" alt="Blunt-identitet på leveringsemballage" />
        </div>
      </section>

      <section className="lynk-section blunt-social-section">
        <div className="lynk-container">
          <header className="blunt-social-heading blunt-reveal">
            <div>
              <p className="lynk-kicker">So Me</p>
              <h2>Et udtryk med personlighed.</h2>
            </div>
            <p>Blunts visuelle identitet er omsat til sociale medier med et direkte udtryk, markante beskæringer og en tydelig balance mellem produkt, attitude og budskab.</p>
          </header>
          <div className="blunt-social-grid">
            <BluntImage src={socialImage} className="blunt-reveal" alt="So Me-opslag 1 for Blunt" />
            <BluntImage src={socialImage2} className="blunt-reveal" alt="So Me-opslag 2 for Blunt" />
            <BluntImage src={socialImage3} className="blunt-reveal" alt="So Me-opslag 3 for Blunt" />
            <BluntImage src={socialImage4} className="blunt-reveal" alt="So Me-opslag 4 for Blunt" />
          </div>
        </div>
      </section>

      <section className="lynk-section blunt-dark-section">
        <div className="lynk-container blunt-audience">
          <div className="blunt-reveal">
            <p className="lynk-kicker">Målgruppe og idé</p>
            <h2>Designet til den impulsive shopper.</h2>
            <p>Universet henvender sig til 15–25-årige, som følger trends og bruger mode til at vise identitet. Derfor blev tydelige produkter og en stærk brandfølelse centrale dele af oplevelsen.</p>
            <ul className="blunt-audience-tags" aria-label="Centrale fokusområder">
              <li>15–25 år</li><li>Trends</li><li>Konvertering</li><li>Identitet</li>
            </ul>
          </div>
          <BluntImage src={bluntMoodboardImage} className="blunt-audience-image blunt-reveal" alt="Moodboard til Blunt" />
        </div>
      </section>

      <section className="lynk-section blunt-ux-shop-section">
        <div className="lynk-container">
          <header className="blunt-section-heading blunt-reveal">
            <p className="lynk-kicker">Det færdige resultat</p>
            <h2>Fra brand til webshop.</h2>
            <p>Webshoppen samler brandets visuelle identitet med en intuitiv navigation og en enkel købsoplevelse.</p>
          </header>
          <div className="blunt-product-grid">
            {productViews.map(([image, alt], index) => (
              <BluntImage src={image} className={`blunt-product-view blunt-product-view-${index + 1} blunt-reveal`} alt={alt} key={alt} />
            ))}
          </div>
        </div>
      </section>

      <section className="lynk-section blunt-system-section">
        <div className="lynk-container">
          <header className="blunt-section-heading blunt-reveal">
            <p className="lynk-kicker">Designsystem</p>
            <h2>Design med sammenhæng.</h2>
          </header>
          <div className="blunt-system-grid">
            {designParts.map(([part, image], index) => (
              <article className={`blunt-system-card blunt-reveal blunt-system-card-${index + 1}`} key={part}>
                <span>{part}</span><img src={image} alt={`${part} i Blunts designsystem`} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="lynk-section lynk-reflection blunt-reflection">
        <div className="lynk-container blunt-reveal">
          <p className="lynk-kicker">Refleksion</p>
          <h2>Hvad jeg tog med videre</h2>
          <p>Projektet gav mig erfaring med at samle branding, UX/UI, frontend og customer experience i én konsekvent løsning. Det lærte mig, hvordan et stærkt visuelt univers kan understøtte både brugerens oplevelse og forretningens mål.</p>
          <Link to="/projects/lumina">Næste projekt <span>→</span></Link>
        </div>
      </section>
    </article>
  );
}

export default BluntProjectPage;
