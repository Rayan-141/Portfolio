import { buildTwitterImage, ogContentType, ogSize } from "@/lib/og-image";

export const alt = "Contact Rayan";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return buildTwitterImage({
    eyebrow: "Contact",
    title: "Rayan",
    subtitle: "Projects | Consulting | Collaboration",
    accent: "primary",
  });
}
