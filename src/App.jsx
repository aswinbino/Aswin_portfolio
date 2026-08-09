import { useState, useEffect } from "react"
import Header from "./components/Header"
import Hero from "./pages/Hero/Hero"
import About from "./pages/About/About"
import Services from "./pages/Services/Services"
import Project from "./pages/Project/Project"
import CertificationsSection from "./components/CertificationsSection"
import AnalyticsSection from "./components/AnalyticsSection"
import Contact from "./pages/Contact/Contact"
import Footer from "./pages/Footer/Footer"

function App() {
  const [loading, setLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("portfolio-theme") || "dark";
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      root.style.colorScheme = "dark";
    } else {
      root.classList.remove("dark");
      root.style.colorScheme = "light";
    }
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  // Scroll Progress & Reveal Observer Effect
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(currentProgress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (loading) return;

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -50px 0px",
      threshold: 0.08,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const revealElements = document.querySelectorAll(".reveal-on-scroll");
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [loading]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className="relative min-h-screen w-full bg-background text-foreground transition-colors duration-500 overflow-x-hidden selection:bg-primary/20">
      
      {/* Scroll Progress Bar Top Line */}
      <div 
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-sky-400 via-purple-500 to-emerald-400 z-[10000] transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      {/* 1. Preloader Overlay */}
      <div 
        className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0a0f] text-white transition-all duration-[800ms] ease-[cubic-bezier(0.85,0,0.15,1)] ${
          loading ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none translate-y-[-100%]"
        }`}
      >
        <div className="relative flex flex-col items-center justify-center max-w-[300px]">
          <svg 
            className="w-48 h-24 text-white stroke-current stroke-[4px]" 
            viewBox="0 0 400 150" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M60 110 C 65 30, 95 20, 110 20 C 130 20, 135 60, 125 110 M100 70 L 140 70 M155 90 C 165 75, 180 75, 185 90 C 190 105, 200 105, 205 90 M220 75 L 235 110 L 250 75 L 265 110 M280 75 L 280 110 M295 110 C 305 75, 320 75, 325 110" 
              style={{
                strokeDasharray: 800,
                strokeDashoffset: loading ? 800 : 0,
                animation: loading ? "drawPath 2.2s cubic-bezier(0.4, 0, 0.2, 1) forwards" : "none",
                strokeLinecap: "round",
                strokeLinejoin: "round"
              }}
            />
          </svg>
          <div className="mt-4 flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-white/40 animate-ping"></span>
          </div>
        </div>
      </div>

      {/* 2. Background Dot Grid */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle,_#888_0.6px,_transparent_0.6px)] dark:bg-[radial-gradient(circle,_#444_0.6px,_transparent_0.6px)] opacity-[0.15] [background-size:28px_28px] pointer-events-none"></div>

      {/* 3. Radial Gradient Spotlights */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <div 
          className="absolute top-0 left-0 w-[560px] h-[1380px] origin-top-left -translate-y-[300px] -rotate-[45deg] opacity-[0.08] dark:opacity-[0.12] transition-opacity duration-1000"
          style={{
            background: "radial-gradient(50% 50% at 50% 50%, hsla(202, 100%, 70%, 0.15) 0%, hsla(202, 100%, 70%, 0.05) 50%, transparent 100%)"
          }}
        ></div>
        <div 
          className="absolute top-0 right-0 w-[560px] h-[1380px] origin-top-right -translate-y-[300px] rotate-[45deg] opacity-[0.08] dark:opacity-[0.12] transition-opacity duration-1000"
          style={{
            background: "radial-gradient(50% 50% at 50% 50%, hsla(340, 100%, 70%, 0.15) 0%, hsla(340, 100%, 70%, 0.05) 50%, transparent 100%)"
          }}
        ></div>
      </div>

      {/* 4. Core Layout Container */}
      <div className={`relative z-10 flex flex-col min-h-screen transition-all duration-1000 ${
        loading ? "opacity-0 translate-y-8" : "opacity-100 translate-y-0"
      }`}>
        <Header theme={theme} toggleTheme={toggleTheme} />
        <main className="flex-1 w-full flex flex-col">
          <Hero />
          <div className="reveal-on-scroll"><About /></div>
          <div className="reveal-on-scroll"><Services /></div>
          <div className="reveal-on-scroll"><Project /></div>
          <div className="reveal-on-scroll"><CertificationsSection /></div>
          <div className="reveal-on-scroll"><AnalyticsSection /></div>
          <div className="reveal-on-scroll"><Contact /></div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;