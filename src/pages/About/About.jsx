import Skills from "./Skills"
import { ArrowDownRight, Compass, ShieldAlert, Cpu } from "lucide-react"

function About() {
  const stats = [
    { label: "ACADEMIC GPA", value: "9.2 / 10" },
    { label: "PROJECTS BUILT", value: "20+" },
    { label: "YEARS EXP.", value: "2+ Years" }
  ];

  const pillars = [
    {
      icon: <Cpu className="w-5 h-5 text-sky-400" />,
      title: "Clean Architecture",
      desc: "Structuring clean, scalable React applications with reusable component structures."
    },
    {
      icon: <Compass className="w-5 h-5 text-yellow-500" />,
      title: "User-Centric Design",
      desc: "Crafting modern layouts, micro-interactions, and animations that optimize user retention."
    },
    {
      icon: <ShieldAlert className="w-5 h-5 text-rose-500" />,
      title: "Robust Performance",
      desc: "Optimizing code bundles, assets, and styling for lightning-fast responsiveness."
    }
  ];

  return (
    <section id="about" className="relative py-24 md:py-32 border-b border-border/20 overflow-hidden">
      <div className="max-w-[105rem] w-full mx-auto px-6 md:px-12">
        
        {/* Tagline & Headers */}
        <div className="flex flex-col gap-4 mb-16 md:mb-24">
          <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] text-primary uppercase">
            WHAT I DO
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-none max-w-4xl text-shiny">
            Crafting responsive interfaces. Engineering robust full-stack applications.
          </h2>
        </div>

        {/* Narrative & Stats grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Narrative Column */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-base md:text-lg text-muted-foreground leading-relaxed">
            <p>
              Hi, I'm <strong className="text-foreground">Aswin Bino</strong>, a developer specializing in Frontend and Full-Stack Web Development. Currently pursuing Computer Science, I bridge the gap between technical design and robust software implementations.
            </p>
            <p>
              My workflow focus lies in writing clean, reusable code, developing modular components in React, and integrating sleek styling with Tailwind CSS. I have worked on diverse systems ranging from complex web portals to lightweight databases.
            </p>
            <p>
              Every project I undertake is designed with an emphasis on performance, accessibility, and smooth user interactions, ensuring a premium user experience across all devices.
            </p>
          </div>

          {/* Stats Column */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4 w-full">
            {stats.map((stat, idx) => (
              <div 
                key={idx} 
                className="p-6 border border-border/40 bg-muted/20 rounded-2xl flex flex-col justify-between h-36 hover:border-border transition-colors duration-300"
              >
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-muted-foreground">
                  {stat.label}
                </span>
                <span className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-shiny">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>

        </div>

        {/* Core Pillars / Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 md:mt-24">
          {pillars.map((pillar, idx) => (
            <div 
              key={idx} 
              className="p-8 border border-border/30 bg-muted/10 rounded-3xl flex flex-col gap-6 group hover:bg-muted/20 hover:border-border/60 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full border border-border/60 bg-background flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {pillar.icon}
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold text-foreground">
                  {pillar.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Skills / Scrolling Ribbon component */}
        <div className="mt-24 md:mt-32">
          <div className="flex justify-between items-end border-b border-border/20 pb-6 mb-12">
            <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] text-muted-foreground uppercase">
              TECHNICAL MATRIX
            </span>
            <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] text-muted-foreground uppercase">
              VERIFIED STACK
            </span>
          </div>
          
          <Skills />
        </div>

      </div>
    </section>
  )
}

export default About