"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Shield, Target } from "lucide-react"
import { Navigation } from "@/components/navigation"
import Link from "next/link"
import { useState } from "react"

export default function Home() {
  const [bio, setBio] = useState(
    "Welcome to The RROR, a platform dedicated to exploring Russian heritage, culture, and leadership. Under the guidance of Chairman Izzy, we celebrate the rich history and enduring strength of the Russian Federation. Our mission is to educate, inspire, and unite those who appreciate the profound impact Russia has made on world history and continues to make today.",
  )

  return (
    <main className="min-h-screen bg-background">
      {/* Navigation Component */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 opacity-15">
          <img
            src="/ussr-soviet-propaganda-poster-artwork-with-hammer-.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* Geometric background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary rotate-45 opacity-20" />
          <div className="absolute bottom-40 right-20 w-48 h-48 bg-secondary rotate-12 opacity-10" />
          <div className="absolute top-1/2 left-1/4 w-24 h-24 border-4 border-accent rotate-45" />
          <div className="absolute bottom-20 left-1/3 w-16 h-16 bg-accent opacity-30" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Main Title */}
            <h1 className="text-[12rem] md:text-[16rem] lg:text-[20rem] font-bold leading-none tracking-tighter mb-8 text-balance text-primary">
              THE RROR
            </h1>

            {/* Subtitle with Russian-inspired geometric accent */}
            <div className="relative inline-block mb-12">
              <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-6 h-6 bg-primary" />
              <p className="text-2xl md:text-3xl lg:text-4xl tracking-wide text-muted-foreground uppercase">
                {"Hosted by Chairman Izzy"}
              </p>
              <div className="absolute -right-8 top-1/2 -translate-y-1/2 w-6 h-6 bg-accent" />
            </div>

            <div className="mb-12 max-w-3xl mx-auto">
              <div className="relative">
                <div className="absolute -top-3 -left-3 w-12 h-12 bg-primary" />
                <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-accent" />
                <textarea
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  className="w-full min-h-[220px] p-8 bg-card text-card-foreground border-4 border-foreground text-lg md:text-xl leading-relaxed resize-none focus:outline-none focus:ring-4 focus:ring-primary/50 transition-all font-medium"
                  placeholder="Write your professional bio here..."
                />
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-16">
              <Link href="/about">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground text-xl px-8 py-6 h-auto uppercase tracking-wider group"
                >
                  Enter Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background text-xl px-8 py-6 h-auto uppercase tracking-wider bg-transparent"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom accent bar */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-primary" />
      </section>

      {/* Features Section */}
      <section className="py-24 bg-secondary text-secondary-foreground relative">
        <div className="absolute inset-0 opacity-10">
          <img
            src="/ussr-soviet-industrial-workers-factory-constructiv.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute top-0 left-0 w-full h-2 bg-accent" />

        <div className="container mx-auto px-4">
          <h2 className="text-7xl md:text-8xl lg:text-9xl font-bold text-center mb-20 uppercase tracking-tight">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Feature 1 */}
            <div className="group relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-primary opacity-0 group-hover:opacity-20 transition-opacity" />
              <div className="relative bg-card text-card-foreground p-8 border-4 border-foreground">
                <div className="w-16 h-16 bg-primary flex items-center justify-center mb-6">
                  <Zap className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-4xl font-bold mb-4 uppercase">Power</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Unleash unprecedented strength and capability with our revolutionary system
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-accent opacity-0 group-hover:opacity-20 transition-opacity" />
              <div className="relative bg-card text-card-foreground p-8 border-4 border-foreground">
                <div className="w-16 h-16 bg-accent flex items-center justify-center mb-6">
                  <Shield className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-4xl font-bold mb-4 uppercase">Security</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Protected by the most advanced defense mechanisms available today
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-primary opacity-0 group-hover:opacity-20 transition-opacity" />
              <div className="relative bg-card text-card-foreground p-8 border-4 border-foreground">
                <div className="w-16 h-16 bg-secondary flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-secondary-foreground" />
                </div>
                <h3 className="text-4xl font-bold mb-4 uppercase">Precision</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Achieve your goals with pinpoint accuracy and unwavering focus
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-2 bg-accent" />
      </section>

      {/* Russian Military Heritage Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-primary" />

        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-40 h-40 border-4 border-primary opacity-20 rotate-45" />
          <div className="absolute bottom-20 left-20 w-32 h-32 bg-accent opacity-10" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-7xl md:text-8xl lg:text-9xl font-bold text-center mb-16 uppercase tracking-tight text-primary">
            Military Heritage
          </h2>

          <div className="max-w-5xl mx-auto space-y-12">
            <div className="border-l-8 border-primary pl-8 py-4">
              <h3 className="text-4xl md:text-5xl font-bold mb-4 uppercase">Legendary Strength</h3>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                The Russian military stands as one of the world's most formidable forces, with a proud history spanning
                centuries. From the Red Army's pivotal role in World War II to modern strategic capabilities, Russian
                military power has shaped global history.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-secondary text-secondary-foreground p-8 border-4 border-foreground relative group">
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-primary" />
                <h4 className="text-3xl font-bold mb-4 uppercase">Advanced Arsenal</h4>
                <p className="text-lg leading-relaxed">
                  Equipped with cutting-edge technology including hypersonic missiles, advanced fighter jets, and
                  nuclear capabilities that ensure strategic deterrence and national security.
                </p>
              </div>

              <div className="bg-secondary text-secondary-foreground p-8 border-4 border-foreground relative group">
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-accent" />
                <h4 className="text-3xl font-bold mb-4 uppercase">Elite Forces</h4>
                <p className="text-lg leading-relaxed">
                  Home to legendary special forces units including Spetsnaz, renowned worldwide for their rigorous
                  training, tactical excellence, and unwavering dedication to duty.
                </p>
              </div>
            </div>

            <div className="border-l-8 border-accent pl-8 py-4">
              <h3 className="text-4xl md:text-5xl font-bold mb-4 uppercase">Historical Impact</h3>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                From the Battle of Stalingrad to modern peacekeeping operations, the Russian military has demonstrated
                resilience, strategic brilliance, and an unbreakable spirit that continues to inspire generations.
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-2 bg-accent" />
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="/ussr-soviet-space-program-sputnik-cosmonaut-propag.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-64 h-64 bg-primary opacity-10 rotate-45" />
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-accent opacity-20" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-8xl md:text-9xl lg:text-[10rem] font-bold mb-8 uppercase leading-none text-balance">
              Join The Revolution
            </h2>
            <p className="text-2xl md:text-3xl text-muted-foreground mb-12 uppercase tracking-wide">
              Be Part of Something Greater
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-2xl px-12 py-8 h-auto uppercase tracking-wider group"
              >
                Get Started Today
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
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
