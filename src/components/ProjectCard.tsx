function ProjectCard({ title, description, technologies, image, link }) {
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden transition-transform duration-300 hover:-translate-y-2 border border-gray-700 shadow-lg">
      <div className="h-48 bg-gray-700 relative overflow-hidden">
        {/* Project image or placeholder */}
        <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-lg">
          {image || title}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 mb-4 h-24 overflow-hidden">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span key={tech} className="px-2 py-1 bg-blue-600 bg-opacity-20 text-blue-300 rounded-full text-xs">
              {tech}
            </span>
          ))}
        </div>
        
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition duration-300"
        >
          View Project
        </a>
      </div>
    </div>
  );
}
