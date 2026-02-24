import { BackgroundParticles } from "@/components/background-particles"
import { BuildDaySlideshow } from "@/components/build-day-slideshow"
import { Button } from "@/components/ui/button"
import { ArrowDown, Ticket } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-black text-white py-20">
      <BackgroundParticles />

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto w-full space-y-12">
        {/* Main Event Title */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500">
              PATCH ROBOWARS
            </span>
          </h1>

          <div className="space-y-2">
            <p className="text-orange-400 font-semibold text-xl md:text-2xl tracking-wide">PRESENTS</p>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white">FIGHT NIGHT 2025</h2>
          </div>

          {/* Get Tickets Button */}
          <div className="pt-4">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-bold px-12 py-4 text-xl border-0 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <a
                href="https://www.eventbrite.ie/e/1408425351139?aff=oddtdtcreator"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3"
              >
                <Ticket className="h-6 w-6" />
                Get Free Tickets Now
              </a>
            </Button>
          </div>
        </div>

        {/* Build Context Slideshow */}
        <div className="w-full">
          <div className="bg-black/60 backdrop-blur-sm border border-orange-500/30 rounded-2xl p-6 md:p-8 space-y-6">
            <div className="w-full max-w-5xl mx-auto">
              <BuildDaySlideshow />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="flex flex-col items-center space-y-2">
          <p className="text-xs text-gray-400">Learn More</p>
          <ArrowDown className="h-6 w-6 text-orange-400 animate-pulse" />
        </div>
      </div>
    </section>
  )
}