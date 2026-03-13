import Navbar from "@/components/site/Navbar";
import AboutSection from "@/components/site/sections/AboutSection";
import ExperienceSection from "@/components/site/sections/ExperienceSection";
import SkillsSection from "@/components/site/sections/SkillsSection";
import ProjectsSection from "@/components/site/sections/ProjectsSections";
import StudiesSection from "@/components/site/sections/StudiesSection";
import ContactSection from "@/components/site/sections/ContactSection";

export default function Index() {
  return (
    <div>
      <Navbar />

      <main>
        <AboutSection/>
        <ExperienceSection/>
        <SkillsSection/>
        <ProjectsSection/>
        <StudiesSection/>
        <ContactSection/>
      </main>

      <footer className="border-t py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} • Built with React, Vite &
        Tailwind
      </footer>
    </div>
  );
}
