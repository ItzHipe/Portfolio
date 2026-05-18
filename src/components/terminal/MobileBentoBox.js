import { motion } from 'framer-motion'
import { whoamiContent, stackRows, achievements } from '@/data/terminal/content'
import { cn } from '@/lib/cn'
import { useState, useEffect } from 'react'

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 15, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 300, damping: 24 },
  },
}

function TypingText({ text, delay = 0 }) {
  const [displayText, setDisplayText] = useState('')

  useEffect(() => {
    let timeout
    let currentIndex = 0
    
    const startTyping = () => {
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayText(text.slice(0, currentIndex))
          currentIndex++
        } else {
          clearInterval(interval)
        }
      }, 40)
      return interval
    }

    timeout = setTimeout(() => {
      const interval = startTyping()
      return () => clearInterval(interval)
    }, delay)

    return () => clearTimeout(timeout)
  }, [text, delay])

  return (
    <span className="font-mono">
      {displayText}
      <span className="animate-pulse opacity-70">_</span>
    </span>
  )
}

export default function MobileBentoBox() {
  return (
    <motion.div
      className="flex flex-col gap-4 md:hidden w-full max-w-sm mx-auto"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-50px' }}
    >
      {/* Status & Role Card */}
      <motion.div 
        variants={itemVariants}
        className="relative overflow-hidden rounded-2xl border border-border/10 bg-void/60 p-5 shadow-glass backdrop-blur-md"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/[0.03] to-transparent pointer-events-none" />
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2 rounded-full border border-accent-teal/20 bg-accent-teal/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-accent-teal">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-teal opacity-75"></span>
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-teal"></span>
            </span>
            System Online
          </div>
          <span className="font-mono text-[10px] text-muted">v2.0.4</span>
        </div>
        
        <h3 className="font-display text-xl font-bold tracking-tight text-foreground mb-1">
          {whoamiContent.name}
        </h3>
        <p className="text-sm text-muted mb-4 h-5">
          <TypingText text={whoamiContent.role} delay={800} />
        </p>

        <div className="flex flex-wrap gap-2 pt-4 border-t border-border/10">
          {whoamiContent.focus.map((item, i) => (
            <span 
              key={i}
              className="rounded-lg bg-elevated/50 border border-border/15 px-2.5 py-1 text-[11px] font-mono text-foreground/80"
            >
              {item}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Grid Row */}
      <div className="grid grid-cols-2 gap-4">
        {/* Core Stack */}
        <motion.div 
          variants={itemVariants}
          className="relative overflow-hidden rounded-2xl border border-border/10 bg-void/60 p-5 shadow-glass backdrop-blur-md flex flex-col justify-between"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/[0.03] to-transparent pointer-events-none" />
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted mb-3">Core Stack</p>
          <div className="flex flex-col gap-2">
            {stackRows.slice(0, 3).map((row, i) => (
              <div key={i}>
                <span className="text-xs font-semibold text-foreground block">{row.layer}</span>
                <span className="text-[10px] text-muted truncate block w-full">{row.tools.split(',')[0]}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Top Achievement */}
        <motion.div 
          variants={itemVariants}
          className="relative overflow-hidden rounded-2xl border border-accent-cyan/15 bg-gradient-brand-soft p-5 shadow-glow-sm backdrop-blur-md flex flex-col justify-between"
        >
          <p className="font-mono text-[10px] uppercase tracking-widest text-accent-cyan mb-3">Highlight</p>
          <div>
            <p className="font-display text-lg font-bold leading-tight text-foreground mb-1">
              {achievements[0].title.split(' ')[0]}
              <br/>
              {achievements[0].title.split(' ')[1]}
            </p>
            <p className="text-[10px] text-accent-cyan/80 font-mono mt-2">
              {achievements[0].metric}
            </p>
          </div>
        </motion.div>
      </div>
      
      {/* Location / Action */}
      <motion.div 
        variants={itemVariants}
        className="flex items-center justify-between rounded-2xl border border-border/10 bg-void/60 px-5 py-4 shadow-glass backdrop-blur-md"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-elevated border border-border/15">
            <span className="text-lg">📍</span>
          </div>
          <div>
            <p className="text-xs font-semibold text-foreground">Location</p>
            <p className="text-[10px] text-muted font-mono">{whoamiContent.location.split('·')[0].trim()}</p>
          </div>
        </div>
      </motion.div>

    </motion.div>
  )
}
