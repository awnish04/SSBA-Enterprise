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

        <div
          className="
    team-photo-grid
    grid
    w-full
    max-w-[900px]
    mx-auto
    gap-[clamp(8px,1.5vw,20px)]
    grid-cols-[repeat(3,minmax(0,1fr))]
    grid-rows-[clamp(200px,20vw,400px)_clamp(200px,20vw,400px)]
  "
          onMouseLeave={() => setActive(null)}
        >
          {team.map((member, index) => (
            <div
              key={member.name}
              className={`
        team-photo
        ${index === 0 ? "col-span-2 row-start-1" : ""}
        ${index === 1 ? "col-start-3 row-start-1" : ""}
        ${index === 2 ? "col-start-1 row-start-2" : ""}
        ${index === 3 ? "col-span-2 col-start-2 row-start-2" : ""}
        ${isActive(index) ? "is-active" : ""}
        ${isDimmed(index) ? "is-dim" : ""}
      `}
              onMouseEnter={() => setActive(index)}
            >
              <img
                src={member.image}
                alt={member.alt}
                className={`
    w-full
    h-full
    object-cover
    aspect-[4/3]
    ${
      index === 0
        ? "object-[center_15%]"
        : index === 1
          ? "object-[center_15%]"
          : index === 2
            ? "object-[center_10%]"
            : "object-[center_5%]"
    }
  `}
              />
              <div className="team-photo-overlay" />
              <div className="team-photo-info">
                <div className="team-name-main">
                  <h3>{member.name}</h3>
                </div>
                <p className="role-detail">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
