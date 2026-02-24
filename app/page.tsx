import { BackgroundParticles } from "@/components/background-particles"


import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { FightNightSection } from "@/components/fight-night-section"
import { SponsorSection } from "@/components/sponsor-section"
import { PastCompetitionSection } from "@/components/past-competition-section"
import { FightRulesSection } from "@/components/fight-rules-section"
import { JudgingCriteriaSection } from "@/components/judging-criteria-section"

import { BuildDaySlideshow } from "@/components/build-day-slideshow"
import { Info, MapPin, Calendar, Clock, Ticket, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <AboutSection />
      <PastCompetitionSection />
      {/*
      <FightNightSection />
      Fight Rules Section 
      <FightRulesSection />
      <JudgingCriteriaSection />
      <SponsorSection />
       */}
    </div >
  )
}
