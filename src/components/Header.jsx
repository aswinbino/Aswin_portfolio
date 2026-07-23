import { useState, useEffect } from "react"
import { Sun, Moon, Menu, X } from "lucide-react"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"

function Header({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#project" },
    { name: "Services", href: "#services" },
    { name: "Resume", href: "#resume" },
  ]

  const socialLinks = [
    { icon: <FaGithub size={18} />, href: "https://github.com/aswinbino/Aswin_portfolio", label: "GitHub" },
    { icon: <FaLinkedin size={18} />, href: "#", label: "LinkedIn" },
    { icon: <FaInstagram size={18} />, href: "#", label: "Instagram" }
  ]

  return (
    <header className="fixed top-5 left-0 w-full z-50 px-6 md:px-12 flex justify-center pointer-events-none">
      <div 
        className={`w-full max-w-[85rem] px-6 py-3.5 flex justify-between items-center rounded-full border border-border/40 backdrop-blur-md transition-all duration-[400ms] pointer-events-auto ${
          scrolled 
            ? "bg-background/70 shadow-lg border-border/80" 
            : "bg-background/20"
        }`}
      >
        {/* Logo */}
        <a href="#hero" className="logo select-none">
          <h1 className="text-xl font-bold tracking-[2px] transition-colors">
            <span className="text-muted-foreground font-semibold">A</span>swin
          </h1>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8 list-none">
            {navItems.map((item) => (
              <li key={item.name}>
                <a 
                  href={item.href} 
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-primary after:transition-all hover:after:w-full"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Actions (Theme, Socials, Hamburger) */}
        <div className="flex items-center gap-4">
          {/* Socials - Desktop */}
          <div className="hidden lg:flex items-center gap-3.5 border-r border-border/60 pr-4">
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
            className="p-2 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground select-none"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors md:hidden"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div 
        className={`fixed inset-0 top-0 left-0 w-screen h-screen bg-background z-40 flex flex-col justify-center px-10 transition-all duration-[600ms] cubic-bezier(0.85,0,0.15,1) md:hidden pointer-events-auto ${
          mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
        }`}
      >
        <ul className="flex flex-col gap-6 list-none text-left">
          {navItems.map((item) => (
            <li key={item.name}>
              <a 
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-3xl font-black tracking-tight text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="absolute bottom-16 left-10 flex flex-col gap-6 w-full">
          <div className="w-[100px] h-[1px] bg-border"></div>
          <div className="flex items-center gap-5">
            {socialLinks.map((link, idx) => (
              <a 
                key={idx} 
                href={link.href} 
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
