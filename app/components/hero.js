"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-gray-950"
    >
      <div className="max-w-7xl w-full px-4 sm:px-6 py-10 flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-16">
        {/* Left: Text */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <motion.h1
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.7, type: "spring" }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-3 sm:mb-4"
          >
            Hi, I&apos;m Ehsan Saleem
          </motion.h1>
          <motion.h2
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.7, type: "spring" }}
            className="text-lg sm:text-xl md:text-2xl text-blue-400 font-semibold mb-3 sm:mb-4"
          >
            Web Developer | Python Expert | Web3 Learner
          </motion.h2>
          <motion.p
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7, type: "spring" }}
            className="text-gray-300 mb-7 sm:mb-8 max-w-lg"
          >
            A 16 Year Old Crafting Jaw-Dropping Web Apps & AI-Powered Solutions With Responsive Frontend & Highly Functional Backend
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.55, duration: 0.5, type: "spring" }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a
              href="#work"
              className="px-6 py-3 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 transition text-center"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg border border-blue-400 text-blue-400 font-semibold hover:bg-blue-400 hover:text-white transition text-center"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
        {/* Right: Image */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
          className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0"
        >
          <div className="relative w-40 h-40 xs:w-48 xs:h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full overflow-hidden bg-gradient-to-tr from-blue-900 via-blue-700 to-blue-400 shadow-lg">
            {/* Replace the src with your own image */}
            <img
              src="/IMG_20241204_140550.jpg"
              alt="Ehsan Saleem"
              className="object-cover w-full h-full"
            />
            {/* Optional: Animated ring */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.7, type: "spring" }}
              className="absolute inset-0 rounded-full border-4 border-blue-400 animate-pulse pointer-events-none"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
