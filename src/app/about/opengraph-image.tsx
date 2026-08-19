import { buildOgImage, ogContentType, ogSize } from "@/lib/og-image";

export const alt = "About Rayan";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return buildOgImage({
    eyebrow: "About",
    title: "About Rayan",
    subtitle: "Founder | Full Stack Developer | Open-Sourcerer",
    accent: "accent",
  });
}
