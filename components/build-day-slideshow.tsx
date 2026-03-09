"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"

const buildDayImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8649.JPG-PTC0huIOQMHdlsrFTxmunmwzaRoONX.jpeg",
    alt: "Team members working with 3D printer at Dogpatch Labs",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8773%203.jpg-RxgubPBtpy7f5HSmv6sJxM1iqUWtFU.jpeg",
    alt: "Team member designing robot components using CAD software",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9457.jpg-DqO86NmU8smSAi4NZ7Kxqd239KVQDi.jpeg",
    alt: "Team planning and designing robot strategy on whiteboard",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8670.JPG-LKA5eJbFgxKgHrzrGNGS2ezFzBmOhd.jpeg",
    alt: "Strategic planning session with detailed robot diagrams on whiteboard",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9395.jpg-TI0NXzvMLbFDdCJexluUWcBmBs2EY1.jpeg",
    alt: "Collaborative team building session",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9480.JPG-LQ2r81C6532Llcmz8JGvCxP40W2yAT.jpeg",
    alt: "Team members assembling robot components and electronics",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8851.JPG-UZgi6vFrTeWmQNfrfdHd78xHjzoLxm.jpeg",
    alt: "Testing robot controls and electronics",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9408.JPG-vZbSUJyy7aCXUlSTvWOC0YVGooP6lo.jpeg",
    alt: "Hands-on fabrication work with power tools and materials",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9181.JPG-I26kWmHtPLv1XIp6dmCwfvkGuB6456.jpeg",
    alt: "Detailed electronics and wiring work",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9347.JPG-E7rb3CM6sEwNTNb9ChnOwUEFQ6Qasb.jpeg",
    alt: "Outdoor fabrication and material cutting work",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9237.JPG-R7PeUFXRrMqEfcIeP55kxZq08LNIKV.jpeg",
    alt: "Final robot assembly and testing",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8830.jpg-LeEbacQUUtMtg4FGSuqIkzt1BGn89F.jpeg",
    alt: "Workshop table with robot components and tools",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8799.JPG-EEtRI6VNTP6MpJl1C5DXcswAkMX1KF.jpeg",
    alt: "Overhead view of workspace with robot parts",
  },
]

// Ken Burns effect directions for variety
const kenBurnsEffects = [
  "scale-100 translate-x-0 translate-y-0",
  "scale-110 -translate-x-2 -translate-y-1",
  "scale-110 translate-x-2 translate-y-1",
  "scale-105 -translate-x-1 translate-y-2",
  "scale-110 translate-x-1 -translate-y-2",
]

const SLIDE_DURATION = 5000 // 5 seconds per slide

export function BuildDaySlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [progress, setProgress] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const progressRef = useRef<NodeJS.Timeout | null>(null)
  const slideRef = useRef<NodeJS.Timeout | null>(null)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === buildDayImages.length - 1 ? 0 : prev + 1))
    setProgress(0)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? buildDayImages.length - 1 : prev - 1))
    setProgress(0)
  }, [])

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index)
    setProgress(0)
  }, [])

  // Progress bar animation
  useEffect(() => {
    if (!isPlaying) return

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0
        return prev + (100 / (SLIDE_DURATION / 50))
      })
    }, 50)

    progressRef.current = progressInterval
    return () => clearInterval(progressInterval)
  }, [isPlaying, currentSlide])

  // Auto-advance slides
  useEffect(() => {
    if (!isPlaying) return

    const slideInterval = setInterval(() => {
      nextSlide()
    }, SLIDE_DURATION)

    slideRef.current = slideInterval
    return () => clearInterval(slideInterval)
  }, [isPlaying, nextSlide])

  return (
    <div 
      className="relative max-w-4xl mx-auto group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Ambient glow effect */}
      <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 via-orange-600/10 to-orange-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      {/* Main slideshow container */}
      <div className="relative aspect-video overflow-hidden rounded-xl bg-black border border-orange-500/20 shadow-2xl shadow-orange-500/10">
        {/* Cinematic letterbox bars */}
        <div className="absolute inset-x-0 top-0 h-[4%] bg-gradient-to-b from-black to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-[4%] bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" />
        
        {/* Image slides with Ken Burns effect */}
        {buildDayImages.map((image, index) => {
          const isActive = index === currentSlide
          const kenBurnsClass = kenBurnsEffects[index % kenBurnsEffects.length]
          
          return (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ease-out ${
                isActive 
                  ? "opacity-100 z-10" 
                  : "opacity-0 z-0 scale-105"
              }`}
            >
              <div className={`absolute inset-0 transition-transform duration-[5000ms] ease-out ${
                isActive ? kenBurnsClass : "scale-100"
              }`}>
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
              
              {/* Vignette overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(0,0,0,0.4)_100%)] pointer-events-none" />
            </div>
          )
        })}

        {/* Navigation Buttons - fade in on hover */}
        <button
          onClick={prevSlide}
          className={`absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/60 backdrop-blur-sm hover:bg-orange-500/80 text-white p-3 rounded-full transition-all duration-300 border border-white/10 hover:border-orange-400/50 hover:scale-110 ${
            isHovered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
          }`}
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={nextSlide}
          className={`absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/60 backdrop-blur-sm hover:bg-orange-500/80 text-white p-3 rounded-full transition-all duration-300 border border-white/10 hover:border-orange-400/50 hover:scale-110 ${
            isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
          }`}
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Play/Pause button */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className={`absolute bottom-4 right-4 z-30 bg-black/60 backdrop-blur-sm hover:bg-orange-500/80 text-white p-2 rounded-full transition-all duration-300 border border-white/10 hover:border-orange-400/50 ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
          aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
        >
          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </button>

        {/* Slide counter */}
        <div className={`absolute bottom-4 left-4 z-30 bg-black/60 backdrop-blur-sm text-white text-sm font-medium px-3 py-1.5 rounded-full border border-white/10 transition-all duration-300 ${
          isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
        }`}>
          <span className="text-orange-400">{currentSlide + 1}</span>
          <span className="text-gray-400"> / {buildDayImages.length}</span>
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/40 z-30">
          <div 
            className="h-full bg-gradient-to-r from-orange-500 to-orange-400 transition-all duration-50 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Slide Indicators - redesigned as pill indicators */}
      <div className="flex justify-center mt-6 gap-1.5">
        {buildDayImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? "w-8 bg-orange-500" 
                : "w-1.5 bg-gray-600 hover:bg-gray-500 hover:w-3"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
