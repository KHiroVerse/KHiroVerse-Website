import React from 'react'
import { motion } from 'framer-motion'

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
        {[1, 2, 3].map((i) => (
          <motion.div 
            key={i} 
            variants={{
              hidden: { opacity: 0, scale: 0.8, y: 50 },
              show: { opacity: 1, scale: 1, y: 0 }
            }}
            className="group bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden hover:border-cyan/50 transition-all duration-300"
          >
            <div className="aspect-video bg-slate-800 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
              <div className="w-full h-full flex items-center justify-center text-slate-600 font-medium">
                Project Preview {i}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 group-hover:text-cyan transition-colors">Awesome Project {i}</h3>
              <p className="text-slate-400 text-sm mb-6">
                Building a highly scalable application using modern architecture and best practices.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-[10px] px-2 py-1 bg-slate-800 text-slate-300 rounded-md uppercase tracking-wider font-semibold">React</span>
                <span className="text-[10px] px-2 py-1 bg-slate-800 text-slate-300 rounded-md uppercase tracking-wider font-semibold">Tailwind</span>
                <span className="text-[10px] px-2 py-1 bg-slate-800 text-slate-300 rounded-md uppercase tracking-wider font-semibold">Vite</span>
              </div>
            </div>
          </motion.div>
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
          {[4, 5, 6].map((i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -5 }}
              className="group bg-slate-900/30 border border-slate-800/50 rounded-2xl overflow-hidden hover:border-cyan/30 transition-all duration-300"
            >
              <div className="aspect-video bg-slate-800/50 relative overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-slate-600 font-medium">
                  Legacy Project {i}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2 group-hover:text-cyan transition-colors">Archive Project {i}</h3>
                <p className="text-slate-400 text-xs mb-4">
                  An older project showcasing my early learning journey.
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