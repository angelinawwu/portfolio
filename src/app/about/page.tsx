'use client';

import LoadedImage from '@/components/LoadedImage';
import LetterShuffle from '@/components/LetterShuffle';
import { ArrowUpRight } from '@phosphor-icons/react';
import React from 'react';
import { books, albums, images, bio, experience, orgs } from '@/data/about';

export default function About() {
  let cardIndex = 0;
  const [hoveredId, setHoveredId] = React.useState<string | null>(null);
  
  return (
    <div className="min-h-screen bg-black">
      {/* Images Section */}
      <section className="p-4 md:p-6 lg:p-8 mb-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
          {images.map((image, index) => {
            const currentIndex = cardIndex++;
            return (
              <div 
                key={image.id} 
                className={`project-card group ${index === 4 ? 'hidden md:block' : ''}`}
                style={{ '--card-index': currentIndex } as React.CSSProperties}
                onMouseEnter={() => setHoveredId(`image-${image.id}`)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="relative aspect-square overflow-hidden">
                  <LoadedImage
                    src={image.image}
                    alt={image.alt}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 20vw"
                  />
                  {/* Progressive blur overlay on hover */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-100 pointer-events-none"
                    style={{
                      backdropFilter: 'blur(12px)',
                      WebkitBackdropFilter: 'blur(12px)',
                      maskImage: 'linear-gradient(to bottom, transparent 0%, transparent 60%, black 100%)',
                      WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, transparent 60%, black 100%)',
                    }}
                  />
                </div>
                {image.caption && (
                  <LetterShuffle
                    title={image.caption}
                    isVisible={hoveredId === `image-${image.id}`}
                    className="mt-1.5"
                  />
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Bio & Experience Section */}
      <section className="p-4 md:p-6 lg:p-8 mb-4">
        <h2 
          className="project-card text-3xl md:text-5xl bit-apple-font text-white mb-8 md:mb-12"
          style={{ '--card-index': cardIndex++ } as React.CSSProperties}
        >
          Designing to delight...
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Left Column: Bio */}
          <div 
            className="project-card flex flex-col gap-4"
            style={{ '--card-index': cardIndex++ } as React.CSSProperties}
          >
            <p className="text-sm leading-relaxed text-white-muted">
              {bio.paragraph.split(/\{(\w+)\}/).map((part, i) =>
                bio.accentWords.includes(part)
                  ? <span key={i} className="accent-text">{part}</span>
                  : part
              )}
            </p>
            
            <div>
              <p className="text-sm leading-relaxed text-white-muted">
                When I&apos;m not designing, I can be found:
              </p>
              <ul className="arrow-list text-white-muted text-sm leading-relaxed">
                {bio.hobbies.map((hobby, i) => (
                  <li key={i}>{hobby}</li>
                ))}
              </ul>
            </div>

            <p className="text-sm leading-relaxed text-white-muted">
              Say hi at{' '}
              <a 
                href={`mailto:${bio.email}`}
                className="accent-text sidebar-link"
              >
                {bio.email} <ArrowUpRight className="w-4 h-4 inline-block" />
              </a>{' '}
              or take a peek at my{' '}
              <a 
                href={bio.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="accent-text sidebar-link"
              >
                resume <ArrowUpRight className="w-4 h-4 inline-block" />
              </a>.
            </p>
          </div>

          {/* Right Column: Experience & Communities */}
          <div 
            className="project-card flex flex-col gap-8 md:gap-12"
            style={{ '--card-index': cardIndex++ } as React.CSSProperties}
          >
            {/* Experience */}
            <div>
              <div className="w-full border-b border-faded-white mb-2">
                <h3 className="text-xs geist-mono-font text-white mb-2 tracking-wider">EXPERIENCE</h3>
              </div>
              <div className="flex flex-col gap-2">
                {experience.map((item, i) => (
                  <div key={i} className="flex flex-row md:items-center justify-between gap-1">
                    <div className="flex flex-col md:flex-row justify-between md:justify-start md:gap-2">
                      <span className="text-white text-sm">{item.org}</span>
                      <span className="hidden md:block text-white-muted text-sm">✱</span>
                      <span className="text-white-muted text-sm">{item.role}</span>
                    </div>
                    <span className="text-white-muted text-sm geist-mono-font">{item.period}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Orgs & Leadership */}
            <div>
              <div className="w-full border-b border-faded-white mb-2">
                <h3 className="text-xs geist-mono-font text-white mb-2 tracking-wider">ORGS & LEADERSHIP</h3>
              </div>
              <div className="flex flex-col gap-2">
                {orgs.map((item, i) => (
                  <div key={i} className="flex flex-row md:items-center justify-between gap-1">
                    <div className="flex flex-col md:flex-row justify-between md:justify-start md:gap-2">
                      <span className="text-white text-sm">{item.org}</span>
                      <span className="hidden md:block text-white-muted text-sm">✱</span>
                      <span className="text-white-muted text-sm">{item.role}</span>
                    </div>
                    <span className="text-white-muted text-sm geist-mono-font">{item.period}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Life Outside Design Section */}
      <section className="p-4 md:p-6 lg:p-8">
        <h2 
          className="project-card text-3xl md:text-5xl bit-apple-font text-white mb-8 md:mb-12"
          style={{ '--card-index': cardIndex++ } as React.CSSProperties}
        >
          ...with my life&apos;s delights
        </h2>
        
        {/* Books Section */}
        <div 
          className="project-card mb-8"
          style={{ '--card-index': cardIndex++ } as React.CSSProperties}
        >
          <h3 className="text-xs geist-mono-font text-white mb-2 tracking-wider uppercase">Books that changed me</h3>
          
          <div className="grid grid-cols-5 gap-2">
            {books.map((book) => {
              const currentIndex = cardIndex++;
              return (
                <a 
                  key={book.id} 
                  href={book.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-card group block"
                  style={{ '--card-index': currentIndex } as React.CSSProperties}
                  onMouseEnter={() => setHoveredId(`book-${book.id}`)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <div className="relative aspect-[2/3] overflow-hidden">
                    <div className="absolute inset-0 group-hover:scale-104 transition-transform duration-200 ease-out">
                      <LoadedImage
                        src={book.image}
                        alt={book.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 20vw, 15vw"
                      />
                    </div>
                    {/* Progressive blur overlay on hover */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-100 pointer-events-none"
                      style={{
                        backdropFilter: 'blur(12px)',
                        WebkitBackdropFilter: 'blur(12px)',
                        maskImage: 'linear-gradient(to bottom, transparent 0%, transparent 60%, black 100%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, transparent 60%, black 100%)',
                      }}
                    />
                  </div>
                  <LetterShuffle
                    title={book.title}
                    author={book.author}
                    isVisible={hoveredId === `book-${book.id}`}
                    className="mt-1.5"
                  />
                </a>
              );
            })}
          </div>
        </div>

        {/* Albums Section */}
        <div 
          className="project-card"
          style={{ '--card-index': cardIndex++ } as React.CSSProperties}
        >
          <h3 className="text-xs geist-mono-font text-white mb-2 tracking-wider uppercase">Albums on repeat</h3>
          
          <div className="grid grid-cols-5 gap-2">
            {albums.map((album) => {
              const currentIndex = cardIndex++;
              return (
                <a 
                  key={album.id} 
                  href={album.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-card group block"
                  style={{ '--card-index': currentIndex } as React.CSSProperties}
                  onMouseEnter={() => setHoveredId(`album-${album.id}`)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <div className="relative aspect-square overflow-hidden">
                    <div className="absolute inset-0 group-hover:scale-104 transition-transform duration-200 ease-out">
                      <LoadedImage
                        src={album.image}
                        alt={album.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 20vw, 15vw"
                      />
                    </div>
                    {/* Progressive blur overlay on hover */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-100 pointer-events-none"
                      style={{
                        backdropFilter: 'blur(12px)',
                        WebkitBackdropFilter: 'blur(12px)',
                        maskImage: 'linear-gradient(to bottom, transparent 0%, transparent 60%, black 100%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, transparent 60%, black 100%)',
                      }}
                    />
                  </div>
                  <LetterShuffle
                    title={album.title}
                    author={album.author}
                    isVisible={hoveredId === `album-${album.id}`}
                    className="mt-1.5"
                  />
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
