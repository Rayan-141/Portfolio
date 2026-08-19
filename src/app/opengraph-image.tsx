import { buildOgImage, ogContentType, ogSize } from "@/lib/og-image";

export const alt = "Rayan Portfolio v5 preview";
export const size = ogSize;
export const contentType = ogContentType;

export default function OpenGraphImage() {
  return buildOgImage({
    eyebrow: "Rayan Portfolio v5",
    title: "Rayan",
    subtitle: "Founder | Full Stack Developer | Open-Sourcerer",
    accent: "primary",
  });
}
