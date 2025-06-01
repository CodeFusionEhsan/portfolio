"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TABS = [
  { label: "About Me", key: "about" },
  { label: "Education", key: "education" },
  { label: "Experience", key: "experience" },
];

const TAB_CONTENT = {
  about: (
    <div>
      <h3 className="text-lg sm:text-xl font-semibold mb-2 text-blue-400">Who am I?</h3>
      <p className="text-gray-300 text-sm sm:text-base">
        I am a 16 year old, forward-thinking web developer specializing in Javascript & Python, with a particular passion for inntegrating AI into web applications. My goal Is To create Web Solutions that are not only functional and beautiful but also intelligent and adaptve. My core areas of expertise are MERN stack, Next.js, Python + Django. I am on a mission to prove the age old saying - Age Is Just A Number.
      </p>
    </div>
  ),
  education: (
    <div>
      <h3 className="text-lg sm:text-xl font-semibold mb-2 text-blue-400">Education</h3>
      <ul className="text-gray-300 text-sm sm:text-base space-y-2">
        <li>
          <strong>Scored 94% in ICSE Board Examinations</strong> <br />
          IPEM International  School & College, 2013-2025
        </li>
        <li>
          <strong>Web Development Bootcamp</strong> <br />
          By Dr. Angela Yu, 2024
        </li>
        <li>
          <strong>AI Certifications From Be10x</strong> <br />
          By Be10x, 2025
        </li>
        <li>
          <strong>Currently Studying In Class XI</strong> <br />
          AM Oxford School & College, 2025-Present
        </li>
      </ul>
    </div>
  ),
  experience: (
    <div>
      <h3 className="text-lg sm:text-xl font-semibold mb-2 text-blue-400">Experience</h3>
      <ul className="text-gray-300 text-sm sm:text-base space-y-2">
        <li>
          <strong>Web Developer & Designer</strong> @apexvisionariesagency <br />
          2022 - Present
        </li>
        <li>
          <strong>Web Developer & Designer</strong> @ Freelance <br />
          2020 - 2022
        </li>
      </ul>
    </div>
  ),
};

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <section
      id="about"
      className="w-full flex items-center justify-center py-10 sm:py-14 md:py-20 bg-gradient-to-b from-gray-950 via-black to-gray-900"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: "spring" }}
        viewport={{ once: true }}
        className="max-w-3xl w-full mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-10 px-4 sm:px-6"
      >
        {/* Profile Image */}
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7, type: "spring" }}
          viewport={{ once: true }}
          className="w-28 h-28 xs:w-32 xs:h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden bg-gradient-to-tr from-blue-900 via-blue-700 to-blue-400 shadow-xl mb-4 md:mb-0 flex-shrink-0"
        >
          <img
            src="/IMG_20241204_140550.jpg"
            alt="Ehsan Saleem"
            className="object-cover w-full h-full"
          />
        </motion.div>
        {/* Card with Tabs */}
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7, type: "spring" }}
          viewport={{ once: true }}
          className="flex-1 w-full bg-black/60 backdrop-blur-md rounded-2xl shadow-2xl p-4 sm:p-6"
        >
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 sm:gap-4 mb-5">
            {TABS.map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`relative px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg font-semibold text-xs sm:text-base transition-colors duration-200
                  ${
                    activeTab === tab.key
                      ? "bg-blue-600 text-white shadow"
                      : "bg-transparent text-blue-300 hover:bg-blue-900/40"
                  }`}
              >
                {tab.label}
                {activeTab === tab.key && (
                  <motion.span
                    layoutId="about-tab-underline"
                    className="absolute left-0 bottom-0 w-full h-1 rounded-b bg-blue-400"
                    style={{ zIndex: 1 }}
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  />
                )}
              </button>
            ))}
          </div>
          {/* Tab Content */}
          <div className="min-h-[100px] sm:min-h-[90px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, type: "spring" }}
              >
                {TAB_CONTENT[activeTab]}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
