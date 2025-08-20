import { useState } from "react";
import { Menu, Github, Linkedin } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#studies", label: "Studies" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  const onNavigate = () => setOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between">
        {/* Titulo navbar */}
        <a
          href="#about"
          className="flex items-center gap-2 font-semibold tracking-tight text-xl"
        >
          <span className="inline-block h-3 w-3 rounded-sm bg-primary shadow-[0_0_20px_hsl(var(--primary)/0.6)]" />
          <span>Patricio Milán</span>
        </a>

        {/* Opciones Navbar */}
        <nav className="hidden md:flex items-center gap-6 text-base">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-muted-foreground hover:text-foreground story-link"
              aria-label={item.label}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Seccion botones links */}
        <div className="flex items-center gap-2">
          {/* Github link */}
          <a
            href="https://github.com/PatoDaCelt"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Button variant="outline" size="icon" className="hover-scale">
              <Github className="h-5 w-5" />
            </Button>
          </a>
          {/* Linkedin link */}
          <a
            href="https://www.linkedin.com/in/patriciomilgam/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Button variant="outline" size="icon" className="hover-scale">
              <Linkedin className="h-5 w-5" />
            </Button>
          </a>
          {/* Toggle Dark/Light */}
          <ThemeToggle />

          {/* SlideBar lateral del Menu en Móvil */}
          <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" aria-label="Open menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72">
                <div className="mt-8 flex flex-col gap-4">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={onNavigate}
                      className="text-foreground/90"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
