import { Calendar, Info, Ticket } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="space-y-6">
            <div className="inline-block p-2 bg-orange-900/20 rounded-lg">
              <Info className="h-6 w-6 text-orange-500" />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white">What is Patch RoboWars?</h2>
            <div className="w-20 h-1 bg-orange-600" />

            <p className="max-w-3xl text-gray-300 text-lg leading-relaxed">
              Patch RoboWars is a student-run battlebot competition where anyone from any background can participate.
              Each team receives a transmitter/receiver set, funding to build their robot, dedicated workspace, and
              access to 3D printers. Participants design and build their own remote-controlled machines to fight and
              disable opponents in a thrilling display of strategy, engineering, and combat.
            </p>
          </div>

          {/* Participant Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
            <div className="bg-black/40 rounded-xl p-6 flex items-start space-x-4 border border-orange-900/20">
              <div className="bg-orange-900/30 rounded-full p-3 flex-shrink-0">
                <Calendar className="h-6 w-6 text-orange-500" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-white">Weekly Build Sessions</h3>
                <p className="text-gray-300">
                  Regular workshops at Dogpatch Labs with access to tools, 3D printers, and expert guidance.
                </p>
              </div>
            </div>

            <div className="bg-black/40 rounded-xl p-6 flex items-start space-x-4 border border-orange-900/20">
              <div className="bg-orange-900/30 rounded-full p-3 flex-shrink-0">
                <Ticket className="h-6 w-6 text-orange-500" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-white">Everything Provided</h3>
                <p className="text-gray-300">
                  Transmitter, receiver, batteries, funding, and workspace - just bring your creativity!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}