import "server-only";
import type {
  BlogPost,
  GitHubOverviewPayload,
  GithubRepo,
  HackatimePayload,
} from "@/lib/portfolio-types";

const DEFAULT_GITHUB_USER =
  process.env.GITHUB_USER ??
  process.env.NEXT_PUBLIC_GITHUB_USER ??
  "Rayan-141";
const DEVTO_USER = "Rayan-141";
const HASHNODE_HOST = "rayan.hashnode.dev";
const GITHUB_CACHE_REVALIDATE_SECONDS = 60 * 60 * 12;

function resolveGithubUser(user?: string): string {
  const normalized = (user ?? DEFAULT_GITHUB_USER).trim();
  const isValid = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i.test(normalized);
  return isValid ? normalized : DEFAULT_GITHUB_USER;
}

function getGithubHeaders(): HeadersInit {
  const headers: HeadersInit = {
    Accept: "application/vnd.github+json",
  };

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  return headers;
}

async function getAuthenticatedGithubLogin(
  headers: HeadersInit,
): Promise<string | null> {
  if (!process.env.GITHUB_TOKEN) {
    return null;
  }

  const response = await fetch("https://api.github.com/user", {
    headers,
    cache: "force-cache",
    next: {
      revalidate: GITHUB_CACHE_REVALIDATE_SECONDS,
      tags: ["github-auth-user"],
    },
  });

  if (!response.ok) {
    return null;
  }

  const payload = (await response.json()) as { login?: string };
  return payload.login?.trim() || null;
}

function toHours(value: number): number {
  if (Number.isNaN(value)) return 0;
  return Math.max(0, value / 3600);
}

