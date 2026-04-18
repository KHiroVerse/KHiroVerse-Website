import React from 'react'
import { motion } from 'framer-motion'

const Skills = () => {
  return (
    <motion.section
      id="skills"
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
          Technical Arsenal
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-slate-400"
        >
          The tools I use to bring ideas to life
        </motion.p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Node.js', 'Rust', 'GitHub & Git', 'Move'].map((skill) => (
          <motion.div 
            key={skill} 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
            className="p-4 bg-slate-900/50 border border-slate-800 rounded-xl text-center hover:border-pink/50 transition-all"
          >
            <span className="text-slate-300 font-medium">{skill}</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default Skills