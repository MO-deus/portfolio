import styles from "./HeroSection.module.css";

const metrics = [
  { value: "+128", label: "Commits" },
  { value: "+31k", label: "Lines of code" },
  { value: "74",   label: "Notification types" },
  { value: "97",   label: "Infra commits" },
];

export default function HeroSection() {
  return (
    <section id="home" className={`section ${styles.hero}`}>
      {/* Giant stacked heading */}
      <h2 className="ghost-heading">
        <span className="line-bright">Backend</span>
        <span className="line-ghost">Engineer</span>
      </h2>

      {/* Pitch */}
      <p className={styles.pitch}>
        I'm drawn to problems at the systems layer — things that need to be
        fast, reliable, and observable under real load. Notification engines
        that fan out to 150k graphs, pipelines that run at 3am, infrastructure
        that self-heals. Backend by instinct, product by necessity.
      </p>

      {/* Availability */}
      <div className={`avail ${styles.avail}`}>
        <span className="avail-dot" />
        Available for full-time roles · Can join immediately
      </div>

      {/* Metrics */}
      <div className={styles.metrics}>
        {metrics.map((m) => (
          <div key={m.label} className={styles.metric}>
            <span className={styles.metricVal}>{m.value}</span>
            <span className={styles.metricLabel}>{m.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
