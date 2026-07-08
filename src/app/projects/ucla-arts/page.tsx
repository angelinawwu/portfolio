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

// The four key-art concepts I proposed, each with its own guiding ethos
const concepts = [
  { n: '01', name: 'Color Panels', ethos: 'diverse', words: 'variety · choice · possibility · breadth' },
  { n: '02', name: 'CMY Orbs', ethos: 'interdisciplinary', words: 'union · combination · convergence · intersection' },
  { n: '03', name: 'Grainy Blobs', ethos: 'dynamic', words: 'flexibility · movement · fluidity · energy' },
  { n: '04', name: 'Fluted Glass', ethos: 'multifaceted', words: 'dimension · futurism · transparency · intricacy' },
];

// Base 4-tone "Fluted Glass" color scheme — sourced from the concept deck
const flutedGlassColors = [
  { name: 'Sunflower', hex: '#F1D439' },
  { name: 'Peony', hex: '#DE1B63' },
  { name: 'Delphinium', hex: '#96D4E4' },
  { name: 'Iris', hex: '#5640C4' },
];

// Each department draws its own primary/secondary/tertiary from the 4-tone base;
// each course within a department gets a distinct glass pattern (e.g. Angular, Waves, Streaks)
const departments = [
  'Art',
  'Design | Media Arts',
  'World Arts & Cultures / Dance',
  'Architecture & Urban Design',
];

const glassPatterns = ['Angular', 'Waves', 'Streaks'];

const customTools = [
  {
    name: 'Grainy Gradient Generator',
    blurb:
      'A grainy-gradient generator I built to spin up the soft, textured color fields the identity leans on — on-palette every time, in seconds instead of by hand.',
    href: 'https://uclaarts-grainygrad.vercel.app/',
  },
  {
    name: 'Key-Art Video Generator',
    blurb:
      'A tool that turns static key art into the fast-paced, liquid-motion sequences used for the Instagram ad reels — one design becomes an entire content library.',
    href: 'https://uclaarts-videogen.vercel.app/',
  },
  {
    name: 'Fluted Glass Prototype',
    blurb:
      'A shader-based web prototype that codes the Fluted Glass concept into a live, interactive effect — proof it could scale past static key art into the website itself.',
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
            role: ['Designer'],
            timeline: ['October 2025 – May 2026'],
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
            <h2 className="text-2xl md:text-3xl bit-apple-font text-white mb-6">Exploring key-art concepts</h2>
            <div className="space-y-4 text-white-muted leading-relaxed">
              <p>
                I started by proposing four distinct key-art directions, each with its own guiding ethos for what
                UCLA Arts Summer Programs <span className="italic">are</span>. I sketched explorations in Figma
                and used Paper to animate them quickly — a way to test how each concept felt in motion before
                committing to one.
              </p>
            </div>

            {/* 4 concepts grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {concepts.map((c) => (
                <div key={c.name} className="border border-faded-white p-6 bg-surface">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-xs geist-mono-font text-white-muted">{c.n}</span>
                    <h4 className="text-lg text-white">{c.name}</h4>
                  </div>
                  <p className="text-sm text-white-muted mb-2 italic">
                    UCLA Arts Summer Programs are {c.ethos}.
                  </p>
                  <p className="text-xs text-white-muted geist-mono-font">{c.words}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Fluted Glass — the chosen direction */}
          <div>
            <h3 className="text-xl md:text-2xl text-white mb-4">Developing &quot;Fluted Glass&quot; into a system</h3>
            <div className="space-y-4 text-white-muted leading-relaxed mb-6">
              <p>
                I chose <span className="text-white">Fluted Glass</span> as the direction to develop into a full
                design system. Its ethos — multifaceted, dimensional, futuristic, transparent, intricate —
                gave me enough range to build out a documented concept that could scale across departments,
                courses, and deliverables.
              </p>
              <p>
                I laid the system out in a working deck: a four-tone base palette, department and course-level
                logic, key art formats, and applications. The deck became the source of truth for the comms
                team.{' '}
                <a
                  href="https://docs.google.com/presentation/d/1oanpzou3j0upYEZJgvZ2dbHyfQ7zy7gZquLpPliDhKk/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sidebar-link"
                >
                  View the Fluted Glass concept deck
                  <ArrowUpRight size={16} className="inline ml-1" />
                </a>
              </p>
            </div>

            {/* Base 4-tone color scheme */}
            <div className="mb-8">
              <h4 className="text-lg text-white mb-3">A four-tone base palette</h4>
              <p className="text-white-muted leading-relaxed mb-4 text-sm">
                Vibrant, youthful, and diverse — and directly referential to UCLA Arts&apos; existing brand
                colors. Every department and course palette is derived from these four tones.
              </p>
              <div className="grid grid-cols-4 gap-2 md:gap-3">
                {flutedGlassColors.map((c) => (
                  <div key={c.hex}>
                    <div className="w-full aspect-square" style={{ backgroundColor: c.hex }} />
                    <p className="text-[10px] geist-mono-font text-white-muted mt-2 leading-tight">
                      {c.name}
                      <br />
                      {c.hex}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Department + course logic */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="border border-faded-white p-6 bg-surface">
                <h4 className="text-lg text-white mb-2">Color by department</h4>
                <p className="text-white-muted leading-relaxed text-sm mb-4">
                  Each of the four departments draws its own primary, secondary, and tertiary color from the
                  base palette — distinct enough to tell departments apart at a glance, while staying inside one
                  family.
                </p>
                <ul className="space-y-1 text-sm text-white-muted geist-mono-font">
                  {departments.map((d) => (
                    <li key={d}>· {d}</li>
                  ))}
                </ul>
              </div>
              <div className="border border-faded-white p-6 bg-surface">
                <h4 className="text-lg text-white mb-2">Pattern by course</h4>
                <p className="text-white-muted leading-relaxed text-sm mb-4">
                  Within each department, individual courses (e.g. Painting, Photography, Sculpture in Art) get
                  their own fluted-glass pattern, so every program has a unique but on-system look.
                </p>
                <ul className="space-y-1 text-sm text-white-muted geist-mono-font">
                  {glassPatterns.map((p) => (
                    <li key={p}>· {p}</li>
                  ))}
                </ul>
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

          {/* Instagram Ads */}
          <div>
            <h3 className="text-xl md:text-2xl text-white mb-4">Instagram ads</h3>
            <p className="text-white-muted leading-relaxed mb-6">
              I designed a full Instagram campaign with both video reels and static posts. The video structure
              followed a three-part arc: a liquid-motion intro with program info, a fast-paced sequence of
              individual programs, and a branded outro. Static posts used the Fluted Glass gradients to make
              text overlays readable while staying on-brand.
            </p>
            <div className="overflow-hidden">
              <Image
                src="/assets/projects/UCLAArts/UCLAArts-Social-Ads.webp"
                alt="Instagram ad designs for UCLA Arts summer programs, showing both video reel structure and static post designs"
                width={416}
                height={900}
                className="w-full h-auto"
              />
              <p className="text-xs text-white-muted mt-2">
                Instagram ad campaign — video reels and static posts.
              </p>
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
