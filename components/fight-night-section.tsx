import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Ticket } from "lucide-react"

export function FightNightSection() {
  return (
    <section id="event-details" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container px-4 md:px-6">
        <div className="space-y-12">
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="inline-block p-2 bg-orange-900/20 rounded-lg">
              <Calendar className="h-6 w-6 text-orange-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Fight Night Details</h2>
            <div className="w-20 h-1 bg-orange-600" />
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-black/40 rounded-xl p-8 border border-orange-900/20 space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* When */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-orange-900/30 rounded-full p-3">
                      <Calendar className="h-6 w-6 text-orange-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">When</h3>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <p className="text-orange-400 font-semibold text-lg">Saturday, July 5th, 2025</p>

                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Clock className="h-5 w-5 text-orange-500" />
                          <p className="text-gray-300">
                            <span className="text-white font-semibold">4:30 PM</span> - Doors open
                          </p>
                        </div>

                        <div className="flex items-center space-x-2">
                          <Clock className="h-5 w-5 text-orange-500" />
                          <p className="text-gray-300">
                            <span className="text-white font-semibold">5:00 PM</span> - Kick off
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Where */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-orange-900/30 rounded-full p-3">
                      <MapPin className="h-6 w-6 text-orange-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Where</h3>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <p className="text-orange-400 font-semibold text-lg">Dogpatch Labs</p>
                      <p className="text-gray-300">The CHQ Building, Custom House Quay, North Dock, Dublin 1</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12 space-y-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-bold px-12 py-4 text-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <a
                  href="https://www.eventbrite.ie/e/1408425351139?aff=oddtdtcreator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3"
                >
                  <Ticket className="h-6 w-6" />
                  Reserve Your Spot
                </a>
              </Button>

              <p className="text-gray-400 text-sm">Limited seating available • Free admission • Registration required</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}