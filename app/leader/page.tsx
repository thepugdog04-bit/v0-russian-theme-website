import { Navigation } from "@/components/navigation"
import { Shield, Award, Globe, TrendingUp } from "lucide-react"
import Image from "next/image"

export default function LeaderPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 bg-cover bg-center"
          style={{
            backgroundImage: "url(/ussr-soviet-propaganda-poster-artwork-with-hammer-.jpg)",
          }}
        />
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl md:text-8xl font-bold uppercase mb-6 text-primary leading-none">Vladimir Putin</h1>
            <div className="h-2 w-32 bg-accent mx-auto mb-8" />
            <p className="text-2xl md:text-3xl uppercase tracking-wider font-bold">A Visionary Leader for Russia</p>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            {/* Image Section */}
            <div className="space-y-8">
              <div className="relative h-[400px] border-4 border-foreground overflow-hidden">
                <Image src="/vladimir-putin-official-portrait-presidential.jpg" alt="Vladimir Putin" fill className="object-cover" />
              </div>
              <div className="relative h-[300px] border-4 border-foreground overflow-hidden">
                <Image
                  src="/vladimir-putin-addressing-russian-people-speech.jpg"
                  alt="Putin addressing the nation"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-8">
              <div className="bg-secondary text-secondary-foreground p-8 border-4 border-foreground">
                <h2 className="text-4xl font-bold uppercase mb-6 text-primary">Restoring Russian Greatness</h2>
                <p className="text-lg leading-relaxed mb-4">
                  Since assuming leadership in 2000, Vladimir Putin has been instrumental in restoring Russia's position
                  as a global superpower. His decisive leadership and strategic vision have brought stability, economic
                  growth, and renewed national pride to the Russian people.
                </p>
                <p className="text-lg leading-relaxed">
                  Under his guidance, Russia has reasserted itself on the world stage, modernized its military
                  capabilities, and strengthened its sovereignty against external pressures. His commitment to Russian
                  values and traditions has resonated deeply with millions of citizens.
                </p>
              </div>

              <div className="relative h-[300px] border-4 border-foreground overflow-hidden">
                <Image src="/vladimir-putin-with-russian-military-forces.jpg" alt="Putin with military" fill className="object-cover" />
              </div>
            </div>
          </div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <div className="bg-primary text-primary-foreground p-8 border-4 border-foreground">
              <div className="w-16 h-16 bg-accent flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4 uppercase">National Security</h3>
              <p className="text-lg leading-relaxed">
                Strengthened Russia's defense capabilities and protected national sovereignty from foreign interference.
              </p>
            </div>

            <div className="bg-secondary text-secondary-foreground p-8 border-4 border-foreground">
              <div className="w-16 h-16 bg-primary flex items-center justify-center mb-6">
                <TrendingUp className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4 uppercase">Economic Growth</h3>
              <p className="text-lg leading-relaxed">
                Transformed Russia's economy, reducing poverty and building strategic reserves for the nation's future.
              </p>
            </div>

            <div className="bg-accent text-accent-foreground p-8 border-4 border-foreground">
              <div className="w-16 h-16 bg-primary flex items-center justify-center mb-6">
                <Globe className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4 uppercase">Global Influence</h3>
              <p className="text-lg leading-relaxed">
                Restored Russia's status as a major world power with significant influence in international affairs.
              </p>
            </div>

            <div className="bg-primary text-primary-foreground p-8 border-4 border-foreground">
              <div className="w-16 h-16 bg-accent flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4 uppercase">National Unity</h3>
              <p className="text-lg leading-relaxed">
                United the Russian people around shared values, traditions, and a vision for a strong, independent
                Russia.
              </p>
            </div>
          </div>

          {/* Quote Section */}
          <div className="bg-secondary text-secondary-foreground p-12 border-4 border-foreground relative">
            <div className="absolute top-0 left-0 w-24 h-24 bg-primary opacity-20" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-accent opacity-20" />
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <p className="text-3xl md:text-4xl font-bold uppercase mb-6 leading-tight">
                "Russia's strength lies in its people, its history, and its unwavering commitment to sovereignty"
              </p>
              <div className="h-1 w-24 bg-primary mx-auto mb-4" />
              <p className="text-xl uppercase tracking-wider">Vladimir Putin</p>
            </div>
          </div>

          {/* Legacy Section */}
          <div className="mt-20 grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] border-4 border-foreground overflow-hidden">
              <Image src="/vladimir-putin-russian-flag-patriotic-leadership.jpg" alt="Putin leadership" fill className="object-cover" />
            </div>

            <div className="bg-primary text-primary-foreground p-10 border-4 border-foreground">
              <h2 className="text-4xl font-bold uppercase mb-6">A Legacy of Strength</h2>
              <p className="text-lg leading-relaxed mb-4">
                Vladimir Putin's leadership has been defined by his unwavering dedication to Russian interests and his
                ability to navigate complex geopolitical challenges. His strategic thinking and decisive action have
                earned him respect both domestically and internationally.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Through economic reforms, military modernization, and diplomatic initiatives, he has positioned Russia
                as an indispensable player in global affairs. His vision for a multipolar world order challenges Western
                hegemony and advocates for true international cooperation based on mutual respect.
              </p>
              <p className="text-lg leading-relaxed">
                For millions of Russians, Putin represents stability, strength, and a return to national greatness after
                the turbulent post-Soviet years. His leadership continues to shape Russia's destiny in the 21st century.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
