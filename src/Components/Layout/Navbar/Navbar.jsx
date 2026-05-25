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
      { name: "Web Development", icon: "ti-code", href: "/services/web" },
      {
        name: "App Development",
        icon: "ti-device-mobile",
        href: "/services/app",
      },
      {
        name: "Google Business Profile",
        icon: "ti-map-pin",
        href: "/services/GoogleBusinessProfile",
      },
      {
        name: "E-commerce",
        icon: "ti-shopping-cart",
        href: "/services/ecommerce",
      },
      { name: "SEO", icon: "ti-search", href: "/services/seo" },
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
        .nb-wrapper {
          font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
          position: sticky;
          top: 0;
          z-index: 50;
        }

        /* ── TOP BAR ── */
        .nb-top {
          background: #1a3163;
          color: white;
          padding: 8px 0;
        }
        .nb-top-inner {
          max-width: 100%;
          margin: 0 auto;
          padding: 0 56px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .nb-contact-item {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 13px;
          color: rgba(255,255,255,0.88);
          text-decoration: none;
          transition: color 0.2s;
        }
        .nb-contact-item:hover { color: white; }
        .nb-contact-item i { font-size: 14px; opacity: 0.75; }
        .nb-divider {
          width: 1px;
          height: 16px;
          background: rgba(255,255,255,0.22);
        }
        .nb-follow {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 12px;
          color: rgba(255,255,255,0.6);
          letter-spacing: 0.5px;
        }
        .nb-socials {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .nb-social-btn {
          width: 28px;
          height: 28px;
          border-radius: 4px;
          border: 1px solid rgba(255,255,255,0.22);
          background: rgba(255,255,255,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-decoration: none;
          transition: background 0.2s;
        }
        .nb-social-btn:hover { background: rgba(255,255,255,0.22); }
        .nb-social-btn i { font-size: 13px; }
        .nb-hamburger {
          display: none;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.25);
          color: white;
          width: 36px;
          height: 36px;
          border-radius: 6px;
          cursor: pointer;
          align-items: center;
          justify-content: center;
        }
        .nb-hamburger i { font-size: 20px; }

        /* ── BOTTOM NAV BAR ── */
        .nb-bottom {
          background: white;
          border-bottom: 1px solid #e4e7ed;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        }
        .nb-bottom-inner {
          max-width: 100%;
          margin: 0 auto;
          padding: 0 56px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .nb-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 0;
          text-decoration: none;
        }
        .nb-logo-icon {
          width: 38px;
          height: 38px;
          background: #1a3163;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .nb-logo-icon i { color: white; font-size: 20px; }
        .nb-logo-text h1 {
          margin: 0;
          font-size: 16px;
          font-weight: 700;
          color: #1a3163;
          line-height: 1.2;
        }
        .nb-logo-text p {
          margin: 0;
          font-size: 11px;
          color: #888;
        }
        .nb-nav-links {
          display: flex;
          align-items: center;
          gap: 2px;
        }

        /* nav item + dropdown */
        .nb-nav-item { position: relative; }
        .nb-nav-link {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 16px 13px;
          font-size: 13.5px;
          font-weight: 500;
          color: #444;
          text-decoration: none;
          cursor: pointer;
          border: none;
          background: none;
          white-space: nowrap;
          transition: color 0.2s;
          position: relative;
        }
        .nb-nav-link i { font-size: 15px; opacity: 0.55; }
        .nb-nav-link:hover { color: #1a3163; }
        .nb-nav-link.active { color: #1a3163; }
        .nb-nav-link.active::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 12px;
          right: 12px;
          height: 2px;
          background: #1a3163;
          border-radius: 2px 2px 0 0;
        }
        .nb-chevron { font-size: 11px; opacity: 0.4; margin-left: 1px; }

        .nb-dropdown {
          position: absolute;
          top: calc(100% + 2px);
          left: 0;
          background: white;
          border: 1px solid #dde3ef;
          border-radius: 10px;
          min-width: 230px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.12);
          padding: 6px;
          z-index: 200;
          opacity: 0;
          visibility: hidden;
          transform: translateY(-6px);
          transition: opacity 0.2s, transform 0.2s, visibility 0.2s;
          pointer-events: none;
        }
        .nb-nav-item:hover .nb-dropdown {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
          pointer-events: all;
        }
        .nb-dropdown-link {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 14px;
          font-size: 13px;
          color: #444;
          text-decoration: none;
          border-radius: 7px;
          transition: background 0.15s, color 0.15s;
        }
        .nb-dropdown-link:hover { background: #eef3fb; color: #1a3163; }
        .nb-dropdown-link i { font-size: 16px; color: #1a3163; opacity: 0.65; }
        .nb-dropdown-sep {
          height: 1px;
          background: #f0f2f7;
          margin: 3px 6px;
        }

        .nb-contact-btn {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 9px 18px;
          background: #1a3163;
          color: white;
          border: none;
          border-radius: 7px;
          font-size: 13.5px;
          font-weight: 600;
          cursor: pointer;
          text-decoration: none;
          transition: background 0.2s;
          white-space: nowrap;
          margin-left: 8px;
        }
        .nb-contact-btn:hover { background: #0f2254; }
        .nb-contact-btn i { font-size: 15px; }

        /* ── MOBILE DRAWER ── */
        .nb-overlay {
          position: fixed;
          inset: 0;
          z-index: 300;
          visibility: hidden;
          opacity: 0;
          transition: opacity 0.3s, visibility 0.3s;
        }
        .nb-overlay.open { visibility: visible; opacity: 1; }
        .nb-overlay-bg {
          position: absolute;
          inset: 0;
          background: rgba(15,30,60,0.45);
          backdrop-filter: blur(3px);
        }
        .nb-drawer {
          position: absolute;
          top: 0;
          right: 0;
          height: 100%;
          width: 80%;
          max-width: 320px;
          background: white;
          box-shadow: -6px 0 32px rgba(0,0,0,0.18);
          transform: translateX(100%);
          transition: transform 0.3s cubic-bezier(0.4,0,0.2,1);
          display: flex;
          flex-direction: column;
        }
        .nb-overlay.open .nb-drawer { transform: translateX(0); }
        .nb-drawer-header {
          background: #1a3163;
          padding: 14px 18px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .nb-drawer-logo {
          display: flex;
          align-items: center;
          gap: 8px;
          color: white;
          font-size: 15px;
          font-weight: 700;
        }
        .nb-drawer-logo i { font-size: 22px; }
        .nb-drawer-close {
          background: rgba(255,255,255,0.15);
          border: none;
          color: white;
          width: 32px;
          height: 32px;
          border-radius: 6px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s;
        }
        .nb-drawer-close:hover { background: rgba(255,255,255,0.25); }
        .nb-drawer-close i { font-size: 18px; }
        .nb-drawer-nav { flex: 1; overflow-y: auto; padding: 6px 0; }
        .nb-drawer-link {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 20px;
          font-size: 14px;
          font-weight: 500;
          color: #333;
          text-decoration: none;
          border-bottom: 1px solid #f0f2f7;
          transition: background 0.15s, color 0.15s;
          cursor: pointer;
          border-left: none;
          border-right: none;
          border-top: none;
          background: none;
          width: 100%;
          text-align: left;
        }
        .nb-drawer-link:hover { background: #f0f4fb; color: #1a3163; }
        .nb-drawer-link i { font-size: 18px; opacity: 0.55; }
        .nb-drawer-chevron {
          margin-left: auto;
          opacity: 0.4;
          transition: transform 0.25s;
          font-size: 16px;
        }
        .nb-drawer-chevron.rotated { transform: rotate(90deg); }
        .nb-drawer-sub {
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.3s ease;
          background: #f7f9fd;
        }
        .nb-drawer-sub.open { max-height: 400px; }
        .nb-drawer-sub-link {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 11px 20px 11px 50px;
          font-size: 13px;
          color: #555;
          text-decoration: none;
          border-bottom: 1px solid #eaecf5;
          transition: background 0.15s, color 0.15s;
        }
        .nb-drawer-sub-link:hover { background: #e4ecf9; color: #1a3163; }
        .nb-drawer-sub-link i { font-size: 15px; color: #1a3163; opacity: 0.6; }
        .nb-drawer-footer {
          padding: 16px 18px;
          border-top: 1px solid #e8ecf5;
        }
        .nb-drawer-cta {
          width: 100%;
          background: #1a3163;
          color: white;
          border: none;
          border-radius: 10px;
          padding: 14px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: background 0.2s;
          text-decoration: none;
        }
        .nb-drawer-cta:hover { background: #0f2254; }
        .nb-drawer-cta i { font-size: 18px; }

        @media (max-width: 768px) {
          .nb-contacts { display: none; }
          .nb-follow { display: none; }
          .nb-hamburger { display: flex; }
          .nb-bottom { display: none; }
        }
      `}</style>

      <nav className="nb-wrapper">
        {/* ── TOP BAR ── */}
        <div className="nb-top">
          <div className="nb-top-inner">
            <div className="nb-contacts">
              <a href="tel:+919372381936" className="nb-contact-item">
                <i className="ti ti-phone" />
                +91 9372381936
              </a>
              <div className="nb-divider" />
              <a
                href="mailto:khanfaiyyaz25003@gmail.com"
                className="nb-contact-item"
              >
                <i className="ti ti-mail" />
                khanfaiyyaz25003@gmail.com
              </a>
            </div>

            <div className="nb-follow">
              <span>FOLLOW US</span>
              <div className="nb-socials">
                <a href="#" className="nb-social-btn" aria-label="Facebook">
                  <i className="ti ti-brand-facebook" />
                </a>
                <a href="#" className="nb-social-btn" aria-label="X (Twitter)">
                  <i className="ti ti-brand-x" />
                </a>
                <a href="#" className="nb-social-btn" aria-label="Instagram">
                  <i className="ti ti-brand-instagram" />
                </a>
                <a href="#" className="nb-social-btn" aria-label="LinkedIn">
                  <i className="ti ti-brand-linkedin" />
                </a>
              </div>
            </div>

            {/* Mobile hamburger */}
            <button
              className="nb-hamburger"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <i className="ti ti-menu-2" />
            </button>
          </div>
        </div>

        {/* ── BOTTOM NAV BAR (desktop) ── */}
        <div className="nb-bottom">
          <div className="nb-bottom-inner">
            <Link href="/" className="nb-logo">
              <div className="nb-logo-icon">
                <i className="ti ti-layout-dashboard" />
              </div>
              <div className="nb-logo-text">
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
                    >
                      <i className={`ti ${item.icon}`} />
                      {item.name}
                      <span className="nb-chevron">▾</span>
                    </span>
                    <div className="nb-dropdown">
                      {item.children.map((child, idx) => (
                        <div key={child.name}>
                          {idx !== 0 && <div className="nb-dropdown-sep" />}
                          <Link href={child.href} className="nb-dropdown-link">
                            <i className={`ti ${child.icon}`} />
                            {child.name}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div key={item.name} className="nb-nav-item">
                    <Link
                      href={item.href}
                      className={`nb-nav-link${activeLink === item.name ? " active" : ""}`}
                      onClick={() => setActiveLink(item.name)}
                    >
                      <i className={`ti ${item.icon}`} />
                      {item.name}
                    </Link>
                  </div>
                ),
              )}

              <Link href="/contact" className="nb-contact-btn">
                <i className="ti ti-phone" />
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* ── MOBILE DRAWER ── */}
      <div className={`nb-overlay${menuOpen ? " open" : ""}`}>
        <div className="nb-overlay-bg" onClick={() => setMenuOpen(false)} />
        <div className="nb-drawer">
          <div className="nb-drawer-header">
            <div className="nb-drawer-logo">
              <i className="ti ti-layout-dashboard" />
              Software Technology
            </div>
            <button
              className="nb-drawer-close"
              onClick={() => setMenuOpen(false)}
            >
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
                  >
                    <i className={`ti ${item.icon}`} />
                    {item.name}
                    <i
                      className={`ti ti-chevron-right nb-drawer-chevron${mobileServiceOpen ? " rotated" : ""}`}
                    />
                  </button>
                  <div
                    className={`nb-drawer-sub${mobileServiceOpen ? " open" : ""}`}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="nb-drawer-sub-link"
                        onClick={() => setMenuOpen(false)}
                      >
                        <i className={`ti ${child.icon}`} />
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="nb-drawer-link"
                  onClick={() => setMenuOpen(false)}
                >
                  <i className={`ti ${item.icon}`} />
                  {item.name}
                </Link>
              ),
            )}
          </div>

          <div className="nb-drawer-footer">
            <Link
              href="/contact"
              className="nb-drawer-cta"
              onClick={() => setMenuOpen(false)}
            >
              <i className="ti ti-phone" />
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
