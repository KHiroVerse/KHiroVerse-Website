import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-24 border-t border-slate-800"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          About Me
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="space-y-6"
            >
            <p className="text-slate-300 text-lg leading-relaxed">
              Hello! I'm a developer. I like coding in various types of programming languages.
            </p>
            <p className="text-slate-400 leading-relaxed">
              My journey in tech started with a curiosity about how things work on the digital world. i also like playing games, especially Minecraft and Roblox. I enjoy creating projects that solve real problems and bring ideas to life.
            </p>
          </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="grid grid-cols-2 gap-4"
              >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-slate-900/50 rounded-2xl border border-slate-800 hover:border-orange/50 transition-colors"
            >
              <h3 className="text-orange font-bold text-xl mb-1">Creative</h3>
              <p className="text-xs text-slate-500">Design-driven approach</p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-slate-900/50 rounded-2xl border border-slate-800 hover:border-pink/50 transition-colors"
            >
              <h3 className="text-pink font-bold text-xl mb-1">Youtuber</h3>
              <p className="text-xs text-slate-500">Creating content for the community</p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-slate-900/50 rounded-2xl border border-slate-800 hover:border-cyan/50 transition-colors"
            >
              <h3 className="text-cyan font-bold text-xl mb-1">Fast</h3>
              <p className="text-xs text-slate-500">Performance focused</p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-slate-900/50 rounded-2xl border border-slate-800 hover:border-orange/50 transition-colors"
            >
              <h3 className="text-orange font-bold text-xl mb-1">Gaming</h3>
              <p className="text-xs text-slate-500">Player of various games</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default About