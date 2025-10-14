import Link from 'next/link';
import Navigation from '@/components/Navigation';

export const metadata = {
  title: 'Bookish - Angelina Wu',
  description: 'A comprehensive redesign of a book discovery and shopping platform',
};

export default function BookishPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <main className="pt-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Back Button */}
          <div className="py-8">
            <Link 
              href="/" 
              className="text-white/60 hover:text-white transition-colors duration-200"
            >
              ← Back to projects
            </Link>
          </div>

          {/* Hero Section */}
          <section className="py-12">
            <h1 className="text-4xl md:text-5xl font-medium text-white mb-8">
              Bookish
            </h1>
            
            <p className="text-xl text-white/70 leading-relaxed mb-12">
              A comprehensive redesign of a book discovery and shopping platform
            </p>

            {/* Metadata Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="border border-white/10 rounded-lg p-6">
                <h3 className="text-white/60 text-sm font-medium mb-2">My Role</h3>
                <p className="text-white font-medium">UX/UI Designer</p>
              </div>
              <div className="border border-white/10 rounded-lg p-6">
                <h3 className="text-white/60 text-sm font-medium mb-2">Timeline</h3>
                <p className="text-white font-medium">4 months</p>
              </div>
              <div className="border border-white/10 rounded-lg p-6">
                <h3 className="text-white/60 text-sm font-medium mb-2">Team</h3>
                <p className="text-white font-medium">Design Team<br />Engineering Team</p>
              </div>
              <div className="border border-white/10 rounded-lg p-6">
                <h3 className="text-white/60 text-sm font-medium mb-2">Tools</h3>
                <p className="text-white font-medium">Figma, User Research</p>
              </div>
            </div>
          </section>

          {/* Overview */}
          <section className="py-12 border-t border-white/10">
            <h2 className="text-3xl md:text-4xl font-medium text-white mb-8">Overview</h2>
            <div className="space-y-6 text-white/80 leading-relaxed">
              <p>
                Bookish is an e-commerce platform focused on book discovery and online shopping. The platform needed a complete redesign to improve user experience, increase book discovery, and boost sales conversion rates.
              </p>
              <p>
                My role involved conducting user research, redesigning the information architecture, and creating a new visual design system that would make book discovery more intuitive and shopping more enjoyable for users.
              </p>
            </div>
          </section>

          {/* The Problem */}
          <section className="py-12 border-t border-white/10">
            <h2 className="text-3xl md:text-4xl font-medium text-white mb-8">The Problem</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-medium text-white mb-6">Book discovery was difficult and shopping experience was frustrating.</h3>
                <div className="space-y-6 text-white/80 leading-relaxed">
                  <p>
                    Users were struggling to find books that matched their interests due to poor categorization, limited search functionality, and lack of personalized recommendations. The existing interface felt outdated and didn't provide the engaging experience that modern book lovers expected.
                  </p>
                  <p>
                    Additionally, the shopping cart and checkout process had usability issues that led to cart abandonment. Users found it difficult to compare books, read reviews, and make informed purchasing decisions.
                  </p>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-lg p-8">
                <p className="text-white/90 font-medium">
                  → The solution: A complete platform redesign that prioritizes book discovery, improves the shopping experience, and creates a more engaging interface for book enthusiasts.
                </p>
              </div>
            </div>
          </section>

          {/* Research */}
          <section className="py-12 border-t border-white/10">
            <h2 className="text-3xl md:text-4xl font-medium text-white mb-8">Research</h2>
            
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl md:text-3xl font-medium text-white mb-6">User Research & Analysis</h3>
                <p className="text-white/80 leading-relaxed mb-6">
                  I conducted comprehensive research to understand how users discover and purchase books online, identifying key pain points and opportunities for improvement.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="border border-white/10 rounded-lg p-6">
                    <h4 className="text-xl font-medium text-white mb-3">User Interviews</h4>
                    <p className="text-white/80 leading-relaxed">
                      Conducted 20+ interviews with book enthusiasts to understand their discovery and purchasing behaviors.
                    </p>
                  </div>
                  <div className="border border-white/10 rounded-lg p-6">
                    <h4 className="text-xl font-medium text-white mb-3">Competitive Analysis</h4>
                    <p className="text-white/80 leading-relaxed">
                      Analyzed leading book platforms to identify best practices and opportunities for differentiation.
                    </p>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                  <h4 className="text-xl font-medium text-white mb-4">Key Research Insights</h4>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-white/40 rounded-full mt-2"></div>
                      <p className="text-white/80">Users rely heavily on recommendations and reviews when choosing books</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-white/40 rounded-full mt-2"></div>
                      <p className="text-white/80">Genre-based browsing is preferred over complex search filters</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-white/40 rounded-full mt-2"></div>
                      <p className="text-white/80">Visual book covers are crucial for initial interest and decision-making</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-white/40 rounded-full mt-2"></div>
                      <p className="text-white/80">Users want to easily compare books and read sample content</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-medium text-white mb-6">User Personas</h3>
                <p className="text-white/80 leading-relaxed mb-6">
                  Based on research findings, I developed detailed user personas to guide design decisions and ensure the solution addressed real user needs.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border border-white/10 rounded-lg p-6">
                    <h4 className="text-xl font-medium text-white mb-4">Avid Reader - Emma</h4>
                    <div className="space-y-3 text-white/80">
                      <p><span className="font-medium">Age:</span> 32</p>
                      <p><span className="font-medium">Occupation:</span> Teacher</p>
                      <p><span className="font-medium">Goals:</span> Discover new authors and genres, build reading list</p>
                      <p><span className="font-medium">Pain Points:</span> Wants better recommendations and easier book comparison</p>
                    </div>
                  </div>
                  <div className="border border-white/10 rounded-lg p-6">
                    <h4 className="text-xl font-medium text-white mb-4">Casual Reader - David</h4>
                    <div className="space-y-3 text-white/80">
                      <p><span className="font-medium">Age:</span> 28</p>
                      <p><span className="font-medium">Occupation:</span> Marketing Manager</p>
                      <p><span className="font-medium">Goals:</span> Find popular books quickly, read reviews</p>
                      <p><span className="font-medium">Pain Points:</span> Needs simple browsing and clear book information</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-medium text-white mb-6">Current State Analysis</h3>
                <p className="text-white/80 leading-relaxed mb-6">
                  I analyzed the existing platform to identify specific usability issues and areas for improvement in the book discovery and shopping experience.
                </p>
                
                <div className="w-full h-64 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center">
                  <span className="text-white/40">Current platform analysis showing usability issues and pain points</span>
                </div>
              </div>
            </div>
          </section>

          {/* Design Process */}
          <section className="py-12 border-t border-white/10">
            <h2 className="text-3xl md:text-4xl font-medium text-white mb-8">Design Process</h2>
            
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl md:text-3xl font-medium text-white mb-6">Information Architecture Redesign</h3>
                <p className="text-white/80 leading-relaxed mb-6">
                  I restructured the platform's information architecture to make book discovery more intuitive and logical for users.
                </p>

                <div className="space-y-6">
                  <div className="border border-white/10 rounded-lg p-6">
                    <h4 className="text-xl font-medium text-white mb-3">Improved Navigation</h4>
                    <p className="text-white/80">Created clear, hierarchical navigation that prioritizes genre-based browsing and popular categories</p>
                  </div>
                  <div className="border border-white/10 rounded-lg p-6">
                    <h4 className="text-xl font-medium text-white mb-3">Enhanced Search</h4>
                    <p className="text-white/80">Implemented intelligent search with autocomplete, filters, and sorting options</p>
                  </div>
                  <div className="border border-white/10 rounded-lg p-6">
                    <h4 className="text-xl font-medium text-white mb-3">Personalized Recommendations</h4>
                    <p className="text-white/80">Added recommendation engine based on reading history and preferences</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-medium text-white mb-6">Visual Design System</h3>
                <p className="text-white/80 leading-relaxed mb-6">
                  I created a comprehensive design system that would provide a cohesive, modern experience across all platform touchpoints.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="w-full h-48 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center">
                    <span className="text-white/40">Color palette</span>
                  </div>
                  <div className="w-full h-48 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center">
                    <span className="text-white/40">Typography system</span>
                  </div>
                  <div className="w-full h-48 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center">
                    <span className="text-white/40">Component library</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-medium text-white mb-6">Book Discovery Interface</h3>
                <p className="text-white/80 leading-relaxed mb-6">
                  I designed an engaging book discovery interface that makes it easy for users to find books they'll love.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="w-full h-64 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center">
                    <span className="text-white/40">Book grid layout with enhanced covers</span>
                  </div>
                  <div className="w-full h-64 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center">
                    <span className="text-white/40">Book detail page with reviews and samples</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-medium text-white mb-6">Shopping Experience</h3>
                <p className="text-white/80 leading-relaxed mb-6">
                  I redesigned the shopping cart and checkout process to reduce friction and increase conversion rates.
                </p>

                <div className="space-y-6">
                  <div className="border border-white/10 rounded-lg p-6">
                    <h4 className="text-xl font-medium text-white mb-3">Streamlined Cart</h4>
                    <p className="text-white/80">Simplified cart interface with easy quantity adjustment and book comparison features</p>
                  </div>
                  <div className="border border-white/10 rounded-lg p-6">
                    <h4 className="text-xl font-medium text-white mb-3">One-Click Checkout</h4>
                    <p className="text-white/80">Optimized checkout flow with saved payment methods and address auto-completion</p>
                  </div>
                  <div className="border border-white/10 rounded-lg p-6">
                    <h4 className="text-xl font-medium text-white mb-3">Order Confirmation</h4>
                    <p className="text-white/80">Clear confirmation page with order details and tracking information</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Final Solution */}
          <section className="py-12 border-t border-white/10">
            <h2 className="text-3xl md:text-4xl font-medium text-white mb-8">Final Solution</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-medium text-white mb-6">Enhanced Book Discovery</h3>
                <p className="text-white/80 leading-relaxed mb-6">
                  The redesigned platform features an intuitive book discovery experience with improved categorization, personalized recommendations, and engaging visual presentation.
                </p>
                <div className="w-full h-64 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center">
                  <span className="text-white/40">Book discovery homepage interface</span>
                </div>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-medium text-white mb-6">Improved Book Details</h3>
                <p className="text-white/80 leading-relaxed mb-6">
                  Enhanced book detail pages provide comprehensive information including reviews, sample content, and related recommendations to help users make informed decisions.
                </p>
                <div className="w-full h-64 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center">
                  <span className="text-white/40">Book detail page with reviews and samples</span>
                </div>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-medium text-white mb-6">Streamlined Shopping</h3>
                <p className="text-white/80 leading-relaxed mb-6">
                  The shopping experience has been simplified with an intuitive cart interface and optimized checkout process that reduces friction and increases conversion rates.
                </p>
                <div className="w-full h-64 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center">
                  <span className="text-white/40">Shopping cart and checkout interface</span>
                </div>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-medium text-white mb-6">Mobile Optimization</h3>
                <p className="text-white/80 leading-relaxed mb-6">
                  The entire platform has been optimized for mobile devices, ensuring a seamless experience across all screen sizes and devices.
                </p>
                <div className="w-full h-64 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center">
                  <span className="text-white/40">Mobile-optimized book browsing interface</span>
                </div>
              </div>
            </div>
          </section>

          {/* Impact */}
          <section className="py-12 border-t border-white/10">
            <h2 className="text-3xl md:text-4xl font-medium text-white mb-8">Impact</h2>
            
            <div className="space-y-6">
              <div className="border border-white/10 rounded-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-white/10 border border-white/20 rounded-full flex items-center justify-center">
                    <span className="text-white/80 font-mono text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-white mb-2">Increased Book Discovery by 40%</h4>
                    <p className="text-white/80 leading-relaxed">
                      The improved categorization and recommendation system led to users discovering and exploring more books on the platform.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-white/10 rounded-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-white/10 border border-white/20 rounded-full flex items-center justify-center">
                    <span className="text-white/80 font-mono text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-white mb-2">Improved Conversion Rate by 35%</h4>
                    <p className="text-white/80 leading-relaxed">
                      The streamlined shopping experience and enhanced book information helped more users complete their purchases.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-white/10 rounded-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-white/10 border border-white/20 rounded-full flex items-center justify-center">
                    <span className="text-white/80 font-mono text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-white mb-2">Reduced Cart Abandonment by 25%</h4>
                    <p className="text-white/80 leading-relaxed">
                      The simplified checkout process and clear pricing information reduced the number of users who abandoned their carts.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-white/10 rounded-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-white/10 border border-white/20 rounded-full flex items-center justify-center">
                    <span className="text-white/80 font-mono text-sm">4</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-white mb-2">Increased User Engagement by 50%</h4>
                    <p className="text-white/80 leading-relaxed">
                      The improved user experience and personalized recommendations led to longer session times and more frequent visits.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Key Takeaways */}
          <section className="py-12 border-t border-white/10">
            <h2 className="text-3xl md:text-4xl font-medium text-white mb-8">Key Takeaways</h2>
            
            <div className="space-y-8">
              <div className="border border-white/10 rounded-lg p-8">
                <h3 className="text-xl font-medium text-white mb-4">
                  <span className="rainbow-text">User research</span> drives better design decisions.
                </h3>
                <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                  <p className="text-white/90 font-medium mb-4">→</p>
                  <p className="text-white/80 leading-relaxed">
                    Understanding how users actually discover and purchase books provided crucial insights that shaped every design decision, from information architecture to visual presentation.
                  </p>
                </div>
              </div>

              <div className="border border-white/10 rounded-lg p-8">
                <h3 className="text-xl font-medium text-white mb-4">
                  <span className="rainbow-text">Visual hierarchy</span> is crucial for e-commerce.
                </h3>
                <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                  <p className="text-white/90 font-medium mb-4">→</p>
                  <p className="text-white/80 leading-relaxed">
                    Clear visual hierarchy helps users quickly scan and understand product information, making it easier for them to make purchasing decisions and complete transactions.
                  </p>
                </div>
              </div>

              <div className="border border-white/10 rounded-lg p-8">
                <h3 className="text-xl font-medium text-white mb-4">
                  <span className="rainbow-text">Personalization</span> enhances user experience.
                </h3>
                <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                  <p className="text-white/90 font-medium mb-4">→</p>
                  <p className="text-white/80 leading-relaxed">
                    Providing personalized recommendations and tailored content helps users discover relevant products more easily and creates a more engaging shopping experience.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Navigation */}
          <nav className="py-16 border-t border-white/10">
            <div className="flex justify-between items-center">
              <Link
                href="/projects/manifesto-market"
                className="flex items-center space-x-2 text-white/60 hover:text-white transition-colors duration-200"
              >
                <span>←</span>
                <span>Manifesto Market</span>
              </Link>
              <Link
                href="/projects/diamond-refraction"
                className="flex items-center space-x-2 text-white/60 hover:text-white transition-colors duration-200"
              >
                <span>Diamond Refraction</span>
                <span>→</span>
              </Link>
            </div>
          </nav>
        </div>
      </main>
    </div>
  );
}
