"use client";
import { useState } from "react";

const services = [
  {
    id: 1,
    title: "Web Development",
    icon: "🌐",
    color: "from-cyan-500 to-blue-600",
    accent: "#06b6d4",
    desc: "Modern, scalable web applications built with cutting-edge technologies.",
  },
  {
    id: 2,
    title: "App Development",
    icon: "📱",
    color: "from-violet-500 to-purple-700",
    accent: "#8b5cf6",
    desc: "Native and cross-platform mobile apps that deliver exceptional user experiences.",
  },
  {
    id: 3,
    title: "Google Business Profile",
    icon: "📍",
    color: "from-emerald-400 to-teal-600",
    accent: "#10b981",
    desc: "Optimize your Google presence to attract more local customers and boost visibility.",
  },
  {
    id: 4,
    title: "E-commerce",
    icon: "🛒",
    color: "from-orange-400 to-rose-600",
    accent: "#f97316",
    desc: "Powerful online stores with seamless checkout and inventory management.",
  },
  {
    id: 5,
    title: "SEO",
    icon: "🚀",
    color: "from-yellow-400 to-amber-600",
    accent: "#f59e0b",
    desc: "Data-driven SEO strategies to rank higher and drive organic traffic.",
  },
];

const blogPosts = [
  {
    id: 1,
    category: "Web Development",
    categoryColor: "bg-cyan-500",
    title: "Building Scalable Web Apps with Next.js 14 & Server Components",
    excerpt:
      "Discover how React Server Components revolutionize data fetching, reduce bundle sizes, and supercharge performance in modern web development.",
    author: "Arjun Mehta",
    authorAvatar: "AM",
    avatarColor: "from-cyan-400 to-blue-500",
    date: "May 10, 2026",
    readTime: "8 min read",
    image: "web-dev",
    featured: true,
    tags: ["Next.js", "React", "Performance"],
    videoThumb: false,
  },
  {
    id: 2,
    category: "App Development",
    categoryColor: "bg-violet-500",
    title: "React Native vs Flutter: The Ultimate 2026 Comparison",
    excerpt:
      "A deep-dive into choosing the right cross-platform framework for your next mobile project — performance benchmarks, ecosystem, and developer experience.",
    author: "Priya Sharma",
    authorAvatar: "PS",
    avatarColor: "from-violet-400 to-purple-600",
    date: "May 7, 2026",
    readTime: "12 min read",
    image: "app-dev",
    featured: false,
    tags: ["Flutter", "React Native", "Mobile"],
    videoThumb: true,
  },
  {
    id: 3,
    category: "SEO",
    categoryColor: "bg-amber-500",
    title: "AI-Powered SEO: How Semantic Search is Changing Rankings",
    excerpt:
      "Google's AI-driven ranking algorithms now prioritize intent and context. Learn how to future-proof your content strategy.",
    author: "Rohan Verma",
    authorAvatar: "RV",
    avatarColor: "from-yellow-400 to-amber-500",
    date: "May 3, 2026",
    readTime: "6 min read",
    image: "seo",
    featured: false,
    tags: ["SEO", "AI", "Content"],
    videoThumb: false,
  },
  {
    id: 4,
    category: "E-commerce",
    categoryColor: "bg-rose-500",
    title: "Headless Commerce: Building Lightning-Fast Storefronts",
    excerpt:
      "Decouple your frontend from the backend and unlock unprecedented speed and flexibility for your online store.",
    author: "Sneha Joshi",
    authorAvatar: "SJ",
    avatarColor: "from-rose-400 to-pink-600",
    date: "Apr 28, 2026",
    readTime: "10 min read",
    image: "ecommerce",
    featured: false,
    tags: ["E-commerce", "Headless", "API"],
    videoThumb: true,
  },
  {
    id: 5,
    category: "Google Business Profile",
    categoryColor: "bg-emerald-500",
    title: "Google Business Profile Mastery: From Zero to Local Authority",
    excerpt:
      "Step-by-step guide to dominating local search results with an optimized Google Business Profile in 2026.",
    author: "Karan Patel",
    authorAvatar: "KP",
    avatarColor: "from-emerald-400 to-teal-500",
    date: "Apr 22, 2026",
    readTime: "7 min read",
    image: "gbp",
    featured: false,
    tags: ["Local SEO", "Google", "Maps"],
    videoThumb: false,
  },
];

