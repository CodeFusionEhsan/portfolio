"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About Me", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Work", href: "#work" },
  { name: "Contact Me", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(null);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 80, damping: 12 }}
      className="fixed w-full z-50 bg-transparent backdrop-blur-md bg-black/40"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <span className="font-bold text-3xl text-white">Ehsan Saleem</span>
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map(link => (
            <motion.a
              key={link.name}
              href={link.href}
              className="relative px-3 py-1 rounded-md text-gray-200 hover:text-blue-400 font-medium transition-colors"
              onMouseEnter={() => setHovered(link.name)}
              onMouseLeave={() => setHovered(null)}
            >
              {link.name}
              {hovered === link.name && (
                <motion.span
                  layoutId="navbar-hover"
                  className="absolute inset-0 bg-blue-400/10 rounded-md -z-10"
                  transition={{ type: "spring", stiffness: 300, damping: 20, duration: 0.3 }}
                />
              )}
            </motion.a>
          ))}
          <div className="flex gap-4 ml-6">
            <motion.a whileHover={{ scale: 1.2 }} href="https://instagram.com/@ehsandesignswebsites" target="_blank" aria-label="Instagram">
              <svg className="w-6 h-6 text-gray-300 hover:text-pink-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zm0 1.5h8.5A4.25 4.25 0 0120.5 7.75v8.5a4.25 4.25 0 01-4.25 4.25h-8.5A4.25 4.25 0 013.5 16.25v-8.5A4.25 4.25 0 017.75 3.5zm4.25 2.75a5 5 0 100 10 5 5 0 000-10zm0 1.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm5.25.75a1 1 0 11-2 0 1 1 0 012 0z" />
              </svg>
            </motion.a>
            <motion.a whileHover={{ scale: 1.2 }} href="https://github.com/CodeFusionEhsan" target="_blank" aria-label="GitHub">
              <svg className="w-6 h-6 text-gray-300 hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.426 2.865 8.18 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.155-1.11-1.463-1.11-1.463-.908-.621.069-.609.069-.609 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.447-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.91-1.295 2.748-1.025 2.748-1.025.547 1.378.203 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.696-4.566 4.945.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.579.688.481C19.138 20.199 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
              </svg>
            </motion.a>
            <motion.a whileHover={{ scale: 1.2 }} href="https://linkedin.com/ehsan-saleem-web3" target="_blank" aria-label="LinkedIn">
              <svg className="w-6 h-6 text-gray-300 hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76c.97 0 1.75.79 1.75 1.76s-.78 1.76-1.75 1.76zm13.5 10.27h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.37-1.54 2.82-1.54 3.01 0 3.57 1.98 3.57 4.56v4.75z" />
              </svg>
            </motion.a>
          </div>
        </div>
        {/* Hamburger for Mobile */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-7 h-7 text-gray-200" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </div>
      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, type: "tween" }}
            className="md:hidden bg-black/70 backdrop-blur-md px-6 pb-4 pt-2 shadow"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-200 hover:text-blue-400 font-medium transition-colors py-2"
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex gap-4 mt-2">
                <motion.a whileHover={{ scale: 1.2 }} href="https://instagram.com/" target="_blank" aria-label="Instagram">
                  <svg className="w-6 h-6 text-gray-300 hover:text-pink-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zm0 1.5h8.5A4.25 4.25 0 0120.5 7.75v8.5a4.25 4.25 0 01-4.25 4.25h-8.5A4.25 4.25 0 013.5 16.25v-8.5A4.25 4.25 0 017.75 3.5zm4.25 2.75a5 5 0 100 10 5 5 0 000-10zm0 1.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm5.25.75a1 1 0 11-2 0 1 1 0 012 0z" />
                  </svg>
                </motion.a>
                <motion.a whileHover={{ scale: 1.2 }} href="https://github.com/" target="_blank" aria-label="GitHub">
                  <svg className="w-6 h-6 text-gray-300 hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.426 2.865 8.18 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.155-1.11-1.463-1.11-1.463-.908-.621.069-.609.069-.609 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.447-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.91-1.295 2.748-1.025 2.748-1.025.547 1.378.203 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.696-4.566 4.945.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.579.688.481C19.138 20.199 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
                  </svg>
                </motion.a>
                <motion.a whileHover={{ scale: 1.2 }} href="https://linkedin.com/" target="_blank" aria-label="LinkedIn">
                  <svg className="w-6 h-6 text-gray-300 hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76c.97 0 1.75.79 1.75 1.76s-.78 1.76-1.75 1.76zm13.5 10.27h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.37-1.54 2.82-1.54 3.01 0 3.57 1.98 3.57 4.56v4.75z" />
                  </svg>
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
