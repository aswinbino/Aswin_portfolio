import img1 from "../../assets/images/Cleveroad.jpg";
import img2 from "../../assets/images/Capture d'écran 2025-10-22 182207.png";
import img3 from "../../assets/images/Weather Forecast Dashboard.jpg";
import img4 from "../../assets/images/WordPress dashboard design concept.jpg";
import img5 from "../../assets/images/Game Dashboard Design.jpg";
import img6 from "../../assets/images/Task manager app.jpg";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "E-Commerce Website",
    img: img1,
    desc: "Modern online store with dynamic product filtering, persistent shopping cart, and unified payment processing.",
    skills: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/aswinbino/Aswin_portfolio",
    live: "#"
  },
  {
    title: "Portfolio Website",
    img: img2,
    desc: "Personal developer portfolio designed to showcase projects, skills, and professional experience with high-fidelity interactions.",
    skills: ["React", "Tailwind CSS", "Vite"],
    github: "https://github.com/aswinbino/Aswin_portfolio",
    live: "#"
  },
  {
    title: "Weather Dashboard",
    img: img3,
    desc: "Responsive web application tracking real-time meteorological metrics, weather forecasts, and historical charts via API.",
    skills: ["HTML", "CSS", "REST API"],
    github: "https://github.com/aswinbino/Aswin_portfolio",
    live: "#"
  },
  {
    title: "Blogging Platform",
    img: img4,
    desc: "Clean blogging engine with markdown writing support, categories indexing, user profiles, and responsive layouts.",
    skills: ["HTML", "Tailwind", "JavaScript"],
    github: "https://github.com/aswinbino/Aswin_portfolio",
    live: "#"
  },
  {
    title: "Game Landing Page",
    img: img5,
    desc: "Immersive product landing portal built for high-end games featuring scroll-triggered animation grids and 3D parallax effects.",
    skills: ["HTML", "CSS", "GSAP"],
    github: "https://github.com/aswinbino/Aswin_portfolio",
    live: "#"
  },
  {
    title: "Task Manager",
    img: img6,
    desc: "Enterprise productivity tool tracking sprints and items with complete CRUD capability, sorting columns, and search lists.",
    skills: ["HTML", "CSS", "JS"],
    github: "https://github.com/aswinbino/Aswin_portfolio",
    live: "#"
  }
];

export default function Project() {
  return (
    <section id="project" className="relative py-24 md:py-32 border-b border-border/20 overflow-hidden">
      <div className="max-w-[105rem] w-full mx-auto px-6 md:px-12">
        
        {/* Header tags */}
        <div className="flex flex-col gap-4 mb-16 md:mb-24">
          <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] text-primary uppercase">
            PORTFOLIO
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-none max-w-4xl text-shiny">
            Flagship projects & digital platforms.
          </h2>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="flex flex-col border border-border/40 bg-muted/20 hover:bg-muted/30 dark:bg-muted/10 dark:hover:bg-muted/20 hover:border-border/80 transition-all duration-300 rounded-[2rem] overflow-hidden group"
            >
              {/* Card Image */}
              <div className="relative overflow-hidden aspect-[16/10] border-b border-border/20">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
                      className="text-[10px] font-bold tracking-wider px-3.5 py-1.5 bg-muted/50 text-muted-foreground border border-border/40 rounded-full"
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