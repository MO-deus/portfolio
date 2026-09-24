"use client";
import { useState } from "react";
import { caseStudies } from "@/data/caseStudies";
import styles from "./WorkSection.module.css";

export default function WorkSection() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="work" className="section">
      <h2 className="ghost-heading">
        <span className="line-bright">Featured</span>
        <span className="line-ghost">Work</span>
      </h2>

      <div className={styles.list}>
        {caseStudies.map((cs, i) => {
          const isOpen = open === cs.id;
          return (
            <div key={cs.id} className={styles.item}>
              <button
                className={styles.header}
                onClick={() => setOpen(isOpen ? null : cs.id)}
                aria-expanded={isOpen}
              >
                <div className={styles.headerLeft}>
                  <span className={styles.num}>0{i + 1}</span>
                  <div>
                    <div className={styles.tag}>{cs.tag}</div>
                    <div className={styles.title}>{cs.title}</div>
                  </div>
                </div>
                <span className={`${styles.arrow} ${isOpen ? styles.arrowOpen : ""}`}>
                  <ChevronIcon />
                </span>
              </button>

              {isOpen && (
                <div className={styles.body}>
                  <p className={styles.subtitle}>{cs.subtitle}</p>

                  <div className={styles.cols}>
                    <div>
                      <p className={styles.colLabel}>Problem</p>
                      <p className={styles.colText}>{cs.problem}</p>
                    </div>
                    <div>
                      <p className={styles.colLabel}>Approach</p>
                      <p className={styles.colText}>{cs.approach}</p>
                    </div>
                  </div>

                  <div className={styles.impact}>
                    <p className={styles.colLabel}>Impact</p>
                    <ul className={styles.impactList}>
                      {cs.impact.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <p className={styles.tech}>
                    {cs.tech.join(" · ")}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

function ChevronIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}
