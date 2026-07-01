import React from 'react'
import { motion } from 'framer-motion'

const featuredProjects = [
  {
    title: 'Weather Dash',
    description: 'A real-time weather forecasting application with dynamic UI and accurate data.',
    thumbnail: '/WeatherDash Thumbnail Project.png',
    url: 'https://weatherdash-khiroverse.vercel.app/',
    tags: ['React', 'Tailwind CSS', 'API'],
  },
  {
    title: 'Friend Memory App',
    description: 'A application designed to remember your friends identities privately',
    thumbnail: '/KFMA Thumbnail.png',
    url: 'https://kfma.vercel.app/',
    tags: ['React', 'Tailwind CSS', 'Vercel'],
  },
  {
    title: 'Task App',
    description: 'A streamlined task management application to boost productivity and organization.',
    thumbnail: '/KTA Thumnail.png',
    url: 'https://khiroverse-task-app.vercel.app/',
    tags: ['React', 'Tailwind CSS', 'Vercel'],
  },
]

const moreProjects = [
  {
    title: 'Archive Project 4',
    description: 'An older project showcasing my early learning journey.',
    thumbnail: '', // Placeholder
  },
  {
    title: 'Archive Project 5',
    description: 'An older project showcasing my early learning journey.',
    thumbnail: '', // Placeholder
  },
  {
    title: 'Archive Project 6',
    description: 'An older project showcasing my early learning journey.',
    thumbnail: '', // Placeholder
  },
]

const Projects = () => {
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
        {featuredProjects.map((project, index) => (
          <motion.a
            key={index}
            href={project.url}
            target={project.url.startsWith('http') ? '_blank' : '_self'}
            rel="noopener noreferrer"
            variants={{
              hidden: { opacity: 0, scale: 0.8, y: 50 },
              show: { opacity: 1, scale: 1, y: 0 }
            }}
            className="group bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden hover:border-cyan/50 transition-all duration-300"
          >
            <div className="aspect-video bg-slate-800 relative overflow-hidden">
              {project.thumbnail ? (
                <img 
                  src={project.thumbnail} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-slate-600 font-medium">
                  Project Preview
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 group-hover:text-cyan transition-colors">{project.title}</h3>
              <p className="text-slate-400 text-sm mb-6">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags?.map((tag) => (
                  <span 
                    key={tag}
                    className="text-[10px] px-2 py-1 bg-slate-800 text-slate-300 rounded-md uppercase tracking-wider font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.a>
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
          {moreProjects.map((project, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -5 }}
              className="group bg-slate-900/30 border border-slate-800/50 rounded-2xl overflow-hidden hover:border-cyan/30 transition-all duration-300"
            >
              <div className="aspect-video bg-slate-800/50 relative overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-slate-600 font-medium">
                  {project.thumbnail ? (
                    <img 
                      src={project.thumbnail} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    "Project Preview"
                  )}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2 group-hover:text-cyan transition-colors">{project.title}</h3>
                <p className="text-slate-400 text-xs mb-4">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  )
}

export default Projects