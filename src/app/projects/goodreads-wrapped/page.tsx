'use client';

import Link from 'next/link';
import CaseStudyHero from '@/components/CaseStudyHero';
import Image from 'next/image';
import LoadedVideo from '@/components/LoadedVideo';
import { ArrowUpRight } from '@phosphor-icons/react';

function ImagePlaceholder({
  label,
  aspect,
  fill = false,
}: {
  label: string;
  aspect?: string;
  fill?: boolean;
}) {
  const base =
    'flex items-center justify-center border border-dashed border-faded-white bg-surface text-xs text-white-muted geist-mono-font uppercase text-center px-4';
  if (fill) {
    return <div className={`absolute inset-0 ${base}`}>{label}</div>;
  }
  return (
    <div
      className={`w-full ${base}`}
      style={{ aspectRatio: aspect ?? '5 / 3' }}
    >
      {label}
    </div>
  );
}

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
            role: "Product Designer & Full-Stack Engineer",
            timeline: ["August – December 2025"],
            team: ["Myself!"],
            tools: "Next.js (TypeScript, Tailwind, Motion.dev), Figma, Paper, Vercel"
          }}
          cardIndex={cardIndex++}
          links={[
            { label: "Live site", href: "https://goodreadswrapped.com" },
            { label: "GitHub", href: "https://github.com/angelinawwu/goodreads-wrapped" },
          ]}
        />

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

          {/* The "before": Goodreads' existing Year in Books page */}
          <div className="mt-8">
            <div className="grid grid-cols-3 gap-2">
                <Image
                  src="/assets/projects/GoodreadsWrapped/Goodreads-Current-1.webp"
                  alt="Screenshot of Goodreads' existing Year in Books page — a static, text-heavy webpage with no shareable graphics"
                  width={2000}
                  height={1200}
                  className="block w-full h-auto"
                />
                <Image
                  src="/assets/projects/GoodreadsWrapped/Goodreads-Current-2.webp"
                  alt="Screenshot of Goodreads' existing Year in Books page — a static, text-heavy webpage with no shareable graphics"
                  width={2000}
                  height={1200}
                  className="block w-full h-auto"
                />
                <Image
                  src="/assets/projects/GoodreadsWrapped/Goodreads-Current-3.webp"
                  alt="Screenshot of Goodreads' existing Year in Books page — a static, text-heavy webpage with no shareable graphics"
                  width={2000}
                  height={1200}
                  className="block w-full h-auto"
                />
            </div>
            <p className="text-xs text-white-muted mt-2">
              Goodreads&apos; current &quot;Year in Books&quot;.
            </p>
          </div>
        </section>

        {/* The Final Product — hook readers early with the shipped result */}
        <section
          className="project-card mb-12 pt-8 border-t border-faded-white space-y-8"
          style={{ '--card-index': cardIndex++ } as React.CSSProperties}
        >
          <div>
            <h2 className="text-2xl md:text-3xl bit-apple-font text-white mb-6">The Result</h2>
            <div className="space-y-4 text-white-muted leading-relaxed">
              <p>
                Goodreads Wrapped turns any public Goodreads profile into a scrollable, screenshot-ready
                recap in seconds — with vintage-book illustrations, a story-driven sequence of stats, and
                a downloadable share card at the end.
              </p>
            </div>
          </div>

          {/* TODO: Hero product shot — full-width hero video or mockup of recap cards on a phone.
              Suggested: `/assets/projects/GoodreadsWrapped/Hero-Product.webp` or `.mp4` via LoadedVideo. */}
          <div className="overflow-hidden">
            <LoadedVideo src="/assets/projects/GoodreadsWrapped/Goodreads-Demo.mp4" className="w-full h-auto" autoPlay loop />
          </div>
          <p className="text-xs text-white-muted mt-2">
            {/* TODO: caption once final hero image is in. */}
            Final recap flow, delivered to 5000+ readers.
          </p>
        </section>

        {/* How it works */}
        <section
          className="project-card mb-12 pt-8 border-t border-faded-white space-y-8"
          style={{ '--card-index': cardIndex++ } as React.CSSProperties}
        >
          <h2 className="text-2xl md:text-3xl bit-apple-font text-white mb-6">How it works</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-faded-white p-6 bg-surface">
              <div className="flex-shrink-0 w-8 h-8 border border-faded-white flex items-center justify-center mb-4">
                <span className="text-white geist-mono-font text-sm">1</span>
              </div>
              <h4 className="text-lg text-white mb-2">Enter a Goodreads ID</h4>
              <p className="text-white-muted leading-relaxed">
                Users provide the numeric ID from their public Goodreads profile URL.
              </p>
            </div>

            <div className="border border-faded-white p-6 bg-surface">
              <div className="flex-shrink-0 w-8 h-8 border border-faded-white flex items-center justify-center mb-4">
                <span className="text-white geist-mono-font text-sm">2</span>
              </div>
              <h4 className="text-lg text-white mb-2">Scrape the public profile</h4>
              <p className="text-white-muted leading-relaxed">
                A server-side scraper paginates through the user&apos;s &quot;read&quot; shelf,
                parses the HTML, and extracts books, ratings, dates, page counts, and genres for
                the current year.
              </p>
            </div>

            <div className="border border-faded-white p-6 bg-surface">
              <div className="flex-shrink-0 w-8 h-8 border border-faded-white flex items-center justify-center mb-4">
                <span className="text-white geist-mono-font text-sm">3</span>
              </div>
              <h4 className="text-lg text-white mb-2">Generate the recap</h4>
              <p className="text-white-muted leading-relaxed">
                The data is aggregated into a sequence of Spotify-Wrapped-style cards.
              </p>
            </div>
          </div>
          
        </section>

        {/* Design decisions — the visual heart of the case study */}
        <section
          className="project-card mb-12 pt-8 border-t border-faded-white space-y-12"
          style={{ '--card-index': cardIndex++ } as React.CSSProperties}
        >
          <div>
            <h2 className="text-2xl md:text-3xl bit-apple-font text-white mb-6">Design Decisions</h2>
            <div className="space-y-4 text-white-muted leading-relaxed">
              <p>
                Every design choice traced back to one goal: make a year of reading feel worth
                celebrating and worth sharing.
              </p>
            </div>
          </div>

          {/* 1. Visual direction — vintage book illustrations */}
          <div>
            <h3 className="text-xl md:text-2xl text-white mb-4">A world built from vintage book illustrations</h3>
            <div className="space-y-4 text-white-muted leading-relaxed mb-6">
              <p>
                Most Wrapped-style recaps default to bold, modern design patterns. But I wanted Goodreads
                Wrapped to feel like something you&apos;d find inside a book, not on a streaming
                app. I pulled public-domain scans of vintage book
                illustrations from <a href="https://www.oldbookillustrations.com/" target="_blank" rel="noopener noreferrer" className="sidebar-link accent-text">Old Book Illustrations<ArrowUpRight size={16} className="inline" /></a> 
                &nbsp;to build a small library of motifs that could carry the whole product.
              </p>
            </div>

            {/* Moodboard — 4-up grid of inspiration references */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="relative aspect-square overflow-hidden border border-faded-white">
                <ImagePlaceholder label="Moodboard 1" fill />
              </div>
              <div className="relative aspect-square overflow-hidden border border-faded-white">
                <ImagePlaceholder label="Moodboard 2" fill />
              </div>
              <div className="relative aspect-square overflow-hidden border border-faded-white">
                <ImagePlaceholder label="Moodboard 3" fill />
              </div>
              <div className="relative aspect-square overflow-hidden border border-faded-white">
                <ImagePlaceholder label="Moodboard 4" fill />
              </div>
            </div>
            <p className="text-xs text-white-muted mt-2">
              {/* TODO: replace with 4 real moodboard tiles — vintage illustrations, botanical prints, bookplates, paper textures. */}
              Moodboard of vintage book illustrations that seeded the visual direction.
            </p>

            {/* Motif spot: how the illustrations show up in the product */}
            <div className="overflow-hidden mt-6">
              <ImagePlaceholder label="Illustrations in product" aspect="5 / 3" />
            </div>
            <p className="text-xs text-white-muted mt-2">
              {/* TODO: side-by-side of raw illustration → styled card. */}
              From raw reference to in-product motif.
            </p>
          </div>          

          {/* 2. Designing for shareability */}
          <div>
            <h3 className="text-xl md:text-2xl text-white mb-4">Designed for the screenshot</h3>
            <div className="space-y-4 text-white-muted leading-relaxed mb-6">
              <p>
                To encourage shareability, every card was designed as a self-contained
                poster first, and a screen second. That meant bold typography for smaller devices, generous
                margins so nothing gets cropped by Instagram Stories, and a final downloadable
                summary card that stitches the highlights together in a single image.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {/* Portrait recap cards — each one a "poster" */}
              <div className="relative overflow-hidden">
                <Image
                  src="/assets/projects/GoodreadsWrapped/Goodreads-CardEx-1.webp"
                  alt="Card: Books read"
                  width={414}
                  height={896}
                  className="w-full h-auto"
                />
              </div>
              <div className="relative overflow-hidden">
                <Image
                  src="/assets/projects/GoodreadsWrapped/Goodreads-CardEx-2.webp"
                  alt="Card: Top books"
                  width={414}
                  height={896}
                  className="w-full h-auto"
                />
              </div>
              <div className="relative overflow-hidden">
                <Image
                  src="/assets/projects/GoodreadsWrapped/Goodreads-CardEx-3.webp"
                  alt="Card: Genres"
                  width={414}
                  height={896}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <p className="text-xs text-white-muted mt-2">
              {/* TODO: swap in 3 real card exports at 9:16. */}
              Each card is a self-contained poster.
            </p>

            {/* Downloadable share card */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 items-center">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image src="/assets/projects/GoodreadsWrapped/Goodreads-FinalCard.webp" alt="Downloadable share card" fill />
              </div>
              <div className="space-y-4 text-white-muted leading-relaxed">
                <p>
                  The last card is a single downloadable image that captures the whole year at a
                  glance, which users can screenshot, post, and text to their
                  friends.
                </p>
              </div>
            </div>
          </div>

          {/* 3. Narrative sequence — story arc across cards */}
          <div>
            <h3 className="text-xl md:text-2xl text-white mb-4">A story, not a dashboard</h3>
            <div className="space-y-4 text-white-muted leading-relaxed mb-6">
              <p>
                The card order was as important as the cards themselves. Instead of dumping every
                stat on one screen, the recap builds like a short story -- opening with volume
                (books, pages), moving into taste (genres, top titles), then landing on a personal
                closer. Each card earns the next.
              </p>
            </div>
            <div className="overflow-hidden">
              <Image
                src="/assets/projects/GoodreadsWrapped/Goodreads-FullFlow.webp"
                alt="Card sequence storyboard"
                width={1200}
                height={400}
              />
            </div>
            <p className="text-xs text-white-muted mt-2">
              {/* TODO: export all cards as a horizontal filmstrip in Figma. */}
              The full card sequence, in order: volume → taste → personal closer.
            </p>
          </div>
        </section>

        {/* Engineering highlights */}
        <section
          className="project-card mb-12 pt-8 border-t border-faded-white space-y-8"
          style={{ '--card-index': cardIndex++ } as React.CSSProperties}
        >
          <div>
            <h2 className="text-2xl md:text-3xl bit-apple-font text-white mb-6">Engineering Highlights</h2>
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
            <h2 className="text-2xl md:text-3xl bit-apple-font text-white mb-6">Launch & Impact</h2>
            <div className="space-y-4 text-white-muted leading-relaxed">
              <p>
                Goodreads Wrapped launched in December 2025 and reached{' '}
                <span className="accent-text">5,000+ users</span> within its first 30 days. It spread organically
                through book communities on social platforms such as Instagram, as well as through word-of-mouth
                recommendations.
              </p>
            </div>
          </div>

          {/* Traffic graph — Vercel Analytics or GA screenshot */}
          <div>
            <div className="overflow-hidden border border-faded-white">
              <ImagePlaceholder label="Traffic graph" aspect="20 / 9" />
            </div>
            <p className="text-xs text-white-muted mt-2">
              {/* TODO: export analytics chart for the launch window. */}
              Launch-week traffic, December 2025.
            </p>
          </div>

          {/* Social proof — 3-up grid of posts / screenshots */}
          <div>
            <h3 className="text-xl md:text-2xl text-white mb-4">In the wild</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              <div className="relative aspect-[9/16] overflow-hidden border border-faded-white">
                <ImagePlaceholder label="Social share 1" fill />
              </div>
              <div className="relative aspect-[9/16] overflow-hidden border border-faded-white">
                <ImagePlaceholder label="Social share 2" fill />
              </div>
              <div className="relative aspect-[9/16] overflow-hidden border border-faded-white">
                <ImagePlaceholder label="Social share 3" fill />
              </div>
            </div>
            <p className="text-xs text-white-muted mt-2">
              {/* TODO: collect 3 favorite user posts (with permission) and drop them in. */}
              Readers posting their recaps across TikTok, Instagram, and Reddit.
            </p>
          </div>
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
            <Link href="/projects/familyfridge" className="sidebar-link">
              ← FamilyFridge
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
