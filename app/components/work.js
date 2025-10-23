"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "Taskify",
    image: "/projects/project.png",
    description: "AI Powered Project Management Platform Crafted For Freelancers With Amazing AI Features",
    tech: ["Next.js", "Tailwind CSS", "Clerk", "Gemini API", "Prisma", "PostgreSQL"],
    link: "https://taskify-manager-project.vercel.app"
  },
  {
    title: "AI Skin Analysis and Product Recommendation System MVP",
    image: "/projects/project-5.png",
    description: "AI Powered Skin Analysis MVP for Canadian Startup with Before/After Results & Product Recommendation System",
    tech: ["MERN Stack", "Huggingface", "Javascript", "Tailwind CSS", "ML"],
    link: "https://www.instagram.com/p/DPs-wdOgLDD/"
  },
  {
    title: "CodersHangout",
    image: "/projects/project1.PNG",
    description: "A Community where Developers Can Share Their Knowledge and Code",
    tech: ["MERN", "Tailwind CSS", "Clerk", "Gemini API"],
    link: "https://frontend-codershangout.vercel.app"
  },
  {
    title: "E-Commerce Sales Chatbot",
    image: "/projects/projectAI.png",
    description: "An E-Commerce Sales Chatbot capable of processing basic user queries and fetch relevant product data from the database",
    tech: ["Django", "Tailwind CSS", "Clerk", "Python", "Next.js", "Javascript", "Regex"],
    link: "https://github.com/CodeFusionEhsan/Chatbot"
  },
  {
    title: "Refine Search - Image Search",
    image: "/projects/project2.PNG",
    description: "Search Products On Flipkart Using Images",
    tech: ["Python", "Django", "Tailwind CSS", "Tensorflow", "AI/ML", "Firecrawl", "Web Scraping"],
    link: "https://github.com/CodeFusionEhsan"
  },
  {
    title: "VidWiz Video",
    image: "/projects/project3.PNG",
    description: "A Modern Video Editing & Sharing Platform built with Next.js",
    tech: ["Next.js", "MongoDB", "React.js", "Cloudinary", "API", "Javascript"],
    link: "https://vidwiz-video.vercel.app"
  },
  {
    title: "Tradex - For Crypto",
    image: "/projects/project-4.png",
    description: "A Crypto Trading Platform Built with Next.js & Crypto APIs where users can get latest updates on Cryto, See Crypto Data on Price Charts, note their strategies & build a community by blogging",
    tech: ["Next.js", "MongoDB", "APIs", "Rechart.js", "Gemini API", "Clerk", "Tailwind CSS"],
    link: "https://tradex-tau.vercel.app"
  }
];

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 30 }
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.3 }
  }),
};

export default function ProjectsSection() {
  const [[page, direction], setPage] = useState([0, 0]);
  const project = projects[page];

  const paginate = (newDirection) => {
    setPage(([prevPage]) => {
      let next = prevPage + newDirection;
      if (next < 0) next = projects.length - 1;
      if (next >= projects.length) next = 0;
      return [next, newDirection];
    });
  };

  return (
    <section id="work" className="w-full py-16 bg-gradient-to-b from-gray-950 via-black to-gray-900 flex justify-center">
      <div className="max-w-3xl w-full px-4 flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, type: "spring" }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-white text-center mb-3"
        >
          Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7, type: "spring" }}
          viewport={{ once: true }}
          className="text-gray-400 text-center mb-10 max-w-2xl mx-auto"
        >
          Explore some of my favorite projects! Swipe or use the arrows to browse.
        </motion.p>
        <div className="relative w-full flex justify-center items-center">
          {/* Carousel Card */}
          <div className="w-full max-w-lg min-h-[400px] flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={page}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute w-full"
                style={{ position: "absolute" }}
              >
                <div className="bg-black/70 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full md:w-1/2 h-48 md:h-auto object-cover"
                  />
                  <div className="flex-1 p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-blue-400 mb-2">{project.title}</h3>
                      <p className="text-gray-200 mb-4 text-sm sm:text-base">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="bg-blue-900/40 text-blue-300 text-xs px-3 py-1 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 px-5 py-2 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 transition text-center"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          {/* Carousel Controls */}
          <button
            aria-label="Previous project"
            onClick={() => paginate(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center z-10 transition"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            aria-label="Next project"
            onClick={() => paginate(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center z-10 transition"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        {/* Carousel Dots */}
        <div className="flex gap-2 mt-6">
          {projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setPage([idx, idx > page ? 1 : -1])}
              className={`w-3 h-3 rounded-full transition border-2 border-blue-400 ${
                idx === page ? "bg-blue-400" : "bg-transparent"
              }`}
              aria-label={`Go to project ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
