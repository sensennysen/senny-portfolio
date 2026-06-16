import {
  ArrowUpRight,
  BadgeCheck,
  ChartNoAxesCombined,
  Database,
  FileText,
  GitBranch,
  KeyRound,
  Layers3,
  LockKeyhole,
  Mail,
  MapPin,
  ReceiptText,
  Route,
  Search,
  ShieldCheck,
  Terminal,
  UsersRound,
  WalletCards,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { CSSProperties, ReactNode } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const contactEmail = "bille.lagarde.personal@gmail.com";

const navItems = [
  { label: "Stack", href: "#stack" },
  { label: "Security", href: "#security" },
  { label: "Cases", href: "#projects" },
  { label: "Story", href: "#story" },
];

const heroActions = [
  {
    label: "Developer CV",
    href: "/cv/Bille-Lagarde-Developer-CV.pdf",
    icon: FileText,
  },
  {
    label: "Cybersecurity CV",
    href: "/cv/Bille-Lagarde-Cybersecurity-CV.pdf",
    icon: ShieldCheck,
  },
  {
    label: "Email me",
    href: `mailto:${contactEmail}`,
    icon: Mail,
  },
  {
    label: "GitHub",
    href: "https://github.com/sensennysen",
    icon: GitBranch,
  },
];

type SecurityCard =
  | {
      title: string;
      icon: LucideIcon;
      summary: string;
      body: string;
      code: string[];
    }
  | {
      title: string;
      icon: LucideIcon;
      summary: string;
      body: string;
      tags: string[];
    }
  | {
      title: string;
      icon: LucideIcon;
      summary: string;
      body: string;
      logs: Array<{ event: string; time: string; status: string }>;
    };

const techGroups = [
  {
    title: "Frontend",
    body: "Interface systems with typed React flows, accessible controls, and responsive production UI.",
    items: [
      { name: "React", logo: "react" },
      { name: "TypeScript", logo: "typescript" },
      { name: "Tailwind CSS", logo: "tailwind" },
    ],
  },
  {
    title: "Backend & DB",
    body: "API and data foundations for auth-aware products, operational workflows, and reporting.",
    items: [
      { name: "Node.js", logo: "node" },
      { name: "Express.js", logo: "express" },
      { name: "GraphQL", logo: "graphql" },
      { name: "SQL", logo: "sql" },
      { name: "MySQL", logo: "mysql" },
      { name: "PostgreSQL", logo: "postgres" },
      { name: "MongoDB", logo: "mongodb" },
      { name: "Supabase", logo: "supabase" },
    ],
  },
  {
    title: "Infrastructure & Security",
    body: "Deployment and application-hardening patterns that protect users without slowing delivery.",
    items: [
      { name: "Vercel", logo: "vercel" },
      { name: "OAuth", logo: "oauth" },
      { name: "Role Based Access Control", logo: "rbac" },
      { name: "Row-Level Security", logo: "rls" },
      { name: "Security Headers", logo: "headers" },
    ],
  },
];

const securityCards: SecurityCard[] = [
  {
    title: "Row-level security",
    icon: Database,
    summary:
      "Data ownership belongs in the database as well as the UI, with policies that isolate user-owned records by default.",
    body: "Ledger and maiPaQueueCheck PH both lean on Supabase RLS for user-scoped profiles, queues, accounts, transactions, and admin data paths.",
    code: [
      "CREATE POLICY user_isolation",
      "ON tasks",
      "USING (user_id = auth.uid());",
      "",
      "ALTER TABLE tasks",
      "ENABLE ROW LEVEL SECURITY;",
    ],
  },
  {
    title: "Auth & Protected Routes",
    icon: ShieldCheck,
    summary:
      "Session, role, and route checks are treated as product architecture, not a decorative login gate.",
    body: "Protected app areas hydrate auth state before rendering sensitive workflows, with roles and ownership checks backing admin operations.",
    tags: ["JWT", "HttpOnly Cookies", "Role-based Access", "Protected Routes"],
  },
  {
    title: "Audit Logging",
    icon: Search,
    summary:
      "Operational actions stay reviewable through audit trails that make admin workflows easier to trust.",
    body: "Queue entries, rules, access requests, role updates, and profile changes are logged for filtering and review.",
    logs: [
      { event: "user.login", time: "09:41", status: "ok" },
      { event: "project.update", time: "10:08", status: "ok" },
      { event: "task.delete", time: "10:32", status: "review" },
    ],
  },
];

const projects = [
  {
    title: "maiPaQueueCheck PH",
    kind: "Community queue platform",
    summary:
      "A React and Supabase community app for branch-specific arcade queues, player profiles, access requests, reports, and admin review.",
    mockup: "queue",
    screenshot: "/showcase/mpqcheck.png",
    visualLabel: "maiPaQueueCheck PH desktop app screenshot",
    live: "https://mpqcheckph.vercel.app",
    repo: "https://github.com/sensennysen/smf-queue-check",
    features: [
      {
        title: "Branch queues",
        body: "Active, waiting, reorder, and finish-game flows around real locations.",
        icon: UsersRound,
      },
      {
        title: "Role workflows",
        body: "Branch admins, super admins, access requests, and scoped controls.",
        icon: BadgeCheck,
      },
      {
        title: "Profile privacy",
        body: "Public/private profiles, shareable slugs, follows, playlists, and posts.",
        icon: LockKeyhole,
      },
      {
        title: "Audit review",
        body: "Queue, rules, access, profile, and role changes logged for admin checks.",
        icon: Search,
      },
    ],
  },
  {
    title: "Ledger",
    kind: "Personal finance app",
    summary:
      "A TypeScript finance app for accounts, transactions, budgets, goals, receipt storage, exports, and user-owned financial data.",
    mockup: "ledger",
    screenshot: "/showcase/ledger.jpg",
    visualLabel: "Ledger mobile finance app screenshot",
    live: "https://ledger-personal.vercel.app",
    repo: "https://github.com/sensennysen/personal_wallet_app",
    features: [
      {
        title: "Money workflows",
        body: "Accounts, transactions, categories, budgets, goals, and transfers.",
        icon: WalletCards,
      },
      {
        title: "Reports",
        body: "Cash flow, balances, budgets, recent activity, and CSV/PDF exports.",
        icon: ChartNoAxesCombined,
      },
      {
        title: "Receipt storage",
        body: "Private Supabase storage with signed URLs for sensitive attachments.",
        icon: ReceiptText,
      },
      {
        title: "User isolation",
        body: "RLS policies and ownership triggers guard cross-user references.",
        icon: KeyRound,
      },
    ],
  },
];

const timeline = [
  {
    period: "2023-2026",
    title: "Full Stack Application Developer",
    body: "Built React, TypeScript, Node/Vercel, and Supabase-backed products with authentication, roles, RLS, audit logs, reporting, admin workflows, and production support.",
  },
  {
    period: "2020-2023",
    title: "Program Coordination and EdTech",
    body: "Led curriculum direction, instructor coordination, training, remote and hybrid learning support, and technology adoption for learning programs.",
  },
];

const motionDelay = (index: number, base = 0, step = 90) =>
  ({ "--motion-delay": `${base + index * step}ms` }) as CSSProperties;

type TechLogoProps = {
  logo: string;
};

function TechLogo({ logo }: TechLogoProps) {
  if (logo === "react") {
    return (
      <span className="tech-logo tech-logo--react" aria-hidden="true">
        <svg viewBox="0 0 64 64" role="img">
          <circle cx="32" cy="32" r="4.8" />
          <ellipse cx="32" cy="32" rx="25" ry="9.5" />
          <ellipse cx="32" cy="32" rx="25" ry="9.5" transform="rotate(60 32 32)" />
          <ellipse cx="32" cy="32" rx="25" ry="9.5" transform="rotate(120 32 32)" />
        </svg>
      </span>
    );
  }

  if (logo === "typescript") {
    return (
      <span className="tech-logo tech-logo--typescript" aria-hidden="true">
        <svg viewBox="0 0 64 64" role="img">
          <rect x="7" y="7" width="50" height="50" rx="6" />
          <path d="M17 25h22M28 25v24M39 47c2.2 2 5.2 3 8.3 3 4.5 0 7.7-2.1 7.7-6.1 0-3.5-2.1-5-6.9-6.4-3.2-.9-4.6-1.6-4.6-3.2 0-1.4 1.2-2.4 3.5-2.4 2.2 0 4.2.7 6 2.1" />
        </svg>
      </span>
    );
  }

  if (logo === "tailwind") {
    return (
      <span className="tech-logo tech-logo--tailwind" aria-hidden="true">
        <svg viewBox="0 0 64 64" role="img">
          <path d="M17 33c4-8 9.5-12 16.4-12 10.3 0 11.5 7.7 16.6 7.7 3.4 0 6.1-2.2 8-6.7-4 8-9.5 12-16.4 12-10.3 0-11.5-7.7-16.6-7.7-3.4 0-6.1 2.2-8 6.7Zm-11 16c4-8 9.5-12 16.4-12 10.3 0 11.5 7.7 16.6 7.7 3.4 0 6.1-2.2 8-6.7-4 8-9.5 12-16.4 12-10.3 0-11.5-7.7-16.6-7.7-3.4 0-6.1 2.2-8 6.7Z" />
        </svg>
      </span>
    );
  }

  if (logo === "node") {
    return (
      <span className="tech-logo tech-logo--node" aria-hidden="true">
        <svg viewBox="0 0 64 64" role="img">
          <path d="M32 5 55 18v28L32 59 9 46V18L32 5Z" />
          <path d="M22 43V24h5.2l9.7 12.4V24H42v19h-4.9L27.2 30.4V43H22Z" />
        </svg>
      </span>
    );
  }

  if (logo === "express") {
    return (
      <span className="tech-logo tech-logo--express" aria-hidden="true">
        <svg viewBox="0 0 64 64" role="img">
          <path d="M8 39.5c6.7-9 13.5-13.5 20.6-13.5 7.4 0 12.6 4.7 18 13.5M42 29l14 19M57 29 43 48" />
          <path d="M8 39.5h38.5" />
        </svg>
      </span>
    );
  }

  if (logo === "postgres") {
    return (
      <span className="tech-logo tech-logo--postgres" aria-hidden="true">
        <svg viewBox="0 0 64 64" role="img">
          <path d="M18 42c-6-5-7-17-3-25 3-6 10-9 18-8 12 1 20 9 20 22 0 9-5 18-15 20l-2 7-6-1 1-7c-3-1-6-2-9-4" />
          <path d="M28 26c0 4-2 8-6 11M41 25c-1 4-4 7-8 8M29 42c4 2 9 2 13-1" />
          <circle cx="26" cy="22" r="2" />
          <circle cx="39" cy="21" r="2" />
        </svg>
      </span>
    );
  }

  if (logo === "sql") {
    return (
      <span className="tech-logo tech-logo--sql" aria-hidden="true">
        <svg viewBox="0 0 64 64" role="img">
          <ellipse cx="32" cy="14" rx="19" ry="8" />
          <path d="M13 14v26c0 4.4 8.5 8 19 8s19-3.6 19-8V14" />
          <path d="M13 27c0 4.4 8.5 8 19 8s19-3.6 19-8" />
          <path d="M13 40c0 4.4 8.5 8 19 8s19-3.6 19-8" />
        </svg>
      </span>
    );
  }

  if (logo === "mysql") {
    return (
      <span className="tech-logo tech-logo--mysql" aria-hidden="true">
        <svg viewBox="0 0 64 64" role="img">
          <path d="M10 42c6.5-13 17.6-21 34-24l9-7-2 11c4.3 3.1 5.8 7.2 4.5 12.4-5.3-5.4-12.4-7.2-21.2-5.5C26 30.6 18 35 10 42Z" />
          <path d="M22 39c5.7 1.6 11.2 1.5 16.5-.3M36 28c2.5 1.7 4.2 4 5 7" />
          <circle cx="45" cy="23" r="1.8" />
        </svg>
      </span>
    );
  }

  if (logo === "mongodb") {
    return (
      <span className="tech-logo tech-logo--mongodb" aria-hidden="true">
        <svg viewBox="0 0 64 64" role="img">
          <path d="M32 4c8.4 8.6 12.6 17.5 12.6 26.6 0 10.7-5.6 18.8-12.6 25.4C25 49.4 19.4 41.3 19.4 30.6 19.4 21.5 23.6 12.6 32 4Z" />
          <path d="M32 13v43" />
        </svg>
      </span>
    );
  }

  if (logo === "graphql") {
    return (
      <span className="tech-logo tech-logo--graphql" aria-hidden="true">
        <svg viewBox="0 0 64 64" role="img">
          <path d="M32 8 52 20v24L32 56 12 44V20L32 8Z" />
          <path d="M12 20 32 32 52 20M32 32v24M12 44 32 8l20 36" />
          <circle cx="32" cy="8" r="3" />
          <circle cx="52" cy="20" r="3" />
          <circle cx="52" cy="44" r="3" />
          <circle cx="32" cy="56" r="3" />
          <circle cx="12" cy="44" r="3" />
          <circle cx="12" cy="20" r="3" />
        </svg>
      </span>
    );
  }

  if (logo === "supabase") {
    return (
      <span className="tech-logo tech-logo--supabase" aria-hidden="true">
        <svg viewBox="0 0 64 64" role="img">
          <path d="M36 4 12 36h20l-4 24 24-34H32l4-22Z" />
        </svg>
      </span>
    );
  }

  if (logo === "vercel") {
    return (
      <span className="tech-logo tech-logo--vercel" aria-hidden="true">
        <svg viewBox="0 0 64 64" role="img">
          <path d="M32 10 58 54H6L32 10Z" />
        </svg>
      </span>
    );
  }

  if (logo === "rls") {
    return (
      <span className="tech-logo tech-logo--security" aria-hidden="true">
        <LockKeyhole />
      </span>
    );
  }

  if (logo === "oauth") {
    return (
      <span className="tech-logo tech-logo--security" aria-hidden="true">
        <KeyRound />
      </span>
    );
  }

  if (logo === "rbac") {
    return (
      <span className="tech-logo tech-logo--security" aria-hidden="true">
        <BadgeCheck />
      </span>
    );
  }

  return (
    <span className="tech-logo tech-logo--security" aria-hidden="true">
      <ShieldCheck />
    </span>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading scroll-reveal">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="font-serif">{title}</h2>
      {description ? <p className="section-description">{description}</p> : null}
    </div>
  );
}

function SecurityVisual({
  card,
}: {
  card: (typeof securityCards)[number];
}) {
  if ("code" in card) {
    return (
      <pre className="sql-window" aria-label="SQL row-level security example">
        <code>
          {card.code.map((line) => (
            <span key={line || "space"}>{line}</span>
          ))}
        </code>
      </pre>
    );
  }

  if ("tags" in card) {
    return (
      <div className="auth-visual" aria-label="Authentication and access tags">
        <div className="auth-lock">
          <LockKeyhole />
        </div>
        <div className="auth-tags">
          {card.tags.map((tag) => (
            <Badge className="security-tag" key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="log-table" aria-label="Audit log table example">
      {card.logs.map((log) => (
        <div className="log-row" key={log.event}>
          <span>{log.time}</span>
          <strong>{log.event}</strong>
          <em>{log.status}</em>
        </div>
      ))}
    </div>
  );
}

function ProjectMockup({
  type,
  src,
  label,
}: {
  type: string;
  src: string;
  label: string;
}) {
  if (type === "ledger") {
    return (
      <div className="showcase-frame showcase-frame--phone">
        <div className="phone-speaker" aria-hidden="true" />
        <img src={src} alt={label} loading="lazy" />
      </div>
    );
  }

  return (
    <div className="showcase-frame showcase-frame--wide">
      <div className="browser-top" aria-hidden="true">
        <span />
        <span />
        <span />
        <div />
      </div>
      <div className="showcase-image-wrap">
        <img src={src} alt={label} loading="lazy" />
      </div>
    </div>
  );
}

function FeatureCard({
  feature,
}: {
  feature: {
    title: string;
    body: string;
    icon: (props: { className?: string }) => ReactNode;
  };
}) {
  const Icon = feature.icon;

  return (
    <div className="feature-tile">
      <span className="feature-icon" aria-hidden="true">
        <Icon className="size-4" />
      </span>
      <h4>{feature.title}</h4>
      <p>{feature.body}</p>
    </div>
  );
}

function App() {
  return (
    <main className="site-shell overflow-hidden">
      <header className="site-header px-4 py-4 sm:px-8 lg:px-12">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <a className="brand-mark" href="#top" aria-label="Back to top">
            senny.me
          </a>
          <div className="nav-links" aria-label="Primary navigation">
            {navItems.map((item) => (
              <a className="nav-link" href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <section id="top" className="hero-section px-4 pb-16 pt-8 sm:px-8 sm:pb-24 lg:px-12 lg:pt-14">
        <div className="mx-auto max-w-7xl">
          <div className="hero-copy">
            <p className="eyebrow motion-enter" style={motionDelay(0, 80)}>
              <Terminal className="size-4" />
              Available for full-stack product work
            </p>
            <h1 className="motion-enter font-serif" style={motionDelay(1, 80)}>
              Security-minded full-stack developer.
            </h1>
            <p className="hero-description motion-enter" style={motionDelay(2, 80)}>
              I build secure React and TypeScript products with modern backend systems, including
              Node.js, Express, PostgreSQL, Supabase Auth, row-level security, audit logging, and
              deployment hardening on Vercel.
            </p>

            <div className="hero-actions motion-enter" style={motionDelay(3, 80)}>
              {heroActions.map((action) => {
                const Icon = action.icon;
                const external = action.href.startsWith("http") || action.href.startsWith("/");

                return (
                  <Button
                    asChild
                    className="hero-button"
                    key={action.label}
                    size="lg"
                    variant={action.label === "Email me" ? "default" : "outline"}
                  >
                    <a
                      href={action.href}
                      rel={external ? "noreferrer" : undefined}
                      target={external ? "_blank" : undefined}
                    >
                      <Icon />
                      {action.label}
                    </a>
                  </Button>
                );
              })}
            </div>

            <div className="hero-meta motion-enter" style={motionDelay(4, 80)}>
              <span>
                <MapPin className="size-4" /> Philippines
              </span>
              <span>
                <Layers3 className="size-4" /> React, TypeScript, Supabase
              </span>
              <span>
                <Route className="size-4" /> Product delivery to deployment
              </span>
            </div>
          </div>

        </div>
      </section>

      <section id="stack" className="section-band px-4 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Stack"
            title="Full-stack capabilities first"
            description="Three practical layers for building polished interfaces, reliable data workflows, and secure production deployments."
          />

          <div className="tech-grid">
            {techGroups.map((group, index) => (
              <Card className="tech-card scroll-reveal" key={group.title} style={motionDelay(index, 60)}>
                <CardContent className="p-5 sm:p-6">
                  <h3 className="font-serif">{group.title}</h3>
                  <p>{group.body}</p>
                  <div className="tech-list">
                    {group.items.map((item) => (
                      <div className="tech-item" key={item.name}>
                        <TechLogo logo={item.logo} />
                        <span>{item.name}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="security" className="px-4 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Security"
            title="Security-minded engineering"
            description="A horizontal set of implementation patterns behind the portfolio work: database isolation, protected access, and reviewable operations."
          />

          <div className="security-scroll" tabIndex={0} aria-label="Security engineering cards">
            {securityCards.map((card, index) => {
              const Icon = card.icon;

              return (
                <article className="security-panel scroll-reveal" key={card.title} style={motionDelay(index, 80)}>
                  <div className="security-panel__header">
                    <span className="security-icon" aria-hidden="true">
                      <Icon />
                    </span>
                    <div>
                      <h3>{card.title}</h3>
                      <p>{card.summary}</p>
                    </div>
                  </div>
                  <SecurityVisual card={card} />
                  <p className="security-body">{card.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="projects" className="section-band px-4 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Case Studies"
            title="Case studies in product delivery"
            description="Two shipped applications, shown with product context, feature structure, and security-minded engineering choices."
          />

          <div className="case-study-list">
            {projects.map((project, index) => (
              <article
                className={`case-study scroll-reveal ${index % 2 === 1 ? "case-study--reverse" : ""}`}
                key={project.title}
                style={motionDelay(index, 80)}
              >
                <div className="case-visual-wrap">
                  <ProjectMockup
                    label={project.visualLabel}
                    src={project.screenshot}
                    type={project.mockup}
                  />
                </div>

                <div className="case-content">
                  <p className="case-kind">{project.kind}</p>
                  <h3 className="font-serif">{project.title}</h3>
                  <p className="case-summary">{project.summary}</p>

                  <div className="feature-grid">
                    {project.features.map((feature) => (
                      <FeatureCard feature={feature} key={feature.title} />
                    ))}
                  </div>

                  <div className="case-actions">
                    <Button asChild size="lg">
                      <a href={project.live} rel="noreferrer" target="_blank">
                        Live Demo
                        <ArrowUpRight />
                      </a>
                    </Button>
                    <Button asChild size="lg" variant="outline">
                      <a href={project.repo} rel="noreferrer" target="_blank">
                        GitHub
                        <GitBranch />
                      </a>
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="story" className="px-4 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:gap-16">
          <SectionHeading
            eyebrow="Experience"
            title="Work story"
            description="A concise path through full-stack product engineering and EdTech program coordination."
          />

          <div className="timeline-list">
            {timeline.map((item, index) => (
              <article className="timeline-entry scroll-reveal" key={item.period} style={motionDelay(index, 70)}>
                <time>{item.period}</time>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="site-footer px-4 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p>Security-minded full-stack developer building practical web products.</p>
          <a href={`mailto:${contactEmail}`}>
            <Mail className="size-4" />
            {contactEmail}
          </a>
        </div>
      </footer>
    </main>
  );
}

export default App;
