import Link from "next/link";

export default function BlogPage() {
  const posts = [
    {
      slug: "getting-started-with-nextjs",
      title: "Getting Started with Next.js",
      excerpt: "Learn how to build modern web applications with Next.js and React.",
      date: "2024-03-15",
      tags: ["Next.js", "React", "JavaScript"]
    },
    {
      slug: "typescript-best-practices",
      title: "TypeScript Best Practices",
      excerpt: "Essential TypeScript patterns and practices for better code quality.",
      date: "2024-03-10",
      tags: ["TypeScript", "Development", "Best Practices"]
    },
    {
      slug: "tailwind-css-tips",
      title: "Tailwind CSS Pro Tips",
      excerpt: "Advanced techniques to make the most of Tailwind CSS in your projects.",
      date: "2024-03-05",
      tags: ["Tailwind CSS", "CSS", "Design"]
    }
  ];

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-gray-600">
            Thoughts, tutorials, and insights about development
          </p>
        </header>

        <div className="grid gap-8">
          {posts.map((post) => (
            <article key={post.slug} className="border rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <h2 className="text-2xl font-bold mb-3">
                <Link
                  href={`/blog/${post.slug}`}
                  className="hover:text-blue-600 transition-colors"
                >
                  {post.title}
                </Link>
              </h2>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {post.excerpt}
              </p>
              
              <div className="flex justify-between items-center">
                <time className="text-sm text-gray-500">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                  })}
                </time>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-blue-600 hover:underline font-medium"
                >
                  Read more →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}