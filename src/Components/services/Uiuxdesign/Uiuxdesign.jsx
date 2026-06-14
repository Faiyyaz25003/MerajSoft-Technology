"use client";
import React, { useState, useEffect } from "react";
import {
  MousePointer2,
  ArrowUpRight,
  ArrowRight,
  Layers,
  Monitor,
  Smartphone,
  Cloud,
  BarChart3,
  Workflow,
  MousePointerClick,
  Gauge,
  Component,
  Users,
  X,
} from "lucide-react";

const services = [
  {
    id: "F01",
    icon: Layers,
    title: "Custom UI/UX Design",
    desc: "Pixel-accurate interfaces built around how your users actually think — not how your database happens to be structured.",
  },
  {
    id: "F02",
    icon: Monitor,
    title: "Web Application Design",
    desc: "Marketing sites, client portals and complex web apps designed to convert visitors and scale across every breakpoint.",
  },
  {
    id: "F03",
    icon: Smartphone,
    title: "Mobile App Design",
    desc: "Native-feeling iOS and Android experiences using interaction patterns your users already know by heart.",
  },
  {
    id: "F04",
    icon: Cloud,
    title: "SaaS Product Design",
    desc: "End-to-end design for SaaS platforms — onboarding, billing, settings, the unglamorous screens that decide retention.",
  },
  {
    id: "F05",
    icon: BarChart3,
    title: "Dashboard & Analytics UI",
    desc: "Dense data made readable. Charts, tables and filters that surface insight first, not noise.",
  },
  {
    id: "F06",
    icon: Workflow,
    title: "Wireframes & User Flows",
    desc: "Low-fidelity blueprints that map every screen, decision and edge case before a single pixel gets styled.",
  },
  {
    id: "F07",
    icon: MousePointerClick,
    title: "Clickable Prototypes",
    desc: "Interactive Figma prototypes you can test with users, demo to stakeholders, or hand straight to engineering.",
  },
  {
    id: "F08",
    icon: Gauge,
    title: "UX Optimization",
    desc: "Audits and redesigns that fix drop-off points, confusing flows and friction inside your existing product.",
  },
  {
    id: "F09",
    icon: Component,
    title: "Design Systems & Style Guides",
    desc: "Reusable components, tokens and documentation so every new screen ships consistent — and fast.",
  },
];

const process = [
  {
    n: "01",
    title: "Discover",
    desc: "Stakeholder interviews, competitor audits and user research to define the real problem worth solving.",
  },
  {
    n: "02",
    title: "Define",
    desc: "Information architecture, user flows and wireframes that map the whole product before any styling begins.",
  },
  {
    n: "03",
    title: "Design",
    desc: "High-fidelity UI, design systems and interactive prototypes ready to hand off and build.",
  },
  {
    n: "04",
    title: "Deliver",
    desc: "Developer handoff, QA support and iteration based on real usage data once the product is live.",
  },
];

const work = [
  {
    name: "Finly",
    tag: "Web Application Design",
    dims: "1440 × 1024",
    img: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=900&q=80",
    desc: "A complete redesign of Finly's banking dashboard — reducing average task completion time by 38% through clear information hierarchy and smarter transaction grouping.",
    client: "Finly Inc.",
    year: "2024",
    platform: "Web (Desktop)",
    tools: "Figma, Lottie",
  },
  {
    name: "Drift",
    tag: "Mobile App Design",
    dims: "375 × 812",
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=80",
    desc: "iOS-first ride tracking app with an interaction model built around one-handed use. Every gesture maps to a native pattern — nothing invented, nothing foreign.",
    client: "Drift Mobility",
    year: "2024",
    platform: "iOS & Android",
    tools: "Figma, Principle",
  },
  {
    name: "Northstar",
    tag: "Wireframes & User Flows",
    dims: "Sketch / Flow",
    img: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=900&q=80",
    desc: "End-to-end user flows for a B2B SaaS platform, mapping 14 distinct user roles across onboarding, billing, and admin modules.",
    client: "Northstar HQ",
    year: "2023",
    platform: "Web (B2B SaaS)",
    tools: "FigJam, Notion",
  },
  {
    name: "Vela",
    tag: "SaaS Product Design",
    dims: "1280 × 900",
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80",
    desc: "Full product design for Vela's project management SaaS — from empty states and onboarding to settings and billing, the screens no one designs until they must.",
    client: "Vela Labs",
    year: "2024",
    platform: "Web (Desktop + Mobile)",
    tools: "Figma, Zeplin",
  },
  {
    name: "Pulse",
    tag: "Dashboard & Analytics UI",
    dims: "1920 × 1080",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
    desc: "Dense analytics dashboard for a logistics company — 40+ data points surfaced clearly using layered typography and a strict visual hierarchy that doesn't require a legend.",
    client: "Pulse Analytics",
    year: "2023",
    platform: "Web (Wide Desktop)",
    tools: "Figma, Recharts",
  },
  {
    name: "Kora",
    tag: "Design System",
    dims: "Tokens + Components",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80",
    desc: "A comprehensive design system covering 80+ components, 6 theme variants, dark mode tokens, and full documentation — shipped and adopted by a 14-person engineering team.",
    client: "Kora Studio",
    year: "2024",
    platform: "Cross-platform",
    tools: "Figma, Storybook",
  },
];

