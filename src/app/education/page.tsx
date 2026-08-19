import type { Metadata } from "next";
import { EducationPageClient } from "@/components/pages/education-page-client";
import { siteUrl } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Education",
  description: "Educational background and academic journey of Rayan.",
  alternates: {
    canonical: "/education",
  },
  keywords: [
    "education rayan",
    "academic background",
    "information technology",
    "university",
  ],
  openGraph: {
    title: "Education | Rayan",
    description: "Educational background and academic journey.",
    url: `${siteUrl}/education`,
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Education | Rayan",
    description: "Educational background and academic journey.",
  },
};

function serializeJsonLd(value: unknown): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

export default function EducationPage() {
  const educationJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: "Education | Rayan",
    url: `${siteUrl}/education`,
    mainEntity: {
      "@type": "Person",
      name: "Rayan",
      url: siteUrl,
      alumniOf: [
        {
          "@type": "EducationalOrganization",
          name: "ITM Group of Institutions",
        },
        {
          "@type": "EducationalOrganization",
          name: "NES Ratnam College of Arts, Science and Commerce",
        },
        {
          "@type": "EducationalOrganization",
          name: "St. Pius X High School",
        },
      ],
    },
  };

  return (
    <>
      <script type="application/ld+json">{serializeJsonLd(educationJsonLd)}</script>
      <EducationPageClient />
    </>
  );
}
