export default function BackgroundEffects() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="hero-glow opacity-40" />
      <div className="absolute -left-[20%] top-[-5%] h-[min(400px,50vw)] w-[min(400px,50vw)] rounded-full bg-accent-purple/8 blur-[72px]" />
      <div className="absolute -right-[15%] top-[28%] h-[280px] w-[280px] rounded-full bg-accent-cyan/6 blur-[64px]" />
    </div>
  )
}
