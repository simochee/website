# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Turbopack (runs on http://localhost:3000)
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run Next.js ESLint

## Project Architecture

This is a Next.js 15 application using the App Router architecture with TypeScript and Tailwind CSS v4.

### Key Structure
- **App Router**: Uses `app/` directory structure instead of `pages/`
- **TypeScript**: Fully typed with strict mode enabled
- **Tailwind CSS v4**: Modern utility-first CSS framework with PostCSS integration
- **Font Optimization**: Uses Geist fonts (sans and mono) with automatic optimization via `next/font`

### Import Aliases
- `@/*` - Maps to the project root directory

### Core Dependencies
- React 19
- Next.js 15.3.3
- Tailwind CSS 4
- TypeScript 5

### Layout System
- Root layout in `app/layout.tsx` defines global HTML structure and font variables
- Page components in `app/page.tsx` and subdirectories for routing
- Automatic dark mode support through Tailwind CSS classes

### Development Notes
- Development server uses Turbopack for faster builds
- Hot reload enabled for instant feedback during development
- TypeScript configuration includes Next.js plugin for enhanced type checking