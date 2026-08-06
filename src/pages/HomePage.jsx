import { useEffect, useRef } from "react";
import { Link } from "react-router";
import portraitImage from "../assets/images/portfolio-billede3.jpeg";
import projects from "../data/projects";

function HomePage() {
  const featuredProjects = projects.slice(0, 4);
  const projectsSectionRef = useRef(null);

  useEffect(() => {
    const section = projectsSectionRef.current;

    if (!section) return undefined;

    const elements = section.querySelectorAll("[data-reveal]");
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    section.classList.add("scroll-reveal-ready");

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
    </div>
  );
}

export default HomePage;