export async function getGithubRepos(user?: string): Promise<GithubRepo[]> {
  const username = resolveGithubUser(user);
  const headers = getGithubHeaders();
  const authenticatedLogin = await getAuthenticatedGithubLogin(headers);
  const canReadOwnerPrivateRepos =
    authenticatedLogin?.toLowerCase() === username.toLowerCase();

  const allRepos: GithubRepo[] = [];

  for (let page = 1; page <= 10; page += 1) {
    const endpoint = canReadOwnerPrivateRepos
      ? `https://api.github.com/user/repos?visibility=all&affiliation=owner&sort=updated&per_page=100&page=${page}`
      : `https://api.github.com/users/${username}/repos?sort=updated&per_page=100&type=owner&page=${page}`;

    const response = await fetch(endpoint, {
      headers,
      cache: "force-cache",
      next: {
        revalidate: GITHUB_CACHE_REVALIDATE_SECONDS,
        tags: [`github-repos-${username}`, `github-repos-${username}-p${page}`],
      },
    });

    if (!response.ok) {
      break;
    }

    const pageRepos = (await response.json()) as GithubRepo[];
    allRepos.push(...pageRepos);

    if (pageRepos.length < 100) {
      break;
    }
  }

  const dedupedById = new Map<number, GithubRepo>();
  for (const repo of allRepos) {
    dedupedById.set(repo.id, repo);
  }

  const filteredRepos = Array.from(dedupedById.values()).filter(
    (repo) => !repo.name.startsWith(".") && repo.name.toLowerCase() !== "rodos" && repo.name.toLowerCase() !== "portfolio",
  );

  const customWeatherWatch: GithubRepo = {
    id: 999999999,
    name: "Weather_Watch",
    full_name: "Rayan-141/Weather_Watch",
    description: "Weather Watch is a full-stack web application that delivers live weather information, 21-Day forecasts, and real-time alerts. Built with the MERN stack, it provides a beautiful, glassmorphism-styled dashboard for monitoring weather conditions worldwide.",
    language: "JavaScript",
    fork: false,
    archived: false,
    stargazers_count: 0,
    forks_count: 0,
    watchers_count: 0,
    html_url: "https://github.com/Rayan-141/Weather_Watch",
    homepage: "https://rayan-141.github.io/Weather_Watch/",
    topics: ["react", "nodejs", "express", "mongodb", "weather-api"],
    updated_at: "2026-08-19T00:00:00.000Z",
  };

  const wwIndex = filteredRepos.findIndex(r => r.name.toLowerCase() === "weather_watch");
  if (wwIndex === -1) {
    filteredRepos.unshift(customWeatherWatch);
  } else {
    filteredRepos[wwIndex].description = customWeatherWatch.description;
    filteredRepos[wwIndex].homepage = customWeatherWatch.homepage;
    filteredRepos[wwIndex].stargazers_count = filteredRepos[wwIndex].stargazers_count;
  }

  const customGatherGrid: GithubRepo = {
    id: 999999998,
    name: "GatherGrid-Live",
    full_name: "Rayan-141/GatherGrid-Live",
    description: "Design a GraphQL-based Event Ticket Booking System that allows users to browse events, check available seats, reserve them, and complete bookings with payments using Neo4j GraphDB and FastAPI.",
    language: "Python",
    fork: false,
    archived: false,
    stargazers_count: 0,
    forks_count: 0,
    watchers_count: 0,
    html_url: "https://github.com/Rayan-141/GatherGrid-Live",
    homepage: "https://gather-grid-live.vercel.app/",
    topics: ["graphql", "neo4j", "fastapi", "python"],
    updated_at: "2026-08-19T00:00:00.000Z",
  };

  const customDeepOcean: GithubRepo = {
    id: 999999997,
    name: "Deep_Ocean_Nexus",
    full_name: "Rayan-141/Deep_Ocean_Nexus_DevOps_Project",
    description: "A full-stack cloud-native DevOps project simulating a mission-critical Global Network Operations Center (NOC) for monitoring subsea fiber-optic telecommunication cables globally.",
    language: "Python",
    fork: false,
    archived: false,
    stargazers_count: 0,
    forks_count: 0,
    watchers_count: 0,
    html_url: "https://github.com/Rayan-141/Deep_Ocean_Nexus_DevOps_Project",
    homepage: "https://deepocean-nexus.onrender.com/",
    topics: ["docker", "kubernetes", "jenkins", "terraform", "prometheus", "grafana", "flask", "devops"],
    updated_at: "2026-08-19T00:00:00.000Z",
  };

  const ggIndex = filteredRepos.findIndex(r => r.name.toLowerCase() === "gathergrid-live");
  if (ggIndex === -1) {
    filteredRepos.unshift(customGatherGrid);
  } else {
    filteredRepos[ggIndex].description = customGatherGrid.description;
    filteredRepos[ggIndex].homepage = customGatherGrid.homepage;
    filteredRepos[ggIndex].stargazers_count = filteredRepos[ggIndex].stargazers_count;
  }

  const donIndex = filteredRepos.findIndex(r => r.name.toLowerCase().includes("deep_ocean_nexus"));
  if (donIndex === -1) {
    filteredRepos.unshift(customDeepOcean);
  } else {
    filteredRepos[donIndex].description = customDeepOcean.description;
    filteredRepos[donIndex].homepage = customDeepOcean.homepage;
    filteredRepos[donIndex].stargazers_count = filteredRepos[donIndex].stargazers_count;
  }

  const customDataLake: GithubRepo = {
    id: 999999996,
    name: "DataLake_BigData_AWS_Project",
    full_name: "Rayan-141/DataLake_BigData_AWS_Project",
    description: "An end-to-end Big Data pipeline and Data Lake architecture built on AWS, enabling scalable data ingestion, processing, and analytics.",
    language: "Python",
    fork: false,
    archived: false,
    stargazers_count: 0,
    forks_count: 0,
    watchers_count: 0,
    html_url: "https://github.com/Rayan-141/DataLake_BigData_AWS_Project",
    homepage: "https://docs.google.com/document/d/1ZoXt8zK7-e9JmOkTESks6rCYaw/edit?usp=sharing",
    topics: ["aws", "data-lake", "big-data", "s3", "athena", "glue"],
    updated_at: "2026-08-19T00:00:00.000Z",
  };

  const dlIndex = filteredRepos.findIndex(r => r.name.toLowerCase().includes("datalake_bigdata_aws_project"));
  if (dlIndex === -1) {
    filteredRepos.unshift(customDataLake);
  } else {
    filteredRepos[dlIndex].description = customDataLake.description;
    filteredRepos[dlIndex].homepage = customDataLake.homepage;
    filteredRepos[dlIndex].topics = customDataLake.topics;
    filteredRepos[dlIndex].stargazers_count = filteredRepos[dlIndex].stargazers_count;
  }

  return filteredRepos;
}

