import Link from "next/link";
import Image from "next/image";
import avatar from "@/assets/avatar.png";

export default function Home() {
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
      <main className="max-w-4xl mx-auto glass-effect rounded-2xl p-8 neon-glow">
        {/* Introduction */}
        <section className="py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Hello, I'm <span className="text-avatar-teal">Ryoya Tamura</span></h1>
              <p className="text-xl text-gray-600 mb-6">
                Passionate developer with a love for creating amazing digital experiences
              </p>
              <div className="space-y-4 text-gray-700 leading-relaxed mb-8">
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
              <div className="flex gap-4">
                <Link
                  href="/portfolio"
                  className="bg-avatar-pink text-white px-6 py-3 rounded-lg transition-colors hover:bg-avatar-pink/90 shadow-neon-pink"
                >
                  View Portfolio
                </Link>
                <Link
                  href="/blog"
                  className="border-2 border-avatar-purple text-avatar-purple bg-avatar-purple/10 px-6 py-3 rounded-lg transition-colors hover:bg-avatar-purple/20"
                >
                  Read Blog
                </Link>
              </div>
            </div>
            <div className="lg:text-center">
              <div className="w-64 h-64 rounded-full mx-auto overflow-hidden">
                <Image 
                  src={avatar}
                  alt="Ryoya Tamura" 
                  width={256}
                  height={256}
                  className="w-full h-full object-cover"
                  priority
                />
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
                <h3 className="text-xl font-semibold mb-4 text-avatar-teal">
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
              <div key={index} className="border-l-4 border-avatar-pink pl-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-semibold">{job.title}</h3>
                  <span className="font-medium text-avatar-purple">{job.period}</span>
                </div>
                <h4 className="text-lg text-gray-600 mb-3">{job.company}</h4>
                <p className="text-gray-700 leading-relaxed">{job.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="h-32 bg-gray-200 rounded mb-4"></div>
                <h3 className="text-xl font-semibold mb-2">Project {i}</h3>
                <p className="text-gray-600 mb-4">A brief description of this amazing project.</p>
                <Link href="/portfolio" className="text-blue-600 hover:underline">
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Latest Blog Posts</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2].map((i) => (
              <article key={i} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2">Blog Post {i}</h3>
                <p className="text-gray-600 mb-4">An interesting article about development, design, or technology.</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">March {i}, 2024</span>
                  <Link href="/blog" className="text-blue-600 hover:underline">
                    Read more →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="text-center py-16 rounded-lg bg-gradient-to-br from-avatar-teal/10 to-avatar-pink/10">
          <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Feel free to reach out if you'd like to collaborate!
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="mailto:simochee@gmail.com"
              className="bg-avatar-teal text-white px-6 py-3 rounded-lg transition-colors hover:bg-avatar-teal/90 shadow-neon-teal"
            >
              Send Email
            </a>
            <a
              href="https://linkedin.com/in/simochee"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-avatar-pink text-avatar-pink bg-avatar-pink/10 px-6 py-3 rounded-lg transition-colors hover:bg-avatar-pink/20"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/simochee"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-avatar-purple text-avatar-purple bg-avatar-purple/10 px-6 py-3 rounded-lg transition-colors hover:bg-avatar-purple/20"
            >
              GitHub
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
