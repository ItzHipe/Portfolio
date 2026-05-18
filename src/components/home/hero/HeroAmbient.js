export default function HeroAmbient() {
  return (
    <div aria-hidden className="hero-ambient">
      <div 
        className="hero-ambient-orb left-[-12%] top-[8%] hidden h-[min(400px,50vw)] w-[min(400px,50vw)] sm:block" 
        style={{ background: 'radial-gradient(circle, rgb(var(--color-cyan) / 0.12) 0%, transparent 60%)' }}
      />
      <div 
        className="hero-ambient-orb right-[-8%] top-[35%] h-[300px] w-[300px] md:h-[350px] md:w-[350px]" 
        style={{ background: 'radial-gradient(circle, rgb(var(--color-purple) / 0.08) 0%, transparent 65%)' }}
      />
    </div>
  )
}
