"use client";

import { animate } from "animejs";
import { useEffect, useRef } from "react";
import { Card } from "@/components/retroui/Card";

import Image from "next/image";
import Link from "next/link";

export function EducationPageClient() {
  const educationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = educationRef.current;
    if (!root) {
      return;
    }

    const revealTargets = root.querySelectorAll("[data-edu-reveal]");

    animate(revealTargets, {
      opacity: [0, 1],
      translateY: [18, 0],
      delay: (_: any, index: number) => index * 70,
      duration: 320,
      ease: "outQuad",
    });
  }, []);

  const educationData = [
    {
      degree: "Bachelor of Technology - BTech Computer Science Engineering",
      institution: "ITM Skills University",
      period: "2024 - 2028",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMcK05QcZYJ3QZjS5q___zreKOa2J7Uk3G9A&s",
      link: "https://www.google.com/search?q=ITM+Skills+University+B.Tech+CSE+&sca_esv=0397056f1320c253&biw=1470&bih=835&sxsrf=ANbL-n4DsUXyV_TGXDxA_-TZSiMcIljpkA%3A1777617141047&ei=9Uj0aZK3AvSu4-EPnpCasAw&ved=0ahUKEwjShfTxu5eUAxV01zgGHR6IBsYQ4dUDCBM&uact=5&oq=ITM+Skills+University+B.Tech+CSE+&gs_lp=Egxnd3Mtd2l6LXNlcnAiIUlUTSBTa2lsbHMgVW5pdmVyc2l0eSBCLlRlY2ggQ1NFIDIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjILEAAYgAQYigUYhgMyCxAAGIAEGIoFGIYDMgsQABiABBiKBRiGAzILEAAYgAQYigUYhgMyBRAAGO8FMgUQABjvBTIIEAAYgAQYogRIji9Q7ANY2ipwAXgBkAEAmAGOAqAB-RCqAQUwLjguNLgBA8gBAPgBAZgCDaACyRHCAgoQABhHGNYEGLADwgINEAAYgAQYigUYQxiwA8ICFxAuGNwGGLgGGNoGGNgCGMgDGLAD2AEBwgIOEC4YrwEYxwEYgAQYjgXCAgoQABiABBiKBRhDwgIFEAAYgATCAh0QLhivARjHARiABBiOBRiXBRjcBBjeBBjgBNgBAcICDhAuGIAEGMcBGK8BGI4FwgIdEC4YgAQYxwEYrwEYjgUYlwUY3AQY3gQY4ATYAQHCAggQABgWGB4YCpgDAIgGAZAGEroGBggBEAEYGZIHBTEuOC40oAeATbIHBTAuOC40uAfEEcIHBjAuMy4xMMgHOIAIAQ&sclient=gws-wiz-serp",
      location: "Navi Mumbai (Kharghar) , Maharashtra , India",
    },
    {
      degree: "Higher Secondary Education (PCM + Computer Science)",
      institution: "NES Ratnam College of Arts, Science and Commerce",
      period: "2022 - 2024",
      logo: "/nes_logo.jpg",
      link: "https://www.google.com/search?q=NES+Ratnam+College+of+Arts%2C+Science+and+Commerce&biw=1470&bih=835&sca_esv=0397056f1320c253&sxsrf=ANbL-n4C4uUsvkLi-qgQfT2KMbTOhgjeMA%3A1777617256039&ei=aEn0acOIAprC1e8P7eK06QY&ved=0ahUKEwjD3N6ovJeUAxUaYfUHHW0xLW0Q4dUDCBM&uact=5&oq=NES+Ratnam+College+of+Arts%2C+Science+and+Commerce&gs_lp=Egxnd3Mtd2l6LXNlcnAiME5FUyBSYXRuYW0gQ29sbGVnZSBvZiBBcnRzLCBTY2llbmNlIGFuZCBDb21tZXJjZTIFEC4YgAQyBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMggQABgWGB4YCjIUEC4YgAQYlwUY3AQY3gQY4ATYAQJIvgdQ8wRY8wRwAngBkAEAmAGMAaABjAGqAQMwLjG4AQPIAQD4AQH4AQKYAgOgAqUBqAIUwgIWEC4YgAQYigUYQxjnBhjqAhi0AtgBAcICHBAuGIAEGIoFGEMY5wYYxwEYrwEY6gIYtALYAQHCAhYQABiABBiKBRhDGOcGGOoCGLQC2AEBwgIQEAAYAxiPARjqAhi0AtgBAsICEBAuGAMYjwEY6gIYtALYAQKYAwnxBa3y72WzEqjtugYECAEYB7oGBggCEAEYCpIHAzIuMaAH4wqyBwMwLjG4B5gBwgcFMi0yLjHIBxSACAE&sclient=gws-wiz-serp",
      location: "Mumbai (Bhandup West) , Maharashtra , India",
    },
    {
      degree: "Primary & Secondary Education",
      institution: "St. Pius X High School",
      period: "2011 - 2022",
      logo: "/stpius_logo.png",
      link: "https://www.google.com/search?q=ST+Pius+X+High+School&sca_esv=0397056f1320c253&biw=1470&bih=835&sxsrf=ANbL-n4DallwQmCL3S_zIrQNGxLjfSeQ0Q%3A1777617155893&ei=A0n0aYSdNrHy1e8P-pWj6Qw&ved=0ahUKEwjEqv74u5eUAxUxefUHHfrKKM0Q4dUDCBM&uact=5&oq=ST+Pius+X+High+School&gs_lp=Egxnd3Mtd2l6LXNlcnAiFVNUIFBpdXMgWCBIaWdoIFNjaG9vbDIOEC4YgAQYxwEYrwEYjgUyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgsQLhiABBjHARivATIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyHRAuGIAEGMcBGK8BGI4FGJcFGNwEGN4EGOAE2AECSOxKUNEDWOJIcAF4AZABAZgBhQOgAcweqgEIMC4xNi4yLjO4AQPIAQD4AQGYAhWgAuQcqAIKwgIXEC4YgAQYigUYkQIY5wYY6gIYtALYAQHCAh0QLhiABBiKBRiRAhjnBhjHARivARjqAhi0AtgBAcICEBAAGAMYjwEY6gIYtALYAQHCAhAQLhgDGI8BGOoCGLQC2AEBwgIKEC4YgAQYigUYQ8ICEBAuGIAEGIoFGEMYxwEYrwHCAgoQABiABBiKBRhDwgIIEAAYgAQYsQPCAgsQLhiABBjHARjRA8ICDRAAGIAEGIoFGEMYsQPCAg4QABiABBiKBRixAxiDAcICGRAuGIAEGIoFGEMYlwUY3AQY3gQY4ATYAQLCAgsQLhiABBiKBRiRAsICDhAuGIAEGLEDGMcBGNEDwgIIEC4YgAQYsQPCAhoQLhiABBiKBRiRAhiXBRjcBBjeBBjgBNgBAsICERAuGIMBGJECGLEDGIAEGIoFwgIQEC4YQxiDARixAxiABBiKBcICChAuGEMYgAQYigXCAhAQLhiABBiKBRhDGLEDGIMBwgIXEC4YgAQYsQMYxwEYrwEYmAUYngUYmQXCAiAQLhiDARiRAhixAxiABBiKBRiXBRjcBBjeBBjgBNgBAsICDRAuGIAEGIoFGEMYsQPCAg4QLhivARjHARiABBiOBcICGRAuGEMYgAQYigUYlwUY3AQY3gQY3wTYAQLCAh0QLhivARjHARiABBiOBRiXBRjcBBjeBBjgBNgBAsICBRAuGIAEmAMH8QU-Ti24KrIcCLoGBAgBGAe6BgYIAhABGBSSBwgxLjE1LjMuMqAH7JUDsgcIMC4xNS4zLjK4B9wcwgcGMi0xOS4yyAd4gAgB&sclient=gws-wiz-serp",
      location: "Mumbai (Mulund West) , Maharashtra , India",
    },
  ];

  return (
    <div ref={educationRef} className="space-y-8 pb-16">
      <section
        className="border-4 border-black bg-card p-6 shadow-retro-lg md:p-8"
        data-edu-reveal
      >
        <h1 className="font-pixel text-3xl uppercase sm:text-4xl md:text-5xl">
          Education
        </h1>
        <p className="mt-5 text-sm font-medium leading-relaxed sm:text-base md:text-lg">
          Education is not the learning of facts, but the training of the mind to think.
        </p>
      </section>

      <section className="space-y-4" data-edu-reveal>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {educationData.map((edu) => (
            <Link
              key={edu.degree}
              href={edu.link}
              target="_blank"
              rel="noreferrer noopener"
              className="block group h-full"
            >
              <Card className="flex flex-col h-full border-4 border-black bg-secondary shadow-retro-md transition-transform duration-200 group-hover:-translate-y-1 group-hover:shadow-retro-lg">
                <Card.Header className="flex-row items-center gap-4 sm:gap-6">
                  <div className="relative h-20 w-20 sm:h-24 sm:w-24 flex-shrink-0 dark:bg-white dark:rounded-xl">
                    <Image
                      src={edu.logo}
                      alt={`${edu.institution} logo`}
                      fill
                      className="object-contain mix-blend-multiply [clip-path:inset(2px)] dark:p-1"
                    />
                  </div>
                  <div>
                    <Card.Title className="font-display text-2xl uppercase text-secondary-foreground leading-tight">
                      {edu.degree}
                    </Card.Title>
                    <p className="text-xl font-black uppercase text-secondary-foreground mt-1">
                      {edu.institution}
                    </p>
                  </div>
                </Card.Header>
                <Card.Content className="mt-auto pt-4 flex flex-row items-center justify-between gap-4 flex-wrap">
                  <p className="font-black uppercase text-sm tracking-widest text-primary">
                    {edu.period}
                  </p>
                  <p className="font-bold text-sm text-secondary-foreground/80 uppercase">
                    {edu.location}
                  </p>
                </Card.Content>

              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
