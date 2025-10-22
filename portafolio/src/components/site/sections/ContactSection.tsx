import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import Section from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin, Send } from "lucide-react";

export default function ContactSection() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !email || !message) {
      toast({ title: "Please fill in all fields" });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/xdkwrkly", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        toast({ title: "Message sent successfully!" });
        setName("");
        setEmail("");
        setMessage("");
      } else {
        toast({ title: "Failed to send message. Try again later." });
      }
    } catch {
      toast({ title: "Network error. Try again later." });
    } finally {
      setLoading(false);
    }
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
              required
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
              required
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
              required
            />
          </div>
          <Button type="submit" className="hover-scale" disabled={loading}>
            {loading ? (
              "Sending..."
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </>
            )}
          </Button>
        </form>

        <div className="rounded-lg border bg-card p-6">
          <h3 className="text-lg font-semibold">Connect</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Find me on the platforms below:
          </p>
          <div className="mt-6 space-y-4">
            <div className="flex items-center text-gray-700">
              <Mail className="w-5 h-5 mr-3 text-blue-600" />
              <span className="font-medium">pat.milgam@gmail.com</span>
            </div>
            <div className="mt-4 flex gap-3">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center text-gray-700 hover:text-gray-900 hover:scale-105 story-link"
              >
                <Github className="w-6 h-6 mr-1" />
                <span className="font-semibold">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center text-gray-700 hover:text-gray-900 hover:scale-105 story-link"
              >
                <Linkedin className="w-6 h-6 mr-1" />
                <span className="font-semibold">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
