export default function AboutPage() {
  const skills = [
    {
      category: "Frontend",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "HTML/CSS"]
    },
    {
      category: "Backend",
      technologies: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Prisma", "REST APIs"]
    },
    {
      category: "Tools & Others",
      technologies: ["Git", "Docker", "Vercel", "AWS", "Figma", "Jest"]
    }
  ];

  const experience = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Company",
      period: "2022 - Present",
      description: "Led development of user-facing features using React and Next.js. Collaborated with design and backend teams to deliver high-quality products."
    },
    {
      title: "Full Stack Developer",
      company: "Startup Inc",
      period: "2020 - 2022",
      description: "Built and maintained web applications using modern JavaScript frameworks. Implemented responsive designs and optimized application performance."
    },
    {
      title: "Frontend Developer",
      company: "Agency Co",
      period: "2018 - 2020",
      description: "Developed client websites and web applications. Worked closely with designers to create pixel-perfect, responsive user interfaces."
    }
  ];

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
          <p className="text-xl text-gray-600">
            Passionate developer with a love for creating amazing digital experiences
          </p>
        </header>

        {/* Introduction */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Hello, I'm [Your Name]</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  I'm a passionate full-stack developer with over 5 years of experience 
                  creating web applications that solve real-world problems. I love working 
                  with modern technologies and am always eager to learn new skills.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, 
                  contributing to open-source projects, or sharing my knowledge through 
                  blog posts and tutorials.
                </p>
                <p>
                  I believe in writing clean, maintainable code and creating user 
                  experiences that are both beautiful and functional. My goal is to 
                  bridge the gap between design and technology.
                </p>
              </div>
            </div>
            <div className="lg:text-center">
              <div className="w-64 h-64 bg-gray-200 rounded-full mx-auto flex items-center justify-center">
                <span className="text-gray-500">Your Photo</span>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Skills & Technologies</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="text-center">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">
                  {skillGroup.category}
                </h3>
                <div className="space-y-2">
                  {skillGroup.technologies.map((tech) => (
                    <div
                      key={tech}
                      className="bg-gray-100 px-3 py-2 rounded-lg text-sm"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div key={index} className="border-l-4 border-blue-600 pl-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-semibold">{job.title}</h3>
                  <span className="text-blue-600 font-medium">{job.period}</span>
                </div>
                <h4 className="text-lg text-gray-600 mb-3">{job.company}</h4>
                <p className="text-gray-700 leading-relaxed">{job.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="text-center py-16 bg-gray-50 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Feel free to reach out if you'd like to collaborate!
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="mailto:your.email@example.com"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Send Email
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              GitHub
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}