import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import ShinyText from '@/components/ShinyText';
import PixelTrailWrapper from '@/components/PixelTrailWrapper';

export const metadata = {
  title: 'Bookish ＊ Angelina Wu',
  description: 'Redesigning the reading experience with accessibility and sustainability in mind',
};

export default function BookishPage() {
  return (
    <div className="min-h-screen bg-[#EDF1FB]">
      <PixelTrailWrapper />
      <Navigation />
      
      <main className="pt-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Back Button */}
          <div className="py-8">
            <Link 
              href="/" 
              className="blue-hover-magenta-text"
            >
              ← Back to Home
            </Link>
          </div>

          {/* Hero Section */}
          <section className="py-12">
            <h1 className="text-4xl md:text-5xl font-medium text-[#0000ff] mb-4">
              Bookish
            </h1>
            
            <p className="text-xl text-[#0000ff] leading-relaxed mb-12 max-w-3xl">
              Redesigning the reading experience with accessibility and sustainability in mind
            </p>

            {/* Metadata Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="border border-[#0000ff]/10 rounded-lg p-6 bg-[#f6fafd]">
                <h3 className="text-[#8888ff] text-sm font-medium mb-2 geist-mono-font">My Role</h3>
                <p className="text-[#0000ff] font-medium">Lead Product Designer</p>
              </div>
              <div className="border border-[#0000ff]/10 rounded-lg p-6 bg-[#f6fafd]">
                <h3 className="text-[#8888ff] text-sm font-medium mb-2 geist-mono-font">Timeline</h3>
                <p className="text-[#0000ff] font-medium">Mar – May 2024</p>
              </div>
              <div className="border border-[#0000ff]/10 rounded-lg p-6 bg-[#f6fafd]">
                <h3 className="text-[#8888ff] text-sm font-medium mb-2 geist-mono-font">Team</h3>
                <p className="text-[#0000ff] font-medium">1 Designer<br />3 Developers</p>
              </div>
              <div className="border border-[#0000ff]/10 rounded-lg p-6 bg-[#f6fafd]">
                <h3 className="text-[#8888ff] text-sm font-medium mb-2 geist-mono-font">Tools</h3>
                <p className="text-[#0000ff] font-medium">Figma, Illustrator</p>
              </div>
            </div>
          </section>

          {/* Overview */}
          <section className="py-12 border-t border-[#0000ff]/10">
            <h2 className="text-3xl md:text-4xl font-medium text-[#0000ff] mb-8">Overview</h2>
            <div className="space-y-6 text-[#0000ff] leading-relaxed max-w-3xl">
              <p>
                Bookish&apos;s mission is to connect readers in local communities and to increase the accessibility and sustainability of reading physical books. In the app, users can submit books they own into a personal catalog, which other readers can then borrow. Users are also recommended books located near them, forming a decentralized quasi-library that exists both online and in person.
              </p>
              <p>
                In the project, I was responsible for creating Bookish&apos;s brand identity, including logos, colors, and typography. I also designed the app&apos;s user interface, taking feedback from both the engineers and user research to create an optimal iteration.
              </p>
            </div>
          </section>

          {/* The Problem */}
          <section className="py-12 border-t border-[#0000ff]/10">
            <h2 className="text-3xl md:text-4xl font-medium text-[#0000ff] mb-8">The Problem</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-medium text-[#0000ff] mb-6"><ShinyText text="Reading physical books is financially and environmentally unsustainable." /></h3>
                <div className="space-y-6 text-[#0000ff] leading-relaxed max-w-3xl">
                  <p>
                    Avid bookworms know that books can be purchased in the spur of the moment to be read once and never again. Then, they are either left to gather dust on bookshelves, or thrown out (gasp!) as waste. At the same time, books are becoming increasingly more expensive, making it harder to read without turning to digital options.
                  </p>
                </div>
              </div>

              <div className="bg-[#f6fafd] border border-[#0000ff]/10 rounded-lg p-8">
                <ul className="arrow-list">
                  <li className="text-[#0000ff] font-medium">
                    The solution: An app where readers can share their favorite books and form communities, allowing books to be reused by multiple readers.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* User Research */}
          <section className="py-12 border-t border-[#0000ff]/10">
            <h2 className="text-3xl md:text-4xl font-medium text-[#0000ff] mb-8">User Research</h2>
            <div className="space-y-6 text-[#0000ff] leading-relaxed max-w-3xl">
              <p>
                To understand what potential users would be seeking in an app like Bookish, we conducted surveys through the &quot;Book Enjoyers&quot; Discord server, where we were able to reach out to 70+ individuals to discuss their reading habits and goals. From our research, we drew the following conclusions:
              </p>
              <ol className="list-decimal list-inside space-y-3">
                <li>Almost all (96%) respondents have unused books lying around their home, with many (32%) respondents owning more than 100 unused books.</li>
                <li>A substantial majority (78%) of respondents expressed a desire to read books more often.</li>
                <li>Respondents generally expressed discontentment with obtaining access to books, with many believing that purchasing books was too expensive (62%) or that borrowing books from the library was inconvenient (36%).</li>
              </ol>
            </div>
          </section>

          {/* Project Goals */}
          <section className="py-12 border-t border-[#0000ff]/10">
            <h2 className="text-3xl md:text-4xl font-medium text-[#0000ff] mb-8">Project Goals</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#f6fafd] border border-[#0000ff]/10 rounded-lg p-8">
                <h3 className="text-xl font-medium text-[#0000ff] mb-3">Encourage local <ShinyText text="connection." /></h3>
                <p className="text-[#0000ff] leading-relaxed">Allow users to connect with other local readers, cultivating a community beyond the digital.</p>
              </div>
              <div className="bg-[#f6fafd] border border-[#0000ff]/10 rounded-lg p-8">
                <h3 className="text-xl font-medium text-[#0000ff] mb-3">Nurture genuine <ShinyText text="discovery." /></h3>
                <p className="text-[#0000ff] leading-relaxed">Limit algorithmic recommendations and encourage users to discover new favorites naturally.</p>
              </div>
              <div className="bg-[#f6fafd] border border-[#0000ff]/10 rounded-lg p-8">
                <h3 className="text-xl font-medium text-[#0000ff] mb-3">Increase literary <ShinyText text="accessibility." /></h3>
                <p className="text-[#0000ff] leading-relaxed">Create a decentralized and community-driven library without emphasizing any monetary exchange.</p>
              </div>
            </div>
          </section>

          {/* Mid-Fidelity Prototype */}
          <section className="py-12 border-t border-[#0000ff]/10">
            <h2 className="text-3xl md:text-4xl font-medium text-[#0000ff] mb-8">Mid-Fidelity Prototype</h2>
            <p className="text-[#0000ff] leading-relaxed mb-6 max-w-3xl">Mid-fi wireframes created from initial ideations.</p>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
              <Image
                src="/assets/projects/Bookish/Bookish-Midfis.png"
                alt="Mid-Fidelity Prototype"
                width={1000}
                height={1000}
              />
            </div>
          </section>

          {/* Usability Testing and Modifications */}
          <section className="py-12 border-t border-[#0000ff]/10">
            <h2 className="text-3xl md:text-4xl font-medium text-[#0000ff] mb-8">Usability Testing and Modifications</h2>
            <div className="space-y-8 max-w-4xl">
                  <div>
                <p className="text-[#0000ff] mb-3">&quot;The pure black and white color scheme strains my eyes.&quot;</p>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Image
                      src="/assets/projects/Bookish/Bookish-Feedback1A.png"
                      alt="Usability Testing and Modifications"
                      width={1000}
                      height={1000}
                    />
                    <ArrowRight className="text-[#0000ff] h-10 w-10 m-auto" />
                    <Image
                      src="/assets/projects/Bookish/Bookish-Feedback1B.png"
                      alt="Usability Testing and Modifications"
                      width={1000}
                      height={1000}
                    />
                  </div>
                </div>
                  </div>
                  <div>
                <p className="text-[#0000ff] mb-3">&quot;I want have more context for my messaging contacts.&quot;</p>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Image
                      src="/assets/projects/Bookish/Bookish-Feedback2A.png"
                      alt="Usability Testing and Modifications"
                      width={1000}
                      height={1000}
                    />
                    <ArrowRight className="text-[#0000ff] h-10 w-10 m-auto" />
                    <Image
                      src="/assets/projects/Bookish/Bookish-Feedback2B.png"
                      alt="Usability Testing and Modifications"
                      width={1000}
                      height={1000}
                    />
                  </div>
                </div>
              </div>

                </div>
          </section>

          {/* Final Product */}
          <section className="py-12 border-t border-[#0000ff]/10">
            <h2 className="text-3xl md:text-4xl font-medium text-[#0000ff] mb-8">Final Product</h2>
            <p className="text-[#0000ff] leading-relaxed mb-6">Take a look at my final deliverable below!</p>
            <div className="space-y-12 text-center">
              {[
                { title: 'Home and profile screens', src: '/assets/projects/Bookish/Bookish-Final1.png' },
                { title: 'Natural discovery', src: '/assets/projects/Bookish/Bookish-Final2.png' },
                { title: 'Community building', src: '/assets/projects/Bookish/Bookish-Final3.png' },
              ].map((item) => (
                <div key={item.title}>
                  <h3 className="text-xl md:text-2xl font-medium text-[#0000ff] mb-6">{item.title}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
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

          {/* Closing Remarks and Takeaways */}
          <section className="py-12 border-t border-[#0000ff]/10">
            <h2 className="text-3xl md:text-4xl font-medium text-[#0000ff] mb-8">Closing Remarks and Takeaways</h2>
            <div className="space-y-6">
              <div className="bg-[#f6fafd] border border-[#0000ff]/10 rounded-lg p-8">
                <h3 className="text-xl font-medium text-[#0000ff] mb-4">Design with a <ShinyText text="product mindset" />.</h3>
                  <ul className="arrow-list">
                    <li className="text-[#0000ff] leading-relaxed">This was my first time working with engineers on a working product. The experience taught me the importance of designing with the programming and development process in mind. Instead of focusing on aesthetics, I found it crucial to have a product mindset and think critically about how my designs would be implemented into the app.</li>
                  </ul>
              </div>
              <div className="bg-[#f6fafd] border border-[#0000ff]/10 rounded-lg p-8">
                <h3 className="text-xl font-medium text-[#0000ff] mb-4">Practice <ShinyText text="iteration" /> and <ShinyText text="modification" />.</h3>
                  <ul className="arrow-list">
                    <li className="text-[#0000ff] leading-relaxed">It was very important for me to be able to adjust my designs accordingly as I received constructive feedback. In the future, I&apos;d like to work on drafting multiple iterations of a design in the ideation stage, rather than solely making adjustments in later stages.</li>
                  </ul>
              </div>
            </div>
          </section>

          {/* Navigation */}
          <nav className="py-16 border-t border-[#0000ff]/10">
            <div className="flex justify-between items-center">
              <Link
                href="/projects/manifesto-market"
                className="flex items-center space-x-2 blue-hover-magenta-text"
              >
                <span>←</span>
                <span>Manifesto Market</span>
              </Link>
            </div>
          </nav>
        </div>
      </main>

      <Footer />
    </div>
  );
}
