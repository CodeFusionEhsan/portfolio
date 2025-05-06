"use client";
import { motion } from "framer-motion";

const skills = [
  { name: "MERN Stack", icon: "/skills/mern.svg" },
  { name: "Next.js", icon: "/skills/nextjs.svg" },
  { name: "Python", icon: "/skills/python.svg" },
  { name: "Django", icon: "/skills/django.svg" },
  { name: "Solidity", icon: "/skills/solidity.svg" },
  { name: "Hardhat", icon: "/skills/hardhat.svg" },
  { name: "Tailwind CSS", icon: "/skills/tailwind.svg" },
  { name: "HTML", icon: "/skills/html.svg" },
  { name: "CSS", icon: "/skills/css.svg" },
  { name: "Firebase", icon: "/skills/firebase.svg" },
  { name: "SQL", icon: "/skills/sql.svg" },
  { name: "Docker", icon: "/skills/docker.svg" },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="w-full py-16 bg-gradient-to-b from-gray-900 via-black to-gray-950 flex justify-center">
      <div className="max-w-5xl w-full px-4">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, type: "spring" }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-white text-center mb-3"
        >
          My Skills
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7, type: "spring" }}
          viewport={{ once: true }}
          className="text-gray-400 text-center mb-10 max-w-2xl mx-auto"
        >
          A selection of technologies and tools I use to build modern, scalable, and performant applications.
        </motion.p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08
              }
            }
          }}
          className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 sm:gap-6"
        >
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ scale: 1.07, boxShadow: "0 4px 24px #38bdf8aa" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-black/60 backdrop-blur-md rounded-xl shadow-lg flex flex-col items-center justify-center py-6 px-2 sm:px-4 cursor-pointer border border-blue-900 hover:border-blue-400 transition"
            >
              {/* Replace with your SVG or image icons */}
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-10 h-10 mb-3"
                loading="lazy"
              />
              <span className="text-gray-200 text-sm font-medium text-center">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
