import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "./data";
import cvAsset from "@/assets/sinethemba-lokwe-cv.pdf.asset.json";

const cv = cvAsset.url;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled ? "border-b border-border bg-background/85 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a
          href="#home"
          className={cn(
            "font-display text-base font-bold tracking-tight",
            scrolled ? "text-foreground" : "text-primary-foreground",
          )}
        >
          Sinethemba<span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-accent",
                  scrolled ? "text-muted-foreground" : "text-primary-foreground/80",
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" variant={scrolled ? "default" : "onNavy"} className="hidden sm:inline-flex">
            <a href="/sinethemba-lokwe-cv.txt" download>
              Download CV
            </a>
          </Button>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "inline-flex h-9 w-9 items-center justify-center rounded-md lg:hidden",
              scrolled ? "text-foreground" : "text-primary-foreground",
            )}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-border bg-background lg:hidden">
          <ul className="mx-auto grid max-w-6xl gap-1 px-5 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <Button asChild size="sm" className="mt-2 w-full">
                <a href="/sinethemba-lokwe-cv.txt" download>
                  Download CV
                </a>
              </Button>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
