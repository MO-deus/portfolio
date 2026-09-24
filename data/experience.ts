export interface ExperienceEntry {
  id: string;
  company: string;
  companyUrl?: string;
  role: string;
  period: string;
  location: string;
  type: "full-time" | "internship" | "contract";
  description: string;
  highlights: string[];
  tech: string[];
}

export const experience: ExperienceEntry[] = [
  {
    id: "fanon",
    company: "Fanon",
    companyUrl: "https://fanon.co",
    role: "Software Engineer",
    period: "Sep 2025 – Jun 2026 · 10 months",
    location: "Bengaluru, Karnataka",
    type: "full-time",
    description:
      "Backend-heavy full-stack engineering at a fan-content startup. Built growth, retention, and infrastructure systems across 7 repositories from early-stage to production scale.",
    highlights: [
      "Designed and shipped a push-notification orchestration engine with 74 notification types, peak-time scheduling, priority queuing, exponential backoff, and per-minute Workpool cron fanning out to 150k+ follower graphs",
      "Built a timezone-aware lifecycle email engine for fans & creators — 3-bucket activity model (ACTIVE / SEMI_ACTIVE / CHURNED), instant milestone emails, DAO-repo pattern, DB-config feature flags on Convex + Customer.io",
      "Replaced O(n) collect-and-count patterns with @convex-dev/aggregate counters (O(log n)) for follower, like, and view counts — cutting read bandwidth significantly",
      "Contributed 97 commits (#3 of 12) to multi-cloud Kubernetes IaC (GKE + EKS via Pulumi Go), Argo CD GitOps, Prometheus/Alertmanager Discord alerting, Workload Identity OIDC",
      "Built Fanon's video transcoding service — HLS adaptive-bitrate renditions (480p/720p/1080p), Celery task decomposition, Prometheus metrics, GCS storage, Dockerized deployment",
      "Primary author of pip-boy weekly engagement analytics (DuckDB + Deno) and soul-society creator-discovery pipeline (X, DeviantArt, Instagram scrapers)",
      "128 commits, ~31k LOC added across 7 repositories; ranked #5 of 30 contributors on the main platform",
    ],
    tech: [
      "Next.js 15", "Convex", "TypeScript", "Go", "Pulumi", "Kubernetes",
      "GKE", "EKS", "Argo CD", "Prometheus", "Python", "FastAPI", "Celery",
      "Redis", "PostgreSQL", "Supabase", "Customer.io", "PostHog", "Mixpanel",
      "Docker", "DuckDB", "Deno",
    ],
  },
  {
    id: "otherwiseai",
    company: "OtherwiseAI",
    companyUrl: "https://otherwiseai.com",
    role: "Software Engineer",
    period: "Jun 2024 – Jul 2025 · 1 year",
    location: "Bengaluru, Karnataka",
    type: "full-time",
    description:
      "Built multi-modal AI pipelines and full-stack features for an AI-powered productivity platform.",
    highlights: [
      "Engineered multi-modal AI pipelines integrating OpenAI API, Amazon Textract, and Google Vision for document understanding and data extraction",
      "Improved overall system performance by 24% through backend service optimisations and architecture refactoring",
      "Built scalable Node.js backend services on AWS handling document ingestion and AI inference workloads",
      "Improved user retention by 78% through targeted UX enhancements and AI-assisted workflow features",
    ],
    tech: ["Node.js", "TypeScript", "OpenAI API", "Amazon Textract", "Google Vision", "AWS", "React", "PostgreSQL"],
  },
  {
    id: "pinnove",
    company: "Pinnove",
    role: "Software Engineer Intern",
    period: "Dec 2023 – May 2024 · 7 months",
    location: "Nagpur, Maharashtra",
    type: "internship",
    description: "Full-stack engineering internship building product features and backend services.",
    highlights: [
      "Built and shipped product features across the full stack, contributing to a 15% improvement in core user workflows",
      "Developed REST APIs and integrated third-party services for data processing and notification delivery",
      "Worked closely with the product team to translate requirements into technical specs and shipped features on schedule",
    ],
    tech: ["Node.js", "React", "TypeScript", "PostgreSQL", "REST APIs"],
  },
  {
    id: "authbase",
    company: "Authbase",
    role: "Software Developer Intern",
    period: "Mar 2023 – May 2023 · 3 months",
    location: "Remote",
    type: "internship",
    description: "Backend and authentication systems internship at an auth-infrastructure startup.",
    highlights: [
      "Built authentication and authorization modules handling user identity flows",
      "Implemented OAuth 2.0 and JWT-based session management across multiple client applications",
      "Contributed backend improvements that reduced auth latency and improved sign-in reliability",
    ],
    tech: ["Node.js", "TypeScript", "OAuth 2.0", "JWT", "PostgreSQL", "Redis"],
  },
];
