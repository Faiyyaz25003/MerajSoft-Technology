"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

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
      { threshold: 0.5 }
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

// ─── Service Modal ───────────────────────────────────────────────────
function ServiceModal({ service, onClose }) {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!service) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(15,23,42,0.6)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl rounded-3xl p-8"
        style={{
          background: "#ffffff",
          boxShadow: `0 0 0 1px rgba(0,0,0,0.06), 0 32px 80px rgba(0,0,0,0.18), 0 0 60px ${service.color}18`,
          animation: "fadeUp 0.3s ease both",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 transition-colors text-xl leading-none w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
        >
          ✕
        </button>
        <div className="flex items-center gap-4 mb-6">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
            style={{ background: `${service.color}12`, border: `1.5px solid ${service.color}25` }}
          >
            {service.icon}
          </div>
          <div>
            <h3 className="text-gray-900 font-bold text-2xl hero-title">{service.title}</h3>
            <p style={{ color: service.color }} className="text-sm font-semibold mt-0.5">{service.modal.tagline}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">{service.modal.detail}</p>
            <div className="mb-3 text-gray-800 font-bold text-sm">Key Benefits</div>
            <ul className="space-y-2">
              {service.modal.benefits.map((b) => (
                <li key={b} className="flex items-center gap-2 text-gray-600 text-sm">
                  <span className="w-4 h-4 rounded-full flex items-center justify-center text-white text-xs flex-shrink-0" style={{ background: service.color }}>✓</span> {b}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="mb-3 text-gray-800 font-bold text-sm">Features Included</div>
            <ul className="space-y-2 mb-6">
              {service.modal.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-gray-600 text-sm">
                  <span className="w-4 h-4 rounded-full flex items-center justify-center text-white text-xs flex-shrink-0" style={{ background: service.color }}>✓</span> {f}
                </li>
              ))}
            </ul>
            <div className="rounded-2xl p-4 border" style={{ background: `${service.color}08`, borderColor: `${service.color}20` }}>
              <div className="text-gray-800 font-bold text-sm mb-1">Our Results</div>
              <div className="text-gray-500 text-xs mb-3">{service.modal.result.label}</div>
              <span className="text-xs font-bold px-3 py-1.5 rounded-full text-white" style={{ background: service.color }}>
                {service.modal.result.value}
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
          <button
            className="px-6 py-3 rounded-xl font-bold text-sm text-white transition-all duration-200 hover:opacity-90 flex items-center gap-2 shadow-lg"
            style={{ background: `linear-gradient(135deg, ${service.color}, ${service.color}cc)`, boxShadow: `0 8px 24px ${service.color}35` }}
          >
            Get Started →
          </button>
          <button
            onClick={onClose}
            className="px-6 py-3 rounded-xl font-bold text-sm text-gray-500 border border-gray-200 hover:border-gray-300 hover:text-gray-700 transition-all duration-200"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Service Card ────────────────────────────────────────────────────
function ServiceCard({ icon, title, desc, color, delay, onLearnMore }) {
  return (
    <div
      className="group relative rounded-2xl p-6 border border-gray-100 bg-white hover:border-gray-200 transition-all duration-500 hover:-translate-y-2 cursor-pointer overflow-hidden"
      style={{
        animationDelay: `${delay}ms`,
        boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.04)",
      }}
      onMouseEnter={(e) => { e.currentTarget.style.boxShadow = `0 8px 40px rgba(0,0,0,0.10), 0 0 0 1px ${color}25`; }}
      onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.04)"; }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
        style={{ background: `radial-gradient(circle at 50% 0%, ${color}08, transparent 70%)` }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl"
        style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
      />
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
        style={{ background: `${color}10`, border: `1.5px solid ${color}20` }}
      >
        {icon}
      </div>
      <h3 className="text-gray-900 font-bold text-lg mb-2">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
      <button
        onClick={onLearnMore}
        className="mt-4 flex items-center gap-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 bg-transparent border-none cursor-pointer p-0"
        style={{ color }}
      >
        Learn more <span>→</span>
      </button>
    </div>
  );
}

// ─── Project Card ────────────────────────────────────────────────────
function ProjectCard({ title, tech, category, imageUrl, emoji, stats, accentColor, about, features, devInfo, metrics }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="group rounded-2xl overflow-hidden border border-gray-100 bg-white transition-all duration-300 hover:-translate-y-1 cursor-pointer"
      style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.05)" }}
      onMouseEnter={(e) => { e.currentTarget.style.boxShadow = `0 12px 40px rgba(0,0,0,0.10), 0 0 0 1px ${accentColor}20`; }}
      onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.05)"; }}
      onClick={() => setExpanded(!expanded)}
    >
      {/* Image */}
      <div style={{ height: "180px", position: "relative", overflow: "hidden" }}>
        <img
          src={imageUrl}
          alt={title}
          className="group-hover:scale-105 transition-transform duration-700"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.45) 100%)" }} />
        <span style={{
          position: "absolute", top: 10, left: 10, fontSize: 11, fontWeight: 700,
          padding: "3px 10px", borderRadius: 99,
          background: `${accentColor}ee`, color: "#fff",
        }}>{category}</span>
        <span style={{ position: "absolute", top: 8, right: 10, fontSize: 22 }}>{emoji}</span>
      </div>

      {/* Body */}
      <div style={{ padding: "16px 18px" }}>
        <h3 className="hero-title" style={{ color: "#111827", fontWeight: 700, fontSize: 14, margin: "0 0 4px" }}>{title}</h3>
        <p style={{ color: "#9ca3af", fontSize: 11, fontFamily: "monospace", margin: "0 0 12px" }}>{tech}</p>
        <div style={{ display: "flex", gap: 16, borderTop: "1px solid #f3f4f6", paddingTop: 10, marginBottom: expanded ? 12 : 0 }}>
          {stats.map((s) => (
            <div key={s.label}>
              <div style={{ color: accentColor, fontWeight: 700, fontSize: 13 }}>{s.value}</div>
              <div style={{ color: "#9ca3af", fontSize: 10 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Expandable detail */}
        {expanded && (
          <div style={{ borderTop: "1px solid #f3f4f6", paddingTop: 12, animation: "fadeUp 0.2s ease both" }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: accentColor, marginBottom: 4 }}>About</div>
            <p style={{ color: "#6b7280", fontSize: 12, lineHeight: 1.6, margin: "0 0 10px" }}>{about}</p>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: accentColor, marginBottom: 6 }}>Stack</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
              {devInfo.map((d) => (
                <span key={d} style={{ fontSize: 10, fontWeight: 600, padding: "2px 8px", borderRadius: 6, background: `${accentColor}12`, color: accentColor, border: `1px solid ${accentColor}25` }}>{d}</span>
              ))}
            </div>
          </div>
        )}

        <div style={{ marginTop: 10, fontSize: 11, color: accentColor, fontWeight: 600 }}>
          {expanded ? "▲ Show less" : "▼ View details"}
        </div>
      </div>
    </div>
  );
}

