import { Rocket } from "lucide-react";
import Section from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import profileImg from "@/assets/profile.png";
import CV from "@/assets/PatricioCV.pdf"

export default function AboutSection() {

  const onDownloadCV = () => {
    window.open(CV, "_blank");
  };
  
  return (
    <Section id="about" title="<About me/>">
      <div className="grid gap-6 md:grid-cols-[3fr_.9fr] items-center md:my-32">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
            Software Engineering Student
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl">
            I enjoy problem-solving, learning new technologies, and
            collaborating to ship high-quality software. I'm looking for
            opportunities to grow as a developer and contribute to impactful
            products.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-6">
            <Button onClick={onDownloadCV} className="hover-scale text-black">
              <Rocket className="mr-2 h-4 w-4" />
              Download CV
            </Button>
            <a href="#projects" className="story-link text-sm">
              Explore Projects
            </a>
          </div>
        </div>
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
  );
}
