import { buildOgImage, ogContentType, ogSize } from "@/lib/og-image";

export const alt = "Contact Rayan";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return buildOgImage({
    eyebrow: "Contact",
    title: "Build With Rayan",
    subtitle: "Projects | Consulting | Delivery",
    accent: "primary",
  });
}
