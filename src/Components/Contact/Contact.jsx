"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

// ─── Map Embed ────────────────────────────────────────────────────────
function MapEmbed() {
  return (
    <div
      className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200"
      style={{ height: 320 }}
    >
      <iframe
        title="Merajsoft Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.8!2d72.9093!3d19.0760!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8b7c7000001%3A0x1!2sAsalpha+Metro+Station%2C+Ghatkopar+West%2C+Mumbai!5e0!3m2!1sen!2sin!4v1700000000000"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      {/* Custom overlay pin label */}
      <div className="absolute bottom-4 left-4 bg-white rounded-xl px-4 py-2 shadow-lg flex items-center gap-2 border border-gray-100">
        <span className="text-lg">📍</span>
        <div>
          <div className="text-gray-900 font-bold text-xs">Merajsoft</div>
          <div className="text-gray-500 text-[11px]">
            Near Asalpha Metro, Ghatkopar West
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Contact Info Card ────────────────────────────────────────────────
function InfoCard({ icon, title, lines, action, actionLabel, color }) {
  return (
    <div
      className="group relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-400 hover:-translate-y-1 cursor-default overflow-hidden"
      style={{ "--accent": color }}
    >
      {/* Top accent bar */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-400"
        style={{
          background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
        }}
      />
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-4 transition-transform duration-300 group-hover:scale-110"
        style={{ background: `${color}15`, border: `1.5px solid ${color}30` }}
      >
        {icon}
      </div>
      <div className="text-gray-500 text-xs font-semibold uppercase tracking-widest mb-2">
        {title}
      </div>
      {lines.map((l, i) => (
        <div
          key={i}
          className="text-gray-800 font-medium text-sm mb-0.5 leading-relaxed"
        >
          {l}
        </div>
      ))}
      {action && (
        <a
          href={action}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 mt-4 text-xs font-bold px-4 py-2 rounded-full transition-all duration-300 hover:gap-2.5 hover:scale-105"
          style={{
            background: `${color}15`,
            color,
            border: `1px solid ${color}30`,
          }}
        >
          {actionLabel} <span>→</span>
        </a>
      )}
    </div>
  );
}

// ─── Contact Form ─────────────────────────────────────────────────────
function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState(null);

  const services = [
    "Web Development",
    "App Development",
    "E-Commerce",
    "SEO Optimization",
    "Google Business Profile",
    "Cloud & DevOps",
    "Other",
  ];

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hello Merajsoft! 👋\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${form.service}\n\nMessage:\n${form.message}`,
    );
    window.open(`https://wa.me/919372381936?text=${msg}`, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const inputClass = (name) =>
    `w-full px-4 py-3 rounded-xl text-gray-800 text-sm font-medium outline-none transition-all duration-200 border ${
      focused === name
        ? "border-indigo-500 bg-indigo-50/60 shadow-[0_0_0_3px_rgba(99,102,241,0.12)]"
        : "border-gray-200 bg-gray-50 hover:border-gray-300"
    } placeholder-gray-400`;

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-600 text-xs font-semibold uppercase tracking-wider mb-1.5">
            Full Name *
          </label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            onFocus={() => setFocused("name")}
            onBlur={() => setFocused(null)}
            placeholder="Rahul Sharma"
            required
            className={inputClass("name")}
          />
        </div>
        <div>
          <label className="block text-gray-600 text-xs font-semibold uppercase tracking-wider mb-1.5">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            onFocus={() => setFocused("email")}
            onBlur={() => setFocused(null)}
            placeholder="you@example.com"
            required
            className={inputClass("email")}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-600 text-xs font-semibold uppercase tracking-wider mb-1.5">
            Phone Number
          </label>
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            onFocus={() => setFocused("phone")}
            onBlur={() => setFocused(null)}
            placeholder="+91 98765 43210"
            className={inputClass("phone")}
          />
        </div>
        <div>
          <label className="block text-gray-600 text-xs font-semibold uppercase tracking-wider mb-1.5">
            Service Needed
          </label>
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            onFocus={() => setFocused("service")}
            onBlur={() => setFocused(null)}
            className={inputClass("service")}
          >
            <option value="">Select a service…</option>
            {services.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label className="block text-gray-600 text-xs font-semibold uppercase tracking-wider mb-1.5">
          Your Message *
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          onFocus={() => setFocused("message")}
          onBlur={() => setFocused(null)}
          placeholder="Tell us about your project — goals, timeline, budget…"
          rows={5}
          required
          className={inputClass("message") + " resize-none"}
        />
      </div>

      <button
        type="submit"
        className="w-full py-4 rounded-xl font-bold text-white text-sm tracking-wide flex items-center justify-center gap-3 transition-all duration-300 hover:gap-4 hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.98]"
        style={{
          background: sent
            ? "linear-gradient(135deg, #10b981, #059669)"
            : "linear-gradient(135deg, #25D366, #128C7E)",
        }}
      >
        {sent ? (
          <>
            <span>✅</span> Message Sent via WhatsApp!
          </>
        ) : (
          <>
            <span>💬</span> Send via WhatsApp
          </>
        )}
      </button>
      <p className="text-center text-gray-400 text-xs">
        Or email us directly at{" "}
        <a
          href="mailto:khanr50926@gmail.com"
          className="text-indigo-500 hover:underline font-medium"
        >
          khanr50926@gmail.com
        </a>
      </p>
    </form>
  );
}

// ─── FAQ Item ─────────────────────────────────────────────────────────
function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`rounded-xl border transition-all duration-300 overflow-hidden cursor-pointer ${open ? "border-indigo-200 shadow-md bg-indigo-50/30" : "border-gray-100 bg-white hover:border-gray-200"}`}
      onClick={() => setOpen((o) => !o)}
    >
      <div className="flex items-center justify-between px-5 py-4 gap-4">
        <span className="text-gray-800 font-semibold text-sm">{q}</span>
        <span
          className="text-indigo-500 text-lg flex-shrink-0 transition-transform duration-300"
          style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          +
        </span>
      </div>
      {open && (
        <div className="px-5 pb-4 text-gray-500 text-sm leading-relaxed border-t border-indigo-100">
          {a}
        </div>
      )}
    </div>
  );
}

