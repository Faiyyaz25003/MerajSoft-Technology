"use client";
import { useState } from "react";

const services = [
  {
    id: 1,
    title: "Web Development",
    icon: "🌐",
    desc: "Modern, scalable web applications built with cutting-edge technologies.",
  },
  {
    id: 2,
    title: "App Development",
    icon: "📱",
    desc: "Native and cross-platform mobile apps for exceptional user experiences.",
  },
  {
    id: 3,
    title: "Google Business",
    icon: "📍",
    desc: "Optimize your Google presence to attract more local customers.",
  },
  {
    id: 4,
    title: "E-commerce",
    icon: "🛒",
    desc: "Powerful online stores with seamless checkout and inventory management.",
  },
  {
    id: 5,
    title: "SEO",
    icon: "🚀",
    desc: "Data-driven SEO strategies to rank higher and drive organic traffic.",
  },
];

const blogPosts = [
  {
    id: 1,
    category: "Web Development",
    catColor: "#0ea5e9",
    catBg: "#f0f9ff",
    accent: "#0ea5e9",
    title: "Building Scalable Web Apps with Next.js 14 & Server Components",
    excerpt:
      "Discover how React Server Components revolutionize data fetching, reduce bundle sizes, and supercharge performance in modern web development.",
    author: "Arjun Mehta",
    initials: "AM",
    avatarColor: "#0ea5e9",
    date: "May 10, 2026",
    readTime: "8 min",
    tags: ["Next.js", "React", "Performance"],
    featured: true,
  },
  {
    id: 2,
    category: "App Development",
    catColor: "#8b5cf6",
    catBg: "#f5f3ff",
    accent: "#8b5cf6",
    title: "React Native vs Flutter: The Ultimate 2026 Comparison",
    excerpt:
      "A deep-dive into choosing the right cross-platform framework — performance benchmarks, ecosystem, and developer experience.",
    author: "Priya Sharma",
    initials: "PS",
    avatarColor: "#8b5cf6",
    date: "May 7, 2026",
    readTime: "12 min",
    tags: ["Flutter", "React Native", "Mobile"],
    featured: false,
    video: true,
  },
  {
    id: 3,
    category: "SEO",
    catColor: "#f59e0b",
    catBg: "#fffbeb",
    accent: "#f59e0b",
    title: "AI-Powered SEO: How Semantic Search is Changing Rankings",
    excerpt:
      "Google's AI-driven ranking algorithms now prioritize intent and context. Learn how to future-proof your content strategy.",
    author: "Rohan Verma",
    initials: "RV",
    avatarColor: "#f59e0b",
    date: "May 3, 2026",
    readTime: "6 min",
    tags: ["SEO", "AI", "Content"],
    featured: false,
  },
  {
    id: 4,
    category: "E-commerce",
    catColor: "#ef4444",
    catBg: "#fef2f2",
    accent: "#ef4444",
    title: "Headless Commerce: Building Lightning-Fast Storefronts",
    excerpt:
      "Decouple your frontend from the backend and unlock unprecedented speed and flexibility for your online store.",
    author: "Sneha Joshi",
    initials: "SJ",
    avatarColor: "#ef4444",
    date: "Apr 28, 2026",
    readTime: "10 min",
    tags: ["E-commerce", "Headless", "API"],
    featured: false,
    video: true,
  },
  {
    id: 5,
    category: "Google Business",
    catColor: "#10b981",
    catBg: "#ecfdf5",
    accent: "#10b981",
    title: "Google Business Profile Mastery: From Zero to Local Authority",
    excerpt:
      "Step-by-step guide to dominating local search results with an optimized Google Business Profile in 2026.",
    author: "Karan Patel",
    initials: "KP",
    avatarColor: "#10b981",
    date: "Apr 22, 2026",
    readTime: "7 min",
    tags: ["Local SEO", "Google", "Maps"],
    featured: false,
  },
];

const CATEGORIES = [
  "All",
  "Web Development",
  "App Development",
  "Google Business",
  "E-commerce",
  "SEO",
];

