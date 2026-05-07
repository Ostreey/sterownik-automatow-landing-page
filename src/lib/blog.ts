import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Locale } from "./translations";

const contentDir = path.join(process.cwd(), "src/content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  keywords: string[];
  category: string;
  image?: string;
  content: string;
}

export function getBlogPosts(locale: Locale): BlogPost[] {
  const dir = path.join(contentDir, locale);
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));

  return files
    .map((file) => {
      const slug = file.replace(".mdx", "");
      const raw = fs.readFileSync(path.join(dir, file), "utf-8");
      const { data, content } = matter(raw);

      return {
        slug,
        title: data.title || slug,
        description: data.description || "",
        date: data.date || "",
        author: data.author || "",
        keywords: data.keywords || [],
        category: data.category || "",
        image: data.image || undefined,
        content,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogPost(
  slug: string,
  locale: Locale
): BlogPost | undefined {
  const filePath = path.join(contentDir, locale, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return undefined;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title || slug,
    description: data.description || "",
    date: data.date || "",
    author: data.author || "",
    keywords: data.keywords || [],
    category: data.category || "",
    image: data.image || undefined,
    content,
  };
}
