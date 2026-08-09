import { useState } from "react"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"
import { ArrowUp, ChevronDown } from "lucide-react"

function Footer() {
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);

  const socialLinks = [
    { icon: <FaGithub size={18} />, href: "https://github.com/aswinbino/Aswin_portfolio", label: "GitHub" },
    { icon: <FaLinkedin size={18} />, href: "#", label: "LinkedIn" },
    { icon: <FaInstagram size={18} />, href: "#", label: "Instagram" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-border/20 bg-background text-muted-foreground select-none relative z-10">
      <div className="max-w-[105rem] w-full mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left copyright */}
        <p className="text-xs font-mono font-bold tracking-wider text-muted-foreground">
          © {new Date().getFullYear()} ASWIN BINO. ALL RIGHTS RESERVED.
        </p>

        {/* Center Social Links */}
        <div className="flex items-center gap-5">
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

        {/* Right Actions: Back to Top & More Links Dropdown */}
        <div className="flex items-center gap-3 relative">
          
          {/* More Links Dropdown */}
          <div className="relative">
            <button
              onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
              className="px-4 py-2 rounded-full border border-border/40 bg-muted/20 text-xs font-mono font-bold uppercase tracking-wider text-foreground hover:bg-muted/60 transition-colors flex items-center gap-1.5"
            >
              MORE LINKS
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${moreDropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {moreDropdownOpen && (
              <div className="absolute bottom-full right-0 mb-3 w-48 p-2 rounded-2xl glass-panel shadow-2xl border border-border/60 z-50 flex flex-col gap-1 text-xs font-mono font-bold animate-fadeIn">
                <a href="#hero" className="p-2.5 rounded-xl hover:bg-muted/60 text-foreground transition-colors">
                  Home (#hero)
                </a>
                <a href="#about" className="p-2.5 rounded-xl hover:bg-muted/60 text-foreground transition-colors">
                  About & Skills
                </a>
                <a href="#services" className="p-2.5 rounded-xl hover:bg-muted/60 text-foreground transition-colors">
                  Services
                </a>
                <a href="#project" className="p-2.5 rounded-xl hover:bg-muted/60 text-foreground transition-colors">
                  Projects Archive
                </a>
                <a href="#certifications" className="p-2.5 rounded-xl hover:bg-muted/60 text-foreground transition-colors">
                  Certifications
                </a>
                <a href="#analytics" className="p-2.5 rounded-xl hover:bg-muted/60 text-foreground transition-colors">
                  Analytics
                </a>
                <a href="#contact" className="p-2.5 rounded-xl hover:bg-muted/60 text-foreground transition-colors">
                  Contact Form
                </a>
              </div>
            )}
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-foreground text-background hover:opacity-90 transition-opacity shadow-lg"
            aria-label="Scroll to top"
            title="Scroll to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>

      </div>
    </footer>
  );
}

export default Footer;