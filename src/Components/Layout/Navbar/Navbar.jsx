"use client";
import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { name: "Home", icon: "ti-home", href: "/" },
  { name: "About", icon: "ti-info-circle", href: "/about" },
  {
    name: "Services",
    icon: "ti-apps",
    href: "#",
    children: [
      { name: "Web Development", icon: "ti-code", href: "/services/web", desc: "Modern, fast websites" },
      { name: "App Development", icon: "ti-device-mobile", href: "/services/app", desc: "iOS & Android apps" },
      { name: "Google Business Profile", icon: "ti-map-pin", href: "/services/GoogleBusinessProfile", desc: "Local SEO presence" },
      { name: "E-commerce Development", icon: "ti-shopping-cart", href: "/services/ecommerce", desc: "Online stores & shops" },
      { name: "SEO", icon: "ti-search", href: "/services/seo", desc: "Rank higher on Google" },
      { name: "AI Solutions & Chatbots", icon: "ti-robot", href: "/services/ai-chatbots", desc: "Smart AI integrations" },
      { name: "UI/UX Design", icon: "ti-palette", href: "/services/ui-ux", desc: "Beautiful interfaces" },
      { name: "Cybersecurity", icon: "ti-shield-lock", href: "/services/cybersecurity", desc: "Protect your business" },
      { name: "Custom Software Development", icon: "ti-cpu", href: "/services/custom-software", desc: "Built for your needs" },
      { name: "Maintenance & Support", icon: "ti-tool", href: "/services/maintenance", desc: "Always-on assistance" },
      { name: "Graphic Design", icon: "ti-vector", href: "/services/graphic-design", desc: "Logos & brand visuals" },
      { name: "Enterprise Solutions", icon: "ti-building", href: "/services/enterprise", desc: "Large-scale systems" },
      { name: "Industry-Specific Software", icon: "ti-layout-grid", href: "/services/industry-software", desc: "Tailored for your sector" },
    ],
  },
  { name: "Projects", icon: "ti-briefcase", href: "/projects" },
  { name: "Pricing", icon: "ti-tag", href: "/pricing" },
  { name: "Blog", icon: "ti-book", href: "/blog" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileServiceOpen, setMobileServiceOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css"
      />
      <style>{`
        * { box-sizing: border-box; }

        .nb-wrapper {
          font-family: 'Inter', 'Segoe UI', system-ui, -apple-system, sans-serif;
          position: sticky;
          top: 0;
          z-index: 1000;
        }

        /* ── TOP BAR ── */
        .nb-top {
          background: #0f1f45;
          color: white;
          padding: 7px 0;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .nb-top-inner {
          max-width: 100%;
          margin: 0 auto;
          padding: 0 48px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .nb-contacts {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .nb-contact-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12.5px;
          color: rgba(255,255,255,0.72);
          text-decoration: none;
          letter-spacing: 0.01em;
          transition: color 0.2s;
        }
        .nb-contact-item:hover { color: #60a5fa; }
        .nb-contact-item i { font-size: 13px; }
        .nb-top-divider {
          width: 1px;
          height: 14px;
          background: rgba(255,255,255,0.15);
        }
        .nb-top-right {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .nb-follow-label {
          font-size: 10.5px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.4);
        }
        .nb-socials {
          display: flex;
          align-items: center;
          gap: 5px;
        }
        .nb-social-btn {
          width: 27px;
          height: 27px;
          border-radius: 6px;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.65);
          text-decoration: none;
          transition: all 0.18s;
        }
        .nb-social-btn:hover {
          background: rgba(96,165,250,0.15);
          border-color: rgba(96,165,250,0.4);
          color: #60a5fa;
        }
        .nb-social-btn i { font-size: 13px; }

        .nb-hamburger {
          display: none;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.18);
          color: white;
          width: 34px;
          height: 34px;
          border-radius: 7px;
          cursor: pointer;
          align-items: center;
          justify-content: center;
          transition: background 0.18s;
        }
        .nb-hamburger:hover { background: rgba(255,255,255,0.15); }
        .nb-hamburger i { font-size: 18px; }

        /* ── MAIN NAV BAR ── */
        .nb-bottom {
          background: #ffffff;
          border-bottom: 1px solid #e8edf5;
          position: relative;
          overflow: visible;
        }
        .nb-bottom-inner {
          max-width: 100%;
          margin: 0 auto;
          padding: 0 48px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 62px;
          overflow: visible;
        }

        /* Logo */
        .nb-logo {
          display: flex;
          align-items: center;
          gap: 11px;
          text-decoration: none;
          flex-shrink: 0;
        }
        .nb-logo-icon {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #1a3163 0%, #2a4f9e 100%);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .nb-logo-icon i { color: white; font-size: 20px; }
        .nb-logo-text-wrap h1 {
          margin: 0;
          font-size: 15px;
          font-weight: 700;
          color: #0f1f45;
          line-height: 1.25;
          letter-spacing: -0.01em;
        }
        .nb-logo-text-wrap p {
          margin: 0;
          font-size: 10.5px;
          color: #94a3b8;
          letter-spacing: 0.02em;
          font-weight: 400;
        }

        /* Nav links */
        .nb-nav-links {
          display: flex;
          align-items: center;
          gap: 0;
          overflow: visible;
        }
        .nb-nav-item { position: static; }
        .nb-nav-link {
          display: flex;
          align-items: center;
          gap: 5px;
          padding: 20px 12px;
          font-size: 13px;
          font-weight: 500;
          color: #4a5568;
          text-decoration: none;
          cursor: pointer;
          border: none;
          background: none;
          white-space: nowrap;
          transition: color 0.18s;
          position: relative;
          letter-spacing: 0.01em;
        }
        .nb-nav-link i.nav-icon { font-size: 14px; opacity: 0.5; }
        .nb-nav-link:hover { color: #1a3163; }
        .nb-nav-link:hover i.nav-icon { opacity: 0.8; }
        .nb-nav-link.active { color: #1a3163; }
        .nb-nav-link.active::after {
          content: '';
          position: absolute;
          bottom: -1px;
          left: 10px;
          right: 10px;
          height: 2px;
          background: #1a3163;
          border-radius: 2px 2px 0 0;
        }
        .nb-chevron {
          font-size: 10px;
          opacity: 0.35;
          margin-left: 2px;
          transition: transform 0.2s;
        }
        .nb-nav-item:hover .nb-chevron { transform: rotate(180deg); opacity: 0.6; }

        /* ── MEGA DROPDOWN ── */
        .nb-dropdown {
          position: absolute;
          top: 100%;
          left: 48px;
          right: 48px;
          transform: translateY(-8px);
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          box-shadow: 0 24px 64px rgba(15,31,69,0.14), 0 6px 20px rgba(0,0,0,0.07);
          padding: 8px;
          z-index: 9999;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.22s ease, transform 0.22s ease, visibility 0.22s;
          pointer-events: none;
        }
        .nb-nav-item:hover .nb-dropdown {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
          pointer-events: all;
        }

        .nb-dropdown-header {
          padding: 8px 12px 8px;
          border-bottom: 1px solid #f1f5f9;
          margin-bottom: 6px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .nb-dropdown-header span {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #94a3b8;
        }
        .nb-dropdown-header-count {
          font-size: 10px;
          color: #cbd5e1;
          font-weight: 500;
        }

        .nb-dropdown-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 3px;
        }
        .nb-dropdown-link {
          display: flex;
          align-items: center;
          gap: 11px;
          padding: 11px 13px;
          color: #374151;
          text-decoration: none;
          border-radius: 10px;
          transition: background 0.15s, color 0.15s;
          border: 1px solid transparent;
        }
        .nb-dropdown-link:hover {
          background: #f0f5ff;
          color: #1a3163;
          border-color: #dbeafe;
        }
        .nb-dropdown-link:hover .nb-dd-icon {
          background: #1a3163;
        }
        .nb-dropdown-link:hover .nb-dd-icon i { color: white; }
        .nb-dd-icon {
          width: 34px;
          height: 34px;
          border-radius: 9px;
          background: #f1f5f9;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: background 0.15s;
        }
        .nb-dd-icon i {
          font-size: 16px;
          color: #1a3163;
          transition: color 0.15s;
        }
        .nb-dd-text { flex: 1; min-width: 0; }
        .nb-dd-name {
          font-size: 12.5px;
          font-weight: 600;
          color: inherit;
          line-height: 1.3;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .nb-dd-desc {
          font-size: 11px;
          color: #94a3b8;
          margin-top: 2px;
          line-height: 1.3;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        /* Contact button */
        .nb-contact-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 9px 18px;
          background: #1a3163;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          text-decoration: none;
          transition: background 0.18s, transform 0.15s;
          white-space: nowrap;
          margin-left: 10px;
          letter-spacing: 0.01em;
        }
        .nb-contact-btn:hover {
          background: #0f1f45;
          transform: translateY(-1px);
        }
        .nb-contact-btn:active { transform: translateY(0); }
        .nb-contact-btn i { font-size: 14px; }

        /* ── MOBILE DRAWER ── */
        .nb-overlay {
          position: fixed;
          inset: 0;
          z-index: 2000;
          visibility: hidden;
          opacity: 0;
          transition: opacity 0.3s, visibility 0.3s;
        }
        .nb-overlay.open { visibility: visible; opacity: 1; }
        .nb-overlay-bg {
          position: absolute;
          inset: 0;
          background: rgba(10,20,50,0.5);
          backdrop-filter: blur(4px);
        }
        .nb-drawer {
          position: absolute;
          top: 0;
          right: 0;
          height: 100%;
          width: 82%;
          max-width: 330px;
          background: white;
          box-shadow: -8px 0 40px rgba(0,0,0,0.16);
          transform: translateX(100%);
          transition: transform 0.3s cubic-bezier(0.4,0,0.2,1);
          display: flex;
          flex-direction: column;
        }
        .nb-overlay.open .nb-drawer { transform: translateX(0); }

        .nb-drawer-header {
          background: #0f1f45;
          padding: 16px 18px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .nb-drawer-logo {
          display: flex;
          align-items: center;
          gap: 9px;
          color: white;
        }
        .nb-drawer-logo-icon {
          width: 34px;
          height: 34px;
          background: rgba(255,255,255,0.12);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .nb-drawer-logo-icon i { font-size: 18px; color: white; }
        .nb-drawer-logo-text { font-size: 14px; font-weight: 700; letter-spacing: -0.01em; }
        .nb-drawer-logo-sub { font-size: 10px; color: rgba(255,255,255,0.45); margin-top: 1px; }
        .nb-drawer-close {
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.15);
          color: white;
          width: 32px;
          height: 32px;
          border-radius: 7px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.18s;
        }
        .nb-drawer-close:hover { background: rgba(255,255,255,0.2); }
        .nb-drawer-close i { font-size: 17px; }

        .nb-drawer-nav { flex: 1; overflow-y: auto; padding: 8px 0; }
        .nb-drawer-link {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 13px 20px;
          font-size: 13.5px;
          font-weight: 500;
          color: #2d3748;
          text-decoration: none;
          border: none;
          background: none;
          width: 100%;
          text-align: left;
          cursor: pointer;
          border-bottom: 1px solid #f1f5f9;
          transition: background 0.15s, color 0.15s;
        }
        .nb-drawer-link:hover { background: #f7f9ff; color: #1a3163; }
        .nb-drawer-link i.drawer-icon { font-size: 17px; opacity: 0.45; }
        .nb-drawer-chevron {
          margin-left: auto;
          font-size: 14px;
          opacity: 0.3;
          transition: transform 0.25s;
        }
        .nb-drawer-chevron.rotated { transform: rotate(90deg); opacity: 0.6; }

        .nb-drawer-sub {
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.35s ease;
          background: #f8fafc;
        }
        .nb-drawer-sub.open { max-height: 700px; }

        .nb-drawer-sub-link {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 11px 20px 11px 48px;
          font-size: 12.5px;
          color: #4a5568;
          text-decoration: none;
          border-bottom: 1px solid #eef2f8;
          transition: background 0.15s, color 0.15s;
        }
        .nb-drawer-sub-link:hover { background: #eef3ff; color: #1a3163; }
        .nb-drawer-sub-icon {
          width: 26px;
          height: 26px;
          border-radius: 6px;
          background: #e8eef8;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .nb-drawer-sub-icon i { font-size: 13px; color: #1a3163; }

        .nb-drawer-footer {
          padding: 16px 18px;
          background: #f8fafc;
          border-top: 1px solid #e8edf5;
        }
        .nb-drawer-contact-info {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 14px;
        }
        .nb-drawer-ci {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          color: #64748b;
          text-decoration: none;
        }
        .nb-drawer-ci i { font-size: 14px; color: #1a3163; }
        .nb-drawer-cta {
          width: 100%;
          background: #1a3163;
          color: white;
          border: none;
          border-radius: 10px;
          padding: 13px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: background 0.18s;
          text-decoration: none;
          letter-spacing: 0.01em;
        }
        .nb-drawer-cta:hover { background: #0f1f45; }
        .nb-drawer-cta i { font-size: 16px; }

        @media (max-width: 900px) {
          .nb-contacts { display: none; }
          .nb-follow-label { display: none; }
          .nb-hamburger { display: flex; }
          .nb-bottom { display: none; }
          .nb-top-inner { padding: 0 20px; }
        }
        @media (min-width: 901px) {
          .nb-overlay { display: none; }
        }
      `}</style>

      <nav className="nb-wrapper" role="navigation" aria-label="Main navigation">

        {/* TOP BAR */}
        <div className="nb-top">
          <div className="nb-top-inner">
            <div className="nb-contacts">
              <a href="tel:+919372381936" className="nb-contact-item">
                <i className="ti ti-phone-call" />
                +91 93723 81936
              </a>
              <div className="nb-top-divider" />
              <a href="mailto:khanfaiyyaz25003@gmail.com" className="nb-contact-item">
                <i className="ti ti-mail" />
                khanfaiyyaz25003@gmail.com
              </a>
            </div>

            <div className="nb-top-right">
              <span className="nb-follow-label">Follow us</span>
              <div className="nb-socials">
                <a href="#" className="nb-social-btn" aria-label="Facebook"><i className="ti ti-brand-facebook" /></a>
                <a href="#" className="nb-social-btn" aria-label="X"><i className="ti ti-brand-x" /></a>
                <a href="#" className="nb-social-btn" aria-label="Instagram"><i className="ti ti-brand-instagram" /></a>
                <a href="#" className="nb-social-btn" aria-label="LinkedIn"><i className="ti ti-brand-linkedin" /></a>
              </div>
            </div>

            <button className="nb-hamburger" onClick={() => setMenuOpen(true)} aria-label="Open menu" aria-expanded={menuOpen}>
              <i className="ti ti-menu-2" />
            </button>
          </div>
        </div>

        {/* MAIN NAV (desktop) */}
        <div className="nb-bottom">
          <div className="nb-bottom-inner">
            <Link href="/" className="nb-logo" aria-label="Software Technology Home">
              <div className="nb-logo-icon">
                <i className="ti ti-code-circle" />
              </div>
              <div className="nb-logo-text-wrap">
                <h1>Software Technology</h1>
                <p>Web · App · SEO · E-commerce</p>
              </div>
            </Link>

            <div className="nb-nav-links">
              {navLinks.map((item) =>
                item.children ? (
                  <div key={item.name} className="nb-nav-item">
                    <span
                      className={`nb-nav-link${activeLink === item.name ? " active" : ""}`}
                      onClick={() => setActiveLink(item.name)}
                      role="button"
                      aria-haspopup="true"
                    >
                      <i className={`ti ${item.icon} nav-icon`} aria-hidden="true" />
                      {item.name}
                      <i className="ti ti-chevron-down nb-chevron" aria-hidden="true" />
                    </span>

                    <div className="nb-dropdown" role="menu">
                      <div className="nb-dropdown-header">
                        <span>Our Services</span>
                        <span className="nb-dropdown-header-count">13 services</span>
                      </div>
                      <div className="nb-dropdown-grid">
                        {item.children.map((child) => (
                          <Link key={child.name} href={child.href} className="nb-dropdown-link" role="menuitem">
                            <div className="nb-dd-icon">
                              <i className={`ti ${child.icon}`} aria-hidden="true" />
                            </div>
                            <div className="nb-dd-text">
                              <div className="nb-dd-name">{child.name}</div>
                              {child.desc && <div className="nb-dd-desc">{child.desc}</div>}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div key={item.name} className="nb-nav-item">
                    <Link
                      href={item.href}
                      className={`nb-nav-link${activeLink === item.name ? " active" : ""}`}
                      onClick={() => setActiveLink(item.name)}
                    >
                      <i className={`ti ${item.icon} nav-icon`} aria-hidden="true" />
                      {item.name}
                    </Link>
                  </div>
                )
              )}

              <Link href="/contact" className="nb-contact-btn">
                <i className="ti ti-send" />
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE DRAWER */}
      <div className={`nb-overlay${menuOpen ? " open" : ""}`} role="dialog" aria-modal="true" aria-label="Mobile menu">
        <div className="nb-overlay-bg" onClick={() => setMenuOpen(false)} />
        <div className="nb-drawer">
          <div className="nb-drawer-header">
            <div className="nb-drawer-logo">
              <div className="nb-drawer-logo-icon">
                <i className="ti ti-code-circle" />
              </div>
              <div>
                <div className="nb-drawer-logo-text">Software Technology</div>
                <div className="nb-drawer-logo-sub">Web · App · SEO · E-commerce</div>
              </div>
            </div>
            <button className="nb-drawer-close" onClick={() => setMenuOpen(false)} aria-label="Close menu">
              <i className="ti ti-x" />
            </button>
          </div>

          <div className="nb-drawer-nav">
            {navLinks.map((item) =>
              item.children ? (
                <div key={item.name}>
                  <button
                    className="nb-drawer-link"
                    onClick={() => setMobileServiceOpen(!mobileServiceOpen)}
                    aria-expanded={mobileServiceOpen}
                  >
                    <i className={`ti ${item.icon} drawer-icon`} aria-hidden="true" />
                    {item.name}
                    <i className={`ti ti-chevron-right nb-drawer-chevron${mobileServiceOpen ? " rotated" : ""}`} aria-hidden="true" />
                  </button>
                  <div className={`nb-drawer-sub${mobileServiceOpen ? " open" : ""}`}>
                    {item.children.map((child) => (
                      <Link key={child.name} href={child.href} className="nb-drawer-sub-link" onClick={() => setMenuOpen(false)}>
                        <div className="nb-drawer-sub-icon">
                          <i className={`ti ${child.icon}`} aria-hidden="true" />
                        </div>
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link key={item.name} href={item.href} className="nb-drawer-link" onClick={() => setMenuOpen(false)}>
                  <i className={`ti ${item.icon} drawer-icon`} aria-hidden="true" />
                  {item.name}
                </Link>
              )
            )}
          </div>

          <div className="nb-drawer-footer">
            <div className="nb-drawer-contact-info">
              <a href="tel:+919372381936" className="nb-drawer-ci">
                <i className="ti ti-phone-call" />
                +91 93723 81936
              </a>
              <a href="mailto:khanfaiyyaz25003@gmail.com" className="nb-drawer-ci">
                <i className="ti ti-mail" />
                khanfaiyyaz25003@gmail.com
              </a>
            </div>
            <Link href="/contact" className="nb-drawer-cta" onClick={() => setMenuOpen(false)}>
              <i className="ti ti-send" />
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
