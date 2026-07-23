import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
  FaJava,
  FaPython
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiFirebase,
  SiMongodb,
  SiExpress,
  SiMysql,
  SiFastapi,
  SiSocketdotio,
  SiOpenai
} from "react-icons/si";

import { Bot, Sparkles } from "lucide-react";

function Skills() {
  const row1 = [
    { name: "React.js", icon: <FaReact className="text-[#61dafb]" /> },
    { name: "JavaScript (ES6+)", icon: <FaJs className="text-[#f7df1e]" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06b6d4]" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-[#e34f26]" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-[#1572b6]" /> },
    { name: "Git", icon: <FaGitAlt className="text-[#f05032]" /> },
    { name: "GitHub", icon: <FaGithub className="text-foreground" /> }
  ];

  const row2 = [
    { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
    { name: "Express.js", icon: <SiExpress className="text-foreground" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-[#47a248]" /> },
    { name: "FastAPI", icon: <SiFastapi className="text-[#009688]" /> },
    { name: "Python", icon: <FaPython className="text-[#3776ab]" /> },
    { name: "Java", icon: <FaJava className="text-[#007396]" /> },
    { name: "Socket.io", icon: <SiSocketdotio className="text-foreground" /> },
    { name: "REST APIs", icon: <Sparkles className="text-amber-400" /> }
  ];

  const row3 = [
    { name: "Generative AI", icon: <SiOpenai className="text-[#10a37f]" /> },
    { name: "Prompt Engineering", icon: <Bot className="text-purple-400" /> },
    { name: "MySQL", icon: <SiMysql className="text-[#4479a1]" /> },
    { name: "Firebase", icon: <SiFirebase className="text-[#ffca28]" /> }
  ];

  const renderCarouselRow = (items, directionTrackClass = "track-left") => {
    // Duplicate items to ensure smooth 100% infinite loop wrapping
    const doubleItems = [...items, ...items, ...items, ...items];
    return (
      <div className="marquee-wrapper fade-mask py-2">
        <div className={`marquee-track ${directionTrackClass}`}>
          {doubleItems.map((item, idx) => (
            <div 
              key={idx}
              className="badge-float flex items-center gap-3 border border-border/40 bg-muted/20 hover:bg-muted/40 dark:bg-muted/10 dark:hover:bg-muted/30 px-6 py-3 rounded-full hover:border-primary/50 transition-all duration-300 backdrop-blur-md select-none"
            >
              <span className="text-xl md:text-2xl transition-transform duration-300">
                {item.icon}
              </span>
              <span className="text-xs md:text-sm font-semibold tracking-wide text-foreground whitespace-nowrap">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full flex flex-col gap-4 overflow-hidden mt-6">
      {/* Row 1: Moves Left */}
      {renderCarouselRow(row1, "track-left")}
      {/* Row 2: Moves Right */}
      {renderCarouselRow(row2, "track-right")}
      {/* Row 3: Moves Left */}
      {renderCarouselRow(row3, "track-left")}
    </div>
  );
}

export default Skills;