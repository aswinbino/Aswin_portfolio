import { useState, useEffect } from "react"
import { 
  Sun, Moon, Menu, X, Maximize2, Minimize2, Globe, 
  FolderKanban, Briefcase, Cpu, Award, Image, FileText, BookOpen, MessageSquare 
} from "lucide-react"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"

function Header({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [timeString, setTimeString] = useState("");

  // Live Digital Clock (HH:MM:SS)
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      setTimeString(`${hours}:${minutes}:${seconds}`);
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  // Scroll Detection
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fullscreen Toggle
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
        setIsFullscreen(false);
      }
    }
  };

  const aboutMenuItems = [
    {
      title: "Project",
      desc: "Discover my latest builds",
      href: "#project",
      icon: <FolderKanban className="w-4 h-4 text-sky-400" />
    },
    {
      title: "Skill",
      desc: "Technical expertise",
      href: "#about",
      icon: <Cpu className="w-4 h-4 text-emerald-400" />
    },
    {
      title: "Achievement",
      desc: "Milestones reached",
      href: "#certifications",
      icon: <Award className="w-4 h-4 text-purple-400" />
    },
    {
      title: "Services",
      desc: "Engineering disciplines",
      href: "#services",
      icon: <Briefcase className="w-4 h-4 text-amber-400" />
    },
    {
      title: "Resume",
      desc: "View or download my CV",
      href: `${import.meta.env.BASE_URL}AswinBino_Resume.pdf`,
      target: "_blank",
      icon: <FileText className="w-4 h-4 text-blue-400" />
    },
    {
      title: "Analytics",
      desc: "GitHub & code metrics",
      href: "#analytics",
      icon: <BookOpen className="w-4 h-4 text-teal-400" />
    },
    {
      title: "Contact",
      desc: "Get in touch directly",
      href: "#contact",
      icon: <MessageSquare className="w-4 h-4 text-indigo-400" />
    }
  ];

  const socialLinks = [
    { icon: <FaGithub size={17} />, href: "https://github.com/aswinbino/Aswin_portfolio", label: "GitHub" },
    { icon: <FaLinkedin size={17} />, href: "#", label: "LinkedIn" },
    { icon: <FaInstagram size={17} />, href: "#", label: "Instagram" }
  ];

  return (
    <header className="fixed top-4 left-0 w-full z-50 px-4 md:px-8 flex justify-center pointer-events-none">
      <div 
        className={`w-full max-w-[85rem] px-5 py-3 flex justify-between items-center rounded-full border border-border/40 backdrop-blur-xl transition-all duration-500 pointer-events-auto ${
          scrolled 
            ? "bg-background/80 shadow-2xl border-border/80" 
            : "bg-background/30"
        }`}
      >
        {/* Left: Digital Clock */}
        <div className="flex items-center gap-3 select-none">
          <a href="#hero" className="flex items-center gap-2 group">
            <span className="text-xs md:text-sm font-mono font-bold tracking-widest px-3 py-1 rounded-full bg-muted/40 border border-border/40 text-foreground group-hover:border-primary/60 transition-colors">
              {timeString || "22:28:22"}
            </span>
          </a>
        </div>

        {/* Center Navigation Pill with Mega Dropdown */}
        <nav className="hidden md:flex items-center gap-2 relative">
          <div className="flex items-center bg-muted/30 border border-border/40 rounded-full px-2 py-1 gap-1">
            
            {/* Home */}
            <a 
              href="#hero" 
              className="px-4 py-1.5 rounded-full text-xs font-bold tracking-wide text-foreground hover:bg-muted/60 transition-colors"
            >
              Home
            </a>

            {/* About Mega Dropdown Trigger */}
            <div 
              className="relative"
              onMouseEnter={() => setAboutDropdownOpen(true)}
              onMouseLeave={() => setAboutDropdownOpen(false)}
            >
              <button 
                onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                className="px-4 py-1.5 rounded-full text-xs font-bold tracking-wide text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors flex items-center gap-1.5"
              >
                About
                <span className="text-[9px] opacity-70">▼</span>
              </button>

              {/* Mega Dropdown Menu */}
              {aboutDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[460px] p-4 rounded-3xl glass-panel shadow-2xl border border-border/60 grid grid-cols-2 gap-2 z-50 animate-fadeIn">
                  {aboutMenuItems.map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      target={item.target || undefined}
                      rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
                      className="p-3 rounded-2xl bg-muted/20 hover:bg-muted/60 border border-transparent hover:border-border/60 transition-all flex items-start gap-3 group"
                    >
                      <div className="p-2 rounded-xl bg-background border border-border/40 group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      <div className="flex flex-col text-left">
                        <span className="text-xs font-bold text-foreground group-hover:text-primary transition-colors">
                          {item.title}
                        </span>
                        <span className="text-[10px] text-muted-foreground font-medium leading-tight">
                          {item.desc}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Contact */}
            <a 
              href="#contact" 
              className="px-4 py-1.5 rounded-full text-xs font-bold tracking-wide text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors"
            >
              Contact
            </a>

          </div>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3 select-none">
          
          {/* Fullscreen Button */}
          <button
            onClick={toggleFullscreen}
            className="p-2 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors hidden sm:flex"
            aria-label="Toggle Fullscreen"
            title="Toggle Fullscreen"
          >
            {isFullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
          </button>

          {/* Social Links (Desktop) */}
          <div className="hidden lg:flex items-center gap-3 border-l border-r border-border/40 px-3">
            {socialLinks.map((link, idx) => (
              <a 
                key={idx} 
                href={link.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label={link.label}
                className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors md:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div 
        className={`fixed inset-0 top-0 left-0 w-screen h-screen bg-background/95 backdrop-blur-2xl z-40 flex flex-col justify-center px-8 transition-all duration-500 md:hidden pointer-events-auto ${
          mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
        }`}
      >
        <div className="grid grid-cols-2 gap-3 max-w-md mx-auto w-full mb-12">
          {aboutMenuItems.map((item) => (
            <a
              key={item.title}
              href={item.href}
              target={item.target || undefined}
              rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
              onClick={() => setMobileMenuOpen(false)}
              className="p-4 rounded-2xl border border-border/50 bg-muted/20 flex flex-col gap-2"
            >
              {item.icon}
              <span className="text-sm font-bold text-foreground">{item.title}</span>
              <span className="text-[10px] text-muted-foreground">{item.desc}</span>
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;
