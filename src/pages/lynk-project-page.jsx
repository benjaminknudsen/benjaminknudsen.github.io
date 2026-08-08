import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import placeholderImage from "../assets/images/lynk.svg";
import homepageImage from "../assets/images/homepage.svg";
import moodboardImage from "../assets/images/moodboard.svg";
import prototypeImage from "../assets/images/prototype.png";
import userTestImage from "../assets/images/thinkaloud.svg";
import designSystemImage from "../assets/images/designsystem2.svg";
import wireframeImage from "../assets/images/wireframe.svg";
import exploreEventsImage from "../assets/images/udforskevents.svg";
import filteringImage from "../assets/images/filtrering.png";
import profileImage from "../assets/images/profil.svg";
import createEvent1Image from "../assets/images/opretevent1.svg";
import createEvent2Image from "../assets/images/opretevent2.svg";
import createEvent3Image from "../assets/images/opretevent3.svg";
import createEvent4Image from "../assets/images/opretevent4.svg";
import createEvent5Image from "../assets/images/opretevent5.svg";

const facts = [
  ["Type", "Eksamensprojekt"],
  ["Uddannelse", "Multimediedesigner"],
  ["Varighed", "6 uger"],
  ["Rolle", "UI/UX-design og frontend"],
  ["Teknologier", "React, Supabase, JavaScript og Figma"],
];

const roles = [
  "UI-design", "UX-design", "React-udvikling", "Interaktionsdesign",
  "Supabase", "Prototyping", "Brugertest", "Responsivt design",
];

const processSteps = [
  {
    number: "01",
    title: "Research og idéudvikling",
    text: "Indsigter om motivation, fællesskab og barrierer for aktivitet dannede grundlaget for konceptet.",
    image: moodboardImage,
    imageAlt: "Moodboard og research til Lynk",
  },
  {
    number: "02",
    title: "Brugerflow og wireframes",
    text: "De vigtigste flows blev kortlagt og omsat til wireframes med fokus på enkel orientering.",
    image: wireframeImage,
    imageAlt: "Wireframes og brugerflow til Lynk",
  },
  {
    number: "03",
    title: "High-fidelity design i Figma",
    text: "Wireframes blev udviklet til et sammenhængende visuelt design og en klikbar prototype.",
    image: prototypeImage,
    imageAlt: "High-fidelity prototype af Lynk",
  },
  {
    number: "04",
    title: "Test og implementering",
    text: "Løsningen blev testet, justeret og implementeret som genbrugelige React-komponenter.",
    image: userTestImage,
    imageAlt: "Brugertest af Lynk",
  },
];

const screens = [
  ["Udforsk events", "Forsiden giver hurtigt overblik over kategorier og nærliggende aktiviteter. Brugeren kan se deltagerantal, tidspunkt, lokation og aktivitetstype direkte på eventkortene.", exploreEventsImage],
  ["Filtrering", "Brugeren kan filtrere events efter aktivitet, lokation, tidspunkt og niveau, så det bliver lettere at finde relevante muligheder uden at blive overvældet.", filteringImage],
  ["Opret event flow", "Eventflowet er opdelt i enkle trin, hvor brugeren vælger aktivitet, tidspunkt, lokation og deltagerantal."],
  ["Profil og fællesskab", "Profilsiden samler brugerens aktiviteter, kommende events og relevante oplysninger i et overskueligt layout.", profileImage],
];

const createEventFlow = [createEvent1Image, createEvent2Image, createEvent3Image, createEvent4Image, createEvent5Image];
const eventFlowOffsets = [0, 5, 7.9, 10, 11.4];

const technologies = ["React", "Vite", "React Router", "JavaScript", "CSS", "Supabase", "Figma", "GitHub"];

function Placeholder({ label, className = "" }) {
  return (
    <div className={`lynk-placeholder ${className}`}>
      <img src={placeholderImage} alt="" />
      <span>{label}</span>
    </div>
  );
}

function ScreenImage({ src, alt, className = "" }) {
  return (
    <div className={`lynk-placeholder lynk-screen-image-small lynk-screen-image ${className}`}>
      <img src={src} alt={alt} />
    </div>
  );
}

function EventFlowCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div className="lynk-event-flow-wrap">
      <div className="lynk-event-flow-stage">
        {createEventFlow.map((image, index) => {
          const stackPosition = (index - activeSlide + createEventFlow.length) % createEventFlow.length;
          return (
            <button
              className="lynk-event-flow-card"
              type="button"
              onClick={() => setActiveSlide((current) => current === index ? (current + 1) % createEventFlow.length : index)}
              aria-label={index === activeSlide ? "Vis næste trin i opret event flow" : `Vis trin ${index + 1} i opret event flow`}
              aria-current={index === activeSlide ? "true" : undefined}
              style={{
                "--stack-position": stackPosition,
                "--stack-offset": `${eventFlowOffsets[stackPosition]}rem`,
                zIndex: createEventFlow.length - stackPosition,
              }}
              key={image}
            >
              <img src={image} alt={`Opret event flow – trin ${index + 1}`} />
            </button>
          );
        })}
      </div>
      <div className="lynk-event-flow-status" aria-live="polite">
        <span>{String(activeSlide + 1).padStart(2, "0")} / 05</span>
      </div>
    </div>
  );
}

function LynkProjectPage() {
  const caseRef = useRef(null);

  useEffect(() => {
    const caseStudy = caseRef.current;
    if (!caseStudy) return undefined;

    const elements = caseStudy.querySelectorAll([
      ".lynk-about > *",
      ".lynk-heading-row > *",
      ".lynk-pill-grid",
      ".lynk-challenge-grid > *",
      ".lynk-process-card",
      ".lynk-design-image",
      ".lynk-screen-row",
      ".lynk-tech-list",
      ".lynk-focus-grid > *",
      ".lynk-reflection .lynk-container",
    ].join(","));
    const directions = ["from-left", "from-right", "from-bottom"];
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    elements.forEach((element, index) => {
      element.classList.add("lynk-reveal", directions[index % directions.length]);
    });
    caseStudy.classList.add("scroll-reveal-ready");

    if (reducedMotion) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10%", threshold: 0.1 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <article className="lynk-case" ref={caseRef}>
      <header className="lynk-hero lynk-container">
        <div className="lynk-hero-copy">
          <Link className="lynk-back" to="/projects">← Alle projekter</Link>
          <p className="lynk-label">Web app</p>
          <h1>Lynk</h1>
          <p className="lynk-intro">En social platform, der gør det nemt at finde, oprette og deltage i lokale sportsaktiviteter.</p>
        </div>
        {/* Udskift med: stort Lynk hero-mockup */}
        <Placeholder label="Hero mockup" className="lynk-hero-image" />
        <dl className="lynk-facts">
          {facts.map(([term, description]) => (
            <div key={term}><dt>{term}</dt><dd>{description}</dd></div>
          ))}
        </dl>
      </header>

      <section className="lynk-section lynk-container lynk-about">
        <div>
          <p className="lynk-kicker">Introduktion</p>
          <h2>Om projektet</h2>
          <p>Lynk er en social webapp udviklet som eksamensprojekt på multimediedesigneruddannelsen. Formålet var at gøre det lettere at finde andre mennesker at dyrke sport med og skabe nye fællesskaber gennem lokale aktiviteter.</p>
          <p>Idéen udsprang af min egen interesse for sport og de sociale fællesskaber, der opstår gennem fysisk aktivitet.</p>
          <p>Platformen giver brugeren mulighed for at udforske events, filtrere aktiviteter efter behov og oprette egne sportsarrangementer. Løsningen blev udviklet som en single-page application i React med Supabase som database.</p>
        </div>
        <div className="lynk-placeholder lynk-about-image">
          <img src={homepageImage} alt="Lynk-platformens hjemmeside" />
        </div>
      </section>

      <section className="lynk-section lynk-container">
        <p className="lynk-kicker">Ansvarsområder</p>
        <div className="lynk-heading-row"><h2>Min rolle</h2><p>Jeg var involveret i hele projektforløbet og arbejdede med alt fra idéudvikling og design til frontend og implementering. Jeg tog ansvar for en stor del af projektet og bidrog på tværs af de fleste områder, hvilket gav mig et godt indblik i hele processen fra start til slut.</p></div>
        <ul className="lynk-pill-grid">{roles.map((role) => <li key={role}>{role}</li>)}</ul>
      </section>

      <section className="lynk-section lynk-contrast">
        <div className="lynk-container lynk-challenge-grid">
          <div><span>01</span><h2>Udfordringen</h2><p>Mange vil gerne være mere aktive, men mangler nogen at dyrke sport med eller et enkelt sted at finde lokale aktiviteter. Eksisterende løsninger kan være uoverskuelige eller kræve, at brugeren allerede er en del af et fællesskab.</p></div>
          <div><span>02</span><h2>Løsningen</h2><p>Lynk samler lokale sportsaktiviteter på én platform og gør det hurtigt at finde et event, der passer til brugerens niveau, lokation og tidspunkt. Fokus var på enkel navigation, lav adgangsbarriere og tydelige handlinger.</p></div>
        </div>
      </section>

      <section className="lynk-section lynk-container">
        <p className="lynk-kicker">Proces</p><h2>Fra idé til løsning</h2>
        <p className="lynk-section-intro">Projektet blev udviklet gennem en iterativ designproces med fokus på brugerbehov, struktur, test og løbende forbedringer.</p>
        <div className="lynk-process-grid">
          {processSteps.map((step) => (
            <article className="lynk-process-card" key={step.number}>
              <div className={`lynk-placeholder lynk-process-image${step.number === "01" ? " lynk-process-image-zoom" : ""}${step.number === "04" ? " lynk-process-image-wide" : ""}`}>
                <img src={step.image} alt={step.imageAlt} />
              </div>
              <span>{step.number}</span><h3>{step.title}</h3><p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="lynk-section lynk-container">
        <p className="lynk-kicker">Visuel retning</p><h2>Designsystem</h2>
        <p className="lynk-section-intro">Der blev udviklet et simpelt designsystem for at sikre konsistens på tværs af platformens skærme og komponenter.</p>
        <div className="lynk-placeholder lynk-design-image">
          <img src={designSystemImage} alt="Lynks designsystem" />
        </div>
      </section>

      <section className="lynk-section lynk-screens">
        <div className="lynk-container"><p className="lynk-kicker">Produktet</p><h2>Udvalgte skærme</h2></div>
        {screens.map(([title, text, image], index) => (
          <div className={`lynk-screen-row lynk-container${index === 2 ? " lynk-screen-row-flow" : ""}`} key={title}>
            {index === 2
              ? <EventFlowCarousel />
              : <ScreenImage src={image} alt={`${title} i Lynk`} className={index === 1 ? "lynk-screen-image-filtering" : ""} />}
            <div><h3>{title}</h3><p>{text}</p></div>
          </div>
        ))}
      </section>

      <section className="lynk-section lynk-container">
        <p className="lynk-kicker">Stack</p>
        <div className="lynk-heading-row"><div><h2>Teknologier</h2><p>Løsningen blev udviklet som en single-page application med React. Supabase blev brugt til datahåndtering, mens React Router styrede navigationen mellem platformens sider.</p></div><ul className="lynk-tech-list">{technologies.map((item) => <li key={item}>{item}</li>)}</ul></div>
      </section>

      <section className="lynk-section lynk-container lynk-focus-grid">
        {[
          ["Brugeroplevelse", "Navigationen og informationsstrukturen blev designet, så brugeren hurtigt kan forstå platformen og finde relevante aktiviteter."],
          ["Komponentbaseret frontend", "Eventkort, navigation og formularfelter blev bygget som genbrugelige React-komponenter for at skabe en mere overskuelig kodebase."],
          ["Data og funktionalitet", "Supabase blev brugt til at hente og håndtere eventdata, så platformen kunne vise dynamisk indhold."],
        ].map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}
      </section>

      <section className="lynk-section lynk-reflection">
        <div className="lynk-container"><p className="lynk-kicker">Refleksion</p><h2>Hvad lærte jeg?</h2><p>Projektet lærte mig at arbejde mere struktureret med en større digital løsning og holde fokus på brugerens behov gennem hele processen. Jeg blev særligt bedre til at omsætte indsigter og feedback til konkrete designvalg og skabe en tydelig sammenhæng mellem koncept, visuel identitet og brugeroplevelse.</p><Link to="/projects">Se flere projekter <span>→</span></Link></div>
      </section>
    </article>
  );
}

export default LynkProjectPage;
