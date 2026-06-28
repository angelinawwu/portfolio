'use client';

import Link from 'next/link';
import CaseStudyHero from '@/components/CaseStudyHero';
import { ArrowUpRight } from '@phosphor-icons/react';

export default function GoodreadsWrappedPage() {
  let cardIndex = 0;

  return (
    <div className="min-h-screen bg-black p-4 md:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <div
          className="project-card mb-8"
          style={{ '--card-index': cardIndex++ } as React.CSSProperties}
        >
          <Link href="/" className="sidebar-link">
            ← Back to projects
          </Link>
        </div>

        <CaseStudyHero
          slug="goodreads-wrapped"
          details={{
            role: "Designer, Engineer",
            timeline: ["August – December 2025"],
            team: ["Myself!"],
            tools: "Next.js (TypeScript, Tailwind, Motion.dev), Figma, Vercel"
          }}
          cardIndex={cardIndex++}
        />

        {/* Quick Links */}
        <section
          className="project-card mb-12"
          style={{ '--card-index': cardIndex++ } as React.CSSProperties}
        >
          <div className="flex flex-wrap gap-4 text-sm geist-mono-font uppercase">
            <a
              href="https://goodreadswrapped.com"
              target="_blank"
              rel="noopener noreferrer"
              className="sidebar-link"
            >
              Live site
              <ArrowUpRight size={16} className="inline ml-1" />
            </a>
            <a
              href="https://github.com/angelinawwu/goodreads-wrapped"
              target="_blank"
              rel="noopener noreferrer"
              className="sidebar-link"
            >
              GitHub
              <ArrowUpRight size={16} className="inline ml-1" />
            </a>
          </div>
        </section>

        {/* The Challenge */}
        <section
          className="project-card mb-12 pt-8 border-t border-faded-white"
          style={{ '--card-index': cardIndex++ } as React.CSSProperties}
        >
          <h2 className="text-2xl md:text-3xl bit-apple-font text-white mb-6">Why build this?</h2>
          <div className="space-y-4 text-white-muted leading-relaxed">
            <p>
              Every December, year-end recaps from Spotify, YouTube, and other platforms flood our social feeds.
              But not for Goodreads, the largest reading community on the internet: its attempt at a year-end summary, the "Year in Books," 
              is a simple static webpage, lacking both the shareability and design polish of its competitors. 
            </p>
            <p>
              I&apos;m an avid reader myself, and every year I&apos;d find myself manually scrolling
              through my Goodreads trying to remember what I read. I wanted something that celebrated a year of reading,
              surfaced those stats, and felt designed for sharing. So... I built it!
            </p>
          </div>
        </section>

        {/* How it works */}
        <section
          className="project-card mb-12 pt-8 border-t border-faded-white space-y-8"
          style={{ '--card-index': cardIndex++ } as React.CSSProperties}
        >
          <div>
            <h2 className="text-2xl md:text-3xl bit-apple-font text-white mb-6">How it works</h2>
            <div className="space-y-4 text-white-muted leading-relaxed">
              <p>
                The flow is intentionally minimal. A user lands on the homepage, enters their 8- or
                9-digit Goodreads ID (pulled from their profile URL), and within a few seconds gets a
                full personalized recap.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="border border-faded-white p-6 bg-surface">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 border border-faded-white flex items-center justify-center">
                  <span className="text-white geist-mono-font text-sm">1</span>
                </div>
                <div>
                  <h4 className="text-lg text-white mb-2">Enter a Goodreads ID</h4>
                  <p className="text-white-muted leading-relaxed">
                    Users provide the numeric ID from their public Goodreads profile URL. No login,
                    no OAuth, no account required.
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-faded-white p-6 bg-surface">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 border border-faded-white flex items-center justify-center">
                  <span className="text-white geist-mono-font text-sm">2</span>
                </div>
                <div>
                  <h4 className="text-lg text-white mb-2">Scrape the public profile</h4>
                  <p className="text-white-muted leading-relaxed">
                    A server-side scraper paginates through the user&apos;s &quot;read&quot; shelf,
                    parses the HTML, and extracts books, ratings, dates, page counts, and genres for
                    the current year.
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-faded-white p-6 bg-surface">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 border border-faded-white flex items-center justify-center">
                  <span className="text-white geist-mono-font text-sm">3</span>
                </div>
                <div>
                  <h4 className="text-lg text-white mb-2">Generate the recap</h4>
                  <p className="text-white-muted leading-relaxed">
                    The data is aggregated into a sequence of Spotify-Wrapped-style cards: total
                    books, pages read, top genres, longest book, average rating, and more — designed
                    to feel like a story.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* TODO: <LoadedImage src="/assets/projects/GoodreadsWrapped/Flow.webp" ... /> */}
        </section>

        {/* Design */}
        <section
          className="project-card mb-12 pt-8 border-t border-faded-white space-y-8"
          style={{ '--card-index': cardIndex++ } as React.CSSProperties}
        >
          <div>
            <h2 className="text-2xl md:text-3xl bit-apple-font text-white mb-6">Design</h2>
            <div className="space-y-4 text-white-muted leading-relaxed">
              <p>
                The design language leans into the warmth and tactility of physical books — typographic,
                slightly editorial, with print-inspired flourishes. The recap cards are mobile-first and
                deliberately screenshotable, because sharing was always the point.
              </p>
              <p>
                {/* TODO: expand on color, type, and the card system once final screenshots are in. */}
                More on the type system, color palette, and card composition coming soon.
              </p>
            </div>
          </div>

          {/* TODO: <LoadedImage src="/assets/projects/GoodreadsWrapped/Cards.webp" ... /> */}
        </section>

        {/* Engineering highlights */}
        <section
          className="project-card mb-12 pt-8 border-t border-faded-white space-y-8"
          style={{ '--card-index': cardIndex++ } as React.CSSProperties}
        >
          <div>
            <h2 className="text-2xl md:text-3xl bit-apple-font text-white mb-6">Engineering highlights</h2>
            <div className="space-y-4 text-white-muted leading-relaxed">
              <p>
                Goodreads Wrapped is a Next.js app deployed on Vercel. Since Goodreads doesn&apos;t
                offer a public API anymore, the heart of the project is a server-side scraping
                pipeline that politely walks each user&apos;s public shelves.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="border border-faded-white p-6 bg-surface">
              <h3 className="text-lg text-white mb-2">Server-side scraping pipeline</h3>
              <p className="text-white-muted leading-relaxed">
                {/* TODO: confirm specifics from the repo (cheerio? fetch + regex? Playwright?). */}
                Pagination, HTML parsing, and normalization happen on the server so the client only
                receives clean, structured data.
              </p>
            </div>

            <div className="border border-faded-white p-6 bg-surface">
              <h3 className="text-lg text-white mb-2">Rate limiting and caching</h3>
              <p className="text-white-muted leading-relaxed">
                {/* TODO: confirm caching layer + rate-limit approach. */}
                To stay a good citizen of Goodreads (and survive launch traffic), results are cached
                per user ID and requests are throttled.
              </p>
            </div>

            <div className="border border-faded-white p-6 bg-surface">
              <h3 className="text-lg text-white mb-2">Edge-friendly delivery</h3>
              <p className="text-white-muted leading-relaxed">
                Deployed on Vercel with the App Router; static shells stream in instantly while the
                recap data loads in the background.
              </p>
            </div>
          </div>
        </section>

        {/* Launch & Impact */}
        <section
          className="project-card mb-12 pt-8 border-t border-faded-white space-y-8"
          style={{ '--card-index': cardIndex++ } as React.CSSProperties}
        >
          <div>
            <h2 className="text-2xl md:text-3xl bit-apple-font text-white mb-6">Launch & impact</h2>
            <div className="space-y-4 text-white-muted leading-relaxed">
              <p>
                Goodreads Wrapped launched in December 2025 and has been used by{' '}
                <span className="text-white">5,000+ readers</span> and counting. It spread organically
                through book communities on TikTok, Instagram, and Reddit — exactly the kind of
                word-of-mouth I was hoping for.
              </p>
              <p>
                {/* TODO: drop in traffic graph, social posts, and standout quotes. */}
                Traffic snapshots and favorite community reactions coming soon.
              </p>
            </div>
          </div>

          {/* TODO: <LoadedImage src="/assets/projects/GoodreadsWrapped/Traffic.webp" ... /> */}
        </section>

        {/* Reflections */}
        <section
          className="project-card mb-8 pt-8 border-t border-faded-white"
          style={{ '--card-index': cardIndex++ } as React.CSSProperties}
        >
          <h2 className="text-2xl md:text-3xl bit-apple-font text-white mb-6">Reflections</h2>
          <div className="space-y-4 mb-8">
            <div className="border border-faded-white p-6 bg-surface">
              <h3 className="text-lg text-white mb-3">
                Shipping solo is its own design constraint.
              </h3>
              <ul className="arrow-list">
                <li className="text-white-muted leading-relaxed">
                  Owning design, engineering, and launch end-to-end forced me to scope ruthlessly.
                  Every feature had to earn its place, which made the final product sharper than any
                  spec doc could have.
                </li>
              </ul>
            </div>

            <div className="border border-faded-white p-6 bg-surface">
              <h3 className="text-lg text-white mb-3">
                Design for the screenshot.
              </h3>
              <ul className="arrow-list">
                <li className="text-white-muted leading-relaxed">
                  The recap exists to be shared. Treating each card as a poster — not a screen —
                  changed how I thought about hierarchy, type scale, and white space.
                </li>
              </ul>
            </div>

            <div className="border border-faded-white p-6 bg-surface">
              <h3 className="text-lg text-white mb-3">
                Building on someone else&apos;s platform requires care.
              </h3>
              <ul className="arrow-list">
                <li className="text-white-muted leading-relaxed">
                  Scraping a third party means thinking about rate limits, fragility, and user
                  privacy from day one. Public data, polite traffic, and clear messaging when a
                  profile is private kept the project honest.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <nav
          className="project-card pt-8 border-t border-faded-white"
          style={{ '--card-index': cardIndex++ } as React.CSSProperties}
        >
          <div className="flex justify-between items-center">
            <Link href="/" className="sidebar-link">
              ← Back to projects
            </Link>
            <Link href="/projects/manifesto-market" className="sidebar-link">
              Manifesto Market →
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
