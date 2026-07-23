import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaNodeJs,
  FaJava
} from "react-icons/fa";

import {
  SiUnity,
  SiTailwindcss,
  SiFirebase,
  SiMongodb,
  SiExpress,
  SiMysql,
  SiPhp
} from "react-icons/si";

function Skills() {
  const row1 = [
    { name: "HTML5", icon: <FaHtml5 className="text-[#e34f26]" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-[#1572b6]" /> },
    { name: "JavaScript", icon: <FaJs className="text-[#f7df1e]" /> },
    { name: "React", icon: <FaReact className="text-[#61dafb]" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06b6d4]" /> },
    { name: "Figma", icon: <FaFigma className="text-[#f24e1e]" /> },
    { name: "Git", icon: <FaGitAlt className="text-[#f05032]" /> },
    { name: "GitHub", icon: <FaGithub className="text-foreground" /> }
  ];

  const row2 = [
    { name: "Java", icon: <FaJava className="text-[#007396]" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
    { name: "Express", icon: <SiExpress className="text-foreground" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-[#47a248]" /> },
    { name: "Firebase", icon: <SiFirebase className="text-[#ffca28]" /> },
    { name: "MySQL", icon: <SiMysql className="text-[#4479a1]" /> },
    { name: "PHP", icon: <SiPhp className="text-[#777bb4]" /> },
    { name: "Unity", icon: <SiUnity className="text-foreground" /> }
  ];

  const renderMarqueeRow = (items, directionClass = "") => {
    // Duplicate items to ensure smooth infinite loop wrapping
    const doubleItems = [...items, ...items, ...items];
    return (
      <div className="marquee-container py-3">
        <div className={`marquee-content ${directionClass}`}>
          {doubleItems.map((item, idx) => (
            <div 
              key={idx}
              className="flex items-center gap-3 border border-border/40 bg-muted/20 hover:bg-muted/40 dark:bg-muted/10 dark:hover:bg-muted/20 px-6 py-3 rounded-full hover:scale-105 hover:border-border transition-all duration-300 cursor-pointer select-none"
            >
              <span className="text-xl md:text-2xl transition-transform duration-300">
                {item.icon}
              </span>
              <span className="text-xs md:text-sm font-semibold tracking-wide text-foreground">
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
      {renderMarqueeRow(row1)}
      {renderMarqueeRow(row2, "reverse")}
    </div>
  );
}

export default Skills;