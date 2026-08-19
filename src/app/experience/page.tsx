import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Experience",
  description: "My professional experience.",
  alternates: {
    canonical: "/experience",
  },
};

export default function ExperiencePage() {
  return (
    <div className="space-y-6 pb-16">
      <section className="border-4 border-black bg-card p-4 shadow-retro-lg sm:p-6 md:p-8">
        <h1 className="font-pixel text-3xl uppercase sm:text-4xl md:text-5xl">
          Experience
        </h1>
        <p className="mt-3 max-w-3xl text-sm font-medium leading-relaxed sm:text-base">
          My professional journey and the roles I've taken on.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="font-display text-2xl uppercase sm:text-3xl">
          Career Timeline
        </h2>
        
        {/* InAmigos Foundation Internship */}
        <div className="border-4 border-black bg-card p-4 shadow-retro-sm md:p-6 relative transition-transform hover:-translate-y-1 hover:shadow-retro-md">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            <div className="shrink-0 border-4 border-black overflow-hidden bg-white w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center relative">
              <Image 
                src="/inamigos_light.jpeg" 
                alt="InAmigos Foundation Logo Light" 
                fill 
                className="object-contain p-1 block dark:hidden"
              />
              <Image 
                src="/inamigos_dark.jpeg" 
                alt="InAmigos Foundation Logo Dark" 
                fill 
                className="object-contain p-1 hidden dark:block bg-black"
              />
            </div>
            
            <div className="flex-1 space-y-2">
              <div>
                <h3 className="font-display text-xl font-bold uppercase tracking-tight text-black dark:text-white sm:text-2xl">
                  Web Developer <span className="text-sm font-medium tracking-normal text-muted-foreground uppercase">(Internship)</span>
                </h3>
                <p className="font-pixel text-xs sm:text-sm text-primary font-bold mt-1">
                  InAmigos Foundation
                </p>
              </div>
              <div className="flex flex-wrap gap-2 text-xs font-black uppercase sm:text-sm">
                <span className="flex items-center gap-1 bg-[#d7d7d7] dark:bg-[#2f2f2f] px-2 py-1 text-black dark:text-white border-2 border-black">
                  Remote
                </span>
                <span className="flex items-center gap-1 bg-[#d7d7d7] dark:bg-[#2f2f2f] px-2 py-1 text-black dark:text-white border-2 border-black">
                  May 2026 - July 2026 (2 Months)
                </span>
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}
