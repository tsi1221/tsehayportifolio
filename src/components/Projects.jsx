import "../styles/Projects.css";
import projects from "../data/projects";

export default function Projects() {
  return (
    <section className="projects-section">
      <h2 className="section-title1">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noreferrer">View</a>
          </div>
        ))}
      </div>
    </section>
  );
}