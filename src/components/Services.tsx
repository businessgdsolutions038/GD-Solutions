import { ArrowRight, Code, Briefcase, ShoppingCart, LayoutTemplate, Search, Palette } from 'lucide-react';

const SERVICES = [
  {
    num: '01',
    icon: Code,
    title: 'Website Design & Development',
    desc: 'Modern, responsive and conversion-focused websites for businesses of every size.',
  },
  {
    num: '02',
    icon: Briefcase,
    title: 'Business Websites',
    desc: 'Professional websites for local businesses, startups, professionals and service providers.',
  },
  {
    num: '03',
    icon: ShoppingCart,
    title: 'E-Commerce Development',
    desc: 'Online stores designed to showcase products and generate sales.',
  },
  {
    num: '04',
    icon: LayoutTemplate,
    title: 'Landing Pages',
    desc: 'High-converting landing pages for campaigns, products and services.',
  },
  {
    num: '05',
    icon: Search,
    title: 'SEO & Digital Marketing',
    desc: 'Strategies designed to improve visibility, traffic and online presence.',
  },
  {
    num: '06',
    icon: Palette,
    title: 'Branding & Design',
    desc: 'Logos, visual identity, social media creatives and marketing materials.',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 lg:py-28">
      <div className="container-px mx-auto max-w-7xl">
        <div className="reveal max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Our Services
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl lg:text-5xl">
            Everything You Need to Build Your Digital Presence
          </h2>
          <p className="mt-4 text-lg text-ink-500">
            From websites to branding, we cover the full spectrum of digital services your
            business needs to succeed online.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <article
              key={s.num}
              className="reveal group relative overflow-hidden rounded-2xl border border-ink-100 bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-2xl hover:shadow-brand-600/10"
            >
              <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-brand-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative flex items-start justify-between">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-all duration-300 group-hover:bg-brand-600 group-hover:text-white">
                  <s.icon className="h-6 w-6" />
                </span>
                <span className="text-3xl font-extrabold text-ink-100 transition-colors duration-300 group-hover:text-brand-200">
                  {s.num}
                </span>
              </div>
              <h3 className="relative mt-6 text-xl font-bold text-ink-900">{s.title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-ink-500">{s.desc}</p>
              <a
                href="#contact"
                className="relative mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition-colors duration-200 hover:text-brand-700"
              >
                Explore Service
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
