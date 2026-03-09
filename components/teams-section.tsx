"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { X, ChevronLeft, ChevronRight, Wrench, Zap, Shield, Users } from "lucide-react"

interface TeamMember {
  name: string
}

interface TeamPhoto {
  url: string
  caption: string
}

interface Team {
  id: number
  name: string
  description: string
  weapon: string
  armor: string
  specialFeature: string
  members: TeamMember[]
  mainImage: string
  photos: TeamPhoto[]
}

const teams: Team[] = [
  {
    id: 1,
    name: "The K9 Unit",
    description: "A devastating vertical spinner bot with incredible weapon speed and solid aluminium armour. Built for aggressive attacks and quick knockouts.",
    weapon: "2800 RPM vertical spinner with 7.6Nm torque. Weapon tip speed: 120km/h",
    armor: "3mm aluminium armour plating",
    specialFeature: "Custom 3D printed weapon teeth designed for maximum impact",
    members: [
      { name: "Joshua Carrig" },
      { name: "Shane O'Donnell" },
      { name: "Ben Cullen" },
      { name: "Kitty Beattie" },
      { name: "Jake Casserly" },
      { name: "Ashling McCarthy" },
    ],
    mainImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/_DSC9918-mjVX7GK0tuTDmtEw7DErcwXAljIk8j.jpg",
    photos: [
      { url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/_DSC9918-mjVX7GK0tuTDmtEw7DErcwXAljIk8j.jpg", caption: "Bot in the arena" },
      { url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/_DSC9698-x53WanELuxIogRbfNftLXWWlgOpoXB.jpg", caption: "Build session" },
      { url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/_DSC9635-mZOo8tYz62uGV3Cu7Ed4KbNP1IJv47.jpg", caption: "Testing electronics" },
      { url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/_DSC9707-OVcoEhoWfLdnYqN4GAbbqljfO4wsH4.jpg", caption: "Wiring the bot" },
      { url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9136.JPG-BnOuL4doAuTCjZuY4mu89j29YQ0Ph2.jpeg", caption: "Planning session" },
    ],
  },
  {
    id: 2,
    name: "(for) Flip's Sake",
    description: "A powerful pneumatic flipper designed to launch opponents out of the arena. Combines precision engineering with raw lifting power.",
    weapon: "Pneumatic flipper weapon running at 120 PSI",
    armor: "Reinforced steel chassis with low profile design",
    specialFeature: "Quick-refill pneumatic system for multiple flips per match",
    members: [
      { name: "Joe Biju" },
      { name: "Ray Foysal" },
      { name: "Ugochukwu Uzoukwu" },
      { name: "Alan Jose" },
    ],
    mainImage: "",
    photos: [],
  },
  {
    id: 3,
    name: "Duck-heed Martin",
    description: "A high-speed horizontal spinner with a unique rubber duck themed aesthetic. Don't let the looks fool you - this bot is all business.",
    weapon: "10,000 RPM 116mm blade",
    armor: "3mm steel frame with carbon fiber shell. Rubber duck armour for style",
    specialFeature: "Invertible design - works right-side up or upside down",
    members: [
      { name: "Aadya Vig" },
      { name: "Patryk Cwik" },
      { name: "Leah McGrath" },
      { name: "Juno Keaney Lonergan" },
      { name: "Keith Egan" },
    ],
    mainImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/_DSC0034-skG9o5uElZaPkOnXyrB3t30m7ZPHE1.jpg",
    photos: [
      { url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/_DSC0034-skG9o5uElZaPkOnXyrB3t30m7ZPHE1.jpg", caption: "Duck-heed Martin with controller" },
      { url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/_DSC9947-j2bJC2NviYhnrn6z2dKjYhlhOETvMm.jpg", caption: "Battle against K9 Unit" },
      { url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/_DSC9904-8UUfR6XS85Xoo2ooTWsA9UP5gGzJA4.jpg", caption: "The ducks in the arena" },
      { url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/_DSC9817-0WRPEf91iUVckfwoDHlUtWJLya6LlY.jpg", caption: "Adding rubber ducks to the bot" },
      { url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/_DSC0038-dtYGRSnC9OhQvnFF1ox0wnmlL2NKf1.jpg", caption: "Retrieving the bot from arena" },
      { url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/_DSC9522-hwyZDQ4hClarjg7zUmiwqKku8hCr5n.jpg", caption: "Team repairing the bot" },
      { url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/_DSC0194-zbNlaRINpTk8SA0YNn6iOXRLSsorXw.jpg", caption: "Group photo with all teams" },
    ],
  },
  {
    id: 4,
    name: "Sawshank Redemption't",
    description: "An unconventional chainsaw-wielding robot with omnidirectional movement. Designed to outmaneuver opponents and deliver sustained damage.",
    weapon: "48V Einhell chainsaw weapon",
    armor: "Steel frame with bright red HDPE armor panels",
    specialFeature: "Mecanum wheels for omnidirectional movement",
    members: [
      { name: "Kamya" },
      { name: "Rosheen" },
      { name: "Daniel" },
      { name: "Kaisin" },
    ],
    mainImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/_DSC9992-jJQk0xwBKCcFLthhM3GnbOeeEf0F38.jpg",
    photos: [
      { url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/_DSC9992-jJQk0xwBKCcFLthhM3GnbOeeEf0F38.jpg", caption: "Chainsaw bot with mecanum wheels" },
      { url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PXL_20250706_151349891-9kYTVGbSEFRrjyJhTzY92l87s8VAec.jpg", caption: "The finished bot with team names" },
      { url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/_DSC9888-YZGvtSa5T3ekT9vwn7B3FC3tK5LwCQ.jpg", caption: "Bot ready for battle" },
      { url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/_DSC9895-MsmoY8tPxF8n6tAW1WgL6ZJK08aZKo.jpg", caption: "Placing the bot in the arena" },
      { url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/_DSC0211-rBqrXtNTXtaq6yWnWiFb4KPViozFEG.jpg", caption: "Team photo with all bots" },
      { url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1263.PNG-06rvAnrHv3eGL6SOSkhhSnvFsXnoA5.jpeg", caption: "Internal electronics and mecanum wheels" },
      { url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PXL_20250624_202030167-L3NWpJyKiYEkezgv723bW2XUvwGRBs.jpg", caption: "Wiring session" },
    ],
  },
  {
    id: 5,
    name: "Krusty Crew",
    description: "A reliable drum spinner with a welded steel frame. Built for durability and consistent weapon performance throughout multiple battles.",
    weapon: "2200KV drone motor powered weapon",
    armor: "Welded frame with 3mm aluminium composite armour",
    specialFeature: "Modular design allows for quick repairs between matches",
    members: [
      { name: "Ruairi Mullally" },
      { name: "Enda Benson" },
      { name: "Dale Johnston" },
      { name: "Cleavon Castelino" },
      { name: "Sean Ruane" },
      { name: "Salifya Mtambo" },
    ],
    mainImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/_DSC0222-beNXyCHSROEMo4tnqjVoZfYGGoDO8f.jpg",
    photos: [
      { url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/_DSC0222-beNXyCHSROEMo4tnqjVoZfYGGoDO8f.jpg", caption: "Team photo with the bot" },
      { url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/_DSC9554-x9urmyv1BkI5PBHp9I8MrGOD2vnzKV.jpg", caption: "Soldering electronics" },
      { url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/_DSC9527-C84G39CKcixvuf8ZyqDJMnEnAo4GAJ.jpg", caption: "Working on the PCB" },
      { url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/_DSC9691-PN8ZHNzY1xucZg5LEGCMdtAtCHcM2q.jpg", caption: "Team discussion" },
      { url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8844.JPG-6DOdi4Y0P7jrgNeh24uM4jmfU5DxWu.jpeg", caption: "Build workstation" },
    ],
  },
]

export function TeamsSection() {
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null)
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)

  const openTeamModal = (team: Team) => {
    setSelectedTeam(team)
    setCurrentPhotoIndex(0)
  }

  const closeModal = () => {
    setSelectedTeam(null)
    setCurrentPhotoIndex(0)
  }

  const nextPhoto = () => {
    if (selectedTeam && selectedTeam.photos.length > 0) {
      setCurrentPhotoIndex((prev) => (prev + 1) % selectedTeam.photos.length)
    }
  }

  const prevPhoto = () => {
    if (selectedTeam && selectedTeam.photos.length > 0) {
      setCurrentPhotoIndex((prev) => (prev - 1 + selectedTeam.photos.length) % selectedTeam.photos.length)
    }
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {teams.map((team) => (
          <div
            key={team.id}
            className="group bg-black/60 rounded-xl border border-orange-900/30 overflow-hidden hover:border-orange-500/50 transition-all duration-300"
          >
            <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center overflow-hidden">
              {team.mainImage ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={team.mainImage}
                  alt={`${team.name} battlebot`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <div className="text-6xl font-black text-orange-500/20 group-hover:text-orange-500/40 transition-colors">
                  {team.id}
                </div>
              )}
            </div>
            <div className="p-4 space-y-3">
              <h3 className="font-bold text-white text-lg">{team.name}</h3>
              <p className="text-gray-400 text-sm line-clamp-2">{team.weapon}</p>
              {team.members.length > 0 && (
                <p className="text-gray-500 text-xs">
                  {team.members.map((m) => m.name.split(" ")[0]).join(", ")}
                </p>
              )}
              <Button
                variant="outline"
                size="sm"
                className="w-full border-orange-500/50 text-orange-400 hover:bg-orange-500/10"
                onClick={() => openTeamModal(team)}
              >
                Preview
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Team Detail Modal */}
      <Dialog open={!!selectedTeam} onOpenChange={(open) => !open && closeModal()}>
        <DialogContent className="max-w-4xl bg-gray-900 border-orange-900/30 text-white p-0 overflow-hidden">
          <button
            onClick={closeModal}
            className="absolute right-4 top-4 z-50 rounded-full bg-black/50 p-2 hover:bg-black/70 transition-colors"
          >
            <X className="h-5 w-5 text-white" />
          </button>

          {selectedTeam && (
            <div className="flex flex-col md:flex-row">
              {/* Photo Gallery */}
              <div className="md:w-1/2 bg-black relative">
                {selectedTeam.photos.length > 0 ? (
                  <>
                    <div className="aspect-square relative overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={selectedTeam.photos[currentPhotoIndex].url}
                        alt={selectedTeam.photos[currentPhotoIndex].caption}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                        <p className="text-white text-sm">{selectedTeam.photos[currentPhotoIndex].caption}</p>
                      </div>
                    </div>

                    {/* Photo Navigation */}
                    {selectedTeam.photos.length > 1 && (
                      <>
                        <button
                          onClick={prevPhoto}
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors"
                        >
                          <ChevronLeft className="h-6 w-6 text-white" />
                        </button>
                        <button
                          onClick={nextPhoto}
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors"
                        >
                          <ChevronRight className="h-6 w-6 text-white" />
                        </button>

                        {/* Photo Indicators */}
                        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2">
                          {selectedTeam.photos.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentPhotoIndex(index)}
                              className={`w-2 h-2 rounded-full transition-colors ${
                                index === currentPhotoIndex ? "bg-orange-500" : "bg-white/50"
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  <div className="aspect-square flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                    <div className="text-8xl font-black text-orange-500/20">{selectedTeam.id}</div>
                  </div>
                )}
              </div>

              {/* Team Details */}
              <div className="md:w-1/2 p-6 space-y-6 overflow-y-auto max-h-[80vh]">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-white">{selectedTeam.name}</DialogTitle>
                </DialogHeader>

                <p className="text-gray-300">{selectedTeam.description}</p>

                <div className="space-y-4">
                  {/* Weapon */}
                  <div className="flex items-start gap-3">
                    <div className="bg-orange-900/30 rounded-full p-2 flex-shrink-0">
                      <Zap className="h-5 w-5 text-orange-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Weapon</h4>
                      <p className="text-gray-400 text-sm">{selectedTeam.weapon}</p>
                    </div>
                  </div>

                  {/* Armor */}
                  <div className="flex items-start gap-3">
                    <div className="bg-orange-900/30 rounded-full p-2 flex-shrink-0">
                      <Shield className="h-5 w-5 text-orange-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Armor</h4>
                      <p className="text-gray-400 text-sm">{selectedTeam.armor}</p>
                    </div>
                  </div>

                  {/* Special Feature */}
                  <div className="flex items-start gap-3">
                    <div className="bg-orange-900/30 rounded-full p-2 flex-shrink-0">
                      <Wrench className="h-5 w-5 text-orange-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Special Feature</h4>
                      <p className="text-gray-400 text-sm">{selectedTeam.specialFeature}</p>
                    </div>
                  </div>

                  {/* Team Members */}
                  {selectedTeam.members.length > 0 && (
                    <div className="flex items-start gap-3">
                      <div className="bg-orange-900/30 rounded-full p-2 flex-shrink-0">
                        <Users className="h-5 w-5 text-orange-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Team Members</h4>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {selectedTeam.members.map((member, index) => (
                            <span
                              key={index}
                              className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm"
                            >
                              {member.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
