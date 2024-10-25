"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
]

export default function GlossyNavbar() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isOpen, setIsOpen] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={cn(
      "sticky p-3 top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
      isScrolled
        ? "top-4 mt-4 mx-4 p-1 bg-white text-black rounded-lg shadow-lg backdrop-blur-md backdrop-filter"
        : "bg-black text-white backdrop-blur-md backdrop-filter"
    )}>
      <nav className={cn(
        "container mx-auto flex items-center justify-between",
        isScrolled ? "py-2 px-6" : "py-3 px-4"
      )}>
        <div className="flex-none">
          <Link href="/" className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-amber-600" aria-label="Home">
            MaceQit Space
          </Link>
        </div>
        <div className="hidden lg:flex justify-center flex-1">
          <ul className="flex space-x-1">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={cn(
                    "text-md font-medium px-6 py-1 rounded-md transition-all duration-200",
                    pathname === item.href
                      ? "bg-white/60 text-black" // Active link style
                      : "text-white hover:text-black", // Default link style with hover text color change
                    isScrolled ? "hover:bg-black hover:text-white bg-white/50 text-black" : "hover:bg-white " // Background changes based on scroll
                  )}
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  {item.name}
                </Link>

              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-start ml-10">
          <Button asChild variant={isScrolled ? "outline" : "default"} size="sm" className="rounded-lg">
            <Link href="https://linktr.ee/panta_sasikanth">
              CONNECT <span aria-hidden="true" className="ml-1">&rarr;</span>
            </Link>
          </Button>
        </div>
        <div className="flex lg:hidden ml-2">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open main menu" className={isScrolled ? "text-gray-900" : "text-white"}>
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] sm:w-[300px]">
              <SheetHeader>
                <SheetTitle>MaceQit</SheetTitle>
                <SheetDescription>Space Technology & Research Company</SheetDescription>
              </SheetHeader>
              <div className="mt-6 flex flex-col space-y-3">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "text-sm font-medium text-gray-900",
                      "hover:bg-gray-100 rounded-lg px-3 py-2 transition-colors duration-200",
                      pathname === item.href && "bg-gray-200"
                    )}
                    onClick={() => setIsOpen(false)}
                    aria-current={pathname === item.href ? "page" : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button asChild variant="outline" size="sm" className="mt-4 rounded-full">
                  <Link href="https://linktr.ee/panta_sasikanth" onClick={() => setIsOpen(false)}>
                    CONNECT
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}