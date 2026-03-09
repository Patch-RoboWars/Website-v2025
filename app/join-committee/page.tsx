"use client"

import { BackgroundParticles } from "@/components/background-particles"
import { Users } from "lucide-react"
import Script from "next/script"
import { useEffect } from "react"

export default function JoinCommitteePage() {
  useEffect(() => {
    // Load Tally embeds when the script is ready
    const loadTally = () => {
      if (typeof window !== "undefined" && (window as unknown as { Tally?: { loadEmbeds: () => void } }).Tally) {
        (window as unknown as { Tally: { loadEmbeds: () => void } }).Tally.loadEmbeds()
      }
    }
    loadTally()
  }, [])
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <BackgroundParticles />
      
      {/* Header Section */}
      <section className="relative pt-32 pb-12">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="inline-block p-3 bg-orange-900/20 rounded-lg">
              <Users className="h-8 w-8 text-orange-500" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Join the Committee
            </h1>
            <div className="w-20 h-1 bg-orange-600"></div>
            <p className="max-w-2xl text-gray-300 text-lg leading-relaxed">
              Help us organize and run Patch RoboWars! We&apos;re looking for passionate individuals 
              to join our committee and make this event even better.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="relative flex-1 pb-20">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-black/40 rounded-xl border border-orange-900/20 overflow-hidden p-6">
              <iframe
                data-tally-src="https://tally.so/embed/obAMO1?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                loading="lazy"
                width="100%"
                height="600"
                title="Join the Committee Form"
                className="w-full min-h-[600px] border-0"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <Script
        src="https://tally.so/widgets/embed.js"
        strategy="lazyOnload"
      />
    </div>
  )
}
