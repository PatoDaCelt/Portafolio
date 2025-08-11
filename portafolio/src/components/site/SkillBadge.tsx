import { LucideIcon } from "lucide-react";

export interface SkillItem {
  name: string;
  Icon?: LucideIcon;
  imageSrc?: string;
}

export function SkillBadge({ name, Icon, imageSrc }: SkillItem) {
  return (
    <div className="inline-flex items-center gap-2 rounded-md border bg-card px-3 py-2 text-sm text-foreground/90 shadow-sm hover:shadow-[var(--shadow-elegant)] transition-shadow">

      {imageSrc ? (
        <img src={imageSrc} alt={`${name} logo`} className="w-8" loading="lazy" />
      ) : Icon ? (
        <Icon className="w-8 text-primary" /> //En caso de no encontrar icono
      ) : null}

      <span>{name}</span>
    </div>
  );
}

export default SkillBadge;
