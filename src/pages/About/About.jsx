import Skills from "./Skills"
import { Cpu, Compass, ShieldAlert, Sparkles, Code2, Database, Layers } from "lucide-react"

function About() {
  const stats = [
    {
      label: "CURRENT CGPA",
      value: "7.5 / 10",
      desc: "B.Tech AI & Data Science"
    },
    {
      label: "PROJECTS COMPLETED",
      value: "20+",
      desc: "Full-Stack & AI Systems"
    },
    {
      label: "PROFESSIONAL EXP",
      value: "0 - 1 Year",
      desc: "Internships & Live Projects"
    },
    {
      label: "TECH & TOOLS",
      value: "20+",
      desc: "Verified Stack Items"
    }
  ];

  const pillars = [
    {
      icon: <Cpu className="w-5 h-5 text-sky-400" />,
      title: "Clean Architecture",
      desc: "Structuring clean, scalable React & Node.js applications with reusable component design."
    },
    {
      icon: <Compass className="w-5 h-5 text-yellow-400" />,
      title: "User-Centric Design",
      desc: "Crafting modern layouts, micro-interactions, dark modes, and dynamic animations."
    },
    {
      icon: <ShieldAlert className="w-5 h-5 text-rose-400" />,
      title: "Robust Performance",
      desc: "Optimizing bundle sizes, API endpoints, asset delivery, and low-latency sockets."
    }
  ];

  return (
    <section id="about" className="relative py-24 md:py-32 border-b border-border/20 overflow-hidden">
      <div className="max-w-[105rem] w-full mx-auto px-6 md:px-12">
        
        {/* Top Focus Quote Block ("FOKUS INTI") */}
        <div className="p-8 md:p-14 rounded-3xl bg-muted/20 border border-border/40 backdrop-blur-xl mb-16 md:mb-24 flex flex-col gap-6 relative overflow-hidden group shadow-2xl">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-sky-400 animate-ping"></span>
            <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-primary uppercase">
              CORE FOCUS
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-foreground">
            " Applied AI. Scalable Systems. <br className="hidden md:block" />
            <span className="text-muted-foreground">Robust Full-Stack Engineering. "</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-border/30 pt-6 mt-2">
            <div className="flex items-start gap-3">
              <Layers className="w-5 h-5 text-sky-400 shrink-0 mt-1" />
              <div>
                <h4 className="text-sm font-bold text-foreground uppercase tracking-wide">SCOPE & PLATFORM</h4>
                <p className="text-xs text-muted-foreground leading-relaxed mt-1">
                  Focusing on predictive model pipelines, high-concurrency API backends, and RAG search architectures designed for high throughput.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Database className="w-5 h-5 text-emerald-400 shrink-0 mt-1" />
              <div>
                <h4 className="text-sm font-bold text-foreground uppercase tracking-wide">INTEGRATION</h4>
                <p className="text-xs text-muted-foreground leading-relaxed mt-1">
                  Architecting full-stack ecosystems from React frontends to Python/FastAPI and Node.js backend controllers.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-purple-400 shrink-0 mt-1" />
              <div>
                <h4 className="text-sm font-bold text-foreground uppercase tracking-wide">ACADEMICS & STUDIES</h4>
                <p className="text-xs text-muted-foreground leading-relaxed mt-1">
                  Pursuing B.Tech in Artificial Intelligence & Data Science (2023 - 2027). Specializing in Machine Learning, Deep Learning, and Advanced Algorithms.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Statistics Banner */}
        <div className="p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-br from-zinc-900 via-black to-zinc-950 text-white border border-zinc-800 shadow-2xl mb-24 relative overflow-hidden">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 border-b border-zinc-800 pb-8">
            <div className="flex flex-col gap-2">
              <span className="inline-flex items-center gap-2 text-[10px] font-mono font-bold tracking-[0.3em] text-emerald-400 uppercase bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                PROFESSIONAL STATISTICS
              </span>
              <h3 className="text-2xl md:text-4xl font-black tracking-tight text-white max-w-2xl leading-tight">
                Data that speaks. AI that reasons. Software that ships.
              </h3>
            </div>
            
            <a 
              href="#contact" 
              className="px-6 py-3 rounded-full bg-white text-black hover:bg-zinc-200 transition-colors text-xs font-bold uppercase tracking-wider flex items-center gap-2"
            >
              Get In Touch ↗
            </a>
          </div>

          {/* Stat Cards Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((st, i) => (
              <div 
                key={i} 
                className="p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 flex flex-col gap-2 hover:border-sky-400/50 transition-all duration-300 group"
              >
                <span className="text-[9px] font-mono font-bold tracking-widest text-zinc-400 uppercase">
                  {st.label}
                </span>
                <span className="text-3xl md:text-5xl font-black text-white group-hover:text-sky-400 transition-colors">
                  {st.value}
                </span>
                <span className="text-[11px] text-zinc-400 font-medium">
                  {st.desc}
                </span>
              </div>
            ))}
          </div>

        </div>

        {/* Narrative & Technical Matrix Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Narrative Column */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-base md:text-lg text-muted-foreground leading-relaxed">
            <h3 className="text-3xl md:text-4xl font-black tracking-tight text-foreground">
              Engineering full-stack web products and intelligent systems.
            </h3>
            <p>
              Hi, I'm <strong className="text-foreground">Aswin Bino</strong>, a Full-Stack Software & AI Engineer. Currently pursuing my <strong className="text-foreground">B.Tech in Artificial Intelligence & Data Science (2023 - 2027)</strong>, I combine rigorous college coursework in Machine Learning, Deep Learning, Data Structures, and Software Engineering with hands-on web development.
            </p>
            <p>
              Gained real production experience through industry projects, internships, and academic research — building over 20+ applications ranging from full-stack React platforms to LLM prompt applications and real-time Socket.io backends.
            </p>
          </div>

          {/* Technical Matrix Column */}
          <div className="lg:col-span-5 w-full">
            <div className="p-8 border border-border/50 bg-gradient-to-br from-muted/30 via-background to-muted/20 rounded-3xl flex flex-col gap-6 relative overflow-hidden shadow-2xl group hover:border-primary/50 transition-all duration-500">
              
              <div className="flex items-center justify-between border-b border-border/30 pb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-sky-400 animate-ping"></span>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-muted-foreground">
                    TECHNICAL MATRIX
                  </span>
                </div>
                <span className="text-[10px] font-mono font-bold text-sky-400 bg-sky-400/10 px-2.5 py-1 rounded-full border border-sky-400/20">
                  AI & DS (2027)
                </span>
              </div>

              {/* Ticker Marquee */}
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
                  {/* Duplicate */}
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

              {/* Badges Grid */}
              <div className="grid grid-cols-2 gap-3.5 relative z-10">
                <div className="badge-float p-4 border border-border/40 bg-background/70 backdrop-blur-sm rounded-2xl flex flex-col gap-1 hover:border-sky-400/60 transition-all shadow-sm">
                  <span className="text-[9px] font-mono font-bold tracking-widest text-muted-foreground uppercase flex items-center justify-between w-full">
                    Frontend <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse"></span>
                  </span>
                  <span className="text-xs font-bold text-foreground">React & Tailwind</span>
                </div>
                <div className="badge-float p-4 border border-border/40 bg-background/70 backdrop-blur-sm rounded-2xl flex flex-col gap-1 hover:border-emerald-400/60 transition-all shadow-sm">
                  <span className="text-[9px] font-mono font-bold tracking-widest text-muted-foreground uppercase flex items-center justify-between w-full">
                    Backend <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  </span>
                  <span className="text-xs font-bold text-foreground">Node / FastAPI</span>
                </div>
                <div className="badge-float p-4 border border-border/40 bg-background/70 backdrop-blur-sm rounded-2xl flex flex-col gap-1 hover:border-purple-400/60 transition-all shadow-sm">
                  <span className="text-[9px] font-mono font-bold tracking-widest text-muted-foreground uppercase flex items-center justify-between w-full">
                    AI / ML <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse"></span>
                  </span>
                  <span className="text-xs font-bold text-purple-400">Prompt Eng.</span>
                </div>
                <div className="badge-float p-4 border border-border/40 bg-background/70 backdrop-blur-sm rounded-2xl flex flex-col gap-1 hover:border-amber-400/60 transition-all shadow-sm">
                  <span className="text-[9px] font-mono font-bold tracking-widest text-muted-foreground uppercase flex items-center justify-between w-full">
                    Databases <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
                  </span>
                  <span className="text-xs font-bold text-foreground">MongoDB / SQL</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-border/30 text-xs text-muted-foreground font-mono">
                <span>STATUS: <strong className="text-emerald-400">READY TO SHIP</strong></span>
                <span className="text-sky-400 font-bold">20+ SHIPPED APPS</span>
              </div>

            </div>
          </div>

        </div>

        {/* Pillars */}
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

        {/* Tech Stack Ribbon */}
        <div className="mt-24 md:mt-32">
          <div className="flex justify-between items-end border-b border-border/20 pb-6 mb-12">
            <span className="text-[10px] md:text-xs font-mono font-bold tracking-[0.3em] text-muted-foreground uppercase">
              TECHNICAL MATRIX
            </span>
            <span className="text-[10px] md:text-xs font-mono font-bold tracking-[0.3em] text-muted-foreground uppercase">
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