import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import vuuhLogo from "../assets/images/vuuh.logo.svg";
import welcomeImage from "../assets/images/welcometovuuhjaja.svg";
import shopNameGuide from "../assets/images/shopnameguide.svg";
import successImage from "../assets/images/succesconnection.svg";
import errorImage from "../assets/images/errorstate.svg";
import dashboardImage from "../assets/images/vuuhdashboard.svg";
import originalShopImage from "../assets/images/oprindeligfindbutik.png";
import originalConnectionImage from "../assets/images/oprindeligforbindelse.png";
import onboarding1 from "../assets/images/Onboarding 1.png";
import onboarding2 from "../assets/images/onboarding2.svg";
import onboarding3 from "../assets/images/onboarding3.svg";
import onboarding4 from "../assets/images/onboardingsucces.png";
import onboarding5 from "../assets/images/onboarding5.svg";
import onboarding6 from "../assets/images/onboarding6.svg";

const onboardingScreens = [onboarding1, onboarding2, onboarding3, onboarding4, onboarding5, onboarding6];

const resources = [
  { label: "Se UX Audit Summary", href: "https://efif-my.sharepoint.com/:p:/g/personal/eaa25bssk_students_eaaa_dk/cQrVQvoJ-4MrSLvNFVu_sUp8EgUCawc7P6locnO5cZa6y1MtJg" },
  { label: "Prøv Figma-prototypen", href: "https://www.figma.com/proto/PEUH5ns1BrzuNaI75Zu5F5/Vuuh---Case-2---3.sem?node-id=125-6&viewport=-1156%2C9%2C0.1&t=DcYwy7GZDqvlrFke-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=125%3A6&page-id=0%3A1" },
];

function ResourceLinks() {
  return <div className="vuuh-links">{resources.map(({ label, href }) => href
    ? <a className="vuuh-resource" href={href} target="_blank" rel="noreferrer" key={label}>{label} ↗</a>
    : <span className="vuuh-resource vuuh-resource-pending" key={label} aria-disabled="true">{label} <small>Link kommer snart</small></span>
  )}</div>;
}

function ProjectImage({ src, caption, hero = false, onOpen }) {
  return <figure className={`vuuh-image${hero ? " vuuh-image-hero" : ""}`}>
    {onOpen ? <button className="vuuh-image-open" type="button" onClick={onOpen} aria-label={`Åbn stort billede: ${caption}`} aria-haspopup="dialog">
      <img src={src} alt={caption} loading="lazy" />
    </button> : <img src={src} alt={caption} loading={hero ? "eager" : "lazy"} />}
    <figcaption><span>{caption}</span></figcaption>
  </figure>;
}

function SectionHeading({ number, children }) {
  return <header className="vuuh-section-heading" data-vuuh-reveal><span>{number}</span><h2>{children}</h2></header>;
}

