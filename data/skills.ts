export interface Skill {
  name: string;
  context: string;
}

export interface SkillCategory {
  id: string;
  label: string;
  icon: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "backend",
    label: "Backend & Systems",
    icon: "⚙️",
    skills: [
      { name: "TypeScript", context: "Primary language at Fanon & OtherwiseAI" },
      { name: "Go", context: "Pulumi IaC at Fanon (sibyl-system)" },
      { name: "Python", context: "FastAPI, Celery, scrapers at Fanon" },
      { name: "Node.js", context: "OtherwiseAI, Authbase, Pinnove" },
      { name: "Deno", context: "pip-boy analytics engine at Fanon" },
      { name: "FastAPI", context: "video-horcruxes & soul-society at Fanon" },
      { name: "Celery", context: "Async task queue for video transcoding" },
      { name: "Redis", context: "Celery broker, caching at Fanon" },
      { name: "PostgreSQL", context: "soul-society, OtherwiseAI, Authbase" },
      { name: "Convex", context: "Primary DB/backend at Fanon (fanon-webui)" },
      { name: "Supabase", context: "Auth layer at Fanon" },
      { name: "DuckDB", context: "Engagement analytics (pip-boy)" },
      { name: "REST APIs", context: "Designed & consumed across all roles" },
      { name: "WebSockets", context: "Real-time review UI at Fanon" },
    ],
  },
  {
    id: "infra",
    label: "Cloud & Infrastructure",
    icon: "☁️",
    skills: [
      { name: "Kubernetes", context: "GKE + EKS at Fanon (97 IaC commits)" },
      { name: "Pulumi (Go)", context: "IaC for GKE/EKS clusters at Fanon" },
      { name: "GCP / GKE", context: "Staging cluster provisioning at Fanon" },
      { name: "AWS / EKS", context: "Production cluster (sibyl-system-prod)" },
      { name: "Argo CD", context: "GitOps delivery via ApplicationSets" },
      { name: "Prometheus", context: "Observability stack across all clusters" },
      { name: "Alertmanager", context: "Per-cluster Discord alerting at Fanon" },
      { name: "Thanos", context: "Long-term metric storage at Fanon" },
      { name: "Docker", context: "video-horcruxes containerisation" },
      { name: "Elasticsearch", context: "StatefulSet deployment at Fanon" },
      { name: "Traefik", context: "Cluster ingress controller at Fanon" },
      { name: "Workload Identity", context: "Keyless GCS access (GSA ↔ KSA)" },
      { name: "Vercel", context: "fanon-webui hosting & edge middleware" },
      { name: "GCS", context: "Video storage for video-horcruxes" },
    ],
  },
  {
    id: "product",
    label: "Product & Frontend",
    icon: "🚀",
    skills: [
      { name: "Next.js 15", context: "App Router — primary framework at Fanon" },
      { name: "React", context: "UI across Fanon, OtherwiseAI, soul-society" },
      { name: "Customer.io", context: "Email & push dispatch at Fanon" },
      { name: "PostHog", context: "Feature flags & A/B testing at Fanon" },
      { name: "Mixpanel", context: "Server-side event tracking at Fanon" },
      { name: "OpenAI API", context: "AI pipelines at OtherwiseAI" },
      { name: "Amazon Textract", context: "Document extraction at OtherwiseAI" },
      { name: "Google Vision", context: "Multi-modal AI at OtherwiseAI" },
      { name: "OAuth 2.0 / JWT", context: "Auth systems at Authbase & Fanon" },
      { name: "A/B Testing", context: "PostHog variant experiments at Fanon" },
      { name: "Playwright", context: "Browser scraping at Fanon (soul-society)" },
      { name: "ffmpeg / HLS", context: "Video transcoding at Fanon" },
    ],
  },
];