const videoPost = {
  title: "Inside Our Dev Process: From Wireframe to Live Product",
  duration: "14:32",
  views: "12.4K views",
  date: "May 12, 2026",
  thumbnail: "video-thumb",
};

const ImagePlaceholder = ({ type, className }) => {
  const configs = {
    "web-dev": {
      bg: "from-slate-900 via-cyan-950 to-slate-900",
      lines: [
        { w: "70%", c: "bg-cyan-400", o: "opacity-80" },
        { w: "50%", c: "bg-slate-500", o: "opacity-50" },
        { w: "85%", c: "bg-cyan-300", o: "opacity-40" },
        { w: "40%", c: "bg-slate-500", o: "opacity-50" },
        { w: "65%", c: "bg-cyan-400", o: "opacity-60" },
      ],
    },
    "app-dev": {
      bg: "from-slate-900 via-violet-950 to-slate-900",
      lines: [
        { w: "40%", c: "bg-violet-400", o: "opacity-80" },
        { w: "60%", c: "bg-slate-500", o: "opacity-50" },
        { w: "35%", c: "bg-purple-300", o: "opacity-40" },
        { w: "55%", c: "bg-slate-500", o: "opacity-50" },
      ],
    },
    seo: {
      bg: "from-slate-900 via-amber-950 to-slate-900",
      lines: [
        { w: "30%", c: "bg-amber-400", o: "opacity-80" },
        { w: "50%", c: "bg-amber-300", o: "opacity-60" },
        { w: "70%", c: "bg-amber-200", o: "opacity-40" },
        { w: "85%", c: "bg-amber-100", o: "opacity-20" },
      ],
    },
    ecommerce: {
      bg: "from-slate-900 via-rose-950 to-slate-900",
      lines: [
        { w: "60%", c: "bg-rose-400", o: "opacity-60" },
        { w: "40%", c: "bg-pink-400", o: "opacity-50" },
        { w: "75%", c: "bg-rose-300", o: "opacity-40" },
        { w: "50%", c: "bg-slate-500", o: "opacity-30" },
      ],
    },
    gbp: {
      bg: "from-slate-900 via-emerald-950 to-slate-900",
      lines: [
        { w: "55%", c: "bg-emerald-400", o: "opacity-70" },
        { w: "35%", c: "bg-teal-400", o: "opacity-50" },
        { w: "65%", c: "bg-emerald-300", o: "opacity-40" },
        { w: "45%", c: "bg-slate-500", o: "opacity-30" },
      ],
    },
    "video-thumb": {
      bg: "from-slate-900 via-indigo-950 to-slate-900",
      lines: [],
    },
  };

  const cfg = configs[type] || configs["web-dev"];

  return (
    <div
      className={`relative bg-gradient-to-br ${cfg.bg} overflow-hidden ${className}`}
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-32 h-32 rounded-full opacity-20 blur-3xl bg-white" />
      </div>
      <div className="absolute bottom-6 left-6 right-6 space-y-2">
        {cfg.lines.map((l, i) => (
          <div
            key={i}
            className={`h-1.5 rounded-full ${l.c} ${l.o}`}
            style={{ width: l.w }}
          />
        ))}
      </div>
      {type === "video-thumb" && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
            <div className="w-0 h-0 border-t-[10px] border-b-[10px] border-l-[18px] border-t-transparent border-b-transparent border-l-white ml-1" />
          </div>
        </div>
      )}
    </div>
  );
};

