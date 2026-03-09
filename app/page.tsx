import { BackgroundParticles } from "@/components/background-particles"
import { SponsorSection } from "@/components/sponsor-section"
import { PastCompetitionSection } from "@/components/past-competition-section"
import { BattlebotHero } from "@/components/battlebot-hero"
import { TeamsSection } from "@/components/teams-section"
import { Info, ArrowDown, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Clean, Modern, Centered */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-black text-white py-20">
        <BackgroundParticles />

        <div className="relative z-10 px-4 max-w-6xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left side - Text content */}
            <div className="text-center lg:text-left space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500">
                    PATCH
                  </span>
                  <br />
                  <span className="text-white">ROBOWARS</span>
                </h1>
              </div>

              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-bold px-8 py-6 text-lg border-0 shadow-lg hover:shadow-orange-500/25 hover:shadow-xl transition-all duration-300"
                >
                  <Link href="/join-committee" className="flex items-center justify-center gap-3">
                    <Users className="h-5 w-5" />
                    Join the Committee
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right side - Battlebot */}
            <div className="relative">
              <BattlebotHero />
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

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="space-y-6">
              <div className="inline-block p-2 bg-orange-900/20 rounded-lg">
                <Info className="h-6 w-6 text-orange-500" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">What is Patch RoboWars?</h2>
              <div className="w-20 h-1 bg-orange-600"></div>
              <p className="max-w-3xl text-gray-300 text-lg leading-relaxed">
                Patch RoboWars is a student-run battlebot competition where anyone from any background can participate.
                Each team receives a transmitter/receiver set, funding to build their robot, dedicated workspace, and
                access to 3D printers. Participants design and build their own remote-controlled machines to fight and
                disable opponents in a thrilling display of strategy, engineering, and combat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RoboWars 2025 Teams Section */}
      <section id="robowars-2025" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container px-4 md:px-6">
          <div className="space-y-12">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="inline-block p-2 bg-orange-900/20 rounded-lg">
                <Users className="h-6 w-6 text-orange-500" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">RoboWars 2025</h2>
              <div className="w-20 h-1 bg-orange-600"></div>
              <p className="text-gray-300 max-w-2xl">Meet the teams competing in this year&apos;s competition</p>
            </div>

            {/* Event Overview from 2024 */}
            <div className="max-w-5xl mx-auto bg-black/40 rounded-2xl border border-orange-900/30 p-8 space-y-6">
              <h3 className="text-2xl font-bold text-white text-center">RoboWars 2024</h3>
              <p className="text-gray-300 text-center max-w-2xl mx-auto">
                Our inaugural event was an incredible success with fierce battles, amazing builds, and an electric atmosphere.
              </p>
              
              {/* Photo Grid Placeholder */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center border border-gray-700/50 overflow-hidden">
                  <span className="text-gray-500 text-sm">Arena Photo</span>
                </div>
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center border border-gray-700/50 overflow-hidden">
                  <span className="text-gray-500 text-sm">Crowd Photo</span>
                </div>
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center border border-gray-700/50 overflow-hidden">
                  <span className="text-gray-500 text-sm">Battle Photo</span>
                </div>
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center border border-gray-700/50 overflow-hidden">
                  <span className="text-gray-500 text-sm">Winners Photo</span>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center p-4 bg-black/30 rounded-lg border border-orange-900/20">
                  <p className="text-3xl font-bold text-orange-500">5</p>
                  <p className="text-gray-400 text-sm">Teams</p>
                </div>
                <div className="text-center p-4 bg-black/30 rounded-lg border border-orange-900/20">
                  <p className="text-3xl font-bold text-orange-500">200+</p>
                  <p className="text-gray-400 text-sm">Attendees</p>
                </div>
                <div className="text-center p-4 bg-black/30 rounded-lg border border-orange-900/20">
                  <p className="text-3xl font-bold text-orange-500">1</p>
                  <p className="text-gray-400 text-sm">Epic Night</p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white text-center pt-8">This Year&apos;s Competitors</h3>

            <TeamsSection />
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <SponsorSection />

      {/* Past Competition Section */}
      <PastCompetitionSection />
    </div>
  )
}
