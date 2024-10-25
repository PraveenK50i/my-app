'use client'


import Link from "next/link"
import { Volume2, VolumeX,  } from "lucide-react"
import { useState, useRef } from "react"




export default function Component() {
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      setIsMuted(!videoRef.current.muted)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section id="hero" className="relative">
          <video
            ref={videoRef}
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            loop
            muted={isMuted}
            playsInline
            aria-label="Background video showing our product in action"
          >
            <source src="/videos/rocket.mp4" type="video/mp4" />
            Your browser does not support the video tag. Please upgrade your browser to see this content.
          </video>
          <div className="relative z-10 flex items-center justify-center min-h-screen bg-black/50">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-6xl md:text-8xl lg:text-9xl/none">
                    Welcome to MaceQit
                  </h1>
                  <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl dark:text-gray-400">
                    Discover amazing products and services that will revolutionize your life.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={toggleMute}
            className="absolute bottom-4 right-4 p-2 bg-black/50 rounded-full text-white"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? <VolumeX className="h-6 w-6" /> : <Volume2 className="h-6 w-6" />}
          </button>
        </section>

        <section id="features"></section>
        {/* ... rest of the component remains unchanged ... */}
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Acme Inc. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}



