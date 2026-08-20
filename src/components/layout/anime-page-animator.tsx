"use client";

import { animate, stagger } from "animejs";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export function AnimePageAnimator() {
  const pathname = usePathname();
  const hasHydratedRef = useRef(false);

  useEffect(() => {
    if (!pathname) {
      return;
    }

    if (!hasHydratedRef.current) {
      hasHydratedRef.current = true;
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const timer = window.setTimeout(() => {
      const targets = Array.from(
        document.querySelectorAll("main [data-anim='item']"),
      ) as HTMLElement[];

      if (targets.length === 0) {
        return;
      }

      animate(targets, {
        opacity: [0, 1],
        translateY: [14, 0],
        delay: stagger(20, { start: 50 }),
        duration: 300,
        ease: "outCubic",
      });
    }, 40);

    return () => {
      window.clearTimeout(timer);
    };
  }, [pathname]);

  return null;
}
