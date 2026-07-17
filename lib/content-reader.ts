import { promises as fs } from "fs";
import path from "path";
import type { GuideArticle, GuideCategory } from "@/data/guides";

const CONTENT_DIR = path.join(process.cwd(), "content");

export type ArticleIndexEntry = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  publishedAt: string;
  readTime: string;
  featured: boolean;
};

export async function getIndex() {
  const raw = await fs.readFile(path.join(CONTENT_DIR, "index.json"), "utf-8");
  return JSON.parse(raw);
}

export async function getGuideBySlug(slug: string): Promise<GuideArticle | null> {
  try {
    const raw = await fs.readFile(path.join(CONTENT_DIR, "articles", `${slug}.json`), "utf-8");
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export async function getCategories(): Promise<{ slug: string; name: string }[]> {
  const raw = await fs.readFile(path.join(CONTENT_DIR, "categories.json"), "utf-8");
  return JSON.parse(raw);
}
