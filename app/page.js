import Image from "next/image";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import AboutSection from "./components/about";
import SkillsSection from "./components/skills";
import ProjectsSection from "./components/work";
import ContactSection from "./components/contact";
import Footer from "./components/footer";
import { ScrollProgressBar } from "./components/scrollbar";

export default function Home() {
  return (
    <div className="min-h-screen">
      <ScrollProgressBar />
      <Navbar />
      <Hero />
      <AboutSection />
      <SkillsSection/>
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