export async function getGithubOverview(
  githubUser?: string,
): Promise<GitHubOverviewPayload | null> {
  const username = resolveGithubUser(githubUser);
  const repos = await getGithubRepos(username);
  if (repos.length === 0) {
    return null;
  }

  const headers = getGithubHeaders();
  const authenticatedLogin = await getAuthenticatedGithubLogin(headers);
  const canReadOwnerPrivateRepos =
    authenticatedLogin?.toLowerCase() === username.toLowerCase();

  const userResponse = await fetch(
    canReadOwnerPrivateRepos
      ? "https://api.github.com/user"
      : `https://api.github.com/users/${username}`,
    {
      headers,
      cache: "force-cache",
      next: {
        revalidate: GITHUB_CACHE_REVALIDATE_SECONDS,
        tags: [`github-profile-${username}`],
      },
    },
  );

  const profile = userResponse.ok
    ? ((await userResponse.json()) as {
        login?: string;
        followers?: number;
        following?: number;
        public_repos?: number;
        total_private_repos?: number;
        owned_private_repos?: number;
      })
    : {};

  const responseDateHeader = userResponse.headers.get("date");
  const referenceDate = new Date(
    responseDateHeader ?? repos[0]?.updated_at ?? "1970-01-01T00:00:00Z",
  );
  const rangeEndDate = Number.isNaN(referenceDate.getTime())
    ? new Date("1970-01-01T00:00:00Z")
    : new Date(referenceDate);
  const commitYear = rangeEndDate.getUTCFullYear();
  rangeEndDate.setUTCHours(23, 59, 59, 999);
  const rangeStartDate = new Date(rangeEndDate);
  rangeStartDate.setUTCDate(rangeStartDate.getUTCDate() - 364);
  rangeStartDate.setUTCHours(0, 0, 0, 0);
  const rangeStart = rangeStartDate.toISOString();
  const rangeEnd = rangeEndDate.toISOString();
  let commitHistory: Array<{ date: string; commits: number }> = [];

  // Focus stats/charts on active owned projects.
  const projectRepos = repos.filter((repo) => !repo.fork && !repo.archived);

  // Use GraphQL contribution calendar when token is available for accurate yearly commits.
  if (process.env.GITHUB_TOKEN) {
    const contributionResponse = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          query ContributionCalendar($login: String!, $from: DateTime!, $to: DateTime!) {
            user(login: $login) {
              contributionsCollection(from: $from, to: $to) {
                contributionCalendar {
                  weeks {
                    contributionDays {
                      date
                      contributionCount
                    }
                  }
                }
              }
            }
          }
        `,
        variables: {
          login: username,
          from: rangeStart,
          to: rangeEnd,
        },
      }),
      cache: "force-cache",
      next: {
        revalidate: GITHUB_CACHE_REVALIDATE_SECONDS,
        tags: [`github-contributions-${username}-${commitYear}`],
      },
    });

    if (contributionResponse.ok) {
      const payload = (await contributionResponse.json()) as {
        data?: {
          user?: {
            contributionsCollection?: {
              contributionCalendar?: {
                weeks?: Array<{
                  contributionDays?: Array<{
                    date: string;
                    contributionCount: number;
                  }>;
                }>;
              };
            };
          };
        };
      };

      const days =
        payload.data?.user?.contributionsCollection?.contributionCalendar?.weeks
          ?.flatMap((week) => week.contributionDays ?? [])
          .filter((day) => typeof day.date === "string") ?? [];

      commitHistory = days.map((day) => ({
        date: day.date,
        commits: day.contributionCount,
      }));
    }
  }

  // Fallback: fetch commit activity from public REST API (no token needed)
  if (commitHistory.length === 0) {
    try {
      const topRepos = projectRepos
        .filter((r) => !r.fork)
        .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
        .slice(0, 5);

      const commitResults = await Promise.all(
        topRepos.map(async (repo) => {
          const res = await fetch(
            `https://api.github.com/repos/${repo.full_name}/stats/commit_activity`,
            {
              headers,
              cache: "force-cache",
              next: { revalidate: GITHUB_CACHE_REVALIDATE_SECONDS },
            },
          );
          if (!res.ok) return [];
          const weeks = (await res.json()) as Array<{
            week: number;
            total: number;
            days: number[];
          }>;
          if (!Array.isArray(weeks)) return [];
          return weeks.map((w) => ({
            date: new Date(w.week * 1000).toISOString().slice(0, 10),
            commits: w.total,
          }));
        }),
      );

      // Merge all repos' commit activity by date
      const mergedMap = new Map<string, number>();
      for (const entries of commitResults) {
        for (const { date, commits } of entries) {
          mergedMap.set(date, (mergedMap.get(date) ?? 0) + commits);
        }
      }
      commitHistory = Array.from(mergedMap.entries())
        .map(([date, commits]) => ({ date, commits }))
        .sort((a, b) => a.date.localeCompare(b.date));
    } catch {
      // silently ignore, commitHistory stays []
    }
  }

  const totalStars = projectRepos.reduce(
    (sum, repo) => sum + (repo.stargazers_count ?? 0),
    0,
  );
  const totalForks = projectRepos.reduce(
    (sum, repo) => sum + (repo.forks_count ?? 0),
    0,
  );
  const totalWatchers = projectRepos.reduce(
    (sum, repo) => sum + (repo.watchers_count ?? 0),
    0,
  );

  const topRepositories = [...projectRepos]
    .sort((a, b) => {
      // Sort by stars first; fall back to most recently updated when all stars are 0
      const starDiff = b.stargazers_count - a.stargazers_count;
      if (starDiff !== 0) return starDiff;
      return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
    })
    .slice(0, 7)
    .map((repo) => ({
      name: repo.name,
      stars: repo.stargazers_count,
    }));

  const languageMap = new Map<string, number>();
  for (const repo of projectRepos) {
    const language = repo.language?.trim();
    if (!language) {
      continue;
    }

    const value = languageMap.get(language) ?? 0;
    languageMap.set(language, value + 1);
  }

  const languages = Array.from(languageMap.entries())
    .sort((a, b) => b[1] - a[1])
    .map(([language, count]) => ({
      language,
      repos: count,
    }));

  const monthOrder = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const monthlyMap = new Map<string, number>();

  for (const day of commitHistory) {
    const date = new Date(day.date);
    if (Number.isNaN(date.getTime())) {
      continue;
    }

    const month = monthOrder[date.getUTCMonth()] ?? "Unknown";
    monthlyMap.set(month, (monthlyMap.get(month) ?? 0) + day.commits);
  }

  const monthlyActivity = monthOrder
    .filter((month) => monthlyMap.has(month))
    .map((month) => ({
      month,
      repos: monthlyMap.get(month) ?? 0,
    }));

  const updateDates = commitHistory.flatMap((entry) =>
    Array.from({ length: Math.max(0, entry.commits) }, () => entry.date),
  );

  const publicRepoCount = profile.public_repos ?? projectRepos.length;
  const privateRepoCount = canReadOwnerPrivateRepos
    ? (profile.owned_private_repos ?? profile.total_private_repos ?? 0)
    : 0;
  const profileTotalRepoCount = publicRepoCount + privateRepoCount;
  const totalRepositories = Math.max(
    profileTotalRepoCount,
    projectRepos.length,
  );

  return {
    username: profile.login ?? username,
    commitYear,
    commitRangeStart: rangeStart,
    commitRangeEnd: rangeEnd,
    followers: profile.followers ?? 0,
    following: profile.following ?? 0,
    publicRepos: publicRepoCount,
    totalRepositories,
    totalStars,
    totalForks,
    totalWatchers,
    topRepositories,
    languages,
    monthlyActivity,
    updateDates,
    commitHistory,
  };
}

