import { PramanikStudio } from "@/components/veritas-studio";
import { pitchSignals, processSteps, trustStats } from "@/lib/demo-content";

export default function Page() {
  const cloudflareSteps = [
    {
      step: "1",
      title: "Create the Cloudflare account",
      text: "Sign in, then open Workers & Pages. This is where you will host the frontend and the thin proxy."
    },
    {
      step: "2",
      title: "Install the Cloudflare CLI",
      text: "Run npm i -g wrangler or use npx wrangler. Log in with wrangler login so the CLI can publish your project."
    },
    {
      step: "3",
      title: "Deploy the frontend",
      text: "For this UI, use Cloudflare Pages or Pages + Next support. Keep the app client-heavy and stateless."
    },
    {
      step: "4",
      title: "Add the proxy worker",
      text: "Create one worker for API key protection only. It should not store, cache, or log request content."
    }
  ];

  const cloudflareChecklist = [
    "Set environment variables for the API keys in the Cloudflare dashboard.",
    "Turn off logging for request bodies and keep the worker stateless.",
    "Use a separate route like /api/* for the proxy calls.",
    "Test image, text, and video input paths locally before publishing.",
    "Connect a custom domain only after the preview deployment works."
  ];

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#fbfcfb_0%,#f7f3ea_42%,#f8faf8_100%)]">
      <div className="absolute inset-0 -z-10 bg-pramanik-grid bg-[length:24px_24px] opacity-[0.35]" />
      <div className="absolute inset-0 -z-10 bg-pramanik-glow opacity-100" />

      <section className="mx-auto flex max-w-7xl flex-col gap-12 px-6 py-8 lg:px-10 lg:py-10">
        <header className="flex flex-col gap-4 rounded-[2rem] border border-white/70 bg-white/80 px-6 py-5 shadow-soft backdrop-blur md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.36em] text-brand-700">Pramanik</p>
            <h1 className="mt-2 font-display text-4xl leading-none text-ink-900 md:text-5xl">
              The trust layer for digital content.
            </h1>
          </div>
          <div className="max-w-xl text-sm leading-6 text-ink-600 md:text-right">
            Privacy-first AI detection for images, text, and video. All analysis stays client-side except for
            tiny, key-protected API calls through a thin proxy that never stores or logs user content.
          </div>
        </header>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-white/70 bg-white/88 p-6 shadow-soft backdrop-blur md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-700">Round 1 Demo</p>
            <h2 className="mt-4 font-display text-5xl leading-[0.95] text-ink-900 md:text-7xl">
              Detect AI-generated content before it spreads.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-ink-700 md:text-lg">
              Pramanik is built for the competition demo today and the browser extension tomorrow. It analyzes
              user-provided content in real time, explains why something looks synthetic, and keeps the entire
              workflow privacy-preserving.
            </p>

            <div className="mt-8 grid gap-3 md:grid-cols-3">
              {trustStats.map((stat) => (
                <article key={stat.label} className="rounded-3xl border border-ink-200 bg-ink-50 px-4 py-5">
                  <p className="text-3xl font-semibold text-ink-900">{stat.value}</p>
                  <p className="mt-2 text-sm font-medium text-ink-600">{stat.label}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className="rounded-[2rem] border border-brand-200 bg-ink-900 p-6 text-white shadow-lift md:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.36em] text-brand-200">Why this wins</p>
            <ul className="mt-5 space-y-4 text-sm leading-6 text-ink-100/90">
              {pitchSignals.map((signal) => (
                <li key={signal.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="font-semibold text-white">{signal.title}</p>
                  <p className="mt-1 text-ink-100/85">{signal.description}</p>
                </li>
              ))}
            </ul>
          </aside>
        </section>

        <PramanikStudio />

        <section className="grid gap-4 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <article key={step.title} className="rounded-[1.75rem] border border-white/70 bg-white/85 p-5 shadow-soft">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-100 text-sm font-semibold text-brand-800">
                0{index + 1}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-ink-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-ink-600">{step.description}</p>
            </article>
          ))}
        </section>

        <section className="rounded-[2rem] border border-white/70 bg-white/88 p-6 shadow-soft backdrop-blur">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-brand-700">Cloudflare setup</p>
              <h2 className="mt-2 font-display text-3xl text-ink-900">Start and complete deployment on Cloudflare</h2>
            </div>
            <p className="max-w-2xl text-sm leading-6 text-ink-600">
              Use Cloudflare Pages for the website and a separate Worker for API protection. Keep both pieces stateless
              so the privacy pitch stays true.
            </p>
          </div>

          <div className="mt-5 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="grid gap-4">
              {cloudflareSteps.map((item) => (
                <article key={item.step} className="rounded-[1.5rem] border border-ink-200 bg-ink-50 p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-100 text-sm font-semibold text-brand-800">
                      {item.step}
                    </div>
                    <p className="text-lg font-semibold text-ink-900">{item.title}</p>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-ink-700">{item.text}</p>
                </article>
              ))}
            </div>

            <div className="rounded-[1.5rem] border border-brand-200 bg-brand-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-700">Checklist</p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-ink-800">
                {cloudflareChecklist.map((item) => (
                  <li key={item} className="rounded-2xl border border-white/70 bg-white/80 px-4 py-3 shadow-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-5 rounded-[1.5rem] border border-brand-200 bg-brand-50 p-5 text-sm leading-6 text-ink-800">
            Recommended route: <span className="font-semibold">Cloudflare Pages</span> for the website and{' '}
            <span className="font-semibold">Cloudflare Workers</span> for the API proxy. That gives you a free,
            privacy-friendly setup with one deployment target for the demo and a clean path into Round 2.
          </div>
        </section>
      </section>
    </main>
  );
}
