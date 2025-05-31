import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ryoya Tamura - Developer Portfolio",
  description: "Portfolio and blog of Ryoya Tamura (@simochee)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="border-b glass-effect-strong sticky top-0 z-50 shadow-lg">
          <div className="max-w-6xl mx-auto px-8 py-5">
            <div className="flex justify-between items-center">
              <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-avatar-pink to-avatar-purple bg-clip-text text-transparent">
                Ryoya Tamura
              </Link>
              <div className="flex gap-8">
                <Link href="/" className="font-semibold text-gray-800 hover:text-avatar-pink transition-all duration-200 relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[2px] after:bg-avatar-pink after:transition-all after:duration-200 hover:after:w-full">
                  Home
                </Link>
                <Link href="/portfolio" className="font-semibold text-gray-800 hover:text-avatar-purple transition-all duration-200 relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[2px] after:bg-avatar-purple after:transition-all after:duration-200 hover:after:w-full">
                  Portfolio
                </Link>
                <Link href="/blog" className="font-semibold text-gray-800 hover:text-avatar-teal transition-all duration-200 relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[2px] after:bg-avatar-teal after:transition-all after:duration-200 hover:after:w-full">
                  Blog
                </Link>
              </div>
            </div>
          </div>
        </nav>
        {children}
        <footer className="border-t glass-effect mt-16">
          <div className="max-w-6xl mx-auto px-8 py-12">
            <div className="text-center">
              <p className="text-gray-600 mb-4">
                © 2024 Ryoya Tamura. All rights reserved.
              </p>
              <div className="flex justify-center gap-6">
                <a
                  href="https://github.com/simochee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/simochee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="mailto:simochee@gmail.com"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Email
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
