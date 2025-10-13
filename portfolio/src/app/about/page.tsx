import Navigation from '@/components/Navigation';

export default function About() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto px-6 py-20">
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              About <span className="rainbow-text">Me</span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Designer, developer, and data enthusiast passionate about creating meaningful experiences.
            </p>
          </div>
        </section>

        {/* Bio Section */}
        <section className="max-w-4xl mx-auto px-6 pb-16">
          <div className="space-y-8">
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-white/80 leading-relaxed text-lg">
                Hi there! I'm Angelina, a designer and developer currently pursuing my studies at UCLA in Design and Statistics/Data Science. 
                I'm passionate about the intersection of design and technology, and I believe that great design has the power to create 
                meaningful connections between people and technology.
              </p>
              
              <p className="text-white/80 leading-relaxed text-lg">
                My journey spans both the creative and analytical worlds. I love diving deep into user research to understand 
                the problems we're solving, then translating those insights into beautiful, functional designs. When I'm not 
                designing, you'll find me coding interactive experiences, analyzing data, or exploring the latest in web technologies.
              </p>
              
              <p className="text-white/80 leading-relaxed text-lg">
                I believe in designing with intention, coding with purpose, and always putting the user at the center of everything I create. 
                Whether it's a complex UX research project or a playful 3D web experiment, I approach each challenge with curiosity and dedication.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="max-w-4xl mx-auto px-6 pb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Skills & Tools</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white rainbow-text">Design</h3>
              <div className="space-y-2">
                {[
                  'User Experience Research',
                  'User Interface Design',
                  'Prototyping & Wireframing',
                  'Design Systems',
                  'Figma, Sketch, Adobe Creative Suite',
                  'User Testing & Validation'
                ].map((skill) => (
                  <div key={skill} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white/40 rounded-full"></div>
                    <span className="text-white/70">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white rainbow-text">Development</h3>
              <div className="space-y-2">
                {[
                  'React, Next.js, TypeScript',
                  'Three.js, WebGL, 3D Graphics',
                  'Python, R, Data Analysis',
                  'Node.js, Express',
                  'Tailwind CSS, Styled Components',
                  'Git, Version Control'
                ].map((skill) => (
                  <div key={skill} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white/40 rounded-full"></div>
                    <span className="text-white/70">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="max-w-4xl mx-auto px-6 pb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Experience</h2>
          
          <div className="space-y-6">
            <div className="border border-white/10 rounded-lg p-6 hover:border-white/20 transition-colors duration-200">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <h3 className="text-xl font-semibold text-white">UX Research & Design</h3>
                <span className="text-white/60 text-sm font-mono">2023 - Present</span>
              </div>
              <p className="text-white/70">
                Conducted user research studies, designed interfaces, and prototyped solutions for various projects including 
                AI-powered tools and mobile-first applications. Focused on understanding user needs and translating insights into 
                intuitive, accessible designs.
              </p>
            </div>

            <div className="border border-white/10 rounded-lg p-6 hover:border-white/20 transition-colors duration-200">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <h3 className="text-xl font-semibold text-white">Frontend Development</h3>
                <span className="text-white/60 text-sm font-mono">2022 - Present</span>
              </div>
              <p className="text-white/70">
                Built interactive web experiences using React, Next.js, and modern web technologies. Created 3D visualizations 
                with Three.js, implemented responsive designs, and optimized for performance and accessibility.
              </p>
            </div>

            <div className="border border-white/10 rounded-lg p-6 hover:border-white/20 transition-colors duration-200">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <h3 className="text-xl font-semibold text-white">Data Analysis</h3>
                <span className="text-white/60 text-sm font-mono">2021 - Present</span>
              </div>
              <p className="text-white/70">
                Applied statistical methods and data visualization techniques to extract insights from complex datasets. 
                Used Python, R, and various analytics tools to support decision-making and communicate findings effectively.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="max-w-4xl mx-auto px-6 pb-20">
          <h2 className="text-3xl font-bold text-white mb-8">Let's Connect</h2>
          
          <div className="text-center space-y-6">
            <p className="text-xl text-white/70">
              I'm always excited to discuss new opportunities, collaborate on interesting projects, 
              or just chat about design and technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hello@angelinawwu.com"
                className="px-8 py-3 bg-white text-black font-medium rounded-lg hover:bg-white/90 transition-colors duration-200"
              >
                Send me an email
              </a>
              <a
                href="https://linkedin.com/in/angelinawwu"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border border-white/30 text-white font-medium rounded-lg hover:border-white/50 hover:bg-white/5 transition-all duration-200"
              >
                Connect on LinkedIn
              </a>
              <a
                href="https://github.com/angelinawwu"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border border-white/30 text-white font-medium rounded-lg hover:border-white/50 hover:bg-white/5 transition-all duration-200"
              >
                View my code
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
