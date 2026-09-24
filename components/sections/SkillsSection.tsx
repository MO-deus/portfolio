"use client";
import { useState } from "react";
import { skillCategories } from "@/data/skills";
import styles from "./SkillsSection.module.css";

export default function SkillsSection() {
  const [tooltip, setTooltip] = useState<{ name: string; context: string } | null>(null);

  return (
    <section id="skills" className="section">
      <h2 className="ghost-heading">
        <span className="line-bright">Skills &amp;</span>
        <span className="line-ghost">Capabilities</span>
      </h2>

      <div className={styles.grid}>
        {skillCategories.map((cat) => (
          <div key={cat.id} className={styles.col}>
            <p className={styles.catLabel}>{cat.label}</p>
            <ul className={styles.skillList}>
              {cat.skills.map((skill) => (
                <li
                  key={skill.name}
                  className={styles.skill}
                  onMouseEnter={() => setTooltip(skill)}
                  onMouseLeave={() => setTooltip(null)}
                >
                  <span>{skill.name}</span>
                  {tooltip?.name === skill.name && (
                    <span className={styles.tooltip}>{skill.context}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Education */}
      <div className={styles.edu}>
        <div>
          <p className={styles.eduTitle}>B.Tech in Computer Science & Engineering</p>
          <p className={styles.eduSub}>IIIT Nagpur · 2021 – 2024</p>
        </div>
        <span className={styles.eduBadge}>Graduated 2024</span>
      </div>
    </section>
  );
}
