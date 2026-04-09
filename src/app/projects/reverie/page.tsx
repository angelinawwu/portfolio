'use client';

import Link from 'next/link';
import Image from 'next/image';
import CaseStudyHero from '@/components/CaseStudyHero';

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
            timeline: ["March 2026", "(1 week)"],
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
            </div>

            <div>
              <h3 className="text-xl md:text-2xl text-white mb-4">Converging on dreams</h3>
              <div className="space-y-4 text-white-muted leading-relaxed">
                <p>
                  We started by brainstorming independently on FigJam. Each team member explored different directions — dream recordings, emotional analytics, lucid dreaming control, VR replay. When we compared notes, a clear pattern emerged: all four of us had gravitated toward the subconscious.
                </p>
                <p>
                  The insight that drove our concept: existing tools track sleep stages and heart rate, but no one has built infrastructure for what your brain actually does while you&apos;re dreaming. Dreams are the most emotionally honest experience we have — and we have zero tools to capture them.
                </p>
              </div>
              <div className="overflow-hidden mt-4">
                <Image
                  src="/assets/projects/Reverie/Reverie-Brainstorming.png"
                  alt="FigJam brainstorming board with sticky notes from all four team members, organized by themes"
                  width={2000}
                  height={1000}
                />
              </div>
              <p className="text-xs text-white-muted mt-2">
                Our FigJam brainstorming board.
              </p>
            </div>
          </div>
        </section>

        {/* The Problem */}
        <section
          className="project-card mb-12 pt-8 border-t border-faded-white"
          style={{ '--card-index': cardIndex++ } as React.CSSProperties}
        >
          <h2 className="text-2xl md:text-3xl bit-apple-font text-white mb-6">The Problem</h2>
          <div className="space-y-6">
            <div className="space-y-4 text-white-muted leading-relaxed">
              <h3 className="text-xl md:text-2xl text-white mb-4">Every night, your brain tells you a story. You almost never remember it.</h3>
              <p>
                We spend roughly a third of our lives asleep. During REM sleep, the brain enters its most unfiltered state — processing emotional memory, forging creative connections, and rehearsing responses to threats.
              </p>
              <p>
                However, research shows that only about 5-10% of dreams are actually remembered. Think about it: We have apps that track everything about sleep—the quantity of sleep, your resting heartbeat, the different stages of sleep—everything except what happens during sleep itself. We&apos;ve optimized the container and ignored its contents entirely.
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
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div>
              <div className="relative mb-3 aspect-square w-full overflow-hidden">
                <Image
                  src="/assets/projects/Reverie/Reverie-Graphic-1Mask.png"
                  alt="The Reverie Eyemask — a sleep wearable that doubles as a VR headset"
                  fill
                  sizes="(max-width: 768px) 45vw, min(400px, 42vw)"
                  className="object-contain px-2 md:px-4"
                />
              </div>
              <p className="text-sm text-white-muted">The Reverie Eyemask</p>
            </div>
            <div>
              <div className="relative mb-3 aspect-square w-full overflow-hidden">
                <Image
                  src="/assets/projects/Reverie/Reverie-Graphic-2App.png"
                  alt="The Reverie App — a personal dream archive organized like a record collection"
                  fill
                  sizes="(max-width: 768px) 45vw, min(400px, 42vw)"
                  className="object-contain"
                />
              </div>
              <p className="text-sm text-white-muted">The Reverie App</p>
            </div>
          </div>
          <div className="space-y-4 text-white-muted leading-relaxed">
            <p>
              The mask captures dream data through physiological sensors while you sleep. The app organizes that data into a personal archive, surfaces patterns, and lets you revisit your dreams over time. The physical component builds trust — you own the device, your data stays on it. The digital component builds understanding — turning raw signal into something you can explore and learn from.
            </p>
          </div>
        </section>

        {/* From lo-fi to hi-fi */}
        <section
          className="project-card mb-12 pt-8 border-t border-faded-white"
          style={{ '--card-index': cardIndex++ } as React.CSSProperties}
        >
          <h2 className="text-2xl md:text-3xl bit-apple-font text-white mb-6">From lo-fi to hi-fi</h2>
          <p className="text-white-muted leading-relaxed mb-4">
            Each team member owned a different flow — onboarding, home/recap, album, and analytics — and iterated from rough wireframes to polished screens. The lo-fi phase was where we worked out the CD metaphor, the information hierarchy, and the emotional tone of each interaction.
          </p>
          <div className="overflow-hidden">
            <Image
              src="/assets/projects/Reverie/Reverie-Lofis.png"
              alt="Low-fidelity wireframes for onboarding, homepage, recap, and analytics flows"
              width={2000}
              height={1000}
            />
          </div>
        </section>

        {/* The Reverie Eyemask */}
        <section
          className="project-card mb-12 pt-8 border-t border-faded-white space-y-12"
          style={{ '--card-index': cardIndex++ } as React.CSSProperties}
        >
          <div>
            <h2 className="text-2xl md:text-3xl bit-apple-font text-white mb-6">The Reverie Eyemask</h2>
            <div className="space-y-4 text-white-muted leading-relaxed">
              <p>
                The Reverie Eyemask is a dual-purpose sleep wearable that records and replays your subconscious. During the night, its sensors — infrared eye tracking, EEG dry electrodes, heart rate variability, and skin conductance — map brain activity to capture the visuals and emotional tone of your dreams. It also uses Targeted Memory Reactivation: subtle audio cues played during REM sleep that can steer dream content toward themes you set the night before.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl md:text-2xl text-white mb-4">Dream replay in VR</h3>
            <div className="space-y-4 text-white-muted leading-relaxed">
              <p>
                When you wake, the mask transforms. Flip it into display mode and it becomes a high-resolution VR headset. Using the companion app, you can step back into a 360° reconstruction of your dreams from the night before — scrubbing through scenes, pausing on moments, searching across nights.
              </p>
              <p>
                The VR experience is designed around the way dreams actually feel: non-linear, emotionally vivid, and spatially surreal. Rather than playing back a flat video, Reverie reconstructs a navigable environment from the sensor data, letting you move through your dream the way you moved through it while asleep.
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
          <div>
            <h2 className="text-2xl md:text-3xl bit-apple-font text-white mb-6">The Reverie App</h2>
            <p className="text-white-muted leading-relaxed">
              The app is a personal dream archive — organized like a record collection, designed to surface patterns without over-interpreting them. Each feature was shaped by a specific user need we identified during research.
            </p>
          </div>

          {/* Privacy-First Onboarding */}
          <div>
            <h3 className="text-xl md:text-2xl text-white mb-4">Privacy-first onboarding</h3>
            <div className="space-y-4 text-white-muted leading-relaxed">
              <p>
                We&apos;re asking users to wear a recording device on their face while they sleep — the most intimate ask any product has ever made. That meant privacy couldn&apos;t be an afterthought or a settings toggle buried three screens deep.
              </p>
              <p>
                We designed the privacy and consent screen to appear <span className="italic">before</span> mask pairing, not after. Users choose their recording level — full recording, emotions only, or minimal — before giving Reverie anything. The copy leads with what matters most: &quot;Your dreams belong to you. Always.&quot;
              </p>
            </div>
            <div className="overflow-hidden mt-4">
              <Image
                src="/assets/projects/Reverie/Reverie-Onboarding.png"
                alt="Onboarding flow showing the Reverie landing screen with sign-up and privacy-first design decisions"
                width={2000}
                height={1000}
              />
            </div>
          </div>

          {/* Morning Recap */}
          <div>
            <h3 className="text-xl md:text-2xl text-white mb-4">Morning Recap</h3>
            <div className="space-y-4 text-white-muted leading-relaxed">
              <p>
                Emily is an undergrad who frequently wakes up with the feeling that she had a vivid, important dream — but it slips away within minutes. She wanted a way to hold onto that feeling and actually understand what her brain was doing all night.
              </p>
              <p>
                Reverie&apos;s Morning Recap is designed for her. Every morning, the app surfaces a Spotify-Wrapped-style summary of the night before — how many dreams you had, their dominant emotions, and which ones Reverie thinks would interest you most based on your set intentions. It&apos;s the first thing you see when you open the app, and it&apos;s designed to feel like a gift, not a data dump.
              </p>
              <div className="overflow-hidden">
                <Image
                  src="/assets/projects/Reverie/Reverie-Recap.png"
                  alt="Morning recap screen — Last night, you had 4 dreams"
                  width={1000}
                  height={1000}
                />
              </div>
            </div>
          </div>

          {/* Dream Gallery & Albums */}
          <div>
            <h3 className="text-xl md:text-2xl text-white mb-4">Dream Gallery and Albums</h3>
            <div className="space-y-4 text-white-muted leading-relaxed">
              <p>
                Dreams needed a container that felt personal and collectible. We chose a record library as the organizing metaphor. Each night of dreams is represented as a CD, and each month's collection becomes an album.
              </p>
              <p>
                The Dream Gallery is the user&apos;s view into Reverie. It organizes months of recorded dreams chronologically — each month an album cover, each night a searchable, filterable entry. Snapshots represent quick visual insights, while full recordings appear as continuous circles for deeper exploration. Instead of a blank page, the user now has a personal archive of vivid material from their unconscious.
              </p>
            </div>
            <div className="overflow-hidden mt-4">
              <Image
                src="/assets/projects/Reverie/Reverie-DreamGallery.png"
                alt="Dream Gallery view showing monthly album covers organized chronologically"
                width={1000}
                height={1000}
              />
            </div>
          </div>

          {/* Patterns, Not Diagnoses */}
          <div>
            <h3 className="text-xl md:text-2xl text-white mb-4">Patterns, not diagnoses</h3>
            <div className="space-y-4 text-white-muted leading-relaxed">
              <p>
                Priya has been in therapy for a year, struggling to articulate her relationship with her parents. After six weeks of wearing the mask, Reverie&apos;s Analytics view shows her something she couldn&apos;t see on her own: 70% of her high-anxiety dreams cluster on Sunday nights — the night before her weekly call home. Her subconscious already knew.
              </p>
              <p>
                But dreams are not a direct window into the psyche. A single night tells you almost nothing. Patterns over 6-8 weeks tell you something real. Every insight line in Reverie is carefully worded to describe a pattern without diagnosing a cause. &quot;Anxiety has surfaced 6 times this month — often near familiar places&quot; describes what the data shows. It doesn&apos;t tell you why. That distinction took longer to get right than almost any other part of the app.
              </p>
            </div>
            <div className="overflow-hidden mt-4">
              <Image
                src="/assets/projects/Reverie/Reverie-Analytics.png"
                alt="Analytics screen showing dream emotion analysis, themes and symbols, and sleep cycle insights"
                width={1000}
                height={2000}
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
              Extra perception comes with responsibility. We identified several scenarios where Reverie could cause real harm — and designed around them.
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
                      Dreams are subjective, and users may treat analytics as definitive psychological insights. Reverie presents insights as suggestive patterns — never conclusions — and allows users to edit tags and add their own interpretations.
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
                      A breakup dream surfaced in a monthly pattern while someone&apos;s new partner is holding their phone. Dream data is deeply personal — privacy controls need to be aggressive and visible, not hidden in settings.
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
                    <h4 className="text-lg text-white mb-2">Trauma resurfacing</h4>
                    <p className="text-white-muted leading-relaxed">
                      A recurring nightmare cluster surfaced as an &quot;insight&quot; at exactly the wrong moment, with no support infrastructure around it. Naming these scenarios explicitly is what separates a concept from a product someone would actually trust.
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
          <div className="space-y-4">
            <div className="border border-faded-white p-6 bg-surface">
              <h3 className="text-lg text-white mb-3">
                The metaphor shaped the architecture.
              </h3>
              <ul className="arrow-list">
                <li className="text-white-muted leading-relaxed">
                  Choosing the CD/album metaphor wasn&apos;t decoration — it determined the entire information hierarchy, the visual system, and how users emotionally relate to their own data. The best design metaphors do structural work, not just aesthetic work.
                </li>
              </ul>
            </div>

            <div className="border border-faded-white p-6 bg-surface">
              <h3 className="text-lg text-white mb-3">
                Speculative design requires real constraints.
              </h3>
              <ul className="arrow-list">
                <li className="text-white-muted leading-relaxed">
                  The hardest part wasn&apos;t imagining future sensors. It was designing appropriate humility into every insight line so users don&apos;t over-interpret patterns. The prompt asked for speculation, but the design decisions needed to be grounded.
                </li>
              </ul>
            </div>

            <div className="border border-faded-white p-6 bg-surface">
              <h3 className="text-lg text-white mb-3">
                Edge cases clarify the product.
              </h3>
              <ul className="arrow-list">
                <li className="text-white-muted leading-relaxed">
                  Addressing scenarios like trauma resurfacing and misinterpreted data forced us to define what Reverie is NOT — which made what it IS much sharper. The strongest products are shaped as much by what they refuse to do.
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
            <Link href="/projects/familyfridge" className="sidebar-link">
              FamilyFridge →
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
