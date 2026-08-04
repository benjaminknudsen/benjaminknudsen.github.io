import { Link } from "react-router";
import portraitImage from "../assets/images/portfolio-billede3.jpeg";
import projects from "../data/projects";

function HomePage() {
  const featuredProjects = projects.slice(0, 2);

  return (
    <div className="page">
      <section className="hero-section">
        <div>
          <div className="hero-greeting">
            <p>Multimediedesigner</p>
            <div className="hero-portrait">
              <img
                src={portraitImage}
                alt="Portræt af Benjamin Knudsen"
              />
            </div>
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
          <p className="eyebrow">Udvalgte projekter</p>
          <h2>Start med få projekter og gør dem stærke.</h2>
        </div>

        <div className="project-grid">
          {featuredProjects.map((project) => (
            <article className="project-card" key={project.slug}>
              <img src={project.image} alt={`Preview af ${project.title}`} />
              <div className="project-card-content">
                <p className="eyebrow">{project.year}</p>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <Link to={`/projects/${project.slug}`}>Læs mere</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
