"use client";

import { useState } from "react";
import { team } from "@/data/team";

const bentoSlots = ["mem-a", "mem-b", "mem-c", "mem-d"];

export default function Team() {
  const [active, setActive] = useState<number | null>(null);

  const isActive = (i: number) => active === i;
  const isDimmed = (i: number) => active !== null && active !== i;

  return (
    <section id="team" className="section section-alt">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">The people</span>
          <h2>Group Members &amp; Roles</h2>
          <p className="section-lead">
            A small, focused team covering project management, design,
            engineering, and quality assurance.
          </p>
        </div>

        <div className="team-showcase" onMouseLeave={() => setActive(null)}>
          <div className="team-photo-grid">
            {team.map((member, index) => (
              <div
                key={member.name}
                className={`team-photo ${bentoSlots[index] ?? ""} ${
                  isActive(index) ? "is-active" : ""
                } ${isDimmed(index) ? "is-dim" : ""}`}
                onMouseEnter={() => setActive(index)}
              >
                <img src={member.image} alt={member.name} />
              </div>
            ))}
          </div>

          <div className="team-name-list">
            {team.map((member, index) => (
              <div
                key={member.name}
                className={`team-name-row ${isActive(index) ? "is-active" : ""} ${
                  isDimmed(index) ? "is-dim" : ""
                }`}
                onMouseEnter={() => setActive(index)}
              >
                <div className="team-name-main">
                  <span className="team-name-dot" />
                  <h3>{member.name}</h3>

                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="team-linkedin"
                    aria-label={`${member.name} on LinkedIn`}
                  >
                    <svg
                      viewBox="0 0 448 512"
                      width="14"
                      height="14"
                      fill="currentColor"
                    >
                      <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                    </svg>
                  </a>
                </div>
                <p className="role-detail">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
