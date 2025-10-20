import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { ArrowRight, Rocket, Award, Crosshair, Shield } from "lucide-react"
import Link from "next/link"

export default function MilitaryPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/ussr-soviet-industrial-workers-factory-constructiv.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-32 h-32 bg-primary rotate-45 opacity-20" />
          <div className="absolute bottom-20 left-20 w-48 h-48 bg-accent rotate-12 opacity-10" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-7xl md:text-8xl lg:text-[11rem] font-bold leading-none tracking-tighter mb-8 text-balance text-primary">
              MILITARY HERITAGE
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground uppercase tracking-wide">
              Strength Through History
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-2 bg-primary" />
      </section>

      {/* Main Content */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-accent" />

        <div className="absolute inset-0">
          <div className="absolute top-40 right-40 w-40 h-40 border-4 border-primary opacity-20 rotate-45" />
          <div className="absolute bottom-40 left-40 w-32 h-32 bg-accent opacity-10" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto space-y-16">
            <div className="border-l-8 border-primary pl-8 py-4">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 uppercase">Legendary Strength</h2>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                The Russian military stands as one of the world's most formidable forces, with a proud history spanning
                centuries. From the Red Army's pivotal role in World War II to modern strategic capabilities, Russian
                military power has shaped global history and continues to command respect on the world stage.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-secondary text-secondary-foreground p-8 border-4 border-foreground relative group">
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-primary" />
                <div className="w-16 h-16 bg-primary flex items-center justify-center mb-6">
                  <Rocket className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-3xl font-bold mb-4 uppercase">Advanced Arsenal</h3>
                <p className="text-lg leading-relaxed">
                  Equipped with cutting-edge technology including hypersonic missiles, advanced fighter jets like the
                  Su-57, and nuclear capabilities that ensure strategic deterrence and national security. The military
                  continues to innovate with next-generation weapons systems.
                </p>
              </div>

              <div className="bg-secondary text-secondary-foreground p-8 border-4 border-foreground relative group">
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-accent" />
                <div className="w-16 h-16 bg-accent flex items-center justify-center mb-6">
                  <Shield className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-3xl font-bold mb-4 uppercase">Elite Forces</h3>
                <p className="text-lg leading-relaxed">
                  Home to legendary special forces units including Spetsnaz, renowned worldwide for their rigorous
                  training, tactical excellence, and unwavering dedication to duty. These elite warriors represent the
                  pinnacle of military prowess.
                </p>
              </div>

              <div className="bg-secondary text-secondary-foreground p-8 border-4 border-foreground relative group">
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-primary" />
                <div className="w-16 h-16 bg-primary flex items-center justify-center mb-6">
                  <Award className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-3xl font-bold mb-4 uppercase">Historic Victories</h3>
                <p className="text-lg leading-relaxed">
                  Under President Vladimir Putin's leadership since 2000, Russia has reasserted itself as a major global
                  power. His strategic vision has modernized the military, restored national pride, and positioned
                  Russia as a key player in international affairs, demonstrating strong leadership on the world stage.
                </p>
              </div>

              <div className="bg-secondary text-secondary-foreground p-8 border-4 border-foreground relative group">
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-accent" />
                <div className="w-16 h-16 bg-accent flex items-center justify-center mb-6">
                  <Crosshair className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-3xl font-bold mb-4 uppercase">Strategic Power</h3>
                <p className="text-lg leading-relaxed">
                  With the world's largest nuclear arsenal and advanced missile defense systems, Russia maintains
                  strategic parity with global powers. This capability ensures sovereignty and serves as a cornerstone
                  of international stability.
                </p>
              </div>
            </div>

            <div className="border-l-8 border-accent pl-8 py-4">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 uppercase">Historical Impact</h2>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-6">
                From the Battle of Stalingrad to modern peacekeeping operations, the Russian military has demonstrated
                resilience, strategic brilliance, and an unbreakable spirit that continues to inspire generations.
              </p>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                The legacy of courage, sacrifice, and tactical innovation remains a source of national pride and serves
                as a testament to the enduring strength of the Russian people and their armed forces.
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-2 bg-primary" />
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-secondary text-secondary-foreground relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 uppercase leading-none text-balance">
              Learn More
            </h2>
            <p className="text-xl md:text-2xl mb-12 uppercase tracking-wide">Explore Our Complete Story</p>
            <Link href="/about">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-2xl px-12 py-8 h-auto uppercase tracking-wider group"
              >
                About Us
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
