import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Our work</span>
          <h2>Projects We&apos;ve Delivered</h2>
          <p className="section-lead">
            A selection of web platforms, gaming systems, and IoT solutions
            built by our team.
          </p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-image">
                <img src={project.image} alt={project.title} loading="lazy" />
                <span className="project-tag">{project.tag}</span>
              </div>
              <div className="project-body">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
