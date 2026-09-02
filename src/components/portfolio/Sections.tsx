import {
  Award,
  BadgeCheck,
  BrainCircuit,
  Briefcase,
  FileBadge,
  FolderGit2,
  GraduationCap,
  Lightbulb,
  MonitorSmartphone,
  Target,
  type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";

import { Reveal } from "./Reveal";
import {
  CERTIFICATIONS,
  EDUCATION,
  EXPERIENCE,
  PROJECTS,
  SOFT_SKILLS,
  TECHNICAL_SKILLS,
} from "./data";

function SectionHeading({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{title}</h2>
      {lead ? <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">{lead}</p> : null}
    </Reveal>
  );
}

function Section({
  id,
  children,
  muted = false,
}: {
  id: string;
  children: ReactNode;
  muted?: boolean;
}) {
  return (
    <section id={id} className={muted ? "bg-secondary/50 py-20 sm:py-28" : "py-20 sm:py-28"}>
      <div className="mx-auto max-w-6xl px-5">{children}</div>
    </section>
  );
}

export function About() {
  const pillars: { icon: LucideIcon; title: string; text: string }[] = [
    {
      icon: MonitorSmartphone,
      title: "Information Technology",
      text: "Building a strong foundation in IT systems, digital tools and modern workplace technology.",
    },
    {
      icon: BrainCircuit,
      title: "Artificial Intelligence",
      text: "Exploring AI fundamentals and prompt engineering to solve everyday and business problems.",
    },
    {
      icon: Lightbulb,
      title: "Digital Skills",
      text: "Confident with productivity software, collaboration platforms and digital communication.",
    },
    {
      icon: Target,
      title: "Business Technology",
      text: "Interested in how information systems support better decisions and organisational growth.",
    },
  ];

  return (
    <Section id="about">
      <SectionHeading
        eyebrow="About me"
        title="A dedicated learner building a career in technology"
        lead="I am a dedicated learner with a strong interest in Information Technology, Artificial Intelligence, Digital Skills and Business Technology. I am committed to ongoing professional development and enjoy approaching challenges with a practical, problem-solving mindset."
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2">
        {pillars.map((pillar, i) => (
          <Reveal key={pillar.title} delay={i * 80}>
            <article className="card-elevated h-full p-6">
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary/8 text-primary">
                <pillar.icon className="size-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pillar.text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Skills() {
  return (
    <Section id="skills" muted>
      <SectionHeading
        eyebrow="Skills"
        title="Technical and professional strengths"
        lead="A blend of practical digital tools and the people skills that make teams work well."
      />

      <div className="mt-14 grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
        <Reveal>
          <div className="card-elevated p-6 sm:p-8">
            <h3 className="text-lg font-semibold">Technical Skills</h3>
            <ul className="mt-6 space-y-5">
              {TECHNICAL_SKILLS.map((skill) => (
                <li key={skill.name}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-secondary">
                    <div
                      className="h-full rounded-full bg-[image:var(--gradient-accent)]"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="card-elevated h-full p-6 sm:p-8">
            <h3 className="text-lg font-semibold">Soft Skills</h3>
            <ul className="mt-6 space-y-3">
              {SOFT_SKILLS.map((skill) => (
                <li
                  key={skill}
                  className="flex items-center gap-3 rounded-lg border border-border bg-background px-4 py-3 text-sm font-medium"
                >
                  <BadgeCheck className="size-4 text-accent" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

export function Education() {
  return (
    <Section id="education">
      <SectionHeading
        eyebrow="Education"
        title="Training and academic journey"
        lead="Structured programmes and self-directed study that shaped my technical foundation."
      />

      <ol className="relative mt-14 space-y-8 border-l border-border pl-6 sm:pl-8">
        {EDUCATION.map((item, i) => (
          <Reveal as="li" key={item.title} delay={i * 90} className="relative">
            <span className="absolute -left-[1.85rem] top-2 inline-flex size-4 items-center justify-center rounded-full border-2 border-accent bg-background sm:-left-[2.35rem]" />
            <div className="card-elevated p-6">
              <div className="flex flex-wrap items-center gap-3">
                <GraduationCap className="size-5 text-primary" />
                <span className="rounded-full bg-primary/8 px-3 py-1 text-xs font-semibold text-primary">
                  {item.period}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
              <p className="text-sm font-medium text-accent">{item.org}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}

export function Certifications() {
  const icons: LucideIcon[] = [Award, FileBadge, BadgeCheck, MonitorSmartphone, Award];

  return (
    <Section id="certifications" muted>
      <SectionHeading
        eyebrow="Certifications"
        title="Certificates and completed programmes"
        lead="Evidence of continuous learning across AI, digital skills and business systems."
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {CERTIFICATIONS.map((cert, i) => {
          const Icon = icons[i % icons.length] as LucideIcon;
          return (
            <Reveal key={cert.title} delay={i * 70}>
              <article className="card-elevated h-full p-6">
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-[image:var(--gradient-navy)] text-primary-foreground">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold">{cert.title}</h3>
                <p className="text-xs font-medium uppercase tracking-wide text-accent">{cert.issuer}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{cert.detail}</p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Projects"
        title="Selected portfolio work"
        lead="Practical work completed during training and independent learning."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {PROJECTS.map((project, i) => (
          <Reveal key={project.title} delay={i * 90}>
            <article className="card-elevated flex h-full flex-col p-6">
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary/8 text-primary">
                <FolderGit2 className="size-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold">{project.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Experience() {
  return (
    <Section id="experience" muted>
      <SectionHeading
        eyebrow="Experience"
        title="Where I am growing right now"
        lead="Hands-on participation in a structured technology accelerator programme."
      />

      <div className="mt-14 grid gap-6">
        {EXPERIENCE.map((item, i) => (
          <Reveal key={item.role} delay={i * 90}>
            <article className="card-elevated p-6 sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-[image:var(--gradient-navy)] text-primary-foreground">
                    <Briefcase className="size-5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold">{item.role}</h3>
                    <p className="text-sm font-medium text-accent">{item.org}</p>
                  </div>
                </div>
                <span className="rounded-full bg-primary/8 px-3 py-1 text-xs font-semibold text-primary">
                  {item.period}
                </span>
              </div>
              <ul className="mt-6 space-y-3">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <BadgeCheck className="mt-0.5 size-4 shrink-0 text-accent" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
