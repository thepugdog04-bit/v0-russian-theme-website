"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Mail, MapPin } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 opacity-15">
          <img
            src="/ussr-soviet-space-program-sputnik-cosmonaut-propag.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary rotate-45 opacity-20" />
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-accent rotate-12 opacity-10" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-bold leading-none tracking-tighter mb-8 text-balance text-primary">
              CONTACT
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground uppercase tracking-wide">Get in Touch With Us</p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-2 bg-primary" />
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-accent" />

        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-5xl md:text-6xl font-bold mb-8 uppercase text-primary">Reach Out</h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Have questions or want to join the revolution? We're here to help. Send us a message and we'll get
                  back to you as soon as possible.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-secondary text-secondary-foreground border-4 border-foreground">
                  <div className="w-12 h-12 bg-primary flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold uppercase mb-2">Email</h3>
                    <p className="text-lg">thepugdog04@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-secondary text-secondary-foreground border-4 border-foreground">
                  <div className="w-12 h-12 bg-primary flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold uppercase mb-2">Location</h3>
                    <p className="text-lg">Krasnodar, Russia</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-secondary text-secondary-foreground p-8 border-4 border-foreground relative">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xl font-bold uppercase mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-background text-foreground border-2 border-foreground focus:border-primary focus:outline-none text-lg"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xl font-bold uppercase mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-background text-foreground border-2 border-foreground focus:border-primary focus:outline-none text-lg"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xl font-bold uppercase mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full px-4 py-3 bg-background text-foreground border-2 border-foreground focus:border-primary focus:outline-none text-lg resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-xl py-6 h-auto uppercase tracking-wider"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-2 bg-accent" />
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12 border-t-4 border-primary">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-4xl font-bold uppercase">The RROR</div>
            <div className="text-lg uppercase tracking-wider">© 2025 All Rights Reserved</div>
          </div>
        </div>
      </footer>
    </main>
  )
}
