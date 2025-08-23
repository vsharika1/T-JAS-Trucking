import React from 'react';
import { motion as Motion } from 'framer-motion';
import HeroBG from "/hero-bg.jpg";
import Logo from "/logo.png";

const Hero = () => {
  return (
    <section id="home" className="relative bg-neutral text-grayText min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Layer */}
      <div className="absolute inset-0">
        <img
          src={HeroBG}
          alt="Trucking Background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-black opacity-70" />
      </div>

      {/* Content */}
      <Motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 container mx-auto px-6 py-10 text-center md:text-left flex flex-col items-center md:items-start"
      >
        {/* Logo */}
        <Motion.img
          src={Logo}
          alt="T-Jas Trucking Logo"
          className="w-32 h-32 rounded-full border-4 border-white shadow-lg mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        />

        <Motion.h1
          className="text-4xl md:text-6xl font-heading font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Reliable Freight Solutions
        </Motion.h1>

        <Motion.p
          className="text-lg md:text-xl font-body text-white mb-6 max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          Delivering safety, speed, and service — coast to coast.
        </Motion.p>

        <Motion.a
          href="#contact"
          className="inline-block bg-amber-300 text-black font-bold py-3 px-8 rounded-full border border-white shadow-lg hover:bg-amber-400 hover:text-black hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          Get a Quote
        </Motion.a>
      </Motion.div>
    </section>
  );
};

export default Hero;