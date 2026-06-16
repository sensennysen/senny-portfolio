import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  FileText,
  GitBranch,
  LockKeyhole,
  Mail,
  MapPin,
  PenTool,
  ShieldCheck,
} from "lucide-react";
import type { CSSProperties } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const contactEmail = "bille.lagarde.personal@gmail.com";

const stack = [
  "React",
  "TypeScript",
  "Node.js",
  "Express.js",
  "REST APIs",
  "GraphQL",
  "PostgreSQL",
  "Supabase",
  "Row-Level Security",
  "Tailwind CSS",
  "Vercel",
  "Security Headers",
];

const cvActions = [
  {
    label: "Developer CV",
    href: "/cv/Bille-Lagarde-Developer-CV.pdf",
  },
  {
    label: "Cybersecurity CV",
    href: "/cv/Bille-Lagarde-Cybersecurity-CV.pdf",
  },
];

const securityProofs = [
  {
    title: "Row-level security and user-owned records",
    body:
      "Ledger isolates profiles, accounts, transactions, budgets, goals, and rules by user. maiPaQueueCheck PH uses RLS around queue, profile, role, playlist, comment, follow, report, and audit-log data.",
  },
  {
    title: "Auth and protected routes",
    body:
      "Both apps use Supabase Auth. Ledger protects application routes behind login, while maiPaQueueCheck PH hydrates session, profile, and role context before queue and admin workflows.",
  },
  {
    title: "Role and admin controls",
    body:
      "maiPaQueueCheck PH separates branch admins, super admins, access requests, queue rules, and geolocation-gated edit permissions. Ledger stays focused on per-user ownership rather than a broad admin role model.",
  },
  {
    title: "Audit logging",
    body:
      "maiPaQueueCheck PH records queue entries, queue rules, access requests, profile changes, and role changes into audit logs with filtering and export-oriented admin review UI.",
  },
  {
    title: "Private storage and signed URLs",
    body:
      "Ledger stores receipts in a private Supabase bucket with user-scoped object policies and signed URL retrieval. maiPaQueueCheck PH validates profile, post, and contact uploads before storage.",
  },
  {
    title: "API and deployment protections",
    body:
      "maiPaQueueCheck PH hardens its Vercel image proxy against private-network targets, unsafe redirects, oversized responses, and unsafe content types. Ledger ships CSP, HSTS, frame, nosniff, referrer, and permissions headers.",
  },
];

const projects = [
  {
    title: "maiPaQueueCheck PH",
    kind: "React + Supabase community platform",
    summary:
      "A maimai community app that pairs branch-specific queue management with public/private profiles, admin workflows, and security-minded Vercel/Supabase implementation details.",
    problem:
      "Players and organizers needed more than a sign-up sheet: branch queues, now-playing state, privacy-aware profiles, social activity, and access workflows around real arcade locations.",
    stack: [
      "React 19",
      "Vite",
      "Supabase Auth/Postgres/Realtime",
      "Vercel APIs",
      "Zod",
      "DOMPurify",
    ],
    product: [
      "Branch-specific queue operations, waiting/active states, reorder and finish-game flows",
      "Public/private player profiles with shareable slugs, follows, playlists, and activity",
      "Admin workflows for branch access, queue rules, reports, roles, and audit-log review",
      "Geolocation-gated edits with super-admin bypass and access-request support",
    ],
    security: [
      "RLS and database-side authorization checks for queue and profile access paths",
      "Audit logs for queue entries, access requests, profiles, roles, and queue rules",
      "Validation, sanitization, restricted profile meta output, and a hardened image proxy",
    ],
    live: "https://mpqcheckph.vercel.app",
    repo: "https://github.com/sensennysen/smf-queue-check",
  },
  {
    title: "Ledger",
    kind: "React + TypeScript personal finance app",
    summary:
      "A finance app for accounts, transactions, budgets, goals, and reports, backed by Supabase Auth, Postgres, Storage, and per-user data isolation.",
    problem:
      "Individuals need practical money-management workflows without subscription-style gates, while keeping ownership of sensitive financial data in a self-hostable app.",
    stack: [
      "React 19",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Supabase Auth/Postgres/Storage",
      "Vercel PWA",
    ],
    product: [
      "Account, transaction, category, budget, savings-goal, and reporting workflows",
      "Receipt attachments, recurring entries, transfers, CSV import, and CSV/PDF exports",
      "Dashboard analytics for balances, cash flow, budgets, recent activity, and credit-card health",
      "Settings, privacy/legal screens, and self-service account deletion",
    ],
    security: [
      "RLS policies for per-user isolation across core finance tables",
      "Ownership triggers that block cross-user account, category, transaction, and budget references",
      "Private receipt storage with signed URLs, protected routes, deletion RPC, and security headers",
    ],
    live: "https://ledger-personal.vercel.app",
    repo: "https://github.com/sensennysen/personal_wallet_app",
  },
];

