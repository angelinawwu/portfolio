'use client';

import Image from 'next/image';

{/* Bulletin Section */}
export default function Bulletin() {
    return (
        <section>
        <section className="max-w-[1290px] mx-auto px-4 md:px-6 pb-32">
          <div className="text-left mb-8 md:mb-12 backdrop-blur-sm bg-black/20 rounded-2xl p-4 md:p-6">
            <h2 className="permanent-rainbow-text text-2xl md:text-3xl font-medium text-white mb-4">
              Bulletin
            </h2>
            <p className="text-white/80 max-w-2xl text-sm md:text-base">
              One-off designs and miscellaneous creations
            </p>
          </div>
          
          {/* Collage Container - Responsive */}
          <div className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px]">
            {/* Daily UI Challenge Images with pin */}
            <div className="absolute" style={{ left: '55%', top: '5%', transform: 'rotate(-10deg)', zIndex: 20 }}>
              <Image 
                src="/assets/projects/Bulletin/pin-green.png" 
                alt="" 
                className="w-8 h-8 md:w-12 lg:w-16 md:h-12 lg:h-16 absolute -top-4 md:-top-6 lg:-top-8 left-1/2 -translate-x-1/2 z-10"
              />
              <Image 
                src="/assets/projects/Bulletin/photo-1580656449548-a2278870021d.png" 
                alt="Daily UI Design"
                className="w-32 sm:w-48 md:w-56 lg:w-64 h-auto rounded-lg shadow-2xl"
              />
              <p className="text-white text-xs md:text-sm mt-2 transform -rotate-12 font-medium hidden sm:block">
                Daily UI Challenge: Day 002/100
              </p>
            </div>

            {/* DAY2 Image */}
            <div className="absolute" style={{ left: '50%', top: '15%', transform: 'rotate(1deg)', zIndex: 15 }}>
              <Image 
                src="/assets/projects/Bulletin/DAY2.png" 
                alt="Day 2"
                className="w-40 sm:w-56 md:w-64 lg:w-80 h-auto rounded-lg shadow-2xl"
              />
            </div>

            {/* DAY1 Image */}
            <div className="absolute" style={{ left: '45%', top: '20%', transform: 'rotate(5deg)', zIndex: 16 }}>
              <Image 
                src="/assets/projects/Bulletin/DAY1.png" 
                alt="Day 1"
                className="w-48 sm:w-64 md:w-80 lg:w-96 h-auto rounded-lg shadow-2xl"
              />
            </div>

            {/* VEST Images Group with pin and tape */}
            <div className="absolute" style={{ left: '2%', top: '25%', transform: 'rotate(19deg)', zIndex: 18 }}>
              <Image 
                src="/assets/projects/Bulletin/tape.png" 
                alt="" 
                className="w-6 md:w-8 lg:w-12 absolute -top-3 md:-top-4 lg:-top-6 left-4 md:left-6 lg:left-8 mix-blend-screen opacity-80"
                style={{ transform: 'rotate(-60deg)' }}
              />
              <Image 
                src="/assets/projects/Bulletin/photo-1580656449548-a2278870021d.png" 
                alt="VEST Design"
                className="w-36 sm:w-48 md:w-60 lg:w-72 h-auto rounded-lg shadow-2xl"
              />
              <p className="text-black text-xs md:text-sm mt-2 transform rotate-12 font-medium max-w-[100px] md:max-w-[150px] hidden sm:block">
                Designs for VEST, a student startup + builder org at UCLA!
              </p>
            </div>

            {/* VEST Summer Building */}
            <div className="absolute" style={{ left: '18%', top: '35%', transform: 'rotate(-8deg)', zIndex: 14 }}>
              <Image 
                src="/assets/projects/Bulletin/VEST-SocMed-SummerBuilding-1.png" 
                alt="VEST Summer"
                className="w-24 sm:w-32 md:w-40 lg:w-48 h-auto rounded-lg shadow-2xl"
              />
            </div>

            {/* VEST Merch */}
            <div className="absolute" style={{ left: '6%', top: '25%', transform: 'rotate(-12deg)', zIndex: 13 }}>
              <Image 
                src="/assets/projects/Bulletin/VEST-Merch-3 copy.jpg" 
                alt="VEST Merch"
                className="w-22 sm:w-32 md:w-36 lg:w-44 h-auto rounded-lg shadow-2xl"
              />
            </div>

            {/* VEST Recruitment with pin */}
            <div className="absolute" style={{ left: '12%', top: '18%', transform: 'rotate(4deg)', zIndex: 12 }}>
              <Image 
                src="/assets/projects/Bulletin/pin-green.png" 
                alt="" 
                className="w-8 h-8 md:w-12 lg:w-16 md:h-12 lg:h-16 absolute -top-4 md:-top-6 lg:-top-8 left-1/2 -translate-x-1/2 z-10 scale-x-[-1]"
              />
              <Image 
                src="/assets/projects/Bulletin/VEST-F2025-Recruitment.jpg" 
                alt="VEST Recruitment"
                className="w-24 sm:w-32 md:w-40 lg:w-48 h-auto rounded-lg shadow-2xl"
              />
            </div>

            {/* VEST Glass */}
            <div className="absolute" style={{ left: '22%', top: '42%', transform: 'rotate(-5deg)', zIndex: 17 }}>
              <Image 
                src="/assets/projects/Bulletin/tape.png" 
                alt="" 
                className="w-6 md:w-8 lg:w-10 absolute -top-2 md:-top-3 lg:-top-4 left-2 md:left-3 lg:left-4 mix-blend-screen opacity-80"
                style={{ transform: 'rotate(75deg)' }}
              />
              <Image 
                src="/assets/projects/Bulletin/VEST-Glass.png" 
                alt="VEST Glass"
                className="w-22 sm:w-32 md:w-36 lg:w-44 h-auto rounded-lg shadow-2xl"
              />
            </div>

            {/* Meeting a Past Self with pin */}
            <div className="absolute" style={{ left: '52%', top: '65%', transform: 'rotate(11deg)', zIndex: 19 }}>
                <Image 
                src="/assets/projects/Bulletin/pin-green.png" 
                alt="" 
                className="w-8 h-8 md:w-12 lg:w-16 md:h-12 lg:h-16 absolute -top-4 md:-top-6 lg:-top-8 left-1/2 -translate-x-1/2 z-10"
              />
              <Image 
                src="/assets/projects/Bulletin/Meeting a Past Self.PNG" 
                alt="Meeting a Past Self"
                className="w-36 sm:w-48 md:w-60 lg:w-72 h-auto rounded-lg shadow-2xl"
              />
            </div>

            {/* Plein Air Market */}
            <div className="absolute" style={{ left: '56%', top: '58%', transform: 'rotate(-7deg)', zIndex: 11 }}>
              <Image 
                src="/assets/projects/Bulletin/675632bca66351f5b447643a_pleinair_kunmingmarket.jpg" 
                alt="Plein Air Market"
                className="w-24 sm:w-32 md:w-40 lg:w-48 h-auto rounded-lg shadow-2xl"
              />
            </div>

            {/* Teddies Tee with tape */}
            <div className="absolute" style={{ left: '6%', top: '78%', transform: 'rotate(7deg)', zIndex: 21 }}>
              <Image 
                src="/assets/projects/Bulletin/tape.png" 
                alt="" 
                className="w-6 md:w-8 lg:w-10 absolute -bottom-1 md:-bottom-2 left-1 md:left-2 mix-blend-screen opacity-80"
                style={{ transform: 'rotate(-118deg)' }}
              />
              <Image 
                src="/assets/projects/Bulletin/67576ee36c1e44b6f1d6c98c_Teddies tee Mocked.jpg" 
                alt="Teddies Tee"
                className="w-40 sm:w-56 md:w-64 lg:w-80 h-auto rounded-lg shadow-2xl"
              />
                <Image 
                src="/assets/projects/Bulletin/tape.png" 
                alt="" 
                className="w-6 md:w-8 lg:w-10 absolute top-2 md:top-3 lg:top-4 right-4 md:right-6 lg:right-8 mix-blend-screen opacity-80"
                style={{ transform: 'rotate(32deg)' }}
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-[1290px] mx-auto px-6 pb-20 text-center">
          <div className="border-t border-white/10 pt-20">
            <h2 className="permanent-rainbow-text text-3xl md:text-4xl font-medium text-white mb-6">
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
              <a
                href="/about"
                className="px-8 py-3 border border-white/30 text-white font-medium rounded-lg hover:border-white/50 hover:bg-white/5 transition-all duration-200"
              >
                Learn more about me
              </a>
            </div>
          </div>
        </section>
        </section>
    );
}