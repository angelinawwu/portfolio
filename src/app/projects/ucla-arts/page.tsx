'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from '@phosphor-icons/react';
import CaseStudyHero from '@/components/CaseStudyHero';

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
    <div className={`w-full ${base}`} style={{ aspectRatio: aspect ?? '5 / 3' }}>
      {label}
    </div>
  );
}

const brandColors = [
  { name: 'Sunbeam', hex: '#F2D43A', dark: true },
  { name: 'Poppy', hex: '#EE3E24', dark: false },
  { name: 'Seafoam', hex: '#73C9BF', dark: true },
  { name: 'Magenta', hex: '#DA4B9B', dark: false },
  { name: 'UCLA Navy', hex: '#1D4481', dark: false },
  { name: 'Grape', hex: '#811D76', dark: false },
  { name: 'Mist', hex: '#D3DCE1', dark: true },
  { name: 'Meadow', hex: '#1D8128', dark: false },
];

const customTools = [
  {
    name: 'Grainy Gradient Generator',
    blurb:
      'A custom generator for the soft, grainy gradients at the heart of the summer look — tuned to the exact brand palette so every asset stayed on-system.',
    href: 'https://uclaarts-grainygrad.vercel.app/',
  },
  {
    name: 'Key-Art Video Generator',
    blurb:
      'A tool that animated the static key art into looping motion graphics for reels and stories — turning one poster into an entire content library in minutes.',
    href: 'https://uclaarts-videogen.vercel.app/',
  },
  {
    name: 'Fluted Glass Prototype',
    blurb:
      'A shader-based web prototype exploring refracted, fluted-glass textures — a live sandbox for pushing the identity somewhere print alone could not go.',
    href: 'https://flutedglass-example.vercel.app/',
  },
];

