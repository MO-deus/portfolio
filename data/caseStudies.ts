export interface CaseStudyStep {
  label: string;
  detail: string;
}

export interface CaseStudy {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  problem: string;
  approach: string;
  architecture: CaseStudyStep[];
  impact: string[];
  tech: string[];
  repoLabel: string;
  accentColor: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "push-notifications",
    tag: "Backend Systems",
    title: "Push Notification Orchestration Engine",
    subtitle: "Priority queue · Peak-time scheduling · 150k+ fan-out · Exponential backoff",
    problem:
      "Fanon needed a notification system capable of fanning out content events (new episodes, milestones, comments) to 150k+ followers per creator — while respecting each user's most active time-of-day window, avoiding notification fatigue, and recovering gracefully from failures.",
    approach:
      "I designed a two-layer system: an in-app notification feed backed by 74 typed notification handlers, and a push-notification orchestration engine that uses a priority cycler, a timezone-aware peak-time scheduler, send guards, and a per-minute Workpool cron to batch ~1000 eligible users per run with up to 10 parallel workers.",
    architecture: [
      {
        label: "Trigger",
        detail: "Creator publishes → 25+ handler classes determine eligible user sets (followers, subscribers) and page through them in batches, enqueuing push notifications into the queue table",
      },
      {
        label: "Queue Lifecycle",
        detail: "QUEUED → DEFERRED → QUEUED → … → SENT (or EXPIRED on max attempts). Managed by queueManager.ts with exponential backoff on retries",
      },
      {
        label: "Priority Cycler",
        detail: "PushNotificationQueueCycler picks next item by notification-type priority, then recency. FIFO mode exists as fallback",
      },
      {
        label: "Peak Scheduler",
        detail: "computePeakHours() analyses a 96-slot (15-min) activity bucket array, filters above-average slots with a minimum 1-hour gap, converts to the user's local timezone. Sends immediately during peak slots; defers with 3h cooldown otherwise",
      },
      {
        label: "Copy Escalation",
        detail: "On each retry, title/body copy priority escalates P0 → P1 → P2 from copy_library.ts to increase open rates",
      },
      {
        label: "Dispatch",
        detail: "CustomerIoPushNotificationProvider sends via Customer.io transactional push API; state updated to SENT / DEFERRED / EXPIRED",
      },
    ],
    impact: [
      "74 in-app notification types across episode, milestone, community, and fandom events",
      "25+ typed handler classes — each implements getUserSetNames / getUserSetPage / buildFactoryData",
      "Per-minute cron, batching ~1,000 users/run with 10 parallel Workpool workers",
      "Fan-out scales to 150,000+ followers per creator",
      "Zero notification loss on transient failures via exponential backoff and queue persistence",
    ],
    tech: ["Convex", "TypeScript", "Customer.io", "Workpool", "Crons", "Next.js 15"],
    repoLabel: "fanon-webui",
    accentColor: "#3b82f6",
  },
  {
    id: "k8s-gitops",
    tag: "Cloud Infrastructure",
    title: "Multi-Cloud Kubernetes & GitOps Platform",
    subtitle: "GKE + EKS · Pulumi (Go) IaC · Argo CD · Prometheus · Workload Identity",
    problem:
      "Fanon's staging and production infrastructure needed a fully reproducible, multi-cloud Kubernetes platform with GitOps delivery, observability, automated alerting, and keyless service-account access to cloud resources — all managed through code with zero manual kubectl commands.",
    approach:
      "I contributed 97 commits (#3 of 12) to the staging IaC and 10 to production. I provisioned GKE clusters and node pools with Pulumi (Go SDK), wired Argo CD ApplicationSets for GitOps delivery, deployed kube-prometheus-stack with Thanos, configured per-cluster Alertmanager with Discord webhooks, deployed Elasticsearch as a StatefulSet, and set up Workload Identity (GSA ↔ KSA binding) for keyless GCS access from the video transcoding service.",
    architecture: [
      {
        label: "IaC Layer",
        detail: "Pulumi Go SDK provisions GKE (us-central1, autoscaling 1–3 nodes) and EKS clusters, IAM service accounts, GCS bucket IAM, and workload modules (Dittopix, Sol, video-horcruxes namespace)",
      },
      {
        label: "GitOps Delivery",
        detail: "Argo CD ApplicationSets watch the manifests/ directory and sync Kubernetes resources to staging and prod clusters automatically on every git push",
      },
      {
        label: "Ingress",
        detail: "Traefik deployed as cluster ingress controller, routing external traffic to internal services",
      },
      {
        label: "Observability",
        detail: "kube-prometheus-stack (Prometheus Operator) with Thanos for long-term metric storage; ServiceMonitors and PrometheusRules per workload",
      },
      {
        label: "Alerting",
        detail: "Per-cluster AlertmanagerConfig resources route alerts to a Discord channel via slackConfigs webhook (URL stored in Kubernetes secret, never inlined). sendResolved: true so recovery notifications also fire",
      },
      {
        label: "Identity",
        detail: "GCP Workload Identity binds video-horcruxes-gsa (GCP service account) to video-horcruxes-ksa (Kubernetes service account) for keyless, IRSA-equivalent GCS access from pods",
      },
    ],
    impact: [
      "97 commits to staging IaC, ranked #3 of 12 contributors",
      "10 commits to production EKS IaC (Pulumi + IRSA/OIDC)",
      "Fully automated multi-cloud K8s across GCP (GKE) and AWS (EKS)",
      "Zero-manual-kubectl GitOps delivery via Argo CD ApplicationSets",
      "Discord alerting covering all clusters with per-cluster Alertmanager configs",
      "Elasticsearch 8.17 StatefulSet deployed in staging for search workloads",
    ],
    tech: ["Go", "Pulumi", "Kubernetes", "GKE", "EKS", "Argo CD", "Prometheus", "Alertmanager", "Thanos", "Traefik", "Elasticsearch", "Workload Identity"],
    repoLabel: "sibyl-system · sibyl-system-prod",
    accentColor: "#06b6d4",
  },
  {
    id: "lifecycle-emails",
    tag: "Growth Engineering",
    title: "Timezone-Aware Lifecycle Email Engine",
    subtitle: "3-bucket fan model · Creator flows · Instant milestones · Feature flags · DAO pattern",
    problem:
      "Fanon needed a retention email system that could send the right email at the right time to the right user — accounting for activity levels, timezones, and content triggers — without overwhelming users or sending at 3 AM. The system had to be safe to roll out incrementally in production with the ability to instantly disable any path.",
    approach:
      "I built a lifecycle email engine for both fans and creators on Convex + Customer.io. It uses a 3-bucket activity model (ACTIVE / SEMI_ACTIVE / CHURNED) with per-bucket email queues, a DAO-repository pattern for clean prefetch → precommit → commit → post-commit separation, timezone-aware send windows using Intl.DateTimeFormat, DB-config feature flags for phased rollout, and instant milestone/comment email paths for high-urgency events.",
    architecture: [
      {
        label: "Activity Bucketing",
        detail: "Fans sorted into ACTIVE (<30 days, 7-day interval), SEMI_ACTIVE (30–60 days, 14-day interval), CHURNED (>60 days, 28-day interval). Creators bucketed by days since last publish with their own growth-period cadences",
      },
      {
        label: "DAO-Repository Pattern",
        detail: "processLifecycleEmailForUser follows 4 phases: Prefetch (gather user + lifecycle record + views/follows) → Precommit (validate eligibility, determine bucket, select email type) → Commit (upsert fanLifeCycle record) → Post-commit (audit row, advance lastEmailSentAt, clear queue)",
      },
      {
        label: "Timezone-Aware Scheduling",
        detail: "Intl.DateTimeFormat converts UTC → user's stored timezone (fallback: America/Los_Angeles), computes a daily send slot around 5:30 PM local. Explicitly avoids midnight–6 AM sleep window. Gated by TIMEZONE_AWARE_ENABLED DB-config flag",
      },
      {
        label: "Instant Milestone Emails (Phase 2a)",
        detail: "When episode views cross a milestone, deferred to nextInstantSlot honoring cooldown and sleep window. Gated by INSTANT_MILESTONE_ENABLED",
      },
      {
        label: "Instant Fan Comment Emails (Phase 2b)",
        detail: "routeFanCommentNotification routes comment-reply / question-answered events into fanInstantComment table (instead of daily digest) with 2h cooldown. drainFanInstantComments batches pending items into a single grouped email",
      },
      {
        label: "New-Fanfic Dispatch (Phase 3)",
        detail: "SET-A / SET-B / SET-C audience logic plus fellow-creator targeting, backed by fanCohortsRepo. Gated by NEW_FANFIC_DISPATCH_ENABLED",
      },
    ],
    impact: [
      "Complete fan & creator lifecycle email coverage: welcome, retention, milestone, community nudges, new-fanfic dispatch",
      "Timezone-aware scheduling prevents off-hours sends across all user timezones",
      "DB-config feature flags enabled safe, reversible phased rollout of every major path",
      "Instant milestone and comment emails for high-urgency engagement signals",
      "Paginated cron batching handles fan-out at scale (page size 100, recursion limit 500)",
      "Single largest feature area in fanon-webui — multiple phases spanning several months",
    ],
    tech: ["Convex", "TypeScript", "Customer.io", "Next.js 15", "Intl API", "Crons", "Supabase"],
    repoLabel: "fanon-webui",
    accentColor: "#22c55e",
  },
];
