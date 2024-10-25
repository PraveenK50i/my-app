'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface AccordionItemProps {
  title: string
  content: React.ReactNode
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="mb-4">
      <button
        className="flex justify-between items-center w-full p-4 bg-white rounded-lg shadow-md hover:bg-gray-50 transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold">{title}</h3>
        {isOpen ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
      </button>
      {isOpen && (
        <div className="mt-2 p-4 bg-white rounded-lg shadow-md">
          {content}
        </div>
      )}
    </div>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-3xl font-bold">PracXior Aerospace</h1>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <AccordionItem
          title="&#34;Panta Sasikanth&#34;"
          content={
            <div>
              <Image
                src="/placeholder.svg?height=300&width=600"
                alt="Panta Sasikanth"
                width={600}
                height={300}
                className="mb-4 rounded-lg"
              />
              <p>
                Panta Sasikanth is a CEO/Co-Founder of PracXior Aerospace, Andhra Pradesh, India. PracXior
                is a Space Technology & Research Company with zero shot feedback loop for critical domains
                ranging from Material Design, Flight Software. He served as Technology Integrations Engineer
                at Portal Inc. and built cool applications on LLMs & BlockChain. He served as Human
                Space Flight Researcher at Space Aura and did cutting edge research on EVA, ECLSS Design,
                Cryogenic Propulsion for deep space missions to moon & mars. The Advent of Existential Risks
                prompted him to build technology for the present and applications for the future in the areas of
                AI, Propulsion for Space Technology.
              </p>
            </div>
          }
        />

        <AccordionItem
          title="Design Study on Super Conducting Cryogenic Propulsion for Deep Space Mission to Mars"
          content={
            <div>
              <p className="mb-4">
                At PracXior, we conducted experimental studies on cryogenic technology which showcases its
                importance in Interplanetary Missions to Moon & Mars. The specific impulse (Isp) for LOX +
                LCH4, LH2 + LOX undergone static test fire duration for about 315s, 294s and temperature
                ranges from -183°C to -253°C for LOX + LCH4 and nominal thrust of 76.5KN at max
                throttling of gimballed engines mounted on thrust puck and nozzle assembly under Vacuum
                Conditions.
              </p>
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="Cryo Tank stage mounted on umbilicals"
                width={500}
                height={300}
                className="mb-4 rounded-lg"
              />
              <h3 className="text-xl font-bold mb-2">Design Overview</h3>
              <p className="mb-4">
                As superconductors, exhibits zero electrical resistance at low temperatures offer significant
                advantages for efficient electromagnetic thrust generation. However, achieving the ultra-low
                temperatures typically required for superconductivity present logistical challenges for spacecraft.
                Critical issue during any spaceflight is at a certain altitude in space propellant undergoes boil-off
                loss and analyzes various mitigation techniques like multilayer insulation, 3M glass bubbles,
                active cooling systems, and Zero Point Boil Off (ZBO). Furthermore, it highlights the potential
                performance gains of superconducting semi-cryogenic propulsion systems, including significant
                weight reduction and improved efficiency.
              </p>
              <div className="flex justify-between mb-4">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Schematic Overview of Cryogenic Cooling System"
                  width={300}
                  height={200}
                  className="rounded-lg"
                />
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="CAD Model of CE Engine [Vacuum]"
                  width={300}
                  height={200}
                  className="rounded-lg"
                />
              </div>
            </div>
          }
        />

        <AccordionItem
          title="Testing Parameters and Results"
          content={
            <div>
              <div className="flex mb-4">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Testing Parameters"
                  width={300}
                  height={200}
                  className="rounded-lg mr-4"
                />
                <div>
                  <p>
                    This research endeavors to address a critical need for advanced propulsion technologies in
                    facilitating the exploration and eventual colonization of deep space. By focusing on
                    superconducting materials and semicryogenic fuels, it seeks to revolutionize spacecraft
                    propulsion, unlocking new opportunities for ambitious missions to distant celestial bodies.
                  </p>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Testing Conditions & Results</h3>
              <p className="mb-2">Table 1: Operating Temperature & Energy Density of Cryogenic Engine [Medium]</p>
              <p className="mb-4">Table 2: Comparative Metrics [Conventional Vs SSCE]</p>
            </div>
          }
        />

        <AccordionItem
          title="Further Research"
          content={
            <p>
              Critical factors and future research pathways have been outlined, highlighting the necessity of
              addressing technical obstacles, progressing high-temperature superconducting technologies, and
              promoting interdisciplinary cooperation. These efforts are crucial for unlocking the full potential
              of superconducting semi-cryogenic propulsion systems and realizing their transformative impact
              on deep space exploration. In essence, this paper emphasizes the importance of advancing
              propulsion technologies to facilitate ambitious space missions, ranging from interplanetary
              journeys to the future settlement of remote celestial bodies. Through a commitment to
              innovation, collaboration, and a forward-looking perspective, humanity can progress towards
              new horizons of exploration and unravel the enigmas of the universe.
            </p>
          }
        />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>"Compressed to the scale of Quanta and expanded to the scale of Human Consciousness"</p>
      </footer>
    </div>
  )
}