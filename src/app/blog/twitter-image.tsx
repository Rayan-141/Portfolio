import { buildTwitterImage, ogContentType, ogSize } from "@/lib/og-image";

export const alt = "Blog by Rayan";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return buildTwitterImage({
    eyebrow: "Blog",
    title: "Rayan",
    subtitle: "Product Notes | Engineering",
    accent: "secondary",
  });
}
