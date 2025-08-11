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
        <img src={imageSrc} alt={`${name} logo`} className="h-4 w-4" loading="lazy" />
      ) : Icon ? (
        <Icon className="h-4 w-4 text-primary" />
      ) : null}
      <span>{name}</span>
    </div>
  );
}

export default SkillBadge;