// ─── Testimonial Card ────────────────────────────────────────────────
function TestimonialCard({ name, role, company, text, avatar, color, highlight }) {
  return (
    <div
      className="rounded-2xl p-6 border border-gray-100 bg-white hover:border-gray-200 transition-all duration-300 flex flex-col gap-4 group hover:-translate-y-1"
      style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.04)" }}
      onMouseEnter={(e) => { e.currentTarget.style.boxShadow = `0 12px 40px rgba(0,0,0,0.10), 0 0 0 1px ${color}20`; }}
      onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.04)"; }}
    >
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-amber-400 text-sm">★</span>
        ))}
      </div>
      <p className="text-gray-600 text-sm leading-relaxed flex-1">{text}</p>
      {highlight && (
        <div className="text-xs font-semibold px-3 py-1 rounded-full w-fit border"
          style={{ background: `${color}08`, color: color, borderColor: `${color}20` }}>
          {highlight}
        </div>
      )}
      <div className="flex items-center gap-3 mt-auto border-t border-gray-50 pt-4">
        <div
          className="w-11 h-11 rounded-full flex items-center justify-center text-base font-bold text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
          style={{ background: `linear-gradient(135deg, ${color}, ${color}80)` }}
        >
          {avatar}
        </div>
        <div>
          <div className="text-gray-900 font-semibold text-sm">{name}</div>
          <div className="text-gray-400 text-xs">{role} · <span className="font-semibold" style={{ color }}>{company}</span></div>
        </div>
      </div>
    </div>
  );
}

