"use client";
import React, { useState, useEffect, useRef } from "react";

/* ── Icon SVGs (inline, no external dep) ─────────────────────────────── */
const Icon = ({ d, size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {Array.isArray(d) ? (
      d.map((p, i) => <path key={i} d={p} />)
    ) : (
      <path d={d} />
    )}
  </svg>
);

const icons = {
  web: [
    "M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z",
    "M2 12h20",
    "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z",
  ],
  vuln: [
    "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z",
    "M12 9v4",
    "M12 17h.01",
  ],
  vapt: ["M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"],
  audit: [
    "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z",
    "M14 2v6h6",
    "M16 13H8",
    "M16 17H8",
    "M10 9H8",
  ],
  cloud: ["M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"],
  monitor: [
    "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z",
    "M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z",
  ],
  consult: [
    "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2",
    "M23 21v-2a4 4 0 0 0-3-3.87",
    "M16 3.13a4 4 0 0 1 0 7.75",
    "M9 7a4 4 0 1 0 0 8 4 4 0 0 0 0-8z",
  ],
  arrow: "M5 12h14M12 5l7 7-7 7",
  check: "M20 6L9 17l-5-5",
  shield: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
  lock: [
    "M19 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2z",
    "M7 11V7a5 5 0 0 1 10 0v4",
  ],
  zap: "M13 2L3 14h9l-1 8 10-12h-9l1-8z",
  eye: [
    "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z",
    "M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z",
  ],
};

const services = [
  {
    id: "01",
    key: "web",
    title: "Web Application Security",
    short: "WAS",
    desc: "End-to-end security testing for web apps — OWASP Top 10, business logic flaws, authentication bypasses, and injection vulnerabilities before attackers find them.",
    tags: ["OWASP Top 10", "SQL Injection", "XSS", "CSRF", "Auth Bypass"],
    stat: "94%",
    statLabel: "of breaches start at the app layer",
  },
  {
    id: "02",
    key: "vuln",
    title: "Vulnerability Assessment",
    short: "VA",
    desc: "Systematic scanning and manual analysis of your entire attack surface — networks, systems, endpoints — mapped to CVSS severity and business risk.",
    tags: ["CVSS Scoring", "Network Scan", "CVE Analysis", "Risk Mapping"],
    stat: "60%",
    statLabel: "of orgs have unpatched critical CVEs",
  },
  {
    id: "03",
    key: "vapt",
    title: "Penetration Testing (VAPT)",
    short: "VAPT",
    desc: "Real-world attack simulation by certified ethical hackers. Black-box, white-box, and grey-box engagements with a detailed remediation roadmap.",
    tags: ["Black-box", "Grey-box", "White-box", "PTES", "OSSTMM"],
    stat: "3.2×",
    statLabel: "faster breach detection post-VAPT",
  },
  {
    id: "04",
    key: "audit",
    title: "Security Audits & Compliance",
    short: "GRC",
    desc: "Gap analysis and audit readiness for ISO 27001, SOC 2, PCI-DSS, HIPAA, GDPR, and DPDP Act. We map controls, document evidence, and guide you to certification.",
    tags: ["ISO 27001", "SOC 2", "PCI-DSS", "HIPAA", "GDPR", "DPDP"],
    stat: "100%",
    statLabel: "audit pass rate for our clients",
  },
  {
    id: "05",
    key: "cloud",
    title: "Cloud Security Services",
    short: "CSP",
    desc: "Architecture review, misconfiguration detection, and IAM hardening across AWS, Azure, and GCP. CIS Benchmarks applied with zero-trust principles baked in.",
    tags: ["AWS", "Azure", "GCP", "CIS Benchmark", "IAM", "Zero-Trust"],
    stat: "82%",
    statLabel: "of cloud breaches are misconfigurations",
  },
  {
    id: "06",
    key: "monitor",
    title: "Security Monitoring & IR",
    short: "SOC",
    desc: "24 × 7 threat detection via SIEM, EDR, and threat intelligence feeds. When an incident fires, our IR team contains, investigates, and recovers — fast.",
    tags: ["SIEM", "EDR", "Threat Intel", "DFIR", "24×7 SOC"],
    stat: "<15m",
    statLabel: "mean time to detect (MTTD)",
  },
  {
    id: "07",
    key: "consult",
    title: "Cybersecurity Consulting",
    short: "vCISO",
    desc: "Strategic advisory, security roadmap design, and vCISO services. We translate technical risk into board-level language so leadership can make informed decisions.",
    tags: ["vCISO", "Risk Mgmt", "Security Roadmap", "Board Advisory"],
    stat: "↑3.8×",
    statLabel: "ROI on security investment with advisory",
  },
];

const stats = [
  {
    value: "$4.45M",
    label: "Average cost of a data breach (USD)",
    sub: "IBM Security 2023",
  },
  {
    value: "277d",
    label: "Mean time to identify a breach",
    sub: "without active monitoring",
  },
  {
    value: "83%",
    label: "Organizations suffered 2+ breaches",
    sub: "in the past two years",
  },
  { value: "21d", label: "Average ransomware downtime", sub: "per incident" },
];

const process = [
  {
    phase: "Scope",
    desc: "Define assets, threat model, rules of engagement and success criteria.",
  },
  {
    phase: "Recon",
    desc: "OSINT, surface mapping, and passive enumeration of your footprint.",
  },
  {
    phase: "Exploit",
    desc: "Controlled attack execution — no destructive payloads, full evidence capture.",
  },
  {
    phase: "Report",
    desc: "Executive summary + technical findings, each with CVSS score and fix.",
  },
  {
    phase: "Remediate",
    desc: "Guided patching support and re-test to verify each finding is closed.",
  },
];

const certs = [
  "CEH",
  "OSCP",
  "CISSP",
  "ISO 27001 LA",
  "AWS Security",
  "CISM",
  "PCI-QSA",
];

/* ── Scanner Pulse ─────────────────────────────────────────────────── */
const ScannerPulse = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let angle = 0,
      raf;
    const dots = Array.from({ length: 18 }, () => ({
      r: 20 + Math.random() * 90,
      a: Math.random() * Math.PI * 2,
      size: 1.5 + Math.random() * 2,
      alpha: 0,
    }));

    const draw = () => {
      const W = canvas.width,
        H = canvas.height,
        cx = W / 2,
        cy = H / 2;
      ctx.clearRect(0, 0, W, H);

      [90, 70, 48, 26].forEach((r) => {
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(0,112,243,0.12)`;
        ctx.lineWidth = 0.8;
        ctx.stroke();
      });

      ctx.strokeStyle = "rgba(0,112,243,0.1)";
      ctx.lineWidth = 0.5;
      [
        [cx - 105, cy, cx + 105, cy],
        [cx, cy - 105, cx, cy + 105],
      ].forEach(([x1, y1, x2, y2]) => {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      });

      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(angle);
      const sweep = ctx.createLinearGradient(0, 0, 100, 0);
      sweep.addColorStop(0, "rgba(0,112,243,0.35)");
      sweep.addColorStop(1, "rgba(0,112,243,0)");
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.arc(0, 0, 100, -0.35, 0.35);
      ctx.closePath();
      ctx.fillStyle = sweep;
      ctx.fill();
      ctx.restore();

      dots.forEach((dot) => {
        const relA =
          (((dot.a - angle) % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
        if (relA < 0.4) dot.alpha = 1;
        else dot.alpha = Math.max(0, dot.alpha - 0.012);
        if (dot.alpha > 0) {
          const x = cx + Math.cos(dot.a) * dot.r;
          const y = cy + Math.sin(dot.a) * dot.r;
          ctx.beginPath();
          ctx.arc(x, y, dot.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0,112,243,${dot.alpha * 0.85})`;
          ctx.fill();
        }
      });

      ctx.beginPath();
      ctx.arc(cx, cy, 4, 0, Math.PI * 2);
      ctx.fillStyle = "#0070F3";
      ctx.fill();

      angle += 0.018;
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(raf);
  }, []);
  return (
    <canvas
      ref={canvasRef}
      width={220}
      height={220}
      style={{ display: "block" }}
    />
  );
};