const VIDEO = {
  title: "Inside Our Dev Process: From Wireframe to Live Product",
  duration: "14:32",
  views: "12.4K views",
  date: "May 12, 2026",
};

function ArticleThumb({ accent, video }) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        background: `${accent}0d`,
        overflow: "hidden",
      }}
    >
      <svg
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.07,
        }}
      >
        <defs>
          <pattern
            id={`dots-${accent}`}
            x="0"
            y="0"
            width="18"
            height="18"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1.2" fill={accent} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#dots-${accent})`} />
      </svg>
      <div
        style={{
          position: "absolute",
          bottom: 16,
          left: 16,
          right: 16,
          display: "flex",
          flexDirection: "column",
          gap: 6,
        }}
      >
        <div
          style={{
            height: 3,
            borderRadius: 8,
            width: "68%",
            background: accent,
            opacity: 0.7,
          }}
        />
        <div
          style={{
            height: 3,
            borderRadius: 8,
            width: "44%",
            background: "#94a3b8",
            opacity: 0.3,
          }}
        />
        <div
          style={{
            height: 3,
            borderRadius: 8,
            width: "56%",
            background: accent,
            opacity: 0.4,
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: 12,
          right: 12,
          width: 32,
          height: 32,
          borderRadius: "50%",
          background: `${accent}1a`,
          border: `1.5px solid ${accent}33`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: 10,
            height: 10,
            borderRadius: "50%",
            background: accent,
            opacity: 0.5,
          }}
        />
      </div>
      {video && (
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
              width: 44,
              height: 44,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.9)",
              boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                marginLeft: 3,
                width: 0,
                height: 0,
                borderTop: "7px solid transparent",
                borderBottom: "7px solid transparent",
                borderLeft: `12px solid ${accent}`,
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

function Avatar({ initials, color, size = 32 }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: `${color}1a`,
        border: `1.5px solid ${color}33`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: size * 0.35,
        fontWeight: 600,
        color,
        letterSpacing: "0.03em",
        flexShrink: 0,
      }}
    >
      {initials}
    </div>
  );
}

function Tag({ label }) {
  return (
    <span
      style={{
        fontSize: 11,
        background: "#f1f5f9",
        color: "#64748b",
        padding: "3px 9px",
        borderRadius: 20,
        fontWeight: 500,
        letterSpacing: "0.01em",
      }}
    >
      #{label}
    </span>
  );
}

