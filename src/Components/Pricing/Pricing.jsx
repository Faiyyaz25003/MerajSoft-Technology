"use client";
import { useState } from "react";

// ─── WhatsApp Config ─────────────────────────────────────────────────
const WHATSAPP_NUMBER = "919372381936";
function openWhatsApp(message) {
  const encoded = encodeURIComponent(message);
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, "_blank");
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
          className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-semibold text-white text-xs transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg active:scale-95"
          style={{ background: gradient }}
        >
          Get a Quote on WhatsApp
        </button>
      </div>
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
    popular: true,
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
    popular: false,
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
    popular: true,
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
    popular: true,
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

// ═══════════════════════════════════════════════════════════════════
// MAIN PAGE — Pricing Only
// ═══════════════════════════════════════════════════════════════════
export default function Pricing() {
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
        @media (max-width: 768px) { .hero-title { font-size: 2.2rem !important; } }
      `}</style>

      {/* ── HERO (dark navy) ── */}
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

      {/* ── PRICING GRID (white) ── */}
      <section className="relative py-20 px-6 bg-white">
        <div
          className="absolute top-0 left-0 right-0 h-1"
          style={{
            background:
              "linear-gradient(90deg, #6366f1, #a78bfa, #ec4899, #f59e0b, #10b981, #06b6d4)",
          }}
        />

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {pricingServices.map((s) => (
              <PriceCard key={s.title} service={s} />
            ))}
          </div>

          <p className="text-center text-xs text-gray-400 mt-10">
            All prices are indicative. Final quote depends on scope &
            requirements.{" "}
            <button
              onClick={() =>
                openWhatsApp(
                  "Hello Merajsoft! 👋\n\nI'm interested in a *Custom Bundle* combining multiple services.\n\nCould you please share a custom quote?\n\nThank you!",
                )
              }
              className="font-bold underline underline-offset-2 leading-none p-0 text-xs"
              style={{ color: "#6366f1" }}
            >
              Custom bundles available →
            </button>
          </p>
        </div>
      </section>
    </main>
  );
}
