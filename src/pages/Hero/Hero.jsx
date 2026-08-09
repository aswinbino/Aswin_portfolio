import { useState, useEffect } from "react"
import { Zap, Bot, ArrowDownRight } from "lucide-react"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"

export default function Hero() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const options = { timeZone: "Asia/Kolkata", hour12: false, hour: '2-digit', minute: '2-digit' };
      const timeStr = new Intl.DateTimeFormat("en-US", options).format(new Date());
      setCurrentTime(timeStr);
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="hero" 
      className="relative min-h-screen w-full flex flex-col justify-center pt-32 pb-16 overflow-hidden select-none"
    >
      {/* 1. Main Typography Grid */}
      <div className="max-w-[105rem] w-full mx-auto px-6 md:px-12 flex flex-col gap-6 md:gap-8 justify-center flex-1">
        
        {/* Line 1: Tagline Left + Huge Text Right */}
        <div className="flex flex-col md:flex-row md:items-end justify-start md:justify-end gap-4 relative">
          <p className="text-[10px] md:text-xs text-muted-foreground text-start md:text-right leading-relaxed max-w-[200px] md:max-w-[220px] font-medium uppercase tracking-[0.2em] animate-fadeIn" style={{ animationDelay: "200ms" }}>
            Hi, I'm Aswin Bino. I build interactive digital experiences that combine performance and creative engineering.
          </p>
          
          <div className="relative">
            {/* Github floating icon */}
            <div className="absolute -top-6 right-2 text-primary/60 hover:text-primary z-20 animate-fadeIn hover:scale-110 transition-all" style={{ animationDelay: "400ms" }}>
              <a href="https://github.com/aswinbino/Aswin_portfolio" target="_blank" rel="noopener noreferrer" className="block">
                <FaGithub size={28} />
              </a>
            </div>
            <h1 className="text-[clamp(2.5rem,10vw,11rem)] font-black leading-[0.85] tracking-tighter text-shiny animate-fadeIn" style={{ animationDelay: "300ms" }}>
              FULL STACK /
            </h1>
          </div>
        </div>

        {/* Line 2: SOFTWARE */}
        <div className="flex flex-row items-center justify-start md:justify-end gap-4 relative">
          <h1 className="text-[clamp(2.5rem,10vw,11rem)] font-black leading-[0.85] tracking-tighter text-shiny animate-fadeIn" style={{ animationDelay: "400ms" }}>
            SOFTWARE
          </h1>
        </div>

        {/* Line 3: DEVELOPER with Zap Icon */}
        <div className="flex flex-row items-center justify-start md:justify-end gap-4 relative">
          <div className="relative">
            {/* Instagram floating icon */}
            <div className="absolute -top-10 left-4 text-primary/60 hover:text-primary z-20 animate-fadeIn hover:scale-110 transition-all" style={{ animationDelay: "600ms" }}>
              <a href="#" className="block">
                <FaInstagram size={28} />
              </a>
            </div>

            <h1 className="text-[clamp(2.5rem,10vw,11rem)] flex items-center font-black leading-[0.85] tracking-tighter text-shiny animate-fadeIn" style={{ animationDelay: "500ms" }}>
              <span>DEVE</span>
              <div className="mx-[0.03em] relative cursor-pointer group flex items-center justify-center">
                <Zap className="w-[0.85em] h-[0.85em] text-sky-400 fill-sky-400/10 group-hover:text-sky-300 group-hover:fill-sky-300/20 transition-all duration-300 animate-pulse" />
              </div>
              <span>LOPER</span>
            </h1>
          </div>
        </div>

        {/* Line 4: ENGINEER with Bot Icon + Subtext Right */}
        <div className="flex flex-col md:flex-row md:items-start justify-start md:justify-end gap-6 relative">
          <h1 className="text-[clamp(2.5rem,10vw,11rem)] flex items-center font-black leading-[0.85] tracking-tighter text-shiny animate-fadeIn" style={{ animationDelay: "700ms" }}>
            <span>EN</span>
            <div className="mx-[0.03em] relative cursor-pointer group flex items-center justify-center">
              <Bot className="w-[0.85em] h-[0.85em] text-yellow-500 fill-yellow-500/10 group-hover:text-yellow-400 group-hover:fill-yellow-400/20 transition-all duration-300" />
            </div>
            <span>GINEER</span>
          </h1>

          <p className="text-[10px] md:text-xs text-muted-foreground pt-2 md:pt-6 leading-relaxed max-w-[250px] md:max-w-[200px] font-medium uppercase tracking-widest animate-fadeIn" style={{ animationDelay: "800ms" }}>
            Open to all forms of remote collaboration, internships, and technical contracts.
          </p>
        </div>

        {/* Line 5: PROMPT ENGINEER */}
        <div className="flex flex-row items-center justify-start md:justify-end gap-4 relative">
          <h2 className="text-[clamp(1.5rem,5vw,6rem)] flex items-center font-black leading-[0.85] tracking-tighter text-shiny animate-fadeIn opacity-70" style={{ animationDelay: "900ms" }}>
            <span>PROMPT EN</span>
            <div className="mx-[0.03em] relative cursor-pointer group flex items-center justify-center">
              <Zap className="w-[0.85em] h-[0.85em] text-purple-400 fill-purple-400/10 group-hover:text-purple-300 group-hover:fill-purple-300/20 transition-all duration-300 animate-pulse" />
            </div>
            <span>GINEER</span>
          </h2>
        </div>

      </div>

      {/* 2. Bottom Meta-Bar */}
      <div className="mx-auto max-w-[105rem] w-full px-6 md:px-12 mt-12 md:mt-24">
        <div className="flex items-center justify-between gap-6 border-t border-border/20 pt-8 animate-fadeIn" style={{ animationDelay: "900ms" }}>
          
          {/* Location / Year info */}
          <div className="text-[10px] md:text-xs font-bold tracking-[0.3em] text-muted-foreground uppercase">
            KERALA, IN — {currentTime ? `${currentTime} IST` : "2026"}
          </div>

          {/* Magnetic Action Buttons */}
          <div className="flex items-center gap-4">
            <a 
              href="#contact" 
              className="group relative flex items-center justify-end"
            >
              <div className="relative flex items-center bg-foreground text-background h-12 w-12 group-hover:w-44 rounded-full transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] overflow-hidden shadow-xl">
                <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[10px] font-black uppercase tracking-widest pl-6 pr-12">
                  Let's Talk
                </span>
                <div className="absolute right-0 flex items-center justify-center w-12 h-12 group-hover:rotate-45 transition-transform duration-500">
                  <ArrowDownRight className="w-5 h-5 text-background" />
                </div>
              </div>
            </a>
            <a 
              href={`${import.meta.env.BASE_URL}AswinBino_Resume.pdf`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group relative flex items-center justify-end"
            >
              <div className="relative flex items-center border border-border/80 bg-muted/20 text-foreground h-12 w-12 group-hover:w-44 rounded-full transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] overflow-hidden shadow-xl">
                <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[10px] font-black uppercase tracking-widest pl-6 pr-12">
                  View Resume
                </span>
                <div className="absolute right-0 flex items-center justify-center w-12 h-12 group-hover:translate-x-1 transition-transform duration-500">
                  <span className="text-sm">📄</span>
                </div>
              </div>
            </a>
          </div>

        </div>
      </div>

      {/* 3. Floating "Available for Opportunities" Side Badge */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20 hidden lg:flex items-center animate-fadeIn" style={{ animationDelay: "1000ms" }}>
        <div className="bg-foreground text-background py-8 px-3.5 text-[9px] font-black uppercase tracking-[0.4em] shadow-2xl rounded-r-2xl border-r border-y border-border/40 select-none">
          <span className="rotate-0 [writing-mode:vertical-rl] leading-none">
            AVAILABLE FOR OPPORTUNITY
          </span>
        </div>
      </div>

    </section>
  )
}