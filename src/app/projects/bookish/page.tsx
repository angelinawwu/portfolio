'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from '@phosphor-icons/react';

export default function BookishPage() {
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
          <h1 className="text-4xl md:text-6xl bit-apple-font text-white mb-6">Bookish</h1>
          
          <p className="text-lg text-white-muted leading-relaxed mb-8">
            Redesigning the reading experience with accessibility and sustainability in mind
          </p>

          {/* Metadata Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="border border-faded-white p-4 bg-surface">
              <h3 className="text-xs geist-mono-font text-white-muted mb-2">MY ROLE</h3>
              <p className="text-white">Lead Product Designer</p>
            </div>
            <div className="border border-faded-white p-4 bg-surface">
              <h3 className="text-xs geist-mono-font text-white-muted mb-2">TIMELINE</h3>
              <p className="text-white">Mar – May 2024</p>
            </div>
            <div className="border border-faded-white p-4 bg-surface">
              <h3 className="text-xs geist-mono-font text-white-muted mb-2">TEAM</h3>
              <p className="text-white">1 Designer<br />3 Developers</p>
            </div>
            <div className="border border-faded-white p-4 bg-surface">
              <h3 className="text-xs geist-mono-font text-white-muted mb-2">TOOLS</h3>
              <p className="text-white">Figma, Illustrator</p>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section 
          className="project-card mb-12 pt-8 border-t border-faded-white"
          style={{ '--card-index': cardIndex++ } as React.CSSProperties}
        >
          <h2 className="text-2xl md:text-3xl bit-apple-font text-white mb-6">Overview</h2>
          <div className="space-y-4 text-white-muted leading-relaxed">
            <p>
              Bookish&apos;s mission is to connect readers in local communities and to increase the accessibility and sustainability of reading physical books. In the app, users can submit books they own into a personal catalog, which other readers can then borrow.
            </p>
            <p>
              In the project, I was responsible for creating Bookish&apos;s brand identity, including logos, colors, and typography. I also designed the app&apos;s user interface.
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
                <span className="accent-text">Reading physical books is financially and environmentally unsustainable.</span>
              </h3>
              <div className="space-y-4 text-white-muted leading-relaxed">
                <p>
                  Avid bookworms know that books can be purchased in the spur of the moment to be read once and never again. Then, they are either left to gather dust on bookshelves, or thrown out as waste. At the same time, books are becoming increasingly more expensive.
                </p>
              </div>
            </div>

            <div className="border border-faded-white p-6 bg-surface">
              <ul className="arrow-list">
                <li className="text-white">
                  The solution: An app where readers can share their favorite books and form communities, allowing books to be reused by multiple readers.
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
          <div className="space-y-4 text-white-muted leading-relaxed">
            <p>
              To understand what potential users would be seeking in an app like Bookish, we conducted surveys through the &quot;Book Enjoyers&quot; Discord server, where we were able to reach out to 70+ individuals. From our research, we drew the following conclusions:
            </p>
            <ol className="list-decimal list-inside space-y-2">
              <li>Almost all (96%) respondents have unused books lying around their home.</li>
              <li>A substantial majority (78%) expressed a desire to read books more often.</li>
              <li>Respondents believed that purchasing books was too expensive (62%) or that borrowing from the library was inconvenient (36%).</li>
            </ol>
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
              <h3 className="text-lg text-white mb-3">Encourage local <span className="accent-text">connection.</span></h3>
              <p className="text-white-muted leading-relaxed">Allow users to connect with other local readers, cultivating a community beyond the digital.</p>
            </div>
            <div className="border border-faded-white p-6 bg-surface">
              <h3 className="text-lg text-white mb-3">Nurture genuine <span className="accent-text">discovery.</span></h3>
              <p className="text-white-muted leading-relaxed">Limit algorithmic recommendations and encourage users to discover new favorites naturally.</p>
            </div>
            <div className="border border-faded-white p-6 bg-surface">
              <h3 className="text-lg text-white mb-3">Increase literary <span className="accent-text">accessibility.</span></h3>
              <p className="text-white-muted leading-relaxed">Create a decentralized and community-driven library without emphasizing monetary exchange.</p>
            </div>
          </div>
        </section>

        {/* Mid-Fidelity Prototype */}
        <section 
          className="project-card mb-12 pt-8 border-t border-faded-white"
          style={{ '--card-index': cardIndex++ } as React.CSSProperties}
        >
          <h2 className="text-2xl md:text-3xl bit-apple-font text-white mb-6">Mid-Fidelity Prototype</h2>
          <p className="text-white-muted leading-relaxed mb-6">Mid-fi wireframes created from initial ideations.</p>
          <div className="overflow-hidden">
            <Image
              src="/assets/projects/Bookish/Bookish-Midfis.webp"
              alt="Mid-Fidelity Prototype"
              width={1000}
              height={1000}
            />
          </div>
        </section>

        {/* Usability Testing and Modifications */}
        <section 
          className="project-card mb-12 pt-8 border-t border-faded-white"
          style={{ '--card-index': cardIndex++ } as React.CSSProperties}
        >
          <h2 className="text-2xl md:text-3xl bit-apple-font text-white mb-6">Usability Testing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-surface p-6 rounded-lg">
              <p className="text-white mb-4 italic">&quot;The pure black and white color scheme strains my eyes.&quot;</p>
              <div className="flex flex-row gap-3">
                <div className="overflow-hidden rounded">
                  <Image
                    src="/assets/projects/Bookish/Bookish-Feedback1A.webp"
                    alt="Before: black and white color scheme"
                    width={1000}
                    height={1000}
                  />
                </div>
                <ArrowRight className="text-white-muted h-36 w-36 mx-auto self-center" />
                <div className="overflow-hidden rounded">
                  <Image
                    src="/assets/projects/Bookish/Bookish-Feedback1B.webp"
                    alt="After: softer color scheme"
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-surface p-6 rounded-lg">
              <p className="text-white mb-4 italic">&quot;I want to have more context for my messaging contacts.&quot;</p>
              <div className="flex flex-row gap-3">
                <div className="overflow-hidden rounded">
                  <Image
                    src="/assets/projects/Bookish/Bookish-Feedback2A.webp"
                    alt="Before: minimal messaging context"
                    width={1000}
                    height={1000}
                  />
                </div>
                <ArrowRight className="text-white-muted h-36 w-36 mx-auto self-center" />
                <div className="overflow-hidden rounded">
                  <Image
                    src="/assets/projects/Bookish/Bookish-Feedback2B.webp"
                    alt="After: more messaging context"
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final Product */}
        <section 
          className="project-card mb-12 pt-8 border-t border-faded-white"
          style={{ '--card-index': cardIndex++ } as React.CSSProperties}
        >
          <h2 className="text-2xl md:text-3xl bit-apple-font text-white mb-6">Final Product</h2>
          <p className="text-white-muted leading-relaxed mb-6">Take a look at my final deliverable below!</p>
          <div className="space-y-12">
            {[
              { title: 'Home and profile screens', src: '/assets/projects/Bookish/Bookish-Final1.webp' },
              { title: 'Natural discovery', src: '/assets/projects/Bookish/Bookish-Final2.webp' },
              { title: 'Community building', src: '/assets/projects/Bookish/Bookish-Final3.webp' },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <h3 className="text-xl text-white mb-4">{item.title}</h3>
                <div className="overflow-hidden">
                  <Image
                    src={item.src}
                    alt={`${item.title} - Final Product`}
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Closing Remarks */}
        <section 
          className="project-card mb-12 pt-8 border-t border-faded-white"
          style={{ '--card-index': cardIndex++ } as React.CSSProperties}
        >
          <h2 className="text-2xl md:text-3xl bit-apple-font text-white mb-6">Takeaways</h2>
          <div className="space-y-4">
            <div className="border border-faded-white p-6 bg-surface">
              <h3 className="text-lg text-white mb-3">Design with a <span className="accent-text">product mindset</span>.</h3>
              <ul className="arrow-list">
                <li className="text-white-muted leading-relaxed">
                  This was my first time working with engineers on a working product. The experience taught me the importance of designing with the programming and development process in mind.
                </li>
              </ul>
            </div>
            <div className="border border-faded-white p-6 bg-surface">
              <h3 className="text-lg text-white mb-3">Practice <span className="accent-text">iteration</span> and <span className="accent-text">modification</span>.</h3>
              <ul className="arrow-list">
                <li className="text-white-muted leading-relaxed">
                  It was very important for me to be able to adjust my designs accordingly as I received constructive feedback.
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
            <Link href="/projects/workup" className="sidebar-link">
              ← Workup
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
