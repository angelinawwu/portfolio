import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <main className="pt-20">
        {/* Bio Section */}
        <section className="max-w-[1290px] mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* Image Section */}
            <div className="lg:col-span-1">
              <div className="relative w-full aspect-3/4 max-w-sm mx-auto lg:mx-0 group">
                <div className="w-full h-full bg-white/5 border border-white/10 rounded-lg overflow-hidden">
                  <Image
                    src="/assets/About/Headshot.jpg"
                    alt="Angelina Wu Headshot"
                    fill
                    className="object-cover object-[center_bottom] rounded-xl"
                    sizes="(max-width: 1024px) 100vw, 33vw"

                  />
                </div>
                {/* Rainbow border on hover */}
                
              </div>
            </div>

            {/* Bio Content */}
            <div className="lg:col-span-2 space-y-8">
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-white/80 leading-relaxed text-lg mb-4">
                Hey, I’m Angelina, a second-year student at UCLA studying 
                Design Media Arts and Statistics/Data Science. I’ve always 
                believed in <span className="permanent-rainbow-text">designing to delight</span>: creating things that 
                spark curiosity, joy, and connection. For me, design is a 
                way to build tiny bridges between people, and help them see 
                the otherworldly in the ordinary.
              </p>
              
              <p className="text-white/80 leading-relaxed text-lg mb-4">
                My love for design began early when I was introduced to 
                Powerpoint by my second-grade teacher. Enamored by WordArt, 
                dramatic animations, and maximalist display fonts (Algerian was 
                my fave), I immediately fell in love with the whole practice 
                of designing. I would spend hours on my dad&apos;s Microsoft account 
                creating slide presentations on every topic I could think of.
              </p>
              
              <p className="text-white/80 leading-relaxed text-lg mb-4">
                Back then, I didn’t know what design was: I just knew I loved 
                making things look exciting on screen. That early obsession with 
                typography, color, and movement stuck with me, slowly evolving 
                from silly slideshows into a real passion for designing thoughtful 
                interfaces that inspire and delight.
              </p>

              <p className="text-white/80 leading-relaxed text-lg mb-4">
                Feel free to shoot me an email at{' '}
                <a 
                  href="mailto:angelinawu05@gmail.com" 
                  className="text-white rainbow-text transition-colors underline duration-200"
                >
                  angelinawu05@gmail.com <ArrowUpRight className="w-4 h-4 inline-block" />
                </a>{' '}
                or take a peek at my{' '}
                <a 
                  href="https://drive.google.com/file/d/1WeWkogMivRgkEvFLcxmGzKZMQ-LXbjwd/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white rainbow-text transition-colors underline duration-200"
                >
                  resume <ArrowUpRight className="w-4 h-4 inline-block" />
                </a>.
              </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills & Tools */}
        <section className="max-w-[1290px] mx-auto px-6 pb-16">
          <h2 className="text-3xl font-medium text-white mb-8">Skills & Tools</h2>
          
          <div className="flex flex-wrap gap-2">
            {[
              // Design
              'Figma', 'Adobe CC','UX Research', 'UI Design', 'Interaction Design', 'Design Systems',
              'Prototyping', 'Accessibility (a11y)',
              // Frontend
              'HTML/CSS', 'JavaScript', 'TypeScript', 'React', 'Vite', 'Next.js',
              'Framer Motion', 'Tailwind CSS',
              // Backend & APIs
              'Node.js',
              // Tooling & Quality
              'Git/GitHub', 'Vercel',
              // Data
              'R',
                ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 text-white/70 border border-white/10 hover:border-white/30 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        {/* Experience Section */}
        <section className="max-w-[1290px] mx-auto px-6 pb-16">
          <h2 className="text-3xl font-medium text-white mb-8">Experience</h2>
          
          <div className="space-y-6">
            {/* UCLA Arts */}
            <div className="border border-white/10 rounded-lg p-6 hover:border-white/20 transition-colors duration-200">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="block w-12 h-12 relative flex-shrink-0 rounded bg-white/5 border border-white/10 overflow-hidden">
                  <Image src="/assets/About/CompanyLogo-UCLAArts.jpg" alt="UCLA Arts logo" fill className="object-contain p-1" sizes="48px" />
                </div>
                <div className="flex-1">
                  <div className="mb-2 flex flex-col md:flex-row md:items-center md:justify-between">
                    <h3 className="text-xl font-medium text-white">UCLA Arts</h3>
                    <span className="text-white/60 text-sm font-mono">Oct 2025 – Present</span>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <p className="text-white/80">Student Designer in Residence (Part-time)</p>
                    <span className="text-white/60 text-sm">Los Angeles, CA</span>
                  </div>
                  <ul className="list-disc list-outside space-y-2 text-white/70 ml-3">  
                    <li>Designing posters, social media assets, and motion graphics for UCLA Arts’ strategic communications team.</li>
                    <li>Supporting community-building, original storytelling, and event production within UCLA Arts brand guidelines.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* UCLA Latino Policy Institute */}
            <div className="border border-white/10 rounded-lg p-6 hover:border-white/20 transition-colors duration-200">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="block w-12 h-12 relative flex-shrink-0 rounded bg-white/5 border border-white/10 overflow-hidden">
                  <Image src="/assets/About/CompanyLogo-UCLALatino.jpg" alt="UCLA Latino Policy Institute logo" fill className="object-contain p-1" sizes="48px" />
                </div>
                <div className="flex-1">
                  <div className="mb-2 flex flex-col md:flex-row md:items-center md:justify-between">
                    <h3 className="text-xl font-medium text-white">UCLA Latino Policy Institute</h3>
                    <span className="text-white/60 text-sm font-mono">Aug 2025 – Present</span>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <p className="text-white/80">Student Website Designer (Part-time)</p>
                    <span className="text-white/60 text-sm">Los Angeles, CA</span>
                  </div>
                  <ul className="list-disc list-outside space-y-2 text-white/70 ml-3">
                    <li>Updating and maintaining a WordPress site (22,000+ monthly viewers) to enhance usability and visual consistency within UCLA brand guidelines.</li>
                    <li>Translating complex research publications into accessible, engaging designs.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* VEST at UCLA */}
            <div className="border border-white/10 rounded-lg p-6 hover:border-white/20 transition-colors duration-200">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="block w-12 h-12 relative flex-shrink-0 rounded bg-white/5 border border-white/10 overflow-hidden">
                  <Image src="/assets/About/CompanyLogo-VEST.png" alt="VEST at UCLA logo" fill className="object-contain p-1" sizes="48px" />
                </div>
                <div className="flex-1">
                  <div className="mb-2 flex flex-col md:flex-row md:items-center md:justify-between">
                    <h3 className="text-xl font-medium text-white">VEST at UCLA</h3>
                    <span className="text-white/60 text-sm font-mono">Jan 2025 – Present</span>
                  </div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <p className="text-white/80">Head of Design</p>
                    <span className="text-white/60 text-sm">Los Angeles, CA</span>
                  </div>
                  <ul className="list-disc list-outside space-y-2 text-white/70 ml-3">
                    <li>Cultivating a startup culture on campus and growing a community of 2,000+ ambitious builders.</li>
                    <li>Designing and engineering frontend components for early‑stage tech startups.</li>
                    <li>Led the end‑to‑end design and development of the organization’s website with Next.js and Tailwind.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* ACM at UCLA */}
            <div className="border border-white/10 rounded-lg p-6 hover:border-white/20 transition-colors duration-200">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="block w-12 h-12 relative flex-shrink-0 rounded bg-white/5 border border-white/10 overflow-hidden">
                  <Image src="/assets/About/CompanyLogo-ACM.png" alt="ACM at UCLA logo" fill className="object-contain p-1" sizes="48px" />
                </div>
                <div className="flex-1">
                  <div className="mb-2 flex flex-col md:flex-row md:items-center md:justify-between">
                    <h3 className="text-xl font-medium text-white">ACM at UCLA</h3>
                    <span className="text-white/60 text-sm font-mono">Jan 2025 – Present</span>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <p className="text-white/80">Design Director</p>
                    <span className="text-white/60 text-sm">Los Angeles, CA</span>
                  </div>
                  <ul className="list-disc list-outside space-y-2 text-white/70 ml-3">
                    <li>Leading design initiatives for 200+ officers across 9 committees at the largest CS student org in SoCal.</li>
                    <li>Collaborated with Workup (NVIDIA‑incubated) to redesign and relaunch its website informed by 20+ interviews and 50+ survey responses.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Manifesto Market */}
            <div className="border border-white/10 rounded-lg p-6 hover:border-white/20 transition-colors duration-200">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="block w-12 h-12 relative flex-shrink-0 rounded bg-white/5 border border-white/10 overflow-hidden">
                  <Image src="/assets/About/CompanyLogo-Manifesto.jpg" alt="Manifesto Market logo" fill className="object-contain p-1" sizes="48px" />
                </div>
                <div className="flex-1">
                  <div className="mb-2 flex flex-col md:flex-row md:items-center md:justify-between">
                    <h3 className="text-xl font-medium text-white">Manifesto Market</h3>
                    <span className="text-white/60 text-sm font-mono">Jun 2025 – Aug 2025</span>
                  </div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <p className="text-white/80">UX Intern</p>
                    <span className="text-white/60 text-sm">Prague, Czechia</span>
                  </div>
                  <ul className="list-disc list-outside space-y-2 text-white/70 ml-3">
                    <li>Conducted a comprehensive UX audit and redesign (14,000+ monthly viewers), improving reservation conversion by 121%.</li>
                    <li>Designed and launched a WordPress site for sister brand KalleHalle, optimizing content for conversion.</li>
                    <li>Leveraged Google Analytics to uncover user behavior trends and set redesign priorities.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Divider Section */}
        <section className="max-w-[1290px] mx-auto px-6 pb-8">
          <div className="text-left">
            <h2 className="text-2xl md:text-3xl font-medium text-white mb-4">
              Okay, that&apos;s all the serious stuff...
            </h2>
            <p className="text-lg text-white/70">
              Here are some other things I&apos;m into
            </p>
          </div>
        </section>

        {/* Books Section */}
        <section className="max-w-[1290px] mx-auto px-6 pb-16">
          <h2 className="text-3xl font-medium text-white mb-8">Books that made me</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[1, 2, 3, 4, 5].map((num) => (
              <div key={num} className="group">
                <div className="relative aspect-[2/3] bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-white/30 transition-all duration-300">
                  <Image
                    src={`/assets/About/Book-${num}.jpg`}
                    alt={`Book ${num}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 20vw"
                  />
                  {/* Rainbow border on hover */}
                  <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300">
                    <div className="rainbow-border border-2 rounded-lg p-[1px] h-full w-full">
                      <div className="bg-transparent rounded-lg h-full w-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Albums Section */}
        <section className="max-w-[1290px] mx-auto px-6 pb-16">
          <h2 className="text-3xl font-medium text-white mb-8">Albums on repeat</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[1, 2, 3, 4, 5].map((num) => (
              <div key={num} className="group">
                <div className="relative aspect-square bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-white/30 transition-all duration-300">
                  {/* Placeholder for album artwork */}
                  <div className="w-full h-full flex items-center justify-center text-white/40">
                    <Image
                      src={`/assets/About/Song-${num}.jpg`}
                      alt={`Song ${num}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 20vw"
                    />
                  </div>
                  {/* Rainbow border on hover */}
                  <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300">
                    <div className="rainbow-border border-2 rounded-lg p-[1px] h-full w-full">
                      <div className="bg-transparent rounded-lg h-full w-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Fun Facts Section */}
        <section className="max-w-[1290px] mx-auto px-6 pb-16">
          <h2 className="text-3xl font-medium text-white mb-8">In my free time I can be found...</h2>
          
          <div className="max-w-5xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-8">
              <ul className="arrow-list space-y-3">
                {[
                  'Collecting stickers',
                  'Reading tearjerker novels about friendship and family',
                  'Going down Wikipedia rabbit holes',
                  'Studying dead languages',
                  'Studying alive languages'
                ].map((activity) => (
                  <li key={activity}>
                    <span className="text-white/70">{activity}</span>
                  </li>
                ))}
              </ul>
              <ul className="arrow-list space-y-3">
                {[
                  'Writing emails to myself',
                  'Making spreadsheets',
                  'People-watching',
                  'Organizing my bookmarks bar in rainbow order',
                  '(Unsuccessfully) trying to learn how to whistle'
                ].map((activity) => (
                  <li key={activity}>
                    <span className="text-white/70">{activity}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        {/* CTA Section */}
        <section className="max-w-[1290px] mx-auto px-6 pb-20 text-center">
          <div className="border-t border-white/10 pt-20">
            <h2 className="text-3xl md:text-4xl font-medium text-white mb-6">
              Like what you see?
            </h2>
            <p className="text-xl text-white/70 mb-8">
              Let&apos;s make something cool together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:angelinawu05@gmail.com"
                className="px-8 py-3 bg-white text-black font-medium rounded-lg hover:bg-white/90 transition-colors duration-200"
              >
                Get in touch
              </a>
              <Link
                href="/"
                className="px-8 py-3 border border-white/30 text-white font-medium rounded-lg hover:border-white/50 hover:bg-white/5 transition-all duration-200"
              >
                See my work
              </Link>
            </div>
          </div>
        </section>

        {/* Back to Home */}
        <section className="max-w-[1290px] mx-auto px-6 pb-20">
          <div className="text-center">
            <Link 
              href="/" 
              className="text-white/70 hover:text-white rainbow-text transition-colors duration-200"
            >
              ← Back to Home
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
