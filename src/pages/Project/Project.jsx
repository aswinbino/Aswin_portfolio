import { useState } from "react";
import { ExternalLink, Sparkles, Search, Grid, List, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import img1 from "../../assets/images/Cleveroad.jpg";
import img2 from "../../assets/images/Capture d'écran 2025-10-22 182207.png";
import img3 from "../../assets/images/Weather Forecast Dashboard.jpg";
import img4 from "../../assets/images/WordPress dashboard design concept.jpg";
import img5 from "../../assets/images/Game Dashboard Design.jpg";
import img6 from "../../assets/images/Task manager app.jpg";

const projectsData = [
  {
    id: "01",
    title: "Solo Travel",
    realm: "AI",
    status: "DONE",
    desc: "Automated travel itinerary generator with browser automation and AI suggestions.",
    tech: ["React", "Node.js", "Playwright", "Tailwind CSS"],
    img: img4,
    github: "https://github.com/aswinbino/Solo-Travelling-",
    live: "#"
  },
  {
    id: "02",
    title: "AI Blog Writer",
    realm: "AI",
    status: "DONE",
    desc: "AI-powered blog generation platform using multi-agent LLMs.",
    tech: ["Python", "OpenAI API", "FastAPI", "React", "Tailwind CSS"],
    img: img5,
    github: "https://github.com/aswinbino/Ai-blog",
    live: "#"
  },
  {
    id: "03",
    title: "Legal Docs Platform",
    realm: "AI",
    status: "DONE",
    desc: "Web application for managing legal documents and contracts.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    img: img2,
    github: "https://github.com/aswinbino/Law",
    live: "#"
  },
  {
    id: "04",
    title: "Smart Ticketing System",
    realm: "Full-Stack",
    status: "DONE",
    desc: "End‑to‑end ticket booking and management platform.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    img: img1,
    github: "https://github.com/aswinbino/aswin-smart-ticket",
    live: "#"
  },
  {
    id: "05",
    title: "Bulk Mail Sender",
    realm: "Full-Stack",
    status: "DONE",
    desc: "High‑throughput bulk email sending service with analytics.",
    tech: ["Node.js", "Express", "MongoDB", "React", "Tailwind CSS"],
    img: img3,
    github: "https://github.com/aswinbino/BulkMail",
    live: "#"
  },
  {
    id: "06",
    title: "Apple Clone",
    realm: "Full-Stack",
    status: "DONE",
    desc: "Responsive Apple product showcase site with interactive UI.",
    tech: ["React", "Tailwind CSS", "Vite"],
    img: img6,
    github: "https://github.com/aswinbino/apple",
    live: "#"
  },
  {
    id: "07",
    title: "Weather Dashboard",
    realm: "Software",
    status: "DONE",
    desc: "Real‑time weather visualization using public APIs.",
    tech: ["React", "Tailwind CSS", "OpenWeather API"],
    img: img3,
    github: "https://github.com/aswinbino/weather",
    live: "#"
  },
  {
    id: "08",
    title: "Destinatio",
    realm: "Full-Stack",
    status: "DONE",
    desc: "Travel destination explorer with curated recommendations.",
    tech: ["React", "Node.js", "Tailwind CSS"],
    img: img2,
    github: "https://github.com/aswinbino/destinatio",
    live: "#"
  },
  {
    id: "09",
    title: "Destination Explorer",
    realm: "Full-Stack",
    status: "DONE",
    desc: "Enhanced destination discovery platform with map integration.",
    tech: ["React", "Mapbox", "Tailwind CSS"],
    img: img2,
    github: "https://github.com/aswinbino/destination",
    live: "#"
  },
  {
    id: "10",
    title: "Creative Developer Portfolio",
    realm: "Software",
    status: "DONE",
    desc: "Modern full‑stack portfolio website built with React 19 + Vite + Tailwind, featuring micro‑interactions and dark aesthetics.",
    tech: ["React 19", "Tailwind CSS", "Vite", "JavaScript", "Lucide Icons"],
    img: img2,
    github: "https://github.com/aswinbino/Aswin_portfolio",
    live: "#"
  }
];

export default function Project() {
  const [activeRealm, setActiveRealm] = useState("All Realms");
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [viewMode, setViewMode] = useState("list"); // 'list' | 'grid'
  const [hoveredProject, setHoveredProject] = useState(null);

  const realms = ["All Realms", "AI", "Software", "Full-Stack"];

  const filteredProjects = projectsData.filter((p) => {
    const matchesRealm = activeRealm === "All Realms" || p.realm === activeRealm;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.desc.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "All" || (statusFilter === "Done" && p.status === "DONE") || (statusFilter === "In Progress" && p.status === "IN PROGRESS");
    return matchesRealm && matchesSearch && matchesStatus;
  });

  return (
    <section id="project" className="relative py-24 md:py-32 border-b border-border/20 overflow-hidden select-none">
      <div className="max-w-[105rem] w-full mx-auto px-6 md:px-12">
        
        {/* Header Tag */}
        <div className="flex flex-col gap-4 mb-12">
          <span className="text-[10px] md:text-xs font-mono font-bold tracking-[0.3em] text-primary uppercase">
            PROJECT IMPACT
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-shiny">
            Building The Future
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl">
            Transforming ideas into production-ready solutions that drive real-world impact.
          </p>
        </div>

        {/* Impact Counter Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-3xl bg-muted/20 border border-border/40 mb-16 backdrop-blur-xl">
          <div className="flex flex-col">
            <span className="text-3xl md:text-4xl font-black text-foreground">20+</span>
            <span className="text-[10px] font-mono font-bold tracking-widest text-muted-foreground uppercase mt-1">PROJECTS BUILT</span>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl md:text-4xl font-black text-foreground">0 - 1</span>
            <span className="text-[10px] font-mono font-bold tracking-widest text-muted-foreground uppercase mt-1">YEAR EXPERIENCE</span>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl md:text-4xl font-black text-foreground">20+</span>
            <span className="text-[10px] font-mono font-bold tracking-widest text-muted-foreground uppercase mt-1">TECH STACK</span>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl md:text-4xl font-black text-foreground">12+</span>
            <span className="text-[10px] font-mono font-bold tracking-widest text-muted-foreground uppercase mt-1">ACTIVE DEPLOYMENTS</span>
          </div>
        </div>

        {/* Projects Archive Header & Filters */}
        <div className="flex flex-col gap-6 mb-12">
          <div className="flex justify-between items-center border-b border-border/30 pb-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-sky-400"></span>
              <h3 className="text-xl font-bold tracking-tight text-foreground font-mono">
                PROJECTS ARCHIVE <span className="text-muted-foreground text-sm">[{filteredProjects.length}]</span>
              </h3>
            </div>

            {/* View Mode Switcher */}
            <div className="flex items-center gap-1 bg-muted/40 p-1 rounded-xl border border-border/40">
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-lg text-xs font-bold transition-all ${
                  viewMode === "list" ? "bg-foreground text-background shadow-md" : "text-muted-foreground hover:text-foreground"
                }`}
                title="List View"
              >
                <List size={16} />
              </button>
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg text-xs font-bold transition-all ${
                  viewMode === "grid" ? "bg-foreground text-background shadow-md" : "text-muted-foreground hover:text-foreground"
                }`}
                title="Grid View"
              >
                <Grid size={16} />
              </button>
            </div>
          </div>

          {/* Filter Bar: Realm Pills, Search, Status Pills */}
          <div className="flex flex-col lg:flex-row justify-between items-stretch lg:items-center gap-4">
            
            {/* Realm Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {realms.map((realm) => (
                <button
                  key={realm}
                  onClick={() => setActiveRealm(realm)}
                  className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all ${
                    activeRealm === realm
                      ? "bg-foreground text-background shadow-md"
                      : "bg-muted/30 text-muted-foreground hover:bg-muted/60 border border-border/40 hover:text-foreground"
                  }`}
                >
                  {realm}
                </button>
              ))}
            </div>

            {/* Search & Status Filter */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Search input */}
              <div className="relative flex-1 min-w-[200px]">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search projects..."
                  className="w-full pl-10 pr-4 py-2 rounded-full border border-border/40 bg-muted/20 text-xs font-medium text-foreground outline-none focus:border-primary/80 transition-all"
                />
              </div>

              {/* Status pills */}
              <div className="flex items-center gap-1 bg-muted/30 p-1 rounded-full border border-border/40 text-[11px] font-bold">
                {["All", "Done", "In Progress"].map((st) => (
                  <button
                    key={st}
                    onClick={() => setStatusFilter(st)}
                    className={`px-3 py-1 rounded-full transition-all ${
                      statusFilter === st ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>



        {/* Project List / Grid View Display */}
        {viewMode === "list" ? (
          <div className="flex flex-col gap-4">
            {filteredProjects.map((p) => (
              <div
                key={p.id}
                onMouseEnter={() => setHoveredProject(p)}
                onMouseLeave={() => setHoveredProject(null)}
                className="p-6 md:p-8 rounded-3xl border border-border/40 bg-muted/10 hover:bg-muted/30 hover:border-primary/50 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6 group cursor-pointer"
              >
                {/* Left: ID & Title & Desc */}
                <div className="flex items-start md:items-center gap-6 flex-1">
                  <span className="text-2xl font-mono font-black text-muted-foreground/40 group-hover:text-primary transition-colors">
                    {p.id}
                  </span>
                  <div className="flex flex-col gap-2 max-w-xl">
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {p.title}
                      </h3>
                      <span className={`text-[9px] font-mono font-bold px-2.5 py-0.5 rounded-full border ${
                        p.status === "DONE"
                          ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                          : "bg-amber-500/10 text-amber-400 border-amber-500/30"
                      }`}>
                        {p.status}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>

                {/* Right: Tech Tags & Links */}
                <div className="flex flex-wrap md:flex-nowrap items-center gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {p.tech.map((t, i) => (
                      <span key={i} className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-md bg-background border border-border/40 text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full border border-border/40 bg-background hover:bg-foreground hover:text-background transition-colors"
                    title="View Source"
                  >
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="flex flex-col border border-border/40 bg-muted/20 hover:bg-muted/30 hover:border-primary/50 transition-all duration-500 rounded-[2rem] overflow-hidden group shadow-lg"
              >
                <div className="relative aspect-[16/10] overflow-hidden border-b border-border/20">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="text-[9px] font-mono font-bold tracking-widest text-foreground bg-background/80 backdrop-blur-md px-3 py-1 rounded-full border border-border/60">
                      {project.realm}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col gap-4 flex-1 justify-between">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {project.desc}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-[9px] font-mono font-semibold px-2 py-0.5 rounded bg-muted text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}