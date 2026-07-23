import { Code2, Laptop, Bot, Check, Sparkles, Zap, BarChart3 } from "lucide-react"

function Services() {
  const serviceList = [
    {
      index: "01",
      icon: <Code2 className="w-6 h-6 text-sky-400" />,
      title: "Frontend Development",
      desc: "Building responsive, high-performance web interfaces using React.js, Tailwind CSS, JavaScript (ES6+), and modern component architectures.",
      bullets: [
        "React.js & Vite SPAs",
        "Tailwind CSS & Dynamic Animations",
        "State Management & Component Architecture",
        "Responsive & Interactive UI"
      ]
    },
    {
      index: "02",
      icon: <Laptop className="w-6 h-6 text-emerald-400" />,
      title: "Full-Stack & Backend Engineering",
      desc: "Developing robust server-side APIs, database models, and backend controllers using Node.js, Express, FastAPI, and MongoDB.",
      bullets: [
        "Node.js, Express & FastAPI Backends",
        "MongoDB & SQL Database Schemas",
        "REST API Architecture & Routing",
        "CRUD Operations & Authentication"
      ]
    },
    {
      index: "03",
      icon: <Bot className="w-6 h-6 text-purple-400" />,
      title: "AI & Prompt Engineering",
      desc: "Engineering intelligent AI applications, optimizing LLM prompts, and integrating OpenAI APIs for automated generative workflows.",
      bullets: [
        "Generative AI & LLM Integration",
        "Prompt Engineering & Workflow Tuning",
        "Streamlit & Python AI Connectors",
        "Certifications (Upcoming)"
      ],
      badge: "Certificate (Coming Soon)"
    },
    {
      index: "04",
      icon: <Zap className="w-6 h-6 text-amber-400" />,
      title: "Real-Time Web Applications",
      desc: "Architecting low-latency, bidirectional real-time communications using Socket.io and WebSockets for live chat and event streams.",
      bullets: [
        "Socket.io Real-time Messaging",
        "Bidirectional Data Streaming",
        "Live Status & Event Pipes",
        "Event-Driven Client-Server Logic"
      ]
    },
    {
      index: "05",
      icon: <BarChart3 className="w-6 h-6 text-rose-400" />,
      title: "Data Visualization & Dashboards",
      desc: "Building interactive data visualization dashboards connecting Python backends with dynamic charting components.",
      bullets: [
        "Python Flask Data Backends",
        "D3.js & Interactive Charts",
        "Analytical Reporting Views",
        "Custom Metrics & Data Insights"
      ]
    }
  ];

  return (
    <section id="services" className="relative py-24 md:py-32 border-b border-border/20 overflow-hidden">
      <div className="max-w-[105rem] w-full mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col gap-4 mb-16 md:mb-24">
          <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] text-primary uppercase">
            SERVICES
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-none max-w-4xl text-shiny">
            Core capabilities & specialized services.
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceList.map((service, idx) => (
            <div 
              key={idx}
              className="p-8 md:p-10 border border-border/40 bg-muted/20 hover:bg-muted/30 dark:bg-muted/10 dark:hover:bg-muted/20 hover:border-border/80 transition-all duration-500 rounded-[2rem] flex flex-col justify-between gap-8 group relative overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="flex flex-col gap-6">
                {/* Header Icon + Index */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-full border border-border/60 bg-background flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <div className="flex items-center gap-2">
                    {service.badge && (
                      <span className="text-[9px] font-bold text-purple-400 bg-purple-500/10 border border-purple-500/20 px-2.5 py-1 rounded-full flex items-center gap-1">
                        <Sparkles className="w-3 h-3 animate-spin" style={{ animationDuration: '4s' }} />
                        {service.badge}
                      </span>
                    )}
                    <span className="text-xs font-mono font-bold tracking-widest text-muted-foreground/60 select-none">
                      {service.index}
                    </span>
                  </div>
                </div>

                {/* Title & Description */}
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>

              {/* Deliverable Bullets */}
              <div className="flex flex-col gap-3.5 border-t border-border/30 pt-6">
                {service.bullets.map((bullet, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs font-medium text-foreground/80">
                    <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;