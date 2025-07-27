"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Countdown from "./Countdown";

const HeroSection = () => {
  return (
    <div className="relative h-screen w-full flex flex-col items-center">
      {/* Hero Content */}
      <motion.div
        className="relative z-20 flex flex-grow items-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="flex flex-col justify-between items-center max-w-7xl mt-12 pt-24 w-full px-4">
          <motion.div
            className="w-full flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            {/* Headline */}
            <p className="text-white text-center font-main font-bold text-lg md:text-2xl tracking-wide mb-6">
              Don't miss our limited drop.
            </p>

            {/* Countdown */}
            <div className="text-white text-3xl font-light tracking-widest mb-4">
               <Countdown />
            </div>

            {/* Waitlist Form */}
            <div className="w-full max-w-md">
              <form className="relative w-full">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 pr-32 rounded-full border border-white/20 bg-white/10 text-white placeholder-white/70 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <button
                  type="submit"
                  className="absolute top-1/2 right-1 transform -translate-y-1/2 px-6 py-2 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition"
                >
                  Join
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Optional Decorative Element */}
      <motion.div
        className="absolute bottom-12 right-12 z-20 hidden md:block"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <div className="w-24 h-24 border border-white/30 rounded-full flex items-center justify-center">
          <div className="w-20 h-20 border border-white/50 rounded-full flex items-center justify-center">
            <div className="w-16 h-16 bg-white/10 rounded-full backdrop-blur-sm flex items-center justify-center">
              <span className="text-white text-xs tracking-widest uppercase rotate-45">
                KLASSY
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