/* ── Terminal Ticker ─────────────────────────────────────────────────── */
const terminalLines = [
  "[INFO]  Scanning 192.168.1.0/24 ...",
  "[WARN]  Open port 8443 detected on target",
  "[CRIT]  SQLi vector found — /api/users?id=",
  "[INFO]  Running OWASP A03 checks ...",
  "[PASS]  Auth flow — no bypass detected",
  "[CRIT]  Outdated OpenSSL 1.0.2 on :443",
  "[INFO]  Generating CVSS scores ...",
  "[PASS]  XSS filters verified on 12 inputs",
  "[WARN]  S3 bucket policy — public read",
  "[INFO]  Report compilation: 97%",
];

const Terminal = () => {
  const [visible, setVisible] = useState([terminalLines[0]]);
  const [idx, setIdx] = useState(1);
  useEffect(() => {
    const t = setInterval(() => {
      setVisible((v) => [
        ...v.slice(-6),
        terminalLines[idx % terminalLines.length],
      ]);
      setIdx((i) => i + 1);
    }, 1400);
    return () => clearInterval(t);
  }, [idx]);

  return (
    <div>
      <div
        style={{
          background: "#F1F5F9",
          border: "1.5px solid #E0E7EF",
          borderBottom: "none",
          borderRadius: "8px 8px 0 0",
          padding: "10px 16px",
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        <div
          style={{
            width: 10,
            height: 10,
            borderRadius: "50%",
            background: "#FF5F57",
          }}
        />
        <div
          style={{
            width: 10,
            height: 10,
            borderRadius: "50%",
            background: "#FFBD2E",
          }}
        />
        <div
          style={{
            width: 10,
            height: 10,
            borderRadius: "50%",
            background: "#28CA41",
          }}
        />
        <span
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: 11,
            color: "#6B7280",
            marginLeft: 8,
          }}
        >
          securex-scanner — bash
        </span>
      </div>
      <div
        style={{
          background: "#1E293B",
          border: "1.5px solid #E0E7EF",
          borderTop: "none",
          borderRadius: "0 0 8px 8px",
          fontFamily: "'Space Mono', monospace",
          fontSize: 12,
          padding: "16px 18px",
          lineHeight: 1.9,
          minHeight: 160,
        }}
      >
        <div style={{ color: "#60A5FA", marginBottom: 8, fontSize: 11 }}>
          ● LIVE SCAN FEED &nbsp;·&nbsp; TARGET: acme-corp.com
        </div>
        {visible.map((ln, i) => {
          const color = ln.startsWith("[CRIT]")
            ? "#F87171"
            : ln.startsWith("[WARN]")
              ? "#FBBF24"
              : ln.startsWith("[PASS]")
                ? "#34D399"
                : "#93C5FD";
          return (
            <div
              key={i}
              style={{ color, opacity: 0.7 + 0.3 * (i / visible.length) }}
            >
              {ln}
            </div>
          );
        })}
        <span
          style={{ color: "#60A5FA", animation: "blink 1s step-end infinite" }}
        >
          █
        </span>
      </div>
    </div>
  );
};

