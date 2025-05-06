// Place this at the top of your main layout/page
"use client";
import { motion, useScroll } from "framer-motion";

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 z-[9999]"
      style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
    />
  );
}
