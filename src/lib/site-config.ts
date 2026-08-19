const DEFAULT_SITE_URL = "https://rayan.me";

function normalizeSiteUrl(rawUrl: string): string {
  const normalized = rawUrl.startsWith("http") ? rawUrl : `https://${rawUrl}`;

  try {
    const parsed = new URL(normalized);
    parsed.pathname = "/";
    parsed.search = "";
    parsed.hash = "";
    return parsed.toString().replace(/\/$/, "");
  } catch {
    return DEFAULT_SITE_URL;
  }
}

export const siteUrl = normalizeSiteUrl(
  process.env.NEXT_PUBLIC_SITE_URL ?? process.env.SITE_URL ?? DEFAULT_SITE_URL,
);

export const siteHost = new URL(`${siteUrl}/`).host;

export const rayanDevUrl = "https://rayan.me";
export const linkHubUrl = "https://links.rayan.me";
export const githubUrl = "https://github.com/Rayan-1737";
export const githubSnakeGraphUrl =
  "https://raw.githubusercontent.com/Rayan-1737/Rayan-1737/output/github-contribution-grid-snake.svg";
export const linkedinUrl = "https://www.linkedin.com/in/rayan-rawat-22bb40315/";
export const xUrl = "https://x.com/rayan_";
export const hackatimeUrl =
  "https://heatmap.shymike.dev/?id=30609&timezone=UTC";
export const sponsorUrl = "https://github.com/sponsors/Rayan-1737";
export const donationUrl = "https://pay.rayan.me/";
export const ogImageUrl = `${siteUrl}/opengraph-image`;
