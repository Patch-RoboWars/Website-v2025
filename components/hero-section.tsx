import { BackgroundParticles } from "@/components/background-particles"
import { BuildDaySlideshow } from "@/components/build-day-slideshow"
import { Button } from "@/components/ui/button"
import { ArrowDown, Users, Trophy } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black text-white py-20">
      <BackgroundParticles />

      {/* subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.18),transparent_40%)] pointer-events-none" />

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto w-full space-y-12">
        {/* Main Hero Content */}
        <div className="space-y-8">
          <div className="inline-flex items-center rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-300 backdrop-blur-sm">
            The next robot combat competition is on the horizon
          </div>

          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-500">
                PATCH ROBOWARS
              </span>
            </h1>

            {/* <div className="space-y-3 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white">
                The Road to the Next Competition Starts Here
              </h2>
              <p className="text-base md:text-xl text-gray-300 leading-relaxed">
                We’re building toward our next big robot combat event. Follow the journey,
                see what goes into the builds, and get involved early as we grow the team,
                the machines, and the competition.
              </p>
            </div> */}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-bold px-10 py-4 text-lg border-0 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <a href="/join-committee" className="flex items-center justify-center gap-3">
                <Users className="h-5 w-5" />
                Join the Committee
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-orange-500/40 bg-black/40 text-white hover:bg-orange-500/10 hover:text-orange-200 px-10 py-4 text-lg backdrop-blur-sm"
            >
              <a href="#build-journey" className="flex items-center justify-center gap-3">
                <Trophy className="h-5 w-5" />
                Explore the Build Journey
              </a>
            </Button>
          </div>

          <p className="text-sm text-gray-400">
            Builders, organisers, creatives, sponsors, and curious newcomers all welcome.
          </p>
        </div>

        {/* Build Context Slideshow */}
        <div id="build-journey" className="w-full">
          <div className="bg-black/60 backdrop-blur-sm border border-orange-500/30 rounded-2xl p-6 md:p-8 space-y-6 shadow-2xl shadow-orange-500/10">
            <div className="text-left max-w-4xl mx-auto space-y-2">
              <p className="text-orange-400 font-semibold uppercase tracking-[0.2em] text-sm">
                Behind the scenes
              </p>
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                From early prototypes to competition-ready robots
              </h3>
              <p className="text-gray-300">
                Get a look at the engineering, testing, and teamwork that power the next season.
              </p>
            </div>

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