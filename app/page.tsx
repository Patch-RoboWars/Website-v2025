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

            {/* Last Year's Event Info */}
            <div className="max-w-5xl mx-auto bg-gradient-to-br from-black/60 to-orange-950/20 rounded-2xl border border-orange-900/30 p-8 space-y-8">
              <div className="text-center space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold text-white">RoboWars 2024</h3>
                <div className="flex items-center justify-center gap-6 text-sm text-gray-400">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    Dogpatch Labs
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    5 Teams
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    200+ Attendees
                  </span>
                </div>
              </div>
              
              {/* Photo/Video Grid - 2x2 on desktop */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="aspect-square rounded-xl overflow-hidden border border-orange-900/20">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20250705_173051-y9mOK708cxhgbMysGDYEwHYjX4uvrA.jpg" 
                    alt="RoboWars 2024 arena battle" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="aspect-square rounded-xl overflow-hidden border border-orange-900/20">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20250705_173300-MAHeKITorUaosfLNK7mvMRqZWrAkOO.jpg" 
                    alt="Arena with pit hazard and Duck-heed Martin" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="aspect-square rounded-xl overflow-hidden border border-orange-900/20">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Snapchat-1284622242-sBe6IF2miTiMUNwxT72KaObGQPwUPG.jpg" 
                    alt="Crowd watching the arena" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="aspect-square rounded-xl overflow-hidden border border-orange-900/20">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250705_152627-N3sphnV4nclCOz5L8Mp4w0nWmiz5DF.jpg" 
                    alt="Live broadcast screen at Dogpatch Labs" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Video highlight */}
              <div className="aspect-video rounded-xl overflow-hidden border border-orange-900/20">
                <video 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0136-Qifhi6LUOhBJ2sRgDrPBHU7Ate3Igq.MP4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white text-center pt-8">2025 Competitors</h3>

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
