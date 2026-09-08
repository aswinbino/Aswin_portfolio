import { Award, ExternalLink, CheckCircle2 } from "lucide-react"

import promptCertImg from "../assets/images/prompt_engineering_cert.png"
import fullstackCertImg from "../assets/images/full_stack_developer_cert.png"
import img1 from "/img1.png"

export default function CertificationsSection() {
  const certs = [
    {
      id: 1,
      title: "Prompt Engineering Course",
      issuer: "Error Makes Clever (EMC)",
      date: "2026",
      badge: "Certificate of Excellence",
      img: promptCertImg,
      pdf: `${import.meta.env.BASE_URL}Prompt_Engineering_Certificate.pdf`,
      skills: ["Prompt Engineering", "LLM Systems", "Generative AI", "AI Automation"]
    },
    {
      id: 2,
      title: "Full Stack Developer (MERN)",
      issuer: "Error Makes Clever",
      date: "2026",
      badge: "ID: FSWD20135",
      img: fullstackCertImg,
      pdf: `${import.meta.env.BASE_URL}Full_Stack_Developer_Certificate.pdf`,
      skills: ["React.js", "Node.js", "MongoDB", "Express.js", "Full Stack MERN"]
    },
    {
      id: 3,
      title: "Advanced Web Architecture",
      issuer: "Meta / Open Source Standards",
      date: "2025",
      badge: "Verified Credential",
      img: img1,
      pdf: `${import.meta.env.BASE_URL}Full_Stack_Developer_Certificate.pdf`,
      skills: ["REST APIs", "Tailwind CSS", "Modern JavaScript", "UI/UX"]
    }
  ];

  return (
    <section id="certifications" className="relative py-24 border-b border-border/20 overflow-hidden select-none">
      <div className="max-w-[105rem] w-full mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col gap-4 mb-16">
          <span className="inline-flex items-center gap-2 text-[10px] font-mono font-bold tracking-[0.3em] text-primary uppercase">
            <Award className="w-3.5 h-3.5" />
            CERTIFICATIONS & ACHIEVEMENTS
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-shiny max-w-3xl">
            Validating Excellence through Global Standards.
          </h2>
          <p className="text-sm text-muted-foreground max-w-xl">
            A collection of professional certifications in AI, Prompt Engineering, and Full-Stack MERN Architecture.
          </p>
        </div>

        {/* Cert Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certs.map((c) => (
            <div
              key={c.id}
              className="p-6 rounded-3xl border border-border/40 bg-muted/20 hover:bg-muted/30 hover:border-primary/60 transition-all duration-500 flex flex-col justify-between gap-6 group shadow-lg"
            >
              <div className="flex flex-col gap-4">
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-border/30 bg-muted/40">
                  <img
                    src={c.img}
                    alt={c.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 text-[9px] font-mono font-bold uppercase tracking-widest text-emerald-400 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-emerald-500/30 flex items-center gap-1">
                    <CheckCircle2 size={12} /> {c.badge}
                  </span>
                </div>

                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] font-mono text-muted-foreground uppercase font-bold">
                    {c.issuer} — {c.date}
                  </span>
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {c.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {c.skills.map((s, i) => (
                    <span key={i} className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-md bg-background border border-border/40 text-muted-foreground">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={c.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl border border-border/60 bg-background hover:bg-foreground hover:text-background text-xs font-bold transition-all text-center flex items-center justify-center gap-2"
              >
                View Credential <ExternalLink size={14} />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
