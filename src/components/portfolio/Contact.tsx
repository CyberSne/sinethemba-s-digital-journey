import { useState, type FormEvent } from "react";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Reveal } from "./Reveal";
import { CONTACT } from "./data";

export function Contact() {
  const [sending, setSending] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setSending(true);
    window.setTimeout(() => {
      setSending(false);
      form.reset();
      toast.success("Thank you! Your message has been captured.", {
        description: `You can also reach me directly at ${CONTACT.email}.`,
      });
    }, 600);
  }

  const details = [
    { icon: Mail, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { icon: Github, label: "GitHub", value: "github.com/sinethembalokwe", href: CONTACT.github },
    { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/sinethembalokwe", href: CONTACT.linkedin },
    { icon: MapPin, label: "Location", value: CONTACT.location, href: undefined },
  ];

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">Contact</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Let's work together</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            I am open to internships, entry-level roles and learning opportunities in IT.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div className="surface-navy h-full rounded-2xl p-7 shadow-[var(--shadow-lift)]">
              <h3 className="text-lg font-semibold text-primary-foreground">Contact details</h3>
              <ul className="mt-6 space-y-5">
                {details.map((detail) => (
                  <li key={detail.label} className="flex items-start gap-3">
                    <span className="inline-flex size-9 items-center justify-center rounded-lg bg-primary-foreground/10 text-accent">
                      <detail.icon className="size-4" />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-primary-foreground/60">
                        {detail.label}
                      </p>
                      {detail.href ? (
                        <a
                          href={detail.href}
                          target={detail.href.startsWith("http") ? "_blank" : undefined}
                          rel="noreferrer"
                          className="text-sm font-medium text-primary-foreground hover:text-accent"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-primary-foreground">{detail.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form onSubmit={handleSubmit} className="card-elevated space-y-5 p-7">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" required placeholder="Your full name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" required placeholder="you@email.com" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" name="subject" required placeholder="Opportunity, question or feedback" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" required rows={5} placeholder="Write your message..." />
              </div>
              <Button type="submit" size="lg" disabled={sending} className="w-full sm:w-auto">
                <Send /> {sending ? "Sending..." : "Send message"}
              </Button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="surface-navy">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-5 py-10 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-display text-base font-bold text-primary-foreground">
            Sinethemba Lokwe<span className="text-accent">.</span>
          </p>
          <p className="mt-1 text-xs text-primary-foreground/65">
            Aspiring IT Professional | CAPACITI Candidate
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a href={CONTACT.github} target="_blank" rel="noreferrer" aria-label="GitHub profile" className="text-primary-foreground/70 hover:text-accent">
            <Github className="size-5" />
          </a>
          <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="text-primary-foreground/70 hover:text-accent">
            <Linkedin className="size-5" />
          </a>
          <a href={`mailto:${CONTACT.email}`} aria-label="Send an email" className="text-primary-foreground/70 hover:text-accent">
            <Mail className="size-5" />
          </a>
        </div>

        <p className="text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} Sinethemba Lokwe. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
