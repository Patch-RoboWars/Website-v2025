import { BackgroundParticles } from "@/components/background-particles"
import { SponsorSection } from "@/components/sponsor-section"
import { PastCompetitionSection } from "@/components/past-competition-section"
import { BattlebotHero } from "@/components/battlebot-hero"
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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-6xl mx-auto">
              {/* Team 1: The K9 Unit */}
              <div className="group bg-black/60 rounded-xl border border-orange-900/30 overflow-hidden hover:border-orange-500/50 transition-all duration-300">
                <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <div className="text-6xl font-black text-orange-500/20 group-hover:text-orange-500/40 transition-colors">1</div>
                </div>
                <div className="p-4 space-y-3">
                  <h3 className="font-bold text-white text-lg">The K9 Unit</h3>
                  <p className="text-gray-400 text-sm line-clamp-3">2800 RPM spinner with 7.6Nm torque. Weapon tip speed: 120km/h. 3mm aluminium armour.</p>
                  <Button variant="outline" size="sm" className="w-full border-orange-500/50 text-orange-400 hover:bg-orange-500/10">
                    Preview
                  </Button>
                </div>
              </div>

              {/* Team 2: (for) Flip's Sake */}
              <div className="group bg-black/60 rounded-xl border border-orange-900/30 overflow-hidden hover:border-orange-500/50 transition-all duration-300">
                <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <div className="text-6xl font-black text-orange-500/20 group-hover:text-orange-500/40 transition-colors">2</div>
                </div>
                <div className="p-4 space-y-3">
                  <h3 className="font-bold text-white text-lg">(for) Flip&apos;s Sake</h3>
                  <p className="text-gray-400 text-sm line-clamp-3">Pneumatic flipper weapon running at 120 PSI.</p>
                  <Button variant="outline" size="sm" className="w-full border-orange-500/50 text-orange-400 hover:bg-orange-500/10">
                    Preview
                  </Button>
                </div>
              </div>

              {/* Team 3: Duck-heed Martin */}
              <div className="group bg-black/60 rounded-xl border border-orange-900/30 overflow-hidden hover:border-orange-500/50 transition-all duration-300">
                <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <div className="text-6xl font-black text-orange-500/20 group-hover:text-orange-500/40 transition-colors">3</div>
                </div>
                <div className="p-4 space-y-3">
                  <h3 className="font-bold text-white text-lg">Duck-heed Martin</h3>
                  <p className="text-gray-400 text-sm line-clamp-3">10,000 RPM 116mm blade. 3mm steel frame with carbon fiber shell. Rubber duck armour.</p>
                  <Button variant="outline" size="sm" className="w-full border-orange-500/50 text-orange-400 hover:bg-orange-500/10">
                    Preview
                  </Button>
                </div>
              </div>

              {/* Team 4: Sawshank Redemption't */}
              <div className="group bg-black/60 rounded-xl border border-orange-900/30 overflow-hidden hover:border-orange-500/50 transition-all duration-300">
                <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <div className="text-6xl font-black text-orange-500/20 group-hover:text-orange-500/40 transition-colors">4</div>
                </div>
                <div className="p-4 space-y-3">
                  <h3 className="font-bold text-white text-lg">Sawshank Redemption&apos;t</h3>
                  <p className="text-gray-400 text-sm line-clamp-3">48V chainsaw weapon with mecanum wheels for omnidirectional movement.</p>
                  <Button variant="outline" size="sm" className="w-full border-orange-500/50 text-orange-400 hover:bg-orange-500/10">
                    Preview
                  </Button>
                </div>
              </div>

              {/* Team 5: Krusty Crew */}
              <div className="group bg-black/60 rounded-xl border border-orange-900/30 overflow-hidden hover:border-orange-500/50 transition-all duration-300">
                <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <div className="text-6xl font-black text-orange-500/20 group-hover:text-orange-500/40 transition-colors">5</div>
                </div>
                <div className="p-4 space-y-3">
                  <h3 className="font-bold text-white text-lg">Krusty Crew</h3>
                  <p className="text-gray-400 text-sm line-clamp-3">2200KV drone motor weapon. Welded frame with 3mm aluminium composite armour.</p>
                  <Button variant="outline" size="sm" className="w-full border-orange-500/50 text-orange-400 hover:bg-orange-500/10">
                    Preview
                  </Button>
                </div>
              </div>
            </div>
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
