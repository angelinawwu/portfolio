import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { books, albums, images } from '@/data/about';

export default function About() {
  return (
    <div className="min-h-screen bg-black">
      {/* Images Section */}
      <section className="p-4 md:p-6 lg:p-8 mb-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
          {images.map((image, index) => (
            <div key={image.id} className={index === 4 ? 'hidden md:block' : ''}>
              <div 
                className="relative aspect-square overflow-hidden"
                data-cursor="image"
                data-caption={image.caption}
              >
                <Image
                  src={image.image}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 20vw"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bio & Experience Section */}
      <section className="p-4 md:p-6 lg:p-8 mb-4">
        <h2 className="text-3xl md:text-5xl bit-apple-font text-white mb-8 md:mb-12">
          Designing to delight...
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Left Column: Bio */}
          <div className="flex flex-col gap-4">
            <p className="text-sm leading-relaxed text-white-muted">
              Hey, I&apos;m Angelina! I&apos;m a designer who&apos;s passionate about 
              creating channels for{' '}
              <span className="accent-text">delight</span> and{' '}
              <span className="accent-text">connection</span>. I see design as a 
              way to build tiny bridges between people. I&apos;m currently at UCLA studying 
              Design Media Arts and Statistics/Data Science.
            </p>
            
            <div>
              <p className="text-sm leading-relaxed text-white-muted">
                When I&apos;m not designing, I can be found:
              </p>
              <ul className="arrow-list text-white-muted leading-relaxed">
                <li>Reading tearjerker novels about friendship and family</li>
                <li>Going down Wikipedia rabbit holes</li>
                <li>Arranging my bookmarks bar in rainbow order</li>
                <li>(Unsuccessfully) learning how to whistle</li>
              </ul>
            </div>

            <p className="text-sm leading-relaxed text-white-muted">
              Say hi at{' '}
              <a 
                href="mailto:angelinawwu@ucla.edu" 
                className="accent-text hover:underline"
              >
                angelinawwu@ucla.edu <ArrowUpRight className="w-4 h-4 inline-block" />
              </a>{' '}
              or take a peek at my{' '}
              <a 
                href="https://drive.google.com/file/d/1urDhFh8q3HmATT-XVZU7RXP-TAt2BeXs/view"
                target="_blank"
                rel="noopener noreferrer"
                className="accent-text hover:underline"
              >
                resume <ArrowUpRight className="w-4 h-4 inline-block" />
              </a>.
            </p>
          </div>

          {/* Right Column: Experience & Communities */}
          <div className="flex flex-col gap-8 md:gap-12">
            {/* Experience */}
            <div>
              <div className="w-full border-b border-faded-white mb-2">
                <h3 className="text-xs geist-mono-font text-white mb-2 tracking-wider">EXPERIENCE</h3>
              </div>
              
              <div className="flex flex-col gap-2">
                {/* SEPHORA */}
                <div className="flex flex-row md:items-center justify-between gap-1">
                  <div className="flex flex-col md:flex-row justify-between md:justify-start md:gap-2">
                    <span className="text-white text-sm">Sephora</span>
                    <span className="hidden md:block text-white-muted text-sm">✱</span>
                    <span className="text-white-muted text-sm">Product Design Intern</span>
                  </div>
                  <span className="text-white-muted text-sm geist-mono-font">INCOMING</span>
                </div>

                {/* Manifesto Market */}
                <div className="flex flex-row md:items-center justify-between gap-1">
                  <div className="flex flex-col md:flex-row justify-between md:justify-start md:gap-2">
                    <span className="text-white text-sm">Manifesto Market</span>
                    <span className="hidden md:block text-white-muted text-sm">✱</span>
                    <span className="text-white-muted text-sm">UX Intern</span>
                  </div>
                  <span className="text-white-muted text-sm geist-mono-font">SUMMER 2025</span>
                </div>
              </div>
            </div>

            {/* Orgs & Leadership */}
            <div>
              <div className="w-full border-b border-faded-white mb-2">
                <h3 className="text-xs geist-mono-font text-white mb-2 tracking-wider">ORGS & LEADERSHIP</h3>
              </div>
              
              <div className="flex flex-col gap-2">
                {/* VEST */}
                <div className="flex flex-row md:items-center justify-between gap-1">
                  <div className="flex flex-col md:flex-row justify-between md:justify-start md:gap-2">
                    <span className="text-white text-sm">VEST</span>
                    <span className="hidden md:block text-white-muted text-sm">✱</span>
                    <span className="text-white-muted text-sm">Head of Design</span>
                  </div>
                  <span className="text-white-muted text-sm geist-mono-font">2025–PRESENT</span>
                </div>

                {/* ACM at UCLA */}
                <div className="flex flex-row md:items-center justify-between gap-1">
                  <div className="flex flex-col md:flex-row justify-between md:justify-start md:gap-2">
                    <span className="text-white text-sm">ACM at UCLA</span>
                    <span className="hidden md:block text-white-muted text-sm">✱</span>
                    <span className="text-white-muted text-sm">Design Director</span>
                  </div>
                  <span className="text-white-muted text-sm geist-mono-font">2024–PRESENT</span>
                </div>

                {/* Campus Events Commission */}
                <div className="flex flex-row md:items-center justify-between gap-1">
                  <div className="flex flex-col md:flex-row justify-between md:justify-start md:gap-2">
                    <span className="text-white text-sm">Campus Events Commission</span>
                    <span className="hidden md:block text-white-muted text-sm">✱</span>
                    <span className="text-white-muted text-sm">Designer</span>
                  </div>
                  <span className="text-white-muted text-sm geist-mono-font">2024–PRESENT</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Life Outside Design Section */}
      <section className="p-4 md:p-6 lg:p-8">
        <h2 className="text-3xl md:text-5xl bit-apple-font text-white mb-8 md:mb-12">
          ...with my life&apos;s delights
        </h2>
        
        {/* Books Section */}
        <div className="mb-12">
          <h3 className="text-xl text-white mb-4">Books that changed me</h3>
          
          <div className="grid grid-cols-5 gap-2">
            {books.map((book) => (
              <a 
                key={book.id} 
                href={book.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group block"
              >
                <div className="relative aspect-[2/3] overflow-hidden">
                  <Image
                    src={book.image}
                    alt={book.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-200 ease-out"
                    sizes="(max-width: 768px) 20vw, 15vw"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Albums Section */}
        <div>
          <h3 className="text-xl text-white mb-4">Albums on repeat</h3>
          
          <div className="grid grid-cols-5 gap-2">
            {albums.map((album) => (
              <a 
                key={album.id} 
                href={album.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group block"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={album.image}
                    alt={album.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-200 ease-out"
                    sizes="(max-width: 768px) 20vw, 15vw"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
