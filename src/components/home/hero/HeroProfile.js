import { useState } from 'react'
import Image from 'next/image'

export default function HeroProfile({ name, profileImage, profileFallback }) {
  const [imgError, setImgError] = useState(false)
  const showImage = profileImage && !imgError

  return (
    <div className="relative mx-auto w-full max-w-md animate-fade-in fill-mode-both lg:mx-0 lg:max-w-none">
      <div className="relative aspect-[4/5] w-full sm:aspect-[3/4] lg:aspect-auto lg:min-h-[min(82vh,680px)] lg:w-full">
        {showImage ? (
          <>
            <Image
              src={profileImage}
              alt={`${name} — portrait`}
              fill
              className="relative z-10 object-contain object-bottom lg:object-left-bottom"
              priority
              sizes="(max-width: 1024px) 90vw, 48vw"
              onError={() => setImgError(true)}
            />
          </>
        ) : (
          <div className="flex h-full min-h-[400px] items-end justify-center lg:min-h-[560px]">
            <span className="font-display text-8xl font-bold text-foreground/15">
              {profileFallback}
            </span>
          </div>
        )}
      </div>
    </div>
  )
}
