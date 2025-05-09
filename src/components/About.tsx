import SplitText from '@/components/SplitText/SplitText';


// About Me Section
function AboutSection() {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <SplitText
            text="About Me"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
            delay={20}
            animationFrom={{ opacity: 0, transform: 'translateY(20px)' }}
            animationTo={{ opacity: 1, transform: 'translateY(0)' }}
            easing="easeOutCubic"
            threshold={0.2}
            rootMargin="-50px"
          />
          <div className="w-16 h-1 bg-blue-500 mx-auto mb-8"></div>
        </div>
        
        <div className="bg-gray-800 bg-opacity-70 rounded-2xl p-6 md:p-8 backdrop-filter backdrop-blur-sm border border-gray-700 shadow-xl">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3">
              <div className="rounded-full overflow-hidden border-4 border-blue-500 w-48 h-48 mx-auto">
                {/* Replace with your actual image */}
                <div className="bg-blue-400 w-full h-full flex items-center justify-center text-white">
                  YH
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3 space-y-4 text-left">
              <p className="text-lg text-white">
                Hi there! I'm <span className="text-blue-400 font-semibold">Yosua Hercules</span>, a passionate Fullstack Web Developer with expertise in modern web technologies.
              </p>
              
              <p className="text-gray-300">
                I specialize in creating responsive, interactive, and visually appealing web applications using React, Next.js, and Tailwind CSS on the frontend, along with Node.js and various databases on the backend.
              </p>
              
              <div className="pt-4">
                <h3 className="text-xl font-semibold text-white mb-3">My Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Next.js', 'Tailwind CSS', 'JavaScript', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'UI/UX Design'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-blue-600 bg-opacity-30 text-blue-300 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export default AboutSection;
