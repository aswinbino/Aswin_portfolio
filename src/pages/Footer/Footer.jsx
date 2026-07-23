import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"

function Footer() {
  const socialLinks = [
    { icon: <FaGithub size={18} />, href: "https://github.com/aswinbino/Aswin_portfolio", label: "GitHub" },
    { icon: <FaLinkedin size={18} />, href: "#", label: "LinkedIn" },
    { icon: <FaInstagram size={18} />, href: "#", label: "Instagram" }
  ];

  return (
    <footer className="py-12 border-t border-border/20 bg-background text-muted-foreground select-none">
      <div className="max-w-[105rem] w-full mx-auto px-6 md:px-12 flex flex-col sm:flex-row justify-between items-center gap-6">
        
        {/* Left copyright */}
        <p className="text-xs font-medium font-mono tracking-wider">
          © {new Date().getFullYear()} ASWIN BINO. ALL RIGHTS RESERVED.
        </p>

        {/* Right Socials */}
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

      </div>
    </footer>
  );
}

export default Footer;