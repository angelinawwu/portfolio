import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { LanguageChart, DeviceChart, ReservationFunnelChart } from '@/components/ManifestoCharts';
import ShinyText from '@/components/ShinyText';
import PixelTrailWrapper from '@/components/PixelTrailWrapper';

export const metadata = {
  title: 'Manifesto Market ＊ Angelina Wu',
  description: 'A mobile-first redesign to streamline booking and drive reservations by 121%',
};

export default function ManifestoMarketPage() {
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
              ← Back to projects
            </Link>
          </div>

          {/* Hero Section */}
          <section className="py-12">
            <h1 className="text-4xl md:text-5xl font-medium text-[#0000ff] mb-8">Manifesto Market</h1>
            
            <p className="text-xl text-[#0000ff] leading-relaxed mb-12">
              A mobile-first redesign to streamline booking and drive reservations by 121%
            </p>

            {/* Metadata Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="border border-[#0000ff]/10 rounded-lg p-6 bg-[#f6fafd]">
                <h3 className="text-[#8888ff] text-sm font-medium mb-2 geist-mono-font">My Role</h3>
                <p className="text-[#0000ff] font-medium">UX Intern</p>
              </div>
              <div className="border border-[#0000ff]/10 rounded-lg p-6 bg-[#f6fafd]">
                <h3 className="text-[#8888ff] text-sm font-medium mb-2 geist-mono-font">Timeline</h3>
                <p className="text-[#0000ff] font-medium">Jun - Aug 2025</p>
              </div>
              <div className="border border-[#0000ff]/10 rounded-lg p-6 bg-[#f6fafd]">
                <h3 className="text-[#8888ff] text-sm font-medium mb-2 geist-mono-font">Team</h3>
                <p className="text-[#0000ff] font-medium">1 Designer<br />1 Developer<br />2 Supervisors</p>
              </div>
              <div className="border border-[#0000ff]/10 rounded-lg p-6 bg-[#f6fafd]">
                <h3 className="text-[#8888ff] text-sm font-medium mb-2 geist-mono-font">Tools</h3>
                <p className="text-[#0000ff] font-medium">Figma<br />Wordpress</p>
              </div>
            </div>
          </section>

          {/* Overview */}
          <section className="py-12 border-t border-[#0000ff]/10">
            <h2 className="text-3xl md:text-4xl font-medium text-[#0000ff] mb-8">Overview</h2>
            <div className="space-y-6 text-[#0000ff] leading-relaxed">
              <p>
                Manifesto Market, located in the heart of Prague, is a company with the goal to create a physical space that brings together culture, food, and community. With over a dozen restaurants boasting a diverse variety of cuisines, the location cultivates a unique and lively dining experience.
              </p>
              <p>
                The goal of my internship at Manifesto was to redesign the website to transform traffic towards revenue, and encourage users to make reservations. Therefore, most of my concern for this redesign focused on optimizing call-to-actions and improving navigation intuitiveness.
              </p>
            </div>
          </section>

          {/* The Problem */}
          <section className="py-12 border-t border-[#0000ff]/10">
            <h2 className="text-3xl md:text-4xl font-medium text-[#0000ff] mb-8">The Problem</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-medium text-[#0000ff] mb-6"><ShinyText text="Users aren't being driven towards reservations." /></h3>
                <div className="space-y-6 text-[#0000ff] leading-relaxed">
                  <p>
                    Manifesto&apos;s old website was primarily constructed with aesthetics in mind. With bold block-shapes and an eccentric menu bar, usability and accessibility were sacrificed for style. While the website&apos;s uniqueness made it stand out in the sea of generic hospitality homepages, its mobile-unfriendly layout and unintuitive navigation structure created a series of roadblocks for the user, making it difficult to make reservations, view menus, or find location information.
                  </p>
                </div>
              </div>

              <div className="bg-[#f6fafd] border border-[#0000ff]/10 rounded-lg p-8">
                <ul className="arrow-list">
                  <li className="text-[#0000ff] font-medium">
                    The solution: An overhauled, usability-focused site with the goal of translating site visits into eventual sales.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Research */}
          <section className="py-12 border-t border-[#0000ff]/10">
            <h2 className="text-3xl md:text-4xl font-medium text-[#0000ff] mb-8">Research</h2>
            
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl md:text-3xl font-medium text-[#0000ff] mb-6">Understanding our users</h3>
                <p className="text-[#0000ff] leading-relaxed mb-6">
                  I began my design process with a deep dive into user research. Leveraging Google Analytics, I investigated the demographics of the primary user base and how they interacted with the site. This phase revealed critical patterns that set the foundation for every design decision to come.
                </p>
                <p className="text-[#0000ff] leading-relaxed mb-6">
                  One of my specific concerns was how users interacted with the reservation system. ResDiary, the widget that Manifesto Market used for reservations, helpfully offered linked analytics with Google, which allowed me to track the percentage of users that interacted with each step of the process.
                </p>

                {/* Charts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 z-999999">
                  <div className="bg-[#f6fafd] border border-[#0000ff]/10 rounded-lg p-6">
                    <LanguageChart />
                  </div>
                  <div className="bg-[#f6fafd] border border-[#0000ff]/10 rounded-lg p-6">
                    <DeviceChart />
                  </div>
                </div>

                <p className="text-[#8888ff] text-sm mb-6">
                  Note: Step 3 was omitted because it is a optional step.
                </p>
                
                <div className="bg-[#f6fafd] border border-[#0000ff]/10 rounded-lg p-6">
                  <ReservationFunnelChart />
                </div>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-medium text-[#0000ff] mb-6">Putting faces to the data</h3>
                <p className="text-[#0000ff] leading-relaxed mb-6">
                  Using my research, I developed detailed user personas to humanize our data and guide empathy-driven design. These personas anchored my design process, ensuring each decision addressed real user needs and motivations.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="w-full h-auto bg-[#f6fafd] border border-[#0000ff]/10 rounded-lg flex items-center justify-center overflow-hidden">
                    <Image
                      src="/assets/projects/Manifesto/Manifesto-UserPersona-1.png"
                      alt="User persona 1"
                      width={1000}
                      height={1000}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="w-full h-auto bg-[#f6fafd] border border-[#0000ff]/10 rounded-lg flex items-center justify-center overflow-hidden">
                    <Image
                      src="/assets/projects/Manifesto/Manifesto-UserPersona-2.png"
                      alt="User persona 2"
                      width={1000}
                      height={1000}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-medium text-[#0000ff] mb-6">Getting to the Root</h3>
                <p className="text-[#0000ff] leading-relaxed mb-6">
                  I performed a comprehensive website audit through a UX lens. Every touchpoint was scrutinized for usability, accessibility, and alignment with user goals. This audit exposed high-friction areas: ambiguous CTAs, a convoluted reservation path, and a lack of responsive design. These insights clarified where the user journey was breaking down and where intervention was most urgent.
                </p>
                
                <div className="w-full h-auto bg-[#f6fafd] border border-[#0000ff]/10 rounded-lg flex items-center justify-center">
                  <Image
                    src="/assets/projects/Manifesto/Manifesto-Analysis.png"
                    alt="Website audit"
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-medium text-[#0000ff] mb-8">Key Findings</h3>
                <p className="text-[#0000ff] leading-relaxed mb-8">
                  My research led me to three key findings. These findings highlighted the main challenges users faced, and provided a focused direction for the subsequent design phase.
                </p>

                <div className="space-y-8">
                  <div className="border border-[#0000ff]/10 rounded-lg p-8 bg-[#f6fafd]">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-[#f6fafd] border border-[#0000ff]/20 rounded-full flex items-center justify-center">
                        <span className="text-[#0000ff] font-mono text-sm">1</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-medium text-[#0000ff] mb-4">Conversion is lost in the reservation process.</h4>
                        <p className="text-[#0000ff] leading-relaxed">
                          While more than a quarter of users land on the reservation widget, more than 80% of those users exit the page immediately. The sharp decline suggests that call-to-actions are either misleading or confusing, pushing users into a flow they didn&apos;t intend to enter. Improving clarity around CTAs could reduce drop-offs and create stronger conversion outcomes.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border border-[#0000ff]/10 rounded-lg p-8 bg-[#f6fafd]">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-[#f6fafd] border border-[#0000ff]/20 rounded-full flex items-center justify-center">
                        <span className="text-[#0000ff] font-mono text-sm">2</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-medium text-[#0000ff] mb-4">User diversity reflects an international audience.</h4>
                        <p className="text-[#0000ff] leading-relaxed">
                          The analytics showed that visitors engage with the site in a wide range of languages. The dominance of non-Czech languages (70.7%) suggests that tourism is a large driving force for Manifesto&apos;s audience, indicating that optimizing multilingual support is critical for improving usability and inclusivity across the site.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border border-[#0000ff]/10 rounded-lg p-8 bg-[#f6fafd]">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-[#f6fafd] border border-[#0000ff]/20 rounded-full flex items-center justify-center">
                        <span className="text-[#0000ff] font-mono text-sm">3</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-medium text-[#0000ff] mb-4">Mobile-first is essential.</h4>
                        <p className="text-[#0000ff] leading-relaxed">
                          76.3% of active users accessed the site on mobile devices, with desktop usage representing a much smaller share. This emphasizes the need for a mobile-first design approach, ensuring that core interactions, navigation, and content remain seamless on smaller screens.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Design */}
          <section className="py-12 border-t border-[#0000ff]/10">
            <h2 className="text-3xl md:text-4xl font-medium text-[#0000ff] mb-8">Design</h2>
            
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl md:text-3xl font-medium text-[#0000ff] mb-6">Putting it all together...</h3>
                <p className="text-[#0000ff] leading-relaxed mb-6">
                  With insights from research, personas, and audit findings, I moved into ideation and prototyping. My design approach was conversion-driven, removing obstacles discovered in earlier stages. I prioritized a mobile-first interface and reimagined CTAs to be contextually relevant and visually distinct.
                </p>
                <div className="w-full h-auto bg-[#f6fafd] border border-[#0000ff]/10 rounded-lg overflow-hidden mb-6">
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
                <div>
                <h3 className="text-xl md:text-2xl font-medium text-[#0000ff] mb-6 mt-12">CTAs built for conversion</h3>
                <p className="text-[#0000ff] leading-relaxed mb-6">
                  For the hero section&apos;s CTAs, I focused on intentional, actionable language. The user is immediately presented with two options, allowing them to first survey the menu options before committing to paying for a reservation.
                </p>
                <div className="w-full h-auto flex items-center justify-center">
                  <Image
                    src="/assets/projects/Manifesto/Manifesto-DP-1.png"
                    alt="Wireframe"
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-medium text-[#0000ff] mb-6">Intuitive navigation</h3>
                <p className="text-[#0000ff] leading-relaxed mb-6">
                  I reorganized the website&apos;s navigation menu, minimizing content obstruction and highlighting the most relevant pages as permanent presences in the navbar.
                </p>

                <div className="w-full h-auto flex items-center justify-center">
                  <Image
                    src="/assets/projects/Manifesto/Manifesto-DP-2.png"
                    alt="Wireframe"
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-medium text-[#0000ff] mb-6">Unexpected limitations...</h3>
                <p className="text-[#0000ff] leading-relaxed mb-6">
                  Because my supervisor had been away and recovering from illness, communication had been limited. Once I shared my redesign proposal, I came to understand that several of my ideas weren&apos;t possible within the constraints of the company&apos;s website builder.
                </p>
                <p className="text-[#0000ff] leading-relaxed mb-6">
                  Since the original website had been built by a non-inactive third-party company, Manifesto&apos;s employees were only able to edit very basic components, such as changing text and image content. Any greater layout updates would be impossible without completely rebuilding the site from scratch.
                </p>
                <p className="text-[#0000ff] leading-relaxed mb-6">
                  With this in mind, I refocused my goal to what I could improve: call-to-action text. I shortened my pitch, highlighting UX writing issues and identifying problematic button text to improve reservation conversion. Although not every aspect of my proposal could be implemented, I&apos;m happy with the meaningful improvements that were made.
                </p>

                <div className="w-full h-auto flex items-center justify-center">
                  <Image
                    src="/assets/projects/Manifesto/Manifesto-DP-3.png"
                    alt="Wireframe"
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>
            </div>
          </section>


          {/* Impact */}
          <section className="py-12 border-t border-[#0000ff]/10">
            <h2 className="text-3xl md:text-4xl font-medium text-[#0000ff] mb-8">Impact</h2>
            
            <div className="space-y-6">
              <div className="border border-[#0000ff]/10 rounded-lg p-6 bg-[#f6fafd]">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#f6fafd] border border-[#0000ff]/20 rounded-full flex items-center justify-center">
                    <span className="text-[#0000ff] font-mono text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-[#0000ff] mb-2">121% increase in reservation conversions from the reservation page.</h4>
                    <p className="text-[#0000ff] leading-relaxed">
                      Updating the primary hero CTA guided more users to the reservation flow with clear intent. This small adjustment reduced friction in the journey and made the next step more obvious, ultimately driving more bookings.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-[#0000ff]/10 rounded-lg p-6 bg-[#f6fafd]">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#f6fafd] border border-[#0000ff]/20 rounded-full flex items-center justify-center">
                    <span className="text-[#0000ff] font-mono text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-[#0000ff] mb-2">Adapting the project for a new vision.</h4>
                    <p className="text-[#0000ff] leading-relaxed">
                      The way that Manifesto&apos;s website was constructed limited the ability to modify its layout or create significant UI changes. However, Martin Barry Group, the organization behind Manifesto, recently launched another unique food-and-beverage concept: Kalle Halle. With this new company&apos;s website being built in-house from scratch, many of my ideas involving CTAs and navigation will be utilized—stay tuned!
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-[#0000ff]/10 rounded-lg p-6 bg-[#f6fafd]">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#f6fafd] border border-[#0000ff]/20 rounded-full flex items-center justify-center">
                    <span className="text-[#0000ff] font-mono text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-[#0000ff] mb-2">Creating a mobile-friendly experience.</h4>
                    <p className="text-[#0000ff] leading-relaxed">
                      By prioritizing users on smaller screens, the website meets the needs of the majority who browse on their phones. Checking restaurants, exploring menus, and making a reservation are all streamlined into a smooth, intuitive flow, making it effortless for guests to plan their visit on the go.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Closing Remarks and Takeaways */}
          <section className="py-12 border-t border-[#0000ff]/10">
            <h2 className="text-3xl md:text-4xl font-medium text-[#0000ff] mb-8">Closing Remarks and Takeaways</h2>
            
            <div className="space-y-6">
              <div className="border border-[#0000ff]/10 rounded-lg p-8 bg-[#f6fafd]">
                <h3 className="text-xl font-medium text-[#0000ff] mb-4">
                  Data is <ShinyText text="everything" />.
                </h3>
                  <ul className="arrow-list">
                    <li className="text-[#0000ff] leading-relaxed">
                      Using Google Analytics was pivotal in understanding how users were actually interacting with the site. The insights uncovered pain points and revealed which pages truly mattered to visitors. This was my first time using Google Analytics extensively, and I was wowed by all of its capabilities.
                    </li>
                  </ul>
              </div>

              <div className="border border-[#0000ff]/10 rounded-lg p-8 bg-[#f6fafd]">
                <h3 className="text-xl font-medium text-[#0000ff] mb-4">
                  Understand the <ShinyText text="limitations first" />.
                </h3>
                  <ul className="arrow-list">
                    <li className="text-[#0000ff] leading-relaxed">
                      I jumped into this project head-on, excited to completely revamp the site without a complete understanding of what was plausible within the confines of the pre-made website builder. In the future, fully comprehending the limitations of the project is a top priority!
                    </li>
                  </ul>
              </div>
            </div>
          </section>

          {/* Navigation */}
          <nav className="py-16 border-t border-[#0000ff]/10">
            <div className="flex justify-between items-center">
              <Link
                href="/projects/workup"
                className="flex items-center space-x-2 blue-hover-magenta-text"
              >
                <span>←</span>
                <span>Workup</span>
              </Link>
              <Link
                href="/projects/bookish"
                className="flex items-center space-x-2 blue-hover-magenta-text"
              >
                <span>Bookish</span>
                <span>→</span>
              </Link>
            </div>
          </nav>
        </div>
      </main>

      <Footer />
    </div>
  );
}
