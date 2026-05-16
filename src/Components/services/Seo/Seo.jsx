"use client";

const WA_NUMBER = "919372381936";

const services = [
  {
    id: "01",
    title: "On-Page SEO",
    desc: "We optimize every page of your website — title tags, meta descriptions, headings, image alt text, and internal linking — so Google clearly understands what your site is about.",
  },
  {
    id: "02",
    title: "Keyword Research",
    desc: "We find the exact keywords your customers are searching for. Low competition, high intent keywords that bring real buyers to your website — not just random traffic.",
  },
  {
    id: "03",
    title: "Technical SEO",
    desc: "Site speed, mobile-friendliness, crawlability, structured data, XML sitemaps, and Core Web Vitals — we fix all the behind-the-scenes issues that stop Google from ranking you.",
  },
  {
    id: "04",
    title: "Link Building",
    desc: "High-quality backlinks from relevant, authoritative websites. We build your domain authority the right way — no spammy links, no shortcuts, just sustainable rankings.",
  },
  {
    id: "05",
    title: "Local SEO",
    desc: "Want customers from your city to find you? We optimize your Google Business Profile, local citations, and location pages to dominate local search results.",
  },
  {
    id: "06",
    title: "SEO Audit & Reporting",
    desc: "Monthly reports showing keyword rankings, traffic growth, and backlink stats. We audit your site regularly and adapt the strategy based on what's working.",
  },
];

const packages = [
  {
    name: "Starter",
    price: "₹5,000",
    tag: "Best for Small Businesses",
    accent: "#1e78c8",
    pages: "Up to 10 Pages",
    features: [
      "Keyword Research (20 Keywords)",
      "On-Page SEO Optimization",
      "Meta Tags & Descriptions",
      "Google Search Console Setup",
      "Basic Technical SEO",
      "Monthly Report",
    ],
    delivery: "Ongoing / Monthly",
    waMsg: `Hi! I'm interested in the *SEO Starter Package* (₹5,000/month).\n\n📄 *Package Includes:*\n• Keyword Research (20 Keywords)\n• On-Page SEO Optimization\n• Meta Tags & Descriptions\n• Google Search Console Setup\n• Basic Technical SEO\n• Monthly Report\n\nCould you please share more details and help me get started? 🙏`,
  },
  {
    name: "Growth",
    price: "₹12,000",
    tag: "Most Popular",
    accent: "#f59e0b",
    pages: "Up to 30 Pages",
    features: [
      "Everything in Starter",
      "Keyword Research (50 Keywords)",
      "Link Building (10 Backlinks/Month)",
      "Blog Content Strategy",
      "Local SEO Optimization",
      "Competitor Analysis",
      "Bi-Weekly Reports",
    ],
    delivery: "Ongoing / Monthly",
    highlight: true,
    waMsg: `Hi! I'm interested in the *SEO Growth Package* (₹12,000/month) ⭐\n\n📄 *Package Includes:*\n• Everything in Starter\n• Keyword Research (50 Keywords)\n• Link Building (10 Backlinks/Month)\n• Blog Content Strategy\n• Local SEO Optimization\n• Competitor Analysis\n• Bi-Weekly Reports\n\nPlease guide me on the next steps! 🚀`,
  },
  {
    name: "Pro",
    price: "₹25,000+",
    tag: "For Serious Brands",
    accent: "#7c3aed",
    pages: "Unlimited Pages",
    features: [
      "Everything in Growth",
      "Unlimited Keywords",
      "30+ Backlinks/Month",
      "Technical SEO Audit",
      "E-Commerce SEO",
      "Weekly Reports & Calls",
      "Dedicated SEO Manager",
    ],
    delivery: "Ongoing / Monthly",
    waMsg: `Hi! I'm interested in the *SEO Pro Package* (₹25,000+/month) 💼\n\n📄 *Package Includes:*\n• Everything in Growth\n• Unlimited Keywords\n• 30+ Backlinks/Month\n• Technical SEO Audit\n• E-Commerce SEO\n• Weekly Reports & Calls\n• Dedicated SEO Manager\n\nI'd like to discuss my project in detail. Please connect with me! 🙏`,
  },
];

const otherServices = [
  {
    name: "Website Designing",
    img: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=700&q=85",
  },
  {
    name: "App Development",
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=700&q=85",
  },
  {
    name: "Google Business Profile",
    img: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=700&q=85",
  },
  {
    name: "E-Commerce",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=700&q=85",
  },
];

