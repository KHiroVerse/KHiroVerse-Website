import React from 'react'
import { motion } from 'framer-motion'
import Button from './Button'

const Contact = () => {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-24 border-t border-slate-800"
    >
<div className="max-w-3xl mx-auto text-center bg-gradient-to-b from-slate-900 to-background p-12 rounded-3xl border border-slate-800">
  <h2 className="text-3xl md:text-4xl font-bold mb-8">Get in Touch</h2>
  <div className="space-y-4">
    <p className="text-slate-400">Email me at:</p>
    <a 
      href="mailto:hello@example.com" 
      className="text-2xl md:text-4xl font-bold text-cyan hover:text-cyan-light transition-colors break-all"
    >
      KHiroVerse@gmail.com
    </a>
  </div>
</div>
    </motion.section>
  )
}

export default Contact
