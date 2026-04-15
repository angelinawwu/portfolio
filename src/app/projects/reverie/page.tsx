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
                With my team, Ellie Huang, Emily Shen, and Nancy Rios, we spent 3 days brainstorming, iterating, and prototyping on our solution.
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
              The prompt was open-ended by design, and actively encouraged fantastical, future-forward solutions. Dreams are one of the last truly private spaces left, and we wanted to build something that could actually live there. A purely digital product felt thin; a purely physical one, incomplete. Two components let us match the texture of the problem: something you wear, and something you return to.
            </p>
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
                We spent 3 days brainstorming, iterating, and prototyping on our solution.
              </p>
              </div>
             <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src="/assets/projects/Reverie/Reverie-Process-1.png"
                  alt="FigJam brainstorming board with sticky notes from all four team members, organized by themes"
                  fill
                  sizes="(max-width: 768px) 50vw, 42vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src="/assets/projects/Reverie/Reverie-Process-2.png"
                  alt="FigJam brainstorming board with sticky notes from all four team members, organized by themes"
                  fill
                  sizes="(max-width: 768px) 50vw, 42vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src="/assets/projects/Reverie/Reverie-Process-3.png"
                  alt="FigJam brainstorming board with sticky notes from all four team members, organized by themes"
                  fill
                  sizes="(max-width: 768px) 50vw, 42vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src="/assets/projects/Reverie/Reverie-Process-4.png"
                  alt="FigJam brainstorming board with sticky notes from all four team members, organized by themes"
                  fill
                  sizes="(max-width: 768px) 50vw, 42vw"
                  className="object-cover"
                />
              </div>
            </div>
            <p className="text-xs text-white-muted mt-2">
              Left to right, top to bottom: our initial Figjam brainstorm, our moodboards, low-fidelity wireframes, and prototyping.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl md:text-2xl text-white mb-4">From lo-fi to hi-fi</h3>
            <p className="text-white-muted leading-relaxed mb-4">
              Each team member owned a different flow and iterated from rough wireframes to mid-fidelity prototypes. In this process, we discovered the difference between our unique approaches to design. When we came back together, we were able to combine our strengths and create a final cohesive product that addressed the problem from all angles.
            </p>
            <div className="overflow-hidden">
              <Image
                src="/assets/projects/Reverie/Reverie-Lofis.png"
                alt="Low-fidelity wireframes for onboarding, homepage, recap, and analytics flows"
                width={2000}
                height={1000}
              />
            </div>
          </div>
        </section>

        {/* AI Tools */}
        <section
          className="project-card mb-12 pt-8 border-t border-faded-white"
          style={{ '--card-index': cardIndex++ } as React.CSSProperties}
        >
          <h2 className="text-2xl md:text-3xl bit-apple-font text-white mb-6">AI-Accelerated Prototyping</h2>
          <p className="text-white-muted leading-relaxed mb-6">
            A 3-day timeline required aggressive use of AI tools to prototype at production quality.
          </p>
          
          <div className="space-y-4">
            <div className="border border-faded-white p-6 bg-surface">
              <h3 className="text-lg text-white mb-3">Midjourney for dream imagery</h3>
              <p className="text-white-muted leading-relaxed">
                Midjourney images from <a href="https://x.com/ciguleva" target="_blank" rel="noopener noreferrer" className="sidebar-link">Tatiana Tsiguleva</a> represented dream states throughout the app. Her surreal, ethereal aesthetic matched the tone we needed. We confirmed permission before using her work.
              </p>
            </div>

            <div className="border border-faded-white p-6 bg-surface">
              <h3 className="text-lg text-white mb-3">Figma Make + Cursor for VR prototype</h3>
              <p className="text-white-muted leading-relaxed">
                Figma Make handled layout and mockups, while Cursor generated React and Three.js logic for the navigable 360° VR environment.
              </p>
            </div>

            <div className="border border-faded-white p-6 bg-surface">
              <h3 className="text-lg text-white mb-3">Google AI Studio: Nano Banana and Veo</h3>
              <p className="text-white-muted leading-relaxed">
                Nano Banana generated custom imagery for onboarding and empty states. Veo created video assets for dream-like transitions and ambient elements.
              </p>
            </div>
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
              A personal dream archive organized like a record collection, designed to surface patterns without over-interpreting them.
            </p>
          </div>

          {/* Privacy-First Onboarding */}
          <div>
            <h3 className="text-xl md:text-2xl text-white mb-4">Privacy-first onboarding</h3>
            <p className="text-white-muted leading-relaxed mb-4">
              Privacy controls appear before mask pairing, not after. Users choose their recording level — full recording, emotions only, or minimal — before giving Reverie any access.
            </p>
            <div className="overflow-hidden">
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
            <p className="text-white-muted leading-relaxed mb-4">
              Every morning, the app surfaces a Spotify-Wrapped-style summary of the night before based on what Reverie thinks would interest you most based on your set intentions. It&apos;s the first thing you see when you open the app, and it&apos;s designed to feel approachable and relevant.
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
            <p className="text-white-muted leading-relaxed mb-4">
              The Analytics feature of the app highlights patterns across dreams, helping users uncover emotional trends and recurring symbols without over-interpreting them as diagnoses.
            </p>
            <div className="overflow-hidden">
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
              Extra perception comes with responsibility. We identified several scenarios where Reverie could cause real harm, and designed around them.
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
                    Dream data is deeply personal. Privacy controls are aggressive and visible, not hidden in settings.
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
                    Nightmare clusters require support infrastructure. Naming these scenarios explicitly separates concept from trustworthy product.
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
