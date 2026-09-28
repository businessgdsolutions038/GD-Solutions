import { Wallet, Monitor, Smartphone, Zap, Target, Headphones } from 'lucide-react';

const FEATURES = [
  {
    num: '01',
    icon: Wallet,
    title: 'Affordable',
    desc: 'Professional websites without unnecessary agency costs.',
  },
  {
    num: '02',
    icon: Monitor,
    title: 'Modern Design',
    desc: 'Clean, modern interfaces designed to make your business look credible.',
  },
  {
    num: '03',
    icon: Smartphone,
    title: 'Mobile First',
    desc: 'Every website is designed to work beautifully across phones, tablets and desktops.',
  },
  {
    num: '04',
    icon: Zap,
    title: 'Fast & Optimized',
    desc: 'Performance-focused websites with clean implementation.',
  },
  {
    num: '05',
    icon: Target,
    title: 'Business Focused',
    desc: 'Every page is designed around your business goals and customer journey.',
  },
  {
    num: '06',
    icon: Headphones,
    title: 'Ongoing Support',
    desc: 'We help businesses maintain and improve their digital presence.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-ink-50/50 py-20 lg:py-28">
      <div className="container-px mx-auto max-w-7xl">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Why GD Solutions
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl lg:text-5xl">
            Why Businesses Choose GD Solutions
          </h2>
          <p className="mt-4 text-lg text-ink-500">
            We combine design, technology and business understanding to deliver websites that
            actually work for your business.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <div
              key={f.num}
              className="reveal group relative overflow-hidden rounded-2xl border border-ink-100 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink-900/5"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-all duration-300 group-hover:bg-brand-600 group-hover:text-white">
                  <f.icon className="h-5 w-5" />
                </span>
                <span className="text-2xl font-extrabold text-ink-100 transition-colors duration-300 group-hover:text-brand-200">
                  {f.num}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-bold text-ink-900">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
