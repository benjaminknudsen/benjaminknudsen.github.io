import { Link } from "react-router";
import portraitImage from "../assets/images/portfolio-billede3.jpeg";
import projects from "../data/projects";

function HomePage() {
  const featuredProjects = projects.slice(0, 4);

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
              <p className="portfolio-year">PORTFOLIO</p>
              <p className="portfolio-tagline">
                Frontend, UI/UX og digitale løsninger med fokus på detaljen.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section featured-projects">
        <div className="section-heading">
          <h2>Udvalgte projekter</h2>
        </div>

        <div className="project-grid">
          {featuredProjects.map((project) => (
            <article
              className="project-card"
              key={project.slug}
              style={{
                "--project-accent": project.accent,
                "--project-background": project.coverBackground,
              }}
            >
              <Link
                className="project-cover"
                to={`/projects/${project.slug}`}
                aria-label={`Se projektet ${project.title}`}
              >
                <img src={project.image} alt={`Preview af ${project.title}`} />
              </Link>
              <div className="project-card-content">
                <p className="eyebrow">{project.category}</p>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
