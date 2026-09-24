"use client";
import { useState } from "react";
import { experience } from "@/data/experience";
import styles from "./Experience.module.css";

const typeLabel: Record<string, string> = {
  "full-time": "Full-Time",
  "internship": "Internship",
  "contract": "Contract",
};

export default function Experience() {
  const [expanded, setExpanded] = useState<string>(experience[0].id);

  return (
    <section id="experience" className="section">
      <div className="container">
        <p className="section-label">Work History</p>
        <h2 className="heading-xl">Experience</h2>

        <div className={styles.timeline}>
          {experience.map((entry, idx) => {
            const isOpen = expanded === entry.id;
            return (
              <div key={entry.id} className={styles.entry}>
                {/* Vertical line + dot */}
                <div className={styles.timelineSide}>
                  <div className={`${styles.dot} ${isOpen ? styles.dotActive : ""}`} />
                  {idx < experience.length - 1 && <div className={styles.line} />}
                </div>

                {/* Content */}
                <div className={styles.content}>
                  <button
                    className={styles.entryHeader}
                    onClick={() => setExpanded(isOpen ? "" : entry.id)}
                    aria-expanded={isOpen}
                    id={`exp-toggle-${entry.id}`}
                  >
                    <div className={styles.headerInfo}>
                      <span className={styles.period}>{entry.period}</span>
                      <div className={styles.roleRow}>
                        <h3 className={styles.role}>{entry.role}</h3>
                        <span className={`chip ${entry.type === "full-time" ? "" : "chip-neutral"}`}>
                          {typeLabel[entry.type]}
                        </span>
                      </div>
                      <div className={styles.companyRow}>
                        {entry.companyUrl ? (
                          <a
                            href={entry.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.companyLink}
                            onClick={(e) => e.stopPropagation()}
                          >
                            {entry.company} ↗
                          </a>
                        ) : (
                          <span className={styles.company}>{entry.company}</span>
                        )}
                        <span className={styles.location}>· {entry.location}</span>
                      </div>
                    </div>
                    <span className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ""}`}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"/>
                      </svg>
                    </span>
                  </button>

                  {isOpen && (
                    <div className={styles.body}>
                      <p className={styles.desc}>{entry.description}</p>

                      <ul className={styles.highlights}>
                        {entry.highlights.map((h, i) => (
                          <li key={i} className={styles.highlight}>
                            <span className={styles.highlightDot} />
                            {h}
                          </li>
                        ))}
                      </ul>

                      <div className={styles.techRow}>
                        <span className={styles.techLabel}>Tech:</span>
                        <div className="tech-pills">
                          {entry.tech.map((t) => (
                            <span key={t} className="chip chip-neutral">{t}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
