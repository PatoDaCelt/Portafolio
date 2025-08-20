import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import Section from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactSection() {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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
  );
}
