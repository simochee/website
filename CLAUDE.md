# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Turbopack (runs on http://localhost:3000)
- `npm run build` - Create production build and verify all routes compile
- `npm run start` - Start production server
- `npm run lint` - Run Next.js ESLint

## Project Architecture

This is a portfolio and blog website built with Next.js 15 App Router, TypeScript, and Tailwind CSS v4.

### Site Structure
- **Homepage (`/`)** - Consolidated personal information including introduction, skills, experience, featured projects, recent blog posts, and contact CTA
- **Portfolio (`/portfolio`)** - Project showcase with featured and other projects, including descriptions, technologies, and links
- **Blog (`/blog`)** - Blog post listing with tags, dates, and excerpts
- **Blog Posts (`/blog/[slug]`)** - Dynamic blog post pages with hardcoded sample content

### Content Management
- **Blog posts** are currently hardcoded in `/app/blog/[slug]/page.tsx` with sample content for:
  - `getting-started-with-nextjs`
  - `typescript-best-practices` 
  - `tailwind-css-tips`
- **Portfolio projects** are hardcoded in `/app/portfolio/page.tsx` with sample data
- **Personal information** (skills, experience) is hardcoded in homepage data arrays

### Key Technologies
- **Next.js 15.3.3** with App Router for file-based routing
- **React 19** with server components
- **TypeScript 5** with strict mode
- **Tailwind CSS v4** with PostCSS integration
- **Geist fonts** (sans and mono) with `next/font` optimization

### Layout System
- **Global layout** (`app/layout.tsx`) includes sticky navigation, footer, and font setup
- **Navigation** links to Home, Portfolio, and Blog (About route was removed)
- **Responsive design** with mobile-first Tailwind classes throughout

### Development Notes
- Uses Turbopack for faster development builds
- All routes are statically generated except dynamic blog posts
- TypeScript params in dynamic routes require `Promise<>` wrapper for Next.js 15
- Sample content includes placeholder images and links that need customization