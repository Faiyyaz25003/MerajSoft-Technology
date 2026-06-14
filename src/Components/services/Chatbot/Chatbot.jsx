import {
  ArrowRight,
  Check,
  Bot,
  BrainCircuit,
  MessageCircle,
  Database,
  ShoppingCart,
  BarChart3,
  ClipboardList,
  Workflow,
  Code2,
  Rocket,
  LifeBuoy,
  Globe,
  AppWindow,
  Mic,
  Users,
} from "lucide-react";

// -----------------------------------------------------------------------
// Data
// -----------------------------------------------------------------------

const services = [
  {
    number: "01",
    icon: Bot,
    title: "Custom Chatbot Design",
    description:
      "Every business talks differently — we design conversation flows that match your brand's tone, goals, and customer journey from the very first message.",
  },
  {
    number: "02",
    icon: BrainCircuit,
    title: "AI / NLP Training",
    description:
      "Not just scripted replies, but real understanding. We train your bot on intents, entities, and FAQs so it responds naturally and accurately.",
  },
  {
    number: "03",
    icon: MessageCircle,
    title: "Multi-Platform Integration",
    description:
      "Your chatbot will work flawlessly on WhatsApp, Website, Instagram, and Telegram. One brain, every channel your customers use.",
  },
  {
    number: "04",
    icon: Database,
    title: "CRM & Database Integration",
    description:
      "Connect your bot to Sheets, CRMs or custom databases — capture leads, store conversations, and sync data automatically.",
  },
  {
    number: "05",
    icon: ShoppingCart,
    title: "E-Commerce Bot Setup",
    description:
      "Want to sell through chat? Product catalogs, order taking, payment links, and order tracking — a complete shopping assistant.",
  },
  {
    number: "06",
    icon: BarChart3,
    title: "Analytics & Optimization",
    description:
      "Want better conversions? Conversation analytics, drop-off tracking, and continuous fine-tuning — we keep your bot improving.",
  },
];

const pricingPlans = [
  {
    tag: "BEST FOR SMALL BUSINESSES",
    name: "Starter",
    price: "₹8,000",
    pages: "Up to 50 Intents / FAQs",
    features: [
      "Basic FAQ Chatbot",
      "Website Widget",
      "Lead Capture Form",
      "Basic Flow Setup",
      "1 Month Support",
    ],
    delivery: "5–7 days",
    cta: "Choose Starter",
    highlight: false,
    accent: "text-blue-600 border-blue-600 hover:bg-blue-50",
  },
  {
    tag: "MOST POPULAR",
    name: "Growth",
    price: "₹18,000",
    pages: "Up to 150 Intents / FAQs",
    features: [
      "Everything in Starter",
      "WhatsApp + Website Bot",
      "AI / NLP Training",
      "CRM Integration",
      "Conversation Analytics",
      "3 Months Support",
    ],
    delivery: "10–15 days",
    cta: "Choose Growth",
    highlight: true,
    accent: "bg-orange-500 hover:bg-orange-600 text-white",
  },
  {
    tag: "FOR SERIOUS BRANDS",
    name: "Pro",
    price: "₹35,000+",
    pages: "Unlimited Intents",
    features: [
      "Everything in Growth",
      "Multi-Platform (WhatsApp, IG, Telegram)",
      "E-Commerce / Order Bot",
      "Custom AI Model Training",
      "Live Agent Handoff",
      "6 Months Support",
    ],
    delivery: "20–30 days",
    cta: "Choose Pro",
    highlight: false,
    accent: "text-violet-600 border-violet-600 hover:bg-violet-50",
  },
];

const processSteps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Discovery Meeting",
    description:
      "We understand your business, customer queries, and goals. 30-minute meeting — completely free.",
  },
  {
    number: "02",
    icon: Workflow,
    title: "Conversation Design",
    description:
      "We map out conversation flows and decision trees. Development starts only after your approval.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Development & Training",
    description:
      "Clean integration, AI/NLP training on real queries — bot built for WhatsApp, Web, or both.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Testing & Launch",
    description:
      "We test on real conversations across devices and channels — then we go live.",
  },
  {
    number: "05",
    icon: LifeBuoy,
    title: "Support & Optimization",
    description:
      "We stay with you after launch — improving responses, adding intents, and tracking performance.",
  },
];

const otherServices = [
  {
    icon: Globe,
    title: "Website Designing",
    gradient: "from-blue-600 to-sky-400",
  },
  {
    icon: AppWindow,
    title: "App Development",
    gradient: "from-violet-600 to-indigo-400",
  },
  {
    icon: Mic,
    title: "Voice Bot Setup",
    gradient: "from-emerald-500 to-teal-400",
  },
  {
    icon: Users,
    title: "Lead Generation",
    gradient: "from-orange-500 to-amber-400",
  },
];

