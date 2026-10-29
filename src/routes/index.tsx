import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Compass,
  Handshake,
  Layers3,
  LifeBuoy,
  MessageSquareText,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site-shell";
import { FaqList } from "@/components/faq-list";
import { ScrollReveal } from "@/components/scroll-reveal";
import { pageMeta } from "@/lib/agency";
import { brand } from "@/lib/brand";
import { faqs } from "@/lib/faqs";
import { serviceGroups } from "@/lib/services";

const reasons = [
  ["Understand first", "We learn how your business works before recommending technology.", Compass],
  ["One team", "Design, development and delivery are coordinated from start to finish.", Handshake],
  [
    "Clear plan",
    "Written quotes, agreed milestones and practical progress updates.",
    MessageSquareText,
  ],
  ["Built to grow", "A thoughtful foundation makes future improvements easier to plan.", Layers3],
  [
    "Clear ownership",
    "Your proposal defines access and ownership for paid-for deliverables.",
    ShieldCheck,
  ],
  [
    "After launch",
    "Support options are discussed as part of your project, not left a mystery.",
    LifeBuoy,
  ],
] as const;

const process = [
  ["Discover", "Talk through your customers, goals and current challenges."],
  ["Plan & design", "Agree priorities, scope, user journeys and a written estimate."],
  ["Build", "Create the experience in clear, reviewable milestones."],
  ["Test & launch", "Check the agreed journeys, prepare the release and hand over."],
  ["Support & grow", "Plan ongoing care and improvements around real needs."],
] as const;

const audiences = [
  [
    "Startups",
    "Shape a useful first product and a clear path to launch.",
    "custom-software-development",
  ],
  [
    "Small and local businesses",
    "Make it easier for customers to understand your service and get in touch.",
    "website-development",
  ],
  [
    "Retail and D2C brands",
    "Create a straightforward storefront and shopping journey.",
    "ecommerce-development",
  ],
  [
    "Clinics and service businesses",
    "Help people find information, understand services and request an appointment.",
    "website-development",
  ],
  [
    "Schools and coaching institutes",
    "Organise course information, enquiries and digital learning journeys.",
    "website-development",
  ],
  [
    "Growing companies",
    "Connect systems, improve workflows and support new digital services.",
    "business-automation",
  ],
] as const;

const marqueeItems = ["Design", "Development", "Innovation", "Digital experiences"];

export const Route = createFileRoute("/")({
  head: () =>
    pageMeta(
      "Build digital. Grow smarter",
      "Websites, mobile apps and custom software, designed, built and supported by one dedicated team.",
      "/",
    ),
  component: HomePage,
});

