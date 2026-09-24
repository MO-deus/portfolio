import { projects } from "@/data/projects";
import styles from "./ProjectsSection.module.css";

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="section">
      <h2 className="ghost-heading">
        <span className="line-bright">Recent</span>
        <span className="line-ghost">Projects</span>
      </h2>

      <div className={styles.list}>
        {projects.map((p) => (
          <div key={p.id} className={styles.row}>
            {/* Thumbnail placeholder */}
            <div className={styles.thumb} aria-hidden="true">
              <span>{p.name.charAt(0)}</span>
            </div>

            {/* Info */}
            <div className={styles.info}>
              <span className={styles.name}>{p.name}</span>
              <span className={styles.desc}>{p.description}</span>
              <span className={styles.tech}>{p.tech.slice(0, 4).join(" · ")}</span>
            </div>

            {/* Link */}
            <div className={`row-arrow ${styles.linkArea}`}>
              {p.isInternal ? (
                <span className={styles.internal}>Internal</span>
              ) : p.demoUrl && p.demoUrl !== "#" ? (
                <a
                  href={p.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                  aria-label={`Visit ${p.name}`}
                >
                  <ArrowIcon />
                </a>
              ) : (
                <span className={styles.soon}><ArrowIcon /></span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
