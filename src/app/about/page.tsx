import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { books, albums } from '@/data/about';
import ShinyText from '@/components/ShinyText';
import PixelTrailWrapper from '@/components/PixelTrailWrapper';

export default function About() {
  return (
    <div className="min-h-screen bg-[#EDF1FB]">
      <PixelTrailWrapper />
      <Navigation />
      
      <main className="pt-20">
        {/* Bio Section */}
        <section className="max-w-[1290px] mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* Image Section */}
            <div className="lg:col-span-1">
              <div className="relative w-full aspect-3/4 max-w-sm mx-auto lg:mx-0 group">
                <div className="w-full h-full bg-[#8888ff]/5 border border-[#8888ff]/10 rounded-lg overflow-hidden">
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
              <p className="text-[#0000ff] leading-relaxed text-lg mb-4">
                Hey, I’m Angelina, a second-year student at UCLA studying 
                Design Media Arts and Statistics/Data Science. I’ve always 
                believed in <ShinyText 
                  text="designing to delight:" 
                  disabled={false} 
                  speed={3} 
                /> creating things that 
                spark curiosity, joy, and connection. For me, design is a 
                way to build tiny bridges between people, and help them see 
                the otherworldly in the ordinary.
              </p>
              
              <p className="text-[#0000ff] leading-relaxed text-lg mb-4">
                My love for design began early when I was introduced to 
                Powerpoint by my second-grade teacher. Enamored by WordArt, 
                dramatic animations, and maximalist display fonts (Algerian was 
                my fave), I immediately fell in love with the whole practice 
                of designing. I would spend hours on my dad&apos;s Microsoft account 
                creating slide presentations on every topic I could think of.
              </p>
              
              <p className="text-[#0000ff] leading-relaxed text-lg mb-4">
                Back then, I didn’t know what design was: I just knew I loved 
                making things look exciting on screen. That early obsession with 
                typography, color, and movement stuck with me, slowly evolving 
                from silly slideshows into a real passion for designing thoughtful 
                interfaces that inspire and delight.
              </p>

              <p className="text-[#00ff] leading-relaxed text-lg mb-4">
                Feel free to shoot me an email at{' '}
                <a 
                  href="mailto:angelinawu05@gmail.com" 
                  className="magenta-hover-text hover:scale-101 transition-colors underline duration-200"
                >
                  angelinawu05@gmail.com <ArrowUpRight className="magenta-hover-text w-4 h-4 inline-block" />
                </a>{' '}
                or take a peek at my{' '}
                <a 
                  href="https://drive.google.com/file/d/1WeWkogMivRgkEvFLcxmGzKZMQ-LXbjwd/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="magenta-hover-text hover:scale-101 transition-colors underline duration-200"
                >
                  resume <ArrowUpRight className="magenta-hover-text w-4 h-4 inline-block" />
                </a>.
              </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills & Tools */}
        <section className="max-w-[1290px] mx-auto px-6 pb-16">
          <h2 className="text-3xl font-medium text-[#0000ff] mb-4 md:mb-8">Skills & Tools</h2>
          
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
                className="px-3 py-1 rounded-full text-xs font-mono bg-[#0000ff]/5 text-[#0000ff]/70 border border-[#0000ff]/10 hover:border-[#0000ff]/30 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="max-w-[1290px] mx-auto px-6 pb-16">
          <h2 className="text-3xl font-medium text-[#0000ff] mb-4 md:mb-8">Experience</h2>
          
          <div className="space-y-6">
            {/* UCLA Arts */}
            <div className="border border-[#8888ff]/50 rounded-lg p-6 hover:border-[#0000ff]/20 transition-colors duration-200">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="block w-12 h-12 relative flex-shrink-0 rounded bg-white/5 border border-white/10 overflow-hidden">
                  <Image src="/assets/About/CompanyLogo-UCLAArts.jpg" alt="UCLA Arts logo" fill className="object-contain p-1" sizes="48px" />
                </div>
                <div className="flex-1">
                  <div className="mb-2 flex flex-col md:flex-row md:items-center md:justify-between">
                    <h3 className="text-xl font-medium text-[#0000ff]">UCLA Arts</h3>
                    <span className="text-[#8888ff] text-sm font-mono">Oct 2025 – Present</span>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <p className="text-[#0000ff]">Student Designer in Residence (Part-time)</p>
                    <span className="text-[#8888ff] text-sm">Los Angeles, CA</span>
                  </div>
                </div>
              </div>
            </div>

            {/* UCLA Latino Policy Institute */}
            <div className="border border-[#8888ff]/50 rounded-lg p-6 hover:border-[#0000ff]/20 transition-colors duration-200">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="block w-12 h-12 relative flex-shrink-0 rounded bg-white/5 border border-white/10 overflow-hidden">
                  <Image src="/assets/About/CompanyLogo-UCLALatino.jpg" alt="UCLA Latino Policy Institute logo" fill className="object-contain p-1" sizes="48px" />
                </div>
                <div className="flex-1">
                  <div className="mb-2 flex flex-col md:flex-row md:items-center md:justify-between">
                    <h3 className="text-xl font-medium text-[#0000ff]">UCLA Latino Policy Institute</h3>
                    <span className="text-[#8888ff] text-sm font-mono">Aug 2025 – Present</span>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <p className="text-[#0000ff]">Student Website Designer (Part-time)</p>
                    <span className="text-[#8888ff] text-sm">Los Angeles, CA</span>
                  </div>
                </div>
              </div>
            </div>

            {/* VEST at UCLA */}
            <div className="border border-[#8888ff]/50 rounded-lg p-6 hover:border-[#0000ff]/20 transition-colors duration-200">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="block w-12 h-12 relative flex-shrink-0 rounded bg-white/5 border border-white/10 overflow-hidden">
                  <Image src="/assets/About/CompanyLogo-VEST.png" alt="VEST at UCLA logo" fill className="object-contain p-1" sizes="48px" />
                </div>
                <div className="flex-1">
                  <div className="mb-2 flex flex-col md:flex-row md:items-center md:justify-between">
                    <h3 className="text-xl font-medium text-[#0000ff]">VEST at UCLA</h3>
                    <span className="text-[#8888ff] text-sm font-mono">Jan 2025 – Present</span>
                  </div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <p className="text-[#0000ff]">Head of Design</p>
                    <span className="text-[#8888ff] text-sm">Los Angeles, CA</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ACM at UCLA */}
            <div className="border border-[#8888ff]/50 rounded-lg p-6 hover:border-[#0000ff]/20 transition-colors duration-200">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="block w-12 h-12 relative flex-shrink-0 rounded bg-white/5 border border-white/10 overflow-hidden">
                  <Image src="/assets/About/CompanyLogo-ACM.png" alt="ACM at UCLA logo" fill className="object-contain p-1" sizes="48px" />
                </div>
                <div className="flex-1">
                  <div className="mb-2 flex flex-col md:flex-row md:items-center md:justify-between">
                    <h3 className="text-xl font-medium text-[#0000ff]">ACM at UCLA</h3>
                    <span className="text-[#8888ff] text-sm font-mono">Jan 2025 – Present</span>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <p className="text-[#0000ff]">Design Director</p>
                    <span className="text-[#8888ff] text-sm">Los Angeles, CA</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Manifesto Market */}
            <div className="border border-[#8888ff]/50 rounded-lg p-6 hover:border-[#0000ff]/20 transition-colors duration-200">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="block w-12 h-12 relative flex-shrink-0 rounded bg-white/5 border border-white/10 overflow-hidden">
                  <Image src="/assets/About/CompanyLogo-Manifesto.jpg" alt="Manifesto Market logo" fill className="object-contain p-1" sizes="48px" />
                </div>
                <div className="flex-1">
                  <div className="mb-2 flex flex-col md:flex-row md:items-center md:justify-between">
                    <h3 className="text-xl font-medium text-[#0000ff]">Manifesto Market</h3>
                    <span className="text-[#8888ff] text-sm font-mono">Jun 2025 – Aug 2025</span>
                  </div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <p className="text-[#0000ff]">UX Intern</p>
                    <span className="text-[#8888ff] text-sm">Prague, Czechia</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Books Section */}
        <section className="max-w-[1290px] mx-auto px-6 pb-16">
          <h2 className="text-3xl font-medium text-[#0000ff] mb-4 md:mb-8">Books that made me</h2>
          
          <div className="grid grid-cols-5 gap-2 md:gap-6">
            {books.map((book) => (
              <div key={book.id} className="group">
                <a href={book.url} target="_blank" rel="noopener noreferrer" className="block">
                <div className="relative aspect-[2/3] bg-[#8888ff]/50 border border-[#8888ff]/10 rounded-lg overflow-hidden hover:border-[#8888ff]/30 transition-all duration-300">
                  <Image
                    src={book.image}
                    alt={book.title}
                    fill
                    className= "object-cover group-hover:scale-105 transition-transform duration-100 ease-out"
                    sizes="(max-width: 768px) 50vw, 20vw"
                  />
                </div>
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Albums Section */}
        <section className="max-w-[1290px] mx-auto px-6 pb-16">
          <h2 className="text-3xl font-medium text-[#0000ff] mb-4 md:mb-8">Albums on repeat</h2>
          
          <div className="grid grid-cols-5 gap-2 md:gap-6">
            {albums.map((album) => (
              <div key={album.id} className="group">
                <a href={album.url} target="_blank" rel="noopener noreferrer" className="block">
                <div className="relative aspect-square bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-white/30 transition-all duration-300">
                  {/* Placeholder for album artwork */}
                  <div className="w-full h-full flex items-center justify-center text-white/40">
                    <Image
                      src={album.image}
                      alt={album.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-100 ease-out"
                      sizes="(max-width: 768px) 50vw, 20vw"
                    />
                  </div>
                </div>
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Fun Facts Section */}
        <section className="max-w-[1290px] mx-auto px-6 pb-16">
          <h2 className="text-3xl font-medium text-[#0000ff] mb-4 md:mb-8">In my free time I can be found...</h2>
          
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
                    <span className="text-[#0000ff]">{activity}</span>
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
                    <span className="text-[#0000ff]">{activity}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        {/* CTA Section */}
        <section className="max-w-[1290px] mx-auto px-6 pb-20 text-center ">
          <div className="border-t border-white/10 pt-20">
            <h2 className="text-3xl md:text-4xl font-medium text-[#0000ff] mb-6">
              Like what you see?
            </h2>
            <p className="text-xl text-[#0000ff] mb-8">
              Let&apos;s make something cool together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:angelinawu05@gmail.com"
                className="px-6 py-3 bg-[#0000ff] text-[#f6fafd] font-medium rounded-lg gentle-hover hover:bg-[#0000ff]/90 ease-in-out transition-all duration-200 ease-in-out hover:bg-[#ff00ff]"
              >
                Get in touch
              </a>
              <Link
                href="/"
                className="px-6 py-3 border border-[#0000ff] text-[#0000ff] font-medium rounded-lg blue-hover-magenta-text hover:border-[#ff00ff]/50 hover:bg-[#ff00ff]/5 transition-all duration-200"
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
                className="blue-hover-magenta-text"
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
