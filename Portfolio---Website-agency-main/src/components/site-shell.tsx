import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";

const links = [
  ["Services", "/services"],
  ["Work", "/portfolio"],
  ["About", "/about"],
  ["Pricing", "/pricing"],
  ["Stories", "/testimonials"],
] as const;

export function Brand() {
  return (
    <Link to="/" className="group inline-flex items-center gap-3" aria-label="Onda home">
      <span className="grid size-9 place-items-center rounded-full bg-primary text-primary-foreground transition-transform duration-500 group-hover:rotate-45">
        <span className="size-3 rounded-full border-2 border-current" />
      </span>
      <span className="font-display text-xl font-semibold">MindLoom</span>
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto grid h-18 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center px-5 sm:flex sm:justify-between sm:px-8">
        <Brand />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {links.map(([label, to]) => (
            <Link key={to} to={to} activeProps={{ className: "text-foreground" }} inactiveProps={{ className: "text-muted-foreground" }} className="nav-link text-sm font-medium">
              {label}
            </Link>
          ))}
        </nav>
        <div className="hidden sm:block">
          <Button asChild variant="dark"><Link to="/contact">Start a project <ArrowUpRight /></Link></Button>
        </div>
        <Button className="sm:hidden" variant="ghost" size="icon" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open && (
        <nav className="border-t border-border bg-background px-5 py-5 sm:hidden" aria-label="Mobile navigation">
          <div className="grid gap-1">
            {links.map(([label, to]) => <Link key={to} to={to} onClick={() => setOpen(false)} className="rounded-md px-3 py-3 text-lg font-semibold hover:bg-secondary">{label}</Link>)}
            <Link to="/contact" onClick={() => setOpen(false)} className="mt-3 flex items-center justify-between rounded-md bg-primary px-4 py-3 font-semibold text-primary-foreground">Start a project <ArrowUpRight /></Link>
          </div>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-ink text-ink-foreground">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
          <div>
            <Brand />
            <p className="mt-5 max-w-sm text-sm leading-6 text-ink-muted">Independent digital studio crafting unmistakable websites for ambitious small businesses.</p>
          </div>
          <div className="grid grid-cols-2 gap-8 text-sm">
            <div className="grid content-start gap-3">{links.slice(0, 3).map(([label, to]) => <Link key={to} to={to} className="text-ink-muted transition-colors hover:text-ink-foreground">{label}</Link>)}</div>
            <div className="grid content-start gap-3">{links.slice(3).map(([label, to]) => <Link key={to} to={to} className="text-ink-muted transition-colors hover:text-ink-foreground">{label}</Link>)}<Link to="/contact" className="text-ink-muted transition-colors hover:text-ink-foreground">Contact</Link></div>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-ink-line pt-6 text-xs text-ink-muted sm:flex-row sm:justify-between">
          <p>© 2026 MindLoom Studio. Crafted with intent.</p><p>Small team · Big care · Global reach</p>
        </div>
      </div>
    </footer>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return <div className="min-h-screen bg-background"><SiteHeader /><main>{children}</main><SiteFooter /></div>;
}

export function PageIntro({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-16 pt-16 sm:px-8 lg:pb-24 lg:pt-24">
      <p className="eyebrow animate-fade-in">{eyebrow}</p>
      <h1 className="mt-5 max-w-5xl font-display text-5xl font-medium leading-[0.95] sm:text-7xl lg:text-8xl">{title}</h1>
      <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">{text}</p>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-8 md:grid-cols-[1fr_auto] md:items-end lg:py-24">
        <div><p className="eyebrow text-primary-foreground/70">Your next chapter</p><h2 className="mt-4 max-w-3xl font-display text-4xl font-medium leading-tight sm:text-6xl">Your business deserves a site people remember.</h2></div>
        <Button asChild variant="light" size="lg"><Link to="/contact">Let’s make it real <ArrowUpRight /></Link></Button>
      </div>
    </section>
  );
}