/* ── Modal ─────────────────────────────────────────────────────────────── */
const Modal = ({ item, onClose }) => {
  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // Close on Escape
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  if (!item) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(20,20,28,0.72)",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="ux-modal">
        <button
          className="ux-modal-close"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={16} />
        </button>
        <img src={item.img} alt={item.name} className="ux-modal-img" />
        <div className="ux-modal-body">
          <p className="ux-modal-tag">{item.tag}</p>
          <h2 className="ux-display ux-modal-title">{item.name}</h2>
          <span className="ux-mono ux-modal-dims">Canvas: {item.dims}</span>
          <p className="ux-modal-desc">{item.desc}</p>
          <div className="ux-modal-meta">
            <div className="ux-modal-meta-item">
              <label>CLIENT</label>
              <span>{item.client}</span>
            </div>
            <div className="ux-modal-meta-item">
              <label>YEAR</label>
              <span>{item.year}</span>
            </div>
            <div className="ux-modal-meta-item">
              <label>PLATFORM</label>
              <span>{item.platform}</span>
            </div>
            <div className="ux-modal-meta-item">
              <label>TOOLS</label>
              <span>{item.tools}</span>
            </div>
          </div>
          <button className="ux-modal-cta">
            View case study <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

/* ── Work Card ─────────────────────────────────────────────────────────── */
const WorkCard = ({ w, onClick }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="ux-work-card ux-artboard"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="ux-handle tl" />
      <div className="ux-handle tr" />
      <div className="ux-handle bl" />
      <div className="ux-handle br" />
      <div className="ux-work-img-wrap">
        <img
          src={w.img}
          alt={`${w.name} — ${w.tag}`}
          style={{
            transform: hovered ? "scale(1.06)" : "scale(1)",
            filter: hovered ? "grayscale(0%)" : "grayscale(15%)",
          }}
        />
        <div
          className="ux-read-more-overlay"
          style={{
            opacity: hovered ? 1 : 0,
            pointerEvents: hovered ? "auto" : "none",
          }}
        >
          <button className="ux-read-more-btn" onClick={onClick}>
            Read more <ArrowRight size={13} />
          </button>
        </div>
      </div>
      <div className="ux-card-foot">
        <div className="ux-card-top-row">
          <h3 className="ux-display ux-card-name">{w.name}</h3>
          <span className="ux-mono ux-card-dims">{w.dims}</span>
        </div>
        <p className="ux-service-tag">{w.tag}</p>
      </div>
    </div>
  );
};

