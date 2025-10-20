import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Users, Globe } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 opacity-15">
          <img
            src="/ussr-soviet-propaganda-poster-artwork-with-hammer-.jpg"
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
              ABOUT US
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground uppercase tracking-wide">
              Discover Our Story and Mission
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-2 bg-primary" />
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-secondary text-secondary-foreground relative">
        <div className="absolute top-0 left-0 w-full h-2 bg-accent" />

        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-12 uppercase tracking-tight">Our Mission</h2>
            <p className="text-2xl md:text-3xl leading-relaxed mb-8">
              The RROR stands as a beacon of strength, unity, and revolutionary thinking. Hosted by Chairman Izzy, we
              embody the spirit of determination and excellence that has defined great movements throughout history.
            </p>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              We are committed to building a community that values power, precision, and unwavering dedication to our
              shared goals. Through innovation and collective strength, we forge a path toward a brighter future.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-2 bg-accent" />
      </section>

      {/* Values Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-primary" />

        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-40 h-40 border-4 border-primary opacity-20 rotate-45" />
          <div className="absolute bottom-20 left-20 w-32 h-32 bg-accent opacity-10" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-center mb-20 uppercase tracking-tight text-primary">
            Our Values
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="group relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-primary opacity-0 group-hover:opacity-20 transition-opacity" />
              <div className="relative bg-card text-card-foreground p-8 border-4 border-foreground">
                <div className="w-16 h-16 bg-primary flex items-center justify-center mb-6">
                  <Star className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-4xl font-bold mb-4 uppercase">Excellence</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We strive for nothing less than perfection in everything we do, pushing boundaries and setting new
                  standards.
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-accent opacity-0 group-hover:opacity-20 transition-opacity" />
              <div className="relative bg-card text-card-foreground p-8 border-4 border-foreground">
                <div className="w-16 h-16 bg-accent flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-4xl font-bold mb-4 uppercase">Unity</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Together we are stronger. Our collective power drives us forward toward our shared vision.
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-primary opacity-0 group-hover:opacity-20 transition-opacity" />
              <div className="relative bg-card text-card-foreground p-8 border-4 border-foreground">
                <div className="w-16 h-16 bg-secondary flex items-center justify-center mb-6">
                  <Globe className="h-8 w-8 text-secondary-foreground" />
                </div>
                <h3 className="text-4xl font-bold mb-4 uppercase">Impact</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We create lasting change that resonates across communities and inspires future generations.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-2 bg-accent" />
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-secondary text-secondary-foreground relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 uppercase leading-none text-balance">
              Ready to Join?
            </h2>
            <p className="text-xl md:text-2xl mb-12 uppercase tracking-wide">Become Part of the Movement</p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-2xl px-12 py-8 h-auto uppercase tracking-wider group"
              >
                Contact Us
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background py-12 border-t-4 border-primary">
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
