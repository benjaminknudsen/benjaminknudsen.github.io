import { useEffect, useRef } from "react";
import { Link } from "react-router";
import portraitImage from "../assets/images/portfolio-billede3.jpeg";
import leisurePortrait from "../assets/images/bkbk.svg";
import projects from "../data/projects";

function HomePage() {
  const featuredProjects = projects.slice(0, 4);
  const projectsSectionRef = useRef(null);
  const spareTimeSectionRef = useRef(null);

  useEffect(() => {
    const sections = [projectsSectionRef.current, spareTimeSectionRef.current].filter(Boolean);

    if (!sections.length) return undefined;

    const elements = sections.flatMap((section) => [...section.querySelectorAll("[data-reveal]")]);
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    sections.forEach((section) => section.classList.add("scroll-reveal-ready"));

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
      { rootMargin: "0px 0px -12%", threshold: 0.12 },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="page">
      <section className="hero-section">
        <div>
          <div className="hero-greeting">
            <p>Multimediedesigner</p>
            <Link
              className="hero-portrait"
              to="/about"
              aria-label="Læs mere om Benjamin Knudsen"
            >
              <img
                src={portraitImage}
                alt="Portræt af Benjamin Knudsen"
              />
            </Link>
          </div>

          <h1 className="hero-name">BENJAMIN KNUDSEN</h1>

          <div className="portfolio-row">
            <span className="scroll-arrow" aria-hidden="true" />
            <div className="portfolio-intro">
              <p className="portfolio-year">
                <span>Portfolio</span>
                <span>2026</span>
              </p>
              <p className="portfolio-tagline">
                Digitale oplevelser formet af godt design, omtanke og
                sans for detaljen.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section featured-projects" ref={projectsSectionRef}>
        <div className="section-heading" data-reveal>
          <h2>Udvalgte projekter</h2>
          <Link className="view-all-projects" to="/projects">
            Se alle
          </Link>
        </div>

        <div className="project-grid">
          {featuredProjects.map((project) => (
            <article
              className="project-card"
              key={project.slug}
              data-reveal
              style={{
                "--project-accent": project.accent,
                "--project-background": project.coverBackground,
                "--project-category-color": project.categoryColor,
              }}
            >
              <Link
                className="project-card-link"
                to={`/projects/${project.slug}`}
                aria-label={`Se projektet ${project.title}`}
              >
                <div className="project-cover">
                  <img src={project.image} alt={`Preview af ${project.title}`} />
                </div>
                <div className="project-card-content">
                  <p className="eyebrow">{project.category}</p>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section
        className="about-story about-shell home-about-teaser"
        aria-labelledby="home-spare-time-title"
        ref={spareTimeSectionRef}
      >
        <figure className="about-visual about-visual-contain" data-reveal>
          <img src={leisurePortrait} alt="Benjamin i sin fritid" />
        </figure>
        <div className="about-copy">
          <p className="about-kicker" data-reveal>Når jeg ikke går i skole</p>
          <h2 id="home-spare-time-title" data-reveal>Fodbold, mennesker og nye indtryk.</h2>
          <p data-reveal>
            Fodbold fylder en stor del af min fritid, og jeg bruger også gerne tid på løb, padel og
            anden sport. Jeg kan godt lide at være aktiv og sætter stor pris på det sociale omkring
            sporten. Uden for banen nyder jeg at være sammen med venner, tage en tur i byen og opdage
            ny musik.
          </p>
          <p data-reveal>
            Samtidig værdsætter jeg også alenetid, hvor jeg kan koble af og lade op. Den balance mellem
            et aktivt socialt liv og tid til mig selv betyder meget for mig og giver mig energi i hverdagen.
          </p>
          <Link className="about-more-link" to="/about" data-reveal>
            Læs mere om mig
          </Link>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
