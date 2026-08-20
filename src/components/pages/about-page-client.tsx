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
          <div className="mx-auto w-full max-w-[340px] h-fit border-4 border-black bg-primary p-3 shadow-retro-md">
            <div className="relative flex items-center justify-center border-4 border-black bg-card overflow-hidden aspect-[4/5]">
              <Image 
                src="/profile-image.png" 
                alt="Profile Image" 
                fill 
                className="object-cover object-top" 
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
                I am a <strong>Full-Stack Developer</strong> with skills in <strong>HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB, SQL, and AWS</strong>. I also work with <strong>Git, GitHub, REST APIs, JWT authentication, and cloud deployment</strong>.
              </p>
              <p>
                I completed a <strong>2-month Web Developer internship at InAmigos Foundation (May–July 2026)</strong>, where I gained professional experience. I am also learning <strong>Machine Learning</strong> and exploring <strong>DevOps and System Design</strong>.
              </p>
              <p>
                My goal is to get an <strong>internship or entry-level role</strong> as a Full-Stack Developer, ML Engineer, or Software Developer, where I can build real-world projects and grow my skills.
              </p>
              <p>
                Outside technology, I enjoy <strong>football and swimming</strong>. I also have a strong interest in <strong>finance, investing, trading, Forex, and Crypto</strong>. In the future, I would like to explore the connection between <strong>technology and finance, especially FinTech and trading technology</strong>.
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
