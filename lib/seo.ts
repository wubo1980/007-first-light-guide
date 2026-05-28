import type { Metadata } from "next";

import { siteMeta } from "@/data/site-meta";

export interface MetadataInput {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  other?: Record<string, string>;
}

/**
 * 构建统一的页面元信息，确保标题、描述和社交分享字段一致。
 */
export function buildMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  other,
}: MetadataInput): Metadata {
  const url = new URL(path, siteMeta.baseUrl).toString();

  return {
    title,
    description,
    keywords,
    ...(other ? { other } : {}),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteMeta.name,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

/**
 * 将 JSON-LD 对象安全序列化为可注入脚本的字符串，避免意外的 HTML 注入。
 */
export function stringifyJsonLd(data: object): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
