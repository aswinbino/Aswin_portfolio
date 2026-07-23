import Skills from "./Skills"
import { ArrowDownRight, Compass, ShieldAlert, Cpu } from "lucide-react"

function About() {
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

        {/* Narrative & Technical Matrix Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Narrative Column */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-base md:text-lg text-muted-foreground leading-relaxed">
            <p>
              Hi, I'm <strong className="text-foreground">Aswin Bino</strong>, a developer specializing in Full-Stack Web Development and AI Solutions. Currently pursuing B.Tech in AI & Data Science, I bridge the gap between intelligent backends and polished frontends.
            </p>
            <p>
              Gained real production experience through an industry internship and independently shipped multiple projects solving real problems — ranging from full-stack React platforms to LLM prompt applications and real-time Socket.io backends.
            </p>
            <p>
              Every project I undertake is designed with an emphasis on performance, scalable code architecture, and smooth user interactions across all devices.
            </p>
          </div>

          {/* Technical Matrix Column */}
          <div className="lg:col-span-5 w-full">
            <div className="p-8 border border-border/50 bg-gradient-to-br from-muted/30 via-background to-muted/20 rounded-3xl flex flex-col gap-6 relative overflow-hidden shadow-2xl group hover:border-primary/50 transition-all duration-500">
              {/* Glowing background animation light */}
              <div className="absolute -right-16 -top-16 w-48 h-48 bg-sky-500/15 rounded-full blur-3xl group-hover:bg-purple-500/25 transition-all duration-700 animate-pulse"></div>
              
              {/* Moving scanning beam line */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-sky-400 to-transparent animate-pulse opacity-70"></div>

              <div className="flex items-center justify-between border-b border-border/30 pb-4 relative z-10">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                  <span className="text-[10px] font-black uppercase tracking-[0.25em] text-muted-foreground">
                    TECHNICAL MATRIX
                  </span>
                </div>
                <span className="text-[10px] font-mono font-bold text-sky-400 bg-sky-400/10 px-2.5 py-1 rounded-full border border-sky-400/20">
                  AI & DS (2027)
                </span>
              </div>

              {/* Moving Ticker Marquee inside Matrix */}
              <div className="w-full overflow-hidden bg-background/60 border border-border/40 rounded-xl py-2 relative z-10 fade-mask">
                <div className="marquee-track track-left flex items-center gap-6 text-[10px] font-mono font-bold tracking-wider text-muted-foreground/90">
                  <span className="text-sky-400">❖ REACT.JS</span>
                  <span className="text-foreground">❖ TAILWIND CSS</span>
                  <span className="text-emerald-400">❖ NODE.JS</span>
                  <span className="text-emerald-300">❖ EXPRESS</span>
                  <span className="text-amber-400">❖ FASTAPI</span>
                  <span className="text-purple-400">❖ OPENAI LLM</span>
                  <span className="text-foreground">❖ MONGODB</span>
                  <span className="text-sky-300">❖ REST APIS</span>
                  <span className="text-rose-400">❖ SOCKET.IO</span>
                  {/* Duplicated for smooth loop */}
                  <span className="text-sky-400">❖ REACT.JS</span>
                  <span className="text-foreground">❖ TAILWIND CSS</span>
                  <span className="text-emerald-400">❖ NODE.JS</span>
                  <span className="text-emerald-300">❖ EXPRESS</span>
                  <span className="text-amber-400">❖ FASTAPI</span>
                  <span className="text-purple-400">❖ OPENAI LLM</span>
                  <span className="text-foreground">❖ MONGODB</span>
                  <span className="text-sky-300">❖ REST APIS</span>
                  <span className="text-rose-400">❖ SOCKET.IO</span>
                </div>
              </div>

              {/* Animated Matrix Core Grid with Floating Badges */}
              <div className="grid grid-cols-2 gap-3.5 relative z-10">
                <div className="badge-float p-4 border border-border/40 bg-background/70 backdrop-blur-sm rounded-2xl flex flex-col gap-1 hover:border-sky-400/60 hover:scale-[1.03] transition-all duration-300 shadow-sm hover:shadow-sky-500/10">
                  <span className="text-[9px] font-bold tracking-widest text-muted-foreground uppercase flex items-center justify-between w-full">
                    Frontend <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse"></span>
                  </span>
                  <span className="text-sm font-bold text-foreground">React & Tailwind</span>
                </div>
                <div className="badge-float p-4 border border-border/40 bg-background/70 backdrop-blur-sm rounded-2xl flex flex-col gap-1 hover:border-emerald-400/60 hover:scale-[1.03] transition-all duration-300 shadow-sm hover:shadow-emerald-500/10">
                  <span className="text-[9px] font-bold tracking-widest text-muted-foreground uppercase flex items-center justify-between w-full">
                    Backend <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  </span>
                  <span className="text-sm font-bold text-foreground">Node / FastAPI</span>
                </div>
                <div className="badge-float p-4 border border-border/40 bg-background/70 backdrop-blur-sm rounded-2xl flex flex-col gap-1 hover:border-purple-400/60 hover:scale-[1.03] transition-all duration-300 shadow-sm hover:shadow-purple-500/10">
                  <span className="text-[9px] font-bold tracking-widest text-muted-foreground uppercase flex items-center justify-between w-full">
                    AI / ML <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse"></span>
                  </span>
                  <span className="text-sm font-bold text-purple-400">Prompt Eng.</span>
                </div>
                <div className="badge-float p-4 border border-border/40 bg-background/70 backdrop-blur-sm rounded-2xl flex flex-col gap-1 hover:border-amber-400/60 hover:scale-[1.03] transition-all duration-300 shadow-sm hover:shadow-amber-500/10">
                  <span className="text-[9px] font-bold tracking-widest text-muted-foreground uppercase flex items-center justify-between w-full">
                    Databases <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
                  </span>
                  <span className="text-sm font-bold text-foreground">MongoDB / SQL</span>
                </div>
              </div>

              {/* Status footer */}
              <div className="flex items-center justify-between pt-2 border-t border-border/30 text-xs text-muted-foreground font-mono relative z-10">
                <span className="flex items-center gap-1.5">
                  STATUS: <span className="text-emerald-400 font-bold">READY TO SHIP</span>
                </span>
                <span className="text-sky-400 font-bold">4+ SHIPPED APPS</span>
              </div>
            </div>
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