/* ── Page ──────────────────────────────────────────────────────────────── */
const Uiuxdesign = () => {
  const [activeWork, setActiveWork] = useState(null);

  return (
    <div className="uiux-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=Space+Mono:wght@400;700&display=swap');

        .uiux-page {
          --canvas: #FAFAF8;
          --ink: #14141C;
          --ink-soft: #6E6E7A;
          --pink: #FF3D6E;
          --violet: #5B5FEF;
          --line: #E2E0DB;
          background: var(--canvas);
          color: var(--ink);
          font-family: 'Inter', sans-serif;
          position: relative;
          overflow-x: hidden;
        }
        .uiux-page *, .uiux-page *::before, .uiux-page *::after { box-sizing: border-box; }

        .ux-display { font-family: 'Space Grotesk', sans-serif; }
        .ux-mono { font-family: 'Space Mono', monospace; letter-spacing: .04em; }

        /* Ruler */
        .ux-ruler {
          height: 24px; width: 100%;
          border-bottom: 1px solid var(--line);
          background-image:
            repeating-linear-gradient(to right, var(--line) 0, var(--line) 1px, transparent 1px, transparent 80px),
            repeating-linear-gradient(to right, var(--line) 0, var(--line) 1px, transparent 1px, transparent 16px);
          background-size: 100% 14px, 100% 7px;
          background-position: bottom left;
          background-repeat: no-repeat, repeat-x;
        }

        /* Section frame */
        .ux-frame { position: relative; padding: 72px 48px; border-bottom: 1px solid var(--line); }
        @media (max-width: 768px) { .ux-frame { padding: 48px 20px; } }

        .ux-frame-label {
          font-family: 'Space Mono', monospace; font-size: 11px; color: var(--pink);
          display: flex; justify-content: space-between; align-items: baseline;
          padding-bottom: 8px; margin-bottom: 8px;
          border-bottom: 1px dashed var(--line); text-transform: uppercase;
        }
        .ux-frame-label .dim { color: var(--ink-soft); letter-spacing: .08em; }

        /* Artboard handles */
        .ux-handle { position: absolute; width: 9px; height: 9px; background: var(--canvas); border: 1.5px solid var(--pink); z-index: 2; }
        .ux-handle.tl { top: -1px; left: -1px; } .ux-handle.tr { top: -1px; right: -1px; }
        .ux-handle.bl { bottom: -1px; left: -1px; } .ux-handle.br { bottom: -1px; right: -1px; }
        .ux-artboard { position: relative; border: 1px solid var(--line); }

        /* Animated cursor */
        .ux-cursor { position: absolute; color: var(--pink); animation: ux-float 3.4s ease-in-out infinite; pointer-events: none; }
        @keyframes ux-float { 0%,100% { transform: translate(0,0) rotate(0deg); } 50% { transform: translate(5px,-7px) rotate(-4deg); } }

        /* Buttons */
        .ux-btn-primary { background: var(--ink); color: var(--canvas); padding: 13px 28px; font-size: 13px; font-weight: 600; border: none; cursor: pointer; display: inline-flex; align-items: center; gap: 8px; transition: background .2s, transform .2s; }
        .ux-btn-primary:hover { background: var(--pink); transform: translateY(-2px); }
        .ux-btn-secondary { border: 1.5px solid var(--ink); color: var(--ink); padding: 12px 24px; font-size: 13px; font-weight: 600; background: none; cursor: pointer; transition: border-color .2s, color .2s, transform .2s; }
        .ux-btn-secondary:hover { border-color: var(--pink); color: var(--pink); transform: translateY(-2px); }

        /* Service cards */
        .ux-service-card { border: 1px solid var(--line); padding: 28px; transition: border-color .25s, transform .25s; position: relative; background: var(--canvas); }
        .ux-service-card:hover { border-color: var(--pink); transform: translateY(-3px); }
        .ux-svc-icon { width: 40px; height: 40px; background: #EEF0FF; border-radius: 8px; display: flex; align-items: center; justify-content: center; margin-bottom: 20px; }
        .ux-service-tag { font-family: 'Space Mono', monospace; font-size: 10px; color: var(--pink); }

        /* Work grid */
        .ux-work-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: var(--line); }
        @media (max-width: 640px) { .ux-work-grid { grid-template-columns: 1fr; } }
        @media (min-width: 641px) and (max-width: 900px) { .ux-work-grid { grid-template-columns: repeat(2, 1fr); } }

        .ux-work-card { background: var(--canvas); cursor: pointer; }
        .ux-work-img-wrap { position: relative; overflow: hidden; }
        .ux-work-img-wrap img { width: 100%; height: 220px; object-fit: cover; display: block; transition: transform .5s cubic-bezier(.25,.46,.45,.94), filter .4s ease; }

        .ux-read-more-overlay { position: absolute; inset: 0; background: rgba(20,20,28,.6); display: flex; align-items: center; justify-content: center; transition: opacity .3s ease; }
        .ux-read-more-btn { background: var(--canvas); color: var(--ink); font-family: 'Space Mono', monospace; font-size: 11px; font-weight: 700; padding: 11px 24px; border: none; cursor: pointer; display: flex; align-items: center; gap: 8px; transition: background .2s, color .2s; }
        .ux-read-more-btn:hover { background: var(--pink); color: #fff; }

        .ux-card-foot { padding: 16px 18px; border-top: 1px solid var(--line); }
        .ux-card-top-row { display: flex; align-items: center; justify-content: space-between; margin-bottom: 4px; }
        .ux-card-name { font-weight: 600; font-size: 15px; }
        .ux-card-dims { font-size: 10px; color: var(--ink-soft); }

        /* Section header */
        .ux-sec-header { display: flex; align-items: flex-end; justify-content: space-between; gap: 16px; margin-bottom: 36px; flex-wrap: wrap; }
        .ux-link-underline { text-decoration: underline; text-decoration-color: var(--pink); text-underline-offset: 4px; }

        /* ── MODAL ── */
        .ux-modal {
          background: var(--canvas);
          width: 100%; max-width: 580px;
          position: relative;
          border: 1px solid var(--line);
          max-height: 88vh;
          overflow-y: auto;
          animation: ux-modal-in .28s cubic-bezier(.25,.46,.45,.94);
        }
        @keyframes ux-modal-in {
          from { opacity: 0; transform: translateY(18px) scale(.97); }
          to   { opacity: 1; transform: none; }
        }
        .ux-modal-close {
          position: absolute; top: 14px; right: 16px;
          background: none; border: none; cursor: pointer;
          color: var(--ink-soft); z-index: 10;
          width: 32px; height: 32px;
          display: flex; align-items: center; justify-content: center;
          border-radius: 50%;
          transition: background .2s, color .2s;
        }
        .ux-modal-close:hover { background: var(--line); color: var(--pink); }
        .ux-modal-img { width: 100%; height: 260px; object-fit: cover; display: block; }
        .ux-modal-body { padding: 28px 32px 36px; }
        .ux-modal-tag { font-family: 'Space Mono', monospace; font-size: 10px; color: var(--pink); text-transform: uppercase; margin-bottom: 10px; }
        .ux-modal-title { font-size: 26px; font-weight: 700; line-height: 1.2; margin-bottom: 8px; }
        .ux-modal-dims { font-size: 10px; color: var(--ink-soft); display: block; margin-bottom: 18px; }
        .ux-modal-desc { font-size: 14px; line-height: 1.8; color: var(--ink-soft); margin-bottom: 28px; }
        .ux-modal-meta { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; border-top: 1px solid var(--line); padding-top: 20px; margin-bottom: 28px; }
        .ux-modal-meta-item label { display: block; font-family: 'Space Mono', monospace; font-size: 9px; color: var(--pink); text-transform: uppercase; margin-bottom: 5px; letter-spacing: .06em; }
        .ux-modal-meta-item span { font-size: 13px; font-weight: 500; }
        .ux-modal-cta { background: var(--ink); color: var(--canvas); border: none; padding: 13px 28px; font-family: 'Space Mono', monospace; font-size: 11px; letter-spacing: .04em; cursor: pointer; display: inline-flex; align-items: center; gap: 8px; transition: background .2s; }
        .ux-modal-cta:hover { background: var(--pink); }

        /* Dark CTA section */
        .ux-dark { background: var(--ink); color: var(--canvas); }
        .ux-dark .ux-frame-label { border-bottom-color: #333; }
        .ux-dark .ux-frame-label .dim { color: #888; }

        /* Process */
        .ux-process-step { padding-left: 20px; border-left: 1px dashed var(--line); }
        .ux-step-num { font-family: 'Space Mono', monospace; font-size: 11px; color: var(--pink); }
        .ux-step-title { font-family: 'Space Grotesk', sans-serif; font-size: 18px; font-weight: 700; margin: 8px 0; }
        .ux-step-desc { font-size: 13px; line-height: 1.75; color: var(--ink-soft); }
      `}</style>

      <div className="ux-ruler" />

      {/* ── HERO ── */}
      <section className="ux-frame">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="ux-frame-label">
              <span>UI/UX DESIGN STUDIO</span>
              <span className="dim">Hero / 01</span>
            </div>
            <h1
              className="ux-display text-4xl md:text-5xl font-bold leading-tight mb-5"
              style={{ letterSpacing: "-0.5px" }}
            >
              Design that disappears into the experience.
            </h1>
            <p
              className="text-base md:text-lg max-w-md mb-8"
              style={{ color: "var(--ink-soft)", lineHeight: 1.75 }}
            >
              We design web apps, mobile apps and SaaS dashboards that feel
              obvious the first time — and even better the hundredth.
            </p>
            <div className="flex flex-wrap items-center gap-3 relative">
              <a href="#work" className="ux-btn-primary">
                View our work <ArrowRight size={15} />
              </a>
              <a href="#contact" className="ux-btn-secondary">
                Book a discovery call
              </a>
              <MousePointer2
                className="ux-cursor hidden md:block"
                size={22}
                style={{ top: "-26px", left: "218px" }}
              />
            </div>

            <div className="grid grid-cols-3 gap-6 mt-14 max-w-sm">
              {[
                ["120+", "Products shipped"],
                ["40+", "SaaS dashboards"],
                ["98%", "Client retention"],
              ].map(([num, lbl]) => (
                <div key={lbl}>
                  <p className="ux-display text-2xl font-bold">{num}</p>
                  <p
                    className="text-xs mt-1"
                    style={{ color: "var(--ink-soft)" }}
                  >
                    {lbl}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="ux-artboard">
            <div className="ux-handle tl" />
            <div className="ux-handle tr" />
            <div className="ux-handle bl" />
            <div className="ux-handle br" />
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
              alt="Analytics dashboard UI"
              className="w-full object-cover"
              style={{ display: "block", minHeight: "380px" }}
            />
            <div
              className="ux-mono text-[10px] px-3 py-1.5 absolute bottom-3 left-3"
              style={{
                background: "var(--canvas)",
                border: "1px solid var(--line)",
              }}
            >
              Dashboard &amp; Analytics UI
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="ux-frame">
        <div className="ux-frame-label">
          <span>SERVICES</span>
          <span className="dim">F01 — F10</span>
        </div>
        <div className="mb-12 max-w-xl">
          <h2
            className="ux-display text-3xl md:text-4xl font-bold mb-4"
            style={{ letterSpacing: "-0.3px" }}
          >
            Ten deliverables. One design language.
          </h2>
          <p
            style={{ color: "var(--ink-soft)", fontSize: 15, lineHeight: 1.75 }}
          >
            Whatever stage your product is at — first wireframe or full redesign
            — these are the pieces we put on the table.
          </p>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px"
          style={{ background: "var(--line)" }}
        >
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.id} className="ux-service-card">
                <div className="ux-svc-icon">
                  <Icon size={20} style={{ color: "var(--violet)" }} />
                </div>
                <span className="ux-service-tag block mb-2">{s.id}</span>
                <h3 className="ux-display text-base font-semibold mb-2">
                  {s.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--ink-soft)" }}
                >
                  {s.desc}
                </p>
              </div>
            );
          })}
          {/* F10 wide */}
          <div className="ux-service-card sm:col-span-2 lg:col-span-3 flex items-center gap-8 flex-wrap">
            <div className="ux-svc-icon flex-shrink-0">
              <Users size={20} style={{ color: "var(--violet)" }} />
            </div>
            <div className="flex-1">
              <span className="ux-service-tag block mb-1">F10</span>
              <h3 className="ux-display text-base font-semibold mb-2">
                Usability Testing &amp; Research
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--ink-soft)" }}
              >
                We watch real users navigate your product so you don't have to
                guess. Moderated sessions, heatmaps and surveys, turned into a
                prioritized backlog your team can act on immediately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SELECTED WORK ── */}
      <section id="work" className="ux-frame">
        <div className="ux-frame-label">
          <span>SELECTED WORK</span>
          <span className="dim">6 / 6 projects</span>
        </div>
        <div className="ux-sec-header">
          <h2
            className="ux-display text-3xl md:text-4xl font-bold"
            style={{ letterSpacing: "-0.3px" }}
          >
            A few recent screens.
          </h2>
          <a
            href="#contact"
            className="ux-mono text-xs flex items-center gap-2 ux-link-underline"
          >
            See full case studies <ArrowUpRight size={14} />
          </a>
        </div>
        <div className="ux-work-grid">
          {work.map((w) => (
            <WorkCard key={w.name} w={w} onClick={() => setActiveWork(w)} />
          ))}
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section id="process" className="ux-frame">
        <div className="ux-frame-label">
          <span>PROCESS</span>
          <span className="dim">4 stages</span>
        </div>
        <div className="mb-12 max-w-xl">
          <h2
            className="ux-display text-3xl md:text-4xl font-bold mb-4"
            style={{ letterSpacing: "-0.3px" }}
          >
            How a project moves with us.
          </h2>
          <p
            style={{ color: "var(--ink-soft)", fontSize: 15, lineHeight: 1.75 }}
          >
            Every engagement follows the same backbone — predictable for you,
            flexible enough for whatever the product throws at us.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {process.map((p) => (
            <div key={p.n} className="ux-process-step">
              <div className="ux-step-num">{p.n}</div>
              <h3 className="ux-step-title">{p.title}</h3>
              <p className="ux-step-desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── MODAL ── */}
      {activeWork && (
        <Modal item={activeWork} onClose={() => setActiveWork(null)} />
      )}
    </div>
  );
};

export default Uiuxdesign;
