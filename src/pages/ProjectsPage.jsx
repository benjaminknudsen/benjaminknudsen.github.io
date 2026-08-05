import { Link } from "react-router";
import projects from "../data/projects";

function ProjectsPage() {
  return (
    <div className="page">
      <section className="section intro">
        <h1>Mine projekter</h1>
        <p>
          Et udvalg af projekter fra studiet og personlige initiativer, der viser
          min tilgang til design, brugeroplevelser og frontend-udvikling.
        </p>
      </section>

      <section className="project-grid" aria-label="Projektliste">
        {projects.map((project) => (
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
              <h2>{project.title}</h2>
              <p>{project.summary}</p>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}

export default ProjectsPage;
