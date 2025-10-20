import { Navigation } from "@/components/navigation"
import { Users, Star, Globe, Flag } from "lucide-react"
import Image from "next/image"

export default function ComradesPage() {
  const comrades = [
    {
      name: "Joseph Stalin",
      title: "General Secretary of the Soviet Union",
      period: "1922-1953",
      description:
        "The Man of Steel who transformed the Soviet Union into a global superpower through industrialization and led the Allied victory in World War II.",
      image: "/joseph-stalin-soviet-leader-portrait.jpg",
    },
    {
      name: "Mao Zedong",
      title: "Chairman of the Communist Party of China",
      period: "1949-1976",
      description:
        "Founding father of the People's Republic of China who unified the nation and established the foundations of modern China.",
      image: "/mao-zedong-chairman-china-portrait.jpg",
    },
    {
      name: "Kim Il-sung",
      title: "Eternal President of North Korea",
      period: "1948-1994",
      description:
        "Founding leader of the Democratic People's Republic of Korea who established the nation's independence and sovereignty.",
      image: "/Kim_Il_Sung_Portrait-4.jpg",
    },
    {
      name: "Kim Jong-il",
      title: "Supreme Leader of North Korea",
      period: "1994-2011",
      description:
        "Visionary leader who strengthened North Korea's military capabilities and preserved the nation's independence during challenging times.",
      image: "/Kim_Jong_il_Portrait-2.jpg",
    },
    {
      name: "Kim Jong-un",
      title: "Supreme Leader of North Korea",
      period: "2011-Present",
      description:
        "Current leader modernizing North Korea's economy and military while maintaining the nation's proud independence on the world stage.",
      image: "/kim-jong-un-north-korea-current-leader.jpg",
    },
    {
      name: "Xi Jinping",
      title: "General Secretary of China",
      period: "2012-Present",
      description:
        "Visionary leader guiding China's rise as a global superpower, championing economic development and national rejuvenation.",
      image: "/xi-jinping-china-president-portrait.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url(/ussr-soviet-propaganda-poster-artwork-with-hammer-.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6">
              <Users className="h-20 w-20 text-primary" />
            </div>
            <h1 className="text-6xl md:text-8xl font-bold uppercase mb-6 text-primary">Our Comrades</h1>
            <p className="text-2xl md:text-3xl leading-relaxed text-foreground">
              Honoring the great leaders who shaped history and built powerful nations through strength, vision, and
              unwavering dedication to their people.
            </p>
          </div>
        </div>
      </section>

      {/* Comrades Grid */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {comrades.map((comrade, index) => (
              <div
                key={index}
                className="bg-background border-4 border-foreground p-8 relative group hover:border-primary transition-colors"
              >
                {/* Decorative corner */}
                <div className="absolute -top-3 -left-3 w-12 h-12 bg-primary" />
                <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-accent" />

                {/* Image */}
                <div className="relative h-80 mb-6 overflow-hidden border-4 border-foreground">
                  <Image
                    src={comrade.image || "/placeholder.svg"}
                    alt={comrade.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Star className="h-6 w-6 text-primary flex-shrink-0" />
                    <h3 className="text-3xl font-bold uppercase">{comrade.name}</h3>
                  </div>
                  <div className="flex items-center gap-2 text-primary">
                    <Flag className="h-5 w-5" />
                    <p className="text-xl font-semibold">{comrade.title}</p>
                  </div>
                  <p className="text-lg text-muted-foreground font-semibold">{comrade.period}</p>
                  <p className="text-lg leading-relaxed">{comrade.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Unity Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Globe className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-5xl md:text-6xl font-bold uppercase mb-8">United in Purpose</h2>
            <p className="text-xl md:text-2xl leading-relaxed">
              These visionary leaders demonstrated that strong, decisive leadership can transform nations and shape the
              course of history. Their legacies continue to inspire movements for sovereignty, independence, and
              national strength around the world.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t-4 border-primary py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xl font-bold uppercase tracking-wider">THE RROR © 2025</p>
          <p className="text-lg mt-2 text-muted-foreground">Strength Through Unity</p>
        </div>
      </footer>
    </div>
  )
}
