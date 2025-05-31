import Link from "next/link";
import { getBlogList, type Blog } from "@/lib/microcms";

export default async function BlogPage() {
  let posts: Blog[] = [];
  
  try {
    const response = await getBlogList({ limit: 10 });
    posts = response.contents;
  } catch (error) {
    console.error('Failed to fetch blog posts:', error);
  }

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto glass-effect rounded-2xl p-8 neon-glow">
        <header className="text-center py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-gray-600">
            Thoughts, tutorials, and insights about development
          </p>
        </header>

        <div className="grid gap-8">
          {posts.length > 0 ? (
            posts.map((post) => (
              <article key={post.id} className="border rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags?.map((tag) => (
                    <span
                      key={tag.id}
                      className="bg-avatar-purple text-white text-sm px-3 py-1 rounded-full"
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
                
                <h2 className="text-2xl font-bold mb-3">
                  <Link
                    href={`/blog/${post.id}`}
                    className="hover:text-blue-600 transition-colors"
                  >
                    {post.title}
                  </Link>
                </h2>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt || (post.content ? post.content.replace(/<[^>]*>/g, '').substring(0, 200) + '...' : 'No excerpt available')}
                </p>
                
                <div className="flex justify-between items-center">
                  <time className="text-sm text-gray-500">
                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric"
                    })}
                  </time>
                  <Link
                    href={`/blog/${post.id}`}
                    className="text-avatar-teal hover:underline font-medium"
                  >
                    Read more →
                  </Link>
                </div>
              </article>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600">No blog posts found.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}