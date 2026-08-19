import { buildTwitterImage, ogContentType, ogSize } from "@/lib/og-image";

export const alt = "Delivery Policy | Rayan";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return buildTwitterImage({
    eyebrow: "Delivery Policy",
    title: "Rayan",
    subtitle: "Delivery Modes And Timelines",
    accent: "primary",
  });
}
