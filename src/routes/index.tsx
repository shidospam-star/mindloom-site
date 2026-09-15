import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, Asterisk, Check, MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site-shell";
import { pageMeta, projects, services, testimonials } from "@/lib/agency";

export const Route = createFileRoute("/")({
  head: () => pageMeta("MindLoom", "MindLoom designs and builds distinctive, high-performing websites for ambitious small businesses.", "/"),
  component: HomePage,
});

function HomePage() {
  return <>
    <section className="grid-lines relative overflow-hidden border-b border-border">
      <div className="mx-auto max-w-7xl px-5 pb-14 pt-14 sm:px-8 lg:pb-20 lg:pt-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_17rem] lg:items-end">
          <div><p className="eyebrow animate-fade-in">WEAVING KNOWLEDGE AND OPERATIONS TOGETHER.</p><h1 className="mt-6 max-w-5xl font-display text-5xl font-medium leading-[0.9] sm:text-7xl lg:text-[6.8rem]">Small business.<br /><span className="text-primary">Unmistakable</span> presence.</h1></div>
          <div className="pb-2"><p className="text-lg leading-7 text-muted-foreground">We build tailored digital experiences that make independent businesses look as remarkable as the work they do.</p><Button asChild variant="dark" size="lg" className="mt-7"><Link to="/contact">Build my website <ArrowUpRight /></Link></Button></div>
        </div>
        <div className="mt-14 overflow-hidden rounded-lg border border-ink-line bg-ink p-2 shadow-2xl lg:mt-20">
          <div className="relative aspect-[16/8] min-h-[320px] overflow-hidden rounded-sm bg-secondary">
            <img src={projects[0].image} alt={projects[0].alt} width={1408} height={1056} className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent p-6 pt-24 text-ink-foreground sm:p-9"><p className="text-sm text-ink-muted">Featured transformation</p><div className="mt-2 grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4"><h2 className="min-w-0 font-display text-3xl font-medium sm:text-5xl">Crumb & Co.</h2><span className="shrink-0 text-sm font-semibold text-accent">+84% online orders</span></div></div>
          </div>
        </div>
        <div className="mt-7 flex items-center justify-between text-xs font-medium uppercase text-muted-foreground"><span>Scroll to explore</span><ArrowDown className="size-4" /></div>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-[.65fr_1.35fr]"><div><p className="eyebrow">Built around you</p><Asterisk className="mt-8 size-12 text-primary" /></div><div><h2 className="font-display text-4xl font-medium leading-tight sm:text-6xl">Not another template.<br />A digital identity with a pulse.</h2><p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">Your website should feel like your best space, your finest work, and your clearest pitch—all at once. We combine strategy, design, and development into one focused process.</p></div></div>
    </section>

    <section className="border-y border-border bg-secondary/50"><div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28"><div className="flex items-end justify-between gap-5"><div><p className="eyebrow">Capabilities</p><h2 className="mt-4 font-display text-4xl font-medium sm:text-6xl">From first thought<br />to first click.</h2></div><Link to="/services" className="hidden items-center gap-2 text-sm font-semibold sm:flex">Explore services <MoveRight /></Link></div><div className="mt-14 border-t border-border">{services.map((service) => <div key={service.n} className="group grid gap-4 border-b border-border py-7 sm:grid-cols-[4rem_1fr_1fr] sm:items-center"><span className="text-xs text-primary">{service.n}</span><h3 className="font-display text-2xl font-medium transition-transform group-hover:translate-x-2 sm:text-3xl">{service.title}</h3><p className="text-sm leading-6 text-muted-foreground">{service.text}</p></div>)}</div></div></section>

    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28"><div className="grid gap-6 sm:grid-cols-2"><div className="sm:col-span-2 grid gap-5 sm:grid-cols-[1fr_auto] sm:items-end"><div><p className="eyebrow">Selected work</p><h2 className="mt-4 font-display text-4xl font-medium sm:text-6xl">Designed to be felt.<br />Built to perform.</h2></div><Button asChild variant="outline"><Link to="/portfolio">View all work <ArrowUpRight /></Link></Button></div>{projects.slice(1).map((project) => <Link to="/portfolio" key={project.title} className="group mt-6"><div className="aspect-[4/3] overflow-hidden rounded-md"><img src={project.image} alt={project.alt} loading="lazy" width={1408} height={1056} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" /></div><div className="mt-4 flex items-start justify-between gap-4"><div><h3 className="font-display text-2xl font-medium">{project.title}</h3><p className="mt-1 text-sm text-muted-foreground">{project.category}</p></div><span className="text-sm font-semibold text-primary">{project.result}</span></div></Link>)}</div></section>

    <section className="bg-ink text-ink-foreground"><div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28"><p className="eyebrow">Client perspective</p><blockquote className="mt-8 max-w-5xl font-display text-4xl font-medium leading-tight sm:text-6xl">“{testimonials[0].quote}”</blockquote><div className="mt-9 flex items-center gap-3"><span className="grid size-11 place-items-center rounded-full bg-primary font-semibold">AG</span><div><p className="text-sm font-semibold">{testimonials[0].name}</p><p className="text-sm text-ink-muted">{testimonials[0].role}</p></div></div><div className="mt-16 grid gap-4 border-t border-ink-line pt-8 sm:grid-cols-3">{["Direct senior attention", "Clear fixed scopes", "Built for real growth"].map(x => <div key={x} className="flex items-center gap-3 text-sm text-ink-muted"><Check className="size-4 text-accent" />{x}</div>)}</div></div></section>
    <CtaBand />
  </>;
}