/* ── Service Card ────────────────────────────────────────────────────── */
const ServiceCard = ({ s }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      onClick={() => setOpen((o) => !o)}
      style={{
        background: open ? "#F7F9FC" : "#FFFFFF",
        border: `1.5px solid ${open ? "#0070F3" : "#E0E7EF"}`,
        borderRadius: 8,
        padding: "22px 26px",
        cursor: "pointer",
        position: "relative",
        marginBottom: 4,
        transition: "border-color .2s, background .2s",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 20,
          flexWrap: "wrap",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: 8,
              border: "1.5px solid #DBEAFE",
              background: "#EFF6FF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#0070F3",
              flexShrink: 0,
            }}
          >
            <Icon d={icons[s.key]} size={18} />
          </div>
          <div>
            <div
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 10,
                color: "#0070F3",
                marginBottom: 3,
              }}
            >
              {s.id} / {s.short}
            </div>
            <h3
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 15,
                fontWeight: 600,
                color: "#111827",
              }}
            >
              {s.title}
            </h3>
          </div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 20,
              fontWeight: 700,
              color: "#0070F3",
            }}
          >
            {s.stat}
          </div>
          <div
            style={{
              fontSize: 11,
              color: "#6B7280",
              maxWidth: 180,
              textAlign: "right",
            }}
          >
            {s.statLabel}
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          right: 24,
          top: 24,
          fontSize: 10,
          color: "#9CA3AF",
        }}
      >
        {open ? "▲" : "▼"}
      </div>

      {open && (
        <div
          style={{
            marginTop: 16,
            paddingTop: 16,
            borderTop: "1px solid #E0E7EF",
          }}
        >
          <p
            style={{
              fontSize: 13,
              lineHeight: 1.8,
              color: "#6B7280",
              marginBottom: 14,
            }}
          >
            {s.desc}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
            {s.tags.map((t) => (
              <span
                key={t}
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 10,
                  padding: "4px 10px",
                  border: "1px solid #DBEAFE",
                  color: "#0070F3",
                  background: "#EFF6FF",
                  borderRadius: 4,
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

/* ── Main Page ────────────────────────────────────────────────────────── */
const Cybersecurity = () => {
  const [formSent, setFormSent] = useState(false);

  return (
    <div
      style={{
        background: "#FFFFFF",
        color: "#374151",
        fontFamily: "'Inter', sans-serif",
        overflowX: "hidden",
        minHeight: "100vh",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500&family=Space+Mono:wght@400;700&display=swap');
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(18px)} to{opacity:1;transform:none} }
        @keyframes pulseRing { 0%{transform:scale(1);opacity:.6} 70%{transform:scale(1.6);opacity:0} 100%{transform:scale(1.6);opacity:0} }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        a { text-decoration: none; }
      `}</style>


      {/* ── HERO ── */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 64,
          alignItems: "center",
          padding: "80px 48px",
          borderBottom: "1px solid #E0E7EF",
          background: "#FFFFFF",
        }}
      >
        <div style={{ animation: "fadeUp .7s ease both" }}>
          {/* Threat Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "#FEF2F2",
              border: "1px solid #FECACA",
              padding: "6px 14px",
              marginBottom: 24,
              borderRadius: 4,
            }}
          >
            <div
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#E53E3E",
              }}
            />
            <span
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 10,
                color: "#E53E3E",
                letterSpacing: ".1em",
              }}
            >
              GLOBAL THREAT LEVEL: ELEVATED
            </span>
          </div>

          <div
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 11,
              color: "#0070F3",
              letterSpacing: ".14em",
              textTransform: "uppercase",
              marginBottom: 20,
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <div
              style={{
                width: 48,
                height: 1,
                background: "#0070F3",
                opacity: 0.5,
              }}
            />
            Certified Cybersecurity Partner
          </div>

          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(28px,4vw,48px)",
              fontWeight: 700,
              lineHeight: 1.1,
              color: "#111827",
              letterSpacing: -1,
              marginBottom: 20,
            }}
          >
            Your defences,
            <br />
            <span style={{ color: "#0070F3" }}>stress-tested</span>
            <br />
            by real attackers.
          </h1>

          <p
            style={{
              fontSize: 15,
              lineHeight: 1.8,
              color: "#6B7280",
              maxWidth: 440,
              marginBottom: 36,
            }}
          >
            We break into your systems before someone else does — then hand you
            a precise remediation roadmap. VAPT, compliance, cloud hardening,
            and 24×7 SOC for businesses that can't afford a breach.
          </p>

          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <button
              style={{
                background: "#0070F3",
                color: "#FFFFFF",
                padding: "13px 28px",
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 13,
                fontWeight: 600,
                border: "none",
                cursor: "pointer",
                borderRadius: 6,
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                transition: "background .2s, transform .2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#005CC5";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#0070F3";
                e.currentTarget.style.transform = "none";
              }}
            >
              Book Free Assessment <Icon d={icons.arrow} size={15} />
            </button>
            <button
              style={{
                background: "#FFFFFF",
                border: "1.5px solid #D1D5DB",
                color: "#374151",
                padding: "12px 24px",
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 13,
                cursor: "pointer",
                borderRadius: 6,
                transition: "border-color .2s, transform .2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#0070F3";
                e.currentTarget.style.color = "#0070F3";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#D1D5DB";
                e.currentTarget.style.color = "#374151";
                e.currentTarget.style.transform = "none";
              }}
            >
              View Sample Report
            </button>
          </div>
        </div>

        {/* Scanner Box */}
        <div
          style={{
            background: "#F7F9FC",
            border: "1.5px solid #E0E7EF",
            borderRadius: 12,
            padding: 36,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 20,
            position: "relative",
            animation: "fadeUp .9s .15s ease both",
          }}
        >
          {/* Corners */}
          {[
            [
              "tl",
              {
                top: -1,
                left: -1,
                borderTop: "2.5px solid #0070F3",
                borderLeft: "2.5px solid #0070F3",
              },
            ],
            [
              "tr",
              {
                top: -1,
                right: -1,
                borderTop: "2.5px solid #0070F3",
                borderRight: "2.5px solid #0070F3",
              },
            ],
            [
              "bl",
              {
                bottom: -1,
                left: -1,
                borderBottom: "2.5px solid #0070F3",
                borderLeft: "2.5px solid #0070F3",
              },
            ],
            [
              "br",
              {
                bottom: -1,
                right: -1,
                borderBottom: "2.5px solid #0070F3",
                borderRight: "2.5px solid #0070F3",
              },
            ],
          ].map(([key, style]) => (
            <div
              key={key}
              style={{ position: "absolute", width: 14, height: 14, ...style }}
            />
          ))}

          <div
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 10,
              color: "#0070F3",
              letterSpacing: ".12em",
              textAlign: "center",
            }}
          >
            ACTIVE THREAT RECONNAISSANCE
          </div>
          <ScannerPulse />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontFamily: "'Space Mono', monospace",
              fontSize: 11,
              color: "#059669",
            }}
          >
            <div
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "#059669",
              }}
            />
            Scanning — 3 vulnerabilities detected
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          borderBottom: "1px solid #E0E7EF",
        }}
      >
        {stats.map((s, i) => (
          <div
            key={s.value}
            style={{
              padding: "32px 28px",
              borderRight: i < 3 ? "1px solid #E0E7EF" : "none",
              background: "#FFFFFF",
            }}
          >
            <div
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 28,
                fontWeight: 700,
                color: "#E53E3E",
                marginBottom: 5,
              }}
            >
              {s.value}
            </div>
            <div style={{ fontSize: 13, color: "#374151", marginBottom: 4 }}>
              {s.label}
            </div>
            <div
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 10,
                color: "#9CA3AF",
              }}
            >
              {s.sub}
            </div>
          </div>
        ))}
      </div>

      {/* ── SERVICES ── */}
      <section
        id="services"
        style={{ padding: "72px 48px", borderBottom: "1px solid #E0E7EF" }}
      >
        <div
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: 10,
            color: "#0070F3",
            letterSpacing: ".12em",
            textTransform: "uppercase",
            marginBottom: 14,
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          Our Services
          <span
            style={{
              flex: 1,
              maxWidth: 48,
              height: 1,
              background: "#0070F3",
              opacity: 0.4,
              display: "block",
            }}
          />
        </div>
        <h2
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(20px,3vw,32px)",
            fontWeight: 700,
            color: "#111827",
            letterSpacing: "-.4px",
            marginBottom: 10,
          }}
        >
          Every attack vector, covered.
        </h2>
        <p
          style={{
            fontSize: 14,
            lineHeight: 1.8,
            color: "#6B7280",
            maxWidth: 520,
            marginBottom: 48,
          }}
        >
          Seven disciplines, one team. Click any service to see scope,
          methodology, and real-world impact data.
        </p>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {services.map((s) => (
            <ServiceCard key={s.id} s={s} />
          ))}
        </div>
      </section>

      {/* ── LIVE TERMINAL ── */}
      <section
        id="vapt"
        style={{
          padding: "72px 48px",
          borderBottom: "1px solid #E0E7EF",
          background: "#F7F9FC",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 48,
            alignItems: "start",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 10,
                color: "#0070F3",
                letterSpacing: ".12em",
                textTransform: "uppercase",
                marginBottom: 14,
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              What a VAPT looks like
              <span
                style={{
                  flex: 1,
                  maxWidth: 48,
                  height: 1,
                  background: "#0070F3",
                  opacity: 0.4,
                  display: "block",
                }}
              />
            </div>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(20px,3vw,32px)",
                fontWeight: 700,
                color: "#111827",
                letterSpacing: "-.4px",
                marginBottom: 10,
              }}
            >
              We think like the threat actors targeting you.
            </h2>
            <p style={{ fontSize: 14, lineHeight: 1.8, color: "#6B7280" }}>
              This is a live feed from a sanitised engagement. Real targets,
              real findings, zero destructive payloads. Every critical finding
              goes into a remediation ticket before we wrap the engagement.
            </p>
          </div>
          <Terminal />
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section
        id="vapt-process"
        style={{ padding: "72px 48px", borderBottom: "1px solid #E0E7EF" }}
      >
        <div
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: 10,
            color: "#0070F3",
            letterSpacing: ".12em",
            textTransform: "uppercase",
            marginBottom: 14,
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          Engagement Model
          <span
            style={{
              flex: 1,
              maxWidth: 48,
              height: 1,
              background: "#0070F3",
              opacity: 0.4,
              display: "block",
            }}
          />
        </div>
        <h2
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(20px,3vw,32px)",
            fontWeight: 700,
            color: "#111827",
            letterSpacing: "-.4px",
            marginBottom: 10,
          }}
        >
          From kickoff to all-clear in five phases.
        </h2>
        <p
          style={{
            fontSize: 14,
            lineHeight: 1.8,
            color: "#6B7280",
            maxWidth: 520,
            marginBottom: 48,
          }}
        >
          No surprises. Every engagement follows the same transparent playbook.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5,1fr)",
            gap: 1,
            background: "#E0E7EF",
            borderRadius: 10,
            overflow: "hidden",
          }}
        >
          {process.map((p, i) => (
            <div
              key={p.phase}
              style={{
                background: "#FFFFFF",
                padding: "24px 20px",
                position: "relative",
                transition: "background .2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#F7F9FC")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "#FFFFFF")
              }
            >
              <div
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 10,
                  color: "#0070F3",
                  marginBottom: 10,
                }}
              >
                0{i + 1}
              </div>
              <div
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 15,
                  fontWeight: 700,
                  color: "#111827",
                  marginBottom: 8,
                }}
              >
                {p.phase}
              </div>
              <div style={{ fontSize: 12, lineHeight: 1.75, color: "#6B7280" }}>
                {p.desc}
              </div>
              {i < process.length - 1 && (
                <div
                  style={{
                    position: "absolute",
                    top: 24,
                    right: -10,
                    fontSize: 16,
                    color: "#0070F3",
                    zIndex: 2,
                  }}
                >
                  ›
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── COMPLIANCE ── */}
      <section
        id="compliance"
        style={{
          padding: "72px 48px",
          borderBottom: "1px solid #E0E7EF",
          background: "#F7F9FC",
        }}
      >
        <div
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: 10,
            color: "#0070F3",
            letterSpacing: ".12em",
            textTransform: "uppercase",
            marginBottom: 14,
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          Certifications & Compliance
          <span
            style={{
              flex: 1,
              maxWidth: 48,
              height: 1,
              background: "#0070F3",
              opacity: 0.4,
              display: "block",
            }}
          />
        </div>
        <h2
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(20px,3vw,32px)",
            fontWeight: 700,
            color: "#111827",
            letterSpacing: "-.4px",
            marginBottom: 10,
          }}
        >
          Audit-ready from day one.
        </h2>
        <p
          style={{
            fontSize: 14,
            lineHeight: 1.8,
            color: "#6B7280",
            maxWidth: 520,
            marginBottom: 0,
          }}
        >
          Our analysts hold the industry's top certifications. Every engagement
          deliverable is written to satisfy auditor requirements.
        </p>

        <div
          style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 36 }}
        >
          {certs.map((c) => (
            <div
              key={c}
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 11,
                padding: "7px 14px",
                border: "1.5px solid #DBEAFE",
                color: "#0070F3",
                background: "#EFF6FF",
                borderRadius: 6,
                display: "flex",
                alignItems: "center",
                gap: 7,
              }}
            >
              <span style={{ color: "#059669" }}>✓</span>
              {c}
            </div>
          ))}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill,minmax(190px,1fr))",
            gap: 12,
            marginTop: 40,
          }}
        >
          {[
            "ISO 27001",
            "SOC 2 Type II",
            "PCI-DSS v4",
            "HIPAA",
            "GDPR",
            "DPDP Act (India)",
          ].map((f) => (
            <div
              key={f}
              style={{
                background: "#FFFFFF",
                border: "1.5px solid #E0E7EF",
                borderRadius: 8,
                padding: "16px 18px",
                display: "flex",
                alignItems: "center",
                gap: 11,
                fontSize: 13,
                color: "#111827",
                fontWeight: 500,
              }}
            >
              <span style={{ color: "#059669", fontSize: 15, flexShrink: 0 }}>
                ✓
              </span>
              {f}
            </div>
          ))}
        </div>
      </section>


    </div>
  );
};

export default Cybersecurity;
