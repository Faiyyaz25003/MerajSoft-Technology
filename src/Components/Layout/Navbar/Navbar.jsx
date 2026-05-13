"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b">
      {/* Top Bar */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold text-blue-600 tracking-wide">
          Meraj Soft Technology
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700">
          <li>
            <Link className="hover:text-blue-600 transition" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:text-blue-600 transition" href="/about">
              About
            </Link>
          </li>

          {/* Services Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setServiceOpen(true)}
            onMouseLeave={() => setServiceOpen(false)}
          >
            <span className="cursor-pointer hover:text-blue-600 transition">
              Services ▾
            </span>

            <div
              className={`absolute top-10 left-0 w-56 bg-white shadow-xl rounded-xl p-2 transition-all duration-300 ${
                serviceOpen
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2"
              }`}
            >
              {[
                ["Web Development", "/services/web"],
                ["App Development", "/services/app"],
                ["Google Business Profile", "/services/GoogleBusinessProfile"],
                ["E-commerce", "/services/ecommerce"],
                ["SEO", "/services/seo"],
              ].map(([name, link]) => (
                <Link
                  key={name}
                  href={link}
                  className="block px-4 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition"
                >
                  {name}
                </Link>
              ))}
            </div>
          </li>

          <li>
            <Link className="hover:text-blue-600 transition" href="/projects">
              Projects
            </Link>
          </li>
          <li>
            <Link className="hover:text-blue-600 transition" href="/pricing">
              Pricing
            </Link>
          </li>
          <li>
            <Link className="hover:text-blue-600 transition" href="/blog">
              Blog
            </Link>
          </li>
          <li>
            <Link className="hover:text-blue-600 transition" href="/contact">
              Contact
            </Link>
          </li>

          {/* CTA */}
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2 rounded-full shadow-md hover:scale-105 hover:shadow-lg transition">
            Get a Quote
          </button>
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* 🔥 Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-40 transition ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        ></div>

        {/* Drawer */}
        <div
          className={`absolute top-0 right-0 h-full w-[80%] max-w-sm bg-white shadow-2xl p-5 transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-blue-600">Menu</h2>
            <button onClick={() => setMenuOpen(false)}>✕</button>
          </div>

          {/* Links */}
          <ul className="flex flex-col gap-5 text-gray-800 font-medium">
            <Link href="/" onClick={() => setMenuOpen(false)}>
              🏠 Home
            </Link>
            <Link href="/about" onClick={() => setMenuOpen(false)}>
              ℹ️ About
            </Link>

            {/* Services Expand */}
            <div>
              <button
                onClick={() => setServiceOpen(!serviceOpen)}
                className="flex justify-between w-full items-center"
              >
                <span>🛠 Services</span>
                <span>{serviceOpen ? "−" : "+"}</span>
              </button>

              <div
                className={`ml-3 mt-2 flex flex-col gap-3 text-sm transition-all duration-300 ${
                  serviceOpen
                    ? "max-h-60 opacity-100"
                    : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                <Link href="/services/web">Web Development</Link>
                <Link href="/services/app">App Development</Link>
                <Link href="/services/GoogleBusinessProfile">
                  Google Business Profile
                </Link>
                <Link href="/services/ecommerce">E-commerce</Link>
                <Link href="/services/seo">SEO</Link>
              </div>
            </div>

            <Link href="/projects">💼 Projects</Link>
            <Link href="/pricing">💰 Pricing</Link>
            <Link href="/blog">📰 Blog</Link>
            <Link href="/contact">📞 Contact</Link>

            {/* CTA */}
            <button className="mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl shadow-lg hover:scale-[1.03] transition">
              🚀 Get a Quote
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
}
