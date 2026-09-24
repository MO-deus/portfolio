import styles from "./About.module.css";

const identityTiles = [
  { emoji: "⚙️", label: "Systems Thinker", desc: "I design for scale first — aggregates over scans, queues over blocking calls" },
  { emoji: "📈", label: "Growth Engineer", desc: "Lifecycle emails, push notifications, A/B testing — shipping features that move retention metrics" },
  { emoji: "🏗️", label: "Platform Builder", desc: "Multi-cloud Kubernetes, GitOps, observability — infrastructure that teams can build on reliably" },
];

const currentStack = [
  "Next.js 15", "TypeScript", "Convex", "Go", "Pulumi", "Kubernetes", "Python", "FastAPI",
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <p className="section-label">About Me</p>
        <div className={styles.grid}>
          {/* Left — bio + photo */}
          <div className={styles.bioCol}>
            {/* Photo placeholder */}
            <div className={styles.avatarWrapper}>
              <div className={styles.avatarRing} />
              <div className={styles.avatarPlaceholder}>
                <span className={styles.avatarInitials}>KW</span>
              </div>
            </div>

            <h2 className="heading-xl">
              Building systems that<br />
              <span className="text-gradient">scale and stick.</span>
            </h2>

            <p className={styles.bio}>
              I&apos;m a software engineer who operates across the full backend stack — from distributed
              notification pipelines fanning out to 150k+ users, to multi-cloud Kubernetes infrastructure
              provisioned as code, to lifecycle email engines that move retention needles.
            </p>
            <p className={styles.bio}>
              At Fanon, I contributed 128 commits across 7 production repositories over 9 months,
              ranking #5 of 30 contributors on the core platform. I care deeply about system design,
              code clarity, and shipping features that have measurable product impact.
            </p>

            {/* Current stack */}
            <div className={styles.stackRow}>
              <span className={styles.stackLabel}>Current stack:</span>
              <div className="tech-pills">
                {currentStack.map((s) => (
                  <span key={s} className="chip chip-neutral">{s}</span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className={styles.bioLinks}>
              <a
                href="https://github.com/MO-deus"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                id="about-github"
              >
                GitHub ↗
              </a>
              <a
                href="https://www.linkedin.com/in/kush-waikar-aa6b34205/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                id="about-linkedin"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          {/* Right — identity tiles */}
          <div className={styles.tilesCol}>
            {identityTiles.map((tile) => (
              <div key={tile.label} className={`glass-card ${styles.tile}`}>
                <span className={styles.tileEmoji}>{tile.emoji}</span>
                <div>
                  <h3 className={styles.tileLabel}>{tile.label}</h3>
                  <p className={styles.tileDesc}>{tile.desc}</p>
                </div>
              </div>
            ))}

            {/* Quick stats card */}
            <div className={`glass-card ${styles.statsCard}`}>
              <h3 className={styles.statsTitle}>By the numbers</h3>
              <div className={styles.statsList}>
                {[
                  ["7", "Production repos at Fanon"],
                  ["128", "Commits on main platform"],
                  ["~31k", "Lines of code added"],
                  ["9 mo", "Continuous shipping streak"],
                ].map(([num, label]) => (
                  <div key={label} className={styles.stat}>
                    <span className={styles.statNum}>{num}</span>
                    <span className={styles.statLabel}>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
