import { Link } from "react-router";
import projects from "../data/projects";

function ProjectsPage() {
  return (
    <div className="page">
      <section className="section intro">
        <p className="eyebrow">Projekter</p>
        <h1>Mine projekter</h1>
        <p>
          Udskift eksemplerne med dine egne projekter. Brug korte beskrivelser,
          tydelige billeder og links til live versioner eller GitHub repos.
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
              <ul className="tag-list">
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}

export default ProjectsPage;
