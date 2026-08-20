import type { Metadata } from "next";
import { AboutPageClient } from "@/components/pages/about-page-client";
import type { TimelineItem } from "@/components/portfolio/about-timeline";
import { rayanDevUrl, siteUrl } from "@/lib/site-config";

const aboutOgImageUrl = `${siteUrl}/about/opengraph-image`;

export const metadata: Metadata = {
  title: "About",
  description: "The journey, roles, and milestones of Rayan.",
  alternates: {
    canonical: "/about",
  },
  keywords: [
    "about rayan",
    "developer journey",
    "open source maintainer",
    "full stack experience",
  ],
  openGraph: {
    title: "About Rayan",
    description:
      "Journey, milestones, and experience across full stack, open source, and AI delivery.",
    url: `${siteUrl}/about`,
    type: "profile",
    images: [
      {
        url: aboutOgImageUrl,
        width: 1200,
        height: 630,
        alt: "About Rayan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Rayan",
    description:
      "Journey, milestones, and experience across full stack, open source, and AI delivery.",
    images: [aboutOgImageUrl],
  },
};

function serializeJsonLd(value: unknown): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

function formatPeriod(start: string, end: string): string {
  const startDate = new Date(`${start} 01`);
  const endDate = end.toLowerCase() === "present" ? new Date() : new Date(`${end} 01`);

  let months = (endDate.getFullYear() - startDate.getFullYear()) * 12;
  months += endDate.getMonth() - startDate.getMonth();
  months += 1;

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  let durationObj = "";
  if (years > 0) {
    durationObj += `${years} yr${years > 1 ? "s" : ""}`;
  }
  if (remainingMonths > 0) {
    if (durationObj) durationObj += " ";
    durationObj += `${remainingMonths} mo${remainingMonths > 1 ? "s" : ""}`;
  }
  if (!durationObj) {
    durationObj = "1 mo";
  }

  return `${start} - ${end} · ${durationObj}`;
}

const timelineItems: TimelineItem[] = [
  {
    period: formatPeriod("May 2026", "Jul 2026"),
    title: "Web Developer Intern",
    description: "InAmigos Foundation (Remote)",
    highlights: [
      "Completed a 2-month remote internship focusing on web development.",
    ],
  },
];

export default function AboutPage() {
  const aboutJsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Rayan",
    url: `${siteUrl}/about`,
    mainEntity: {
      "@type": "Person",
      name: "Rayan",
      url: siteUrl,
      jobTitle: "Founder, Entrepreneur, Full Stack Developer",
    },
  };

  return (
    <>
      <script type="application/ld+json">{serializeJsonLd(aboutJsonLd)}</script>
      <AboutPageClient timelineItems={timelineItems} />
    </>
  );
}
