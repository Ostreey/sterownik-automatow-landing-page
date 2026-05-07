import Link from "next/link";
import type { BlogPost } from "@/lib/blog";
import type { Translations } from "@/lib/translations";
import type { Locale } from "@/lib/translations";

export default function BlogCard({
  post,
  t,
  locale,
}: {
  post: BlogPost;
  t: Translations;
  locale: Locale;
}) {
  const prefix = locale === "en" ? "/en" : "";

  return (
    <article className="p-6 rounded-xl bg-surface border border-surface-light hover:border-accent/30 transition-colors">
      <div className="text-xs text-muted mb-2">
        {t.blog.publishedOn} {post.date}
        {post.category && (
          <span className="ml-3 px-2 py-0.5 rounded bg-surface-light text-accent text-xs">
            {post.category}
          </span>
        )}
      </div>
      <h2 className="text-xl font-semibold mb-3">
        <Link
          href={`${prefix}/blog/${post.slug}`}
          className="hover:text-accent transition-colors"
        >
          {post.title}
        </Link>
      </h2>
      <p className="text-muted text-sm leading-relaxed mb-4">
        {post.description}
      </p>
      <Link
        href={`${prefix}/blog/${post.slug}`}
        className="text-accent text-sm font-medium hover:text-accent-hover transition-colors"
      >
        {t.blog.readMore} &rarr;
      </Link>
    </article>
  );
}
