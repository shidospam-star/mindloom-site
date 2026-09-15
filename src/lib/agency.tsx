import bakery from "@/assets/portfolio-bakery.jpg";
import architecture from "@/assets/portfolio-architecture.jpg";
import skincare from "@/assets/portfolio-skincare.jpg";

export const projects = [
  { title: "Crumb & Co.", category: "Hospitality · Commerce", result: "+84% online orders", image: bakery, alt: "Artisan sourdough loaves with burgundy packaging" },
  { title: "Atelier North", category: "Architecture · Portfolio", result: "3.2× more enquiries", image: architecture, alt: "Architectural model on a dark studio desk" },
  { title: "Alba Botanics", category: "Beauty · E-commerce", result: "+61% conversion", image: skincare, alt: "Botanical skincare products among green leaves" },
];

export const services = [
  { n: "01", title: "Strategy & positioning", text: "We clarify what makes your business worth choosing, then turn it into a focused digital story." },
  { n: "02", title: "Web design", text: "Distinctive art direction, interface design and responsive systems tailored to your brand." },
  { n: "03", title: "Development", text: "Fast, accessible builds with thoughtful motion, clean editing tools and room to grow." },
  { n: "04", title: "Launch & care", text: "A measured launch, performance checks and ongoing support that keeps your site sharp." },
];

export const packages = [
  { name: "Signature", price: "$3,800", note: "For a focused launch", features: ["Up to 5 bespoke pages", "Brand-led art direction", "Mobile-first development", "Foundational search setup"] },
  { name: "Momentum", price: "$6,900", note: "For growing businesses", featured: true, features: ["Up to 10 bespoke pages", "Copy direction & content system", "Advanced interactions", "Analytics and 30-day support"] },
  { name: "Flagship", price: "From $11k", note: "For an ambitious leap", features: ["Complex or commerce website", "Deep strategy workshop", "Custom integrations", "Quarterly growth partnership"] },
];

export const testimonials = [
  { quote: "Mindloom gave our business the confidence of a national brand without losing what makes us local.", name: "Arun K G", role: "Founder, LearnGrid." },
  { quote: "The process was clear, considered and genuinely collaborative. Our enquiries changed almost overnight.", name: "Aravind", role: "Director, LearnGrid" },
  { quote: "They understood the feeling we wanted before we could articulate it—and made the site perform, too.", name: "Madhavan", role: "Founder, Judy&co" },
];

export const pageMeta = (title: string, description: string, path: string) => ({
  meta: [
    { title: `${title} — MindLoom` },
    { name: "description", content: description },
    { property: "og:title", content: `${title} — MindLoom` },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: path },
    { name: "twitter:card", content: "summary_large_image" },
  ],
  links: [{ rel: "canonical", href: path }],
});