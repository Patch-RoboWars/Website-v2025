"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-3">
            <Image src="/robowars-logo.png" alt="RoboWars Logo" width={40} height={40} className="object-contain" />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-500">
              PATCH ROBOWARS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/#about" className="text-gray-300 hover:text-white transition-colors">
              About
            </Link>
            <Link href="/#robowars-2025" className="text-gray-300 hover:text-white transition-colors">
              RoboWars 2025
            </Link>
            <Link href="/join-committee" className="text-gray-300 hover:text-white transition-colors">
              Join Committee
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-300 hover:text-white" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 border-b border-gray-800">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link href="/#about" className="text-gray-300 hover:text-white transition-colors py-2" onClick={toggleMenu}>
              About
            </Link>
            <Link
              href="/#robowars-2025"
              className="text-gray-300 hover:text-white transition-colors py-2"
              onClick={toggleMenu}
            >
              RoboWars 2025
            </Link>
            <Link
              href="/join-committee"
              className="text-gray-300 hover:text-white transition-colors py-2"
              onClick={toggleMenu}
            >
              Join Committee
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
