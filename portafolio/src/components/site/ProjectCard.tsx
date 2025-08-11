import { Github, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  image?: string;
}

export function ProjectCard({ title, description, tech, github, demo, image }: Project) {
  return (
    <Card className="h-full transition-shadow hover:shadow-[var(--shadow-elegant)] overflow-hidden">
      {image && (
        <AspectRatio ratio={16 / 9}>
          <img
            src={image}
            alt={`${title} preview`}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </AspectRatio>
      )}
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <li key={t} className="rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground">{t}</li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="flex gap-2">
        {github && (
          <a href={github} target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub">
            <Button variant="outline" size="icon" className="hover-scale"><Github /></Button>
          </a>
        )}
        {demo && (
          <a href={demo} target="_blank" rel="noreferrer" aria-label="Live Demo" title="Live Demo">
            <Button variant="outline" size="icon" className="hover-scale"><ExternalLink /></Button>
          </a>
        )}
      </CardFooter>
    </Card>
  );
}

export default ProjectCard;
