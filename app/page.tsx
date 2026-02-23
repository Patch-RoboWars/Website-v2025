import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Zap, Users, Calendar, ArrowRight } from "lucide-react"
import { CountdownTimer } from "@/components/countdown-timer"
import { BattleBotAnimation } from "@/components/battle-bot-animation"
import { BackgroundParticles } from "@/components/background-particles"
import { BuildDaySlideshow } from "@/components/build-day-slideshow"
import { FightRulesSection } from "@/components/fight-rules-section"
import { JudgingCriteriaSection } from "@/components/judging-criteria-section"
import { ParticipantBenefits } from "@/components/participant-benefits"
import { SponsorSection } from "@/components/sponsor-section"
import { PastCompetitionSection } from "@/components/past-competition-section"

export default function Home() {
  // Fight Night date - July 5th 2025
  const fightNightDate = new Date("2025-07-05T18:00:00")
  console.log("[v0] Home page rendering")

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background Particles */}
      <BackgroundParticles />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left side - Text content */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-sm font-medium mb-6">
                <Zap className="h-4 w-4 mr-2" />
                Fight Night 2025
              </div>

              <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 animate-gradient">
                  ROBOWARS
                </span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 max-w-lg">
                The ultimate battlebot competition where engineering meets combat. Design, build, and battle your custom
                robot in an arena of destruction.
              </p>

              {/* Countdown Timer */}
              <div className="mb-8 bg-black/40 rounded-xl p-4 border border-orange-900/20 w-full max-w-sm">
                <p className="text-sm text-orange-400 font-semibold mb-2 text-center">FIGHT NIGHT COUNTDOWN</p>
                <CountdownTimer targetDate={fightNightDate} />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="mechanical-btn bg-orange-600 hover:bg-orange-700 text-white font-bold text-lg px-8"
                >
                  <Link href="https://forms.gle/GkYF3W5eJdeJrf7u7" target="_blank" rel="noopener noreferrer">
                    Register Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-orange-600 text-orange-400 hover:bg-orange-600/10 font-bold text-lg px-8"
                >
                  <Link href="#about">Learn More</Link>
                </Button>
              </div>
            </div>

            {/* Right side - 3D Bot Animation */}
            <div className="relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden border border-orange-900/20">
              <BattleBotAnimation />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="inline-block p-2 bg-orange-900/20 rounded-lg mb-4">
              <Zap className="h-6 w-6 text-orange-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About RoboWars</h2>
            <div className="w-20 h-1 bg-orange-600 mb-6"></div>
            <p className="max-w-3xl text-gray-300 text-lg">
              RoboWars is a premier battlebot competition where teams design and build combat robots to compete in an
              arena of destruction. From rookie builders to seasoned engineers, everyone gets a chance to showcase their
              mechanical prowess.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black/40 rounded-xl p-6 text-center border border-orange-900/20">
              <div className="bg-orange-900/30 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Zap className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Build</h3>
              <p className="text-gray-300">
                Design and construct your battlebot with provided materials and workspace access.
              </p>
            </div>

            <div className="bg-black/40 rounded-xl p-6 text-center border border-orange-900/20">
              <div className="bg-orange-900/30 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Collaborate</h3>
              <p className="text-gray-300">
                Work with your team to strategize, iterate, and perfect your robot design.
              </p>
            </div>

            <div className="bg-black/40 rounded-xl p-6 text-center border border-orange-900/20">
              <div className="bg-orange-900/30 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Calendar className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Compete</h3>
              <p className="text-gray-300">
                Battle it out on Fight Night in front of a live audience for glory and prizes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section id="benefits" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="inline-block p-2 bg-orange-900/20 rounded-lg mb-4">
              <Users className="h-6 w-6 text-orange-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What You Get</h2>
            <div className="w-20 h-1 bg-orange-600 mb-6"></div>
            <p className="max-w-3xl text-gray-300 text-lg">
              Every participating team receives resources and support to build their competitive robot.
            </p>
          </div>
          <ParticipantBenefits />
        </div>
      </section>

      {/* Build Days Section */}
      <section id="build-days" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="inline-block p-2 bg-orange-900/20 rounded-lg mb-4">
              <Calendar className="h-6 w-6 text-orange-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Build Days</h2>
            <div className="w-20 h-1 bg-orange-600 mb-6"></div>
            <p className="max-w-3xl text-gray-300 text-lg">
              Teams gather weekly at Dogpatch Labs to design, build, and test their battlebots. Check out some moments
              from our build sessions.
            </p>
          </div>
          <BuildDaySlideshow />
        </div>
      </section>

      {/* Fight Rules Section */}
      <FightRulesSection />

      {/* Judging Criteria Section */}
      <JudgingCriteriaSection />

      {/* Past Competition Section */}
      <PastCompetitionSection />

      {/* Sponsor Section */}
      <SponsorSection />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Battle?</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Register your team now and start building your battlebot for Fight Night 2025.
          </p>
          <Button
            asChild
            size="lg"
            className="mechanical-btn bg-orange-600 hover:bg-orange-700 text-white font-bold text-lg px-8"
          >
            <Link href="https://forms.gle/GkYF3W5eJdeJrf7u7" target="_blank" rel="noopener noreferrer">
              Register Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