// -----------------------------------------------------------------------
// Page
// -----------------------------------------------------------------------

export default function Chatbot() {
  return (
    <main className="bg-white">
      {/* ---------------------------------------------------------------- */}
      {/* HERO */}
      {/* ---------------------------------------------------------------- */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-blue-900 text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div
          className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-sky-400 opacity-20 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
            Application Services
          </p>

          <h1 className="mt-5 max-w-3xl text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl">
            <span className="block text-white">Chatbot</span>
            <span className="block bg-gradient-to-r from-sky-300 to-blue-200 bg-clip-text text-transparent">
              Development Services
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            We don&apos;t just build chatbots — we build your 24/7 digital sales
            &amp; support team. Smart conversations + reliable automation =
            results that matter.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#get-quote"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition-transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-sky-500/20"
            >
              Get Free Quote
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#our-work"
              className="inline-flex items-center gap-2 rounded-full border border-white px-6 py-3 text-sm font-semibold text-white opacity-80 transition-colors hover:opacity-100 hover:bg-white hover:bg-opacity-10"
            >
              See Our Work
            </a>
          </div>

          <nav className="mt-12 text-sm text-slate-400" aria-label="Breadcrumb">
            <span className="text-sky-300">Home</span>
            <span className="mx-2 text-slate-500">/</span>
            <span className="text-slate-300">Chatbot Development Services</span>
          </nav>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* OUR VALUABLE SERVICES */}
      {/* ---------------------------------------------------------------- */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Application Services
            </p>
            <span className="mt-2 block h-1 w-12 rounded-full bg-blue-600" />

            <h2 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl">
              Our Valuable Services
            </h2>

            <p className="mt-6 text-base leading-relaxed text-slate-500">
              Our chatbot development services offer a complete solution for
              businesses wanting to automate conversations, capture leads, and
              support customers around the clock. We combine conversation design
              expertise with AI/NLP proficiency to build chatbots that feel
              natural, helpful, and on-brand.
            </p>

            <p className="mt-4 text-base leading-relaxed text-slate-500">
              Whether you&apos;re launching your first WhatsApp bot, upgrading
              an existing assistant, or automating your entire sales funnel —
              we&apos;ve got you covered. Partner with us to build something
              that saves time and drives results.
            </p>
          </div>

          {/* Abstract chat interface mockup */}
          <div className="relative">
            <div
              className="pointer-events-none absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-br from-blue-100 to-sky-50 blur-2xl"
              aria-hidden="true"
            />
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/10">
              {/* Chat header */}
              <div className="flex items-center gap-3 border-b border-slate-100 bg-blue-950 px-4 py-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white bg-opacity-10 text-white">
                  <Bot className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    Support Assistant
                  </p>
                  <p className="flex items-center gap-1.5 text-xs text-sky-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Online
                  </p>
                </div>
              </div>

              {/* Chat body */}
              <div className="space-y-3 bg-slate-50 p-5">
                <div className="max-w-[75%] rounded-2xl rounded-tl-sm bg-white px-4 py-2.5 text-sm text-slate-600 shadow-sm">
                  Hi! 👋 How can I help you today?
                </div>

                <div className="ml-auto max-w-[75%] rounded-2xl rounded-tr-sm bg-blue-600 px-4 py-2.5 text-sm text-white">
                  I want to know about your pricing plans.
                </div>

                <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-white px-4 py-2.5 text-sm text-slate-600 shadow-sm">
                  Sure! We have 3 plans — Starter, Growth, and Pro. Want me to
                  send the details?
                </div>

                <div className="ml-auto max-w-[60%] rounded-2xl rounded-tr-sm bg-blue-600 px-4 py-2.5 text-sm text-white">
                  Yes please 🙂
                </div>

                {/* Quick reply chips */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {["View Plans", "Talk to Human", "Book a Demo"].map(
                    (chip) => (
                      <span
                        key={chip}
                        className="rounded-full border border-blue-200 bg-white px-3 py-1.5 text-xs font-semibold text-blue-600"
                      >
                        {chip}
                      </span>
                    ),
                  )}
                </div>
              </div>

              {/* Input bar */}
              <div className="flex items-center gap-3 border-t border-slate-100 bg-white px-4 py-3">
                <span className="h-2 flex-1 rounded-full bg-slate-100" />
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Service cards grid */}
        <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.number}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5"
              >
                <span className="pointer-events-none absolute right-4 top-2 text-6xl font-extrabold text-slate-100 transition-colors group-hover:text-blue-50">
                  {service.number}
                </span>

                <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="relative mt-5 text-lg font-bold text-slate-900">
                  {service.title}
                </h3>
                <p className="relative mt-3 text-sm leading-relaxed text-slate-500">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* PRICING */}
      {/* ---------------------------------------------------------------- */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Chatbot Pricing Packages
          </h2>
          <p className="mt-3 text-base text-slate-500">
            No hidden charges. What you see is what you get.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-2xl border bg-white p-8 transition-transform ${
                  plan.highlight
                    ? "border-orange-400 shadow-2xl shadow-orange-200 lg:-translate-y-4"
                    : "border-slate-200 shadow-sm hover:-translate-y-1 hover:shadow-lg"
                }`}
              >
                {plan.highlight && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-orange-500 px-4 py-1 text-xs font-bold text-white shadow-md">
                    ★ Most Popular
                  </span>
                )}

                <p
                  className={`text-xs font-bold uppercase tracking-[0.15em] ${
                    plan.highlight
                      ? "text-orange-500"
                      : plan.name === "Pro"
                        ? "text-violet-600"
                        : "text-blue-600"
                  }`}
                >
                  {plan.tag}
                </p>

                <h3 className="mt-2 text-2xl font-extrabold text-slate-900">
                  {plan.name}
                </h3>

                <p
                  className={`mt-4 text-4xl font-extrabold ${
                    plan.highlight
                      ? "text-orange-500"
                      : plan.name === "Pro"
                        ? "text-violet-600"
                        : "text-blue-600"
                  }`}
                >
                  {plan.price}
                </p>

                <p className="mt-1 text-sm text-slate-400">{plan.pages}</p>

                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-slate-600"
                    >
                      <Check
                        className={`mt-0.5 h-4 w-4 flex-shrink-0 ${
                          plan.highlight
                            ? "text-orange-500"
                            : plan.name === "Pro"
                              ? "text-violet-600"
                              : "text-blue-600"
                        }`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 border-t border-slate-100 pt-4">
                  <p className="text-xs text-slate-400">Delivery Time</p>
                  <p
                    className={`text-sm font-bold ${
                      plan.highlight
                        ? "text-orange-500"
                        : plan.name === "Pro"
                          ? "text-violet-600"
                          : "text-blue-600"
                    }`}
                  >
                    {plan.delivery}
                  </p>
                </div>

                <a
                  href="#get-quote"
                  className={`mt-6 inline-flex items-center justify-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold transition-colors ${plan.accent}`}
                >
                  {plan.cta}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* PROCESS */}
      {/* ---------------------------------------------------------------- */}
      <section className="mx-auto max-w-5xl px-6 py-20 sm:px-10 lg:px-16">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
          How It Works
        </p>
        <span className="mt-2 block h-1 w-12 rounded-full bg-blue-600" />

        <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
          Our Simple Process
        </h2>
        <p className="mt-3 text-base text-slate-500">
          From idea to a live chatbot in 5 simple steps.
        </p>

        <div className="mt-12 space-y-6">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === processSteps.length - 1;
            return (
              <div key={step.number} className="relative flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-2 border-blue-200 bg-blue-50 text-sm font-bold text-blue-600">
                    {step.number}
                  </div>
                  {!isLast && <span className="mt-1 w-px flex-1 bg-blue-200" />}
                </div>

                <div className="mb-2 flex w-full items-start gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-6 transition-colors hover:border-blue-100 hover:bg-blue-50">
                  <div className="hidden h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-white text-blue-600 shadow-sm sm:flex">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-500">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* OTHER SERVICES */}
      {/* ---------------------------------------------------------------- */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                Our Services
              </p>
              <span className="mt-2 block h-1 w-12 rounded-full bg-blue-600" />
              <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                Other Services
              </h2>
            </div>

            <a
              href="#all-services"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
            >
              View All Services
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {otherServices.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  <div
                    className={`flex h-40 items-center justify-center bg-gradient-to-br ${service.gradient}`}
                  >
                    <Icon className="h-12 w-12 text-white" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-base font-bold text-slate-900">
                      {service.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* CTA */}
      {/* ---------------------------------------------------------------- */}
      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-blue-900 py-16 text-center text-white">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Ready to put your support team on autopilot?
          </h2>
          <p className="mt-4 text-slate-300">
            Tell us about your business — we&apos;ll get back to you with a free
            chatbot consultation within 24 hours.
          </p>
          <a
            href="#get-quote"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-semibold text-slate-950 transition-transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-sky-500/20"
          >
            Get Free Quote
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </main>
  );
}
