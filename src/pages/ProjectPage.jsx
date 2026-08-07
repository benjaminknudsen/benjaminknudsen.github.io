import { useEffect, useRef } from "react";
import { Link, useParams } from "react-router";
import oldFortunaLogo from "../assets/images/gammellogo.svg";
import homeHyggeVideo from "../assets/images/hjemmehygge.mov";
import negativeFortunaLogo from "../assets/images/logonegativt.svg";
import primaryFortunaLogo from "../assets/images/logofortuna.svg";
import blackPrimaryFortunaLogo from "../assets/images/logofortunasort.svg";
import officeMockup from "../assets/images/kontorrigtig.svg";
import businessCardMockup from "../assets/images/logovisitkortrigtig.svg";
import newFortunaLogo from "../assets/images/nytlogo.svg";
import blackFortunaLogo from "../assets/images/logosortheltrigtig.svg";
import projects from "../data/projects";
import BluntProjectPage from "./BluntProjectPage";
import LynkProjectPage from "./LynkProjectPage";
import LuminaProjectPage from "./LuminaProjectPage";

function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);
  const creativePageRef = useRef(null);

  useEffect(() => {
    const page = creativePageRef.current;
    if (!page) return undefined;

    const elements = [...page.querySelectorAll(".creative-reveal")];
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return undefined;
    }

    const queue = [];
    const queued = new Set();
    let timer;

    const revealNext = () => {
      const element = queue.shift();
      if (!element) {
        timer = undefined;
        return;
      }
      element.classList.add("is-visible");
      observer.unobserve(element);
      timer = window.setTimeout(revealNext, 700);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting || queued.has(entry.target)) return;
        queued.add(entry.target);
        queue.push(entry.target);
      });
      if (!timer) revealNext();
    }, { rootMargin: "0px 0px -8%", threshold: 0.08 });

    elements.forEach((element) => observer.observe(element));
    return () => {
      observer.disconnect();
      window.clearTimeout(timer);
    };
  }, [slug]);

  if (slug === "lynk") {
    return <LynkProjectPage />;
  }

  if (slug === "blunt") {
    return <BluntProjectPage />;
  }

  if (slug === "lumina") {
    return <LuminaProjectPage />;
  }

  if (!project) {
    return (
      <div className="page narrow">
        <p className="eyebrow">404</p>
        <h1>Projektet blev ikke fundet</h1>
        <p>Det projekt findes ikke i listen endnu.</p>
        <Link className="button" to="/projects">
          Tilbage til projekter
        </Link>
      </div>
    );
  }

  if (slug === "landingpage-koncept") {
    return (
      <article className="page creative-project-page landing-concept-page" ref={creativePageRef}>
        <h1>Landingpage</h1>
        <p className="lead">{project.description}</p>
        <section className="home-hygge-case creative-reveal" aria-label="Landingpage-koncept">
          <div className="creative-video-frame">
            <div className="landing-video-crop">
              <video
                className="detail-image detail-video"
                src={homeHyggeVideo}
                aria-label="Landingpage-koncept lavet i Figma"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
              />
            </div>
            <div className="creative-video-badges">
              <div className="figma-badge" aria-label="Lavet i Figma">
                <span className="figma-mark" aria-hidden="true">
                  <i /><i /><i /><i /><i />
                </span>
                <span>Lavet i Figma</span>
              </div>
            </div>
          </div>
        </section>
      </article>
    );
  }

  if (slug === "sideprojekter") {
    return (
      <article className="creative-project-page fortuna-editorial" ref={creativePageRef}>
        <div className="fortuna-editorial-shell">
          <header className="fortuna-editorial-hero creative-reveal">
            <p className="fortuna-editorial-kicker">Logo redesign · Fortuna Hjørring</p>
            <h1>En identitet<br />med ny energi.</h1>
            <p className="fortuna-editorial-lead">Dette personlige projekt udsprang af min interesse for fodbold og branding. Med udgangspunkt i Fortuna Hjørrings eksisterende identitet redesignede jeg logoet og udviklede et fleksibelt design med forskellige logovarianter og mockups, der viser identiteten i brug.</p>
          </header>

          <section className="fortuna-editorial-section fortuna-before-after" aria-labelledby="before-after-title">
            <header className="fortuna-section-heading creative-reveal">
              <p>01 · Før og efter</p>
              <h2 id="before-after-title">Fra tradition til et tydeligere udtryk.</h2>
            </header>
            <div className="fortuna-before-after-grid">
              <figure className="fortuna-editorial-figure fortuna-original creative-reveal">
                <figcaption>Det oprindelige logo</figcaption>
                <img src={oldFortunaLogo} alt="Fortuna Hjørrings oprindelige logo" />
              </figure>
              <figure className="fortuna-editorial-figure fortuna-redesign creative-reveal">
                <figcaption>Det nye logo</figcaption>
                <img src={newFortunaLogo} alt="Nyt logo til Fortuna Hjørring" />
              </figure>
            </div>
          </section>

          <section className="fortuna-editorial-section fortuna-system" aria-labelledby="system-title">
            <header className="fortuna-section-heading creative-reveal">
              <p>02 · Designsystem</p>
              <h2 id="system-title">Én identitet. Flere udtryk.</h2>
            </header>
            <div className="fortuna-system-grid">
              <div className="fortuna-primary-pair creative-reveal">
                <p>Primære varianter</p>
                <div className="fortuna-primary-pair-grid">
                  <div className="fortuna-primary-logo">
                    <img src={primaryFortunaLogo} alt="Fortuna-logo i primær variant" />
                  </div>
                  <div className="fortuna-primary-logo">
                    <img src={blackPrimaryFortunaLogo} alt="Fortuna-logo i sort variant" />
                  </div>
                </div>
              </div>
              <figure className="fortuna-editorial-figure creative-reveal">
                <figcaption>Negativ variant</figcaption>
                <img src={negativeFortunaLogo} alt="Negativ variant af Fortuna-logoet" />
              </figure>
              <figure className="fortuna-editorial-figure creative-reveal">
                <figcaption>Monokrom variant</figcaption>
                <img src={blackFortunaLogo} alt="Sort Fortuna-logo på farvet baggrund" />
              </figure>
            </div>
          </section>

          <section className="fortuna-editorial-section fortuna-in-use" aria-labelledby="in-use-title">
            <header className="fortuna-section-heading creative-reveal">
              <p>03 · Brand i brug</p>
              <h2 id="in-use-title">Identiteten møder virkeligheden.</h2>
            </header>
            <div className="fortuna-masonry">
              <figure className="fortuna-editorial-figure fortuna-mockup-main creative-reveal">
                <figcaption>Klubmiljø</figcaption>
                <img src={officeMockup} alt="Fortuna-identiteten vist i et kontormiljø" />
              </figure>
              <figure className="fortuna-editorial-figure fortuna-mockup-secondary creative-reveal">
                <figcaption>Visitkort</figcaption>
                <img src={businessCardMockup} alt="Fortuna-identiteten på visitkort" />
              </figure>
            </div>
          </section>

        </div>
      </article>
    );
  }

  return (
    <article className="page narrow">
      <Link className="back-link" to="/projects">
        Tilbage til projekter
      </Link>

      <img className="detail-image" src={project.image} alt="" />
      <p className="eyebrow">{project.year}</p>
      <h1>{project.title}</h1>
      <p className="lead">{project.description}</p>

      <ul className="tag-list">
        {project.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>

      <div className="actions">
        {project.links.map((link) => (
          <a
            className="button secondary"
            href={link.href}
            key={link.href}
            rel="noreferrer"
            target="_blank"
          >
            {link.label}
          </a>
        ))}
      </div>
    </article>
  );
}

export default ProjectPage;
