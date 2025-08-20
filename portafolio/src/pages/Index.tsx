import Navbar from "@/components/site/Navbar";
import AboutSection from "@/components/site/sections/AboutSection";
import SkillsSection from "@/components/site/sections/SkillsSection";
import StudiesSection from "@/components/site/sections/StudiesSection";
import ProjectsSection from "@/components/site/sections/ProjectsSections";
import ContactSection from "@/components/site/sections/ContactSection";

export default function Index() {
  return (
    <div>
      <Navbar />

      <main>
        <AboutSection/>
        <SkillsSection/>
        <StudiesSection/>
        <ProjectsSection/>
        <ContactSection/>
      </main>

      <footer className="border-t py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} • Built with React, Vite &
        Tailwind
      </footer>
    </div>
  );
}
