import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { books, albums, images } from '@/data/about';
import ShinyText from '@/components/ShinyText';
import PixelTrailWrapper from '@/components/PixelTrailWrapper';
import FooterGraphic from '@/components/FooterGraphic';

export default function About() {
  return (
    <div className="min-h-screen bg-[#EDF1FB] mb-0">
      <PixelTrailWrapper />
      <Navigation />
      
      <main className="pt-20 mb-0">
        {/* Bio & Experience Section */}
        <section className="max-w-[1290px] mx-auto px-6 pt-8 pb-12 md:pt-12 md:pb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Left Column: Bio */}
            <div className="flex flex-col gap-4 prose prose-lg prose-invert text-md">
              <p className="text-[#0000ff] leading-relaxed">
                Hey, I'm Angelina! I'm a designer who's passionate about 
                creating channels for 
                <ShinyText text="delight" /> and <ShinyText text="connection" />. I see design as a 
                way to build tiny bridges between people. I'm currently at UCLA studying 
                Design Media Arts and Statistics/Data Science.
              </p>
              
              <div>
                <p className="text-[#0000ff] leading-relaxed mb-0">
                  When I'm not designing, I can be found:
                </p>

                <ul className="list-disc list-inside text-[#0000ff] leading-relaxed mt-0">
                  <li>Reading tearjerker novels about friendship and family</li>
                  <li>Going down Wikipedia rabbit holes</li>
                  <li>Arranging my bookmarks bar in rainbow order</li>
                  <li>(Unsuccessfully) learning how to whistle</li>
                </ul>
              </div>

              <p className="text-[#00ff] leading-relaxed">
                Say hi at{' '}
                <a 
                  href="mailto:angelinawu05@gmail.com" 
                  className="magenta-hover-text relative z-10 cursor-pointer pointer-events-auto"
                >
                  angelinawwu@ucla.edu <ArrowUpRight className="magenta-hover-text w-4 h-4 inline-block" />
                </a>{' '}
                or take a peek at my{' '}
                <a 
                  href="https://drive.google.com/file/d/16XvgLKsnpMBX21SeO_V3wavg2BaGio-2/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="magenta-hover-text relative z-10 cursor-pointer pointer-events-auto"
                >
                  resume <ArrowUpRight className="magenta-hover-text w-4 h-4 inline-block" />
                </a>.
              </p>
            </div>

            {/* Right Column: Experience & Communities */}
            <div className="flex flex-col gap-8 md:gap-12">
              {/* Experience */}
              <div>
                <h2 className="text-2xl font-medium text-[#0000ff] mb-2">Experience</h2>
                
                <div className="flex flex-col text-md gap-0">
                  {/* SEPHORA */}
                  <div className="py-1 grid grid-cols-2 gap-4">
                    <div className="flex flex-row items-center gap-2">
                      <h3 className="text-[#0000ff]">Sephora</h3>
                      <span className="text-[#8888ff]">Product Design Intern</span>
                    </div>
                    <div className="flex flex-col md:flex-col md:items-end md:justify-between">
                      <span className="text-[#8888ff] font-mono uppercase">Incoming Summer 2026</span>
                    </div>
                  </div>

                  {/* Manifesto Market */}
                  <div className="py-1 grid grid-cols-2 gap-4">
                    <div className="flex flex-row items-center gap-2">
                      <h3 className="text-[#0000ff]">Manifesto Market</h3>
                      <span className="text-[#8888ff]">UX Intern</span>
                    </div>
                    <div className="flex flex-col md:flex-col md:items-end md:justify-between">
                      <span className="text-[#8888ff] font-mono uppercase">Summer 2025</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Communities & Involvements */}
              <div>
                <h2 className="text-2xl font-medium text-[#0000ff] mb-2">Orgs & Leadership</h2>
                
                <div className="flex flex-col text-md gap-0">
                  {/* VEST at UCLA */}
                  <div className="py-1 grid grid-cols-2 gap-4">
                    <div className="flex flex-row items-center gap-2">
                      <h3 className="text-[#0000ff]">VEST</h3>
                      <span className="text-[#8888ff]">Head of Design</span>
                    </div>
                    <div className="flex flex-col md:flex-col md:items-end md:justify-between">
                      <span className="text-[#8888ff] font-mono uppercase">Jan 2025 – Present</span>
                    </div>
                  </div>

                  {/* ACM at UCLA */}
                  <div className="py-1 grid grid-cols-2 gap-4">
                    <div className="flex flex-row items-center gap-2">
                      <h3 className="text-[#0000ff]">ACM at UCLA</h3>
                      <span className="text-[#8888ff]">Design Director</span>
                    </div>
                    <div className="flex flex-col md:flex-col md:items-end md:justify-between">
                      <span className="text-[#8888ff] font-mono uppercase">Oct 2024 – Present</span>
                    </div>
                  </div>

                  {/* UCLA Campus Events Commission */}
                  <div className="py-1 grid grid-cols-2 gap-4">
                    <div className="flex flex-row items-center gap-2">
                      <h3 className="text-[#0000ff]">Campus Events Commission</h3>
                      <span className="text-[#8888ff]">Designer</span>
                    </div>
                    <div className="flex flex-col md:flex-col md:items-end md:justify-between">
                      <span className="text-[#8888ff] font-mono uppercase">Oct 2024 – Present</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Images Section */}
        <section className="mx-auto px-6">
          <div className="grid grid-cols-5 gap-2">
            {images.map((image) => (
              <div key={image.id}>
                <div className="relative aspect-square bg-white/5 border overflow-hidden">
                  <Image
                    src={image.image}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 25vw, 20vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Books Section */}
        {/* <section className="max-w-[1290px] mx-auto px-6 pb-12 md:pb-32">
          <h2 className="text-3xl font-medium text-[#0000ff] mb-4 md:mb-8">Books that made me</h2>
          
          <div className="grid grid-cols-5 gap-2 m">
            {books.map((book) => (
              <div key={book.id} className="group">
                <a href={book.url} target="_blank" rel="noopener noreferrer" className="block">
                <div className="relative aspect-[2/3] bg-[#8888ff]/50 border overflow-hidden transition-all duration-300">
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
        </section> */}

        {/* Albums Section */}
        {/* <section className="max-w-[1290px] mx-auto px-6 pb-12 md:pb-32">
          <h2 className="text-3xl font-medium text-[#0000ff] mb-4 md:mb-8">Albums on repeat</h2>
          
          <div className="grid grid-cols-5 gap-2">
            {albums.map((album) => (
              <div key={album.id} className="group">
                <a href={album.url} target="_blank" rel="noopener noreferrer" className="block">
                <div className="relative aspect-square bg-white/5 border overflow-hidden transition-all duration-300">
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
        </section> */}

        {/* Contact Section */}
        {/* CTA Section */}
        <section className="w-full bg-[#0000ff] text-center mt-6">
          <div className="max-w-7xl mx-auto px-6 pt-10 md:pt-20 pb-10 md:pb-12 text-left text-white relative z-10">
            <h2 className="text-7xl md:text-9xl font-medium mb-6 bit-apple-font">
              Like what you see?
            </h2>
            <p className="text-xl mb-20">
              Let&apos;s make something cool together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 text-white">
              <a
                href="mailto:angelinawu05@gmail.com"
                className="inline-flex items-center self-start gap-2 px-6 py-3 geist-mono-font bg-[#0000ff] border border-white text-[#f6fafd] font-medium rounded-lg gentle-hover hover:bg-[#0000ff]/90 ease-in-out transition-all duration-200 ease-in-out hover:bg-[#ff00ff]"
              >
                Get in touch <ArrowUpRight className="w-4 h-4 inline-block align-middle" />
              </a>
              <Link
                href="/"
                className="inline-flex items-center self-start gap-2 px-6 py-3 geist-mono-font bg-[#0000ff] border border-white text-[#f6fafd] font-medium rounded-lg gentle-hover hover:bg-[#0000ff]/90 ease-in-out transition-all duration-200 ease-in-out hover:bg-[#ff00ff]"
              >
                See my work <ArrowRight className="w-4 h-4 inline-block align-middle" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <div className="relative">
        <Footer />
        
        {/* Footer Graphic - Below footer on mobile, absolute positioned on desktop */}
        <div className="relative md:absolute md:bottom-0 md:right-0 w-auto h-auto z-10 bg-[#0000ff]">
          <div className="flex justify-end px-6 md:pr-12 md:pb-0 bg-[#0000ff]">
            <FooterGraphic />
          </div>
        </div>
      </div>
    </div>
  );
}
