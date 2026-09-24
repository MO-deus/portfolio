"use client";
import { useState } from "react";
import { skillCategories } from "@/data/skills";
import styles from "./Skills.module.css";

export default function Skills() {
  const [tooltip, setTooltip] = useState<{ name: string; context: string } | null>(null);

  return (
    <section id="skills" className="section">
      <div className="container">
        <p className="section-label">Capabilities</p>
        <h2 className="heading-xl">Skills & Stack</h2>
        <p className={styles.subtitle}>
          Technologies I&apos;ve used in production — with the context that makes them real.
          Hover a chip to see where I used it.
        </p>

        <div className={styles.grid}>
          {skillCategories.map((cat) => (
            <div key={cat.id} className={`glass-card ${styles.category}`}>
              <div className={styles.catHeader}>
                <span className={styles.catIcon}>{cat.icon}</span>
                <h3 className={styles.catLabel}>{cat.label}</h3>
              </div>
              <div className={styles.chips}>
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={styles.skillChip}
                    onMouseEnter={() => setTooltip(skill)}
                    onMouseLeave={() => setTooltip(null)}
                    role="button"
                    tabIndex={0}
                    onFocus={() => setTooltip(skill)}
                    onBlur={() => setTooltip(null)}
                    aria-label={`${skill.name} — ${skill.context}`}
                  >
                    {skill.name}
                    {tooltip?.name === skill.name && (
                      <span className={styles.tooltip}>{skill.context}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className={`glass-card ${styles.education}`}>
          <div className={styles.eduLeft}>
            <span className={styles.eduIcon}>🎓</span>
            <div>
              <h3 className={styles.eduTitle}>B.Tech in Computer Science & Engineering</h3>
              <p className={styles.eduInstitution}>IIIT Nagpur · 2021 – 2024</p>
            </div>
          </div>
          <div className={styles.eduRight}>
            <span className="chip chip-green">Graduated 2024</span>
          </div>
        </div>
      </div>
    </section>
  );
}
