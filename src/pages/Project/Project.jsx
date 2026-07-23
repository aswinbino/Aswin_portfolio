import { useState } from "react";
import img1 from "../../assets/images/Cleveroad.jpg";
import img2 from "../../assets/images/Capture d'écran 2025-10-22 182207.png";
import img3 from "../../assets/images/Weather Forecast Dashboard.jpg";
import img4 from "../../assets/images/WordPress dashboard design concept.jpg";
import img5 from "../../assets/images/Game Dashboard Design.jpg";
import img6 from "../../assets/images/Task manager app.jpg";
import { ExternalLink, Sparkles } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "AI Prompt Generator",
    category: "AI & ML",
    img: img4,
    desc: "Streamlit web application integrated with OpenAI API for intelligent prompt creation, template generation, and LLM tuning.",
    skills: ["Python", "Streamlit", "OpenAI API", "Generative AI"],
    github: "https://github.com/aswinbino/Aswin_portfolio",
    live: "#",
    featured: true
  },
  {
    id: 2,
    title: "Portfolio Website",
    category: "Full-Stack",
    img: img2,
    desc: "Full-stack developer portfolio designed with React + Vite + Tailwind, featuring modern dark mode, micro-interactions, and Vercel deployment.",
    skills: ["React.js", "Tailwind CSS", "Vite", "JavaScript"],
    github: "https://github.com/aswinbino/Aswin_portfolio",
    live: "#",
    featured: true
  },
  {
    id: 3,
    title: "Real-Time Chat Application",
    category: "Real-Time",
    img: img6,
    desc: "Bidirectional real-time chat platform supporting multi-room messaging, active user presence, and low-latency Socket.io piping.",
    skills: ["React.js", "Socket.io", "Node.js", "Express"],
    github: "https://github.com/aswinbino/Aswin_portfolio",
    live: "#",
    featured: true
  },
  {
    id: 4,
    title: "Data Visualization Dashboard",
    category: "Data & Analytics",
    img: img5,
    desc: "Analytical dashboard featuring dynamic chart renders, metric filtering, and data aggregation via Python Flask backend.",
    skills: ["Python", "Flask", "D3.js", "REST API"],
    github: "https://github.com/aswinbino/Aswin_portfolio",
    live: "#"
  },
  {
    id: 5,
    title: "E-Commerce Storefront",
    category: "Frontend",
    img: img1,
    desc: "Modern online store UI with interactive product filtering, cart state management, and unified checkout screens.",
    skills: ["JavaScript", "HTML5", "CSS3", "Tailwind"],
    github: "https://github.com/aswinbino/Aswin_portfolio",
    live: "#"
  },
  {
    id: 6,
    title: "Weather Forecast Portal",
    category: "Frontend",
    img: img3,
    desc: "Responsive weather portal fetching real-time meteorological metrics, forecasts, and interactive weather maps.",
    skills: ["JavaScript", "REST API", "HTML5", "CSS3"],
    github: "https://github.com/aswinbino/Aswin_portfolio",
    live: "#"
  }
];

export default function Project() {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const categories = ["ALL", "AI & ML", "Full-Stack", "Real-Time", "Data & Analytics", "Frontend"];

  const filteredProjects = activeCategory === "ALL" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="project" className="relative py-24 md:py-32 border-b border-border/20 overflow-hidden">
      <div className="max-w-[105rem] w-full mx-auto px-6 md:px-12">
        
        {/* Header tags */}
        <div className="flex flex-col gap-4 mb-12 md:mb-16">
          <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] text-primary uppercase">
            PORTFOLIO
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-none max-w-4xl text-shiny">
            Featured projects & software systems.
          </h2>
        </div>

        {/* Animated Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-3 mb-12 md:mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-bold tracking-wider transition-all duration-300 select-none ${
                activeCategory === cat
                  ? "bg-foreground text-background shadow-lg scale-105"
                  : "bg-muted/30 text-muted-foreground hover:bg-muted/60 border border-border/40 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid with Hover & Transition Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="flex flex-col border border-border/40 bg-muted/20 hover:bg-muted/30 dark:bg-muted/10 dark:hover:bg-muted/20 hover:border-primary/50 transition-all duration-500 rounded-[2rem] overflow-hidden group shadow-lg hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Card Image + Overlay Badges */}
              <div className="relative overflow-hidden aspect-[16/10] border-b border-border/20 bg-background/50">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Category Badge Overlay */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-[9px] font-mono font-bold tracking-widest text-foreground bg-background/80 backdrop-blur-md px-3 py-1 rounded-full border border-border/60 shadow-md">
                    {project.category}
                  </span>
                </div>

                {project.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="text-[9px] font-bold tracking-widest text-purple-400 bg-purple-500/20 backdrop-blur-md px-2.5 py-1 rounded-full border border-purple-500/30 flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> FEATURED
                    </span>
                  </div>
                )}
              </div>

              {/* Card Content */}
              <div className="flex-1 p-8 flex flex-col justify-between gap-6">
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.desc}
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="text-[10px] font-bold tracking-wider px-3.5 py-1.5 bg-muted/50 text-muted-foreground border border-border/40 rounded-full group-hover:border-border/80 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3 mt-2">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-full border border-border/80 hover:bg-foreground hover:text-background text-sm font-semibold transition-all duration-300"
                  >
                    <FaGithub size={14} /> GitHub
                  </a>
                  <a 
                    href={project.live}
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-full bg-foreground text-background hover:bg-foreground/80 text-sm font-semibold transition-all duration-300"
                  >
                    <ExternalLink size={14} /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}