import { useEffect, useRef } from "react";
import { Link } from "react-router";
import styles from "./mellemrum-project-page.module.css";
import { AnimatedValue, usePerformanceAnimation } from "./mellemrum-performance-animation";

const live = "https://benjaminknudsen.github.io/mellemrum-react-optimering-3sem/";
const repository = "https://github.com/benjaminknudsen/mellemrum-react-optimering-3sem";
import appOverview from "../assets/images/landingpage-mellemrum.png";
import schemaImage from "../assets/images/supabase-schema-visualizer.png";
import tableImage from "../assets/images/supabase-table.png";
import registrationsImage from "../assets/images/tilmeldinger.png";
const audit = `${import.meta.env.BASE_URL}documents/teknisk-audit-pdf.pdf`;

function Links({ showAudit = false }) {
  return <div className={styles.links}><a href={live} target="_blank" rel="noreferrer">Se applikationen ↗</a><a href={repository} target="_blank" rel="noreferrer">GitHub ↗</a>{showAudit && <a href={audit} target="_blank" rel="noopener noreferrer">Teknisk audit</a>}</div>;
}
function Screenshot({ src, title, alt, eager = false, className = "", showBar = true }) {
  return <figure className={`${styles.screenshot} ${className}`}>
    {showBar && <div className={styles.screenBar}><span aria-hidden="true">● ● ●</span><span>{title}</span></div>}
    <img src={src} alt={alt} loading={eager ? "eager" : "lazy"} decoding="async" />
  </figure>;
}
function Heading({ number, children }) {
  return <header className={styles.heading}><span>{number}</span><h2>{children}</h2></header>;
}

