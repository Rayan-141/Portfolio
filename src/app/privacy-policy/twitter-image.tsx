import { buildTwitterImage, ogContentType, ogSize } from "@/lib/og-image";

export const alt = "Privacy Policy | Rayan";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return buildTwitterImage({
    eyebrow: "Privacy Policy",
    title: "Rayan",
    subtitle: "Data Use And Protection",
    accent: "secondary",
  });
}
