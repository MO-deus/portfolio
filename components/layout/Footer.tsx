import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.left}>
          <span className={styles.name}>Kush Waikar</span>
          <span className={styles.tagline}>Backend · Product · Full-Stack Engineer</span>
        </div>
        <div className={styles.links}>
          <a href="https://github.com/MO-deus" target="_blank" rel="noopener noreferrer" className={styles.link}>GitHub</a>
          <a href="https://www.linkedin.com/in/kush-waikar-aa6b34205/" target="_blank" rel="noopener noreferrer" className={styles.link}>LinkedIn</a>
          <a href="mailto:kushwaikar@gmail.com" className={styles.link}>Email</a>
        </div>
        <p className={styles.copy}>© {new Date().getFullYear()} Kush Waikar. Built with Next.js.</p>
      </div>
    </footer>
  );
}
