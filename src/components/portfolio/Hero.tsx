import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import profile from "@/assets/profile.jpg";
import { CONTACT } from "./data";

export function Hero() {
  return (
    <section id="home" className="surface-navy relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-40 size-[32rem] rounded-full bg-accent/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-52 -left-24 size-[28rem] rounded-full bg-accent/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-24 pt-32 md:pb-32 md:pt-40 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-primary-foreground/80">
            Portfolio
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-[1.05] text-primary-foreground sm:text-5xl lg:text-6xl">
            Sinethemba <span className="text-gradient-accent">Lokwe</span>
          </h1>
          <p className="mt-4 text-base font-medium text-primary-foreground/85 sm:text-lg">
            Aspiring IT Professional <span className="text-accent">|</span> CAPACITI Candidate
          </p>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-primary-foreground/75 sm:text-base">
            I am a motivated and enthusiastic aspiring IT professional with a passion for technology,
            digital innovation, and continuous learning. I have completed various IT and AI-related
            training programs and am seeking opportunities to grow my skills through internships and
            entry-level positions.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild size="lg" variant="hero">
              <a href="#contact">
                Get in touch <ArrowRight />
              </a>
            </Button>
            <Button asChild size="lg" variant="onNavy">
              <a href="/SINETHEMBA%20LOKWE.pdf" download>
                <Download /> Download CV
              </a>
            </Button>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="text-primary-foreground/70 transition-colors hover:text-accent"
            >
              <Github className="size-5" />
            </a>
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="text-primary-foreground/70 transition-colors hover:text-accent"
            >
              <Linkedin className="size-5" />
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              aria-label="Send an email"
              className="text-primary-foreground/70 transition-colors hover:text-accent"
            >
              <Mail className="size-5" />
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute inset-0 -rotate-3 rounded-3xl border border-primary-foreground/20" />
          <img
            src={profile}
            width={800}
            height={1000}
            alt="Professional portrait of Sinethemba Lokwe"
            className="relative rounded-3xl border border-primary-foreground/15 object-cover shadow-[var(--shadow-lift)]"
          />
        </div>
      </div>
    </section>
  );
}
