import img1 from "../../assets/images/Cleveroad.jpg";
import img2 from "../../assets/images/Capture d'écran 2025-10-22 182207.png";
import img3 from "../../assets/images/Weather Forecast Dashboard.jpg";
import img4 from "../../assets/images/WordPress dashboard design concept.jpg";
import img5 from "../../assets/images/Game Dashboard Design.jpg";
import img6 from "../../assets/images/Task manager app.jpg";

const projects = [
  {
    title: "E-Commerce Website",
    img: img1,
    desc: "Modern online store with product filtering, cart, and payment system.",
    skills: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "Portfolio Website",
    img: img2,
    desc: "Personal portfolio to showcase my design and coding projects.",
    skills: ["HTML", "CSS", "Bootstrap"]
  },
  {
    title: "Weather App",
    img: img3,
    desc: "Responsive app showing real-time weather data using API integration.",
    skills: ["HTML", "CSS", "API"]
  },
  {
    title: "Blog Website",
    img: img4,
    desc: "Clean and simple blogging platform with markdown support.",
    skills: ["HTML", "Tailwind", "JavaScript"]
  },
  {
    title: "Game Landing Page",
    img: img5,
    desc: "Landing page for a game with animations and parallax effects.",
    skills: ["HTML", "CSS", "GSAP"]
  },
  {
    title: "Task Manager",
    img: img6,
    desc: "Task tracking web app with CRUD features and clean UI.",
    skills: ["HTML", "CSS", "JS"]
  }
];

export default function Project() {
  return (
    <section className="my-[70px] mx-auto max-w-[1200px] p-[40px] reveal" id="project">
      <div className="mb-[70px] text-[42px] text-[#625f5f] text-center relative after:content-[''] after:w-[120px] after:h-[3px] after:bg-[#3e3e3e] after:block after:mt-[15px] after:mx-auto after:rounded-[2px]">
        <h2>Project</h2>
      </div>

      <div className="grid grid-cols-3 gap-[30px]">
        {projects.map((project, index) => (
          <div className="bg-[#f7f7f7] rounded-[15px] overflow-hidden transition-all duration-[350ms] shadow-[0_8px_25px_rgba(0,0,0,0.08)] hover:-translate-y-[10px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] group/card" key={index}>
            <div className="overflow-hidden">
                <img src={project.img} alt={project.title} className="w-full h-[180px] object-cover transition-transform duration-400 group-hover/card:scale-105" />
            </div>

            <h3 className="text-[20px] m-[15px] text-[#333]">{project.title}</h3>

            <p className="mx-[15px] mb-[15px] text-[14px] text-[#666] leading-[1.5]">{project.desc}</p>

            <div className="flex gap-[8px] flex-wrap justify-center mb-[12px]">
              {project.skills.map((skill, i) => (
                <a href="#" key={i} className="text-[12px] px-[12px] py-[5px] bg-[#222] text-[#fff] rounded-[20px] no-underline transition-colors duration-300 hover:bg-[#555]">{skill}</a>
              ))}
            </div>

            <div className="flex justify-center gap-[12px] pb-[18px]">
              <a href="#" className="px-[16px] py-[7px] rounded-[25px] border border-[#333] no-underline text-[13px] text-[#333] transition-colors duration-300 hover:bg-[#333] hover:text-[#fff]">
                <i className="fab fa-github"></i> GitHub
              </a>
              <a href="#" className="px-[16px] py-[7px] rounded-[25px] border border-[#333] no-underline text-[13px] text-[#333] transition-colors duration-300 hover:bg-[#333] hover:text-[#fff]">
                <i className="fas fa-external-link-alt"></i> Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}