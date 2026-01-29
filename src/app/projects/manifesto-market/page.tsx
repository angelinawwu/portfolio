import Link from 'next/link';
import Image from 'next/image';
import { LanguageChart, DeviceChart, ReservationFunnelChart } from '@/components/ManifestoCharts';

export const metadata = {
  title: 'Manifesto Market ＊ Angelina Wu',
  description: 'A mobile-first redesign to streamline booking and drive reservations by 121%',
};

export default function ManifestoMarketPage() {
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
          <h1 className="text-4xl md:text-6xl bit-apple-font text-white mb-6">Manifesto Market</h1>
          
          <p className="text-lg text-white-muted leading-relaxed mb-8">
            A mobile-first redesign to streamline booking and drive reservations by 121%
          </p>

          {/* Metadata Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="border border-faded-white p-4 bg-surface">
              <h3 className="text-xs geist-mono-font text-white-muted mb-2">MY ROLE</h3>
              <p className="text-white">UX Intern</p>
            </div>
            <div className="border border-faded-white p-4 bg-surface">
              <h3 className="text-xs geist-mono-font text-white-muted mb-2">TIMELINE</h3>
              <p className="text-white">Jun - Aug 2025</p>
            </div>
            <div className="border border-faded-white p-4 bg-surface">
              <h3 className="text-xs geist-mono-font text-white-muted mb-2">TEAM</h3>
              <p className="text-white">1 Designer<br />1 Developer<br />2 Supervisors</p>
            </div>
            <div className="border border-faded-white p-4 bg-surface">
              <h3 className="text-xs geist-mono-font text-white-muted mb-2">TOOLS</h3>
              <p className="text-white">Figma<br />Wordpress</p>
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
              Manifesto Market, located in the heart of Prague, is a company with the goal to create a physical space that brings together culture, food, and community. With over a dozen restaurants boasting a diverse variety of cuisines, the location cultivates a unique and lively dining experience.
            </p>
            <p>
              The goal of my internship at Manifesto was to redesign the website to transform traffic towards revenue, and encourage users to make reservations. Therefore, most of my concern for this redesign focused on optimizing call-to-actions and improving navigation intuitiveness.
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
                <span className="accent-text">Users aren&apos;t being driven towards reservations.</span>
              </h3>
              <div className="space-y-4 text-white-muted leading-relaxed">
                <p>
                  Manifesto&apos;s old website was primarily constructed with aesthetics in mind. With bold block-shapes and an eccentric menu bar, usability and accessibility were sacrificed for style. While the website&apos;s uniqueness made it stand out in the sea of generic hospitality homepages, its mobile-unfriendly layout and unintuitive navigation structure created a series of roadblocks for the user, making it difficult to make reservations, view menus, or find location information.
                </p>
              </div>
            </div>

            <div className="border border-faded-white p-6 bg-surface">
              <ul className="arrow-list">
                <li className="text-white">
                  The solution: An overhauled, usability-focused site with the goal of translating site visits into eventual sales.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Research */}
        <section 
          className="project-card mb-12 pt-8 border-t border-faded-white"
          style={{ '--card-index': cardIndex++ } as React.CSSProperties}
        >
          <h2 className="text-2xl md:text-3xl bit-apple-font text-white mb-6">Research</h2>
          
          <div className="space-y-12">
            <div>
              <h3 className="text-xl md:text-2xl text-white mb-4">Understanding our users</h3>
              <p className="text-white-muted leading-relaxed mb-4">
                I began my design process with a deep dive into user research. Leveraging Google Analytics, I investigated the demographics of the primary user base and how they interacted with the site. This phase revealed critical patterns that set the foundation for every design decision to come.
              </p>
              <p className="text-white-muted leading-relaxed mb-6">
                One of my specific concerns was how users interacted with the reservation system. ResDiary, the widget that Manifesto Market used for reservations, helpfully offered linked analytics with Google, which allowed me to track the percentage of users that interacted with each step of the process.
              </p>

              {/* Charts Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="border border-faded-white p-4 bg-surface">
                  <LanguageChart />
                </div>
                <div className="border border-faded-white p-4 bg-surface">
                  <DeviceChart />
                </div>
              </div>

              <p className="text-white-muted text-sm mb-4">
                Note: Step 3 was omitted because it is an optional step.
              </p>
              
              <div className="border border-faded-white p-4 bg-surface">
                <ReservationFunnelChart />
              </div>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl text-white mb-4">Putting faces to the data</h3>
              <p className="text-white-muted leading-relaxed mb-6">
                Using my research, I developed detailed user personas to humanize our data and guide empathy-driven design. These personas anchored my design process, ensuring each decision addressed real user needs and motivations.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="overflow-hidden">
                  <Image
                    src="/assets/projects/Manifesto/Manifesto-UserPersona-1.webp"
                    alt="User persona 1"
                    width={1000}
                    height={1000}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="overflow-hidden">
                  <Image
                    src="/assets/projects/Manifesto/Manifesto-UserPersona-2.webp"
                    alt="User persona 2"
                    width={1000}
                    height={1000}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl text-white mb-4">Getting to the Root</h3>
              <p className="text-white-muted leading-relaxed mb-6">
                I performed a comprehensive website audit through a UX lens. Every touchpoint was scrutinized for usability, accessibility, and alignment with user goals. This audit exposed high-friction areas: ambiguous CTAs, a convoluted reservation path, and a lack of responsive design.
              </p>
              
              <div className="overflow-hidden">
                <Image
                  src="/assets/projects/Manifesto/Manifesto-Analysis.webp"
                  alt="Website audit"
                  width={1000}
                  height={1000}
                />
              </div>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl text-white mb-6">Key Findings</h3>
              <p className="text-white-muted leading-relaxed mb-6">
                My research led me to three key findings. These findings highlighted the main challenges users faced, and provided a focused direction for the subsequent design phase.
              </p>

              <div className="space-y-4">
                <div className="border border-faded-white p-6 bg-surface">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 border border-faded-white flex items-center justify-center">
                      <span className="text-white geist-mono-font text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="text-lg text-white mb-2">Conversion is lost in the reservation process.</h4>
                      <p className="text-white-muted leading-relaxed">
                        While more than a quarter of users land on the reservation widget, more than 80% of those users exit the page immediately. The sharp decline suggests that call-to-actions are either misleading or confusing.
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
                      <h4 className="text-lg text-white mb-2">User diversity reflects an international audience.</h4>
                      <p className="text-white-muted leading-relaxed">
                        The dominance of non-Czech languages (70.7%) suggests that tourism is a large driving force for Manifesto&apos;s audience, indicating that optimizing multilingual support is critical.
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
                      <h4 className="text-lg text-white mb-2">Mobile-first is essential.</h4>
                      <p className="text-white-muted leading-relaxed">
                        76.3% of active users accessed the site on mobile devices, emphasizing the need for a mobile-first design approach.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Design */}
        <section 
          className="project-card mb-12 pt-8 border-t border-faded-white"
          style={{ '--card-index': cardIndex++ } as React.CSSProperties}
        >
          <h2 className="text-2xl md:text-3xl bit-apple-font text-white mb-6">Design</h2>
          
          <div className="space-y-12">
            <div>
              <h3 className="text-xl md:text-2xl text-white mb-4">Putting it all together...</h3>
              <p className="text-white-muted leading-relaxed mb-6">
                With insights from research, personas, and audit findings, I moved into ideation and prototyping. My design approach was conversion-driven, removing obstacles discovered in earlier stages.
              </p>
              <div className="overflow-hidden mb-6">
                <video
                  src="/assets/projects/Manifesto/manifesto-demo.mp4"
                  className="w-full h-auto"
                  controls
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                />
              </div>

              <h4 className="text-lg text-white mb-4 mt-8">CTAs built for conversion</h4>
              <p className="text-white-muted leading-relaxed mb-4">
                For the hero section&apos;s CTAs, I focused on intentional, actionable language.
              </p>
              <div className="overflow-hidden">
                <Image
                  src="/assets/projects/Manifesto/Manifesto-DP-1.webp"
                  alt="CTA Design"
                  width={1000}
                  height={1000}
                />
              </div>
            </div>

            <div>
              <h4 className="text-lg text-white mb-4">Intuitive navigation</h4>
              <p className="text-white-muted leading-relaxed mb-4">
                I reorganized the website&apos;s navigation menu, minimizing content obstruction and highlighting the most relevant pages.
              </p>
              <div className="overflow-hidden">
                <Image
                  src="/assets/projects/Manifesto/Manifesto-DP-2.webp"
                  alt="Navigation Design"
                  width={1000}
                  height={1000}
                />
              </div>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl text-white mb-4">Unexpected limitations...</h3>
              <p className="text-white-muted leading-relaxed mb-4">
                Because my supervisor had been away and recovering from illness, communication had been limited. Once I shared my redesign proposal, I came to understand that several of my ideas weren&apos;t possible within the constraints of the company&apos;s website builder.
              </p>
              <p className="text-white-muted leading-relaxed mb-4">
                With this in mind, I refocused my goal to what I could improve: call-to-action text. I shortened my pitch, highlighting UX writing issues and identifying problematic button text to improve reservation conversion.
              </p>
              <div className="overflow-hidden">
                <Image
                  src="/assets/projects/Manifesto/Manifesto-DP-3.webp"
                  alt="UX Writing"
                  width={1000}
                  height={1000}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Impact */}
        <section 
          className="project-card mb-12 pt-8 border-t border-faded-white"
          style={{ '--card-index': cardIndex++ } as React.CSSProperties}
        >
          <h2 className="text-2xl md:text-3xl bit-apple-font text-white mb-6">Impact</h2>
          
          <div className="space-y-4">
            <div className="border border-faded-white p-6 bg-surface">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 border border-faded-white flex items-center justify-center">
                  <span className="text-white geist-mono-font text-sm">1</span>
                </div>
                <div>
                  <h4 className="text-lg text-white mb-2">121% increase in reservation conversions from the reservation page.</h4>
                  <p className="text-white-muted leading-relaxed">
                    Updating the primary hero CTA guided more users to the reservation flow with clear intent.
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
                  <h4 className="text-lg text-white mb-2">Adapting the project for a new vision.</h4>
                  <p className="text-white-muted leading-relaxed">
                    Martin Barry Group, the organization behind Manifesto, recently launched Kalle Halle. Many of my ideas involving CTAs and navigation will be utilized there.
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
                  <h4 className="text-lg text-white mb-2">Creating a mobile-friendly experience.</h4>
                  <p className="text-white-muted leading-relaxed">
                    By prioritizing users on smaller screens, the website meets the needs of the majority who browse on their phones.
                  </p>
                </div>
              </div>
            </div>
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
              <h3 className="text-lg text-white mb-3">
                Data is <span className="accent-text">everything</span>.
              </h3>
              <ul className="arrow-list">
                <li className="text-white-muted leading-relaxed">
                  Using Google Analytics was pivotal in understanding how users were actually interacting with the site. This was my first time using Google Analytics extensively, and I was wowed by all of its capabilities.
                </li>
              </ul>
            </div>

            <div className="border border-faded-white p-6 bg-surface">
              <h3 className="text-lg text-white mb-3">
                Understand the <span className="accent-text">limitations first</span>.
              </h3>
              <ul className="arrow-list">
                <li className="text-white-muted leading-relaxed">
                  I jumped into this project head-on without a complete understanding of what was plausible within the confines of the pre-made website builder. In the future, fully comprehending the limitations of the project is a top priority!
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
            <Link href="/projects/workup" className="sidebar-link">
              Workup →
            </Link>
            
          </div>
        </nav>
      </div>
    </div>
  );
}
