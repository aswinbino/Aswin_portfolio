import { useState, useEffect } from "react"
import { Code2, Bot, Database, Sparkles, Terminal, Flame, Zap, Rocket } from "lucide-react"

export default function HeroBox() {
  const [activeRole, setActiveRole] = useState(0);
  const [emojis, setEmojis] = useState([]);

  const roles = [
    {
      title: "Software Engineer",
      subtitle: "Crafting robust applications",
      icon: <Code2 className="w-5 h-5 text-sky-400" />,
      color: "border-sky-500/40 text-sky-400 bg-sky-500/10"
    },
    {
      title: "AI Engineer",
      subtitle: "Architect intelligent systems",
      icon: <Bot className="w-5 h-5 text-yellow-400" />,
      color: "border-yellow-500/40 text-yellow-400 bg-yellow-500/10"
    },
    {
      title: "Data Engineer",
      subtitle: "Building scalable pipelines",
      icon: <Database className="w-5 h-5 text-emerald-400" />,
      color: "border-emerald-500/40 text-emerald-400 bg-emerald-500/10"
    }
  ];

  const triggerEmojiBurst = () => {
    const burstIcons = ["⚡ BUG", "🤖 AI", "🚀 SHIP", "🔥 DATA", "💻 CODE", "✨ LLM", "🎯 RAG"];
    const newBurst = Array.from({ length: 8 }).map((_, i) => ({
      id: Date.now() + i + Math.random(),
      text: burstIcons[Math.floor(Math.random() * burstIcons.length)],
      tx: `${(Math.random() - 0.5) * 320}px`,
      ty: `${-100 - Math.random() * 220}px`,
      rot: `${(Math.random() - 0.5) * 60}deg`,
    }));

    setEmojis(prev => [...prev.slice(-16), ...newBurst]);
  };

  const handleRoleClick = (idx) => {
    setActiveRole(idx);
    triggerEmojiBurst();
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveRole(prev => (prev + 1) % roles.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [roles.length]);

  return (
    <div className="relative w-full max-w-2xl mx-auto my-8 flex flex-col items-center justify-center select-none">
      {/* Floating Emoji Particles */}
      <div className="absolute inset-0 pointer-events-none z-30 overflow-visible">
        {emojis.map((item) => (
          <span
            key={item.id}
            className="absolute left-1/2 top-1/2 px-3 py-1 rounded-full bg-foreground text-background text-[11px] font-mono font-black tracking-widest shadow-2xl animate-emoji-burst border border-primary/40 whitespace-nowrap"
            style={{
              "--tx": item.tx,
              "--ty": item.ty,
              "--rot": item.rot,
            }}
          >
            {item.text}
          </span>
        ))}
      </div>

      {/* Interactive Role Card Selector */}
      <div className="relative z-20 flex flex-wrap items-center justify-center gap-3 mb-6">
        {roles.map((role, idx) => {
          const isActive = activeRole === idx;
          return (
            <button
              key={idx}
              onClick={() => handleRoleClick(idx)}
              className={`flex items-center gap-3 px-5 py-2.5 rounded-full border text-xs font-semibold tracking-wide transition-all duration-500 backdrop-blur-md shadow-xl ${
                isActive
                  ? `${role.color} scale-105 shadow-primary/20 ring-2 ring-primary/40`
                  : "border-border/40 bg-background/60 text-muted-foreground hover:text-foreground hover:border-border/80"
              }`}
            >
              {role.icon}
              <div className="flex flex-col text-left">
                <span className="font-bold leading-none">{role.title}</span>
                <span className="text-[9px] opacity-75 font-mono leading-tight mt-0.5">{role.subtitle}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* 3D Wireframe Box Graphic */}
      <div 
        onClick={triggerEmojiBurst}
        className="relative w-72 h-44 md:w-96 md:h-56 cursor-pointer group perspective-1000"
      >
        {/* Box Lid / Open flap */}
        <div className="absolute inset-x-0 -top-8 h-12 bg-gradient-to-t from-zinc-800/80 to-transparent border-t-2 border-zinc-500/40 rounded-t-xl group-hover:-rotate-x-12 transition-transform duration-500 shadow-2xl flex items-center justify-center">
          <Sparkles className="w-5 h-5 text-sky-400 opacity-60 group-hover:opacity-100 animate-pulse" />
        </div>

        {/* Outer 3D Box Wireframe Container */}
        <div className="w-full h-full border-2 border-zinc-700/60 dark:border-zinc-400/30 rounded-2xl bg-gradient-to-b from-zinc-900/90 via-zinc-950/95 to-black p-6 flex flex-col items-center justify-between shadow-2xl group-hover:border-primary/60 transition-all duration-500 relative overflow-hidden backdrop-blur-xl">
          {/* Subtle inner grid lines */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8881_1px,transparent_1px),linear-gradient(to_bottom,#8881_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none opacity-30"></div>

          {/* Floating Role Glow Inside Box */}
          <div className="flex flex-col items-center gap-2 mt-4 relative z-10">
            <div className="p-3 rounded-2xl bg-primary/10 border border-primary/30 group-hover:scale-110 transition-transform duration-500 shadow-lg">
              {roles[activeRole].icon}
            </div>
            <h3 className="text-lg font-black tracking-tight text-foreground text-center">
              {roles[activeRole].title}
            </h3>
            <p className="text-xs font-mono text-muted-foreground text-center max-w-[220px]">
              {roles[activeRole].subtitle}
            </p>
          </div>

          {/* Interactive Hint */}
          <div className="relative z-10 flex items-center gap-2 text-[10px] font-mono text-primary/80 uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full border border-primary/20 group-hover:bg-primary/20 transition-colors">
            <Terminal className="w-3 h-3" /> Click Box to Release Stack
          </div>
        </div>
      </div>
    </div>
  );
}