export default function MellemrumProjectPage() {
  const pageRef = useRef(null);
  const performanceRef = usePerformanceAnimation();
  useEffect(() => {
    const page = pageRef.current;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (preference.matches || !("IntersectionObserver" in window)) return undefined;
    const frames = new Set();
    const modules = [...page.querySelectorAll([
      styles.heading, styles.challenge, styles.intro, styles.screenshot,
      styles.auditGrid, styles.database, styles.metrics, styles.stability,
      styles.output, styles.end,
    ].map((name) => `.${name}`).join(","))].filter((module) => !module.closest(`.${styles.performance}`));
    const finishNumbers = () => page.querySelectorAll("[data-count-target]").forEach((number) => {
      number.textContent = number.dataset.countTarget;
    });
    const animateNumbers = (module) => {
      const numbers = [...module.querySelectorAll("[data-count-target]")];
      if (!numbers.length) return;
      const start = performance.now();
      const tick = (now) => {
        const progress = Math.min((now - start) / 750, 1);
        numbers.forEach((number) => {
          number.textContent = String(Math.round(Number(number.dataset.countTarget) * progress));
        });
        if (progress < 1) schedule(tick);
      };
      const schedule = (callback) => {
        const id = requestAnimationFrame((now) => { frames.delete(id); callback(now); });
        frames.add(id);
      };
      schedule(tick);
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add(styles.visible);
        observer.unobserve(entry.target);
        if (!preference.matches) animateNumbers(entry.target);
      });
    }, { threshold: .08, rootMargin: "0px 0px -4% 0px" });
    modules.forEach((module) => { module.classList.add(styles.module); observer.observe(module); });
    page.classList.add(styles.ready);
    const showImmediately = () => {
      if (!preference.matches) return;
      observer.disconnect();
      frames.forEach(cancelAnimationFrame);
      frames.clear();
      modules.forEach((module) => module.classList.add(styles.visible));
      finishNumbers();
    };
    preference.addEventListener("change", showImmediately);
    return () => {
      observer.disconnect();
      preference.removeEventListener("change", showImmediately);
      frames.forEach(cancelAnimationFrame);
      finishNumbers();
      page.classList.remove(styles.ready);
    };
  }, []);
  return <article className={styles.case} ref={pageRef}>
    <header className={`${styles.shell} ${styles.hero}`}>
      <Link className={styles.back} to="/projects">← Alle projekter</Link>
      <div className={styles.heroLayout}>
        <div><p className={styles.label}>PROJEKTCASE / FRONTEND-OPTIMERING</p><h1>MELLEMRUM<span className={styles.logoDot} aria-hidden="true" /></h1><h2 className={styles.subtitle}>Optimering af en eksisterende React-applikation</h2><p>Fra eksisterende kode til bedre data, tilmeldinger og feedback<br />på en lokal kultur- og eventplatform.</p><ul className={styles.tags}>{["REACT", "VITE", "SUPABASE", "REST API", "GITHUB"].map((tag) => <li key={tag}>{tag}</li>)}</ul><Links /></div>
        <div className={styles.heroVisual}><Screenshot src={appOverview} title="Mellemrum / Forside" showBar={false} alt="Mellemrums forside med introduktion til lokale kulturoplevelser og link til kommende events" eager /></div>
      </div>
    </header>

    <section className={`${styles.shell} ${styles.section}`}>
      <Heading number="01">UDFORDRINGEN</Heading>
      <div className={styles.challenge}><h3>Forbedr fundamentet.<br /><span>Bevar produktet.</span></h3><p>Mellemrum skulle optimeres uden en fuld omarbejdning af designet. Gentagne data i Supabase, tilmeldinger uden lagring og manglende feedback var centrale problemer. Administration, navigation, performance og tilgængelighed skulle også forbedres.</p></div>
    </section>

    <section className={styles.auditSection}><div className={`${styles.shell} ${styles.section}`}>
      <Heading number="02">TEKNISK GENNEMGANG</Heading>
      <p className={styles.intro}>Jeg gennemgik datamodel, funktionalitet og brugeroplevelse i en teknisk audit. Datamodellen og det manglende tilmeldingsflow blev prioriteret højest, fordi de påvirkede appens kernefunktionalitet. Derefter arbejdede jeg med feedback, navigation og performance.</p>
      <div className={styles.auditGrid}>{[
        ["DATASTRUKTUR", "Gentagne venue- og eventdata."],
        ["TILMELDINGSFLOW", "Tilmeldinger blev ikke gemt."],
        ["FEEDBACK I BRUGERFLADEN", "Manglende loading-, error- og empty-states."],
        ["PERFORMANCE", "Billedindlæsning og layoutstabilitet."],
      ].map(([title, text]) => <div className={styles.auditItem} key={title}><h3>{title}</h3><p>{text}</p></div>)}</div>
    </div></section>

    <section className={`${styles.shell} ${styles.section}`}>
      <Heading number="03">DATA &amp; FUNKTIONALITET</Heading>
      <p className={styles.intro}>Normaliseringen reducerer duplikerede oplysninger. Tilmeldinger gemmes via Supabase REST API og kan ændres og slettes. Events kan søges på flere felter, og tilmeldinger kan sorteres. Loading-, error-, empty- og success-states viser handlingernes status.</p>
      <div className={styles.dataScreens}>
        <Screenshot src={schemaImage} title="Supabase / Schema Visualizer" alt="Relationer fra registrations.eventId til events.id og fra events.venueId til venues.id i Supabase" />
        <div className={styles.tableDocumentation}>
          <h3 className={styles.documentationHeading}>Databasen i praksis</h3>
          <Screenshot src={tableImage} title="Supabase / Table Editor" alt="Supabase Table Editor med events og tabellerne registrations og venues" className={styles.tablePreview} />
        </div>
      </div>
    </section>

    <section className={styles.performance} ref={performanceRef}><div className={`${styles.shell} ${styles.section}`}>
      <header className={styles.heading}><span><AnimatedValue>04</AnimatedValue></span><h2><AnimatedValue delay={50}>PERFORMANCEOPTIMERING</AnimatedValue></h2></header>
      <div className={styles.metrics}>
        <div className={styles.mainMetric}><h3><AnimatedValue delay={100}>BILLEDOPTIMERING</AnimatedValue></h3><span className={styles.label}><AnimatedValue delay={150}>LIGHTHOUSE / MEDIAN</AnimatedValue></span><div className={styles.score}><span><AnimatedValue numeric delay={550}>78</AnimatedValue></span><span aria-hidden="true">→</span><strong><AnimatedValue numeric delay={550}>90</AnimatedValue></strong></div><div className={styles.scoreLabels}><span><AnimatedValue delay={200}>FØR</AnimatedValue></span><span><AnimatedValue delay={250}>EFTER</AnimatedValue></span></div></div>
        <div className={styles.eventMetrics}><dl><div><dt><AnimatedValue delay={350}>PERFORMANCE / FØR</AnimatedValue></dt><dd><AnimatedValue numeric delay={750}>64 / 65 / 65</AnimatedValue></dd></div><div><dt><AnimatedValue delay={400}>PERFORMANCE / EFTER</AnimatedValue></dt><dd><AnimatedValue numeric delay={800}>94 / 93 / 93</AnimatedValue></dd></div><div className={styles.cls}><dt><AnimatedValue delay={450}>CLS / FØR → EFTER</AnimatedValue></dt><dd><AnimatedValue numeric delay={950}>0,671</AnimatedValue> <span>→</span> <strong><AnimatedValue numeric delay={950}>0</AnimatedValue></strong></dd></div></dl></div>
      </div>
      <p>Tallene stammer fra gentagne Lighthouse Mobile-tests i den tekniske gennemgang, ikke brugerdata. Jeg optimerede billeder, responsive billedstørrelser og EventPages indlæsning for at begrænse layoutskift.</p>
    </div></section>

    <section className={`${styles.shell} ${styles.section}`}>
      <Heading number="05">BRUGEROPLEVELSE &amp; STABILITET</Heading>
      <div className={styles.stability}>{[
        ["FEJLHÅNDTERING", "Fejlfeedback og mulighed for at prøve igen."],
        ["TILGÆNGELIGHED", "Semantiske labels, synligt fokus og skip-link til hovedindholdet."],
        ["NAVIGATION", "Tilpassede routing til GitHub Pages, så undersider kan åbnes direkte og genindlæses uden 404-fejl."],
      ].map(([title, text]) => <div key={title}><h3>{title}</h3><p>{text}</p></div>)}</div>
      <h3 className={styles.registrationHeading}>Tilmeldingsadministration</h3>
      <Screenshot src={registrationsImage} title="Tilmeldingsoversigt" alt="Tilmeldingsoversigt med datosortering, ændring af status og mulighed for at slette tilmeldinger" className={styles.registrationPreview} />
    </section>

    <section className={styles.final}><div className={`${styles.shell} ${styles.section}`}>
      <Heading number="06">RESULTAT &amp; REFLEKSION</Heading>
      <div className={styles.output}><div><h3>RESULTAT</h3><p>En optimeret og publiceret React-app med forbedret datamodel, tilmeldinger, feedback, navigation og performance.</p></div><div><h3>FAGLIG REFLEKSION</h3><p>Jeg lærte at analysere eksisterende kode og prioritere små ændringer med test og Git-branches. Optimering kræver forståelse for samspillet mellem kode, data og brugeroplevelse.</p></div><div><h3>FORRETNINGSPOTENTIALE</h3><p>Robuste tilmeldinger og bedre administration kan gøre platformen mere anvendelig for deltagere og arrangører. Øget brug eller omsætning er ikke dokumenteret.</p></div></div>
      <div className={styles.end}><Links showAudit /></div>
    </div></section>
  </article>;
}