export default function BlogPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredCard, setHoveredCard] = useState(null);

  const categories = [
    "All",
    "Web Development",
    "App Development",
    "Google Business Profile",
    "E-commerce",
    "SEO",
  ];

  const filteredPosts = blogPosts.filter((p) => {
    const matchCat = activeFilter === "All" || p.category === activeFilter;
    const matchSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  const featured = filteredPosts.find((p) => p.featured) || filteredPosts[0];
  const rest = filteredPosts.filter((p) => p.id !== (featured?.id || -1));

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#080c14",
        color: "white",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&family=Bebas+Neue&display=swap');
        .font-display { font-family: 'Bebas Neue', sans-serif; }
        .font-heading { font-family: 'Space Grotesk', sans-serif; }
        .card-hover { transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease; }
        .card-hover:hover { transform: translateY(-6px); box-shadow: 0 20px 60px rgba(0,0,0,0.5); }
        .tag-pill { transition: all 0.2s; }
        .tag-pill:hover { transform: scale(1.05); }
        .glow-cyan { box-shadow: 0 0 30px rgba(6,182,212,0.15); }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
        .line-clamp-3 { display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
        .hero-grid { background-image: radial-gradient(rgba(6,182,212,0.08) 1px, transparent 1px); background-size: 32px 32px; }
        @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
        .float { animation: float 4s ease-in-out infinite; }
        @keyframes fadeInUp { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
        .fade-in { animation: fadeInUp 0.6s ease forwards; }
        .delay-1 { animation-delay: 0.1s; opacity: 0; }
        .delay-2 { animation-delay: 0.2s; opacity: 0; }
        .delay-3 { animation-delay: 0.3s; opacity: 0; }
        * { box-sizing: border-box; }
      `}</style>

      {/* HERO */}
      <section
        className="hero-grid"
        style={{
          position: "relative",
          overflow: "hidden",
          padding: "80px 24px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "33%",
            width: 384,
            height: 384,
            background: "rgba(6,182,212,0.10)",
            borderRadius: "50%",
            filter: "blur(80px)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            right: "25%",
            width: 288,
            height: 288,
            background: "rgba(139,92,246,0.10)",
            borderRadius: "50%",
            filter: "blur(80px)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            textAlign: "center",
            position: "relative",
            zIndex: 10,
          }}
        >
          <div
            className="fade-in"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.10)",
              borderRadius: 999,
              padding: "6px 16px",
              marginBottom: 24,
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                background: "#22d3ee",
                borderRadius: "50%",
                display: "inline-block",
                animation: "pulse 2s infinite",
              }}
            />
            <span
              style={{
                fontSize: 12,
                color: "#cbd5e1",
                fontWeight: 500,
                letterSpacing: "0.08em",
              }}
            >
              NEXACODE INSIGHTS BLOG
            </span>
          </div>
          <h1
            className="font-display fade-in delay-1"
            style={{
              fontSize: "clamp(48px,8vw,96px)",
              color: "white",
              marginBottom: 24,
              lineHeight: 1,
              letterSpacing: "0.02em",
            }}
          >
            EXPERT INSIGHTS
            <br />
            <span
              style={{
                background: "linear-gradient(90deg,#22d3ee,#8b5cf6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              FOR DIGITAL GROWTH
            </span>
          </h1>
          <p
            className="fade-in delay-2"
            style={{
              color: "#94a3b8",
              fontSize: 18,
              maxWidth: 640,
              margin: "0 auto 40px",
            }}
          >
            Actionable guides, tutorials, and strategies on Web Development, App
            Development, SEO, E-commerce, and Google Business Profile.
          </p>
          <div
            className="fade-in delay-3"
            style={{ maxWidth: 480, margin: "0 auto", position: "relative" }}
          >
            <svg
              style={{
                position: "absolute",
                left: 16,
                top: "50%",
                transform: "translateY(-50%)",
                width: 16,
                height: 16,
                color: "#64748b",
              }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: "100%",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.10)",
                borderRadius: 12,
                paddingLeft: 40,
                paddingRight: 16,
                paddingTop: 12,
                paddingBottom: 12,
                fontSize: 14,
                color: "white",
                outline: "none",
              }}
            />
          </div>
        </div>
      </section>

      {/* SERVICES STRIP */}
      <section
        style={{
          borderTop: "1px solid rgba(255,255,255,0.05)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
          background: "rgba(255,255,255,0.02)",
          padding: "40px 24px",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <p
            style={{
              fontSize: 12,
              color: "#64748b",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              fontWeight: 500,
              marginBottom: 24,
            }}
          >
            Our Expertise
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: 16,
            }}
          >
            {services.map((s) => (
              <div
                key={s.id}
                className="card-hover"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.05)",
                  borderRadius: 12,
                  padding: 16,
                  cursor: "pointer",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  className="float"
                  style={{ fontSize: 28, marginBottom: 8 }}
                >
                  {s.icon}
                </div>
                <div
                  className="font-heading"
                  style={{
                    fontWeight: 600,
                    fontSize: 14,
                    color: "white",
                    marginBottom: 4,
                  }}
                >
                  {s.title}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: "#64748b",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {s.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FILTER TABS */}
      <section style={{ padding: "40px 24px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div
            className="scrollbar-hide"
            style={{
              display: "flex",
              gap: 12,
              overflowX: "auto",
              paddingBottom: 8,
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className="tag-pill"
                style={{
                  flexShrink: 0,
                  padding: "8px 16px",
                  borderRadius: 999,
                  fontSize: 14,
                  fontWeight: 500,
                  cursor: "pointer",
                  border:
                    activeFilter === cat
                      ? "none"
                      : "1px solid rgba(255,255,255,0.10)",
                  background:
                    activeFilter === cat
                      ? "linear-gradient(90deg,#06b6d4,#7c3aed)"
                      : "rgba(255,255,255,0.05)",
                  color: activeFilter === cat ? "white" : "#94a3b8",
                  transition: "all 0.2s",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED POST */}
      {featured && (
        <section style={{ padding: "0 24px 40px" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div
              className="card-hover glow-cyan"
              style={{
                position: "relative",
                borderRadius: 16,
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.05)",
                background: "rgba(255,255,255,0.02)",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                cursor: "pointer",
              }}
              onMouseEnter={() => setHoveredCard("featured")}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                style={{ position: "absolute", top: 20, left: 20, zIndex: 10 }}
              >
                <span
                  style={{
                    background: "linear-gradient(90deg,#06b6d4,#3b82f6)",
                    color: "white",
                    fontSize: 12,
                    fontWeight: 700,
                    padding: "4px 12px",
                    borderRadius: 999,
                  }}
                >
                  ⭐ FEATURED
                </span>
              </div>
              <div style={{ position: "relative", minHeight: 280 }}>
                <ImagePlaceholder
                  type={featured.image}
                  className="absolute inset-0 w-full h-full"
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>
              <div
                style={{
                  padding: 32,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      marginBottom: 16,
                    }}
                  >
                    <span
                      className={featured.categoryColor}
                      style={{
                        color: "white",
                        fontSize: 12,
                        fontWeight: 700,
                        padding: "4px 10px",
                        borderRadius: 6,
                        background: featured.categoryColor
                          .replace("bg-", "")
                          .includes("cyan")
                          ? "#06b6d4"
                          : featured.categoryColor
                                .replace("bg-", "")
                                .includes("violet")
                            ? "#7c3aed"
                            : "#f59e0b",
                      }}
                    >
                      {featured.category}
                    </span>
                    <span style={{ color: "#64748b", fontSize: 12 }}>
                      {featured.readTime}
                    </span>
                  </div>
                  <h2
                    className="font-heading"
                    style={{
                      fontWeight: 700,
                      fontSize: 22,
                      color: "white",
                      marginBottom: 12,
                      lineHeight: 1.3,
                    }}
                  >
                    {featured.title}
                  </h2>
                  <p
                    style={{
                      color: "#94a3b8",
                      fontSize: 14,
                      lineHeight: 1.7,
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {featured.excerpt}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 8,
                      marginTop: 16,
                    }}
                  >
                    {featured.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: 12,
                          background: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(255,255,255,0.10)",
                          color: "#94a3b8",
                          padding: "4px 10px",
                          borderRadius: 999,
                        }}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: 24,
                  }}
                >
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 12 }}
                  >
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: "50%",
                        background: "linear-gradient(135deg,#22d3ee,#3b82f6)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 12,
                        fontWeight: 700,
                        color: "white",
                      }}
                    >
                      {featured.authorAvatar}
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: 14,
                          fontWeight: 500,
                          color: "white",
                        }}
                      >
                        {featured.author}
                      </div>
                      <div style={{ fontSize: 12, color: "#64748b" }}>
                        {featured.date}
                      </div>
                    </div>
                  </div>
                  <button
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      color: "#22d3ee",
                      fontSize: 14,
                      fontWeight: 600,
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Read More →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* VIDEO SPOTLIGHT */}
      <section style={{ padding: "0 24px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 24,
            }}
          >
            <h2
              className="font-heading"
              style={{
                fontWeight: 700,
                fontSize: 20,
                color: "white",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <span
                style={{
                  width: 4,
                  height: 24,
                  background: "linear-gradient(180deg,#7c3aed,#06b6d4)",
                  borderRadius: 4,
                  display: "inline-block",
                }}
              />
              Video Spotlight
            </h2>
            <a
              href="#"
              style={{ fontSize: 14, color: "#94a3b8", textDecoration: "none" }}
            >
              View all videos →
            </a>
          </div>
          <div
            className="card-hover"
            style={{
              position: "relative",
              borderRadius: 16,
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.05)",
              cursor: "pointer",
            }}
          >
            <ImagePlaceholder
              type="video-thumb"
              className="w-full"
              style={{ width: "100%", height: 288 }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.3), transparent)",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.15)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(255,255,255,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: 0,
                    height: 0,
                    borderTop: "14px solid transparent",
                    borderBottom: "14px solid transparent",
                    borderLeft: "24px solid white",
                    marginLeft: 6,
                  }}
                />
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: 24,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 8,
                }}
              >
                <span
                  style={{
                    background: "#ef4444",
                    color: "white",
                    fontSize: 12,
                    fontWeight: 700,
                    padding: "2px 8px",
                    borderRadius: 4,
                  }}
                >
                  ▶ VIDEO
                </span>
                <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 12 }}>
                  {videoPost.duration}
                </span>
                <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 12 }}>
                  •
                </span>
                <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 12 }}>
                  {videoPost.views}
                </span>
              </div>
              <h3
                className="font-heading"
                style={{ fontWeight: 700, fontSize: 20, color: "white" }}
              >
                {videoPost.title}
              </h3>
              <p
                style={{
                  color: "rgba(255,255,255,0.6)",
                  fontSize: 14,
                  marginTop: 4,
                }}
              >
                {videoPost.date}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG GRID */}
      <section style={{ padding: "0 24px 64px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 24,
            }}
          >
            <h2
              className="font-heading"
              style={{
                fontWeight: 700,
                fontSize: 20,
                color: "white",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <span
                style={{
                  width: 4,
                  height: 24,
                  background: "linear-gradient(180deg,#06b6d4,#10b981)",
                  borderRadius: 4,
                  display: "inline-block",
                }}
              />
              Latest Articles
              <span
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.10)",
                  color: "#94a3b8",
                  fontSize: 12,
                  padding: "2px 8px",
                  borderRadius: 999,
                  marginLeft: 4,
                }}
              >
                {rest.length}
              </span>
            </h2>
            <a
              href="#"
              style={{ fontSize: 14, color: "#94a3b8", textDecoration: "none" }}
            >
              View all →
            </a>
          </div>
          {rest.length === 0 && (
            <div
              style={{
                textAlign: "center",
                padding: "80px 0",
                color: "#64748b",
              }}
            >
              <div style={{ fontSize: 48, marginBottom: 16 }}>🔍</div>
              <p>No articles found. Try a different filter or search term.</p>
            </div>
          )}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: 24,
            }}
          >
            {rest.map((post) => (
              <article
                key={post.id}
                className="card-hover"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.05)",
                  borderRadius: 16,
                  overflow: "hidden",
                  cursor: "pointer",
                }}
                onMouseEnter={() => setHoveredCard(post.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div
                  style={{
                    position: "relative",
                    height: 192,
                    overflow: "hidden",
                  }}
                >
                  <ImagePlaceholder
                    type={post.image}
                    className="w-full h-full"
                    style={{ width: "100%", height: "100%" }}
                  />
                  {post.videoThumb && (
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div
                        style={{
                          width: 48,
                          height: 48,
                          borderRadius: "50%",
                          background: "rgba(255,255,255,0.20)",
                          backdropFilter: "blur(4px)",
                          border: "1px solid rgba(255,255,255,0.3)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <div
                          style={{
                            width: 0,
                            height: 0,
                            borderTop: "7px solid transparent",
                            borderBottom: "7px solid transparent",
                            borderLeft: "12px solid white",
                            marginLeft: 2,
                          }}
                        />
                      </div>
                    </div>
                  )}
                  <div style={{ position: "absolute", top: 12, left: 12 }}>
                    <span
                      style={{
                        color: "white",
                        fontSize: 12,
                        fontWeight: 700,
                        padding: "4px 10px",
                        borderRadius: 6,
                        background: post.categoryColor.includes("violet")
                          ? "#7c3aed"
                          : post.categoryColor.includes("amber")
                            ? "#f59e0b"
                            : post.categoryColor.includes("rose")
                              ? "#f43f5e"
                              : post.categoryColor.includes("emerald")
                                ? "#10b981"
                                : "#06b6d4",
                      }}
                    >
                      {post.category}
                    </span>
                  </div>
                  {post.videoThumb && (
                    <div style={{ position: "absolute", top: 12, right: 12 }}>
                      <span
                        style={{
                          background: "#ef4444",
                          color: "white",
                          fontSize: 11,
                          fontWeight: 700,
                          padding: "2px 6px",
                          borderRadius: 4,
                        }}
                      >
                        ▶ VIDEO
                      </span>
                    </div>
                  )}
                </div>
                <div style={{ padding: 20 }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      marginBottom: 12,
                      fontSize: 12,
                      color: "#64748b",
                    }}
                  >
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3
                    className="font-heading"
                    style={{
                      fontWeight: 600,
                      fontSize: 15,
                      color: hoveredCard === post.id ? "#22d3ee" : "white",
                      lineHeight: 1.4,
                      marginBottom: 8,
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      transition: "color 0.2s",
                    }}
                  >
                    {post.title}
                  </h3>
                  <p
                    style={{
                      color: "#64748b",
                      fontSize: 12,
                      lineHeight: 1.7,
                      marginBottom: 16,
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {post.excerpt}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 6,
                      marginBottom: 16,
                    }}
                  >
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: 11,
                          background: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(255,255,255,0.10)",
                          color: "#64748b",
                          padding: "2px 8px",
                          borderRadius: 999,
                        }}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div
                      style={{ display: "flex", alignItems: "center", gap: 8 }}
                    >
                      <div
                        style={{
                          width: 28,
                          height: 28,
                          borderRadius: "50%",
                          background: `linear-gradient(135deg,${post.avatarColor.includes("violet") ? "#a78bfa,#7c3aed" : post.avatarColor.includes("yellow") ? "#fbbf24,#f59e0b" : post.avatarColor.includes("rose") ? "#fb7185,#e11d48" : post.avatarColor.includes("emerald") ? "#34d399,#0d9488" : "#22d3ee,#3b82f6"})`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: 11,
                          fontWeight: 700,
                          color: "white",
                        }}
                      >
                        {post.authorAvatar}
                      </div>
                      <span style={{ fontSize: 12, color: "#94a3b8" }}>
                        {post.author}
                      </span>
                    </div>
                    <span
                      style={{
                        color: "#22d3ee",
                        fontSize: 12,
                        fontWeight: 600,
                      }}
                    >
                      →
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER CTA */}
      <section style={{ padding: "0 24px 64px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div
            className="hero-grid"
            style={{
              position: "relative",
              borderRadius: 16,
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.10)",
              background:
                "linear-gradient(135deg,rgba(6,182,212,0.10),rgba(139,92,246,0.10),#0f172a)",
              padding: 40,
              textAlign: "center",
            }}
          >
            <div style={{ position: "relative", zIndex: 10 }}>
              <div style={{ fontSize: 40, marginBottom: 16 }}>📬</div>
              <h2
                className="font-heading"
                style={{
                  fontWeight: 700,
                  fontSize: 24,
                  color: "white",
                  marginBottom: 8,
                }}
              >
                Stay Ahead of the Curve
              </h2>
              <p
                style={{
                  color: "#94a3b8",
                  fontSize: 14,
                  marginBottom: 24,
                  maxWidth: 400,
                  margin: "0 auto 24px",
                }}
              >
                Weekly tips on web development, SEO, e-commerce, and digital
                strategy — delivered to your inbox.
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 12,
                  maxWidth: 480,
                  margin: "0 auto",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  style={{
                    flex: 1,
                    minWidth: 200,
                    background: "rgba(255,255,255,0.10)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    borderRadius: 12,
                    padding: "12px 16px",
                    fontSize: 14,
                    color: "white",
                    outline: "none",
                  }}
                />
                <button
                  style={{
                    background: "linear-gradient(90deg,#06b6d4,#7c3aed)",
                    color: "white",
                    fontSize: 14,
                    fontWeight: 600,
                    padding: "12px 24px",
                    borderRadius: 12,
                    border: "none",
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                  }}
                >
                  Subscribe Free →
                </button>
              </div>
              <p style={{ fontSize: 12, color: "#334155", marginTop: 12 }}>
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
