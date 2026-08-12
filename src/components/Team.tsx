import { team } from "@/data/team";

export default function Team() {
  return (
    <section id="team" className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">The people</span>
          <h2>Group Members &amp; Roles</h2>
          <p className="section-lead">
            A small, focused team covering project management, design,
            engineering, and quality assurance.
          </p>
        </div>
        <div className="team-grid">
          {team.map((member) => (
            <article className="team-card" key={member.name}>
              <div
                className="avatar"
                style={{
                  ["--c1" as string]: member.c1,
                  ["--c2" as string]: member.c2,
                }}
              >
                {member.initials}
              </div>
              <h3>{member.name}</h3>
              <p className="role">{member.role}</p>
              <p className="role-detail">{member.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
