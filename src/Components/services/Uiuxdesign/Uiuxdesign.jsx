"use client";
import React, { useState } from "react";
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
  Mail,
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
    title: "User Experience Optimization",
    desc: "Audits and redesigns that fix drop-off points, confusing flows and friction inside your existing product.",
  },
  {
    id: "F09",
    icon: Component,
    title: "Design Systems & Style Guides",
    desc: "Reusable components, tokens and documentation, so every new screen ships consistent — and fast.",
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
    desc: "High-fidelity UI, design systems and interactive prototypes that are ready to hand off and build.",
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
    desc: "End-to-end user flows and low-fidelity wireframes for a B2B SaaS platform, mapping 14 distinct user roles across onboarding, billing, and admin modules.",
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

const Modal = ({ item, onClose }) => {
  if (!item) return null;
  return (
    <div
      className="ux-modal-bg"
      onClick={(e) => e.target.classList.contains("ux-modal-bg") && onClose()}
    >
      <div className="ux-modal">
        <button className="ux-modal-close" onClick={onClose}>
          <X size={18} />
        </button>
        <div className="ux-modal-img-wrap">
          <img src={item.img} alt={item.name} className="ux-modal-img" />
        </div>
        <div className="ux-modal-body">
          <p className="ux-modal-tag">{item.tag}</p>
          <h2 className="ux-display ux-modal-title">{item.name}</h2>
          <p className="ux-mono ux-modal-dims">Canvas: {item.dims}</p>
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
            filter: hovered ? "grayscale(0%)" : "grayscale(20%)",
          }}
        />
        <div
          className="ux-read-more-overlay"
          style={{ opacity: hovered ? 1 : 0 }}
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
        .ux-mono { font-family: 'Space Mono', monospace; letter-spacing: 0.04em; }

        .ux-ruler {
          height: 22px;
          width: 100%;
          border-bottom: 1px solid var(--line);
          background-image:
            repeating-linear-gradient(to right, var(--line) 0, var(--line) 1px, transparent 1px, transparent 80px),
            repeating-linear-gradient(to right, var(--line) 0, var(--line) 1px, transparent 1px, transparent 16px);
          background-size: 100% 14px, 100% 7px;
          background-position: bottom left, bottom left;
          background-repeat: no-repeat, repeat-x;
        }

        .ux-frame {
          position: relative;
          padding: 64px 24px;
          border-bottom: 1px solid var(--line);
        }
        @media (min-width: 768px) {
          .ux-frame { padding: 96px 56px; }
        }

        .ux-frame-label {
          font-family: 'Space Mono', monospace;
          font-size: 11px;
          color: var(--pink);
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          padding-bottom: 5px;
          margin-bottom: 5px;
          border-bottom: 1px dashed var(--line);
          text-transform: uppercase;
        }
        .ux-frame-label .dim { color: var(--ink-soft); letter-spacing: 0.08em; }

        .ux-handle {
          position: absolute;
          width: 9px;
          height: 9px;
          background: var(--canvas);
          border: 1.5px solid var(--pink);
          z-index: 2;
        }
        .ux-handle.tl { top: -1px; left: -1px; }
        .ux-handle.tr { top: -1px; right: -1px; }
        .ux-handle.bl { bottom: -1px; left: -1px; }
        .ux-handle.br { bottom: -1px; right: -1px; }

        .ux-artboard {
          position: relative;
          border: 1px solid var(--line);
        }

        .ux-cursor {
          position: absolute;
          color: var(--pink);
          animation: ux-float 3.4s ease-in-out infinite;
          pointer-events: none;
        }
        @keyframes ux-float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(5px, -7px) rotate(-4deg); }
        }

        .ux-btn-primary {
          background: var(--ink);
          color: var(--canvas);
          transition: background 0.2s ease, transform 0.2s ease;
        }
        .ux-btn-primary:hover { background: var(--pink); transform: translateY(-2px); }

        .ux-btn-secondary {
          border: 1px solid var(--ink);
          color: var(--ink);
          transition: border-color 0.2s ease, color 0.2s ease, transform 0.2s ease;
        }
        .ux-btn-secondary:hover { border-color: var(--pink); color: var(--pink); transform: translateY(-2px); }

        .ux-service-card {
          border: 1px solid var(--line);
          transition: border-color 0.25s ease, transform 0.25s ease;
          position: relative;
        }
        .ux-service-card:hover {
          border-color: var(--pink);
          transform: translateY(-3px);
        }
        .ux-service-tag {
          font-family: 'Space Mono', monospace;
          font-size: 11px;
          color: var(--pink);
        }

        /* Work Grid */
        .ux-work-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: var(--line);
        }
        @media (max-width: 640px) {
          .ux-work-grid { grid-template-columns: 1fr; }
        }
        @media (min-width: 641px) and (max-width: 900px) {
          .ux-work-grid { grid-template-columns: repeat(2, 1fr); }
        }

        .ux-work-card {
          background: var(--canvas);
          cursor: pointer;
        }
        .ux-work-img-wrap {
          position: relative;
          overflow: hidden;
        }
        .ux-work-img-wrap img {
          width: 100%;
          height: 210px;
          object-fit: cover;
          display: block;
          transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94), filter 0.4s ease;
        }

        .ux-read-more-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(20, 20, 28, 0.55);
          transition: opacity 0.3s ease;
          pointer-events: none;
        }
        .ux-work-card:hover .ux-read-more-overlay {
          pointer-events: auto;
        }
        .ux-read-more-btn {
          background: var(--canvas);
          color: var(--ink);
          font-family: 'Space Mono', monospace;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.04em;
          padding: 10px 22px;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: background 0.2s ease, color 0.2s ease;
        }
        .ux-read-more-btn:hover {
          background: var(--pink);
          color: #fff;
        }

        .ux-card-foot {
          padding: 16px 18px 18px;
          border-top: 1px solid var(--line);
          background: var(--canvas);
        }
        .ux-card-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 4px;
        }
        .ux-card-name { font-weight: 600; font-size: 15px; }
        .ux-card-dims { font-size: 10px; color: var(--ink-soft); }

        .ux-sec-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }
        .ux-link-underline {
          text-decoration: underline;
          text-decoration-color: var(--pink);
          text-underline-offset: 4px;
        }

        /* Modal */
        .ux-modal-bg {
          position: fixed;
          inset: 0;
          background: rgba(20, 20, 28, 0.65);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 999;
          padding: 20px;
        }
        .ux-modal {
          background: var(--canvas);
          width: 100%;
          max-width: 560px;
          position: relative;
          border: 1px solid var(--line);
          max-height: 90vh;
          overflow-y: auto;
          animation: ux-modal-in 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        @keyframes ux-modal-in {
          from { opacity: 0; transform: translateY(16px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .ux-modal-close {
          position: absolute;
          top: 14px;
          right: 16px;
          background: none;
          border: none;
          cursor: pointer;
          color: var(--ink-soft);
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4px;
          transition: color 0.2s;
        }
        .ux-modal-close:hover { color: var(--pink); }
        .ux-modal-img {
          width: 100%;
          height: 240px;
          object-fit: cover;
          display: block;
          filter: grayscale(10%);
        }
        .ux-modal-body { padding: 24px 28px 32px; }
        .ux-modal-tag {
          font-family: 'Space Mono', monospace;
          font-size: 10px;
          color: var(--pink);
          text-transform: uppercase;
          margin-bottom: 8px;
        }
        .ux-modal-title { font-size: 24px; font-weight: 700; line-height: 1.2; margin-bottom: 10px; }
        .ux-modal-dims { font-size: 10px; color: var(--ink-soft); margin-bottom: 16px; display: block; }
        .ux-modal-desc {
          font-size: 14px;
          line-height: 1.75;
          color: var(--ink-soft);
          margin-bottom: 24px;
        }
        .ux-modal-meta {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          border-top: 1px solid var(--line);
          padding-top: 20px;
          margin-bottom: 24px;
        }
        .ux-modal-meta-item label {
          display: block;
          font-family: 'Space Mono', monospace;
          font-size: 10px;
          color: var(--pink);
          margin-bottom: 4px;
        }
        .ux-modal-meta-item span { font-size: 13px; font-weight: 500; }
        .ux-modal-cta {
          background: var(--ink);
          color: var(--canvas);
          border: none;
          padding: 12px 24px;
          font-family: 'Space Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.04em;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: background 0.2s ease;
        }
        .ux-modal-cta:hover { background: var(--pink); }

        .ux-dark {
          background: var(--ink);
          color: var(--canvas);
          border-bottom: none;
        }
        .ux-dark .ux-frame-label { border-bottom: 1px dashed #33333f; }
        .ux-dark .ux-frame-label .dim { color: #8b8b97; }
      `}</style>

      {/* Ruler strip */}
      <div className="ux-ruler" />

      {/* HERO */}
      <section className="ux-frame">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p
              className="ux-mono text-xs mb-5"
              style={{ color: "var(--ink-soft)" }}
            >
              PRODUCT DESIGN STUDIO — UI/UX
            </p>
            <h1 className="ux-display text-4xl md:text-6xl font-semibold leading-tight mb-6">
              Design that disappears into the experience.
            </h1>
            <p
              className="text-base md:text-lg max-w-md mb-8"
              style={{ color: "var(--ink-soft)" }}
            >
              We design web apps, mobile apps and SaaS dashboards that feel
              obvious the first time someone opens them — and even better the
              hundredth time.
            </p>
            <div className="flex flex-wrap items-center gap-4 relative">
              <a
                href="#work"
                className="ux-btn-primary px-6 py-3 text-sm font-medium flex items-center gap-2"
              >
                View our work <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                className="ux-btn-secondary px-6 py-3 text-sm font-medium"
              >
                Book a discovery call
              </a>
              <MousePointer2
                className="ux-cursor hidden md:block"
                size={22}
                style={{ top: "-26px", left: "210px" }}
              />
            </div>

            <div className="grid grid-cols-3 gap-6 mt-16 max-w-md">
              <div>
                <p className="ux-display text-2xl font-semibold">120+</p>
                <p
                  className="text-xs mt-1"
                  style={{ color: "var(--ink-soft)" }}
                >
                  Products shipped
                </p>
              </div>
              <div>
                <p className="ux-display text-2xl font-semibold">40+</p>
                <p
                  className="text-xs mt-1"
                  style={{ color: "var(--ink-soft)" }}
                >
                  SaaS dashboards
                </p>
              </div>
              <div>
                <p className="ux-display text-2xl font-semibold">98%</p>
                <p
                  className="text-xs mt-1"
                  style={{ color: "var(--ink-soft)" }}
                >
                  Client retention
                </p>
              </div>
            </div>
          </div>

          <div className="ux-artboard">
            <div className="ux-handle tl" />
            <div className="ux-handle tr" />
            <div className="ux-handle bl" />
            <div className="ux-handle br" />
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
              alt="Analytics dashboard UI design"
              className="w-full h-full object-cover"
              style={{ display: "block", minHeight: "380px" }}
            />
            <div
              className="ux-mono text-[10px] px-3 py-1.5 absolute bottom-3 left-3"
              style={{
                background: "var(--canvas)",
                border: "1px solid var(--line)",
              }}
            >
              Dashboard & Analytics UI
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="ux-frame">
        <div className="mb-12 max-w-xl">
          <h2 className="ux-display text-3xl md:text-4xl font-semibold mb-4">
            Ten deliverables. One design language.
          </h2>
          <p style={{ color: "var(--ink-soft)" }}>
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
              <div
                key={s.id}
                className="ux-service-card bg-[color:var(--canvas)] p-6 md:p-8"
                style={{ background: "var(--canvas)" }}
              >
                <div className="flex items-center justify-between mb-6">
                  <Icon size={22} style={{ color: "var(--violet)" }} />
                  <span className="ux-service-tag">{s.id}</span>
                </div>
                <h3 className="ux-display text-lg font-semibold mb-2">
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

          {/* Featured 10th service */}
          <div
            className="ux-service-card bg-[color:var(--canvas)] p-6 md:p-8 sm:col-span-2 lg:col-span-3 flex flex-col md:flex-row md:items-center gap-6"
            style={{ background: "var(--canvas)" }}
          >
            <div className="flex items-center gap-4 md:w-1/3">
              <Users size={28} style={{ color: "var(--violet)" }} />
              <div>
                <span className="ux-service-tag">F10</span>
                <h3 className="ux-display text-lg font-semibold">
                  Usability Testing & Research
                </h3>
              </div>
            </div>
            <p
              className="text-sm leading-relaxed md:w-2/3"
              style={{ color: "var(--ink-soft)" }}
            >
              We watch real users navigate your product so you don't have to
              guess. Moderated sessions, heatmaps and surveys, turned into a
              prioritized backlog your team can act on immediately.
            </p>
          </div>
        </div>
      </section>

      {/* SELECTED WORK — 6 cards */}
      <section id="work" className="ux-frame">
        <div className="ux-frame-label">
          <span>SELECTED WORK</span>
          <span className="dim">6 / 6 projects</span>
        </div>
        <div className="ux-sec-header">
          <h2 className="ux-display text-3xl md:text-4xl font-semibold">
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

      {/* PROCESS */}
      <section id="process" className="ux-frame">
        <div className="mb-12 max-w-xl">
          <h2 className="ux-display text-3xl md:text-4xl font-semibold mb-4">
            How a project moves with us.
          </h2>
          <p style={{ color: "var(--ink-soft)" }}>
            Every engagement follows the same backbone — predictable for you,
            flexible enough for whatever the product throws at us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {process.map((p) => (
            <div
              key={p.n}
              className="relative pl-6"
              style={{ borderLeft: "1px dashed var(--line)" }}
            >
              <span
                className="ux-mono text-xs"
                style={{ color: "var(--pink)" }}
              >
                {p.n}
              </span>
              <h3 className="ux-display text-xl font-semibold mt-2 mb-2">
                {p.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--ink-soft)" }}
              >
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL */}
      {activeWork && (
        <Modal item={activeWork} onClose={() => setActiveWork(null)} />
      )}
    </div>
  );
};

export default Uiuxdesign;
