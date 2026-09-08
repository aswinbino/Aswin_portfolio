import { Briefcase, Building2, Calendar, MapPin, CheckCircle2, Code2, Sparkles, Terminal, Award } from "lucide-react"

export default function InternshipExperience() {
  const responsibilities = [
    "Contributed to real-world production MERN stack web applications (MongoDB, Express.js, React.js, Node.js).",
    "Developed modular, reusable UI components with responsive layouts and modern state management.",
    "Engineered and integrated RESTful APIs, backend route controllers, and database schemas.",
    "Worked collaboratively with senior engineering leads following industry standards and best practices.",
    "Commended by the Head of Technology for proactive attitude, rapid learning, and clean software development."
  ];

  const techStack = [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "REST APIs",
    "JavaScript (ES6+)",
    "Tailwind CSS",
    "Git & GitHub",
    "Full-Stack Architecture"
  ];

  return (
    <section id="experience" className="relative py-24 border-b border-border/20 overflow-hidden select-none">
      <div className="max-w-[105rem] w-full mx-auto px-6 md:px-12">

        {/* Section Header */}
        <div className="flex flex-col gap-4 mb-16">
          <span className="inline-flex items-center gap-2 text-[10px] font-mono font-bold tracking-[0.3em] text-primary uppercase">
            <Briefcase className="w-3.5 h-3.5" />
            WORK EXPERIENCE
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-shiny">
            Internship Experience & Industry Contributions
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl">
            Real-world software engineering experience building scalable full-stack applications in collaborative agile environments.
          </p>
        </div>

        {/* Main Experience Showcase Card */}
        <div className="p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-br from-muted/30 via-background to-muted/20 border border-border/60 shadow-2xl relative overflow-hidden group">
          
          {/* Top Company & Meta Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 border-b border-border/30 pb-8 mb-8">
            
            <div className="flex items-start gap-4">
              <div className="p-3.5 rounded-2xl bg-primary/10 border border-primary/20 text-primary shrink-0 mt-1">
                <Building2 className="w-7 h-7" />
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex flex-wrap items-center gap-2.5">
                  <h3 className="text-2xl md:text-3xl font-black tracking-tight text-foreground">
                    BPH Technologies LLP
                  </h3>
                  <span className="text-[10px] font-mono font-bold tracking-widest text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                    COMPLETED
                  </span>
                </div>
                <p className="text-sm font-semibold text-primary">
                  BrightPath Horizon • IT Department
                </p>
              </div>
            </div>

            {/* Duration & Location Badges */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-muted/40 border border-border/40 text-foreground font-semibold">
                <Calendar className="w-4 h-4 text-primary" />
                <span>28 Jan 2026 – 28 Feb 2026 (1 Month)</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-muted/40 border border-border/40 text-muted-foreground font-medium">
                <MapPin className="w-4 h-4 text-rose-400" />
                <span>Remote</span>
              </div>
            </div>

          </div>

          {/* Role & Contributions Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Role Overview & Bullet Points */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-mono font-bold tracking-widest text-muted-foreground uppercase">
                  POSITION & SCOPE
                </span>
                <h4 className="text-xl font-bold text-foreground flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-sky-400" />
                  MERN Stack Software Intern
                </h4>
              </div>

              <div className="flex flex-col gap-3.5">
                {responsibilities.map((resp, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                      {resp}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Verified Tech Stack & Endorsement Box */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              
              {/* Verified Stack Box */}
              <div className="p-6 rounded-2xl bg-muted/20 border border-border/40 flex flex-col gap-4">
                <span className="text-[10px] font-mono font-bold tracking-widest text-muted-foreground uppercase flex items-center justify-between">
                  <span>TECHNOLOGY STACK APPLIED</span>
                  <Terminal className="w-3.5 h-3.5 text-primary" />
                </span>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="text-[11px] font-mono font-semibold px-3 py-1.5 rounded-lg bg-background border border-border/40 text-foreground/90 shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Leadership Feedback Highlight */}
              <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-primary" />
                  <span className="text-[10px] font-mono font-bold tracking-widest text-primary uppercase">
                    OFFICIAL ENDORSEMENT
                  </span>
                </div>
                <blockquote className="text-xs text-muted-foreground italic leading-relaxed">
                  "Aswin demonstrated strong technical skills, dedication, and a proactive attitude in contributing to real-world MERN stack development projects with commendable work ethic."
                </blockquote>
                <div className="pt-2 border-t border-primary/10 flex items-center justify-between text-[11px] font-mono">
                  <span className="font-bold text-foreground">Santosh B</span>
                  <span className="text-muted-foreground">Head of Technology</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
