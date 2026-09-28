import { ArrowRight, Play, Check, Sparkles, Star, TrendingUp, Globe, Bot, Clock, IndianRupee, Zap } from 'lucide-react';

const FEATURES = ['Free Domain', 'Free Hosting', 'Mobile Responsive', 'Professional Design'];

const AI_STATS = [
  { icon: Clock, value: '70%', label: 'Time Saved', sub: 'with AI automation' },
  { icon: IndianRupee, value: '45%', label: 'Cost Reduced', sub: 'on repetitive tasks' },
  { icon: Zap, value: '3x', label: 'Faster Delivery', sub: 'AI-powered workflows' },
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-white pt-32 pb-20 lg:pt-40 lg:pb-28">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-brand-100/60 blur-3xl" />
        <div className="absolute -left-32 top-40 h-[380px] w-[380px] rounded-full bg-brand-50 blur-3xl" />
        <div className="absolute right-1/4 bottom-0 h-[260px] w-[260px] rounded-full bg-amber-100/40 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }}
        />
      </div>

      <div className="container-px relative mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          {/* Left */}
          <div>
            <div className="reveal inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-xs font-semibold text-brand-700">
              <Sparkles className="h-3.5 w-3.5" />
              Websites from ₹999/month
            </div>

            <h1 className="reveal mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-ink-900 sm:text-5xl lg:text-6xl xl:text-[4rem]">
              We Build Digital Experiences That{' '}
              <span className="relative whitespace-nowrap text-brand-600">
                Grow Businesses
                <svg
                  className="absolute -bottom-2 left-0 w-full text-brand-300"
                  viewBox="0 0 300 12"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path d="M2 9C60 3 140 3 298 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
              .
            </h1>

            <p className="reveal mt-6 max-w-xl text-lg leading-relaxed text-ink-500">
              Modern websites, AI automation and digital solutions designed to help Indian
              businesses look professional, attract customers and grow online.
            </p>

            <div className="reveal mt-8 flex flex-wrap items-center gap-4">
              <a href="#contact" className="btn-primary">
                Get Your Website
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#portfolio" className="btn-secondary">
                <Play className="h-3.5 w-3.5" />
                View Our Work
              </a>
            </div>

            {/* AI Automation Benefits */}
            <div className="reveal mt-8 max-w-lg rounded-2xl border border-brand-200/60 bg-gradient-to-br from-brand-50/80 to-white p-5 shadow-lg shadow-brand-600/5">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 text-white">
                  <Bot className="h-4 w-4" />
                </span>
                <p className="text-sm font-bold text-ink-800">AI Automation Benefits</p>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {AI_STATS.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-xl bg-white shadow-sm">
                      <stat.icon className="h-4 w-4 text-brand-600" />
                    </div>
                    <p className="mt-2 text-2xl font-extrabold text-ink-900">{stat.value}</p>
                    <p className="text-xs font-semibold text-ink-700">{stat.label}</p>
                    <p className="text-[10px] text-ink-400">{stat.sub}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing badge */}
            <div className="reveal mt-6 max-w-sm rounded-2xl border border-ink-100 bg-white p-5 shadow-xl shadow-ink-900/5">
              <p className="text-xs font-semibold uppercase tracking-wider text-ink-400">
                Starting From
              </p>
              <div className="mt-1 flex items-baseline gap-1">
                <span className="text-3xl font-extrabold text-ink-900">₹999</span>
                <span className="text-sm font-medium text-ink-400">/ month</span>
              </div>
              <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2">
                {FEATURES.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-ink-600">
                    <span className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-brand-100">
                      <Check className="h-2.5 w-2.5 text-brand-600" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right — image-based visual */}
          <div className="reveal relative hidden lg:block">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative h-[600px] w-full">
      {/* Main image card — browser frame with team photo */}
      <div className="absolute right-0 top-4 w-[460px] animate-float-slow overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-2xl shadow-ink-900/15">
        {/* Browser bar */}
        <div className="flex items-center gap-1.5 border-b border-ink-100 bg-ink-50/80 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-amber-400" />
          <span className="h-3 w-3 rounded-full bg-brand-400" />
          <div className="ml-3 flex-1 rounded-md bg-white px-3 py-1 text-[10px] text-ink-400 shadow-sm">
            yourbusiness.in
          </div>
        </div>
        {/* Hero image inside browser */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src="https://images.pexels.com/photos/7792836/pexels-photo-7792836.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="Team collaborating in a modern office"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900/30 to-transparent" />
          {/* Overlay label */}
          <div className="absolute bottom-3 left-4 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 backdrop-blur-sm">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-600">
              <Globe className="h-3 w-3 text-white" />
            </span>
            <span className="text-xs font-semibold text-ink-700">Live Website Preview</span>
          </div>
        </div>
        {/* Browser content strip */}
        <div className="space-y-3 p-4">
          <div className="flex items-center justify-between">
            <div className="h-2.5 w-28 rounded-full bg-brand-500" />
            <div className="flex gap-1.5">
              <div className="h-2 w-8 rounded-full bg-ink-100" />
              <div className="h-2 w-8 rounded-full bg-ink-100" />
              <div className="h-2 w-8 rounded-full bg-ink-100" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[0, 1, 2].map((i) => (
              <div key={i} className="space-y-1.5 rounded-lg border border-ink-100 p-2.5">
                <div className="h-6 w-6 rounded-lg bg-brand-100" />
                <div className="h-1.5 w-full rounded-full bg-ink-100" />
                <div className="h-1.5 w-2/3 rounded-full bg-ink-100" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating card 1 — AI automation image */}
      <div className="absolute -left-2 top-0 w-44 animate-float overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-xl shadow-ink-900/10">
        <img
          src="https://images.pexels.com/photos/8386357/pexels-photo-8386357.jpeg?auto=compress&cs=tinysrgb&h=400&w=300"
          alt="AI robotic hand reaching toward light, symbolizing automation"
          className="h-28 w-full object-cover"
        />
        <div className="p-3">
          <div className="flex items-center gap-1.5">
            <span className="flex h-5 w-5 items-center justify-center rounded-md bg-gradient-to-br from-brand-500 to-brand-700">
              <Bot className="h-3 w-3 text-white" />
            </span>
            <p className="text-xs font-bold text-ink-800">AI Powered</p>
          </div>
          <p className="mt-1 text-[10px] text-ink-400">Smart automation for your business</p>
        </div>
      </div>

      {/* Floating card 2 — analytics with gradient */}
      <div className="absolute bottom-10 -left-4 w-52 animate-float-slow rounded-2xl border border-ink-100 bg-white p-4 shadow-xl shadow-ink-900/10 [animation-delay:1.2s]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 text-white">
              <TrendingUp className="h-4 w-4" />
            </span>
            <p className="text-xs font-semibold text-ink-600">Visitors</p>
          </div>
          <span className="rounded-full bg-brand-100 px-2 py-0.5 text-[10px] font-bold text-brand-700">
            +38%
          </span>
        </div>
        <p className="mt-2 text-2xl font-extrabold text-ink-900">12.4k</p>
        <div className="mt-3 flex items-end gap-1.5">
          {[40, 65, 50, 80, 60, 95, 75].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm bg-gradient-to-t from-brand-400 to-brand-600"
              style={{ height: `${h * 0.28}px` }}
            />
          ))}
        </div>
      </div>

      {/* Floating card 3 — AI savings badge */}
      <div className="absolute top-2 right-2 w-44 animate-float rounded-2xl border border-brand-200 bg-gradient-to-br from-brand-600 to-brand-800 p-4 shadow-xl shadow-brand-600/20 [animation-delay:0.4s]">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm">
            <Zap className="h-4 w-4 text-white" />
          </span>
          <div>
            <p className="text-lg font-extrabold text-white">70%</p>
            <p className="text-[10px] text-brand-100">Time Saved</p>
          </div>
        </div>
        <div className="mt-3 h-1.5 w-full rounded-full bg-white/20">
          <div className="h-1.5 w-[70%] rounded-full bg-white" />
        </div>
        <p className="mt-1.5 text-[10px] text-brand-100">with AI automation</p>
      </div>

      {/* Floating card 4 — live status */}
      <div className="absolute bottom-0 right-4 w-40 animate-float rounded-2xl border border-ink-100 bg-ink-900 p-4 shadow-xl shadow-ink-900/20 [animation-delay:0.8s]">
        <div className="flex items-center gap-2">
          <span className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-brand-500">
            <Check className="h-4 w-4 text-white" />
            <span className="absolute -right-0.5 -top-0.5 flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand-500" />
            </span>
          </span>
          <div>
            <p className="text-xs font-semibold text-white">Live</p>
            <p className="text-[10px] text-ink-400">Website Published</p>
          </div>
        </div>
        <div className="mt-3 h-1.5 w-full rounded-full bg-ink-700">
          <div className="h-1.5 w-4/5 rounded-full bg-gradient-to-r from-brand-400 to-brand-600" />
        </div>
        <p className="mt-1.5 text-[10px] text-ink-400">80% Complete</p>
      </div>

      {/* Decorative gradient blob behind everything */}
      <div className="pointer-events-none absolute right-8 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-gradient-to-br from-brand-300/40 to-amber-200/30 blur-2xl" />
    </div>
  );
}
