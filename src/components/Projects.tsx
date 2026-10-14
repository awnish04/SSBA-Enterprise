import { projects } from "@/data/projects";

type StatusKey = "Delivered" | "In Progress" | "Prototype" | "Upcoming";

const STATUS_STYLE: Record<StatusKey, { bg: string; color: string }> = {
  Delivered:   { bg: "rgba(16,185,129,0.25)",  color: "#6ee7b7" },
  "In Progress": { bg: "rgba(245,158,11,0.25)", color: "#fcd34d" },
  Prototype:   { bg: "rgba(139,92,246,0.30)",  color: "#c4b5fd" },
  Upcoming:    { bg: "rgba(37,99,235,0.25)",   color: "#93c5fd" },
};

const bentoSlots = ["proj-a", "proj-b", "proj-c", "proj-d", "proj-e", "proj-f", "proj-g"];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Our work</span>
          <h2>Our Work</h2>
          <p className="section-lead">
            Selected projects and prototypes built by our team.
          </p>
        </div>
        <div className="project-bento">
          {projects.map((project, i) => {
            const style = STATUS_STYLE[project.status as StatusKey] ?? STATUS_STYLE["Delivered"];
            return (
              <article
                className={`project-card ${bentoSlots[i] ?? ""}`}
                key={project.title}
              >
                <img
                  src={project.image}
                  alt={`Screenshot of ${project.title}`}
                  loading="lazy"
                  className="project-bg"
                />
                <div className="project-overlay" />
                <div className="project-body">
                  <span
                    className="project-tag"
                    style={{
                      background: style.bg,
                      color: style.color,
                      padding: "4px 10px",
                      borderRadius: "999px",
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      display: "inline-block",
                      marginBottom: 8,
                      backdropFilter: "blur(4px)",
                      border: `1px solid ${style.color}40`,
                    }}
                  >
                    {project.tag} &middot; {project.status}
                  </span>

                  <h4>{project.title}</h4>
                  <p>{project.desc}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
