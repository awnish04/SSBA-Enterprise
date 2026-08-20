import { projects } from "@/data/projects";

const bentoSlots = ["proj-a", "proj-b", "proj-c", "proj-d", "proj-e", "proj-f"];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Our work</span>
          <h2>Projects We&apos;ve Delivered</h2>
          <p className="section-lead">
            A selection of web platforms, gaming systems, and IoT solutions
            built by our team.
          </p>
        </div>
        <div className="project-bento">
          {projects.map((project, i) => (
            <article
              className={`project-card ${bentoSlots[i] ?? ""}`}
              key={project.title}
            >
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="project-bg"
              />
              <div className="project-overlay" />
              <div className="project-body">
                <span className="project-tag hero-badge">
                  {project.tag} {project.upcoming ? " · Upcoming" : ""}
                </span>
                <h4>{project.title}</h4>
                <p>{project.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