// ─── Tech Logo Item ───────────────────────────────────────────────────
function TechItem({ name, logoUrl, color }) {
  return (
    <div
      className="group flex flex-col items-center gap-3 p-4 rounded-2xl border border-gray-100 bg-white hover:border-gray-200 transition-all duration-300 hover:-translate-y-2 cursor-default"
      style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.03)" }}
      onMouseEnter={(e) => { e.currentTarget.style.boxShadow = `0 8px 30px rgba(0,0,0,0.08), 0 0 0 1px ${color}30`; }}
      onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.03)"; }}
    >
      <div
        className="w-14 h-14 flex items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
        style={{ background: `${color}10`, border: `1.5px solid ${color}20` }}
      >
        <img src={logoUrl} alt={name} className="w-9 h-9 object-contain" />
      </div>
      <span className="text-gray-500 text-xs font-semibold group-hover:text-gray-800 transition-colors duration-300">{name}</span>
    </div>
  );
}

// ─── MAIN PAGE ───────────────────────────────────────────────────────
export default function Home() {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      icon: "🌐", title: "Web Development", color: "#6366f1",
      desc: "Blazing-fast, SEO-optimized websites with modern frameworks like Next.js, React & Vue.",
      modal: {
        tagline: "Modern, fast & scalable web experiences",
        detail: "We build high-performance websites and web apps using cutting-edge frameworks. From landing pages to complex dashboards, every pixel is crafted for speed, SEO, and conversion.",
        benefits: ["Lightning-fast load times", "SEO-optimized from ground up", "Mobile-first responsive design", "Scalable architecture"],
        features: ["Next.js / React / Vue.js", "Tailwind CSS + Custom UI", "API Integration", "CMS Setup", "Performance Audits"],
        result: { label: "Average performance score", value: "98/100 Lighthouse" },
      },
    },
    {
      icon: "📱", title: "App Development", color: "#3b82f6",
      desc: "Cross-platform mobile apps for iOS & Android using React Native & Flutter.",
      modal: {
        tagline: "Native-quality apps for every platform",
        detail: "We craft beautiful, performant mobile apps using React Native and Flutter. One codebase, two platforms — without compromising on quality or user experience.",
        benefits: ["Single codebase for iOS & Android", "Native-like performance", "Offline-first capabilities", "Push notifications & analytics"],
        features: ["React Native / Flutter", "Firebase Integration", "App Store Deployment", "In-App Purchases", "Real-time features"],
        result: { label: "Average app store rating", value: "4.8★ Rating" },
      },
    },
    {
      icon: "🛒", title: "E-Commerce", color: "#10b981",
      desc: "Scalable online stores with Shopify, WooCommerce, or custom-built solutions.",
      modal: {
        tagline: "Sell more with smarter storefronts",
        detail: "From Shopify themes to fully custom headless commerce, we build stores that convert. Integrated payments, inventory, and analytics — all optimized for revenue growth.",
        benefits: ["Higher conversion rates", "Fast checkout experience", "Inventory & order management", "Multi-currency support"],
        features: ["Shopify / WooCommerce", "Headless Commerce", "Stripe / Razorpay", "Product Catalog", "Analytics Dashboard"],
        result: { label: "Average client revenue growth", value: "↑ 3x Revenue" },
      },
    },
    {
      icon: "🔍", title: "SEO Optimization", color: "#f59e0b",
      desc: "Drive organic traffic with technical SEO, content strategies & performance audits.",
      modal: {
        tagline: "Sustainable organic growth",
        detail: "Our SEO strategies combine technical excellence with content optimization to improve rankings and drive qualified traffic that converts.",
        benefits: ["Higher search rankings", "Increased organic traffic", "Better user experience", "Long-term results", "Competitive advantage"],
        features: ["Technical SEO Audits", "Keyword Research", "Content Optimization", "Link Building", "Local SEO"],
        result: { label: "Average improvement for clients", value: "↑ 200% Traffic" },
      },
    },
    {
      icon: "📍", title: "Google Business Profile", color: "#ec4899",
      desc: "Dominate local search results and grow your local customer base effectively.",
      modal: {
        tagline: "Own your local market",
        detail: "We optimize and manage your Google Business Profile to ensure you appear prominently in local searches, Maps, and the local pack — turning nearby searches into real customers.",
        benefits: ["Top of local search results", "More walk-in customers", "Better online reputation", "Increased call volume"],
        features: ["GBP Setup & Verification", "Review Management", "Post Scheduling", "Q&A Optimization", "Insights Reporting"],
        result: { label: "Average increase in local calls", value: "↑ 150% Calls" },
      },
    },
    {
      icon: "☁️", title: "Cloud & DevOps", color: "#06b6d4",
      desc: "AWS, GCP, and Azure deployments with CI/CD pipelines and infrastructure as code.",
      modal: {
        tagline: "Reliable infrastructure at any scale",
        detail: "We design, deploy, and manage cloud infrastructure that keeps your product running at 99.9% uptime. Automated pipelines, zero-downtime deployments, and cost-optimized architecture.",
        benefits: ["99.9% uptime guarantee", "80% faster deployments", "Auto-scaling infrastructure", "Cost optimization"],
        features: ["AWS / GCP / Azure", "Docker & Kubernetes", "CI/CD Pipelines", "Infrastructure as Code", "Monitoring & Alerts"],
        result: { label: "Average deployment time reduction", value: "↓ 80% Deploy Time" },
      },
    },
  ];

  const stats = [
    { value: 150, suffix: "+", label: "Projects Delivered" },
    { value: 98, suffix: "%", label: "Client Satisfaction" },
    { value: 7, suffix: "+", label: "Years Experience" },
    { value: 40, suffix: "+", label: "Expert Team Members" },
  ];

  const projects = [
    {
      title: "NeoBank — AI Finance Platform",
      tech: "Next.js · Node.js · PostgreSQL · OpenAI · Stripe",
      category: "FinTech", imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=85",
      emoji: "💹", accentColor: "#6366f1",
      stats: [{ value: "2.4M+", label: "Transactions" }, { value: "99.9%", label: "Uptime" }, { value: "4.8★", label: "Rating" }],
      about: "AI-powered banking dashboard with real-time fraud detection, personalized financial insights, and seamless multi-currency support for 2.4M+ transactions.",
      features: "Real-time analytics · AI fraud detection · Multi-currency wallet · Instant transfers · KYC onboarding · Smart budgeting",
      devInfo: ["Next.js", "Node.js", "PostgreSQL", "OpenAI", "Stripe", "Redis"],
      metrics: "2.4M+ transactions · 99.9% uptime · 12ms TTFB · 98/100 Lighthouse · 4.8★ rating",
    },
    {
      title: "PulseHealth — Telemedicine",
      tech: "React Native · Firebase · Node.js · WebRTC · ML Kit",
      category: "HealthTech", imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=700&q=85",
      emoji: "🏥", accentColor: "#10b981",
      stats: [{ value: "50K+", label: "Patients" }, { value: "HIPAA", label: "Compliant" }, { value: "< 1s", label: "Load Time" }],
      about: "Cross-platform telemedicine app enabling HD video consultations, e-prescriptions, and AI-assisted health monitoring for 50,000+ active patients.",
      features: "HD video consultations · E-prescriptions · Vitals tracking · Doctor booking · Lab reports · Appointment reminders",
      devInfo: ["React Native", "Firebase", "Node.js", "WebRTC", "ML Kit", "AWS"],
      metrics: "50K+ patients · HIPAA certified · <1s load time · 4.9★ App Store · 300+ doctors onboarded",
    },
    {
      title: "NexCart — Headless Commerce",
      tech: "Next.js · Shopify · GraphQL · Stripe · Redis",
      category: "E-Commerce", imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=700&q=85",
      emoji: "🛍️", accentColor: "#f59e0b",
      stats: [{ value: "3x", label: "Revenue Growth" }, { value: "98/100", label: "Lighthouse" }, { value: "12ms", label: "TTFB" }],
      about: "Headless Shopify storefront with blazing-fast performance, AI-powered product recommendations, and a seamless checkout flow that tripled client revenue.",
      features: "Headless storefront · AI recommendations · One-click checkout · Inventory management · Multi-currency · Analytics dashboard",
      devInfo: ["Next.js", "Shopify", "GraphQL", "Stripe", "Redis", "Vercel"],
      metrics: "3x revenue growth · 98/100 Lighthouse · 12ms TTFB · 40% cart abandonment reduction",
    },
    {
      title: "SkillForge — AI Learning",
      tech: "Vue.js · Django · AWS · GPT-4 · WebSockets",
      category: "EdTech", imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=700&q=85",
      emoji: "🎓", accentColor: "#8b5cf6",
      stats: [{ value: "100K+", label: "Learners" }, { value: "500+", label: "Courses" }, { value: "4.9★", label: "App Store" }],
      about: "GPT-4 powered adaptive learning platform that personalizes course paths for 100,000+ learners across 500+ courses with real-time progress tracking.",
      features: "AI adaptive learning · Live coding sandbox · Peer collaboration · Certificates · Progress analytics · Mentor sessions",
      devInfo: ["Vue.js", "Django", "AWS", "GPT-4", "WebSockets", "PostgreSQL"],
      metrics: "100K+ learners · 500+ courses · 4.9★ App Store · 87% course completion rate · 40+ languages",
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma", role: "CTO", company: "FinVault India",
      text: "Merajsoft ne hamara poora banking dashboard rebuild kiya — code quality itni clean thi ke humara in-house team bhi hairan reh gayi. Yeh log sirf software nahi banate, masterpiece banate hain.",
      avatar: "P", color: "#6366f1", highlight: "🏆 Best-in-class Code Quality",
    },
    {
      name: "Rahul Mehta", role: "Founder", company: "ShopNova",
      text: "Maine 4 agencies try ki thi, lekin Merajsoft ka kaam dekhke sab ko reject kar diya. Unka software itna fast aur bug-free tha ke hum launch ke pehle se hi confident the. Truly world-class builders.",
      avatar: "R", color: "#8b5cf6", highlight: "⚡ Zero Bugs at Launch",
    },
    {
      name: "Ananya Patel", role: "Marketing Head", company: "GrowthLabs",
      text: "Sirf 90 din mein Page 1 — yeh sunta tha lekin Merajsoft ne actually kar dikhaya. Aur jo web app unhone banaya, uski speed aur UI ne humari conversion rate 3x kar di. Exceptional software engineering.",
      avatar: "A", color: "#ec4899", highlight: "📈 3x Conversion Boost",
    },
    {
      name: "Vikram Nair", role: "CEO", company: "TechVentures",
      text: "6 hafte mein enterprise-grade platform — yeh sirf Merajsoft kar sakti hai. Architecture itna solid tha ke 8 mahine baad bhi ek line nahi badalni padi. Best software company I've ever worked with.",
      avatar: "V", color: "#3b82f6", highlight: "🚀 6-Week Enterprise Delivery",
    },
    {
      name: "Sneha Joshi", role: "Product Manager", company: "MediCore",
      text: "Hamari healthcare app App Store pe 4.9 stars hai — users continuously mention karte hain ke UI kitni smooth aur intuitive hai. Merajsoft ka software design ek alag hi level ka hota hai. Absolutely brilliant team.",
      avatar: "S", color: "#10b981", highlight: "⭐ 4.9 App Store Rating",
    },
    {
      name: "Arjun Kapoor", role: "Operations Head", company: "DeployX",
      text: "CI/CD pipeline aur DevOps setup aise ki deployment time 80% kam ho gayi. 8+ mahine mein zero downtime — yeh software reliability ka ek naya standard set kar diya unhone. Truly the best in the business.",
      avatar: "K", color: "#f59e0b", highlight: "🛡️ 8 Months Zero Downtime",
    },
  ];

  const techStack = [
    { name: "React", color: "#61DAFB", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", color: "#000000", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Node.js", color: "#339933", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express.js", color: "#000000", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "React Native", color: "#61DAFB", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "AWS", color: "#FF9900", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
    { name: "MongoDB", color: "#47A248", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "PostgreSQL", color: "#4169E1", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "Docker", color: "#2496ED", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Figma", color: "#F24E1E", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  ];

  const processSteps = [
    { num: "01", title: "Discovery", desc: "We deep-dive into your business goals, audience, and technical needs.", icon: "🔎" },
    { num: "02", title: "Strategy", desc: "Roadmap, architecture, and tech stack tailored for your success.", icon: "🗺️" },
    { num: "03", title: "Design", desc: "Pixel-perfect UI/UX that delights users and drives conversions.", icon: "🎨" },
    { num: "04", title: "Build", desc: "Agile development with weekly sprints, demos, and feedback loops.", icon: "⚙️" },
    { num: "05", title: "Launch", desc: "QA, performance testing, and a flawless go-live deployment.", icon: "🚀" },
    { num: "06", title: "Growth", desc: "Post-launch support, analytics monitoring, and continuous improvements.", icon: "📈" },
  ];

  return (
    <main
      className="min-h-screen text-gray-900"
      style={{ background: "#f8fafc", fontFamily: "'DM Sans', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Syne:wght@700;800;900&display=swap');
        .hero-title { font-family: 'Syne', sans-serif; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes heroImgReveal {
          from { opacity: 0; transform: scale(0.97) translateY(16px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes spin-slow {
          from { transform: translate(-50%,-50%) rotate(0deg); }
          to { transform: translate(-50%,-50%) rotate(360deg); }
        }
        @keyframes spin-slow-rev {
          from { transform: translate(-50%,-50%) rotate(0deg); }
          to { transform: translate(-50%,-50%) rotate(-360deg); }
        }
        .hero-fade-1 { animation: fadeUp 0.9s ease 0.1s both; }
        .hero-fade-2 { animation: fadeUp 0.9s ease 0.3s both; }
        .hero-fade-3 { animation: fadeUp 0.9s ease 0.5s both; }
        .hero-fade-4 { animation: fadeUp 0.9s ease 0.7s both; }
        .gradient-text {
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 45%, #ec4899 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .shimmer-text {
          background: linear-gradient(90deg, #6366f1, #8b5cf6, #ec4899, #6366f1);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 28s linear infinite;
          position: absolute; top: 50%; left: 50%;
        }
        .animate-spin-slow-rev {
          animation: spin-slow-rev 20s linear infinite;
          position: absolute; top: 50%; left: 50%;
        }
        .section-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(99,102,241,0.15), rgba(139,92,246,0.15), transparent);
        }
        @media (max-width: 768px) {
          .hero-title { font-size: 2.4rem !important; }
        }
      `}</style>

      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden"
        style={{
          minHeight: "92vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1800&q=90"
          alt="Team working"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ zIndex: 0 }}
        />

        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(10,10,30,0.78) 0%, rgba(20,10,40,0.72) 50%, rgba(30,10,30,0.75) 100%)",
            zIndex: 1,
          }}
        />

        {/* Content */}
        <div
          className="relative z-10 flex flex-col items-center justify-center text-center px-6"
          style={{ zIndex: 3 }}
        >
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="text-center group relative"
                style={{ animation: `fadeUp 0.6s ease ${i * 100}ms both` }}
              >
                <div className="hero-title text-4xl md:text-5xl font-black gradient-text mb-2">
                  <Counter target={s.value} suffix={s.suffix} />
                </div>
                <div className="text-gray-500 text-sm font-medium">
                  {s.label}
                </div>
                {i < stats.length - 1 && (
                  <div
                    className="hidden md:block absolute right-0 top-1/4 h-1/2 w-px"
                    style={{
                      background:
                        "linear-gradient(to bottom, transparent, #e5e7eb, transparent)",
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 border"
            style={{
              background: "rgba(99,102,241,0.06)",
              borderColor: "rgba(99,102,241,0.15)",
              color: "#6366f1",
            }}
          >
            OUR SERVICES
          </div>
          <h2 className="hero-title text-4xl md:text-5xl font-extrabold">
            What <span className="gradient-text">We Do</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            End-to-end digital solutions — from strategy to deployment, we
            handle it all.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ServiceCard
              key={s.title}
              {...s}
              delay={i * 80}
              onLearnMore={() => setActiveService(s)}
            />
          ))}
        </div>
      </section>

      <div className="section-divider" />

      {/* ── PROCESS ── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 border"
              style={{
                background: "rgba(99,102,241,0.06)",
                borderColor: "rgba(99,102,241,0.15)",
                color: "#6366f1",
              }}
            >
              HOW WE WORK
            </div>
            <h2 className="hero-title text-4xl md:text-5xl font-extrabold">
              Our <span className="gradient-text">Process</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, i) => (
              <div
                key={step.num}
                className="group rounded-2xl p-7 border border-gray-100 bg-white hover:border-indigo-200 transition-all duration-300 hover:-translate-y-2 cursor-default"
                style={{
                  boxShadow:
                    "0 1px 3px rgba(0,0,0,0.03), 0 4px 16px rgba(0,0,0,0.04)",
                  animation: `fadeUp 0.6s ease ${i * 80}ms both`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 12px 40px rgba(99,102,241,0.12), 0 0 0 1px rgba(99,102,241,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 1px 3px rgba(0,0,0,0.03), 0 4px 16px rgba(0,0,0,0.04)";
                }}
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="text-4xl font-black hero-title text-gray-100 group-hover:text-indigo-100 transition-colors duration-300">
                    {step.num}
                  </div>
                  <span className="text-2xl">{step.icon}</span>
                </div>
                <h3 className="text-gray-900 font-bold text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── PROJECTS ── */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-4">
          <div>
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 border"
              style={{
                background: "rgba(99,102,241,0.06)",
                borderColor: "rgba(99,102,241,0.15)",
                color: "#6366f1",
              }}
            >
              CASE STUDIES
            </div>
            <h2 className="hero-title text-4xl md:text-5xl font-extrabold">
              Our <span className="gradient-text">Work</span>
            </h2>
          </div>
          <Link href="/projects">
            <button
              className="text-indigo-500 font-semibold hover:text-indigo-600 transition flex items-center gap-2 group text-sm border border-indigo-200 hover:border-indigo-300 px-4 py-2 rounded-xl bg-white"
              style={{ boxShadow: "0 2px 8px rgba(99,102,241,0.08)" }}
            >
              View All Projects{" "}
              <span className="group-hover:translate-x-1 transition-transform duration-200">
                →
              </span>
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </section>

      <div className="section-divider" />

      {/* ── TECH STACK ── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 border"
            style={{
              background: "rgba(99,102,241,0.06)",
              borderColor: "rgba(99,102,241,0.15)",
              color: "#6366f1",
            }}
          >
            TECHNOLOGIES
          </div>
          <h2 className="hero-title text-4xl font-extrabold mb-10">
            Our <span className="gradient-text">Tech Stack</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
            {techStack.map((t) => (
              <TechItem key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 border"
            style={{
              background: "rgba(99,102,241,0.06)",
              borderColor: "rgba(99,102,241,0.15)",
              color: "#6366f1",
            }}
          >
            CLIENT REVIEWS
          </div>
          <h2 className="hero-title text-4xl md:text-5xl font-extrabold">
            What Clients <span className="gradient-text">Say</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </section>

      <div className="section-divider" />

      {/* ── WHY US ── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 border"
              style={{
                background: "rgba(99,102,241,0.06)",
                borderColor: "rgba(99,102,241,0.15)",
                color: "#6366f1",
              }}
            >
              WHY CHOOSE US
            </div>
            <h2 className="hero-title text-4xl md:text-5xl font-extrabold">
              Why <span className="gradient-text">Merajsoft</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              [
                "⚡",
                "#6366f1",
                "Fast Delivery",
                "Two-week sprints with continuous demos so you're never in the dark.",
              ],
              [
                "🛡️",
                "#10b981",
                "Secure by Default",
                "OWASP compliance, data encryption, and security audits baked in from day one.",
              ],
              [
                "📈",
                "#f59e0b",
                "Scalable Architecture",
                "Built to handle 10x your current traffic without a rewrite.",
              ],
              [
                "🎯",
                "#ec4899",
                "Business-First Thinking",
                "We don't just write code — we solve business problems with technology.",
              ],
            ].map(([icon, color, title, desc]) => (
              <div
                key={title}
                className="flex gap-5 p-6 rounded-2xl border border-gray-100 bg-white hover:border-gray-200 transition-all duration-300 group hover:-translate-y-1"
                style={{
                  boxShadow:
                    "0 1px 3px rgba(0,0,0,0.03), 0 4px 16px rgba(0,0,0,0.04)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 12px 40px rgba(0,0,0,0.08), 0 0 0 1px ${color}20`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 1px 3px rgba(0,0,0,0.03), 0 4px 16px rgba(0,0,0,0.04)";
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300 mt-0.5"
                  style={{
                    background: `${color}10`,
                    border: `1.5px solid ${color}20`,
                  }}
                >
                  {icon}
                </div>
                <div>
                  <div className="text-gray-900 font-bold text-base mb-1">
                    {title}
                  </div>
                  <div className="text-gray-500 text-sm leading-relaxed">
                    {desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-20 px-6">
        <div
          className="max-w-4xl mx-auto text-center rounded-3xl p-14 border border-indigo-100 relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, #eef2ff 0%, #f5f3ff 50%, #fdf2f8 100%)",
            boxShadow: "0 20px 60px rgba(99,102,241,0.10)",
          }}
        >
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `linear-gradient(rgba(99,102,241,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />
          <h2 className="hero-title text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 relative z-10">
            Ready to Build{" "}
            <span className="gradient-text">Something Great?</span>
          </h2>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto relative z-10">
            Join 150+ businesses that trust Merajsoft to deliver world-class
            digital products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <button
              className="px-8 py-4 rounded-2xl font-bold text-white text-base transition-all duration-300 hover:opacity-90 hover:-translate-y-1"
              style={{
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                boxShadow: "0 12px 40px rgba(99,102,241,0.30)",
              }}
            >
              Get a Free Consultation →
            </button>
            <button className="px-8 py-4 rounded-2xl font-bold text-gray-700 text-base border border-gray-200 bg-white hover:border-indigo-300 hover:text-indigo-600 transition-all duration-300 hover:-translate-y-1">
              View Case Studies
            </button>
          </div>
        </div>
      </section>

      {/* ── SERVICE MODAL ── */}
      {activeService && (
        <ServiceModal
          service={activeService}
          onClose={() => setActiveService(null)}
        />
      )}
    </main>
  );
}
