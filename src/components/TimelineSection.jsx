import { useState } from "react"
import { Briefcase, Calendar, Building2, ChevronRight, Award } from "lucide-react"

import img1 from "/img1.png"
import img2 from "/img2.png"

export default function TimelineSection() {
  const [activeStep, setActiveStep] = useState(1);

  const timelineData = [
    {
      id: 0,
      role: "Research Assistant",
      org: "HUMIC Engineering",
      date: "SEPTEMBER 2025 — DECEMBER 2025",
      desc: "Developed and deployed AI-driven threat detection systems within a research-focused environment specializing in deep learning.",
      img: img1,
      skills: ["Python", "PyTorch", "AI Security", "Data Science"]
    },
    {
      id: 1,
      role: "AI Developer Intern",
      org: "Telkom Indonesia (Digistar Club)",
      date: "OCTOBER 2025 — DECEMBER 2025",
      desc: "Leading end-to-end execution of digital talent development programs under Digistar Club by Telkom Indonesia.",
      img: img2,
      skills: ["React.js", "AI Integration", "FastAPI", "Full-Stack"]
    },
    {
      id: 2,
      role: "Network Practicum Assistant",
      org: "Computer Engineering Lab",
      date: "FEBRUARY 2025 — JUNE 2025",
      desc: "Instructed 100+ students on network topologies, TCP/IP protocols, router configuration, and packet inspection.",
      img: img1,
      skills: ["Networking", "Linux", "Wireshark", "Cisco"]
    },
    {
      id: 3,
      role: "Chief Committee Lead",
      org: "Student Organization",
      date: "JANUARY 2025 — DECEMBER 2025",
      desc: "Managed event logistics, budget allocation, and technical team execution for regional technology symposiums.",
      img: img2,
      skills: ["Leadership", "Project Management", "Communication"]
    },
    {
      id: 4,
      role: "Data Entry & Analytics Assistant",
      org: "City Agriculture & Food Office",
      date: "JULY 2024 — SEPTEMBER 2024",
      desc: "Supported data integrity and reporting functions at the City Office of Food and Agriculture, ensuring data reliability.",
      img: img1,
      skills: ["Data Analysis", "SQL", "Excel Analytics"]
    }
  ];

  return (
    <section id="timeline" className="relative py-24 border-b border-border/20 overflow-hidden select-none">
      <div className="max-w-[105rem] w-full mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col gap-4 mb-16">
          <span className="inline-flex items-center gap-2 text-[10px] font-mono font-bold tracking-[0.3em] text-primary uppercase">
            <Briefcase className="w-3.5 h-3.5" />
            CAREER TRAJECTORY
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-shiny">
            Professional Journey
          </h2>
          <p className="text-sm text-muted-foreground max-w-xl">
            A timeline of roles, responsibilities, and professional growth across research labs and software teams.
          </p>
        </div>

        {/* Horizontal Node Stepper Timeline */}
        <div className="relative mb-16 overflow-x-auto pb-6">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-border/40 -translate-y-1/2 rounded-full z-0"></div>

          <div className="flex justify-between items-center min-w-[700px] relative z-10 px-4">
            {timelineData.map((item, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveStep(idx)}
                  className="flex flex-col items-center gap-3 group focus:outline-none"
                >
                  <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center font-mono text-xs font-bold transition-all duration-300 ${
                    isActive
                      ? "bg-foreground text-background border-primary scale-125 shadow-xl ring-4 ring-primary/20"
                      : "bg-background text-muted-foreground border-border/80 hover:border-foreground"
                  }`}>
                    {idx + 1}
                  </div>

                  <span className={`text-xs font-bold max-w-[120px] text-center transition-colors ${
                    isActive ? "text-foreground font-black" : "text-muted-foreground group-hover:text-foreground"
                  }`}>
                    {item.role}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Node Detail Card Overlay */}
        <div className="p-8 md:p-12 rounded-3xl bg-muted/20 border border-border/50 backdrop-blur-xl shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-fadeIn">
          
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-mono font-bold tracking-widest text-sky-400 bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20 w-fit flex items-center gap-1.5">
                <Calendar size={12} />
                {timelineData[activeStep].date}
              </span>
              <h3 className="text-2xl md:text-3xl font-black text-foreground">
                {timelineData[activeStep].role}
              </h3>
              <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
                <Building2 size={16} className="text-primary" />
                {timelineData[activeStep].org}
              </div>
            </div>

            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              {timelineData[activeStep].desc}
            </p>

            <div className="flex flex-wrap gap-2">
              {timelineData[activeStep].skills.map((sk, i) => (
                <span key={i} className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-background border border-border/40 text-foreground">
                  {sk}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-border/40 bg-background shadow-xl">
            <img
              src={timelineData[activeStep].img}
              alt={timelineData[activeStep].role}
              className="w-full h-56 object-cover"
            />
            <div className="p-4 flex items-center justify-between border-t border-border/30">
              <span className="text-xs font-mono text-muted-foreground">Verification Record</span>
              <Award className="w-4 h-4 text-emerald-400" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
