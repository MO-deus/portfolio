"use client";
import { useState } from "react";
import styles from "./ContactSection.module.css";

const EMAIL = "kushwaikar@gmail.com";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(EMAIL).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="section">
      <h2 className="ghost-heading">
        <span className="line-bright">Get in</span>
        <span className="line-ghost">Touch</span>
      </h2>

      <p className={styles.lead}>
        I&apos;m actively looking for backend, product, or full-stack roles.
        If you&apos;re building something ambitious, reach out.
      </p>

      {/* Email row */}
      <div className={styles.emailRow}>
        <span className={styles.emailAddr}>{EMAIL}</span>
        <button
          onClick={handleCopy}
          className={`btn-minimal ${styles.copyBtn}`}
          id="contact-copy-email"
        >
          {copied ? "Copied ✓" : "Copy"}
        </button>
      </div>

      {/* Links */}
      <div className={styles.links}>
        <a href="https://github.com/MO-deus" target="_blank" rel="noopener noreferrer" className={styles.link} id="contact-github">
          GitHub ↗
        </a>
        <a href="https://www.linkedin.com/in/kush-waikar-aa6b34205/" target="_blank" rel="noopener noreferrer" className={styles.link} id="contact-linkedin">
          LinkedIn ↗
        </a>
        <a href="/kush-resume.pdf" download className={styles.resumeBtn} id="contact-resume">
          ↓ Download Resume
        </a>
      </div>
    </section>
  );
}
