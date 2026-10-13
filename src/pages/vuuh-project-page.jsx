import { useEffect, useRef } from "react";
import { Link } from "react-router";
import placeholderImage from "../assets/images/prototype.png";

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

function ProjectImage({ caption, hero = false }) {
  return <figure className={`vuuh-image${hero ? " vuuh-image-hero" : ""}`}>
    <img src={placeholderImage} alt="Midlertidigt placeholderbillede" loading={hero ? "eager" : "lazy"} />
    <figcaption><span>{caption}</span><small>Placeholder</small></figcaption>
  </figure>;
}

function SectionHeading({ number, children }) {
  return <header className="vuuh-section-heading" data-vuuh-reveal><span>{number}</span><h2>{children}</h2></header>;
}

export default function VuuhProjectPage() {
  const caseRef = useRef(null);
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
      <p className="vuuh-eyebrow">UX/UI Design · Product Optimization · 3. semester</p>
      <h1>Vuuh <span>Design Better Onboarding</span></h1>
      <p className="vuuh-intro">Et mere overskueligt onboarding-flow med synlig progression, hjælp i den rigtige situation og tydelig feedback.</p>
      <ResourceLinks />
      <ProjectImage caption="Vuuh-redesignet · Et sammenhængende onboarding-flow" hero />
    </header>

    <section className="vuuh-section vuuh-container">
      <SectionHeading number="01">Projekt og udfordring</SectionHeading>
      <div className="vuuh-copy" data-vuuh-reveal>
        <p>Vuuh er en digital platform, der hjælper webshops med at håndtere produktdata og integrationer til blandt andet Shopify. Opgaven var at undersøge og forbedre Vuuhs eksisterende onboarding, så nye brugere lettere kan komme i gang med platformen.</p>
        <p>Udfordringen var, at onboardingen flere steder skabte usikkerhed om, hvad brugeren skulle gøre, hvilke oplysninger der skulle anvendes, og om en handling var gennemført korrekt.</p>
        <p>Projektet blev lavet i samarbejde med en medstuderende. Vi stod sammen for analysearbejdet, identificering af problemer og udvikling af løsningsforslag. Mit primære ansvar var at omsætte vores fælles indsigter til en interaktiv Figma-prototype.</p>
      </div>
    </section>

    <section className="vuuh-band"><div className="vuuh-section vuuh-container">
      <SectionHeading number="02">Undersøgelse og prioritering</SectionHeading>
      <div className="vuuh-copy" data-vuuh-reveal>
        <p>Vi gennemførte en UX-audit med udgangspunkt i <strong>Heuristic Evaluation og Cognitive Walkthrough</strong> for at identificere problemer i det eksisterende onboarding-flow.</p>
        <p>Undersøgelsen førte til tre centrale findings:</p>
      </div>
      <div className="vuuh-findings">
        {[
          ["Uklar retning", "Brugeren manglede et tydeligt overblik over progression og næste relevante handling.", "UX Audit Summary · Progression og næste handling"],
          ["Uklar butiksidentifikation", 'Sammenhængen mellem Shopifys oplysninger og Vuuhs begreb "Shop name" var svær at forstå.', "UX Audit Summary · Shop name"],
          ["Utilstrækkelig feedback", "Det var ikke tydeligt nok, hvornår Shopify-forbindelsen var gennemført.", "UX Audit Summary · Shopify-forbindelse"],
        ].map(([title, text, caption], index) => <article className="vuuh-finding" data-vuuh-reveal key={title}>
          <ProjectImage caption={caption} /><span className="vuuh-eyebrow">Finding 0{index + 1}</span><h3>{title}</h3><p>{text}</p>
        </article>)}
      </div>
      <div className="vuuh-copy" data-vuuh-reveal>
        <p>Vi prioriterede alle tre problemer højt, da de kunne skabe usikkerhed hos førstegangsbrugere og gøre det sværere at gennemføre onboardingen selvstændigt.</p>
        <p>Samtidig arbejdede vi med to personas med forskellige behov: Charlotte, der har begrænset digital erfaring, og Emma, der er vant til Shopify. Det understregede behovet for en løsning, der både tilbyder hjælp og giver erfarne brugere mulighed for at komme hurtigt videre.</p>
      </div>
    </div></section>

    <section className="vuuh-section vuuh-container">
      <SectionHeading number="03">Løsning og designbeslutninger</SectionHeading>
      <div className="vuuh-copy" data-vuuh-reveal>
        <p>Med udgangspunkt i analysen udviklede vi et redesign med fokus på <strong>progression, kontekstbaseret hjælp og tydelig systemfeedback</strong>.</p>
        <p>Jeg arbejdede primært med at visualisere og sammenkoble løsningerne i Figma, så de fungerede som et samlet onboarding-flow.</p>
      </div>
      <div className="vuuh-solution" data-vuuh-reveal>
        <ProjectImage caption="Figma · 4-trins stepper" />
        <div><span className="vuuh-eyebrow">Forbedring 01</span><h3>Synlig progression</h3><p>Jeg implementerede en stepper med fire trin, hvor brugeren kan se sin aktuelle placering, afsluttede trin og det videre forløb. Designet tager udgangspunkt i Normans <em>Conceptual Model</em> og <em>Gulf of Execution</em>, da brugeren lettere skal kunne forstå processen og identificere næste handling.</p></div>
      </div>
      <div className="vuuh-solution" data-vuuh-reveal>
        <ProjectImage caption="Figma · Kontekstbaseret Shop name-vejledning" />
        <div><span className="vuuh-eyebrow">Forbedring 02</span><h3>Kontekstbaseret hjælp</h3><p>Ved indtastning af "Shop name" tilføjede vi en vejledning, der viser, hvor oplysningen findes i Shopify. Hjælpen er tilgængelig direkte i den relevante situation frem for at sende brugeren videre til en separat hjælpeside. Det understøtter <em>Mapping</em> og reducerer behovet for at gætte.</p></div>
      </div>
      <div className="vuuh-solution" data-vuuh-reveal>
        <ProjectImage caption="Figma · Success-state og næste handling" />
        <div><span className="vuuh-eyebrow">Forbedring 03</span><h3>Feedback og UI-states</h3><p>Jeg designede loading-, success- og error-states, der kommunikerer systemets status og hjælper brugeren videre. Ved en vellykket Shopify-forbindelse vises eksempelvis en tydelig bekræftelse og en CTA til næste trin.</p><p>Det understøtter Normans <em>Feedback</em> og <em>Gulf of Evaluation</em>, hvor brugeren skal kunne forstå resultatet af sine handlinger.</p></div>
      </div>
    </section>

    <section className="vuuh-band"><div className="vuuh-section vuuh-container">
      <SectionHeading number="04">Resultat og dokumentation</SectionHeading>
      <div className="vuuh-copy" data-vuuh-reveal>
        <p>Resultatet blev en interaktiv Figma-prototype, der demonstrerer et sammenhængende onboarding-flow fra introduktion og Shopify-forbindelse til afsluttet opsætning.</p>
        <p>Som en del af vores Accessibility Design Check arbejdede vi med fejlidentifikation, mulighed for at rette fejl og forbedret tekstkontrast.</p>
        <p>Et konkret eksempel var en kontrastforbedring fra <strong>1,87:1 til 6,58:1</strong>, så den pågældende tekst opfylder WCAG AA's kontrastkrav for almindelig tekst.</p>
      </div>
      <div className="vuuh-comparison">
        <div data-vuuh-reveal><p className="vuuh-contrast-value"><span>Før</span>1,87:1</p><ProjectImage caption="Oprindelig tekstkontrast" /></div>
        <div data-vuuh-reveal><p className="vuuh-contrast-value"><span>Efter</span>6,58:1</p><ProjectImage caption="Forbedret tekstkontrast · WCAG AA" /></div>
      </div>
      <div className="vuuh-copy" data-vuuh-reveal><p>Prototypen demonstrerer vores foreslåede forbedringer, men vi har ikke dokumenteret, at redesignet øger gennemførelsesgraden hos rigtige brugere. Det vil kræve efterfølgende brugertests.</p><ResourceLinks /></div>
    </div></section>

    <section className="vuuh-section vuuh-container">
      <SectionHeading number="05">Faglig refleksion</SectionHeading>
      <div className="vuuh-copy" data-vuuh-reveal>
        <p>En vigtig læring var, at god onboarding ikke nødvendigvis handler om at tilføje flere forklaringer, men om at præsentere den rigtige information på det rigtige tidspunkt.</p>
        <p>Vi valgte derfor en løsning, hvor brugeren får tydelig progression og mulighed for ekstra hjælp uden at blive tvunget gennem unødvendige instruktioner.</p>
        <p>Arbejdet med prototypen gav mig især erfaring med at omsætte UX-principper til konkrete designbeslutninger og tænke i sammenhængende flows frem for isolerede skærme.</p>
        <p>Et naturligt næste skridt ville være at teste prototypen med både nye og erfarne Shopify-brugere for at undersøge, om de kan gennemføre onboardingen uden hjælp.</p>
      </div>
    </section>

    <section className="vuuh-section vuuh-container">
      <SectionHeading number="06">Forretningspotentiale</SectionHeading>
      <div className="vuuh-copy" data-vuuh-reveal>
        <p>En mere overskuelig onboarding kan skabe værdi for både Vuuh og deres kunder.</p>
        <p>Hvis flere brugere kan gennemføre opsætningen selvstændigt, kan det potentielt reducere behovet for support og gøre det lettere for nye kunder at komme i gang med platformen.</p>
        <p>For Vuuh kan en mere effektiv onboarding dermed bidrage til en bedre første brugeroplevelse og øge sandsynligheden for, at nye kunder får aktiveret og anvendt produktet.</p>
        <p>Potentialet bygger på de identificerede UX-problemer og vores designmæssige forbedringer, men skal valideres gennem brugertests og data fra den faktiske onboarding.</p>
      </div>
      <div className="vuuh-end" data-vuuh-reveal><ResourceLinks /><Link className="vuuh-back" to="/projects">← Tilbage til projekter</Link></div>
    </section>
  </article>;
}
