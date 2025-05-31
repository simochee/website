import Link from "next/link";
import { notFound } from "next/navigation";

const posts = {
  "getting-started-with-nextjs": {
    title: "Getting Started with Next.js",
    date: "2024-03-15",
    tags: ["Next.js", "React", "JavaScript"],
    content: `
# Getting Started with Next.js

Next.js is a powerful React framework that makes building web applications easier and more efficient. In this post, we'll explore the key features that make Next.js a great choice for your next project.

## What is Next.js?

Next.js is a React framework that provides additional structure, features, and optimizations for your application. It's built by Vercel and has become one of the most popular frameworks for React development.

## Key Features

### 1. App Router
The new App Router provides a more intuitive way to organize your application with file-based routing.

### 2. Server Components
React Server Components allow you to render components on the server, reducing the JavaScript bundle size.

### 3. Built-in Optimization
Next.js automatically optimizes images, fonts, and scripts for better performance.

## Getting Started

To create a new Next.js application:

\`\`\`bash
npx create-next-app@latest my-app
cd my-app
npm run dev
\`\`\`

That's it! You now have a running Next.js application.
    `
  },
  "typescript-best-practices": {
    title: "TypeScript Best Practices",
    date: "2024-03-10",
    tags: ["TypeScript", "Development", "Best Practices"],
    content: `
# TypeScript Best Practices

TypeScript has revolutionized JavaScript development by adding static type checking. Here are some best practices to help you write better TypeScript code.

## 1. Use Strict Mode

Always enable strict mode in your \`tsconfig.json\`:

\`\`\`json
{
  "compilerOptions": {
    "strict": true
  }
}
\`\`\`

## 2. Prefer Type Inference

Let TypeScript infer types when possible:

\`\`\`typescript
// Good
const name = "John";
const age = 30;

// Unnecessary
const name: string = "John";
const age: number = 30;
\`\`\`

## 3. Use Union Types

Union types are powerful for handling multiple possible types:

\`\`\`typescript
type Status = "loading" | "success" | "error";
\`\`\`

These practices will help you write more maintainable and type-safe code.
    `
  },
  "tailwind-css-tips": {
    title: "Tailwind CSS Pro Tips",
    date: "2024-03-05",
    tags: ["Tailwind CSS", "CSS", "Design"],
    content: `
# Tailwind CSS Pro Tips

Tailwind CSS is a utility-first CSS framework that can dramatically speed up your development process. Here are some advanced tips to level up your Tailwind game.

## 1. Custom Components with @apply

Create reusable components using the @apply directive:

\`\`\`css
.btn-primary {
  @apply bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded;
}
\`\`\`

## 2. Responsive Design

Use responsive prefixes for mobile-first design:

\`\`\`html
<div class="w-full md:w-1/2 lg:w-1/3">
  <!-- Content -->
</div>
\`\`\`

## 3. Dark Mode Support

Enable dark mode in your \`tailwind.config.js\`:

\`\`\`javascript
module.exports = {
  darkMode: 'class',
  // ...
}
\`\`\`

Then use dark mode variants:

\`\`\`html
<div class="bg-white dark:bg-gray-800">
  <!-- Content -->
</div>
\`\`\`

These tips will help you build more sophisticated and maintainable designs with Tailwind CSS.
    `
  }
};

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts[slug as keyof typeof posts];

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/blog"
          className="inline-flex items-center text-blue-600 hover:underline mb-8"
        >
          ← Back to Blog
        </Link>

        <article>
          <header className="mb-12">
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
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {post.title}
            </h1>
            
            <time className="text-gray-600">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric"
              })}
            </time>
          </header>

          <div className="prose prose-lg max-w-none">
            <div
              dangerouslySetInnerHTML={{
                __html: post.content
                  .split('\n')
                  .map(line => {
                    if (line.startsWith('# ')) {
                      return `<h1 class="text-3xl font-bold mt-8 mb-4">${line.slice(2)}</h1>`;
                    }
                    if (line.startsWith('## ')) {
                      return `<h2 class="text-2xl font-bold mt-6 mb-3">${line.slice(3)}</h2>`;
                    }
                    if (line.startsWith('### ')) {
                      return `<h3 class="text-xl font-bold mt-4 mb-2">${line.slice(4)}</h3>`;
                    }
                    if (line.startsWith('```')) {
                      return line.includes('```bash') || line.includes('```json') || line.includes('```typescript') || line.includes('```css') || line.includes('```html') || line.includes('```javascript')
                        ? `<pre class="bg-gray-100 p-4 rounded-lg overflow-x-auto"><code>`
                        : `</code></pre>`;
                    }
                    if (line.trim() === '') {
                      return '<br>';
                    }
                    return `<p class="mb-4 leading-relaxed">${line}</p>`;
                  })
                  .join('')
              }}
            />
          </div>
        </article>
      </div>
    </div>
  );
}