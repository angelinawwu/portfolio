import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Workup ＊ Angelina Wu',
  description: 'Restructuring an AI-powered interview tool to empower students to prepare with confidence',
};

export default function WorkupPage() {
  return (
    <div className="min-h-screen bg-black p-4 md:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/" className="sidebar-link">
            ← Back to projects
          </Link>
        </div>

        {/* Hero Section */}
        <section className="mb-12">
          <h1 className="text-4xl md:text-6xl bit-apple-font text-white mb-6">WorkUp</h1>
          
          <p className="text-lg text-white-muted leading-relaxed mb-8">
            Restructuring the interview feature for an AI-powered career development startup
          </p>

          {/* Metadata Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="border border-faded-white p-4 bg-surface">
              <h3 className="text-xs geist-mono-font text-white-muted mb-2">MY ROLE</h3>
              <p className="text-white">Product Designer</p>
            </div>
            <div className="border border-faded-white p-4 bg-surface">
              <h3 className="text-xs geist-mono-font text-white-muted mb-2">TIMELINE</h3>
              <p className="text-white">Jan - Jun 2025</p>
            </div>
            <div className="border border-faded-white p-4 bg-surface">
              <h3 className="text-xs geist-mono-font text-white-muted mb-2">TEAM</h3>
              <p className="text-white">14 Designers<br />1 Product Team</p>
            </div>
            <div className="border border-faded-white p-4 bg-surface">
              <h3 className="text-xs geist-mono-font text-white-muted mb-2">TOOLS</h3>
              <p className="text-white">Figma</p>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="mb-12 pt-8 border-t border-faded-white">
          <h2 className="text-2xl md:text-3xl bit-apple-font text-white mb-6">Overview</h2>
          <div className="space-y-4 text-white-muted leading-relaxed">
            <p>
              Workup is an AI-powered professional networking app that aims to combine social media and job searching. With a feed that highlights career-centered content, and numerous AI-powered tools to prepare users for recruitment, Workup makes it easy to land a dream job.
            </p>
            <p>
              My specific role in the project was to improve the usability of Workup&apos;s AI interview feature. Although the feature had great potential and strong use cases, the confusing UI was prone to causing frustration for the user.
            </p>
          </div>
        </section>

        {/* The Problem */}
        <section className="mb-12 pt-8 border-t border-faded-white">
          <h2 className="text-2xl md:text-3xl bit-apple-font text-white mb-6">The Problem</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl md:text-2xl text-white mb-4">
                <span className="accent-text">Preparing for interviews can feel overwhelming.</span>
              </h3>
              <div className="space-y-4 text-white-muted leading-relaxed">
                <p>
                  For college students or new graduates, it can be intimidating trying to craft the perfect responses, especially when you don&apos;t know what to expect. By allowing users to conduct industry-tailored mock interviews and receive AI-assisted feedback, Workup&apos;s AI Interview feature provides students with clear guidance.
                </p>
                <p>
                  However, although this feature&apos;s capabilities were impressive, users found it difficult to navigate. Many users reported feeling discouraged or frustrated by the cluttered interface.
                </p>
              </div>
            </div>

            <div className="border border-faded-white p-6 bg-surface">
              <ul className="arrow-list">
                <li className="text-white">
                  The solution: A restructured user flow to minimize friction in the interview practice experience.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Research */}
        <section className="mb-12 pt-8 border-t border-faded-white">
          <h2 className="text-2xl md:text-3xl bit-apple-font text-white mb-6">Research</h2>
          
          <div className="space-y-12">
            <div>
              <h3 className="text-xl md:text-2xl text-white mb-4">Understanding the Current Market</h3>
              <p className="text-white-muted leading-relaxed mb-4">
                We started with competitive analysis to compare existing platforms that also offered social networking and career development features.
              </p>
              <div className="overflow-hidden">
                <Image
                  src="/assets/projects/Workup/Workup-CompetitiveAnalysis.png"
                  alt="Competitive Analysis"
                  width={1000}
                  height={1000}
                />
              </div>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl text-white mb-4">Understanding Users</h3>
              <p className="text-white-muted leading-relaxed mb-6">
                To understand user perspectives, we administered 50+ surveys and conducted 20+ interviews for Workup&apos;s target audience, job-seeking college students. Our research gave us a preliminary understanding of how college students interacted with AI tools in the job search process.
              </p>

              <div className="space-y-4">
                <div className="border border-faded-white p-6 bg-surface">
                  <div className="flex items-start gap-4">
                    <div>
                      <p className="text-white-muted leading-relaxed">
                      "I use ChatGPT's voice function to do mock interviews. My main issue is that it seems more like a list of technical questions rather than an actual organic interview process."
                      </p>
                    </div>
                  </div>
                </div>
                <div className="border border-faded-white p-6 bg-surface">
                  <div className="flex items-start gap-4">
                    <div>
                      <p className="text-white-muted leading-relaxed">
                      "[AI's] answers are too general [...]. It mainly helps with generating questions."
                      </p>
                    </div>
                  </div>
                </div>
                <div className="border border-faded-white p-6 bg-surface">
                  <div className="flex items-start gap-4">
                    <div>
                      <p className="text-white-muted leading-relaxed">
                      "[AI interview questions] either are too broad in their questions or too niche."
                      </p>
                    </div>
                  </div>
                </div>
                <div className="border border-faded-white p-6 bg-surface">
                  <div className="flex items-start gap-4">
                    <div>
                      <p className="text-white-muted leading-relaxed">
                      "I don't know if AI questions will be representative of what will actually be asked. They may be unreliable or biased."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl text-white mb-4">Getting to the Root</h3>
              <p className="text-white-muted leading-relaxed mb-6">
                With a newfound understanding of user motivations and challenges, our team put together a detailed design audit of the current Workup website.
              </p>
              
              <div className="overflow-hidden">
                <Image
                  src="/assets/projects/Workup/Workup-Audit.jpg"
                  alt="Website audit"
                  width={1000}
                  height={1000}
                />
              </div>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl text-white mb-6">Key Findings</h3>

              <div className="space-y-4">
                <div className="border border-faded-white p-6 bg-surface">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 border border-faded-white flex items-center justify-center">
                      <span className="text-white geist-mono-font text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="text-lg text-white mb-2">An unclear user flow leaves users confused.</h4>
                      <p className="text-white-muted leading-relaxed">
                        Many users struggled to understand where to begin or how to proceed through the interview feature.
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
                      <h4 className="text-lg text-white mb-2">Feedback formatting overwhelms users.</h4>
                      <p className="text-white-muted leading-relaxed">
                        The AI-generated interview feedback was formatted as a dense wall of text, making it difficult for users to quickly identify actionable insights.
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
                      <h4 className="text-lg text-white mb-2">Lack of organization options limits usefulness.</h4>
                      <p className="text-white-muted leading-relaxed">
                        Users were unable to easily save question sets or review past interviews, making it difficult to track progress over time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl text-white mb-4">Putting Faces to the Data</h3>
              <p className="text-white-muted leading-relaxed mb-6">
                Using our research, I developed detailed user personas to humanize the data and guide empathy-driven design.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="overflow-hidden">
                  <Image
                    src="/assets/projects/Workup/Workup-UserPersona1.png"
                    alt="User persona 1"
                    width={1000}
                    height={1000}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="overflow-hidden">
                  <Image
                    src="/assets/projects/Workup/Workup-UserPersona2.png"
                    alt="User persona 2"
                    width={1000}
                    height={1000}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Goals */}
        <section className="mb-12 pt-8 border-t border-faded-white">
          <h2 className="text-2xl md:text-3xl bit-apple-font text-white mb-6">Project Goals</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-faded-white p-6 bg-surface">
              <h3 className="text-lg text-white mb-3">Empower <span className="accent-text">confident preparation.</span></h3>
              <p className="text-white-muted leading-relaxed">
                Enable users to practice interviews and receive actionable AI feedback.
              </p>
            </div>
            <div className="border border-faded-white p-6 bg-surface">
              <h3 className="text-lg text-white mb-3">Streamline the <span className="accent-text">user journey.</span></h3>
              <p className="text-white-muted leading-relaxed">
                Design an intuitive user flow that minimizes friction and confusion.
              </p>
            </div>
            <div className="border border-faded-white p-6 bg-surface">
              <h3 className="text-lg text-white mb-3">Support <span className="accent-text">continuous improvement.</span></h3>
              <p className="text-white-muted leading-relaxed">
                Provide organizational tools so users can track their progress.
              </p>
            </div>
          </div>
        </section>

        {/* Design */}
        <section className="mb-12 pt-8 border-t border-faded-white">
          <h2 className="text-2xl md:text-3xl bit-apple-font text-white mb-6">Design</h2>
          
          <div className="space-y-12">
            <div>
              <h3 className="text-xl md:text-2xl text-white mb-4">Putting it all together...</h3>
              <p className="text-white-muted leading-relaxed mb-6">
                With insights from research, the audit, and user personas, my team began the design process. We began with a thorough analysis of Workup&apos;s current AI Interview feature.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border border-faded-white p-4 bg-surface">
                  <h4 className="text-white mb-2">Problem Group 1</h4>
                  <p className="text-white-muted text-sm mb-4">Redundant empty pages disrupt interview setup</p>
                  <Image
                    src="/assets/projects/Workup/Workup-ProblemGroup-1.png"
                    alt="Problem Group 1"
                    width={1000}
                    height={1000}
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="border border-faded-white p-4 bg-surface">
                  <h4 className="text-white mb-2">Problem Group 2</h4>
                  <p className="text-white-muted text-sm mb-4">Customization features feel disconnected</p>
                  <Image
                    src="/assets/projects/Workup/Workup-ProblemGroup-2.png"
                    alt="Problem Group 2"
                    width={1000}
                    height={1000}
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="border border-faded-white p-4 bg-surface">
                  <h4 className="text-white mb-2">Problem Group 3</h4>
                  <p className="text-white-muted text-sm mb-4">Lengthy offboarding creates friction</p>
                  <Image
                    src="/assets/projects/Workup/Workup-ProblemGroup-3.png"
                    alt="Problem Group 3"
                    width={1000}
                    height={1000}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl text-white mb-4">Low-Fidelity Designs</h3>
              <p className="text-white-muted leading-relaxed mb-6">
                The primary challenge with Workup&apos;s interface was the lack of a clear user flow. For our lo-fi designs, my team aimed to create interfaces that felt effortless to interact with.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="overflow-hidden">
                  <Image
                    src="/assets/projects/Workup/Workup-Lofis-2.jpg"
                    alt="Low-Fi 1"
                    width={1000}
                    height={1000}
                  />
                </div>
                <div className="overflow-hidden">
                  <Image
                    src="/assets/projects/Workup/Workup-Lofis-3.jpg"
                    alt="Low-Fi 2"
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl text-white mb-4">Creating a Design Language</h3>
              <p className="text-white-muted leading-relaxed mb-6">
                One of the key issues with Workup&apos;s interface was its lack of a consistent design system. Based on its existing UI, our team revamped Workup&apos;s design system.
              </p>
              
              <div className="overflow-hidden">
                <Image
                  src="/assets/projects/Workup/Workup-DesignSystem.png"
                  alt="Design System"
                  width={1000}
                  height={1000}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Final Product */}
        <section className="mb-12 pt-8 border-t border-faded-white">
          <h2 className="text-2xl md:text-3xl bit-apple-font text-white mb-6">Final Product</h2>
          <p className="text-white-muted leading-relaxed mb-6">
            The final design for Workup&apos;s AI Interview streamlines the user journey, making every step clear and intuitive.
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg text-white mb-4">Practice built for perfect</h3>
              <p className="text-white-muted leading-relaxed mb-4">
                To make the interview creation process as intuitive as possible, I took inspiration from video calling platforms such as Zoom and Google Meet to create an interface that felt like second nature. For the user, this helps make the practice round feel as close as possible to the real thing.
              </p>
              <div className="overflow-hidden">
                <Image
                  src="/assets/projects/Workup/Workup-CreateInterview.png"
                  alt="Interview Creation"
                  width={1000}
                  height={1000}
                />
              </div>
            </div>

            <div>
              <h3 className="text-lg text-white mb-4">Scheduling that feels seamless</h3>
              <p className="text-white-muted leading-relaxed mb-4">
                By replacing uncertainty with structure, we turned interview scheduling into a feature that actually supports both candidates and recruiters. For the user, this helps make the practice round feel as close as possible to the real thing.
              </p>
              <div className="overflow-hidden">
                <Image
                  src="/assets/projects/Workup/Workup-InterviewSched.jpg"
                  alt="Interview Scheduling"
                  width={1000}
                  height={1000}
                />
              </div>
            </div>

            <div>
              <h3 className="text-lg text-white mb-4">All in one place</h3>
              <p className="text-white-muted leading-relaxed mb-4">
                Our team built a single "hub" for practice question sets, helping users track progress, stay organized, and prepare for interviews with purpose.
              </p>
              <div className="overflow-hidden">
                <Image
                  src="/assets/projects/Workup/Workup-QuestionSets.jpg"
                  alt="Question Sets Hub"
                  width={1000}
                  height={1000}
                />
              </div>
            </div>

            <div>
              <h3 className="text-lg text-white mb-4">Feedback that drives improvement</h3>
              <p className="text-white-muted leading-relaxed mb-4">
                I reorganized the structure of the AI-generated feedback page, categorizing feedback into different facets of proficiency. Segmenting the feedback improved readability and provided the user with a more precise metric to empower growth.
              </p>
              <div className="overflow-hidden">
                <Image
                  src="/assets/projects/Workup/Workup-InterviewFeedback.jpg"
                  alt="Interview Feedback"
                  width={1000}
                  height={1000}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Impact */}
        <section className="mb-12 pt-8 border-t border-faded-white">
          <h2 className="text-2xl md:text-3xl bit-apple-font text-white mb-6">Impact</h2>
          
          <div className="space-y-4">
            <div className="border border-faded-white p-6 bg-surface">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 border border-faded-white flex items-center justify-center">
                  <span className="text-white geist-mono-font text-sm">1</span>
                </div>
                <div>
                  <h4 className="text-lg text-white mb-2">Users were 50% more likely to engage with the AI interview feature.</h4>
                  <p className="text-white-muted leading-relaxed">
                    Simplifying the user journey prevented users from becoming frustrated with the site.
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
                  <h4 className="text-lg text-white mb-2">Feedback comprehension improved dramatically.</h4>
                  <p className="text-white-muted leading-relaxed">
                    By restructuring AI-generated feedback into clear, actionable sections, users could more easily identify strengths and areas for growth.
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
                  <h4 className="text-lg text-white mb-2">Organizational features increased ongoing learning by 90%.</h4>
                  <p className="text-white-muted leading-relaxed">
                    The addition of options to save question sets and review past interviews enabled users to track their progress over time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Closing Remarks */}
        <section className="mb-12 pt-8 border-t border-faded-white">
          <h2 className="text-2xl md:text-3xl bit-apple-font text-white mb-6">Takeaways</h2>
          
          <div className="space-y-4">
            <div className="border border-faded-white p-6 bg-surface">
              <h3 className="text-lg text-white mb-3">
                <span className="accent-text">User empathy</span> is foundational.
              </h3>
              <ul className="arrow-list">
                <li className="text-white-muted leading-relaxed">
                  Spending time with real users, hearing their frustrations, and observing their interactions with the website firsthand shaped every major decision.
                </li>
              </ul>
            </div>

            <div className="border border-faded-white p-6 bg-surface">
              <h3 className="text-lg text-white mb-3">
                Sometimes the answer is <span className="accent-text">simplicity</span>.
              </h3>
              <ul className="arrow-list">
                <li className="text-white-muted leading-relaxed">
                  Simplifying the user flow made a bigger difference than any flashy features designs.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <nav className="pt-8 border-t border-faded-white">
          <div className="flex justify-between items-center">
            <Link href="/projects/manifesto-market" className="sidebar-link">
              ← Manifesto Market
            </Link>
            <Link href="/projects/bookish" className="sidebar-link">
              Bookish →
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
