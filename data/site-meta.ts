export const siteMeta = {
  ga4Id: "G-GY6J90DB6S",
  name: "007 First Light Guide",
  shortName: "First Light Guide",
  description:
    "Master 007 First Light with S-Rank routes, gadget builds, mission breakdowns, and TacSim leaderboard strategies.",
  baseUrl: "https://007-first-light-guide.vercel.app",
  slogan: "Earn Your License to Kill",
  heroSubtitle:
    "Master 007 First Light — S-Rank Routes, Gadget Builds & TacSim Strategies",
  discordUrl: "https://discord.gg/mTn9ZRGRgm",
  redditLinks: [
    "https://www.reddit.com/r/JamesBond/",
    "https://www.reddit.com/r/stealthgames/",
  ],
  game: {
    title: "007: First Light",
    releaseDate: "2026-05-27",
    developer: "IO Interactive",
    platforms: ["PC", "PS5", "Xbox Series X|S"],
    playtime: "~15 hours",
    missionCount: 9,
  },
} as const;

export type SiteMeta = typeof siteMeta;
