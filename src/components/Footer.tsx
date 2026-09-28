import { Mail, Phone, MessageCircle, MapPin, Instagram, Facebook, Linkedin, ArrowRight } from 'lucide-react';

const NAV_LINKS = ['Home', 'Services', 'Portfolio', 'Pricing', 'About', 'Contact'];
const SERVICE_LINKS = [
  'Website Design',
  'Business Websites',
  'E-Commerce',
  'Landing Pages',
  'SEO',
  'Branding',
];

export default function Footer() {
  return (
    <footer className="bg-ink-950 pt-16 pb-8 text-ink-400">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1.5fr] lg:gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-white">
                <span className="text-sm font-extrabold tracking-tight">GD</span>
              </span>
              <span className="text-base font-extrabold tracking-tight text-white">
                GD SOLUTIONS
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              Websites & Digital Solutions for Growing Businesses.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { icon: Instagram, label: 'Instagram' },
                { icon: Facebook, label: 'Facebook' },
                { icon: Linkedin, label: 'LinkedIn' },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-ink-400 transition-all duration-300 hover:border-brand-400/40 hover:bg-brand-600 hover:text-white"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Navigation</h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase()}`}
                    className="group inline-flex items-center gap-1 text-sm text-ink-400 transition-colors hover:text-brand-400"
                  >
                    {l}
                    <ArrowRight className="h-3 w-3 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Services</h3>
            <ul className="mt-4 space-y-2.5">
              {SERVICE_LINKS.map((l) => (
                <li key={l}>
                  <a
                    href="#services"
                    className="text-sm text-ink-400 transition-colors hover:text-brand-400"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Contact</h3>
            <ul className="mt-4 space-y-3.5">
              <li className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 text-brand-500" />
                <a href="mailto:hello@gdsolutions.in" className="hover:text-brand-400">
                  hello@gdsolutions.in
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 text-brand-500" />
                <a href="tel:+910000000000" className="hover:text-brand-400">
                  +91 00000 00000
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <MessageCircle className="h-4 w-4 text-brand-500" />
                <a href="#" className="hover:text-brand-400">
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <MapPin className="h-4 w-4 text-brand-500" />
                <span>India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-ink-500">© 2026 GD Solutions. All rights reserved.</p>
          <p className="text-xs text-ink-500">
            Website Design from <span className="font-semibold text-brand-500">₹999/month</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
