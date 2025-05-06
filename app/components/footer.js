"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="w-full bg-black/70 backdrop-blur-md py-6 flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
        className="flex flex-col sm:flex-row items-center gap-2 text-gray-400 text-sm"
      >
        <span>
          &copy; {new Date().getFullYear()} Ehsan Saleem
        </span>
        <span className="hidden sm:inline mx-2">|</span>
        <a
          href="https://github.com/CodeFusionEhsan"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.426 2.865 8.18 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.155-1.11-1.463-1.11-1.463-.908-.621.069-.609.069-.609 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.447-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.91-1.295 2.748-1.025 2.748-1.025.547 1.378.203 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.696-4.566 4.945.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.579.688.481C19.138 20.199 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"/>
          </svg>
          GitHub
        </a>
      </motion.div>
    </footer>
  );
}
