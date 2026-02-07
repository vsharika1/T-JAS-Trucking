import React from 'react';
import { motion as Motion } from 'framer-motion';
import HeroBG from "/hero-bg.jpg";
import Logo from "/logo.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] overflow-hidden bg-paper text-white"
    >
      <div className="absolute inset-0">
        <img
          src={HeroBG}
          alt="Trucking Background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/65 to-black/45" />
      </div>

      <Motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="relative z-10 mx-auto flex max-w-6xl flex-col gap-10 px-6 py-24 lg:py-32"
      >
        <div className="flex items-center gap-6">
          <Motion.img
            src={Logo}
            alt="T-Jas Trucking Logo"
            className="h-20 w-20 rounded-full border border-white/60"
            aria-hidden="true"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          />
          <div className="text-xs uppercase tracking-[0.45em] text-white/70">
            Freight & Logistics
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div className="space-y-6">
            <Motion.h1
              role="heading"
              aria-level="1"
              className="section-title font-display text-4xl sm:text-6xl md:text-7xl drop-shadow-[0_6px_18px_rgba(0,0,0,0.6)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Calm, precise freight delivery for every mile.
            </Motion.h1>

            <Motion.p
              className="max-w-xl text-base sm:text-lg text-white/85 drop-shadow-[0_3px_10px_rgba(0,0,0,0.55)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              From regional lanes to coast-to-coast routes, T-Jas Trucking
              moves high-value cargo with quiet confidence, clear updates, and
              unwavering safety standards.
            </Motion.p>

            <Motion.div
              className="flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <a
                href="#contact"
                className="rounded-full border border-white px-6 py-3 text-xs uppercase tracking-[0.3em] transition hover:bg-white hover:text-ink"
              >
                Request Quote
              </a>
              <a
                href="#services"
                className="text-xs uppercase tracking-[0.3em] text-white/80 hover:text-white"
              >
                View Services
              </a>
            </Motion.div>
          </div>

          <Motion.div
            className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <div className="grid gap-6 text-sm uppercase tracking-[0.25em] text-white/70">
              <div>
                <p className="text-3xl font-display text-white">99%</p>
                <p>On-time delivery</p>
              </div>
              <div>
                <p className="text-3xl font-display text-white">24/7</p>
                <p>Dispatch visibility</p>
              </div>
              <div>
                <p className="text-3xl font-display text-white">10+</p>
                <p>Years on the road</p>
              </div>
            </div>
          </Motion.div>
        </div>
      </Motion.div>
    </section>
  );
};

export default Hero;
