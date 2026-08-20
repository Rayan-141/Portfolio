"use client";

import { animate } from "animejs";
import { Github, Linkedin, Mail } from "@/components/retroui/icons";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import {
  AboutTimeline,
  type TimelineItem,
} from "@/components/portfolio/about-timeline";
import { Button } from "@/components/retroui/Button";
import { Card } from "@/components/retroui/Card";
import { githubUrl, linkedinUrl, xUrl } from "@/lib/site-config";

type AboutPageClientProps = {
  timelineItems: TimelineItem[];
};

export function AboutPageClient({ timelineItems }: AboutPageClientProps) {
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = aboutRef.current;
    if (!root) {
      return;
    }

    const revealTargets = root.querySelectorAll("[data-about-reveal]");


    animate(revealTargets, {
      opacity: [0, 1],
      translateY: [18, 0],
      delay: (_: any, index: number) => index * 70,
      duration: 320,
      ease: "outQuad",
    });

  }, []);

  return (
    <div ref={aboutRef} className="space-y-8 pb-16">
      <section
        className="border-4 border-black bg-card p-6 shadow-retro-lg md:p-8"
        data-about-reveal
      >
        <div className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="mx-auto w-full max-w-xs border-4 border-black bg-primary p-3 shadow-retro-md">
            <div className="relative flex items-center justify-center border-4 border-black bg-card overflow-hidden aspect-square" style={{minHeight: "250px"}}>
              <Image 
                src="/profile-image.png" 
                alt="Profile Image" 
                fill 
                className="object-cover" 
                priority
              />
            </div>
            <div className="mt-3 flex items-center justify-center gap-3">
              <Link
                href={githubUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="retro-social-icon"
                aria-label="GitHub profile"
              >
                <Github className="h-4 w-4" />
              </Link>
              <Link
                href="mailto:rayanrawat141@gmail.com"
                className="retro-social-icon"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </Link>
              <Link
                href={linkedinUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="retro-social-icon"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div>
            <h1 className="font-pixel text-3xl uppercase sm:text-4xl md:text-5xl">
              About
            </h1>
            <div className="mt-5 space-y-4 text-sm font-medium leading-relaxed sm:text-base md:text-lg">
              <p>
                Hey there, I&apos;m Rayan, a self-taught full stack
                developer, founder, entrepreneur, freelancer, and open-source
                builder. I have been coding since childhood, and that early
                curiosity became a long-term focus on building useful products
                that solve real business problems.
              </p>
              <p>
                I help startups and businesses scale with developer-first tools,
                robust product systems, and practical architecture that stays
                reliable, maintainable, and outcome-driven as teams grow.
              </p>
              <p>
                I work across frontend, backend, and automation layers, explore
                AI and machine learning in production-focused use cases, and
                ship in public because measurable progress matters more than
                hidden drafts.
              </p>
            </div>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                className="w-full border-4 border-black shadow-retro-sm sm:w-auto uppercase"
              >
                <Link href="/project">Explore Projects</Link>
              </Button>

            </div>
          </div>
        </div>
      </section>

      <section
        className="border-4 border-black bg-primary p-6 shadow-retro-lg md:p-8"
        data-about-reveal
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="font-display text-3xl uppercase text-primary-foreground sm:text-4xl">
            Experience Journey
          </h2>
          <Button
            asChild
            variant="secondary"
            className="w-full border-4 border-black shadow-retro-sm sm:w-auto uppercase"
          >
            <Link
              href={linkedinUrl}
              target="_blank"
              rel="noreferrer noopener"
            >
              View it on Linkedin
            </Link>
          </Button>
        </div>
        <AboutTimeline items={timelineItems} />
      </section>
    </div>
  );
}
