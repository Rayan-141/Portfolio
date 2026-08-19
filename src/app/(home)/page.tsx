import type { Metadata } from "next";
import { HomePageClient } from "@/components/portfolio/home-page-client";
import {
  getBlogPosts,
  getGithubOverview,
  getGithubRepos,
  getHackatimeStats,
} from "@/lib/server/portfolio-data";
import {
  donationUrl,
  rayanDevUrl,
  githubUrl,
  hackatimeUrl,
  linkedinUrl,
  linkHubUrl,
  ogImageUrl,
  siteUrl,
  sponsorUrl,
  xUrl,
} from "@/lib/site-config";

export const metadata: Metadata = {
  title: {
    absolute: "Rayan",
  },
  description:
    "Rayan portfolio: Data Scientist, Analyst & Full Stack Engineer.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Rayan portfolio",
    "full stack developer",
    "startup engineer",
    "open source projects",
    "software services",
  ],
  openGraph: {
    title: "Rayan | Data Scientist, Analyst & Full Stack Engineer",
    description: "Data-driven product engineering and analytics.",
    url: siteUrl,
    type: "website",
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "Rayan Portfolio Home",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rayan",
    description: "Data-driven product engineering and analytics.",
    images: [ogImageUrl],
  },
};

function serializeJsonLd(value: unknown): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

export default async function HomePage() {
  const [initialRepos, initialPosts, initialHackatime, initialGitHubOverview] =
    await Promise.all([
      getGithubRepos(),
      getBlogPosts(),
      getHackatimeStats(),
      getGithubOverview(),
    ]);

  const homepageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Rayan Portfolio",
    url: siteUrl,
    description: "Data Scientist, Analyst & Full Stack Engineer portfolio.",
    mainEntity: {
      "@type": "Person",
      name: "Rayan",
      url: siteUrl,
      sameAs: [
        githubUrl,
        linkedinUrl,
        xUrl,
        hackatimeUrl,
        linkHubUrl,
        rayanDevUrl,
      ],
    },
    significantLink: [linkHubUrl, sponsorUrl, donationUrl, rayanDevUrl],
  };

  const profileStatsJsonLd = initialGitHubOverview
    ? {
        "@context": "https://schema.org",
        "@type": "Dataset",
        name: "Rayan GitHub Portfolio Stats",
        description:
          "Live GitHub repository, stars, forks, and watcher metrics.",
        creator: {
          "@type": "Person",
          name: "Rayan",
        },
        distribution: {
          "@type": "DataDownload",
          contentUrl: `${siteUrl}/api/portfolio/github-overview`,
          encodingFormat: "application/json",
        },
      }
    : null;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(homepageJsonLd) }}
      />
      {profileStatsJsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(profileStatsJsonLd) }}
        />
      ) : null}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(breadcrumbJsonLd) }}
      />
      <HomePageClient
        initialRepos={initialRepos}
        initialPosts={initialPosts}
        initialHackatime={initialHackatime}
        initialGitHubOverview={initialGitHubOverview}
      />
    </>
  );
}