async function fetchHashnodePosts(): Promise<BlogPost[]> {
  const query = `
    query PublicationPosts($host: String!) {
      publication(host: $host) {
        posts(first: 50) {
          edges {
            node {
              id
              title
              brief
              url
              publishedAt
              readTimeInMinutes
              tags {
                name
              }
            }
          }
        }
      }
    }
  `;

  const response = await fetch("https://gql.hashnode.com", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables: { host: HASHNODE_HOST } }),
    cache: "force-cache",
    next: { revalidate: 3600, tags: ["blogs", "hashnode"] },
  });

  if (!response.ok) return [];

  let payload: {
    data?: {
      publication?: {
        posts?: {
          edges?: Array<{
            node: {
              id: string;
              title: string;
              brief: string;
              url: string;
              publishedAt: string;
              readTimeInMinutes: number;
              tags: Array<{ name: string }>;
            };
          }>;
        };
      };
    };
  };

  try {
    const text = await response.text();
    payload = JSON.parse(text);
  } catch (error) {
    console.warn("Failed to parse Hashnode posts: API returned invalid JSON.");
    return [];
  }

  const edges = payload.data?.publication?.posts?.edges ?? [];
  return edges.map(({ node }) => ({
    id: node.id,
    title: node.title,
    excerpt: node.brief,
    url: node.url,
    source: "Hashnode",
    tags: node.tags.map((tag) => tag.name),
    publishedAt: node.publishedAt,
    readingMinutes: node.readTimeInMinutes,
  }));
}

