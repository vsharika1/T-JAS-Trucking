// src/components/Header.jsx
import React, { useState } from "react";
import { motion as Motion } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Fleet", href: "#fleet" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 w-full z-50 backdrop-blur-xl bg-white/80 border-b border-line">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex flex-col">
          <span className="text-xs uppercase tracking-[0.45em] text-muted">
            T-JAS Trucking
          </span>
          <span className="font-display text-xl text-ink">
            Precision Freight
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 text-xs uppercase tracking-[0.35em] text-muted">
          {navLinks.map((link, index) => (
            <Motion.a
              key={index}
              href={link.href}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="transition-colors duration-200 hover:text-ink"
            >
              {link.name}
            </Motion.a>
          ))}
          <a
            href="#contact"
            className="rounded-full border border-ink px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-ink transition hover:bg-ink hover:text-paper"
          >
            Request Quote
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden focus:outline-none text-ink"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Mobile Navigation"
        >
          <span className="text-3xl">&#9776;</span>
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <Motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          className="md:hidden bg-white/95 backdrop-blur-lg px-6 py-6 shadow-sm border-t border-line"
        >
          <div className="flex flex-col space-y-4 text-xs uppercase tracking-[0.35em] text-muted">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="transition-colors duration-200 hover:text-ink"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 inline-flex w-fit rounded-full border border-ink px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-ink"
            >
              Request Quote
            </a>
          </div>
        </Motion.div>
      )}
    </header>
  );
};

export default Header;