export default function UCLAArtsPage() {
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
          slug="ucla-arts"
          details={{
            role: ['Design Lead', '(Summer Programs)'],
            timeline: ['2026', '(fast-turnaround)'],
            team: ['Me', '+ UCLA Arts Comms'],
            tools: 'Figma, Paper, custom AI tools, Cursor',
          }}
          cardIndex={cardIndex++}
          links={[
            { label: 'Grainy gradient tool', href: 'https://uclaarts-grainygrad.vercel.app/' },
            { label: 'Video generator', href: 'https://uclaarts-videogen.vercel.app/' },
            { label: 'Fluted glass prototype', href: 'https://flutedglass-example.vercel.app/' },
          ]}
        />

        {/* Overview */}
        <section
          className="project-card mb-12 pt-8 border-t border-faded-white"
          style={{ '--card-index': cardIndex++ } as React.CSSProperties}
        >
          <h2 className="text-2xl md:text-3xl bit-apple-font text-white mb-6">Overview</h2>
          <div className="space-y-4 text-white-muted leading-relaxed">
            <p>
              Every summer, UCLA Arts runs a slate of pre-college and summer institute programs — Summer Art
              Institute, Design Media Arts, JumpStart, and more — that invite high schoolers onto campus to
              make work alongside working artists.
            </p>
            <p>
              I led the design of the summer identity end-to-end: building the brand from scratch and applying
              it across <span className="text-white">key art, ads, flyers &amp; emails, donor stickers,
              t-shirts, the new website, and everything in between</span> — all on tight, rolling deadlines in
              close collaboration with the UCLA Arts communications team.
            </p>
          </div>
        </section>

        {/* The Problem */}
        <section
          className="project-card mb-12 pt-8 border-t border-faded-white"
          style={{ '--card-index': cardIndex++ } as React.CSSProperties}
        >
          <h2 className="text-2xl md:text-3xl bit-apple-font text-white mb-6">The Problem</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl md:text-2xl text-white mb-4">
                For the first time, UCLA Arts had to stand on its own.
              </h3>
              <div className="space-y-4 text-white-muted leading-relaxed">
                <p>
                  In previous years, the summer programs lived under UCLA&apos;s central summer-sessions
                  website — borrowing its templates, its voice, and its look. This was the first year UCLA
                  Arts had to build and host its <span className="italic">own</span> summer programs website,
                  separate from the university&apos;s.
                </p>
                <p>
                  That meant there was no existing visual system to lean on. Without a strong, self-contained
                  brand identity, the programs risked feeling generic and disconnected — indistinguishable
                  from every other summer offering. We needed an identity distinctive enough to carry a whole
                  website, a social presence, and a full suite of print collateral on its own.
                </p>
              </div>
            </div>

            <div className="border border-faded-white p-6 bg-surface">
              <ul className="arrow-list">
                <li className="text-white">
                  The solution: A bold, flexible summer brand identity — built fast, applied everywhere, and
                  powered by a set of custom tools.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Brand Identity */}
        <section
          className="project-card mb-12 pt-8 border-t border-faded-white space-y-12"
          style={{ '--card-index': cardIndex++ } as React.CSSProperties}
        >
          <div>
            <h2 className="text-2xl md:text-3xl bit-apple-font text-white mb-6">Building the brand identity</h2>
            <div className="space-y-4 text-white-muted leading-relaxed">
              <p>
                I wanted the summer identity to feel like the opposite of institutional: warm, saturated, and
                alive with the energy of a studio in full swing. I started by gathering a visual direction —
                organic, generative textures, soft grain, and unexpected color — then distilled it into a
                system that could scale from a phone screen to a printed sticker.
              </p>
            </div>
            <div className="mt-8 overflow-hidden">
              <Image
                src="/assets/projects/UCLAArts/UCLAArts-KeyArt-1.webp"
                alt="Visual direction moodboard — vibrant, organic, generative art references for the UCLA Arts summer identity"
                width={1420}
                height={778}
                className="w-full h-auto"
              />
              <p className="text-xs text-white-muted mt-2">
                Visual direction: grainy gradients, generative texture, and saturated color.
              </p>
            </div>
          </div>

          {/* Color system */}
          <div>
            <h3 className="text-xl md:text-2xl text-white mb-4">A color system built for range</h3>
            <div className="space-y-4 text-white-muted leading-relaxed mb-6">
              <p>
                The palette anchors on UCLA&apos;s navy but pushes into a bright, playful spectrum — poppy red,
                magenta, sunbeam yellow, seafoam, grape, and meadow green. Eight core colors gave every
                program its own accent while still reading as one family, and the wide range meant the identity
                never felt repetitive across dozens of deliverables.
              </p>
            </div>
            <div className="grid grid-cols-4 md:grid-cols-8 gap-2 md:gap-3 mb-4">
              {brandColors.map((c) => (
                <div key={c.hex}>
                  <div
                    className="w-full aspect-square"
                    style={{ backgroundColor: c.hex }}
                  />
                  <p className="text-[10px] geist-mono-font text-white-muted mt-2 leading-tight">
                    {c.name}
                    <br />
                    {c.hex}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Design system / logo motif */}
          <div>
            <h3 className="text-xl md:text-2xl text-white mb-4">One motif, endless variations</h3>
            <div className="space-y-4 text-white-muted leading-relaxed mb-6">
              <p>
                At the core of the design system is the <span className="text-white">ARTS</span> wordmark paired
                with a stacked-circle mark — a simple, modular shape that could be filled with gradients,
                photography, or flat color. Standardizing type, layout, and that logo lockup meant the comms
                team and I could produce dozens of on-brand pieces quickly, without redrawing the identity each
                time.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="overflow-hidden">
                <Image
                  src="/assets/projects/UCLAArts/UCLAArts-Social-Ads.webp"
                  alt="The summer brand applied across Instagram — Summer Art Institute, Design Media Arts, and JumpStart program posts"
                  width={416}
                  height={900}
                  className="w-full h-auto"
                />
                <p className="text-xs text-white-muted mt-2">
                  The system applied across the UCLA Arts social feed.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="overflow-hidden">
                  <Image
                    src="/assets/projects/UCLAArts/UCLAArts-KeyArt-2.webp"
                    alt="The core UCLA Arts summer color palette with CMYK, RGB, and HEX values"
                    width={1024}
                    height={1030}
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-xs text-white-muted">
                  Documented color tokens — specced for both screen and print.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Innovative Process — custom tools */}
        <section
          className="project-card mb-12 pt-8 border-t border-faded-white space-y-10"
          style={{ '--card-index': cardIndex++ } as React.CSSProperties}
        >
          <div>
            <h2 className="text-2xl md:text-3xl bit-apple-font text-white mb-6">An AI-native design process</h2>
            <div className="space-y-4 text-white-muted leading-relaxed">
              <p>
                The deadlines were fast and the deliverable list was long. Instead of hand-producing every
                asset, I treated tooling as part of the design work itself — <span className="text-white">building
                my own custom software</span> to generate on-brand assets at speed, then designing and refining
                in Figma and Paper.
              </p>
            </div>
          </div>

          {/* Custom tools grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {customTools.map((tool, i) => (
              <a
                key={tool.href}
                href={tool.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-faded-white p-6 bg-surface flex flex-col transition-colors duration-200 hover:border-white"
              >
                <div className="flex-shrink-0 w-8 h-8 border border-faded-white flex items-center justify-center mb-4">
                  <span className="text-white geist-mono-font text-sm">{i + 1}</span>
                </div>
                <h4 className="text-lg text-white mb-2 flex items-start gap-1">
                  {tool.name}
                  <ArrowUpRight
                    size={16}
                    className="mt-1 text-white-muted transition-colors duration-200 group-hover:text-accent"
                  />
                </h4>
                <p className="text-white-muted leading-relaxed text-sm">{tool.blurb}</p>
              </a>
            ))}
          </div>

          {/* Fluted glass prototype visuals */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src="/assets/projects/UCLAArts/UCLAArts-FlutedGlass-1.webp"
                  alt="Output from the custom fluted-glass shader prototype — refracted, grainy color fields"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src="/assets/projects/UCLAArts/UCLAArts-FlutedGlass-2.webp"
                  alt="Another variation from the fluted-glass prototype, generated live in the browser"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <p className="text-xs text-white-muted mt-2">
              Explorations from the fluted-glass web prototype, built in Paper.
            </p>
          </div>

          {/* Working method */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-faded-white p-6 bg-surface">
              <h4 className="text-lg text-white mb-2">Design in Figma &amp; Paper</h4>
              <p className="text-white-muted leading-relaxed text-sm">
                Layouts and the design system lived in Figma; Paper became a sandbox for shader-driven textures
                and motion that would have been slow to fake by hand.
              </p>
            </div>
            <div className="border border-faded-white p-6 bg-surface">
              <h4 className="text-lg text-white mb-2">Iterate fast</h4>
              <p className="text-white-muted leading-relaxed text-sm">
                Custom generators let me spin up dozens of on-brand variations in minutes, so feedback rounds
                were about picking the best option, not waiting for the next one.
              </p>
            </div>
            <div className="border border-faded-white p-6 bg-surface">
              <h4 className="text-lg text-white mb-2">Communicate with comms</h4>
              <p className="text-white-muted leading-relaxed text-sm">
                I worked hand-in-hand with the UCLA Arts communications team, translating campaign needs into
                assets and keeping everything consistent across channels.
              </p>
            </div>
          </div>
        </section>

        {/* Deliverables gallery */}
        <section
          className="project-card mb-12 pt-8 border-t border-faded-white space-y-12"
          style={{ '--card-index': cardIndex++ } as React.CSSProperties}
        >
          <div>
            <h2 className="text-2xl md:text-3xl bit-apple-font text-white mb-6">The identity in the wild</h2>
            <div className="space-y-4 text-white-muted leading-relaxed">
              <p>
                Once the system was set, the brand rolled out across every touchpoint of the summer programs —
                from the screens students scrolled to the merch they took home.
              </p>
            </div>
          </div>

          {/* Donor stickers */}
          <div>
            <h3 className="text-xl md:text-2xl text-white mb-4">Donor stickers</h3>
            <p className="text-white-muted leading-relaxed mb-6">
              A full sticker system for donors — Parent, Alumni, and more — using the stacked-circle mark in
              every colorway across die-cut, oval, and badge shapes.
            </p>
            <div className="overflow-hidden">
              <Image
                src="/assets/projects/UCLAArts/UCLAArts-Stickers.webp"
                alt="Donor sticker system in the UCLA Arts summer palette across multiple shapes and colorways"
                width={1024}
                height={583}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* T-shirts */}
          <div>
            <h3 className="text-xl md:text-2xl text-white mb-4">T-shirts</h3>
            <p className="text-white-muted leading-relaxed mb-6">
              Apparel that carried the ARTS lockup off-screen — mockups across navy, black, and white with
              subtle and bold treatments of the mark.
            </p>
            <div className="overflow-hidden">
              <Image
                src="/assets/projects/UCLAArts/UCLAArts-Tshirts.webp"
                alt="UCLA Arts t-shirt designs using the ARTS wordmark and stacked-circle mark across colorways"
                width={1024}
                height={781}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Flyers & emails + website (placeholders) */}
          <div>
            <h3 className="text-xl md:text-2xl text-white mb-4">Flyers, emails &amp; the website</h3>
            <p className="text-white-muted leading-relaxed mb-6">
              The system also drove program flyers, email campaigns, and the new summer programs website, which
              I helped build out — applying the identity to a live product rather than just static art.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <ImagePlaceholder label="Program flyers" aspect="3 / 4" />
              </div>
              <div className="relative">
                <ImagePlaceholder label="Email campaign" aspect="3 / 4" />
              </div>
              <div className="relative">
                <ImagePlaceholder label="Summer website (helped build)" aspect="3 / 4" />
              </div>
            </div>
          </div>
        </section>

        {/* Reflection */}
        <section
          className="project-card mb-12 pt-8 border-t border-faded-white"
          style={{ '--card-index': cardIndex++ } as React.CSSProperties}
        >
          <h2 className="text-2xl md:text-3xl bit-apple-font text-white mb-6">Reflection</h2>
          <div className="space-y-4 text-white-muted leading-relaxed">
            <p>
              Starting from a blank page — no template, no inherited system — was exactly what made this
              project rewarding. I got to define what UCLA Arts summer looks like, then prove that the identity
              could hold up across a website, a social feed, print, and merch.
            </p>
            <p>
              Just as importantly, it reshaped how I work. Building my own tools turned tight deadlines into
              creative constraints rather than blockers, and let me spend more of my time on the decisions that
              actually mattered: color, composition, and craft.
            </p>
          </div>
        </section>

        {/* Back Button (bottom) */}
        <div
          className="project-card mb-4"
          style={{ '--card-index': cardIndex++ } as React.CSSProperties}
        >
          <Link href="/" className="sidebar-link">
            ← Back to projects
          </Link>
        </div>
      </div>
    </div>
  );
}