export default function VuuhProjectPage() {
  const caseRef = useRef(null);
  const dialogRef = useRef(null);
  const [expandedImage, setExpandedImage] = useState(null);

  useEffect(() => {
    if (!expandedImage) return undefined;
    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [expandedImage]);
  useEffect(() => {
    const page = caseRef.current;
    const elements = page.querySelectorAll("[data-vuuh-reveal]");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return undefined;
    const directions = ["from-left", "from-right", "from-bottom"];
    elements.forEach((element, index) => element.classList.add("lynk-reveal", directions[index % directions.length]));
    page.classList.add("scroll-reveal-ready");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -10%", threshold: 0.1 });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return <article className="lynk-case vuuh-case" ref={caseRef}>
    <header className="vuuh-hero vuuh-container">
      <Link className="vuuh-back" to="/projects">← Alle projekter</Link>
      <div className="vuuh-hero-layout">
        <div className="vuuh-hero-copy">
          <h1><img className="vuuh-title-logo" src={vuuhLogo} alt="Vuuh" /><span>Design Better<br />Onboarding</span></h1>
          <p className="vuuh-eyebrow">UX/UI Design · Product Optimization · 3. semester</p>
          <p className="vuuh-intro">Et mere overskueligt onboarding-flow med synlig progression, hjælp i den rigtige situation og tydelig feedback.</p>
          <ResourceLinks />
        </div>
        <div className="vuuh-hero-visual" aria-label="Udvalgte skærme fra Vuuh-redesignet">
          <div className="vuuh-hero-orbit" aria-hidden="true" />
          <figure className="vuuh-hero-screen vuuh-hero-screen-back"><img src={welcomeImage} alt="Velkomstskærmen i Vuuh-redesignet" /></figure>
          <figure className="vuuh-hero-screen vuuh-hero-screen-front"><img src={onboarding1} alt="Onboarding med synlig progression og Shopify-forbindelse" /></figure>
        </div>
      </div>
    </header>

    <section className="vuuh-section vuuh-container">
      <SectionHeading number="01">Projekt og udfordring</SectionHeading>
      <p className="vuuh-challenge-statement" data-vuuh-reveal>Hvordan kan vi gøre Vuuhs onboarding mere overskuelig og selvforklarende for nye brugere?</p>
      <div className="vuuh-copy" data-vuuh-reveal>
        <p>Vuuh hjælper webshops med at håndtere produktdata og integrationer til blandt andet Shopify. Opgaven var at forbedre platformens onboarding, så nye brugere lettere kunne komme i gang.</p>
        <p>Onboardingen skabte usikkerhed om næste handling, de nødvendige oplysninger og om en handling var gennemført korrekt.</p>
        <p>Jeg lavede projektet med en medstuderende. Analyse, problemidentifikation og løsningsforslag var fælles arbejde. Mit primære ansvar var at omsætte vores indsigter til en interaktiv Figma-prototype.</p>
      </div>
    </section>

    <section className="vuuh-band"><div className="vuuh-section vuuh-container">
      <SectionHeading number="02">Undersøgelse og prioritering</SectionHeading>
      <div className="vuuh-copy" data-vuuh-reveal>
        <p>Vi gennemførte en UX-audit med <strong>Heuristic Evaluation og Cognitive Walkthrough</strong> for at identificere problemer i onboarding-flowet.</p>
        <p>Undersøgelsen førte til tre centrale findings:</p>
      </div>
      <div className="vuuh-findings">
        {[
          ["Uklar retning", "Brugeren manglede et tydeligt overblik over progression og næste relevante handling.", "Vuuh-dashboard · Overblik og næste handling", dashboardImage],
          ["Uklar butiksidentifikation", 'Sammenhængen mellem Shopifys oplysninger og Vuuhs begreb "Shop name" var svær at forstå.', "Oprindelig onboarding · Find butik", originalShopImage],
          ["Utilstrækkelig feedback", "Det var ikke tydeligt nok, hvornår Shopify-forbindelsen var gennemført.", "Oprindelig onboarding · Shopify-forbindelse", originalConnectionImage],
        ].map(([title, text, caption, image], index) => <article className="vuuh-finding" data-vuuh-reveal key={title}>
          <ProjectImage src={image} caption={caption} onOpen={() => setExpandedImage({ src: image, caption })} /><span className="vuuh-eyebrow">Finding {index + 1}</span><h3>{title}</h3><p>{text}</p>
        </article>)}
      </div>
      <div className="vuuh-copy" data-vuuh-reveal>
        <p>Vi prioriterede alle tre problemer højt, fordi de kunne gøre det svært for førstegangsbrugere at gennemføre onboardingen selvstændigt.</p>
        <p>Vi arbejdede med to personas: Charlotte med begrænset digital erfaring og Emma, der er vant til Shopify. Løsningen skulle derfor tilbyde hjælp uden at forsinke erfarne brugere.</p>
      </div>
    </div></section>

    <section className="vuuh-section vuuh-container">
      <SectionHeading number="03">Løsning og designbeslutninger</SectionHeading>
      <div className="vuuh-copy" data-vuuh-reveal>
        <p>Med udgangspunkt i analysen udviklede vi et redesign med fokus på <strong>progression, kontekstbaseret hjælp og tydelig systemfeedback</strong>.</p>
        <p>Jeg visualiserede og sammenkoblede vores løsninger i Figma til et samlet onboarding-flow.</p>
      </div>
      <div className="vuuh-solution" data-vuuh-reveal>
        <ProjectImage src={onboarding1} caption="Figma · 4-trins stepper" />
        <div><span className="vuuh-eyebrow">Forbedring 1</span><h3>Synlig progression</h3><p>Jeg implementerede en stepper med fire trin, hvor brugeren kan se sin aktuelle placering, afsluttede trin og det videre forløb. Designet tager udgangspunkt i Normans <em>Conceptual Model</em> og <em>Gulf of Execution</em>, da brugeren lettere skal kunne forstå processen og identificere næste handling.</p></div>
      </div>
      <div className="vuuh-solution" data-vuuh-reveal>
        <ProjectImage src={shopNameGuide} caption="Figma · Kontekstbaseret Shop name-vejledning" />
        <div><span className="vuuh-eyebrow">Forbedring 2</span><h3>Kontekstbaseret hjælp</h3><p>Ved indtastning af "Shop name" tilføjede vi en vejledning, der viser, hvor oplysningen findes i Shopify. Hjælpen vises direkte i den relevante situation, så brugeren ikke skal forlade flowet for at finde informationen. Det reducerer usikkerhed og gør handlingen lettere at gennemføre.</p></div>
      </div>
      <div className="vuuh-solution" data-vuuh-reveal>
        <ProjectImage src={successImage} caption="Figma · Success-state og næste handling" />
        <div><span className="vuuh-eyebrow">Forbedring 3</span><h3>Feedback og UI-states</h3><p>Jeg designede loading-, success- og error-states, der viser systemets status og hjælper brugeren videre. En vellykket Shopify-forbindelse giver en tydelig bekræftelse og en CTA til næste trin.</p><p>Det understøtter Normans <em>Feedback</em> og <em>Gulf of Evaluation</em>, hvor brugeren skal kunne forstå resultatet af sine handlinger.</p></div>
      </div>
    </section>

    <section className="vuuh-band"><div className="vuuh-section vuuh-container">
      <SectionHeading number="04">Resultat og dokumentation</SectionHeading>
      <div className="vuuh-copy" data-vuuh-reveal>
        <p>Den interaktive Figma-prototype viser et sammenhængende onboarding-flow fra introduktion og Shopify-forbindelse til afsluttet opsætning.</p>
        <p>I vores Accessibility Design Check arbejdede vi med tekstkontrast, fejlidentifikation og mulighed for at rette fejl. Vi forbedrede blandt andet kontrastforholdet på et tekstområde fra <strong>1,87:1 til 6,58:1</strong>, så det opfylder WCAG AA's kontrastkrav for almindelig tekst.</p>
        <p>Derudover designede jeg en error-state, der tydeligt viser, når en handling mislykkes, og hjælper brugeren med at rette fejlen og prøve igen.</p>
      </div>
      <div className="vuuh-result-image vuuh-error-image" data-vuuh-reveal>
        <ProjectImage src={errorImage} caption="Error-state · Fejlidentifikation og mulighed for at prøve igen" />
      </div>
      <div className="vuuh-flow-heading" data-vuuh-reveal>
        <h3>Det samlede<br /><span>onboarding-flow</span></h3>
        <p>Seks skærme viser vejen gennem onboardingen med progression, hjælp og feedback undervejs.</p>
      </div>
      <div className="vuuh-result-image vuuh-welcome-image" data-vuuh-reveal>
        <ProjectImage src={welcomeImage} caption="Vuuh · Velkomstskærm" />
      </div>
      <div className="vuuh-flow-grid">
        {onboardingScreens.map((image, index) => <div data-vuuh-reveal key={image}><ProjectImage src={image} caption={`Onboarding · Skærm ${index + 1}`} /></div>)}
      </div>
      <div className="vuuh-copy" data-vuuh-reveal><p>Prototypen viser de foreslåede forbedringer. Vi har ikke dokumenteret en øget gennemførelsesgrad hos rigtige brugere. Det kræver efterfølgende brugertests.</p><ResourceLinks /></div>
    </div></section>

    <div className="vuuh-closing vuuh-container">
      <div className="vuuh-closing-grid">
    <section className="vuuh-closing-section">
      <SectionHeading number="05">Faglig refleksion</SectionHeading>
      <div className="vuuh-copy" data-vuuh-reveal>
        <p>Jeg lærte, at onboarding kræver den rigtige information på det rigtige tidspunkt. Flere forklaringer gør ikke nødvendigvis processen lettere.</p>
        <p>Vi valgte synlig progression og valgfri hjælp, så brugeren kan komme videre uden unødvendige instruktioner.</p>
        <p>I Figma fik jeg erfaring med at omsætte UX-principper til konkrete komponenter og sammenkoble skærmene. Jeg skulle tænke over, hvad der sker både før og efter hver handling.</p>
        <p>Næste skridt er at teste, om både nye og erfarne Shopify-brugere kan gennemføre prototypens onboarding uden hjælp.</p>
      </div>
    </section>

    <section className="vuuh-closing-section">
      <SectionHeading number="06">Forretningspotentiale</SectionHeading>
      <div className="vuuh-copy" data-vuuh-reveal>
        <p>En mere overskuelig onboarding kan give nye kunder en bedre første oplevelse og gøre det lettere at tage Vuuh i brug. Hvis flere gennemfører opsætningen selvstændigt, kan supportbehovet potentielt falde. Forretningspotentialet bygger på vores identificerede UX-problemer og designforslag. Det skal valideres gennem brugertests og data fra den faktiske onboarding.</p>
      </div>
    </section>
      </div>
      <div className="vuuh-end" data-vuuh-reveal><ResourceLinks /><Link className="vuuh-back" to="/projects">← Tilbage til projekter</Link></div>
    </div>
    <dialog className="vuuh-lightbox" ref={dialogRef} aria-label="Forstørret finding-billede"
      onCancel={() => setExpandedImage(null)}
      onClick={(event) => { if (event.target === event.currentTarget) setExpandedImage(null); }}>
      <button className="vuuh-lightbox-close" type="button" aria-label="Luk billede" onClick={() => setExpandedImage(null)}>×</button>
      {expandedImage && <figure className="vuuh-lightbox-content">
        <img src={expandedImage.src} alt={expandedImage.caption} />
        <figcaption>{expandedImage.caption}</figcaption>
      </figure>}
    </dialog>
  </article>;
}
