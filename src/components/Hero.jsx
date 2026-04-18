import React from 'react'
import { motion } from 'framer-motion'
import Button from './Button'

const Hero = () => {
  return (
    <motion.section
      id="hero"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center justify-center min-h-[80vh] text-center py-20"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight"
      >
        Welcome to <span className="text-cyan">KHiroVerse's</span> <br />
        <span className="text-orange">Website</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10"
      >
        I'm a Programmer and i like making projects. <br />
        I might as well like playing games especially Minecraft and Roblox.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <Button href="/projects" variant="primary">
          View Projects
        </Button>
        <Button href="https://youtube.com/@KHiroVerse" target="_blank" variant="secondary">
          View YouTube Channel
        </Button>
        <Button href="https://youtube.com/@KHiroVerse2" target="_blank" variant="pink">
          View Roblox Channel
        </Button>
      </motion.div>
    </motion.section>
  )
}

export default Hero