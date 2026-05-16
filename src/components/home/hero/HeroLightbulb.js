import Image from 'next/image'
import { motion } from 'framer-motion'

export default function HeroLightbulb() {
  return (
    <motion.div
      className="pointer-events-none absolute bottom-6 right-4 z-20 hidden w-16 opacity-90 sm:block sm:w-20 md:bottom-10 md:right-8 lg:w-24"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.6 }}
      aria-hidden
    >
      <Image
        src="/images/svgs/miscellaneous_icons_1.svg"
        alt=""
        width={96}
        height={156}
        className="h-auto w-full drop-shadow-[0_0_24px_rgba(250,204,21,0.35)]"
        priority
      />
    </motion.div>
  )
}
