import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogDetail, type Blog } from "@/lib/microcms";

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  let post: Blog | null = null;
  
  try {
    post = await getBlogDetail(slug);
  } catch (error) {
    console.error('Failed to fetch blog post:', error);
    notFound();
  }

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-3xl mx-auto glass-effect rounded-2xl p-8 neon-glow">
        <Link
          href="/blog"
          className="inline-flex items-center text-avatar-teal hover:underline mb-8"
        >
          ← Back to Blog
        </Link>

        <article>
          <header className="mb-12">
            {post.category && (
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-avatar-purple text-white text-sm px-3 py-1 rounded-full">
                  {post.category.name}
                </span>
              </div>
            )}
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {post.title}
            </h1>
            
            <time className="text-gray-600">
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric"
              })}
            </time>
          </header>

          <div className="prose prose-lg max-w-none">
            <div
              className="blog-content"
              dangerouslySetInnerHTML={{
                __html: post.body
              }}
            />
          </div>
        </article>
      </div>
    </div>
  );
}