"use client";
import { useState } from "react";
import { caseStudies } from "@/data/caseStudies";
import styles from "./CaseStudies.module.css";

export default function CaseStudies() {
  const [expanded, setExpanded] = useState<string | null>(caseStudies[0].id);

  return (
    <section id="case-studies" className="section">
      <div className="container">
        <p className="section-label">Engineering Deep Dives</p>
        <h2 className="heading-xl">
          Featured Case Studies
        </h2>
        <p className={styles.subtitle}>
          Real systems I designed and shipped — with the architecture decisions, trade-offs, and impact.
        </p>

        <div className={styles.list}>
          {caseStudies.map((cs, idx) => {
            const isOpen = expanded === cs.id;
            return (
              <div
                key={cs.id}
                className={`glass-card ${styles.card} ${isOpen ? styles.cardOpen : ""}`}
                style={{ "--accent": cs.accentColor } as React.CSSProperties}
              >
                {/* Card header — always visible */}
                <button
                  className={styles.header}
                  onClick={() => setExpanded(isOpen ? null : cs.id)}
                  aria-expanded={isOpen}
                  id={`cs-toggle-${cs.id}`}
                >
                  <div className={styles.headerLeft}>
                    <span className={styles.index}>0{idx + 1}</span>
                    <div>
                      <span className={styles.tag}>{cs.tag}</span>
                      <h3 className={styles.title}>{cs.title}</h3>
                      <p className={styles.headerSubtitle}>{cs.subtitle}</p>
                    </div>
                  </div>
                  <span className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ""}`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"/>
                    </svg>
                  </span>
                </button>

                {/* Expandable body */}
                {isOpen && (
                  <div className={styles.body}>
                    <div className={styles.bodyGrid}>
                      {/* Problem & Approach */}
                      <div className={styles.textCol}>
                        <div className={styles.section}>
                          <h4 className={styles.sectionHeading}>
                            <span className={styles.sectionIcon}>🔍</span> Problem
                          </h4>
                          <p className={styles.sectionText}>{cs.problem}</p>
                        </div>
                        <div className={styles.section}>
                          <h4 className={styles.sectionHeading}>
                            <span className={styles.sectionIcon}>💡</span> Approach
                          </h4>
                          <p className={styles.sectionText}>{cs.approach}</p>
                        </div>

                        {/* Impact */}
                        <div className={styles.section}>
                          <h4 className={styles.sectionHeading}>
                            <span className={styles.sectionIcon}>📊</span> Impact
                          </h4>
                          <ul className={styles.impactList}>
                            {cs.impact.map((item, i) => (
                              <li key={i} className={styles.impactItem}>
                                <span className={styles.impactDot} />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Architecture flow */}
                      <div className={styles.archCol}>
                        <h4 className={styles.sectionHeading}>
                          <span className={styles.sectionIcon}>🏗️</span> Architecture
                        </h4>
                        <div className={styles.archFlow}>
                          {cs.architecture.map((step, i) => (
                            <div key={step.label} className={styles.archStep}>
                              <div className={styles.archStepHeader}>
                                <span className={styles.archNum}>{i + 1}</span>
                                <span className={styles.archLabel}>{step.label}</span>
                              </div>
                              <p className={styles.archDetail}>{step.detail}</p>
                              {i < cs.architecture.length - 1 && (
                                <div className={styles.archConnector} aria-hidden="true">↓</div>
                              )}
                            </div>
                          ))}
                        </div>

                        {/* Tech stack */}
                        <div className={styles.techSection}>
                          <span className={styles.techLabel}>Stack</span>
                          <div className="tech-pills">
                            {cs.tech.map((t) => (
                              <span key={t} className="chip">{t}</span>
                            ))}
                          </div>
                        </div>

                        <div className={styles.repoTag}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                          </svg>
                          {cs.repoLabel}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
