"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

// ─── WhatsApp Config ─────────────────────────────────────────────────
const WHATSAPP_NUMBER = "919372381936";
function openWhatsApp(message) {
  const encoded = encodeURIComponent(message);
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, "_blank");
}

// ─── Animated Counter ───────────────────────────────────────────────
function Counter({ target, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(ease * target));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);
  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

// ─── Team Member Card ─────────────────────────────────────────────
function TeamCard({ name, role, avatar, skills, color, bio }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div
      className="relative cursor-pointer"
      style={{ perspective: "1000px", height: 320 }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          transition: "transform 0.6s cubic-bezier(0.4,0,0.2,1)",
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        <div
          style={{
            backfaceVisibility: "hidden",
            position: "absolute",
            inset: 0,
          }}
          className="rounded-2xl border border-gray-100 bg-white shadow-md overflow-hidden flex flex-col"
        >
          <div className="h-2 w-full" style={{ background: color }} />
          <div className="flex-1 flex flex-col items-center justify-center p-6 gap-3">
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center text-3xl font-black text-white shadow-lg"
              style={{
                background: `linear-gradient(135deg, ${color}, ${color}99)`,
              }}
            >
              {avatar}
            </div>
            <div className="text-center">
              <div className="text-gray-900 font-bold text-lg leading-tight">
                {name}
              </div>
              <div className="text-sm font-semibold mt-0.5" style={{ color }}>
                {role}
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5 justify-center mt-1">
              {skills.slice(0, 3).map((s) => (
                <span
                  key={s}
                  className="text-xs px-2.5 py-1 rounded-full font-semibold"
                  style={{
                    background: `${color}15`,
                    color,
                    border: `1px solid ${color}30`,
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div className="px-6 pb-4 text-center text-gray-400 text-xs">
            Hover to learn more →
          </div>
        </div>
        <div
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            position: "absolute",
            inset: 0,
          }}
          className="rounded-2xl overflow-hidden flex flex-col"
        >
          <div
            className="h-full flex flex-col justify-between p-6 rounded-2xl"
            style={{
              background: `linear-gradient(135deg, #060610, #0c0c1e)`,
              border: `1px solid ${color}40`,
            }}
          >
            <div>
              <div className="text-white font-bold text-lg">{name}</div>
              <div className="text-sm mb-3" style={{ color }}>
                {role}
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">{bio}</p>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {skills.map((s) => (
                <span
                  key={s}
                  className="text-xs px-2 py-0.5 rounded-full"
                  style={{
                    background: `${color}20`,
                    color,
                    border: `1px solid ${color}30`,
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Pricing Card ─────────────────────────────────────────────────
function PriceCard({ service }) {
  const {
    icon,
    title,
    desc,
    imageUrl,
    color,
    gradient,
    lightBg,
    lightBorder,
    popular,
    startPrice,
    priceNote,
    priceSuffix,
    features,
    waMessage,
  } = service;
  return (
    <div className="group relative rounded-3xl overflow-hidden border border-gray-100 bg-white shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col">
      {/* Image */}
      <div className="relative h-44 overflow-hidden flex-shrink-0">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div
          className="absolute top-0 left-0 right-0 h-1"
          style={{ background: gradient }}
        />
        <div
          className="absolute bottom-4 left-4 w-11 h-11 rounded-xl flex items-center justify-center text-xl shadow-lg"
          style={{ background: `${color}ee`, border: `1px solid ${color}60` }}
        >
          {icon}
        </div>
        {popular && (
          <div
            className="absolute top-3 right-3 text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm"
            style={{
              background: `${color}30`,
              color: "#fff",
              border: `1px solid ${color}60`,
            }}
          >
            ⭐ Most Popular
          </div>
        )}
      </div>

      {/* Body */}
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="font-bold text-gray-900 text-lg leading-tight mb-1">
          {title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">{desc}</p>

        <span className="text-xs text-gray-400 font-medium">Starting at</span>
        <div className="flex items-baseline gap-1 mt-0.5 mb-1">
          <span
            className="text-3xl font-black leading-none"
            style={{ fontFamily: "'Syne', sans-serif", color }}
          >
            {startPrice}
          </span>
          {priceSuffix && (
            <span className="text-sm text-gray-400 font-medium">
              {priceSuffix}
            </span>
          )}
        </div>
        <p className="text-xs text-gray-400 mb-4">{priceNote}</p>

        <div className="h-px bg-gray-100 mb-4" />

        <ul className="space-y-2 mb-5 flex-1">
          {features.map((f) => (
            <li
              key={f}
              className="flex items-center gap-2.5 text-sm text-gray-600"
            >
              <span
                className="w-5 h-5 rounded-full flex items-center justify-center text-xs flex-shrink-0 font-bold"
                style={{
                  background: lightBg,
                  color,
                  border: `1px solid ${lightBorder}`,
                }}
              >
                ✓
              </span>
              {f}
            </li>
          ))}
        </ul>

        <button
          onClick={() => openWhatsApp(waMessage)}
          className="flex items-center justify-center gap-2 w-full py-3 rounded-2xl font-bold text-white text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg active:scale-95"
          style={{ background: gradient }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.135.561 4.135 1.535 5.865L0 24l6.29-1.495A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.89 0-3.663-.5-5.195-1.372l-.372-.22-3.863.917.972-3.769-.242-.388A9.953 9.953 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
          </svg>
          Get a Quote on WhatsApp
        </button>
      </div>
    </div>
  );
}

// ─── Service Item (for "What We Do" section) ────────────────────────
function ServiceItem({ icon, title, desc, imageUrl, color, tags }) {
  return (
    <div className="group rounded-3xl overflow-hidden border border-gray-100 bg-white shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col">
      <div className="relative h-44 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <div
          className="absolute bottom-4 left-4 w-11 h-11 rounded-xl flex items-center justify-center text-xl shadow-lg"
          style={{ background: `${color}ee`, border: `1px solid ${color}60` }}
        >
          {icon}
        </div>
        <div
          className="absolute top-3 right-3 text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm"
          style={{
            background: `${color}25`,
            color,
            border: `1px solid ${color}50`,
          }}
        >
          {tags[0]}
        </div>
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-gray-900 font-bold text-lg mb-2">{title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed flex-1">{desc}</p>
        <div className="flex flex-wrap gap-1.5 mt-4">
          {tags.slice(1).map((t) => (
            <span
              key={t}
              className="text-xs px-2.5 py-1 rounded-full font-medium"
              style={{
                background: `${color}10`,
                color,
                border: `1px solid ${color}25`,
              }}
            >
              {t}
            </span>
          ))}
        </div>
        <div
          className="mt-4 flex items-center gap-1.5 text-sm font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0"
          style={{ color }}
        >
          Learn More <span className="text-base">→</span>
        </div>
      </div>
    </div>
  );
}

// ─── Value Card ──────────────────────────────────────────────────────
function ValueCard({ icon, title, desc, color }) {
  return (
    <div className="group relative rounded-2xl p-6 border border-gray-100 bg-white shadow-sm hover:shadow-xl transition-all duration-400 hover:-translate-y-1 overflow-hidden">
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at 30% 20%, ${color}08, transparent 60%)`,
        }}
      />
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
        style={{ background: `${color}15`, border: `1.5px solid ${color}30` }}
      >
        {icon}
      </div>
      <h3 className="text-gray-900 font-bold text-base mb-2">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

// ─── Timeline Step ────────────────────────────────────────────────
function TimelineStep({ year, title, desc, color, isLast }) {
  return (
    <div className="flex gap-5 group">
      <div className="flex flex-col items-center">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center text-white font-black text-sm flex-shrink-0 shadow-lg transition-transform duration-300 group-hover:scale-110"
          style={{
            background: `linear-gradient(135deg, ${color}, ${color}cc)`,
          }}
        >
          {year.slice(2)}
        </div>
        {!isLast && (
          <div
            className="w-0.5 flex-1 mt-2"
            style={{ background: `${color}30` }}
          />
        )}
      </div>
      <div className="pb-8 pt-1">
        <div
          className="text-xs font-bold uppercase tracking-widest mb-1"
          style={{ color }}
        >
          {year}
        </div>
        <div className="text-gray-900 font-bold text-base mb-1">{title}</div>
        <div className="text-gray-500 text-sm leading-relaxed">{desc}</div>
      </div>
    </div>
  );
}

// ─── Dividers ────────────────────────────────────────────────────────
function WaveDivider({ topColor, bottomColor, flip = false }) {
  return (
    <div style={{ background: bottomColor, marginTop: -1 }}>
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        style={{
          display: "block",
          width: "100%",
          height: 60,
          transform: flip ? "scaleY(-1)" : "none",
        }}
      >
        <path d="M0,40 C360,80 1080,0 1440,40 L1440,0 L0,0 Z" fill={topColor} />
      </svg>
    </div>
  );
}

function SlantDivider({ topColor, bottomColor }) {
  return (
    <div style={{ background: bottomColor, marginTop: -1 }}>
      <svg
        viewBox="0 0 1440 50"
        preserveAspectRatio="none"
        style={{ display: "block", width: "100%", height: 50 }}
      >
        <polygon points="0,0 1440,50 1440,0" fill={topColor} />
      </svg>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════════════════════════════

const pricingServices = [
  {
    icon: "🌐",
    title: "Web Development",
    desc: "Next.js / React websites, landing pages & enterprise platforms",
    imageUrl:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=85",
    color: "#6366f1",
    gradient: "linear-gradient(135deg,#6366f1,#a78bfa)",
    lightBg: "#eef0ff",
    lightBorder: "#c7d2fe",
    startPrice: "₹15,000",
    priceNote: "Single page · Full projects from ₹45,000",
    features: [
      "Responsive design",
      "SEO-ready structure",
      "CMS integration",
      "2 rounds of revisions",
    ],
    waMessage:
      "Hello Merajsoft! 👋\n\nI'm interested in your *Web Development* service.\n\nCould you please share more details about pricing and packages?\n\nThank you!",
  },
  {
    icon: "📱",
    title: "Mobile App Development",
    desc: "Cross-platform iOS & Android apps with React Native",
    imageUrl:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=85",
    color: "#3b82f6",
    gradient: "linear-gradient(135deg,#3b82f6,#93c5fd)",
    lightBg: "#eff6ff",
    lightBorder: "#bfdbfe",
    popular: true,
    startPrice: "₹35,000",
    priceNote: "MVP · Full-featured apps from ₹1,20,000",
    features: [
      "iOS + Android both",
      "Firebase backend",
      "Push notifications",
      "App Store deployment",
    ],
    waMessage:
      "Hello Merajsoft! 👋\n\nI'm interested in your *Mobile App Development* service.\n\nI'd like to know more about React Native development packages and pricing.\n\nThank you!",
  },
  {
    icon: "🛒",
    title: "E-Commerce Solutions",
    desc: "Shopify, WooCommerce or headless stores that convert",
    imageUrl:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=85",
    color: "#10b981",
    gradient: "linear-gradient(135deg,#10b981,#6ee7b7)",
    lightBg: "#ecfdf5",
    lightBorder: "#a7f3d0",
    startPrice: "₹25,000",
    priceNote: "Basic store · Headless commerce from ₹80,000",
    features: [
      "Payment gateway setup",
      "Inventory management",
      "Mobile-optimised",
      "Order & CRM sync",
    ],
    waMessage:
      "Hello Merajsoft! 👋\n\nI'm interested in your *E-Commerce Solutions* service.\n\nCould you share Shopify / WooCommerce store development pricing?\n\nThank you!",
  },
  {
    icon: "🔍",
    title: "SEO Optimization",
    desc: "Page 1 rankings via technical SEO, content & Core Web Vitals",
    imageUrl:
      "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&q=85",
    color: "#f59e0b",
    gradient: "linear-gradient(135deg,#f59e0b,#fcd34d)",
    lightBg: "#fffbeb",
    lightBorder: "#fde68a",
    startPrice: "₹8,000",
    priceSuffix: "/mo",
    priceNote: "Starter · Full strategy from ₹18,000/mo",
    features: [
      "Technical SEO audit",
      "Content strategy",
      "Monthly rank report",
      "Core Web Vitals fix",
    ],
    waMessage:
      "Hello Merajsoft! 👋\n\nI'm interested in your *SEO Optimization* service.\n\nI'd like to know more about monthly SEO packages and what's included.\n\nThank you!",
  },
  {
    icon: "📍",
    title: "Google Business Profile",
    desc: "Dominate local search with a fully optimised GBP",
    imageUrl:
      "https://images.unsplash.com/photo-1529311956543-4a7a517cf2cf?w=600&q=85",
    color: "#ec4899",
    gradient: "linear-gradient(135deg,#ec4899,#f9a8d4)",
    lightBg: "#fdf2f8",
    lightBorder: "#fbcfe8",
    startPrice: "₹5,000",
    priceNote: "One-time setup · Monthly mgmt from ₹3,500/mo",
    features: [
      "Full profile optimisation",
      "Reviews strategy",
      "Posts & Q&A setup",
      "GMB insights report",
    ],
    waMessage:
      "Hello Merajsoft! 👋\n\nI'm interested in your *Google Business Profile* service.\n\nCould you share GBP setup and monthly management pricing?\n\nThank you!",
  },
  {
    icon: "☁️",
    title: "Cloud & DevOps",
    desc: "AWS / GCP deployments, Docker, Kubernetes & CI/CD pipelines",
    imageUrl:
      "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&q=85",
    color: "#06b6d4",
    gradient: "linear-gradient(135deg,#06b6d4,#67e8f9)",
    lightBg: "#ecfeff",
    lightBorder: "#a5f3fc",
    startPrice: "₹12,000",
    priceNote: "Basic setup · Enterprise infra from ₹50,000",
    features: [
      "Cloud architecture",
      "CI/CD pipeline",
      "Zero-downtime deploy",
      "Monitoring & alerts",
    ],
    waMessage:
      "Hello Merajsoft! 👋\n\nI'm interested in your *Cloud & DevOps* service.\n\nI'd like to know more about AWS/GCP setup and infrastructure management pricing.\n\nThank you!",
  },
];

const teamMembers = [
  {
    name: "Rahil Khan",
    role: "Founder & CEO",
    avatar: "RK",
    color: "#6366f1",
    skills: [
      "Product Strategy",
      "Business Dev",
      "Client Relations",
      "Leadership",
      "Sales",
    ],
    bio: "Visionary founder with 7+ years of experience scaling digital products. Led 150+ successful projects across FinTech, HealthTech, and E-Commerce domains.",
  },
  {
    name: "Faiyyaz Khan",
    role: "Co-Founder & CTO",
    avatar: "FK",
    color: "#8b5cf6",
    skills: ["System Architecture", "Node.js", "AWS", "DevOps", "PostgreSQL"],
    bio: "Backend powerhouse and cloud architect. Designed zero-downtime systems handling millions of transactions.",
  },
  {
    name: "Ayesha Siddiqui",
    role: "Project Manager",
    avatar: "AS",
    color: "#ec4899",
    skills: [
      "Agile / Scrum",
      "Jira",
      "Risk Management",
      "Stakeholder Mgmt",
      "Delivery",
    ],
    bio: "PMP-certified project manager who has orchestrated 80+ full-cycle deliveries. Ensures every sprint hits its target.",
  },
  {
    name: "Dev Sharma",
    role: "Lead Frontend Developer",
    avatar: "DS",
    color: "#3b82f6",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    bio: "Pixel-perfect UI craftsman obsessed with performance. Turns Figma designs into blazing-fast, accessible React applications.",
  },
  {
    name: "Aryan Mehta",
    role: "Lead Backend Developer",
    avatar: "AM",
    color: "#10b981",
    skills: ["Node.js", "Express", "GraphQL", "MongoDB", "Redis"],
    bio: "API architect who builds bullet-proof, scalable backends. Specializes in real-time systems with WebSockets.",
  },
  {
    name: "Nisha Patel",
    role: "UI/UX Designer",
    avatar: "NP",
    color: "#f59e0b",
    skills: [
      "Figma",
      "User Research",
      "Prototyping",
      "Design Systems",
      "Motion",
    ],
    bio: "Human-centered designer who crafts intuitive interfaces that users love. Reduces friction and increases conversion rates by 3x.",
  },
  {
    name: "Kabir Singh",
    role: "Mobile App Developer",
    avatar: "KS",
    color: "#06b6d4",
    skills: ["React Native", "iOS", "Android", "Firebase", "App Store"],
    bio: "Cross-platform mobile expert who shipped 20+ apps. Builds smooth, native-feeling experiences with React Native.",
  },
  {
    name: "Zara Ali",
    role: "SEO & Digital Marketing Lead",
    avatar: "ZA",
    color: "#ef4444",
    skills: [
      "Technical SEO",
      "Content Strategy",
      "Google Ads",
      "Analytics",
      "GBP",
    ],
    bio: "Data-driven marketer who turned 50+ businesses into Page 1 results. Grew organic traffic by 400% for multiple clients.",
  },
  {
    name: "Rohit Joshi",
    role: "DevOps & Cloud Engineer",
    avatar: "RJ",
    color: "#8b5cf6",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"],
    bio: "Infrastructure whiz who architects systems for scale, reliability, and speed. Reduced deployment time by 80%.",
  },
];

const servicesOverview = [
  {
    icon: "🌐",
    title: "Web Development",
    desc: "Blazing-fast, SEO-optimized websites and web applications using Next.js, React, and Vue.",
    imageUrl:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=85",
    color: "#6366f1",
    tags: ["Frontend", "Next.js", "React", "TypeScript", "Tailwind"],
  },
  {
    icon: "📱",
    title: "Mobile App Development",
    desc: "Cross-platform iOS & Android apps with React Native. Smooth, native-feeling with real-time features.",
    imageUrl:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=85",
    color: "#3b82f6",
    tags: ["Mobile", "React Native", "iOS", "Android", "Firebase"],
  },
  {
    icon: "🛒",
    title: "E-Commerce Solutions",
    desc: "Scalable online stores built to convert. Custom Shopify, WooCommerce or headless commerce.",
    imageUrl:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=85",
    color: "#10b981",
    tags: ["E-Commerce", "Shopify", "WooCommerce", "Stripe", "GraphQL"],
  },
  {
    icon: "🔍",
    title: "SEO Optimization",
    desc: "Technical SEO audits, Core Web Vitals optimization, and local SEO to get your business on Page 1.",
    imageUrl:
      "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&q=85",
    color: "#f59e0b",
    tags: [
      "SEO",
      "Google Analytics",
      "Core Web Vitals",
      "Content",
      "Local SEO",
    ],
  },
  {
    icon: "📍",
    title: "Google Business Profile",
    desc: "Dominate local search with a fully optimized GBP — reviews strategy, posts, Q&A, and GMB insights.",
    imageUrl:
      "https://images.unsplash.com/photo-1529311956543-4a7a517cf2cf?w=600&q=85",
    color: "#ec4899",
    tags: ["Local SEO", "GBP", "Reviews", "Maps", "Local Ads"],
  },
  {
    icon: "☁️",
    title: "Cloud & DevOps",
    desc: "AWS, GCP, and Azure deployments with Docker, Kubernetes, and CI/CD pipelines.",
    imageUrl:
      "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&q=85",
    color: "#06b6d4",
    tags: ["AWS", "Docker", "CI/CD", "Kubernetes", "Terraform"],
  },
];

const values = [
  {
    icon: "🎯",
    title: "Clarity Over Complexity",
    desc: "We simplify the complex. Clean code, clear communication, and transparent processes from kickoff to launch.",
    color: "#6366f1",
  },
  {
    icon: "🔥",
    title: "Obsessive Quality",
    desc: "Every line of code, every pixel, every API call — reviewed, tested, and refined until it's exceptional.",
    color: "#ec4899",
  },
  {
    icon: "⚡",
    title: "Speed with Precision",
    desc: "Fast delivery is non-negotiable. Two-week sprints with demos, feedback loops, and zero surprises at launch.",
    color: "#f59e0b",
  },
  {
    icon: "🛡️",
    title: "Security by Default",
    desc: "OWASP compliance, end-to-end encryption, and penetration testing are baked in — never bolted on.",
    color: "#10b981",
  },
  {
    icon: "📈",
    title: "Growth Mindset",
    desc: "We don't just build — we think about scale. Architectures that handle 10x traffic without rewrites.",
    color: "#3b82f6",
  },
  {
    icon: "🤝",
    title: "Partnership, Not Projects",
    desc: "Our clients aren't tickets in a CRM. We become invested in your success beyond the delivery date.",
    color: "#8b5cf6",
  },
];

const timeline = [
  {
    year: "2018",
    title: "Merajsoft Founded",
    desc: "Started from Ghatkopar West, Mumbai with 2 developers and a vision to build world-class software for Indian businesses.",
    color: "#6366f1",
  },
  {
    year: "2019",
    title: "First 20 Clients",
    desc: "Delivered web and mobile solutions for local businesses across Mumbai. Built our first e-commerce platform serving 10K+ daily users.",
    color: "#3b82f6",
  },
  {
    year: "2020",
    title: "SEO & Digital Wing",
    desc: "Launched our digital marketing vertical. Helped 15+ businesses achieve Page 1 rankings during the pandemic's digital boom.",
    color: "#10b981",
  },
  {
    year: "2021",
    title: "Team Scales to 15",
    desc: "Hired senior engineers, designers, and a dedicated DevOps team. Delivered our first enterprise FinTech platform.",
    color: "#f59e0b",
  },
  {
    year: "2022",
    title: "100+ Projects Milestone",
    desc: "Crossed 100 successful deliveries. Expanded to HealthTech and EdTech sectors. Achieved 99.9% uptime SLA for 5 enterprise clients.",
    color: "#ec4899",
  },
  {
    year: "2023",
    title: "Cloud-First Transformation",
    desc: "Launched full-stack DevOps practice. Migrated 20+ client applications to AWS with zero-downtime CI/CD pipelines.",
    color: "#8b5cf6",
  },
  {
    year: "2024",
    title: "AI Integration Practice",
    desc: "Integrated GPT-4, ML Kit, and OpenAI into client products. Built AI-powered dashboards, chatbots, and recommendation engines.",
    color: "#06b6d4",
  },
  {
    year: "2025",
    title: "40+ Team, 150+ Projects",
    desc: "Today, Merajsoft is a full-service digital agency trusted by 150+ businesses across India. We're just getting started.",
    color: "#ef4444",
    isLast: true,
  },
];

const stats = [
  { value: 150, suffix: "+", label: "Projects Delivered", color: "#6366f1" },
  { value: 98, suffix: "%", label: "Client Satisfaction", color: "#10b981" },
  { value: 7, suffix: "+", label: "Years Experience", color: "#f59e0b" },
  { value: 40, suffix: "+", label: "Team Members", color: "#ec4899" },
];

const tabContent = {
  mission: {
    title: "Our Mission",
    text: "To empower Indian businesses — from bootstrapped startups to established enterprises — with world-class digital products that compete on a global stage. We believe geography should never limit ambition, and great software should be accessible to every business.",
  },
  vision: {
    title: "Our Vision",
    text: "To be India's most trusted technology partner by 2030. We envision a future where every business in our ecosystem runs on reliable, scalable, and beautiful digital infrastructure built by Merajsoft.",
  },
  story: {
    title: "Our Story",
    text: "Founded in 2018 in Ghatkopar West, Mumbai, Merajsoft started with two engineers and a shared belief: that Indian businesses deserve the same software quality as Silicon Valley. Seven years later, we've delivered 150+ projects, built a team of 40+ specialists, and never once compromised on quality.",
  },
};

// ═══════════════════════════════════════════════════════════════════
// MAIN PAGE
// ═══════════════════════════════════════════════════════════════════
export default function About() {
  const [tab, setTab] = useState("mission");

  return (
    <main
      className="min-h-screen"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Syne:wght@700;800;900&display=swap');
        .hero-title { font-family: 'Syne', sans-serif; }
        .gradient-text { background: linear-gradient(135deg, #6366f1 0%, #a78bfa 50%, #ec4899 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(32px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes spin { from { transform: translate(-50%,-50%) rotate(0deg); } to { transform: translate(-50%,-50%) rotate(360deg); } }
        .fade-1 { animation: fadeUp 0.8s ease 0.1s both; }
        .fade-2 { animation: fadeUp 0.8s ease 0.25s both; }
        .fade-3 { animation: fadeUp 0.8s ease 0.4s both; }
        .dot-grid { background-image: radial-gradient(circle, rgba(99,102,241,0.15) 1px, transparent 1px); background-size: 28px 28px; }
        .shimmer-border { position: relative; }
        .shimmer-border::after { content: ''; position: absolute; inset: -2px; border-radius: inherit; background: linear-gradient(135deg, #6366f1, #a78bfa, #ec4899, #6366f1); background-size: 300% 300%; animation: borderFlow 4s ease infinite; z-index: -1; }
        @keyframes borderFlow { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
        .tab-active { background: linear-gradient(135deg, #6366f1, #8b5cf6); color: white !important; border-color: transparent !important; }
        .section-label { display: inline-flex; align-items: center; gap: 8px; }
        .section-label::before, .section-label::after { content: ''; display: block; width: 24px; height: 2px; background: currentColor; opacity: 0.5; border-radius: 2px; }
        @media (max-width: 768px) { .hero-title { font-size: 2.2rem !important; } }
      `}</style>

      {/* ══════════════════════════════════════════════════════════
          SECTION 1 — HERO (dark navy)
      ══════════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #060610 0%, #0c0c1e 60%, #0f0a1e 100%)",
          paddingTop: 110,
          paddingBottom: 70,
        }}
      >
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div
          className="absolute top-[-100px] left-[-80px] w-[600px] h-[600px] rounded-full blur-3xl opacity-20"
          style={{ background: "radial-gradient(circle, #6366f1, #7c3aed)" }}
        />
        <div
          className="absolute bottom-[-80px] right-[-60px] w-[500px] h-[500px] rounded-full blur-3xl opacity-15"
          style={{ background: "radial-gradient(circle, #ec4899, #7c3aed)" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-[900px] h-[900px] rounded-full opacity-[0.04]"
          style={{
            border: "1px dashed rgba(99,102,241,0.9)",
            animation: "spin 30s linear infinite",
            transform: "translate(-50%, -50%)",
          }}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="fade-3 flex flex-wrap justify-center gap-3">
            <h2 className="hero-title text-4xl md:text-5xl font-extrabold text-gray-900 mb-3">
              <span className="gradient-text">Simple, Honest Pricing</span>
            </h2>
          </div>
        </div>
      </section>

      {/* Wave: dark → white */}
      <WaveDivider topColor="#060610" bottomColor="#ffffff" />

      {/* ══════════════════════════════════════════════════════════
          SECTION 2 — PRICING (white bg, directly after hero)
      ══════════════════════════════════════════════════════════ */}
      <section className="relative py-20 px-6 bg-white">
        {/* Rainbow top bar */}
        <div
          className="absolute top-0 left-0 right-0 h-1"
          style={{
            background:
              "linear-gradient(90deg, #6366f1, #a78bfa, #ec4899, #f59e0b, #10b981, #06b6d4)",
          }}
        />

        <div className="max-w-7xl mx-auto">
          {/* Pricing Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {pricingServices.map((s) => (
              <PriceCard key={s.title} service={s} />
            ))}
          </div>

          {/* Footer note */}
          <p className="text-center text-xs text-gray-400 mt-10">
            All prices are indicative. Final quote depends on scope &
            requirements.{" "}
            <button
              onClick={() =>
                openWhatsApp(
                  "Hello Merajsoft! 👋\n\nI'm interested in a *Custom Bundle* combining multiple services.\n\nCould you please share a custom quote?\n\nThank you!",
                )
              }
              className="font-bold underline underline-offset-2"
              style={{ color: "#6366f1" }}
            >
              Custom bundles available →
            </button>
          </p>
        </div>
      </section>

      {/* Slant: white → lavender */}
      <SlantDivider topColor="#ffffff" bottomColor="#f1f0fe" />

      {/* ══════════════════════════════════════════════════════════
          SECTION 3 — STATS (lavender tint)
      ══════════════════════════════════════════════════════════ */}
      <section className="relative py-16" style={{ background: "#f1f0fe" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center group relative">
                <div
                  className="hero-title text-4xl md:text-5xl font-black mb-1"
                  style={{ color: s.color }}
                >
                  <Counter target={s.value} suffix={s.suffix} />
                </div>
                <div className="text-gray-500 text-sm font-medium">
                  {s.label}
                </div>
                <div
                  className="mt-3 w-8 h-0.5 mx-auto rounded-full transition-all duration-300 group-hover:w-16"
                  style={{ background: s.color }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wave: lavender → dark */}
      <WaveDivider topColor="#f1f0fe" bottomColor="#0a0a18" />

      {/* ══════════════════════════════════════════════════════════
          SECTION 4 — MISSION / VISION / STORY (dark)
      ══════════════════════════════════════════════════════════ */}
      <section className="py-20 px-6" style={{ background: "#0a0a18" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="section-label text-indigo-400 font-semibold text-xs uppercase tracking-[0.2em]">
              Who We Are
            </span>
            <h2 className="hero-title text-4xl font-extrabold text-white mt-3">
              Driven by <span className="gradient-text">Purpose</span>
            </h2>
          </div>
          <div className="flex justify-center gap-3 mb-8 flex-wrap">
            {["mission", "vision", "story"].map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold border transition-all duration-300 capitalize ${tab === t ? "tab-active" : "border-indigo-800 text-gray-400 hover:border-indigo-400 hover:text-indigo-400 bg-white/5"}`}
              >
                {t === "mission"
                  ? "🎯 Mission"
                  : t === "vision"
                    ? "🔭 Vision"
                    : "📖 Story"}
              </button>
            ))}
          </div>
          <div
            className="rounded-3xl p-8 md:p-10 text-center transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #0c0c1e, #12082e)",
              border: "1px solid rgba(99,102,241,0.2)",
            }}
          >
            <div className="text-5xl mb-4">
              {tab === "mission" ? "🎯" : tab === "vision" ? "🔭" : "📖"}
            </div>
            <h3 className="hero-title text-2xl font-bold text-white mb-4">
              {tabContent[tab].title}
            </h3>
            <p className="text-gray-400 text-base leading-relaxed max-w-2xl mx-auto">
              {tabContent[tab].text}
            </p>
          </div>
        </div>
      </section>

      {/* Wave: dark → white */}
      <WaveDivider topColor="#0a0a18" bottomColor="#f0fdf8" />

      {/* ══════════════════════════════════════════════════════════
          SECTION 5 — CORE VALUES (mint)
      ══════════════════════════════════════════════════════════ */}
      <section className="py-20 px-6" style={{ background: "#f0fdf8" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="section-label text-emerald-600 font-semibold text-xs uppercase tracking-[0.2em]">
              What We Stand For
            </span>
            <h2 className="hero-title text-4xl md:text-5xl font-extrabold text-gray-900 mt-3">
              Our Core <span className="gradient-text">Values</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <ValueCard key={v.title} {...v} />
            ))}
          </div>
        </div>
      </section>

      {/* Slant: mint → white */}
      <div style={{ background: "#ffffff", marginTop: -1 }}>
        <svg
          viewBox="0 0 1440 50"
          preserveAspectRatio="none"
          style={{ display: "block", width: "100%", height: 50 }}
        >
          <polygon points="0,50 1440,0 1440,50" fill="#f0fdf8" />
        </svg>
      </div>

      {/* ══════════════════════════════════════════════════════════
          SECTION 6 — TEAM (white)
      ══════════════════════════════════════════════════════════ */}
      <section className="relative py-20 px-6 bg-white">
        <div
          className="absolute top-0 left-0 right-0 h-1"
          style={{
            background:
              "linear-gradient(90deg, #ec4899, #8b5cf6, #3b82f6, #06b6d4, #10b981)",
          }}
        />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="section-label text-indigo-500 font-semibold text-xs uppercase tracking-[0.2em]">
              The People
            </span>
            <h2 className="hero-title text-4xl md:text-5xl font-extrabold text-gray-900 mt-3">
              Meet the <span className="gradient-text">Dream Team</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto mt-3 text-sm">
              40+ experts in development, design, DevOps, and growth. Hover any
              card to learn more.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {teamMembers.map((m) => (
              <TeamCard key={m.name} {...m} />
            ))}
          </div>
        </div>
      </section>

      {/* Wave: white → amber */}
      <WaveDivider topColor="#ffffff" bottomColor="#fffbeb" flip />

      {/* ══════════════════════════════════════════════════════════
          SECTION 7 — TIMELINE (amber)
      ══════════════════════════════════════════════════════════ */}
      <section className="py-20 px-6" style={{ background: "#fffbeb" }}>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-14">
            <span className="section-label text-amber-600 font-semibold text-xs uppercase tracking-[0.2em]">
              Our Journey
            </span>
            <h2 className="hero-title text-4xl font-extrabold text-gray-900 mt-3">
              7 Years of <span className="gradient-text">Growth</span>
            </h2>
          </div>
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-amber-100">
            {timeline.map((step, i) => (
              <TimelineStep
                key={step.year}
                {...step}
                isLast={i === timeline.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Slant: amber → white */}
      <div style={{ background: "#ffffff", marginTop: -1 }}>
        <svg
          viewBox="0 0 1440 50"
          preserveAspectRatio="none"
          style={{ display: "block", width: "100%", height: 50 }}
        >
          <polygon points="1440,50 0,0 0,50" fill="#fffbeb" />
        </svg>
      </div>

      {/* ══════════════════════════════════════════════════════════
          SECTION 8 — WHY CHOOSE US (white)
      ══════════════════════════════════════════════════════════ */}
      <section className="relative py-20 px-6 bg-white overflow-hidden">
        <div
          className="absolute left-0 top-0 bottom-0 w-2"
          style={{ background: "linear-gradient(180deg, #6366f1, #ec4899)" }}
        />
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-label text-indigo-500 font-semibold text-xs uppercase tracking-[0.2em]">
                Why Merajsoft
              </span>
              <h2 className="hero-title text-4xl font-extrabold text-gray-900 mt-3 mb-6">
                The <span className="gradient-text">Merajsoft</span>
                <br />
                Difference
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                We've worked with agencies who overpromise. We've worked with
                freelancers who disappear mid-project. We built Merajsoft to be
                the alternative — a team that ships on time, communicates
                clearly, and builds software you're proud to show the world.
              </p>
              <div className="space-y-4">
                {[
                  [
                    "⚡",
                    "2-Week Sprint Delivery",
                    "Continuous demos so you're never in the dark",
                  ],
                  [
                    "🧪",
                    "QA Before Every Push",
                    "Automated testing + manual review on every feature",
                  ],
                  [
                    "📞",
                    "Direct Access to Engineers",
                    "No middlemen. You talk to the people building your product",
                  ],
                  [
                    "🔒",
                    "NDA & IP Protection",
                    "Your code, your IP — fully protected from day one",
                  ],
                ].map(([icon, title, desc]) => (
                  <div
                    key={title}
                    className="flex gap-4 p-4 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-md hover:border-indigo-100 transition-all duration-300"
                  >
                    <span className="text-2xl flex-shrink-0">{icon}</span>
                    <div>
                      <div className="text-gray-900 font-bold text-sm">
                        {title}
                      </div>
                      <div className="text-gray-500 text-sm">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100 shimmer-border">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&q=90"
                  alt="Merajsoft team collaboration"
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl px-5 py-3.5 shadow-xl border border-gray-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center text-xl">
                  ✅
                </div>
                <div>
                  <div className="text-gray-900 font-bold text-sm">
                    150+ Projects
                  </div>
                  <div className="text-gray-400 text-xs">Delivered On Time</div>
                </div>
              </div>
              <div className="absolute -top-5 -right-5 bg-white rounded-2xl px-5 py-3.5 shadow-xl border border-gray-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center text-xl">
                  ⭐
                </div>
                <div>
                  <div className="text-gray-900 font-bold text-sm">
                    98% Satisfaction
                  </div>
                  <div className="text-gray-400 text-xs">Client Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wave: white → cyan */}
      <WaveDivider topColor="#ffffff" bottomColor="#f0fdff" />

      {/* ══════════════════════════════════════════════════════════
          SECTION 9 — LOCATION (cyan)
      ══════════════════════════════════════════════════════════ */}
      <section className="py-20 px-6" style={{ background: "#f0fdff" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="section-label text-cyan-600 font-semibold text-xs uppercase tracking-[0.2em]">
              Where We Are
            </span>
            <h2 className="hero-title text-4xl font-extrabold text-gray-900 mt-3">
              Based in <span className="gradient-text">Mumbai</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "📍",
                title: "Office Address",
                lines: [
                  "Shankar Nagar Rahivashi Sangh",
                  "Near Asalpha Metro Station",
                  "Ghatkopar West, Mumbai 400084",
                ],
                color: "#6366f1",
              },
              {
                icon: "📞",
                title: "Contact",
                lines: [
                  "+91 93723 81936",
                  "khanr50926@gmail.com",
                  "khanfaiyyaz25003@gmail.com",
                ],
                color: "#10b981",
              },
              {
                icon: "🕐",
                title: "Business Hours",
                lines: [
                  "Mon–Fri: 9AM – 7PM",
                  "Saturday: 10AM – 4PM",
                  "Sunday: WhatsApp Only",
                ],
                color: "#f59e0b",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-2xl p-6 border border-cyan-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-4"
                  style={{
                    background: `${card.color}15`,
                    border: `1.5px solid ${card.color}30`,
                  }}
                >
                  {card.icon}
                </div>
                <div className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-3">
                  {card.title}
                </div>
                {card.lines.map((l, i) => (
                  <div
                    key={i}
                    className="text-gray-700 font-medium text-sm mb-1"
                  >
                    {l}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wave: cyan → dark */}
      <WaveDivider topColor="#f0fdff" bottomColor="#060610" />

      {/* ══════════════════════════════════════════════════════════
          SECTION 10 — CTA (dark)
      ══════════════════════════════════════════════════════════ */}
      <section className="py-20 px-6" style={{ background: "#060610" }}>
        <div className="max-w-3xl mx-auto text-center">
          <div
            className="rounded-3xl p-12 relative overflow-hidden border border-white/10"
            style={{ background: "linear-gradient(135deg, #0c0c1e, #12082e)" }}
          >
            <div className="absolute inset-0 dot-grid opacity-20" />
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 blur-3xl opacity-30"
              style={{
                background: "radial-gradient(circle, #6366f1, transparent)",
              }}
            />
            <div className="relative z-10">
              <div className="text-4xl mb-4">🚀</div>
              <h2 className="hero-title text-3xl md:text-4xl font-extrabold text-white mb-4">
                Ready to Build Something
                <br />
                <span className="gradient-text">Extraordinary?</span>
              </h2>
              <p className="text-gray-400 text-sm mb-8 max-w-md mx-auto leading-relaxed">
                Let's discuss your project. No commitment, no pressure — just a
                real conversation about what's possible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() =>
                    openWhatsApp(
                      "Hello Merajsoft! 👋\n\nI want to discuss a project with you.\n\nCould we connect?\n\nThank you!",
                    )
                  }
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-white text-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                  style={{
                    background: "linear-gradient(135deg, #25D366, #128C7E)",
                  }}
                >
                  💬 WhatsApp Us Now
                </button>
                <Link href="/contact">
                  <button className="px-8 py-4 rounded-2xl font-bold text-white text-sm border border-white/20 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10">
                    Contact Us →
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