const timeline = [
  {
    period: "2023 - 2026",
    title: "Full Stack Application Developer",
    body: "React, TypeScript, Node/Vercel/Supabase-backed apps, auth, roles, RLS, audit logs, reports, and production support for complex application workflows.",
  },
  {
    period: "2020 - 2023",
    title: "Program Coordination and EdTech",
    body: "Curriculum direction, instructor coordination, training, remote and hybrid learning support, and technology adoption.",
  },
  {
    period: "Earlier",
    title: "Teaching and Game Development",
    body: "Programming instruction, game development, curriculum building, and student coaching across app and game projects.",
  },
];

const motionDelay = (index: number, base = 0, step = 90) =>
  ({ "--motion-delay": `${base + index * step}ms` }) as CSSProperties;

function App() {
  return (
    <main className="site-shell overflow-hidden">
      <header className="site-header px-4 py-4 sm:px-8 sm:py-5 lg:px-12">
        <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 border-b border-ink/15 pb-4">
          <a
            className="brand-mark max-w-[15rem] text-sm font-semibold leading-tight sm:max-w-none sm:text-base"
            href="#top"
          >
            Bille L.
          </a>
          <div className="flex items-center gap-1 overflow-x-auto text-sm text-ink/65 sm:overflow-visible">
            <a className="nav-link rounded-md px-3 py-2 hover:bg-ink/5" href="#stack">
              Stack
            </a>
            <a className="nav-link rounded-md px-3 py-2 hover:bg-ink/5" href="#security">
              Security
            </a>
            <a className="nav-link rounded-md px-3 py-2 hover:bg-ink/5" href="#projects">
              Projects
            </a>
            <a className="nav-link rounded-md px-3 py-2 hover:bg-ink/5" href="#story">
              Story
            </a>
          </div>
        </nav>
      </header>

      <section
        id="top"
        className="hero-section px-4 pb-14 pt-8 sm:px-8 sm:pb-20 sm:pt-10 lg:px-12 lg:pt-16"
      >
        <div className="hero-signal" aria-hidden="true" />
        <div className="mx-auto grid max-w-7xl gap-9 lg:grid-cols-[0.72fr_1.28fr] lg:gap-12">
          <aside
            className="hero-rail motion-enter border-l-4 border-accent pl-5 sm:pl-6"
            style={motionDelay(0, 80)}
          >
            <p className="max-w-xl font-serif text-2xl leading-tight text-ink sm:text-3xl lg:text-2xl">
              Security-minded full-stack developer based in the Philippines
            </p>
            <div className="mt-7 space-y-4 text-sm text-ink/70 sm:mt-8">
              <p className="detail-line flex items-center gap-2">
                <MapPin className="size-4 shrink-0" /> Available for developer roles
              </p>
              <p className="detail-line flex items-center gap-2">
                <Code2 className="size-4 shrink-0" /> React, TypeScript, Node, Supabase
              </p>
              <p className="detail-line flex items-center gap-2">
                <ShieldCheck className="size-4 shrink-0" /> Auth, RLS, roles, audit-aware workflows
              </p>
              <p className="detail-line flex items-center gap-2">
                <PenTool className="size-4 shrink-0" /> Product delivery from UI to deployment
              </p>
            </div>
          </aside>

          <div className="min-w-0">
            <h1
              className="motion-enter font-serif text-5xl leading-[0.98] text-ink sm:text-6xl lg:text-[3.4rem] xl:text-[3.75rem]"
              style={motionDelay(1, 80)}
            >
              Full-stack developer building secure, practical web applications.
            </h1>
            <p
              className="motion-enter mt-6 max-w-3xl text-lg leading-8 text-ink/70 sm:mt-7 sm:text-xl sm:leading-9"
              style={motionDelay(2, 80)}
            >
              I build React and TypeScript products backed by Node, Vercel, and Supabase. Recent work
              covers authentication, roles, user-owned data, row-level security, audit logs,
              privacy-aware workflows, and release-ready delivery from interface to deployment.
            </p>
            <div className="motion-enter mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap" style={motionDelay(3, 80)}>
              {cvActions.map((action) => (
                <Button asChild className="w-full sm:w-auto" key={action.label} size="lg" variant="outline">
                  <a href={action.href} rel="noreferrer" target="_blank">
                    <FileText />
                    {action.label}
                  </a>
                </Button>
              ))}
              <Button asChild className="w-full sm:w-auto" size="lg">
                <a href={`mailto:${contactEmail}`}>
                  <Mail />
                  Email me
                </a>
              </Button>
              <Button asChild className="w-full sm:w-auto" size="lg" variant="outline">
                <a href="https://github.com/sensennysen" rel="noreferrer" target="_blank">
                  <GitBranch />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="stack" className="scroll-reveal border-y border-ink/10 bg-card/90 px-4 py-14 text-ink sm:px-8 sm:py-16 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-9 lg:grid-cols-[0.7fr_1.3fr] lg:gap-10">
          <div>
            <h2 className="font-serif text-4xl leading-tight sm:text-5xl">Full-stack capabilities first</h2>
            <p className="mt-5 leading-7 text-ink/65">
              A balanced toolkit for frontend detail, backend reliability, protected data workflows, and deployment.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3 xl:grid-cols-4">
            {stack.map((item, index) => (
              <div
                key={item}
                className="stack-chip flex min-h-14 items-center justify-center rounded-md border border-ink/15 bg-ink/[0.04] px-3 text-center text-sm font-semibold sm:min-h-16"
                style={motionDelay(index, 0, 35)}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="security" className="px-4 py-14 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="scroll-reveal mb-10 grid gap-4 border-b border-ink/15 pb-6 lg:grid-cols-[0.65fr_1.35fr]">
            <h2 className="font-serif text-4xl leading-tight text-ink sm:text-5xl">Security-minded engineering</h2>
            <p className="max-w-3xl leading-7 text-ink/65">
              The security signal here comes from shipped app mechanics: ownership checks, protected routes,
              role-aware workflows, private files, audit trails, safer proxy behavior, and deployment headers.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {securityProofs.map((proof, index) => (
              <article
                className="security-proof scroll-reveal border border-ink/10 bg-card/75 p-4 sm:p-5"
                key={proof.title}
                style={motionDelay(index, 60)}
              >
                <div className="mb-4 flex size-10 items-center justify-center rounded-md border border-accent/35 bg-accent/10 text-accent">
                  <LockKeyhole className="size-5" />
                </div>
                <h3 className="text-lg font-bold leading-snug text-ink">{proof.title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink/68">{proof.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="border-y border-ink/10 bg-card/55 px-4 py-14 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="scroll-reveal mb-10 flex flex-col justify-between gap-5 border-b border-ink/15 pb-6 sm:flex-row sm:items-end">
            <div className="min-w-0">
              <h2 className="font-serif text-4xl leading-tight text-ink sm:text-5xl">Case studies in product delivery</h2>
              <p className="mt-4 max-w-3xl leading-7 text-ink/65">
                Two practical applications with visible product scope and security-relevant implementation choices.
              </p>
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className="project-card scroll-reveal border-ink/10 bg-paper/60"
                style={motionDelay(index, 80)}
              >
                <CardHeader className="p-5 sm:p-6">
                  <p className="text-sm font-bold uppercase text-secondary">{project.kind}</p>
                  <CardTitle className="font-serif text-3xl leading-tight text-ink sm:text-4xl">{project.title}</CardTitle>
                  <p className="pt-3 text-base leading-7 text-ink/70">{project.summary}</p>
                </CardHeader>
                <CardContent className="space-y-6 p-5 pt-0 sm:p-6 sm:pt-0">
                  <section>
                    <h4 className="case-label">Problem solved</h4>
                    <p className="mt-2 text-sm leading-6 text-ink/70">{project.problem}</p>
                  </section>

                  <section>
                    <h4 className="case-label">Stack</h4>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <Badge className="border-ink/15 bg-ink/[0.04] text-ink" key={item} variant="outline">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </section>

                  <section className="grid gap-5 md:grid-cols-2">
                    <div>
                      <h4 className="case-label">Product features</h4>
                      <ul className="case-list mt-3 space-y-2.5 text-sm leading-6 text-ink/70">
                        {project.product.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="case-label">Security highlights</h4>
                      <ul className="case-list mt-3 space-y-2.5 text-sm leading-6 text-ink/70">
                        {project.security.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </section>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <Button asChild className="flex-1 sm:flex-none">
                      <a href={project.live} rel="noreferrer" target="_blank">
                        Live demo
                        <ArrowUpRight />
                      </a>
                    </Button>
                    <Button asChild className="flex-1 sm:flex-none" variant="outline">
                      <a href={project.repo} rel="noreferrer" target="_blank">
                        GitHub
                        <GitBranch />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="story" className="px-4 pb-14 pt-14 sm:px-8 sm:pb-20 sm:pt-20 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-9 border-t border-ink/15 pt-10 sm:pt-12 lg:grid-cols-[0.55fr_1.45fr] lg:gap-10">
          <div className="scroll-reveal">
            <h2 className="font-serif text-4xl text-ink sm:text-5xl">Work story</h2>
            <p className="mt-5 leading-7 text-ink/65">
              Full-stack delivery is the lead. Teaching, coordination, and game development add range.
            </p>
          </div>
          <div className="grid gap-4">
            {timeline.map((item, index) => (
              <article
                key={item.title}
                className="timeline-item scroll-reveal grid gap-3 border border-ink/10 bg-card/75 p-4 sm:grid-cols-[9rem_1fr] sm:gap-4 sm:p-5"
                style={motionDelay(index, 60)}
              >
                <p className="font-mono text-sm text-secondary">{item.period}</p>
                <div>
                  <h3 className="text-xl font-bold text-ink">{item.title}</h3>
                  <p className="mt-2 leading-7 text-ink/70">{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-accent/35 bg-card/85 px-4 py-9 text-ink sm:px-8 sm:py-10 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-semibold">
              <BriefcaseBusiness className="size-5 shrink-0" />
              Available for security-minded full-stack product work
            </div>
            <p className="text-sm text-ink/60">&copy; 2026 Bille L. All rights reserved.</p>
          </div>
          <a className="inline-flex items-center gap-2 break-all font-semibold sm:break-normal" href={`mailto:${contactEmail}`}>
            <Mail className="size-4 shrink-0" />
            {contactEmail}
          </a>
        </div>
      </footer>
    </main>
  );
}

export default App;
