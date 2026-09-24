export interface Project {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  tags: string[];
  tech: string[];
  demoUrl?: string;
  githubUrl?: string;
  isInternal?: boolean;
  status: "live" | "internal" | "wip";
}

export const projects: Project[] = [
  {
    id: "k8s-deployment-lab",
    name: "Kubernetes Deployment Lab",
    description: "End-to-end full-stack deployment lab on a local Kind cluster demonstrating core Kubernetes fundamentals.",
    longDescription:
      "A hands-on, minimal full-stack deployment on a local Kind (Kubernetes in Docker) cluster. Features an NGINX Ingress controller, a Go API service with ReplicaSets, and a PostgreSQL database with PersistentVolumeClaims. Automates setup via PowerShell scripts and demonstrates self-healing, scaling, and stateful data persistence.",
    tags: ["Infra", "Backend"],
    tech: ["Kubernetes", "Docker", "Kind", "NGINX", "Go", "PostgreSQL", "PowerShell"],
    githubUrl: "https://github.com/MO-deus",
    status: "live",
  },
  {
    id: "localani",
    name: "LocalAni",
    description: "AI-powered anime discovery and tracking platform with personalised recommendations.",
    longDescription:
      "A full-stack anime discovery platform leveraging AI for personalised recommendations, watch-list tracking, and community-driven content curation. Built with a modern stack including Next.js and AI integrations.",
    tags: ["Full-Stack", "AI"],
    tech: ["Next.js", "TypeScript", "OpenAI", "PostgreSQL", "Supabase"],
    demoUrl: "#", // placeholder
    githubUrl: "https://github.com/MO-deus",
    status: "live",
  },
  {
    id: "east-clothing",
    name: "East Clothing",
    description: "Modern e-commerce storefront with dynamic product catalogue and seamless checkout.",
    longDescription:
      "A full-stack e-commerce web application for an apparel brand featuring a dynamic product catalogue, cart management, and integrated payment flows. Optimised for performance and conversion.",
    tags: ["Full-Stack"],
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "React"],
    demoUrl: "#", // placeholder
    githubUrl: "https://github.com/MO-deus",
    status: "live",
  },
  {
    id: "fanon-notifications",
    name: "Fanon — Push Notification Engine",
    description:
      "Priority-queue orchestration engine with peak-time scheduling, 74 types, and 150k+ fan-out.",
    longDescription:
      "Designed and shipped the push-notification orchestration engine at Fanon — 74 in-app notification types, 25+ typed handler classes, peak-time scheduling per user timezone, exponential backoff retry, per-minute Workpool cron fanning out to 150k+ follower graphs.",
    tags: ["Backend"],
    tech: ["Convex", "TypeScript", "Customer.io", "Next.js 15", "Workpool"],
    isInternal: true,
    status: "internal",
  },
  {
    id: "video-horcruxes",
    name: "Fanon — Video Transcoding Service",
    description: "HLS adaptive-bitrate transcoding pipeline with Celery tasks, Prometheus monitoring, and GCS storage.",
    longDescription:
      "Built Fanon's video transcoding microservice — FastAPI + Celery workers producing HLS renditions (480p/720p/1080p) from raw creator uploads, storing output to GCS, and reporting back to the web backend. Added Prometheus /metrics endpoint, HMAC-signed webhook auth, and full Docker + Kubernetes deployment.",
    tags: ["Backend", "Infra"],
    tech: ["Python", "FastAPI", "Celery", "Redis", "ffmpeg", "GCS", "Prometheus", "Docker"],
    isInternal: true,
    status: "internal",
  },
  {
    id: "soul-society",
    name: "Fanon — Creator Discovery Pipeline",
    description: "Multi-platform scraper ETL (X, DeviantArt, Instagram) with PostgreSQL migration and DAO refactor.",
    longDescription:
      "Built Fanon's creator-discovery and qualification pipeline — new platform scrapers for X (Twikit), DeviantArt (Playwright), and Instagram (Instagrapi), follower-threshold gating, SQLite→PostgreSQL migration, DAO/SQL pattern refactor, and DB sync tooling between local and prod.",
    tags: ["Backend", "Data"],
    tech: ["Python", "FastAPI", "PostgreSQL", "Playwright", "Twikit", "Pydantic", "React"],
    isInternal: true,
    status: "internal",
  },
  {
    id: "pip-boy",
    name: "pip-boy — Engagement Analytics",
    description: "Weekly fanfic/episode engagement analytics engine built with DuckDB and Deno.",
    longDescription:
      "Primary author of Fanon's weekly engagement analytics tool (pip-boy). Ingests platform data into DuckDB and computes per-fanfic and per-episode metrics — follower growth, view growth, watch-time, completion %, follow %, comments, likes, and AI-fanfic engagement — exported as JSON + CSV reports.",
    tags: ["Backend", "Data"],
    tech: ["Deno", "TypeScript", "DuckDB", "dayjs"],
    isInternal: true,
    status: "internal",
  },
];

export const allTags = ["All", "Backend", "Full-Stack", "AI", "Infra", "Data"];
