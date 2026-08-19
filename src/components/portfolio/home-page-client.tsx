"use client";

import { Github, Linkedin, Twitter } from "@/components/retroui/icons";
import Link from "next/link";
import { BlogGrid } from "@/components/portfolio/blog-grid";
import { GithubOverviewBento } from "@/components/portfolio/github-overview-bento";
import { HackatimeBento } from "@/components/portfolio/hackatime-bento";
import Image from "next/image";


import { ProjectsGrid } from "@/components/portfolio/projects-grid";
import { StatsMarquee } from "@/components/portfolio/stats-marquee";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/retroui/Button";
import { Card } from "@/components/retroui/Card";
import { links } from "@/lib/link-items";
import type {
  BlogPost,
  GitHubOverviewPayload,
  GithubRepo,
  HackatimePayload,
} from "@/lib/portfolio-types";
import {
  donationUrl,
  githubUrl,
  linkHubUrl,
  linkedinUrl,
  siteHost,
  sponsorUrl,
  xUrl,
} from "@/lib/site-config";






type HomePageClientProps = {
  initialRepos?: GithubRepo[];
  initialPosts?: BlogPost[];
  initialHackatime?: HackatimePayload | null;
  initialGitHubOverview?: GitHubOverviewPayload | null;
};

export function HomePageClient({
  initialRepos,
  initialPosts,
  initialHackatime,
  initialGitHubOverview,
}: HomePageClientProps) {
  const hackatime = initialHackatime ?? null;
  const githubOverview = initialGitHubOverview ?? null;


  return (
    <div className="-mt-3 space-y-8 pb-16 sm:mt-0 sm:space-y-14">
      <StatsMarquee />

      <section
        className="relative overflow-visible border-4 border-black bg-card shadow-retro-lg"
        data-home-reveal
      >
        <div
          aria-hidden
          className="retro-stripes pointer-events-none absolute inset-0 opacity-20"
        />


        <div className="relative z-10 overflow-hidden border-4 border-black bg-card">
          <div className="flex items-center justify-between border-b-4 border-black bg-[#d7d7d7] px-2 py-2 text-black sm:px-3 dark:bg-[#2f2f2f] dark:text-white">
            <p className="font-pixel text-[11px] font-black sm:text-xs">
              {siteHost}
            </p>
            <div className="flex gap-2">
              <span className="inline-flex h-5 w-5 items-center justify-center border-2 border-black bg-[#ffd146] text-[#5c3d00] font-black text-[10px] shadow-retro-sm sm:h-6 sm:w-6 sm:text-xs">
                -
              </span>
              <span className="inline-flex h-5 w-5 items-center justify-center border-2 border-black bg-[#52d46b] text-[#0d4f1a] font-black text-[10px] shadow-retro-sm sm:h-6 sm:w-6 sm:text-xs">
                +
              </span>
              <span className="inline-flex h-5 w-5 items-center justify-center border-2 border-black bg-[#ff6e6e] text-[#6b1010] font-black text-[10px] shadow-retro-sm sm:h-6 sm:w-6 sm:text-xs">
                x
              </span>
            </div>
          </div>

          <div className="grid gap-4 p-2 sm:gap-6 sm:p-5 md:grid-cols-1 md:gap-8 md:p-10">
            <div className="space-y-4 md:space-y-6">
              <h1 className="font-display font-bold leading-[1.1] mb-2 sm:mb-4">
                <span className="block text-[clamp(2rem,8vw,3.5rem)] sm:text-[clamp(3.2rem,6.5vw,4.5rem)] text-black dark:text-white uppercase">
                  B.TECH CSE{" "}
                  <span className="text-[#a01313] dark:text-[#f87171]">
                    <TypeAnimation
                      sequence={[
                        "STUDENT",
                        2000,
                        "STUDENT |",
                        1000,
                        "",
                        500,
                      ]}
                      wrapper="span"
                      cursor={true}
                      repeat={Infinity}
                    />
                  </span>
                </span>
              </h1>
              <p className="max-w-2xl border-l-4 border-black pl-3 text-xs font-medium leading-relaxed sm:pl-4 sm:text-sm md:text-lg">
                I build responsive, high-performance web applications and scalable
                backend systems. As a passionate Full Stack Developer, I specialize
                in modern web technologies including React, Node.js, Express, and AWS.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  size="lg"
                  asChild
                  className="w-full border-4 border-black px-4 py-2 text-sm font-black uppercase tracking-wide shadow-retro retro-press sm:w-auto sm:px-6 sm:py-3 sm:text-base"
                >
                  <Link href="https://drive.google.com/file/d/1rZiXl562q7aVyk1kJ2nO85YBAq8ixTiw/view" target="_blank" rel="noopener noreferrer">Resume</Link>
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  asChild
                  className="w-full border-4 border-black px-4 py-2 text-sm font-black uppercase tracking-wide shadow-retro retro-press sm:w-auto sm:px-6 sm:py-3 sm:text-base"
                >
                  <Link href="/project">View Projects</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>










      <section className="space-y-4" data-home-reveal>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="font-display text-3xl uppercase sm:text-4xl">
            Featured Projects
          </h2>
          <Button
            asChild
            variant="secondary"
            className="w-full sm:w-auto uppercase"
          >
            <Link href="/project">View All</Link>
          </Button>
        </div>
        <ProjectsGrid compact limit={3} initialRepos={initialRepos} />
      </section>

      <section className="space-y-4" data-home-reveal>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="font-display text-3xl uppercase sm:text-4xl">
            Education
          </h2>
          <Button
            asChild
            variant="secondary"
            className="w-full sm:w-auto uppercase"
          >
            <Link href="/education">View Details</Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {[
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
          ].map((edu) => (
            <Link
              key={edu.degree}
              href={edu.link}
              target="_blank"
              rel="noreferrer noopener"
              className="block group h-full"
            >
              <Card className="flex flex-col h-full border-4 border-black bg-card shadow-retro-md transition-transform duration-200 group-hover:-translate-y-1 group-hover:shadow-retro-lg retro-press">
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
                    <Card.Title className="font-display text-xl uppercase leading-tight">
                      {edu.degree}
                    </Card.Title>
                    <p className="text-lg font-black uppercase text-black dark:text-white mt-1">
                      {edu.institution}
                    </p>
                  </div>
                </Card.Header>
                <Card.Content className="mt-auto pt-4 flex flex-row items-center justify-between gap-4 flex-wrap">
                  <p className="font-black uppercase text-sm text-primary">
                    {edu.period}
                  </p>
                  <p className="font-bold text-sm text-muted-foreground uppercase">
                    {edu.location}
                  </p>
                </Card.Content>

              </Card>
            </Link>
          ))}

        </div>
      </section>



      <section className="space-y-4" data-home-reveal>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="font-display text-3xl uppercase sm:text-4xl">
            Github Stats
          </h2>
          <Button
            asChild
            variant="secondary"
            className="w-full border-4 border-black shadow-retro-sm sm:w-auto uppercase"
          >
            <Link
              href={githubUrl}
              target="_blank"
              rel="noreferrer noopener"
            >
              View Full GitHub Profile
            </Link>
          </Button>
        </div>
        <p className="font-bold uppercase text-muted-foreground">
          Followers, following, stars, forks, watchers, repositories, and GitHub
          activity analytics.
        </p>
        <GithubOverviewBento stats={githubOverview ?? null} />
      </section>


      <section className="space-y-4" data-home-reveal>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="font-display text-3xl uppercase sm:text-4xl">
            Connect Hub
          </h2>
          <Button
            asChild
            variant="secondary"
            className="w-full border-4 border-black shadow-retro-sm sm:w-auto uppercase"
          >
            <Link
              href={linkHubUrl}
              target="_blank"
              rel="noreferrer noopener"
            >
              Open Link Hub
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {links.slice(0, 9).map((item) => (
            <Card
              key={item.href}
              className="flex h-full w-full flex-col border-4 border-black bg-card shadow-retro-md retro-press"
            >
              <Card.Header className="min-h-36 flex-1">
                <Card.Title className="font-display text-xl uppercase">
                  {item.name}
                </Card.Title>
                <Card.Description className="mt-2 text-base leading-relaxed">
                  {item.description}
                </Card.Description>
              </Card.Header>
              <Card.Content className="pt-0">
                <Button
                  asChild
                  className="w-full border-4 border-black shadow-retro-sm uppercase"
                >
                  <Link
                    href={item.href}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Open Link
                  </Link>
                </Button>
              </Card.Content>
            </Card>
          ))}
        </div>
      </section>


    </div>
  );
}