const steps = [
  {
    step: "01",
    title: "SEO Audit",
    desc: "We do a full audit of your website — technical issues, current rankings, competitor gaps, and quick-win opportunities. Completely free for new clients.",
  },
  {
    step: "02",
    title: "Strategy & Keyword Plan",
    desc: "We build a custom SEO roadmap with target keywords, content plan, and link building strategy tailored to your industry and goals.",
  },
  {
    step: "03",
    title: "On-Page Optimization",
    desc: "We optimize your existing pages — titles, meta tags, content structure, internal links, speed, and schema markup — for maximum Google visibility.",
  },
  {
    step: "04",
    title: "Off-Page & Link Building",
    desc: "We build high-quality backlinks from relevant websites to grow your domain authority and push your pages higher in search results.",
  },
  {
    step: "05",
    title: "Track, Report & Improve",
    desc: "Monthly reports on rankings, traffic, and leads. We continuously refine the strategy based on what Google's algorithm rewards.",
  },
];

function wa(msg) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
}

export default function Seo() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#fff",
        color: "#1e293b",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500;600&display=swap');
        .ws-page *, .ws-page *::before, .ws-page *::after { box-sizing: border-box; margin: 0; padding: 0; }
        .fs { font-family: 'Syne', sans-serif; }

        .hero {
          background: linear-gradient(135deg,#0c1a0e 0%,#1a3a1e 55%,#0f2912 100%);
          padding: 72px 40px 60px;
          position: relative;
          overflow: hidden;
        }
        .hero::before {
          content: '';
          position: absolute;
          top: 0; right: 0;
          width: 380px; height: 380px;
          border-radius: 50%;
          background: #f59e0b;
          filter: blur(90px);
          transform: translate(30%, -30%);
          opacity: .18;
          pointer-events: none;
          z-index: 0;
        }
        .hero::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 260px; height: 260px;
          border-radius: 50%;
          background: #4ade80;
          filter: blur(70px);
          transform: translate(-20%, 30%);
          opacity: .15;
          pointer-events: none;
          z-index: 0;
        }
        .hero-inner {
          max-width: 1100px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        .h-tag { color:#fde68a; font-size:11px; letter-spacing:.22em; text-transform:uppercase; margin-bottom:12px; }
        .h-title { font-family:'Syne',sans-serif; font-size:clamp(34px,5vw,56px); font-weight:800; color:#fff; line-height:1.1; margin-bottom:18px; }
        .h-title span { color:#fbbf24; }
        .h-desc { color:#fef3c7; font-size:15px; line-height:1.75; max-width:500px; margin-bottom:30px; opacity:.92; }
        .h-btns { display:flex; gap:14px; flex-wrap:wrap; }
        .hb-p { background:#fff; color:#92400e; font-weight:700; padding:13px 30px; border-radius:999px; border:none; cursor:pointer; font-size:14px; font-family:'DM Sans',sans-serif; text-decoration:none; transition:all .2s; }
        .hb-p:hover { background:#fef3c7; }
        .hb-s { background:transparent; color:#fff; padding:13px 30px; border-radius:999px; border:1.5px solid rgba(255,255,255,.35); cursor:pointer; font-size:14px; font-family:'DM Sans',sans-serif; text-decoration:none; transition:all .2s; }
        .hb-s:hover { background:rgba(255,255,255,.1); border-color:#fff; }
        .breadcrumb { color:#fcd34d; font-size:12px; margin-top:26px; }
        .breadcrumb span { color:#fde68a; margin:0 8px; }
        .breadcrumb em { color:#fef3c7; font-style:normal; }

        .sec { max-width:1100px; margin:0 auto; padding:60px 40px; }
        .sec-tag { color:#d97706; font-size:11px; letter-spacing:.2em; text-transform:uppercase; font-weight:600; margin-bottom:6px; }
        .sec-bar { width:36px; height:3px; background:#d97706; border-radius:99px; margin-bottom:18px; }
        .sec-h { font-family:'Syne',sans-serif; font-size:34px; font-weight:800; color:#0f172a; margin-bottom:10px; }
        .sec-sub { color:#94a3b8; font-size:14px; line-height:1.75; }

        .intro-grid { display:grid; grid-template-columns:1fr 1fr; gap:48px; align-items:center; }
        @media(max-width:768px){ .intro-grid{ grid-template-columns:1fr; } }
        .intro-img { width:100%; border-radius:20px; overflow:hidden; box-shadow:0 20px 60px rgba(217,119,6,.15); }
        .intro-img img { width:100%; height:320px; object-fit:cover; display:block; }

        .svc-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
        @media(max-width:900px){ .svc-grid{ grid-template-columns:repeat(2,1fr); } }
        @media(max-width:580px){ .svc-grid{ grid-template-columns:1fr; } }
        .svc-card { border:1.5px solid #f1f5f9; border-radius:18px; padding:28px 24px; background:#fff; transition:all .28s; }
        .svc-card:hover { box-shadow:0 12px 36px rgba(217,119,6,.12); transform:translateY(-4px); border-color:#fde68a; }
        .svc-num { font-family:'Syne',sans-serif; font-size:46px; font-weight:800; color:#e2e8f0; display:block; margin-bottom:14px; line-height:1; }
        .svc-title { font-family:'Syne',sans-serif; font-size:15px; font-weight:700; color:#0f172a; margin-bottom:10px; }
        .svc-desc { color:#94a3b8; font-size:13px; line-height:1.7; }

        .pkg-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; align-items:stretch; }
        @media(max-width:800px){ .pkg-grid{ grid-template-columns:1fr; } }
        .pkg-card { display:flex; flex-direction:column; border-radius:20px; padding:32px 28px; background:#fff; transition:all .3s; border:1.5px solid #f1f5f9; position:relative; }
        .pkg-card:hover { transform:translateY(-5px); box-shadow:0 16px 48px rgba(0,0,0,.08); }
        .pkg-feat { flex:1; list-style:none; padding:0; }
        .pkg-feat li { display:flex; align-items:center; gap:10px; font-size:13px; color:#475569; padding:5px 0; }
        .pkg-divider { border:none; border-top:1px solid #f1f5f9; margin:16px 0; }
        .pkg-btn { width:100%; padding:14px; border-radius:999px; font-size:14px; font-weight:700; cursor:pointer; font-family:'DM Sans',sans-serif; text-decoration:none; display:block; text-align:center; transition:all .2s; }
        .pkg-btn:hover { opacity:.87; transform:scale(.98); }
        .pkg-badge { position:absolute; top:-14px; left:50%; transform:translateX(-50%); color:#fff; font-size:12px; font-weight:700; padding:5px 18px; border-radius:999px; white-space:nowrap; }

        .step-line { position:absolute; left:21px; top:44px; bottom:-16px; width:2px; background:linear-gradient(to bottom,#fde68a,transparent); }

        .other-bg { background:#f8fafc; border-top:1.5px solid #f1f5f9; padding:60px 40px; }
        .other-inner { max-width:1100px; margin:0 auto; }
        .other-header { display:flex; justify-content:space-between; align-items:flex-end; margin-bottom:32px; flex-wrap:wrap; gap:16px; }
        .other-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:22px; }
        @media(max-width:900px){ .other-grid{ grid-template-columns:repeat(2,1fr); } }
        .other-card { border-radius:18px; overflow:hidden; border:1.5px solid #e8edf2; background:#fff; transition:all .28s; cursor:pointer; }
        .other-card:hover { transform:translateY(-6px); box-shadow:0 16px 44px rgba(0,0,0,.11); }
        .other-card img { width:100%; height:220px; object-fit:cover; display:block; transition:transform .4s ease; }
        .other-card:hover img { transform:scale(1.06); }
        .other-card-body { padding:18px 20px 20px; }
        .other-card-name { font-family:'Syne',sans-serif; font-size:15px; font-weight:700; color:#0f172a; }

        .cta-sec { background:#fff; padding:72px 40px; text-align:center; border-top:1.5px solid #f1f5f9; }
        .wa-btn { background:#25d366; color:#fff; font-weight:700; padding:15px 38px; border-radius:999px; font-size:15px; text-decoration:none; display:inline-flex; align-items:center; gap:10px; transition:all .2s; }
        .wa-btn:hover { background:#22c55e; transform:scale(1.02); }
        .ask-btn { background:transparent; color:#d97706; font-weight:600; padding:15px 38px; border-radius:999px; font-size:15px; text-decoration:none; border:1.5px solid #fde68a; transition:all .2s; }
        .ask-btn:hover { border-color:#d97706; background:#fffbeb; }
      `}</style>

      {/* ── HERO ── */}
      <div className="hero">
        <div className="hero-inner">
          <p className="h-tag fs">Application Services</p>
          <h1 className="h-title">
            SEO
            <br />
            <span>Optimization Services</span>
          </h1>
          <p className="h-desc">
            Rank higher. Get found. Grow faster. We turn your website into a
            traffic magnet with proven SEO strategies that deliver real,
            measurable results.
          </p>
          <div className="h-btns">
            <a
              className="hb-p"
              href={wa("Hi, I'd like a free SEO audit for my website.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Free SEO Audit →
            </a>
            <a
              className="hb-s"
              href={wa("Hi, I'd like to know more about your SEO services.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              How It Works
            </a>
          </div>
          <p className="breadcrumb">
            Home<span>/</span>
            <em>SEO Optimization Services</em>
          </p>
        </div>
      </div>

      {/* ── INTRO 2-COL ── */}
      <div className="sec">
        <div className="intro-grid">
          <div>
            <p className="sec-tag">Application Services</p>
            <div className="sec-bar" />
            <h2 className="sec-h" style={{ fontSize: 38 }}>
              Our Valuable Services
            </h2>
            <p className="sec-sub" style={{ marginBottom: 16 }}>
              Our SEO services are designed to get your business to the top of
              Google search results — and keep it there. We combine technical
              expertise, content strategy, and link building to drive consistent
              organic traffic that converts into real customers.
            </p>
            <p className="sec-sub">
              Whether you're a local business, an e-commerce store, or a growing
              brand — we build an SEO strategy that fits your goals and your
              budget. No fluff, no fake promises — just results.
            </p>
          </div>
          <div className="intro-img">
            <img
              src="https://images.unsplash.com/photo-1553484771-371a605b060b?w=800&q=85"
              alt="SEO Optimization Services"
            />
          </div>
        </div>

        {/* ── SERVICE CARDS ── */}
        <div style={{ marginTop: 60 }}>
          <div className="svc-grid">
            {services.map((s) => (
              <div key={s.id} className="svc-card">
                <span className="svc-num">{s.id}</span>
                <div className="svc-title">{s.title}</div>
                <p className="svc-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── PRICING ── */}
      <div
        style={{
          background: "#f8fafc",
          borderTop: "1.5px solid #f1f5f9",
          borderBottom: "1.5px solid #f1f5f9",
        }}
      >
        <div className="sec" style={{ paddingTop: 56, paddingBottom: 56 }}>
          <p className="sec-tag">Transparent Pricing</p>
          <div className="sec-bar" />
          <h2 className="sec-h">SEO Pricing Packages</h2>
          <p className="sec-sub" style={{ marginBottom: 36 }}>
            No hidden charges. No fake guarantees. Just consistent, honest SEO.
          </p>

          <div className="pkg-grid">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className="pkg-card"
                style={{
                  borderColor: pkg.highlight ? pkg.accent + "55" : "#f1f5f9",
                }}
              >
                {pkg.highlight && (
                  <div className="pkg-badge" style={{ background: pkg.accent }}>
                    ★ Most Popular
                  </div>
                )}
                <p
                  style={{
                    fontSize: 10,
                    letterSpacing: ".2em",
                    textTransform: "uppercase",
                    fontWeight: 700,
                    color: pkg.accent,
                    marginBottom: 6,
                  }}
                >
                  {pkg.tag}
                </p>
                <h3
                  className="fs"
                  style={{
                    fontSize: 26,
                    fontWeight: 800,
                    color: "#0f172a",
                    marginBottom: 4,
                  }}
                >
                  {pkg.name}
                </h3>
                <p
                  className="fs"
                  style={{
                    fontSize: 38,
                    fontWeight: 800,
                    color: pkg.accent,
                    marginBottom: 4,
                  }}
                >
                  {pkg.price}
                </p>
                <p style={{ fontSize: 12, color: "#94a3b8", marginBottom: 22 }}>
                  {pkg.pages}
                </p>

                <ul className="pkg-feat">
                  {pkg.features.map((f) => (
                    <li key={f}>
                      <span
                        style={{
                          width: 18,
                          height: 18,
                          borderRadius: "50%",
                          background: pkg.accent + "1a",
                          color: pkg.accent,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: 10,
                          flexShrink: 0,
                        }}
                      >
                        ✓
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <hr className="pkg-divider" />
                <p style={{ fontSize: 11, color: "#94a3b8", marginBottom: 4 }}>
                  Billing
                </p>
                <p
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: pkg.accent,
                    marginBottom: 20,
                  }}
                >
                  {pkg.delivery}
                </p>

                <a
                  className="pkg-btn"
                  href={wa(pkg.waMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: pkg.highlight ? pkg.accent : "transparent",
                    color: pkg.highlight ? "#fff" : pkg.accent,
                    border: `1.5px solid ${pkg.accent}`,
                  }}
                >
                  Choose {pkg.name} →
                </a>
              </div>
            ))}
          </div>

          <p
            style={{
              textAlign: "center",
              color: "#94a3b8",
              fontSize: 13,
              marginTop: 28,
            }}
          >
            Have a custom requirement?{" "}
            <a
              href={wa(
                "Hi, I have a custom SEO requirement. Can we discuss my project?",
              )}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#d97706",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Chat with us on WhatsApp →
            </a>
          </p>
        </div>
      </div>

      {/* ── HOW IT WORKS ── */}
      <div className="sec">
        <p className="sec-tag">How It Works</p>
        <div className="sec-bar" />
        <h2 className="sec-h">Our Simple Process</h2>
        <p className="sec-sub" style={{ marginBottom: 36 }}>
          From audit to first-page rankings in 5 simple steps.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {steps.map((s, i) => (
            <div
              key={s.step}
              style={{
                display: "flex",
                gap: 20,
                alignItems: "flex-start",
                position: "relative",
              }}
            >
              {i < steps.length - 1 && <div className="step-line" />}
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  background: "#fffbeb",
                  border: "2px solid #fde68a",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  zIndex: 1,
                }}
              >
                <span
                  className="fs"
                  style={{ fontSize: 12, fontWeight: 700, color: "#d97706" }}
                >
                  {s.step}
                </span>
              </div>
              <div
                style={{
                  flex: 1,
                  background: "#f8fafc",
                  border: "1.5px solid #f1f5f9",
                  borderRadius: 14,
                  padding: "18px 22px",
                }}
              >
                <div
                  className="fs"
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: "#0f172a",
                    marginBottom: 6,
                  }}
                >
                  {s.title}
                </div>
                <p style={{ color: "#64748b", fontSize: 13, lineHeight: 1.65 }}>
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── OTHER SERVICES ── */}
      <div className="other-bg">
        <div className="other-inner">
          <div className="other-header">
            <div>
              <p className="sec-tag">Our Services</p>
              <div className="sec-bar" />
              <h2 className="sec-h" style={{ margin: 0 }}>
                Other Services
              </h2>
            </div>
            <a
              href={wa("Hi, I'd like to know more about all your services.")}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "#d97706",
                color: "#fff",
                padding: "12px 26px",
                borderRadius: 999,
                fontSize: 13,
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              View All Services →
            </a>
          </div>

          <div className="other-grid">
            {otherServices.map((s) => (
              <div key={s.name} className="other-card">
                <div style={{ overflow: "hidden" }}>
                  <img src={s.img} alt={s.name} />
                </div>
                <div className="other-card-body">
                  <div className="other-card-name">{s.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="cta-sec">
        <p className="sec-tag" style={{ textAlign: "center" }}>
          Get Started Today
        </p>
        <h2
          className="fs"
          style={{
            fontSize: 38,
            fontWeight: 800,
            color: "#0f172a",
            marginBottom: 14,
          }}
        >
          Ready to rank on <span style={{ color: "#d97706" }}>Page 1?</span>
        </h2>
        <p
          style={{
            color: "#94a3b8",
            fontSize: 15,
            margin: "0 auto 36px",
            maxWidth: 440,
            lineHeight: 1.75,
          }}
        >
          Book a free SEO audit today. We'll analyze your website and show you
          exactly what's stopping you from ranking — at zero cost.
        </p>
        <div
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            className="wa-btn"
            href={wa(
              "Hi! I'd like to book a free SEO audit for my website. Please let me know your availability. 🙏",
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.555 4.116 1.528 5.845L.057 23.985l6.304-1.654A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.37l-.36-.214-3.733.979 1-3.642-.234-.374A9.818 9.818 0 1112 21.818z" />
            </svg>
            Book Free SEO Audit on WhatsApp
          </a>
          <a
            className="ask-btn"
            href={wa(
              "Hi! I have a question about your SEO services. Can you help me?",
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ask a Question
          </a>
        </div>
      </div>

      {/* ── FOOTER ── */}
      <div
        style={{
          borderTop: "1.5px solid #f1f5f9",
          padding: "18px 40px",
          textAlign: "center",
          background: "#fff",
        }}
      >
        <p style={{ color: "#94a3b8", fontSize: 12 }}>
          © 2025 Your Software Company · All rights reserved ·{" "}
          <a
            href={`https://wa.me/${WA_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#d97706", textDecoration: "none" }}
          >
            WhatsApp Us
          </a>
        </p>
      </div>
    </div>
  );
}
