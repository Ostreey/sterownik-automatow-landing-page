import { notFound } from "next/navigation";
import { getBlogPost, getBlogPosts } from "@/lib/blog";
import { getTranslations } from "@/lib/translations";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import MdxContent from "@/components/blog/MdxContent";
import Link from "next/link";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const posts = getBlogPosts("pl");
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug, "pl");
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug, "pl");
  if (!post) notFound();

  const t = getTranslations("pl");

  return (
    <>
      <NavBar t={t} locale="pl" />
      <main className="pt-24 pb-20">
        <article className="max-w-3xl mx-auto px-4">
          <Link
            href="/blog"
            className="text-accent text-sm hover:text-accent-hover transition-colors mb-8 inline-block"
          >
            &larr; {t.blog.backToBlog}
          </Link>

          <header className="mb-10">
            <div className="text-sm text-muted mb-3">
              {t.blog.publishedOn} {post.date}
              {post.category && (
                <span className="ml-3 px-2 py-0.5 rounded bg-surface text-accent text-xs">
                  {post.category}
                </span>
              )}
            </div>
            <h1 className="text-3xl md:text-4xl font-mono font-bold leading-tight">
              {post.title}
            </h1>
          </header>

          <MdxContent source={post.content} />
        </article>
      </main>
      <Footer t={t} locale="pl" />
    </>
  );
}
