// src/components/Header.jsx
import React, { useState } from "react";
import { motion as Motion } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 w-full z-50 backdrop-blur-md bg-black/60 border-b border-white/10">
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        <span className="text-3xl font-extrabold uppercase tracking-widest text-white font-heading">
          T-JAS Trucking
        </span>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 font-heading text-sm uppercase tracking-wide">
          {navLinks.map((link, index) => (
            <Motion.a
              key={index}
              href={link.href}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-white hover:text-primary transition-colors duration-200 font-bold px-2 py-1 rounded"
            >
              {link.name}
            </Motion.a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Mobile Navigation"
        >
          <span className="text-3xl text-white">&#9776;</span>
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <Motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          className="md:hidden bg-gray backdrop-blur-xs px-4 py-4 shadow"
        >
          <div className="flex flex-col space-y-4 font-heading text-sm uppercase tracking-wide">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-white hover:text-primary transition-colors duration-200 font-bold px-2 py-1 rounded"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </Motion.div>
      )}
    </header>
  );
};

export default Header;
