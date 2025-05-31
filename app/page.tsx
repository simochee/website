import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <main className="max-w-4xl mx-auto">
        <section className="py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hello, I'm <span className="text-blue-600">Your Name</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            A passionate developer creating amazing digital experiences.
            Welcome to my portfolio and blog.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/portfolio"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              View Portfolio
            </Link>
            <Link
              href="/blog"
              className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Read Blog
            </Link>
          </div>
        </section>

        <section className="py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="h-32 bg-gray-200 rounded mb-4"></div>
                <h3 className="text-xl font-semibold mb-2">Project {i}</h3>
                <p className="text-gray-600 mb-4">A brief description of this amazing project.</p>
                <Link href="/portfolio" className="text-blue-600 hover:underline">
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Latest Blog Posts</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2].map((i) => (
              <article key={i} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2">Blog Post {i}</h3>
                <p className="text-gray-600 mb-4">An interesting article about development, design, or technology.</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">March {i}, 2024</span>
                  <Link href="/blog" className="text-blue-600 hover:underline">
                    Read more →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
