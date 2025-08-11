import { useState } from "react";
import Navbar from "@/components/site/Navbar";
import Section from "@/components/site/Section";
import ProjectCard, { Project } from "@/components/site/ProjectCard";
import SkillBadge, { SkillItem } from "@/components/site/SkillBadge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Rocket } from "lucide-react";
import profileImg from "@/assets/profile.png";
import taskflowImg from "@/assets/projects/taskflow.png";
import stockwatchImg from "@/assets/projects/stockwatch.png";
import studyplannerImg from "@/assets/projects/study-planner.png";

const skills: SkillItem[] = [
  { name: "Python", imageSrc: "https://cdn.simpleicons.org/python/3776AB" },
  { name: "C++", imageSrc: "https://cdn.simpleicons.org/cplusplus/00599C" },
  { name: "React", imageSrc: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "Tailwind CSS", imageSrc: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
  { name: "JavaScript",imageSrc: "https://cdn.simpleicons.org/javascript/F7DF1E"},
  { name: "Web", imageSrc: "https://cdn.simpleicons.org/html5/E34F26" },
  { name: "PostgreSQL", imageSrc: "https://cdn.simpleicons.org/postgresql/4169E1"},
  { name: "MySQL", imageSrc: "https://cdn.simpleicons.org/mysql/4479A1"},
  { name: "Supabase", imageSrc: "https://cdn.simpleicons.org/supabase/3FCF8E"},
  { name: "Git", imageSrc: "https://cdn.simpleicons.org/git/F05032" },
  { name: "Excel", imageSrc: "https://cdn.simpleicons.org/googlesheets/34A853"},
];

const projects: Project[] = [
  {
    title: "TaskFlow",
    description: "A minimal task manager with drag-and-drop and offline support.",
    tech: ["React", "TypeScript", "IndexedDB"],
    github: "https://github.com/",
    demo: "#",
    image: taskflowImg,
  },
  {
    title: "StockWatch",
    description: "Dashboard to visualize stock trends and alerts with Recharts.",
    tech: ["React", "Recharts", "REST APIs"],
    github: "https://github.com/",
    demo: "#",
    image: stockwatchImg,
  },
  {
    title: "Study Planner",
    description: "Plan, track, and analyze study sessions with friendly UX.",
    tech: ["React", "Zod", "React Hook Form"],
    github: "https://github.com/",
    demo: "#",
    image: studyplannerImg,
  },
];

export default function Index() {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onDownloadCV = () => {
    window.open("#", "_blank");
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      toast({ title: "Please fill in all fields" });
      return;
    }
    const mail = `mailto:pat.milgam@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(
      name
    )}&body=${encodeURIComponent(message + "\n\nFrom: " + email)}`;
    window.location.href = mail;
    toast({ title: "Message ready in your email client!" });
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div>
      {/* Navbar superior  */}
      <Navbar />

      <main>
        {/* Sección de About */}
        <Section id="about" title="<About me/>">
          <div className="grid gap-6 md:grid-cols-[3fr_.9fr] items-center md:my-32">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
                Software Engineering Student
              </h1>
              <p className="mt-4 text-muted-foreground max-w-2xl">
                I enjoy problem‑solving, learning new technologies, and
                collaborating to ship high‑quality software. I'm looking for
                opportunities to grow as a developer and contribute to impactful
                products.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-6">
                {/* Descargar CV y Proyectos */}
                <Button
                  onClick={onDownloadCV}
                  className="hover-scale text-black"
                >
                  <Rocket className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
                <a href="#projects" className="story-link text-sm">
                  Explore Projects
                </a>
              </div>
            </div>
            {/* Fotografía */}
            <div className="relative flex justify-center mt-10 md:block md:mt-1">
              <div
                className="absolute -inset-4 md:-inset-8 -z-10 rounded-xl"
                style={{ background: "var(--gradient-primary)" }}
              />
              <div className="space-y-4">
                <div className="overflow-hidden rounded-xl border bg-card shadow-[var(--shadow-elegant)] max-w-[200px] mx-auto md:max-w-none">
                  <img
                    src={profileImg}
                    alt="Profile photo"
                    className="h-full w-full object-cover aspect-[4/5]"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Sección Skills */}
        <Section
          id="skills"
          title="Skills"
          description="Technologies and tools I use regularly."
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {skills.map((s) => (
              <SkillBadge key={s.name} {...s} />
            ))}
          </div>
        </Section>

        <Section
          id="studies"
          title="Studies"
          description="Academic background and relevant courses/certifications."
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border bg-card p-6">
              <h3 className="text-lg font-semibold">
                B.S. in Software Engineering
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Your University • 2021 – Present
              </p>
              <ul className="mt-4 list-disc pl-5 text-sm text-muted-foreground space-y-1">
                <li>Data Structures & Algorithms</li>
                <li>Databases & SQL</li>
                <li>Web Development</li>
                <li>Operating Systems</li>
              </ul>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <h3 className="text-lg font-semibold">Certificates</h3>
              <ul className="mt-3 list-disc pl-5 text-sm text-muted-foreground space-y-1">
                <li>Python for Everybody</li>
                <li>Git & GitHub Foundations</li>
                <li>React Basics</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section
          id="projects"
          title="Projects"
          description="Selected work that highlights my interests and skills."
        >
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
        </Section>

        <Section
          id="contact"
          title="Contact"
          description="Send me a message — I’m open to internships, collaborations and feedback."
        >
          <div className="grid gap-8 md:grid-cols-2">
            <form
              onSubmit={onSubmit}
              className="rounded-lg border bg-card p-6 space-y-4"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium">
                  Name
                </label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your message..."
                  rows={5}
                />
              </div>
              <Button type="submit" className="hover-scale">
                Send Message
              </Button>
            </form>
            <div className="rounded-lg border bg-card p-6">
              <h3 className="text-lg font-semibold">Connect</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Find me on the platforms below:
              </p>
              <div className="mt-4 flex gap-3">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="story-link"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="story-link"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <footer className="border-t py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} SE Student • Built with React, Vite &
        Tailwind
      </footer>
    </div>
  );
}
