import React from 'react'
import { motion } from 'framer-motion'
import weatherDashPreview from '../assets/WeatherDash-Preview.png'

const projects = [
  {
    id: 1,
    title: "WeatherDash",
    description: "My First Simple Weather App Project",
    url: "https://weatherdash-khiroverse.vercel.app/",
    tags: ["React", "Tailwind", "API"],
    category: "featured",
    image: weatherDashPreview,
    imageColor: "from-slate-900 to-slate-800"
  },
  {
    id: 2,
    title: "Awesome Project 2",
    description: "Building a highly scalable application using modern architecture and best practices.",
    tags: ["React", "Tailwind", "Vite"],
    category: "featured",
    imageColor: "from-slate-800 to-slate-700"
  },
  {
    id: 3,
    title: "Awesome Project 3",
    description: "Building a highly scalable application using modern architecture and best practices.",
    tags: ["React", "Tailwind", "Vite"],
    category: "featured",
    imageColor: "from-slate-700 to-slate-600"
  },
  {
    id: 4,
    title: "Archive Project 4",
    description: "An older project showcasing my early learning journey.",
    tags: ["Legacy", "JS"],
    category: "more",
    imageColor: "from-slate-900/50 to-slate-900/20"
  },
  {
    id: 5,
    title: "Archive Project 5",
    description: "An older project showcasing my early learning journey.",
    tags: ["Legacy", "JS"],
    category: "more",
    imageColor: "from-slate-900/50 to-slate-900/20"
  },
  {
    id: 6,
    title: "Archive Project 6",
    description: "An older project showcasing my early learning journey.",
    tags: ["Legacy", "JS"],
    category: "more",
    imageColor: "from-slate-900/50 to-slate-900/20"
  }
]

const ProjectCard = ({ project, isFeatured }) => {
  return (
    <motion.div 
      key={project.id}
      variants={{
        hidden: { opacity: 0, scale: 0.8, y: 50 },
        show: { opacity: 1, scale: 1, y: 0 }
      }}
      whileHover={!isFeatured ? { y: -5 } : {}}
      className={`group bg-slate-900/50 border ${isFeatured ? 'border-slate-800 hover:border-cyan/50' : 'border-slate-800/50 hover:border-cyan/30'} rounded-2xl overflow-hidden transition-all duration-300`}
    >
      <a href={project.url} target="_blank" rel="noopener noreferrer" className="block">
        <div className={`aspect-video relative overflow-hidden ${!project.image ? `bg-gradient-to-t ${project.imageColor}` : ''}`}>
          {project.image ? (
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          ) : (
            <>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
              <div className="w-full h-full flex items-center justify-center text-slate-600 font-medium">
                {project.title} Preview
              </div>
            </>
          )}
        </div>
        <div className="p-6">
          <h3 className={`font-bold mb-2 group-hover:text-cyan transition-colors ${isFeatured ? 'text-xl' : 'text-lg'}`}>
            {project.title}
          </h3>
          <p className="text-slate-400 text-sm mb-6">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, idx) => (
              <span key={idx} className="text-[10px] px-2 py-1 bg-slate-800 text-slate-300 rounded-md uppercase tracking-wider font-semibold">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </a>
    </motion.div>
  )
}

const Projects = () => {
  const featuredProjects = projects.filter(p => p.category === 'featured')
  const moreProjects = projects.filter(p => p.category === 'more')

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-24 border-t border-slate-800"
    >
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Featured Projects
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-slate-400"
        >
          A selection of my favorite works
        </motion.p>
      </div>
      
      <motion.div 
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.1 }}
      >
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} isFeatured={true} />
        ))}
      </motion.div>

      <motion.div 
        className="mt-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-12 text-center">More Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {moreProjects.map((project) => (
            <ProjectCard key={project.id} project={project} isFeatured={false} />
          ))}
        </div>
      </motion.div>
    </motion.section>
  )
}

export default Projects