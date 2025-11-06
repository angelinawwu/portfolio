import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import ShinyText from '@/components/ShinyText';
import PixelTrailWrapper from '@/components/PixelTrailWrapper';

export const metadata = {
  title: 'Workup ＊ Angelina Wu',
  description: 'Restructuring an AI-powered interview tool to empower students to prepare with confidence',
};

export default function WorkupPage() {
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
              className="font-medium blue-hover-magenta-text hover:opacity-100 transition-opacity"
            >
              ← Back to projects
            </Link>
          </div>

          {/* Hero Section */}
          <section className="py-12">
            <h1 className="text-4xl md:text-5xl font-medium text-[#0000ff] mb-8">WorkUp</h1>
            
            <p className="text-xl text-[#0000ff] leading-relaxed mb-12">
              Restructuring the interview feature for an AI-powered career development startup
            </p>

            {/* Metadata Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="border border-[#0000ff]/10 rounded-lg p-6 bg-[#f6fafd]">
                <h3 className="text-[#8888ff] text-sm font-medium mb-2 geist-mono-font">My Role</h3>
                <p className="text-[#0000ff] font-medium">Product Designer</p>
              </div>
              <div className="border border-[#0000ff]/10 rounded-lg p-6 bg-[#f6fafd]">
                <h3 className="text-[#8888ff] text-sm font-medium mb-2 geist-mono-font">Timeline</h3>
                <p className="text-[#0000ff] font-medium">Jan - Jun 2025</p>
              </div>
              <div className="border border-[#0000ff]/10 rounded-lg p-6 bg-[#f6fafd]">
                <h3 className="text-[#8888ff] text-sm font-medium mb-2 geist-mono-font">Team</h3>
                <p className="text-[#0000ff] font-medium">14 Designers<br />1 Product Team</p>
              </div>
              <div className="border border-[#0000ff]/10 rounded-lg p-6 bg-[#f6fafd]">
                <h3 className="text-[#8888ff] text-sm font-medium mb-2 geist-mono-font">Tools</h3>
                <p className="text-[#0000ff] font-medium">Figma</p>
              </div>
            </div>
          </section>

          {/* Overview */}
          <section className="py-12 border-t border-[#0000ff]/10">
            <h2 className="text-3xl md:text-4xl font-medium text-[#0000ff] mb-8">Overview</h2>
            <div className="space-y-6 text-[#0000ff] leading-relaxed">
              <p>
                Workup is an AI-powered professional networking app that aims to combine social media and job searching. With a feed that highlights career-centered content, and numerous AI-powered tools to prepare users for recruitment, Workup makes it easy to land a dream job. On the website, users can tailor their resume, conduct practice interviews with AI assistants, and connect with recruiters and other job seekers.
              </p>
              <p>
                My specific role in the project was to improve the usability of Workup&apos;s AI interview feature. Although the feature had great potential and strong use cases, the confusing UI was prone to causing frustration for the user. My goal was to streamline the user flow and reduce friction when navigating the tool.
              </p>
            </div>
          </section>

          {/* The Problem */}
          <section className="py-12 border-t border-[#0000ff]/10">
            <h2 className="text-3xl md:text-4xl font-medium text-[#0000ff] mb-8">The Problem</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-medium text-[#0000ff] mb-6 geist-mono-font"><ShinyText text="Preparing for interviews can feel overwhelming." /></h3>
                <div className="space-y-6 text-[#0000ff] leading-relaxed">
                  <p>
                    For college students or new graduates, it can be intimidating trying to craft the perfect responses, especially when you don&apos;t know what to expect. By allowing users to conduct industry-tailored mock interviews and receive AI-assisted feedback, Workup&apos;s AI Interview feature provides students with clear guidance on how to refine their responses and build confidence for the real conversation.
                  </p>
                  <p>
                    However, although this feature&apos;s capabilities were impressive, users found it difficult to navigate. Many users reported feeling discouraged or frustrated by the cluttered interface, which distracted from its full potential. For students already facing the stress of preparing for their first interviews, this added friction could make an already challenging process feel more overwhelming than it needed to be.
                  </p>
                </div>
              </div>

              <div className="bg-[#f6fafd] border border-[#0000ff]/10 rounded-lg p-8">
                <ul className="arrow-list">
                  <li className="text-[#0000ff] font-medium">
                    The solution: A restructured user flow to minimize friction in the interview practice experience, allowing students to focus on growth rather than navigation.
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
                <h3 className="text-2xl md:text-3xl font-medium text-[#0000ff] mb-6">Understanding the Current Market</h3>
                <p className="text-[#0000ff] leading-relaxed">
                  We started with competitive analysis to compare existing platforms that also offered social networking and career development features.
                </p>
                <div className="w-full h-auto bg-[#f6fafd] border border-[#0000ff]/10 rounded-lg overflow-hidden mt-2 mb-6">
                  <Image
                    src="/assets/projects/Workup/Workup-CompetitiveAnalysis.png"
                    alt="Workup Demo"
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-medium text-[#0000ff] mb-6">Understanding Users</h3>
                <p className="text-[#0000ff] leading-relaxed mb-6">
                   To understand user perspectives, we administered 50+ surveys and conducted 20+ interviews for Workup&apos;s target audience, job-seeking college students. The responses we received helped guide us throughout the design process.
                </p>

                  {/* USER SURVEY AND INTERVIEW GRID */}
                  <div className="grid grid-cols-1 md:grid-cols-[auto_auto_1fr] gap-6 items-center">
                    {/* Row 1: USER SURVEY */}
                    {/* USER SURVEY IMAGE */}
                    <div className="w-full md:max-w-[500px] max-h-[400px] overflow-hidden items-center justify-center">
                      <Image
                        src="/assets/projects/Workup/Workup-UserSurvey.png"
                        alt="Workup User Survey"
                        width={300}
                        height={500}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex items-center justify-center">
                      <ArrowRight className="text-[#0000ff] h-10 w-10 transform rotate-90 md:rotate-0" />
                    </div>
                    <div className="bg-[#f6fafd] border border-[#0000ff]/10 rounded-lg p-6">
                     <p className="text-[#0000ff] leading-relaxed mb-4">
                          The user survey gave us a preliminary understanding of how college students interacted with AI tools in the job search process.
                        </p>
                      <div className="space-y-4 italic text-[#0000ff]">
                      <ul className="arrow-list space-y-4">
                        <li>&quot;I use ChatGPT&apos;s voice function to do mock interviews. My main issue is that it seems more like a list of technical questions rather than an actual organic interview process.&quot;</li>
                        <li>&quot;[AI&apos;s] answers are too general [...]. It mainly helps with generating questions.&quot;</li>
                        <li>&quot;[AI interview questions] either are too broad in their questions or too niche.&quot;</li>
                        <li>&quot;I don&apos;t know if AI questions will be representative of what will actually be asked. They may be unreliable or biased.&quot;</li>
                        </ul>
                      </div>
                    </div>

                    {/* Row 2: USER INTERVIEW */}
                    {/* USER INTERVIEW IMAGE */}
                    <div className="w-full max-h-[500px] overflow-hidden items-center justify-center">
                      <Image
                        src="/assets/projects/Workup/Workup-UserInterview2.png"
                        alt="Workup User Interview"
                        width={300}
                        height={500}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex items-center justify-center">
                      <ArrowRight className="text-[#0000ff] h-10 w-10 transform rotate-90 md:rotate-0" />
                    </div>
                    <div className="bg-[#f6fafd] border border-[#0000ff]/10 rounded-lg p-6">
                      <p className="text-[#0000ff] leading-relaxed mb-4">
                          The user interviews gave us an understanding of how a user would actually interact with the site.
                        </p>
                      <ul className="arrow-list italic text-[#0000ff] leading-relaxed space-y-4">
                        <li>With each interviewee, I walked through a typical flow on Workup. The interview helped me identify high-friction areas in real time.</li>
                      </ul>
                  </div>

                </div>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-medium text-[#0000ff] mb-6">Getting to the Root</h3>
                <p className="text-[#0000ff] leading-relaxed">
                  With a newfound understanding of user motivations and challenges, our team put together a detailed design audit of the current Workup website, identifying key friction points. These insights clarified where the user journey was breaking down and where intervention was most urgent.
                </p>
                
                {/* Placeholder for website audit image */}
                <div className="mt-8 w-full h-auto bg-[#f6fafd] border border-[#0000ff]/10 rounded-lg flex items-center justify-center">
                  <Image
                    src="/assets/projects/Workup/Workup-Audit.jpg"
                    alt="Website audit"
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-medium text-[#0000ff] mb-8">Key Findings</h3>
                <p className="text-[#0000ff] leading-relaxed mb-8">
                  The research led me to three key findings. These findings highlighted the main challenges users faced with the AI interview feature, and provided a focused direction for the subsequent design phase.
                </p>

                <div className="space-y-8">
                  <div className="border border-[#0000ff]/10 rounded-lg p-8 bg-[#f6fafd]">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-[#f6fafd] border border-[#0000ff]/20 rounded-full flex items-center justify-center">
                        <span className="text-[#000ff] font-mono text-sm">1</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-medium text-[#0000ff] mb-4">An unclear user flow leaves users confused.</h4>
                        <p className="text-[#000ff] leading-relaxed">
                          Many users struggled to understand where to begin or how to proceed through the interview feature. The absence of a clear, guided pathway resulted in users feeling lost or unsure about the next step. Establishing an intuitive user journey is crucial for supporting users and reducing confusion.
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
                        <h4 className="text-xl font-medium text-[#0000ff] mb-4">Feedback formatting overwhelms users.</h4>
                        <p className="text-[#0000ff] leading-relaxed">
                          The AI-generated interview feedback was formatted as a dense wall of text, making it difficult for users to quickly identify actionable insights. This overwhelming format limited the usefulness of the feedback, as students struggled to parse out key takeaways or next steps. Structuring feedback into concise, digestible sections would enhance clarity and support more effective learning.
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
                        <h4 className="text-xl font-medium text-[#0000ff] mb-4">Lack of organization options limits usefulness.</h4>
                        <p className="text-[#0000ff] leading-relaxed">
                          Users were unable to easily save question sets or review past interviews, making it difficult to track progress over time. The absence of organization features such as saving, bookmarking, or accessing previous sessions reduced the long-term value of the tool.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-medium text-[#0000ff] mb-6">Putting Faces to the Data</h3>
                <p className="text-[#0000ff] leading-relaxed mb-6">
                  Using our research, I developed detailed user personas to humanize the data and guide empathy-driven design. These personas anchored the design process, ensuring each decision addressed real user needs and motivations.
                </p>
                
                {/* Placeholder for user personas */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="w-full h-auto bg-[#f6fafd] border border-[#0000ff]/10 rounded-lg flex items-center justify-center">
                    <Image
                      src="/assets/projects/Workup/Workup-UserPersona1.png"
                      alt="User persona 1"
                      width={1000}
                      height={1000}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="w-full h-auto bg-[#f6fafd] border border-[#0000ff]/10 rounded-lg flex items-center justify-center">
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
          <section className="py-12 border-t border-[#0000ff]/10">
            <h2 className="text-3xl md:text-4xl font-medium text-[#0000ff] mb-8">Project Goals</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border border-[#0000ff]/10 rounded-lg p-8 bg-[#f6fafd]">
                <h3 className="text-xl font-medium text-[#0000ff] mb-4">Empower <ShinyText text= "confident preparation." /></h3>
                <p className="text-[#0000ff] leading-relaxed">
                  Enable users to practice interviews and receive actionable AI feedback, helping them build skills and self-assurance.
                </p>
              </div>
              <div className="border border-[#0000ff]/10 rounded-lg p-8 bg-[#f6fafd]">
                <h3 className="text-xl font-medium text-[#0000ff] mb-4">Streamline the <ShinyText text= "user journey." /></h3>
                <p className="text-[#0000ff] leading-relaxed">
                  Design an intuitive user flow that minimizes friction and confusion, reducing the focus required for navigation.
                </p>
              </div>
              <div className="border border-[#0000ff]/10 rounded-lg p-8 bg-[#f6fafd]">
                <h3 className="text-xl font-medium text-[#0000ff] mb-4">Support <ShinyText text= "continuous improvement." /></h3>
                <p className="text-[#0000ff] leading-relaxed">
                  Provide organizational tools, so users can track their progress and revisit feedback over time.
                </p>
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
                  With insights from research, the audit, and user personas, my team began the design process. We began with a thorough analysis of Workup&apos;s current AI Interview feature, sorting key issues into three problem groups.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 space-y-6">
                  <div className="border border-[#0000ff]/10 rounded-lg p-6 bg-[#f6fafd]">
                    <h4 className="text-xl font-medium text-[#0000ff] mb-3">Problem Group 1</h4>
                    <p className="text-[#0000ff]">Redundant empty pages disrupt interview setup and add unnecessary steps</p>
                    <Image
                      src="/assets/projects/Workup/Workup-ProblemGroup-1.png"
                      alt="Problem Group 1"
                      width={1000}
                      height={1000}
                      className="w-full h-auto object-contain mt-4"
                    />
                  </div>
                  <div className="border border-[#0000ff]/10 rounded-lg p-6 bg-[#f6fafd]">
                    <h4 className="text-xl font-medium text-[#0000ff] mb-3">Problem Group 2</h4>
                    <p className="text-[#0000ff]">Customization features and video call interface feel disconnected</p>
                    <Image
                      src="/assets/projects/Workup/Workup-ProblemGroup-2.png"
                      alt="Problem Group 2"
                      width={1000}
                      height={1000}
                      className="w-full h-auto object-contain mt-4"
                    />
                  </div>
                  <div className="border border-[#0000ff]/10 rounded-lg p-6 bg-[#f6fafd]">
                    <h4 className="text-xl font-medium text-[#0000ff] mb-3">Problem Group 3</h4>
                    <p className="text-[#0000ff]">Lengthy offboarding process creates friction and delays completion</p>
                    <Image
                      src="/assets/projects/Workup/Workup-ProblemGroup-3.png"
                      alt="Problem Group 3"
                      width={1000}
                      height={1000}
                      className="w-full h-auto object-contain mt-4"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-medium text-[#0000ff] mb-6">Low-Fidelity Designs</h3>
                <p className="text-[#0000ff] leading-relaxed mb-6">
                  The primary challenge with Workup&apos;s interface was the lack of a clear user flow. For our lo-fi designs, my team aimed to create interfaces that felt effortless to interact with.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="w-full h-auto bg-[#f6fafd] border border-[#0000ff]/10 rounded-lg flex items-center justify-center">
                    <Image
                      src="/assets/projects/Workup/Workup-Lofis-2.jpg"
                      alt="Low-Fi 1"
                      width={1000}
                      height={1000}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <div className="w-full h-auto bg-[#f6fafd] border border-[#0000ff]/10 rounded-lg flex items-center justify-center">
                    <Image
                      src="/assets/projects/Workup/Workup-Lofis-3.jpg"
                      alt="Low-Fi 2"
                      width={1000}
                      height={1000}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-medium text-[#0000ff] mb-6">Creating a Design Language</h3>
                <p className="text-[#0000ff] leading-relaxed mb-6">
                  One of the key issues with Workup&apos;s interface was its lack of a consistent design system. Based on its existing UI, our team revamped Workup&apos;s design system bringing consistency and modernity to user interactions across the website.
                </p>
                
                <div className="w-full h-auto bg-[#f6fafd] border border-[#0000ff]/10 rounded-lg flex items-center justify-center">
                  <Image
                    src="/assets/projects/Workup/Workup-DesignSystem.png"
                    alt="Design System"
                    width={1000}
                    height={1000}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-medium text-[#0000ff] mb-6">Iterate, iterate, iterate...</h3>
                <p className="text-[#0000ff] leading-relaxed mb-6">
                  The design system made it easier to create mid- and hi-fi designs. Our team iterated our designs for the website through several rounds of feedback, brainstorming, and group design sessions.
                </p>
                <div className="w-full h-auto bg-[#f6fafd] border border-[#0000ff]/10 rounded-lg flex items-center justify-center">
                  <Image
                    src="/assets/projects/Workup/Workup-DesignFeedback.png"
                    alt="Design Feedback"
                    width={1000}
                    height={1000}
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-6">
                  <div className="w-full h-48 bg-[#f6fafd] flex items-center justify-center">
                    <Image
                      src="/assets/projects/Workup/Workup-Process.png"
                      alt="Design Process"
                      width={1000}
                      height={1000}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-medium text-[#0000ff] mb-8">Final Product</h3>
                <p className="text-[#0000ff] leading-relaxed mb-8">
                  The final design for Workup&apos;s AI Interview streamlines the user journey, making every step clear and intuitive. By eliminating unnecessary friction, the redesigned interface empowers users to focus on interview preparation and confidently leverage the feature to its full capabilities.
                </p>

                <div className="space-y-8">
                  <div>
                    <h4 className="text-xl font-medium text-[#0000ff] mb-4">Practice built for perfect</h4>
                    <p className="text-[#0000ff] leading-relaxed mb-6">
                      To make the interview creation process as intuitive as possible, I took inspiration from video calling platforms such as Zoom and Google Meet to create an interface that felt like second nature. For the user, this helps make the practice round feel as close as possible to the real thing.
                    </p>
                    <div className="w-full h-auto bg-[#f6fafd] border border-[#0000ff]/10 rounded-lg flex items-center justify-center">
                      <Image
                        src="/assets/projects/Workup/Workup-CreateInterview.png"
                        alt="Interview Creation"
                        width={1000}
                        height={1000}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-medium text-[#0000ff] mb-4">Scheduling that feels seamless</h4>
                    <p className="text-[#0000ff] leading-relaxed mb-6">
                      By replacing uncertainty with structure, we turned interview scheduling into a feature that actually supports both candidates and recruiters.
                    </p>
                    <div className="w-full h-auto bg-[#f6fafd] border border-[#0000ff]/10 rounded-lg flex items-center justify-center">
                      <Image
                        src="/assets/projects/Workup/Workup-InterviewSched.jpg"
                        alt="Interview Scheduling"
                        width={1000}
                        height={1000}
                        className="w-full h-auto object-contain"
                      />                    
                      </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-medium text-[#0000ff] mb-4">All in one place</h4>
                    <p className="text-[#0000ff] leading-relaxed mb-6">
                      Our team built a single &quot;hub&quot; for practice question sets, helping users track progress, stay organized, and prepare for interviews with purpose.
                    </p>
                    <div className="w-full h-auto bg-[#f6fafd] border border-[#0000ff]/10 rounded-lg flex items-center justify-center">
                      <Image
                        src="/assets/projects/Workup/Workup-QuestionSets.jpg"
                        alt="Question Sets Hub"
                        width={1000}
                        height={1000}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-medium text-[#0000ff] mb-4">Feedback that drives improvement</h4>
                    <p className="text-[#0000ff] leading-relaxed mb-6">
                      I reorganized the structure of the AI-generated feedback page, categorizing feedback into different facets of proficiency. Segmenting the feedback improved readability and provided the user with a more precise metric to empower growth.
                    </p>
                    <div className="w-full h-auto bg-[#f6fafd] border border-[#0000ff]/10 rounded-lg flex items-center justify-center">
                      <Image
                        src="/assets/projects/Workup/Workup-InterviewFeedback.jpg"
                        alt="Interview Feedback"
                        width={1000}
                        height={1000}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </div>
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
                    <h4 className="text-xl font-medium text-[#0000ff] mb-4">Users were 50% more likely to engage with the AI interview feature.</h4> 
                    <p className="text-[#0000ff] leading-relaxed">Simplifying the user journey prevented users from becoming frustrated with the site, keeping them engaged and focused on their interview preparation.
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
                    
                    <h4 className="text-xl font-medium text-[#0000ff] mb-4">Feedback comprehension improved dramatically.</h4> 
                    <p className="text-[#0000ff] leading-relaxed">By restructuring AI-generated feedback into clear, actionable sections, users reported they could more easily identify strengths and areas for growth, leading to more focused and confident interview preparation.
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
                    <h4 className="text-xl font-medium text-[#0000ff] mb-4">Organizational features increased ongoing learning by 90%.</h4> 
                    <p className="text-[#0000ff] leading-relaxed">The addition of options to save question sets and review past interviews enabled users to track their progress over time, encouraging users to return to the feature continuously throughout their career development journey.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Closing Remarks */}
          <section className="py-12 border-t border-[#0000ff]/10">
            <h2 className="text-3xl md:text-4xl font-medium text-[#0000ff] mb-8">Closing Remarks and Takeaways</h2>
            
            <div className="space-y-6">
              <div className="border border-[#0000ff]/10 rounded-lg p-8 bg-[#f6fafd]">
                <h3 className="text-xl font-medium text-[#0000ff] mb-4">
                  <ShinyText text="User empathy" /> is foundational.
                </h3>
                  <ul className="arrow-list">
                    <li className="text-[#0000ff] leading-relaxed">
                      Spending time with real users, hearing their frustrations, and observing their interactions with the website firsthand shaped every major decision. User interviews revealed friction points that would have been invisible otherwise, reminding me that successful solutions start with listening.
                    </li>
                  </ul>
              </div>

              <div className="border border-[#0000ff]/10 rounded-lg p-8 bg-[#f6fafd]">
                <h3 className="text-xl font-medium text-[#0000ff] mb-4">
                  Sometimes the answer is <ShinyText text="simplicity" />.
                </h3>
                  <ul className="arrow-list">
                    <li className="text-[#0000ff] leading-relaxed">
                      Simplifying the user flow made a bigger difference than any flashy features designs. When users aren&apos;t overwhelmed by options or dense text, they can more easily focus on what matters.
                    </li>
                  </ul>
              </div>
            </div>
          </section>

          {/* Navigation */}
          <nav className="py-16 border-t border-[#0000ff]/10">
            <div className="flex justify-between items-center">
              <div></div>
              <Link
                href="/projects/manifesto-market"
                className="flex items-center space-x-2 blue-hover-magenta-text"
              >
                <span>Manifesto Market</span>
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
