import type { Metadata } from "next";
import { siteUrl } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Experience & Certifications",
  description: "My professional experience and certifications.",
  alternates: {
    canonical: "/experience",
  },
};

export default function ExperiencePage() {
  return (
    <div className="space-y-6 pb-16">
      <section className="border-4 border-black bg-card p-4 shadow-retro-lg sm:p-6 md:p-8">
        <h1 className="font-pixel text-3xl uppercase sm:text-4xl md:text-5xl">
          Experience & Certifications
        </h1>
        <p className="mt-3 max-w-3xl text-sm font-medium leading-relaxed sm:text-base">
          My professional journey, roles, and the certifications I've earned along the way.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="font-display text-2xl uppercase sm:text-3xl">
          Experience
        </h2>
        <div className="border-4 border-black bg-card p-4 shadow-retro-sm">
          <p className="font-medium text-sm sm:text-base text-muted-foreground">
            Experience timeline will be added here.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="font-display text-2xl uppercase sm:text-3xl">
          Certifications
        </h2>
        <div className="border-4 border-black bg-card p-4 shadow-retro-sm">
          <p className="font-medium text-sm sm:text-base text-muted-foreground">
            Certifications will be added here.
          </p>
        </div>
      </section>
    </div>
  );
}
