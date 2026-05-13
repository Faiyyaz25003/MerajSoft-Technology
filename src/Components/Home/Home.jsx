
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

// ─── Particle Field ─────────────────────────────────────────────────
function ParticleField() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const generated = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 8,
      duration: Math.random() * 6 + 6,
    }));
    setParticles(generated);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-indigo-400 opacity-20"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            animation: `twinkle ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}
      <div
        className="absolute rounded-full blur-3xl opacity-20 animate-pulse"
        style={{
          width: 700,
          height: 700,
          background: "radial-gradient(circle, #4f46e5, #7c3aed)",
          top: "-20%",
          left: "-15%",
          animationDuration: "7s",
        }}
      />
      <div
        className="absolute rounded-full blur-3xl opacity-15"
        style={{
          width: 500,
          height: 500,
          background: "radial-gradient(circle, #7c3aed, #db2777)",
          top: "30%",
          right: "-12%",
          animation: "pulse 9s ease-in-out infinite",
        }}
      />
      <div
        className="absolute rounded-full blur-3xl opacity-10"
        style={{
          width: 400,
          height: 400,
          background: "radial-gradient(circle, #0891b2, #4f46e5)",
          bottom: "0%",
          left: "25%",
          animation: "pulse 11s ease-in-out infinite",
        }}
      />
    </div>
  );
}

