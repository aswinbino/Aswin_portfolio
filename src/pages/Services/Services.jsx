import { Bot, Cpu, Lightbulb, Check, Sparkles } from "lucide-react"

export default function Services() {
  const features = [
    {
      index: "FEATURE — 01",
      icon: <Bot className="w-6 h-6 text-sky-400" />,
      title: "INTELLIGENCE SYSTEMS",
      desc: "Specializing in architecting autonomous systems and intelligence-driven platforms. From fine-tuning LLMs and engineering RAG architectures to developing deep learning models for Computer Vision and NLP.",
      tags: [
        "LLM FINE-TUNING",
        "RAG SYSTEMS",
        "DEEP LEARNING",
        "COMPUTER VISION",
        "MLOPS",
        "DATA ANALYTICS"
      ],
      color: "border-sky-500/30 hover:border-sky-500/60"
    },
    {
      index: "FEATURE — 02",
      icon: <Cpu className="w-6 h-6 text-emerald-400" />,
      title: "SCALABLE SYSTEMS",
      desc: "Building the foundation for resilient digital ecosystems. I engineer full-stack solutions with a focus on system architecture, modular design, and high-performance backends using React, Node.js, and Python.",
      tags: [
        "SYSTEM ARCHITECTURE",
        "FULL-STACK DEV",
        "DOCKER & K8S",
        "API DESIGN",
        "DEVOPS",
        "SOFTWARE DESIGN"
      ],
      color: "border-emerald-500/30 hover:border-emerald-500/60"
    },
    {
      index: "FEATURE — 03",
      icon: <Lightbulb className="w-6 h-6 text-amber-400" />,
      title: "STRATEGIC INNOVATION",
      desc: "Translating complex technical requirements into impactful business solutions through systemic thinking, strategic leadership, and clear communication within cross-functional engineering teams.",
      tags: [
        "SYSTEMIC THINKING",
        "LEADERSHIP",
        "PROBLEM SOLVING",
        "TEAMWORK",
        "COMMUNICATION",
        "RESEARCH"
      ],
      color: "border-amber-500/30 hover:border-amber-500/60"
    }
  ];

  return (
    <section id="services" className="relative py-24 md:py-32 border-b border-border/20 overflow-hidden select-none">
      <div className="max-w-[105rem] w-full mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col gap-4 mb-16">
          <span className="text-[10px] md:text-xs font-mono font-bold tracking-[0.3em] text-primary uppercase">
            SPECIALIZATIONS
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-shiny max-w-4xl">
            Core Capabilities & Engineering Disciplines.
          </h2>
        </div>

        {/* 3 Large Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item, idx) => (
            <div
              key={idx}
              className={`p-8 md:p-10 rounded-[2.5rem] border bg-muted/10 hover:bg-muted/20 transition-all duration-500 flex flex-col justify-between gap-8 group shadow-xl hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden ${item.color}`}
            >
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-background border border-border/40 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-xs font-mono font-bold tracking-widest text-muted-foreground">
                    {item.index}
                  </span>
                </div>

                <div className="flex flex-col gap-3">
                  <h3 className="text-2xl font-black tracking-tight text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Tags Grid */}
              <div className="flex flex-wrap gap-2 border-t border-border/30 pt-6">
                {item.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-[9px] font-mono font-bold tracking-wider px-3 py-1.5 rounded-full bg-background border border-border/40 text-foreground/80 hover:border-primary/50 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}