function HomePage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      <section className="home-hero relative overflow-hidden">
        <div className="home-hero-grid" aria-hidden="true" />
        <div className="home-hero-glow home-hero-glow--one" aria-hidden="true" />
        <div className="home-hero-glow home-hero-glow--two" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-16 sm:px-8 sm:pb-20 sm:pt-20 lg:min-h-[680px] lg:grid-cols-[1.05fr_.95fr] lg:gap-8 lg:py-24">
          <div className="relative z-10">
            <motion.p
              key={`eyebrow-${shouldReduceMotion ? "reduced" : "animated"}`}
              className="home-eyebrow"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              <span className="home-eyebrow-dot" aria-hidden="true" />
              {brand.name} <span className="home-eyebrow-divider">/</span> {brand.tagline}
            </motion.p>
            <motion.h1
              key={`title-${shouldReduceMotion ? "reduced" : "animated"}`}
              className="home-hero-title"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              We turn bold
              <br />
              ideas into
              <br />
              <span>digital experiences.</span>
            </motion.h1>
            <motion.div
              key={`copy-${shouldReduceMotion ? "reduced" : "animated"}`}
              className="home-hero-copy"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2, ease: "easeOut" }}
            >
              <p>
                Websites, mobile apps and custom software—designed, built and supported by one
                dedicated team.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button asChild size="lg" className="home-primary-button">
                  <Link to="/contact" search={{ package: "" }}>
                    Let&apos;s build something <ArrowUpRight />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="home-secondary-button">
                  <a href="#services">
                    Explore our services <ArrowDownRight />
                  </a>
                </Button>
              </div>
              <p className="home-trust-note">
                <Check aria-hidden="true" />
                Free consultation <span>·</span> Written scope before work begins
              </p>
            </motion.div>
          </div>

          <motion.div
            key={`visual-${shouldReduceMotion ? "reduced" : "animated"}`}
            className="home-visual"
            role="img"
            aria-label="Abstract illustration of a digital product interface"
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="home-orbit home-orbit--outer" aria-hidden="true" />
            <div className="home-orbit home-orbit--inner" aria-hidden="true" />
            <motion.div
              className="home-float-card home-float-card--top"
              aria-hidden="true"
              animate={shouldReduceMotion ? false : { y: [0, -7, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="home-float-icon">
                <Sparkles />
              </span>
              <span>
                <strong>Made for people</strong>
                <small>Thoughtful by design</small>
              </span>
            </motion.div>
            <div className="home-product-card" aria-hidden="true">
              <div className="home-product-topbar">
                <span className="home-window-dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="home-product-chip">PRODUCT STUDIO</span>
                <span className="home-product-menu">•••</span>
              </div>
              <div className="home-product-content">
                <div className="home-product-sidebar">
                  <span className="home-sidebar-mark" />
                  <i />
                  <i />
                  <i />
                  <i />
                </div>
                <div className="home-product-main">
                  <div className="home-product-heading">
                    <span>
                      <small>YOUR NEXT CHAPTER</small>
                      <strong>Make it matter.</strong>
                    </span>
                    <span className="home-product-avatar">A</span>
                  </div>
                  <div className="home-product-feature">
                    <span className="home-feature-spark">✳</span>
                    <span>
                      <small>GOOD IDEAS, BUILT BETTER</small>
                      <strong>Digital, with purpose.</strong>
                    </span>
                    <ArrowUpRight />
                  </div>
                  <div className="home-product-bottom">
                    <div className="home-product-widget">
                      <span className="home-widget-label">A considered approach</span>
                      <span className="home-widget-bars">
                        <i />
                        <i />
                        <i />
                        <i />
                        <i />
                        <i />
                        <i />
                      </span>
                    </div>
                    <div className="home-product-widget home-product-widget--violet">
                      <span className="home-widget-orbit">
                        <i />
                      </span>
                      <span className="home-widget-label">Built around your goals</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <motion.div
              className="home-float-card home-float-card--bottom"
              aria-hidden="true"
              animate={shouldReduceMotion ? false : { y: [0, 7, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="home-float-check">
                <Check />
              </span>
              <span>
                <strong>From first thought</strong>
                <small>to launch and beyond</small>
              </span>
            </motion.div>
            <span className="home-visual-caption">
              Strategy meets imagination <span>↗</span>
            </span>
          </motion.div>
        </div>
        <a href="#services" className="home-scroll-cue">
          Scroll to explore <span aria-hidden="true">↓</span>
        </a>
      </section>

      <div
        className="home-marquee"
        aria-label="Design, development, innovation, digital experiences"
      >
        <div className="home-marquee-track" aria-hidden="true">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span key={`${item}-${index}`}>
              {item} <i>✳</i>
            </span>
          ))}
        </div>
      </div>

      <section id="services" className="home-section home-services scroll-mt-24">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <ScrollReveal>
            <div className="home-section-heading">
              <div>
                <p className="eyebrow">What we do</p>
                <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold sm:text-6xl">
                  The right tools for your next big move.
                </h2>
              </div>
              <Link to="/services" className="home-text-link">
                Explore all services <ArrowRight />
              </Link>
            </div>
          </ScrollReveal>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {serviceGroups.map((group, index) => (
              <ScrollReveal key={group.name} delay={index * 0.1}>
                <article className={`service-panel service-panel--${index % 3}`}>
                  <div className="service-panel-top">
                    <span className="service-panel-index">0{index + 1}</span>
                    <span className="service-panel-icon" aria-hidden="true">
                      {index === 0 ? <Code2 /> : index === 1 ? <Sparkles /> : <Layers3 />}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-semibold">{group.name}</h3>
                  <p className="mt-2 min-h-12 text-sm leading-6 text-muted-foreground">
                    {group.description}
                  </p>
                  <ul className="service-list">
                    {group.services.map((service) => (
                      <li key={service.slug}>
                        <Link
                          to="/services/$slug"
                          params={{ slug: service.slug }}
                          className="group"
                        >
                          <span>{service.title}</span>
                          <ArrowUpRight aria-hidden="true" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </article>
              </ScrollReveal>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Every engagement starts with the challenge—not a preselected technology.
          </p>
        </div>
      </section>

      <section className="home-about">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-20 sm:px-8 lg:grid-cols-[.75fr_1.25fr] lg:items-end lg:gap-16 lg:py-24">
          <ScrollReveal>
            <p className="eyebrow">About ApexTechInfo</p>
            <p className="home-about-kicker">Technology, thoughtfully applied.</p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-display text-3xl font-semibold leading-tight sm:text-5xl">
              We build digital tools around real people and real work.
            </h2>
            <p className="mt-5 max-w-2xl leading-7 text-muted-foreground">
              Every project begins with the business need—not a predetermined tool. We clarify what
              people need to do, agree a practical plan, and build with care.
            </p>
            <Link to="/about" className="home-text-link mt-6">
              More about our approach <ArrowRight />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <section className="home-approach">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <ScrollReveal>
            <div className="home-approach-intro">
              <p className="eyebrow home-eyebrow-light">Why ApexTechInfo</p>
              <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold sm:text-6xl">
                Practical thinking.
                <br />
                <span>Clear delivery.</span>
              </h2>
              <p>
                Good technology is not about adding more. It is about making the right next step
                easier to see—and easier to take.
              </p>
            </div>
          </ScrollReveal>
          <div className="mt-14 grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map(([title, text, Icon], index) => (
              <ScrollReveal key={title} delay={(index % 3) * 0.08}>
                <article className="approach-card">
                  <Icon className="size-6" aria-hidden="true" />
                  <h3 className="mt-4 font-display text-xl font-semibold">{title}</h3>
                  <p className="mt-2 leading-7">{text}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section home-process">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <ScrollReveal>
            <p className="eyebrow">How we work</p>
            <div className="home-section-heading">
              <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold sm:text-6xl">
                A clear path from idea to launch.
              </h2>
              <p className="max-w-sm leading-7 text-muted-foreground">
                No mystery steps. You know what we&apos;re working toward, and what comes next.
              </p>
            </div>
          </ScrollReveal>
          <ol className="process-track mt-14">
            {process.map(([title, text], index) => (
              <ScrollReveal key={title} delay={index * 0.07}>
                <li className="process-step">
                  <span className="process-number">0{index + 1}</span>
                  <h3 className="mt-5 font-display text-xl font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
                </li>
              </ScrollReveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="home-audiences">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <ScrollReveal>
            <p className="eyebrow">Who we help</p>
            <div className="home-section-heading">
              <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold sm:text-6xl">
                Built around the people you serve.
              </h2>
              <Link to="/who-we-help" className="home-text-link">
                See who we work with <ArrowRight />
              </Link>
            </div>
          </ScrollReveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {audiences.map(([title, text, slug], index) => (
              <ScrollReveal key={title} delay={(index % 3) * 0.08}>
                <article className="audience-card">
                  <span className="audience-marker" aria-hidden="true">
                    ✳
                  </span>
                  <h3 className="font-display text-xl font-semibold">{title}</h3>
                  <p className="mt-2 leading-7 text-muted-foreground">{text}</p>
                  <Link to="/services/$slug" params={{ slug }} className="home-text-link mt-5">
                    Explore a relevant service <ArrowRight />
                  </Link>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="home-work">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:gap-16 lg:py-28">
          <ScrollReveal>
            <p className="eyebrow">Selected work</p>
            <h2 className="mt-4 font-display text-4xl font-semibold sm:text-6xl">
              Real work.
              <br />
              <span className="home-gradient-text">No made-up stories.</span>
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-muted-foreground">
              We publish project details only when they&apos;re approved and verified. That means no
              sample clients, invented outcomes or borrowed logos.
            </p>
            <Link to="/portfolio" className="home-text-link mt-6">
              Visit the work page <ArrowRight />
            </Link>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <div className="work-placeholder">
              <div className="work-placeholder-art" aria-hidden="true">
                <span className="work-art-ring work-art-ring--one" />
                <span className="work-art-ring work-art-ring--two" />
                <span className="work-art-core">
                  <Code2 />
                </span>
                <span className="work-art-spark work-art-spark--one">✳</span>
                <span className="work-art-spark work-art-spark--two">✳</span>
              </div>
              <div className="work-placeholder-copy">
                <span>CASE STUDIES</span>
                <strong>Thoughtful work deserves a true story.</strong>
                <p>Approved projects will be shared here.</p>
              </div>
              <ArrowUpRight className="work-placeholder-arrow" aria-hidden="true" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="home-faq">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
          <ScrollReveal>
            <div className="home-section-heading">
              <div>
                <p className="eyebrow">FAQs</p>
                <h2 className="mb-9 mt-4 font-display text-4xl font-semibold sm:text-5xl">
                  Useful answers before we begin.
                </h2>
              </div>
              <Link to="/faq" className="home-text-link">
                All FAQs <ArrowRight />
              </Link>
            </div>
            <FaqList questions={faqs} />
          </ScrollReveal>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
