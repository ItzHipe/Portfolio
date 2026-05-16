export default function HeroAmbient() {
  return (
    <div aria-hidden className="hero-ambient">
      <div className="hero-ambient-orb left-[-12%] top-[8%] hidden h-[min(320px,40vw)] w-[min(320px,40vw)] bg-accent-cyan/12 sm:block" />
      <div className="hero-ambient-orb right-[-8%] top-[35%] h-[220px] w-[220px] bg-accent-purple/8 md:h-[260px] md:w-[260px]" />
    </div>
  )
}