async function fetchDevToPosts(): Promise<BlogPost[]> {
  const response = await fetch(
    `https://dev.to/api/articles?username=${DEVTO_USER}&per_page=100`,
    {
      cache: "force-cache",
      next: { revalidate: 3600, tags: ["blogs", "devto"] },
    },
  );

  if (!response.ok) return [];

  const payload = (await response.json()) as Array<{
    id: number;
    title: string;
    description: string;
    url: string;
    published_at: string;
    reading_time_minutes: number;
    tag_list: string[];
  }>;

  return payload.map((post) => ({
    id: `devto-${post.id}`,
    title: post.title,
    excerpt: post.description,
    url: post.url,
    source: "Dev.to",
    tags: post.tag_list,
    publishedAt: post.published_at,
    readingMinutes: post.reading_time_minutes,
  }));
}

async function fetchMediumPosts(): Promise<BlogPost[]> {
  return [];
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const [hashnode, devto, medium] = await Promise.all([
    fetchHashnodePosts(),
    fetchDevToPosts(),
    fetchMediumPosts(),
  ]);

  return [...hashnode, ...devto, ...medium].sort(
    (a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt),
  );
}

export async function getHackatimeStats(): Promise<HackatimePayload | null> {
  const hackatimeApiKey = process.env.HACKATIME_API_KEY;
  const apiKey = hackatimeApiKey;

  if (!apiKey) return null;

  const hackatimeBaseUrl = (
    process.env.HACKATIME_API_BASE_URL ?? "https://hackatime.hackclub.com"
  ).replace(/\/$/, "");

  const sevenDayUrl = `${hackatimeBaseUrl}/api/hackatime/v1/users/current/stats/last_7_days?api_key=${apiKey}`;
  const allTimeUrl = `${hackatimeBaseUrl}/api/hackatime/v1/users/current/all_time_since_today?api_key=${apiKey}`;
  const todayStatusUrl = `${hackatimeBaseUrl}/api/hackatime/v1/users/current/statusbar/today?api_key=${apiKey}`;

  const [sevenDayResponse, allTimeResponse, todayStatusResponse] =
    await Promise.all([
      fetch(sevenDayUrl, {
        cache: "force-cache",
        next: {
          revalidate: 1800,
          tags: ["coding-time", "coding-time-seven-days"],
        },
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }),
      fetch(allTimeUrl, {
        cache: "force-cache",
        next: {
          revalidate: 1800,
          tags: ["coding-time", "coding-time-total"],
        },
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }).catch(() => null),
      fetch(todayStatusUrl, {
        cache: "force-cache",
        next: {
          revalidate: 300,
          tags: ["coding-time", "coding-time-today"],
        },
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }).catch(() => null),
    ]);

  if (!sevenDayResponse.ok) {
    return null;
  }

  const sevenDay = (await sevenDayResponse.json()) as {
    data?: {
      username?: string;
      human_readable_daily_average_including_other_language?: string;
      human_readable_total_including_other_language?: string;
      human_readable_total?: string;
      human_readable_daily_average?: string;
      daily_average?: number;
      languages?: Array<{ name: string; total_seconds: number }>;
      days?: Array<{
        date: string;
        grand_total: {
          total_seconds: number;
        };
      }>;
      total_seconds?: number;
    };
  };

  const allTime = allTimeResponse?.ok
    ? ((await allTimeResponse.json()) as {
        data?: {
          total_seconds?: number;
          text?: string;
        };
      })
    : { data: { total_seconds: undefined } };

  const todayStatus = todayStatusResponse?.ok
    ? ((await todayStatusResponse.json()) as {
        data?: {
          grand_total?: {
            total_seconds?: number;
            text?: string;
          };
        };
      })
    : {
        data: {
          grand_total: {
            total_seconds: 0,
            text: "0h today",
          },
        },
      };

  const daysFromStats = (sevenDay.data?.days ?? []).map((day) => ({
    day: new Date(day.date).toLocaleDateString("en-US", { weekday: "short" }),
    hours: Number(toHours(day.grand_total?.total_seconds ?? 0).toFixed(2)),
  }));

  const hackatimeLast7Days = await (async () => {
    const now = new Date();
    const requests = Array.from({ length: 7 }, (_, index) => {
      const date = new Date(now);
      date.setUTCDate(date.getUTCDate() - (6 - index));

      const start = `${date.toISOString().slice(0, 10)}T00:00:00Z`;
      const end = `${date.toISOString().slice(0, 10)}T23:59:59Z`;

      return fetch(
        `${hackatimeBaseUrl}/api/v1/my/heartbeats?start_time=${encodeURIComponent(start)}&end_time=${encodeURIComponent(end)}&api_key=${apiKey}`,
        {
          cache: "force-cache",
          next: {
            revalidate: 1800,
            tags: ["coding-time", "coding-time-heartbeats"],
          },
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        },
      )
        .then(async (response) => {
          if (!response.ok) {
            return {
              day: date.toLocaleDateString("en-US", { weekday: "short" }),
              hours: 0,
            };
          }

          const payload = (await response.json()) as {
            total_seconds?: number;
          };

          return {
            day: date.toLocaleDateString("en-US", { weekday: "short" }),
            hours: Number(toHours(payload.total_seconds ?? 0).toFixed(2)),
          };
        })
        .catch(() => ({
          day: date.toLocaleDateString("en-US", { weekday: "short" }),
          hours: 0,
        }));
    });

    return Promise.all(requests);
  })();

  const last7Days =
    daysFromStats.length > 0 ? daysFromStats : hackatimeLast7Days;

  const topLanguagesFromStats = (sevenDay.data?.languages ?? [])
    .slice(0, 5)
    .map((lang) => ({
      name: lang.name,
      hours: Number(toHours(lang.total_seconds).toFixed(1)),
    }));

  const topLanguages = topLanguagesFromStats;

  const last7DaysTotalSeconds = Math.round(
    last7Days.reduce((sum, day) => sum + day.hours * 3600, 0),
  );
  const last7DaysTotalHours = `${toHours(last7DaysTotalSeconds).toFixed(1)}h`;

  let totalSeconds =
    sevenDay.data?.total_seconds ??
    allTime.data?.total_seconds ??
    last7DaysTotalSeconds;
  let totalHours = `${toHours(totalSeconds).toFixed(1)}h`;

  const hackatimeUsername =
    sevenDay.data?.username?.trim() ||
    process.env.HACKATIME_USERNAME ||
    DEFAULT_GITHUB_USER;

  if (hackatimeUsername) {
    const allTimeHackclubResponse = await fetch(
      `${hackatimeBaseUrl}/api/v1/users/${encodeURIComponent(hackatimeUsername)}/stats?api_key=${apiKey}`,
      {
        cache: "force-cache",
        next: {
          revalidate: 1800,
          tags: ["coding-time", "coding-time-hackclub-total"],
        },
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      },
    ).catch(() => null);

    if (allTimeHackclubResponse?.ok) {
      const allTimeHackclubPayload = (await allTimeHackclubResponse.json()) as {
        data?: {
          grand_total?: {
            total_seconds?: number;
            text?: string;
          };
          total_seconds?: number;
          human_readable_total?: string;
          text?: string;
        };
      };

      const allTimeHackclubSeconds =
        allTimeHackclubPayload.data?.grand_total?.total_seconds ??
        allTimeHackclubPayload.data?.total_seconds ??
        totalSeconds;
      totalSeconds = allTimeHackclubSeconds;
      totalHours =
        allTimeHackclubPayload.data?.human_readable_total ??
        allTimeHackclubPayload.data?.grand_total?.text ??
        allTimeHackclubPayload.data?.text ??
        `${toHours(allTimeHackclubSeconds).toFixed(1)}h`;
    }
  }

  const hasActivity =
    last7Days.some((day) => day.hours > 0) ||
    topLanguages.some((language) => language.hours > 0);

  const dailyAverageHours = Number(
    toHours(sevenDay.data?.daily_average ?? 0).toFixed(2),
  );
  const activeDaysLast7 = last7Days.filter((day) => day.hours > 0).length;
  const todaySeconds = todayStatus.data?.grand_total?.total_seconds ?? 0;
  const todayHours =
    todayStatus.data?.grand_total?.text ??
    `${toHours(todaySeconds).toFixed(1)}h today`;

  return {
    totalHours,
    last7DaysTotalHours,
    dailyAverage:
      sevenDay.data?.human_readable_daily_average_including_other_language ??
      sevenDay.data?.human_readable_daily_average ??
      `${toHours(sevenDay.data?.daily_average ?? 0).toFixed(2)} h/day`,
    dailyAverageHours,
    todayHours,
    todaySeconds,
    activeDaysLast7,
    topLanguages,
    last7Days,
    hasActivity,
  };
}
