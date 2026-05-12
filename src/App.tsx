import {
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  Code2,
  GitBranch,
  LayoutDashboard,
  Mail,
  MapPin,
  PenTool,
  Sparkles,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const stack = [
  "React",
  "TypeScript",
  "Node.js",
  "Express.js",
  "REST APIs",
  "GraphQL",
  "MongoDB",
  "PostgreSQL",
  "Supabase",
  "Tailwind CSS",
  "Vercel",
  "Google Cloud",
];

const projects = [
  {
    title: "mpqcheck PH",
    kind: "Community app",
    copy:
      "A social queue-checking product with auth, posts, comments, notifications, admin tools, audit logs, and live queue visibility.",
    live: "https://mpqcheckph.vercel.app",
    repo: "https://github.com/sensennysen/maimai-queue-check",
  },
  {
    title: "Ledger - Personal Wallet",
    kind: "Finance tool",
    copy:
      "A personal finance workspace with charts, reports, credit card management, forecasting, budgets, reminders, and persisted data.",
    live: "https://ledger-personal.vercel.app",
    repo: "https://github.com/sensennysen/personal_wallet_app",
  },
];

const timeline = [
  {
    period: "2023 - 2026",
    title: "Full Stack Application Developer",
    body: "React, Node.js, APIs, auth, roles, audit logs, reports, and production support for complex application workflows.",
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

function App() {
  return (
    <main className="overflow-hidden">
      <header className="px-4 py-4 sm:px-8 sm:py-5 lg:px-12">
        <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 border-b border-ink/15 pb-4">
          <a className="max-w-[15rem] text-sm font-semibold leading-tight sm:max-w-none sm:text-base" href="#top">Bille Janssen Lagarde</a>
          <div className="flex items-center gap-1 overflow-x-auto text-sm text-ink/65 sm:overflow-visible">
            <a className="rounded-md px-3 py-2 hover:bg-ink/5" href="#stack">Stack</a>
            <a className="rounded-md px-3 py-2 hover:bg-ink/5" href="#projects">Projects</a>
            <a className="rounded-md px-3 py-2 hover:bg-ink/5" href="#story">Story</a>
          </div>
        </nav>
      </header>

      <section id="top" className="px-4 pb-14 pt-8 sm:px-8 sm:pb-20 sm:pt-10 lg:px-12 lg:pt-16">
        <div className="mx-auto grid max-w-7xl gap-9 lg:grid-cols-[0.72fr_1.28fr] lg:gap-12">
          <aside className="border-l-4 border-cyan-500 pl-5 sm:pl-6">
            <p className="max-w-xl font-serif text-2xl leading-tight text-ink sm:text-3xl lg:text-2xl">Full-stack developer based in Valenzuela City, Philippines.</p>
            <div className="mt-7 space-y-4 text-sm text-ink/70 sm:mt-8">
              <p className="flex items-center gap-2"><MapPin className="size-4 shrink-0" /> Available for product work</p>
              <p className="flex items-center gap-2"><Code2 className="size-4 shrink-0" /> React, Node.js, data workflows</p>
              <p className="flex items-center gap-2"><PenTool className="size-4 shrink-0" /> Product-minded UI delivery</p>
            </div>
          </aside>

          <div className="min-w-0">
            <h1 className="font-serif text-[clamp(2.9rem,15vw,5rem)] leading-[0.95] text-ink sm:text-7xl lg:text-8xl">
              Useful software for teams, tools, and products that need momentum.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-ink/70 sm:mt-7 sm:text-xl sm:leading-9">
              I build across the stack: interfaces, APIs, authentication, database workflows, deployment, and the practical details that get a product from ticket to release.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="w-full sm:w-auto" size="lg"><a href="mailto:bille.lagarde.personal@gmail.com"><Mail />Email me</a></Button>
              <Button asChild className="w-full sm:w-auto" size="lg" variant="outline"><a href="https://github.com/sensennysen" rel="noreferrer" target="_blank"><GitBranch />GitHub</a></Button>
            </div>
          </div>
        </div>
      </section>

      <section id="stack" className="bg-ink px-4 py-14 text-paper sm:px-8 sm:py-16 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-9 lg:grid-cols-[0.7fr_1.3fr] lg:gap-10">
          <div>
            <LayoutDashboard className="mb-5 size-9 text-cyan-300" />
            <h2 className="font-serif text-4xl leading-tight sm:text-5xl">Full-stack capabilities first.</h2>
            <p className="mt-5 leading-7 text-paper/70">A balanced toolkit for frontend detail, backend reliability, data persistence, and deployment.</p>
          </div>
          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3 xl:grid-cols-4">
            {stack.map((item) => (
              <div key={item} className="flex min-h-14 items-center justify-center rounded-md border border-paper/15 bg-paper/[0.06] px-3 text-center text-sm font-semibold sm:min-h-16">{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="px-4 py-14 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-5 border-b border-ink/15 pb-6 sm:flex-row sm:items-end">
            <div className="min-w-0">
              <Badge className="mb-4 bg-cyan-500 text-slate-950">Selected projects</Badge>
              <h2 className="font-serif text-4xl leading-tight text-ink sm:text-5xl">Two shipped products, two different problem spaces.</h2>
            </div>
            <Sparkles className="hidden size-10 text-cyan-500 sm:block" />
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {projects.map((project) => (
              <Card key={project.title} className="border-ink/15 bg-paper/85">
                <CardHeader className="p-5 sm:p-6">
                  <p className="text-sm font-bold uppercase text-cyan-700">{project.kind}</p>
                  <CardTitle className="font-serif text-3xl leading-tight text-ink sm:text-4xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-5 pt-0 sm:p-6 sm:pt-0">
                  <p className="text-base leading-8 text-ink/70 sm:min-h-28 sm:text-lg">{project.copy}</p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Button asChild className="flex-1 sm:flex-none"><a href={project.live} rel="noreferrer" target="_blank">Live site<ArrowUpRight /></a></Button>
                    <Button asChild className="flex-1 sm:flex-none" variant="outline"><a href={project.repo} rel="noreferrer" target="_blank">Repository<GitBranch /></a></Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="story" className="px-4 pb-14 sm:px-8 sm:pb-20 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-9 border-t border-ink/15 pt-10 sm:pt-12 lg:grid-cols-[0.55fr_1.45fr] lg:gap-10">
          <div>
            <BookOpen className="mb-5 size-8 text-cyan-500" />
            <h2 className="font-serif text-4xl text-ink sm:text-5xl">Work story</h2>
            <p className="mt-5 leading-7 text-ink/65">Full-stack delivery is the lead. Teaching, coordination, and game development add range.</p>
          </div>
          <div className="grid gap-4">
            {timeline.map((item) => (
              <article key={item.title} className="grid gap-3 border border-ink/15 bg-white/55 p-4 sm:grid-cols-[9rem_1fr] sm:gap-4 sm:p-5">
                <p className="font-mono text-sm text-cyan-700">{item.period}</p>
                <div>
                  <h3 className="text-xl font-bold text-ink">{item.title}</h3>
                  <p className="mt-2 leading-7 text-ink/70">{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-cyan-500 px-4 py-9 text-slate-950 sm:px-8 sm:py-10 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 font-semibold"><BriefcaseBusiness className="size-5 shrink-0" />Available for full-stack product work</div>
          <a className="inline-flex items-center gap-2 break-all font-semibold sm:break-normal" href="mailto:bille.lagarde.personal@gmail.com"><Mail className="size-4 shrink-0" />bille.lagarde.personal@gmail.com</a>
        </div>
      </footer>
    </main>
  );
}

export default App;

