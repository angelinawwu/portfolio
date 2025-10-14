import Link from 'next/link';
import Navigation from '@/components/Navigation';

export const metadata = {
  title: 'Diamond Refraction - Angelina Wu',
  description: 'A 3D WebGL experience showcasing realistic diamond light refraction using Three.js and custom shaders',
};

export default function DiamondRefractionPage() {
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
              Diamond Refraction
            </h1>
            
            <p className="text-xl text-white/70 leading-relaxed mb-12">
              A 3D WebGL experience showcasing realistic diamond light refraction using Three.js and custom shaders
            </p>

            {/* Metadata Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="border border-white/10 rounded-lg p-6">
                <h3 className="text-white/60 text-sm font-medium mb-2">My Role</h3>
                <p className="text-white font-medium">Developer</p>
              </div>
              <div className="border border-white/10 rounded-lg p-6">
                <h3 className="text-white/60 text-sm font-medium mb-2">Timeline</h3>
                <p className="text-white font-medium">2 weeks</p>
              </div>
              <div className="border border-white/10 rounded-lg p-6">
                <h3 className="text-white/60 text-sm font-medium mb-2">Team</h3>
                <p className="text-white font-medium">Solo Project</p>
              </div>
              <div className="border border-white/10 rounded-lg p-6">
                <h3 className="text-white/60 text-sm font-medium mb-2">Tools</h3>
                <p className="text-white font-medium">Three.js, WebGL, React</p>
              </div>
            </div>
          </section>

          {/* Project Image */}
          <section className="py-12">
            <div className="w-full h-96 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center">
              <span className="text-white/40">3D diamond model with realistic light refraction effects</span>
            </div>
          </section>

          {/* Overview */}
          <section className="py-12 border-t border-white/10">
            <h2 className="text-3xl md:text-4xl font-medium text-white mb-8">Overview</h2>
            <div className="space-y-6 text-white/80 leading-relaxed">
              <p>
                Diamond Refraction is an interactive 3D web experience that demonstrates realistic light refraction through a diamond model. Built with Three.js and custom WebGL shaders, this project showcases advanced 3D graphics programming and real-time rendering techniques.
              </p>
              <p>
                The project explores the complex physics of light refraction in gemstones, creating a visually stunning demonstration of how light bends and reflects within a diamond's crystalline structure. Users can interact with the diamond by rotating it and adjusting lighting conditions to see how different angles affect the refraction patterns.
              </p>
            </div>
          </section>

          {/* Technical Details */}
          <section className="py-12 border-t border-white/10">
            <h2 className="text-3xl md:text-4xl font-medium text-white mb-8">Technical Implementation</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-medium text-white mb-6">Custom Shaders</h3>
                <p className="text-white/80 leading-relaxed mb-6">
                  I developed custom vertex and fragment shaders to accurately simulate the complex light behavior within a diamond. The shaders handle multiple light sources, refraction calculations, and realistic material properties.
                </p>
                
                <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                  <h4 className="text-xl font-medium text-white mb-4">Key Shader Features</h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-white/40 rounded-full mt-2"></div>
                      <p className="text-white/80">Realistic refraction calculations using Snell's law</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-white/40 rounded-full mt-2"></div>
                      <p className="text-white/80">Multiple internal reflections within the diamond</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-white/40 rounded-full mt-2"></div>
                      <p className="text-white/80">Dynamic lighting with real-time shadow calculations</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-white/40 rounded-full mt-2"></div>
                      <p className="text-white/80">Fresnel reflections for realistic surface behavior</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-medium text-white mb-6">3D Model & Geometry</h3>
                <p className="text-white/80 leading-relaxed mb-6">
                  The diamond model was created using precise geometric calculations to ensure accurate light refraction. The model includes proper facet angles and proportions based on real diamond cutting techniques.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="w-full h-48 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center">
                    <span className="text-white/40">Diamond geometry wireframe</span>
                  </div>
                  <div className="w-full h-48 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center">
                    <span className="text-white/40">Facet angle calculations</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-medium text-white mb-6">Interactive Controls</h3>
                <p className="text-white/80 leading-relaxed mb-6">
                  The experience includes interactive controls that allow users to manipulate the diamond and lighting conditions in real-time, providing an educational and engaging way to explore light physics.
                </p>
                
                <div className="space-y-4">
                  <div className="border border-white/10 rounded-lg p-4">
                    <h4 className="text-lg font-medium text-white mb-2">Rotation Controls</h4>
                    <p className="text-white/80">Mouse and touch controls for rotating the diamond in 3D space</p>
                  </div>
                  <div className="border border-white/10 rounded-lg p-4">
                    <h4 className="text-lg font-medium text-white mb-2">Lighting Adjustment</h4>
                    <p className="text-white/80">Real-time adjustment of light intensity, color, and position</p>
                  </div>
                  <div className="border border-white/10 rounded-lg p-4">
                    <h4 className="text-lg font-medium text-white mb-2">Material Properties</h4>
                    <p className="text-white/80">Interactive sliders for adjusting refractive index and surface properties</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Challenges & Solutions */}
          <section className="py-12 border-t border-white/10">
            <h2 className="text-3xl md:text-4xl font-medium text-white mb-8">Challenges & Solutions</h2>
            
            <div className="space-y-6">
              <div className="border border-white/10 rounded-lg p-6">
                <h3 className="text-xl font-medium text-white mb-4">Performance Optimization</h3>
                <p className="text-white/80 leading-relaxed mb-4">
                  <span className="font-medium">Challenge:</span> Complex shader calculations were causing performance issues on lower-end devices.
                </p>
                <p className="text-white/80 leading-relaxed">
                  <span className="font-medium">Solution:</span> Implemented level-of-detail (LOD) system and optimized shader code to maintain 60fps across different devices while preserving visual quality.
                </p>
              </div>

              <div className="border border-white/10 rounded-lg p-6">
                <h3 className="text-xl font-medium text-white mb-4">Accurate Physics Simulation</h3>
                <p className="text-white/80 leading-relaxed mb-4">
                  <span className="font-medium">Challenge:</span> Creating realistic light refraction that matches real-world diamond behavior.
                </p>
                <p className="text-white/80 leading-relaxed">
                  <span className="font-medium">Solution:</span> Researched gemology and implemented physically-based rendering (PBR) techniques with accurate refractive indices and reflection calculations.
                </p>
              </div>

              <div className="border border-white/10 rounded-lg p-6">
                <h3 className="text-xl font-medium text-white mb-4">Cross-Platform Compatibility</h3>
                <p className="text-white/80 leading-relaxed mb-4">
                  <span className="font-medium">Challenge:</span> Ensuring consistent performance and visual quality across different browsers and devices.
                </p>
                <p className="text-white/80 leading-relaxed">
                  <span className="font-medium">Solution:</span> Implemented feature detection and fallback rendering modes, with graceful degradation for devices with limited WebGL capabilities.
                </p>
              </div>
            </div>
          </section>

          {/* Technologies Used */}
          <section className="py-12 border-t border-white/10">
            <h2 className="text-3xl md:text-4xl font-medium text-white mb-8">Technologies Used</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                'Three.js',
                'WebGL',
                'GLSL',
                'React',
                'TypeScript',
                'Vite',
                'Node.js',
                'Git'
              ].map((tech) => (
                <div key={tech} className="border border-white/10 rounded-lg p-4 text-center">
                  <span className="text-white font-medium">{tech}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Links Section */}
          <section className="py-12 border-t border-white/10">
            <h2 className="text-3xl md:text-4xl font-medium text-white mb-8">Project Links</h2>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://diamond-refraction.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-white text-black font-medium rounded-lg hover:bg-white/90 transition-colors duration-200 text-center"
              >
                View Live Demo
              </a>
              <a
                href="https://github.com/angelinawwu/diamond-refraction"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border border-white/30 text-white font-medium rounded-lg hover:border-white/50 hover:bg-white/5 transition-all duration-200 text-center"
              >
                View Source Code
              </a>
            </div>
          </section>

          {/* Key Learnings */}
          <section className="py-12 border-t border-white/10">
            <h2 className="text-3xl md:text-4xl font-medium text-white mb-8">Key Learnings</h2>
            
            <div className="space-y-8">
              <div className="border border-white/10 rounded-lg p-8">
                <h3 className="text-xl font-medium text-white mb-4">
                  <span className="rainbow-text">WebGL shaders</span> enable complex visual effects.
                </h3>
                <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                  <p className="text-white/90 font-medium mb-4">→</p>
                  <p className="text-white/80 leading-relaxed">
                    Working with custom shaders opened up possibilities for creating realistic materials and lighting effects that would be impossible with standard 3D rendering techniques.
                  </p>
                </div>
              </div>

              <div className="border border-white/10 rounded-lg p-8">
                <h3 className="text-xl font-medium text-white mb-4">
                  <span className="rainbow-text">Performance optimization</span> is crucial for 3D web experiences.
                </h3>
                <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                  <p className="text-white/90 font-medium mb-4">→</p>
                  <p className="text-white/80 leading-relaxed">
                    Balancing visual quality with performance requires careful optimization and testing across different devices and browsers to ensure a smooth user experience.
                  </p>
                </div>
              </div>

              <div className="border border-white/10 rounded-lg p-8">
                <h3 className="text-xl font-medium text-white mb-4">
                  <span className="rainbow-text">Physics-based rendering</span> creates more convincing visuals.
                </h3>
                <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                  <p className="text-white/90 font-medium mb-4">→</p>
                  <p className="text-white/80 leading-relaxed">
                    Implementing accurate physics calculations, even simplified ones, results in more believable and visually appealing 3D graphics that feel natural to users.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Navigation */}
          <nav className="py-16 border-t border-white/10">
            <div className="flex justify-between items-center">
              <Link
                href="/projects/bookish"
                className="flex items-center space-x-2 text-white/60 hover:text-white transition-colors duration-200"
              >
                <span>←</span>
                <span>Bookish</span>
              </Link>
              <div></div>
            </div>
          </nav>
        </div>
      </main>
    </div>
  );
}
