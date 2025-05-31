export default function PortfolioPage() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution built with Next.js, TypeScript, and Stripe integration. Features include user authentication, product management, and payment processing.",
      image: "/placeholder-project.jpg",
      technologies: ["Next.js", "TypeScript", "Stripe", "Prisma", "PostgreSQL"],
      github: "ecommerce",
      demo: "https://demo-ecommerce.vercel.app",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/placeholder-project.jpg",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Tailwind CSS"],
      github: "task-manager",
      demo: "https://task-manager-demo.vercel.app",
      featured: true
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather dashboard that displays current conditions, forecasts, and interactive maps using external weather APIs.",
      image: "/placeholder-project.jpg",
      technologies: ["Vue.js", "Chart.js", "OpenWeather API", "CSS Grid"],
      github: "weather-dashboard",
      demo: "https://weather-dashboard-demo.vercel.app",
      featured: false
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with Next.js and Tailwind CSS. Features dark mode, smooth animations, and optimized performance.",
      image: "/placeholder-project.jpg",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "MDX"],
      github: "portfolio",
      demo: "https://portfolio-demo.vercel.app",
      featured: false
    },
    {
      id: 5,
      title: "Blog CMS",
      description: "A headless content management system for blogs with a rich text editor, image uploads, and SEO optimization features.",
      image: "/placeholder-project.jpg",
      technologies: ["Next.js", "Sanity CMS", "React Hook Form", "Vercel"],
      github: "blog-cms",
      demo: "https://blog-cms-demo.vercel.app",
      featured: false
    },
    {
      id: 6,
      title: "Data Visualization Tool",
      description: "An interactive data visualization tool that helps users create charts and graphs from CSV data with export capabilities.",
      image: "/placeholder-project.jpg",
      technologies: ["D3.js", "React", "Papa Parse", "Canvas API"],
      github: "data-viz",
      demo: "https://data-viz-demo.vercel.app",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <header className="text-center py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Portfolio</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of projects I've worked on, showcasing different technologies and approaches to solving problems.
          </p>
        </header>

        {/* Featured Projects */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <div key={project.id} className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-200 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                    Project Image
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a
                      href={`https://github.com/simochee/${project.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline font-medium"
                    >
                      View Code →
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline font-medium"
                    >
                      Live Demo →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Other Projects */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Other Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <div key={project.id} className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-32 bg-gray-200 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-sm">
                    Project Image
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                    {project.description.length > 100 
                      ? `${project.description.substring(0, 100)}...` 
                      : project.description
                    }
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs text-gray-500 px-2 py-1">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex gap-3 text-sm">
                    <a
                      href={`https://github.com/simochee/${project.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}