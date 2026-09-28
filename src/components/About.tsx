import { ArrowRight, Check } from 'lucide-react';

const POINTS = [
  'Modern, responsive websites',
  'Thoughtful, user-focused design',
  'Practical digital solutions',
  'Ongoing support & maintenance',
];

export default function About() {
  return (
    <section id="about" className="bg-white py-20 lg:py-28">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Visual */}
          <div className="reveal relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-ink-900/10">
              <img
                src="https://images.pexels.com/photos/6804068/pexels-photo-6804068.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="GD Solutions team working on web development"
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/40 to-transparent" />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-4 hidden rounded-2xl border border-ink-100 bg-white p-5 shadow-xl shadow-ink-900/10 sm:block lg:-right-6">
              <p className="text-3xl font-extrabold text-brand-600">₹999</p>
              <p className="text-xs font-medium text-ink-500">Starting price / month</p>
            </div>
          </div>

          {/* Copy */}
          <div className="reveal">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
              About GD Solutions
            </p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-ink-900 sm:text-4xl lg:text-5xl">
              Technology That Makes Your Business Look Bigger.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-500">
              GD Solutions helps businesses establish a professional digital presence through
              modern websites, thoughtful design and practical digital solutions. Our focus is
              simple — create websites that look impressive, work smoothly and help businesses
              connect with more customers.
            </p>

            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {POINTS.map((p) => (
                <li key={p} className="flex items-center gap-3 text-sm font-medium text-ink-700">
                  <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand-100">
                    <Check className="h-3 w-3 text-brand-600" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>

            <a href="#contact" className="btn-primary mt-8">
              Work With Us
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
