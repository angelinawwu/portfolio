'use client';

import Link from 'next/link';
import Image from 'next/image';
import CaseStudyHero from '@/components/CaseStudyHero';
import { ArrowUpRight } from '@phosphor-icons/react';

export default function ReveriePage() {
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
          slug="reverie"
          details={{
            role: "Product Designer",
            timeline: ["March 2026", "(3 days)"],
            team: ["Ellie Huang", "Emily Shen", "Nancy Rios"],
            tools: "Figma, Midjourney, Cursor, Nano Banana"
          }}
          cardIndex={cardIndex++}
        />

        {/* The Challenge */}
        <section
          className="project-card mb-12 pt-8 border-t border-faded-white"
          style={{ '--card-index': cardIndex++ } as React.CSSProperties}
        >
          <h2 className="text-2xl md:text-3xl bit-apple-font text-white mb-6">The Challenge</h2>
          <div className="space-y-6">
            <div className="space-y-4 text-white-muted leading-relaxed">
              <p>
                For FigBuild 2026, Figma&apos;s annual design hackathon, our team of four was given a speculative design prompt:
              </p>
              <div className="border border-faded-white p-6 bg-surface">
                <p className="text-white text-lg md:text-xl italic text-center">
                  &quot;Identify something intangible, invisible, or previously unmeasurable about the human sensory experience and design a speculative tool to track and influence it.&quot;
                </p>
              </div>
              <p>
                With my teammates Ellie, Emily, and Nancy, we spent 3 days brainstorming, iterating, and prototyping on our solution.
              </p>
            </div>

          </div>
        </section>

        {/* The Problem */}
        <section
          className="project-card mb-12 pt-8 border-t border-faded-white"
          style={{ '--card-index': cardIndex++ } as React.CSSProperties}
        >
          <h2 className="text-2xl md:text-3xl bit-apple-font text-white mb-6">Understanding the Problem</h2>
          <div className="space-y-6">
            <div className="space-y-4 text-white-muted leading-relaxed">
              <h3 className="text-xl md:text-2xl text-white mb-4">Every night, your brain tells you a story. You almost never remember it.</h3>
              <p>
                We spend roughly a third of our lives asleep. During REM sleep, the brain enters its most unfiltered state — processing emotional memory, forging creative connections, and rehearsing responses to threats.
              </p>
              <p>
                However, research shows that only about 5-10% of dreams are actually remembered. Think about it: We have apps that track everything about sleep — the quantity of sleep, your resting heartbeat, its different stages — everything <span className="italic">except</span> what actually happens during sleep itself. We&apos;ve optimized the container and ignored its contents entirely.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-faded-white p-6 bg-surface">
                <p className="text-white-muted leading-relaxed mb-2">You forget</p>
                <p className="text-3xl text-white mb-2 geist-mono-font">90%</p>
                <p className="text-white-muted leading-relaxed">
                of your dreams in the first 10 minutes of waking up
                </p>
                <p className="text-white-muted leading-relaxed">(Mark Solms, 2000).</p>
              </div>
              <div className="border border-faded-white p-6 bg-surface">
                <p className="text-white-muted leading-relaxed mb-2">Only</p>
                <p className="text-3xl text-white mb-2 geist-mono-font">1 in 10</p>
                <p className="text-white-muted leading-relaxed">
                people say they always remember their dreams
                </p>
                <p className="text-white-muted leading-relaxed">(CBS News / SSRS, 2021).</p>
              </div>
            </div>
          </div>
        </section>

        {/* Reverie is a two-part product */}
        <section
          className="project-card mb-12 pt-8 border-t border-faded-white"
          style={{ '--card-index': cardIndex++ } as React.CSSProperties}
        >
          <h2 className="text-2xl md:text-3xl bit-apple-font text-white mb-6">Reverie is a two-part product.</h2>
          <div className="space-y-4 text-white-muted leading-relaxed mb-6">
            <p>
              The prompt was open-ended by design, and actively encouraged fantastical, future-forward solutions. Having a purely digital product, especially for something as personal and sensorial as dreams, felt incomplete. A two-part solution let us match the texture of the problem: something you wear, and something you return to.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div>
              <div className="relative mb-3 aspect-square w-full overflow-hidden">
                <Image
                  src="/assets/projects/Reverie/Reverie-Graphic-1Mask.webp"
                  alt="The Reverie VR Eyemask — a sleep wearable that doubles as a VR headset"
                  fill
                  sizes="(max-width: 768px) 45vw, min(400px, 42vw)"
                  className="object-contain px-2 md:px-4"
                />
              </div>
              <p className="text-sm text-white-muted">The Reverie VR Eyemask</p>
            </div>
            <div>
              <div className="relative mb-3 aspect-square w-full overflow-hidden">
                <Image
                  src="/assets/projects/Reverie/Reverie-Graphic-2App.webp"
                  alt="The Reverie App — a personal dream archive organized like a record collection"
                  fill
                  sizes="(max-width: 768px) 45vw, min(400px, 42vw)"
                  className="object-contain"
                />
              </div>
              <p className="text-sm text-white-muted">The Reverie App</p>
            </div>
          </div>
          
        </section>

        {/* From lo-fi to hi-fi */}
        <section
          className="project-card mb-12 pt-8 border-t border-faded-white space-y-12"
          style={{ '--card-index': cardIndex++ } as React.CSSProperties}
        >
          <h2 className="text-2xl md:text-3xl bit-apple-font text-white !mb-6">3 Days of Iteration</h2>
          <div className="space-y-4">
            <div className="space-y-4 text-white-muted leading-relaxed">
              <p>
                Our iteration process was quick, efficient, and intentional. As we worked through our ideas, we addressed the project with a product-thinking mindset. It was important for us to focus on not just the features or visual design of the app, but also the core problems we were actually solving for the user.
              </p>
              </div>
             <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src="/assets/projects/Reverie/Reverie-Process-1.webp"
                  alt="FigJam brainstorming board with sticky notes from all four team members, organized by themes"
                  fill
                  sizes="(max-width: 768px) 50vw, 42vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src="/assets/projects/Reverie/Reverie-Process-2.webp"
                  alt="FigJam brainstorming board with sticky notes from all four team members, organized by themes"
                  fill
                  sizes="(max-width: 768px) 50vw, 42vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src="/assets/projects/Reverie/Reverie-Process-3.webp"
                  alt="FigJam brainstorming board with sticky notes from all four team members, organized by themes"
                  fill
                  sizes="(max-width: 768px) 50vw, 42vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src="/assets/projects/Reverie/Reverie-Process-4.webp"
                  alt="FigJam brainstorming board with sticky notes from all four team members, organized by themes"
                  fill
                  sizes="(max-width: 768px) 50vw, 42vw"
                  className="object-cover"
                />
              </div>
            </div>
            <p className="text-xs text-white-muted mt-2">
              Left to right, top to bottom: our initial Figjam brainstorm, moodboards, low-fidelity wireframes, and prototyping.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl md:text-2xl text-white mb-4">From lo-fi to hi-fi</h3>
            <p className="text-white-muted leading-relaxed mb-4">
              Each team member owned a different flow. In this process, we discovered the difference between our unique approaches to design. When we came back together, we were able to combine our strengths and create a final cohesive product that addressed the problem from all angles.
            </p>
            <div className="overflow-hidden">
              <Image
                src="/assets/projects/Reverie/Reverie-Lofis.webp"
                alt="Low-fidelity wireframes for onboarding, homepage, recap, and analytics flows"
                width={2000}
                height={1000}
              />
            </div>
          </div>
        </section>

        {/* AI Tools */}
        <section
          className="project-card mb-12 pt-8 border-t border-faded-white space-y-12"
          style={{ '--card-index': cardIndex++ } as React.CSSProperties}
        >
          <div>
            <h2 className="text-2xl md:text-3xl bit-apple-font text-white mb-6">AI-Accelerated Prototyping</h2>
            <p className="text-white-muted leading-relaxed">
              With only 3 days to design an entire product, we needed to move fast. Our team used a combination of AI tools to both speed up and enhance our process. These tools helped us design solutions that we wouldn't have been able to accomplish on our own.
            </p>
          </div>

          <div>
            <h3 className="text-xl md:text-2xl text-white mb-4">Midjourney for dream imagery</h3>
            <p className="text-white-muted leading-relaxed mb-4">
              The dream-like imagery in the app came to life through the work of <a href="https://x.com/ciguleva" target="_blank" rel="noopener noreferrer" className="sidebar-link accent-text">Tatiana Tsiguleva <ArrowUpRight size={16} className="inline" /></a>. We felt that the surreal aesthetic of her Midjourney-generated images was the perfect match for Reverie's creative direction, so we reached out for permission to feature her images in our designs.
            </p>
            <div className="overflow-hidden">
              <Image
                src="/assets/projects/Reverie/Reverie-Midjourney.webp"
                alt="Midjourney image of a dream state"
                width={2000}
                height={1000}
                className="w-full h-auto"
              />
            </div>
            <p className="text-xs text-white-muted mt-2">Images created by Tatiana Tsiguleva using Midjourney</p>
          </div>

          <div>
            <h3 className="text-xl md:text-2xl text-white mb-4">Prototyping in code with Figma Make and Cursor</h3>
            <p className="text-white-muted leading-relaxed mb-4">
              To create the prototype for Reverie's VR features, we primarily used Figma Make. This allowed us to quickly create an interactive mockup of the AR interface that was consistent with the rest of the app's design. For more the complex interactions, we brought the code into Cursor.
            </p>
            <div className="overflow-hidden">
              <Image
                src="/assets/projects/Reverie/Reverie-AI-VR.webp"
                alt="Figma Make screenshot of the Reverie VR prototype"
                width={2000}
                height={1000}
              />
            </div>
          </div>
        </section>

        {/* The Reverie Eyemask */}
        <section
          className="project-card mb-12 pt-8 border-t border-faded-white space-y-12"
          style={{ '--card-index': cardIndex++ } as React.CSSProperties}
        >
          <div>
            <h2 className="text-2xl md:text-3xl bit-apple-font text-white mb-6">The Reverie VR Eyemask</h2>
            <div className="space-y-4 text-white-muted leading-relaxed">
              <p>
                The Reverie VR Eyemask is a dual-purpose sleep wearable that records and replays your subconscious. During the night, its sensors map brain activity to capture your dreams. By day, the mask becomes a high-resolution VR headset, where users can step back into a realistic 360° reconstruction of their favorite dreams from the night before.
              </p>
              <Image
                src="/assets/projects/Reverie/Reverie-Mask.webp"
                alt="The Reverie VR Eyemask"
                width={2000}
                height={1000}
              />
            </div>
          </div>

          <div>
            <h3 className="text-xl md:text-2xl text-white mb-4">Dream replay in VR</h3>
            <div className="space-y-4 text-white-muted leading-relaxed">

              <p>
                The VR experience was designed to feel like a natural extension of the app. With the VR Eyemask, users can relive their dreams in vivid, immersive detail.
              </p>
            </div>
            <div className="overflow-hidden mt-4">
              <video
                  src="/assets/projects/Reverie/Reverie-VR.mp4"
                  className="w-full h-auto"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
            </div>
          </div>
        </section>

        {/* The Reverie App */}
        <section
          className="project-card mb-12 pt-8 border-t border-faded-white space-y-12"
          style={{ '--card-index': cardIndex++ } as React.CSSProperties}
        >
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl bit-apple-font text-white">The Reverie App</h2>
          </div>

          {/* Privacy-First Onboarding */}
          <div>
            <h3 className="text-xl md:text-2xl text-white mb-4">Privacy-first onboarding</h3>
            <p className="text-white-muted leading-relaxed mb-4">
              Privacy settings appear before anything else. Users can control the amount of data that gets recorded before giving Reverie any access to their dreams.
            </p>
            <div className="overflow-hidden">
              <Image
                src="/assets/projects/Reverie/Reverie-Onboarding.webp"
                alt="Onboarding flow showing the Reverie landing screen with sign-up and privacy-first design decisions"
                width={2000}
                height={1000}
              />
            </div>
          </div>

          {/* Morning Recap */}
          <div>
            <h3 className="text-xl md:text-2xl text-white mb-4">Morning Recap</h3>
            <p className="text-white-muted leading-relaxed mb-4">
              Every morning, the app surfaces a Spotify-Wrapped-style summary of the night before, based on what Reverie thinks would interest you most. It&apos;s the first thing you see when you open the app, and is designed to feel approachable and relevant.
            </p>
            <div className="overflow-hidden">
              <video
                src="/assets/projects/Reverie/Reverie-Final-2.mp4"
                className="w-full h-auto"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </div>

          {/* Dream Gallery & Albums */}
          <div>
            <h3 className="text-xl md:text-2xl text-white mb-4">Dream Gallery and Albums</h3>
            <div className="space-y-4 text-white-muted leading-relaxed">
              <p>
                Dreams needed a container that felt personal and collectible. We chose a record library as the organizing metaphor. Each night of dreams is represented as a CD, and each month's collection becomes an album.
              </p>
            </div>
            <div className="overflow-hidden mt-4">
              <Image
                src="/assets/projects/Reverie/Reverie-DreamGallery.webp"
                alt="Dream Gallery view showing monthly album covers organized chronologically"
                width={1000}
                height={1000}
              />
            </div>
          </div>

          {/* Patterns, Not Diagnoses */}
          <div>
            <h3 className="text-xl md:text-2xl text-white mb-4">Patterns, not diagnoses</h3>
            <p className="text-white-muted leading-relaxed mb-4">
              The Analytics feature of the app highlights patterns across dreams, helping users uncover emotional trends and recurring symbols without over-interpreting them as diagnoses.
            </p>
            <div className="overflow-hidden">
              <video
                src="/assets/projects/Reverie/Reverie-Final-4.mp4"
                className="w-full h-auto"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </div>
        </section>

        {/* Edge Cases */}
        <section
          className="project-card mb-12 pt-8 border-t border-faded-white"
          style={{ '--card-index': cardIndex++ } as React.CSSProperties}
        >
          <h2 className="text-2xl md:text-3xl bit-apple-font text-white mb-6">Edge Cases</h2>
          <div className="space-y-6">
            <p className="text-white-muted leading-relaxed">
              Extra perception comes with responsibility. We identified several edge case scenarios where Reverie could potentially cause harm to users.
            </p>

            <div className="space-y-4">
              <div className="border border-faded-white p-6 bg-surface">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 border border-faded-white flex items-center justify-center">
                    <span className="text-white geist-mono-font text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="text-lg text-white mb-2">Misinterpreted data</h4>
                    <p className="text-white-muted leading-relaxed">
                      Dreams are subjective, and users may treat analytics as definitive psychological insights. Reverie aims to present insights as suggestive patterns instead of conclusions, and allows users add their own interpretations.
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
                  <h4 className="text-lg text-white mb-2">Privacy and exposure</h4>
                  <p className="text-white-muted leading-relaxed">
                    Dreams are deeply personal, so privacy is central to the Reverie experience. While privacy is currently introduced during onboarding, future iterations could potentially integrate visible privacy assurances throughout the product.
                  </p>
                </div>
              </div>
            </div>
          </div>
          </div>
        </section>

        {/* Presentation */}
        <section
          className="project-card mb-12 pt-8 border-t border-faded-white"
          style={{ '--card-index': cardIndex++ } as React.CSSProperties}
        >
          <h2 className="text-2xl md:text-3xl bit-apple-font text-white mb-6">Presentation</h2>
          <p className="text-white-muted leading-relaxed mb-6">
            Our final slide deck for FigBuild 2026.
          </p>
          <div className="overflow-hidden border border-faded-white">
            <iframe
              width="100%"
              height="500"
              src="https://embed.figma.com/slides/mEsZdJ3wh08gqVhQw4qJYM/Reverie-Slide-Deck?node-id=1-233&embed-host=share"
              allowFullScreen
            />
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
                The solution should be defined by the problem.
              </h3>
              <ul className="arrow-list">
                <li className="text-white-muted leading-relaxed">
                  Sleep is physical and personal, so a purely digital product would have felt incongruent. Making Reverie a combination of a wearable and an app was a design instinct that was ambitious, but ultimately worth following.
                </li>
              </ul>
            </div>

            <div className="border border-faded-white p-6 bg-surface">
              <h3 className="text-lg text-white mb-3">
                AI tools expand what&apos;s possible, not just what&apos;s fast.
              </h3>
              <ul className="arrow-list">
                <li className="text-white-muted leading-relaxed">
                  Without Midjourney, Figma Make, and Cursor, a polished prototype with a cohesive visual language wouldn&apos;t have been feasible in 3 days. Using AI tools didn&apos;t just speed things up, but also unlocked new potential outcomes.
                </li>
              </ul>
            </div>

            <div className="border border-faded-white p-6 bg-surface">
              <h3 className="text-lg text-white mb-3">
                Growth under constraints.
              </h3>
              <ul className="arrow-list">
                <li className="text-white-muted leading-relaxed">
                  The time pressure forced our team to divide and own, then converge and combine. We left with a product none of us could have made alone, and a much stronger sense of how to move fast with people you trust.
                </li>
              </ul>
            </div>
          </div>
          <div>
            <Image
              src="/assets/projects/Reverie/Reverie-Team.webp"
              alt="Team photo"
              width={1000}
              height={1000}
              className="w-full aspect-3/2 object-cover"
            />
            <p className="text-sm text-white-muted mt-2">
              Thank you to my amazing team for such a memorable Figbuild experience (Ellie not pictured, but in spirit)! :)
            </p>
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
            <Link href="/projects/familyfridge" className="sidebar-link">
              FamilyFridge →
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
