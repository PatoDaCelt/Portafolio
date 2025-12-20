import Section from "@/components/site/Section";
import SkillBadge, { SkillItem } from "@/components/site/SkillBadge";

const skills: Record<string, SkillItem[]> = {
  Development: [
    { name: "Python", imageSrc: "https://cdn.simpleicons.org/python/3776AB" },
    { name: "Java", imageSrc: "https://img.icons8.com/?size=100&id=38294&format=png&color=FD7E14" },
    { name: "JavaScript", imageSrc: "https://cdn.simpleicons.org/javascript/F7DF1E" },
    { name: "JavaScript", imageSrc: "https://cdn.simpleicons.org/typescript" },
    { name: "Web", imageSrc: "https://cdn.simpleicons.org/html5/E34F26" },
    { name: "React", imageSrc: "https://cdn.simpleicons.org/react/61DAFB" },
    { name: "Tailwind CSS", imageSrc: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
  ],
  "Databases": [
    { name: "PostgreSQL", imageSrc: "https://cdn.simpleicons.org/postgresql/4169E1" },
    { name: "MySQL", imageSrc: "https://cdn.simpleicons.org/mysql/4479A1" },
  ],
  Tools: [
    { name: "Git", imageSrc: "https://cdn.simpleicons.org/git/F05032" },
    { name: "Github", imageSrc: "https://cdn.simpleicons.org/github" },
    { name: "Excel", imageSrc: "https://cdn.simpleicons.org/googlesheets/34A853" },
  ],
  "Data Analysis": [
    { name: "Jupyter", imageSrc: "https://cdn.simpleicons.org/jupyter/F37626" },
    { name: "PowerBI", imageSrc: "https://cdn.simpleicons.org/bookmeter/FA7D19" },
  ],
};

export default function SkillsSection() {
  return (
    <Section
      id="skills"
      title="<Skills/>"
      description="Technologies and tools I use regularly."
    >
      <div className="space-y-8">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-lg font-semibold mb-3">{category}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {items.map((s) => (
                <SkillBadge key={s.name} {...s} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
