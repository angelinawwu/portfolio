'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from '@phosphor-icons/react';
import CaseStudyHero from '@/components/CaseStudyHero';

export default function FamilyFridge2Page() {
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
          slug="familyfridge"
          details={{
            role: "Product Designer",
            timeline: ["January 2026", "(36 hrs)"],
            team: ["Kathy Guo", "Tina Chen"],
            tools: "Figma"
          }}
          cardIndex={cardIndex++}
        />

        {/* The Prompt */}
        <section
          className="project-card mb-12 pt-8 border-t border-faded-white"
          style={{ '--card-index': cardIndex++ } as React.CSSProperties}
        >
          <h2 className="text-2xl md:text-3xl bit-apple-font text-white mb-6">The Prompt</h2>
          <div className="space-y-4 text-white-muted leading-relaxed">
            <p>
              For the 2026 Rice Design-a-thon, I teamed up with Tina (Product Design + Data @ Cornell) and Kathy (Engineering @ Harvey Mudd) to address the prompt:
            </p>
            <div className="border border-faded-white p-6 bg-surface">
              <p className="text-white text-xl md:text-2xl italic text-center">
                &quot;How can we bridge generational gaps through design?&quot;
              </p>
            </div>
            <p>
              Within the span of just 36 hours, we brainstormed, researched, prototyped, and presented our solution. We were selected as 1 of 8 finalists out of 200+ participants, and our team went on to win 2nd Place overall.
            </p>
          </div>
        </section>

        {/* Understanding the Problem */}
        <section
          className="project-card mb-12 pt-8 border-t border-faded-white space-y-12"
          style={{ '--card-index': cardIndex++ } as React.CSSProperties}
        >
          <h2 className="text-2xl md:text-3xl bit-apple-font text-white mb-6">Understanding the Problem</h2>

          <div className="space-y-6">
            <div>
              <Image
                src="/assets/projects/FamilyFridge/FamilyFridge-ProblemStatement.png"
                alt="Conversations feel like check-ins and status updates"
                width={700}
                height={200}
                className="mx-auto mb-4"
              />
              <div className="space-y-4 text-white-muted leading-relaxed mb-4">
                <p>
                  When we first approached the prompt, we asked ourselves: what does the generational gap actually look like for people our age? For most of us, the answer wasn&apos;t dramatic. It showed up in phone calls and text chains that felt routine, and never got past &quot;how are you?&quot; and &quot;I&apos;m fine.&quot;
                </p>
              </div>
            </div>
          </div>
          
          <div>
              <h3 className="text-xl md:text-2xl text-white mb-4">The fridge door as a communication medium</h3>
              <p className="text-white-muted leading-relaxed">
                For many families, the fridge door is the heart of the home. Covered with notes, drawings, and photos that connect the whole family, it&apos;s a space where life accumulates naturally. Our team was inspired by this quiet role of the fridge as a communication medium.
              </p>
              <div className="overflow-hidden flex flex-row space-x-4 mt-4">
                <div className="relative w-1/2 aspect-[4/3]">
                  <Image
                    src="/assets/projects/FamilyFridge/FamilyFridge-Fridge-1.png"
                    alt="Fridge door with notes and photos"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-1/2 aspect-[4/3]">
                  <Image
                    src="/assets/projects/FamilyFridge/FamilyFridge-Fridge-2.png"
                    alt="Fridge door with notes and photos"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <p className="text-xs geist-font text-white-muted mt-2">
                Images: Unsplash
              </p>
            </div>
        </section>

        {/* Research & Discovery */}
        <section
          className="project-card mb-12 pt-8 border-t border-faded-white"
          style={{ '--card-index': cardIndex++ } as React.CSSProperties}
        >
          <h2 className="text-2xl md:text-3xl bit-apple-font text-white mb-6">Research &amp; Discovery</h2>

          <div className="space-y-12">
            <div>
              <p className="text-white-muted leading-relaxed mb-6">
                We gathered 50 <a href="https://docs.google.com/forms/d/e/1FAIpQLScwCZq-4SF8tR-3VnUmTMufTaVh5ObqB5orauxC5ytzk2XerA/viewform" target="_blank" rel="noopener noreferrer" className="accent-text sidebar-link">survey responses<ArrowUpRight size={16} className="inline" /></a>, conducted 3 <a href="https://docs.google.com/document/d/16boHvnQWm6cVXiji85t96WY-uINIT5c1fdZBpGqoe8s/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="accent-text sidebar-link">user interviews<ArrowUpRight size={16} className="inline" /></a>, and performed secondary research to understand how young adults interact with older family members. Our research process was fast and intentional — given the time constraints of the designathon, we needed to move from research to design within the span of a few hours.
              </p>

              <div className="overflow-hidden">
                <Image
                  src="/assets/projects/FamilyFridge/FamilyFridge-Brainstorming.png"
                  alt="Research synthesis: survey data, affinity mapping, user flows, and feature prioritization"
                  width={2000}
                  height={2000}
                />
              </div>
              <p className="text-xs geist-font text-white-muted mt-2">
                Our FigJam brainstorming board, including survey data charts, affinity mapping, user flows, and competitive analysis.
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl text-white mb-4">Connection happens in small, shared moments</h3>

              <p className="text-white-muted leading-relaxed mb-4">
                When we asked interviewees about their most cherished family moments, a clear theme emerged: the moments that mattered most were often ordinary and spontaneous.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="space-y-4">
                  <Image
                    src="/assets/projects/FamilyFridge/FamilyFridge-QuotePic-1.jpg"
                    alt="Family hiking together"
                    width={400}
                    height={300}
                    className="w-full h-auto"
                  />
                  <Image
                    src="/assets/projects/FamilyFridge/FamilyFridge-Quote-1.png"
                    alt="Some of our best memories were when we went on hikes together and just got to talk."
                    width={400}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
                <div className="space-y-4">
                  <Image
                    src="/assets/projects/FamilyFridge/FamilyFridge-QuotePic-2.jpg"
                    alt="FaceTime call screenshot"
                    width={400}
                    height={300}
                    className="w-full h-auto"
                  />
                  <Image
                    src="/assets/projects/FamilyFridge/FamilyFridge-Quote-2.png"
                    alt="My mom screenshots FaceTime calls during special moments, so in 20 years, she can see how silly I was."
                    width={400}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
                <div className="space-y-4">
                  <Image
                    src="/assets/projects/FamilyFridge/FamilyFridge-QuotePic-3.jpg"
                    alt="Grandma sharing old photos"
                    width={400}
                    height={300}
                    className="w-full h-auto"
                  />
                  <Image
                    src="/assets/projects/FamilyFridge/FamilyFridge-Quote-3.png"
                    alt="My grandma had so much fun telling me the stories behind old photos."
                    width={400}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl text-white mb-4">A natural extension of an existing routine</h3>
              <p className="text-white-muted leading-relaxed mb-4">
                ~75% of our survey respondents were satisfied with how <span className="italic">often</span> they communicate with family, yet many weren&apos;t content with the <span className="italic">quality</span> of those conversations. At the same time, many preferred their preexisting communication methods — phone calls and texting — since they were already within their routines. Therefore, the best solution would fit into existing habits, instead of asking people to build new ones.
              </p>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl text-white mb-4">The generational technology gap</h3>
              <p className="text-white-muted leading-relaxed">
                <a href="https://www.pewresearch.org/short-reads/2022/01/13/share-of-those-65-and-older-who-are-tech-users-has-grown-in-the-past-decade/" target="_blank" rel="noopener noreferrer" className="accent-text sidebar-link">A study by the Pew Research Center<ArrowUpRight size={16} className="inline" /></a> found that ~50% of young adults are &quot;almost constantly online,&quot; compared to just 8% of those 65+. 80% of our survey respondents agreed that their grandparents struggle with technology. Any digital solution must meet older generations where they are, rather than asking them to adapt to unfamiliar interfaces.
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
          <p className="text-white-muted leading-relaxed mb-6">
            After synthesizing our research, we identified three guiding principles that would shape every design decision moving forward.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-faded-white p-6 bg-surface">
              <h3 className="text-lg text-white mb-3">Spontaneous connection.</h3>
              <p className="text-white-muted leading-relaxed">The app should be structured around users&apos; preexisting routines and habits to encourage unintentional but genuine connections.</p>
            </div>
            <div className="border border-faded-white p-6 bg-surface">
              <h3 className="text-lg text-white mb-3">Bridge distance through photos.</h3>
              <p className="text-white-muted leading-relaxed">Young adults value physical proximity, but schedules make traveling and visits rare. Photos unlock these moments even from a distance.</p>
            </div>
            <div className="border border-faded-white p-6 bg-surface">
              <h3 className="text-lg text-white mb-3">Minimize friction.</h3>
              <p className="text-white-muted leading-relaxed">The app should meet users where they are in effortless, familiar interactions, so no one is forced to learn new tools.</p>
            </div>
          </div>
        </section>

        {/* From Insight to Concept */}
        <section
          className="project-card mb-12 pt-8 border-t border-faded-white"
          style={{ '--card-index': cardIndex++ } as React.CSSProperties}
        >
          <h2 className="text-2xl md:text-3xl bit-apple-font text-white mb-6">From Research to Concept</h2>
          <div className="space-y-12">
            <div>
              
              <h3 className="text-xl md:text-2xl text-white mb-4">Build a new app, or integrate with existing ones?</h3>
              <div className="space-y-4 text-white-muted leading-relaxed mb-4">
                <p>
                  One of the earliest and most consequential decisions we made was whether to design a standalone app or integrate with tools families already use. Our research made this choice clear: the majority of families already use iMessage and FaceTime.
                </p>
                <p>
                  Rather than asking everyone to learn new technology, especially older family members who may struggle with unfamiliar interfaces, we designed the experience to feel at home within the Apple ecosystem.
                </p>
              </div>

              <div className="overflow-hidden flex flex-row space-x-4">
                <div className="flex-1">
                  <div className="relative w-full aspect-[4/3]">
                    <Image
                      src="/assets/projects/FamilyFridge/FamilyFridge-Process-1.png"
                      alt="Lo-fi wireframes"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-white-muted text-sm mt-2">Lo-fi wireframes</p>
                </div>
                <div className="flex-1">
                  <div className="relative w-full aspect-[4/3]">
                    <Image
                      src="/assets/projects/FamilyFridge/FamilyFridge-Process-2.png"
                      alt="Prototyping"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-white-muted text-sm mt-2">Prototyping</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* The Solution */}
        <section
          className="project-card mb-12 pt-8 border-t border-faded-white"
          style={{ '--card-index': cardIndex++ } as React.CSSProperties}
        >
          <h2 className="text-2xl md:text-3xl bit-apple-font text-white mb-6">The Solution</h2>
          
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
              <h3 className="text-xl md:text-2xl text-white mb-4">Your family&apos;s shared space</h3>
              <p className="text-white-muted leading-relaxed mb-4">
                Cover your Fridge in moments that build a deeper connection among your family. Pin photos from your day, leave voice or written notes, and see what your family shared.
              </p>
              <div className="overflow-hidden">
                <video
                  src="/assets/projects/FamilyFridge/FamilyFridge-Final-1.mp4"
                  className="w-full h-auto"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl text-white mb-4">A Fridge for every family</h3>
              <p className="text-white-muted leading-relaxed mb-4">
                Customize your Fridge to your own unique family. Each family gets their own color theme, name decorations, and layout — making every Fridge feel like home.
              </p>
              <div className="overflow-hidden">
                <Image
                  src="/assets/projects/FamilyFridge/FamilyFridge-Final-2.png"
                  alt="Three different family fridges showing customization options"
                  width={1000}
                  height={1000}
                />
              </div>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl text-white mb-4">Post-call capture</h3>
              <p className="text-white-muted leading-relaxed mb-4">
                After a FaceTime call ends, a translucent liquid glass overlay appears on your home screen. It surfaces screenshots taken during the conversation, lets you select which ones to pin to the Fridge, and prompts for a quick note — like &quot;Ask about grandparents&apos; tomato garden.&quot; The entire flow takes seconds, and the Fridge grows richer with every call.
              </p>
              <video
                  src="/assets/projects/FamilyFridge/FamilyFridge-Final-3.mp4"
                  className="w-full h-auto"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
            </div>

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
              width="100%"
              height="500"
              src="https://embed.figma.com/slides/t2vbYRiQSlulEEP58FKlr7/Final-Presentation--?node-id=1-578&embed-host=share"
              allowFullScreen
            />
          </div>
        </section>

        {/* Feedback */}
        <section
          className="project-card mb-12 pt-8 border-t border-faded-white"
          style={{ '--card-index': cardIndex++ } as React.CSSProperties}
        >
          <h2 className="text-2xl md:text-3xl bit-apple-font text-white mb-6">Feedback</h2>
          <p className="text-white-muted leading-relaxed mb-6">
            After the event, I reached out to the judges to get their thoughts on our project. From this feedback, I gained significant and valuable insight into where we did well, and where we could have potentially done better. Here are some things they said!
          </p>
          <Image
            src="/assets/projects/FamilyFridge/FamilyFridge-Feedback.png"
            alt="“FamilyFridge stood out because the prompt genuinely shaped the solution, rather than being applied after the fact.” 
            “There are opportunities for even greater adoption if the product were device-agnostic, rather than tied to iOS devices.”
            “FamilyFridge is a very compelling product with a clear path to commercial viability.”
            “Linking to native features was a huge plus to your project.”
            “The FaceTime‑style call element actively detracts from the experience. It introduces additional complexity that isn’t needed, feels clunky in execution, and pulls attention away from the quieter, more differentiated core idea.”"
            width={800}
            height={300}
            className="w-full h-auto px-24"
          />
        </section>

        {/* Reflections */}
        <section
          className="project-card mb-8 pt-8 border-t border-faded-white"
          style={{ '--card-index': cardIndex++ } as React.CSSProperties}
        >
          <h2 className="text-2xl md:text-3xl bit-apple-font text-white mb-6">Reflections</h2>

          <div className="space-y-4 mb-6">
            <div className="border border-faded-white p-6 bg-surface">
              <h3 className="text-lg text-white mb-3">
                Design for existing routines.
              </h3>
              <ul className="arrow-list">
                <li className="text-white-muted leading-relaxed">
                  Users rarely build new habits, so solutions should weave into the ones they already have. FamilyFridge succeeds because it enhances FaceTime calls families are already making.
                </li>
              </ul>
            </div>

            <div className="border border-faded-white p-6 bg-surface">
              <h3 className="text-lg text-white mb-3">
                Good solutions start with listening.
              </h3>
              <ul className="arrow-list">
                <li className="text-white-muted leading-relaxed">
                  User interviews and surveys guided every feature we created. An early pivot from a shared canvas to a structured fridge layout came directly from hearing that older generations wouldn&apos;t engage with freeform interaction. Sometimes the best design decisions come from what you choose not to build.
                </li>
              </ul>
            </div>

            <div className="border border-faded-white p-6 bg-surface">
              <h3 className="text-lg text-white mb-3">
                Growth under constraints.
              </h3>
              <ul className="arrow-list">
                <li className="text-white-muted leading-relaxed">
                  In 36 hours, we grew tremendously as designers, storytellers, and researchers. The time constraint forced us to be decisive and trust our instincts.
                </li>
              </ul>
            </div>
          </div>

          <div>
            <Image
              src="/assets/projects/FamilyFridge/FamilyFridge-Team.png"
              alt="Team photo"
              width={1000}
              height={1000}
              className="w-full h-auto"
            />
            <p className="text-sm text-white-muted mt-2">
              Thank you to Tina and Kathy for being incredible teammates!! :)
            </p>
          </div>
        </section>

        {/* Navigation */}
        <nav
          className="project-card pt-8 border-t border-faded-white"
          style={{ '--card-index': cardIndex++ } as React.CSSProperties}
        >
          <div className="flex justify-between items-center">
            <Link href="/projects/reverie" className="sidebar-link">
              ← Reverie
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
