import { Search, PenTool, Palette, Code, Rocket, LifeBuoy } from 'lucide-react';

const STEPS = [
  { num: '01', icon: Search, title: 'Discover', desc: 'Understand your business, audience and goals.' },
  { num: '02', icon: PenTool, title: 'Plan', desc: 'Create the sitemap, content structure and visual direction.' },
  { num: '03', icon: Palette, title: 'Design', desc: 'Develop the visual interface and user experience.' },
  { num: '04', icon: Code, title: 'Build', desc: 'Develop the responsive website.' },
  { num: '05', icon: Rocket, title: 'Launch', desc: 'Test, optimize and publish.' },
  { num: '06', icon: LifeBuoy, title: 'Support', desc: 'Continue improving your digital presence.' },
];

export default function Process() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-px mx-auto max-w-7xl">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Our Process
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl lg:text-5xl">
            How We Bring Your Website to Life
          </h2>
          <p className="mt-4 text-lg text-ink-500">
            A clear, step-by-step process that keeps you informed at every stage.
          </p>
        </div>

        <div className="relative mt-16">
          {/* Horizontal line for desktop */}
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-ink-200 to-transparent lg:block" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-6 lg:gap-4">
            {STEPS.map((step) => (
              <div key={step.num} className="reveal relative">
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-ink-100 bg-white shadow-lg shadow-ink-900/5 transition-all duration-300 hover:border-brand-300 hover:shadow-brand-600/10">
                    <step.icon className="h-6 w-6 text-brand-600" />
                    <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-ink-900 text-[10px] font-bold text-white">
                      {step.num}
                    </span>
                  </div>
                  <h3 className="mt-5 text-base font-bold text-ink-900">{step.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
