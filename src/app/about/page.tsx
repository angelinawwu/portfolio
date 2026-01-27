import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { books, albums, images } from '@/data/about';
import ShinyText from '@/components/ShinyText';
import PixelTrailWrapper from '@/components/PixelTrailWrapper';
import FooterGraphic from '@/components/FooterGraphic';
import AboutGraphic from '@/components/AboutGraphic';

export default function About() {
  return (
    <div className="min-h-screen bg-bg mb-0">
      <PixelTrailWrapper />
      <Navigation />
      
      <main className="pt-[calc(4rem+1.5rem+6px)] md:pt-[calc(4rem+1.5rem+6px)] mb-0">
        {/* Images Section */}
        <section className="mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
            {images.map((image, index) => (
              <div key={image.id} className={index === 4 ? 'hidden md:block' : ''}>
                <div 
                  className="relative aspect-square bg-white/5 border overflow-hidden cursor-pointer"
                  data-cursor="image"
                  data-caption={image.caption}
                >
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

        {/* Bio & Experience Section */}
        <section className="max-w-[1290px] mx-auto px-6 pt-8 pb-12 md:pb-8 md:pt-20 md:pb-24">
        <h2 className="text-3xl md:text-5xl font-medium text-blue bit-apple-font mb-4 md:mb-12">Designing to delight...</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Left Column: Bio */}
            <div className="flex flex-col gap-4 prose prose-lg prose-invert text-base">
              <p className="text-blue leading-relaxed">
                Hey, I'm Angelina! I'm a designer who's passionate about 
                creating channels for{' '}
                <ShinyText text="delight" /> and <ShinyText text="connection"/>. I see design as a 
                way to build tiny bridges between people. I'm currently at UCLA studying 
                Design Media Arts and Statistics/Data Science.
              </p>
              
              <div>
                <p className="text-blue leading-relaxed mb-0">
                  When I'm not designing, I can be found:
                </p>

                <ul className="arrow-list text-blue leading-relaxed mt-0">
                  <li>Reading tearjerker novels about friendship and family</li>
                  <li>Going down Wikipedia rabbit holes</li>
                  <li>Arranging my bookmarks bar in rainbow order</li>
                  <li>(Unsuccessfully) learning how to whistle</li>
                </ul>
              </div>

              <p className="text-blue leading-relaxed">
                Say hi at{' '}
                <a 
                  href="mailto:angelinawu05@gmail.com" 
                  className="magenta-hover-text relative z-10 cursor-pointer pointer-events-auto"
                >
                  angelinawwu@ucla.edu <ArrowUpRight className="magenta-hover-text w-4 h-4 inline-block" />
                </a>{' '}
                or take a peek at my{' '}
                <a 
                  href="https://drive.google.com/file/d/1urDhFh8q3HmATT-XVZU7RXP-TAt2BeXs/view?usp=sharing"
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
                <div className="w-full border-b border-lavender mb-2">
                  <h2 className="text-xl font-medium text-blue">Experience</h2>
                </div> 
                
                <div className="flex flex-col text-base gap-2">
                  {/* SEPHORA */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    {/* Mobile: Top row - Company name and date */}
                    <div className="flex flex-row items-center justify-between md:hidden">
                      <h3 className="text-blue">Sephora</h3>
                      <span className="text-lavender font-mono uppercase">Incoming</span>
                    </div>
                    {/* Mobile: Bottom row - Job title */}
                    <span className="text-lavender md:hidden">Product Design Intern</span>
                    {/* Desktop: Left side - Company name and job title */}
                    <div className="hidden md:flex md:flex-row md:items-center md:gap-2">
                      <h3 className="text-blue">Sephora</h3>
                      <span className="text-lavender">Product Design Intern</span>
                    </div>
                    {/* Desktop: Right side - Date */}
                    <span className="hidden md:inline text-lavender font-mono uppercase">Incoming</span>
                  </div>

                  {/* Manifesto Market */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    {/* Mobile: Top row - Company name and date */}
                    <div className="flex flex-row items-center justify-between md:hidden">
                      <h3 className="text-blue">Manifesto Market</h3>
                      <span className="text-lavender font-mono uppercase">Summer 2025</span>
                    </div>
                    {/* Mobile: Bottom row - Job title */}
                    <span className="text-lavender md:hidden">UX Intern</span>
                    {/* Desktop: Left side - Company name and job title */}
                    <div className="hidden md:flex md:flex-row md:items-center md:gap-2">
                      <h3 className="text-blue">Manifesto Market</h3>
                      <span className="text-lavender">UX Intern</span>
                    </div>
                    {/* Desktop: Right side - Date */}
                    <span className="hidden md:inline text-lavender font-mono uppercase">Summer 2025</span>
                  </div>
                </div>
              </div>

              {/* Orgs & Leadership */}
              <div>
                <div className="w-full border-b border-lavender mb-2">
                  <h2 className="text-xl font-medium text-blue">Orgs & Leadership</h2>
                </div> 
                
                <div className="flex flex-col text-base gap-2">
                  {/* VEST at UCLA */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    {/* Mobile: Top row - Company name and date */}
                    <div className="flex flex-row items-center justify-between md:hidden">
                      <h3 className="text-blue">VEST</h3>
                      <span className="text-lavender font-mono uppercase">2025–Present</span>
                    </div>
                    {/* Mobile: Bottom row - Job title */}
                    <span className="text-lavender md:hidden">Head of Design</span>
                    {/* Desktop: Left side - Company name and job title */}
                    <div className="hidden md:flex md:flex-row md:items-center md:gap-2">
                      <h3 className="text-blue">VEST</h3>
                      <span className="text-lavender">Head of Design</span>
                    </div>
                    {/* Desktop: Right side - Date */}
                    <span className="hidden md:inline text-lavender font-mono uppercase">2025–Present</span>
                  </div>

                  {/* ACM at UCLA */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    {/* Mobile: Top row - Company name and date */}
                    <div className="flex flex-row items-center justify-between md:hidden">
                      <h3 className="text-blue">ACM at UCLA</h3>
                      <span className="text-lavender font-mono uppercase">2024–Present</span>
                    </div>
                    {/* Mobile: Bottom row - Job title */}
                    <span className="text-lavender md:hidden">Design Director</span>
                    {/* Desktop: Left side - Company name and job title */}
                    <div className="hidden md:flex md:flex-row md:items-center md:gap-2">
                      <h3 className="text-blue">ACM at UCLA</h3>
                      <span className="text-lavender">Design Director</span>
                    </div>
                    {/* Desktop: Right side - Date */}
                    <span className="hidden md:inline text-lavender font-mono uppercase">2024–Present</span>
                  </div>

                  {/* UCLA Campus Events Commission */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    {/* Mobile: Top row - Company name and date */}
                    <div className="flex flex-row items-center justify-between md:hidden">
                      <h3 className="text-blue">Campus Events Commission</h3>
                      <span className="text-lavender font-mono uppercase">2024–Present</span>
                    </div>
                    {/* Mobile: Bottom row - Job title */}
                    <span className="text-lavender md:hidden">Designer</span>
                    {/* Desktop: Left side - Company name and job title */}
                    <div className="hidden md:flex md:flex-row md:items-center md:gap-2">
                      <h3 className="text-blue">Campus Events Commission</h3>
                      <span className="text-lavender">Designer</span>
                    </div>
                    {/* Desktop: Right side - Date */}
                    <span className="hidden md:inline text-lavender font-mono uppercase">2024–Present</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <div className="h-24 md:h-36 w-full flex justify-center items-center mx-auto"> <AboutGraphic /></div>  */}
        {/* Life Outside Design Section */}
        <section className="max-w-[1290px] mx-auto px-6 pb-8 md:pb-24">
          <h2 className="text-3xl md:text-5xl font-medium text-blue bit-apple-font mb-4 md:mb-12">...with my life's delights</h2>
          
          
        {/* Books Section */}
        <section className="max-w-[1290px] mx-auto pb-12 md:pb-16">
          <h2 className="text-2xl font-medium text-blue mb-4">Books that changed me</h2>
          
          <div className="grid grid-cols-5 gap-1 md:gap-2">
            {books.map((book) => (
              <div key={book.id} className="group">
                <a href={book.url} target="_blank" rel="noopener noreferrer" className="block">
                <div className="relative aspect-[2/3] bg-lavender/50 border overflow-hidden transition-all duration-300">
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
        <section className="max-w-[1290px] mx-auto">
          <h2 className="text-2xl font-medium text-blue mb-4">Albums on repeat</h2>
          
          <div className="grid grid-cols-5 gap-1 md:gap-2">
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
        </section>
        </section>
        {/* Contact Section */}
        {/* CTA Section */}
        <section className="w-full bg-blue text-center mt-6">
          <div className="max-w-7xl mx-auto pt-6 md:pt-20 px-6 pb-6 md:pb-12 text-left text-white relative z-10">
            <h2 className="text-7xl md:text-9xl font-medium mb-4 bit-apple-font">
              Like what you see?
            </h2>
            <p className="text-xl mb-12 md:mb-20">
              Let&apos;s make something cool together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 text-white">
              <a
                href="mailto:angelinawwu@ucla.edu"
                className="inline-flex items-center uppercase self-start gap-2 px-4 py-2 geist-mono-font bg-blue border border-white text-surface text-sm font-medium gentle-hover hover:bg-blue/90 ease-in-out transition-all duration-200 ease-in-out hover:bg-magenta"
              >
                Get in touch <ArrowUpRight className="w-4 h-4 inline-block align-middle" />
              </a>
              <Link
                href="/"
                className="inline-flex items-center uppercase self-start gap-2 px-4 py-2 geist-mono-font bg-blue border border-white text-surface text-sm font-medium gentle-hover hover:bg-blue/90 ease-in-out transition-all duration-200 ease-in-out hover:bg-magenta"
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
        <div className="relative md:absolute md:bottom-0 md:right-0 w-auto h-auto z-10 bg-blue md:bg-transparent">
          <div className="flex justify-end px-6 md:pr-12 md:pb-0 bg-blue">
            <FooterGraphic />
          </div>
        </div>
      </div>
    </div>
  );
}