// ─── MAIN PAGE ────────────────────────────────────────────────────────
export default function Contact() {
  const [heroVisible, setHeroVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => setHeroVisible(true), 80);
  }, []);

  const faqs = [
    {
      q: "How quickly can you start on my project?",
      a: "We typically onboard new projects within 3–5 business days after initial consultation and agreement.",
    },
    {
      q: "Do you work with startups and small businesses?",
      a: "Absolutely! We've helped businesses of all sizes — from solo founders to enterprise companies across India.",
    },
    {
      q: "What is your pricing model?",
      a: "We offer project-based, retainer, and hourly engagement models tailored to your budget and scope.",
    },
    {
      q: "Can I see examples of your past work?",
      a: "Yes! Visit our Projects page or WhatsApp us directly and we'll share a curated portfolio relevant to your industry.",
    },
    {
      q: "Do you provide post-launch support?",
      a: "Every project comes with a free 30-day support window, and we offer ongoing maintenance packages beyond that.",
    },
  ];

  return (
    <main
      className="min-h-screen"
      style={{
        background: "#f8f9fc",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Syne:wght@700;800;900&display=swap');
        .hero-title { font-family: 'Syne', sans-serif; }
        .gradient-text {
          background: linear-gradient(135deg, #6366f1 0%, #a78bfa 50%, #ec4899 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .fade-1 { animation: fadeUp 0.8s ease 0.1s both; }
        .fade-2 { animation: fadeUp 0.8s ease 0.25s both; }
        .fade-3 { animation: fadeUp 0.8s ease 0.4s both; }
        .fade-4 { animation: fadeUp 0.8s ease 0.55s both; }
        .wa-pulse {
          animation: waPulse 2.4s ease-in-out infinite;
        }
        @keyframes waPulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(37,211,102,0.4); }
          50% { box-shadow: 0 0 0 14px rgba(37,211,102,0); }
        }
        .dot-grid {
          background-image: radial-gradient(circle, rgba(99,102,241,0.15) 1px, transparent 1px);
          background-size: 28px 28px;
        }
      `}</style>

      {/* ── HERO BANNER ── */}
      <section
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #060610 0%, #0c0c1e 60%, #0f0a1e 100%)",
          paddingTop: 100,
          paddingBottom: 80,
        }}
      >
        {/* Dot grid overlay */}
        <div className="absolute inset-0 dot-grid opacity-40" />
        {/* Glow orbs */}
        <div
          className="absolute top-[-80px] left-[-80px] w-[500px] h-[500px] rounded-full blur-3xl opacity-20"
          style={{ background: "radial-gradient(circle, #6366f1, #7c3aed)" }}
        />
        <div
          className="absolute bottom-[-60px] right-[-60px] w-[400px] h-[400px] rounded-full blur-3xl opacity-15"
          style={{ background: "radial-gradient(circle, #ec4899, #7c3aed)" }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="fade-1 inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2 mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-gray-300 text-xs font-semibold tracking-widest uppercase">
              We're Available Now
            </span>
          </div>

          {/* Quick action buttons */}
          <div className="fade-4 flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <a
              href="https://wa.me/919372381936"
              target="_blank"
              rel="noopener noreferrer"
              className="wa-pulse inline-flex items-center gap-3 px-7 py-4 rounded-2xl font-bold text-white text-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              style={{
                background: "linear-gradient(135deg, #25D366, #128C7E)",
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us — 9372381936
            </a>
            <a
              href="mailto:khanr50926@gmail.com"
              className="inline-flex items-center gap-3 px-7 py-4 rounded-2xl font-bold text-white text-sm border border-white/15 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
            >
              <span>✉️</span> Send Email
            </a>
          </div>
        </div>
      </section>

      {/* ── CONTACT INFO CARDS ── */}
      <section className="max-w-6xl mx-auto px-6 -mt-8 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <InfoCard
            icon="💬"
            title="WhatsApp"
            lines={["+91 93723 81936"]}
            action="https://wa.me/919372381936"
            actionLabel="Chat on WhatsApp"
            color="#25D366"
          />
          <InfoCard
            icon="✉️"
            title="Email Us"
            lines={["khanr50926@gmail.com", "khanfaiyyaz25003@gmail.com"]}
            action="mailto:khanr50926@gmail.com"
            actionLabel="Send Email"
            color="#6366f1"
          />
          <InfoCard
            icon="📍"
            title="Our Office"
            lines={[
              "Shankar Nagar Rahivashi Sangh",
              "Near Asalpha Metro",
              "Ghatkopar West, Mumbai 400084",
            ]}
            action="https://maps.google.com/?q=Asalpha+Metro+Ghatkopar+West+Mumbai"
            actionLabel="Get Directions"
            color="#ec4899"
          />
        </div>
      </section>

      {/* ── FORM + MAP ── */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Form */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            <div className="mb-7">
              <span className="text-indigo-500 font-semibold text-xs uppercase tracking-widest">
                Get In Touch
              </span>
              <h2 className="hero-title text-3xl font-extrabold text-gray-900 mt-2">
                Start Your <span className="gradient-text">Project</span>
              </h2>
              <p className="text-gray-500 text-sm mt-2">
                Fill in the form — we'll reply within 4 hours.
              </p>
            </div>
            <ContactForm />
          </div>

          {/* Right side */}
          <div className="space-y-6">
            {/* Map */}
            <MapEmbed />

            {/* Office hours */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg">🕐</span>
                <span className="text-gray-700 font-bold text-sm">
                  Business Hours
                </span>
              </div>
              <div className="space-y-2">
                {[
                  ["Monday – Friday", "9:00 AM – 7:00 PM"],
                  ["Saturday", "10:00 AM – 4:00 PM"],
                  ["Sunday", "WhatsApp Only"],
                ].map(([day, time]) => (
                  <div key={day} className="flex justify-between text-sm">
                    <span className="text-gray-500">{day}</span>
                    <span className="text-gray-800 font-semibold">{time}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-2 text-xs text-green-600 font-semibold bg-green-50 rounded-lg px-3 py-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                We typically respond within 2–4 hours
              </div>
            </div>

            {/* Social proof strip */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-5 text-white">
              <div className="text-xs font-semibold uppercase tracking-widest opacity-80 mb-3">
                Trusted By Businesses Across India
              </div>
              <div className="flex gap-6">
                {[
                  ["150+", "Projects"],
                  ["98%", "Happy Clients"],
                  ["7+", "Years"],
                ].map(([v, l]) => (
                  <div key={l}>
                    <div
                      className="text-2xl font-black"
                      style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                      {v}
                    </div>
                    <div className="text-xs opacity-70">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="max-w-3xl mx-auto px-6 pb-28">
        {/* Final CTA */}
        <div className="mt-14 text-center bg-white rounded-3xl p-10 shadow-lg border border-gray-100 relative overflow-hidden">
          <div className="absolute inset-0 dot-grid opacity-30" />
          <div className="relative z-10">
            <div className="text-3xl mb-3">🚀</div>
            <h3 className="hero-title text-2xl font-extrabold text-gray-900 mb-2">
              Ready to Get Started?
            </h3>
            <p className="text-gray-500 text-sm mb-7 max-w-sm mx-auto">
              Let's discuss your project on WhatsApp — quick, easy, and no
              commitment.
            </p>
            <a
              href="https://wa.me/919372381936?text=Hello%20Merajsoft!%20I%20want%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="wa-pulse inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-white text-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              style={{
                background: "linear-gradient(135deg, #25D366, #128C7E)",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Start on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
