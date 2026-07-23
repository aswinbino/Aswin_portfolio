import { Code2, Palette, Laptop, Check } from "lucide-react"

function Services() {
  const serviceList = [
    {
      index: "01",
      icon: <Code2 className="w-6 h-6 text-sky-400" />,
      title: "Frontend Development",
      desc: "I build responsive, lightning-fast interfaces using modern frontend frameworks like React, Next.js, and Vite.",
      bullets: ["React / Next.js SPAs", "Tailwind CSS Styling", "State Management", "Micro-interactions"]
    },
    {
      index: "02",
      icon: <Palette className="w-6 h-6 text-yellow-500" />,
      title: "UI Design & Prototyping",
      desc: "Designing user interfaces that prioritize usability, visual hierarchy, and modern aesthetic consistency.",
      bullets: ["Figma Wireframing", "Component Systems", "Dark / Light Themes", "Visual Prototyping"]
    },
    {
      index: "03",
      icon: <Laptop className="w-6 h-6 text-rose-500" />,
      title: "Full-Stack Web Apps",
      desc: "Creating integrated, dynamic systems featuring secure REST API routing, backend controllers, and database models.",
      bullets: ["Node.js / Express Backends", "MySQL / MongoDB Schemas", "CRUD Operations", "Authentication Pipes"]
    }
  ];

  return (
    <section id="services" className="relative py-24 md:py-32 border-b border-border/20 overflow-hidden">
      <div className="max-w-[105rem] w-full mx-auto px-6 md:px-12">
        
        {/* Section Tags */}
        <div className="flex flex-col gap-4 mb-16 md:mb-24">
          <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] text-primary uppercase">
            SERVICES
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-none max-w-4xl text-shiny">
            Core capabilities & digital services.
          </h2>
        </div>

        {/* Services Columns */}
        <div className="flex flex-col lg:flex-row gap-8">
          {serviceList.map((service, idx) => (
            <div 
              key={idx}
              className="flex-1 p-8 md:p-10 border border-border/40 bg-muted/20 hover:bg-muted/30 dark:bg-muted/10 dark:hover:bg-muted/20 hover:border-border/80 transition-all duration-300 rounded-[2rem] flex flex-col justify-between gap-8 group"
            >
              <div className="flex flex-col gap-6">
                {/* Header Icon + Index */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-full border border-border/60 bg-background flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <span className="text-xs font-mono font-bold tracking-widest text-muted-foreground/60 select-none">
                    {service.index}
                  </span>
                </div>

                {/* Title & Description */}
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-bold tracking-tight text-foreground">
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