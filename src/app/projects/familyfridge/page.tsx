'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function FamilyFridgePage() {
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

        {/* Hero Section */}
        <section
          className="project-card mb-12"
          style={{ '--card-index': cardIndex++ } as React.CSSProperties}
        >
          <h1 className="text-4xl md:text-6xl bit-apple-font text-white mb-6">FamilyFridge</h1>

          <p className="text-lg text-white-muted leading-relaxed mb-4">
            2nd Place @ Rice Designathon 2026 | Where everyday moments bring us together.
          </p>

          <p className="text-sm geist-mono-font uppercase text-white-muted mb-8">
            <a
              href="https://devpost.com/software/tba-bo8jku"
              target="_blank"
              rel="noopener noreferrer"
              className="sidebar-link"
            >
              View on Devpost ↗
            </a>
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="border border-faded-white p-4 bg-surface">
              <h3 className="text-xs geist-mono-font text-white-muted mb-2">MY ROLE</h3>
              <p className="text-white">Product Designer</p>
            </div>
            <div className="border border-faded-white p-4 bg-surface">
              <h3 className="text-xs geist-mono-font text-white-muted mb-2">TIMELINE</h3>
              <p className="text-white">Jan 2026 (36 hrs)</p>
            </div>
            <div className="border border-faded-white p-4 bg-surface">
              <h3 className="text-xs geist-mono-font text-white-muted mb-2">TEAM</h3>
              <p className="text-white">Kathy Guo<br />Tina Chen</p>
            </div>
            <div className="border border-faded-white p-4 bg-surface">
              <h3 className="text-xs geist-mono-font text-white-muted mb-2">TOOLS</h3>
              <p className="text-white">Figma</p>
            </div>
          </div>
        </section>
      {/* The Challenge */}
        <section
          className="project-card mb-12 pt-8 border-t border-faded-white"
          style={{ '--card-index': cardIndex++ } as React.CSSProperties}
        >
          <h2 className="text-2xl md:text-3xl bit-apple-font text-white mb-6">The Challenge</h2>
          <div className="space-y-4 text-white-muted leading-relaxed">
            <p>
              For the 2026 Rice Design-a-thon, I teamed up with Tina (Product Design + Data @ Cornell) and Kathy (Engineering @ Harvey Mudd) to address the prompt:&nbsp;
              <span className="italic">How can we bridge generational gaps through design?</span>
              Within the span of just 36 hours, we brainstormed, researched, prototyped, and presented our solution. We were selected as 1 of 8 finalists out of 200+ participants, and our team went on to win 2nd Place overall.
            </p>
          </div>
        </section> 

        {/* Our Solution */}
        <section
          className="project-card mb-12 pt-8 border-t border-faded-white"
          style={{ '--card-index': cardIndex++ } as React.CSSProperties}
        >
          <h2 className="text-2xl md:text-3xl bit-apple-font text-white mb-6">Our Solution</h2>
          <div className="space-y-4 text-white-muted leading-relaxed">
            <p>
              For many families, the fridge isn&apos;t just for food — it&apos;s the heart of the home, covered with notes and drawings that connect the whole family. FamilyFridge reimagines the familiar fridge door as a shared digital space where daily life quietly accumulates.
            </p>
            <p>
              Family members pin photos, leave voice notes, and jot down thoughts from their day. But the real magic happens during family calls: memories you&apos;ve saved resurface as conversation starters, turning &quot;how are you?&quot; into something deeper.
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
                <span className="accent-text">Conversations feel like &quot;check-ins&quot; and &quot;status updates.&quot;</span>
              </h3>
              <div className="space-y-4 text-white-muted leading-relaxed">
                <p>
                  ~75% of our survey respondents are satisfied with how often they communicate with family, yet many aren&apos;t content with the quality of those conversations. Respondents mentioned how calls feel like status updates — routine and surface-level.
                </p>
                <p>
                  At the same time, many prefer their preexisting communication methods — phone calls and texting — as they&apos;re &quot;quick and low-effort&quot; and already within their routines. Any solution must fit into existing habits, not ask people to build new ones.
                </p>
              </div>
            </div>

            <div className="border border-faded-white p-6 bg-surface">
              <ul className="arrow-list">
                <li className="text-white">
                  How might we turn weekly calls into shared memories?
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* User Research */}
        <section
          className="project-card mb-12 pt-8 border-t border-faded-white"
          style={{ '--card-index': cardIndex++ } as React.CSSProperties}
        >
          <h2 className="text-2xl md:text-3xl bit-apple-font text-white mb-6">User Research</h2>

          <div className="space-y-12">
            <div>
              <p className="text-white-muted leading-relaxed mb-6">
                We gathered 50 survey responses, conducted 3 interviews, and performed secondary research to understand how young adults interact with older family members.
              </p>

              <div className="overflow-hidden">
                <Image
                  src="/assets/projects/FamilyFridge/FamilyFridge-Brainstorming.webp"
                  alt="Research synthesis: survey data, affinity mapping, user flows, and feature prioritization"
                  width={1000}
                  height={1000}
                />
              </div>
              <p className="text-xs geist-mono-font text-white-muted mt-2">
                Our FigJam brainstorming board — survey data charts, affinity mapping, user flows, and competitive analysis.
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl text-white mb-4">Connection happens in small, shared moments</h3>

              <div className="space-y-4">
                <div className="border border-faded-white p-6 bg-surface">
                  <p className="text-white leading-relaxed italic">
                    &quot;Some of our best memories were when we went on hikes together and just got to talk.&quot;
                  </p>
                </div>
                <div className="border border-faded-white p-6 bg-surface">
                  <p className="text-white leading-relaxed italic">
                    &quot;My mom screenshots FaceTime calls during special moments — so in 20 years, she can see how silly I was.&quot;
                  </p>
                </div>
                <div className="border border-faded-white p-6 bg-surface">
                  <p className="text-white leading-relaxed italic">
                    &quot;My grandma had so much fun telling me the stories behind old photos.&quot;
                  </p>
                </div>
              </div>

              <div className="mt-6 border border-faded-white p-6 bg-surface">
                <p className="text-white">
                  <span className="accent-text">Photos can be more than memories</span> — they are conversation starters.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl text-white mb-4">The generational technology gap</h3>
              <p className="text-white-muted leading-relaxed">
                Pew Research found that ~50% of young adults are &quot;almost constantly online,&quot; compared to just 8% of those 65+. 80% of our survey respondents agreed that their grandparents struggle with technology. Any digital solution must meet older generations where they are, rather than asking them to adapt.
              </p>
            </div>
          </div>
        </section>

        {/* Project Goals */}
        <section
          className="project-card mb-12 pt-8 border-t border-faded-white"
          style={{ '--card-index': cardIndex++ } as React.CSSProperties}
        >
          <h2 className="text-2xl md:text-3xl bit-apple-font text-white mb-6">Project Goals</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-faded-white p-6 bg-surface">
              <h3 className="text-lg text-white mb-3">Spontaneous <span className="accent-text">connection.</span></h3>
              <p className="text-white-muted leading-relaxed">The app should be structured around users&apos; preexisting routines and habits to encourage unintentional but genuine connections.</p>
            </div>
            <div className="border border-faded-white p-6 bg-surface">
              <h3 className="text-lg text-white mb-3">Bridge distance through <span className="accent-text">photos.</span></h3>
              <p className="text-white-muted leading-relaxed">Young adults value physical proximity, but schedules make traveling and visits rare. Photos unlock these moments even from a distance.</p>
            </div>
            <div className="border border-faded-white p-6 bg-surface">
              <h3 className="text-lg text-white mb-3">Minimize <span className="accent-text">friction.</span></h3>
              <p className="text-white-muted leading-relaxed">The app should meet users where they are in effortless, familiar interactions — no one is forced to learn new tools.</p>
            </div>
          </div>
        </section>

        {/* The Concept */}
        <section
          className="project-card mb-12 pt-8 border-t border-faded-white"
          style={{ '--card-index': cardIndex++ } as React.CSSProperties}
        >
          <h2 className="text-2xl md:text-3xl bit-apple-font text-white mb-6">The Concept</h2>

          <div className="space-y-12">
            <div>
              <h3 className="text-xl md:text-2xl text-white mb-4">The Fridge Door as a Communication Medium</h3>
              <p className="text-white-muted leading-relaxed">
                In many homes, the fridge door is covered with notes, drawings, and photos that connect the whole family. Our team was inspired by this role of the fridge as a method of communication and connection — a space where life accumulates naturally, without anyone needing to &quot;post.&quot;
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl text-white mb-4">Build a new app, or integrate with existing ones?</h3>
              <p className="text-white-muted leading-relaxed">
                Our research showed that the majority of families already use iMessage and FaceTime for their weekly calls and check-ins. Rather than asking everyone to learn new technology, we designed the experience to feel at home within that ecosystem. FamilyFridge doesn&apos;t replace your family&apos;s habits — it enhances them.
              </p>
            </div>
          </div>
        </section>

        {/* Design Decisions */}
        <section
          className="project-card mb-12 pt-8 border-t border-faded-white"
          style={{ '--card-index': cardIndex++ } as React.CSSProperties}
        >
          <h2 className="text-2xl md:text-3xl bit-apple-font text-white mb-6">Design Decisions</h2>

          <div className="space-y-4">
            <div className="border border-faded-white p-6 bg-surface">
              <h3 className="text-lg text-white mb-3">
                Comfort with technology <span className="accent-text">doesn&apos;t map cleanly to age.</span>
              </h3>
              <p className="text-white-muted leading-relaxed">
                No one is forced to learn new tools. Everyone participates how they find most comfortable. &quot;Active Contributors&quot; pin photos, save post-call notes, and share voice memos. &quot;Passive Contributors&quot; tap to view photos, listen to notes, and browse the gallery.
              </p>
            </div>

            <div className="border border-faded-white p-6 bg-surface">
              <h3 className="text-lg text-white mb-3">
                <span className="accent-text">Post-call capture,</span> not pre-call posting.
              </h3>
              <p className="text-white-muted leading-relaxed">
                Most photo-sharing apps rely on proactive posting, but users don&apos;t want another app to maintain. FamilyFridge fills itself through calls you&apos;re already having. During onboarding, users import existing photos from shared albums so the space feels lived-in from day one.
              </p>
            </div>

            <div className="border border-faded-white p-6 bg-surface">
              <h3 className="text-lg text-white mb-3">
                Gallery as a <span className="accent-text">living archive.</span>
              </h3>
              <p className="text-white-muted leading-relaxed">
                As new memories are added, older ones gradually move to the gallery. Old photos let younger generations glimpse into the lives of older family members, creating natural opportunities for storytelling and connection.
              </p>
            </div>
          </div>
        </section>

        {/* Design Solution Flow */}
        <section
          className="project-card mb-12 pt-8 border-t border-faded-white"
          style={{ '--card-index': cardIndex++ } as React.CSSProperties}
        >
          <h2 className="text-2xl md:text-3xl bit-apple-font text-white mb-6">Design Solution</h2>
          <p className="text-white-muted leading-relaxed mb-6">
            FamilyFridge captures moments worth remembering after calls, then resurfaces them when they&apos;re needed most. Each call builds on the last, turning weekly check-ins into memories.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="border border-faded-white p-6 bg-surface">
              <div className="flex-shrink-0 w-8 h-8 border border-faded-white flex items-center justify-center mb-4">
                <span className="text-white geist-mono-font text-sm">1</span>
              </div>
              <p className="text-white leading-relaxed">A family FaceTimes each other in their typical routine.</p>
            </div>
            <div className="border border-faded-white p-6 bg-surface">
              <div className="flex-shrink-0 w-8 h-8 border border-faded-white flex items-center justify-center mb-4">
                <span className="text-white geist-mono-font text-sm">2</span>
              </div>
              <p className="text-white leading-relaxed">During the call, FamilyFridge resurfaces recent and past memories.</p>
            </div>
            <div className="border border-faded-white p-6 bg-surface">
              <div className="flex-shrink-0 w-8 h-8 border border-faded-white flex items-center justify-center mb-4">
                <span className="text-white geist-mono-font text-sm">3</span>
              </div>
              <p className="text-white leading-relaxed">After the call, new moments are saved to FamilyFridge.</p>
            </div>
            <div className="border border-faded-white p-6 bg-surface">
              <div className="flex-shrink-0 w-8 h-8 border border-faded-white flex items-center justify-center mb-4">
                <span className="text-white geist-mono-font text-sm">4</span>
              </div>
              <p className="text-white leading-relaxed">FamilyFridge grows naturally with new memories over time.</p>
            </div>
          </div>
        </section>

        {/* Final Designs */}
        <section
          className="project-card mb-12 pt-8 border-t border-faded-white"
          style={{ '--card-index': cardIndex++ } as React.CSSProperties}
        >
          <h2 className="text-2xl md:text-3xl bit-apple-font text-white mb-6">Final Designs</h2>

          <div className="space-y-12">
            <div>
              <h3 className="text-lg text-white mb-4">Your family&apos;s shared space</h3>
              <p className="text-white-muted leading-relaxed mb-4">
                Cover your Fridge in moments that build a deeper connection among your family. Pin photos from your day, leave voice or written notes, and see what your family shared.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="overflow-hidden">
                  <Image
                    src="/assets/projects/FamilyFridge/FamilyFridge-HomeScreen.webp"
                    alt="FamilyFridge home screen — Wu & Wang family"
                    width={454}
                    height={920}
                    className="w-full h-auto"
                  />
                </div>
                <div className="overflow-hidden">
                  <Image
                    src="/assets/projects/FamilyFridge/FamilyFridge-HomeScreen2.webp"
                    alt="FamilyFridge home screen — Roberts family"
                    width={454}
                    height={920}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg text-white mb-4">A Fridge for every family</h3>
              <p className="text-white-muted leading-relaxed mb-4">
                Customize your Fridge to your own unique family. Each family gets their own color theme, name decorations, and layout.
              </p>
              <div className="overflow-hidden">
                <Image
                  src="/assets/projects/FamilyFridge/FamilyFridge-Customizations.webp"
                  alt="Three different family fridges showing customization options"
                  width={1000}
                  height={1000}
                />
              </div>
            </div>

            <div>
              <h3 className="text-lg text-white mb-4">Demo</h3>
              <p className="text-white-muted leading-relaxed mb-4">
                A walkthrough of the full FamilyFridge experience — from onboarding and setting up your fridge, to resurfacing memories during calls.
              </p>
              <div className="overflow-hidden">
                <video
                  src="/assets/projects/FamilyFridge/FamilyFridge-Demo.mp4"
                  className="w-full h-auto"
                  controls
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Figma Prototype Embed */}
        <section
          className="project-card mb-12 pt-8 border-t border-faded-white"
          style={{ '--card-index': cardIndex++ } as React.CSSProperties}
        >
          <h2 className="text-2xl md:text-3xl bit-apple-font text-white mb-6">Prototype</h2>
          <p className="text-white-muted leading-relaxed mb-6">
            Explore the full interactive prototype in Figma.
          </p>
          <div className="overflow-hidden border border-faded-white">
            <iframe
              style={{ border: 'none' }}
              width="100%"
              height="600"
              src="https://embed.figma.com/design/TaamijlqGnRQyAhJDDfqFf/Prototype?node-id=399-2341&embed-host=share"
              allowFullScreen
            />
          </div>
        </section>

        {/* Presentation Slides */}
        <section
          className="project-card mb-12 pt-8 border-t border-faded-white"
          style={{ '--card-index': cardIndex++ } as React.CSSProperties}
        >
          <h2 className="text-2xl md:text-3xl bit-apple-font text-white mb-6">Presentation</h2>
          <p className="text-white-muted leading-relaxed mb-6">
            Our final presentation at Rice Design-a-thon 2026.
          </p>
          <div className="overflow-hidden border border-faded-white">
            <iframe
              style={{ border: 'none' }}
              width="100%"
              height="500"
              src="https://embed.figma.com/slides/t2vbYRiQSlulEEP58FKlr7/Final-Presentation--?node-id=1-578&embed-host=share"
              allowFullScreen
            />
          </div>
        </section>

        {/* Takeaways */}
        <section
          className="project-card mb-12 pt-8 border-t border-faded-white"
          style={{ '--card-index': cardIndex++ } as React.CSSProperties}
        >
          <h2 className="text-2xl md:text-3xl bit-apple-font text-white mb-6">Takeaways</h2>

          <div className="space-y-4">
            <div className="border border-faded-white p-6 bg-surface">
              <h3 className="text-lg text-white mb-3">
                Design for <span className="accent-text">existing routines</span>.
              </h3>
              <ul className="arrow-list">
                <li className="text-white-muted leading-relaxed">
                  Users rarely build new habits, so solutions should weave into the ones they already have. FamilyFridge succeeds because it enhances FaceTime calls families are already making.
                </li>
              </ul>
            </div>

            <div className="border border-faded-white p-6 bg-surface">
              <h3 className="text-lg text-white mb-3">
                Good solutions start with <span className="accent-text">listening</span>.
              </h3>
              <ul className="arrow-list">
                <li className="text-white-muted leading-relaxed">
                  User interviews and surveys guided every feature we created. Sometimes solutions unintentionally solve an existing pain point we weren&apos;t anticipating.
                </li>
              </ul>
            </div>

            <div className="border border-faded-white p-6 bg-surface">
              <h3 className="text-lg text-white mb-3">
                <span className="accent-text">Growth</span> under constraints.
              </h3>
              <ul className="arrow-list">
                <li className="text-white-muted leading-relaxed">
                  Under 48 hours, we grew tremendously as designers, storytellers, and researchers. This process pushed us to connect data, behavior, and technology into a cohesive, human-centered product.
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
          <div className="flex justify-end items-center">
            <Link href="/projects/manifesto-market" className="sidebar-link">
              Manifesto Market →
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