// ─── Service Modal ───────────────────────────────────────────────────
function ServiceModal({ service, onClose }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
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
      style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(6px)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl rounded-2xl border border-white/10 p-8"
        style={{
          background: "linear-gradient(135deg, #0f0f1f 0%, #141428 100%)",
          boxShadow: `0 0 80px ${service.color}30, 0 40px 80px rgba(0,0,0,0.7)`,
          animation: "fadeUp 0.3s ease both",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-white transition-colors text-xl leading-none"
        >
          ✕
        </button>

        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div
            className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
            style={{
              background: `${service.color}20`,
              border: `1px solid ${service.color}40`,
            }}
          >
            {service.icon}
          </div>
          <div>
            <h3 className="text-white font-bold text-2xl hero-title">
              {service.title}
            </h3>
            <p
              style={{ color: service.color }}
              className="text-sm font-medium mt-0.5"
            >
              {service.modal.tagline}
            </p>
          </div>
        </div>

        {/* Body — two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left */}
          <div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              {service.modal.detail}
            </p>
            <div className="mb-3 text-white font-bold text-sm">
              Key Benefits
            </div>
            <ul className="space-y-2">
              {service.modal.benefits.map((b) => (
                <li
                  key={b}
                  className="flex items-center gap-2 text-gray-300 text-sm"
                >
                  <span style={{ color: service.color }}>✓</span> {b}
                </li>
              ))}
            </ul>
          </div>

          {/* Right */}
          <div>
            <div className="mb-3 text-white font-bold text-sm">
              Features Included
            </div>
            <ul className="space-y-2 mb-6">
              {service.modal.features.map((f) => (
                <li
                  key={f}
                  className="flex items-center gap-2 text-gray-300 text-sm"
                >
                  <span style={{ color: service.color }}>✓</span> {f}
                </li>
              ))}
            </ul>

            {/* Result chip */}
            <div
              className="rounded-xl p-4 border"
              style={{
                background: `${service.color}10`,
                borderColor: `${service.color}30`,
              }}
            >
              <div className="text-white font-bold text-sm mb-1">
                Our Results
              </div>
              <div className="text-gray-400 text-xs mb-3">
                {service.modal.result.label}
              </div>
              <span
                className="text-xs font-bold px-3 py-1.5 rounded-full"
                style={{ background: service.color, color: "#fff" }}
              >
                {service.modal.result.value}
              </span>
            </div>
          </div>
        </div>

        {/* Footer buttons */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/10">
          <button
            className="px-6 py-3 rounded-xl font-bold text-sm text-white transition-all duration-200 hover:opacity-90 flex items-center gap-2"
            style={{
              background: `linear-gradient(135deg, ${service.color}, ${service.color}aa)`,
            }}
          >
            Get Started →
          </button>
          <button
            onClick={onClose}
            className="px-6 py-3 rounded-xl font-bold text-sm text-gray-300 border border-white/10 hover:border-white/25 hover:text-white transition-all duration-200"
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
      className="group relative rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl cursor-pointer overflow-hidden"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${color}25, transparent 70%)`,
        }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
        }}
      />
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
        style={{ background: `${color}20`, border: `1px solid ${color}40` }}
      >
        {icon}
      </div>
      <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
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
function ProjectCard({
  title,
  tech,
  category,
  imageUrl,
  emoji,
  stats,
  accentColor,
}) {
  return (
    <div className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:border-white/25 transition-all duration-500 hover:-translate-y-2 cursor-pointer">
      <div className="h-52 relative overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
        <span
          className="absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full border backdrop-blur-sm"
          style={{
            background: `${accentColor}25`,
            borderColor: `${accentColor}50`,
            color: accentColor,
          }}
        >
          {category}
        </span>
        <span className="absolute top-3 right-3 text-2xl group-hover:scale-125 transition-transform duration-500">
          {emoji}
        </span>
      </div>
      <div className="p-5">
        <h3 className="text-white font-bold text-lg mb-1 group-hover:text-indigo-300 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-500 text-xs mb-4 font-mono">{tech}</p>
        <div className="flex gap-4 border-t border-white/5 pt-4">
          {stats.map((s) => (
            <div key={s.label}>
              <div
                className="text-white font-bold text-sm"
                style={{ color: accentColor }}
              >
                {s.value}
              </div>
              <div className="text-gray-600 text-xs">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{ boxShadow: `inset 0 0 40px ${accentColor}15` }}
      />
    </div>
  );
}

// ─── Testimonial Card ────────────────────────────────────────────────
function TestimonialCard({
  name,
  role,
  company,
  text,
  avatar,
  color,
  highlight,
}) {
  return (
    <div className="rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/8 hover:border-white/20 transition-all duration-300 flex flex-col gap-4 group hover:-translate-y-1">
      <div
        className="text-5xl font-serif leading-none -mb-2 opacity-30"
        style={{ color }}
      >
        "
      </div>
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-yellow-400 text-sm">
            ★
          </span>
        ))}
      </div>
      <p className="text-gray-300 text-sm leading-relaxed flex-1">{text}</p>
      {highlight && (
        <div
          className="text-xs font-semibold px-3 py-1 rounded-full w-fit"
          style={{
            background: `${color}15`,
            color,
            border: `1px solid ${color}30`,
          }}
        >
          {highlight}
        </div>
      )}
      <div className="flex items-center gap-3 mt-auto border-t border-white/5 pt-4">
        <div
          className="w-11 h-11 rounded-full flex items-center justify-center text-base font-bold text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
          style={{
            background: `linear-gradient(135deg, ${color}, ${color}80)`,
          }}
        >
          {avatar}
        </div>
        <div>
          <div className="text-white font-semibold text-sm">{name}</div>
          <div className="text-gray-500 text-xs">
            {role} ·{" "}
            <span className="text-indigo-400 font-medium">{company}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Tech Logo Item ───────────────────────────────────────────────────
function TechItem({ name, logoUrl, color }) {
  return (
    <div className="group flex flex-col items-center gap-3 p-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-indigo-500/40 transition-all duration-300 hover:-translate-y-2 cursor-default">
      <div
        className="w-14 h-14 flex items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
        style={{ background: `${color}15`, border: `1px solid ${color}30` }}
      >
        <img src={logoUrl} alt={name} className="w-9 h-9 object-contain" />
      </div>
      <span className="text-gray-400 text-xs font-semibold group-hover:text-white transition-colors duration-300">
        {name}
      </span>
    </div>
  );
}

// ─── MAIN PAGE ───────────────────────────────────────────────────────
export default function HomePage() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [activeService, setActiveService] = useState(null);

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const services = [
    {
      icon: "🌐",
      title: "Web Development",
      color: "#6366f1",
      desc: "Blazing-fast, SEO-optimized websites with modern frameworks like Next.js, React & Vue.",
      modal: {
        tagline: "Modern, fast & scalable web experiences",
        detail:
          "We build high-performance websites and web apps using cutting-edge frameworks. From landing pages to complex dashboards, every pixel is crafted for speed, SEO, and conversion.",
        benefits: [
          "Lightning-fast load times",
          "SEO-optimized from ground up",
          "Mobile-first responsive design",
          "Scalable architecture",
        ],
        features: [
          "Next.js / React / Vue.js",
          "Tailwind CSS + Custom UI",
          "API Integration",
          "CMS Setup",
          "Performance Audits",
        ],
        result: {
          label: "Average performance score",
          value: "98/100 Lighthouse",
        },
      },
    },
    {
      icon: "📱",
      title: "App Development",
      color: "#3b82f6",
      desc: "Cross-platform mobile apps for iOS & Android using React Native & Flutter.",
      modal: {
        tagline: "Native-quality apps for every platform",
        detail:
          "We craft beautiful, performant mobile apps using React Native and Flutter. One codebase, two platforms — without compromising on quality or user experience.",
        benefits: [
          "Single codebase for iOS & Android",
          "Native-like performance",
          "Offline-first capabilities",
          "Push notifications & analytics",
        ],
        features: [
          "React Native / Flutter",
          "Firebase Integration",
          "App Store Deployment",
          "In-App Purchases",
          "Real-time features",
        ],
        result: { label: "Average app store rating", value: "4.8★ Rating" },
      },
    },
    {
      icon: "🛒",
      title: "E-Commerce",
      color: "#10b981",
      desc: "Scalable online stores with Shopify, WooCommerce, or custom-built solutions.",
      modal: {
        tagline: "Sell more with smarter storefronts",
        detail:
          "From Shopify themes to fully custom headless commerce, we build stores that convert. Integrated payments, inventory, and analytics — all optimized for revenue growth.",
        benefits: [
          "Higher conversion rates",
          "Fast checkout experience",
          "Inventory & order management",
          "Multi-currency support",
        ],
        features: [
          "Shopify / WooCommerce",
          "Headless Commerce",
          "Stripe / Razorpay",
          "Product Catalog",
          "Analytics Dashboard",
        ],
        result: {
          label: "Average client revenue growth",
          value: "↑ 3x Revenue",
        },
      },
    },
    {
      icon: "🔍",
      title: "SEO Optimization",
      color: "#f59e0b",
      desc: "Drive organic traffic with technical SEO, content strategies & performance audits.",
      modal: {
        tagline: "Sustainable organic growth",
        detail:
          "Our SEO strategies combine technical excellence with content optimization to improve rankings and drive qualified traffic that converts.",
        benefits: [
          "Higher search rankings",
          "Increased organic traffic",
          "Better user experience",
          "Long-term results",
          "Competitive advantage",
        ],
        features: [
          "Technical SEO Audits",
          "Keyword Research",
          "Content Optimization",
          "Link Building",
          "Local SEO",
        ],
        result: {
          label: "Average improvement for clients",
          value: "↑ 200% Traffic",
        },
      },
    },
    {
      icon: "📍",
      title: "Google Business Profile",
      color: "#ec4899",
      desc: "Dominate local search results and grow your local customer base effectively.",
      modal: {
        tagline: "Own your local market",
        detail:
          "We optimize and manage your Google Business Profile to ensure you appear prominently in local searches, Maps, and the local pack — turning nearby searches into real customers.",
        benefits: [
          "Top of local search results",
          "More walk-in customers",
          "Better online reputation",
          "Increased call volume",
        ],
        features: [
          "GBP Setup & Verification",
          "Review Management",
          "Post Scheduling",
          "Q&A Optimization",
          "Insights Reporting",
        ],
        result: {
          label: "Average increase in local calls",
          value: "↑ 150% Calls",
        },
      },
    },
    {
      icon: "☁️",
      title: "Cloud & DevOps",
      color: "#06b6d4",
      desc: "AWS, GCP, and Azure deployments with CI/CD pipelines and infrastructure as code.",
      modal: {
        tagline: "Reliable infrastructure at any scale",
        detail:
          "We design, deploy, and manage cloud infrastructure that keeps your product running at 99.9% uptime. Automated pipelines, zero-downtime deployments, and cost-optimized architecture.",
        benefits: [
          "99.9% uptime guarantee",
          "80% faster deployments",
          "Auto-scaling infrastructure",
          "Cost optimization",
        ],
        features: [
          "AWS / GCP / Azure",
          "Docker & Kubernetes",
          "CI/CD Pipelines",
          "Infrastructure as Code",
          "Monitoring & Alerts",
        ],
        result: {
          label: "Average deployment time reduction",
          value: "↓ 80% Deploy Time",
        },
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
      category: "FinTech",
      imageUrl:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=85",
      emoji: "💹",
      accentColor: "#6366f1",
      stats: [
        { value: "2.4M+", label: "Transactions" },
        { value: "99.9%", label: "Uptime" },
        { value: "4.8★", label: "Rating" },
      ],
    },
    {
      title: "PulseHealth — Telemedicine App",
      tech: "React Native · Firebase · Node.js · WebRTC · ML Kit",
      category: "HealthTech",
      imageUrl:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=700&q=85",
      emoji: "🏥",
      accentColor: "#10b981",
      stats: [
        { value: "50K+", label: "Patients" },
        { value: "HIPAA", label: "Compliant" },
        { value: "< 1s", label: "Load Time" },
      ],
    },
    {
      title: "NexCart — Headless Commerce",
      tech: "Next.js · Shopify · GraphQL · Stripe · Redis",
      category: "E-Commerce",
      imageUrl:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=700&q=85",
      emoji: "🛍️",
      accentColor: "#f59e0b",
      stats: [
        { value: "3x", label: "Revenue Growth" },
        { value: "98/100", label: "Lighthouse" },
        { value: "12ms", label: "TTFB" },
      ],
    },
    {
      title: "SkillForge — AI Learning Platform",
      tech: "Vue.js · Django · AWS · GPT-4 · WebSockets",
      category: "EdTech",
      imageUrl:
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=700&q=85",
      emoji: "🎓",
      accentColor: "#8b5cf6",
      stats: [
        { value: "100K+", label: "Learners" },
        { value: "500+", label: "Courses" },
        { value: "4.9★", label: "App Store" },
      ],
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "CTO",
      company: "FinVault India",
      text: "Merajsoft ne hamara poora banking dashboard rebuild kiya — code quality itni clean thi ke humara in-house team bhi hairan reh gayi. Yeh log sirf software nahi banate, masterpiece banate hain.",
      avatar: "P",
      color: "#6366f1",
      highlight: "🏆 Best-in-class Code Quality",
    },
    {
      name: "Rahul Mehta",
      role: "Founder",
      company: "ShopNova",
      text: "Maine 4 agencies try ki thi, lekin Merajsoft ka kaam dekhke sab ko reject kar diya. Unka software itna fast aur bug-free tha ke hum launch ke pehle se hi confident the. Truly world-class builders.",
      avatar: "R",
      color: "#8b5cf6",
      highlight: "⚡ Zero Bugs at Launch",
    },
    {
      name: "Ananya Patel",
      role: "Marketing Head",
      company: "GrowthLabs",
      text: "Sirf 90 din mein Page 1 — yeh sunta tha lekin Merajsoft ne actually kar dikhaya. Aur jo web app unhone banaya, uski speed aur UI ne humari conversion rate 3x kar di. Exceptional software engineering.",
      avatar: "A",
      color: "#ec4899",
      highlight: "📈 3x Conversion Boost",
    },
    {
      name: "Vikram Nair",
      role: "CEO",
      company: "TechVentures",
      text: "6 hafte mein enterprise-grade platform — yeh sirf Merajsoft kar sakti hai. Architecture itna solid tha ke 8 mahine baad bhi ek line nahi badalni padi. Best software company I've ever worked with.",
      avatar: "V",
      color: "#3b82f6",
      highlight: "🚀 6-Week Enterprise Delivery",
    },
    {
      name: "Sneha Joshi",
      role: "Product Manager",
      company: "MediCore",
      text: "Hamari healthcare app App Store pe 4.9 stars hai — users continuously mention karte hain ke UI kitni smooth aur intuitive hai. Merajsoft ka software design ek alag hi level ka hota hai. Absolutely brilliant team.",
      avatar: "S",
      color: "#10b981",
      highlight: "⭐ 4.9 App Store Rating",
    },
    {
      name: "Arjun Kapoor",
      role: "Operations Head",
      company: "DeployX",
      text: "CI/CD pipeline aur DevOps setup aise ki deployment time 80% kam ho gayi. 8+ mahine mein zero downtime — yeh software reliability ka ek naya standard set kar diya unhone. Truly the best in the business.",
      avatar: "K",
      color: "#f59e0b",
      highlight: "🛡️ 8 Months Zero Downtime",
    },
  ];

  const techStack = [
    {
      name: "React",
      color: "#61DAFB",
      logoUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Next.js",
      color: "#ffffff",
      logoUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "Node.js",
      color: "#339933",
      logoUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Express.js",
      color: "#ffffff",
      logoUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
      name: "React Native",
      color: "#61DAFB",
      logoUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "AWS",
      color: "#FF9900",
      logoUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
    },
    {
      name: "MongoDB",
      color: "#47A248",
      logoUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "PostgreSQL",
      color: "#4169E1",
      logoUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "Docker",
      color: "#2496ED",
      logoUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
    {
      name: "Figma",
      color: "#F24E1E",
      logoUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
  ];

  const processSteps = [
    {
      num: "01",
      title: "Discovery",
      desc: "We deep-dive into your business goals, audience, and technical needs.",
      icon: "🔎",
    },
    {
      num: "02",
      title: "Strategy",
      desc: "Roadmap, architecture, and tech stack tailored for your success.",
      icon: "🗺️",
    },
    {
      num: "03",
      title: "Design",
      desc: "Pixel-perfect UI/UX that delights users and drives conversions.",
      icon: "🎨",
    },
    {
      num: "04",
      title: "Build",
      desc: "Agile development with weekly sprints, demos, and feedback loops.",
      icon: "⚙️",
    },
    {
      num: "05",
      title: "Launch",
      desc: "QA, performance testing, and a flawless go-live deployment.",
      icon: "🚀",
    },
    {
      num: "06",
      title: "Growth",
      desc: "Post-launch support, analytics monitoring, and continuous improvements.",
      icon: "📈",
    },
  ];

  return (
    <main
      className="min-h-screen text-white"
      style={{
        background:
          "linear-gradient(135deg, #060610 0%, #0c0c1e 50%, #060610 100%)",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Syne:wght@700;800;900&display=swap');

        .hero-title { font-family: 'Syne', sans-serif; }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.5); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes spin-slow {
          from { transform: translate(-50%,-50%) rotate(0deg); }
          to { transform: translate(-50%,-50%) rotate(360deg); }
        }
        @keyframes spin-slow-rev {
          from { transform: translate(-50%,-50%) rotate(0deg); }
          to { transform: translate(-50%,-50%) rotate(-360deg); }
        }
        @keyframes heroImgReveal {
          from { opacity: 0; transform: scale(0.94) translateY(24px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes badgeIn {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes badgeInRight {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes borderFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-spin-slow {
          animation: spin-slow 25s linear infinite;
          position: absolute; top: 50%; left: 50%;
        }
        .animate-spin-slow-rev {
          animation: spin-slow-rev 18s linear infinite;
          position: absolute; top: 50%; left: 50%;
        }

        .gradient-text {
          background: linear-gradient(135deg, #6366f1 0%, #a78bfa 45%, #ec4899 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .shimmer-text {
          background: linear-gradient(90deg, #6366f1, #a78bfa, #ec4899, #6366f1);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear infinite;
        }
        .hero-fade-1 { animation: fadeUp 0.9s ease 0.1s both; }
        .hero-fade-2 { animation: fadeUp 0.9s ease 0.3s both; }
        .hero-fade-3 { animation: fadeUp 0.9s ease 0.5s both; }
        .hero-fade-4 { animation: fadeUp 0.9s ease 0.7s both; }
        .hero-image-reveal { animation: heroImgReveal 1.1s ease 0.2s both; }
        .badge-left { animation: badgeIn 0.8s ease 1.2s both; }
        .badge-right { animation: badgeInRight 0.8s ease 1.4s both; }

        .glass-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          backdrop-filter: blur(20px);
        }
        .glow-border { position: relative; }
        .glow-border::before {
          content: '';
          position: absolute;
          inset: -1px;
          border-radius: inherit;
          padding: 1px;
          background: linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899, #6366f1);
          background-size: 300% 300%;
          animation: borderFlow 4s ease infinite;
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.3s;
        }
        .glow-border:hover::before { opacity: 1; }

        .hero-image-wrapper {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 0 100px rgba(99,102,241,0.3), 0 40px 80px rgba(0,0,0,0.6);
          border: 1px solid rgba(255,255,255,0.08);
        }
        .hero-image-wrapper::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 55%, rgba(6,6,16,0.9) 100%);
          z-index: 1;
        }
        .hero-image-glow {
          position: absolute;
          inset: -3px;
          border-radius: 27px;
          background: linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899, #06b6d4);
          z-index: -1;
          opacity: 0.5;
          filter: blur(12px);
          animation: borderFlow 4s ease infinite;
          background-size: 300% 300%;
        }

        .noise-overlay::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
          opacity: 0.3;
        }

        @media (max-width: 768px) {
          .hero-title { font-size: 2.4rem !important; }
        }
      `}</style>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1800&q=90"
            alt="Team working"
            className="w-full h-full object-cover"
            style={{ animation: "heroImgReveal 1.4s ease both" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(6,6,16,0.82) 0%, rgba(6,6,16,0.55) 45%, rgba(6,6,16,0.80) 75%, rgba(6,6,16,1) 100%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(6,6,16,0.6) 0%, transparent 25%, transparent 75%, rgba(6,6,16,0.6) 100%)",
            }}
          />
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background:
                "radial-gradient(ellipse at 50% 30%, rgba(99,102,241,0.25) 0%, transparent 60%)",
            }}
          />
        </div>

        <ParticleField />

        <div
          className="animate-spin-slow opacity-[0.08]"
          style={{
            width: 900,
            height: 900,
            borderRadius: "50%",
            border: "1px dashed rgba(99,102,241,0.9)",
          }}
        />
        <div
          className="animate-spin-slow-rev opacity-[0.05]"
          style={{
            width: 600,
            height: 600,
            borderRadius: "50%",
            border: "1px solid rgba(139,92,246,0.7)",
          }}
        />

        <div
          className="absolute inset-0 opacity-[0.03] z-[1]"
          style={{
            backgroundImage: `linear-gradient(rgba(99,102,241,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.6) 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-20 w-full" />
      </section>

      {/* ── STATS ── */}
      <section className="relative py-20 border-y border-white/5 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(99,102,241,0.06), rgba(139,92,246,0.06), transparent)",
          }}
        />
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center group relative">
                <div
                  className="absolute -inset-3 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(99,102,241,0.1), transparent 70%)",
                  }}
                />
                <div className="hero-title text-4xl md:text-5xl font-black gradient-text mb-2 relative">
                  <Counter target={s.value} suffix={s.suffix} />
                </div>
                <div className="text-gray-400 text-sm font-medium relative">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-28 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-indigo-400 font-semibold text-xs uppercase tracking-[0.2em]">
            What We Do
          </span>
          <h2 className="hero-title text-4xl md:text-5xl font-extrabold mt-3 mb-5">
            Services That <span className="gradient-text">Drive Growth</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            End-to-end digital solutions — from ideation to deployment and
            beyond.
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

      {/* ── PROCESS ── */}
      <section
        className="py-28 px-6"
        style={{ background: "rgba(99,102,241,0.03)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-indigo-400 font-semibold text-xs uppercase tracking-[0.2em]">
              How We Work
            </span>
            <h2 className="hero-title text-4xl md:text-5xl font-extrabold mt-3">
              Our <span className="gradient-text">Process</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step) => (
              <div
                key={step.num}
                className="glow-border process-card glass-card rounded-2xl p-7 hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-2 cursor-default group"
              >
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="text-4xl font-black text-white/10 hero-title group-hover:text-transparent transition-all duration-500"
                    style={{ WebkitTextStroke: "1px rgba(99,102,241,0.5)" }}
                  >
                    {step.num}
                  </div>
                  <span className="text-2xl">{step.icon}</span>
                </div>
                <h3 className="text-white font-bold text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section className="py-28 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-indigo-400 font-semibold text-xs uppercase tracking-[0.2em]">
              Our Work
            </span>
            <h2 className="hero-title text-4xl md:text-5xl font-extrabold mt-3">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-gray-400 mt-2 text-sm max-w-md">
              Real-world platforms serving millions of users, built with
              precision.
            </p>
          </div>
          <Link href="/projects">
            <button className="text-indigo-400 font-semibold hover:text-indigo-300 transition flex items-center gap-2 group">
              View All Projects{" "}
              <span className="group-hover:translate-x-1 transition-transform duration-200 text-xl">
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

      {/* ── TECH STACK ── */}
      <section
        className="py-28 px-6"
        style={{ background: "rgba(99,102,241,0.03)" }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <span className="text-indigo-400 font-semibold text-xs uppercase tracking-[0.2em]">
            Technologies
          </span>
          <h2 className="hero-title text-4xl font-extrabold mt-3 mb-4">
            Our <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-gray-400 mb-14 max-w-lg mx-auto">
            We work with industry-leading tools and frameworks to build
            scalable, modern solutions.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 w-full">
            {techStack.map((t) => (
              <TechItem key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-28 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-indigo-400 font-semibold text-xs uppercase tracking-[0.2em]">
            Client Love
          </span>
          <h2 className="hero-title text-4xl md:text-5xl font-extrabold mt-3">
            What Clients <span className="gradient-text">Say</span>
          </h2>
          <p className="text-gray-500 mt-3 text-sm">
            Businesses that chose{" "}
            <span className="text-indigo-400 font-semibold">Merajsoft</span>{" "}
            never looked back.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </section>

      {/* ── WHY US ── */}
      <section
        className="py-24 px-6"
        style={{ background: "rgba(99,102,241,0.03)" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-indigo-400 font-semibold text-xs uppercase tracking-[0.2em]">
              Why Merajsoft
            </span>
            <h2 className="hero-title text-4xl md:text-5xl font-extrabold mt-3">
              The <span className="gradient-text">Difference</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              [
                "⚡",
                "Fast Delivery",
                "Two-week sprints with continuous demos so you're never in the dark.",
              ],
              [
                "🛡️",
                "Secure by Default",
                "OWASP compliance, data encryption, and security audits baked in from day one.",
              ],
              [
                "📈",
                "Scalable Architecture",
                "Built to handle 10x your current traffic without a rewrite.",
              ],
              [
                "🎯",
                "Business-First Thinking",
                "We don't just write code — we solve business problems with technology.",
              ],
            ].map(([icon, title, desc]) => (
              <div
                key={title}
                className="glow-border flex gap-5 p-6 rounded-2xl glass-card hover:border-indigo-500/20 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="text-3xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300 mt-0.5">
                  {icon}
                </div>
                <div>
                  <div className="text-white font-bold text-base mb-1">
                    {title}
                  </div>
                  <div className="text-gray-400 text-sm leading-relaxed">
                    {desc}
                  </div>
                </div>
              </div>
            ))}
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