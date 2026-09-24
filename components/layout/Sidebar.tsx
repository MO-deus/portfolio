"use client";
import { useState } from "react";
import styles from "./Sidebar.module.css";
import Image from "next/image";

export default function Sidebar() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText("kushwaikar@gmail.com").catch(() => { });
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={styles.card}>
      {/* Avatar block */}
      <div className={styles.avatarBlock}>
        <Image
          src="/profile.jpg"
          alt="Kush Waikar"
          width={400}
          height={300}
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </div>

      {/* Name + tagline */}
      <div className={styles.identity}>
        <h1 className={styles.name}>Kush Waikar</h1>
        <p className={styles.tagline}>Backend · Product · Full-Stack</p>
      </div>

      {/* Bio */}
      <p className={styles.bio}>
        I got into engineering wanting to build things people rely on.
        Ended up falling for the part they never see — the systems underneath.
        I like infrastructure that heals itself, APIs that are honest, and
        products that feel fast.
      </p>

      {/* Divider */}
      <div className={styles.divider} />

      {/* Availability */}
      <div className="avail">
        <span className="avail-dot" />
        Open to full-time · join immediately
      </div>

      {/* Divider */}
      <div className={styles.divider} />

      {/* Links */}
      <div className={styles.links}>
        <a
          href="https://github.com/MO-deus"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
          id="sidebar-github"
          aria-label="GitHub"
        >
          <GitHubIcon />
          <span>GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/kush-waikar-aa6b34205/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
          id="sidebar-linkedin"
          aria-label="LinkedIn"
        >
          <LinkedInIcon />
          <span>LinkedIn</span>
        </a>
        <button className={styles.link} onClick={copyEmail} id="sidebar-email" aria-label="Copy email">
          <MailIcon />
          <span>{copied ? "Copied!" : "kushwaikar@gmail.com"}</span>
        </button>
      </div>

      {/* Resume */}
      <a
        href="/kush-resume.pdf"
        download
        className={`btn-minimal ${styles.resumeBtn}`}
        id="sidebar-resume"
      >
        <DownloadIcon />
        Download Resume
      </a>
    </div>
  );
}

function GitHubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.44 9.8 8.21 11.39.6.11.82-.26.82-.57v-2.23c-3.34.73-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.005 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.69.82.57C20.57 21.8 24 17.31 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zm1.78 13.02H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.27V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}
