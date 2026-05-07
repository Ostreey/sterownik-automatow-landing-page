import { getBlogPosts } from "@/lib/blog";
import { getTranslations } from "@/lib/translations";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import BlogCard from "@/components/blog/BlogCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Poradniki, instrukcje i wiedza o sterownikach do odkurzaczy na myjniach bezdotykowych.",
};

export default function BlogPage() {
  const t = getTranslations("pl");
  const posts = getBlogPosts("pl");

  return (
    <>
      <NavBar t={t} locale="pl" />
      <main className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-mono font-bold mb-4">
              {t.blog.title}
            </h1>
            <p className="text-muted text-lg">{t.blog.subtitle}</p>
          </div>

          {posts.length === 0 ? (
            <p className="text-center text-muted">
              Artykuly pojawia sie wkrotce. Wracaj!
            </p>
          ) : (
            <div className="grid gap-6">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} t={t} locale="pl" />
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer t={t} locale="pl" />
    </>
  );
}
