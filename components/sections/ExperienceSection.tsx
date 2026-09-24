import { experience } from "@/data/experience";
import styles from "./ExperienceSection.module.css";

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

export default function ExperienceSection() {
  return (
    <section id="experience" className="section">
      <h2 className="ghost-heading">
        <span className="line-bright">2 Years of</span>
        <span className="line-ghost">Experience</span>
      </h2>

      <div className={styles.list}>
        {experience.map((entry) => (
          <div key={entry.id} className={styles.row}>
            <div className={styles.info}>
              <div className={styles.topRow}>
                <span className={styles.company}>{entry.company}</span>
                <span className={styles.type}>{entry.type === "internship" ? "Internship" : entry.type === "contract" ? "Contract" : "Full-time"}</span>
              </div>
              <span className={styles.role}>{entry.role}</span>
              <span className={styles.meta}>{entry.period} · {entry.location}</span>
              <p className={styles.desc}>{entry.description}</p>
            </div>

            <div className={styles.linkArea}>
              {entry.companyUrl ? (
                <a
                  href={entry.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                  aria-label={`Visit ${entry.company}`}
                >
                  <ArrowIcon />
                </a>
              ) : (
                <span className={styles.noLink} aria-hidden="true"><ArrowIcon /></span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
