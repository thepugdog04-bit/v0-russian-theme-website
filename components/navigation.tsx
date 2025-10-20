"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b-4 border-primary">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="text-3xl md:text-4xl font-bold uppercase text-primary hover:opacity-80 transition-opacity"
          >
            THE RROR
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-lg uppercase tracking-wider hover:text-primary transition-colors font-semibold"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-lg uppercase tracking-wider hover:text-primary transition-colors font-semibold"
            >
              About
            </Link>
            <Link
              href="/military"
              className="text-lg uppercase tracking-wider hover:text-primary transition-colors font-semibold"
            >
              Military
            </Link>
            <Link
              href="/contact"
              className="text-lg uppercase tracking-wider hover:text-primary transition-colors font-semibold"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t-2 border-primary">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-xl uppercase tracking-wider hover:text-primary transition-colors font-semibold py-2"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-xl uppercase tracking-wider hover:text-primary transition-colors font-semibold py-2"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/military"
                className="text-xl uppercase tracking-wider hover:text-primary transition-colors font-semibold py-2"
                onClick={() => setIsOpen(false)}
              >
                Military
              </Link>
              <Link
                href="/contact"
                className="text-xl uppercase tracking-wider hover:text-primary transition-colors font-semibold py-2"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