export default function BlogPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [email, setEmail] = useState("");

  const filtered = blogPosts.filter((p) => {
    const matchCat = activeFilter === "All" || p.category === activeFilter;
    const q = searchQuery.toLowerCase();
    const matchSearch =
      !q ||
      p.title.toLowerCase().includes(q) ||
      p.excerpt.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  const featured = filtered.find((p) => p.featured) || filtered[0];
  const rest = filtered.filter((p) => p.id !== (featured?.id ?? -1));

  return (
    <div
      className="blog-root"
      style={{
        minHeight: "100vh",
        background: "#fafafa",
        fontFamily: "'DM Sans', 'Helvetica Neue', Arial, sans-serif",
        color: "#1e293b",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Playfair+Display:ital,wght@0,700;1,600&display=swap');
        .blog-root *, .blog-root *::before, .blog-root *::after { box-sizing: border-box; }
        .blog-root .card-hover { transition: transform 0.22s ease, box-shadow 0.22s ease; cursor: pointer; }
        .blog-root .card-hover:hover { transform: translateY(-3px); box-shadow: 0 12px 40px rgba(15,23,42,0.10) !important; }
        .blog-root .filter-btn { transition: all 0.15s ease; border: none; cursor: pointer; font-family: inherit; }
        .blog-root .tag-hover:hover { background: #e2e8f0 !important; }
        .blog-root input:focus { outline: none; }
        .blog-root .service-card { transition: all 0.2s ease; cursor: pointer; }
        .blog-root .service-card:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(15,23,42,0.08) !important; border-color: #bfdbfe !important; }
        .blog-root .read-btn { transition: all 0.15s ease; }
        .blog-root .read-btn:hover { background: #1e293b !important; color: white !important; }
        .blog-root .subscribe-btn { transition: all 0.15s ease; }
        .blog-root .subscribe-btn:hover { background: #1e40af !important; }
      `}</style>

      {/* ── HERO ── */}
      <div
        style={{
          background:
            "linear-gradient(135deg, #020617 0%, #0f172a 40%, #1e1b4b 100%)",
          position: "relative",
          overflow: "hidden",
          padding: "80px 40px 72px",
        }}
      >
        {/* Geometric accents */}
        <div
          style={{
            position: "absolute",
            top: -60,
            right: -60,
            width: 320,
            height: 320,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, #3b82f620 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -80,
            left: -40,
            width: 280,
            height: 280,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, #6366f115 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <svg
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            opacity: 0.03,
            pointerEvents: "none",
          }}
        >
          <defs>
            <pattern
              id="hero-grid"
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>

        <div
          style={{
            position: "relative",
            maxWidth: 760,
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 40,
              padding: "6px 16px",
              marginBottom: 28,
            }}
          >
            <div
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "#34d399",
              }}
            />
            <span
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.13em",
                color: "#7dd3fc",
                textTransform: "uppercase",
              }}
            >
              NexaCode Insights
            </span>
          </div>

          <h1
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(34px, 5.5vw, 58px)",
              fontWeight: 700,
              color: "#fff",
              lineHeight: 1.12,
              marginBottom: 20,
            }}
          >
            Expert Insights for
            <br />
            <em
              style={{ color: "#7dd3fc", fontStyle: "italic", fontWeight: 600 }}
            >
              Digital Growth
            </em>
          </h1>

          <p
            style={{
              color: "rgba(148,163,184,0.9)",
              fontSize: 16,
              maxWidth: 480,
              margin: "0 auto 36px",
              lineHeight: 1.75,
            }}
          >
            Actionable guides on Web Development, Mobile Apps, SEO, E-commerce &
            Google Business Profile.
          </p>

          <div
            style={{ position: "relative", maxWidth: 400, margin: "0 auto" }}
          >
            <svg
              style={{
                position: "absolute",
                left: 14,
                top: "50%",
                transform: "translateY(-50%)",
                width: 16,
                height: 16,
                color: "#64748b",
              }}
              fill="none"
              stroke="#64748b"
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
                paddingLeft: 42,
                paddingRight: 16,
                paddingTop: 13,
                paddingBottom: 13,
                fontSize: 14,
                borderRadius: 14,
                border: "1px solid rgba(255,255,255,0.15)",
                background: "rgba(255,255,255,0.07)",
                color: "#f8fafc",
                caretColor: "#7dd3fc",
              }}
            />
          </div>
        </div>
      </div>

      {/* ── EXPERTISE STRIP ── */}
      <div
        style={{
          background: "#fff",
          borderBottom: "1px solid #f1f5f9",
          padding: "36px 40px",
        }}
      >
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <p
            style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.13em",
              color: "#94a3b8",
              textTransform: "uppercase",
              marginBottom: 20,
            }}
          >
            Our Expertise
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: 12,
            }}
          >
            {services.map((sv) => (
              <div
                key={sv.id}
                className="service-card"
                style={{
                  background: "#fff",
                  border: "1px solid #f1f5f9",
                  borderRadius: 16,
                  padding: "18px 16px",
                  boxShadow: "0 1px 4px rgba(15,23,42,0.04)",
                }}
              >
                <div style={{ fontSize: 24, marginBottom: 10 }}>{sv.icon}</div>
                <div
                  style={{
                    fontWeight: 600,
                    fontSize: 13,
                    color: "#0f172a",
                    marginBottom: 5,
                  }}
                >
                  {sv.title}
                </div>
                <p style={{ fontSize: 12, color: "#94a3b8", lineHeight: 1.6 }}>
                  {sv.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── FILTER TABS ── */}
      <div
        style={{
          background: "#fff",
          borderBottom: "1px solid #f1f5f9",
          padding: "14px 40px",
        }}
      >
        <div
          style={{
            maxWidth: 1000,
            margin: "0 auto",
            display: "flex",
            gap: 8,
            overflowX: "auto",
          }}
        >
          {CATEGORIES.map((cat) => {
            const active = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className="filter-btn"
                style={{
                  flexShrink: 0,
                  padding: "8px 18px",
                  borderRadius: 10,
                  fontSize: 13,
                  fontWeight: 500,
                  background: active ? "#0f172a" : "transparent",
                  color: active ? "#fff" : "#64748b",
                  border: active ? "1px solid #0f172a" : "1px solid #e2e8f0",
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div
        style={{ maxWidth: 1000, margin: "0 auto", padding: "48px 40px 80px" }}
      >
        {/* ── FEATURED ── */}
        {featured && (
          <section style={{ marginBottom: 56 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 24,
              }}
            >
              <div
                style={{
                  width: 3,
                  height: 20,
                  borderRadius: 4,
                  background: "#0f172a",
                }}
              />
              <span
                style={{
                  fontWeight: 600,
                  fontSize: 14,
                  color: "#0f172a",
                  letterSpacing: "0.01em",
                }}
              >
                Featured Post
              </span>
            </div>

            <div
              className="card-hover"
              style={{
                border: "1px solid #f1f5f9",
                borderRadius: 20,
                overflow: "hidden",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                background: "#fff",
                boxShadow: "0 2px 12px rgba(15,23,42,0.06)",
              }}
            >
              <div style={{ position: "relative", minHeight: 260 }}>
                <div style={{ position: "absolute", inset: 0 }}>
                  <ArticleThumb accent={featured.accent} video={false} />
                </div>
                <div style={{ position: "absolute", top: 16, left: 16 }}>
                  <span
                    style={{
                      background: "#0f172a",
                      color: "#f8fafc",
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: "0.07em",
                      padding: "6px 12px",
                      borderRadius: 20,
                      textTransform: "uppercase",
                    }}
                  >
                    ⭐ Featured
                  </span>
                </div>
              </div>

              <div
                style={{
                  padding: "32px 32px 28px",
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
                      gap: 10,
                      marginBottom: 16,
                    }}
                  >
                    <span
                      style={{
                        background: featured.catBg,
                        color: featured.catColor,
                        fontSize: 11,
                        fontWeight: 700,
                        padding: "5px 10px",
                        borderRadius: 8,
                        letterSpacing: "0.04em",
                      }}
                    >
                      {featured.category}
                    </span>
                    <span
                      style={{
                        fontSize: 12,
                        color: "#94a3b8",
                        fontWeight: 500,
                      }}
                    >
                      {featured.readTime} read
                    </span>
                  </div>
                  <h2
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: 21,
                      fontWeight: 700,
                      color: "#0f172a",
                      lineHeight: 1.35,
                      marginBottom: 12,
                    }}
                  >
                    {featured.title}
                  </h2>
                  <p
                    style={{
                      fontSize: 13.5,
                      color: "#64748b",
                      lineHeight: 1.75,
                      marginBottom: 16,
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {featured.excerpt}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {featured.tags.map((t) => (
                      <Tag key={t} label={t} />
                    ))}
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: 24,
                    paddingTop: 20,
                    borderTop: "1px solid #f1f5f9",
                  }}
                >
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 10 }}
                  >
                    <Avatar
                      initials={featured.initials}
                      color={featured.avatarColor}
                      size={34}
                    />
                    <div>
                      <div
                        style={{
                          fontSize: 13,
                          fontWeight: 600,
                          color: "#1e293b",
                        }}
                      >
                        {featured.author}
                      </div>
                      <div style={{ fontSize: 11, color: "#94a3b8" }}>
                        {featured.date}
                      </div>
                    </div>
                  </div>
                  <button
                    className="read-btn"
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: "#0f172a",
                      border: "1.5px solid #e2e8f0",
                      padding: "9px 20px",
                      borderRadius: 12,
                      background: "#fff",
                      cursor: "pointer",
                      fontFamily: "inherit",
                    }}
                  >
                    Read More →
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ── VIDEO SPOTLIGHT ── */}
        <section style={{ marginBottom: 56 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 24,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div
                style={{
                  width: 3,
                  height: 20,
                  borderRadius: 4,
                  background: "#0f172a",
                }}
              />
              <span style={{ fontWeight: 600, fontSize: 14, color: "#0f172a" }}>
                Video Spotlight
              </span>
            </div>
            <a
              href="#"
              style={{
                fontSize: 13,
                color: "#3b82f6",
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              View all →
            </a>
          </div>

          <div
            className="card-hover"
            style={{
              position: "relative",
              height: 260,
              background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)",
              borderRadius: 20,
              overflow: "hidden",
              boxShadow: "0 4px 20px rgba(15,23,42,0.14)",
            }}
          >
            <svg
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                opacity: 0.04,
              }}
            >
              <defs>
                <pattern
                  id="vgrid"
                  x="0"
                  y="0"
                  width="32"
                  height="32"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 32 0 L 0 0 0 32"
                    fill="none"
                    stroke="white"
                    strokeWidth="0.5"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#vgrid)" />
            </svg>
            <div
              style={{
                position: "absolute",
                top: "20%",
                left: "38%",
                width: 200,
                height: 200,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, #6366f130 0%, transparent 70%)",
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
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.12)",
                  border: "1.5px solid rgba(255,255,255,0.22)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    marginLeft: 4,
                    width: 0,
                    height: 0,
                    borderTop: "10px solid transparent",
                    borderBottom: "10px solid transparent",
                    borderLeft: "18px solid white",
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
                padding: "28px 28px 24px",
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 8,
                }}
              >
                <span
                  style={{
                    background: "#ef4444",
                    color: "#fff",
                    fontSize: 10,
                    fontWeight: 700,
                    padding: "4px 8px",
                    borderRadius: 5,
                    letterSpacing: "0.06em",
                  }}
                >
                  ▶ VIDEO
                </span>
                <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 12 }}>
                  {VIDEO.duration}
                </span>
                <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 12 }}>
                  ·
                </span>
                <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 12 }}>
                  {VIDEO.views}
                </span>
              </div>
              <h3
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  color: "#fff",
                  fontSize: 19,
                  fontWeight: 700,
                  lineHeight: 1.3,
                }}
              >
                {VIDEO.title}
              </h3>
              <p
                style={{
                  color: "rgba(255,255,255,0.4)",
                  fontSize: 12,
                  marginTop: 6,
                }}
              >
                {VIDEO.date}
              </p>
            </div>
          </div>
        </section>

        {/* ── LATEST ARTICLES ── */}
        <section style={{ marginBottom: 56 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 24,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div
                style={{
                  width: 3,
                  height: 20,
                  borderRadius: 4,
                  background: "#0f172a",
                }}
              />
              <span style={{ fontWeight: 600, fontSize: 14, color: "#0f172a" }}>
                Latest Articles
                <span
                  style={{
                    color: "#94a3b8",
                    fontWeight: 400,
                    fontSize: 13,
                    marginLeft: 6,
                  }}
                >
                  ({rest.length})
                </span>
              </span>
            </div>
            <a
              href="#"
              style={{
                fontSize: 13,
                color: "#3b82f6",
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              View all →
            </a>
          </div>

          {rest.length === 0 ? (
            <div
              style={{
                textAlign: "center",
                padding: "60px 0",
                color: "#94a3b8",
              }}
            >
              <div style={{ fontSize: 40, marginBottom: 12 }}>🔍</div>
              <p style={{ fontSize: 14 }}>
                No articles found. Try a different filter or search.
              </p>
            </div>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: 20,
              }}
            >
              {rest.map((post) => (
                <article
                  key={post.id}
                  className="card-hover"
                  style={{
                    background: "#fff",
                    border: "1px solid #f1f5f9",
                    borderRadius: 18,
                    overflow: "hidden",
                    boxShadow: "0 1px 6px rgba(15,23,42,0.05)",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      height: 176,
                      overflow: "hidden",
                    }}
                  >
                    <div style={{ position: "absolute", inset: 0 }}>
                      <ArticleThumb accent={post.accent} video={post.video} />
                    </div>
                    <div
                      style={{
                        position: "absolute",
                        top: 12,
                        left: 12,
                        display: "flex",
                        gap: 6,
                      }}
                    >
                      <span
                        style={{
                          background: post.catBg,
                          color: post.catColor,
                          fontSize: 11,
                          fontWeight: 700,
                          padding: "4px 10px",
                          borderRadius: 7,
                          letterSpacing: "0.03em",
                        }}
                      >
                        {post.category}
                      </span>
                      {post.video && (
                        <span
                          style={{
                            background: "#ef4444",
                            color: "#fff",
                            fontSize: 10,
                            fontWeight: 700,
                            padding: "4px 8px",
                            borderRadius: 7,
                          }}
                        >
                          ▶
                        </span>
                      )}
                    </div>
                  </div>

                  <div style={{ padding: "20px 20px 18px" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        fontSize: 12,
                        color: "#94a3b8",
                        marginBottom: 10,
                      }}
                    >
                      <span>{post.date}</span>
                      <span style={{ color: "#e2e8f0" }}>·</span>
                      <span>{post.readTime} read</span>
                    </div>

                    <h3
                      style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                        fontSize: 15,
                        fontWeight: 700,
                        color: "#0f172a",
                        lineHeight: 1.4,
                        marginBottom: 8,
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {post.title}
                    </h3>

                    <p
                      style={{
                        fontSize: 13,
                        color: "#64748b",
                        lineHeight: 1.7,
                        marginBottom: 14,
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
                        gap: 5,
                        marginBottom: 16,
                      }}
                    >
                      {post.tags.map((t) => (
                        <Tag key={t} label={t} />
                      ))}
                    </div>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        paddingTop: 14,
                        borderTop: "1px solid #f1f5f9",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                        }}
                      >
                        <Avatar
                          initials={post.initials}
                          color={post.avatarColor}
                          size={28}
                        />
                        <span
                          style={{
                            fontSize: 12,
                            color: "#475569",
                            fontWeight: 500,
                          }}
                        >
                          {post.author}
                        </span>
                      </div>
                      <span style={{ fontSize: 14, color: "#cbd5e1" }}>→</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* ── NEWSLETTER ── */}
        <section>
          <div
            style={{
              background: "linear-gradient(135deg, #f8fafc 0%, #f0f4ff 100%)",
              border: "1px solid #e2e8f0",
              borderRadius: 24,
              padding: "56px 40px",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: -40,
                right: -40,
                width: 200,
                height: 200,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, #3b82f610 0%, transparent 70%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: -30,
                left: -30,
                width: 160,
                height: 160,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, #8b5cf610 0%, transparent 70%)",
              }}
            />
            <div style={{ position: "relative" }}>
              <div style={{ fontSize: 38, marginBottom: 16 }}>📬</div>
              <h2
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: 26,
                  fontWeight: 700,
                  color: "#0f172a",
                  marginBottom: 10,
                }}
              >
                Stay Ahead of the Curve
              </h2>
              <p
                style={{
                  fontSize: 14.5,
                  color: "#64748b",
                  maxWidth: 380,
                  margin: "0 auto 32px",
                  lineHeight: 1.75,
                }}
              >
                Weekly tips on web development, SEO, e-commerce & digital
                strategy — straight to your inbox.
              </p>
              <div
                style={{
                  display: "flex",
                  gap: 10,
                  maxWidth: 440,
                  margin: "0 auto",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    flex: 1,
                    minWidth: 200,
                    border: "1.5px solid #e2e8f0",
                    borderRadius: 12,
                    padding: "12px 18px",
                    fontSize: 14,
                    color: "#1e293b",
                    background: "#fff",
                    fontFamily: "inherit",
                  }}
                />
                <button
                  className="subscribe-btn"
                  style={{
                    background: "#1e293b",
                    color: "#fff",
                    fontSize: 13,
                    fontWeight: 600,
                    padding: "12px 24px",
                    borderRadius: 12,
                    border: "none",
                    cursor: "pointer",
                    fontFamily: "inherit",
                    whiteSpace: "nowrap",
                  }}
                >
                  Subscribe Free →
                </button>
              </div>
              <p style={{ fontSize: 12, color: "#cbd5e1", marginTop: 14 }}>
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
